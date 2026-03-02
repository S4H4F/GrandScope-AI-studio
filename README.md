# GrandScope AI

**6 AI Agents · Automated Workflows · Hybrid Cost Routing**

GrandScope AI is a fully automated team of 6 specialized AI agents running on a single affordable server. Each agent has a specific role—writing content, creating designs, building websites—and they collaborate with each other without any manual intervention. Two supervisor agents oversee operations and send daily reports directly to you via Telegram.

---

## 🚀 Core Architecture

The project is divided into two specialized teams working in parallel, coordinated via a Redis Message Bus.

### 🎨 Design Team (OpenCLAW)
- **Agent 01: OC Monitor (Supervisor)**: Watches all agents, auto-fixes bugs, and sends daily reports.
- **Agent 02: OC Content Writer**: Produces 22+ content types (blogs, social posts, scripts).
- **Agent 03: OC Designer**: Creates design briefs, generates images (DALL-E 3), and videos.

### 💻 Web Dev Team (Claude Code)
- **Agent 04: CC Front-End Developer**: Builds responsive UIs with accessibility compliance.
- **Agent 05: CC Back-End Developer**: Builds APIs, databases, and authentication systems.
- **Agent 06: CC QA & Publishing (Supervisor)**: Tests code, runs security scans, and manages deployments.

---

## ✨ Key Features

- **Hybrid Cost Routing**: Reduces API costs by 60-80% by routing simple tasks to free models (DeepSeek, Llama) and complex tasks to premium models (Claude 3.5 Sonnet, GPT-4o).
- **Automated Collaboration**: Agents hand off tasks to each other automatically via Redis.
- **Real-time Monitoring**: Instant Telegram alerts for critical events and daily performance digests.
- **Dockerized Environment**: Fully containerized setup for easy deployment and scaling.

---

## 🛠️ Setup & Installation

### Prerequisites
- **Server**: Ubuntu 24.04 LTS (Hetzner CX31 recommended: 2 vCPU, 8GB RAM).
- **API Keys**: OpenRouter, Anthropic, OpenAI, Google AI Studio, DeepSeek.
- **Tools**: Node.js 20+, Python 3.12+, Redis, Docker (optional).

### Quick Start (Local/Manual)
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/Openclaw.git
   cd Openclaw
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure environment**:
   ```bash
   cp .env.template .env
   # Edit .env with your API keys and configuration
   ```
4. **Launch with Docker (Recommended)**:
   ```bash
   docker-compose up -d
   ```
   *Or use PM2 for process management:*
   ```bash
   pm2 start infrastructure/pm2/ecosystem.config.js
   ```

---

## 📁 Project Structure

- `agents/`: Source code for all 6 AI agents.
- `shared/`: Shared utilities and communication logic.
- `infrastructure/`: Deployment scripts, PM2 configs, and backups.
- `outputs/`: Finished artifacts (content, designs, code).

---

## 📜 License

Confidential - March 2026. All rights reserved.
