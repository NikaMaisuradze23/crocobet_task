# Practical Questions

## 1. Docker Basics

- **Create a Dockerfile for a Python application** that runs a simple script (`app.py`) that prints "Hello, DevOps Intern!"
- **Build and run the Docker image locally.**
- **Share the steps to build, run, and stop the container.**

## 2. CI/CD Pipeline Setup

- **Write a simple CI/CD pipeline configuration** (e.g., in GitLab CI/CD or GitHub Actions) that:
  - Builds a basic Node.js application.
  - Runs tests using `npm test`.
  - Deploys the application to a staging server.
- **Explain the YAML file structure and its components.**

## 3. Kubernetes Deployment

- **Create a YAML file** to deploy an Nginx application in Kubernetes.
  - Include a Deployment with 2 replicas.
  - Include a Service to expose the application on port 80.
- **Apply the configuration using `kubectl`** and verify the pods are running.

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
