# Project Risk Analyst: Cloud Migration Initiative

**Project:** Migrate monolith (PHP + MySQL) to microservices (Go + PostgreSQL + Kafka)
**Timeline:** Q2 2025 – Q4 2025 (9 months)

---

## Risk Register

| ID | Risk | Probability | Impact | RPN | Owner | Mitigation |
|----|------|-----------|--------|-----|-------|-----------|
| R01 | Data loss during DB migration | Low | Critical | 12 | DBA Team | Full backup + dry run 3x in staging; rollback script tested |
| R02 | Key engineer leaves mid-project | Medium | High | 16 | Eng Mgr | Cross-training; all architecture decisions documented in ADRs |
| R03 | Third-party API deprecation | Medium | High | 16 | PM | Maintain abstraction layer; track deprecation calendars weekly |
| R04 | Performance regression in new stack | High | Medium | 18 | Lead Eng | Canary deployment; p95 latency dashboards; load test every sprint |
| R05 | Budget overrun (unplanned infra cost) | High | Medium | 18 | Finance | Reserved instances; spot instances for staging; weekly cost alerts |
| R06 | Stakeholder scope creep | Medium | Medium | 12 | PM | Change control board; every request must have written justification |
| R07 | Security vulnerability in new dependencies | Medium | High | 16 | Security | Snyk scanning in CI; monthly pentest; dependency freeze 2 weeks before cutover |
| R08 | Integration testing gaps | High | High | 25 | QA Lead | Contract testing (Pact) mandatory for all services; chaos engineering day |

## Risk Heat Map
```
Probability
    ↑
  High    │    R04 R05    │    R08
  Med    │    R06         │ R02 R03 R07
  Low    │                │ R01
         └────────────────┴─────────────→ Impact
              Low    Med    High  Critical
```

## Top 3 Critical Risks

### R08 — Integration Testing Gaps (RPN: 25)
**Root cause:** 12 microservices with complex inter-dependencies. Devs testing in isolation.
**Action:** Mandate Pact contract tests for every API boundary. Weekly integration test day (no feature work, only test fixes).

### R04 — Performance Regression (RPN: 18)
**Root cause:** Go services may introduce unexpected latency vs optimized PHP.
**Action:** Benchmark suite running on every PR. Baseline p95 targets established in week 1.

### R02 — Key Person Risk (RPN: 16)
**Root cause:** Only 2 engineers deeply understand the monolith's business logic.
**Action:** Pair programming rotation. Record 5 "architecture decision records" per sprint.

## Monitoring Triggers
| Trigger | Action |
|---------|--------|
| p95 latency > 500ms for 10 min | Auto-rollback last deployment |
| Error budget consumed > 50% in a week | Stop all feature work, fix bugs |
| Budget burn rate > 110% | Finance review + reduce non-critical AWS spend |
| Unplanned absences > 2 critical-path devs | Shift deadline, inform stakeholders |
