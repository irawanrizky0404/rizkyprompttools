"use client";

import type { FC } from "react";
import {
  LogIn, CreditCard, Upload, Search, CheckCircle, AlertTriangle,
  Accessibility, Shield, Code, Table, FileJson, Smartphone, Monitor,
  Server, Database, Filter, FileSpreadsheet, FileInput, FileOutput,
  User, Users, UserCog, UserCheck, UserX, HardHat, Wrench,
  Globe, Cloud, Box, Container, GitBranch, Terminal,
  MonitorIcon, Tablet, Laptop, Apple, Smartphone as SmartphoneIcon, Tv,
  Bell, MessageSquare, Gauge, Eye, RotateCcw, Webhook, Clock, Building2,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  feature: [
    { id: "login-register", title: "Login-Register Form", description: "Authentication flow with email, password, and validation", icon: LogIn },
    { id: "payment-checkout", title: "Payment Checkout", description: "E-commerce checkout with payment gateway", icon: CreditCard },
    { id: "file-upload", title: "File Upload", description: "File picker with drag-and-drop and progress tracking", icon: Upload },
    { id: "search-feature", title: "Search Feature", description: "Search bar with autocomplete, filters, and results", icon: Search },
    { id: "onboarding-flow", title: "User Onboarding", description: "Multi-step onboarding wizard with progress", icon: Users },
    { id: "notification-system", title: "Notification System", description: "In-app notifications, push, and email alerts", icon: Bell },
    { id: "data-export", title: "Data Export / Report", description: "Generate and download CSV, PDF, or Excel reports", icon: FileOutput },
    { id: "chat-messaging", title: "Chat / Messaging", description: "Real-time messaging with read receipts and typing", icon: MessageSquare },
  ],
  coverage: [
    { id: "happy-path", title: "Happy Path Normal", description: "Standard user flow under ideal conditions", icon: CheckCircle },
    { id: "edge-cases", title: "Edge Cases Extreme", description: "Boundary values, empty states, error conditions", icon: AlertTriangle },
    { id: "accessibility", title: "Accessibility", description: "Screen reader, keyboard nav, color contrast testing", icon: Accessibility },
    { id: "security-sqli-xss", title: "Security SQLi-XSS", description: "Injection attacks, XSS vectors, CSRF, auth bypass", icon: Shield },
    { id: "performance", title: "Performance / Load", description: "Response times under load, memory usage, latency", icon: Gauge },
    { id: "usability", title: "Usability / UX", description: "Task completion rate, error rate, user satisfaction", icon: Eye },
    { id: "integration", title: "Integration / API", description: "API contract tests, third-party service mocking", icon: Code },
    { id: "regression", title: "Regression Suite", description: "Re-run all existing tests to catch regressions", icon: RotateCcw },
  ],
  format: [
    { id: "gherkin", title: "Gherkin Given-When-Then", description: "BDD-style scenario format for automated testing", icon: Code },
    { id: "manual-checklist", title: "Manual Checklist Table", description: "Step-by-step table for manual QA execution", icon: Table },
    { id: "jest-cypress", title: "Jest / Cypress Code", description: "JavaScript testing code with assertions", icon: FileJson },
    { id: "postman-collection", title: "Postman Collection", description: "API test collection with assertions", icon: Server },
    { id: "pytest", title: "Pytest Python", description: "Python testing code with pytest fixtures", icon: Terminal },
    { id: "testlink-xml", title: "TestLink XML", description: "XML export for TestLink test management", icon: FileInput },
    { id: "junit-xml", title: "JUnit XML Report", description: "XML test report compatible with CI/CD pipelines", icon: FileSpreadsheet },
    { id: "playwright", title: "Playwright Code", description: "End-to-end tests with Playwright for multiple browsers", icon: Globe },
  ],
  platform: [
    { id: "desktop-web", title: "Desktop Web App", description: "Full-screen browser experience with mouse input", icon: Monitor },
    { id: "mobile-web", title: "Mobile Web", description: "Responsive browser experience with touch input", icon: SmartphoneIcon },
    { id: "native-app", title: "Native App iOS/Android", description: "Platform-specific mobile application", icon: SmartphoneIcon },
    { id: "api", title: "API", description: "REST or GraphQL endpoint testing", icon: Server },
    { id: "electron", title: "Electron Desktop", description: "Cross-platform desktop app via Electron", icon: MonitorIcon },
    { id: "pwa", title: "PWA", description: "Progressive web app with offline support", icon: Globe },
    { id: "cli", title: "CLI / Terminal", description: "Command-line interface tool testing", icon: Terminal },
    { id: "webhook", title: "Webhook / Event", description: "Event-driven architecture webhook testing", icon: Webhook },
  ],
  dataSetup: [
    { id: "clean-db", title: "Clean Database", description: "Reset all data to known baseline state", icon: Database },
    { id: "seed-data", title: "Pre-Seeded Data", description: "Load predefined test fixtures and factories", icon: FileInput },
    { id: "mock-external", title: "Mock External APIs", description: "Stub all third-party API dependencies", icon: Server },
    { id: "fixture-files", title: "Fixture Files", description: "Use static fixture files for inputs and expected outputs", icon: FileJson },
    { id: "test-user-pool", title: "Test User Pool", description: "Pre-created user accounts with varying roles", icon: Users },
    { id: "inject-errors", title: "Inject Error States", description: "Simulate network errors, timeouts, and corrupted data", icon: AlertTriangle },
    { id: "time-travel", title: "Time Travel", description: "Mock system clock for time-sensitive scenarios", icon: Clock },
    { id: "state-snapshot", title: "State Snapshots", description: "Save and restore UI or database state snapshots", icon: Box },
  ],
  userRoles: [
    { id: "anonymous", title: "Anonymous / Guest", description: "Unauthenticated user with limited access", icon: UserX },
    { id: "end-user", title: "End User", description: "Standard authenticated user with regular permissions", icon: User },
    { id: "premium", title: "Premium / Power User", description: "Paid subscriber with advanced features", icon: UserCheck },
    { id: "admin", title: "Admin", description: "Full system access with management capabilities", icon: UserCog },
    { id: "super-admin", title: "Super Admin", description: "Root-level access with all permissions", icon: Shield },
    { id: "moderator", title: "Moderator", description: "Content moderation permissions only", icon: HardHat },
    { id: "read-only", title: "Read-Only", description: "View-only access, no create/update/delete", icon: Eye },
    { id: "multi-tenant", title: "Multi-Tenant User", description: "User scoped to a specific organization tenant", icon: Building2 },
  ],
  environment: [
    { id: "local", title: "Local Development", description: "Developer machine with hot-reload", icon: Terminal },
    { id: "ci-cd", title: "CI/CD Pipeline", description: "Automated test run in GitHub Actions or Jenkins", icon: GitBranch },
    { id: "staging", title: "Staging", description: "Pre-production environment mirroring production", icon: Globe },
    { id: "production", title: "Production Smoke", description: "Post-deployment smoke tests on live site", icon: Cloud },
    { id: "docker", title: "Docker Container", description: "Containerized environment for consistent testing", icon: Container },
    { id: "kubernetes", title: "Kubernetes Pod", description: "Test within a K8s cluster pod", icon: Box },
    { id: "serverless", title: "Serverless Function", description: "AWS Lambda, Vercel function, or edge runtime", icon: Cloud },
    { id: "mobile-device", title: "Physical Device", description: "Real device testing on iOS or Android hardware", icon: SmartphoneIcon },
  ],
  deviceBrowser: [
    { id: "chrome-latest", title: "Chrome (Latest)", description: "Google Chrome on Windows and macOS", icon: Globe },
    { id: "firefox-latest", title: "Firefox (Latest)", description: "Mozilla Firefox on Windows and macOS", icon: Globe },
    { id: "safari-latest", title: "Safari (Latest)", description: "Apple Safari on macOS and iOS", icon: Globe },
    { id: "edge-latest", title: "Edge (Latest)", description: "Microsoft Edge on Windows 10/11", icon: MonitorIcon },
    { id: "iphone", title: "iPhone (Safari)", description: "Mobile Safari on iPhone 14/15", icon: SmartphoneIcon },
    { id: "android-chrome", title: "Android (Chrome)", description: "Chrome on Samsung Galaxy / Pixel", icon: SmartphoneIcon },
    { id: "tablet-ipad", title: "iPad (Safari)", description: "Safari on iPad in portrait and landscape", icon: Tablet },
    { id: "tv-console", title: "TV / Console Browser", description: "Smart TV, PlayStation, Xbox web browsers", icon: Tv },
  ],
};

