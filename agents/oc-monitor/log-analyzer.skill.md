# Skill: Log Analyzer
Role: Agent 01 (OC Monitoring Agent)

## Description
Reads structured logs from all agents and classifies entries as WARN, ERROR, or CRITICAL.

## Implementation Details
1. Subscribe to `LOGS:*` channels on Redis.
2. Parse JSON log entries.
3. Filter by severity level.
4. Correlate recurring errors across different agents.
5. Feed CRITICAL logs to Auto-Fixer for remediation steps.
