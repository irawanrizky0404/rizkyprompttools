"use client";

import type { FC } from "react";
import {
  Webhook, Mail, FileText, ShoppingCart, Clock, Table, BookOpen,
  MessageSquare, Building2, Database, Sparkles, Code, Languages,
  ArrowLeftRight, GitBranch, AlertTriangle, Shield, RotateCcw,
  Bell, Ban, Filter, Search, Sliders, Split, Combine,
  Calendar, Timer, Sunrise, Moon, RefreshCw, Send,
  FileJson, FileText as FileTextIcon, Monitor, Printer, Activity,
  Globe, Download, Zap,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  trigger: [
    { id: "webhook", title: "Webhook", description: "Receive HTTP request to trigger workflow", icon: Webhook },
    { id: "gmail", title: "Gmail", description: "Trigger on new email in inbox", icon: Mail },
    { id: "typeform", title: "Typeform", description: "New form submission trigger", icon: FileText },
    { id: "shopify", title: "Shopify", description: "New order or customer event", icon: ShoppingCart },
    { id: "schedule", title: "Schedule", description: "Time-based cron trigger", icon: Clock },
    { id: "stripe", title: "Stripe", description: "Payment or invoice event trigger", icon: Building2 },
    { id: "slack-trigger", title: "Slack Command", description: "Slack slash command or shortcut trigger", icon: MessageSquare },
    { id: "s3", title: "S3 Upload", description: "New file uploaded to S3 bucket", icon: Database },
  ],
  action: [
    { id: "google-sheets", title: "Google Sheets", description: "Add row to spreadsheet", icon: Table },
    { id: "notion", title: "Notion", description: "Create database entry", icon: BookOpen },
    { id: "slack", title: "Slack", description: "Send channel message", icon: MessageSquare },
    { id: "hubspot", title: "CRM (HubSpot)", description: "Create or update contact", icon: Building2 },
    { id: "database", title: "Database", description: "SQL insert or update", icon: Database },
    { id: "sendgrid", title: "SendGrid Email", description: "Send transactional email", icon: Mail },
    { id: "webhook-out", title: "Webhook Out", description: "POST data to external URL", icon: Webhook },
    { id: "zendesk", title: "Zendesk Ticket", description: "Create support ticket", icon: MessageSquare },
  ],
  ai: [
    { id: "summarize", title: "Summarize Text", description: "Condense long text into key points", icon: Sparkles },
    { id: "extract-json", title: "Extract JSON", description: "Parse structured data from documents", icon: Code },
    { id: "translate", title: "Language Translation", description: "Translate content between languages", icon: Languages },
    { id: "none", title: "No AI Processing", description: "Skip AI processing step", icon: ArrowLeftRight },
    { id: "classify", title: "Text Classification", description: "Categorize text into predefined labels", icon: Filter },
    { id: "sentiment", title: "Sentiment Analysis", description: "Detect positive, negative, or neutral tone", icon: Activity },
    { id: "rewrite", title: "Rewrite & Rephrase", description: "Improve tone, clarity, or style of text", icon: FileTextIcon },
    { id: "qa", title: "Q&A Extraction", description: "Extract question-answer pairs from text", icon: Search },
  ],
  complexity: [
    { id: "simple", title: "Simple (Linear)", description: "Straightforward linear flow, no branching", icon: GitBranch },
    { id: "advanced", title: "Advanced (Routers)", description: "Conditional logic, error handlers, parallel paths", icon: AlertTriangle },
    { id: "nested", title: "Nested Loops", description: "Iterate over lists with nested sub-workflows", icon: Split },
    { id: "fan-out", title: "Fan-Out / Fan-In", description: "Parallel execution with result aggregation", icon: Combine },
    { id: "state-machine", title: "State Machine", description: "Multi-state workflow with transitions and guards", icon: RotateCcw },
    { id: "approval", title: "Approval Gate", description: "Human-in-the-loop approval step before proceeding", icon: Ban },
    { id: "dynamic-mapping", title: "Dynamic Mapping", description: "Runtime field mapping based on data content", icon: Sliders },
    { id: "event-sourcing", title: "Event Sourcing", description: "Append-only event log, replayable history", icon: RefreshCw },
  ],
  errorHandling: [
    { id: "retry", title: "Retry with Backoff", description: "Automatic retry with exponential backoff", icon: RotateCcw },
    { id: "dead-letter", title: "Dead Letter Queue", description: "Route failed messages to a quarantine queue", icon: Ban },
    { id: "fallback-action", title: "Fallback Action", description: "Run alternative action on failure", icon: ArrowLeftRight },
    { id: "notify-on-fail", title: "Notify on Failure", description: "Send alert to Slack/email on error", icon: Bell },
    { id: "circuit-breaker", title: "Circuit Breaker", description: "Stop execution after repeated failures", icon: Shield },
    { id: "log-only", title: "Log & Continue", description: "Log error and proceed with next step", icon: FileTextIcon },
    { id: "rollback", title: "Rollback Transaction", description: "Undo previous steps on cancellation", icon: RefreshCw },
    { id: "pause-on-error", title: "Pause on Error", description: "Pause workflow for manual intervention", icon: Timer },
  ],
  dataFiltering: [
    { id: "none-filter", title: "No Filtering", description: "Pass all data through unchanged", icon: ArrowLeftRight },
    { id: "field-filter", title: "Field Whitelist", description: "Keep only specified fields", icon: Filter },
    { id: "condition-filter", title: "Conditional Filter", description: "Keep records matching a condition", icon: Search },
    { id: "deduplicate", title: "Deduplicate", description: "Remove duplicate records by key field", icon: Ban },
    { id: "transform", title: "Transform Values", description: "Rename, merge, or split fields", icon: Split },
    { id: "type-coerce", title: "Type Coercion", description: "Cast fields to target data types", icon: Sliders },
    { id: "lookup-enrich", title: "Lookup & Enrich", description: "Join with external data for enrichment", icon: Globe },
    { id: "aggregate", title: "Aggregate Records", description: "Group and summarize records", icon: Combine },
  ],
  scheduling: [
    { id: "immediate", title: "Run Immediately", description: "Execute workflow as soon as triggered", icon: Zap },
    { id: "cron", title: "Cron Schedule", description: "Recurring schedule via cron expression", icon: Clock },
    { id: "delay", title: "Delayed Start", description: "Wait a specified duration before execution", icon: Timer },
    { id: "batching", title: "Batched Processing", description: "Accumulate records and process in batch", icon: Combine },
    { id: "time-window", title: "Time Window", description: "Only execute within defined time window", icon: Sunrise },
    { id: "throttle", title: "Throttled Rate", description: "Limit executions per time unit", icon: Ban },
    { id: "night-only", title: "Night-Only Execution", description: "Run only during off-peak hours", icon: Moon },
    { id: "manual-approval", title: "Manual Approval", description: "Queue for manual approval before run", icon: Calendar },
  ],
  outputFormat: [
    { id: "json", title: "JSON", description: "Structured JSON output", icon: FileJson },
    { id: "csv", title: "CSV", description: "Comma-separated values file", icon: Table },
    { id: "html", title: "HTML Report", description: "Formatted HTML report with styling", icon: Globe },
    { id: "pdf", title: "PDF Document", description: "Printable PDF document output", icon: Printer },
    { id: "email-body", title: "Email Body", description: "Formatted email body text", icon: Mail },
    { id: "slack-blocks", title: "Slack Block Kit", description: "Rich Slack message with interactive blocks", icon: MessageSquare },
    { id: "webhook-payload", title: "Webhook Payload", description: "POST payload to configured URL", icon: Send },
    { id: "excel", title: "Excel XLSX", description: "Microsoft Excel spreadsheet", icon: Download },
  ],
};

