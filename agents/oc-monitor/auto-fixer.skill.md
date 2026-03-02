# Skill: Auto-Fixer
Role: Agent 01 (OC Monitoring Agent)

## Description
Applies known fix scripts for common errors with a maximum of 3 attempts per error.

## Implementation Details
1. Receive error triggers from Log Analyzer.
2. Match error pattern against `knowledge/fix-patterns.json`.
3. Execute remediation script (e.g., `npm install`, service restart).
4. Monitor system health for 60s post-fix.
5. Escalate to User via Notifier if fix fails after 3 attempts.
