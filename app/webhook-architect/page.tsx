"use client";

import type { FC } from "react";
import {
  Zap, Mail, Database, Shield, RotateCcw, Gauge,
  CheckCircle, AlertTriangle, FileText, Webhook,
  Clock, Ban, Bell, Brain, Activity, RefreshCw, Lock,
  Key, Server, Globe, Layers, Filter, Search,
  Eye, Terminal, BookOpen, Sliders, Timer, Code,
  LogIn, LogOut, Download, Upload,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  trigger: [
    { id: "form-submit", title: "Form Submission", description: "Webhook fires when a form is submitted", icon: FileText },
    { id: "payment", title: "Payment Event", description: "Stripe, PayPal, or other payment processor event", icon: Zap },
    { id: "email-received", title: "Email Received", description: "Inbound email triggers a webhook", icon: Mail },
    { id: "cron-schedule", title: "Cron Schedule", description: "Time-based trigger via scheduled webhook", icon: Clock },
    { id: "db-change", title: "Database Change", description: "CDC event from database changes", icon: Database },
    { id: "user-action", title: "User Action", description: "User performs a specific action in-app", icon: Activity },
    { id: "system-event", title: "System Event", description: "Deployment, scaling, or health event", icon: Server },
    { id: "external-api", title: "External API Callback", description: "Third-party service sends a callback", icon: Globe },
    { id: "iot-webhook", title: "IoT Device Event", description: "Sensor or device sends telemetry data", icon: Upload },
  ],
  payload: [
    { id: "flat-json", title: "Flat JSON", description: "Simple key-value JSON object", icon: FileText },
    { id: "nested-json", title: "Nested JSON", description: "Hierarchical JSON with nested objects", icon: Layers },
    { id: "array", title: "Array of Records", description: "List of items with consistent schema", icon: Database },
    { id: "xml", title: "XML", description: "XML document with namespaces", icon: Code },
    { id: "form-data", title: "Form Data", description: "URL-encoded or multipart form data", icon: FileText },
    { id: "binary", title: "Binary / File", description: "Raw binary data or file upload", icon: Upload },
    { id: "graphql", title: "GraphQL", description: "GraphQL query result payload", icon: Database },
    { id: "protobuf", title: "Protobuf", description: "Protocol Buffers serialized data", icon: Code },
    { id: "csv-bulk", title: "CSV Bulk", description: "CSV formatted tabular data", icon: FileText },
  ],
  auth: [
    { id: "none-auth", title: "No Authentication", description: "Open endpoint with no auth (not recommended)", icon: Shield },
    { id: "api-key", title: "API Key (Header)", description: "Static API key passed in request header", icon: Key },
    { id: "bearer-token", title: "Bearer Token", description: "JWT or OAuth bearer token", icon: Lock },
    { id: "basic-auth", title: "Basic Auth", description: "Username and password via Basic Auth", icon: Shield },
    { id: "hmac", title: "HMAC Signature", description: "HMAC-SHA256 signed payload verification", icon: Lock },
    { id: "mutual-tls", title: "Mutual TLS", description: "Client certificate authentication", icon: Shield },
    { id: "oauth2", title: "OAuth 2.0", description: "OAuth 2.0 client credentials flow", icon: Key },
    { id: "webhook-secret", title: "Webhook Secret", description: "Pre-shared secret for webhook verification", icon: Lock },
    { id: "ip-whitelist", title: "IP Whitelist", description: "Restrict to known IP addresses", icon: Shield },
  ],
  retry: [
    { id: "no-retry", title: "No Retry", description: "Single attempt, no retry on failure", icon: Ban },
    { id: "linear", title: "Linear Retry", description: "Fixed interval between retry attempts", icon: RotateCcw },
    { id: "exponential", title: "Exponential Backoff", description: "Doubling interval with each retry", icon: RefreshCw },
    { id: "jitter", title: "Exponential + Jitter", description: "Exponential backoff with randomized jitter", icon: Activity },
    { id: "incremental", title: "Incremental Delay", description: "Linearly increasing delay between attempts", icon: Timer },
    { id: "immediate", title: "Immediate Retry", description: "Retry immediately up to N times", icon: RotateCcw },
    { id: "custom-interval", title: "Custom Interval", description: "User-defined intervals for each attempt", icon: Sliders },
    { id: "smart-retry", title: "Smart Retry", description: "Different strategy based on error type", icon: Brain },
    { id: "webhook-retry", title: "Webhook-Driven Retry", description: "Retry triggered by external webhook call", icon: Webhook },
  ],
  rateLimit: [
    { id: "unlimited", title: "Unlimited", description: "No rate limiting (use with caution)", icon: Zap },
    { id: "per-second", title: "Per Second", description: "Limit requests per second", icon: Clock },
    { id: "per-minute", title: "Per Minute", description: "Limit requests per minute", icon: Clock },
    { id: "per-hour", title: "Per Hour", description: "Limit requests per hour", icon: Clock },
    { id: "concurrent", title: "Concurrent Limit", description: "Maximum simultaneous in-flight requests", icon: Layers },
    { id: "token-bucket", title: "Token Bucket", description: "Token bucket algorithm for burst control", icon: Gauge },
    { id: "leaky-bucket", title: "Leaky Bucket", description: "Leaky bucket for steady rate enforcement", icon: Filter },
    { id: "sliding-window", title: "Sliding Window", description: "Sliding time window rate calculation", icon: Activity },
    { id: "adaptive", title: "Adaptive Limiting", description: "Rate adjusts based on downstream health", icon: Activity },
  ],
  delivery: [
    { id: "at-least-once", title: "At Least Once", description: "Guaranteed delivery with potential duplicates", icon: CheckCircle },
    { id: "at-most-once", title: "At Most Once", description: "Best effort, no retry, no duplicates", icon: Ban },
    { id: "exactly-once", title: "Exactly Once", description: "Guaranteed delivery with deduplication", icon: CheckCircle },
    { id: "best-effort", title: "Best Effort", description: "Fire and forget, no delivery guarantee", icon: Zap },
    { id: "ordered", title: "Ordered Delivery", description: "Preserve event ordering during delivery", icon: Layers },
    { id: "batch", title: "Batched Delivery", description: "Deliver events in batches on schedule", icon: Database },
    { id: "priority", title: "Priority Queued", description: "Priority-based delivery ordering", icon: Gauge },
    { id: "scheduled", title: "Scheduled Delivery", description: "Deliver at a specific future time", icon: Clock },
    { id: "idempotent", title: "Idempotent Delivery", description: "Idempotency key ensures no side effects", icon: Shield },
  ],
  error: [
    { id: "log-skip", title: "Log & Skip", description: "Log error, discard event, continue", icon: FileText },
    { id: "dead-letter", title: "Dead Letter Queue", description: "Send failed events to DLQ for review", icon: Ban },
    { id: "retry-then-dlq", title: "Retry Then DLQ", description: "Retry N times, then route to DLQ", icon: RotateCcw },
    { id: "notify-admin", title: "Notify Admin", description: "Send alert to admin on failure", icon: Bell },
    { id: "fallback-endpoint", title: "Fallback Endpoint", description: "Try a backup endpoint on failure", icon: Globe },
    { id: "circuit-breaker", title: "Circuit Breaker", description: "Stop after repeated failures, auto-recover", icon: Shield },
    { id: "throttle-on-error", title: "Throttle on Error", description: "Slow down delivery rate on errors", icon: Sliders },
    { id: "pause-webhook", title: "Pause Webhook", description: "Pause the webhook until manually resumed", icon: Timer },
    { id: "transform-retry", title: "Transform & Retry", description: "Transform payload and retry with new format", icon: RefreshCw },
  ],
  logging: [
    { id: "full-payload", title: "Full Payload Logging", description: "Log complete request and response bodies", icon: FileText },
    { id: "headers-only", title: "Headers Only", description: "Log only headers, mask payload", icon: Eye },
    { id: "summary", title: "Summary Stats", description: "Log timestamps, status, size, duration", icon: Activity },
    { id: "error-only", title: "Error Only", description: "Only log failed deliveries", icon: AlertTriangle },
    { id: "sampled", title: "Sampled Logging", description: "Log a percentage of all events", icon: Filter },
    { id: "structured-json", title: "Structured JSON Logs", description: "JSON-formatted logs for log aggregators", icon: Database },
    { id: "external-sink", title: "External Sink", description: "Stream logs to external SIEM or log service", icon: Globe },
    { id: "trace-context", title: "Trace Context", description: "Include distributed tracing correlation IDs", icon: Layers },
    { id: "audit-trail", title: "Audit Trail", description: "Immutable log for compliance and auditing", icon: Shield },
  ],
};

