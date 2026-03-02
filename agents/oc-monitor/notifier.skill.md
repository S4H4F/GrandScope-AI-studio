# Skill: Notifier
Role: Agent 01 (OC Monitoring Agent)

## Description
Sends instant Telegram alerts for CRITICAL events and a daily digest at midnight.

## Implementation Details
1. Securely fetch `TELEGRAM_BOT_TOKEN_DESIGN` from environment.
2. Formulate message based on event severity and context.
3. Use Telegram Bot API `sendMessage` endpoint.
4. Batch non-critical updates for the midnight report.
5. Provide markdown-formatted summaries.
6. The *exclusive* point of contact for the Design Team.
