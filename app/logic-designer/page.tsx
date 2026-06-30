"use client";

import type { FC } from "react";
import {
  Zap, GitBranch, Split, RotateCcw, Layers, FileJson,
  Activity, Webhook, Timer, Database, Filter,
  AlertTriangle, Bell, RefreshCw, Code, Globe, Clock,
  MessageSquare, Mail, Shield, Ban, Sliders, Search,
  Eye, Server, Download, Upload, Table, BookOpen, DollarSign,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  trigger: [
    { id: "webhook-trigger", title: "Webhook", description: "HTTP request triggers the workflow", icon: Webhook },
    { id: "schedule-trigger", title: "Schedule (Cron)", description: "Time-based recurring schedule", icon: Clock },
    { id: "email-trigger", title: "Email (Inbound)", description: "New email triggers the workflow", icon: Mail },
    { id: "form-trigger", title: "Form Submission", description: "Form submit initiates the flow", icon: FileJson },
    { id: "db-trigger", title: "Database Watch", description: "Watch for DB changes (CDC)", icon: Database },
    { id: "file-trigger", title: "File Upload", description: "New file in storage triggers flow", icon: Upload },
    { id: "queue-trigger", title: "Queue Message", description: "Message in queue triggers processing", icon: MessageSquare },
    { id: "webhook-poll", title: "Polling Webhook", description: "Poll an endpoint at intervals", icon: RefreshCw },
    { id: "manual-trigger", title: "Manual Trigger", description: "Manually execute the workflow", icon: Zap },
  ],
  transform: [
    { id: "map-fields", title: "Map Fields", description: "Rename, reorder, or select fields", icon: GitBranch },
    { id: "aggregate", title: "Aggregate Data", description: "Group, sum, count, average values", icon: GitBranch },
    { id: "filter", title: "Filter Records", description: "Keep only matching records", icon: Filter },
    { id: "lookup", title: "Lookup / Enrich", description: "Enrich data from external source", icon: Globe },
    { id: "format-date", title: "Format Date/Time", description: "Convert date/time formats and timezones", icon: Timer },
    { id: "parse-json", title: "Parse JSON/XML", description: "Parse structured data into fields", icon: Code },
    { id: "split-array", title: "Split Array", description: "Process each array item individually", icon: Split },
    { id: "merge", title: "Merge Collections", description: "GitBranch multiple data collections", icon: GitBranch },
    { id: "formula", title: "Formula / Expression", description: "Calculate values using expressions", icon: Sliders },
  ],
  conditional: [
    { id: "if-else", title: "If/Else Branch", description: "Branch based on a condition", icon: GitBranch },
    { id: "ArrowLeftRight", title: "ArrowLeftRight / Router", description: "Multi-branch routing by value", icon: Split },
    { id: "and-or", title: "AND/OR Logic", description: "GitBranch conditions with logical operators", icon: GitBranch },
    { id: "comparison", title: "Comparison Router", description: "Greater than, less than, equals comparisons", icon: Sliders },
    { id: "regex", title: "Regex Match", description: "Route based on regex pattern match", icon: Code },
    { id: "exists", title: "Field Exists", description: "Check if a field exists or is null", icon: Search },
    { id: "type-check", title: "Type Check", description: "Route based on data type of a field", icon: Database },
    { id: "range", title: "Range Check", description: "Check if value falls within a range", icon: Sliders },
    { id: "custom-fn", title: "Custom Function", description: "User-defined JavaScript condition", icon: Code },
  ],
  looping: [
    { id: "for-each", title: "For Each Item", description: "Iterate over each item in an array", icon: Split },
    { id: "while", title: "While Loop", description: "Loop while a condition is true", icon: RotateCcw },
    { id: "repeat", title: "Repeat N Times", description: "Repeat execution a fixed number of times", icon: RefreshCw },
    { id: "page-all", title: "Paginate All", description: "Loop through all paginated API results", icon: Layers },
    { id: "nested-loop", title: "Nested Loop", description: "Loop within a loop for multi-level data", icon: Split },
    { id: "batch", title: "Batch Processing", description: "Process items in configurable batches", icon: Table },
    { id: "parallel", title: "Parallel Iteration", description: "Process items in parallel branches", icon: GitBranch },
    { id: "loop-until", title: "Loop Until Condition", description: "Loop until a condition is met", icon: Timer },
    { id: "recursive", title: "Recursive Loop", description: "Recursively process nested structures", icon: RotateCcw },
  ],
  error: [
    { id: "retry-step", title: "Retry Step", description: "Retry the failed step with backoff", icon: RefreshCw },
    { id: "skip-fail", title: "Skip on Failure", description: "Skip the failed item and continue", icon: Ban },
    { id: "fail-workflow", title: "Fail Workflow", description: "Stop entire workflow on error", icon: AlertTriangle },
    { id: "fallback-value", title: "Fallback Value", description: "Use a default value on error", icon: Sliders },
    { id: "error-branch", title: "Error Branch", description: "Route to a separate error-handling path", icon: GitBranch },
    { id: "notify", title: "Notify on Error", description: "Send alert when error occurs", icon: Bell },
    { id: "log-continue", title: "Log & Continue", description: "Log error, continue with next item", icon: BookOpen },
    { id: "dead-letter", title: "Dead Letter Queue", description: "Send failed items to DLQ", icon: Ban },
    { id: "compensate", title: "Compensating Action", description: "Undo previous steps on failure", icon: RotateCcw },
  ],
  subworkflow: [
    { id: "execute-child", title: "Execute Child Workflow", description: "Run a separate child workflow", icon: Layers },
    { id: "call-webhook", title: "Call Webhook", description: "Call an external webhook and await response", icon: Webhook },
    { id: "run-script", title: "Run Code Script", description: "Execute custom JavaScript/Python code", icon: Code },
    { id: "ai-transform", title: "AI Transform", description: "Use AI to transform or generate data", icon: Zap },
    { id: "loop-back", title: "Loop Back", description: "Return to an earlier step in the workflow", icon: RotateCcw },
    { id: "wait-resume", title: "Wait & Resume", description: "Pause and wait for external trigger to resume", icon: Timer },
    { id: "rpc-call", title: "RPC / gRPC Call", description: "Call a remote procedure", icon: Globe },
    { id: "batch-sub", title: "Batch Sub-workflow", description: "Process batch items each in a sub-workflow", icon: Table },
    { id: "approval-gate", title: "Approval Gate", description: "Human approval step before proceeding", icon: Shield },
  ],
  output: [
    { id: "json-out", title: "JSON", description: "Structured JSON output", icon: FileJson },
    { id: "csv-out", title: "CSV", description: "Comma-separated values file", icon: Table },
    { id: "xml-out", title: "XML", description: "XML document output", icon: Code },
    { id: "html-out", title: "HTML Report", description: "Formatted HTML report", icon: Globe },
    { id: "pdf-out", title: "PDF", description: "PDF document generation", icon: Download },
    { id: "email-out", title: "Email", description: "Send email with results", icon: Mail },
    { id: "slack-out", title: "Slack Message", description: "Post to Slack channel", icon: MessageSquare },
    { id: "webhook-out", title: "Webhook Response", description: "Respond to the trigger webhook", icon: Webhook },
    { id: "db-write", title: "Database Write", description: "Insert/update database records", icon: Database },
  ],
  monitoring: [
    { id: "logs-detailed", title: "Detailed Execution Logs", description: "Full step-by-step execution logs", icon: BookOpen },
    { id: "metrics", title: "Metrics Dashboard", description: "Real-time workflow metrics dashboard", icon: Activity },
    { id: "alerts", title: "Alerting Rules", description: "Configure alerts on failures or thresholds", icon: Bell },
    { id: "tracing", title: "Distributed Tracing", description: "Trace across services and workflows", icon: GitBranch },
    { id: "audit", title: "Audit Trail", description: "Immutable audit log for compliance", icon: Shield },
    { id: "health", title: "Health Checks", description: "Periodic workflow health check endpoints", icon: Eye },
    { id: "cost-tracking", title: "Cost Tracking", description: "Monitor execution costs and credits", icon: DollarSign },
    { id: "sla-monitor", title: "SLA Monitoring", description: "Track execution time against SLAs", icon: Timer },
    { id: "retention", title: "Log Retention Policy", description: "Configurable log retention and archiving", icon: Database },
  ],
};

