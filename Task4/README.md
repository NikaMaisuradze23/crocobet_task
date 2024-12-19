## 4. Docker Compose for a Multi-Service Application

**Scenario:** Create a `docker-compose.yml` file to run a Node.js application (`app.js`) and a MongoDB database together.

### Requirements:
1. The Node.js application should connect to MongoDB on a service named `db`.
2. The MongoDB container should use the official image and expose port 27017.
3. The Node.js application should restart automatically if it fails.

### Expected Deliverables:
- A `docker-compose.yml` file.
- Steps to start the services and verify they are running (`docker-compose up`).
- A brief explanation of service dependencies in the `docker-compose` file.

1. **Apply the nginx deployment configuration:**

   ```bash
   
    docker-compose up --build