const dict: Record<string, Record<string, string>> = {
  feature: {
    "login-register": "Focus on the authentication feature — email/password login, registration, password reset, social SSO, email verification flow, session/token management, and logout. Include multi-factor authentication if applicable.",
    "payment-checkout": "Focus on the payment checkout feature — cart review, shipping address form, payment method selection, payment gateway integration, order confirmation, receipt email, and failed payment recovery flows.",
    "file-upload": "Focus on the file upload feature — file picker dialog, drag-and-drop zone, multiple file selection, file type and size validation, upload progress bar, pause/resume, image preview, and error handling for network failures.",
    "search-feature": "Focus on the search feature — search bar with autocomplete dropdown, debounced input, filter chips, sort options, paginated or infinite-scroll results, empty state, and recent search history.",
    "onboarding-flow": "Focus on the user onboarding flow — welcome screen, step-by-step wizard, profile setup, preferences selection, tutorial tips, progress indicators, and skip-for-now options.",
    "notification-system": "Focus on the notification system — in-app notification center, push notification registration, email digest preferences, notification categories, read/unread state, and deep linking from notifications.",
    "data-export": "Focus on the data export feature — export format selection, date range filters, progress tracking, large file generation with background jobs, download link via email, and export history log.",
    "chat-messaging": "Focus on the chat messaging feature — real-time message delivery via WebSocket, typing indicators, read receipts, message reactions, file/image sharing, emoji picker, and conversation threading.",
  },
  coverage: {
    "happy-path": "Write test cases for the happy path — the ideal user journey with valid inputs, correct data formats, responsive UI feedback, and successful completion of every step without interruptions or errors.",
    "edge-cases": "Write edge case tests — empty inputs, maximum character lengths, special characters, rapid double-click submissions, network timeouts, server errors, concurrent requests, and database constraint violations.",
    accessibility: "Write accessibility tests — verify all interactive elements are keyboard-focusable, focus order is logical, ARIA labels are present on icons and buttons, color contrast meets WCAG AA, and screen readers can navigate the feature.",
    "security-sqli-xss": "Write security tests — attempt SQL injection in all text inputs, stored and reflected XSS with script tags, CSRF token validation, authentication bypass via URL manipulation, rate limiting on login, and JWT token tampering.",
    performance: "Write performance tests — measure API response times under concurrent user load, memory usage during extended usage, DOM element count, Largest Contentful Paint, and Time to Interactive metrics.",
    usability: "Write usability tests — define task scenarios, measure task completion rate, track time-on-task, collect user satisfaction scores, identify friction points, and validate intuitive navigation patterns.",
    integration: "Write integration tests — verify correct data flow between frontend and backend, test API contract adherence, mock third-party services, validate webhook payloads, and confirm queue message processing.",
    regression: "Write regression tests — full test suite execution to verify existing functionality remains intact after code changes. Prioritize critical user journeys and high-risk areas.",
  },
  format: {
    gherkin: "Generate test cases in Gherkin format using Given-When-Then structure. Each scenario should have a descriptive title, clear preconditions in Given steps, action in When steps, and expected outcomes in Then steps.",
    "manual-checklist": "Generate a manual QA checklist as a table with columns: Test Case ID, Description, Preconditions, Test Steps, Expected Result, Actual Result, and Status. Include 10–15 test cases per feature.",
    "jest-cypress": "Generate test code in Jest or Cypress syntax. Include describe blocks, it/test blocks, expect assertions, mock setup, fixture data, and before/after hooks for setup and teardown. Structure code for readability.",
    "postman-collection": "Generate a Postman collection JSON with request definitions, test scripts using pm.test(), environment variables, and assertion checks for status codes, response bodies, and headers.",
    pytest: "Generate Python test code using pytest. Include parametrized tests for data-driven scenarios, conftest.py fixtures, pytest.mark tags for categorization, and assertions using plain assert statements.",
    "testlink-xml": "Generate test cases in TestLink XML import format. Include test suite hierarchy, test case steps with expected results, and custom field mappings for requirements traceability.",
    "junit-xml": "Generate test results in JUnit XML format compatible with CI/CD tools like Jenkins, GitLab CI, and CircleCI. Include test suite, test case, failure message, and system-err sections.",
    playwright: "Generate end-to-end test code using Playwright. Use page objects, locator strategies, expect assertions, test fixtures, and multi-browser configuration for Chrome, Firefox, and WebKit.",
  },
  platform: {
    "desktop-web": "Target the desktop web app — test at 1920×1080 and 1366×768 resolutions, mouse hover and click interactions, keyboard shortcuts, right-click context menus, and multi-window or tab behavior.",
    "mobile-web": "Target mobile web — test on iOS Safari and Android Chrome at 375×667 and 414×896 viewports. Verify touch events, swipe gestures, virtual keyboard overlap, and responsive layout breakpoints.",
    "native-app": "Target native mobile apps — test on iOS 16+ and Android 13+ devices. Verify platform-specific UI components, push notifications, deep linking, camera/gallery access, offline mode, and app lifecycle events.",
    api: "Target API testing — test all REST endpoints with correct and incorrect HTTP methods, valid and malformed JSON bodies, authentication headers, rate limiting responses, pagination, and idempotency for POST endpoints.",
    electron: "Target Electron desktop app — test on Windows, macOS, and Linux builds. Verify native menus, system tray, auto-update mechanism, window management, and IPC communication between main and renderer processes.",
    pwa: "Target Progressive Web App — test offline functionality via service worker, manifest.json icons and theme colors, install prompt behavior, cache-first or network-first strategies, and background sync.",
    cli: "Target CLI tool testing — verify correct parsing of flags and arguments, stdin/stdout/stderr handling, exit codes for success and error states, help output formatting, and config file loading.",
    webhook: "Target webhook/event testing — verify payload format and headers, signature verification, retry logic on failure, idempotency keys, rate limiting from the sender, and event delivery ordering.",
  },
  dataSetup: {
    "clean-db": "Start each test with a clean database. Truncate all tables and apply migrations from scratch. Ensures test isolation and prevents cross-test data contamination.",
    "seed-data": "Use pre-seeded test data loaded via factories or seed scripts. Create realistic data sets including users, orders, products, and relationships. Ensure deterministic IDs for assertions.",
    "mock-external": "Mock all external API dependencies using tools like MSW, nock, or WireMock. Define request matchers and response fixtures for each test scenario. Verify mock was called correctly.",
    "fixture-files": "Store test fixture data as static JSON, YAML, or CSV files. Load fixtures in setup hooks and use them as test inputs or expected outputs. Maintain fixture versioning alongside tests.",
    "test-user-pool": "Maintain a pool of pre-created test users with different roles, subscription tiers, and account states. Reset passwords and clear sessions between test runs.",
    "inject-errors": "Simulate error conditions by injecting failures at specific layers — network timeout in fetch, 500 from API server, corrupted file uploads, rate limit exceeded, or database connection failure.",
    "time-travel": "Mock the system clock using libraries like sinon.useFakeTimers or jest.useFakeTimers. Test time-sensitive features like countdown timers, session expiry, scheduled tasks, and date-range filters.",
    "state-snapshot": "Capture UI or database state snapshots at key points during test execution. Compare snapshots for regression detection. Store snapshots alongside test code in version control.",
  },
  userRoles: {
    anonymous: "Test as an anonymous guest user with no authentication. Verify that public pages render correctly, protected routes redirect to login, and API calls return 401 without auth headers.",
    "end-user": "Test as a standard authenticated end user. Verify access to default features, ability to create and edit own content, and restriction from admin-only areas.",
    premium: "Test as a premium or power user with paid subscription. Verify access to exclusive features, higher rate limits, priority support entry points, and correct billing portal behavior.",
    admin: "Test as an administrator with full system access. Verify user management capabilities, content moderation tools, system settings configuration, and audit log visibility.",
    "super-admin": "Test as a super admin with root-level access. Verify ability to manage tenants, view all data across organizations, configure global settings, and access system health dashboards.",
    moderator: "Test as a content moderator. Verify ability to flag, remove, or hide user-generated content, manage reports queue, issue warnings or bans, and view moderation history.",
    "read-only": "Test as a read-only user. Verify that all forms, create buttons, edit controls, and delete actions are disabled or hidden. API writes should return 403 Forbidden.",
    "multi-tenant": "Test as a multi-tenant user. Verify data isolation between tenants, correct organization branding, tenant-specific feature flags, and cross-tenant access prevention.",
  },
  environment: {
    local: "Run tests in the local development environment with hot-reload. Use localhost URLs, local database, and in-memory services. Enable verbose logging for debugging failures.",
    "ci-cd": "Run tests in CI/CD pipeline. Use headless browser mode, parallel test execution across shards, environment variables for secrets, and artifact upload for screenshots and logs.",
    staging: "Run tests in staging environment which mirrors production. Use staging API URLs, test payment gateways in sandbox mode, and staging SMTP for email. Verify feature flags match production.",
    production: "Run smoke tests in production post-deployment. Use read-only test accounts, avoid destructive actions, test critical user journeys, and monitor for 5xx errors or performance degradation.",
    docker: "Run tests inside a Docker container for consistent environment. Use docker-compose for service dependencies. Ensure proper container networking for service-to-service communication.",
    kubernetes: "Run tests inside a Kubernetes pod. Configure resource limits, use init containers for db migrations, and leverage Kubernetes secrets for credentials. Test in pod network isolation.",
    serverless: "Run tests targeting serverless functions. Test cold start latency, function timeout handling, environment variable injection, and integration with downstream serverless services.",
    "mobile-device": "Run tests on physical mobile devices or emulators. Test touch gestures, accelerometer, camera/mic permissions, battery status, push notifications, and mobile network conditions.",
  },
  deviceBrowser: {
    "chrome-latest": "Test on the latest stable Google Chrome on Windows 11 and macOS Ventura. Verify Chromium-specific rendering and Chrome DevTools Protocol integrations.",
    "firefox-latest": "Test on the latest stable Mozilla Firefox on Windows and macOS. Verify Gecko-specific CSS support, TLS certificate handling, and privacy settings that may affect functionality.",
    "safari-latest": "Test on Safari on macOS and iOS. Verify WebKit-specific behavior, Intelligent Tracking Prevention, viewport units handling, and Safari's unique approach to autofill and passwords.",
    "edge-latest": "Test on the latest Microsoft Edge on Windows. Verify Chromium compatibility, IE mode legacy features, Collections feature, and Edge-specific PDF rendering.",
    iphone: "Test on iPhone 14/15 running iOS 17+. Use Safari and Chrome for iOS. Test safe area insets, notch/ Dynamic Island, home indicator, and keyboard avoidance behavior.",
    "android-chrome": "Test on Samsung Galaxy S23 and Google Pixel 8 running Android 14. Use Chrome for Android. Test navigation bar overlay, gesture navigation, notch/punch-hole camera, and split-screen mode.",
    "tablet-ipad": "Test on iPad Air/Pro running iPadOS 17+. Test both portrait and landscape orientations, Stage Manager, Slide Over and Split View multitasking, and Apple Pencil hover interactions.",
    "tv-console": "Test on smart TV and console browsers. Verify 10-foot UI design, remote control navigation (d-pad), focus management for non-pointer input, and 4K resolution rendering.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const feature = selections.step1;
  const coverages: string[] = selections.step2 || [];
  const format = selections.step3;
  const platforms: string[] = selections.step4 || [];
  const dataSetup = selections.step5;
  const userRoles: string[] = selections.step6 || [];
  const environment = selections.step7;
  const deviceBrowser: string[] = selections.step8 || [];

  const lines: string[] = [];

  lines.push("# QA Edge-Case Planner");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const featLabel = Array.isArray(feature) ? feature.map(id => options.feature.find(o => o.id === id)?.title || id).join(", ") : options.feature.find(o => o.id === feature)?.title || feature;
  const featNote = notes[`feature-${feature}`] || "";
  lines.push(`| Feature Under Test | ${featLabel} | ${featNote}`);
  const covLabels = coverages.map(id => options.coverage.find(o => o.id === id)?.title || id).join(", ");
  const covNotes = coverages.map(id => notes[`coverage-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Test Coverage Type(s) | ${covLabels || "None selected"} | ${covNotes}`);
  const fmtLabel = Array.isArray(format) ? format.map(id => options.format.find(o => o.id === id)?.title || id).join(", ") : options.format.find(o => o.id === format)?.title || format;
  const fmtNote = notes[`format-${format}`] || "";
  lines.push(`| Output Format | ${fmtLabel} | ${fmtNote}`);
  const platLabels = platforms.map(id => options.platform.find(o => o.id === id)?.title || id).join(", ");
  const platNotes = platforms.map(id => notes[`platform-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Platform Target(s) | ${platLabels || "None selected"} | ${platNotes}`);
  const dsLabel = Array.isArray(dataSetup) ? dataSetup.map(id => options.dataSetup.find(o => o.id === id)?.title || id).join(", ") : options.dataSetup.find(o => o.id === dataSetup)?.title || dataSetup;
  const dsNote = notes[`dataSetup-${dataSetup}`] || "";
  lines.push(`| Data Setup Strategy | ${dsLabel} | ${dsNote}`);
  const roleLabels = userRoles.map(id => options.userRoles.find(o => o.id === id)?.title || id).join(", ");
  const roleNotes = userRoles.map(id => notes[`userRoles-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| User Role(s) | ${roleLabels || "None"} | ${roleNotes}`);
  const envLabel = Array.isArray(environment) ? environment.map(id => options.environment.find(o => o.id === id)?.title || id).join(", ") : options.environment.find(o => o.id === environment)?.title || environment;
  const envNote = notes[`environment-${environment}`] || "";
  lines.push(`| Test Environment | ${envLabel} | ${envNote}`);
  const dbLabels = deviceBrowser.map(id => options.deviceBrowser.find(o => o.id === id)?.title || id).join(", ");
  const dbNotes = deviceBrowser.map(id => notes[`deviceBrowser-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Device / Browser | ${dbLabels || "None"} | ${dbNotes}`);
  lines.push("");

  lines.push("## Feature: " + featLabel);
  lines.push("");
  lines.push(Array.isArray(feature) ? feature.map(v => dict.feature[v] || v).join(", ") : dict.feature[feature] || feature);
  if (featNote) lines.push(`> **Note:** ${featNote}`);
  lines.push("");

  if (coverages.length > 0) {
    lines.push("## Test Coverage Breakdown");
    lines.push("");
    for (const covId of coverages) {
      const label = options.coverage.find(o => o.id === covId)?.title || covId;
      lines.push("### " + label);
      lines.push("");
      lines.push(dict.coverage[covId] || "");
      const note = notes[`coverage-${covId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (platforms.length > 0) {
    lines.push("## Platform-Specific Considerations");
    lines.push("");
    for (const platId of platforms) {
      const label = options.platform.find(o => o.id === platId)?.title || platId;
      lines.push("### " + label);
      lines.push("");
      lines.push(dict.platform[platId] || "");
      const note = notes[`platform-${platId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (dataSetup) {
    lines.push("## Data Setup Strategy: " + dsLabel);
    lines.push("");
    lines.push(Array.isArray(dataSetup) ? dataSetup.map(v => dict.dataSetup[v] || v).join(", ") : dict.dataSetup[dataSetup] || dataSetup);
    if (dsNote) lines.push(`> **Note:** ${dsNote}`);
    lines.push("");
  }

  if (userRoles.length > 0) {
    lines.push("## User Role Scenarios");
    lines.push("");
    for (const roleId of userRoles) {
      const label = options.userRoles.find(o => o.id === roleId)?.title || roleId;
      lines.push("### " + label);
      lines.push("");
      lines.push(dict.userRoles[roleId] || "");
      const note = notes[`userRoles-${roleId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (environment) {
    lines.push("## Test Environment: " + envLabel);
    lines.push("");
    lines.push(Array.isArray(environment) ? environment.map(v => dict.environment[v] || v).join(", ") : dict.environment[environment] || environment);
    if (envNote) lines.push(`> **Note:** ${envNote}`);
    lines.push("");
  }

  if (deviceBrowser.length > 0) {
    lines.push("## Device & Browser Matrix");
    lines.push("");
    for (const dbId of deviceBrowser) {
      const label = options.deviceBrowser.find(o => o.id === dbId)?.title || dbId;
      lines.push("### " + label);
      lines.push("");
      lines.push(dict.deviceBrowser[dbId] || "");
      const note = notes[`deviceBrowser-${dbId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  const testCount = (coverages.length || 1) * (platforms.length || 1) * (deviceBrowser.length || 1) * 5 + 5;
  const formatCode = format || "gherkin";

  if (formatCode === "gherkin") {
    lines.push("## Sample Test Case (Gherkin)");
    lines.push("");
    lines.push("```gherkin");
    lines.push("Feature: " + featLabel);
    lines.push("  As a user");
    lines.push("  I want to interact with the " + featLabel);
    lines.push("  So that I can complete my goal");
    lines.push("");
    lines.push("  Background:");
    lines.push("    Given the user is on the " + featLabel + " page");
    lines.push("    And the application is in a clean state");
    lines.push("");
    lines.push("  Scenario: Successful " + featLabel + " flow");
    lines.push("    Given the user has valid credentials");
    lines.push("    When the user submits the form");
    lines.push("    Then the user sees a success confirmation");
    lines.push("    And the system logs the activity");
    lines.push("");
    lines.push("  Scenario: Validation failure on empty input");
    lines.push("    Given the user has not filled required fields");
    lines.push("    When the user attempts to submit");
    lines.push("    Then the user sees inline validation errors");
    lines.push("    And the form is not submitted");
    lines.push("```");
  } else if (formatCode === "manual-checklist") {
    lines.push("## Test Case Checklist");
    lines.push("");
    lines.push("| ID | Description | Preconditions | Steps | Expected Result | Status");
    lines.push("|----|-------------|--------------|-------|----------------|------");
    lines.push("| TC-01 | Verify successful " + featLabel + " flow | User has valid data | 1. Navigate to feature 2. Enter valid data 3. Submit | Success state displayed | ⬜");
    lines.push("| TC-02 | Verify empty field validation | User has empty required fields | 1. Leave fields blank 2. Click submit | Validation errors shown | ⬜");
    lines.push("| TC-03 | Verify max character limit | User enters max allowed chars | 1. Type boundary value 2. Submit | Data accepted without truncation | ⬜");
    lines.push("| TC-04 | Verify network timeout error | Network is slow/unavailable | 1. Simulate offline mode 2. Perform action | Graceful error message shown | ⬜");
    lines.push("| TC-05 | Verify keyboard navigation | User navigates via Tab key | 1. Press Tab through all fields | Focus order is logical | ⬜");
    lines.push("| TC-06 | Verify screen reader support | Screen reader is active | 1. Navigate using screen reader | All elements have ARIA labels | ⬜");
    lines.push("| TC-07 | Verify XSS prevention | User enters script tags | 1. Input `<script>alert(1)</script>` 2. Submit | Script is not executed | ⬜");
    lines.push("| TC-08 | Verify concurrent submissions | User double-clicks submit | 1. Click submit rapidly twice | Only one request is processed | ⬜");
    lines.push("| TC-09 | Verify mobile responsiveness | Viewport is 375×667 | 1. Resize browser 2. Check layout | UI adapts without overflow | ⬜");
    lines.push("| TC-10 | Verify data persistence after reload | Data has been entered | 1. Enter data 2. Refresh page | Data is preserved or properly reset | ⬜");
    if (userRoles.length > 1) {
      lines.push("| TC-11 | Verify role-based access | User is " + userRoles[0] + " | 1. Login as " + userRoles[0] + " 2. Attempt restricted action | Access denied or allowed per role | ⬜");
    }
    if (deviceBrowser.length > 1) {
      lines.push("| TC-12 | Cross-browser rendering | Open on " + deviceBrowser[0] + " | 1. Load page on " + deviceBrowser[0] + " | Layout matches design spec | ⬜");
    }
  } else if (formatCode === "jest-cypress" || formatCode === "playwright") {
    const framework = formatCode === "jest-cypress" ? "Cypress" : "Playwright";
    lines.push("## Sample Test Code (" + framework + ")");
    lines.push("");
    lines.push("```typescript");
    lines.push("describe('" + featLabel + " Feature', () => {");
    lines.push("  beforeEach(() => {");
    lines.push("    cy.visit('/" + feature + "');");
    lines.push("    cy.intercept('POST', '/api/" + feature + "', {");
    lines.push("      statusCode: 200,");
    lines.push("      body: { success: true }");
    lines.push("    }).as('submitForm');");
    lines.push("  });");
    lines.push("");
    lines.push("  it('should complete the " + featLabel + " flow successfully', () => {");
    lines.push("    cy.get('[data-testid=\"submit-btn\"]').click();");
    lines.push("    cy.wait('@submitForm');");
    lines.push("    cy.contains('Success').should('be.visible');");
    lines.push("  });");
    lines.push("");
    lines.push("  it('should show validation errors on empty submission', () => {");
    lines.push("    cy.get('[data-testid=\"submit-btn\"]').click();");
    lines.push("    cy.get('[data-testid=\"field-error\"]').should('have.length.at.least', 1);");
    lines.push("  });");
    lines.push("");
    lines.push("  it('should sanitize malicious input', () => {");
    lines.push("    cy.get('[data-testid=\"input-field\"]').type('<script>alert(1)</script>');");
    lines.push("    cy.get('[data-testid=\"submit-btn\"]').click();");
    lines.push("    cy.wait('@submitForm').its('request.body').should('not.contain', '<script>');");
    lines.push("  });");
    if (userRoles.length > 0) {
      lines.push("");
      lines.push("  it('should enforce role-based access for " + (userRoles[0] || "user") + "', () => {");
      lines.push("    cy.loginAs('" + (userRoles[0] || "user") + "');");
      lines.push("    cy.visit('/restricted');");
      lines.push("    cy.contains('Access Denied').should('be.visible');");
      lines.push("  });");
    }
    lines.push("});");
    lines.push("```");
  } else if (formatCode === "pytest") {
    lines.push("## Sample Test Code (Pytest)");
    lines.push("");
    lines.push("```python");
    lines.push("import pytest");
    lines.push("from httpx import AsyncClient");
    lines.push("");
    lines.push("@pytest.mark.asyncio");
    lines.push("async def test_" + feature.replace(/-/g, "_") + "_success(client: AsyncClient):");
    lines.push("    response = await client.post('/api/" + feature + "', json={'valid': True})");
    lines.push("    assert response.status_code == 200");
    lines.push("    assert response.json()['success'] is True");
    lines.push("");
    lines.push("@pytest.mark.asyncio");
    lines.push("async def test_" + feature.replace(/-/g, "_") + "_validation_error(client: AsyncClient):");
    lines.push("    response = await client.post('/api/" + feature + "', json={})");
    lines.push("    assert response.status_code == 422");
    lines.push("    assert 'errors' in response.json()");
    lines.push("");
    lines.push("@pytest.mark.parametrize('input_val,expected', [");
    lines.push("    ('normal', 200),");
    lines.push("    ('', 422),");
    lines.push("    ('<script>', 422),");
    lines.push("])");
    lines.push("async def test_" + feature.replace(/-/g, "_") + "_parametrized(client: AsyncClient, input_val, expected):");
    lines.push("    response = await client.post('/api/" + feature + "', json={'data': input_val})");
    lines.push("    assert response.status_code == expected");
    lines.push("```");
  } else if (formatCode === "postman-collection") {
    lines.push("## Sample Postman Collection Structure");
    lines.push("");
    lines.push("```json");
    lines.push("{");
    lines.push('  "info": { "name": "' + featLabel + ' Tests", "schema": "https://schema.getpostman.com" },');
    lines.push('  "item": [');
    lines.push('    {');
    lines.push('      "name": "Successful ' + featLabel + ' Flow",');
    lines.push('      "request": {');
    lines.push('        "method": "POST",');
    lines.push('        "url": "{{baseUrl}}/api/' + feature + '",');
    lines.push('        "header": [{ "key": "Content-Type", "value": "application/json" }],');
    lines.push('        "body": { "mode": "raw", "raw": "{\\"valid\\": true}" }');
    lines.push('      },');
    lines.push('      "event": [{');
    lines.push('        "listen": "test",');
    lines.push('        "script": {');
    lines.push('          "exec": ["pm.test(\\"Status 200\\", () => pm.response.to.have.status(200));"]');
    lines.push('        }');
    lines.push('      }]');
    lines.push('    }');
    lines.push('  ]');
    lines.push("}");
    lines.push("```");
  }

  lines.push("");
  lines.push("## Test Execution Summary");
  lines.push("");
  lines.push("| Category | Count |");
  lines.push("|----------|-------|");
  lines.push(`| Feature | 1 (${featLabel}) |`);
  lines.push(`| Coverage Types | ${coverages.length} |`);
  lines.push(`| Platform Targets | ${platforms.length} |`);
  lines.push(`| User Roles | ${userRoles.length} |`);
  lines.push(`| Device/Browser | ${deviceBrowser.length} |`);
  lines.push(`| Estimated Test Cases | ~${testCount} |`);
  lines.push(`| Estimated Execution Time | ~${Math.ceil(testCount / 5) * 10} min |`);
  lines.push("");

  lines.push("## Quality Gates & Exit Criteria");
  lines.push("");
  lines.push("- [ ] All test cases pass (pass rate ≥ 98%)");
  lines.push("- [ ] No critical or high-severity bugs open");
  lines.push("- [ ] Accessibility audit passes WCAG AA");
  lines.push("- [ ] Security scan shows no critical vulnerabilities");
  lines.push("- [ ] Cross-browser/device testing complete");
  lines.push("- [ ] Performance benchmarks meet SLAs");
  if (userRoles.length > 1) {
    lines.push("- [ ] Role-based access control verified for all roles");
  }
  if (coverages.includes("performance")) {
    lines.push("- [ ] Load test shows p95 latency under 500ms");
  }
  lines.push("");

  lines.push("## Test Environment Details");
  lines.push("");
  lines.push("| Property | Value");
  lines.push("|----------|------");
  if (environment) {
    lines.push(`| Environment | ${envLabel}`);
  }
  lines.push(`| Data Setup | ${dsLabel || "Default"}`);
  lines.push(`| User Roles Under Test | ${roleLabels || "Standard user"}`);
  lines.push(`| Device/Browser Coverage | ${dbLabels || "Latest Chrome"}`);
  lines.push(`| Base URL | https://[environment]/[feature]`);
  lines.push(`| Test Data Lifetime | Cleaned after each run`);

  if (dataSetup === "clean-db") {
    lines.push("| Isolation | Full database reset per test suite");
  } else if (dataSetup === "seed-data") {
    lines.push("| Seed Script | `npm run seed:test`");
  }
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by QA Edge-Case Planner_");

  return lines.join("\n");
}

export default function QaPlannerPage() {
  return (
    <ToolShell
      title="QA Edge-Case Planner"
      steps={[
        { id: 1, label: "Feature", component: (p) => (
          <GenericStep {...p} title="Select Feature to Test" description="Which feature are you writing tests for?" options={options.feature} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="feature" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Coverage", component: (p) => (
          <GenericStep {...p} title="Select Test Coverage" description="What type of testing should be prioritized?" options={options.coverage} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="coverage" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Format", component: (p) => (
          <GenericStep {...p} title="Select Output Format" description="How should the test plan be formatted?" options={options.format} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="format" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Platform", component: (p) => (
          <GenericStep {...p} title="Select Platform Target" description="What platform are you testing on?" options={options.platform} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="platform" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Data Setup", component: (p) => (
          <GenericStep {...p} title="Select Data Setup Strategy" description="How should test data be prepared?" options={options.dataSetup} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="dataSetup" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "User Roles", component: (p) => (
          <GenericStep {...p} title="Select User Roles" description="What user roles should be tested?" options={options.userRoles} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="userRoles" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Environment", component: (p) => (
          <GenericStep {...p} title="Select Test Environment" description="Where will the tests be executed?" options={options.environment} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="environment" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Device", component: (p) => (
          <GenericStep {...p} title="Select Device / Browser" description="What devices and browsers should be tested?" options={options.deviceBrowser} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="deviceBrowser" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}









