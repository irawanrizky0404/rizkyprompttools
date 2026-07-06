# AI Automation Workflow: Customer Support Triage

## Pipeline Overview
```
Email In → AI Classifier → Priority Router → Draft Reply → Human Review → Send
```

## Step 1 — Inbound Ingestion
| Trigger | Source | Format |
|---------|--------|--------|
| `email.received` | support@company.com | RFC 5322 mail parsed to JSON |
| `ticket.created` | Zendesk webhook | Standard ticket payload |

## Step 2 — Classifier (GPT-4o)
```
System: Categorize into one of [billing, technical, account, feature-request, other].
        Extract sentiment [frustrated, neutral, happy].
        Extract urgency [low, medium, high, critical].
```
**Output schema:**
```json
{
  "category": "technical",
  "sentiment": "frustrated",
  "urgency": "high",
  "summary": "User cannot connect API — 503 errors since deployment",
  "confidence": 0.94
}
```

## Step 3 — Priority Router
| Condition | Action |
|-----------|--------|
| urgency = critical | Ping #oncall Slack channel, assign P0 |
| sentiment = frustrated AND urgency ≥ medium | Escalate to senior agent |
| category = billing | Route to stripe@, auto-refund if amount < $50 |
| else | Add to general queue (round-robin) |

## Step 4 — Draft Generator
Prompt template:
```
Context: {{ ticket.history }}
User question: {{ ticket.body }}
Knowledge base: {{ search_results }}

Draft a polite, helpful response. If technical, include troubleshooting steps.
Use the company's brand voice: friendly but concise. Sign with "— Alex from AcmeCo"
```

## Step 5 — Human-in-the-Loop
- Drafts marked confidence < 0.8 go to manual review queue
- Agents can Accept, Edit, or Reject within 1-click
- All responses stored to fine-tune future drafts

## Analytics Dashboard
| Metric | Current | Target |
|--------|---------|--------|
| Auto-resolve rate | 62% | 75% |
| Avg handle time | 4.2 min | < 3 min |
| CSAT score | 4.6 / 5 | 4.7 / 5 |
| Human review rate | 38% | 25% |
