## Tech Context

**Technologies Used:**

*   **Client:** HTML, CSS, JavaScript
*   **Server:** Node.js with Express
*   **AI Models:** OpenRouter API with liquid/lfm-7b (paid model, $0.01/M input tokens, $0.01/M output tokens)
*   **Database:** Initially manually curated, potentially PostgreSQL with vector embeddings (OpenSearch or FAISS) in the future.

**Development Setup:**

*   VS Code
*   Node.js and npm
*   Python (for AI model training and evaluation)

**Technical Constraints:**

*   Limited computational resources for AI model processing.
*   Need for efficient and fast search.

**Dependencies:**

*   express
*   node-fetch
*   dotenv
*   compromise
*   minisearch
*   pg (if using PostgreSQL)
