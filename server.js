import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();
import * as data from './data.js';
const saasSolutions = data.default || data;

// Precompute solution names
const solutionNames = new Set(saasSolutions.map(solution => solution.name));

const app = express();
const port = 3000;

// Load environment variables
const apiKey = process.env.OPENROUTER_API_KEY;
const model = "liquid/lfm-7b";
// other free models to use rate limited, google/gemini-2.0-flash-lite-preview-02-05:free, google/gemini-flash-1.5-8b-exp

// Middleware to enable CORS
app.use(express.static('public'));
app.use(express.json());

// API endpoint to serve all SaaS solutions
app.get('/api/solutions', (req, res) => {
  res.json(saasSolutions);
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  next();
});

// Function to call OpenRouter API and assess semantic relevance
async function getKeywordsFromAI(query, relevantSolutions) {
  try {
    const saasSolutionList = relevantSolutions.map(solution => 
      `- ${solution.name}: ${solution.description} (${solution.keywords.join(', ')})`
    ).join('\n');

    const prompt = `You are an expert at recommending SaaS solutions to users based on their needs. A user is looking for a SaaS solution with the following query: "${query}".
    Considering the following criteria: critical features they might need (like pricing, usability, integration).
    Here is a list of available SaaS solutions with their descriptions and keywords:
    ${saasSolutionList}
    Based on the user's query, which of these SaaS solutions would you recommend?
    Respond with a comma-separated list of the names of the recommended solutions. If none of the solutions are relevant, respond with "None".`;

    console.log("Prompt being sent to OpenRouter:", prompt);

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            "role": "user",
            "content": prompt,
          },
        ],
      }),
    });

    const openrouterData = await response.json();
    console.log(
      `OpenRouter API data:\n${JSON.stringify(openrouterData, null, 2)}`
    );
    const recommendations = openrouterData?.choices?.[0]?.message?.content || "None";
    return { recommendations: recommendations.split(",").map(s => s.trim()), model: model };
  } catch (error) {
    console.error("Error calling OpenRouter API:", error);
    return { recommendations: ["None"], model: model };
  }
}

const fallbackModels = ["google/gemma-2-9b-it:free", "google/gemini-2.0-flash-lite-preview-02-05:free", "google/gemini-flash-1.5-8b-exp"];


import nlp from 'compromise';
import MiniSearch from 'minisearch'

function extractCategories(query) {
  const doc = nlp(query);
  let categories = doc.out('terms');
  const stopWords = ['a', 'an', 'the', 'is', 'are', 'was', 'were', 'and', 'or', 'but', 'of', 'in', 'on', 'at', 'to', 'for', 'from', 'by'];
  categories = categories.filter(category => !stopWords.includes(category));
  console.log("Extracted categories:", categories);
  return categories;
}

// Create a MiniSearch index
const index = new MiniSearch({
  fields: ['name', 'description', 'keywords'],
  storeFields: ['name', 'description', 'keywords']
})

// Add software data to the index
saasSolutions.forEach(software => {
  const dataToIndex = {
    id: software.id, // Required field
    name: software.name,
    description: software.description,
    keywords: software.keywords.join(' ') // Join keywords into a string
  };
  console.log("Indexing:", dataToIndex);
  index.add(dataToIndex);
})

// Function to generate recommendations based on semantic relevance
async function generateRecommendations(query) {
  if (!saasSolutions) {
    console.error("saasSolutions is undefined");
    return [];
  }

  console.time("generateRecommendations");
  let currentModel = model;

  // Extract categories from the query
  const categories = extractCategories(query);

  // Use MiniSearch to get a subset of relevant software solutions
  const miniSearchResults = index.search(categories.join(' '), { 
    limit: 10,
    // Customize the scoring function
    searchOptions: {
      weights: {
        name: 3,
        description: 2,
        keywords: 1
      }
    }
  });
  console.log("MiniSearch results:", miniSearchResults);

  // Filter saasSolutions based on MiniSearch results
  const relevantSolutions = miniSearchResults.map(result => saasSolutions.find(solution => solution.name === result.name));
  console.log("Relevant solutions after MiniSearch:", relevantSolutions);

  // Get recommendations from AI for the filtered solutions
  let aiResponse = await getKeywordsFromAI(query, relevantSolutions); // Pass the original query
  console.log("AI recommendations:", aiResponse.recommendations);
  let recommendedSolutions = aiResponse.recommendations;

  // Convert recommendedSolutions to a Set for faster lookups
  const recommendedSet = new Set(recommendedSolutions);

  // Filter the relevantSolutions array to only include the recommended solutions
  const finalRelevantSolutions = relevantSolutions.filter(solution =>
    Array.from(recommendedSet).some(rec => rec.includes(solution.name))
  );
  console.log("Final relevant solutions:", finalRelevantSolutions);

  console.timeEnd("generateRecommendations");
  // Return the names of the relevant solutions, including pricing
  return { recommendations: finalRelevantSolutions.map(solution => ({ name: solution.name, pricing: solution.pricing })), model: model };
}

// API endpoint for search
app.post('/api/search', async (req, res) => {
  const query = req.body.query;

  try {
    const startTime = Date.now();
    const { recommendations, model } = await generateRecommendations(query);
    const endTime = Date.now();
    const generateRecommendationsTime = endTime - startTime;

    res.json({ results: recommendations, model: model, generateRecommendationsTime: generateRecommendationsTime });
  } catch (error) {
    console.error("Error processing search request:", error);
    res.status(500).json({ results: 'An error occurred while processing your request.', model: model });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
