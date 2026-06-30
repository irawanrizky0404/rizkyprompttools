"use client";

import type { FC } from "react";
import {
  User, Target, TrendingUp, ListChecks, Hash, Link2,
  ShieldCheck, Tags, Mail, ShoppingCart, Activity, Settings,
  Search, Bell, BookOpen, Users, CreditCard, Globe,
  MapPin, Clock, Upload, Download, Star, Heart, Zap,
  MonitorSmartphone, Lock, MessageSquare, FileText, Eye,
  Briefcase, GraduationCap, Home, Plane, Dumbbell,
  Database, Edit, Plus, Server, Trash2,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  userPersona: [
    { id: "admin", title: "System Admin", description: "Manages users, permissions, and configuration", icon: Settings },
    { id: "end-user", title: "End User", description: "Primary user of the application features", icon: User },
    { id: "manager", title: "Manager", description: "Oversees team performance and reports", icon: Briefcase },
    { id: "customer", title: "Customer", description: "Pays for and consumes the product/service", icon: ShoppingCart },
    { id: "support", title: "Support Agent", description: "Handles incoming issues and tickets", icon: MessageSquare },
    { id: "developer", title: "Developer", description: "Builds and maintains the system", icon: MonitorSmartphone },
    { id: "analyst", title: "Data Analyst", description: "Runs reports and extracts insights", icon: Activity },
    { id: "guest", title: "Guest / Anonymous", description: "Unregistered user with limited access", icon: Eye },
  ],
  goalAction: [
    { id: "create", title: "Create / Add", description: "Create a new resource, record, or entry", icon: Plus },
    { id: "view", title: "View / Read", description: "Access and review existing information", icon: Eye },
    { id: "edit", title: "Edit / Update", description: "Modify existing data or content", icon: Edit },
    { id: "delete", title: "Delete / Remove", description: "Remove an existing resource", icon: Trash2 },
    { id: "search", title: "Search / Filter", description: "Find specific content using search", icon: Search },
    { id: "export", title: "Export / Download", description: "Download data in a structured format", icon: Download },
    { id: "share", title: "Share / Notify", description: "Share content with or notify others", icon: Bell },
    { id: "approve", title: "Approve / Reject", description: "Review and approve or reject a request", icon: ShieldCheck },
  ],
  businessValue: [
    { id: "efficiency", title: "Efficiency Gain", description: "Reduce time or steps to complete a task", icon: Zap },
    { id: "revenue", title: "Revenue Increase", description: "Drive more sales, upsells, or conversions", icon: TrendingUp },
    { id: "retention", title: "User Retention", description: "Improve stickiness and reduce churn", icon: Heart },
    { id: "compliance", title: "Compliance & Risk", description: "Meet regulatory or security requirements", icon: Lock },
    { id: "satisfaction", title: "Customer Satisfaction", description: "Improve CSAT, NPS, or user happiness", icon: Star },
    { id: "accuracy", title: "Data Accuracy", description: "Reduce errors and improve data quality", icon: Activity },
    { id: "visibility", title: "Transparency / Visibility", description: "Provide insight into processes or data", icon: Eye },
    { id: "automation", title: "Automation", description: "Replace manual work with automated flows", icon: Settings },
  ],
  acceptanceCriteria: [
    { id: "functional", title: "Functional Correctness", description: "Feature works as expected per spec", icon: ListChecks },
    { id: "validation", title: "Input Validation", description: "Validates inputs and handles errors gracefully", icon: ShieldCheck },
    { id: "edge-cases", title: "Edge Case Handling", description: "Handles empty states, errors, and boundaries", icon: Activity },
    { id: "responsive", title: "Responsive UI", description: "Works on mobile, tablet, and desktop", icon: MonitorSmartphone },
    { id: "performance", title: "Performance Threshold", description: "Loads within defined time limits", icon: Zap },
    { id: "accessibility", title: "Accessibility", description: "Meets WCAG 2.1 AA standards", icon: Eye },
    { id: "security", title: "Security Requirements", description: "No XSS, CSRF, SQLI vulnerabilities", icon: Lock },
    { id: "logging", title: "Logging & Monitoring", description: "Logs key events for debugging and audit", icon: FileText },
  ],
  storyPoints: [
    { id: "1", title: "1 Point — Trivial", description: "Simple change, few minutes to complete", icon: Hash },
    { id: "2", title: "2 Points — Small", description: "Straightforward, well-understood work", icon: Hash },
    { id: "3", title: "3 Points — Medium", description: "Average complexity, some unknowns", icon: Hash },
    { id: "5", title: "5 Points — Large", description: "Significant effort, multiple subtasks", icon: Hash },
    { id: "8", title: "8 Points — Extra Large", description: "Complex feature, needs breaking down", icon: Hash },
    { id: "13", title: "13 Points — Epic", description: "Very large, should be split into stories", icon: Activity },
    { id: "spike", title: "Spike / Research", description: "Investigation before estimation", icon: Search },
    { id: "0", title: "0 Points — Chore", description: "Maintenance task, no user-facing value", icon: Settings },
  ],
  dependencies: [
    { id: "api", title: "API / Backend", description: "Requires new or updated API endpoint", icon: Server },
    { id: "design", title: "Design / UX", description: "Waits on mockups or design system", icon: Eye },
    { id: "db-schema", title: "Database Schema", description: "Needs schema migration or new table", icon: Database },
    { id: "third-party", title: "Third-Party Service", description: "Depends on external vendor integration", icon: Globe },
    { id: "auth", title: "Authentication / AuthZ", description: "Requires role/permission changes", icon: Lock },
    { id: "content", title: "Content / Copy", description: "Needs finalized text or translations", icon: FileText },
    { id: "infra", title: "Infrastructure", description: "Requires new infra or config changes", icon: Settings },
    { id: "testing", title: "Test Environment", description: "Needs test data or environment setup", icon: ListChecks },
  ],
  definitionOfDone: [
    { id: "code-reviewed", title: "Code Reviewed", description: "PR approved by at least one peer", icon: Users },
    { id: "unit-tested", title: "Unit Tests Pass", description: "All unit tests written and passing", icon: ListChecks },
    { id: "integration-tested", title: "Integration Tests", description: "Integration tests cover the change", icon: Link2 },
    { id: "qa-verified", title: "QA Verified", description: "QA team has tested and signed off", icon: ShieldCheck },
    { id: "docs-updated", title: "Documentation Updated", description: "README, API docs, or user guide updated", icon: FileText },
    { id: "deployed-staging", title: "Deployed to Staging", description: "Running and verified in staging env", icon: Upload },
    { id: "a11y-checked", title: "Accessibility Checked", description: "Accessibility audit completed", icon: Eye },
    { id: "perf-checked", title: "Performance Checked", description: "Performance benchmarks met", icon: Zap },
  ],
  labelsTags: [
    { id: "frontend", title: "Frontend", description: "UI, component, or client-side work", icon: MonitorSmartphone },
    { id: "backend", title: "Backend", description: "Server-side, API, or business logic", icon: Server },
    { id: "bug", title: "Bug", description: "Defect or unexpected behavior fix", icon: Activity },
    { id: "enhancement", title: "Enhancement", description: "Improvement to existing feature", icon: TrendingUp },
    { id: "feature", title: "Feature", description: "Net-new capability or module", icon: Star },
    { id: "tech-debt", title: "Tech Debt", description: "Refactoring or code quality improvement", icon: Settings },
    { id: "design", title: "Design", description: "Visual design or UX-related change", icon: Eye },
    { id: "urgent", title: "Urgent", description: "High priority, time-sensitive work", icon: Zap },
  ],
};

