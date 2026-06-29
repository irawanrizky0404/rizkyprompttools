"use client";

import type { FC } from "react";
import { LogIn, CreditCard, Upload, Search, CheckCircle, AlertTriangle, Accessibility, Shield, Code, Table, FileJson, Smartphone, Monitor, Server } from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  feature: [
    { id: "login-register", title: "Login-Register Form", description: "Authentication flow with email, password, and validation", icon: LogIn },
    { id: "payment-checkout", title: "Payment Checkout", description: "E-commerce checkout with payment gateway", icon: CreditCard },
    { id: "file-upload", title: "File Upload", description: "File picker with drag-and-drop and progress tracking", icon: Upload },
    { id: "search-feature", title: "Search Feature", description: "Search bar with autocomplete, filters, and results", icon: Search },
  ],
  coverage: [
    { id: "happy-path", title: "Happy Path Normal", description: "Standard user flow under ideal conditions", icon: CheckCircle },
    { id: "edge-cases", title: "Edge Cases Extreme", description: "Boundary values, empty states, error conditions", icon: AlertTriangle },
    { id: "accessibility", title: "Accessibility", description: "Screen reader, keyboard nav, color contrast testing", icon: Accessibility },
    { id: "security-sqli-xss", title: "Security SQLi-XSS", description: "Injection attacks, XSS vectors, CSRF, auth bypass", icon: Shield },
  ],
  format: [
    { id: "gherkin", title: "Gherkin Given-When-Then", description: "BDD-style scenario format for automated testing", icon: Code },
    { id: "manual-checklist", title: "Manual Checklist Table", description: "Step-by-step table for manual QA execution", icon: Table },
    { id: "jest-cypress", title: "Jest / Cypress Code", description: "JavaScript testing code with assertions", icon: FileJson },
  ],
  platform: [
    { id: "desktop-web", title: "Desktop Web App", description: "Full-screen browser experience with mouse input", icon: Monitor },
    { id: "mobile-web", title: "Mobile Web", description: "Responsive browser experience with touch input", icon: Smartphone },
    { id: "native-app", title: "Native App iOS/Android", description: "Platform-specific mobile application", icon: Smartphone },
    { id: "api", title: "API", description: "REST or GraphQL endpoint testing", icon: Server },
  ],
};

