# Rule: Auto Rollback
Role: Agent 06 (CC QA & Publishing Monitor)

## Description
Failed health checks trigger instant rollback and Telegram alerts.

## Mechanism
1. Monitor production heartbeat every 30s post-deploy.
2. Catch status codes 5xx or response latency > 2000ms.
3. If failure detected, execute `git revert HEAD` and force-push.
4. Redeploy last stable version.
5. Notify user via `TELEGRAM_BOT_TOKEN_DEV` with exact error logs.
