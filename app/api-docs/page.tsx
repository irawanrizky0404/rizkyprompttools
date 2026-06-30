"use client";

import type { FC } from "react";
import {
  Globe, Shield, GitBranch, FileJson, FileText, AlertTriangle,
  Gauge, Code, Lock, Key, Server, Braces, Box, Terminal,
  BookOpen, Link, Webhook, Zap, Download, ExternalLink,
  Unlock, Fingerprint, Route, Split, Sliders,
  MessageSquare, Database, Cloud, Layers, Package,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  apiType: [
    { id: "rest", title: "RESTful API", description: "Standard REST API with HTTP verbs and resource URIs", icon: Globe },
    { id: "graphql", title: "GraphQL", description: "Single endpoint with query/mutation schema", icon: Braces },
    { id: "grpc", title: "gRPC", description: "High-performance RPC using Protocol Buffers", icon: Server },
    { id: "websocket", title: "WebSocket", description: "Full-duplex persistent connection protocol", icon: Zap },
    { id: "soap", title: "SOAP API", description: "XML-based SOAP web service with WSDL", icon: FileText },
    { id: "webhook", title: "Webhook API", description: "Event-driven callback-based integration", icon: Webhook },
    { id: "rest-hateoas", title: "REST HATEOAS", description: "REST with hypermedia links in responses", icon: Link },
    { id: "odata", title: "OData API", description: "Open Data Protocol with query capabilities", icon: Database },
  ],
  auth: [
    { id: "api-key", title: "API Key", description: "Simple key-based authentication in headers", icon: Key },
    { id: "oauth2", title: "OAuth 2.0", description: "Authorization code flow with token exchange", icon: Lock },
    { id: "jwt-bearer", title: "JWT Bearer", description: "Signed JWT token in Authorization header", icon: Fingerprint },
    { id: "basic-auth", title: "Basic Auth", description: "Base64-encoded username:password pair", icon: Unlock },
    { id: "mutual-tls", title: "mTLS", description: "Mutual TLS with client certificate verification", icon: Shield },
    { id: "saml", title: "SAML 2.0", description: "XML-based SSO with identity provider", icon: Lock },
    { id: "openid", title: "OpenID Connect", description: "OIDC with identity layer on OAuth 2.0", icon: Fingerprint },
    { id: "hmac", title: "HMAC Signature", description: "Hash-based message authentication code", icon: Key },
  ],
  endpoint: [
    { id: "flat", title: "Flat Structure", description: "Single-level flat resource paths", icon: Route },
    { id: "nested", title: "Nested Resources", description: "Hierarchical resource path nesting", icon: GitBranch },
    { id: "parameterized", title: "Parameterized", description: "Path params and query parameters", icon: Sliders },
    { id: "versioned", title: "Versioned", description: "Version prefix in URL path", icon: Layers },
    { id: "namespaced", title: "Namespaced", description: "Resource grouping by namespace", icon: Box },
    { id: "collection", title: "Collection Pattern", description: "Collection + item resource separation", icon: Database },
    { id: "search", title: "Search Resources", description: "Dedicated search endpoint with filters", icon: Globe },
    { id: "batch", title: "Batch Operations", description: "Bulk create/update/delete endpoints", icon: GitBranch },
  ],
  request: [
    { id: "json-body", title: "JSON Body", description: "JSON-encoded request payload", icon: FileJson },
    { id: "form-data", title: "Form Data", description: "Multipart form data with file uploads", icon: FileText },
    { id: "url-encoded", title: "URL Encoded", description: "application/x-www-form-urlencoded body", icon: Terminal },
    { id: "xml-body", title: "XML Body", description: "XML-encoded request payload", icon: Code },
    { id: "protobuf", title: "Protocol Buffers", description: "Binary serialization with .proto schema", icon: Box },
    { id: "graphql-query", title: "GraphQL Query", description: "GraphQL query/mutation document", icon: Braces },
    { id: "binary", title: "Binary Stream", description: "Raw binary or octet-stream data", icon: Cloud },
    { id: "graphql-vars", title: "GraphQL with Variables", description: "Query document with variable definitions", icon: Braces },
  ],
  response: [
    { id: "json-resp", title: "JSON Response", description: "Standard JSON response envelope", icon: FileJson },
    { id: "xml-resp", title: "XML Response", description: "XML-formatted response payload", icon: Code },
    { id: "csv-resp", title: "CSV Response", description: "Comma-separated values output", icon: FileText },
    { id: "html-resp", title: "HTML Response", description: "Rendered HTML page response", icon: Globe },
    { id: "stream", title: "Streaming", description: "Streaming response with Server-Sent Events", icon: Zap },
    { id: "file", title: "File Download", description: "Binary file download with Content-Disposition", icon: Download },
    { id: "hal-json", title: "HAL JSON", description: "Hypertext Application Language format", icon: Link },
    { id: "graphql-resp", title: "GraphQL Response", description: "Query result in standard GraphQL envelope", icon: Braces },
  ],
  errorCodes: [
    { id: "http-standard", title: "HTTP Standard Codes", description: "Standard 4xx/5xx HTTP status codes", icon: AlertTriangle },
    { id: "custom-codes", title: "Custom Error Codes", description: "Application-specific numeric error codes", icon: Code },
    { id: "graphql-errors", title: "GraphQL Errors", description: "Errors array in GraphQL response", icon: Braces },
    { id: "detailed-messages", title: "Detailed Messages", description: "Human-readable error with field-level details", icon: MessageSquare },
    { id: "i18n-errors", title: "i18n Error Messages", description: "Localized error messages by locale", icon: Globe },
    { id: "retry-errors", title: "Retry-Aware Errors", description: "Errors with retry-after and backoff hints", icon: Gauge },
    { id: "validation-errors", title: "Validation Errors", description: "Input validation error details per field", icon: AlertTriangle },
    { id: "structured-errors", title: "Structured Problem JSON", description: "RFC 7807 Problem Details format", icon: FileJson },
  ],
  rateLimiting: [
    { id: "token-bucket", title: "Token Bucket", description: "Bucket-based request rate limiting", icon: Gauge },
    { id: "leaky-bucket", title: "Leaky Bucket", description: "Queue-based steady-state rate limiting", icon: Sliders },
    { id: "sliding-window", title: "Sliding Window", description: "Time-window moving average limiter", icon: GitBranch },
    { id: "fixed-window", title: "Fixed Window", description: "Fixed time window request counting", icon: Server },
    { id: "concurrent", title: "Concurrency Limit", description: "Max concurrent request cap", icon: Layers },
    { id: "usage-quota", title: "Usage Quota", description: "Daily/monthly usage quota per client", icon: Database },
    { id: "adaptive", title: "Adaptive Limiting", description: "Dynamic limit based on system load", icon: Gauge },
    { id: "cost-based", title: "Cost-Based Limiting", description: "Per-request cost weighted rate limit", icon: Sliders },
  ],
  sdk: [
    { id: "typescript", title: "TypeScript SDK", description: "Fully typed TypeScript client SDK", icon: Code },
    { id: "python", title: "Python SDK", description: "Python client with type hints", icon: Terminal },
    { id: "go", title: "Go SDK", description: "Go client with struct definitions", icon: Code },
    { id: "java", title: "Java SDK", description: "Java client with Retrofit/OkHttp", icon: Server },
    { id: "kotlin", title: "Kotlin SDK", description: "Kotlin coroutine-based client", icon: Code },
    { id: "openapi", title: "OpenAPI Spec", description: "OpenAPI 3.1 specification document", icon: FileJson },
    { id: "postman", title: "Postman Collection", description: "Postman collection with examples", icon: Box },
    { id: "asyncapi", title: "AsyncAPI Spec", description: "AsyncAPI spec for event-driven APIs", icon: Zap },
  ],
};

