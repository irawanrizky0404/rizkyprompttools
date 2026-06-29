import {
  FileText,
  Workflow,
  Layout,
  Presentation,
  Image,
  Bug,
  Scale,
  Video,
  Mail,
  ShoppingCart,
  type LucideIcon,
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
  {
    id: "blueprint",
    slug: "blueprint",
    title: "Blueprint Prompt Generator",
    subtitle: "System Architecture & Design",
    description: "Compose comprehensive system prompt blueprints across 8 dimensions: project type, industry, authentication, features, database, design, deployment, and AI configuration.",
    icon: FileText,
    category: "System Prompts",
    steps: 8,
    placeholder: false,
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI Automation Workflow",
    subtitle: "n8n / Make.com",
    description: "Design automation workflows with trigger apps, action destinations, optional AI processing, and complexity levels.",
    icon: Workflow,
    category: "Automation",
    steps: 4,
    placeholder: false,
  },
  {
    id: "ui-ux-component",
    slug: "ui-ux-component",
    title: "UI/UX Component Prompt",
    subtitle: "v0.dev / Bolt.new",
    description: "Build highly descriptive prompts for AI UI builders with component type, style, color scheme, and interactivity.",
    icon: Layout,
    category: "Frontend",
    steps: 4,
    placeholder: false,
  },
  {
    id: "pitch-deck",
    slug: "pitch-deck",
    title: "Pitch Deck Architect",
    subtitle: "Investor Presentations",
    description: "Generate slide structures and persuasive copy outlines for business presentations at any funding stage.",
    icon: Presentation,
    category: "Business",
    steps: 4,
    placeholder: false,
  },
  {
    id: "midjourney",
    slug: "midjourney",
    title: "Midjourney Prompt Builder",
    subtitle: "AI Image Generation",
    description: "Create optimized comma-separated prompts for AI image generators with art medium, lighting, camera, and mood.",
    icon: Image,
    category: "Creative",
    steps: 4,
    placeholder: false,
  },
  {
    id: "qa-planner",
    slug: "qa-planner",
    title: "QA Edge-Case Planner",
    subtitle: "Test Scenario Design",
    description: "Generate comprehensive testing scenarios in Gherkin or checklist format for any feature.",
    icon: Bug,
    category: "Testing",
    steps: 4,
    placeholder: false,
  },
  {
    id: "legal-draft",
    slug: "legal-draft",
    title: "Legal Document Draft",
    subtitle: "Contracts & Policies",
    description: "Create structured initial drafts for NDAs, contracts, terms of service, and privacy policies.",
    icon: Scale,
    category: "Business",
    steps: 4,
    placeholder: false,
  },
  {
    id: "video-script",
    slug: "video-script",
    title: "Viral Video Script",
    subtitle: "TikTok / YouTube",
    description: "Generate 2-column video scripts with multiple hook alternatives for any content category.",
    icon: Video,
    category: "Creative",
    steps: 4,
    placeholder: false,
  },
  {
    id: "cold-email",
    slug: "cold-email",
    title: "B2B Cold Email Sequence",
    subtitle: "Sales Outreach",
    description: "Build high-converting email sequences with value props, follow-up cadence, and persuasion style.",
    icon: Mail,
    category: "Marketing",
    steps: 4,
    placeholder: false,
  },
  {
    id: "ecommerce-listing",
    slug: "ecommerce-listing",
    title: "E-Commerce Listing Copy",
    subtitle: "Product Descriptions",
    description: "Write SEO-friendly titles, descriptions, and feature bullets for any marketplace platform.",
    icon: ShoppingCart,
    category: "Marketing",
    steps: 4,
    placeholder: false,
  },
];

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return tools.find((t) => t.slug === slug);
}
