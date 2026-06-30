"use client";

import type { FC } from "react";
import {
  Layout, User, Keyboard, Scale, AlertTriangle,
  Gauge, Shield, GitBranch, Smartphone, Server,
  Globe, Database, Lock, Zap, Search, Users,
  FileText, Code, Eye, CheckCircle, Ban,
  Clock, TrendingUp, ArrowUp, ArrowRight,
  Repeat, Wrench, Filter, Layers, Headphones,
  Bell, CreditCard,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  featureType: [
    { id: "ui", title: "UI Component", description: "Visual interface element or screen", icon: Layout },
    { id: "api", title: "API Endpoint", description: "REST, GraphQL, or gRPC endpoint", icon: Server },
    { id: "batch", title: "Batch Process", description: "Background job or scheduled task", icon: Clock },
    { id: "form", title: "Form / Input", description: "Data entry form with validation", icon: Keyboard },
    { id: "report", title: "Report / Export", description: "Generated report or data export", icon: FileText },
    { id: "integration", title: "Integration", description: "Third-party service integration", icon: Globe },
    { id: "auth", title: "Auth / Permissions", description: "Authentication or authorization flow", icon: Lock },
    { id: "search", title: "Search / Filter", description: "Search functionality with filters", icon: Search },
  ],
  userRole: [
    { id: "admin", title: "Admin", description: "Full system access and configuration", icon: Shield },
    { id: "end-user", title: "End User", description: "Regular application user", icon: User },
    { id: "guest", title: "Guest / Anonymous", description: "Unregistered or limited access user", icon: Eye },
    { id: "manager", title: "Manager", description: "Supervisory role with approval powers", icon: Users },
    { id: "api-client", title: "API Client", description: "Automated system or service account", icon: Code },
    { id: "support", title: "Support Agent", description: "Customer support team member", icon: Headphones },
    { id: "owner", title: "Owner / Creator", description: "Content or resource owner", icon: User },
    { id: "multi-role", title: "Multi-Role User", description: "User with multiple concurrent roles", icon: Layers },
  ],
  inputVariations: [
    { id: "valid", title: "Valid Input", description: "Standard, expected input values", icon: CheckCircle },
    { id: "invalid", title: "Invalid Input", description: "Values that fail validation rules", icon: Ban },
    { id: "boundary", title: "Boundary Values", description: "Min, max, and edge of valid ranges", icon: ArrowRight },
    { id: "empty", title: "Empty / Null", description: "Empty strings, null, or undefined values", icon: Ban },
    { id: "special-chars", title: "Special Characters", description: "Unicode, symbols, injection payloads", icon: Keyboard },
    { id: "long-input", title: "Very Long Input", description: "Maximum length or overflow values", icon: ArrowUp },
    { id: "type-mismatch", title: "Type Mismatch", description: "Wrong data types (string for number)", icon: Wrench },
    { id: "bulk", title: "Bulk / Batch Input", description: "Large volume of concurrent inputs", icon: Layers },
  ],
  businessRules: [
    { id: "discount", title: "Discount Logic", description: "Percentage, fixed, tiered, or conditional discounts", icon: Scale },
    { id: "permissions", title: "Permission Rules", description: "Role-based access and feature gates", icon: Lock },
    { id: "validation", title: "Validation Rules", description: "Field-level and cross-field validation", icon: CheckCircle },
    { id: "workflow", title: "Workflow Transitions", description: "State machine and status transitions", icon: GitBranch },
    { id: "pricing", title: "Pricing Calculations", description: "Tax, shipping, tiered pricing logic", icon: CreditCard },
    { id: "allocation", title: "Resource Allocation", description: "Quotas, limits, and capacity management", icon: Database },
    { id: "notifications", title: "Notification Triggers", description: "Conditional alert and notification rules", icon: Bell },
    { id: "audit", title: "Audit Requirements", description: "Logging, tracking, and compliance rules", icon: FileText },
  ],
  errorStates: [
    { id: "404", title: "404 Not Found", description: "Resource does not exist or was deleted", icon: Search },
    { id: "500", title: "500 Server Error", description: "Internal server or unhandled exception", icon: AlertTriangle },
    { id: "timeout", title: "Timeout", description: "Operation exceeds maximum wait time", icon: Clock },
    { id: "rate-limit", title: "Rate Limit Exceeded", description: "Too many requests in time window", icon: Ban },
    { id: "auth-fail", title: "Auth Failure", description: "Invalid, expired, or missing credentials", icon: Lock },
    { id: "validation-err", title: "Validation Error", description: "Input fails business rule validation", icon: Ban },
    { id: "network", title: "Network Error", description: "Connection lost, DNS failure, offline", icon: Globe },
    { id: "degraded", title: "Degraded Service", description: "Partial outage or slow response times", icon: AlertTriangle },
  ],
  performanceThreshold: [
    { id: "under-1s", title: "Under 1 Second", description: "Near-instant response for critical paths", icon: Zap },
    { id: "under-3s", title: "Under 3 Seconds", description: "Standard responsive experience", icon: Gauge },
    { id: "under-5s", title: "Under 5 Seconds", description: "Acceptable for complex operations", icon: Clock },
    { id: "p95-2s", title: "P95 Under 2s", description: "95th percentile latency target", icon: TrendingUp },
    { id: "p99-5s", title: "P99 Under 5s", description: "99th percentile latency target", icon: TrendingUp },
    { id: "concurrent-100", title: "100 Concurrent Users", description: "Handles 100 simultaneous users", icon: Users },
    { id: "concurrent-1000", title: "1000 Concurrent Users", description: "Handles 1000 simultaneous users", icon: Users },
    { id: "batch-1m", title: "1M Records / Hour", description: "Batch throughput of 1M records per hour", icon: Layers },
  ],
  securityRequirements: [
    { id: "auth", title: "Authentication", description: "Login required for access", icon: Lock },
    { id: "authz", title: "Authorization", description: "Role or permission-based access control", icon: Shield },
    { id: "input-sanitize", title: "Input Sanitization", description: "XSS, SQL injection, command injection prevention", icon: Filter },
    { id: "rate-limit-sec", title: "Rate Limiting", description: "Throttle requests per user or IP", icon: Ban },
    { id: "encryption", title: "Encryption", description: "TLS in transit, AES at rest", icon: Lock },
    { id: "audit-log", title: "Audit Logging", description: "Log all security-relevant events", icon: FileText },
    { id: "session-mgmt", title: "Session Management", description: "Timeout, rotation, invalidation", icon: Clock },
    { id: "data-masking", title: "Data Masking", description: "Mask PII in logs and responses", icon: Eye },
  ],
  edgeCases: [
    { id: "empty-state", title: "Empty State", description: "No data available to display", icon: Ban },
    { id: "race-condition", title: "Race Condition", description: "Concurrent writes or state conflicts", icon: GitBranch },
    { id: "data-corruption", title: "Data Corruption", description: "Malformed or partially written data", icon: AlertTriangle },
    { id: "concurrent-edit", title: "Concurrent Edit", description: "Multiple users editing same resource", icon: Users },
    { id: "cancel-mid", title: "Cancel Mid-Operation", description: "User cancels during a long operation", icon: Ban },
    { id: "idempotency", title: "Idempotency", description: "Repeated identical requests produce same result", icon: Repeat },
    { id: "timezone", title: "Timezone Handling", description: "Cross-timezone date and time operations", icon: Globe },
    { id: "unicode", title: "Unicode / Encoding", description: "Non-ASCII names, addresses, or content", icon: Keyboard },
  ],
};

