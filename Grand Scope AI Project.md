![](./f70902e2d330716a19ef9193ca2cc779f50c8bc9.jpg){width="2.2916666666666665in"
height="1.1458333333333333in"}

**GRANDSCOPE AI**

Complete Project Guide

*6 AI Agents · Automated Workflows · Hybrid Cost Routing*

+-----------------+-----------------+-----------------+-----------------+
| **6**           | **2**           | **\$22**        | **24/7**        |
|                 |                 |                 |                 |
| AI Agents       | Supervisors     | From / Month    | Always On       |
+-----------------+-----------------+-----------------+-----------------+

March 2026 \| Confidential

**1. What Is GrandScope AI?**

GrandScope AI is a fully automated team of 6 specialized AI agents
running on a single affordable server. Each agent has a specific role
--- writing content, creating designs, building websites --- and they
collaborate with each other without any manual intervention. Two
supervisor agents watch over everything and send daily reports directly
to you.

  -----------------------------------------------------------------------
  **The Simple Analogy**

  Think of it as a tiny automated digital agency running on a \$10/month
  server.

  You have: a Creative Director, a Writer, a Designer, a Front-End
  Developer,

  a Back-End Developer, and a QA Lead. You send them a task. They handle
  the rest.

  You get a clean report when it\'s done.

  -----------------------------------------------------------------------

**Key Benefits**

  -----------------------------------------------------------------------
  **Benefit**                         **What It Means For You**
  ----------------------------------- -----------------------------------
  6 Specialist Agents                 Each agent is an expert at one
                                      thing --- far better than one
                                      generalist AI

  Automatic Collaboration             Designer hands off to developer. QA
                                      catches bugs automatically. Zero
                                      manual work.

  Hybrid Cost Routing                 70% of tasks use free AI models.
                                      Premium models only when truly
                                      needed.

  You Just Get Reports                Telegram messages tell you what\'s
                                      done. No log files to check.
  -----------------------------------------------------------------------

**2. The 6 Agents**

GrandScope AI is divided into two teams working in parallel. Each team
has its own supervisor that reports to you.

**Design Team --- Powered by OpenCLAW**

+---+-------------------------------------------------------------------+
| * | **OC Monitoring Agent [SUPERVISOR]{.mark}**                       |
| * |                                                                   |
| 0 | Watches all 6 agents 24/7, auto-fixes bugs, sends daily reports   |
| 1 | and instant alerts to Telegram                                    |
| * |                                                                   |
| * | *Models: Gemini 1.5 Pro + Claude 3.5 Haiku (fallback)*            |
+---+-------------------------------------------------------------------+

+---+-------------------------------------------------------------------+
| * | **OC Content Writer**                                             |
| * |                                                                   |
| 0 | Produces any of 22 content types --- blogs, white papers, social  |
| 2 | posts, email sequences, scripts                                   |
| * |                                                                   |
| * | *Models: DeepSeek V3 (FREE) + Mistral 8x7B (fallback)*            |
+---+-------------------------------------------------------------------+

+---+-------------------------------------------------------------------+
| * | **OC Designer**                                                   |
| * |                                                                   |
| 0 | Creates design briefs, generates images (DALL-E 3), produces      |
| 3 | videos (Runway/Pika) --- 55+ design disciplines                   |
| * |                                                                   |
| * | *Models: Gemini 1.5 Flash + DALL-E 3 API*                         |
+---+-------------------------------------------------------------------+

**Web Dev Team --- Powered by Claude Code**

+---+-------------------------------------------------------------------+
| * | **CC Front-End Developer**                                        |
| * |                                                                   |
| 0 | Builds everything users see --- buttons, pages, animations, full  |
| 4 | responsive UI with accessibility compliance                       |
| * |                                                                   |
| * | *Models: Claude 3.5 Sonnet + GPT-4o (fallback)*                   |
+---+-------------------------------------------------------------------+

+---+-------------------------------------------------------------------+
| * | **CC Back-End Developer**                                         |
| * |                                                                   |
| 0 | Builds what runs behind the scenes --- databases, REST/GraphQL    |
| 5 | APIs, authentication systems, Docker configs                      |
| * |                                                                   |
| * | *Models: Claude 3.5 Sonnet + DeepSeek Coder V2 (fallback)*        |
+---+-------------------------------------------------------------------+

