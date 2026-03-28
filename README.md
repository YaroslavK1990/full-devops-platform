# Full DevOps Platform

## 🚀 Overview

This project demonstrates a production-like DevOps environment using modern cloud and container technologies.

The goal is to simulate a real-world infrastructure setup with CI/CD, containerization, and Kubernetes orchestration.

## Why Kubernetes (K8s)?

In this project, Kubernetes is not just a tool for running containers—it is a comprehensive platform for managing the application's entire lifecycle. Here is the technical justification for our architectural choice:

### 1. High Availability & Self-Healing
Kubernetes continuously monitors the health of the system. If a container (Pod) crashes or becomes unresponsive, K8s automatically:
* **Restarts** the container.
* **Reschedules** it to a healthy node if the hardware fails.
* **Health Checks:** Only directs traffic to instances that are fully ready to serve requests.

### 2. Scalability on Demand
The project is designed to handle traffic spikes effortlessly. By utilizing the **Horizontal Pod Autoscaler (HPA)**, the system automatically increases the number of application replicas when CPU or RAM usage hits a threshold and scales back down during quiet periods to optimize costs.

### 3. Zero-Downtime Deployments
We utilize **Rolling Updates** to push new code to production without interrupting the user experience. Kubernetes gradually replaces old versions of containers with new ones, ensuring the new version is stable before decommissioning the old one.

### 4. Declarative Infrastructure (IaC)
The entire infrastructure is defined in YAML manifests. This approach allows us to:
* **Version Control:** Keep infrastructure changes in Git alongside the source code.
* **Environment Consistency:** Ensure that Development, Staging, and Production environments are identical.
* **Cloud Neutrality:** Easily migrate the project between different cloud providers (AWS, GCP, Azure) or on-premise servers.

### 5. Resource Optimization (Bin Packing)
Instead of dedicating entire virtual machines to single services, Kubernetes intelligently places containers across the cluster to maximize CPU and memory utilization, significantly reducing infrastructure overhead.


## 📂 Project Structure

```bash
   ├── backend/             # FastAPI application 
   ├── frontend/            # React app 
   ├── terraform/           # AWS infrastructure (IaC) 
   ├── k8s/                 # Kubernetes manifests 
   ├── .github/             # CI/CD pipelines 
   └── README.md
```

## 🧰 Tech Stack

* AWS (EKS, RDS, S3)
* Terraform
* Docker
* Kubernetes
* Python (FastAPI)
* React
* GitHub Actions

## 📊 Architecture

User → ALB → EKS → Backend → RDS


## Running Backend Locally

```bash
cd backend
docker build -t backend-app .
docker run -p 8000:8000 backend-app
```
Access:

http://localhost:8000/docs


## 🧠 Architecture Decisions

- Kubernetes (EKS) as an orchestrator
- Selected for scalability, self-healing, and compatibility with real production systems.
- AWS managed services (EKS, RDS, ALB)
- Reduce operational overhead and meet best practices in the cloud.
- Docker for containerization
- Provides the same environment for dev, CI/CD, and production.
- Terraform (Infrastructure as Code)
- Enables infrastructure replication, version control, and automation.
- GitHub Actions for CI/CD
- Easy start + repository integration.

## 📌 Status

🚧 In progress


👨‍💻 Author
Yaroslav