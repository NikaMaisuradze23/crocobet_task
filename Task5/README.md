## 5. Advanced Docker Compose with Networking

**Scenario:** Create a `docker-compose.yml` file for the following setup:
- A backend service running Python Flask.
- A frontend service running NGINX to serve static files and reverse proxy requests to the backend.

### Requirements:
- Both services should run in the same Docker network.
- The backend service should expose port 5000.
- Configure the frontend service to forward API requests to the backend.

### Deliverables:
- The `docker-compose.yml` file.
- Commands to start and verify the setup (`docker-compose up`).
- A brief explanation of how networking is configured between services.


1. **configuration:**

   ```bash
   
    docker-compose up --build