+---+-------------------------------------------------------------------+
| * | **CC QA & Publishing Agent [SUPERVISOR]{.mark}**                  |
| * |                                                                   |
| 0 | Tests all code, runs security scans, deploys to production,       |
| 6 | auto-rolls back on failure, reports to you                        |
| * |                                                                   |
| * | *Models: Claude 3.5 Sonnet + GPT-4o mini (utility)*               |
+---+-------------------------------------------------------------------+

**How Agents Connect**

All 6 agents communicate via a Redis Message Bus --- a shared internal
messaging system running on your VPS. The two supervisor agents (01 and
06) are the only agents you directly interact with.

**3. How It Works --- Workflows**

**Design Workflow (Content & Visuals)**

+---+------------------------------------------------------------------+
| * | **You Send a Task**                                              |
| * |                                                                  |
| 1 | Type a request via Telegram, the web dashboard, or the terminal. |
| * | Examples: \"write a blog post about AI trends\" or \"create a    |
| * | brand kit for a coffee shop\".                                   |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **OC Monitor Routes It**                                         |
| * |                                                                  |
| 2 | The Design Supervisor reads your request, classifies it as       |
| * | content or design work, selects the right agent, and assigns the |
| * | task with full context.                                          |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Smart Model Selection**                                        |
| * |                                                                  |
| 3 | The agent scores task complexity 1--10. Score 1--3 → free model. |
| * | Score 4--6 → budget model. Score 7--10 → premium model. This is  |
| * | what keeps costs low.                                            |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Specialist Gets to Work**                                      |
| * |                                                                  |
| 4 | The Writer or Designer agent completes the task using the        |
| * | selected AI model. Output is saved to a shared folder on your    |
| * | server.                                                          |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Quality Gate**                                                 |
| * |                                                                  |
| 5 | OC Monitor reads the output against quality rubrics --- format   |
| * | correct? SEO rules followed? Word count met? Auto-approved or    |
| * | sent back for revision automatically.                            |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **You Get a Report**                                             |
| * |                                                                  |
| 6 | A Telegram message arrives: task name, what was created, time    |
| * | taken, API cost, and a download link. Done.                      |
| * |                                                                  |
+---+------------------------------------------------------------------+

**Dev Workflow (Website Building)**

+---+------------------------------------------------------------------+
| * | **You Submit a Project Brief**                                   |
| * |                                                                  |
| 1 | Describe what you want built --- \"a portfolio site with a       |
| * | contact form and blog\" --- or hand off design files from the    |
| * | Designer agent.                                                  |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **CC Monitor Decomposes the Work**                               |
| * |                                                                  |
| 2 | The Dev Supervisor splits your brief into two parallel           |
| * | workstreams: front-end tasks (what users see) and back-end tasks |
| * | (the engine). Assigns both simultaneously.                       |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Both Devs Build at the Same Time**                             |
| * |                                                                  |
| 3 | Front-End builds the UI. Back-End builds the server. They work   |
| * | in parallel --- cutting build time roughly in half compared to   |
| * | sequential development.                                          |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Continuous Checks Every 10 Minutes**                           |
| * |                                                                  |
| 4 | While both devs are working, CC Monitor continuously scans the   |
| * | code being written --- catching errors early before they         |
| * | compound.                                                        |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Full Test Suite on Staging**                                   |
| * |                                                                  |
| 5 | When both agents complete, CC Monitor deploys to a staging       |
| * | environment and runs automated tests --- clicking buttons,       |
| * | testing forms, checking every page and API.                      |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Goes Live or Auto-Rolls Back**                                 |
| * |                                                                  |
| 6 | All tests pass? Site deploys to production automatically. A test |
| * | fails? CC Monitor rolls back to last working version in seconds  |
| * | and sends you the exact error.                                   |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Deployment Report**                                            |
| * |                                                                  |
| 7 | A full summary: what was built, test results, bundle size,       |
| * | performance scores, total API cost for the project, and the live |
| * | URL.                                                             |
+---+------------------------------------------------------------------+

**4. Phase-by-Phase Setup Guide**

Total estimated time: 3--4 hours. No advanced coding knowledge required.
Follow each phase in order.

**Phase 0 --- Before You Start (30--60 min)**

