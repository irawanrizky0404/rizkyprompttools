"use client";

import type { FC } from "react";
import {
  TestTube, Cog, FlaskConical, Database, CheckSquare,
  Target, GitBranch, FileText, FileJson, Code,
  LayoutTemplate, Wrench, Beaker, BarChart3,
  Shield, Server, Globe, Smartphone, Zap,
  Settings, RefreshCw, AlertTriangle, Filter,
  Terminal, Layers, Share2, Monitor, Download, Timer,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  testType: [
    { id: "unit", title: "Unit Tests", description: "Test individual functions and modules in isolation", icon: TestTube },
    { id: "integration", title: "Integration Tests", description: "Test interactions between multiple modules", icon: Beaker },
    { id: "e2e", title: "E2E Tests", description: "Full end-to-end user flow testing", icon: Globe },
    { id: "component", title: "Component Tests", description: "Test UI components with rendering and interactions", icon: LayoutTemplate },
    { id: "snapshot", title: "Snapshot Tests", description: "Capture rendered output for visual regression", icon: Monitor },
    { id: "api", title: "API Tests", description: "Test HTTP endpoints and responses", icon: Server },
    { id: "performance", title: "Performance Tests", description: "Benchmark execution time and memory usage", icon: Zap },
    { id: "security", title: "Security Tests", description: "Test for vulnerabilities and edge-case exploits", icon: Shield },
  ],
  frameworkConfig: [
    { id: "vitest-default", title: "Vitest Default", description: "Vitest with default config and globals", icon: Cog },
    { id: "vitest-react", title: "Vitest + React Testing", description: "React Testing Library integration", icon: Code },
    { id: "vitest-vue", title: "Vitest + Vue Test Utils", description: "Vue Test Utils integration", icon: Code },
    { id: "vitest-svelte", title: "Vitest + Svelte Testing", description: "Svelte testing library integration", icon: Code },
    { id: "jest-default", title: "Jest Default", description: "Jest with default configuration", icon: Settings },
    { id: "jest-ts", title: "Jest + TypeScript", description: "Jest with ts-jest for TypeScript projects", icon: FileJson },
    { id: "custom-vitest", title: "Custom Vitest Config", description: "Fully customized Vitest setup with plugins", icon: Wrench },
    { id: "custom-jest", title: "Custom Jest Config", description: "Fully customized Jest setup with transformers", icon: Wrench },
  ],
  mockStrategy: [
    { id: "auto-mock", title: "Auto-Mock All", description: "Automatically mock all imported dependencies", icon: FlaskConical },
    { id: "manual-mock", title: "Manual Mocks", description: "Hand-written mock implementations per test", icon: Wrench },
    { id: "partial-mock", title: "Partial Mock", description: "Mock specific exports, keep others real", icon: Filter },
    { id: "spy-based", title: "Spy-Based Mocks", description: "Real implementations wrapped with jest.spyOn/vi.spyOn", icon: Target },
    { id: "mock-factory", title: "Mock Factory", description: "Factory functions returning mock objects with defaults", icon: Layers },
    { id: "fs-mock", title: "File System Mock", description: "Mock fs/readFile/writeFile for file-based logic", icon: FileText },
    { id: "network-mock", title: "Network Mock (MSW)", description: "Mock Service Worker for HTTP request mocking", icon: Server },
    { id: "clock-mock", title: "Fake Timers / Clock", description: "Mock Date.now, setTimeout, and intervals", icon: Timer },
  ],
  fixtureSetup: [
    { id: "inline", title: "Inline Fixtures", description: "Define test data directly in test files", icon: Code },
    { id: "factory", title: "Factory Functions", description: "Functions that generate test data on demand", icon: Layers },
    { id: "json-file", title: "JSON Fixture Files", description: "External JSON files imported as test data", icon: FileJson },
    { id: "faker", title: "Faker-Generated", description: "Use faker.js for randomized realistic data", icon: Database },
    { id: "database-seed", title: "Database Seed", description: "Pre-seed a test database with fixture data", icon: Database },
    { id: "migration", title: "Migration Snapshots", description: "Use DB migration snapshots for integration tests", icon: RefreshCw },
    { id: "template", title: "Template-Based", description: "Template strings with variable injection for fixtures", icon: LayoutTemplate },
    { id: "before-each", title: "beforeEach Builder", description: "Setup fixtures programmatically in beforeEach hooks", icon: Terminal },
  ],
  assertionStyle: [
    { id: "native-assert", title: "Native Assert", description: "Node.js assert or built-in test assertions", icon: CheckSquare },
    { id: "expect-native", title: "Vitest/Jest Expect", description: "Standard expect with matchers (toBe, toEqual)", icon: CheckSquare },
    { id: "jest-dom", title: "jest-dom Matchers", description: "DOM-specific matchers (toBeVisible, toHaveTextContent)", icon: Monitor },
    { id: "testing-library", title: "Testing Library Queries", description: "getByRole, findByTestId with accessibility focus", icon: Target },
    { id: "chai", title: "Chai Assertions", description: "Chai expect/should/assert with plugins", icon: Code },
    { id: "custom-matchers", title: "Custom Matchers", description: "extend-expect or custom matchers for domain logic", icon: Wrench },
    { id: "snapshot-assert", title: "Snapshot Assertions", description: "toMatchSnapshot for output comparison", icon: FileText },
    { id: "type-assert", title: "Type Assertions", description: "TypeScript compile-time assertions (expectType)", icon: Shield },
  ],
  coverageTarget: [
    { id: "lines-80", title: "Lines: 80%", description: "Line coverage threshold of 80%", icon: BarChart3 },
    { id: "branches-75", title: "Branches: 75%", description: "Branch coverage threshold of 75%", icon: GitBranch },
    { id: "functions-85", title: "Functions: 85%", description: "Function coverage threshold of 85%", icon: Target },
    { id: "statements-80", title: "Statements: 80%", description: "Statement coverage threshold of 80%", icon: FileText },
    { id: "full-90", title: "Full: 90% All", description: "90% across lines, branches, functions, statements", icon: Shield },
    { id: "strict-95", title: "Strict: 95% All", description: "95% strict threshold across all coverage types", icon: AlertTriangle },
    { id: "uncovered-only", title: "Uncovered Tracking", description: "Track uncovered lines without blocking CI", icon: Filter },
    { id: "changed-lines", title: "Changed Lines Only", description: "Coverage enforcement on changed lines in PRs", icon: GitBranch },
  ],
  ciIntegration: [
    { id: "github-actions", title: "GitHub Actions", description: "Run tests via GitHub Actions workflows", icon: GitBranch },
    { id: "gitlab-ci", title: "GitLab CI", description: "Test execution in GitLab CI/CD pipelines", icon: GitBranch },
    { id: "circleci", title: "CircleCI", description: "Orb-based test setup on CircleCI", icon: RefreshCw },
    { id: "jenkins", title: "Jenkins", description: "Jenkins pipeline with test reporting", icon: Settings },
    { id: "pre-commit", title: "Pre-Commit Hook", description: "Run tests in husky/lint-staged pre-commit", icon: Terminal },
    { id: "pr-check", title: "PR Status Check", description: "Required passing tests for PR merging", icon: CheckSquare },
    { id: "parallel-ci", title: "Parallel CI Runs", description: "Split test files across parallel CI workers", icon: Layers },
    { id: "docker-ci", title: "Dockerized CI", description: "Run tests in deterministic Docker environments", icon: Server },
  ],
  reporting: [
    { id: "console", title: "Console Output", description: "Standard terminal test output with colors", icon: Terminal },
    { id: "html-report", title: "HTML Report", description: "Generate HTML test report with pass/fail details", icon: Globe },
    { id: "junit", title: "JUnit XML", description: "XML report for CI integration and dashboards", icon: FileJson },
    { id: "coverage-html", title: "Coverage HTML Report", description: "HTML coverage report with line-by-line detail", icon: FileText },
    { id: "coverage-lcov", title: "Coverage LCOV", description: "LCOV coverage format for IDE and CI integration", icon: BarChart3 },
    { id: "json-report", title: "JSON Report", description: "Full test results in JSON format for tooling", icon: FileJson },
    { id: "slack-notify", title: "Slack Notification", description: "Post test results to Slack channel", icon: Share2 },
    { id: "allure", title: "Allure Report", description: "Rich Allure framework report with history and trends", icon: Monitor },
  ],
};

