"use client";

import type { FC } from "react";
import { Lightbulb, DollarSign, TrendingUp, Building2, Cloud, ShoppingCart, Users, Repeat, Zap, Globe, Store, Handshake, Trophy, Target, MousePointerClick } from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  stage: [
    { id: "ideation", title: "Ideation", description: "Early concept stage, problem-solution fit", icon: Lightbulb },
    { id: "pre-seed", title: "Pre-Seed", description: "Building MVP, initial team formation", icon: DollarSign },
    { id: "seed", title: "Seed", description: "Product-market fit, early traction", icon: TrendingUp },
    { id: "series-a", title: "Series A", description: "Scaling operations, growth metrics", icon: Building2 },
  ],
  model: [
    { id: "b2b-saas", title: "B2B SaaS", description: "Subscription software sold to businesses", icon: Cloud },
    { id: "marketplace", title: "Marketplace", description: "Two-sided platform connecting buyers and sellers", icon: ShoppingCart },
    { id: "freemium-b2c", title: "Freemium B2C", description: "Free tier with premium upgrade for consumers", icon: Users },
    { id: "subscription", title: "Subscription", description: "Recurring revenue from ongoing subscriptions", icon: Repeat },
  ],
  market: [
    { id: "gen-z", title: "Gen-Z", description: "Young audience aged 13–28, mobile-first", icon: Zap },
    { id: "enterprise-b2b", title: "Enterprise B2B", description: "Large organizations with complex sales cycles", icon: Building2 },
    { id: "smbs", title: "SMBs", description: "Small to medium businesses, self-serve onboarding", icon: Store },
    { id: "mass-market", title: "Mass Market", description: "Broad consumer audience across demographics", icon: Globe },
  ],
  focus: [
    { id: "seeking-investors", title: "Seeking Investors", description: "Convince VCs or angel investors to fund", icon: Handshake },
    { id: "business-pitch-competition", title: "Business Pitch Competition", description: "Win a pitch contest with judges", icon: Trophy },
    { id: "internal-team-alignment", title: "Internal Team Alignment", description: "Align your team around strategy and vision", icon: Target },
  ],
};