Create accounts and collect API keys. No server access needed yet.

  -------------------------------------------------------------------------
  **Service**              **What It\'s Used For**  **URL**
  ------------------------ ------------------------ -----------------------
  Hetzner Cloud            Your server (cheapest    hetzner.com/cloud
                           option)                  

  Anthropic                Claude Code agents (4,   console.anthropic.com
                           5, 6)                    

  OpenRouter               OpenCLAW + 100+ free     openrouter.ai
                           models                   

  OpenAI                   DALL-E 3 images + GPT-4o platform.openai.com
                           fallback                 

  Google AI Studio         Free Gemini models for   aistudio.google.com
                           Designer                 

  DeepSeek                 Free API for Content     platform.deepseek.com
                           Writer                   

  Telegram (optional)      Supervisor notifications t.me/BotFather
                           and reports              
  -------------------------------------------------------------------------

**Phase 1 --- Provision & Secure Your Server (20 min)**

+---+------------------------------------------------------------------+
| * | **Create Your Server on Hetzner**                                |
| * |                                                                  |
| 1 | Log in → Add Server → Choose Ubuntu 24.04 LTS                    |
| * |                                                                  |
| * | Plan: CX31 (2 vCPU, 8GB RAM) at \$9.90/month \| Location:        |
|   | Ashburn (USA) or Nuremberg (EU)                                  |
|   |                                                                  |
|   | Add your SSH public key → Click \'Create & Buy\' → Server is     |
|   | live in \~30 seconds                                             |
|   |                                                                  |
|   | Copy the IPv4 address shown --- you\'ll use this in every        |
|   | terminal command                                                 |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Generate an SSH Key (if you don\'t have one)**                 |
| * |                                                                  |
| 2 | Run this on your personal computer (Mac/Linux Terminal or        |
| * | Windows PowerShell):                                             |
| * |                                                                  |
|   | ssh-keygen -t ed25519 -C \"grandscope-ai\" (press Enter 3 times) |
|   |                                                                  |
|   | cat \~/.ssh/id_ed25519.pub (copy this output and paste into      |
|   | Hetzner)                                                         |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Connect & Secure the Server**                                  |
| * |                                                                  |
| 3 | ssh root@YOUR_SERVER_IP                                          |
| * |                                                                  |
| * | apt update && apt upgrade -y                                     |
|   |                                                                  |
|   | adduser grandscope \| usermod -aG sudo grandscope                |
|   |                                                                  |
|   | Set up UFW firewall: allow SSH, port 80, port 443. Then          |
|   | reconnect as the new user.                                       |
+---+------------------------------------------------------------------+

**Phase 2 --- Install Core Tools (30 min)**

+---+------------------------------------------------------------------+
| * | **Install Node.js 20 LTS**                                       |
| * |                                                                  |
| 1 | curl -fsSL https://deb.nodesource.com/setup_20.x \| sudo -E bash |
| * | -                                                                |
| * |                                                                  |
|   | sudo apt install -y nodejs                                       |
|   |                                                                  |
|   | Verify: node \--version (should show v20.x.x)                    |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Install Python 3.12 & PM2 Process Manager**                    |
| * |                                                                  |
| 2 | sudo apt install -y python3.12 python3-pip git curl              |
| * | build-essential                                                  |
| * |                                                                  |
|   | sudo npm install -g pm2                                          |
|   |                                                                  |
|   | pm2 startup systemd (run the command it outputs as sudo)         |
|   |                                                                  |
|   | PM2 keeps all 6 agents running --- if one crashes, it restarts   |
|   | automatically                                                    |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Install & Configure Redis**                                    |
| * |                                                                  |
| 3 | sudo apt install -y redis-server                                 |
| * |                                                                  |
| * | Edit /etc/redis/redis.conf: set bind 127.0.0.1, requirepass,     |
|   | maxmemory 512mb                                                  |
|   |                                                                  |
|   | sudo systemctl restart redis-server                              |
|   |                                                                  |
|   | Test: redis-cli -a YOUR_PASSWORD ping (should reply: PONG)       |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Install Nginx + Free SSL Certificate**                         |
| * |                                                                  |
| 4 | sudo apt install -y nginx certbot python3-certbot-nginx          |
| * |                                                                  |
| * | If you have a domain: sudo certbot \--nginx -d yourdomain.com    |
|   |                                                                  |
|   | Certbot auto-renews your HTTPS certificate every 90 days ---     |
|   | nothing to manage                                                |
+---+------------------------------------------------------------------+

**Phase 3 --- Install Agent Platforms & Clone Repo (20 min)**

+---+------------------------------------------------------------------+
| * | **Install OpenCLAW CLI (Design Agents 1, 2, 3)**                 |
| * |                                                                  |
| 1 | npm install -g openclaw-cli                                      |
| * |                                                                  |
| * | openclaw config set \--api-key YOUR_OPENROUTER_KEY               |
|   |                                                                  |
|   | openclaw config set \--default-model google/gemini-flash-1.5     |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Install Claude Code CLI (Dev Agents 4, 5, 6)**                 |
| * |                                                                  |
| 2 | npm install -g \@anthropic-ai/claude-code                        |
| * |                                                                  |
| * | export ANTHROPIC_API_KEY=your_sk-ant-key (add to \~/.bashrc to   |
|   | persist)                                                         |
|   |                                                                  |
|   | claude \--version (verify installation)                          |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Clone the Repository & Add Your API Keys**                     |
| * |                                                                  |
| 3 | git clone https://github.com/yourusername/grandscope-ai          |
| * |                                                                  |
| * | cd grandscope-ai && npm install                                  |
|   |                                                                  |
|   | cp .env.example .env → nano .env → fill in all 6 API keys +      |
|   | Redis URL + Telegram tokens                                      |
+---+------------------------------------------------------------------+

**Phase 4 --- Start All 6 Agents (15 min)**

+---+------------------------------------------------------------------+
| * | **Launch Everything with One Command**                           |
| * |                                                                  |
| 1 | pm2 start infrastructure/pm2/ecosystem.config.js                 |
| * |                                                                  |
| * | pm2 save (saves list so agents restart after server reboot)      |
|   |                                                                  |
|   | pm2 status → all 6 processes should show \'online\' in green     |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Send a Test Task**                                             |
| * |                                                                  |
| 2 | node shared/send-task.js \--agent oc-writer \--type blog-post    |
| * | \--topic \"AI trends\"                                           |
| * |                                                                  |
|   | pm2 logs oc-monitor \--lines 50 (watch the task flow in real     |
|   | time)                                                            |
|   |                                                                  |
|   | ls outputs/content/ (the finished blog post should appear)       |
+---+------------------------------------------------------------------+

**Phase 5 --- Go Live (30 min)**

+---+------------------------------------------------------------------+
| * | **Connect Your Domain**                                          |
| * |                                                                  |
| 1 | In Cloudflare/your registrar: add A record pointing to           |
| * | YOUR_SERVER_IP                                                   |
| * |                                                                  |
|   | Run: sudo certbot \--nginx -d yourdomain.com (free HTTPS in 60   |
|   | seconds)                                                         |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Schedule Nightly Backups**                                     |
| * |                                                                  |
| 2 | crontab -e → add: 0 2 \* \* \*                                   |
| * | /home/grandscope/grandscope-ai/infrastructure/scripts/backup.sh  |
| * |                                                                  |
|   | Backups run at 2am daily. Keeps 30 days of history.              |
+---+------------------------------------------------------------------+

+---+------------------------------------------------------------------+
| * | **Weekly Maintenance (5 minutes every Monday)**                  |
| * |                                                                  |
| 3 | sudo apt update && sudo apt upgrade -y (update server packages)  |
| * |                                                                  |
| * | pm2 status (confirm all 6 agents online)                         |
|   |                                                                  |
|   | df -h / (check disk space --- below 80% is fine)                 |
|   |                                                                  |
|   | cat outputs/reports/costs-this-week.json (review API spend)      |
+---+------------------------------------------------------------------+

**5. VPS Provider Comparison**

All major cloud providers compared. The ⭐ row indicates the recommended
plan for GrandScope AI at each provider.

**Hetzner Cloud --- Best Value Overall ✅ Recommended**

German cloud with EU and US locations. Best price-to-performance ratio
in the market. NVMe SSDs, no bandwidth caps, instant vertical scaling.

  ----------------------------------------------------------------------------------------
  **Plan**     **CPU**       **RAM**   **Storage**   **Price/mo**   **Best For GrandScope
                                                                    AI**
  ------------ ------------- --------- ------------- -------------- ----------------------
  CX22         2 vCPU        4 GB      40 GB NVMe    \$4/mo         Testing only --- RAM
                                                                    too tight

  **CX31 ⭐**  2 vCPU        8 GB      80 GB NVMe    **\$10/mo**    RECOMMENDED START ---
                                                                    runs all 6 agents

  CX41         4 vCPU        16 GB     160 GB NVMe   \$23/mo        Active production ---
                                                                    medium usage

  CX51         8 vCPU        32 GB     240 GB NVMe   \$46/mo        High workload --- 500+
                                                                    tasks/day

  CCX23        4 vCPU        16 GB     160 GB NVMe   \$49/mo        Dedicated CPU ---
               (dedicated)                                          consistent performance

  CCX33        8 vCPU        32 GB     240 GB NVMe   \$65/mo        Agency-grade --- heavy
               (dedicated)                                          continuous load

  CCX43        16 vCPU       64 GB     360 GB NVMe   \$130/mo       Enterprise ---
               (dedicated)                                          multiple large
                                                                    projects
  ----------------------------------------------------------------------------------------

**DigitalOcean --- Developer Friendly**

Popular US cloud. Excellent documentation. 3--5x more expensive than
Hetzner for equivalent specs.

  -------------------------------------------------------------------------------------
  **Plan**      **CPU**     **RAM**   **Storage**   **Price/mo**   **Notes**
  ------------- ----------- --------- ------------- -------------- --------------------
  Basic 4GB     2 vCPU      4 GB      80 GB SSD     \$24/mo        Below minimum for 6
                                                                   agents

  **Basic 8GB   4 vCPU      8 GB      160 GB SSD    **\$48/mo**    Minimum viable ---
  ⭐**                                                             5× Hetzner cost

  Basic 16GB    8 vCPU      16 GB     320 GB SSD    \$96/mo        Active production
                                                                   use

  General 8GB   2 vCPU      8 GB      25 GB SSD     \$63/mo        Consistent
                dedicated                                          performance

  General 16GB  4 vCPU      16 GB     50 GB SSD     \$126/mo       High workload
                dedicated                                          production

  CPU-Opt 8GB   4 vCPU      8 GB      25 GB SSD     \$84/mo        Heavy parallel
                                                                   processing
  -------------------------------------------------------------------------------------

**Vultr --- Best Global Reach (32 locations)**

Best if you need Southeast Asia, South America, or other regions not
covered by Hetzner. 2--3x more expensive than Hetzner.

  -------------------------------------------------------------------------------------
  **Plan**      **CPU**     **RAM**   **Storage**   **Price/mo**   **Notes**
  ------------- ----------- --------- ------------- -------------- --------------------
  Cloud 4GB     2 vCPU      4 GB      80 GB SSD     \$20/mo        Too little RAM for
                                                                   stable operation

  **Cloud 8GB   4 vCPU      8 GB      160 GB SSD    **\$40/mo**    Recommended for
  ⭐**                                                             Vultr

  High Freq 8GB 4 vCPU      8 GB      200 GB NVMe   \$48/mo        Faster CPU for heavy
                                                                   AI tasks

  Cloud 16GB    6 vCPU      16 GB     320 GB SSD    \$80/mo        Active production
                                                                   workload

  High Freq     6 vCPU      16 GB     384 GB NVMe   \$96/mo        High-performance
  16GB                                                             production

  Bare Metal    8 vCPU      32 GB     240 GB NVMe   \$130/mo       Enterprise, no
  32GB          dedicated                                          virtualization
  -------------------------------------------------------------------------------------

**Contabo --- Ultra Cheap, Highest RAM per Dollar**

German budget provider. Incredible specs for the price. Trade-offs:
older hardware on some plans, slower support. Best for RAM-heavy
workloads on a tight budget.

  -----------------------------------------------------------------------------------
  **Plan**      **CPU**   **RAM**   **Storage**   **Price/mo**   **Notes**
  ------------- --------- --------- ------------- -------------- --------------------
  Cloud VPS S   4 vCPU    6 GB      100 GB SSD    \$6/mo         Workable for testing

  **Cloud VPS M 6 vCPU    16 GB     200 GB SSD    **\$14/mo**    BEST VALUE --- 16GB
  ⭐**                                                           RAM for \$14!

  Cloud VPS L   8 vCPU    30 GB     400 GB SSD    \$22/mo        Excellent
                                                                 specs/price ratio

  Cloud VPS XL  10 vCPU   60 GB     800 GB SSD    \$35/mo        Agency-level ---
                                                                 massive RAM

  Storage VPS S 4 vCPU    12 GB     600 GB HDD    \$8/mo         For large media file
                                                                 storage
  -----------------------------------------------------------------------------------

**OVHcloud --- European Privacy (GDPR Sovereign)**

French cloud giant. Moderate pricing. Best if GDPR compliance or EU data
residency is required.

  --------------------------------------------------------------------------------------
  **Plan**      **CPU**      **RAM**   **Storage**   **Price/mo**   **Notes**
  ------------- ------------ --------- ------------- -------------- --------------------
  Value 4GB     2 vCPU       4 GB      80 GB SSD     \$8/mo         Borderline --- not
                                                                    recommended

  **Essential   4 vCPU       8 GB      160 GB SSD    **\$16/mo**    Recommended ---
  8GB ⭐**                                                          comfortable for 6
                                                                    agents

  Comfort 16GB  8 vCPU       16 GB     320 GB SSD    \$32/mo        Active production
                                                                    workload

  Elite 32GB    8 vCPU       32 GB     640 GB SSD    \$64/mo        High volume agency
                                                                    use

  VPS Max 16GB  8 vCPU       16 GB     160 GB NVMe   \$48/mo        Guaranteed resources
                guaranteed                                          
  --------------------------------------------------------------------------------------

**AWS Lightsail --- Enterprise Grade (Most Expensive)**

Amazon\'s simplified VPS. 2--5x more expensive than Hetzner. Only
recommended if you need native AWS integrations or enterprise
compliance.

  -----------------------------------------------------------------------------------
  **Plan**      **CPU**   **RAM**   **Storage**   **Price/mo**   **Notes**
  ------------- --------- --------- ------------- -------------- --------------------
  4 GB RAM      2 vCPU    4 GB      80 GB SSD     \$20/mo        Under-resourced for
                                                                 6 agents

  **8 GB RAM    2 vCPU    8 GB      160 GB SSD    **\$40/mo**    Minimum --- 4×
  ⭐**                                                           Hetzner CX31 cost

  16 GB RAM     4 vCPU    16 GB     320 GB SSD    \$80/mo        Active production
                                                                 use

  32 GB RAM     8 vCPU    32 GB     640 GB SSD    \$160/mo       Heavy agency
                                                                 workload
  -----------------------------------------------------------------------------------

**6. Real Monthly Costs --- Hybrid Routing Applied**

GrandScope AI\'s hybrid routing system automatically assigns the
cheapest capable model to every task. This single feature reduces costs
by 60--80% compared to using premium AI for everything.

**The 3 Model Tiers**

  ------------------------------------------------------------------------------
  **Tier**      **% of      **Models Used**   **Cost per Call** **Used For**
                Tasks**                                         
  ------------- ----------- ----------------- ----------------- ----------------
  **Free**      **\~70%**   DeepSeek V3,      **\$0**           Routine content,
                            Llama 3.3 70B,                      standard code,
                            Mistral 7B,                         summaries
                            Gemini Flash                        

  **Budget**    **\~20%**   Gemini Flash 1.5, \$0.001--0.003    Longer content,
                            GPT-4o mini,                        detailed
                            Claude Haiku                        designs,
                                                                moderate code

  **Premium**   **\~10%**   Claude 3.5        \$0.10--0.20      Complex
                            Sonnet, GPT-4o,                     reasoning,
                            Gemini 1.5 Pro                      architecture,
                                                                final QA only
  ------------------------------------------------------------------------------

**Monthly Cost Breakdown by Usage Level**

  --------------------------------------------------------------------------
  **Cost Category**  **Low Usage       **Medium Usage    **High Usage
                     (\~50/day)**      (\~200/day)**     (\~500+/day)**
  ------------------ ----------------- ----------------- -------------------
  VPS Server         CX31 --- \$10     CX41 --- \$23     CCX33 --- \$65

  Premium AI (10% of \$4               \$28              \$85
  tasks)                                                 

  Budget AI (20% of  \$2               \$12              \$40
  tasks)                                                 

  Free AI (70% of    **\$0**           **\$0**           **\$0**
  tasks)                                                 

  Image Generation   \$1.50            \$8               \$35
  (DALL-E 3)                                             

  Video Generation   \$0               \$10              \$50

  Domain + CDN + SSL \$1.50            \$5               \$25

  **TOTAL (with      **\$19--22/mo**   **\$80--90/mo**   **\$290--300/mo**
  hybrid routing)**                                      

  Without hybrid     \$90+/mo          \$240+/mo         \$745+/mo
  routing                                                
  (all-premium)                                          

  **Savings from     **\~\$70/mo**     **\~\$155/mo**    **\~\$450/mo**
  hybrid routing**                                       
  --------------------------------------------------------------------------

  -----------------------------------------------------------------------
  **How Hybrid Routing Decides Which Model to Use**

  Before any AI call, the agent scores the task complexity from 1 to 10:

  • Score 1--3: Routine task → Free model (DeepSeek V3, Llama 3.3 70B,
  etc.) = \$0

  • Score 4--6: Moderate task → Budget model (GPT-4o mini, Claude Haiku)
  = fractions of a cent

  • Score 7--10: Complex task → Premium model (Claude 3.5 Sonnet, GPT-4o)
  = \~\$0.15/call

  Result: 70% of all tasks cost nothing in AI fees.

  -----------------------------------------------------------------------

**7. Agent Skills Reference**

Each agent loads a set of \'skill files\' at startup. These are the
instruction manuals that turn a general AI into a domain specialist.

**Agent 01 --- OC Monitoring Agent (6 Skills)**

-   Health Check: Polls all 6 agents every 60 seconds, calculates
    uptime, flags anomalies

-   Log Analyzer: Reads structured logs, classifies entries as WARN /
    ERROR / CRITICAL

-   Auto Fixer: Applies known fix scripts for common errors (max 3
    attempts per error)

-   Cost Tracker: Counts API tokens per model, converts to dollar cost,
    tracks monthly spend

-   Notifier: Sends instant Telegram alerts for CRITICAL events + daily
    digest at midnight

-   Report Generator: Creates clean Markdown summaries with task counts,
    costs, and uptime stats

**Agent 02 --- OC Content Writer (7 Skills)**

-   SEO Optimizer: Keyword density 1--3%, meta descriptions \<160 chars,
    H1/H2 structure

-   Tone Modulator: Professional / Casual / Academic / Persuasive mode
    switching

-   Template Engine: 22 pre-built templates (blog post, white paper,
    press release, case study...)

-   Long-Form Manager: Splits documents into chapters, maintains
    coherence, tracks word count targets

-   Research Integrator: Pulls live web data when current facts or
    statistics are needed

-   Output Formatter: Exports Markdown with YAML frontmatter, HTML, or
    plain text

-   Plagiarism Guard: Detects verbatim phrases \>6 words, automatically
    rephrases

**Agent 03 --- OC Designer (8 Skills)**

-   Image Generation: DALL-E 3 + Stable Diffusion prompts for 55+ design
    disciplines

-   Video Generation: Runway Gen-3 / Pika API for 5--10 second video
    clips

-   Color Theory: Palette generation with
    complementary/triadic/analogous schemes + WCAG contrast

-   Brand Builder: Logo concepts, color palettes, typography, usage
    guidelines --- full brand kit

-   Typography: Font pairing rules from 1000+ Google Fonts options

-   Design Brief Generator: JSON spec output with dimensions, colors,
    fonts, mood references

-   Asset Manager: Versioned file naming:
    \[project\]-\[type\]-v\[n\].\[ext\] with manifest tracking

-   Figma Integration: Pushes design tokens directly to Figma via REST
    API

**Agent 04 --- CC Front-End Developer (8 Rules)**

-   Component Architecture: Atomic design --- atoms, molecules,
    organisms, templates, pages

-   TypeScript First: All .tsx/.ts, no \'any\' types, catches bugs
    before runtime

-   Accessibility: WCAG 2.1 AA compliant, ARIA labels, axe-core checks,
    keyboard navigation

-   Responsive Design: Mobile-first breakpoints: sm 640px, md 768px, lg
    1024px, xl 1280px

-   Performance Budget: Max 250KB gzipped, lazy-loaded routes,
    Lighthouse CI in pipeline

-   Testing: Unit tests for every component with React Testing Library

-   Storybook: Every component documented with all state variants

-   API Integration: Typed clients auto-generated from OpenAPI 3.1 spec

**Agent 05 --- CC Back-End Developer (8 Rules)**

-   API-First Design: Writes OpenAPI 3.1 spec before writing any
    implementation code

-   Database Migrations: All schema changes via migration files ---
    never breaks production

-   Authentication: httpOnly cookies, never localStorage, refresh token
    rotation

-   Input Validation: Zod (TypeScript) or Pydantic (Python) --- rejects
    bad data at the boundary

-   Error Handling: Structured JSON: {error, code, message, details} ---
    full stack trace logged server-side

-   Security Checklist: Helmet, CORS whitelist, rate limiting, OWASP Top
    10 compliance

-   API Testing: Integration tests with supertest, minimum 80% coverage
    required

-   Auto Documentation: JSDoc/docstrings on every function, README
    always updated

**Agent 06 --- CC QA & Publishing Monitor (7 Rules)**

-   Static Analysis: ESLint + Prettier (JS/TS), Pylint (Python) --- zero
    warnings policy, blocks all deploys

-   Test Execution: Full test suite must pass --- any failure halts the
    deployment pipeline

-   Security Scan: npm audit + Snyk --- no HIGH or CRITICAL
    vulnerabilities allowed

-   Build Verification: Production build checked for TypeScript errors
    and bundle size

-   E2E Testing: Playwright test suite runs against staging environment
    before any production deploy

-   Deployment: SSH deployment script, git release tag, CHANGELOG.md
    auto-updated

-   Auto Rollback: Failed health check triggers instant rollback +
    Telegram alert with exact error

**8. Repository File Structure**

The GitHub repository is organized with one folder per agent, plus
shared utilities and infrastructure configs.

  ------------------------------------------------------------------------------------
  **Path**                                 **Purpose**
  ---------------------------------------- -------------------------------------------
  **agents/oc-monitor/**                   Agent 01: Design Supervisor --- prompts,
                                           health-check skill, log-analyzer, notifier

  **agents/oc-writer/**                    Agent 02: Content Writer --- 22 templates,
                                           SEO optimizer, tone modulator, formatter

  **agents/oc-designer/**                  Agent 03: Designer --- image-gen,
                                           video-gen, color-theory, brand-builder,
                                           figma skills

  **agents/cc-frontend/**                  Agent 04: Front-End Dev --- CLAUDE.md +
                                           react-builder, a11y-checker, perf-optimizer

  **agents/cc-backend/**                   Agent 05: Back-End Dev --- CLAUDE.md +
                                           api-architect, db-designer, auth-builder,
                                           security

  **agents/cc-monitor/**                   Agent 06: QA Monitor --- CLAUDE.md +
                                           test-runner, deploy-manager,
                                           rollback-engine

  shared/redis-client.js                   Inter-agent message bus --- all 6 agents
                                           communicate through this

  shared/cost-models.json                  Pricing data that drives the hybrid routing
                                           decisions

  shared/send-task.js                      CLI tool to submit tasks from the terminal

  infrastructure/pm2/ecosystem.config.js   Starts all 6 agents with one command

  infrastructure/scripts/setup.sh          One-script full server setup from scratch

  infrastructure/scripts/backup.sh         Nightly backup script (runs via cron at
                                           2am)

  outputs/content/                         Finished blog posts, white papers, social
                                           posts...

  outputs/design/                          Brand kits, generated images, video files,
                                           design briefs...

  outputs/code/                            Front-end and back-end project builds

  outputs/reports/                         Daily status digests from both supervisors

  **.env ⚠️ Never commit to GitHub**       All API keys --- Anthropic, OpenRouter,
                                           OpenAI, Google AI, DeepSeek, Redis,
                                           Telegram
  ------------------------------------------------------------------------------------

  -----------------------------------------------------------------------
  **Quick Start Summary --- 10 Steps to All 6 Agents Running**

  1\. Create a Hetzner Cloud account and provision a CX31 server (Ubuntu
  24.04)

  2\. Generate SSH keys on your machine, connect to the server, run
  security setup

  3\. Install Node.js 20, Python 3.12, PM2, Redis, and Nginx

  4\. Install OpenCLAW CLI: npm install -g openclaw-cli

  5\. Install Claude Code CLI: npm install -g \@anthropic-ai/claude-code

  6\. Clone the repo: git clone
  https://github.com/yourusername/grandscope-ai

  7\. Copy .env.example to .env and fill in all 6 API keys

  8\. Start all agents: pm2 start infrastructure/pm2/ecosystem.config.js

  9\. Verify: pm2 status (all 6 should show \'online\')

  10\. Test: node shared/send-task.js \--agent oc-writer \--type
  blog-post \--topic \'AI\'

  -----------------------------------------------------------------------

![](./f70902e2d330716a19ef9193ca2cc779f50c8bc9.jpg){width="1.25in"
height="0.625in"}

GrandScope AI \| Confidential \| March 2026
