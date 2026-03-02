# Skill: Cost Tracker
Role: Agent 01 (OC Monitoring Agent)

## Description
Counts API tokens per model, converts them to dollar costs based on `shared/cost-models.json`, and tracks monthly spend.

## Implementation Details
1. Receive model name and token count from each agent.
2. Lookup pricing in `shared/cost-models.json`.
3. Calculate cost (0.0 for free models).
4. Append to `outputs/reports/costs-this-month.json`.
5. Trigger alert via Notifier if spend exceeds 80% of budget.
