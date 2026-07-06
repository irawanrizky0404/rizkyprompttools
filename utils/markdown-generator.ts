import type { WizardSelections } from "@/types/wizard";
import { dictionary } from "./dictionary";
import { en, id } from "./translations";

export function generateMarkdownPrompt(selections: WizardSelections): string {
  const lang = selections.ai?.language === "id" ? id : en;
  const sections: string[] = [];
  const n = (key: string) => selections.notes[key] ?? "";
  const nl = (key: string) => {
    const text = n(key);
    return text ? `\n\n> **Additional Notes:** ${text}` : "";
  };

  const title = getProjectTitle(selections);

  sections.push(`# ${title}`);
  sections.push("");
  const subtitle = lang === id ? "> **Cetak Biru System Prompt** — Spesifikasi teknis komprehensif untuk membangun proyek Anda." : "> **Generated Blueprint** — A comprehensive system prompt and technical specification for building your project.";
  sections.push(subtitle);
  sections.push("");
  sections.push("---");
  sections.push("");

  // ── 1. ROLE & CONTEXT ──
  sections.push(lang.role);
  sections.push("");
  sections.push("### 1.1 " + (lang === id ? "Peran Anda" : "Your Role"));
  sections.push("");
  sections.push(lang.roleText);
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

  sections.push("### 1.4 " + (lang === id ? "Tanggung Jawab Utama" : "Key Responsibilities"));
  sections.push("");
  for (const r of lang.responsibilities) {
    sections.push(`- ${r}`);
  }
  sections.push("");

  // ── 2. TECHNICAL STACK ──
  sections.push("---");
  sections.push("");
  sections.push(lang.techStack);
  sections.push("");
  sections.push(lang.frontend);
  sections.push("");
  sections.push(lang.tableHeader);
  sections.push(lang.tableSep);
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

  // ── 3. ARCHITECTURE DECISION RECORDS ──
  sections.push("---");
  sections.push("");
  sections.push("## 3. Architecture Decision Records");
  sections.push("");
  sections.push("The following Architecture Decision Records (ADRs) document key technical choices, their context, rationale, and consequences. These records serve as a reference for onboarding, audits, and future architectural evolution.");
  sections.push("");

  // ADR-001
  sections.push("### ADR-001: Framework & Rendering Strategy");
  sections.push("");
  sections.push("**Context:** The project requires a modern web framework that supports server-side rendering (SSR) for SEO, static site generation (SSG) for performance, and API route handling for backend integration. The frontend must be maintainable and scalable across multiple developers.");
  sections.push("");
  sections.push("**Decision:** Adopt Next.js 16 with the App Router, React Server Components (RSC), and Turbopack as the build tool.");
  sections.push("");
  sections.push("**Consequences:**");
  sections.push("- Server Components reduce client-side JavaScript by rendering data-fetching and layout logic on the server");
  sections.push("- File-based routing in the App Router simplifies navigation and route group management");
  sections.push("- Route Handlers can be co-located with pages, enabling full-stack development within a single codebase");
  sections.push("- Turbopack provides sub-second HMR in development and optimized tree-shaking in production builds");
  sections.push("- The team must learn RSC patterns and the 'use client' / 'use server' convention");
  sections.push("- Migration from Pages Router requires careful route-by-route planning for existing projects");
  sections.push("");

  // ADR-002
  sections.push("### ADR-002: Styling & Design System");
  sections.push("");
  sections.push("**Context:** The application needs a consistent, maintainable styling approach that supports theming, responsive design, and accessibility. The solution should minimize CSS bundle size and enable rapid UI development.");
  sections.push("");
  sections.push("**Decision:** Use Tailwind CSS v4 with CSS-first configuration, CSS variables for theming, and a custom Shadcn-style component library built on Radix primitives.");
  sections.push("");
  sections.push("**Consequences:**");
  sections.push("- Tailwind's utility-first approach eliminates context-switching between HTML and CSS files");
  sections.push("- CSS variables with `@theme` enable runtime theme switching (light/dark/custom) without JavaScript");
  sections.push("- Radix-based primitives provide built-in accessibility (keyboard navigation, ARIA, focus management)");
  sections.push("- Component duplication is minimized through a shared design token system (spacing, radii, shadows, transitions)");
  sections.push("- Bundle size is kept small through Tailwind's JIT compiler that generates only used styles");
  sections.push("");

  // ADR-003
  if (selections.database.primary) {
    const dbName = fmt(selections.database.primary);
    sections.push("### ADR-003: Database Selection");
    sections.push("");
    sections.push(`**Context:** The application requires a reliable, scalable data store that supports the data models, query patterns, and transactional requirements of a ${getProjectType(selections)} project.`);
    sections.push("");
    sections.push(`**Decision:** Use ${dbName} as the primary database.`);
    if (selections.database.orm) {
      const ormName = fmt(selections.database.orm);
      sections.push(`**Data Access Layer:** Use ${ormName} for type-safe database access, schema migrations, and query building.`);
    }
    sections.push("");
    sections.push("**Consequences:**");
    sections.push("- All schema changes must go through version-controlled migrations with rollback plans");
    sections.push("- Connection pooling is required for production deployments to handle concurrent requests efficiently");
    sections.push("- Query performance must be validated with EXPLAIN plans and indexing strategies during development");
    sections.push("- Backup and point-in-time recovery procedures must be configured before production launch");
    sections.push("- Read replicas should be considered for read-heavy workloads to distribute query load");
    sections.push("");
  }

  // ADR-004
  if (selections.auth.method.length > 0) {
    const authMethods = selections.auth.method.map((m) => formatFeatureName(m)).join(", ");
    sections.push("### ADR-004: Authentication Architecture");
    sections.push("");
    sections.push(`**Context:** The application requires secure user authentication with support for ${authMethods}. The solution must protect user data, prevent unauthorized access, and provide a seamless login experience.`);
    sections.push("");
    sections.push(`**Decision:** Implement ${authMethods} with session management via HTTP-only cookies, CSRF protection, and rate-limited auth endpoints.`);
    if (selections.auth.providers.length > 0) {
      const providers = selections.auth.providers.map((p) => formatFeatureName(p)).join(", ");
      sections.push(`**OAuth Integration:** Support ${providers} for social login with PKCE flow for mobile clients.`);
    }
    sections.push("");
    sections.push("**Consequences:**");
    sections.push("- Short-lived access tokens (15 min) with rotating refresh tokens (7 days) minimize exposure window");
    sections.push("- HTTP-only, Secure, SameSite=Strict cookies prevent XSS-based token theft");
    sections.push("- Rate limiting on auth endpoints prevents brute force and credential stuffing attacks");
    sections.push("- Account lockout with exponential backoff after failed attempts adds defense in depth");
    sections.push("- OAuth flows require redirect URI registration and state parameter validation to prevent CSRF");
    sections.push("");
  }

  // ADR-005
  if (selections.deploy.platform) {
    const deployName = fmt(selections.deploy.platform);
    sections.push("### ADR-005: Deployment & Hosting Strategy");
    sections.push("");
    sections.push(`**Context:** The application needs a reliable, scalable hosting platform with CI/CD integration, SSL management, and global content delivery.`);
    sections.push("");
    sections.push(`**Decision:** Deploy on ${deployName} with automated CI/CD, preview deployments, and global CDN distribution.`);
    sections.push("");
    sections.push("**Consequences:**");
    sections.push("- Preview deployments for every branch enable early stakeholder feedback and QA testing");
    sections.push("- Infrastructure-as-code principles apply to environment configuration (env vars, secrets, domains)");
    sections.push("- Zero-downtime deployments require health checks and gradual traffic shifting");
    sections.push("- Platform-specific limits (cold starts, function timeout, bandwidth) must be accounted for in architecture");
    sections.push("- Multi-region deployment should be considered for global user base and disaster recovery");
    sections.push("");
  }

  // ADR-006
  sections.push("### ADR-006: State Management & Data Fetching");
  sections.push("");
  sections.push("**Context:** The application requires a consistent strategy for managing client-side state, server state, and cache invalidation across the frontend.");
  sections.push("");
  sections.push("**Decision:** Use Zustand for client-side state (UI state, user preferences), SWR for server state caching and revalidation, and React Cache for server-side data deduplication.");
  sections.push("");
  sections.push("**Consequences:**");
  sections.push("- Zustand provides lightweight (< 2KB) stores without boilerplate or provider nesting");
  sections.push("- SWR handles cache invalidation, revalidation on focus, and polling for real-time data");
  sections.push("- React Cache deduplicates server-side data fetches within the same request lifecycle");
  sections.push("- Optimistic updates improve perceived performance for mutations (create, update, delete)");
  sections.push("- Each state concern has a single source of truth, preventing synchronization bugs");
  sections.push("");

  // ADR-007
  sections.push("### ADR-007: Testing & Quality Strategy");
  sections.push("");
  sections.push("**Context:** The application must maintain high quality and reliability through automated testing across multiple levels of the testing pyramid.");
  sections.push("");
  sections.push("**Decision:** Implement a four-tier testing strategy: unit tests (Vitest), integration tests (Supertest), component tests (Testing Library), and E2E tests (Playwright), with a minimum of 80% code coverage.");
  sections.push("");
  sections.push("**Consequences:**");
  sections.push("- Unit tests cover business logic, utilities, and hooks with fast execution for rapid feedback");
  sections.push("- Integration tests validate API endpoints with real database and external service contracts");
  sections.push("- Component tests ensure UI interactions, accessibility, and rendering behavior");
  sections.push("- E2E tests in Playwright cover critical user flows in a headless browser environment");
  sections.push("- CI pipeline gates merges on all tests passing and coverage thresholds being met");
  sections.push("");

  // ── 4. AUTHENTICATION & SECURITY ──
  if (selections.auth.method.length > 0) {
    sections.push("---");
    sections.push("");
    sections.push("## 4. Authentication & Security");
    sections.push("");

    sections.push("### 4.1 Authentication Methods");
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
      sections.push("### 4.2 OAuth Providers");
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

    sections.push("### 4.3 Security Requirements");
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

  // ── 5. API DESIGN ──
  sections.push("---");
  sections.push("");
  sections.push("## 5. API Design");
  sections.push("");
  sections.push("### 5.1 API Architecture");
  sections.push("");
  const apiStyle = selections.type === "api" || selections.type === "microservice" ? "RESTful" : "RESTful with Next.js Route Handlers";
  sections.push(`The API follows a **${apiStyle}** architecture with consistent conventions for endpoints, request/response formats, error handling, and versioning. All endpoints are implemented as Next.js Route Handlers with Zod validation.`);
  sections.push("");

  sections.push("| Convention | Standard |");
  sections.push("|-----------|----------|");
  sections.push("| **Protocol** | HTTPS only (TLS 1.3) |");
  sections.push("| **Base URL** | `/api/v1/` |");
  sections.push("| **Content Type** | `application/json` |");
  sections.push("| **Versioning** | URI-based (`/api/v1/`, `/api/v2/`) |");
  sections.push("| **Naming** | Lowercase, kebab-case, plural nouns (`/api/v1/user-profiles`) |");
  sections.push("| **Pagination** | Cursor-based with `cursor` and `limit` params |");
  sections.push("| **Idempotency** | POST/PATCH requests support `Idempotency-Key` header |");
  sections.push("");

  sections.push("### 5.2 Endpoint Structure");
  sections.push("");
  sections.push("| Method | Endpoint Pattern | Description | Authentication |");
  sections.push("|--------|-----------------|-------------|---------------|");
  sections.push("| `GET` | `/api/v1/resources` | List resources (paginated) | Optional |");
  sections.push("| `POST` | `/api/v1/resources` | Create a new resource | Required |");
  sections.push("| `GET` | `/api/v1/resources/:id` | Get a single resource | Optional |");
  sections.push("| `PATCH` | `/api/v1/resources/:id` | Partial update a resource | Required |");
  sections.push("| `DELETE` | `/api/v1/resources/:id` | Delete a resource (soft) | Required |");
  sections.push("| `POST` | `/api/v1/resources/:id/actions` | Custom action on resource | Required |");
  sections.push("");

  sections.push("### 5.3 Authentication Flow");
  sections.push("");
  if (selections.auth.method.length > 0) {
    sections.push("1. Client sends credentials (username/password, OAuth token, API key, etc.) to `/api/v1/auth/login`");
    sections.push("2. Server validates credentials, generates an access token (15 min expiry) and refresh token (7 day expiry)");
    sections.push("3. Access token is stored in an HTTP-only, Secure, SameSite=Strict cookie");
    sections.push("4. All subsequent API requests include the cookie; the server verifies the token on each request via middleware");
    sections.push("5. When the access token expires, the client calls `/api/v1/auth/refresh` with the refresh token");
    sections.push("6. Refresh token rotation invalidates the old refresh token and issues a new pair");
    sections.push("7. Logout calls `/api/v1/auth/logout` which clears cookies and blacklists the refresh token server-side");
    sections.push("");
  } else {
    sections.push("1. No authentication layer is implemented. All endpoints are publicly accessible.");
    sections.push("2. Consider adding authentication if the application handles user data or sensitive operations.");
    sections.push("");
  }

  sections.push("### 5.4 Error Response Format");
  sections.push("");
  sections.push("All errors follow a consistent JSON structure:");
  sections.push("");
  sections.push("```json");
  sections.push("{");
  sections.push('  "error": {');
  sections.push('    "code": "VALIDATION_ERROR",');
  sections.push('    "message": "Human-readable description of the error.",');
  sections.push('    "details": [');
  sections.push("      {");
  sections.push('        "field": "email",');
  sections.push('        "message": "Must be a valid email address.",');
  sections.push('        "code": "invalid_string"');
  sections.push("      }");
  sections.push("    ],");
  sections.push('    "requestId": "req_abc123",');
  sections.push('    "docs": "https://docs.example.com/errors/VALIDATION_ERROR"');
  sections.push("  }");
  sections.push("}");
  sections.push("```");
  sections.push("");

  sections.push("| HTTP Status | Error Code | When |");
  sections.push("|-------------|-----------|------|");
  sections.push("| `400` | `VALIDATION_ERROR` | Request body failed Zod validation |");
  sections.push("| `401` | `UNAUTHORIZED` | Missing or invalid authentication |");
  sections.push("| `403` | `FORBIDDEN` | Authenticated but insufficient permissions |");
  sections.push("| `404` | `NOT_FOUND` | Resource does not exist |");
  sections.push("| `409` | `CONFLICT` | Resource conflict (e.g., duplicate email) |");
  sections.push("| `422` | `UNPROCESSABLE` | Request semantic error |");
  sections.push("| `429` | `RATE_LIMITED` | Too many requests |");
  sections.push("| `500` | `INTERNAL_ERROR` | Unexpected server error (details not exposed) |");
  sections.push("");

  sections.push("### 5.5 Pagination & Filtering");
  sections.push("");
  sections.push("All list endpoints support cursor-based pagination:");
  sections.push("");
  sections.push("```");
  sections.push("GET /api/v1/resources?cursor=eyJpZCI6...&limit=20&sort=created_at:desc");
  sections.push("```");
  sections.push("");
  sections.push("| Parameter | Type | Description |");
  sections.push("|-----------|------|-------------|");
  sections.push("| `cursor` | string | Opaque cursor from previous response |");
  sections.push("| `limit` | integer | Page size (default 20, max 100) |");
  sections.push("| `sort` | string | Sort field and direction (`field:asc` or `field:desc`) |");
  sections.push("| `filter` | string | JSON-encoded filter object (e.g., `{\"status\":\"active\"}`) |");
  sections.push("");
  sections.push("Response includes `hasMore` boolean and `nextCursor` string for infinite scroll and load-more patterns.");
  sections.push("");

  sections.push("### 5.6 Rate Limiting Strategy");
  sections.push("");
  sections.push("| Endpoint Group | Rate Limit | Burst | Window |");
  sections.push("|---------------|------------|-------|--------|");
  sections.push("| Public (GET) | 100 req/min | 200 | 1 minute sliding |");
  sections.push("| Authenticated | 500 req/min | 1000 | 1 minute sliding |");
  sections.push("| Auth (login) | 5 req/min | 10 | 1 minute sliding |");
  sections.push("| Webhook delivery | 50 req/min | 100 | 1 minute sliding |");
  sections.push("| Admin endpoints | 1000 req/min | 2000 | 1 minute sliding |");
  sections.push("");
  sections.push("Rate limit headers (`X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`) are included in all responses. Implemented via Redis with sliding window algorithm.");
  sections.push("");

  // ── 6. FEATURES ──
  if (selections.features.length > 0) {
    sections.push("---");
    sections.push("");
    sections.push("## 6. Features & Functionality");
    sections.push("");
    sections.push(`The system includes **${selections.features.length} feature(s)** as detailed below.`);
    sections.push("");

    for (const feature of selections.features) {
      const info = dictionary.features[feature as keyof typeof dictionary.features];
      if (info) {
        sections.push(`### 6.${selections.features.indexOf(feature) + 1} ${formatFeatureName(feature)}`);
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

        const patterns = getFeaturePatterns(feature);
        if (patterns.length > 0) {
          sections.push("**Implementation Patterns:**");
          for (const p of patterns) {
            sections.push(`- ${p}`);
          }
          sections.push("");
        }
      }
    }
  }

  // ── 7. DATA MODELING & STORAGE ──
  sections.push("---");
  sections.push("");
  sections.push("## 7. Data Modeling & Storage");
  sections.push("");

  if (selections.database.primary) {
    const dbInfo = dictionary.database.primary[selections.database.primary as keyof typeof dictionary.database.primary];
    if (dbInfo) {
      sections.push("### 7.1 Database Architecture");
      sections.push("");
      sections.push(dbInfo);
      sections.push(nl(`db-primary-${selections.database.primary}`));
      sections.push("");
    }
  }

  if (selections.database.orm) {
    const ormInfo = dictionary.database.orm[selections.database.orm as keyof typeof dictionary.database.orm];
    if (ormInfo) {
      sections.push("### 7.2 ORM / Data Access");
      sections.push("");
      sections.push(ormInfo);
      sections.push(nl(`db-orm-${selections.database.orm}`));
      sections.push("");
    }
  }

  sections.push("### 7.3 Data Modeling Principles");
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

  sections.push("### 7.4 Query Patterns & Optimization");
  sections.push("");
  const queryPatterns = [
    "Use parameterized queries exclusively to prevent SQL injection — never concatenate user input into query strings",
    "Prefer specific column selection over `SELECT *` to reduce data transfer and enable covering indexes",
    "Implement pagination using cursor-based (keyset) pagination for large datasets; avoid offset-based pagination past page 100",
    "Use eager loading (JOINs or include/relations) to solve N+1 query problems in list views and nested relationships",
    "Add database indexes on columns used in WHERE, JOIN, ORDER BY, and GROUP BY clauses; use EXPLAIN ANALYZE to verify index usage",
    "For full-text search, use database-native search (PostgreSQL tsvector, MySQL FULLTEXT) or a dedicated search index (Meilisearch, Typesense)",
    "Implement read replicas for read-heavy workloads; route reporting and analytics queries to replicas",
    "Use query timeouts (statement_timeout in PostgreSQL, max_execution_time in MySQL) to prevent runaway queries",
    "Add composite indexes for multi-column query patterns, keeping column order matching the query conditions",
    "Monitor slow queries via database-level logging (auto_explain in PostgreSQL, slow_query_log in MySQL) and set up alerting on thresholds",
    "Use batch inserts/updates for bulk operations instead of row-by-row processing to reduce round trips",
    "Implement database-level cascade deletes or handle cascading in application code based on data integrity requirements",
    "Consider materialized views or summary tables for expensive aggregations that don't require real-time freshness",
    "Use partial indexes for frequently filtered columns with a common WHERE condition (e.g., `WHERE status = 'active'`)",
    "Regularly run ANALYZE to update table statistics for the query planner; schedule VACUUM for PostgreSQL or OPTIMIZE for MySQL",
  ];
  for (const p of queryPatterns) {
    sections.push(`- ${p}`);
  }
  sections.push("");

  sections.push("### 7.5 Caching Strategy");
  sections.push("");
  const cachingStrategy = [
    "Implement multi-level caching: in-memory (Redis), CDN (cache-control headers), and application-level (SWR/React Cache)",
    "Use Redis for session storage, rate limiting counters, job queues, and frequently accessed query results",
    "Set Cache-Control headers on API responses: `public, max-age=60, s-maxage=300, stale-while-revalidate=60` for list endpoints",
    "Use SWR stale-while-revalidate pattern on the client for instant UI updates with background freshness",
    "Implement cache invalidation on data mutations: delete/update cache keys when entities are created, modified, or deleted",
    "Use React Server Component-level caching (unstable_cache / React.cache) for deduplicating server-side data fetches",
    "Set TTLs appropriate to data freshness needs: reference data (1 hour), user profiles (5 min), session data (15 min)",
    "Avoid caching personalized or sensitive data at the CDN layer; use private cache directives and vary headers",
  ];
  for (const c of cachingStrategy) {
    sections.push(`- ${c}`);
  }
  sections.push("");

  // ── 8. DESIGN SYSTEM ──
  sections.push("---");
  sections.push("");
  sections.push("## 8. Design System");
  sections.push("");
  sections.push("### 8.1 Visual Style");
  sections.push("");
  if (selections.design.style) {
    const styleInfo = dictionary.design.styles[selections.design.style as keyof typeof dictionary.design.styles];
    if (styleInfo) {
      sections.push(styleInfo);
      sections.push(nl(`design-style-${selections.design.style}`));
    }
  }
  sections.push("");

  sections.push("### 8.2 Color System");
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

  sections.push("### 8.3 Typography");
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

  sections.push("### 8.4 Component Design Tokens");
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

  // ── 9. DEPLOYMENT & OPERATIONS ──
  sections.push("---");
  sections.push("");
  sections.push("## 9. Deployment & Operations");
  sections.push("");

  if (selections.deploy.platform) {
    const platInfo = dictionary.deploy.platforms[selections.deploy.platform as keyof typeof dictionary.deploy.platforms];
    if (platInfo) {
      sections.push("### 9.1 Deployment Architecture");
      sections.push("");
      sections.push(platInfo);
      sections.push(nl(`deploy-platform-${selections.deploy.platform}`));
      sections.push("");
    }
  }

  if (selections.deploy.ciCd.length > 0) {
    sections.push("### 9.2 CI/CD Pipeline");
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

  sections.push("### 9.3 Pipeline Stages");
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

  sections.push("### 9.4 Environment Strategy");
  sections.push("");
  sections.push("| Environment | Purpose | URL Pattern |");
  sections.push("|-------------|---------|-------------|");
  sections.push("| `development` | Local development | `localhost:3000` |");
  sections.push("| `staging` | QA and integration testing | `staging.example.com` |");
  sections.push("| `production` | Live customer-facing | `example.com` |");
  sections.push("| Preview (PR) | Per-PR deployment | `pr-123.preview.example.com` |");
  sections.push("");

  // ── 10. MONITORING & OBSERVABILITY ──
  sections.push("---");
  sections.push("");
  sections.push("## 10. Monitoring & Observability");
  sections.push("");
  sections.push("A comprehensive observability stack ensures the health, performance, and reliability of the application in production. The strategy covers logging, metrics, tracing, and alerting.");
  sections.push("");

  sections.push("### 10.1 Logging Strategy");
  sections.push("");
  sections.push("All logs are structured JSON output to stdout/stderr, collected by the logging infrastructure, and indexed for search and analysis.");
  sections.push("");
  sections.push("```json");
  sections.push("{");
  sections.push('  "timestamp": "2026-06-30T12:00:00.000Z",');
  sections.push('  "level": "info",');
  sections.push('  "service": "web",');
  sections.push('  "traceId": "abc123def456",');
  sections.push('  "message": "User authenticated successfully",');
  sections.push('  "userId": "usr_abc123",');
  sections.push('  "durationMs": 42,');
  sections.push('  "path": "/api/v1/auth/login"');
  sections.push("}");
  sections.push("```");
  sections.push("");
  sections.push("| Aspect | Convention |");
  sections.push("|--------|-----------|");
  sections.push("| **Format** | Structured JSON with timestamp, level, message, and traceId |");
  sections.push("| **Levels** | `debug`, `info`, `warn`, `error`, `fatal` (use error for exceptions, warn for degraded paths) |");
  sections.push("| **Correlation** | Every request gets a `traceId` propagated via OpenTelemetry across service boundaries |");
  sections.push("| **PII** | Never log passwords, tokens, personal data, or payment details — use sanitization middleware |");
  sections.push("| **Retention** | 30 days hot storage, 90 days warm, 1 year cold archive |");
  sections.push("| **Tooling** | Use a logging library (pino, winston) with automatic request context injection |");
  sections.push("");

  sections.push("### 10.2 Metrics to Track");
  sections.push("");
  sections.push("**Technical Metrics (RED Method):**");
  sections.push("- **Rate:** Requests per second (by endpoint, method, status code)");
  sections.push("- **Errors:** Error rate as percentage of total requests (by endpoint, error code)");
  sections.push("- **Duration:** Response time distribution (p50, p95, p99) for each endpoint");
  sections.push("- **Saturation:** CPU, memory, disk I/O, network I/O, database connections");
  sections.push("- **Database:** Query execution time, connection pool utilization, replication lag");
  sections.push("- **Cache:** Hit/miss ratio for Redis and CDN cache layers");
  sections.push("");

  sections.push("**Business Metrics:**");
  sections.push("- **Active users:** Daily, weekly, monthly active users (DAU, WAU, MAU)");
  sections.push("- **Conversion:** Funnel completion rates (signup, onboarding, first key action)");
  sections.push("- **Retention:** Day-1, Day-7, Day-30 retention cohorts");
  sections.push("- **Revenue:** MRR, ARPU, churn rate, lifetime value (if applicable)");
  sections.push("- **Feature usage:** Adoption rate per feature, frequency of use");
  sections.push("");

  sections.push("### 10.3 Alerting Rules");
  sections.push("");
  sections.push("| Alert | Condition | Severity | Response Time |");
  sections.push("|-------|-----------|----------|---------------|");
  sections.push("| **High Error Rate** | Error rate > 5% over 5 minutes | Critical | 15 min |");
  sections.push("| **High Latency** | p95 response time > 500ms over 5 minutes | Warning | 30 min |");
  sections.push("| **Service Down** | Health check fails for 1 minute | Critical | 5 min |");
  sections.push("| **Database Slow** | Query p95 > 100ms over 5 minutes | Warning | 30 min |");
  sections.push("| **Disk Space** | Disk usage > 85% | Warning | 2 hours |");
  sections.push("| **Rate Limiting** | More than 10% of requests being rate-limited | Info | Review weekly |");
  sections.push("| **Certificate Expiry** | SSL certificate expires in < 14 days | Warning | 48 hours |");
  sections.push("| **Auth Failures** | Sudden spike in 401 responses > 10x baseline | Critical | 15 min |");
  sections.push("");

  sections.push("Alerting is configured with escalation policies: on-call engineer notified first, then team lead, then engineering manager if unacknowledged after the initial response time. Use PagerDuty or Opsgenie for on-call scheduling and alert routing.");
  sections.push("");

  sections.push("### 10.4 Dashboard Recommendations");
  sections.push("");
  sections.push("**Operations Dashboard (Real-time):**");
  sections.push("- Request rate, error rate, and p95 latency (time series, last 1 hour)");
  sections.push("- Active users and session count");
  sections.push("- Top 5 slowest endpoints");
  sections.push("- Recent errors and exceptions (live feed)");
  sections.push("- Database connection pool utilization");
  sections.push("");

  sections.push("**Business Dashboard (Daily):**");
  sections.push("- DAU, WAU, MAU with week-over-week change");
  sections.push("- Conversion funnel visualization (signup → activation → retention)");
  sections.push("- Revenue metrics (MRR, ARPU) with trend lines");
  sections.push("- Feature adoption heatmap");
  sections.push("- Top user actions and event volume");
  sections.push("");

  sections.push("**Database Dashboard:**");
  sections.push("- Query throughput (reads vs writes per second)");
  sections.push("- Slow query log with execution plans");
  sections.push("- Index usage statistics and unused indexes");
  sections.push("- Table size growth and bloat percentage");
  sections.push("- Replication lag (if read replicas are used)");
  sections.push("");

  // ── 11. DEVELOPMENT WORKFLOW ──
  sections.push("---");
  sections.push("");
  sections.push("## 11. Development Workflow");
  sections.push("");
  sections.push("A structured development workflow ensures code quality, team collaboration, and predictable releases. The workflow covers branching, code review, release management, and environment promotion.");
  sections.push("");

  sections.push("### 11.1 Git Branching Strategy");
  sections.push("");
  sections.push("Use **GitHub Flow** (trunk-based development with short-lived feature branches):");
  sections.push("");
  sections.push("| Branch | Purpose | Base Branch | Lifespan |");
  sections.push("|--------|---------|-------------|----------|");
  sections.push("| `main` | Production-ready code | — | Permanent |");
  sections.push("| `feat/*` | Feature development | `main` | Days |");
  sections.push("| `fix/*` | Bug fixes | `main` | Days |");
  sections.push("| `chore/*` | Maintenance, dependencies, tooling | `main` | Days |");
  sections.push("| `release/*` | Release preparation (optional) | `main` | Weeks |");
  sections.push("| `hotfix/*` | Urgent production fixes | `main` | Hours |");
  sections.push("");
  sections.push("Rules:");
  sections.push("- Feature branches are created from `main` and merged back via pull request");
  sections.push("- Branches must be kept short-lived (1-3 days) to minimize merge conflicts");
  sections.push("- Squash-merge commits into `main` to maintain a clean, linear history");
  sections.push("- `main` must always be deployable — no direct commits, only PR merges after CI passes");
  sections.push("- Delete feature branches after merge to prevent stale branch accumulation");
  sections.push("");

  sections.push("### 11.2 Code Review Process");
  sections.push("");
  sections.push("Every pull request must go through a structured review process before merging:");
  sections.push("");
  sections.push("1. **Author creates PR** with descriptive title, linked issue/ ticket, and change summary");
  sections.push("2. **Automated checks** run: lint, type-check, unit tests, integration tests, build verification");
  sections.push("3. **At least one reviewer** is assigned and must approve the changes");
  sections.push("4. **Reviewer checks:** correctness, security, performance, test coverage, accessibility, code style");
  sections.push("5. **Author addresses feedback** with additional commits; re-request review after changes");
  sections.push("6. **Rebase and merge** once approved — no merge commits, linear history is preserved");
  sections.push("7. **Post-merge:** preview deployment is automatically cleaned up, production deployment proceeds if on release branch");
  sections.push("");
  sections.push("Code Review Checklist:");
  sections.push("- Does the code follow the project's TypeScript strict mode conventions?");
  sections.push("- Are there adequate tests covering happy path, error cases, and edge cases?");
  sections.push("- Are API endpoints validated with Zod schemas and error responses handled?");
  sections.push("- Are there any security vulnerabilities (XSS, injection, exposed secrets, missing auth checks)?");
  sections.push("- Does the UI meet accessibility standards (keyboard navigation, ARIA labels, color contrast)?");
  sections.push("- Are error boundaries and loading states implemented for all new components?");
  sections.push("");

  sections.push("### 11.3 Release Cadence");
  sections.push("");
  sections.push("| Release Type | Frequency | Process | Rollback |");
  sections.push("|-------------|-----------|---------|----------|");
  sections.push("| **Patch** | As needed (bug fixes) | Cherry-pick fix, deploy directly to production | Revert commit + redeploy |");
  sections.push("| **Minor** | Weekly or bi-weekly | Release branch from main, deploy to staging for QA, then production | Rollback via deployment platform |");
  sections.push("| **Major** | Monthly or quarterly | Release branch, extended QA, canary deployment, phased rollout | Feature flags to disable |");
  sections.push("| **Hotfix** | Immediate | Branch from production tag, fix, deploy, merge back to main | Revert hotfix commit |");
  sections.push("");
  sections.push("Semantic versioning (`MAJOR.MINOR.PATCH`) is used for all releases. Release notes are auto-generated from conventional commit messages between tags.");
  sections.push("");

  sections.push("### 11.4 Environment Promotion");
  sections.push("");
  sections.push("Code progresses through environments in a strict promotion model:");
  sections.push("");
  sections.push("```");
  sections.push("Feature Branch → Preview Deployment → Staging → Production");
  sections.push("```");
  sections.push("");
  sections.push("| Step | Gate | Action |");
  sections.push("|------|------|--------|");
  sections.push("| Feature Branch | CI passes, lint, tests, build | Auto-deploy to preview URL |");
  sections.push("| PR Merge to main | Code review approved, all checks pass | Auto-deploy to staging |");
  sections.push("| Staging | QA validation, E2E tests pass | Manual promotion to production |");
  sections.push("| Canary (optional) | 1% traffic for 1 hour, error rate < baseline | Gradual rollout to 100% |");
  sections.push("| Production | Health checks pass, monitoring OK | Release marked complete |");
  sections.push("");

  sections.push("Feature flags are used for risky or large features, allowing toggling without deployment. Use a flag management tool (LaunchDarkly, GrowthBook, or custom DB-backed flags) with gradual rollouts and kill switches.");
  sections.push("");

  // ── 12. AI & LLM CONFIGURATION ──
  if (selections.ai.provider) {
    sections.push("---");
    sections.push("");
    sections.push("## 12. AI & LLM Configuration");
    sections.push("");

    const providerInfo = dictionary.ai.providers[selections.ai.provider as keyof typeof dictionary.ai.providers];
    if (providerInfo) {
      sections.push("### 12.1 AI Provider");
      sections.push("");
      sections.push(providerInfo);
      sections.push(nl(`ai-provider-${selections.ai.provider}`));
      sections.push("");
    }

    if (selections.ai.model) {
      const modelInfo = dictionary.ai.models[selections.ai.model as keyof typeof dictionary.ai.models];
      if (modelInfo) {
        sections.push("### 12.2 Model Selection");
        sections.push("");
        sections.push(modelInfo);
        sections.push(nl(`ai-model-${selections.ai.model}`));
        sections.push("");
      }
    }

    if (selections.ai.temperature) {
      const tempInfo = dictionary.ai.temperature[selections.ai.temperature as keyof typeof dictionary.ai.temperature];
      if (tempInfo) {
        sections.push("### 12.3 Generation Parameters");
        sections.push("");
        sections.push(tempInfo);
        sections.push(nl(`ai-temperature-${selections.ai.temperature}`));
        sections.push("");
      }
    }

    sections.push("### 12.4 Prompt Engineering Guidelines");
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

  // ── 13. QUALITY STANDARDS & CONSTRAINTS ──
  sections.push("---");
  sections.push("");
  sections.push("## 13. Quality Standards & Constraints");
  sections.push("");

  sections.push("### 13.1 Code Quality");
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
    "No console.log in production — use a structured logger with appropriate levels",
    "All async functions must have proper error handling (try/catch or .catch())",
    "Use `const` over `let` for immutable bindings; prefer readonly types for parameters that should not be mutated",
    "React components must be named exports (not default exports) for better tree-shaking and IDE support",
    "Avoid deeply nested ternaries — extract into named functions or use early returns",
    "All API responses must be validated at runtime with Zod schemas before returning to the client",
  ];
  for (const q of codeQuality) {
    sections.push(`- ${q}`);
  }
  sections.push("");

  sections.push("### 13.2 Dependency Management");
  sections.push("");
  const depManagement = [
    "Pin all dependency versions in package.json (no caret ranges for production dependencies)",
    "Use lockfiles (pnpm-lock.yaml) committed to version control for reproducible builds",
    "Run `pnpm audit` or `npm audit` weekly to identify and remediate known vulnerabilities",
    "Use Dependabot or Renovate for automated dependency update PRs with weekly grouping",
    "Prefer built-in Node.js APIs over third-party packages when possible (fetch, crypto, fs/promises)",
    "Minimize runtime dependencies — evaluate necessity before adding new packages",
    "Remove unused dependencies with `depcheck` or similar before major releases",
    "Use environment variables for all configuration values; never hardcode secrets, URLs, or feature flags",
  ];
  for (const d of depManagement) {
    sections.push(`- ${d}`);
  }
  sections.push("");

  sections.push("### 13.3 Performance Budget");
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

  sections.push("### 13.4 Testing Requirements");
  sections.push("");
  const testingReqs = [
    "Unit tests: > 80% code coverage for business logic",
    "Integration tests: All API endpoints tested with valid and invalid inputs",
    "Component tests: All interactive components tested (click, type, focus)",
    "E2E tests: Critical user flows (auth, CRUD, checkout if applicable)",
    "Accessibility tests: Automated aXe/Pa11y checks per page",
    "Performance tests: Lighthouse CI with budgets",
    "Regression tests: Key user journeys replayed on each release candidate",
    "Contract tests: API schema validation with OpenAPI/Swagger diff enforcement",
    "Security tests: OWASP Top 10 scan, dependency vulnerability scan, SAST/DAST in CI",
  ];
  for (const t of testingReqs) {
    sections.push(`- ${t}`);
  }
  sections.push("");

  sections.push("### 13.5 Accessibility");
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
    "Touch targets must be at least 44x44px for mobile accessibility",
    "Ensure content is understandable when zoomed to 200% without loss of functionality",
    "Provide skip-to-content links for keyboard and screen reader users",
  ];
  for (const a of a11y) {
    sections.push(`- ${a}`);
  }
  sections.push("");

  sections.push("### 13.6 Documentation Standards");
  sections.push("");
  const docStandards = [
    "All public functions, types, and interfaces must have JSDoc comments describing purpose, parameters, and return values",
    "README.md must include setup instructions, architecture overview, environment variables, and deployment guide",
    "API endpoints must be documented in an OpenAPI 3.1 spec file or inline with swagger-jsdoc",
    "Architecture Decision Records (ADRs) are stored in `docs/adr/` and updated when decisions change",
    "Component documentation via Storybook stories covering all states (loading, empty, error, edge cases)",
    "Contributing guide (`CONTRIBUTING.md`) with setup, code conventions, review process, and release workflow",
    "Runway Runbook (`docs/runbook.md`) with troubleshooting guides, recovery procedures, and on-call instructions",
  ];
  for (const d of docStandards) {
    sections.push(`- ${d}`);
  }
  sections.push("");

  // ── 14. RISK ASSESSMENT ──
  sections.push("---");
  sections.push("");
  sections.push("## 14. Risk Assessment");
  sections.push("");
  sections.push("This section identifies technical and project risks along with mitigation strategies and contingency plans. Risks are assessed based on the selected project type, industry, and technology choices.");
  sections.push("");

  sections.push("### 14.1 Technical Risks");
  sections.push("");
  const technicalRisks = [
    {
      risk: "Scaling bottlenecks under high load",
      likelihood: "Medium",
      impact: "High",
      industryNote: selections.industry === "ecommerce" || selections.industry === "social" || selections.industry === "saas" ? " (Critical for your industry — expect traffic spikes)" : "",
    },
    {
      risk: "Data migration complexity with schema evolution",
      likelihood: "Medium",
      impact: "High",
      industryNote: selections.database.primary === "postgres" || selections.database.primary === "mysql" ? " (Mitigated by ORM migrations and rollback planning)" : "",
    },
    {
      risk: "Third-party API dependency failures and rate limits",
      likelihood: "High",
      impact: "Medium",
      industryNote: selections.features.includes("api-integration") || selections.features.includes("webhooks") ? " (Important for your integration-heavy feature set)" : "",
    },
    {
      risk: "Security vulnerability in a dependency or custom code",
      likelihood: "Medium",
      impact: "Critical",
      industryNote: selections.industry === "fintech" || selections.industry === "healthcare" || selections.industry === "legal" || selections.industry === "cybersecurity" ? " (Critical concern for your regulated industry)" : "",
    },
    {
      risk: "Technical debt accumulation from tight deadlines",
      likelihood: "High",
      impact: "Medium",
      industryNote: "",
    },
    {
      risk: "Single point of failure in database or infrastructure",
      likelihood: "Low",
      impact: "Critical",
      industryNote: selections.deploy.platform ? " (Platform choice affects HA capabilities)" : "",
    },
    {
      risk: "Cross-browser and cross-device compatibility issues",
      likelihood: "Medium",
      impact: "Medium",
      industryNote: selections.type === "mobile" || selections.type === "pwa" ? " (Critical for your target platform)" : "",
    },
  ];
  for (const r of technicalRisks) {
    sections.push(`- **${r.risk}** — Likelihood: ${r.likelihood}, Impact: ${r.impact}${r.industryNote}`);
  }
  sections.push("");

  sections.push("### 14.2 Mitigation Strategies");
  sections.push("");
  const mitigations = [
    {
      strategy: "Implement horizontal auto-scaling and CDN caching from day one",
      addresses: "Scaling bottlenecks",
    },
    {
      strategy: "Write database migrations with both forward and rollback scripts; test migrations in staging before production",
      addresses: "Migration complexity",
    },
    {
      strategy: "Implement circuit breakers, retry with exponential backoff, and fallback responses for all external API calls",
      addresses: "Third-party dependency failures",
    },
    {
      strategy: "Run SAST (SonarQube, Semgrep) and dependency scanning (Snyk, npm audit) in CI pipeline; conduct quarterly penetration tests",
      addresses: "Security vulnerabilities",
    },
    {
      strategy: "Allocate 20% of each sprint to refactoring, documentation, and test improvements",
      addresses: "Technical debt",
    },
    {
      strategy: "Deploy with multi-AZ redundancy, automated failover, and regular backup testing",
      addresses: "Single point of failure",
    },
    {
      strategy: "Use responsive design with progressive enhancement; test on real devices and browser emulators in CI",
      addresses: "Cross-browser compatibility",
    },
  ];
  for (const m of mitigations) {
    sections.push(`- **${m.strategy}** — Addresses: ${m.addresses}`);
  }
  sections.push("");

  sections.push("### 14.3 Contingency Plans");
  sections.push("");
  sections.push("| Scenario | Contingency Plan | Trigger |");
  sections.push("|----------|-----------------|---------|");
  sections.push("| **Database corruption or data loss** | Restore from point-in-time backup; switch to read-replica if primary is unhealthy; run data integrity checks | Monitoring alert on data inconsistency or backup verification failure |");
  sections.push("| **Critical security breach** | Activate incident response plan: isolate affected systems, rotate all credentials, notify stakeholders, engage security team, conduct post-mortem | Intrusion detection alert or reported vulnerability |");
  sections.push("| **Third-party API deprecation** | Identify and switch to alternative provider; implement abstraction layer with provider-agnostic interfaces for easy swapping | Deprecation notice from provider or monitoring alert on error rate increase |");
  sections.push("| **Severe performance degradation** | Scale up/down resources temporarily; enable emergency caching; drop non-critical features (feature flags); redirect traffic to static fallback | P95 latency > 2s or error rate > 10% for 10 minutes |");
  sections.push("| **Team member unavailability** | Cross-train team members on critical systems; maintain runbooks for key operations; use pair programming to spread knowledge | Unexpected leave or turnover |");
  sections.push("| **Deployment failure** | Rollback to previous release; freeze deployments until root cause is identified; deploy fix as patch | Health check failure or error rate spike after deployment |");
  sections.push("");

  sections.push("### 14.4 Compliance & Regulatory Considerations");
  sections.push("");
  const industryRiskNotes: Record<string, string> = {
    fintech: "PCI-DSS compliance for payment data, SOC 2 Type II for security controls, KYC/AML for user verification, data residency requirements for cross-border transactions.",
    healthcare: "HIPAA compliance for patient data, HITECH Act for electronic health records, FDA regulations for medical device software (if applicable), 21 CFR Part 11 for electronic signatures.",
    ecommerce: "PCI-DSS for payment processing, GDPR/ePrivacy for EU customer data, CCPA for California residents, consumer protection laws for returns and refunds.",
    saas: "SOC 2 Type II for enterprise customers, GDPR for European user data, SLA compliance with uptime guarantees, data processing agreements with sub-processors.",
    social: "GDPR for user data protection, DSA (Digital Services Act) for content moderation, COPPA for under-13 users, right to be forgotten and data portability.",
    education: "FERPA for student records, COPPA for under-13 learners, WCAG/Section 508 for accessibility, state-specific data privacy laws for educational data.",
    gaming: "GDPR and COPPA for user data, age verification requirements, gambling regulations if real-money transactions, loot box disclosure laws in applicable jurisdictions.",
    "real-estate": "Fair Housing Act compliance, state-specific real estate disclosure laws, data privacy for personal information, Fair Credit Reporting Act if financial data involved.",
    travel: "PCI-DSS for payment processing, GDPR for customer data, travel agent licensing requirements, liability and insurance regulatory compliance.",
    logistics: "Customs compliance for international shipping, hazardous materials handling regulations, data privacy for shipment details, labor law compliance for delivery personnel.",
    legal: "Attorney-client privilege protections, ABA model rules for technology, state-specific bar requirements, eDiscovery compliance, client data confidentiality obligations.",
    media: "DMCA compliance for copyright claims, COPPA if child-directed content, GDPR for EU user data, digital rights management (DRM) for premium content.",
    agriculture: "FDA/USDA regulations for food safety, environmental compliance for farming data, data ownership agreements with farmers, pesticide use reporting.",
    energy: "NERC CIP for grid security, FERC regulations for energy markets, state-level utility commission requirements, environmental reporting standards.",
    government: "FedRAMP for cloud services, FISMA for federal systems, state-specific security requirements, FOIA compliance for public records, Section 508 accessibility.",
    "non-profit": "Donor privacy regulations (GDPR, state laws), charitable solicitation registration, grant compliance and reporting requirements, financial transparency obligations.",
    manufacturing: "ISO standards compliance, OSHA safety regulations, environmental protection requirements, supply chain data security, intellectual property protection.",
    telecom: "FCC regulations, CALEA for lawful interception, E911 compliance, net neutrality requirements, data retention policies per local laws.",
    cybersecurity: "ISO 27001 certification requirements, NIST cybersecurity framework, breach notification laws (state-specific and GDPR), FedRAMP for government clients.",
  };
  const complianceNote = selections.industry ? industryRiskNotes[selections.industry] : undefined;
  if (complianceNote) {
    sections.push(complianceNote);
  } else {
    sections.push("General data protection regulations apply: GDPR for EU users, CCPA for California residents, and applicable local data protection laws. Consult legal counsel for specific compliance requirements.");
  }
  sections.push("");
  sections.push("All compliance requirements must be documented in a compliance matrix tracked alongside development milestones. Regular compliance reviews should be scheduled at each release cadence.");
  sections.push("");

  sections.push("---");
  sections.push("");
  sections.push(lang.blueprintGenerated + " " + new Date().toISOString().split("T")[0]);
  sections.push(lang.status);
  sections.push(lang.nextSteps);
  sections.push("");
  sections.push("---");
  sections.push("");
  sections.push(lang.systemPrompt);
  sections.push("");
  sections.push("---");
  sections.push("");
  sections.push(lang.sevenPillars);

  return sections.join("\n");
}


function hasVal(v: any): boolean {
  if (v === null || v === undefined) return false;
  if (Array.isArray(v)) return v.length > 0;
  return true;
}

function getVal(v: any): string[] {
  if (!v) return [];
  if (Array.isArray(v)) return v;
  return [v];
}

function fmt(v: string | string[] | null | undefined): string {
  if (!v) return "General";
  if (Array.isArray(v)) return v.map(formatFeatureName).join(" + ");
  return formatFeatureName(v);
}

function getProjectTitle(selections: WizardSelections): string {
  const typeName = selections.type ? formatFeatureName(selections.type) : "Web Application";
  const industryName = fmt(selections.industry);
  return `System Prompt Blueprint: ${typeName} — ${industryName}`;
}

function getProjectType(selections: WizardSelections): string {
  return selections.type ? formatFeatureName(selections.type) : "Web Application";
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

const featurePatterns: Record<string, string[]> = {
  dashboard: [
    "Use Recharts for data visualization with responsive SVG containers; wrap charts in Suspense with skeleton placeholders",
    "Implement server-side data fetching with SWR for auto-revalidation; use polling (refetchInterval) for real-time metrics",
    "Apply React.memo and useMemo to prevent unnecessary chart re-renders when parent state changes",
    "Store dashboard layout preferences (widget order, sizes) in Zustand with localStorage persistence",
    "Lazy-load individual chart components using next/dynamic with ssr: false to reduce initial bundle size",
    "Use URL search params for date ranges and filters to enable shareable dashboard states",
  ],
  "user-management": [
    "Use server actions for user CRUD with optimistic updates and rollback on error",
    "Implement role-based UI rendering via a usePermissions() hook that checks against a permissions matrix",
    "Use React Hook Form + Zod for type-safe form validation with inline error messages",
    "Cache user lists with SWR and implement infinite scroll pagination for large user bases",
    "Implement bulk user operations (invite, suspend, delete) with confirmation dialogs and undo snackbars",
    "Use server-side filtering and sorting for data tables to handle pagination efficiently",
  ],
  billing: [
    "Use Stripe webhooks (customer.subscription.updated, invoice.paid, payment_failed) as the source of truth for subscription state",
    "Implement idempotency keys on payment-related endpoints to prevent duplicate charges from network retries",
    "Abstract billing logic behind a BillingService interface for provider-agnostic integration (Stripe, Paddle, LemonSqueezy)",
    "Use background job processors (Bull/Queue) for usage metering aggregation with hourly rollups",
    "Cache subscription status in server-side session data for fast access checks without DB queries per request",
    "Implement dunning management with escalating email notifications for failed payments before service suspension",
  ],
  "multi-tenancy": [
    "Use database-level row-level security (RLS) policies for PostgreSQL or a tenant_id column with scoped queries",
    "Extract tenant context from the request domain (subdomain or custom domain) via middleware",
    "Implement tenant-scoped caching with tenant_id in cache keys to prevent cross-tenant data leakage",
    "Use tenant-level feature flags to gradually roll out features per customer segment",
    "Provide an admin panel for cross-tenant management with bulk operations and usage analytics",
    "Implement tenant provisioning workflows with isolated schema-per-tenant or shared-schema approaches",
  ],
  analytics: [
    "Instrument both frontend (page views, events) and backend (API calls, feature usage) analytics with a common event taxonomy",
    "Use PostHog for self-hosted product analytics with session recordings and feature flags",
    "Implement server-side event tracking for authenticated actions using a queue-based pipeline (no blocking)",
    "Build analytics dashboards using the same API data that powers customer-facing reports for consistency",
    "Export raw event data to a data warehouse (BigQuery, ClickHouse) for custom SQL analysis and ML pipelines",
    "Implement A/B test assignment and tracking with server-side deterministic bucketing for consistent user experience",
  ],
  notifications: [
    "Use a unified notification model with a NotificationService abstraction that handles email, in-app, push, and SMS channels",
    "Implement a queue-based delivery system (Bull/BullMQ) with per-channel rate limiting and retry with exponential backoff",
    "Allow users to configure notification preferences per channel and per event type in a preference center",
    "Use React-Email or MJML for building responsive email templates with preview and testing tools",
    "Implement delivery tracking with open/click tracking for emails and read receipts for in-app notifications",
    "Use web push via the Push API and service workers for browser notifications with permission management",
  ],
  search: [
    "Use a dedicated search service (Meilisearch, Algolia, Typesense) with incremental indexing for fast typo-tolerant search",
    "Implement faceted navigation with dynamic filter combinations that update result counts in real-time",
    "Provide autocomplete suggestions via a separate lightweight endpoint with debounced input handling",
    "Rank results by relevance score with optional manual boosting for curated or promoted content",
    "Implement search analytics to track popular queries, zero-result searches, and query refinement patterns",
    "Use server-side rendering for initial search results with client-side filtering for instant refinements",
  ],
  "audit-logging": [
    "Implement append-only audit log storage (separate table or dedicated service) with cryptographic hash chaining for tamper detection",
    "Log all state-changing operations with actor ID, action type, resource ID, old values, new values, IP, and user agent",
    "Provide an admin audit log viewer with search, filtering by date/actor/action, and CSV export",
    "Implement configurable retention policies: hot storage for 90 days, cold archive for 7 years",
    "Use a structured log format (JSON) that can be shipped to a SIEM system for security analysis",
    "Apply rate-limited writes to the audit log to prevent abuse; never allow deletion or modification of audit records",
  ],
  cms: [
    "Use a headless CMS approach with TipTap or Plate for rich text editing with markdown shortcuts and slash commands",
    "Implement a media library with automatic image optimization (sharp), CDN delivery, and alt text management",
    "Version all content changes with a revisions table supporting diff view, rollback, and scheduled publishing",
    "Build a custom content type builder with flexible schemas stored as JSON and rendered with dynamic components",
    "Implement a publishing workflow with draft, review, scheduled, and published states and role-based permissions per stage",
    "Provide a preview mode that renders unpublished content with a preview banner for editors",
  ],
  "email-templates": [
    "Use React Email for building type-safe, responsive email templates with preview rendering in the browser",
    "Implement a template editor with drag-and-drop blocks (header, text, image, button, divider, footer)",
    "Support dynamic variables with Handlebars or Liquid syntax for personalization and conditional content",
    "Store template versions with A/B testing variants and automatic winner selection based on open/click rates",
    "Integrate with a sending service (Resend, SendGrid, SES) with deliverability analytics and bounce handling",
    "Implement batch sending with rate limiting per provider and per-domain to maintain sender reputation",
  ],
  "file-upload": [
    "Use the UploadThing or Tus protocol for resumable chunked uploads with progress tracking",
    "Validate files client-side (type, size, dimensions) and re-validate server-side before storage",
    "Generate multiple image variants (thumbnail, medium, full) using sharp with WebP/AVIF conversion",
    "Store files in S3-compatible object storage (AWS S3, Cloudflare R2) with CDN delivery and signed URLs for private files",
    "Implement virus scanning (ClamAV) for uploaded files with quarantine workflow for infected files",
    "Provide a file manager UI with folder organization, search, version history, and permission settings",
  ],
  "export-import": [
    "Use ExcelJS for Excel export with styled cells, merged headers, and auto-sized columns",
    "Implement streaming exports for large datasets to avoid memory exhaustion; use streams (Node.js Transform streams)",
    "Validate imports row-by-row with detailed error reporting (row number, field, error message) in a downloadable CSV",
    "Support CSV, XLSX, and JSON import/export with mapping UI for column matching",
    "Schedule recurring exports (daily, weekly, monthly) with delivery to email, SFTP, or cloud storage",
    "Implement import preview showing the first 10 rows with detected data types and potential issues before confirmation",
  ],
  reporting: [
    "Build a custom report builder with drag-and-drop field selection, filter conditions, grouping, and sorting",
    "Generate reports in multiple formats: PDF (PDFKit/PDFMake), Excel (ExcelJS), HTML with responsive tables",
    "Schedule report generation with cron expressions and distribute via email (attachment or link), Slack webhook, or SFTP",
    "Cache report results with TTL based on data freshness requirements; invalidate on source data changes",
    "Implement drill-down interactions: click a chart segment to navigate to a detailed view of that subset",
    "Share reports with view-only links, team folders, and permission-based access control",
  ],
  calendar: [
    "Use a calendar library (FullCalendar, react-big-calendar) with drag-and-drop event creation and resizing",
    "Support iCal/CalDAV sync for external calendar integration (Google Calendar, Outlook, Apple Calendar)",
    "Implement timezone-aware date handling using date-fns-tz or Luxon; store all dates in UTC with timezone offset",
    "Handle recurring events with RRULE parsing (rrule.js) and individual exception dates",
    "Build a public booking page with customizable time slots, buffer times, and availability rules",
    "Send reminders via email/push/SMS with configurable timing (15 min, 1 hour, 1 day before event)",
  ],
  maps: [
    "Use Mapbox GL JS or Leaflet for interactive maps with custom markers and popup info windows",
    "Implement geocoding (forward and reverse) using Mapbox Geocoding API or Nominatim",
    "Cluster large marker datasets using Supercluster or Mapbox clustering to maintain performance at scale",
    "Support geofencing with server-side radius queries using PostGIS or GeoJSON polygon containment checks",
    "Provide proximity search with distance sorting using database geospatial indexes",
    "Implement route calculation and waypoint optimization for logistics or travel use cases",
  ],
  chat: [
    "Use WebSockets (Socket.io or Pusher) for real-time bi-directional messaging with automatic reconnection",
    "Implement optimistic message sending: show sent messages immediately with a pending indicator, confirm on server ack",
    "Support message types: text, image, file, code blocks with syntax highlighting, and rich embeds (links, videos)",
    "Implement typing indicators, read receipts (single/double checkmarks), and message reactions (emojis)",
    "Use virtual scrolling (react-virtual) for message lists to handle large histories without DOM bloat",
    "Implement end-to-end encryption using the Olm/Megolm protocol for private conversations",
  ],
  "api-integration": [
    "Create an IntegrationService abstraction with provider-specific adapters implementing a common interface",
    "Implement rate limiting per integration with token bucket algorithm and configurable limits",
    "Use circuit breaker pattern (opossum or custom) to fail fast when external APIs are degraded",
    "Cache API responses with appropriate TTL and stale-while-revalidate for frequently accessed data",
    "Provide an integration health dashboard showing status, latency, error rates, and usage quotas per provider",
    "Implement webhook receivers with signature verification, retry handling, and idempotent processing",
  ],
  webhooks: [
    "Implement webhook payload signing with HMAC-SHA256 and a per-endpoint secret key for verification",
    "Deliver webhooks with retry logic: immediate + 5s, 30s, 5min, 30min, 2h, 6h (exponential backoff with jitter)",
    "Use a dead letter queue for failed deliveries after max retries with manual replay capability",
    "Log all webhook delivery attempts with request/response payloads, status codes, and timing for debugging",
    "Provide a webhook management dashboard with endpoint creation, secret rotation, delivery logs, and replay",
    "Support event filtering so subscribers receive only the event types they need (reduce unnecessary payloads)",
  ],
  "doc-gen": [
    "Use template-based generation with Handlebars, PDFMake, or Docxtemplater for structured document output",
    "Support multiple output formats: PDF (with PDFKit/Playwright), DOCX, HTML, and plain text",
    "Implement data merging with complex nested objects, conditional sections, loops (tables), and image placeholders",
    "Provide a template editor UI with variable insertion, preview rendering, and version management",
    "Generate documents synchronously for small payloads or via background jobs for complex documents with progress tracking",
    "Use Playwright for high-fidelity PDF generation from HTML templates with watermarks, headers, and footers",
  ],
  workflow: [
    "Build a workflow engine with a directed acyclic graph (DAG) execution model using Zustand for state management",
    "Implement trigger types: scheduled (cron), webhook, event-based, manual, and conditional (dependent on previous steps)",
    "Support human-in-the-loop approvals with email notifications, deadline tracking, and escalation on timeout",
    "Log all workflow executions with step-by-step audit trail, duration, input/output snapshots, and error states",
    "Provide a visual workflow builder with drag-and-drop node placement (trigger, action, condition, delay, end)",
    "Implement SLA monitoring per workflow with alerting on approaching breach and automatic escalation",
  ],
  "ab-testing": [
    "Implement server-side experiment assignment with deterministic hashing (user ID → variant) for consistent experience",
    "Track experiment exposure and goal conversion events with a common analytics pipeline and deduplication",
    "Use feature flags (LaunchDarkly, GrowthBook) for gradual rollouts with automatic ramp-up based on error monitoring",
    "Implement statistical analysis with frequentist or Bayesian methods; calculate significance and power",
    "Provide an experiment dashboard with real-time results visualization, sample size estimation, and winner declaration",
    "Auto-stop losing variants to minimize negative impact; auto-promote winning variants as the default experience",
  ],
  realtime: [
    "Use WebSockets (Socket.io with adapter for horizontal scaling) for bidirectional real-time communication",
    "Implement presence detection with online/offline status, last seen timestamps, and active typing indicators",
    "Support collaborative editing using CRDT (Yjs) or OT (ShareJS) for conflict-free concurrent modifications",
    "Use Server-Sent Events (SSE) for one-way real-time updates (notifications, feed updates, price changes) with auto-reconnect",
    "Handle connection state with reconnection backoff, fallback to long-polling, and visible connection status indicators",
    "Scale WebSocket connections horizontally using Redis pub/sub adapter or a dedicated WebSocket service (Pusher, Ably)",
  ],
  ratings: [
    "Implement star rating widgets with half-star precision, hover preview, and animated selection feedback",
    "Support multi-dimensional ratings (quality, value, speed, support) with per-dimension averages and weighted overall score",
    "Add text reviews with character limits, profanity filtering, and media attachments (images, video)",
    "Implement a moderation workflow with auto-flagging (spam, profanity, duplicate) plus manual review queue",
    "Display verified purchase/use badges to distinguish authentic reviews from unverified ones",
    "Provide helpfulness voting (yes/no) with sort options: most recent, highest rated, most helpful",
  ],
  "social-sharing": [
    "Generate Open Graph (og:image, og:title, og:description) and Twitter Card meta tags server-side for all shareable URLs",
    "Provide share buttons for major platforms (X/Twitter, LinkedIn, Facebook, WhatsApp, Email, Copy Link) with share counts",
    "Use the Web Share API for native share dialogs on mobile devices with fallback to custom share modals",
    "Implement social login integration (Google, GitHub, Apple) for personalized sharing features",
    "Track share events as analytics goals with attribution back to the sharing user for referral tracking",
    "Provide customizable share message templates with auto-generated images using @vercel/og or Satori",
  ],
  bookmarking: [
    "Implement user collections (folders) with drag-and-drop reordering and nested organization",
    "Support tagging with autocomplete suggestions, tag clouds, and multi-tag filtering",
    "Provide public/private visibility toggles per collection with shareable links for public collections",
    "Implement full-text search within bookmarks including title, description, tags, and extracted content",
    "Offer browser bookmark import (HTML file upload) with duplicate detection and categorization suggestions",
    "Provide RSS feed generation per collection for external consumption and integration with feed readers",
  ],
  invitations: [
    "Generate unique invite codes with cryptographic randomness and configurable expiration (24h default)",
    "Support multiple delivery channels: email (rich HTML), SMS (short link), and direct shareable link",
    "Track the full invite funnel: sent → opened → clicked → registered → activated → converted",
    "Implement referral rewards with tiered incentives (refer 1 = reward A, refer 5 = reward B) and leaderboards",
    "Provide an invite management dashboard with sent invites, pending RSVPs, and conversion analytics",
    "Handle edge cases: expired invites, max usage reached, revoked invites, and duplicate registrations",
  ],
};

function getFeaturePatterns(feature: string): string[] {
  return featurePatterns[feature] ?? [];
}

