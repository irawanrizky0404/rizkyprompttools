# Conversion Funnel Strategy: SaaS (Project Management Tool)

**Product:** TaskFlow Pro
**Target:** SMB team leads (5–25 users)
**Current Funnel:** Free trial → Paid subscription

---

## Funnel Stages

### Stage 1: Acquisition (Top of Funnel)
| Channel | Budget | CAC | Volume |
|---------|--------|-----|--------|
| Google Ads ("project management tool") | $8k/mo | $4.20 | 1,900 clicks |
| LinkedIn Ads (team leads, 50–200 emp) | $5k/mo | $6.80 | 735 clicks |
| Content: "10 signs your team outgrew Trello" | $2k/mo (SEO) | $2.10 | 950 organic |
| Referral (viral invite from existing users) | $0 | $0.80 | 3,200 signups |

### Stage 2: Activation (Free Trial)
```
Landing page → CTA "Start Free" → 14-day trial
                             ↓
                    Onboarding email sequence (D1, D3, D7)
                             ↓
                    Core action: Create first board + invite 2 team members
```

**Activation rate:** 42% (key metric: board created within 24hrs)

### Stage 3: Engagement
| Action | W1 Users | W2 Users | W4 Users |
|--------|---------|---------|---------|
| Board created | 100% | 85% | 72% |
| Task added | 94% | 78% | 65% |
| Team member invited | 88% | 71% | 58% |
| Automation rule set | 22% | 35% | 41% |
| Mobile app used | 31% | 42% | 48% |

### Stage 4: Conversion (Free → Paid)
```
Trial ends → In-app upsell modal + email (D12, D14)
                       ↓
Choose plan: Pro ($29/user/mo) or Business ($49/user/mo)
                       ↓
Payment flow → Stripe checkout
```

**Conversion levers:**
- **D12 email**: "Your trial ends in 2 days. Here's what your team built → [stats]"
- **D14 prompt**: Show locked features (automation, priorities, timeline view)
- **Price anchor**: Show "You'd save $___ with annual billing"

| Segment | Conversion Rate | Avg ACV |
|---------|----------------|---------|
| Created board + invited 3+ | 18% | $4,200/yr |
| Created board only | 6% | $1,800/yr |
| Never created board | 0.8% | $0 |
| Referral signups | 22% | $3,600/yr |

### Stage 5: Retention & Expansion
```
Month 3 → Health check call (success rep)
Month 6 → NPS survey + feature request review
Month 9 → Expansion offer: "Add 5 seats at 20% off"
Month 12 → Renewal with usage report + ROI calculator
```

| Metric | Target | Current |
|--------|--------|---------|
| Net MRR churn | < 3% | 2.4% |
| Gross MRR churn | < 5% | 4.1% |
| Expansion MRR | > 8% | 11% |
| NPS | > 40 | 44 |
| LTV:CAC | > 5:1 | 6.3:1 |

## Funnel Visualization
```
  100%  Visitors
   ↓
   42%  Activated (board created)
   ↓
   22%  Engaged (3+ actions/week in W3)
   ↓
   12%  Paid (trial converted)
   ↓
   88%  Retained (month 6)
   ↓
  111%  Net MRR (via expansion)
```
