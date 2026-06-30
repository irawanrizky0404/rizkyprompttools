"use client";

import type { FC } from "react";
import {
  Globe, Server, Smartphone, Cpu, Container,
  Shield, Zap, BookOpen, Terminal, Settings, Code,
  Users, Scale, FileText, Heart, Download, Upload,
  Link2, Sparkles, Cloud, Lock, Activity, CheckSquare,
  Database, MonitorSmartphone, GitBranch, MessageSquare,
  Pen, ClipboardList, AlertTriangle, Braces, Puzzle,
  Package, Tag,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  projectType: [
    { id: "web-app", title: "Web Application", description: "Full-stack or frontend web app", icon: Globe },
    { id: "api", title: "API / Backend", description: "REST, GraphQL, or gRPC API service", icon: Server },
    { id: "mobile", title: "Mobile App", description: "iOS, Android, or cross-platform mobile", icon: Smartphone },
    { id: "library", title: "Library / Package", description: "npm, pip, gem, cargo package", icon: Braces },
    { id: "cli", title: "CLI Tool", description: "Command-line interface application", icon: Terminal },
    { id: "docker", title: "Docker / Container", description: "Containerized application or service", icon: Container },
    { id: "wordpress", title: "WordPress Plugin/Theme", description: "WordPress plugin or theme project", icon: Puzzle },
    { id: "desktop", title: "Desktop Application", description: "Electron, Tauri, or native desktop app", icon: MonitorSmartphone },
  ],
  badges: [
    { id: "ci", title: "CI Status", description: "Build and test pipeline status badge", icon: Activity },
    { id: "coverage", title: "Code Coverage", description: "Test coverage percentage badge", icon: CheckSquare },
    { id: "version", title: "Version", description: "Current release version badge", icon: Tag },
    { id: "license", title: "License", description: "Open-source license badge", icon: Scale },
    { id: "downloads", title: "Downloads", description: "Package download count badge", icon: Download },
    { id: "docs", title: "Docs Status", description: "Documentation build status", icon: BookOpen },
    { id: "code-quality", title: "Code Quality", description: "Linting, security, or quality score", icon: Code },
    { id: "dependencies", title: "Dependencies", description: "Dependency status or health badge", icon: Package },
  ],
  installation: [
    { id: "npm", title: "npm / yarn / pnpm", description: "Install via package manager", icon: Package },
    { id: "pip", title: "pip / conda", description: "Python package installation", icon: Download },
    { id: "docker-pull", title: "Docker Pull", description: "Run via Docker container", icon: Container },
    { id: "brew", title: "Homebrew", description: "Install via Homebrew formula", icon: Terminal },
    { id: "go-install", title: "go install", description: "Install via Go modules", icon: Code },
    { id: "cargo", title: "cargo install", description: "Rust package installation", icon: Package },
    { id: "source", title: "Build from Source", description: "Clone repo and build manually", icon: GitBranch },
    { id: "curl", title: "curl / One-Liner", description: "Install via shell script", icon: Terminal },
  ],
  usage: [
    { id: "quick-start", title: "Quick Start", description: "Basic usage example to get started", icon: Zap },
    { id: "examples", title: "Code Examples", description: "Multiple usage examples with output", icon: Code },
    { id: "cli-usage", title: "CLI Usage", description: "Command-line arguments and flags", icon: Terminal },
    { id: "api-usage", title: "API / SDK Usage", description: "Programmatic usage with code snippets", icon: Server },
    { id: "config-file", title: "Configuration File", description: "Config file example and options", icon: Settings },
    { id: "env-vars", title: "Environment Variables", description: "Required and optional env vars", icon: Settings },
    { id: "docker-usage", title: "Docker Usage", description: "How to run with Docker Compose", icon: Container },
    { id: "advanced", title: "Advanced Usage", description: "Complex scenarios and patterns", icon: Sparkles },
  ],
  configuration: [
    { id: "env-file", title: ".env / Environment Config", description: "Environment-based configuration", icon: Settings },
    { id: "config-yaml", title: "YAML / TOML Config", description: "File-based configuration", icon: FileText },
    { id: "cli-flags", title: "CLI Flags / Options", description: "Command-line configuration options", icon: Terminal },
    { id: "json-config", title: "JSON Config", description: "JSON configuration file", icon: Braces },
    { id: "database-config", title: "Database Connection", description: "Database connection settings", icon: Database },
    { id: "auth-config", title: "Auth / API Keys", description: "Authentication configuration", icon: Lock },
    { id: "logging", title: "Logging Configuration", description: "Log level, format, output config", icon: ClipboardList },
    { id: "proxy", title: "Proxy / Network Config", description: "Proxy and network settings", icon: Globe },
  ],
  apiReference: [
    { id: "endpoints", title: "REST Endpoints", description: "API endpoint reference with methods", icon: Server },
    { id: "graphql", title: "GraphQL Schema", description: "Queries, mutations, and subscriptions", icon: Code },
    { id: "models", title: "Data Models", description: "Type definitions and schemas", icon: Braces },
    { id: "errors", title: "Error Codes", description: "HTTP status codes and error responses", icon: AlertTriangle },
    { id: "auth", title: "Authentication", description: "Auth flows and token management", icon: Lock },
    { id: "rate-limit", title: "Rate Limiting", description: "Rate limit policies and headers", icon: Activity },
    { id: "webhooks", title: "Webhooks", description: "Webhook event types and payloads", icon: Zap },
    { id: "changelog", title: "Changelog / Versioning", description: "API versioning and changelog", icon: Activity },
  ],
  contributing: [
    { id: "pr-guide", title: "PR Guidelines", description: "How to submit pull requests", icon: GitBranch },
    { id: "dev-setup", title: "Dev Setup", description: "Local development environment setup", icon: Terminal },
    { id: "code-style", title: "Code Style / Linting", description: "Coding standards and linter config", icon: Code },
    { id: "testing", title: "Testing Guide", description: "How to run and write tests", icon: CheckSquare },
    { id: "issue-tracking", title: "Issue Tracking", description: "How to report bugs and request features", icon: ClipboardList },
    { id: "code-of-conduct", title: "Code of Conduct", description: "Community behavior expectations", icon: Heart },
    { id: "maintainers", title: "Maintainers", description: "Project maintainers and core team", icon: Users },
    { id: "roadmap", title: "Roadmap", description: "Upcoming features and milestones", icon: Activity },
  ],
  license: [
    { id: "mit", title: "MIT License", description: "Permissive — free use with attribution", icon: Scale },
    { id: "apache-2", title: "Apache 2.0", description: "Permissive with patent protection", icon: Shield },
    { id: "gpl-3", title: "GPL v3", description: "Copyleft — derivative work must be GPL", icon: Lock },
    { id: "bsd-3", title: "BSD 3-Clause", description: "Permissive — no endorsement clause", icon: Scale },
    { id: "mpl-2", title: "MPL 2.0", description: "File-level copyleft license", icon: FileText },
    { id: "unlicense", title: "Unlicense / Public Domain", description: "No restrictions — public domain", icon: Heart },
    { id: "proprietary", title: "Proprietary / All Rights Reserved", description: "Closed-source, commercial license", icon: Lock },
    { id: "custom", title: "Custom License", description: "Define a custom license", icon: FileText },
  ],
};

