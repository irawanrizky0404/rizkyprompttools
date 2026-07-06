# API Documentation: CloudSync REST API

**Base URL:** `https://api.cloudsync.com/v2`
**Auth:** Bearer token in `Authorization` header
**Rate Limit:** 1,000 req/min per token

---

## Endpoints

### `POST /v2/sync/jobs`

Create a new sync job between source and destination.

**Request Body:**
```json
{
  "source": {
    "type": "postgresql",
    "connection_string": "postgresql://user:pass@host:5432/db",
    "schemas": ["public"],
    "tables": ["users", "orders"]
  },
  "destination": {
    "type": "bigquery",
    "project_id": "my-project",
    "dataset_id": "staging",
    "write_mode": "append"
  },
  "schedule": {
    "cron": "0 */6 * * *",
    "timezone": "UTC",
    "backfill": true
  },
  "transforms": [
    {
      "field": "users.email",
      "action": "lowercase"
    },
    {
      "field": "orders.total",
      "action": "multiply",
      "value": 1.1
    }
  ]
}
```

**Response `201 Created`:**
```json
{
  "job_id": "job_7fG4hJ2kL1mN",
  "status": "created",
  "created_at": "2025-06-15T14:30:00Z",
  "next_run": "2025-06-15T20:30:00Z"
}
```

### `GET /v2/sync/jobs/:job_id`

Retrieve job details and latest run status.

**Response `200 OK`:**
```json
{
  "job_id": "job_7fG4hJ2kL1mN",
  "status": "active",
  "source": {
    "type": "postgresql",
    "tables": ["users", "orders"]
  },
  "destination": {
    "type": "bigquery",
    "dataset_id": "staging"
  },
  "last_run": {
    "status": "completed",
    "started_at": "2025-06-15T20:30:01Z",
    "finished_at": "2025-06-15T20:32:14Z",
    "rows_synced": 12483,
    "errors": 2
  },
  "next_run": "2025-06-16T02:30:00Z"
}
```

### `DELETE /v2/sync/jobs/:job_id`

Cancel and delete a sync job. Already-running execution will complete.

**Response `204 No Content`**

### `GET /v2/sync/jobs/:job_id/runs`

Paginated list of historical runs.

**Query Params:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `page` | integer | 1 | Page number |
| `per_page` | integer | 20 | Results per page (max 100) |
| `status` | string | — | Filter: running, completed, failed, cancelled |

**Response `200 OK`:**
```json
{
  "data": [
    {
      "run_id": "run_9s8Kj3mNxQ2p",
      "status": "completed",
      "started_at": "2025-06-15T20:30:01Z",
      "finished_at": "2025-06-15T20:32:14Z",
      "rows_synced": 12483,
      "errors": 2
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 14,
    "total_pages": 1
  }
}
```

## Error Codes
| Code | Meaning |
|------|---------|
| `source_connection_failed` | Could not connect to source database |
| `destination_connection_failed` | Could not connect to destination |
| `schema_mismatch` | Source and destination schemas differ |
| `invalid_cron` | Cron expression is invalid |
| `job_not_found` | Job ID does not exist |
| `rate_limit_exceeded` | Too many requests |

## Webhooks
Register a webhook to receive job events:
```
POST /v2/webhooks
Body: { "url": "https://myapp.com/webhook", "events": ["job.completed", "job.failed"] }
```

**Example payload:**
```json
{
  "event": "job.completed",
  "job_id": "job_7fG4hJ2kL1mN",
  "run_id": "run_9s8Kj3mNxQ2p",
  "timestamp": "2025-06-15T20:32:15Z",
  "data": {
    "rows_synced": 12483,
    "duration_seconds": 133
  }
}
```