const dict: Record<string, Record<string, string>> = {
  userPersona: {
    admin: "The System Administrator is responsible for managing user accounts, configuring system settings, monitoring activity, and maintaining security policies. They need clear audit trails and bulk operations for user management.",
    "end-user": "The End User is the primary consumer of the application's features. They value intuitive interfaces, fast load times, and task completion with minimal friction. Their workflows should be self-explanatory.",
    manager: "The Manager oversees team performance and requires dashboards, reporting, and analytics to track progress. They need the ability to delegate tasks, review work, and generate summary reports for stakeholders.",
    customer: "The Customer purchases or subscribes to the product. They care about pricing transparency, onboarding experience, reliable service, and responsive support. Their satisfaction directly impacts retention and revenue.",
    support: "The Support Agent handles incoming customer issues and requests. They need quick access to user context, history, and relevant data to resolve tickets efficiently. Agent productivity tools reduce resolution time.",
    developer: "The Developer builds and maintains the system. They need clear API contracts, thorough documentation, sandbox environments, and observability tools. Developer experience directly affects delivery velocity.",
    analyst: "The Data Analyst extracts insights from system data for business decisions. They need flexible query tools, export capabilities, and the ability to slice data across multiple dimensions without engineering support.",
    guest: "The Guest or Anonymous user has limited access without authentication. They can browse public content, view marketing pages, and possibly use trial features. The path from guest to registered user should be frictionless.",
  },
  goalAction: {
    create: "The user wants to create a new resource: a record, document, order, ticket, or entry. The system should provide a clear form with validation, confirmation feedback, and the ability to add related information in context.",
    view: "The user wants to view or read existing information. The display should be well-formatted, readable, and show the most relevant details prominently. Support for different view modes (list, detail, card) enhances usability.",
    edit: "The user wants to modify existing data. Pre-populate the form with current values and validate changes before saving. Show a visual diff when appropriate and provide undo capabilities where feasible.",
    delete: "The user wants to remove a resource. Require confirmation with a clear description of consequences. Support soft-delete where possible and provide recovery mechanisms for accidental deletions.",
    search: "The user wants to find specific content. Provide a search bar with autocomplete, filters, and facets. Results should rank by relevance and support quick preview without opening each item.",
    export: "The user wants to download data for offline use or analysis. Support common formats (CSV, Excel, PDF). Respect data volume limits and provide notifications when large exports are ready.",
    share: "The user wants to share content or notify others. Provide shareable links with permission controls, in-app notifications, and integration with email or Slack for external sharing.",
    approve: "The user wants to review and approve or reject a pending request. Show the context and diff clearly. One-click approval saves time; require comments for rejection to maintain an audit trail.",
  },
  businessValue: {
    efficiency: "Reducing the number of steps or time required to complete a task directly increases productivity. Measure as time saved per user per day. High-impact for frequently performed tasks in the user workflow.",
    revenue: "Features that drive sales, upsells, cross-sells, or reduce purchase friction directly impact top-line growth. Track conversion rate improvements, average order value increases, or new revenue stream enablement.",
    retention: "Improving user retention reduces churn and increases lifetime value. Focus on stickiness features, habit loops, personalization, and reducing time-to-value for new users.",
    compliance: "Meeting regulatory requirements (GDPR, SOC2, HIPAA) is mandatory for many markets. Compliance features reduce legal risk, enable market access, and build customer trust through security certifications.",
    satisfaction: "Customer satisfaction (CSAT, NPS) improvements lead to organic growth via referrals and reduced support costs. Focus on reliability, UX polish, and delight moments in the user journey.",
    accuracy: "Reducing data entry errors, improving validation, and automating data reconciliation saves downstream rework cost. Accurate data builds trust and enables better decision-making across the organization.",
    visibility: "Providing transparency into processes, data lineage, and decision history empowers users to make informed choices. Dashboards, audit logs, and notifications all contribute to organizational visibility.",
    automation: "Replacing manual, repetitive tasks with automated workflows frees up user time for higher-value work. Measure as hours saved per week across the team. Start with high-frequency, low-complexity tasks.",
  },
  acceptanceCriteria: {
    functional: "The feature must work correctly according to the functional specification. All defined behaviors execute as expected for valid inputs. Core business logic produces correct outputs for all defined scenarios.",
    validation: "Input fields validate data format, required fields, length limits, and type constraints. Error messages are human-readable and appear inline near the relevant field. Invalid submissions are prevented with clear guidance.",
    "edge-cases": "The system gracefully handles empty states (no data), loading states, error states, boundary values, and concurrent access. No unhandled exceptions crash the UI or produce 500 errors for legitimate inputs.",
    responsive: "The UI renders correctly on mobile (320px+), tablet (768px+), and desktop (1024px+). Touch targets are at least 44x44px. Content does not overflow or become hidden on any supported screen size.",
    performance: "Pages load within 2 seconds on a standard broadband connection. API responses return within 500ms for the 95th percentile. UI interactions feel responsive with no jank or visible lag.",
    accessibility: "All interactive elements are keyboard accessible. Screen readers can navigate with proper ARIA labels. Color contrast meets WCAG 2.1 AA (4.5:1 normal, 3:1 large). Focus indicators are visible.",
    security: "No reflected or stored XSS vulnerabilities. CSRF tokens protect state-changing requests. SQL injection is prevented via parameterized queries. Sensitive data is encrypted in transit and at rest.",
    logging: "Key user actions and system events are logged with timestamps, user IDs, and relevant context. Logs are structured for querying. Error logs include stack traces and request context for debugging.",
  },
  storyPoints: {
    "1": "Trivial effort — a simple text change, CSS adjustment, or configuration update. Can be completed and reviewed within a few hours. No testing overhead or deployment complexity. Confidence is very high.",
    "2": "Small, well-understood task with clear requirements. A single unit of work that one developer can complete in half a day. Minimal unknowns. Simple testing and straightforward code review.",
    "3": "Average complexity with some unknowns. Requires implementing a feature across one layer (frontend or backend). May need a new API endpoint or a UI component. A developer can complete in about a day.",
    "5": "Larger effort spanning multiple layers or requiring coordination. Typically involves frontend + backend changes, database migration, or integration with an external service. May need 2-3 days of work.",
    "8": "Complex feature with several subtasks and dependencies. Likely needs to be broken into smaller stories for planning. Involves significant scope, multiple team members, or integration with multiple systems.",
    "13": "Very large effort — an epic that must be decomposed into multiple smaller stories before scheduling. Involves cross-team coordination, architectural decisions, or significant research and design work.",
    spike: "A spike is time-boxed research or investigation to reduce uncertainty. Output is knowledge, a prototype, or a decision document — not production code. Usually 1-2 days maximum.",
    "0": "A chore is a maintenance or operational task with no direct user value. Examples: updating dependencies, fixing build warnings, improving test coverage, or cleaning up code. Typically assigned 0 story points.",
  },
  dependencies: {
    api: "This story requires new or modified API endpoints. The API contract (request/response schema) must be defined before frontend work can begin. Consider parallelizing where API mocking is feasible for frontend development.",
    design: "This story depends on finalized design mockups, UX flows, or design system components. Design should be completed and reviewed before development starts to avoid rework and ensure visual consistency.",
    "db-schema": "This story needs database schema changes — new tables, columns, indexes, or migrations. The migration must be backward-compatible or carefully orchestrated with zero-downtime deployment strategies.",
    "third-party": "This story integrates with an external service or vendor API. Account setup, API key provisioning, rate limits, and SLA terms must be sorted before development. Sandbox environments are essential for testing.",
    auth: "This story requires changes to authentication or authorization logic. New roles, permissions, or authentication methods. Ensure existing sessions and tokens remain valid after deployment.",
    content: "This story needs finalized copy, translations, or media assets. Content should be approved and available before the feature is complete. Placeholder content should be clearly marked to avoid accidental production use.",
    infra: "This story needs infrastructure changes — new services, DNS records, load balancer rules, CDN configuration, or compute instance scaling. Infrastructure changes require lead time for provisioning and testing.",
    testing: "This story needs test data, test environment configuration, or test account setup. Without proper test infrastructure, quality validation is compromised and release confidence decreases.",
  },
  definitionOfDone: {
    "code-reviewed": "All code changes have been reviewed and approved by at least one peer reviewer. Review comments have been addressed. The PR follows the team's coding standards and conventions.",
    "unit-tested": "Unit tests cover the new code with meaningful assertions. Edge cases are tested. Test coverage threshold (if defined) is met. All tests pass in CI before merge.",
    "integration-tested": "Integration tests verify that the feature works correctly with real or simulated dependencies. API contract tests ensure backward compatibility. Database interaction tests validate queries and migrations.",
    "qa-verified": "A QA team member has tested the feature in a staging environment against the acceptance criteria. All defined scenarios pass. Any discovered bugs are logged and triaged before the story is marked done.",
    "docs-updated": "Relevant documentation has been updated: user-facing help articles, API reference docs, README, architecture decision records (ADRs), or inline code comments. Documentation is reviewed for accuracy.",
    "deployed-staging": "The feature is deployed to the staging environment and verified to work with production-like data and configuration. Smoke tests pass in staging before the feature is considered for production release.",
    "a11y-checked": "Accessibility has been validated using automated tools (axe, Lighthouse) and manual keyboard navigation. Contrast ratios, focus order, and screen reader announcements are verified against WCAG 2.1 AA.",
    "perf-checked": "Performance benchmarks have been run and meet defined thresholds. Key metrics include page load time, API response time, memory usage, and database query performance under load.",
  },
  labelsTags: {
    frontend: "Work is on the client-side application: UI components, state management, routing, styling, and browser APIs. May include React components, CSS, client-side data fetching, and progressive enhancement.",
    backend: "Work is on the server-side: API endpoints, business logic, authentication, external integrations, and database queries. May include REST/GraphQL APIs, middleware, background jobs, and server utilities.",
    bug: "The work addresses a defect where the system does not behave as expected. Bugs have clear reproduction steps, expected vs. actual behavior, and may include a severity assessment for prioritization.",
    enhancement: "The work improves an existing feature without adding net-new capabilities. Improvements include UX polish, performance optimization, code quality improvement, or better error handling.",
    feature: "The work introduces a net-new capability, module, or functionality that did not previously exist in the system. Features typically have their own requirements, design, and acceptance criteria.",
    "tech-debt": "The work addresses accumulated technical debt: refactoring, updating deprecated dependencies, removing dead code, improving test coverage, or improving system architecture without changing behavior.",
    design: "The work involves visual design, UX flows, interaction design, or design system contributions. May include mockups, prototypes, user research, or design token definitions.",
    urgent: "The work is time-sensitive and should be prioritized above other in-progress work. Urgent items may include production incidents, security patches, or time-bound regulatory requirements.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const userPersona = selections.step1;
  const goalAction: string[] = selections.step2 || [];
  const businessValue = selections.step3;
  const acceptanceCriteria: string[] = selections.step4 || [];
  const storyPoints = selections.step5;
  const dependencies: string[] = selections.step6 || [];
  const definitionOfDone: string[] = selections.step7 || [];
  const labelsTags: string[] = selections.step8 || [];

  const lines: string[] = [];

  lines.push("# User Story");
  lines.push("");
  const personaLabel = Array.isArray(userPersona) ? userPersona.map(id => options.userPersona.find(o => o.id === id)?.title || id).join(", ") : options.userPersona.find(o => o.id === userPersona)?.title || "User";
  const goalLabels = goalAction.map(id => options.goalAction.find(o => o.id === id)?.title?.toLowerCase() || id).join(", ");
  const valueLabel = options.businessValue.find(o => o.id === businessValue)?.title || "";

  const goalText = goalAction.length > 1
    ? `I can ${goalLabels}`
    : `I can ${goalLabels}`;

  lines.push("## Story");
  lines.push("");
  lines.push(`**As a** ${personaLabel},`);
  lines.push(`**I want** ${goalText}`);
  if (valueLabel) lines.push(`**So that** ${valueLabel.toLowerCase()}`);
  lines.push("");

  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const pNote = notes[`userPersona-${userPersona}`] || "";
  lines.push(`| User Persona | ${personaLabel} | ${pNote}`);
  const gLabels = goalAction.map(id => options.goalAction.find(o => o.id === id)?.title || id).join(", ");
  const gNotes = goalAction.map(id => notes[`goalAction-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Goal / Action | ${gLabels} | ${gNotes}`);
  const bvLabel = Array.isArray(businessValue) ? businessValue.map(id => options.businessValue.find(o => o.id === id)?.title || id).join(", ") : options.businessValue.find(o => o.id === businessValue)?.title || businessValue;
  const bvNote = notes[`businessValue-${businessValue}`] || "";
  lines.push(`| Business Value | ${bvLabel} | ${bvNote}`);
  const acLabels = acceptanceCriteria.map(id => options.acceptanceCriteria.find(o => o.id === id)?.title || id).join(", ");
  const acNotes = acceptanceCriteria.map(id => notes[`acceptanceCriteria-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Acceptance Criteria | ${acLabels || "None"} | ${acNotes}`);
  const spLabel = Array.isArray(storyPoints) ? storyPoints.map(id => options.storyPoints.find(o => o.id === id)?.title || id).join(", ") : options.storyPoints.find(o => o.id === storyPoints)?.title || storyPoints;
  const spNote = notes[`storyPoints-${storyPoints}`] || "";
  lines.push(`| Story Points | ${spLabel} | ${spNote}`);
  const dLabels = dependencies.map(id => options.dependencies.find(o => o.id === id)?.title || id).join(", ");
  const dNotes = dependencies.map(id => notes[`dependencies-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Dependencies | ${dLabels || "None"} | ${dNotes}`);
  const dodLabels = definitionOfDone.map(id => options.definitionOfDone.find(o => o.id === id)?.title || id).join(", ");
  const dodNotes = definitionOfDone.map(id => notes[`definitionOfDone-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Definition of Done | ${dodLabels || "None"} | ${dodNotes}`);
  const lLabels = labelsTags.map(id => options.labelsTags.find(o => o.id === id)?.title || id).join(", ");
  const lNotes = labelsTags.map(id => notes[`labelsTags-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Labels / Tags | ${lLabels || "None"} | ${lNotes}`);
  lines.push("");

  if (userPersona) {
    lines.push("## User Persona");
    lines.push("");
    lines.push(Array.isArray(userPersona) ? userPersona.map(v => dict.userPersona[v] || v).join(", ") : dict.userPersona[userPersona] || userPersona);
    lines.push("");
  }

  if (goalAction.length > 0) {
    lines.push("## Goal / Action");
    lines.push("");
    for (const gId of goalAction) {
      const label = options.goalAction.find(o => o.id === gId)?.title || gId;
      lines.push(`- **${label}**: ${dict.goalAction[gId] || ""}`);
    }
    lines.push("");
  }

  if (businessValue) {
    lines.push("## Business Value");
    lines.push("");
    lines.push(Array.isArray(businessValue) ? businessValue.map(v => dict.businessValue[v] || v).join(", ") : dict.businessValue[businessValue] || businessValue);
    lines.push("");
  }

  if (acceptanceCriteria.length > 0) {
    lines.push("## Acceptance Criteria");
    lines.push("");
    for (const acId of acceptanceCriteria) {
      const label = options.acceptanceCriteria.find(o => o.id === acId)?.title || acId;
      lines.push(`- [ ] ${label}: ${dict.acceptanceCriteria[acId] || ""}`);
    }
    lines.push("");
  }

  if (storyPoints) {
    lines.push("## Story Points");
    lines.push("");
    lines.push(Array.isArray(storyPoints) ? storyPoints.map(v => dict.storyPoints[v] || v).join(", ") : dict.storyPoints[storyPoints] || storyPoints);
    lines.push("");
  }

  if (dependencies.length > 0) {
    lines.push("## Dependencies");
    lines.push("");
    for (const dId of dependencies) {
      const label = options.dependencies.find(o => o.id === dId)?.title || dId;
      lines.push(`- **${label}**: ${dict.dependencies[dId] || ""}`);
    }
    lines.push("");
  }

  if (definitionOfDone.length > 0) {
    lines.push("## Definition of Done");
    lines.push("");
    for (const dodId of definitionOfDone) {
      const label = options.definitionOfDone.find(o => o.id === dodId)?.title || dodId;
      lines.push(`- [ ] ${label}: ${dict.definitionOfDone[dodId] || ""}`);
    }
    lines.push("");
  }

  if (labelsTags.length > 0) {
    lines.push("## Labels / Tags");
    lines.push("");
    const labels = labelsTags.map(id => {
      const l = options.labelsTags.find(o => o.id === id)?.title || id;
      return `\`${l}\``;
    }).join(" ");
    lines.push(labels);
    lines.push("");
    for (const lId of labelsTags) {
      const label = options.labelsTags.find(o => o.id === lId)?.title || lId;
      lines.push(`- **${label}**: ${dict.labelsTags[lId] || ""}`);
    }
    lines.push("");
  }

  lines.push("## Notes & Context");
  lines.push("");
  lines.push("### User Persona Notes");
  const pn = notes[`userPersona-${userPersona}`] || "(none provided)";
  lines.push(`> ${pn}`);
  lines.push("");
  lines.push("### Goal / Action Notes");
  for (const gId of goalAction) {
    const gn = notes[`goalAction-${gId}`] || "(none provided)";
    const gl = options.goalAction.find(o => o.id === gId)?.title || gId;
    lines.push(`- **${gl}**: ${gn}`);
  }
  lines.push("");
  lines.push("### Additional Context");
  lines.push("");
  lines.push("- **Priority**: TBD (to be determined with product owner)");
  lines.push("- **Assignee**: TBD");
  lines.push("- **Sprint**: TBD");
  if (storyPoints) {
    const sp = options.storyPoints.find(o => o.id === storyPoints)?.title || storyPoints;
    lines.push(`- **Estimate**: ${sp}`);
  }
  lines.push("");

  lines.push("## Implementation Guidance");
  lines.push("");
  lines.push("### Technical Approach");
  lines.push("");
  if (labelsTags.includes("frontend")) {
    lines.push("- Build UI components following the existing design system and component library.");
    lines.push("- Use the project's state management pattern for local and shared state.");
    lines.push("- Ensure responsive layout and loading/empty/error states.");
  }
  if (labelsTags.includes("backend")) {
    lines.push("- Implement a new API endpoint following RESTful conventions.");
    lines.push("- Add input validation, error handling, and request logging.");
    lines.push("- Write integration tests covering success and failure scenarios.");
  }
  if (dependencies.includes("db-schema")) {
    lines.push("- Create a new database migration with backward-compatible schema changes.");
    lines.push("- Add indexes for columns used in WHERE and ORDER BY clauses.");
  }
  if (dependencies.includes("api")) {
    lines.push("- Define the API contract before starting frontend implementation.");
    lines.push("- Use mock data or a stub server for parallel frontend development.");
  }
  lines.push("");

  lines.push("### Testing Strategy");
  lines.push("");
  lines.push("| Type | Scope | Required");
  lines.push("|------|-------|---------");
  if (definitionOfDone.includes("unit-tested")) lines.push("| Unit Tests | Isolated functions and components | Yes");
  if (definitionOfDone.includes("integration-tested")) lines.push("| Integration Tests | API, database, and service interactions | Yes");
  if (acceptanceCriteria.includes("responsive")) lines.push("| Visual Regression | Responsive layout breakpoints | Yes");
  if (acceptanceCriteria.includes("accessibility")) lines.push("| Accessibility | Keyboard nav, screen reader, contrast | Yes");
  if (acceptanceCriteria.includes("performance")) lines.push("| Performance | Load time, API response time | Yes");
  lines.push("| Smoke Tests | End-to-end flow verification | Recommended");
  lines.push("");

  lines.push("### Risk Assessment");
  lines.push("");
  if (storyPoints === "8" || storyPoints === "13") {
    lines.push("- **Risk Level**: High — consider breaking into smaller stories.");
  } else if (storyPoints === "5") {
    lines.push("- **Risk Level**: Medium — monitor progress closely.");
  } else {
    lines.push("- **Risk Level**: Low — straightforward implementation.");
  }
  if (dependencies.length > 0) lines.push("- **Blocker Risk**: Dependent on " + dLabels + " — unblock before starting.");
  if (dependencies.includes("third-party")) lines.push("- **Vendor Risk**: External integration may have SLA or API limitations.");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Agile User Story Writer_");

  return lines.join("\n");
}

export default function UserStoryPage() {
  return (
    <ToolShell
      title="Agile User Story Writer"
      steps={[
        { id: 1, label: "User Persona", component: (p) => (
          <GenericStep {...p} title="Select User Persona" description="Who is this story for?" options={options.userPersona} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="userPersona" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Goal / Action", component: (p) => (
          <GenericStep {...p} title="Select Goal or Action" description="What does the user want to do?" options={options.goalAction} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="goalAction" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Business Value", component: (p) => (
          <GenericStep {...p} title="Business Value" description="Why is this valuable?" options={options.businessValue} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="businessValue" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Acceptance", component: (p) => (
          <GenericStep {...p} title="Acceptance Criteria" description="What defines completion?" options={options.acceptanceCriteria} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="acceptanceCriteria" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Story Points", component: (p) => (
          <GenericStep {...p} title="Story Points / Effort" description="How much effort is this story?" options={options.storyPoints} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="storyPoints" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Dependencies", component: (p) => (
          <GenericStep {...p} title="Dependencies" description="What does this story depend on?" options={options.dependencies} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="dependencies" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Def of Done", component: (p) => (
          <GenericStep {...p} title="Definition of Done" description="What must be true to call this done?" options={options.definitionOfDone} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="definitionOfDone" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Labels", component: (p) => (
          <GenericStep {...p} title="Labels / Tags" description="How should this story be categorized?" options={options.labelsTags} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="labelsTags" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}










