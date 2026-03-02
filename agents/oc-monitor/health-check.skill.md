# Skill: Health Check
Role: Agent 01 (OC Monitoring Agent)

## Description
Polls all 6 agents every 60 seconds, calculates uptime, and flags anomalies.

## Implementation Details
1. Connect to Redis message bus.
2. Publish `PING` request to all active agent channels.
3. Wait for `PONG` responses within 5s window.
4. Log response times and status.
5. If an agent fails to respond for 3 consecutive polls, trigger `CRITICAL` alert via Notifier.