const dict: Record<string, Record<string, string>> = {
  trigger: {
    webhook: "Trigger the workflow via an incoming webhook request. Accept POST requests with JSON payload, validate signature, and parse the body for downstream steps.",
    gmail: "Trigger the workflow whenever a new email arrives in the configured Gmail inbox. Monitor for specific senders, subject keywords, or label assignments.",
    typeform: "Trigger the workflow on new Typeform submissions. Map form fields to workflow variables and handle file uploads from responses.",
    shopify: "Trigger the workflow on Shopify events such as new orders, customer creation, or product updates. Use the Shopify Admin API for data enrichment.",
    schedule: "Trigger the workflow on a recurring schedule using cron expressions. Support for timezone-aware scheduling and daylight saving time adjustments.",
    stripe: "Trigger on Stripe events like payment succeeded, invoice created, or subscription updated. Use webhook signature verification for secure delivery.",
    "slack-trigger": "Trigger the workflow via a Slack slash command or shortcut. Capture command arguments, channel context, and user identity for downstream processing.",
    s3: "Trigger on new S3 object creation events. Configure prefix/suffix filters to narrow which files trigger the workflow. Include bucket and key in the payload.",
  },
  action: {
    "google-sheets": "Write data to a Google Sheet. Append rows to the specified sheet, update existing rows by key, or create new sheets dynamically.",
    notion: "Create or update Notion database entries. Map workflow data to Notion properties including text, select, multi-select, date, and relation fields.",
    slack: "Send messages to Slack channels or direct messages. Use Block Kit for rich message formatting with buttons, images, and interactive elements.",
    hubspot: "Create or update HubSpot CRM contacts, companies, deals, or tickets. Map workflow fields to HubSpot properties and handle duplicate detection.",
    database: "Execute SQL queries against your database. Support for INSERT, UPDATE, SELECT operations with parameterized queries to prevent injection.",
    sendgrid: "Send transactional emails via SendGrid. Support for dynamic templates, attachments, CC/BCC, and personalization fields per recipient.",
    "webhook-out": "Send HTTP POST requests to external URLs. Support for custom headers, JSON or form-encoded bodies, and response handling with status code checks.",
    zendesk: "Create or update Zendesk support tickets. Map workflow data to ticket fields including priority, status, assignee, tags, and custom fields.",
  },
  ai: {
    summarize: "Pass the input text through an AI summarization model. Configure summary length and focus areas such as key points, action items, or decisions.",
    "extract-json": "Use AI to parse unstructured documents into structured JSON. Define the expected schema and provide examples for accurate extraction.",
    translate: "Translate text content between languages using AI. Auto-detect source language and preserve formatting, links, and special characters.",
    none: "Skip the AI processing step entirely. Pass data directly from trigger to action without any AI transformation.",
    classify: "Classify incoming text into predefined categories using a zero-shot or fine-tuned classification model. Return label and confidence score for each category.",
    sentiment: "Analyze the sentiment of input text as positive, negative, or neutral. Return a confidence score and optional aspect-level breakdown.",
    rewrite: "Rewrite input text to match a specified tone or style. Options include formal, casual, persuasive, or simplified language while preserving the original meaning.",
    qa: "Extract question-and-answer pairs from the input text. Return an array of Q&A objects useful for knowledge base generation or FAQ creation.",
  },
  complexity: {
    simple: "Build a linear workflow with sequential steps. No branching, error handling is basic, and all steps execute in order with a simple pass/fail outcome.",
    advanced: "Build an advanced workflow with conditional routers, error handling paths, retry logic with exponential backoff, parallel execution branches, and fallback actions.",
    nested: "Support nested loops that iterate over arrays of items. Each item can trigger a sub-workflow with its own steps and variables, then aggregate results back.",
    "fan-out": "Implement a fan-out pattern where a single input splits into parallel execution paths. Use a fan-in join step to collect and merge all branch results.",
    "state-machine": "Model the workflow as a finite state machine with defined states, transitions, and guards. Perfect for complex business processes with many conditional paths.",
    approval: "Insert a human-in-the-loop approval gate into the workflow. The workflow pauses at the gate and resumes only after an authorized user approves or rejects.",
    "dynamic-mapping": "Use runtime field mapping expressions that reference previous step outputs. Mappings are evaluated dynamically using JSONata or similar expression language.",
    "event-sourcing": "Store every state change as an append-only event log. Enable replay of past executions for debugging, auditing, or reprocessing with updated logic.",
  },
  errorHandling: {
    retry: "Automatically retry failed steps with exponential backoff. Configure max retries, initial delay, and backoff multiplier to handle transient failures gracefully.",
    "dead-letter": "Route messages that fail processing to a dead letter queue for later inspection. Isolate problematic records without blocking the main workflow pipeline.",
    "fallback-action": "Define a fallback action to execute when the primary action fails. Useful for maintaining data flow continuity even when a service is unavailable.",
    "notify-on-fail": "Send a real-time notification to a Slack channel or email when a workflow step fails. Include error details, step name, and a link to the execution log.",
    "circuit-breaker": "Monitor error rates and open the circuit if failures exceed a threshold. Subsequent executions fail fast until the circuit resets, protecting downstream services.",
    "log-only": "Log the error details to the execution history but continue processing the remaining steps. Best for non-critical errors that should not halt the workflow.",
    rollback: "Execute compensating actions to undo changes made by previous steps when a subsequent step fails. Implement idempotent rollback logic for each step.",
    "pause-on-error": "Pause the workflow execution when an unrecoverable error occurs. Place the execution into a paused state for manual review and potential resumption.",
  },
  dataFiltering: {
    "none-filter": "Pass all data through without any modifications or filtering. Every field and record is forwarded as-is to the next step in the workflow.",
    "field-filter": "Whitelist only the specified fields from the incoming payload. All other fields are stripped, reducing payload size and preventing sensitive data leaks.",
    "condition-filter": "Apply a filter condition to the data stream. Only records that satisfy the condition pass through. Supports comparison operators and logical combinations.",
    deduplicate: "Remove duplicate records based on a configurable key field. Keep the first or last occurrence and log the count of removed duplicates for auditing.",
    transform: "Apply field-level transformations including renaming, merging multiple fields into one, splitting a field into several, and formatting values.",
    "type-coerce": "Cast field values to target data types. Supports conversions between string, number, boolean, date, and JSON object types with error handling.",
    "lookup-enrich": "Look up data from an external source using a field value as key and enrich the record with retrieved fields. Supports REST APIs and database queries.",
    aggregate: "Group records by a key field and compute aggregate metrics such as sum, count, average, min, and max. Output one aggregated record per group.",
  },
  scheduling: {
    immediate: "Execute the workflow immediately when the trigger fires. No delay or scheduling — run as fast as the trigger produces events.",
    cron: "Execute on a recurring schedule defined by a cron expression. Supports standard 5-field cron syntax with timezone configuration and DST handling.",
    delay: "Delay the start of execution by a configurable duration after the trigger fires. Useful for waiting for related data to arrive before processing.",
    batching: "Accumulate incoming trigger events into a batch based on count or time window, then process the entire batch at once. Reduces per-record overhead.",
    "time-window": "Restrict execution to a defined time window. Events outside the window are queued until the window opens or are discarded based on configuration.",
    throttle: "Limit the execution rate to a maximum number of runs per minute or hour. Excess events are queued and processed at the throttled rate.",
    "night-only": "Delay execution to run only during off-peak night hours. Configure the start and end of the allowed night window for heavy data processing tasks.",
    "manual-approval": "Place each workflow execution into a pending queue for manual approval before running. An authorized user must approve or reject each queued run.",
  },
  outputFormat: {
    json: "Format the output as a JSON object or array with proper indentation. Include metadata such as execution ID and timestamp in the root structure.",
    csv: "Generate a CSV file with headers from field names. Escape commas and quotes properly. Support for custom delimiters and quote characters.",
    html: "Produce a styled HTML report with table formatting, color-coded status indicators, and embedded CSS. Suitable for email or web display.",
    pdf: "Generate a PDF document with structured layout, tables, and headers. Use a print-friendly template with page numbering and company branding.",
    "email-body": "Format the output as an HTML email body with inline styles. Include a subject line, greeting, content sections, and a signature block.",
    "slack-blocks": "Build a rich Slack message using Block Kit. Include header blocks, section blocks with fields, divider lines, and interactive button elements.",
    "webhook-payload": "Send the output as a JSON payload to a configured webhook URL. Include HMAC signature in a custom header for endpoint verification.",
    excel: "Generate a Microsoft Excel .xlsx file with multiple sheets, styled headers, column widths, and data validation where applicable.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const trigger = selections.step1;
  const actions: string[] = selections.step2 || [];
  const ais: string[] = selections.step3 || [];
  const complexity = selections.step4;
  const errorHandling: string[] = selections.step5 || [];
  const dataFiltering = selections.step6;
  const scheduling = selections.step7;
  const outputFormat = selections.step8;

  const lines: string[] = [];

  lines.push("# AI Automation Workflow Blueprint");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const tLabel = Array.isArray(trigger) ? trigger.map(id => options.trigger.find(o => o.id === id)?.title || id).join(", ") : options.trigger.find(o => o.id === trigger)?.title || trigger;
  const tNote = notes[`trigger-${trigger}`] || "";
  lines.push(`| Trigger Source | ${tLabel} | ${tNote}`);
  const aLabels = actions.map(id => options.action.find(o => o.id === id)?.title || id).join(", ");
  const aNotes = actions.map(id => notes[`action-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Action Destination(s) | ${aLabels || "None selected"} | ${aNotes}`);
  const aiLabels = ais.map(id => options.ai.find(o => o.id === id)?.title || id).join(", ");
  const aiNotes = ais.map(id => notes[`ai-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| AI Processing | ${aiLabels || "None"} | ${aiNotes}`);
  const cLabel = Array.isArray(complexity) ? complexity.map(id => options.complexity.find(o => o.id === id)?.title || id).join(", ") : options.complexity.find(o => o.id === complexity)?.title || complexity;
  const cNote = notes[`complexity-${complexity}`] || "";
  lines.push(`| Complexity Level | ${cLabel} | ${cNote}`);
  const eLabels = errorHandling.map(id => options.errorHandling.find(o => o.id === id)?.title || id).join(", ");
  const eNotes = errorHandling.map(id => notes[`errorHandling-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Error Handling | ${eLabels || "None"} | ${eNotes}`);
  const dfLabel = Array.isArray(dataFiltering) ? dataFiltering.map(id => options.dataFiltering.find(o => o.id === id)?.title || id).join(", ") : options.dataFiltering.find(o => o.id === dataFiltering)?.title || dataFiltering;
  const dfNote = notes[`dataFiltering-${dataFiltering}`] || "";
  lines.push(`| Data Filtering | ${dfLabel} | ${dfNote}`);
  const schLabel = Array.isArray(scheduling) ? scheduling.map(id => options.scheduling.find(o => o.id === id)?.title || id).join(", ") : options.scheduling.find(o => o.id === scheduling)?.title || scheduling;
  const schNote = notes[`scheduling-${scheduling}`] || "";
  lines.push(`| Scheduling | ${schLabel} | ${schNote}`);
  const ofLabel = Array.isArray(outputFormat) ? outputFormat.map(id => options.outputFormat.find(o => o.id === id)?.title || id).join(", ") : options.outputFormat.find(o => o.id === outputFormat)?.title || outputFormat;
  const ofNote = notes[`outputFormat-${outputFormat}`] || "";
  lines.push(`| Output Format | ${ofLabel} | ${ofNote}`);
  lines.push("");

  lines.push("## Workflow Overview");
  lines.push("");
  if (trigger) {
    lines.push(`### Trigger: ${tLabel}`);
    lines.push("");
    lines.push(Array.isArray(trigger) ? trigger.map(v => dict.trigger[v] || v).join(", ") : dict.trigger[trigger] || trigger);
    if (tNote) lines.push(`> **Note:** ${tNote}`);
    lines.push("");
  }

  if (actions.length > 0) {
    lines.push("### Action Destination(s)");
    lines.push("");
    for (const actionId of actions) {
      const label = options.action.find(o => o.id === actionId)?.title || actionId;
      lines.push(`#### ${label}`);
      lines.push("");
      lines.push(dict.action[actionId] || "");
      const note = notes[`action-${actionId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  const activeAis = ais.filter(id => id !== "none");
  if (activeAis.length > 0) {
    lines.push("### AI Processing Pipeline");
    lines.push("");
    for (const aiId of activeAis) {
      const label = options.ai.find(o => o.id === aiId)?.title || aiId;
      lines.push(`#### ${label}`);
      lines.push("");
      lines.push(dict.ai[aiId] || "");
      const note = notes[`ai-${aiId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (complexity) {
    lines.push("### Complexity: " + cLabel);
    lines.push("");
    lines.push(Array.isArray(complexity) ? complexity.map(v => dict.complexity[v] || v).join(", ") : dict.complexity[complexity] || complexity);
    if (cNote) lines.push(`> **Note:** ${cNote}`);
    lines.push("");
  }

  if (errorHandling.length > 0) {
    lines.push("### Error Handling Strategy");
    lines.push("");
    for (const eId of errorHandling) {
      const label = options.errorHandling.find(o => o.id === eId)?.title || eId;
      lines.push(`#### ${label}`);
      lines.push("");
      lines.push(dict.errorHandling[eId] || "");
      const note = notes[`errorHandling-${eId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (dataFiltering) {
    lines.push("### Data Filtering: " + dfLabel);
    lines.push("");
    lines.push(Array.isArray(dataFiltering) ? dataFiltering.map(v => dict.dataFiltering[v] || v).join(", ") : dict.dataFiltering[dataFiltering] || dataFiltering);
    if (dfNote) lines.push(`> **Note:** ${dfNote}`);
    lines.push("");
  }

  if (scheduling) {
    lines.push("### Scheduling: " + schLabel);
    lines.push("");
    lines.push(Array.isArray(scheduling) ? scheduling.map(v => dict.scheduling[v] || v).join(", ") : dict.scheduling[scheduling] || scheduling);
    if (schNote) lines.push(`> **Note:** ${schNote}`);
    lines.push("");
  }

  if (outputFormat) {
    lines.push("### Output Format: " + ofLabel);
    lines.push("");
    lines.push(Array.isArray(outputFormat) ? outputFormat.map(v => dict.outputFormat[v] || v).join(", ") : dict.outputFormat[outputFormat] || outputFormat);
    if (ofNote) lines.push(`> **Note:** ${ofNote}`);
    lines.push("");
  }

  lines.push("## Data Mapping Table");
  lines.push("");
  lines.push("| Source Field | Target Field | Transformation Rule");
  lines.push("|-------------|--------------|-------------------");
  if (trigger) {
    lines.push("| Trigger Payload | Workflow Variable | `$.trigger.payload` → `${{steps.trigger.output}}`");
  }
  if (activeAis.length > 0) {
    lines.push("| AI Processed Data | Transformed Output | Schema mapping via AI model");
  }
  if (dataFiltering && dataFiltering !== "none-filter") {
    lines.push("| Filtered Data | Cleaned Dataset | Filter/transform rules applied");
  }
  for (const actionId of actions) {
    const aLabel = options.action.find(o => o.id === actionId)?.title || actionId;
    lines.push(`| Workflow Variable | ${aLabel} Fields | Field-to-field mapping`);
  }
  lines.push("");

  lines.push("## Execution Flow Diagram");
  lines.push("");
  lines.push("```");
  lines.push("┌─────────────┐");
  lines.push("│   Trigger   │");
  if (trigger) lines.push(`│  ${tLabel.padEnd(11)}│`);
  lines.push("└──────┬──────┘");
  lines.push("       │");
  if (dataFiltering && dataFiltering !== "none-filter") {
    lines.push("       ▼");
    lines.push("┌─────────────┐");
    lines.push(`│ ${dfLabel.padEnd(11)}│`);
    lines.push("└──────┬──────┘");
    lines.push("       │");
  }
  lines.push("       ▼");
  if (activeAis.length > 0) {
    lines.push("┌─────────────┐");
    if (activeAis.length === 1) {
      lines.push(`│  AI: ${activeAis[0].padEnd(7)}│`);
    } else {
      lines.push("│  AI Pipeline │");
    }
    lines.push("└──────┬──────┘");
    lines.push("       │");
    lines.push("       ▼");
  }
  if (errorHandling.length > 0) {
    lines.push("┌─────────────┐");
    lines.push("│ Error Handle│");
    lines.push("└──────┬──────┘");
    lines.push("       │");
    lines.push("       ▼");
  }
  if (actions.length === 1) {
    lines.push("┌─────────────┐");
    lines.push(`│  ${actions[0].padEnd(11)}│`);
    lines.push("└──────┬──────┘");
  } else {
    lines.push("┌─────────────────┐");
    lines.push("│  Parallel Output │");
    lines.push("└──────┬──────┬────┘");
    for (const aId of actions) {
      lines.push(`       │ ${aId.padEnd(10)}`);
    }
  }
  if (scheduling === "delay") {
    lines.push("       │");
    lines.push("       ▼");
    lines.push("┌─────────────┐");
    lines.push("│   Delayed   │");
    lines.push("└──────┬──────┘");
  }
  if (outputFormat) {
    lines.push("       │");
    lines.push("       ▼");
    lines.push("┌─────────────┐");
    lines.push(`│ ${ofLabel.padEnd(11)}│`);
    lines.push("└─────────────┘");
  }
  lines.push("```");
  lines.push("");

  lines.push("## Implementation Notes");
  lines.push("");
  lines.push("- **Authentication**: Use OAuth 2.0 for all connected services. Store credentials in a secure vault.");
  lines.push("- **Error Handling**: " + (errorHandling.includes("retry") ? "Implement retry with exponential backoff (3 attempts, 2s/4s/8s intervals)." : "Configure error handling per the selected strategy above."));
  lines.push("- **Monitoring**: Add logging at each step. Send failure notifications to a dedicated Slack channel.");
  if (errorHandling.includes("circuit-breaker")) {
    lines.push("- **Circuit Breaker**: Set threshold to 5 failures within 60 seconds. Open circuit for 120 seconds before half-open retry.");
  }
  if (errorHandling.includes("dead-letter")) {
    lines.push("- **Dead Letter Queue**: Review DLQ hourly. Set up alerts when DLQ depth exceeds 100 messages.");
  }
  if (complexity === "advanced" || complexity === "state-machine") {
    lines.push("- **Conditional Routing**: Use router nodes to branch based on trigger payload attributes.");
    lines.push("- **Parallel Execution**: Configure parallel paths for independent action destinations.");
    lines.push("- **Fallback Actions**: Define fallback actions when primary destination is unreachable.");
  }
  lines.push("");

  lines.push("## Performance Considerations");
  lines.push("");
  lines.push("| Factor | Recommendation");
  lines.push("|--------|--------------");
  lines.push("| Execution Timeout | Set per-step timeout of 30 seconds, overall workflow timeout of 10 minutes");
  lines.push("| Memory Allocation | Configure 256 MB per execution, scale up to 1 GB for large data sets");
  lines.push("| Concurrency Limit | Maximum 100 concurrent executions. Queue excess with FIFO ordering");
  lines.push("| Data Payload Size | Keep individual payloads under 5 MB. Use S3 references for larger blobs");
  if (scheduling === "throttle") {
    lines.push("| Rate Limit | 60 executions per minute per workflow");
  }
  lines.push("");

  lines.push("## Security & Compliance");
  lines.push("");
  lines.push("- Encrypt sensitive data using AES-256 at rest and TLS 1.3 in transit.");
  lines.push("- Mask credit card numbers, PII, and credentials in execution logs.");
  lines.push("- Audit log every workflow execution with before/after state snapshots.");
  lines.push("- Support SOC 2 and GDPR compliance with data retention policies.");
  lines.push("- Use secrets management vault for all API keys and tokens.");
  lines.push("");

  lines.push("## Recommendations");
  lines.push("");
  if (actions.length > 1) {
    lines.push("- **Priority**: Run critical actions first, then secondary destinations.");
  }
  if (activeAis.length > 0) {
    lines.push("- **AI Cost**: Monitor token usage. Set caps for daily AI processing volume.");
  }
  if (scheduling === "night-only") {
    lines.push("- **Night Window**: Configure processing between 02:00–05:00 UTC to minimize user impact.");
  }
  if (outputFormat === "pdf") {
    lines.push("- **PDF Generation**: Use a headless browser or dedicated PDF API for complex layouts.");
  }
  lines.push("- **Testing**: Use test mode with sample data before enabling the workflow in production.");
  lines.push("- **Versioning**: Keep a changelog of workflow updates and maintain version history.");
  lines.push("- **SLA**: Define expected execution time and set up alerts for timeouts.");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by AI Automation Workflow Blueprint_");

  return lines.join("\n");
}

export default function AiAutomationPage() {
  return (
    <ToolShell
      title="AI Automation Workflow"
      steps={[
        { id: 1, label: "Trigger", component: (p) => (
          <GenericStep {...p} title="Select Trigger App" description="What event starts this workflow?" options={options.trigger} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="trigger" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Action", component: (p) => (
          <GenericStep {...p} title="Select Action App" description="Where does the data go?" options={options.action} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="action" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "AI", component: (p) => (
          <GenericStep {...p} title="AI Processing" description="Optional AI step between trigger and action" options={options.ai} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="ai" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Complexity", component: (p) => (
          <GenericStep {...p} title="Complexity Level" description="How sophisticated should the workflow be?" options={options.complexity} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="complexity" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Error Handle", component: (p) => (
          <GenericStep {...p} title="Error Handling Strategy" description="How should errors be handled?" options={options.errorHandling} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="errorHandling" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Data Filter", component: (p) => (
          <GenericStep {...p} title="Data Filtering & Transformation" description="How should incoming data be processed?" options={options.dataFiltering} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="dataFiltering" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Scheduling", component: (p) => (
          <GenericStep {...p} title="Scheduling & Timing" description="When and how often should it run?" options={options.scheduling} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="scheduling" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Output", component: (p) => (
          <GenericStep {...p} title="Output Format" description="How should the final output be delivered?" options={options.outputFormat} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="outputFormat" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}