const dict: Record<string, Record<string, string>> = {
  testType: {
    unit: "Test individual functions, utilities, and modules in complete isolation. Dependencies should be mocked or stubbed. Unit tests execute quickly and form the foundation of the test pyramid. Aim for high coverage on business logic.",
    integration: "Test how multiple modules or services work together. This includes database queries, API calls, and service-layer interactions. Integration tests validate contracts between components and catch interface mismatches.",
    e2e: "Simulate real user journeys through the entire application stack. Use Playwright or Cypress for browser automation. E2E tests are slower but provide the highest confidence that user flows work end-to-end.",
    component: "Test UI components in isolation with rendering, user interactions, and state changes. Use React Testing Library or Vue Test Utils. Focus on behavior over implementation details for maintainable tests.",
    snapshot: "Capture a serialized representation of rendered output and compare against a stored reference. Snapshot tests catch unexpected visual or structural changes. Review and update snapshots when changes are intentional.",
    api: "Test HTTP endpoints with realistic request payloads and validate responses, status codes, and headers. Use supertest or a dedicated API testing library. Cover success, error, and edge case scenarios for every endpoint.",
    performance: "Benchmark critical code paths for execution time and memory consumption. Use vitest bench or dedicated performance testing tools. Set performance budgets and alert on regressions in CI.",
    security: "Test for common security vulnerabilities including injection attacks, XSS, CSRF, and authentication bypasses. Use security-specific testing libraries and follow OWASP testing guide for comprehensive coverage.",
  },
  frameworkConfig: {
    "vitest-default": "Configure Vitest with default settings. Enable globals for describe/it/expect. Set testMatch pattern for test file discovery. Configure transform include/exclude for TypeScript and JavaScript files.",
    "vitest-react": "Set up Vitest with React Testing Library and jsdom environment. Configure @testing-library/react and @testing-library/jest-dom for DOM assertions. Add user-event for realistic interaction simulation.",
    "vitest-vue": "Configure Vitest with Vue Test Utils and happy-dom or jsdom. Set up @vue/test-utils and vue-component-meta for type-aware testing. Enable template compilation in test environment.",
    "vitest-svelte": "Set up Vitest with svelte-testing-library and svelte-preprocess. Configure JSDOM environment for component rendering. Import Svelte components directly in test files with Vite transformation.",
    "jest-default": "Configure Jest with default jsdom environment. Set transform for JavaScript files using babel-jest. Configure testMatch and moduleNameMapper for path aliases. Use jest.config.js or jest.config.ts for configuration.",
    "jest-ts": "Configure Jest with ts-jest transformer for TypeScript support. Set tsconfig paths mapping in moduleNameMapper. Configure diagnostics mode for type checking in tests. Use @types/jest for type definitions.",
    "custom-vitest": "Create a fully customized Vitest configuration with custom plugins, global setup files, environment overrides per test file, custom reporters, test isolation settings, and performance tuning parameters.",
    "custom-jest": "Create a fully customized Jest configuration with custom transformers, global setup/teardown, custom reporters, test environment overrides, snapshot serializers, and module resolver plugins.",
  },
  mockStrategy: {
    "auto-mock": "Automatically mock all imported modules using vitest.mock or jest.mock. Best for unit tests where you want complete isolation. Be careful of over-mocking — it can hide integration bugs.",
    "manual-mock": "Create hand-written mock implementations for each dependency. Place __mocks__ directories adjacent to the real modules. Manual mocks give full control over mock behavior but require maintenance.",
    "partial-mock": "Use mock with factory functions that preserve real implementations for some exports while mocking others. Useful when you want real behavior for most of a module but need to control specific functions.",
    "spy-based": "Wrap real implementations with spyOn to track calls, arguments, and return values without replacing the implementation. Spies are ideal for verifying that functions are called correctly while exercising real logic.",
    "mock-factory": "Create factory functions that return fully configured mock objects with sensible defaults. Accept overrides to customize specific properties per test. Factories reduce duplication and keep tests readable.",
    "fs-mock": "Use mock-fs or memfs to mock file system operations. Create an in-memory file structure before each test. Especially useful for testing code that reads/writes configuration files, templates, or build output.",
    "network-mock": "Use Mock Service Worker (MSW) to intercept HTTP requests at the network level. Define handlers for each endpoint with response delays and errors. MSW works identically in Node.js and browser environments.",
    "clock-mock": "Use vi.useFakeTimers() or jest.useFakeTimers() to mock time-dependent functions. Control Date.now(), setTimeout, setInterval, and performance.now(). Advance time programmatically with advanceTimersByTime.",
  },
  fixtureSetup: {
    inline: "Define fixture data directly in each test file using plain objects or arrays. Best for simple, test-specific data that doesn't need reuse. Keep inline fixtures small to maintain test readability.",
    factory: "Write factory functions (using Fishery or similar) that generate test data with defaults and overrides. Factories compose well — build complex object graphs by combining simple factories with associations.",
    "json-file": "Store test fixtures as JSON files in a __fixtures__ directory. Import them directly in tests. JSON fixtures are easy to edit and share across test files. Version them alongside source code for traceability.",
    faker: "Use faker.js to generate realistic but randomized test data. Faker ensures data variety and can reveal edge cases that static fixtures miss. Seed the faker for deterministic test runs when needed.",
    "database-seed": "Pre-seed a test database with SQL scripts or ORM seeders before running integration tests. Use transactions or database snapshots to isolate tests. Clean up after each test to maintain test independence.",
    migration: "Use database migration snapshots to create test database states. Run migrations once per test suite and wrap individual tests in transactions. Roll back after each test for clean isolation without re-migration.",
    template: "Use template literals or template files with variable placeholders for fixture data. Inject test-specific values at runtime. Useful for testing template rendering and code generation features.",
    "before-each": "Programmatically set up fixtures in beforeEach hooks. Create fresh data for every test to ensure isolation. GitBranch with afterEach cleanup. Use nested describes for shared setup at different scopes.",
  },
  assertionStyle: {
    "native-assert": "Use Node.js built-in assert module for test assertions. Strict mode (assert.strictEqual) is recommended. Native assert has no dependencies and works with any test runner. Use assert.throws for error testing.",
    "expect-native": "Use Vitest or Jest expect API with standard matchers. Common matchers include toBe, toEqual, toStrictEqual, toContain, toHaveLength, toThrow, toBeDefined, toBeNull, toBeTruthy, and toBeFalsy.",
    "jest-dom": "Extend expect with jest-dom custom matchers for DOM node assertions. Use toBeVisible, toBeDisabled, toHaveTextContent, toHaveAttribute, toHaveClass, toBeChecked, toHaveFocus, and toBeInTheDocument.",
    "testing-library": "Use Testing Library queries in assertions. Prefer getByRole for accessible queries. Use findBy for async elements. Use queryBy for absence checks. Use within for scoped queries within containers.",
    chai: "Use Chai assertion library with expect, should, or assert interfaces. Popular plugins include chai-as-promised for promises, chai-dom for DOM assertions, and chai-subset for partial object matching.",
    "custom-matchers": "Extend expect with custom matchers using expect.extend. Create domain-specific matchers like toBeValidEmail, toMatchSchema, toBeWithinRange. Custom matchers improve test readability and reduce duplication.",
    "snapshot-assert": "Use toMatchSnapshot() for value comparison against stored snapshots. Inline snapshots with toMatchInlineSnapshot() embed the snapshot in the test file. Use property matchers for dynamic fields.",
    "type-assert": "Use TypeScript type assertions in tests with libraries like ts-expect-error or vitest-type-assert. Verify that types work correctly at compile time without running the code. Use expectTypeOf for runtime type checks.",
  },
  coverageTarget: {
    "lines-80": "Set line coverage threshold to 80%. Lines covered measures the percentage of executable code lines that were executed during testing. This is the most common coverage metric and a good starting point.",
    "branches-75": "Set branch coverage threshold to 75%. Branch coverage measures whether each possible branch of control flow (if/else, ArrowLeftRight cases, ternary operators) was executed. Harder to achieve than line coverage.",
    "functions-85": "Set function coverage threshold to 85%. Function coverage tracks whether each function or method in the codebase was called during testing. Low function coverage often indicates untested utility code.",
    "statements-80": "Set statement coverage threshold to 80%. Similar to line coverage but based on statement-level granularity. Each statement is counted regardless of whether it spans multiple lines.",
    "full-90": "Set a balanced 90% threshold across all coverage dimensions: lines, branches, functions, and statements. This aggressive target ensures comprehensive testing but may require significant effort for legacy code.",
    "strict-95": "Set a strict 95% coverage target across all dimensions. This is enterprise-grade coverage that often requires testing edge cases, error states, and configuration branches. Consider using coverage exemptions judiciously.",
    "uncovered-only": "Configure coverage reporting to show only uncovered lines without enforcing a minimum threshold. Useful for tracking coverage improvements over time without blocking CI. Focus efforts on high-impact uncovered areas.",
    "changed-lines": "Configure coverage enforcement to apply only to lines changed in a pull request. Use tools like diff-covered or code-coverage-diff. Prevents coverage decay in new code without requiring full codebase coverage.",
  },
  ciIntegration: {
    "github-actions": "Create a GitHub Actions workflow that runs tests on push and pull_request events. Use matrix strategy for parallel execution across Node versions. Cache node_modules for faster installs. Generate and upload coverage reports.",
    "gitlab-ci": "Configure GitLab CI with test stages in .gitlab-ci.yml. Use parallel keyword for test splitting. Integrate with GitLab's built-in test reporting for merge request widgets. Use artifacts for coverage reports.",
    circleci: "Use CircleCI orbs for Node.js test setup. Configure test splitting with circleci tests glob for parallel execution. Store test results as artifacts. Use workspace for dependency sharing across jobs.",
    jenkins: "Create a Jenkins pipeline with declarative syntax for test execution. Use JUnit plugin for test result publishing. Integrate with coverage tools via HTML Publisher plugin. Parameterize build for configurable test runs.",
    "pre-commit": "Configure husky with lint-staged to run tests only on staged files. Use --findRelatedTests or --changed flag to limit test execution. Keep pre-commit tests fast — move slower integration tests to CI.",
    "pr-check": "Set up required status checks in GitHub or GitLab that enforce passing tests before merge. Configure branch protection rules. Use merge gates that block PRs with failing tests or below-threshold coverage.",
    "parallel-ci": "Split test files across parallel CI workers using Vitest's --shard flag or Jest's --shard or --maxWorkers configuration. Balance test distribution automatically or use static test file splitting based on historical timing.",
    "docker-ci": "Create a Dockerfile with all test dependencies pre-installed. Use docker-compose for service dependencies (databases, caches). Run tests in ephemeral containers for deterministic, reproducible environments.",
  },
  reporting: {
    console: "Output test results to standard terminal with colored pass/fail indicators. Use --verbose for detailed individual test names. Configure reporter to show only failures with --reporter verbose or dot reporter for minimal output.",
    "html-report": "Generate a standalone HTML report with test results grouped by file and suite. Include expandable error details, stack traces, and test duration. Vitest's HTML reporter or jest-html-reporter produce comprehensive reports.",
    junit: "Generate JUnit XML format test reports for CI integration. Configure testResultsProcessor or reporters. JUnit XML is supported by Jenkins, GitLab, CircleCI, and most CI platforms for test analytics and flakiness detection.",
    "coverage-html": "Generate HTML coverage reports with istanbul-instrumented code. Reports show covered vs uncovered lines with color coding. Drill down into files and directories. Include branch and function coverage breakdowns.",
    "coverage-lcov": "Generate LCOV coverage data for IDE plugins and CI dashboards. LCOV format integrates with VS Code coverage gutters, IntelliJ coverage viewer, and services like Coveralls and Codecov for historical tracking.",
    "json-report": "Output test results as JSON for programmatic consumption. Useful for custom dashboards, meta-testing tools, or feeding results into external analytics platforms. Include test name, duration, status, and error details.",
    "slack-notify": "Configure Slack webhook notifications for test results. Post pass/fail summary, coverage changes, and flaky test alerts. Use GitHub Actions Slack actions or custom scripts for flexible notification formatting.",
    allure: "Generate Allure test reports with rich visualization including timelines, categories, trends, and environment info. Allure supports test steps, attachments, parameters, and history tracking for comprehensive test analytics.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const testType = selections.step1;
  const frameworkConfig = selections.step2;
  const mockStrategy = selections.step3;
  const fixtureSetup = selections.step4;
  const assertionStyle = selections.step5;
  const coverageTarget = selections.step6;
  const ciIntegration = selections.step7;
  const reporting = selections.step8;

  const lines: string[] = [];

  lines.push("# Vitest/Jest Scaffold Blueprint");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const ttLabel = Array.isArray(testType) ? testType.map(id => options.testType.find(o => o.id === id)?.title || id).join(", ") : options.testType.find(o => o.id === testType)?.title || testType;
  const ttNote = notes[`testType-${testType}`] || "";
  lines.push(`| Test Type | ${ttLabel} | ${ttNote}`);
  const fcLabel = Array.isArray(frameworkConfig) ? frameworkConfig.map(id => options.frameworkConfig.find(o => o.id === id)?.title || id).join(", ") : options.frameworkConfig.find(o => o.id === frameworkConfig)?.title || frameworkConfig;
  const fcNote = notes[`frameworkConfig-${frameworkConfig}`] || "";
  lines.push(`| Framework | ${fcLabel} | ${fcNote}`);
  const msLabel = Array.isArray(mockStrategy) ? mockStrategy.map(id => options.mockStrategy.find(o => o.id === id)?.title || id).join(", ") : options.mockStrategy.find(o => o.id === mockStrategy)?.title || mockStrategy;
  const msNote = notes[`mockStrategy-${mockStrategy}`] || "";
  lines.push(`| Mock Strategy | ${msLabel} | ${msNote}`);
  const fsLabel = Array.isArray(fixtureSetup) ? fixtureSetup.map(id => options.fixtureSetup.find(o => o.id === id)?.title || id).join(", ") : options.fixtureSetup.find(o => o.id === fixtureSetup)?.title || fixtureSetup;
  const fsNote = notes[`fixtureSetup-${fixtureSetup}`] || "";
  lines.push(`| Fixture Setup | ${fsLabel} | ${fsNote}`);
  const asLabel = Array.isArray(assertionStyle) ? assertionStyle.map(id => options.assertionStyle.find(o => o.id === id)?.title || id).join(", ") : options.assertionStyle.find(o => o.id === assertionStyle)?.title || assertionStyle;
  const asNote = notes[`assertionStyle-${assertionStyle}`] || "";
  lines.push(`| Assertion Style | ${asLabel} | ${asNote}`);
  const cvLabel = Array.isArray(coverageTarget) ? coverageTarget.map(id => options.coverageTarget.find(o => o.id === id)?.title || id).join(", ") : options.coverageTarget.find(o => o.id === coverageTarget)?.title || coverageTarget;
  const cvNote = notes[`coverageTarget-${coverageTarget}`] || "";
  lines.push(`| Coverage Target | ${cvLabel} | ${cvNote}`);
  const ciLabel = Array.isArray(ciIntegration) ? ciIntegration.map(id => options.ciIntegration.find(o => o.id === id)?.title || id).join(", ") : options.ciIntegration.find(o => o.id === ciIntegration)?.title || ciIntegration;
  const ciNote = notes[`ciIntegration-${ciIntegration}`] || "";
  lines.push(`| CI Integration | ${ciLabel} | ${ciNote}`);
  const rpLabel = Array.isArray(reporting) ? reporting.map(id => options.reporting.find(o => o.id === id)?.title || id).join(", ") : options.reporting.find(o => o.id === reporting)?.title || reporting;
  const rpNote = notes[`reporting-${reporting}`] || "";
  lines.push(`| Reporting | ${rpLabel} | ${rpNote}`);
  lines.push("");

  lines.push("## Test Configuration");
  lines.push("");

  if (testType) {
    lines.push("### Test Type: " + ttLabel);
    lines.push("");
    lines.push(Array.isArray(testType) ? testType.map(v => dict.testType[v] || v).join(", ") : dict.testType[testType] || testType);
    if (ttNote) lines.push(`> **Note:** ${ttNote}`);
    lines.push("");
  }

  if (frameworkConfig) {
    lines.push("### Framework Configuration: " + fcLabel);
    lines.push("");
    lines.push(Array.isArray(frameworkConfig) ? frameworkConfig.map(v => dict.frameworkConfig[v] || v).join(", ") : dict.frameworkConfig[frameworkConfig] || frameworkConfig);
    if (fcNote) lines.push(`> **Note:** ${fcNote}`);
    lines.push("");
  }

  if (mockStrategy) {
    lines.push("### Mock Strategy: " + msLabel);
    lines.push("");
    lines.push(Array.isArray(mockStrategy) ? mockStrategy.map(v => dict.mockStrategy[v] || v).join(", ") : dict.mockStrategy[mockStrategy] || mockStrategy);
    if (msNote) lines.push(`> **Note:** ${msNote}`);
    lines.push("");
  }

  if (fixtureSetup) {
    lines.push("### Fixture Setup: " + fsLabel);
    lines.push("");
    lines.push(Array.isArray(fixtureSetup) ? fixtureSetup.map(v => dict.fixtureSetup[v] || v).join(", ") : dict.fixtureSetup[fixtureSetup] || fixtureSetup);
    if (fsNote) lines.push(`> **Note:** ${fsNote}`);
    lines.push("");
  }

  if (assertionStyle) {
    lines.push("### Assertion Style: " + asLabel);
    lines.push("");
    lines.push(Array.isArray(assertionStyle) ? assertionStyle.map(v => dict.assertionStyle[v] || v).join(", ") : dict.assertionStyle[assertionStyle] || assertionStyle);
    if (asNote) lines.push(`> **Note:** ${asNote}`);
    lines.push("");
  }

  if (coverageTarget) {
    lines.push("### Coverage Target: " + cvLabel);
    lines.push("");
    lines.push(Array.isArray(coverageTarget) ? coverageTarget.map(v => dict.coverageTarget[v] || v).join(", ") : dict.coverageTarget[coverageTarget] || coverageTarget);
    if (cvNote) lines.push(`> **Note:** ${cvNote}`);
    lines.push("");
  }

  if (ciIntegration) {
    lines.push("### CI Integration: " + ciLabel);
    lines.push("");
    lines.push(Array.isArray(ciIntegration) ? ciIntegration.map(v => dict.ciIntegration[v] || v).join(", ") : dict.ciIntegration[ciIntegration] || ciIntegration);
    if (ciNote) lines.push(`> **Note:** ${ciNote}`);
    lines.push("");
  }

  if (reporting) {
    lines.push("### Reporting: " + rpLabel);
    lines.push("");
    lines.push(Array.isArray(reporting) ? reporting.map(v => dict.reporting[v] || v).join(", ") : dict.reporting[reporting] || reporting);
    if (rpNote) lines.push(`> **Note:** ${rpNote}`);
    lines.push("");
  }

  lines.push("## Configuration Files Generated");
  lines.push("");
  lines.push("| File | Purpose | Auto-Generated");
  lines.push("|------|---------|---------------");
  if (frameworkConfig?.startsWith("vitest")) {
    lines.push("| vitest.config.ts | Vitest configuration file | Yes");
    lines.push("| tsconfig.json (test) | TypeScript config for test files | Yes (extends)");
    lines.push("| setup.ts | Test setup and global mocks | Yes");
  } else {
    lines.push("| jest.config.ts | Jest configuration file | Yes");
    lines.push("| tsconfig.json (test) | TypeScript config for test files | Yes (extends)");
    lines.push("| setup.ts | Test setup and global mocks | Yes");
  }
  lines.push("| .env.test | Test environment variables | Yes");
  lines.push("| __mocks__/ | Mock modules directory | As needed");
  lines.push("| __fixtures__/ | Test fixture data directory | As needed");
  lines.push("");

  const isVitest = frameworkConfig?.startsWith("vitest") || frameworkConfig === "custom-vitest";
  const runner = isVitest ? "Vitest" : "Jest";
  const configFile = isVitest ? "vitest.config.ts" : "jest.config.ts";

  lines.push(`## Sample ${configFile}`);
  lines.push("");
  lines.push("```typescript");
  lines.push(`import { defineConfig } from '${isVitest ? "vitest/config" : "@jest/types"}';`);
  lines.push("");
  lines.push("export default defineConfig({");
  if (isVitest) {
    lines.push("  test: {");
    lines.push(`    globals: true,`);
    if (testType === "component" || testType === "e2e") {
      lines.push(`    environment: 'jsdom',`);
    }
    if (testType === "api") {
      lines.push(`    environment: 'node',`);
    }
    if (mockStrategy === "auto-mock") {
      lines.push(`    mockReset: true,`);
      lines.push(`    unmock: false,`);
    }
    if (coverageTarget) {
      const cvNum = parseInt(coverageTarget?.split("-")[1] || "80");
      lines.push(`    coverage: {`);
      lines.push(`      provider: 'v8',`);
      lines.push(`      reporter: ['text', 'json', 'html'],`);
      if (coverageTarget.includes("lines")) lines.push(`      lines: ${cvNum},`);
      if (coverageTarget.includes("branches")) lines.push(`      branches: ${cvNum},`);
      if (coverageTarget.includes("functions")) lines.push(`      functions: ${cvNum},`);
      if (coverageTarget.includes("statements")) lines.push(`      statements: ${cvNum},`);
      if (coverageTarget === "full-90" || coverageTarget === "strict-95") {
        lines.push(`      lines: ${cvNum},`);
        lines.push(`      branches: ${cvNum},`);
        lines.push(`      functions: ${cvNum},`);
        lines.push(`      statements: ${cvNum},`);
      }
      if (coverageTarget === "uncovered-only") {
        lines.push(`      enabled: true,`);
        lines.push(`      thresholds: {}, // reporting only`);
      }
      if (coverageTarget === "changed-lines") {
        lines.push(`      enabled: true,`);
        lines.push(`      thresholds: { perFile: true },`);
      }
      lines.push(`    },`);
    }
    if (reporting === "junit") {
      lines.push(`    reporters: ['default', 'junit'],`);
      lines.push(`    outputFile: './test-results/junit.xml',`);
    } else if (reporting === "json-report") {
      lines.push(`    reporters: ['default', 'json'],`);
      lines.push(`    outputFile: './test-results/results.json',`);
    } else if (reporting === "html-report") {
      lines.push(`    reporters: ['default', 'html'],`);
      lines.push(`    outputFile: './test-results/index.html',`);
    }
    lines.push("  },");
  } else {
    lines.push("  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],");
    if (testType === "component" || testType === "e2e") {
      lines.push("  testEnvironment: 'jsdom',");
    }
    if (coverageTarget) {
      const cvNum = parseInt(coverageTarget?.split("-")[1] || "80");
      lines.push("  collectCoverage: true,");
      lines.push("  coverageReporters: ['text', 'json', 'html'],");
      if (coverageTarget === "full-90" || coverageTarget === "strict-95") {
        lines.push(`  coverageThreshold: {`);
        lines.push(`    global: {`);
        lines.push(`      lines: ${cvNum},`);
        lines.push(`      branches: ${cvNum},`);
        lines.push(`      functions: ${cvNum},`);
        lines.push(`      statements: ${cvNum},`);
        lines.push(`    },`);
        lines.push(`  },`);
      }
    }
  }
  lines.push("});");
  lines.push("```");
  lines.push("");

  lines.push(`## Sample Test (${ttLabel})`);
  lines.push("");
  lines.push("```typescript");
  lines.push("import { describe, it, expect } from '" + (isVitest ? "vitest" : "@jest/globals") + "';");
  lines.push("");
  lines.push("describe('" + ttLabel.toLowerCase() + " suite', () => {");
  lines.push("  it('should handle the primary success case', () => {");
  lines.push("    // Arrange");
  const fixtureExample = fixtureSetup === "inline"
    ? "const input = { key: 'value' };"
    : fixtureSetup === "factory"
      ? "const input = testFactory.build({ key: 'custom' });"
      : fixtureSetup === "faker"
        ? "const input = { name: faker.person.fullName(), email: faker.internet.email() };"
        : "const input = fixtures.testData;";
  lines.push("    " + fixtureExample);
  if (mockStrategy === "spy-based") {
    lines.push("    const spy = vi.spyOn(dependency, 'method');");
  }
  lines.push("");
  lines.push("    // Act");
  lines.push("    const result = underTest(input);");
  lines.push("");
  lines.push("    // Assert");
  const assertExample = assertionStyle === "jest-dom"
    ? "expect(result).toBeInTheDocument();"
    : assertionStyle === "snapshot-assert"
      ? "expect(result).toMatchSnapshot();"
      : assertionStyle === "type-assert"
        ? "expectTypeOf(result).toEqualTypeOf<ExpectedType>();"
        : "expect(result).toEqual(expected);";
  lines.push("    " + assertExample);
  lines.push("  });");
  lines.push("");
  lines.push("  it('should handle the error case gracefully', () => {");
  lines.push("    // Arrange");
  lines.push("    const badInput = null;");
  lines.push("");
  lines.push("    // Act & Assert");
  lines.push("    expect(() => underTest(badInput)).toThrow();");
  lines.push("  });");
  lines.push("});");
  lines.push("```");
  lines.push("");

  lines.push("## CI Pipeline Configuration");
  lines.push("");
  if (ciIntegration === "github-actions") {
    lines.push("```yaml");
    lines.push("name: Tests");
    lines.push("on: [push, pull_request]");
    lines.push("jobs:");
    lines.push("  test:");
    lines.push("    runs-on: ubuntu-latest");
    if (ciIntegration === "parallel-ci") {
      lines.push("    strategy:");
      lines.push("      matrix:");
      lines.push("        shard: [1, 2, 3, 4]");
    }
    lines.push("    steps:");
    lines.push("      - uses: actions/checkout@v4");
    lines.push("      - uses: actions/setup-node@v4");
    lines.push("        with:");
    lines.push("          node-version: 20");
    lines.push("          cache: 'npm'");
    lines.push("      - run: npm ci");
    if (ciIntegration === "parallel-ci") {
      lines.push("      - run: npx vitest --shard=${{ matrix.shard }}/${{ strategy.matrix.shard.length }}");
    } else {
      if (runner === "Vitest") {
        lines.push("      - run: npx vitest --run");
      } else {
        lines.push("      - run: npx jest");
      }
    }
    lines.push("      - uses: dorny/test-reporter@v1");
    lines.push("        if: always()");
    lines.push("        with:");
    lines.push("          name: Test Results");
    lines.push("          path: test-results/**/*.xml");
    lines.push("          reporter: jest-junit");
    lines.push("```");
  } else if (ciIntegration === "pre-commit") {
    lines.push("```json");
    lines.push("// .husky/pre-commit");
    lines.push("npx lint-staged");
    lines.push("```");
    lines.push("```json");
    lines.push("// package.json (lint-staged config)");
    lines.push('{ "*.{ts,tsx}": ["npx vitest --run --changed"] }');
    lines.push("```");
  } else if (ciIntegration === "docker-ci") {
    lines.push("```dockerfile");
    lines.push("FROM node:20-slim");
    lines.push("WORKDIR /app");
    lines.push("COPY package*.json ./");
    lines.push("RUN npm ci");
    lines.push("COPY . .");
    lines.push("CMD [\"npx\", \"vitest\", \"--run\"]");
    lines.push("```");
  }
  lines.push("");

  lines.push("## NPM Scripts");
  lines.push("");
  lines.push("```json");
  lines.push("{");
  lines.push('  "scripts": {');
  lines.push('    "test": "' + (runner === "Vitest" ? "vitest" : "jest") + '",');
  lines.push('    "test:run": "' + (runner === "Vitest" ? "vitest --run" : "jest --passWithNoTests") + '",');
  lines.push('    "test:watch": "' + (runner === "Vitest" ? "vitest --watch" : "jest --watch") + '",');
  lines.push('    "test:coverage": "' + (runner === "Vitest" ? "vitest --run --coverage" : "jest --coverage") + '",');
  if (ciIntegration === "parallel-ci") {
    lines.push('    "test:ci": "' + (runner === "Vitest" ? "vitest --run --shard=1/4" : "jest --maxWorkers=2") + '",');
  }
  if (reporting === "junit") {
    lines.push('    "test:ci": "' + (runner === "Vitest" ? "vitest --run --reporter=junit" : "jest --reporters=jest-junit") + '",');
  }
  lines.push('    "test:changed": "' + (runner === "Vitest" ? "vitest --run --changed" : "jest --onlyChanged") + '"');
  lines.push("  }");
  lines.push("}");
  lines.push("```");
  lines.push("");

  lines.push("## Package Dependencies");
  lines.push("");
  lines.push("| Package | Version | Purpose");
  lines.push("|---------|---------|--------");
  if (isVitest) {
    lines.push("| vitest | ^2.0.0 | Test runner and assertion library");
  } else {
    lines.push("| jest | ^29.7.0 | Test runner and assertion library");
    lines.push("| ts-jest | ^29.2.0 | TypeScript transformer for Jest");
    lines.push("| @types/jest | ^29.5.0 | TypeScript type definitions");
  }
  if (testType === "component") {
    lines.push("| @testing-library/react | ^16.0.0 | React component testing utilities");
    lines.push("| @testing-library/jest-dom | ^6.5.0 | DOM-specific matchers");
    lines.push("| @testing-library/user-event | ^14.5.0 | Realistic user interaction simulation");
  }
  if (mockStrategy === "network-mock") {
    lines.push("| msw | ^2.4.0 | HTTP request mocking");
  }
  if (fixtureSetup === "faker") {
    lines.push("| @faker-js/faker | ^9.0.0 | Fake data generation");
  }
  if (fixtureSetup === "factory") {
    lines.push("| fishery | ^2.2.0 | Test data factories");
  }
  if (assertionStyle === "chai") {
    lines.push("| chai | ^5.1.0 | Assertion library");
  }
  if (reporting === "allure") {
    lines.push("| allure-vitest | ^2.0.0 | Allure reporting integration");
  }
  if (ciIntegration === "pre-commit") {
    lines.push("| husky | ^9.1.0 | Pre-commit hook runner");
    lines.push("| lint-staged | ^15.2.0 | Run tests on staged files only");
  }
  lines.push("");

  lines.push("## Recommendations");
  lines.push("");
  if (testType === "unit") {
    lines.push("- **Test Structure**: Follow Arrange-Act-Assert pattern consistently across all test files.");
  }
  if (testType === "integration") {
    lines.push("- **Database Tests**: Use a test database or in-memory SQLite for integration tests. Reset state between tests.");
  }
  if (testType === "e2e") {
    lines.push("- **E2E Stability**: Use data-testid attributes. Add retry logic for flaky selectors. Run E2E separately from unit tests.");
  }
  if (mockStrategy === "auto-mock") {
    lines.push("- **Mock Verification**: Audit auto-mocked modules quarterly to ensure mocks are still accurate.");
  }
  if (coverageTarget === "full-90" || coverageTarget === "strict-95") {
    lines.push("- **Coverage Exemptions**: Use // istanbul ignore next sparingly. Each exclusion should have a documented reason.");
  }
  if (ciIntegration === "pr-check") {
    lines.push("- **Branch Protection**: Require passing tests and minimum coverage for PR merge. Set status checks as required.");
  }
  if (reporting === "slack-notify") {
    lines.push("- **Slack Alerts**: Send failure notifications only for main branch. Use success summaries for PRs.");
  }
  lines.push("- **Test Naming**: Use descriptive test names that read as sentences. Include expected behavior and context.");
  lines.push("- **Test Isolation**: Each test should be independent. Avoid shared mutable state between tests.");
  lines.push("- **Flaky Tests**: Tag flaky tests with a @flaky annotation. Run them separately and track flakiness rate.");
  lines.push("- **Documentation**: Maintain a TESTING.md with setup instructions, conventions, and troubleshooting guide.");
  lines.push("");

  lines.push("## Performance Budget");
  lines.push("");
  lines.push("| Metric | Target | Alert Threshold");
  lines.push("|--------|--------|----------------");
  lines.push("| Suite Execution Time | < 30s for full suite | > 60s triggers warning");
  lines.push("| Single Test Time | < 500ms per test | > 2s triggers review");
  lines.push("| Memory per Test | < 50MB | > 200MB triggers investigation");
  lines.push("| Parallel Workers | Auto (CPU count - 1) | Adjust if memory constrained");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Vitest/Jest Scaffold Generator_");

  return lines.join("\n");
}

export default function VitestScaffoldPage() {
  return (
    <ToolShell
      title="Vitest/Jest Scaffold Gen"
      steps={[
        { id: 1, label: "Test Type", component: (p) => (
          <GenericStep {...p} title="Test Type" description="What kind of tests will you write?" options={options.testType} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="testType" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Framework", component: (p) => (
          <GenericStep {...p} title="Framework Config" description="Which test framework and configuration?" options={options.frameworkConfig} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="frameworkConfig" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Mocking", component: (p) => (
          <GenericStep {...p} title="Mock Strategy" description="How should dependencies be mocked?" options={options.mockStrategy} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="mockStrategy" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Fixtures", component: (p) => (
          <GenericStep {...p} title="Fixture Setup" description="How will test data be created?" options={options.fixtureSetup} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="fixtureSetup" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Assertions", component: (p) => (
          <GenericStep {...p} title="Assertion Style" description="What assertion patterns will you use?" options={options.assertionStyle} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="assertionStyle" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Coverage", component: (p) => (
          <GenericStep {...p} title="Coverage Target" description="What coverage thresholds to enforce?" options={options.coverageTarget} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="coverageTarget" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "CI", component: (p) => (
          <GenericStep {...p} title="CI Integration" description="How will tests run in CI?" options={options.ciIntegration} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="ciIntegration" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Reporting", component: (p) => (
          <GenericStep {...p} title="Reporting" description="How should test results be reported?" options={options.reporting} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="reporting" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}











