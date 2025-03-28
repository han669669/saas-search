# SaaS Recommendation Engine

## Overview

The SaaS Recommendation Engine is a web application designed to help users find the most relevant SaaS (Software as a Service) solutions based on their search queries. This project leverages Natural Language Processing (NLP) and AI to understand user needs and recommend appropriate software from a predefined database.

## Features

- **NLP-Based Query Analysis**: Extracts relevant categories from user queries using the `compromise` library.
- **Efficient Search**: Utilizes `MiniSearch` for fast and efficient searching of SaaS solutions.
- **AI-Powered Recommendations**: Integrates with the OpenRouter API to rank and recommend SaaS solutions based on semantic relevance.
- **Scalable Architecture**: Designed to handle a growing database of SaaS solutions without compromising performance.
- **User-Friendly API**: Provides a simple API endpoint for searching and retrieving recommendations.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/han669669/saas-search.git
   cd saas-recommendation-engine
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your OpenRouter API key:
   ```
   OPENROUTER_API_KEY=your_api_key_here
   ```

4. **Start the Server**:
   ```bash
   npm start
   ```

5. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

## Usage

- **API Endpoint**:
  - **POST /search**: Accepts a JSON payload with a `query` field containing the user's search query. Returns a list of recommended SaaS solutions.

  Example Request:
  ```json
  {
    "query": "i need help with counting my money"
  }
  ```

  Example Response:
  ```json
  {
    "results": ["Software A", "Software B"],
    "model": "liquid/lfm-7b",
    "generateRecommendationsTime": 1234
  }
  ```

## Technologies Used

- **Express.js**: Web framework for Node.js.
- **Compromise**: NLP library for text processing.
- **MiniSearch**: Lightweight full-text search engine.
- **OpenRouter API**: AI model API for generating recommendations.
- **dotenv**: Environment variable management.

## Contributing

Want to see your SaaS solution listed and recommended?  Contribute to our `data.js` file by submitting a pull request!

Here's how:

1.  **Fork the repository.**
2.  **Edit `data.js`:** Add your SaaS solution's information to the file.  Make sure to include the name, a brief description, pricing, and category.
3.  **Submit a pull request:**  Will review your submission and add it to the list !

or simply dm me on twitter(x) or email me with your SaaS solution's information and I'll add it for you !

4.  **Direct Message (DM) me on Twitter(x):**  [craftedbyhan](https://x.com/intent/follow?screen_name=bbqbbq669)
5.  **Email me:**  [contact@craftedbyhan.xyz](mailto:contact@craftedbyhan.xyz)

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please contact [contact@craftedbyhan.xyz](mailto:contact@craftedbyhan.xyz).