const dict: Record<string, Record<string, string>> = {
  apiType: {
    rest: "Design a RESTful API with standard HTTP methods (GET, POST, PUT, PATCH, DELETE) mapped to resource URIs. Use plural nouns for collections, singular for items. Follow consistent naming conventions with kebab-case for URLs and camelCase for request/response fields.",
    graphql: "Design a GraphQL API with a single /graphql endpoint. Define types, queries, mutations, and subscriptions in a schema definition language. Resolvers fetch data for each field independently, enabling precise data retrieval without over-fetching.",
    grpc: "Design a gRPC API using Protocol Buffers for service and message definitions. Support unary, server-streaming, client-streaming, and bidirectional-streaming RPCs. Use HTTP/2 for transport and generate client/server stubs for multiple languages.",
    websocket: "Design a WebSocket API for full-duplex real-time communication. Define message types with JSON payloads, heartbeat/ping-pong for connection health, and automatic reconnection with exponential backoff.",
    soap: "Design a SOAP web service with WSDL and XSD schema definitions. Support SOAP 1.1 and 1.2 bindings, WS-Security for message-level encryption, and WS-Addressing for routing.",
    webhook: "Design a webhook-based API where consumers register callback URLs. Deliver events via HTTP POST with signed payloads, support retry with exponential backoff, and provide delivery status tracking.",
    "rest-hateoas": "Design a REST HATEOAS API where each response includes hypermedia links for discoverable navigation. Use application/hal+json or application/vnd.api+json media types with link relations for resource transitions.",
    odata: "Design an OData v4 API with $metadata service document. Support query options ($filter, $orderby, $top, $skip, $expand, $select) for flexible data access and navigation properties for related entities.",
  },
  auth: {
    "api-key": "Implement API key authentication where each client receives a unique key passed in the X-API-Key header. Rotate keys periodically and support key revocation. Log all key usage for audit trails.",
    oauth2: "Implement OAuth 2.0 authorization code flow with PKCE. Issue access tokens (JWT) and refresh tokens. Support scopes for fine-grained permission control and token introspection for resource servers.",
    "jwt-bearer": "Implement JWT Bearer authentication where clients pass a signed JWT in the Authorization: Bearer header. Validate signature, expiry, issuer, and audience claims. Support JWKS endpoint for public key distribution.",
    "basic-auth": "Implement HTTP Basic Authentication with Base64-encoded username:password. Enforce TLS for all basic auth requests to prevent credential exposure. Limit failed attempts and log access patterns.",
    "mutual-tls": "Implement mTLS where both client and server present TLS certificates. Validate certificate chain, CN/SAN fields, and revocation status. Map certificate identities to application roles and permissions.",
    saml: "Implement SAML 2.0 SSO with an identity provider for authentication. Support SP-initiated and IdP-initiated SSO flows. Validate SAML assertions with XML signature verification and expiry checks.",
    openid: "Implement OpenID Connect on top of OAuth 2.0. Use the ID token (JWT) for identity claims. Support the /userinfo endpoint for additional profile data and session management with RP-initiated logout.",
    hmac: "Implement HMAC-based request signing where clients sign request bodies and canonical headers with a shared secret. Include timestamp and nonce to prevent replay attacks. Verify signature on each request.",
  },
  endpoint: {
    flat: "Design flat endpoint paths like /customers, /orders, /products. Each resource has its own top-level path without nesting. Use query parameters for filtering related resources like /orders?customerId=123.",
    nested: "Design nested endpoint paths that reflect resource hierarchy like /customers/{id}/orders/{orderId}/items. Limit nesting depth to 3 levels max to avoid overly complex URLs. Provide flat alternatives for deep access.",
    parameterized: "Design endpoints with path parameters for resource identity and query parameters for filtering, sorting, and pagination. Use standard parameter names: page, limit, sort, filter, and fields for sparse field sets.",
    versioned: "Prefix all endpoints with a version identifier like /v1/customers or use Accept header versioning. Support backward compatibility within a major version. Maintain clear deprecation and sunset policies for older versions.",
    namespaced: "Organize endpoints by functional namespace like /api/v1/billing/invoices and /api/v1/shipping/tracking. Namespaces help organize large APIs and allow independent versioning of different functional areas.",
    collection: "Design collection-based patterns with /resources for listing and creating, /resources/{id} for single resource operations. Support bulk operations at /resources/batch and collection-level metadata at /resources/meta.",
    search: "Design dedicated search endpoints like /search/products or /search with a general query parameter. Support faceted search, full-text search, geospatial queries, and ranked results with relevance scores.",
    batch: "Design batch endpoints like /batch for grouping multiple operations in a single request. Support create, update, and delete in batch with partial-failure reporting. Return status for each sub-operation individually.",
  },
  request: {
    "json-body": "Accept JSON request bodies with Content-Type: application/json. Validate JSON syntax and schema compliance before processing. Support both object and array top-level structures with proper error messages for malformed input.",
    "form-data": "Accept multipart/form-data for requests mixing text fields and file uploads. Support single and multiple file uploads with size limits and MIME type validation. Stream large files to disk or object storage.",
    "url-encoded": "Accept application/x-www-form-urlencoded for simple key-value submissions. Use for legacy integration or form postbacks. Convert nested structures using bracket notation like user[name] and user[email].",
    "xml-body": "Accept XML request bodies with Content-Type: application/xml or text/xml. Validate against XSD schema if provided. Support both DOM and SAX parsing with configurable namespace handling.",
    protobuf: "Accept Protocol Buffers binary encoding with application/protobuf content type. Define .proto files for message schemas with field numbers, types, and optional/repeated rules. Version schemas with package declaration.",
    "graphql-query": "Accept GraphQL query documents in the request body with { query: '...' }. Support inline fragments, aliases, directives (@include, @skip), and variable definitions. Parse and validate against the schema before execution.",
    binary: "Accept raw binary data with appropriate MIME types (application/octet-stream, image/*, audio/*). Stream directly to processing pipeline or storage. Set size limits and support range requests for resumable uploads.",
    "graphql-vars": "Accept GraphQL queries with separate variable definitions: { query: '...', variables: {...} }. Variables provide type safety, query reuse, and prevent injection via parameterized inputs.",
  },
  response: {
    "json-resp": "Return JSON responses with a consistent envelope structure containing data, status code, and optional metadata. Use camelCase field names and proper JSON data types. Include pagination links for collection responses.",
    "xml-resp": "Return XML responses with Content-Type: application/xml or text/xml. Support XSLT transformation for custom formatting. Include XML namespaces and schema references in response documents.",
    "csv-resp": "Return CSV responses with Content-Type: text/csv. Include header row with column names. Escape commas, quotes, and newlines properly. Support configurable delimiter and character encoding.",
    "html-resp": "Return HTML responses with Content-Type: text/html for server-rendered content. Support template rendering with contextual auto-escaping. Include CSP headers for security.",
    stream: "Return streaming responses using Server-Sent Events or chunked transfer encoding. Send progress updates, real-time events, or partial results as they become available. Keep connection open with keepalive pings.",
    file: "Return file downloads with Content-Disposition: attachment headers. Support range requests for partial content. Set proper Content-Type and Content-Length. Generate files on-demand for dynamic content.",
    "hal-json": "Return HAL JSON responses with _links and _embedded structures. Use curies for custom link relation extension. Provide self, next, prev, first, and last links for paginated collections.",
    "graphql-resp": "Return GraphQL responses with the standard { data, errors } envelope. Use nullable fields and error propagation for partial success. Include extensions for custom metadata like request ID and tracing.",
  },
  errorCodes: {
    "http-standard": "Use standard HTTP status codes: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity, 429 Too Many Requests, 500 Internal Server Error, 503 Service Unavailable.",
    "custom-codes": "Define application-specific error codes with a prefix like ERR-001 for validation errors, ERR-002 for authentication failures, and ERR-003 for rate limit exceeded. Include error codes in the response body with a code field.",
    "graphql-errors": "Return errors as an array in the GraphQL response with message, locations, path, and extensions fields. Use structured error extensions for additional context like error codes, stack traces, and classification.",
    "detailed-messages": "Provide detailed error messages with field-level validation results. Include a field name, rejected value, validation rule, and human-readable message. Support nested field paths for complex object validation.",
    "i18n-errors": "Localize error messages based on the Accept-Language header or client locale. Maintain translation files for each supported language with parameterized messages. Fall back to the default locale when translation is missing.",
    "retry-errors": "Include Retry-After header for 429 and 503 responses. Add x-retry-after and x-retry-count in response body. Support exponential backoff hints and maximum retry attempt recommendations.",
    "validation-errors": "Return detailed validation errors with path, expected type, actual value, and constraint info. Support nested field validation for arrays and objects. Use JSON Schema validation keywords for error description.",
    "structured-errors": "Use RFC 7807 Problem Details JSON format with type, title, status, detail, and instance fields. Include extensions for request ID, timestamp, and error correlation. Return appropriate Content-Type: application/problem+json.",
  },
  rateLimiting: {
    "token-bucket": "Implement the token bucket algorithm where tokens replenish at a fixed rate. Allow burst up to a configurable maximum bucket size. Each request consumes one or more tokens based on endpoint cost.",
    "leaky-bucket": "Implement the leaky bucket algorithm where requests enter a FIFO queue and are processed at a steady rate. Excess requests beyond queue capacity are rejected. Provides smooth, predictable throughput.",
    "sliding-window": "Implement sliding window rate limiting with per-second granularity. Track request timestamps and count within a moving time window. More accurate than fixed window for burst prevention.",
    "fixed-window": "Implement fixed window rate limiting that resets counters at the start of each window. Simple to implement but allows burst traffic at window boundaries. Use for basic rate limiting requirements.",
    concurrent: "Limit the number of concurrent requests per client or globally. Queue excess requests or reject with 429. Set reasonable limits based on server capacity and expected workload patterns.",
    "usage-quota": "Track daily, weekly, or monthly usage quotas per API key or client. Return current usage and remaining quota in response headers. Reset quotas at configured intervals and notify clients approaching limits.",
    adaptive: "Implement adaptive rate limiting that adjusts limits based on system health metrics like CPU load, memory usage, and response times. Tighten limits under load and relax during low traffic periods.",
    "cost-based": "Assign a cost weight to each endpoint based on computational expense. Expensive operations (batch queries, report generation) consume more from the rate limit budget than lightweight operations.",
  },
  sdk: {
    typescript: "Generate a TypeScript SDK with full type definitions from the API schema. Include typed request builders, response parsers, error classes, and retry logic. Support both fetch and axios HTTP backends.",
    python: "Generate a Python SDK with type hints, async support using httpx, and pydantic models for request/response serialization. Include context manager support for client lifecycle and configurable timeouts.",
    go: "Generate a Go SDK with typed struct definitions and interface-based service clients. Support context-based cancellation, middleware chains for logging and auth, and concurrent request workers.",
    java: "Generate a Java SDK using Retrofit/OkHttp with annotation-based endpoint definitions. Include RxJava and CompletableFuture support for async calls. Generate builder pattern for request construction.",
    kotlin: "Generate a Kotlin SDK with coroutine-based suspend functions for async calls. Use kotlinx.serialization for JSON handling. Include Flow support for paginated collections and streaming responses.",
    openapi: "Generate an OpenAPI 3.1 specification document from your API design. Include all endpoints, schemas, security schemes, and examples. Validate against OpenAPI spec and render with Swagger UI or Redoc.",
    postman: "Generate a Postman Collection 2.1 JSON with all endpoints, variables, authentication presets, and example responses. Include pre-request scripts for auth token refresh and test scripts for response validation.",
    asyncapi: "Generate an AsyncAPI specification for event-driven API surfaces. Define channels, message schemas, bindings, and security schemes. Support both AMQP and MQTT protocol bindings.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const apiType = selections.step1;
  const auth = selections.step2;
  const endpoint = selections.step3;
  const request = selections.step4;
  const response = selections.step5;
  const errorCodes: string[] = selections.step6 || [];
  const rateLimiting = selections.step7;
  const sdk = selections.step8;

  const lines: string[] = [];

  lines.push("# API Documentation Blueprint");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const atLabel = Array.isArray(apiType) ? apiType.map(id => options.apiType.find(o => o.id === id)?.title || id).join(", ") : options.apiType.find(o => o.id === apiType)?.title || apiType;
  const atNote = notes[`apiType-${apiType}`] || "";
  lines.push(`| API Type | ${atLabel} | ${atNote}`);
  const auLabel = Array.isArray(auth) ? auth.map(id => options.auth.find(o => o.id === id)?.title || id).join(", ") : options.auth.find(o => o.id === auth)?.title || auth;
  const auNote = notes[`auth-${auth}`] || "";
  lines.push(`| Authentication | ${auLabel} | ${auNote}`);
  const enLabel = Array.isArray(endpoint) ? endpoint.map(id => options.endpoint.find(o => o.id === id)?.title || id).join(", ") : options.endpoint.find(o => o.id === endpoint)?.title || endpoint;
  const enNote = notes[`endpoint-${endpoint}`] || "";
  lines.push(`| Endpoint Structure | ${enLabel} | ${enNote}`);
  const rqLabel = Array.isArray(request) ? request.map(id => options.request.find(o => o.id === id)?.title || id).join(", ") : options.request.find(o => o.id === request)?.title || request;
  const rqNote = notes[`request-${request}`] || "";
  lines.push(`| Request Format | ${rqLabel} | ${rqNote}`);
  const rsLabel = Array.isArray(response) ? response.map(id => options.response.find(o => o.id === id)?.title || id).join(", ") : options.response.find(o => o.id === response)?.title || response;
  const rsNote = notes[`response-${response}`] || "";
  lines.push(`| Response Format | ${rsLabel} | ${rsNote}`);
  const ecLabels = errorCodes.map(id => options.errorCodes.find(o => o.id === id)?.title || id).join(", ");
  const ecNotes = errorCodes.map(id => notes[`errorCodes-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Error Codes | ${ecLabels || "None"} | ${ecNotes}`);
  const rlLabel = Array.isArray(rateLimiting) ? rateLimiting.map(id => options.rateLimiting.find(o => o.id === id)?.title || id).join(", ") : options.rateLimiting.find(o => o.id === rateLimiting)?.title || rateLimiting;
  const rlNote = notes[`rateLimiting-${rateLimiting}`] || "";
  lines.push(`| Rate Limiting | ${rlLabel} | ${rlNote}`);
  const sdkLabel = Array.isArray(sdk) ? sdk.map(id => options.sdk.find(o => o.id === id)?.title || id).join(", ") : options.sdk.find(o => o.id === sdk)?.title || sdk;
  const sdkNote = notes[`sdk-${sdk}`] || "";
  lines.push(`| SDK Generation | ${sdkLabel} | ${sdkNote}`);
  lines.push("");

  lines.push("## Architecture Overview");
  lines.push("");
  if (apiType) {
    lines.push("### API Type: " + atLabel);
    lines.push("");
    lines.push(Array.isArray(apiType) ? apiType.map(v => dict.apiType[v] || v).join(", ") : dict.apiType[apiType] || apiType);
    if (atNote) lines.push(`> **Note:** ${atNote}`);
    lines.push("");
  }

  if (auth) {
    lines.push("### Authentication: " + auLabel);
    lines.push("");
    lines.push(Array.isArray(auth) ? auth.map(v => dict.auth[v] || v).join(", ") : dict.auth[auth] || auth);
    if (auNote) lines.push(`> **Note:** ${auNote}`);
    lines.push("");
  }

  if (endpoint) {
    lines.push("### Endpoint Structure: " + enLabel);
    lines.push("");
    lines.push(Array.isArray(endpoint) ? endpoint.map(v => dict.endpoint[v] || v).join(", ") : dict.endpoint[endpoint] || endpoint);
    if (enNote) lines.push(`> **Note:** ${enNote}`);
    lines.push("");
  }

  if (request) {
    lines.push("### Request Format: " + rqLabel);
    lines.push("");
    lines.push(Array.isArray(request) ? request.map(v => dict.request[v] || v).join(", ") : dict.request[request] || request);
    if (rqNote) lines.push(`> **Note:** ${rqNote}`);
    lines.push("");
  }

  if (response) {
    lines.push("### Response Format: " + rsLabel);
    lines.push("");
    lines.push(Array.isArray(response) ? response.map(v => dict.response[v] || v).join(", ") : dict.response[response] || response);
    if (rsNote) lines.push(`> **Note:** ${rsNote}`);
    lines.push("");
  }

  if (errorCodes.length > 0) {
    lines.push("### Error Code Strategy");
    lines.push("");
    for (const ecId of errorCodes) {
      const label = options.errorCodes.find(o => o.id === ecId)?.title || ecId;
      lines.push(`#### ${label}`);
      lines.push("");
      lines.push(dict.errorCodes[ecId] || "");
      const note = notes[`errorCodes-${ecId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (rateLimiting) {
    lines.push("### Rate Limiting: " + rlLabel);
    lines.push("");
    lines.push(Array.isArray(rateLimiting) ? rateLimiting.map(v => dict.rateLimiting[v] || v).join(", ") : dict.rateLimiting[rateLimiting] || rateLimiting);
    if (rlNote) lines.push(`> **Note:** ${rlNote}`);
    lines.push("");
  }

  if (sdk) {
    lines.push("### SDK Generation: " + sdkLabel);
    lines.push("");
    lines.push(Array.isArray(sdk) ? sdk.map(v => dict.sdk[v] || v).join(", ") : dict.sdk[sdk] || sdk);
    if (sdkNote) lines.push(`> **Note:** ${sdkNote}`);
    lines.push("");
  }

  lines.push("## API Endpoint Reference");
  lines.push("");
  lines.push("| Method | Endpoint | Description | Auth | Rate Limit");
  lines.push("|--------|----------|-------------|------|-----------");
  const methodPairs = [
    ["GET", "/resources", "List all resources", auLabel, rlLabel],
    ["POST", "/resources", "Create a new resource", auLabel, rlLabel],
    ["GET", "/resources/{id}", "Get a single resource", auLabel, rlLabel],
    ["PUT", "/resources/{id}", "Replace a resource", auLabel, rlLabel],
    ["PATCH", "/resources/{id}", "Partially update a resource", auLabel, rlLabel],
    ["DELETE", "/resources/{id}", "Delete a resource", auLabel, rlLabel],
  ];
  for (const [method, ep, desc, authName, rateName] of methodPairs) {
    lines.push(`| ${method} | ${ep} | ${desc} | ${authName} | ${rateName}`);
  }
  lines.push("");

  lines.push("## Request/Response Examples");
  lines.push("");
  lines.push("### Sample Request");
  lines.push("");
  lines.push("```json");
  lines.push("{");
  lines.push('  "name": "Example Resource",');
  lines.push('  "description": "A sample resource for demonstration",');
  lines.push('  "metadata": {');
  lines.push('    "version": 1,');
  lines.push('    "tags": ["sample", "demo"]');
  lines.push("  }");
  lines.push("}");
  lines.push("```");
  lines.push("");

  lines.push("### Sample Response");
  lines.push("");
  lines.push("```json");
  lines.push("{");
  lines.push('  "status": "success",');
  lines.push('  "data": {');
  lines.push('    "id": "res_abc123",');
  lines.push('    "name": "Example Resource",');
  lines.push('    "createdAt": "2026-06-30T12:00:00Z",');
  lines.push('    "updatedAt": "2026-06-30T12:00:00Z"');
  lines.push("  },");
  lines.push('  "requestId": "req_xyz789"');
  lines.push("}");
  lines.push("```");
  lines.push("");

  lines.push("## Error Response Format");
  lines.push("");
  lines.push("```json");
  lines.push("{");
  lines.push('  "status": "error",');
  lines.push('  "code": "VALIDATION_ERROR",');
  lines.push('  "message": "The request could not be processed due to validation errors.",');
  lines.push('  "errors": [');
  lines.push("    {");
  lines.push('      "field": "name",');
  lines.push('      "rule": "required",');
  lines.push('      "message": "Name is required"');
  lines.push("    }");
  lines.push("  ],");
  lines.push('  "requestId": "req_xyz789"');
  lines.push("}");
  lines.push("```");
  lines.push("");

  lines.push("## Rate Limiting Headers");
  lines.push("");
  lines.push("| Header | Description | Example");
  lines.push("|--------|-------------|--------");
  lines.push("| X-RateLimit-Limit | Maximum requests per window | 1000");
  lines.push("| X-RateLimit-Remaining | Requests remaining in window | 876");
  lines.push("| X-RateLimit-Reset | Unix timestamp when window resets | 1809216000");
  lines.push("| Retry-After | Seconds to wait before retry | 30");
  lines.push("");

  lines.push("## Implementation Guidelines");
  lines.push("");
  lines.push("- **Base URL**: Use a consistent base URL pattern like `https://api.example.com/v1`.");
  lines.push("- **Content Negotiation**: Support Content-Type and Accept headers for request/response format selection.");
  lines.push("- **Pagination**: Use cursor-based or offset-based pagination for collection endpoints. Include next/prev links.");
  lines.push("- **Idempotency**: Support idempotency keys for POST and PATCH requests to prevent duplicate processing.");
  lines.push("- **CORS**: Configure CORS headers for browser-based clients. Support preflight OPTIONS requests.");
  lines.push("- **Logging**: Log all API requests with correlation IDs. Include request path, status code, and duration.");
  lines.push("- **Deprecation**: Mark deprecated endpoints with Sunset header and provide migration guides.");
  if (auth === "oauth2") {
    lines.push("- **Token Refresh**: Implement refresh token rotation and revoke expired tokens automatically.");
  }
  if (rateLimiting === "adaptive") {
    lines.push("- **Adaptive Limits**: Monitor system metrics in real-time. Reduce limits when CPU exceeds 80% or p99 latency exceeds 1s.");
  }
  if (sdk && sdk !== "openapi" && sdk !== "postman") {
    lines.push("- **SDK Publishing**: Publish SDK packages to package registries (npm, PyPI, Go Modules) with automated CI/CD.");
  }
  lines.push("");

  lines.push("## Security Checklist");
  lines.push("");
  lines.push("- [] Enforce TLS 1.2+ for all endpoints");
  lines.push("- [] Implement authentication on all protected endpoints");
  lines.push("- [] Validate and sanitize all user inputs");
  lines.push("- [] Set rate limits per API key or client IP");
  lines.push("- [] Log security-relevant events with timestamps");
  lines.push("- [] Conduct regular dependency audits");
  lines.push("- [] Implement proper error handling without information leakage");
  lines.push("- [] Use parameterized queries or ORM for database access");
  lines.push("");

  lines.push("## Performance Considerations");
  lines.push("");
  lines.push("| Area | Recommendation");
  lines.push("|------|--------------");
  lines.push("| Response Caching | Cache GET responses with ETag and Cache-Control headers");
  lines.push("| Database Queries | Use connection pooling and query optimization");
  lines.push("| Payload Compression | Support gzip/brotli compression for large payloads");
  lines.push("| Connection Pooling | Maintain persistent connections for backend services");
  lines.push("| CDN | Serve static content and cached responses through CDN");
  lines.push("");

  lines.push("## Monitoring & Observability");
  lines.push("");
  lines.push("- Track request volume, latency, and error rate per endpoint.");
  lines.push("- Set up alerts for p99 latency exceeding 2 seconds.");
  lines.push("- Monitor rate limit hit rates and adjust limits accordingly.");
  lines.push("- Use distributed tracing with correlation IDs across services.");
  lines.push("- Create dashboards for API health, usage trends, and error breakdown.");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by API Doc Generator_");

  return lines.join("\n");
}

export default function ApiDocsPage() {
  return (
    <ToolShell
      title="API Doc Generator"
      steps={[
        { id: 1, label: "API Type", component: (p) => (
          <GenericStep {...p} title="Select API Type" description="What API protocol do you want to document?" options={options.apiType} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="apiType" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Auth", component: (p) => (
          <GenericStep {...p} title="Authentication Method" description="How will clients authenticate?" options={options.auth} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="auth" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Endpoint", component: (p) => (
          <GenericStep {...p} title="Endpoint Structure" description="How are API endpoints organized?" options={options.endpoint} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="endpoint" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Request", component: (p) => (
          <GenericStep {...p} title="Request Format" description="What format do request payloads use?" options={options.request} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="request" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Response", component: (p) => (
          <GenericStep {...p} title="Response Format" description="How are responses structured?" options={options.response} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="response" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Errors", component: (p) => (
          <GenericStep {...p} title="Error Codes" description="How are API errors represented?" options={options.errorCodes} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="errorCodes" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Rate Limit", component: (p) => (
          <GenericStep {...p} title="Rate Limiting Strategy" description="How should request rates be controlled?" options={options.rateLimiting} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="rateLimiting" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "SDK", component: (p) => (
          <GenericStep {...p} title="SDK Generation" description="What SDK or spec format should be generated?" options={options.sdk} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="sdk" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}










