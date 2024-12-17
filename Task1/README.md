## 1. Docker Basics

- **Create a Dockerfile for a Python application** that runs a simple script (`app.py`) that prints "Hello, DevOps Intern!"
- **Build and run the Docker image locally.**
- **Share the steps to build, run, and stop the container.**

# Summary of Commands

## Build the Docker image:
```bash
docker build -t python-hello-app .

Run the Docker container:

docker run --name hello-app-container python-hello-app

Stop the container:

docker stop hello-app-container

Remove the container:

docker rm hello-app-container