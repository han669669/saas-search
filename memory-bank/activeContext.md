## Active Context

**Current Work Focus:** Enhancing search functionality with local NLP and search libraries.

**Recent Changes:**
*   Replaced `FlexSearch` with `minisearch` for local indexing and search.
*   Implemented category extraction using the `compromise` library.
*   Modified the `generateRecommendations` function to use `minisearch` for initial filtering.
*   Modified the `getKeywordsFromAI` function to only send relevant solutions to the OpenRouter API.
*   Added a stop word filter to the `extractCategories` function.
*   Customized the scoring function in `minisearch` to prioritize different fields.
*   Improved the filtering logic after the AI call to prevent correct solutions from being filtered out.
*   Added extensive logging for debugging and verification.
*   Created a `README.md` file to document the project.

**Next Steps:**
*   Explore caching strategies to further improve loading times.
*   Consider implementing a database with pre-computed embeddings for improved scalability and performance.

**Active Decisions and Considerations:**
*   Using the OpenRouter API and the `liquid/lfm-7b` model for semantic search.
*   Maintaining a manually curated list of SaaS solutions in `data.js` for the MVP.
*   Considered implementing a database with pre-computed embeddings for improved scalability and performance. No decision has been made yet.

    **Pre-computed Embeddings:**
    *   Benefits: Faster search times, reduced API costs, improved scalability.
    *   Drawbacks: Increased storage costs, requires updating embeddings when SaaS solution data changes, initial cost of computing embeddings.

    **On-demand Embedding Generation:**
    *   Benefits: No need to store embeddings, always up-to-date.
    *   Drawbacks: Slower search times, increased API costs, limited scalability.
