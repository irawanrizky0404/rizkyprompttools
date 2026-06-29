import type { WizardSelections } from "@/types/wizard";
import { dictionary } from "./dictionary";

export function generateMarkdownPrompt(selections: WizardSelections): string {
  const sections: string[] = [];
  const n = (key: string) => selections.notes[key] ?? "";
  const nl = (key: string) => {
    const text = n(key);
    return text ? `\n\n> **Additional Notes:** ${text}` : "";
  };

  const title = getProjectTitle(selections);

  sections.push(`# ${title}`);
  sections.push("");
  sections.push("> **Generated Blueprint** — A comprehensive system prompt and technical specification for building your project.");
  sections.push("");
  sections.push("---");
  sections.push("");

  // ── 1. ROLE & CONTEXT ──
  sections.push("## 1. Role & Context");
  sections.push("");
  sections.push("### 1.1 Your Role");
  sections.push("");
  sections.push("You are a Senior Full-Stack Software Engineer and Technical Architect. You are responsible for designing, implementing, and delivering a production-grade software system that follows industry best practices. You write clean, maintainable, and scalable code. You make deliberate technical decisions based on the project's requirements, constraints, and team needs.");
  sections.push("");

  const typeInfo = dictionary.type[selections.type as keyof typeof dictionary.type];
  if (typeInfo) {
    sections.push("### 1.2 Project Type");
    sections.push("");
    sections.push(typeInfo);
    sections.push(nl(`type-${selections.type}`));
    sections.push("");
  }

  const industryInfo = dictionary.industry[selections.industry as keyof typeof dictionary.industry];
  if (industryInfo) {
    sections.push("### 1.3 Industry Context");
    sections.push("");
    sections.push(industryInfo);
    sections.push(nl(`industry-${selections.industry}`));
    sections.push("");
  }

  sections.push("### 1.4 Key Responsibilities");
  sections.push("");
  const responsibilities = [
    "Design and implement the complete application architecture following clean architecture principles",
    "Write well-typed TypeScript code with strict mode enabled and explicit return types on all functions",
    "Implement proper error handling with custom error classes, error boundaries, and graceful degradation",
    "Ensure WCAG 2.1 AA accessibility compliance with semantic HTML, ARIA labels, keyboard navigation, and screen reader support",
    "Optimize for Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1) using code splitting, lazy loading, caching, and CDN delivery",
    "Implement comprehensive testing: unit tests (vitest/jest), integration tests (supertest/msgy), component tests (testing-library), and E2E tests (Playwright/Cypress)",
    "Write clear documentation for APIs, components, architecture decisions (ADRs), and deployment procedures",
    "Follow security best practices: input validation, output encoding, CSP headers, rate limiting, SQL injection prevention, and CSRF protection",
    "Implement monitoring, logging (structured JSON), and observability with OpenTelemetry for distributed tracing",
  ];
  for (const r of responsibilities) {
    sections.push(`- ${r}`);
  }
  sections.push("");

  // ── 2. TECHNICAL STACK ──
  sections.push("---");
  sections.push("");
  sections.push("## 2. Technical Stack");
  sections.push("");
  sections.push("### 2.1 Frontend Architecture");
  sections.push("");
  sections.push("| Layer | Technology | Rationale |");
  sections.push("|-------|-----------|----------|");
  sections.push("| **Framework** | Next.js 16 (App Router) + TypeScript | SSR, SSG, ISR capabilities; file-based routing; React Server Components; Turbopack by default |");
  sections.push("| **Styling** | Tailwind CSS v4 + CSS Variables | Utility-first; CSS-first configuration with @theme; dark mode via class strategy; custom design tokens |");
  sections.push("| **State Management** | Zustand | Lightweight (< 2KB); no boilerplate; middleware support (persist, devtools); type-safe |");
  sections.push("| **Icons** | Lucide React | Tree-shakeable; consistent design language; accessible with aria-hidden |");
  sections.push("| **Component Library** | Custom Shadcn-style primitives | Accessible (Radix-based); composable; unstyled with Tailwind |");
  sections.push("");

  if (selections.database.primary || selections.database.orm) {
    sections.push("### 2.2 Backend & Data Layer");
    sections.push("");
    sections.push("| Component | Technology | Purpose |");
    sections.push("|-----------|-----------|---------|");
    if (selections.database.primary) {
      const dbInfo = dictionary.database.primary[selections.database.primary as keyof typeof dictionary.database.primary];
      if (dbInfo) sections.push(`| **Database** | ${dbInfo.split(".")[0]} | Primary data store |`);
    }
    if (selections.database.orm) {
      const ormInfo = dictionary.database.orm[selections.database.orm as keyof typeof dictionary.database.orm];
      if (ormInfo) sections.push(`| **ORM/ODM** | ${ormInfo.split(".")[0]} | Data access layer |`);
    }
    sections.push("| **API Layer** | Next.js Route Handlers | Server endpoints with validation |");
    sections.push("| **Validation** | Zod | Schema validation for API inputs |");
    sections.push("| **Caching** | SWR / React Cache | Client and server caching strategies |");
    sections.push("");
  }

  if (selections.deploy.platform) {
    sections.push("### 2.3 Infrastructure & DevOps");
    sections.push("");
    sections.push("| Component | Technology |");
    sections.push("|-----------|-----------|");
    const deployInfo = dictionary.deploy.platforms[selections.deploy.platform as keyof typeof dictionary.deploy.platforms];
    if (deployInfo) sections.push(`| **Hosting** | ${deployInfo.split(".")[0]} |`);
    sections.push("| **CI/CD** | GitHub Actions | Automated test, build, deploy pipeline |");
    sections.push("| **Monitoring** | Sentry + OpenTelemetry | Error tracking and observability |");
    sections.push("| **Analytics** | PostHog / Plausible | Privacy-focused product analytics |");
    sections.push("");
  }

  // ── 3. AUTHENTICATION & SECURITY ──
  if (selections.auth.method.length > 0) {
    sections.push("---");
    sections.push("");
    sections.push("## 3. Authentication & Security");
    sections.push("");

    sections.push("### 3.1 Authentication Methods");
    sections.push("");
    for (const method of selections.auth.method) {
      const methodInfo = dictionary.auth.methods[method as keyof typeof dictionary.auth.methods];
      if (methodInfo) {
        sections.push(`**${capitalize(method)}**`);
        sections.push("");
        sections.push(methodInfo);
        sections.push(nl(`auth-method-${method}`));
        sections.push("");
      }
    }

    if (selections.auth.providers.length > 0) {
      sections.push("### 3.2 OAuth Providers");
      sections.push("");
      sections.push("| Provider | Implementation Details |");
      sections.push("|----------|----------------------|");
      for (const provider of selections.auth.providers) {
        const info = dictionary.auth.providers[provider as keyof typeof dictionary.auth.providers];
        const note = nl(`auth-provider-${provider}`);
        if (info) {
          sections.push(`| **${capitalize(provider)}** | ${info}${note ? " " + note.trim() : ""} |`);
        }
      }
      sections.push("");
    }

    sections.push("### 3.3 Security Requirements");
    sections.push("");
    const securityReqs = [
      "All passwords (if any) must be hashed with bcrypt (cost factor 12+) or argon2id",
      "Session tokens stored in HTTP-only, Secure, SameSite=Strict cookies",
      "CSRF protection via double-submit cookie pattern or SameSite cookies",
      "Rate limiting on auth endpoints (5 attempts/minute per IP, 3 OTP requests/hour per phone)",
      "Account lockout after 5 failed attempts with exponential backoff",
      "All API responses must include appropriate CORS headers",
      "Implement Content Security Policy (CSP) headers with strict directives",
      "All sensitive data encrypted at rest (AES-256) and in transit (TLS 1.3)",
      "Input sanitization to prevent XSS and injection attacks",
      "Security headers: X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy",
    ];
    for (const req of securityReqs) {
      sections.push(`- ${req}`);
    }
    sections.push("");
  }

  // ── 4. FEATURES ──
  if (selections.features.length > 0) {
    sections.push("---");
    sections.push("");
    sections.push("## 4. Features & Functionality");
    sections.push("");
    sections.push(`The system includes **${selections.features.length} feature(s)** as detailed below.`);
    sections.push("");

    for (const feature of selections.features) {
      const info = dictionary.features[feature as keyof typeof dictionary.features];
      if (info) {
        sections.push(`### 4.${selections.features.indexOf(feature) + 1} ${formatFeatureName(feature)}`);
        sections.push("");
        sections.push(info);
        sections.push(nl(`features-${feature}`));
        sections.push("");
        sections.push("**Implementation Checklist:**");
        sections.push("- [ ] Design data models and database schema");
        sections.push("- [ ] Implement API endpoints with validation");
        sections.push("- [ ] Build UI components with loading states");
        sections.push("- [ ] Add error handling and edge cases");
        sections.push("- [ ] Write unit and integration tests");
        sections.push("- [ ] Add instrumentation for monitoring");
        sections.push("");
      }
    }
  }

  // ── 5. DATA MODELING ──
  sections.push("---");
  sections.push("");
  sections.push("## 5. Data Modeling & Storage");
  sections.push("");

  if (selections.database.primary) {
    const dbInfo = dictionary.database.primary[selections.database.primary as keyof typeof dictionary.database.primary];
    if (dbInfo) {
      sections.push("### 5.1 Database Architecture");
      sections.push("");
      sections.push(dbInfo);
      sections.push(nl(`db-primary-${selections.database.primary}`));
      sections.push("");
    }
  }

  if (selections.database.orm) {
    const ormInfo = dictionary.database.orm[selections.database.orm as keyof typeof dictionary.database.orm];
    if (ormInfo) {
      sections.push("### 5.2 ORM / Data Access");
      sections.push("");
      sections.push(ormInfo);
      sections.push(nl(`db-orm-${selections.database.orm}`));
      sections.push("");
    }
  }

  sections.push("### 5.3 Data Modeling Principles");
  sections.push("");
  const dataPrinciples = [
    "Define clear entity relationships with proper foreign keys and indexes",
    "Use migrations for all schema changes (version-controlled)",
    "Implement soft deletes (deleted_at timestamp) where appropriate",
    "Add created_at, updated_at timestamps to all tables",
    "Use UUIDs for primary keys to avoid enumeration attacks",
    "Implement audit columns (created_by, updated_by) for accountability",
    "Use database-level constraints for data integrity (CHECK, UNIQUE, NOT NULL)",
    "Implement proper indexing strategy based on query patterns",
    "Use connection pooling for efficient database connection management",
    "Implement data archival and cleanup strategies for large tables",
  ];
  for (const p of dataPrinciples) {
    sections.push(`- ${p}`);
  }
  sections.push("");

  // ── 6. DESIGN SYSTEM ──
  sections.push("---");
  sections.push("");
  sections.push("## 6. Design System");
  sections.push("");
  sections.push("### 6.1 Visual Style");
  sections.push("");
  if (selections.design.style) {
    const styleInfo = dictionary.design.styles[selections.design.style as keyof typeof dictionary.design.styles];
    if (styleInfo) {
      sections.push(styleInfo);
      sections.push(nl(`design-style-${selections.design.style}`));
    }
  }
  sections.push("");

  sections.push("### 6.2 Color System");
  sections.push("");
  if (selections.design.colorScheme) {
    const colorInfo = dictionary.design.colors[selections.design.colorScheme as keyof typeof dictionary.design.colors];
    if (colorInfo) {
      sections.push(colorInfo);
      sections.push(nl(`design-color-${selections.design.colorScheme}`));
    }
  } else {
    sections.push("Implement a dark mode color scheme with deep backgrounds (#0a0a0f) and light text (#f8fafc). Accent colors (cyan/blue, hex #06b6d4) for interactive elements. Use HSL CSS variables for theming flexibility. Ensure WCAG AA contrast ratios throughout.");
  }
  sections.push("");

  sections.push("### 6.3 Typography");
  sections.push("");
  if (selections.design.typography) {
    const typeInfo = dictionary.design.typography[selections.design.typography as keyof typeof dictionary.design.typography];
    if (typeInfo) {
      sections.push(typeInfo);
      sections.push(nl(`design-typography-${selections.design.typography}`));
    }
  } else {
    sections.push("Use Inter as the primary sans-serif font with appropriate weight hierarchy (400 body, 600 headings, 700 display). Line-height: 1.5 for body, 1.2 for headings. Optimize for screen readability.");
  }
  sections.push("");

  sections.push("### 6.4 Component Design Tokens");
  sections.push("");
  sections.push("```css");
  sections.push("/* Core Design Tokens */");
  sections.push("--radius-sm: 0.375rem;   /* 6px — small elements */");
  sections.push("--radius-md: 0.5rem;     /* 8px — buttons, inputs */");
  sections.push("--radius-lg: 0.75rem;    /* 12px — cards, modals */");
  sections.push("--radius-xl: 1rem;       /* 16px — large containers */");
  sections.push("--shadow-sm: 0 1px 2px rgb(0 0 0 / 0.3);");
  sections.push("--shadow-md: 0 4px 6px rgb(0 0 0 / 0.4);");
  sections.push("--shadow-lg: 0 10px 15px rgb(0 0 0 / 0.5);");
  sections.push("--transition-fast: 150ms ease-out;");
  sections.push("--transition-normal: 200ms ease-out;");
  sections.push("--transition-slow: 300ms ease-in-out;");
  sections.push("```");
  sections.push("");

  // ── 7. DEPLOYMENT ──
  sections.push("---");
  sections.push("");
  sections.push("## 7. Deployment & Operations");
  sections.push("");

  if (selections.deploy.platform) {
    const platInfo = dictionary.deploy.platforms[selections.deploy.platform as keyof typeof dictionary.deploy.platforms];
    if (platInfo) {
      sections.push("### 7.1 Deployment Architecture");
      sections.push("");
      sections.push(platInfo);
      sections.push(nl(`deploy-platform-${selections.deploy.platform}`));
      sections.push("");
    }
  }

  if (selections.deploy.ciCd.length > 0) {
    sections.push("### 7.2 CI/CD Pipeline");
    sections.push("");
    for (const tool of selections.deploy.ciCd) {
      const info = dictionary.deploy.ciCd[tool as keyof typeof dictionary.deploy.ciCd];
      if (info) {
        sections.push(`**${formatFeatureName(tool)}**`);
        sections.push("");
        sections.push(info);
        sections.push(nl(`deploy-cicd-${tool}`));
        sections.push("");
      }
    }
  }

  sections.push("### 7.3 Pipeline Stages");
  sections.push("");
  sections.push("```yaml");
  sections.push("# CI/CD Pipeline Overview");
  sections.push("stages:");
  sections.push("  - lint:       ESLint + Prettier + TypeScript type-check");
  sections.push("  - test:       Unit tests + Integration tests + Component tests");
  sections.push("  - build:      Production build with Turbopack");
  sections.push("  - e2e:        Playwright/Cypress end-to-end tests");
  sections.push("  - deploy:     Deploy to production/staging environment");
  sections.push("  - health:     Smoke tests + health check verification");
  sections.push("```");
  sections.push("");

  sections.push("### 7.4 Environment Strategy");
  sections.push("");
  sections.push("| Environment | Purpose | URL Pattern |");
  sections.push("|-------------|---------|-------------|");
  sections.push("| `development` | Local development | `localhost:3000` |");
  sections.push("| `staging` | QA and integration testing | `staging.example.com` |");
  sections.push("| `production` | Live customer-facing | `example.com` |");
  sections.push("| Preview (PR) | Per-PR deployment | `pr-123.preview.example.com` |");
  sections.push("");

  // ── 8. AI CONFIGURATION ──
  if (selections.ai.provider) {
    sections.push("---");
    sections.push("");
    sections.push("## 8. AI & LLM Configuration");
    sections.push("");

    const providerInfo = dictionary.ai.providers[selections.ai.provider as keyof typeof dictionary.ai.providers];
    if (providerInfo) {
      sections.push("### 8.1 AI Provider");
      sections.push("");
      sections.push(providerInfo);
      sections.push(nl(`ai-provider-${selections.ai.provider}`));
      sections.push("");
    }

    if (selections.ai.model) {
      const modelInfo = dictionary.ai.models[selections.ai.model as keyof typeof dictionary.ai.models];
      if (modelInfo) {
        sections.push("### 8.2 Model Selection");
        sections.push("");
        sections.push(modelInfo);
        sections.push(nl(`ai-model-${selections.ai.model}`));
        sections.push("");
      }
    }

    if (selections.ai.temperature) {
      const tempInfo = dictionary.ai.temperature[selections.ai.temperature as keyof typeof dictionary.ai.temperature];
      if (tempInfo) {
        sections.push("### 8.3 Generation Parameters");
        sections.push("");
        sections.push(tempInfo);
        sections.push(nl(`ai-temperature-${selections.ai.temperature}`));
        sections.push("");
      }
    }

    sections.push("### 8.4 Prompt Engineering Guidelines");
    sections.push("");
    const promptGuide = [
      "Use clear, specific instructions with examples where possible",
      "Define the output format explicitly (Markdown structure, JSON schema, etc.)",
      "Include context and background information relevant to the task",
      "Use positive instructions (what to do) rather than negative (what not to do)",
      "Break complex tasks into smaller, sequential steps",
      "Include constraints: length, tone, audience, style",
      "Use few-shot examples for formatting guidance",
      "Implement chain-of-thought prompting for reasoning tasks",
      "Handle edge cases with explicit fallback instructions",
      "Version control prompts alongside code for traceability",
    ];
    for (const g of promptGuide) {
      sections.push(`- ${g}`);
    }
    sections.push("");
  }

  // ── 9. QUALITY & CONSTRAINTS ──
  sections.push("---");
  sections.push("");
  sections.push("## 9. Quality Standards & Constraints");
  sections.push("");

  sections.push("### 9.1 Code Quality");
  sections.push("");
  const codeQuality = [
    "TypeScript strict mode enabled with no unchecked indexed access",
    "ESLint with @typescript-eslint rules, prettier for formatting",
    "No `any` types — use `unknown` with type guards when type is uncertain",
    "All functions must have explicit return types",
    "Components must be typed with proper props interfaces",
    "Import order: React/Next → Third-party → Components → Utils → Types",
    "Maximum function length: 50 lines (excluding tests)",
    "Maximum file length: 300 lines",
    "Naming: PascalCase for components/types, camelCase for functions/variables, SCREAMING_SNAKE for constants",
  ];
  for (const q of codeQuality) {
    sections.push(`- ${q}`);
  }
  sections.push("");

  sections.push("### 9.2 Performance Budget");
  sections.push("");
  const perfBudget = [
    "LCP (Largest Contentful Paint): < 2.5 seconds",
    "FID (First Input Delay): < 100 milliseconds",
    "CLS (Cumulative Layout Shift): < 0.1",
    "TTI (Time to Interactive): < 3.5 seconds",
    "First JS bundle: < 100 KB (gzipped)",
    "Total page weight: < 500 KB (gzipped)",
    "API response time (p95): < 200ms",
    "Database query time (p95): < 50ms",
  ];
  for (const p of perfBudget) {
    sections.push(`- ${p}`);
  }
  sections.push("");

  sections.push("### 9.3 Testing Requirements");
  sections.push("");
  const testingReqs = [
    "Unit tests: > 80% code coverage for business logic",
    "Integration tests: All API endpoints tested with valid and invalid inputs",
    "Component tests: All interactive components tested (click, type, focus)",
    "E2E tests: Critical user flows (auth, CRUD, checkout if applicable)",
    "Accessibility tests: Automated aXe/Pa11y checks per page",
    "Performance tests: Lighthouse CI with budgets",
  ];
  for (const t of testingReqs) {
    sections.push(`- ${t}`);
  }
  sections.push("");

  sections.push("### 9.4 Accessibility");
  sections.push("");
  const a11y = [
    "WCAG 2.1 AA compliance minimum (AAA preferred for public services)",
    "All interactive elements must be keyboard accessible",
    "Proper heading hierarchy (h1 → h6, no skipping levels)",
    "ARIA labels for icon-only buttons and complex widgets",
    "Color contrast ratio: 4.5:1 for normal text, 3:1 for large text",
    "Focus indicators visible on all interactive elements",
    "Form inputs associated with labels (htmlFor/aria-labelledby)",
    "Images must have alt text (decorative images: alt='')",
    "Error messages associated with inputs via aria-describedby",
    "Support prefers-reduced-motion for animations",
  ];
  for (const a of a11y) {
    sections.push(`- ${a}`);
  }
  sections.push("");

  sections.push("---");
  sections.push("");
  sections.push("> **Blueprint generated on:** " + new Date().toISOString().split("T")[0]);
  sections.push("> **Status:** Ready for implementation");
  sections.push("> **Next steps:** Review this blueprint, set up the development environment, and begin implementation following the architecture outlined above.");

  return sections.join("\n");
}

function getProjectTitle(selections: WizardSelections): string {
  const typeName = selections.type ? formatFeatureName(selections.type) : "Web Application";
  const industryName = selections.industry ? formatFeatureName(selections.industry) : "General";
  return `System Prompt Blueprint: ${typeName} — ${industryName}`;
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function formatFeatureName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
