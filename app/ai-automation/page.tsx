"use client";

import type { FC } from "react";
import { Webhook, Mail, FileText, ShoppingCart, Clock, Table, BookOpen, MessageSquare, Building2, Database, Sparkles, Code, Languages, ArrowLeftRight, GitBranch, AlertTriangle } from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  trigger: [
    { id: "webhook", title: "Webhook", description: "Receive HTTP request to trigger workflow", icon: Webhook },
    { id: "gmail", title: "Gmail", description: "Trigger on new email in inbox", icon: Mail },
    { id: "typeform", title: "Typeform", description: "New form submission trigger", icon: FileText },
    { id: "shopify", title: "Shopify", description: "New order or customer event", icon: ShoppingCart },
    { id: "schedule", title: "Schedule", description: "Time-based cron trigger", icon: Clock },
  ],
  action: [
    { id: "google-sheets", title: "Google Sheets", description: "Add row to spreadsheet", icon: Table },
    { id: "notion", title: "Notion", description: "Create database entry", icon: BookOpen },
    { id: "slack", title: "Slack", description: "Send channel message", icon: MessageSquare },
    { id: "hubspot", title: "CRM (HubSpot)", description: "Create or update contact", icon: Building2 },
    { id: "database", title: "Database", description: "SQL insert or update", icon: Database },
  ],
  ai: [
    { id: "summarize", title: "Summarize Text", description: "Condense long text into key points", icon: Sparkles },
    { id: "extract-json", title: "Extract JSON", description: "Parse structured data from documents", icon: Code },
    { id: "translate", title: "Language Translation", description: "Translate content between languages", icon: Languages },
    { id: "none", title: "No AI Processing", description: "Skip AI processing step", icon: ArrowLeftRight },
  ],
  complexity: [
    { id: "simple", title: "Simple (Linear)", description: "Straightforward linear flow, no branching", icon: GitBranch },
    { id: "advanced", title: "Advanced (Routers)", description: "Conditional logic, error handlers, parallel paths", icon: AlertTriangle },
  ],
};

const dict: Record<string, Record<string, string>> = {
  trigger: {
    webhook: "Trigger the workflow via an incoming webhook request. Accept POST requests with JSON payload, validate signature, and parse the body for downstream steps.",
    gmail: "Trigger the workflow whenever a new email arrives in the configured Gmail inbox. Monitor for specific senders, subject keywords, or label assignments.",
    typeform: "Trigger the workflow on new Typeform submissions. Map form fields to workflow variables and handle file uploads from responses.",
    shopify: "Trigger the workflow on Shopify events such as new orders, customer creation, or product updates. Use the Shopify Admin API for data enrichment.",
    schedule: "Trigger the workflow on a recurring schedule using cron expressions. Support for timezone-aware scheduling and daylight saving time adjustments.",
  },
  action: {
    "google-sheets": "Write data to a Google Sheet. Append rows to the specified sheet, update existing rows by key, or create new sheets dynamically.",
    notion: "Create or update Notion database entries. Map workflow data to Notion properties including text, select, multi-select, date, and relation fields.",
    slack: "Send messages to Slack channels or direct messages. Use Block Kit for rich message formatting with buttons, images, and interactive elements.",
    hubspot: "Create or update HubSpot CRM contacts, companies, deals, or tickets. Map workflow fields to HubSpot properties and handle duplicate detection.",
    database: "Execute SQL queries against your database. Support for INSERT, UPDATE, SELECT operations with parameterized queries to prevent injection.",
  },
  ai: {
    summarize: "Pass the input text through an AI summarization model. Configure summary length (short/medium/long) and focus areas (key points, action items, decisions).",
    "extract-json": "Use AI to parse unstructured documents into structured JSON. Define the expected schema and provide examples for accurate extraction.",
    translate: "Translate text content between languages using AI. Auto-detect source language and preserve formatting, links, and special characters.",
    none: "Skip the AI processing step entirely. Pass data directly from trigger to action without any AI transformation.",
  },
  complexity: {
    simple: "Build a linear workflow with sequential steps. No branching, error handling is basic, and all steps execute in order with a simple pass/fail outcome.",
    advanced: "Build an advanced workflow with conditional routers, error handling paths, retry logic with exponential backoff, parallel execution branches, and fallback actions.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const trigger = selections.step1;
  const action = selections.step2;
  const ai = selections.step3;
  const complexity = selections.step4;

  const lines = ["# AI Automation Workflow Blueprint", "", "## Workflow Overview", ""];
  if (trigger) lines.push(`**Trigger:** ${dict.trigger[trigger] ?? trigger}`);
  if (trigger) lines.push(`> ${notes[`trigger-${trigger}`] ?? ""}`);
  lines.push("");
  if (action) lines.push(`**Action:** ${dict.action[action] ?? action}`);
  if (action) lines.push(`> ${notes[`action-${action}`] ?? ""}`);
  lines.push("");
  if (ai && ai !== "none") {
    lines.push(`**AI Processing:** ${dict.ai[ai] ?? ai}`);
    lines.push(`> ${notes[`ai-${ai}`] ?? ""}`);
    lines.push("");
  }
  if (complexity) {
    lines.push(`**Complexity Level:** ${dict.complexity[complexity] ?? complexity}`);
    lines.push("");
  }
  lines.push("## Data Mapping", "");
  lines.push("| Source | Destination | Transformation |");
  lines.push("|--------|-------------|---------------|");
  lines.push("| Trigger Payload | Action Fields | Map directly or transform |");
  if (ai && ai !== "none") lines.push("| AI Processed Output | Action Fields | Structured data mapping |");

  return lines.join("\n");
}

export default function AiAutomationPage() {
  return (
    <ToolShell
      title="AI Automation Workflow"
      steps={[
        { id: 1, label: "Trigger", component: (p) => (
          <GenericStep {...p} title="Select Trigger App" description="What event starts this workflow?" options={options.trigger} mode="single" selected={p.selections.step1} onSelect={(id) => p.onSelect("step1", id)} notePrefix="trigger" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Action", component: (p) => (
          <GenericStep {...p} title="Select Action App" description="Where does the data go?" options={options.action} mode="single" selected={p.selections.step2} onSelect={(id) => p.onSelect("step2", id)} notePrefix="action" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "AI", component: (p) => (
          <GenericStep {...p} title="AI Processing" description="Optional AI step between trigger and action" options={options.ai} mode="single" selected={p.selections.step3} onSelect={(id) => p.onSelect("step3", id)} notePrefix="ai" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Complexity", component: (p) => (
          <GenericStep {...p} title="Complexity Level" description="How sophisticated should the workflow be?" options={options.complexity} mode="single" selected={p.selections.step4} onSelect={(id) => p.onSelect("step4", id)} notePrefix="complexity" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}