const dict: Record<string, Record<string, string>> = {
  stage: {
    ideation: "You are at the ideation stage. Focus on the problem you are solving, the target user's pain point, your unique insight into the market, and the initial concept for a solution. Back it with qualitative research or real-world observations.",
    "pre-seed": "You are at the pre-seed stage. Highlight your founding team's background, the MVP you have built or are building, early design prototypes, and any initial user feedback or waitlist traction you have gathered.",
    seed: "You are at the seed stage. Present early revenue numbers, user growth metrics, engagement data, and unit economics. Emphasize product-market fit signals and why now is the right time to invest.",
    "series-a": "You are at Series A. Showcase strong month-over-month growth, customer acquisition cost (CAC) versus lifetime value (LTV), retention cohorts, and a clear plan for scaling sales, engineering, and operations.",
  },
  model: {
    "b2b-saas": "Your business model is B2B SaaS. Emphasize predictable recurring revenue, enterprise contracts, net dollar retention, and how your software solves a critical workflow problem for businesses.",
    marketplace: "Your model is a marketplace. Focus on liquidity, supply and demand dynamics, take rate, gross merchandise value (GMV), and the flywheel effect that strengthens the network with each transaction.",
    "freemium-b2c": "Your model is freemium B2C. Highlight user acquisition at scale, conversion rate from free to paid, viral growth mechanics, and how the free tier serves as a top-of-funnel growth engine.",
    subscription: "Your model is subscription-based. Emphasize recurring revenue, churn rate, average revenue per user (ARPU), subscription tiers, and the value ladder that moves users to higher plans.",
  },
  market: {
    "gen-z": "Your target market is Gen-Z. Frame the pitch around mobile-first design, social media distribution, authenticity, short attention spans, and cultural relevance. Gen-Z values purpose-driven brands.",
    "enterprise-b2b": "Your target is enterprise B2B buyers. Address security compliance, SSO, role-based access control, SLAs, dedicated support, integration with existing enterprise tools, and procurement workflows.",
    smbs: "Your target is SMBs. Emphasize ease of use, self-serve onboarding, affordable pricing, quick time-to-value, and integrations with popular SMB tools like QuickBooks, Stripe, and Shopify.",
    "mass-market": "Your target is the mass consumer market. Highlight broad appeal, simplicity, freemium or low price point, cross-platform availability (iOS, Android, web), and marketing channels with wide reach.",
  },
  focus: {
    "seeking-investors": "Tailor the deck for investors. Lead with the problem and market size, show traction metrics prominently, include a clear ask with use of funds, and end with a compelling vision for the future.",
    "business-pitch-competition": "Tailor for a pitch competition. Open with a hook that grabs attention, keep slides visual and minimal, practice a tight 3-minute delivery, and emphasize the wow factor and your team's passion.",
    "internal-team-alignment": "Tailor for internal alignment. Focus on company vision, strategic priorities, resource allocation, milestones for the next quarter, and how each team member's work feeds into the broader mission.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const stage = selections.step1;
  const model = selections.step2;
  const market = selections.step3;
  const focus = selections.step4;

  const lines = ["# Pitch Deck Architect", "", "## Deck Structure", ""];
  if (stage) lines.push(`**Business Stage:** ${dict.stage[stage] ?? stage}`);
  if (stage) lines.push(`> ${notes[`stage-${stage}`] ?? ""}`);
  lines.push("");
  if (model) lines.push(`**Business Model:** ${dict.model[model] ?? model}`);
  if (model) lines.push(`> ${notes[`model-${model}`] ?? ""}`);
  lines.push("");
  if (market) lines.push(`**Target Market:** ${dict.market[market] ?? market}`);
  if (market) lines.push(`> ${notes[`market-${market}`] ?? ""}`);
  lines.push("");
  if (focus) lines.push(`**Pitch Focus:** ${dict.focus[focus] ?? focus}`);
  if (focus) lines.push(`> ${notes[`focus-${focus}`] ?? ""}`);
  lines.push("");
  lines.push("## Recommended Slide Order", "");
  lines.push("1. Title Slide — Company name, tagline, presenter name");
  lines.push("2. Problem — The pain point you are solving");
  lines.push("3. Solution — Your product or service");
  lines.push(`4. Business Model — ${options.model.find(o => o.id === model)?.title ?? "Your model"}`);
  lines.push(`5. Target Market — ${options.market.find(o => o.id === market)?.title ?? "Your market"}`);
  lines.push("6. Traction — Key metrics and milestones");
  lines.push("7. Competition — Competitive landscape and moat");
  lines.push("8. Team — Founders and key hires");
  lines.push("9. Financials — Projections and use of funds");
  lines.push("10. Ask — What you are requesting and what it enables");

  return lines.join("\n");
}

export default function PitchDeckPage() {
  return (
    <ToolShell
      title="Pitch Deck Architect"
      steps={[
        { id: 1, label: "Stage", component: (p) => (
          <GenericStep {...p} title="Select Business Stage" description="What stage is your business at?" options={options.stage} mode="single" selected={p.selections.step1} onSelect={(id) => p.onSelect("step1", id)} notePrefix="stage" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Model", component: (p) => (
          <GenericStep {...p} title="Select Business Model" description="How does your business make money?" options={options.model} mode="single" selected={p.selections.step2} onSelect={(id) => p.onSelect("step2", id)} notePrefix="model" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Market", component: (p) => (
          <GenericStep {...p} title="Select Target Market" description="Who are you selling to?" options={options.market} mode="single" selected={p.selections.step3} onSelect={(id) => p.onSelect("step3", id)} notePrefix="market" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Focus", component: (p) => (
          <GenericStep {...p} title="Select Pitch Focus" description="What is the goal of this pitch deck?" options={options.focus} mode="single" selected={p.selections.step4} onSelect={(id) => p.onSelect("step4", id)} notePrefix="focus" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}