const dict: Record<string, Record<string, string>> = {
  projectType: {
    "web-app": "A full-stack or frontend web application that users access through a browser. May include server-side rendering, static site generation, or client-side rendering. Target platform is modern web browsers.",
    api: "An API / backend service exposing endpoints via REST, GraphQL, or gRPC. Consumed by frontend applications, mobile apps, or third-party integrations. Focus on performance, documentation, and developer experience.",
    mobile: "A mobile application for iOS, Android, or cross-platform frameworks. Includes native apps (Swift, Kotlin) or cross-platform (React Native, Flutter). Covers app store deployment and mobile-specific considerations.",
    library: "A reusable package distributed via a package manager (npm, PyPI, crates.io, etc.). Consumed by other developers as a dependency. Focus on API stability, documentation, versioning, and backward compatibility.",
    cli: "A command-line interface tool for use in terminals. Consumed by developers, sysadmins, or CI/CD pipelines. Focus on argument parsing, output formatting, exit codes, and help documentation.",
    docker: "A containerized application or service deployed via Docker or Kubernetes. Focus on container build optimization, multi-stage builds, security scanning, and orchestration configuration.",
    wordpress: "A WordPress plugin or theme extending the WordPress CMS. Must follow WordPress coding standards, hooks, and best practices. Supports WordPress version compatibility and the plugin directory submission process.",
    desktop: "A desktop application built with frameworks like Electron, Tauri, or native technology. Runs on Windows, macOS, and/or Linux. Focus on native integrations, auto-updates, and cross-platform consistency.",
  },
  badges: {
    ci: "Display the current CI/CD pipeline status (passing, failing, or building). Links to the CI dashboard. Common providers: GitHub Actions, CircleCI, GitLab CI, Travis CI. Shows build reliability at a glance.",
    coverage: "Show test coverage percentage from a coverage report. Most developers aim for 80%+ coverage. Links to a detailed coverage report page. Indicates code quality and test thoroughness.",
    version: "Display the latest release version from a package registry or GitHub Releases. Automatically updates when a new version is published. Helps users quickly identify the latest stable release.",
    license: "Show the project's open-source license type. Links to the full license text. Helps users understand usage rights and obligations. Common badges: MIT, Apache 2.0, GPL v3.",
    downloads: "Display total or monthly download counts from a package registry. Shows project popularity and community adoption. Available for npm, PyPI, RubyGems, and other package managers.",
    docs: "Show the documentation build status or coverage. Links to the hosted documentation site. Ensures documentation is up-to-date and passing build checks.",
    "code-quality": "Display code quality scores from tools like CodeClimate, SonarCloud, or LGTM. Includes maintainability, reliability, and security ratings. Helps users assess codebase health.",
    dependencies: "Show dependency status: up-to-date, outdated, or vulnerable. Uses tools like Dependabot, Renovate, or Snyk. Alerts users to security vulnerabilities in the dependency tree.",
  },
  installation: {
    npm: "Provide npm, yarn, or pnpm install commands. Include required Node.js version. Add --save-dev for dev dependencies and --global for CLI tools. Show both latest and pinned version example.",
    pip: "Provide pip install commands. Include Python version requirements and virtual environment recommendations. Show installation from PyPI and optionally from GitHub directly for development versions.",
    "docker-pull": "Provide docker pull commands for the published image. Include Docker Compose example for multi-service setup. Specify supported tags (latest, version, alpine, slim).",
    brew: "Provide Homebrew install command. Include tap command if the formula is in a custom tap. Works for macOS and Linux via Homebrew. Show how to upgrade and uninstall.",
    "go-install": "Provide go install command for Go modules. Specify minimum Go version required. Show both the standard install and version-specific install with @version syntax.",
    cargo: "Provide cargo install command for Rust crates. Show installation from crates.io and optionally from GitHub. Include --features flags for optional functionality.",
    source: "Provide clone, build, and install steps from source. Include git clone command, build tool prerequisites, and build commands. Verify known working commit or tag for reproducibility.",
    curl: "Provide a one-liner curl-to-shell installer script. Include checksum verification and signature checking for security. Warn users to review scripts before executing.",
  },
  usage: {
    "quick-start": "Provide a minimal, runnable example that demonstrates the core functionality from start to finish. The quick start should take less than 5 minutes to complete. Show expected output.",
    examples: "Provide multiple code examples covering common use cases. Each example has a clear title, description, code block, and expected output. Examples increase in complexity progressively.",
    "cli-usage": "Document CLI usage with subcommands, flags, arguments, and options. Show --help output, common usage patterns, and exit codes. Include examples with piped input and output redirection.",
    "api-usage": "Show programmatic usage with code snippets in the primary supported language(s). Cover initialization, configuration, method calls, error handling, and cleanup. Include typed examples.",
    "config-file": "Show a complete configuration file example with all supported options annotated. Mark required vs optional fields. Include default values and env var overrides for each field.",
    "env-vars": "List all environment variables the project accepts. Include description, default value, required/optional status, and example value. Show how to use .env files for local development.",
    "docker-usage": "Show Docker usage with docker run command and docker-compose.yml example. Cover port mapping, volume mounts, environment variables, and health checks. Include production deployment recommendations.",
    advanced: "Cover advanced usage patterns: performance tuning, high-availability configuration, custom plugins, multi-tenancy, or complex integrations. Targeted at power users with specific needs.",
  },
  configuration: {
    "env-file": "Document environment variable configuration using .env files. List each variable with its purpose, data type, default value, and whether it's required. Include a .env.example file.",
    "config-yaml": "Document YAML or TOML configuration file format. Show the complete schema with nested sections, data types, and validation rules. Mark configs as required, optional, or environment-specific.",
    "cli-flags": "Document all CLI flags and options with their short and long forms. Include description, type, default value, and usage examples. Show common flag combinations for typical tasks.",
    "json-config": "Document JSON-based configuration with schema definitions. Show required vs optional keys, accepted value ranges, and nested object structures. Reference a JSON Schema file if one exists.",
    "database-config": "Document database connection parameters: host, port, database name, username, password, SSL mode, connection pool settings, and migration configuration. Show examples for different database engines.",
    "auth-config": "Document authentication configuration: API keys, OAuth2, JWT, session management. Cover secret management, token rotation, CORS origins, and allowed redirect URIs. Warn about security best practices.",
    logging: "Document logging configuration: log levels (debug, info, warn, error), output format (text, JSON), output destination (stdout, file, remote), and log sampling. Show structured logging examples.",
    proxy: "Document proxy and network configuration: HTTP/HTTPS proxy, no-proxy exceptions, custom CA certificates, TLS versions, and connection timeouts. Essential for enterprise deployments behind firewalls.",
  },
  apiReference: {
    endpoints: "Document all REST API endpoints with HTTP method, path, request parameters, request body schema, response body schema, and status codes. Group endpoints by resource or domain.",
    graphql: "Document the GraphQL schema with all queries, mutations, subscriptions, types, inputs, and enums. Include example queries with variables and expected response shapes. Reference the GraphQL playground URL.",
    models: "Document data models with field names, types, descriptions, constraints, and example values. Show TypeScript/JSON/OpenAPI schema representations. Include relationships between models.",
    errors: "Document all error codes with HTTP status, error code identifier, description, and resolution guidance. Show example error response bodies. Cover client errors (4xx) and server errors (5xx).",
    auth: "Document authentication flows: API key authentication, OAuth2 authorization code flow, OAuth2 client credentials, JWT token structure, token refresh, and revocation. Include curl examples.",
    "rate-limit": "Document rate limiting policies: requests per window, burst allowance, rate limit headers (X-RateLimit-Limit, Remaining, Reset), and retry-after behavior. Show how to handle 429 responses.",
    webhooks: "Document webhook event types, delivery mechanism, retry policy, payload schemas, and signature verification. Include instructions for setting up webhook endpoints and testing delivery.",
    changelog: "Document API versioning strategy (URL path versioning, header versioning, query param), changelog format, deprecation policy, and migration guides between versions. Link to the full changelog.",
  },
  contributing: {
    "pr-guide": "Document the pull request process: forking the repo, creating a feature branch, committing with conventional commits, writing tests, passing CI, and requesting review. Include PR template expectations.",
    "dev-setup": "Document how to set up a local development environment: prerequisites (language runtime, database, services), cloning, installing dependencies, configuring environment, and running the development server.",
    "code-style": "Document coding standards and conventions: linter configuration (ESLint, ruff, clippy), formatter (Prettier, black, rustfmt), naming conventions, file organization, and commit message format.",
    testing: "Document how to run the test suite and write new tests: test framework, test location conventions, mocking strategy, test data fixtures, running specific tests, and CI integration.",
    "issue-tracking": "Document how to report bugs, request features, and ask questions: issue templates, required information (OS, version, steps to reproduce), and response time expectations. Link to discussions or forums.",
    "code-of-conduct": "Include a link to the project's Code of Conduct (typically CONTRIBUTING.md or CODE_OF_CONDUCT.md). Outline expected behavior, unacceptable behavior, and enforcement reporting channels.",
    maintainers: "List current project maintainers and their roles. Include GitHub handles, areas of responsibility, and contact information (within project channels). Acknowledge past maintainers and significant contributors.",
    roadmap: "Share the project roadmap with upcoming features, planned improvements, and milestones. Link to the GitHub Projects board or roadmap issue. Invite community feedback on priorities.",
  },
  license: {
    mit: "The MIT License is a permissive license that allows users to do anything with the code with minimal restrictions. Users must include the original copyright and license notice in all copies or substantial portions.",
    "apache-2": "Apache License 2.0 is a permissive license that also provides an express grant of patent rights from contributors. Requires preservation of the copyright notice and disclaimer in documentation.",
    "gpl-3": "GNU GPL v3 is a strong copyleft license. Anyone who distributes the code or a derivative work must make the source available under the same license terms. Provides patent protection and anti-tivoization clauses.",
    "bsd-3": "BSD 3-Clause is a permissive license similar to MIT but with an additional clause prohibiting the use of project contributors' names for endorsement of derived products without permission.",
    "mpl-2": "Mozilla Public License 2.0 is a weak copyleft license. Modified files must be made available under MPL, but larger works can GitBranch MPL-covered code with code under other licenses.",
    unlicense: "The Unlicense dedicates the work to the public domain with no restrictions. Users are free to use, modify, and distribute the code without any conditions, including attribution.",
    proprietary: "All Rights Reserved — the code is proprietary and not licensed for use, modification, or distribution by others. A commercial license may be available from the copyright holder.",
    custom: "Define a custom license that specifies the exact terms of use, modification, distribution, and any restrictions. Consult with legal counsel to ensure the custom license is enforceable and clear.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const projectType = selections.step1;
  const badges: string[] = selections.step2 || [];
  const installation = selections.step3;
  const usage = selections.step4;
  const configuration = selections.step5;
  const apiReference: string[] = selections.step6 || [];
  const contributing: string[] = selections.step7 || [];
  const license = selections.step8;

  const lines: string[] = [];

  const ptLabel = Array.isArray(projectType) ? projectType.map(id => options.projectType.find(o => o.id === id)?.title || id).join(", ") : options.projectType.find(o => o.id === projectType)?.title || "Project";
  lines.push(`# ${ptLabel}`);
  lines.push("");
  lines.push("<!-- Insert a brief description of your project here -->");
  lines.push("");
  if (badges.length > 0) {
    const badgeLabels = badges.map(id => options.badges.find(o => o.id === id)?.title || id);
    lines.push("<!-- Badges -->");
    for (const b of badgeLabels) {
      lines.push(`[![${b}](https://img.shields.io/badge/${b.replace(/\s+/g, "_")}-blue)]()`);
    }
    lines.push("");
  }
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const ptNote = notes[`projectType-${projectType}`] || "";
  lines.push(`| Project Type | ${ptLabel} | ${ptNote}`);
  const bLabels = badges.map(id => options.badges.find(o => o.id === id)?.title || id).join(", ");
  const bNotes = badges.map(id => notes[`badges-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Badges | ${bLabels || "None"} | ${bNotes}`);
  const iLabel = Array.isArray(installation) ? installation.map(id => options.installation.find(o => o.id === id)?.title || id).join(", ") : options.installation.find(o => o.id === installation)?.title || installation;
  const iNote = notes[`installation-${installation}`] || "";
  lines.push(`| Installation | ${iLabel} | ${iNote}`);
  const uLabel = Array.isArray(usage) ? usage.map(id => options.usage.find(o => o.id === id)?.title || id).join(", ") : options.usage.find(o => o.id === usage)?.title || usage;
  const uNote = notes[`usage-${usage}`] || "";
  lines.push(`| Usage | ${uLabel} | ${uNote}`);
  const cLabel = Array.isArray(configuration) ? configuration.map(id => options.configuration.find(o => o.id === id)?.title || id).join(", ") : options.configuration.find(o => o.id === configuration)?.title || configuration;
  const cNote = notes[`configuration-${configuration}`] || "";
  lines.push(`| Configuration | ${cLabel} | ${cNote}`);
  const arLabels = apiReference.map(id => options.apiReference.find(o => o.id === id)?.title || id).join(", ");
  const arNotes = apiReference.map(id => notes[`apiReference-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| API Reference | ${arLabels || "None"} | ${arNotes}`);
  const coLabels = contributing.map(id => options.contributing.find(o => o.id === id)?.title || id).join(", ");
  const coNotes = contributing.map(id => notes[`contributing-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Contributing | ${coLabels || "None"} | ${coNotes}`);
  const lLabel = Array.isArray(license) ? license.map(id => options.license.find(o => o.id === id)?.title || id).join(", ") : options.license.find(o => o.id === license)?.title || license;
  const lNote = notes[`license-${license}`] || "";
  lines.push(`| License | ${lLabel} | ${lNote}`);
  lines.push("");

  lines.push("## Description");
  lines.push("");
  lines.push("<!-- Provide a detailed description of your project -->");
  lines.push("");
  if (projectType) {
    lines.push("### Project Type: " + ptLabel);
    lines.push("");
    lines.push(Array.isArray(projectType) ? projectType.map(v => dict.projectType[v] || v).join(", ") : dict.projectType[projectType] || projectType);
    lines.push("");
  }

  lines.push("## Features");
  lines.push("");
  lines.push("- Feature 1: <!-- Description -->");
  lines.push("- Feature 2: <!-- Description -->");
  lines.push("- Feature 3: <!-- Description -->");
  lines.push("");

  if (installation) {
    lines.push("## Installation");
    lines.push("");
    lines.push("### Method: " + iLabel);
    lines.push("");
    lines.push(Array.isArray(installation) ? installation.map(v => dict.installation[v] || v).join(", ") : dict.installation[installation] || installation);
    lines.push("");
    lines.push("```bash");
    if (installation === "npm") lines.push("npm install your-package");
    else if (installation === "pip") lines.push("pip install your-package");
    else if (installation === "docker-pull") lines.push("docker pull your-image");
    else if (installation === "brew") lines.push("brew install your-package");
    else if (installation === "go-install") lines.push("go install your-package@latest");
    else if (installation === "cargo") lines.push("cargo install your-crate");
    else if (installation === "source") lines.push("git clone https://github.com/user/repo.git");
    else if (installation === "curl") lines.push("curl -sSL https://example.com/install.sh | bash");
    else lines.push("# Installation command here");
    lines.push("```");
    lines.push("");
  }

  if (usage) {
    lines.push("## Usage");
    lines.push("");
    lines.push("### " + uLabel);
    lines.push("");
    lines.push(Array.isArray(usage) ? usage.map(v => dict.usage[v] || v).join(", ") : dict.usage[usage] || usage);
    lines.push("");
    lines.push("```");
    if (usage === "cli-usage") {
      lines.push("# Basic usage");
      lines.push("$ your-command --help");
      lines.push("");
      lines.push("# Common examples");
      lines.push("$ your-command run --option value");
    } else {
      lines.push("// Example code here");
      lines.push("const result = yourFunction(input);");
      lines.push("console.log(result);");
    }
    lines.push("```");
    lines.push("");
  }

  if (configuration) {
    lines.push("## Configuration");
    lines.push("");
    lines.push("### " + cLabel);
    lines.push("");
    lines.push(Array.isArray(configuration) ? configuration.map(v => dict.configuration[v] || v).join(", ") : dict.configuration[configuration] || configuration);
    lines.push("");
    lines.push("```");
    if (configuration === "env-file") {
      lines.push("DATABASE_URL=postgres://user:pass@localhost:5432/db");
      lines.push("API_KEY=your-api-key");
      lines.push("LOG_LEVEL=info");
    } else if (configuration === "config-yaml") {
      lines.push("server:");
      lines.push("  port: 8080");
      lines.push("  host: 0.0.0.0");
      lines.push("database:");
      lines.push("  url: postgres://localhost:5432/db");
    } else {
      lines.push("// Configuration example");
    }
    lines.push("```");
    lines.push("");
  }

  if (apiReference.length > 0) {
    lines.push("## API Reference");
    lines.push("");
    for (const arId of apiReference) {
      const label = options.apiReference.find(o => o.id === arId)?.title || arId;
      lines.push("### " + label);
      lines.push("");
      lines.push(dict.apiReference[arId] || "");
      lines.push("");
    }
  }

  if (contributing.length > 0) {
    lines.push("## Contributing");
    lines.push("");
    for (const coId of contributing) {
      const label = options.contributing.find(o => o.id === coId)?.title || coId;
      lines.push("### " + label);
      lines.push("");
      lines.push(dict.contributing[coId] || "");
      lines.push("");
    }
  }

  if (license) {
    lines.push("## License");
    lines.push("");
    lines.push("### " + lLabel);
    lines.push("");
    lines.push(Array.isArray(license) ? license.map(v => dict.license[v] || v).join(", ") : dict.license[license] || license);
    lines.push("");
    if (license === "mit") {
      lines.push("```");
      lines.push("MIT License");
      lines.push("");
      lines.push("Copyright (c) " + new Date().getFullYear() + " [Your Name]");
      lines.push("");
      lines.push("Permission is hereby granted, free of charge, to any person...");
      lines.push("```");
    } else if (license === "apache-2") {
      lines.push("```");
      lines.push("Apache License");
      lines.push("Version 2.0, January 2004");
      lines.push("http://www.apache.org/licenses/");
      lines.push("```");
    } else if (license === "gpl-3") {
      lines.push("```");
      lines.push("GNU GENERAL PUBLIC LICENSE");
      lines.push("Version 3, 29 June 2007");
      lines.push("```");
    } else {
      lines.push("<!-- License text here -->");
    }
    lines.push("");
  }

  lines.push("## Additional Information");
  lines.push("");
  lines.push("### Tech Stack");
  lines.push("");
  lines.push("| Technology | Purpose");
  lines.push("|------------|--------");
  lines.push("| <!-- Tech --> | <!-- Purpose -->");
  lines.push("| <!-- Tech --> | <!-- Purpose -->");
  lines.push("");

  lines.push("### Project Structure");
  lines.push("");
  lines.push("```");
  lines.push(".");
  lines.push("├── src/");
  lines.push("│   ├── main/");
  lines.push("│   ├── utils/");
  lines.push("│   └── types/");
  lines.push("├── tests/");
  lines.push("├── docs/");
  lines.push("├── examples/");
  lines.push("├── package.json");
  lines.push("└── README.md");
  lines.push("```");
  lines.push("");

  lines.push("### Support");
  lines.push("");
  lines.push("- GitHub Issues: [Link](https://github.com/user/repo/issues)");
  lines.push("- Documentation: [Link](https://docs.example.com)");
  lines.push("- Discord / Slack: [Invite Link](https://discord.gg/example)");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by README Generator_");

  return lines.join("\n");
}

export default function ReadmeGenPage() {
  return (
    <ToolShell
      title="README Generator"
      steps={[
        { id: 1, label: "Project Type", component: (p) => (
          <GenericStep {...p} title="Select Project Type" description="What kind of project is this?" options={options.projectType} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="projectType" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Badges", component: (p) => (
          <GenericStep {...p} title="Badges" description="Which badges to include in the header?" options={options.badges} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="badges" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Installation", component: (p) => (
          <GenericStep {...p} title="Installation Method" description="How do users install this project?" options={options.installation} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="installation" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Usage", component: (p) => (
          <GenericStep {...p} title="Usage Section" description="What type of usage docs to include?" options={options.usage} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="usage" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Configuration", component: (p) => (
          <GenericStep {...p} title="Configuration" description="What configuration docs are needed?" options={options.configuration} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="configuration" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "API Reference", component: (p) => (
          <GenericStep {...p} title="API Reference" description="What API docs to include?" options={options.apiReference} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="apiReference" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Contributing", component: (p) => (
          <GenericStep {...p} title="Contributing Guide" description="What contributing sections to include?" options={options.contributing} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="contributing" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "License", component: (p) => (
          <GenericStep {...p} title="License" description="Which license applies to this project?" options={options.license} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="license" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}