const dict: Record<string, Record<string, string>> = {
  featureType: {
    ui: "Define acceptance criteria for visual interface elements. Include layout constraints, responsive breakpoints, state transitions (loading, empty, error, success), accessibility requirements, and cross-browser compatibility standards.",
    api: "Define acceptance criteria for API endpoints. Include request validation, response schema, status codes, pagination, filtering, sorting, error response format, and rate limiting behavior. Document all expected response shapes.",
    batch: "Define acceptance criteria for background batch processes. Include job scheduling, retry logic, progress tracking, completion notification, error recovery, idempotency guarantees, and resource cleanup after execution.",
    form: "Define acceptance criteria for data entry forms. Include field validation rules, error message display, character limits, format constraints, cross-field validation, autocomplete behavior, and submission handling.",
    report: "Define acceptance criteria for report generation and export features. Include data accuracy verification, format compliance (PDF, CSV, XLSX), large dataset handling, template rendering, and download management.",
    integration: "Define acceptance criteria for third-party integrations. Include authentication handshake, data mapping, retry with backoff, webhook verification, error translation, rate limit compliance, and circuit breaker behavior.",
    auth: "Define acceptance criteria for authentication and authorization flows. Include login methods, token lifecycle, permission enforcement, session timeout, multi-factor authentication, and role hierarchy resolution.",
    search: "Define acceptance criteria for search functionality. Include result relevance, filter combinations, sort options, pagination, fuzzy matching, empty result handling, search debouncing, and advanced query syntax support.",
  },
  userRole: {
    admin: "Define behavior specific to administrators. Include full CRUD access, system configuration, user management, audit log viewing, and the ability to impersonate or override restrictions for troubleshooting.",
    "end-user": "Define behavior for the primary application user. Include self-service operations, personal data management, and access only to their own resources. No administrative capabilities or cross-user data visibility.",
    guest: "Define behavior for unauthenticated or anonymous users. Include publicly accessible features only, limited read access, sign-up prompts, session-based temporary data, and clear upgrade prompts.",
    manager: "Define behavior for supervisory roles. Include approval workflows, team data visibility, reporting access, user management within their scope, and escalation handling. Cannot modify system-level configuration.",
    "api-client": "Define behavior for automated API consumers. Include API key authentication, rate limit enforcement, machine-readable error formats, webhook delivery guarantees, and service-level agreement compliance.",
    support: "Define behavior for customer support agents. Include delegated access to user accounts, ticket management, read-only access to sensitive data, case resolution workflows, and internal note capabilities.",
    owner: "Define behavior for content or resource owners. Include full control over owned resources, sharing permissions, deletion authority, transfer capabilities, and ownership visibility indicators.",
    "multi-role": "Define behavior when a user holds multiple roles simultaneously. Include role resolution order, highest-privilege precedence, feature intersection behavior, and clear UI indicators of active role context.",
  },
  inputVariations: {
    valid: "Test with standard, expected input values that should succeed. Include typical user data, common formats, and representative sample data. Valid inputs must pass all validation and produce correct results.",
    invalid: "Test with input values that should be rejected. Include out-of-range numbers, malformed emails, invalid dates, prohibited characters, and incomplete required fields. Each invalid input must produce a clear error message.",
    boundary: "Test boundary values at the edges of valid ranges. Include minimum, maximum, just below minimum, just above maximum, and exactly at limits. Boundary testing catches off-by-one errors and edge conditions.",
    empty: "Test with empty, null, or undefined values for all optional and required fields. Empty arrays, zero-length strings, null objects, and missing fields must be handled gracefully without crashes.",
    "special-chars": "Test with special characters including HTML tags, SQL fragments, JavaScript payloads, Unicode characters, emoji, and control characters. Validate that output is properly encoded and no injection occurs.",
    "long-input": "Test with input values at or exceeding maximum length limits. Include maximum allowed length, one character beyond, and extremely long values. Verify truncation, error messages, and performance impact.",
    "type-mismatch": "Test with values of incorrect data types. Include string where number expected, object where array expected, boolean where string expected. Verify type coercion rules or explicit type validation.",
    bulk: "Test with large volumes of input data. Include batch imports, rapid sequential submissions, and concurrent input streams. Measure processing time, memory usage, and ensure no data loss or duplication.",
  },
  businessRules: {
    discount: "Verify discount calculations including percentage discounts, fixed amount discounts, tiered discounts based on volume, conditional discounts (coupon codes, loyalty tier), stacking rules, and expiration handling.",
    permissions: "Verify that permission rules are correctly enforced at every access point. Test role-based access, feature flags, data-scoping rules, permission inheritance, and that unauthorized actions return proper errors.",
    validation: "Verify all validation rules execute correctly. Test required fields, format patterns, range checks, cross-field dependencies, conditional validation, and that validation errors are specific and actionable.",
    workflow: "Verify workflow state machine rules. Test each allowed state transition, forbidden transitions return errors, state persistence after interruption, transition side effects, and concurrent transition prevention.",
    pricing: "Verify pricing calculations including tax computation (configurable rates), shipping cost calculation (weight, distance, speed), tiered unit pricing, currency conversion, and discount stacking precedence.",
    allocation: "Verify resource allocation rules including usage quotas, concurrent connection limits, storage caps, API call budgets, and automatic enforcement actions when limits are reached or exceeded.",
    notifications: "Verify notification trigger conditions. Test each rule fires at the correct threshold, deduplication works, notification channels deliver correctly, and frequency capping prevents notification fatigue.",
    audit: "Verify audit requirements are met. Test that all auditable events are logged with timestamp, actor, action, and before/after state. Verify immutability of audit logs and that searching/filtering audit trails works.",
  },
  errorStates: {
    "404": "Test that non-existent resources return a 404 status with a clear message. Include deleted resources, incorrect URLs, invalid IDs, and expired share links. Provide guidance or search alternatives in the response.",
    "500": "Test that unexpected server errors return a 500 status with a generic error message. Include stack trace suppression in production, correlation ID for support reference, and graceful degradation where possible.",
    timeout: "Test that operations exceeding the timeout threshold are cancelled gracefully. Include long-running queries, slow external API calls, upload timeouts, and database connection timeouts. Return a clear timeout message.",
    "rate-limit": "Test that rate limit enforcement works correctly. Include per-user and per-IP limits, burst allowances, retry-after headers, and proper error responses. Verify limits reset correctly after the window expires.",
    "auth-fail": "Test all authentication failure scenarios. Include expired tokens, invalid credentials, revoked sessions, missing auth headers, malformed tokens, and brute force lockout. Each must return a clear 401 with guidance.",
    "validation-err": "Test validation error responses are complete and actionable. Include field-level error messages, multiple error aggregation, i18n support for messages, and consistent error response schema across all endpoints.",
    network: "Test behavior during network failures. Include connection timeouts, DNS resolution failures, dropped connections mid-request, and intermittent connectivity. Implement retry with exponential backoff and clear user messaging.",
    degraded: "Test degraded mode behavior when dependent services are slow or unavailable. Include partial data loading, feature degradation notifications, fallback data sources, and automatic recovery when services restore.",
  },
  performanceThreshold: {
    "under-1s": "All responses must complete within 1 second for 95% of requests under normal load. This includes database queries, API calls, and page renders. Monitor and alert on any regression below this threshold.",
    "under-3s": "All responses must complete within 3 seconds for 95% of requests. Suitable for moderately complex operations including report generation and data processing. Optimize slow queries and implement caching.",
    "under-5s": "All responses must complete within 5 seconds for 90% of requests. Acceptable for computationally intensive operations like data exports or complex aggregations. Provide progress indicators for operations exceeding 3s.",
    "p95-2s": "The 95th percentile response time must not exceed 2 seconds. This ensures even the slowest 5% of requests remain within acceptable bounds. Focus on eliminating outlier requests through optimization.",
    "p99-5s": "The 99th percentile response time must not exceed 5 seconds. Critical for enterprise SLAs. Identify and address root causes of the slowest 1% of requests including GC pauses and cold starts.",
    "concurrent-100": "The system must handle 100 concurrent users with response times staying within the selected threshold. Test with ramp-up patterns simulating realistic user behavior and think times.",
    "concurrent-1000": "The system must handle 1000 concurrent users with response times staying within the selected threshold. Requires horizontal scaling, connection pooling, and efficient resource management.",
    "batch-1m": "Batch processing must handle 1 million records per hour with consistent throughput. Monitor memory usage, database write throughput, and ensure no degradation over the full processing duration.",
  },
  securityRequirements: {
    auth: "All protected endpoints must require valid authentication. Test missing tokens, expired tokens, malformed tokens, and revoked sessions. Authentication failures must return 401 status codes consistently.",
    authz: "Every endpoint must enforce authorization checks. Test that users cannot access resources outside their role, permissions cascade correctly, and privilege escalation attempts are blocked and logged.",
    "input-sanitize": "All user inputs must be sanitized against injection attacks. Test XSS payloads in text fields, SQL injection in query parameters, command injection in shell calls, and SSRF in URL inputs.",
    "rate-limit-sec": "Rate limiting must prevent abuse. Test that limits apply per user and per IP, burst allowances work correctly, proper headers are returned, and limits reset after the configured window.",
    encryption: "All data in transit must use TLS 1.2 or higher. Sensitive data at rest must be encrypted with AES-256. Test that certificates are valid, ciphers are secure, and keys are properly rotated.",
    "audit-log": "All security-relevant events must be logged. Include authentication attempts, permission changes, data modifications, and configuration changes. Logs must be tamper-proof and include full context.",
    "session-mgmt": "Sessions must have appropriate timeouts, token rotation, and invalidation on logout. Test session fixation prevention, concurrent session limits, and that idle sessions expire within the configured window.",
    "data-masking": "PII and sensitive data must be masked in logs, API responses, and UI displays. Test that masked data cannot be reversed, masking rules apply consistently, and unmasking requires explicit authorization.",
  },
  edgeCases: {
    "empty-state": "Test the application behavior when there is no data to display. Empty lists, zero-state dashboards, and blank search results should show helpful empty-state messages with clear next-step actions.",
    "race-condition": "Test concurrent operations that modify the same resource. Include simultaneous writes, read-after-write conflicts, and lock timeouts. Use optimistic or pessimistic locking to prevent data corruption.",
    "data-corruption": "Test how the system handles corrupted or malformed data. Include partial writes, truncated files, invalid JSON, and database constraint violations. Implement validation and repair mechanisms.",
    "concurrent-edit": "Test multiple users editing the same resource simultaneously. Implement conflict detection, merge strategies, and last-write-wins with clear notifications when conflicts occur and data may be overwritten.",
    "cancel-mid": "Test user cancellation of long-running operations. Include uploads, data processing, and multi-step workflows. Verify partial cleanup, consistent state after cancellation, and clear confirmation messages.",
    idempotency: "Test that repeated identical requests produce the same result without side effects. Include payment processing, order creation, and API mutations. Use idempotency keys for write operations.",
    timezone: "Test date and time handling across different timezones. Include user timezone preferences, UTC storage, DST transitions, and daylight saving edge cases. All dates should be stored in UTC with timezone metadata.",
    unicode: "Test with international characters across the entire Unicode spectrum. Include CJK characters, accented Latin, right-to-left scripts, emoji, and mathematical symbols. Validate storage, display, and search behavior.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const featureType = selections.step1;
  const userRole = selections.step2;
  const inputVariations: string[] = selections.step3 || [];
  const businessRules: string[] = selections.step4 || [];
  const errorStates: string[] = selections.step5 || [];
  const performanceThreshold = selections.step6;
  const securityRequirements: string[] = selections.step7 || [];
  const edgeCases: string[] = selections.step8 || [];

  const lines: string[] = [];

  lines.push("# Acceptance Criteria Blueprint");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Category | Selection | Notes");
  lines.push("|----------|-----------|------");
  const ftLabel = Array.isArray(featureType) ? featureType.map(id => options.featureType.find(o => o.id === id)?.title || id).join(", ") : options.featureType.find(o => o.id === featureType)?.title || featureType;
  const ftNote = notes[`featureType-${featureType}`] || "";
  lines.push(`| Feature Type | ${ftLabel} | ${ftNote}`);
  const urLabel = Array.isArray(userRole) ? userRole.map(id => options.userRole.find(o => o.id === id)?.title || id).join(", ") : options.userRole.find(o => o.id === userRole)?.title || userRole;
  const urNote = notes[`userRole-${userRole}`] || "";
  lines.push(`| User Role | ${urLabel} | ${urNote}`);
  const ivLabels = inputVariations.map(id => options.inputVariations.find(o => o.id === id)?.title || id).join(", ");
  const ivNotes = inputVariations.map(id => notes[`inputVariations-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Input Variations | ${ivLabels || "None selected"} | ${ivNotes}`);
  const brLabels = businessRules.map(id => options.businessRules.find(o => o.id === id)?.title || id).join(", ");
  const brNotes = businessRules.map(id => notes[`businessRules-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Business Rules | ${brLabels || "None selected"} | ${brNotes}`);
  const esLabels = errorStates.map(id => options.errorStates.find(o => o.id === id)?.title || id).join(", ");
  const esNotes = errorStates.map(id => notes[`errorStates-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Error States | ${esLabels || "None selected"} | ${esNotes}`);
  const ptLabel = Array.isArray(performanceThreshold) ? performanceThreshold.map(id => options.performanceThreshold.find(o => o.id === id)?.title || id).join(", ") : options.performanceThreshold.find(o => o.id === performanceThreshold)?.title || performanceThreshold;
  const ptNote = notes[`performanceThreshold-${performanceThreshold}`] || "";
  lines.push(`| Performance Threshold | ${ptLabel} | ${ptNote}`);
  const srLabels = securityRequirements.map(id => options.securityRequirements.find(o => o.id === id)?.title || id).join(", ");
  const srNotes = securityRequirements.map(id => notes[`securityRequirements-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Security Requirements | ${srLabels || "None selected"} | ${srNotes}`);
  const ecLabels = edgeCases.map(id => options.edgeCases.find(o => o.id === id)?.title || id).join(", ");
  const ecNotes = edgeCases.map(id => notes[`edgeCases-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Edge Cases | ${ecLabels || "None selected"} | ${ecNotes}`);
  lines.push("");

  lines.push("## Feature Context");
  lines.push("");
  if (featureType) {
    lines.push("### Feature Type: " + ftLabel);
    lines.push("");
    lines.push(Array.isArray(featureType) ? featureType.map(v => dict.featureType[v] || v).join(", ") : dict.featureType[featureType] || featureType);
    if (ftNote) lines.push(`> **Note:** ${ftNote}`);
    lines.push("");
  }

  if (userRole) {
    lines.push("### Target User Role: " + urLabel);
    lines.push("");
    lines.push(Array.isArray(userRole) ? userRole.map(v => dict.userRole[v] || v).join(", ") : dict.userRole[userRole] || userRole);
    if (urNote) lines.push(`> **Note:** ${urNote}`);
    lines.push("");
  }

  lines.push("## Acceptance Criteria");
  lines.push("");

  if (inputVariations.length > 0) {
    lines.push("### Input Variation Scenarios");
    lines.push("");
    for (const ivId of inputVariations) {
      const label = options.inputVariations.find(o => o.id === ivId)?.title || ivId;
      lines.push(`#### ${label}`);
      lines.push("");
      lines.push(dict.inputVariations[ivId] || "");
      const note = notes[`inputVariations-${ivId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (businessRules.length > 0) {
    lines.push("### Business Rule Verification");
    lines.push("");
    for (const brId of businessRules) {
      const label = options.businessRules.find(o => o.id === brId)?.title || brId;
      lines.push(`#### ${label}`);
      lines.push("");
      lines.push(dict.businessRules[brId] || "");
      const note = notes[`businessRules-${brId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (errorStates.length > 0) {
    lines.push("### Error State Handling");
    lines.push("");
    for (const esId of errorStates) {
      const label = options.errorStates.find(o => o.id === esId)?.title || esId;
      lines.push(`#### ${label}`);
      lines.push("");
      lines.push(dict.errorStates[esId] || "");
      const note = notes[`errorStates-${esId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (performanceThreshold) {
    lines.push("### Performance Threshold: " + ptLabel);
    lines.push("");
    lines.push(Array.isArray(performanceThreshold) ? performanceThreshold.map(v => dict.performanceThreshold[v] || v).join(", ") : dict.performanceThreshold[performanceThreshold] || performanceThreshold);
    if (ptNote) lines.push(`> **Note:** ${ptNote}`);
    lines.push("");
  }

  if (securityRequirements.length > 0) {
    lines.push("### Security Requirements");
    lines.push("");
    for (const srId of securityRequirements) {
      const label = options.securityRequirements.find(o => o.id === srId)?.title || srId;
      lines.push(`#### ${label}`);
      lines.push("");
      lines.push(dict.securityRequirements[srId] || "");
      const note = notes[`securityRequirements-${srId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (edgeCases.length > 0) {
    lines.push("### Edge Cases");
    lines.push("");
    for (const ecId of edgeCases) {
      const label = options.edgeCases.find(o => o.id === ecId)?.title || ecId;
      lines.push(`#### ${label}`);
      lines.push("");
      lines.push(dict.edgeCases[ecId] || "");
      const note = notes[`edgeCases-${ecId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  lines.push("## Test Scenario Matrix");
  lines.push("");
  lines.push("| Scenario ID | Description | Given | When | Then | Priority");
  lines.push("|-------------|-------------|-------|------|------|----------");
  let scenarioCounter = 1;
  for (const ivId of inputVariations) {
    const ivLabel = options.inputVariations.find(o => o.id === ivId)?.title || ivId;
    lines.push(`| AC-${String(scenarioCounter++).padStart(3, "0")} | ${ivLabel} input with ${urLabel} role | User is logged in as ${urLabel} | User submits ${ivLabel.toLowerCase()} data | System ${ivId === "valid" ? "processes successfully and returns expected result" : "rejects with appropriate error message"} | ${ivId === "valid" ? "P0" : "P1"}`);
  }
  for (const brId of businessRules) {
    const brLabel = options.businessRules.find(o => o.id === brId)?.title || brId;
    lines.push(`| AC-${String(scenarioCounter++).padStart(3, "0")} | ${brLabel} rule enforcement | ${brLabel} conditions are met | Rule evaluation triggers | Correct action is taken according to rule definition | P0`);
  }
  for (const esId of errorStates) {
    const esLabel = options.errorStates.find(o => o.id === esId)?.title || esId;
    lines.push(`| AC-${String(scenarioCounter++).padStart(3, "0")} | ${esLabel} error handling | ${esLabel} condition occurs | System encounters the error | Graceful error response with appropriate status and message | P1`);
  }
  for (const ecId of edgeCases) {
    const ecLabel = options.edgeCases.find(o => o.id === ecId)?.title || ecId;
    lines.push(`| AC-${String(scenarioCounter++).padStart(3, "0")} | ${ecLabel} edge case handling | ${ecLabel} scenario is triggered | System processes edge condition | System handles gracefully without crash or data loss | P2`);
  }
  for (const srId of securityRequirements) {
    const srLabel = options.securityRequirements.find(o => o.id === srId)?.title || srId;
    lines.push(`| AC-${String(scenarioCounter++).padStart(3, "0")} | ${srLabel} security check | Security condition is violated | System detects violation | Violation is blocked, logged, and reported appropriately | P0`);
  }
  lines.push("");

  lines.push("## Acceptance Criteria Checklist");
  lines.push("");
  lines.push("- [ ] All P0 scenarios pass");
  lines.push("- [ ] All P1 scenarios pass");
  lines.push("- [ ] All P2 scenarios pass or are documented as known limitations");
  lines.push(`- [ ] Performance threshold (${ptLabel}) is verified with load testing`);
  if (securityRequirements.length > 0) {
    lines.push("- [ ] Security review completed for all identified requirements");
  }
  lines.push("- [ ] Accessibility review completed (WCAG 2.1 AA minimum)");
  lines.push("- [ ] Cross-browser/device testing completed");
  lines.push("- [ ] Error messages are user-friendly and actionable");
  lines.push("- [ ] All states (loading, empty, error, success) are covered");
  lines.push("");

  lines.push("## Definition of Done");
  lines.push("");
  lines.push("| Criterion | Verification Method | Owner");
  lines.push("|-----------|-------------------|-------");
  lines.push("| All acceptance criteria pass | Automated test suite | QA Engineer");
  lines.push("| Performance within threshold | Load test results | Performance Engineer");
  lines.push("| Security requirements met | Security scan + review | Security Engineer");
  lines.push("| No P0/P1 bugs open | Bug tracker | Product Manager");
  lines.push("| Documentation updated | Docs review | Technical Writer");
  lines.push("| Code reviewed | PR approval | Senior Engineer");
  lines.push("| Edge cases handled | Test report | QA Engineer");
  lines.push("");

  lines.push("## Recommendations");
  lines.push("");
  if (inputVariations.includes("valid") && !inputVariations.includes("invalid")) {
    lines.push("- **Missing Invalid Input Tests**: Add invalid input scenarios to ensure validation is working correctly.");
  }
  if (inputVariations.includes("boundary")) {
    lines.push("- **Boundary Coverage**: Verify both inclusive and exclusive boundaries. Test values at, above, and below limits.");
  }
  if (!edgeCases.includes("race-condition") && (businessRules.includes("allocation") || businessRules.includes("workflow"))) {
    lines.push("- **Concurrency Risk**: Your selected business rules may be vulnerable to race conditions. Consider adding race condition edge case testing.");
  }
  if (!securityRequirements.includes("auth") && !securityRequirements.includes("authz")) {
    lines.push("- **Security Gap**: No authentication or authorization selected. Ensure public endpoints are intentionally unauthenticated.");
  }
  if (performanceThreshold === "under-1s" || performanceThreshold === "p95-2s") {
    lines.push("- **Performance Budget**: Set up automated performance regression detection in CI to catch regressions before deployment.");
  }
  if (errorStates.includes("network") && !errorStates.includes("degraded")) {
    lines.push("- **Degraded Mode Testing**: Consider adding degraded service testing alongside network error testing for comprehensive coverage.");
  }
  lines.push("- **Automation**: Convert acceptance criteria to automated tests. Prioritize P0 scenarios for the first automation pass.");
  lines.push("- **Traceability**: Link each acceptance criterion to its corresponding test case using a requirements traceability matrix.");
  lines.push("- **Review**: Have a domain expert review acceptance criteria before development begins to catch gaps early.");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Acceptance Criteria Generator_");

  return lines.join("\n");
}

export default function AcceptanceCriteriaPage() {
  return (
    <ToolShell
      title="Acceptance Criteria Gen"
      steps={[
        { id: 1, label: "Feature", component: (p) => (
          <GenericStep {...p} title="Feature Type" description="What type of feature are you defining?" options={options.featureType} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="featureType" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Role", component: (p) => (
          <GenericStep {...p} title="User Role" description="Which user role is the primary actor?" options={options.userRole} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="userRole" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Input", component: (p) => (
          <GenericStep {...p} title="Input Variations" description="What input scenarios should be tested?" options={options.inputVariations} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="inputVariations" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Rules", component: (p) => (
          <GenericStep {...p} title="Business Rules" description="What business rules must be verified?" options={options.businessRules} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="businessRules" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Errors", component: (p) => (
          <GenericStep {...p} title="Error States" description="What error conditions must be handled?" options={options.errorStates} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="errorStates" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Perf", component: (p) => (
          <GenericStep {...p} title="Performance Threshold" description="What performance requirements apply?" options={options.performanceThreshold} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="performanceThreshold" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Security", component: (p) => (
          <GenericStep {...p} title="Security Requirements" description="What security measures are required?" options={options.securityRequirements} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="securityRequirements" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Edge Cases", component: (p) => (
          <GenericStep {...p} title="Edge Cases" description="What edge cases must be addressed?" options={options.edgeCases} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="edgeCases" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}









