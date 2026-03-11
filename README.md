<div align="center">
  <img src="./f70902e2d330716a19ef9193ca2cc779f50c8bc9.jpg" width="600" alt="GrandScope AI Banner" style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
  <h1>🌌 GrandScope AI</h1>
  <p><b>6 AI Agents · Automated Workflows · Hybrid Cost Routing</b></p>
  
  [![License: Confidential](https://img.shields.io/badge/License-Confidential-red.svg)](LICENSE)
  [![Status: Active Development](https://img.shields.io/badge/Status-Active_Development-green.svg)](STATUS)
  [![Tech: Node.js 20+](https://img.shields.io/badge/Tech-Node.js_20+-blue.svg)](TECH)
  [![Architecture: Redis Message Bus](https://img.shields.io/badge/Architecture-Redis_Bus-orange.svg)](ARCHITECTURE)
</div>

---

## 🌟 Overview

**GrandScope AI** is a cutting-edge multi-agent ecosystem designed to automate a complete digital agency. Running on a single VPS, it coordinates 6 specialized AI agents that collaborate via a **Redis Message Bus** to handle content creation, visual design, and full-stack web development with zero manual intervention.

> [!IMPORTANT]
> **Hybrid Cost Routing Engine**: Reduces API spend by 60-80% by dynamically selecting models (DeepSeek, Llama, Gemini, Claude, GPT-4o) based on task complexity scores (1-10).

---

## 🏗️ System Architecture

The ecosystem is divided into two specialized parallel teams, each overseen by a Supervisor Agent.

```mermaid
graph TD
    User([USER]) -->|Telegram / Terminal / Web| OC_Monitor
    
    subgraph "🎨 Design Team (OpenCLAW)"
        OC_Monitor[<b>Agent 01: OC Monitor</b><br/><i>Supervisor / Routing</i>]
        OC_Writer[<b>Agent 02: OC Writer</b><br/><i>Content Specialist</i>]
        OC_Designer[<b>Agent 03: OC Designer</b><br/><i>Visual Specialist</i>]
        
        OC_Monitor -->|Redis Bus| OC_Writer
        OC_Monitor -->|Redis Bus| OC_Designer
    end

    subgraph "💻 Web Dev Team (Claude Code)"
        CC_Monitor[<b>Agent 06: CC QA & Publishing</b><br/><i>Supervisor / Testing</i>]
        CC_Frontend[<b>Agent 04: CC Front-End</b><br/><i>UI/UX Enthusiast</i>]
        CC_Backend[<b>Agent 05: CC Back-End</b><br/><i>API & Database Pro</i>]
        
        CC_Monitor -->|Redis Bus| CC_Frontend
        CC_Monitor -->|Redis Bus| CC_Backend
    end

    OC_Writer -.->|Handoff Content| CC_Frontend
    OC_Designer -.->|Handoff Assets/Briefs| CC_Frontend
    
    OC_Monitor --- Redis[(Redis Message Bus)]
    CC_Monitor --- Redis
    OC_Writer --- Redis
    OC_Designer --- Redis
    CC_Frontend --- Redis
    CC_Backend --- Redis
```

---

## 🎭 The Agent Roster

### 🎨 Design Team (OpenCLAW)
*   **Agent 01: OC Monitor (Supervisor)**: 24/7 health monitoring, task routing, cost tracking ($), and Telegram alerts.
*   **Agent 02: OC Content Writer**: Expert in SEO, tone modulation, and long-form content (22+ formats).
*   **Agent 03: OC Designer**: Generates assets (DALL-E 3, Runway), branding kits, and Figma tokens.

### 💻 Web Dev Team (Claude Code)
*   **Agent 04: CC Front-End**: Responsive React/Next.js UIs, accessibility (WCAG), and atomic design.
*   **Agent 05: CC Back-End**: API design (REST/GraphQL), DB schemas, and Docker orchestration.
*   **Agent 06: CC QA & Publishing (Supervisor)**: Continuous testing, security scans, and auto-rollback deployments.

---

## ✨ Key Technical Features

- **🧠 Hybrid Cost Routing**: 70% of routine tasks are routed to **Free/Budget models** (DeepSeek V3, Llama 3.3, Gemini Flash). Premium models (Claude 3.5 Sonnet, GPT-4o) are only engaged for complex reasoning.
- **🔄 Redis-Powered Handoffs**: Agents publish tasks to specialized channels. A designer and developer can work in parallel, slashing build times by 50%.
- **🛠️ Skill-Based System**: Each agent loads modular `.skill.md` files at startup, allowing for easy updates to their domain-specific logic.
- **🛡️ Quality Gateways**: Supervisor agents (01 & 06) review all outputs against rubrics (SEO rules, accessibility, performance budgets) before delivery.

---

## � Setup & Installation

### Prerequisites
- **Recommended VPS**: Hetzner CX31 (2 vCPU, 8GB RAM, 80GB NVMe) - approx. $10/mo.
- **Services**: OpenRouter (Primary API), Anthropic, Redis, Docker.

### Manual Installation
1.  **Clone & Install Dependencies**:
    ```bash
    git clone https://github.com/yourusername/grandscope-ai.git
    cd grandscope-ai && npm install
    ```
2.  **Environment Configuration**:
    ```bash
    cp .env.template .env
    # Add your API Keys, Redis Password, and Telegram Bot Tokens
    ```
3.  **Launch with PM2**:
    ```bash
    pm2 start infrastructure/pm2/ecosystem.config.js
    pm2 status # Verify all 6 agents show 'online'
    ```

### Docker Deployment (Recommended)
```bash
docker-compose up -d --build
```

---

## 📁 Repository Structure

```text
├── agents/             # Logic for all 6 specialized agents
│   ├── oc-monitor/     # Supervisor 01
│   ├── oc-writer/      # Content Writer 02
│   ├── oc-designer/    # Visual Designer 03
│   ├── cc-frontend/    # UI Developer 04
│   ├── cc-backend/     # API Developer 05
│   └── cc-monitor/     # QA & Supervisor 06
├── shared/             # Redis client, cost models, and global utilities
├── outputs/            # Final artifacts (Content, Designs, Code)
├── Dockerfiles.*       # Per-agent container configs
└── docker-compose.yml  # Multi-agent orchestration
```

---

## � Support & Reports
GrandScope AI is designed to be low-touch. You will receive:
- **Instant Alerts**: Telegram notifications for CRITICAL errors.
- **Daily Digest**: A midnight report summarizing tasks completed, costs, and system uptime.
- **Deployment Reports**: Build results, Lighthouse scores, and live URLs.

---

<div align="center">
  <p><i>Proprietary Technology - March 2026. All rights reserved.</i></p>
</div>