const dict: Record<string, Record<string, string>> = {
  feature: {
    "login-register": "Focus on the authentication feature — email/password login, registration, password reset, social SSO (Google, GitHub), email verification flow, session/token management, and logout. Include multi-factor authentication if applicable.",
    "payment-checkout": "Focus on the payment checkout feature — cart review, shipping address form, payment method selection (card, PayPal, wallet), payment gateway integration (Stripe, Midtrans), order confirmation, receipt email, and failed payment recovery flows.",
    "file-upload": "Focus on the file upload feature — file picker dialog, drag-and-drop zone, multiple file selection, file type and size validation, upload progress bar, pause/resume, image preview, and error handling for network failures.",
    "search-feature": "Focus on the search feature — search bar with autocomplete dropdown, debounced input, filter chips, sort options, paginated or infinite-scroll results, empty state when no results found, and recent search history.",
  },
  coverage: {
    "happy-path": "Write test cases for the happy path — the ideal user journey with valid inputs, correct data formats, responsive UI feedback, and successful completion of every step without interruptions or errors.",
    "edge-cases": "Write edge case tests — empty inputs, maximum character lengths, special characters, rapid double-click submissions, network timeouts, server errors (4xx, 5xx), concurrent requests, and database constraint violations.",
    accessibility: "Write accessibility tests — verify all interactive elements are keyboard-focusable, focus order is logical, ARIA labels are present on icons and buttons, color contrast meets WCAG AA, and screen readers can navigate the feature.",
    "security-sqli-xss": "Write security tests — attempt SQL injection in all text inputs, stored and reflected XSS with script tags, CSRF token validation, authentication bypass via URL manipulation, rate limiting on login, and JWT token tampering.",
  },
  format: {
    gherkin: "Generate test cases in Gherkin format using Given-When-Then structure. Each scenario should have a descriptive title, clear preconditions in Given steps, action in When steps, and expected outcomes in Then steps.",
    "manual-checklist": "Generate a manual QA checklist as a table with columns: Test Case ID, Description, Preconditions, Test Steps, Expected Result, Actual Result, and Status (Pass/Fail). Include 10–15 test cases per feature.",
    "jest-cypress": "Generate test code in Jest or Cypress syntax. Include describe blocks, it/test blocks, expect assertions, mock setup, fixture data, and before/after hooks for setup and teardown. Structure code for readability.",
  },
  platform: {
    "desktop-web": "Target the desktop web app — test at 1920×1080 and 1366×768 resolutions, mouse hover and click interactions, keyboard shortcuts, right-click context menus, and multi-window or tab behavior.",
    "mobile-web": "Target mobile web — test on iOS Safari and Android Chrome at 375×667 (iPhone SE) and 414×896 (iPhone 11) viewports. Verify touch events, swipe gestures, virtual keyboard overlap, and responsive layout breakpoints.",
    "native-app": "Target native mobile apps — test on iOS 16+ and Android 13+ devices. Verify platform-specific UI components (NavigationView, TabBar), push notifications, deep linking, camera/gallery access, offline mode, and app lifecycle events.",
    api: "Target API testing — test all REST endpoints with correct and incorrect HTTP methods, valid and malformed JSON bodies, authentication headers (Bearer token), rate limiting responses, pagination, and idempotency for POST endpoints.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const feature = selections.step1;
  const coverage = selections.step2;
  const format = selections.step3;
  const platform = selections.step4;

  const lines = ["# QA Edge-Case Planner", "", "## Test Plan", ""];
  if (feature) lines.push(`**Feature to Test:** ${dict.feature[feature] ?? feature}`);
  if (feature) lines.push(`> ${notes[`feature-${feature}`] ?? ""}`);
  lines.push("");
  if (coverage) lines.push(`**Test Coverage:** ${dict.coverage[coverage] ?? coverage}`);
  if (coverage) lines.push(`> ${notes[`coverage-${coverage}`] ?? ""}`);
  lines.push("");
  if (format) lines.push(`**Output Format:** ${dict.format[format] ?? format}`);
  if (format) lines.push(`> ${notes[`format-${format}`] ?? ""}`);
  lines.push("");
  if (platform) lines.push(`**Platform Target:** ${dict.platform[platform] ?? platform}`);
  if (platform) lines.push(`> ${notes[`platform-${platform}`] ?? ""}`);
  lines.push("");
  lines.push("## Test Summary");
  lines.push("");
  lines.push(`| Dimension | Selection |`);
  lines.push(`|-----------|----------|`);
  if (feature) lines.push(`| Feature | ${options.feature.find(o => o.id === feature)?.title ?? feature} |`);
  if (coverage) lines.push(`| Coverage | ${options.coverage.find(o => o.id === coverage)?.title ?? coverage} |`);
  if (format) lines.push(`| Format | ${options.format.find(o => o.id === format)?.title ?? format} |`);
  if (platform) lines.push(`| Platform | ${options.platform.find(o => o.id === platform)?.title ?? platform} |`);

  return lines.join("\n");
}

export default function QaPlannerPage() {
  return (
    <ToolShell
      title="QA Edge-Case Planner"
      steps={[
        { id: 1, label: "Feature", component: (p) => (
          <GenericStep {...p} title="Select Feature to Test" description="Which feature are you writing tests for?" options={options.feature} mode="single" selected={p.selections.step1} onSelect={(id) => p.onSelect("step1", id)} notePrefix="feature" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Coverage", component: (p) => (
          <GenericStep {...p} title="Select Test Coverage" description="What type of testing should be prioritized?" options={options.coverage} mode="single" selected={p.selections.step2} onSelect={(id) => p.onSelect("step2", id)} notePrefix="coverage" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Format", component: (p) => (
          <GenericStep {...p} title="Select Output Format" description="How should the test plan be formatted?" options={options.format} mode="single" selected={p.selections.step3} onSelect={(id) => p.onSelect("step3", id)} notePrefix="format" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Platform", component: (p) => (
          <GenericStep {...p} title="Select Platform Target" description="What platform are you testing on?" options={options.platform} mode="single" selected={p.selections.step4} onSelect={(id) => p.onSelect("step4", id)} notePrefix="platform" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}
