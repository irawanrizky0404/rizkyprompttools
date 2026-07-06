# Webhook Payload Architect: E-Commerce Order Events

**Service:** Order Management System → External Fulfillment API
**Protocol:** HTTPS POST with HMAC signature verification
**Rate Limit:** 100 req/s per merchant

---

## Event: `order.placed`

```json
{
  "event_id": "evt_9s8Kj3mNxQ2p",
  "event_type": "order.placed",
  "version": "2.0",
  "created_at": "2025-06-15T14:30:00Z",
  "merchant_id": "mch_abc123",
  "data": {
    "order_id": "ord_7fG4hJ2kL1m",
    "order_number": "INV-2025-04291",
    "status": "confirmed",
    "currency": "USD",
    "subtotal": 14950,
    "shipping": 500,
    "tax": 1495,
    "total": 16945,
    "items": [
      {
        "sku": "ERG-PRO-BLK",
        "name": "ErgoFlex Pro Chair - Black",
        "quantity": 1,
        "unit_price": 12900,
        "line_total": 12900,
        "product_type": "furniture",
        "requires_shipping": true,
        "weight_grams": 19050
      },
      {
        "sku": "MOUSE-WL-WHT",
        "name": "Wireless Mouse - White",
        "quantity": 2,
        "unit_price": 1025,
        "line_total": 2050,
        "product_type": "electronics",
        "requires_shipping": true,
        "weight_grams": 85
      }
    ],
    "shipping_address": {
      "name": "Jane Doe",
      "line1": "123 Main St",
      "line2": "Apt 4B",
      "city": "Portland",
      "state": "OR",
      "zip": "97201",
      "country": "US",
      "phone": "+15035551234"
    },
    "customer": {
      "id": "cus_8hD2fK9sL5a",
      "email": "jane@example.com",
      "first_name": "Jane",
      "last_name": "Doe"
    }
  }
}
```

## Event: `order.fulfilled`

```json
{
  "event_id": "evt_8jG7hN3mX5qR",
  "event_type": "order.fulfilled",
  "version": "2.0",
  "created_at": "2025-06-16T09:15:00Z",
  "merchant_id": "mch_abc123",
  "data": {
    "order_id": "ord_7fG4hJ2kL1m",
    "tracking": {
      "carrier": "UPS",
      "method": "Ground",
      "tracking_number": "1Z999AA10123456784",
      "estimated_delivery": "2025-06-20T18:00:00Z"
    },
    "fulfillment_items": [
      {
        "sku": "ERG-PRO-BLK",
        "quantity": 1,
        "fulfillment_status": "shipped"
      },
      {
        "sku": "MOUSE-WL-WHT",
        "quantity": 2,
        "fulfillment_status": "shipped"
      }
    ]
  }
}
```

## Headers
```
Content-Type: application/json
X-Webhook-ID: whk_4fG7hJ2kL1mN
X-Event-Type: order.placed
X-Signature: t=1749983400,v1=abc123def456...
X-Delivery-Attempt: 1
User-Agent: WebhookArchitect/2.0
```

## Signature Verification
```python
import hmac, hashlib

def verify_signature(payload: bytes, signature: str, secret: str) -> bool:
    parts = dict(p.split('=') for p in signature.split(','))
    expected = hmac.new(
        secret.encode(), payload, hashlib.sha256
    ).hexdigest()
    return hmac.compare_digest(parts['v1'], expected)
```

## Retry Policy
| Attempt | Delay | Total Elapsed |
|---------|-------|-------------|
| 1 | Immediate | 0s |
| 2 | 10s | 10s |
| 3 | 60s | 70s |
| 4 | 300s | 370s |
| 5 | 1800s | 2170s (~36 min) |

After 5 failed attempts → event moves to dead-letter queue. Manual replay available in dashboard.
