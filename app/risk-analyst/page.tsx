"use client";

import type { FC } from "react";
import {
  Target, Code, Users, Clock, DollarSign, Globe, Shield,
  Activity, AlertTriangle, Layers, GitBranch, Package,
  Database, Cloud, Zap, Lock,   Eye, BookOpen, Building2, Scale,
  TrendingUp, BarChart, CheckCircle, XCircle, HelpCircle,
  FileText, Sliders, RotateCcw, RefreshCw, Bell,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  scope: [
    { id: "new-feature", title: "New Feature", description: "Building a new feature within an existing product", icon: Zap },
    { id: "greenfield", title: "Greenfield Product", description: "Building a brand-new product from scratch", icon: Layers },
    { id: "migration", title: "System Migration", description: "Migrating from one system or platform to another", icon: GitBranch },
    { id: "integration", title: "Third-Party Integration", description: "Integrating with an external API or service", icon: Package },
    { id: "refactor", title: "Code Refactor", description: "Significant refactoring of existing codebase", icon: RotateCcw },
    { id: "security-audit", title: "Security Audit", description: "Security review or penetration testing engagement", icon: Shield },
    { id: "infra", title: "Infrastructure Upgrade", description: "Updating cloud or on-prem infrastructure", icon: Cloud },
    { id: "compliance", title: "Compliance Overhaul", description: "Making system compliant with new regulations", icon: Scale },
    { id: "deprecation", title: "System Deprecation", description: "Retiring a legacy system and data migration", icon: XCircle },
  ],
  stack: [
    { id: "javascript", title: "JavaScript / Node.js", description: "Full-stack JavaScript ecosystem (React, Express, Node)", icon: Code },
    { id: "python", title: "Python", description: "Python-based stack (Django, Flask, FastAPI)", icon: Code },
    { id: "java", title: "Java / JVM", description: "Java ecosystem (Spring, Kotlin, Scala)", icon: Code },
    { id: "dotnet", title: ".NET / C#", description: "Microsoft .NET ecosystem (ASP.NET, Blazor)", icon: Code },
    { id: "go", title: "Go", description: "Go-based microservices and backend systems", icon: Code },
    { id: "rust", title: "Rust", description: "Rust for systems programming and performance-critical apps", icon: Code },
    { id: "mobile", title: "Mobile (iOS/Android)", description: "Native or cross-platform mobile development", icon: Database },
    { id: "cloud-native", title: "Cloud Native", description: "Kubernetes, serverless, and cloud-managed services", icon: Cloud },
    { id: "multi-platform", title: "Multi-Platform", description: "Combination of multiple tech stacks and platforms", icon: Layers },
  ],
  team: [
    { id: "solo", title: "Solo Developer", description: "Single person handling all aspects of the project", icon: Users },
    { id: "small", title: "Small Team (2-4)", description: "Small team with core competencies covered", icon: Users },
    { id: "medium", title: "Medium Team (5-10)", description: "Larger team with specialized roles", icon: Users },
    { id: "large", title: "Large Team (11-25)", description: "Multiple sub-teams working on different areas", icon: Users },
    { id: "enterprise", title: "Enterprise (25+)", description: "Large organization with multiple departments", icon: Building2 },
    { id: "distributed", title: "Distributed / Remote", description: "Team spread across time zones and locations", icon: Globe },
    { id: "cross-functional", title: "Cross-Functional", description: "Team includes dev, QA, design, product, and ops", icon: Layers },
    { id: "outsourced", title: "Outsourced / Agency", description: "Work done by external vendors or contractors", icon: Package },
    { id: "mixed", title: "Mixed In-House + Vendor", description: "Combination of internal team and external contractors", icon: Users },
  ],
  timeline: [
    { id: "urgent", title: "Urgent (< 1 month)", description: "Extremely tight deadline with critical priority", icon: Clock },
    { id: "short", title: "Short (1-3 months)", description: "Short project with well-defined scope", icon: Clock },
    { id: "medium-timeline", title: "Medium (3-6 months)", description: "Standard project timeline with moderate complexity", icon: Clock },
    { id: "long", title: "Long (6-12 months)", description: "Extended timeline for complex initiatives", icon: Clock },
    { id: "multi-year", title: "Multi-Year (12+ months)", description: "Large-scale program spanning multiple years", icon: Clock },
    { id: "ongoing", title: "Ongoing / Maintenance", description: "Continuous project with no fixed end date", icon: RefreshCw },
    { id: "milestone", title: "Milestone-Based", description: "Timeline structured around specific delivery milestones", icon: Target },
    { id: "rolling", title: "Rolling Wave", description: "Iterative planning with rolling wave refinement", icon: Layers },
    { id: "fixed-date", title: "Fixed Date (Hard Deadline)", description: "Immutable deadline with regulatory or contractual basis", icon: AlertTriangle },
  ],
  budget: [
    { id: "minimal", title: "Minimal (< $10K)", description: "Very limited budget, must optimize for cost", icon: DollarSign },
    { id: "small-budget", title: "Small ($10K-$50K)", description: "Modest budget for a focused project", icon: DollarSign },
    { id: "medium-budget", title: "Medium ($50K-$200K)", description: "Comfortable budget for a standard project", icon: DollarSign },
    { id: "large-budget", title: "Large ($200K-$1M)", description: "Significant budget with room for quality investment", icon: DollarSign },
    { id: "enterprise-budget", title: "Enterprise ($1M+)", description: "Large-scale budget for enterprise-grade delivery", icon: DollarSign },
    { id: "fixed-budget", title: "Fixed (Not Flexible)", description: "Budget is fixed and cannot be exceeded", icon: Shield },
    { id: "variable", title: "Variable (Time & Materials)", description: "Budget that can scale with scope changes", icon: Activity },
    { id: "funded", title: "Fully Funded", description: "Budget fully approved with contingency reserve", icon: CheckCircle },
    { id: "pending", title: "Pending Approval", description: "Budget not yet approved, business case required", icon: HelpCircle },
  ],
  dependencies: [
    { id: "none-deps", title: "No External Dependencies", description: "Everything can be built and delivered in-house", icon: CheckCircle },
    { id: "api-deps", title: "Third-Party APIs", description: "Relies on external APIs with varying reliability", icon: Globe },
    { id: "vendor-software", title: "Vendor Software", description: "Depends on third-party licensed software", icon: Package },
    { id: "hardware", title: "Hardware Dependencies", description: "Requires specific hardware or IoT devices", icon: Database },
    { id: "data-deps", title: "External Data Sources", description: "Relies on data from external partners or feeds", icon: Database },
    { id: "cross-team", title: "Cross-Team Dependencies", description: "Requires deliverables from other internal teams", icon: Users },
    { id: "regulatory", title: "Regulatory Approvals", description: "Needs regulatory sign-off before launch", icon: Shield },
    { id: "open-source", title: "Open Source Libraries", description: "Heavily reliant on open-source ecosystem packages", icon: Code },
    { id: "cloud-services", title: "Cloud Service Dependencies", description: "Depends on specific cloud provider services", icon: Cloud },
  ],
  compliance: [
    { id: "gdpr", title: "GDPR", description: "EU General Data Protection Regulation", icon: Shield },
    { id: "hipaa", title: "HIPAA", description: "US Health Insurance Portability and Accountability Act", icon: Shield },
    { id: "soc2", title: "SOC 2", description: "Service Organization Control 2 compliance", icon: Shield },
    { id: "pci-dss", title: "PCI-DSS", description: "Payment Card Industry Data Security Standard", icon: Shield },
    { id: "ccpa", title: "CCPA", description: "California Consumer Privacy Act", icon: Shield },
    { id: "iso27001", title: "ISO 27001", description: "Information security management standard", icon: Shield },
    { id: "fedramp", title: "FedRAMP", description: "US federal cloud security standard", icon: Shield },
    { id: "none-compliance", title: "No Specific Compliance", description: "No regulatory compliance requirements", icon: Shield },
    { id: "multiple", title: "Multiple Regulations", description: "Must satisfy several compliance frameworks simultaneously", icon: Scale },
  ],
  risk: [
    { id: "very-low", title: "Very Low Risk", description: "Mature team, proven tech, ample timeline", icon: Activity },
    { id: "low", title: "Low Risk", description: "Mostly predictable with minor uncertainties", icon: Activity },
    { id: "moderate", title: "Moderate Risk", description: "Some unknowns but manageable with planning", icon: Activity },
    { id: "elevated", title: "Elevated Risk", description: "Significant unknowns requiring active mitigation", icon: Activity },
    { id: "high", title: "High Risk", description: "Major uncertainties in tech, scope, or resources", icon: AlertTriangle },
    { id: "very-high", title: "Very High Risk", description: "Multiple high-impact risk factors present", icon: AlertTriangle },
    { id: "critical", title: "Critical Risk", description: "Existential risk to project success", icon: XCircle },
    { id: "balanced", title: "Balanced Portfolio", description: "Mix of low and high risk elements managed together", icon: BarChart },
    { id: "unknown", title: "Unknown / Unassessed", description: "Risk level has not been assessed yet", icon: HelpCircle },
  ],
};

