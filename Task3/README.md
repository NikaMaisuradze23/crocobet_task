## 3. Kubernetes Deployment

- **Create a YAML file** to deploy an Nginx application in Kubernetes.
  - Include a Deployment with 2 replicas.
  - Include a Service to expose the application on port 80.
- **Apply the configuration using `kubectl`** and verify the pods are running.

1. **Apply the nginx deployment configuration:**

   ```bash
   microk8s kubectl apply -f nginx-deployment.yaml

   microk8s kubectl get services

   microk8s kubectl get pods

   microk8s kubectl get services