## System Patterns

**System Architecture:**

The system will follow a client-server architecture. The client will be a simple web interface with a search box. The server will host the AI model and the database of SaaS solutions.

**Key Technical Decisions:**

*   Using the OpenRouter API and the `google/gemma-2-9b-it:free` model for semantic relevance assessment of SaaS solutions.

**Design Patterns in Use:**

*   **Model-View-Controller (MVC):** For structuring the web application.
*   **Repository Pattern:** For abstracting the database access.

**Component Relationships:**

*   The search box in the client sends the user query to the server.
*   The server uses the OpenRouter API and the `google/gemma-2-9b-it:free` model to assess the semantic relevance of SaaS solutions to the user's query.
*   The server sends the recommendations back to the client for display.
*   The server also provides a new API endpoint `/api/solutions` to serve the SaaS solutions data as JSON for the table implementation.
*   The client displays all SaaS solutions in a categorized table with names and pricing, fetched from the `/api/solutions` endpoint.
