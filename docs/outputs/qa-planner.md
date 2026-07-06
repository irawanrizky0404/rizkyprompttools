# QA Edge-Case Planner: Payment Checkout Flow

## Feature Under Test
Stripe-powered checkout with promo codes, tax calculation, and 3DS verification.

## Edge Cases Identified

### 1. Promo Code Overlaps
| Scenario | Input | Expected |
|----------|-------|----------|
| Stackable codes disabled but user enters two | `PROMO20` + `FREESHIP` | Apply only first, show error on second |
| Percentage cap exceeded | `SUPER50` ($200 → $100 discount on $120 subtotal) | Cap discount at subtotal, min cart $0.01 |
| Expired code with same name as active | `LAUNCH` (expired) | Return "Promo code expired", do not reveal active ones |
| Code tied to first purchase only | Returning user enters `WELCOME` | Graceful rejection, suggest alternative |

### 2. Tax Calculation
| Location | Product Type | Expected Behavior |
|----------|-------------|------------------|
| EU country with digital VAT | SaaS subscription | Apply 20% VAT on net price |
| US state with tax holiday | Physical goods | Zero tax during holiday window |
| Canada with PST/GST | Digital download | Apply GST only, skip PST |
| Untaxable region (DE zone) | Any | No tax line, proper receipt wording |

### 3. 3DS Authentication
| Card Type | Behavior | Fallback |
|-----------|----------|----------|
| 3DS2 challenge required | Redirect to bank page, return token | Timeout → cancel order, email retry link |
| 3DS1 card | Silently downgrade to 3DS1 | If bank down → retry 2x, then decline |
| Frictionless 3DS2 | No user interaction | Instant confirm |
| Network timeout during redirect | Connection lost | Poll for 120s, then void + notification |

### 4. Currency & Decimal Edge Cases
| Amount | Currency | Expected |
|--------|----------|----------|
| $0.01 | USD | Process as valid micro-charge |
| ¥1 | JPY | Store as integer (1), not float (0.01) |
| 0.001 BTC | Crypto | Round to 0.00 on quote, show "less than $0.01" |
| $999,999.99 | USD | Test max auth limit without triggering fraud flag |
| $1,000,000.00 | USD | Decline gracefully, prompt for wire transfer |

### 5. Concurrency
- Double-click "Pay Now" within 100ms → idempotency key dedup
- Webhook race: `charge.succeeded` before `checkout.session.completed`
- Inventory: two users buying last item → first wins, second sees "out of stock"

## Test Coverage Matrix
| Priority | Count |
|----------|-------|
| P0 (critical) | 8 |
| P1 (high) | 14 |
| P2 (medium) | 22 |
| P3 (low) | 9 |
| **Total** | **53** |