const dict: Record<string, Record<string, string>> = {
  scope: {
    "new-feature": "A discrete new capability added to an existing product. Scope is usually well-defined, with clear acceptance criteria and known integration points. The primary risks involve compatibility with existing systems and feature adoption by users.",
    greenfield: "A brand-new product built from the ground up. Maximum flexibility in technology choices and architecture, but also maximum uncertainty. Risks include undefined requirements, market fit questions, and the need to establish development practices from scratch.",
    migration: "Moving from one system or platform to another, such as database migration, cloud migration, or framework upgrade. Requires careful data integrity validation, downtime planning, rollback procedures, and parallel run periods to ensure zero data loss.",
    integration: "Connecting a new external service or API into the existing ecosystem. Key concerns include API reliability, rate limiting, authentication mechanisms, data format compatibility, and graceful degradation when the external service is unavailable.",
    refactor: "Significant restructuring of existing code without changing external behavior. Risks include regression bugs, extended timelines due to hidden complexity, and developer resistance. Requires comprehensive test coverage and incremental delivery.",
    "security-audit": "A dedicated security assessment engagement including penetration testing, code review, architecture analysis, and vulnerability remediation. Requires careful scope definition, clear rules of engagement, and a structured disclosure and fix process.",
    infra: "Updates to the underlying infrastructure — cloud resources, networking, CI/CD pipelines, monitoring, and deployment tooling. Risks include service downtime during transitions, configuration drift, and the need for comprehensive rollback plans.",
    compliance: "Bringing the system into compliance with new or updated regulations. Requires gap analysis, policy updates, technical controls implementation, audit preparation, and ongoing monitoring. Often has hard deadlines tied to regulatory enforcement dates.",
    deprecation: "Retiring a legacy system, including data migration to replacement systems, user communication, decommissioning timelines, and data retention policy compliance. Risks include data loss, incomplete migration, and user resistance to change.",
  },
  stack: {
    javascript: "JavaScript/Node.js full-stack ecosystem. Includes React, Next.js, Express, TypeScript, and a wide npm package ecosystem. Strengths include large talent pool, fast iteration, and extensive libraries. Risks include dependency bloat and security concerns from transitive dependencies.",
    python: "Python-based stack using Django, Flask, or FastAPI. Excellent for data processing, ML/AI integration, and rapid prototyping. Strong standard library and scientific computing ecosystem. Performance may be a concern for CPU-intensive workloads.",
    java: "Java/JVM ecosystem with Spring Boot, Kotlin, or Scala. Mature, battle-tested frameworks with strong typing and enterprise features. Excellent for large-scale systems but can have slower startup times and higher memory overhead than newer alternatives.",
    dotnet: "Microsoft .NET ecosystem with ASP.NET Core, Blazor, and Azure integration. Strong IDE support, excellent performance, and comprehensive standard library. Best suited for Windows-centric or hybrid cloud environments.",
    go: "Go language for microservices, CLI tools, and network services. Excellent concurrency model, fast compilation, single-binary deployment, and strong standard library. Smaller ecosystem than JavaScript or Python but growing rapidly.",
    rust: "Rust for systems programming with memory safety guarantees and zero-cost abstractions. Ideal for performance-critical components, embedded systems, and WebAssembly. Steep learning curve but unmatched reliability and performance.",
    mobile: "Mobile development for iOS and Android using Swift, Kotlin, or cross-platform frameworks like React Native or Flutter. Requires expertise in platform-specific UI/UX patterns, app store submission processes, and device fragmentation handling.",
    "cloud-native": "Cloud-native architecture using Kubernetes, serverless functions, managed databases, and event-driven services. High scalability and resilience but requires significant DevOps expertise and can have unpredictable costs at scale.",
    "multi-platform": "A combination of multiple technology stacks and platforms. Enables choosing the best tool for each job but increases complexity, requires broader team expertise, and introduces cross-platform integration challenges.",
  },
  team: {
    solo: "A single developer handling all aspects including coding, testing, deployment, and client communication. Fast decision-making but high bus-factor risk. Requires strong self-discipline, broad skillset, and effective use of automation to compensate for limited bandwidth.",
    small: "A team of 2-4 people covering core competencies such as frontend, backend, and design. Close collaboration with minimal overhead. Knowledge sharing is critical to prevent single points of failure. Communication is usually informal and effective.",
    medium: "A team of 5-10 people with specialized roles. Requires structured communication, regular stand-ups, sprint planning, and clear ownership boundaries. Start needing dedicated project management and QA resources.",
    large: "11-25 people organized into sub-teams. Needs formal project management, architectural governance, release management, and cross-team coordination. Communication overhead becomes significant. Requires investment in tooling and documentation.",
    enterprise: "25+ people across multiple departments and locations. Requires program management, portfolio governance, enterprise architecture, and standardized processes. Significant coordination overhead and potential for bureaucracy to slow delivery.",
    distributed: "Team members spread across different time zones and geographic locations. Requires asynchronous communication practices, comprehensive documentation, overlapping working hours for collaboration, and strong written communication culture.",
    "cross-functional": "A team including developers, QA engineers, designers, product managers, and operations staff. Reduces handoff delays and enables autonomous delivery. Requires T-shaped skills and a strong DevOps culture with shared ownership.",
    outsourced: "Work delivered by an external agency or development shop. Requires detailed specification documents, acceptance criteria, milestone reviews, and payment schedules. Quality varies significantly; invest in a strong SOW and QA process.",
    mixed: "A hybrid model combining in-house employees with external contractors or agency teams. Requires careful coordination, clear role boundaries, consistent tooling access, and cultural alignment between internal and external team members.",
  },
  timeline: {
    urgent: "Less than one month to deliver. Requires extreme focus on scope minimization, parallel workstreams, and full-time dedication. Most features must be deferred. Risk of burnout is high. Only proceed if the business impact justifies the compressed timeline.",
    short: "1-3 month delivery window suitable for well-defined features or MVPs. Requires disciplined scope management, frequent delivery increments, and minimal process overhead. Adequate for features with clear requirements and limited unknowns.",
    "medium-timeline": "3-6 months for a standard project with moderate complexity. Allows for proper discovery, design, development, testing, and rollout phases. Sufficient time for 2-3 major iterations and meaningful user feedback incorporation.",
    long: "6-12 months for complex initiatives with multiple workstreams. Requires milestone planning, regular stakeholder reviews, and adaptive planning. Risks include requirement drift, team changes, and technology evolution during the extended period.",
    "multi-year": "12+ months for large-scale programs. Requires multi-phase planning, annual budgeting cycles, governance committees, and benefit realization tracking. Must account for technology obsolescence, team turnover, and evolving business priorities.",
    ongoing: "Continuous delivery model with no fixed end date. Typical for platform teams, maintenance, and live service development. Requires sustainable pace, backlog management, and regular prioritization. Focus on incremental value delivery and technical debt management.",
    milestone: "Timeline structured around specific delivery milestones with defined exit criteria. Each milestone represents a significant capability or decision gate. Enables stage-gate governance but can create idle time between milestones if not carefully sequenced.",
    rolling: "Rolling wave planning where near-term work is detailed and future work is kept at a high level. Plans are refined as the project progresses and more information becomes available. Balances the need for direction with flexibility to adapt.",
    "fixed-date": "An immutable deadline driven by regulatory requirements, contractual obligations, or market events. No flexibility on the end date. Risk mitigation involves scope flexibility, contingency buffers, and early identification of critical path items.",
  },
  budget: {
    minimal: "Under $10K budget requiring extreme cost optimization. Leverage open-source tools, minimal paid services, and focused scope. May require significant personal time investment. Best suited for validation experiments or very narrow features.",
    "small-budget": "$10K-$50K for a focused project with clear deliverables. Covers 1-2 developers for 1-3 months. Requires disciplined scope management and prioritization. Can deliver meaningful value if tightly scoped to core features.",
    "medium-budget": "$50K-$200K providing comfortable resources for a standard project. Supports a small team for 3-6 months with room for discovery, design, development, and testing. Can include some paid tools and services.",
    "large-budget": "$200K-$1M for significant projects with multiple workstreams. Supports a medium-sized team for 6-12 months. Allows investment in quality assurance, performance optimization, security review, and comprehensive documentation.",
    "enterprise-budget": "$1M+ for large-scale enterprise initiatives. Supports multiple teams, extensive testing, security audits, compliance work, and long-term maintenance considerations. Requires formal financial governance and ROI tracking.",
    "fixed-budget": "The budget is fixed and cannot be exceeded regardless of scope changes. Requires rigorous change control, contingency reserves, and a clear scope management process. Any scope increase must be offset by corresponding decreases elsewhere.",
    variable: "Time and materials budget that can scale with scope. Provides flexibility to adjust direction based on findings. Requires good cost tracking, regular budget reviews, and clear authorization levels for scope increases.",
    funded: "Budget is fully approved with dedicated contingency reserves. Minimal financial uncertainty. Allows the team to focus on delivery rather than budget justification. Contingency should be released through a structured approval process.",
    pending: "Budget has not been approved yet. Requires a business case with clear ROI projections, cost-benefit analysis, and risk assessment. The business case should include multiple funding scenarios with corresponding scope options.",
  },
  dependencies: {
    "none-deps": "No dependencies on external parties. Everything can be built, tested, and delivered using in-house resources and capabilities. Maximum control over timeline and quality. Lowest risk profile for dependency-related delays.",
    "api-deps": "Project relies on one or more third-party APIs. Risks include API availability, rate limits, version changes, and data format changes. Mitigations include caching, circuit breakers, fallback strategies, and API version pinning.",
    "vendor-software": "Relies on licensed software from third-party vendors. Risks include licensing costs, vendor lock-in, upgrade schedules, and vendor financial stability. Ensure contractual protections for source code escrow and SLA commitments.",
    hardware: "Requires specific hardware, IoT devices, or specialized equipment. Risks include hardware lead times, supply chain issues, hardware revision changes, and firmware compatibility. Order hardware early and maintain a staging environment.",
    "data-deps": "Depends on data from external partners, data feeds, or third-party datasets. Risks include data quality, delivery latency, format changes, and access discontinuation. Establish data SLAs and maintain historical data snapshots.",
    "cross-team": "Requires deliverables from other internal teams. Risks include priority conflicts, different velocity, and communication gaps. Mitigations include shared OKRs, dependency tracking, integration demos, and buffer time in the schedule.",
    regulatory: "Needs regulatory approval or certification before launch. Risks include application processing times, requirement changes, and denial. Engage regulators early, maintain an audit trail, and prepare contingency plans for delayed approval.",
    "open-source": "Heavily reliant on open-source packages. Risks include dependency abandonment, security vulnerabilities, breaking changes, and license compliance. Use dependency pinning, automated security scanning, and maintain a software bill of materials.",
    "cloud-services": "Depends on specific cloud provider services (AWS Lambda, GCP BigQuery, etc.). Risks include provider outages, service deprecation, pricing changes, and region availability. Implement multi-region redundancy and maintain infrastructure as code.",
  },
  compliance: {
    gdpr: "EU General Data Protection Regulation requiring strict data protection, user consent management, data portability, right to erasure, breach notification within 72 hours, and data processing records. Applies to any EU citizen data regardless of where the company operates.",
    hipaa: "US Health Insurance Portability and Accountability Act for protecting medical information. Requires administrative, physical, and technical safeguards. Includes BAAs with vendors, audit controls, access management, and encryption standards for ePHI.",
    soc2: "Service Organization Control 2 compliance for service providers handling customer data. Based on trust service criteria: security, availability, processing integrity, confidentiality, and privacy. Requires annual audits by a CPA firm.",
    "pci-dss": "Payment Card Industry Data Security Standard for handling credit card information. Requires secure network architecture, access controls, regular monitoring, and vulnerability management. Scope includes any system that stores, processes, or transmits cardholder data.",
    ccpa: "California Consumer Privacy Act giving California residents rights over their personal data including disclosure, deletion, and opt-out of sale. Similar to GDPR but with specific California-specific requirements and enforcement by the California AG.",
    iso27001: "International standard for information security management systems (ISMS). Requires a systematic approach to managing sensitive information, including risk assessment, security controls, continuous improvement, and certification by an accredited body.",
    fedramp: "US federal risk and authorization management program for cloud services used by government agencies. Requires third-party assessment, continuous monitoring, and re-authorization. Three impact levels: Low, Moderate, High.",
    "none-compliance": "No specific regulatory compliance requirements apply to this project. While this reduces overhead, it is good practice to implement basic security controls and follow data protection best practices voluntarily.",
    multiple: "The project must satisfy multiple compliance frameworks simultaneously (e.g., GDPR + SOC 2 + PCI-DSS). Requires a unified control framework that maps controls to multiple standards. Increases audit complexity and implementation cost.",
  },
  risk: {
    "very-low": "Strong team with proven experience on similar projects, well-understood technology, ample timeline and budget, no external dependencies, and clear requirements. Standard project management practices are sufficient with minimal active risk management.",
    low: "Mostly predictable with minor uncertainties in a few areas. Known risks have straightforward mitigations. Standard risk register with quarterly reviews is adequate. Contingency reserve of 5-10% is sufficient.",
    moderate: "There are some significant unknowns but they are manageable with proper planning and active risk management. Requires regular risk reviews, mitigation plans, and a contingency reserve of 10-20%. Risk owners should be assigned for top risks.",
    elevated: "Significant uncertainties in technology, requirements, or resources. Requires dedicated risk management effort, frequent risk reviews, active mitigation tracking, and a contingency reserve of 20-30%. Consider risk reduction spikes early in the project.",
    high: "Major uncertainties across multiple dimensions. The project's success is in doubt without aggressive risk mitigation. Consider phased delivery, prove out critical unknowns early with prototypes or proofs of concept. Contingency of 30-50% recommended.",
    "very-high": "Multiple high-impact risk factors present simultaneously. The project should be restructured to reduce risk before proceeding. Consider splitting into smaller phases, changing technology choices, or adjusting scope significantly.",
    critical: "Existential risks to the project. Proceed only if the potential reward justifies the extreme risk. Engage executive sponsors, establish a crisis management team, and consider whether the project should be restructured or cancelled.",
    balanced: "A portfolio approach where some elements are low-risk and predictable while others are high-risk and exploratory. Manage them differently — apply standard processes to low-risk items and agile experimentation to high-risk ones.",
    unknown: "Risk level has not been formally assessed. Conduct a risk assessment workshop immediately as the first project activity. Identify, categorize, and prioritize risks before proceeding with detailed planning or execution.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const scope = selections.step1;
  const stack = selections.step2;
  const team = selections.step3;
  const timeline = selections.step4;
  const budget = selections.step5;
  const dependencies = selections.step6;
  const compliance = selections.step7;
  const riskTolerance = selections.step8;

  const lines: string[] = [];

  lines.push("# Project Risk Analysis Report");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const scLabel = Array.isArray(scope) ? scope.map(id => options.scope.find(o => o.id === id)?.title || id).join(", ") : options.scope.find(o => o.id === scope)?.title || scope;
  const scNote = notes[`scope-${scope}`] || "";
  lines.push(`| Project Scope | ${scLabel} | ${scNote}`);
  const stLabel = Array.isArray(stack) ? stack.map(id => options.stack.find(o => o.id === id)?.title || id).join(", ") : options.stack.find(o => o.id === stack)?.title || stack;
  const stNote = notes[`stack-${stack}`] || "";
  lines.push(`| Technical Stack | ${stLabel} | ${stNote}`);
  const tLabel = Array.isArray(team) ? team.map(id => options.team.find(o => o.id === id)?.title || id).join(", ") : options.team.find(o => o.id === team)?.title || team;
  const tNote = notes[`team-${team}`] || "";
  lines.push(`| Team Size | ${tLabel} | ${tNote}`);
  const tiLabel = Array.isArray(timeline) ? timeline.map(id => options.timeline.find(o => o.id === id)?.title || id).join(", ") : options.timeline.find(o => o.id === timeline)?.title || timeline;
  const tiNote = notes[`timeline-${timeline}`] || "";
  lines.push(`| Timeline | ${tiLabel} | ${tiNote}`);
  const bLabel = Array.isArray(budget) ? budget.map(id => options.budget.find(o => o.id === id)?.title || id).join(", ") : options.budget.find(o => o.id === budget)?.title || budget;
  const bNote = notes[`budget-${budget}`] || "";
  lines.push(`| Budget | ${bLabel} | ${bNote}`);
  const dLabel = Array.isArray(dependencies) ? dependencies.map(id => options.dependencies.find(o => o.id === id)?.title || id).join(", ") : options.dependencies.find(o => o.id === dependencies)?.title || dependencies;
  const dNote = notes[`dependencies-${dependencies}`] || "";
  lines.push(`| External Dependencies | ${dLabel} | ${dNote}`);
  const coLabel = Array.isArray(compliance) ? compliance.map(id => options.compliance.find(o => o.id === id)?.title || id).join(", ") : options.compliance.find(o => o.id === compliance)?.title || compliance;
  const coNote = notes[`compliance-${compliance}`] || "";
  lines.push(`| Compliance | ${coLabel} | ${coNote}`);
  const rLabel = Array.isArray(riskTolerance) ? riskTolerance.map(id => options.risk.find(o => o.id === id)?.title || id).join(", ") : options.risk.find(o => o.id === riskTolerance)?.title || riskTolerance;
  const rNote = notes[`risk-${riskTolerance}`] || "";
  lines.push(`| Risk Tolerance | ${rLabel} | ${rNote}`);
  lines.push("");

  lines.push("## Detailed Analysis");
  lines.push("");
  lines.push("### Scope Analysis");
  lines.push("");
  lines.push(Array.isArray(scope) ? scope.map(v => dict.scope[v] || v).join(", ") : dict.scope[scope] || scope);
  if (scNote) lines.push(`> **Note:** ${scNote}`);
  lines.push("");

  lines.push("### Technical Stack Analysis");
  lines.push("");
  lines.push(Array.isArray(stack) ? stack.map(v => dict.stack[v] || v).join(", ") : dict.stack[stack] || stack);
  if (stNote) lines.push(`> **Note:** ${stNote}`);
  lines.push("");

  lines.push("### Team Analysis");
  lines.push("");
  lines.push(Array.isArray(team) ? team.map(v => dict.team[v] || v).join(", ") : dict.team[team] || team);
  if (tNote) lines.push(`> **Note:** ${tNote}`);
  lines.push("");

  lines.push("### Timeline Analysis");
  lines.push("");
  lines.push(Array.isArray(timeline) ? timeline.map(v => dict.timeline[v] || v).join(", ") : dict.timeline[timeline] || timeline);
  if (tiNote) lines.push(`> **Note:** ${tiNote}`);
  lines.push("");

  lines.push("### Budget Analysis");
  lines.push("");
  lines.push(Array.isArray(budget) ? budget.map(v => dict.budget[v] || v).join(", ") : dict.budget[budget] || budget);
  if (bNote) lines.push(`> **Note:** ${bNote}`);
  lines.push("");

  lines.push("### Dependencies Analysis");
  lines.push("");
  lines.push(Array.isArray(dependencies) ? dependencies.map(v => dict.dependencies[v] || v).join(", ") : dict.dependencies[dependencies] || dependencies);
  if (dNote) lines.push(`> **Note:** ${dNote}`);
  lines.push("");

  lines.push("### Compliance Analysis");
  lines.push("");
  lines.push(Array.isArray(compliance) ? compliance.map(v => dict.compliance[v] || v).join(", ") : dict.compliance[compliance] || compliance);
  if (coNote) lines.push(`> **Note:** ${coNote}`);
  lines.push("");

  lines.push("### Risk Tolerance & Profile");
  lines.push("");
  lines.push(Array.isArray(riskTolerance) ? riskTolerance.map(v => dict.risk[v] || v).join(", ") : dict.risk[riskTolerance] || riskTolerance);
  if (rNote) lines.push(`> **Note:** ${rNote}`);
  lines.push("");

  lines.push("## Risk Register");
  lines.push("");
  lines.push("| ID | Risk | Likelihood | Impact | Mitigation | Owner");
  lines.push("|----|------|------------|--------|------------|------");
  const riskLevels = ["Critical", "High", "Medium", "Low"];
  const riskScore = (level: string) => riskLevels.indexOf(level) + 1;

  if (dependencies !== "none-deps") {
    const l = dependencies === "api-deps" ? "High" : "Medium";
    lines.push(`| R01 | External dependency failure | ${l} | High | Circuit breaker, fallback, SLA monitoring | Tech Lead`);
  }
  if (timeline === "urgent" || timeline === "fixed-date") {
    lines.push(`| R02 | Timeline overrun due to scope creep | High | Critical | Strict change control, MVP definition | PM`);
  }
  if (budget === "fixed-budget") {
    lines.push("| R03 | Budget exhaustion before feature completion | Medium | Critical | Scope buffer, weekly budget tracking | PM");
  }
  if (compliance !== "none-compliance") {
    lines.push(`| R04 | ${coLabel} compliance gap discovered late | Medium | Critical | Early compliance review, external auditor | Compliance Lead`);
  }
  if (team === "solo") {
    lines.push("| R05 | Single point of failure (key person risk) | High | Critical | Documentation, knowledge sharing, backup plan | EM");
  }
  if (team === "distributed") {
    lines.push("| R06 | Communication delays across time zones | Medium | Medium | Async-first culture, overlapping hours | Tech Lead");
  }
  if (stack === "rust" || stack === "multi-platform") {
    lines.push(`| R07 | ${stLabel} skill availability and ramp-up time | Medium | High | Training budget, pair programming, hiring | EM`);
  }
  lines.push("| R08 | Requirements misunderstanding | Medium | High | Regular demos, written specs, UAT sessions | PM");
  lines.push("| R09 | Technical debt accumulation | Low | Medium | Code reviews, refactoring sprints, quality gates | Tech Lead");
  lines.push("");

  const riskCount = lines.filter(l => l.startsWith("| R")).length - 1;

  lines.push("## Risk Heat Map");
  lines.push("");
  lines.push("```");
  lines.push("                Impact");
  lines.push("           Low   Medium   High   Critical");
  lines.push("   High    [  ]   [  ]    [R01]   [R02,R03]");
  lines.push("  Med     [  ]   [R06]   [R07,R08][R04]");
  lines.push("   Low    [  ]   [R09]   [  ]    [R05]");
  lines.push("```");
  lines.push("");

  lines.push("## Risk Mitigation Plan");
  lines.push("");
  if (dependencies !== "none-deps") {
    lines.push("### Dependency Risk Mitigation");
    lines.push("");
    lines.push("- Establish SLAs with all external dependency providers.");
    lines.push("- Implement circuit breakers and fallback mechanisms.");
    lines.push("- Maintain offline/cached modes for critical dependencies.");
    lines.push("- Regularly test dependency failure scenarios.");
    lines.push("");
  }
  if (timeline === "urgent" || timeline === "fixed-date") {
    lines.push("### Timeline Risk Mitigation");
    lines.push("");
    lines.push("- Define a clear MVP with strict scope boundaries.");
    lines.push("- Implement daily stand-ups with progress against milestones.");
    lines.push("- Identify and protect the critical path at all times.");
    lines.push("- Prepare a schedule compression strategy (crashing/fast-tracking).");
    lines.push("");
  }
  if (compliance !== "none-compliance") {
    lines.push("### Compliance Risk Mitigation");
    lines.push("");
    lines.push("- Begin compliance gap analysis in the first sprint.");
    lines.push("- Engage external compliance auditors early.");
    lines.push("- Implement compliance controls as user stories in the backlog.");
    lines.push("- Schedule regular compliance review checkpoints.");
    lines.push("");
  }

  lines.push("## Budget Analysis");
  lines.push("");
  if (budget === "fixed-budget") {
    lines.push("- **Budget Type**: Fixed — cannot exceed allocated amount.");
    lines.push("- **Contingency**: Recommend 15-20% contingency reserve, released via change control.");
    lines.push("- **Tracking**: Weekly burn rate reviews against planned spend.");
    lines.push("- **Scope Flexibility**: Any scope increase must be offset by scope reduction.");
  } else if (budget === "variable") {
    lines.push("- **Budget Type**: Variable (Time & Materials).");
    lines.push("- **Oversight**: Monthly spend reviews with trend analysis.");
    lines.push("- **Forecasting**: Rolling 3-month cost forecast updated monthly.");
    lines.push("- **Authorization**: Defined approval levels for cost overruns.");
  } else {
    lines.push("- **Budget Type**: " + bLabel + ".");
    lines.push("- **Allocation**: Distributed across phases per the project plan.");
    lines.push("- **Tracking**: Monthly financial reviews with variance analysis.");
  }
  lines.push("");

  lines.push("## Team & Resource Plan");
  lines.push("");
  lines.push("| Role | Allocation | Key Responsibility");
  lines.push("|------|-----------|-------------------");
  lines.push("| Project Manager | Part-time | Risk tracking, stakeholder communication, timeline management");
  lines.push("| Tech Lead | Full-time | Architecture decisions, code quality, technical risk mitigation");
  const teamSize = team === "solo" ? "1" : team === "small" ? "2-4" : team === "medium" ? "5-10" : team === "large" ? "11-25" : "25+";
  lines.push(`| Developers | ${teamSize} | Implementation, testing, deployment`);
  lines.push("| QA Engineer | Part-time to Full-time | Test planning, automation, regression testing");
  if (compliance !== "none-compliance") {
    lines.push("| Compliance Officer | Part-time | Compliance oversight, audit preparation");
  }
  lines.push("");

  lines.push("## Quality & Governance Gates");
  lines.push("");
  lines.push("| Phase | Gate | Exit Criteria");
  lines.push("|-------|------|--------------");
  lines.push("| Discovery | Requirements Sign-off | Approved PRD, risk register, project charter");
  lines.push("| Design | Architecture Review | Architecture decision records, tech design docs");
  lines.push("| Development | Code Review | All code reviewed, tests passing, no critical bugs");
  lines.push("| Testing | QA Sign-off | Test coverage >80%, all critical bugs fixed");
  lines.push("| Deployment | Go/No-Go Decision | Rollback plan ready, monitoring configured, stakeholders informed");
  lines.push("| Post-Launch | Retrospective | Lessons documented, action items assigned, metrics reviewed");
  lines.push("");

  lines.push("## Recommendations");
  lines.push("");
  if (riskTolerance === "very-high" || riskTolerance === "critical") {
    lines.push("- **Immediate Action**: Restructure the project to reduce risk before proceeding further.");
    lines.push("- **Consider**: Splitting into smaller independent phases with clear go/no-go decisions.");
    lines.push("- **Executive Sponsorship**: Escalate risk level to executive sponsor for awareness and support.");
  }
  if (timeline === "urgent") {
    lines.push("- **Scope Reduction**: Identify the smallest possible deliverable that provides business value.");
    lines.push("- **Parallel Workstreams**: Run design, development, and testing in parallel where possible.");
    lines.push("- **Overtime Budget**: Plan for team overtime with appropriate compensation and recovery time.");
  }
  if (dependencies !== "none-deps") {
    lines.push("- **Dependency Monitoring**: Set up automated health checks for all external dependencies.");
    lines.push("- **SLA Review**: Review and negotiate SLAs with critical dependency providers.");
  }
  if (compliance !== "none-compliance") {
    lines.push("- **Compliance Automation**: Automate compliance controls and evidence collection.");
    lines.push("- **Audit Readiness**: Maintain continuous audit readiness rather than point-in-time preparation.");
  }
  lines.push("- **Risk Reviews**: Schedule monthly risk review meetings with the full project team.");
  lines.push("- **Lessons Learned**: Document risks that materialized and how they were handled for future projects.");
  lines.push("");

  const overallRisk = riskTolerance === "very-low" ? "Low" : riskTolerance === "low" ? "Low-Medium" : riskTolerance === "moderate" ? "Medium" : riskTolerance === "elevated" ? "Medium-High" : riskTolerance === "high" ? "High" : riskTolerance === "very-high" ? "Very High" : riskTolerance === "critical" ? "Critical" : "Unknown";
  lines.push("## Overall Risk Assessment");
  lines.push("");
  lines.push(`**Overall Risk Level: ${overallRisk}**`);
  lines.push("");
  lines.push("- **Identified Risks**: " + riskCount + " specific risks documented in the risk register.");
  lines.push("- **Top Risk**: " + (dependencies !== "none-deps" ? "External dependency failure" : timeline === "urgent" ? "Timeline overrun" : "Requirements misunderstanding") + ".");
  lines.push("- **Contingency Recommended**: " + (overallRisk === "Low" ? "5-10%" : overallRisk === "Medium" ? "10-20%" : overallRisk === "High" ? "20-30%" : "30-50%") + " of total budget.");
  lines.push("- **Next Review**: Schedule a comprehensive risk review within the first 2 weeks of project initiation.");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Project Risk Analyst_");

  return lines.join("\n");
}

export default function RiskAnalystPage() {
  return (
    <ToolShell
      title="Project Risk Analyst"
      steps={[
        { id: 1, label: "Scope", component: (p) => (
          <GenericStep {...p} title="Project Scope" description="What type of project are you assessing?" options={options.scope} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="scope" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Stack", component: (p) => (
          <GenericStep {...p} title="Technical Stack" description="What technology stack are you using?" options={options.stack} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="stack" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Team", component: (p) => (
          <GenericStep {...p} title="Team Size" description="How big is your team?" options={options.team} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="team" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Timeline", component: (p) => (
          <GenericStep {...p} title="Timeline" description="What is the project timeline?" options={options.timeline} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="timeline" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Budget", component: (p) => (
          <GenericStep {...p} title="Budget" description="What is the project budget?" options={options.budget} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="budget" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Dependencies", component: (p) => (
          <GenericStep {...p} title="External Dependencies" description="What external dependencies exist?" options={options.dependencies} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="dependencies" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Compliance", component: (p) => (
          <GenericStep {...p} title="Compliance" description="What compliance requirements apply?" options={options.compliance} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="compliance" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Risk", component: (p) => (
          <GenericStep {...p} title="Risk Tolerance" description="What is the risk appetite for this project?" options={options.risk} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="risk" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}









