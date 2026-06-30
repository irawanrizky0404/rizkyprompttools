import {
  FileText, Workflow, Layout, Presentation, Image, Bug, Scale, Video, Mail, ShoppingCart,
  Code2, Database, Palette, Type, Frame, Pen, BookOpen, CheckSquare, Megaphone, GitCompare,
  BookText, Cable, Braces, FileJson, Search, User, TrendingUp, Target, Music, BarChart3,
  type LucideIcon, Fingerprint,
} from "lucide-react";

export interface ToolDefinition {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  category: string;
  steps: number;
  placeholder: boolean;
}

export const tools: ToolDefinition[] = [
  // ── System Prompts ──
  { id: "blueprint", slug: "blueprint", title: "Blueprint Prompt Generator", subtitle: "System Architecture & Design", description: "Compose comprehensive system prompt blueprints across 8 dimensions.", icon: FileText, category: "System Prompts", steps: 8, placeholder: false },
  { id: "persona-architect", slug: "persona-architect", title: "AI Persona Architect", subtitle: "Character & Tone", description: "Design detailed AI personas with voice, behavior, constraints, and response patterns.", icon: User, category: "System Prompts", steps: 8, placeholder: false },
  { id: "risk-analyst", slug: "risk-analyst", title: "Project Risk Analyst", subtitle: "Threat Assessment", description: "Identify technical risks, failure modes, and mitigation strategies for your project.", icon: TrendingUp, category: "System Prompts", steps: 8, placeholder: false },

  // ── Automation ──
  { id: "ai-automation", slug: "ai-automation", title: "AI Automation Workflow", subtitle: "n8n / Make.com", description: "Design automation workflows with triggers, actions, AI processing, and error handling.", icon: Workflow, category: "Automation", steps: 8, placeholder: false },
  { id: "webhook-architect", slug: "webhook-architect", title: "Webhook Payload Architect", subtitle: "Event Design", description: "Design webhook payloads, event schemas, retry policies, and delivery guarantees.", icon: Cable, category: "Automation", steps: 8, placeholder: false },
  { id: "logic-designer", slug: "logic-designer", title: "n8n/Make Logic Designer", subtitle: "Workflow Logic", description: "Design conditional branching, loops, error handlers, and data transformations.", icon: GitCompare, category: "Automation", steps: 8, placeholder: false },

  // ── Frontend ──
  { id: "ui-ux-component", slug: "ui-ux-component", title: "UI/UX Component Prompt", subtitle: "v0.dev / Bolt.new", description: "Build descriptive prompts for AI UI builders with style, layout, and accessibility.", icon: Layout, category: "Frontend", steps: 8, placeholder: false },
  { id: "i18n-strings", slug: "i18n-strings", title: "i18n String Manager", subtitle: "Internationalization", description: "Manage translation strings across multiple locales with fallback support.", icon: Braces, category: "Frontend", steps: 8, placeholder: false },

  // ── Business ──
  { id: "pitch-deck", slug: "pitch-deck", title: "Pitch Deck Architect", subtitle: "Investor Presentations", description: "Generate slide structures and persuasive copy for business presentations.", icon: Presentation, category: "Business", steps: 8, placeholder: false },
  { id: "legal-draft", slug: "legal-draft", title: "Legal Document Draft", subtitle: "Contracts & Policies", description: "Create initial drafts for NDAs, contracts, ToS, and privacy policies.", icon: Scale, category: "Business", steps: 8, placeholder: false },
  { id: "lean-canvas", slug: "lean-canvas", title: "Lean Canvas Generator", subtitle: "Business Modeling", description: "Build lean canvases with problem, solution, metrics, and competitive advantage.", icon: Target, category: "Business", steps: 8, placeholder: false },

  // ── Creative ──
  { id: "midjourney", slug: "midjourney", title: "Midjourney Prompt Builder", subtitle: "AI Image Generation", description: "Create optimized comma-separated prompts for AI image generators.", icon: Image, category: "Creative", steps: 8, placeholder: false },
  { id: "video-script", slug: "video-script", title: "Viral Video Script", subtitle: "TikTok / YouTube", description: "Generate 2-column video scripts with hooks for any content category.", icon: Video, category: "Creative", steps: 8, placeholder: false },
  { id: "brand-voice", slug: "brand-voice", title: "Brand Voice Identity Gen", subtitle: "Tone & Messaging", description: "Define brand voice with tone guidelines, vocabulary, and messaging frameworks.", icon: Music, category: "Creative", steps: 8, placeholder: false },

  // ── Testing ──
  { id: "qa-planner", slug: "qa-planner", title: "QA Edge-Case Planner", subtitle: "Test Scenario Design", description: "Generate testing scenarios in Gherkin or checklist format for any feature.", icon: Bug, category: "Testing", steps: 8, placeholder: false },
  { id: "acceptance-criteria", slug: "acceptance-criteria", title: "Acceptance Criteria Gen", subtitle: "QA Specifications", description: "Generate detailed acceptance criteria with edge cases and validation rules.", icon: CheckSquare, category: "Testing", steps: 8, placeholder: false },
  { id: "vitest-scaffold", slug: "vitest-scaffold", title: "Vitest/Jest Scaffold Gen", subtitle: "Test Templates", description: "Generate unit test scaffolds with mocks, fixtures, and assertion patterns.", icon: Code2, category: "Testing", steps: 8, placeholder: false },

  // ── Marketing ──
  { id: "cold-email", slug: "cold-email", title: "B2B Cold Email Sequence", subtitle: "Sales Outreach", description: "Build high-converting email sequences with personalization and timing.", icon: Mail, category: "Marketing", steps: 8, placeholder: false },
  { id: "ecommerce-listing", slug: "ecommerce-listing", title: "E-Commerce Listing Copy", subtitle: "Product Descriptions", description: "Write SEO-friendly titles, descriptions, and feature bullets for marketplaces.", icon: ShoppingCart, category: "Marketing", steps: 8, placeholder: false },
  { id: "conversion-funnel", slug: "conversion-funnel", title: "Conversion Funnel Strategy", subtitle: "Growth & Sales", description: "Design conversion funnels with awareness, consideration, decision, and retention stages.", icon: BarChart3, category: "Marketing", steps: 8, placeholder: false },

  // ── API ──
  { id: "api-docs", slug: "api-docs", title: "API Doc Generator", subtitle: "OpenAPI / Swagger", description: "Generate OpenAPI specifications and endpoint documentation with examples.", icon: Code2, category: "API", steps: 8, placeholder: false },
  { id: "graphql-schema", slug: "graphql-schema", title: "GraphQL Schema Designer", subtitle: "Type Definitions", description: "Design GraphQL schemas with types, queries, mutations, and resolvers.", icon: Cable, category: "API", steps: 8, placeholder: false },
  { id: "json-schema", slug: "json-schema", title: "JSON Schema Generator", subtitle: "Data Validation", description: "Generate JSON Schema definitions from sample data with validation rules.", icon: FileJson, category: "API", steps: 8, placeholder: false },

  // ── Design ──
  { id: "color-palette", slug: "color-palette", title: "Color Palette Generator", subtitle: "Design Tokens", description: "Generate accessible color palettes with light/dark mode variants.", icon: Palette, category: "Design", steps: 8, placeholder: false },
  { id: "typography-scale", slug: "typography-scale", title: "Typography Scale Gen", subtitle: "Font Sizes & Weights", description: "Generate consistent type scales with line heights and letter spacing.", icon: Type, category: "Design", steps: 8, placeholder: false },

  // ── UX ──
  { id: "sitemap-gen", slug: "sitemap-gen", title: "Sitemap Generator", subtitle: "Information Architecture", description: "Design site structures with pages, sections, and navigation hierarchy.", icon: Frame, category: "UX", steps: 8, placeholder: false },
  { id: "wireframe-desc", slug: "wireframe-desc", title: "Wireframe Describer", subtitle: "Layout Specifications", description: "Describe wireframe layouts with component placement and spacing.", icon: Pen, category: "UX", steps: 8, placeholder: false },

  // ── Data ──
  { id: "sql-builder", slug: "sql-builder", title: "SQL Query Builder", subtitle: "Database Queries", description: "Build complex SQL queries with joins, aggregations, and window functions.", icon: Database, category: "Data", steps: 8, placeholder: false },
  { id: "data-normalization", slug: "data-normalization", title: "Data Normalization Engine", subtitle: "Schema Design", description: "Normalize data schemas across tables with relationships and constraints.", icon: GitCompare, category: "Data", steps: 8, placeholder: false },

  // ── Process ──
  { id: "user-story", slug: "user-story", title: "Agile User Story Writer", subtitle: "Agile Requirements", description: "Write user stories with acceptance criteria using given-when-then scenarios.", icon: BookOpen, category: "Process", steps: 8, placeholder: false },

  // ── New Design ──
  { id: "brand-guideline", slug: "brand-guideline", title: "Brand & Logo Guideline", subtitle: "Visual Identity", description: "Create comprehensive brand guidelines with logo specifications, color systems, typography, and application rules.", icon: Fingerprint, category: "Design", steps: 8, placeholder: false },

  // ── Docs ──
  { id: "readme-gen", slug: "readme-gen", title: "README Generator", subtitle: "Project Documentation", description: "Generate comprehensive README files with badges, install, and usage instructions.", icon: BookText, category: "Docs", steps: 8, placeholder: false },
];

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return tools.find((t) => t.slug === slug);
}