const dict: Record<string, Record<string, string>> = {
  trigger: {
    "webhook-trigger": "An incoming HTTP request (POST, PUT, etc.) triggers the workflow. The request body becomes the initial payload. Supports custom headers, query parameters, and payload validation. Ideal for event-driven integrations where external systems push data into the workflow.",
    "schedule-trigger": "A cron expression determines when the workflow executes. Supports timezone-aware scheduling, daylight saving adjustments, and complex recurrence patterns (every weekday at 9 AM, first day of month, etc.). Best for periodic data processing, report generation, and batch jobs.",
    "email-trigger": "An inbound email processed by an email-to-workflow service triggers execution. The email body, subject, sender, attachments, and headers are available as workflow variables. Useful for ticketing systems, invoice processing, and automated email responses.",
    "form-trigger": "A web form submission via services like Typeform, Google Forms, or a custom form triggers the workflow. Form fields map directly to workflow variables. Supports file uploads, conditional fields, and validation rules defined in the form builder.",
    "db-trigger": "Database Change Data Capture (CDC) events trigger the workflow when records are inserted, updated, or deleted. The payload includes the old and new state of the row. Requires a CDC tool like Debezium or native database trigger capabilities.",
    "file-trigger": "A file upload event to cloud storage (S3, GCS, Dropbox) triggers the workflow. The file is downloaded and processed. Supports filters by file name pattern, size limits, and folder paths. Ideal for document processing pipelines and ETL jobs.",
    "queue-trigger": "Messages from a queue (SQS, RabbitMQ, Kafka) trigger the workflow. Each message is processed individually. Supports batch consumption, message acknowledgment, and dead-letter routing. Best for decoupled, asynchronous processing at scale.",
    "webhook-poll": "Poll an external API endpoint at regular intervals. Compare responses to detect changes. Useful when the external system does not support webhooks. Configure polling frequency, timeout, and change detection logic.",
    "manual-trigger": "The workflow is triggered manually via a UI button or API call. Useful for testing, ad-hoc processing, and workflows that should not run automatically. Supports input parameters passed at trigger time.",
  },
  transform: {
    "map-fields": "Rename, reorder, select, or drop fields from the data payload. Supports dot notation for nested fields and array index access. Essential for normalizing data between different system formats. Can also add static default values for missing fields.",
    aggregate: "Group records by a key field and compute aggregate metrics: sum, count, average, minimum, maximum, or custom formulas. Output one aggregated record per group. Useful for summarizing sales data, usage metrics, or any grouped statistics.",
    filter: "Apply filter conditions to keep only records that match specified criteria. Supports comparison operators (==, !=, >, <, >=, <=), string matching (contains, starts with, regex), and logical combinations (AND, OR, NOT).",
    lookup: "Enrich the current data by looking up additional information from an external source such as a database, API, or file. Define the lookup key and the fields to retrieve. Handle missing lookups gracefully with default values.",
    "format-date": "Convert date/time values between formats, time zones, or calendar systems. Supports strftime patterns, ISO 8601, Unix timestamps, and relative date calculations. Essential for integrating systems that use different date representations.",
    "parse-json": "Parse a JSON string field into structured data that downstream steps can access. Also supports XML parsing. Handle malformed input with error branches. Extract specific paths using JSONPath or XPath expressions.",
    "split-array": "Take an array of items and split the workflow into parallel branches, one per item. Each branch processes a single item independently. After all branches complete, results can be merged back into an array.",
    merge: "GitBranch two or more data collections into a single collection. Supports union (concatenation), intersection (keep common items), and merge (join by key). Useful for combining data from multiple sources before processing.",
    formula: "Compute values using a formula or expression language (e.g., math.js, n8n expressions). Access variables from previous steps, apply mathematical operations, string concatenation, and conditional expressions. Test formulas with sample data.",
  },
  conditional: {
    "if-else": "A binary conditional branch. If the condition evaluates to true, take one path; otherwise, take the alternative path. Supports chained else-if branches for multiple conditions. Conditions can reference any variable from the workflow state.",
    ArrowLeftRight: "Route execution to one of multiple branches based on the value of a specified field. Each branch handles a specific value or a default fallback. More efficient than chained if-else for multi-value routing scenarios like status codes or categories.",
    "and-or": "GitBranch multiple conditions using AND (all must be true) or OR (at least one must be true) logic. Supports nested grouping with parentheses for complex boolean expressions. Short-circuit evaluation for performance.",
    comparison: "Route based on numeric or date comparisons: greater than, less than, equal to, not equal to, between, etc. Supports chained comparisons (e.g., 10 < x < 20). Essential for threshold-based logic and tiered processing.",
    regex: "Match a string field against a regular expression pattern to determine the routing path. Supports capture groups that can be used in downstream steps. Test and validate regex patterns to avoid catastrophic backtracking.",
    exists: "Check whether a field exists, is null, is an empty string, or is an empty array. Route differently based on the presence or absence of data. Useful for handling optional fields and incomplete data gracefully.",
    "type-check": "Route based on the data type of a field value: string, number, boolean, object, array, null. Useful when processing heterogeneous data where field types may vary between records.",
    range: "Check if a value falls within a defined numeric or date range. Supports inclusive/exclusive boundaries. Range conditions can be combined with AND/OR for complex interval logic. Ideal for age verification, pricing tiers, and time windows.",
    "custom-fn": "Write a custom JavaScript function that returns a boolean or a routing value. Provides unlimited flexibility for complex conditions. Access the full workflow state. Include error handling and test the function with edge cases.",
  },
  looping: {
    "for-each": "Iterate over each element in an array. For each item, execute the enclosed steps with the item as context. Supports index tracking and access to the parent scope. Items are processed sequentially by default; enable parallel for concurrent execution.",
    while: "Execute a set of steps repeatedly while a condition remains true. Check the condition before each iteration. Useful for polling loops, progressive data loading, and algorithms that require repeated refinement until convergence.",
    repeat: "Execute a set of steps a fixed number of times. The loop counter is available as a variable. Useful for retry logic with state, generating test data, or performing an action a predetermined number of times.",
    "page-all": "Automatically paginate through all pages of an API response. Configure the page parameter name, page size, and stopping condition (empty page, total count reached). Collects all results into a single array for downstream processing.",
    "nested-loop": "Loop within a loop — for each item in an outer loop, iterate over a sub-array. Track both outer and inner loop indices. Be mindful of performance; nested loops can generate a large number of iterations with deeply nested data.",
    batch: "Process items in configurable batch sizes rather than one at a time. Useful when the downstream system supports or requires batch operations. Configure batch size, timeout, and error handling for partial batch failures.",
    parallel: "Process loop iterations concurrently using parallel branches. Configure the maximum parallelism to control resource usage. Results from parallel iterations are collected and merged. Order is not guaranteed in parallel execution.",
    "loop-until": "Execute steps repeatedly until a condition is met, checking the condition after each iteration (post-test loop). Guarantees at least one execution. Useful for scenarios where the exit condition depends on the loop's own output.",
    recursive: "Recursively process nested data structures such as trees, nested comments, or hierarchical categories. Each recursion level operates on a subset of the data. Define a maximum recursion depth to prevent infinite loops.",
  },
  error: {
    "retry-step": "Automatically retry the failed step with configurable backoff. Set maximum retries, initial delay, and backoff multiplier. Optionally, define which error codes should trigger a retry (e.g., retry on 5xx but not 4xx).",
    "skip-fail": "When an error occurs for a specific item in a loop, skip that item and continue processing the remaining items. The error is logged but does not affect other items. Use when individual item failures should not block the batch.",
    "fail-workflow": "Immediately stop the entire workflow execution when any error occurs. The workflow is marked as failed. Useful for critical processes where partial success is not acceptable, such as financial transactions or data integrity operations.",
    "fallback-value": "When a step fails, use a predefined fallback value instead of the expected output. The workflow continues using the fallback value. Useful for non-critical data enrichment steps where a default value is acceptable.",
    "error-branch": "Route errors to a dedicated error-handling sub-path that can perform cleanup, logging, notification, and alternative processing. Separate error-handling logic from the main flow for cleaner workflow design.",
    notify: "Send a notification (Slack, email, SMS, PagerDuty) when a step fails. Include error details, step name, execution ID, and a direct link to the execution log. Configure notification severity levels to avoid alert fatigue.",
    "log-continue": "Log the full error details to the execution history but continue with the next step or next item. Does not interrupt the workflow. Best for non-critical errors that should not halt processing but must be recorded.",
    "dead-letter": "Route failed items or messages to a Dead Letter Queue (DLQ) for later inspection and reprocessing. DLQ stores the original payload, error details, and metadata. Set up monitoring on DLQ depth to detect systemic issues.",
    compensate: "Execute compensating actions to undo the effects of previously completed steps when a downstream step fails. Implement an idempotent rollback for each step. Essential for multi-step operations that must maintain consistency.",
  },
  subworkflow: {
    "execute-child": "Call a separate, independent workflow (child) and optionally wait for its result. Pass input data and receive output data. Enables workflow composition and reuse. Child workflows have their own execution context and error handling.",
    "call-webhook": "Make an HTTP request to an external webhook endpoint and process the response. Supports GET, POST, PUT, PATCH, DELETE methods with custom headers, body, and query parameters. Handle response status codes and timeouts.",
    "run-script": "Execute custom JavaScript or Python code within the workflow. Access all workflow variables, perform complex logic, and return results. Use a sandboxed environment for security. Include proper error handling and testing.",
    "ai-transform": "Send data to an AI model (GPT, Claude, custom model) for transformation, generation, or analysis. Define the prompt template and response schema. Handle API rate limits and token usage costs. Cache common AI responses.",
    "loop-back": "Return execution to an earlier step in the workflow, creating a loop. Useful for iterative refinement, multi-pass processing, or workflows that need to revisit steps based on conditions. Set a maximum loop count to prevent infinite loops.",
    "wait-resume": "Pause the workflow execution and wait for an external event or manual resume to continue. The workflow state is persisted. Useful for approval workflows, waiting for external processes, or timed delays between steps.",
    "rpc-call": "Make a remote procedure call via gRPC or similar RPC framework. Define the service, method, and protobuf message. Faster than REST for high-throughput scenarios. Requires a .proto schema and service endpoint configuration.",
    "batch-sub": "For each batch of items, execute a sub-workflow that processes the batch. Configure batch size, sub-workflow timeout, and result aggregation. Useful for parallel batch processing of large datasets with independent processing units.",
    "approval-gate": "Insert a human approval step that pauses the workflow. An authorized user reviews the current state and approves or rejects. On approval, the workflow continues. On rejection, it takes an alternative path. Log all approval decisions for audit.",
  },
  output: {
    "json-out": "Format the final output as a JSON object or array. Include metadata such as execution ID, timestamps, and status. Pretty-print with configurable indentation. Validate JSON output against a schema before delivery.",
    "csv-out": "Generate a CSV file with headers from field names. Handle special characters with proper quoting and escaping. Support custom delimiters (comma, tab, semicolon), line endings, and encoding (UTF-8 with BOM for Excel compatibility).",
    "xml-out": "Produce an XML document with configurable root element, namespaces, and encoding. Map workflow variables to XML elements and attributes. Validate against XSD schema if available. Handle CDATA sections for special content.",
    "html-out": "Generate a styled HTML document with CSS, tables, charts, and formatting. Use a template engine to inject workflow data into HTML templates. Include responsive design for email clients and web browsers.",
    "pdf-out": "Generate a PDF document with structured layout, tables, headers, footers, and page numbering. Use a headless browser or PDF generation API. Optimize for print with appropriate margins, font sizes, and color profiles.",
    "email-out": "Compose and send an email with the workflow output as the body. Support HTML and plain text versions, attachments, inline images, and CC/BCC recipients. Use SMTP or email API (SendGrid, SES). Track delivery status.",
    "slack-out": "Post the output to a Slack channel or direct message using Block Kit for rich formatting. Include buttons, dropdowns, images, and interactive elements. Format data into sections, fields, and dividers for readability.",
    "webhook-out": "Respond to the original trigger webhook with the workflow output. Set the response status code, headers, and body. Useful for synchronous webhook workflows where the caller expects a response with processed data.",
    "db-write": "Write the output to a database table. Supports INSERT (new records), UPDATE (existing by key), UPSERT (insert or update), and DELETE operations. Use parameterized queries to prevent SQL injection. Handle connection pooling and retries.",
  },
  monitoring: {
    "logs-detailed": "Capture detailed execution logs for every step including input, output, duration, and errors. Logs are searchable and filterable. Supports log levels (debug, info, warn, error). Essential for debugging and post-mortem analysis.",
    metrics: "Expose real-time workflow metrics including execution count, success rate, average duration, error rate, and throughput. Visualize on a dashboard with time-series charts. Configure custom metrics for business KPIs.",
    alerts: "Define alert rules that trigger when specific conditions are met: high error rate, slow execution, failed workflow, or custom metric thresholds. Alerts can notify via Slack, email, PagerDuty, or webhook. Include severity levels and escalation policies.",
    tracing: "Enable distributed tracing across workflow steps and external service calls. Each execution gets a unique trace ID. View waterfall diagrams showing step timing and dependencies. Essential for performance optimization and debugging complex workflows.",
    audit: "Maintain an immutable, append-only audit log of all workflow executions including who triggered it, what data was processed, and the final outcome. Store audit logs in WORM (Write Once, Read Many) storage for compliance.",
    health: "Expose health check endpoints that verify the workflow system is operational. Check connectivity to dependencies (databases, APIs, queues). Return overall status (healthy/degraded/down) with per-component details for operational monitoring.",
    "cost-tracking": "Track execution costs including compute time, API calls, AI token usage, and third-party service charges. Attribute costs to specific workflows, users, or departments. Set budget alerts and cost optimization recommendations.",
    "sla-monitor": "Monitor workflow execution time against defined SLAs. Track P50/P95/P99 latency. Alert on SLA breaches. Generate SLA compliance reports for service reviews. Essential for customer-facing workflows with contractual time commitments.",
    retention: "Configure log retention policies: how long execution logs, audit trails, and temporary data are kept. Support tiered storage (hot/warm/cold) for cost optimization. Implement automated archiving and purging based on retention rules.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const trigger = selections.step1;
  const transform = selections.step2;
  const conditional = selections.step3;
  const looping = selections.step4;
  const error = selections.step5;
  const subworkflow = selections.step6;
  const output = selections.step7;
  const monitoring = selections.step8;

  const lines: string[] = [];

  lines.push("# n8n/Make Logic Designer Blueprint");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const trLabel = Array.isArray(trigger) ? trigger.map(id => options.trigger.find(o => o.id === id)?.title || id).join(", ") : options.trigger.find(o => o.id === trigger)?.title || trigger;
  const trNote = notes[`trigger-${trigger}`] || "";
  lines.push(`| Trigger Type | ${trLabel} | ${trNote}`);
  const tfLabel = Array.isArray(transform) ? transform.map(id => options.transform.find(o => o.id === id)?.title || id).join(", ") : options.transform.find(o => o.id === transform)?.title || transform;
  const tfNote = notes[`transform-${transform}`] || "";
  lines.push(`| Data Transformation | ${tfLabel} | ${tfNote}`);
  const cLabel = Array.isArray(conditional) ? conditional.map(id => options.conditional.find(o => o.id === id)?.title || id).join(", ") : options.conditional.find(o => o.id === conditional)?.title || conditional;
  const cNote = notes[`conditional-${conditional}`] || "";
  lines.push(`| Conditional Logic | ${cLabel} | ${cNote}`);
  const lLabel = Array.isArray(looping) ? looping.map(id => options.looping.find(o => o.id === id)?.title || id).join(", ") : options.looping.find(o => o.id === looping)?.title || looping;
  const lNote = notes[`looping-${looping}`] || "";
  lines.push(`| Looping Strategy | ${lLabel} | ${lNote}`);
  const eLabel = Array.isArray(error) ? error.map(id => options.error.find(o => o.id === id)?.title || id).join(", ") : options.error.find(o => o.id === error)?.title || error;
  const eNote = notes[`error-${error}`] || "";
  lines.push(`| Error Handler | ${eLabel} | ${eNote}`);
  const sLabel = Array.isArray(subworkflow) ? subworkflow.map(id => options.subworkflow.find(o => o.id === id)?.title || id).join(", ") : options.subworkflow.find(o => o.id === subworkflow)?.title || subworkflow;
  const sNote = notes[`subworkflow-${subworkflow}`] || "";
  lines.push(`| Sub-workflow | ${sLabel} | ${sNote}`);
  const oLabel = Array.isArray(output) ? output.map(id => options.output.find(o => o.id === id)?.title || id).join(", ") : options.output.find(o => o.id === output)?.title || output;
  const oNote = notes[`output-${output}`] || "";
  lines.push(`| Output Format | ${oLabel} | ${oNote}`);
  const mLabel = Array.isArray(monitoring) ? monitoring.map(id => options.monitoring.find(o => o.id === id)?.title || id).join(", ") : options.monitoring.find(o => o.id === monitoring)?.title || monitoring;
  const mNote = notes[`monitoring-${monitoring}`] || "";
  lines.push(`| Monitoring | ${mLabel} | ${mNote}`);
  lines.push("");

  lines.push("## Workflow Design");
  lines.push("");
  lines.push("### Trigger Configuration");
  lines.push("");
  lines.push(Array.isArray(trigger) ? trigger.map(v => dict.trigger[v] || v).join(", ") : dict.trigger[trigger] || trigger);
  if (trNote) lines.push(`> **Note:** ${trNote}`);
  lines.push("");

  lines.push("### Data Transformation");
  lines.push("");
  lines.push(Array.isArray(transform) ? transform.map(v => dict.transform[v] || v).join(", ") : dict.transform[transform] || transform);
  if (tfNote) lines.push(`> **Note:** ${tfNote}`);
  lines.push("");

  lines.push("### Conditional Logic");
  lines.push("");
  lines.push(Array.isArray(conditional) ? conditional.map(v => dict.conditional[v] || v).join(", ") : dict.conditional[conditional] || conditional);
  if (cNote) lines.push(`> **Note:** ${cNote}`);
  lines.push("");

  lines.push("### Looping Strategy");
  lines.push("");
  lines.push(Array.isArray(looping) ? looping.map(v => dict.looping[v] || v).join(", ") : dict.looping[looping] || looping);
  if (lNote) lines.push(`> **Note:** ${lNote}`);
  lines.push("");

  lines.push("### Error Handling");
  lines.push("");
  lines.push(Array.isArray(error) ? error.map(v => dict.error[v] || v).join(", ") : dict.error[error] || error);
  if (eNote) lines.push(`> **Note:** ${eNote}`);
  lines.push("");

  lines.push("### Sub-workflow Integration");
  lines.push("");
  lines.push(Array.isArray(subworkflow) ? subworkflow.map(v => dict.subworkflow[v] || v).join(", ") : dict.subworkflow[subworkflow] || subworkflow);
  if (sNote) lines.push(`> **Note:** ${sNote}`);
  lines.push("");

  lines.push("### Output Format");
  lines.push("");
  lines.push(Array.isArray(output) ? output.map(v => dict.output[v] || v).join(", ") : dict.output[output] || output);
  if (oNote) lines.push(`> **Note:** ${oNote}`);
  lines.push("");

  lines.push("### Monitoring & Observability");
  lines.push("");
  lines.push(Array.isArray(monitoring) ? monitoring.map(v => dict.monitoring[v] || v).join(", ") : dict.monitoring[monitoring] || monitoring);
  if (mNote) lines.push(`> **Note:** ${mNote}`);
  lines.push("");

  lines.push("## Execution Flow Diagram");
  lines.push("");
  lines.push("```");
  lines.push("┌─────────────────────┐");
  lines.push(`│  ${trLabel.padEnd(19)}│`);
  lines.push("└────────┬────────────┘");
  lines.push("         │");
  lines.push("         ▼");
  lines.push("┌─────────────────────┐");
  lines.push(`│  ${tfLabel.padEnd(19)}│`);
  lines.push("└────────┬────────────┘");
  lines.push("         │");
  lines.push("         ▼");
  lines.push("┌─────────────────────┐");
  lines.push(`│  ${cLabel.padEnd(19)}│`);
  lines.push("└────────┬────────────┘");
  lines.push("         │");
  lines.push("    ┌────┴────┐");
  lines.push("    │         │");
  lines.push("    ▼         ▼");
  lines.push("  TRUE      FALSE");
  lines.push("    │         │");
  lines.push("    ▼         │");
  lines.push("┌─────────┐   │");
  lines.push(`│ ${lLabel.padEnd(9)}│   │`);
  lines.push("└────┬────┘   │");
  lines.push("     │        │");
  lines.push("     ▼        │");
  lines.push("┌─────────┐   │");
  lines.push(`│ ${eLabel.padEnd(9)}│   │`);
  lines.push("└────┬────┘   │");
  lines.push("     │        │");
  lines.push("     ▼        │");
  lines.push("┌─────────┐   │");
  lines.push(`│ ${sLabel.padEnd(9)}│   │`);
  lines.push("└────┬────┘   │");
  lines.push("     │        │");
  lines.push("     ▼        │");
  lines.push("┌─────────┐   │");
  lines.push(`│ ${oLabel.padEnd(9)}│   │`);
  lines.push("└────┬────┘   │");
  lines.push("     │        │");
  lines.push("     ▼        ▼");
  lines.push("┌─────────────────────┐");
  lines.push(`│  ${mLabel.padEnd(19)}│`);
  lines.push("└─────────────────────┘");
  lines.push("```");
  lines.push("");

  lines.push("## Variable Mapping");
  lines.push("");
  lines.push("| Source | Variable Name | Type | Description");
  lines.push("|--------|--------------|------|-------------");
  lines.push("| Trigger Input | `$trigger.payload` | Object | Raw trigger payload");
  lines.push("| Trigger Input | `$trigger.headers` | Object | HTTP headers (if webhook)");
  lines.push("| After Transform | `$transform.output` | Object | Transformed data");
  lines.push("| Conditional | `$conditional.result` | Boolean/String | Routing decision");
  lines.push("| Loop Context | `$loop.item` | Any | Current loop item");
  lines.push("| Loop Context | `$loop.index` | Number | Current loop iteration index");
  lines.push("| Error Handler | `$error.message` | String | Error description");
  lines.push("| Sub-workflow | `$subworkflow.result` | Object | Sub-workflow output");
  lines.push("| Final Output | `$output.result` | Object | Formatted output");
  lines.push("");

  lines.push("## Error Scenarios & Recovery");
  lines.push("");
  lines.push("| Scenario | Handling Strategy | Recovery Action");
  lines.push("|----------|------------------|---------------");
  lines.push("| Network timeout | " + (error === "retry-step" ? "Automatic retry with backoff" : error === "fail-workflow" ? "Fail entire workflow" : "Log and continue") + " | Retry 3 times, then " + (error === "retry-step" ? "fall to DLQ" : error === "log-continue" ? "skip item" : "stop workflow"));
  lines.push("| Invalid input data | Schema validation | Route to error branch or skip record");
  lines.push("| API rate limit | " + (error === "retry-step" ? "Retry with exponential backoff" : "Log and continue") + " | Wait for retry-after header duration");
  lines.push("| External service down | Circuit breaker | Stop calling, periodic health check");
  lines.push("| Data transformation failure | Fallback value | Use default or skip field");
  lines.push("");

  lines.push("## Performance Considerations");
  lines.push("");
  lines.push("| Factor | Recommended Setting");
  lines.push("|--------|-------------------");
  lines.push("| Max Execution Time | 15 minutes per workflow");
  lines.push("| Max Loop Iterations | 10,000 per execution");
  lines.push("| Nested Loop Depth | Max 3 levels");
  lines.push("| Parallel Branches | Max 20 concurrent");
  lines.push("| Payload Size Limit | 10 MB per execution");
  lines.push("| Sub-workflow Timeout | 5 minutes per child");
  lines.push("");

  lines.push("## Testing Checklist");
  lines.push("");
  lines.push("- [ ] Test trigger with sample payload");
  lines.push("- [ ] Verify data transformation produces expected output");
  lines.push("- [ ] Test each conditional branch with relevant inputs");
  lines.push("- [ ] Validate loop behavior with empty arrays and edge cases");
  lines.push("- [ ] Simulate error scenarios and confirm handler behavior");
  lines.push("- [ ] Test sub-workflow integration end-to-end");
  lines.push("- [ ] Verify output format meets consumer requirements");
  lines.push("- [ ] Check monitoring dashboards reflect correct data");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by n8n/Make Logic Designer_");

  return lines.join("\n");
}

export default function LogicDesignerPage() {
  return (
    <ToolShell
      title="n8n/Make Logic Designer"
      steps={[
        { id: 1, label: "Trigger", component: (p) => (
          <GenericStep {...p} title="Trigger Type" description="What starts the workflow?" options={options.trigger} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="trigger" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Transform", component: (p) => (
          <GenericStep {...p} title="Data Transformation" description="How should the data be transformed?" options={options.transform} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="transform" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Logic", component: (p) => (
          <GenericStep {...p} title="Conditional Logic" description="How should branching decisions work?" options={options.conditional} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="conditional" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Loop", component: (p) => (
          <GenericStep {...p} title="Looping" description="How should iteration work?" options={options.looping} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="looping" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Error", component: (p) => (
          <GenericStep {...p} title="Error Handler" description="How should errors be handled?" options={options.error} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="error" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Sub-workflow", component: (p) => (
          <GenericStep {...p} title="Sub-workflow" description="What sub-workflow integration is needed?" options={options.subworkflow} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="subworkflow" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Output", component: (p) => (
          <GenericStep {...p} title="Output Format" description="How should the final output be formatted?" options={options.output} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="output" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Monitor", component: (p) => (
          <GenericStep {...p} title="Monitoring" description="How should the workflow be monitored?" options={options.monitoring} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="monitoring" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}











