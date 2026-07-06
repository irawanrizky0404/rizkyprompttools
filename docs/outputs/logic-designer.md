# n8n/Make Logic Designer: Lead Scoring + Slack Alert

**Workflow:** Inbound lead → enrichment → score → route to sales

---

## Node 1 — Webhook (Trigger)
```
Method: POST
Path: /inbound-lead
Auth: None (API key in header)

Sample payload:
{
  "email": "sarah@acmecorp.com",
  "name": "Sarah Chen",
  "company": "AcmeCorp",
  "company_size": 250,
  "source": "website_form",
  "page_url": "/pricing/enterprise",
  "referrer": "google.com/search?q=acmecorp+ERP"
}
```

## Node 2 — Enrichment (Clearbit)
```
Action: Person + Company lookup by email
Output:
├── Person: role = "CTO", seniority = "executive", twitter = @sarahchen
├── Company: industry = "manufacturing", funding = "Series C" ($45M), tech_stack = ["Salesforce", "Slack", "AWS"]
└── Confidence: 0.97
```

## Node 3 — Lead Score (IF/ELSE)
```
Score = 0
+ 20 (source = website_form)
+ 15 (company_size > 100)
+ 25 (role = CTO/VP/Director)
+ 10 (funding > $10M)
+ 10 (page = /pricing/enterprise)
= 80 total

IF Score >= 70 → Route to "Hot Lead" branch
ELSE → Route to "Nurture" branch
```

## Node 4a — Hot Lead (Slack + HubSpot)
```
Slack Message:
┌─────────────────────────────────────────┐
│ 🔥 HOT LEAD                             │
│ Sarah Chen — CTO @ AcmeCorp            │
│ Company: 250 emp, Series C ($45M)      │
│ Source: Website (Enterprise Pricing)    │
│ Score: 80                               │
│                                         │
│ Assigned: derek@company.com             │
│ [View in HubSpot]                       │
└─────────────────────────────────────────┘

HubSpot: Create Deal (Stage = "Qualified", Amount = $0 → forecast)
```

## Node 4b — Nurture (Email Sequence)
```
Subject: Thanks for checking us out, Sarah

Hi Sarah,

I noticed you were looking at our Enterprise plan.
Since you're at AcmeCorp, I thought you'd find this
case study interesting: [AcmeCorp competitor] saved
$240k/yr using our platform.

Worth 15 minutes?
— Derek

Scheduled: Send in 1 hour
```

## Node 5 — Logging (Google Sheets)
```
Headers: timestamp, email, name, company, score, branch
Row: "2025-06-15 14:30:05", "sarah@acmecorp.com", "Sarah Chen", "AcmeCorp", 80, "HOT"
```

## Error Handling
| Node | Error | Action |
|------|-------|--------|
| Webhook | Invalid JSON | Return 400 with error description |
| Clearbit | Rate limit (429) | Wait 60s, retry max 3x |
| Slack | Channel not found | Log to #ops-alerts instead |
| HubSpot | Duplicate contact | Merge by email, update existing deal |