const dict: Record<string, Record<string, string>> = {
  trigger: {
    "form-submit": "The webhook fires when a user submits a web form. The payload typically includes form fields, timestamps, and metadata such as IP address and user agent. Configure CORS and validate origin headers to prevent CSRF attacks against the form endpoint.",
    payment: "Triggered by payment processor events such as charge.succeeded, invoice.paid, or subscription.updated. Payment webhooks are high-priority and must be processed reliably. Verify the event signature using the provider's cryptographic verification before processing.",
    "email-received": "An inbound email triggers the webhook via email-to-webhook services like SendGrid Inbound Parse or Mailgun Routes. The payload contains email headers, body (text and HTML), attachments, and spam score. Parse MIME content and handle multipart messages correctly.",
    "cron-schedule": "A scheduled cron-like trigger that fires the webhook at defined intervals. Configure timezone-aware scheduling with DST handling. Especially useful for periodic data syncs, report generation, and health check pings.",
    "db-change": "Fired when a database record is created, updated, or deleted using Change Data Capture (CDC) tools like Debezium or AWS DMS. The payload contains the before and after state of the row, plus metadata about the transaction. Handle schema changes gracefully.",
    "user-action": "Triggered when a user performs a specific action in the application, such as clicking a button, completing onboarding, or reaching a milestone. The payload includes user context, action type, and associated metadata. Respect user privacy and consent preferences.",
    "system-event": "System-level events such as deployment completions, auto-scaling events, health check failures, or certificate expiry warnings. These are critical for operational awareness. Usually includes severity levels and recommended actions.",
    "external-api": "Callbacks from third-party services after an asynchronous operation completes. For example, a video processing service notifies that encoding is finished. Implement timeout handling and idempotency keys to handle duplicate callbacks.",
    "iot-webhook": "IoT devices send telemetry data such as temperature, humidity, GPS coordinates, or status readings. Payloads can be frequent and small. Implement payload validation, device authentication, and rate limiting per device ID.",
  },
  payload: {
    "flat-json": "A simple flat JSON object with top-level key-value pairs. Easy to parse and validate. Best for simple events with a fixed schema. Example: {\"event\": \"user.created\", \"user_id\": \"123\", \"email\": \"user@example.com\"}.",
    "nested-json": "JSON with nested objects and arrays representing complex relationships. Requires careful path-based extraction. Example: {\"order\": {\"id\": \"ORD-001\", \"items\": [{\"sku\": \"ABC\", \"qty\": 2}]}}. Validate nested structures recursively.",
    array: "A JSON array of records with identical schema. Used for batch events or data syncs. Process items individually or in parallel. Include array-level metadata like total count and page number for pagination support.",
    xml: "XML payloads with optional namespaces, attributes, and mixed content. Requires XML parsing with namespace resolution. Validate against XSD schema if available. Handle CDATA sections, entity encoding, and large document sizes appropriately.",
    "form-data": "URL-encoded form data or multipart form data. Common in older webhook integrations and legacy systems. Parse standard form encoding and handle file uploads in multipart content. Validate required fields and data types.",
    binary: "Raw binary payloads such as images, audio files, or generic file uploads. Store the binary content in blob storage (S3, GCS) and pass a reference URL in the webhook. Set maximum file size limits and validate file types via magic bytes.",
    graphql: "Payloads conforming to GraphQL response structure. May contain data, errors, and extensions fields. Handle both successful responses and partial errors. Validate against the GraphQL schema and resolve __typename discriminators for unions.",
    protobuf: "Protocol Buffers serialized binary data with a defined .proto schema. Requires schema management and versioning. More compact and faster to parse than JSON. Maintain backward compatibility using field numbering conventions.",
    "csv-bulk": "CSV-formatted tabular data often from bulk data exports or legacy system integrations. Parse with proper handling of quoted fields, escaped commas, and varying line endings. Validate column headers and row counts before processing.",
  },
  auth: {
    "none-auth": "No authentication is applied to the webhook endpoint. Anyone who discovers the URL can send requests. Only suitable for internal, non-public endpoints on secure networks. Strongly discouraged for any production or internet-facing webhook.",
    "api-key": "A static API key passed in a custom HTTP header (e.g., X-API-Key). Simple to implement but the key can be compromised if leaked. Rotate keys periodically and support key versioning for zero-downtime rotation.",
    "bearer-token": "A bearer token, typically a JWT, passed in the Authorization header. Tokens can encode claims and expiry. Validate the token signature, check expiry, and verify required claims. Supports fine-grained scoping and revocation.",
    "basic-auth": "HTTP Basic Authentication with a username and password sent in the Authorization header. Credentials are base64-encoded, not encrypted. Always use over HTTPS. Suitable for simple integrations with legacy systems.",
    hmac: "HMAC-SHA256 signature computed over the request body and sent in a custom header (e.g., X-Signature). The receiving end recomputes the signature using a shared secret and compares. Protects against tampering and replay attacks when combined with a timestamp.",
    "mutual-tls": "Both the client and server present TLS certificates for mutual authentication. Provides strong cryptographic identity verification. Requires certificate management infrastructure. Best for high-security B2B integrations.",
    oauth2: "OAuth 2.0 client credentials flow where the sender obtains an access token from an authorization server and includes it in requests. Supports token expiry, refresh, and revocation. More complex setup but provides industry-standard auth.",
    "webhook-secret": "A pre-shared secret used to verify webhook authenticity. The provider signs the payload with the secret, and the receiver verifies the signature. Common in Stripe, GitHub, and SendGrid webhooks. Store secrets in a secure vault.",
    "ip-whitelist": "Restrict incoming webhook requests to a predefined list of IP addresses or CIDR ranges. GitBranch with other auth methods for defense in depth. Publish the IP ranges and monitor for changes. Challenges with IPv6 and cloud provider IP variability.",
  },
  retry: {
    "no-retry": "The webhook delivery is attempted exactly once. If the endpoint returns any error (4xx, 5xx, timeout), the event is discarded immediately. Simplest strategy but least reliable. Only suitable for non-critical, low-priority events where data loss is acceptable.",
    linear: "Retry at a fixed interval, e.g., every 60 seconds for up to 5 attempts. Simple to implement and predictable. However, it does not relieve pressure on an overloaded endpoint. Best for transient errors with quick recovery expectations.",
    exponential: "Double the delay between each retry attempt (e.g., 10s, 20s, 40s, 80s, 160s). Gives the downstream service time to recover. Standard approach for most webhook retry policies. Set a maximum delay cap to prevent excessive wait times.",
    jitter: "Exponential backoff with random jitter added to each interval. Prevents thundering herd problems when many webhooks retry simultaneously. The random component is typically ±50% of the calculated delay. Industry best practice for robust systems.",
    incremental: "Linearly increasing delay (e.g., 30s, 60s, 90s, 120s). Predictable and easy to understand. Less aggressive than exponential backoff. Suitable when the expected recovery time is proportional to the number of failures.",
    immediate: "Retry immediately N times without any delay. Useful for transient network glitches where a brief pause resolves the issue. Limit to 2-3 immediate retries. If still failing, ArrowLeftRight to a backoff strategy to avoid hammering the endpoint.",
    "custom-interval": "Define exact delays for each retry attempt as an array of durations (e.g., [5s, 30s, 2m, 5m, 30m]). Maximum flexibility for fine-tuned strategies. Harder to configure but allows scenario-specific optimization.",
    "smart-retry": "Different retry strategies based on the HTTP status code or error type. 429 (rate limited) gets a longer backoff, 5xx gets standard backoff, 4xx (bad request) may not retry at all. Requires intelligent error classification logic.",
    "webhook-retry": "Instead of automatic retry, the webhook endpoint can request a retry by calling back to a retry endpoint. Gives the consumer control over when they are ready to receive the event again. Useful for endpoints with variable processing capacity.",
  },
  rateLimit: {
    unlimited: "No rate limiting is applied. Every incoming request is processed immediately. Risk of overwhelming downstream services and consuming excessive resources. Only use in controlled environments with guaranteed low traffic volumes.",
    "per-second": "Limit the number of webhook deliveries per second. Smooths traffic spikes and protects downstream services. Example: 100 requests/second. Dropped requests should be queued or rejected with a 429 status and Retry-After header.",
    "per-minute": "Limit deliveries per minute. Suitable for APIs with per-minute rate limits. Example: 1000 requests/minute. GitBranch with per-second limits for granular control. Reset the counter at the start of each minute window.",
    "per-hour": "Limit deliveries per hour. Used for daily batch processing or APIs with hourly quotas. Example: 50000 requests/hour. Track usage continuously and throttle early to avoid exhausting the quota before the hour ends.",
    concurrent: "Limit the number of in-flight webhook deliveries at any moment. Prevents resource exhaustion from too many simultaneous connections. Example: max 50 concurrent deliveries. Additional requests wait in a queue until a slot opens.",
    "token-bucket": "Token bucket algorithm where tokens accumulate at a fixed rate and each request consumes one token. Allows bursts up to the bucket size while enforcing a steady long-term rate. Best for traffic with natural bursts followed by lulls.",
    "leaky-bucket": "Leaky bucket algorithm where requests enter a queue and are processed at a fixed rate. Smooths out bursts completely but introduces processing delay. Good for maintaining a consistent load on downstream services.",
    "sliding-window": "Rate limit calculated over a sliding time window rather than fixed intervals. Provides smoother enforcement and prevents boundary spikes. More computationally expensive but gives fairer rate limiting. Implement with a rolling counter or log.",
    adaptive: "Rate limit adjusts dynamically based on the downstream endpoint's health. If the endpoint starts returning errors or slow responses, the rate automatically decreases. When health improves, the rate increases. Requires health check integration.",
  },
  delivery: {
    "at-least-once": "The webhook system guarantees delivery at least once. If the endpoint does not acknowledge receipt (2xx status), the delivery is retried. May result in duplicate deliveries. Consumers must implement idempotency handling via idempotency keys.",
    "at-most-once": "The webhook is delivered at most once. No retries are performed if the endpoint does not acknowledge. Simplest guarantee with no duplicate risk but potential for data loss. Suitable for non-critical, high-volume event streams.",
    "exactly-once": "Combines at-least-once delivery with deduplication to achieve exactly-once semantics. Each event has a unique ID, and the consumer deduplicates by storing processed IDs. Requires persistent storage of processed IDs and at-least-once delivery from the producer.",
    "best-effort": "The system attempts delivery once without any guarantee. No retries, no queueing, no acknowledgment tracking. Maximum throughput and minimal overhead. Suitable for analytics events where occasional loss is acceptable.",
    ordered: "Events are delivered to the endpoint in the same order they were produced. Requires sequential processing and can reduce throughput. Critical for event sourcing, log replication, and state machine workflows where ordering matters.",
    batch: "Events are accumulated and delivered in batches on a schedule or when a batch size is reached. Improves efficiency for endpoints that process bulk data. Include batch metadata and handle partial batch failures gracefully.",
    priority: "Events have priority levels and higher-priority events are delivered before lower-priority ones. Requires a priority queue implementation. Critical alerts and payment events get higher priority than analytics or logging events.",
    scheduled: "Events can be scheduled for delivery at a specific future time. Uses a delayed queue or scheduled task system. Useful for reminders, time-based notifications, and delayed processing workflows. Handle timezone conversions carefully.",
    idempotent: "Each event includes an idempotency key. The consumer uses this key to ensure that processing happens only once, even if the event is delivered multiple times. Idempotency keys should be unique per event and stored until the key expires.",
  },
  error: {
    "log-skip": "When delivery fails, log the error details and discard the event. No retry, no alert. Simplest error handling but risks silent data loss. Log sufficient context (event ID, endpoint, status, error message) for debugging.",
    "dead-letter": "Failed events are routed to a Dead Letter Queue (DLQ) for later inspection and reprocessing. The DLQ stores the original payload, error details, and metadata. Set up alerts and periodic review processes for the DLQ depth.",
    "retry-then-dlq": "Attempt retries up to N times using the configured retry policy. If all retries fail, the event moves to the DLQ. This is the standard robust approach — gives transient errors time to resolve while preserving failed events for analysis.",
    "notify-admin": "Send an immediate notification to administrators when a webhook delivery fails. Use Slack, PagerDuty, email, or SMS based on severity. Include event summary, error details, and a direct link to the execution log for quick investigation.",
    "fallback-endpoint": "Configure a secondary endpoint that receives events when the primary endpoint fails. Useful for high-availability setups. Both endpoints should be functionally identical. Monitor fallback usage as it indicates primary endpoint issues.",
    "circuit-breaker": "Monitor delivery failure rates. When failures exceed a threshold (e.g., 50% of last 100 requests), the circuit opens and all further deliveries fail fast without attempting the endpoint. After a cooldown period, the circuit half-opens to test recovery. Prevents cascading failures.",
    "throttle-on-error": "Reduce the delivery rate when errors are detected. If the endpoint returns errors or slow responses, automatically slow down. Gradually increase the rate as the endpoint recovers. Protects the downstream service from being overwhelmed.",
    "pause-webhook": "Pause all deliveries for this webhook when a critical error threshold is reached. The webhook remains paused until manually resumed by an administrator or automated health check confirms recovery. Prevents wasted resources on a failing endpoint.",
    "transform-retry": "When a delivery fails due to a format or schema error, transform the payload into an alternative format and retry. Useful when integrating with endpoints that have strict schema requirements. Log both original and transformed payloads for auditing.",
  },
  logging: {
    "full-payload": "Log the complete request and response bodies for every webhook delivery. Provides maximum debugging information but generates large log volumes and may capture sensitive data. Mask sensitive fields (passwords, tokens, PII) before logging.",
    "headers-only": "Log only HTTP headers and metadata (timestamp, duration, status code, content length). Mask or omit sensitive headers like Authorization and Cookie. Provides sufficient operational insight without the cost and risk of full payload logging.",
    summary: "Log aggregated summary statistics such as total deliveries, success rate, average latency, P50/P95/P99 response times, and error breakdown per endpoint. Useful for dashboards and SLA monitoring. Update counters periodically rather than per-event.",
    "error-only": "Only generate log entries for failed deliveries. Reduces log volume significantly while capturing all error information needed for troubleshooting. Successful deliveries are not logged at all. Suitable for stable integrations with low error rates.",
    sampled: "Log a configurable percentage of all deliveries (e.g., 10%). Unsampled entries record only basic metadata. Provides representative data for analysis while controlling log costs. Common approach at very high event volumes. Use consistent sampling for accurate metrics.",
    "structured-json": "All log entries are emitted as structured JSON with consistent field names, types, and schema. Compatible with log aggregation tools like Elasticsearch, Datadog, and Splunk. Include severity level, timestamp in ISO 8601, service name, and trace ID.",
    "external-sink": "Stream logs in real-time to an external log management or SIEM system. Use a log shipper (Fluentd, Logstash) or direct API integration. Ensure the log sink is highly available and does not become a bottleneck for webhook processing.",
    "trace-context": "Include distributed tracing headers (W3C Trace-Context, Zipkin B3) in every log entry. Enables end-to-end tracing across microservices. Generate a unique trace ID for each incoming webhook and propagate it to downstream calls for full observability.",
    "audit-trail": "Maintain an immutable, append-only log of all webhook deliveries for compliance and auditing purposes. Include before/after state snapshots, exact timestamps, and identity information. Store in write-once-read-many (WORM) storage for regulatory compliance.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const trigger = selections.step1;
  const payload = selections.step2;
  const auth = selections.step3;
  const retry = selections.step4;
  const rateLimit = selections.step5;
  const delivery = selections.step6;
  const error = selections.step7;
  const logging = selections.step8;

  const lines: string[] = [];

  lines.push("# Webhook Payload Architecture Blueprint");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const trLabel = Array.isArray(trigger) ? trigger.map(id => options.trigger.find(o => o.id === id)?.title || id).join(", ") : options.trigger.find(o => o.id === trigger)?.title || trigger;
  const trNote = notes[`trigger-${trigger}`] || "";
  lines.push(`| Trigger Event | ${trLabel} | ${trNote}`);
  const pLabel = Array.isArray(payload) ? payload.map(id => options.payload.find(o => o.id === id)?.title || id).join(", ") : options.payload.find(o => o.id === payload)?.title || payload;
  const pNote = notes[`payload-${payload}`] || "";
  lines.push(`| Payload Structure | ${pLabel} | ${pNote}`);
  const aLabel = Array.isArray(auth) ? auth.map(id => options.auth.find(o => o.id === id)?.title || id).join(", ") : options.auth.find(o => o.id === auth)?.title || auth;
  const aNote = notes[`auth-${auth}`] || "";
  lines.push(`| Authentication | ${aLabel} | ${aNote}`);
  const rLabel = Array.isArray(retry) ? retry.map(id => options.retry.find(o => o.id === id)?.title || id).join(", ") : options.retry.find(o => o.id === retry)?.title || retry;
  const rNote = notes[`retry-${retry}`] || "";
  lines.push(`| Retry Policy | ${rLabel} | ${rNote}`);
  const rlLabel = Array.isArray(rateLimit) ? rateLimit.map(id => options.rateLimit.find(o => o.id === id)?.title || id).join(", ") : options.rateLimit.find(o => o.id === rateLimit)?.title || rateLimit;
  const rlNote = notes[`rateLimit-${rateLimit}`] || "";
  lines.push(`| Rate Limiting | ${rlLabel} | ${rlNote}`);
  const dLabel = Array.isArray(delivery) ? delivery.map(id => options.delivery.find(o => o.id === id)?.title || id).join(", ") : options.delivery.find(o => o.id === delivery)?.title || delivery;
  const dNote = notes[`delivery-${delivery}`] || "";
  lines.push(`| Delivery Guarantee | ${dLabel} | ${dNote}`);
  const eLabel = Array.isArray(error) ? error.map(id => options.error.find(o => o.id === id)?.title || id).join(", ") : options.error.find(o => o.id === error)?.title || error;
  const eNote = notes[`error-${error}`] || "";
  lines.push(`| Error Handling | ${eLabel} | ${eNote}`);
  const lLabel = Array.isArray(logging) ? logging.map(id => options.logging.find(o => o.id === id)?.title || id).join(", ") : options.logging.find(o => o.id === logging)?.title || logging;
  const lNote = notes[`logging-${logging}`] || "";
  lines.push(`| Logging | ${lLabel} | ${lNote}`);
  lines.push("");

  lines.push("## Architecture Overview");
  lines.push("");
  lines.push("### Trigger Event");
  lines.push("");
  lines.push(Array.isArray(trigger) ? trigger.map(v => dict.trigger[v] || v).join(", ") : dict.trigger[trigger] || trigger);
  if (trNote) lines.push(`> **Note:** ${trNote}`);
  lines.push("");

  lines.push("### Payload Structure");
  lines.push("");
  lines.push(Array.isArray(payload) ? payload.map(v => dict.payload[v] || v).join(", ") : dict.payload[payload] || payload);
  if (pNote) lines.push(`> **Note:** ${pNote}`);
  lines.push("");

  lines.push("### Authentication");
  lines.push("");
  lines.push(Array.isArray(auth) ? auth.map(v => dict.auth[v] || v).join(", ") : dict.auth[auth] || auth);
  if (aNote) lines.push(`> **Note:** ${aNote}`);
  lines.push("");

  lines.push("### Retry Policy");
  lines.push("");
  lines.push(Array.isArray(retry) ? retry.map(v => dict.retry[v] || v).join(", ") : dict.retry[retry] || retry);
  if (rNote) lines.push(`> **Note:** ${rNote}`);
  lines.push("");

  lines.push("### Rate Limiting");
  lines.push("");
  lines.push(Array.isArray(rateLimit) ? rateLimit.map(v => dict.rateLimit[v] || v).join(", ") : dict.rateLimit[rateLimit] || rateLimit);
  if (rlNote) lines.push(`> **Note:** ${rlNote}`);
  lines.push("");

  lines.push("### Delivery Guarantee");
  lines.push("");
  lines.push(Array.isArray(delivery) ? delivery.map(v => dict.delivery[v] || v).join(", ") : dict.delivery[delivery] || delivery);
  if (dNote) lines.push(`> **Note:** ${dNote}`);
  lines.push("");

  lines.push("### Error Handling");
  lines.push("");
  lines.push(Array.isArray(error) ? error.map(v => dict.error[v] || v).join(", ") : dict.error[error] || error);
  if (eNote) lines.push(`> **Note:** ${eNote}`);
  lines.push("");

  lines.push("### Logging");
  lines.push("");
  lines.push(Array.isArray(logging) ? logging.map(v => dict.logging[v] || v).join(", ") : dict.logging[logging] || logging);
  if (lNote) lines.push(`> **Note:** ${lNote}`);
  lines.push("");

  lines.push("## Webhook Request Flow");
  lines.push("");
  lines.push("```");
  lines.push("┌─────────────┐");
  lines.push(`│   ${trLabel.padEnd(11)}│`);
  lines.push("└──────┬──────┘");
  lines.push("       │");
  lines.push("       ▼");
  lines.push("┌─────────────┐");
  lines.push(`│   Auth: ${aLabel.padEnd(7)}│`);
  lines.push("└──────┬──────┘");
  lines.push("       │");
  lines.push("       ▼");
  lines.push("┌─────────────────┐");
  lines.push(`│ Rate Limit: ${rlLabel.padEnd(10)}│`);
  lines.push("└──────┬──────────┘");
  lines.push("       │");
  lines.push("       ▼");
  lines.push("┌─────────────┐");
  lines.push(`│ Validate ··· │`);
  lines.push("└──────┬──────┘");
  lines.push("       │");
  lines.push("       ▼");
  lines.push("┌─────────────┐");
  lines.push(`│   ${dLabel.padEnd(11)}│`);
  lines.push("└──────┬──────┘");
  lines.push("       │");
  lines.push("  ┌────┴────┐");
  lines.push("  │         │");
  lines.push("  ▼         ▼");
  lines.push(" OK        FAIL");
  lines.push("  │         │");
  lines.push("  │    ┌────┴────┐");
  lines.push("  │    │ ${eLabel.padEnd(9)}│");
  lines.push("  │    └────┬────┘");
  lines.push("  │         │");
  lines.push("  │    ┌────┴────┐");
  lines.push("  │    │ ${rLabel.padEnd(9)}│");
  lines.push("  │    └─────────┘");
  lines.push("  │         │");
  lines.push("  ▼         ▼");
  lines.push("┌─────────────┐");
  lines.push(`│ Log: ${lLabel.padEnd(8)}│`);
  lines.push("└─────────────┘");
  lines.push("```");
  lines.push("");

  lines.push("## Sample Payload Template");
  lines.push("");
  lines.push("```json");
  lines.push("{");
  lines.push('  "event_id": "evt_xxxxxxxxxxxxx",');
  lines.push('  "event_type": "' + trigger + '",');
  lines.push('  "timestamp": "2026-06-30T12:00:00Z",');
  lines.push('  "version": "1.0",');
  lines.push('  "data": {');
  lines.push('    // Event-specific payload fields');
  lines.push("  }");
  lines.push("}");
  lines.push("```");
  lines.push("");

  lines.push("## Configuration Specifications");
  lines.push("");
  lines.push("| Parameter | Value | Notes");
  lines.push("|-----------|-------|------");
  lines.push("| Endpoint URL | `https://api.example.com/webhooks` | Configured per integration");
  if (auth === "api-key") lines.push("| Auth Header | `X-API-Key` | Static key, rotate quarterly");
  else if (auth === "bearer-token") lines.push("| Auth Header | `Authorization: Bearer <token>` | JWT with 1h expiry");
  else if (auth === "hmac") lines.push("| Signature Header | `X-Signature` | HMAC-SHA256 of body");
  else if (auth === "basic-auth") lines.push("| Auth Header | `Authorization: Basic <base64>` | Use unique credentials per webhook");
  if (retry === "exponential" || retry === "jitter") {
    lines.push("| Max Retries | 5 | Doubling interval: 10s, 20s, 40s, 80s, 160s");
    if (retry === "jitter") lines.push("| Jitter Range | ±50% | Randomize delay to avoid thundering herd");
  } else if (retry === "linear") {
    lines.push("| Retry Interval | 60s | Fixed interval, max 5 attempts");
  }
  if (rateLimit !== "unlimited") {
    lines.push("| Rate Limit Algorithm | " + rlLabel + " | Configurable per webhook endpoint");
    lines.push("| Rate Limit Response | 429 Too Many Requests | Include Retry-After header");
  }
  lines.push("| Timeout | 30s | Per-delivery HTTP timeout");
  lines.push("| Payload Size Limit | 5 MB | Larger payloads use signed S3 references");
  lines.push("");

  lines.push("## Security Checklist");
  lines.push("");
  lines.push("- [ ] " + (auth === "none-auth" ? "**WARNING**: No authentication configured. Add auth for production." : "Authentication configured: " + aLabel));
  lines.push("- [ ] All webhook traffic goes through HTTPS (TLS 1.3)");
  lines.push("- [ ] Payload validation schema defined and enforced");
  lines.push("- [ ] Rate limiting active to prevent abuse");
  lines.push("- [ ] Secrets and keys stored in secure vault (not code)");
  lines.push("- [ ] IP allowlisting considered for additional security");
  lines.push("- [ ] Audit logging enabled for compliance");
  lines.push("- [ ] Webhook endpoint tested with sample payloads before production");
  lines.push("");

  lines.push("## Operational Runbook");
  lines.push("");
  lines.push("### Monitoring");
  lines.push("- Alert on delivery failure rate exceeding 5% over 5 minutes.");
  lines.push("- Monitor DLQ depth; alert if > 1000 messages accumulate.");
  lines.push("- Track P50/P95/P99 delivery latency and alert on degradation.");
  lines.push("");
  lines.push("### Troubleshooting");
  lines.push("- Check webhook logs for error status codes and response bodies.");
  lines.push("- Verify endpoint availability and response time from monitoring.");
  lines.push("- Test with sample payloads using the webhook testing tool.");
  lines.push("- Check rate limit counters and reset if misconfigured.");
  lines.push("");
  lines.push("### Maintenance");
  lines.push("- Rotate API keys and secrets every 90 days.");
  lines.push("- Review and update payload schemas when integrating new event types.");
  lines.push("- Archive processed events from DLQ after 30 days.");
  lines.push("- Update endpoint TLS certificates before expiry.");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Webhook Payload Architect_");

  return lines.join("\n");
}

export default function WebhookArchitectPage() {
  return (
    <ToolShell
      title="Webhook Payload Architect"
      steps={[
        { id: 1, label: "Trigger", component: (p) => (
          <GenericStep {...p} title="Trigger Event" description="What event triggers the webhook?" options={options.trigger} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="trigger" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Payload", component: (p) => (
          <GenericStep {...p} title="Payload Structure" description="What format will the payload use?" options={options.payload} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="payload" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Auth", component: (p) => (
          <GenericStep {...p} title="Authentication" description="How should the webhook be authenticated?" options={options.auth} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="auth" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Retry", component: (p) => (
          <GenericStep {...p} title="Retry Policy" description="How should delivery failures be retried?" options={options.retry} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="retry" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Rate Limit", component: (p) => (
          <GenericStep {...p} title="Rate Limiting" description="How should delivery rate be controlled?" options={options.rateLimit} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="rateLimit" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Delivery", component: (p) => (
          <GenericStep {...p} title="Delivery Guarantee" description="What delivery guarantee is needed?" options={options.delivery} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="delivery" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Error", component: (p) => (
          <GenericStep {...p} title="Error Handling" description="How should delivery errors be handled?" options={options.error} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="error" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Logging", component: (p) => (
          <GenericStep {...p} title="Logging" description="What logging strategy should be used?" options={options.logging} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="logging" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}











