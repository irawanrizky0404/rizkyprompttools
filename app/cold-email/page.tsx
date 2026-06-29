"use client";

import type { FC } from "react";
import { Crown, Users, BarChart3, Monitor, DollarSign, TrendingUp, Clock, Zap, Mail, MailPlus, MailWarning, Target, BookOpen, BarChart } from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  position: [
    { id: "ceo-founder", title: "CEO / Founder", description: "Executive decision-maker focused on growth and strategy", icon: Crown },
    { id: "hr-manager", title: "HR Manager", description: "People operations, recruitment, and employee experience", icon: Users },
    { id: "cmo-marketing", title: "CMO (Marketing)", description: "Brand, demand generation, and marketing strategy", icon: BarChart3 },
    { id: "cto-it", title: "CTO / IT", description: "Technology infrastructure, engineering, and product", icon: Monitor },
  ],
  value: [
    { id: "cost-savings", title: "Cost Savings", description: "Reduce operational expenses or overhead", icon: DollarSign },
    { id: "revenue-increase", title: "Revenue Increase", description: "Grow top-line revenue or average deal size", icon: TrendingUp },
    { id: "time-savings", title: "Time Savings", description: "Free up team hours by automating manual work", icon: Clock },
    { id: "workflow-automation", title: "Workflow Automation", description: "Automate repetitive processes end-to-end", icon: Zap },
  ],
  followup: [
    { id: "just-1-email", title: "Just 1 Email", description: "Single cold email, no follow-up sequence", icon: Mail },
    { id: "3-email-sequence", title: "3-Email Sequence", description: "Initial email plus two strategic follow-ups", icon: MailPlus },
    { id: "aggressive-5-email", title: "Aggressive 5-Email Sequence", description: "Full sequence with persistence and varied angles", icon: MailWarning },
  ],
  style: [
    { id: "direct", title: "Direct and To the Point", description: "Straightforward, concise, no fluff", icon: Target },
    { id: "storytelling", title: "Storytelling", description: "Narrative-driven with a relatable story arc", icon: BookOpen },
    { id: "data-focused", title: "Data and Case Study Focused", description: "Backed by statistics, metrics, and proof", icon: BarChart },
  ],
};

const dict: Record<string, Record<string, string>> = {
  position: {
    "ceo-founder": "Tailor the email for a CEO or founder. Speak to high-level business impact — revenue growth, market positioning, competitive advantage, and ROI. Be concise; CEOs value brevity and directness. Avoid technical deep-dives.",
    "hr-manager": "Tailor the email for an HR manager. Focus on people-related outcomes — employee satisfaction, retention rates, time-to-hire, onboarding efficiency, and compliance. Emphasize ease of implementation and team adoption.",
    "cmo-marketing": "Tailor the email for a CMO or marketing leader. Speak to pipeline generation, conversion rates, campaign ROI, brand awareness, and marketing analytics. Use marketing-specific terminology and show understanding of their funnel.",
    "cto-it": "Tailor the email for a CTO or IT leader. Focus on technical benefits — security, scalability, API integration, developer experience, uptime, and performance. Include technical specs or architecture details if relevant.",
  },
  value: {
    "cost-savings": "Frame the value prop around cost reduction. Use specific percentages or dollar amounts where possible. Highlight ROIs like 'reduce operational costs by 40%' or 'save $50k annually on manual processes'.",
    "revenue-increase": "Frame the value prop around revenue growth. Emphasize how your solution increases average order value, customer lifetime value, conversion rates, or expands wallet share with existing customers.",
    "time-savings": "Frame the value prop around time savings. Use concrete metrics like 'save 10 hours per week per team member' or 'reduce response time from 4 hours to 2 minutes'. Time is often the most compelling B2B value prop.",
    "workflow-automation": "Frame the value prop around end-to-end automation. Describe how manual steps are eliminated, data flows automatically between systems, and teams can focus on high-value work instead of repetitive tasks.",
  },
  followup: {
    "just-1-email": "Write a single email that must do everything — grab attention, convey value, build credibility, and drive action. Make every word count. Aim for 100–150 words. No follow-up will be sent, so include a clear deadline or urgency.",
    "3-email-sequence": "Write a 3-email sequence: Email 1 — personalized value proposition and social proof. Email 2 (day 3) — case study or success story relevant to their role. Email 3 (day 6) — break-up email with a final offer or alternative contact method.",
    "aggressive-5-email": "Write a 5-email sequence with increasing urgency and varied angles: Email 1 — personalized intro and value prop. Email 2 (day 2) — social proof and results. Email 3 (day 4) — objection handling. Email 4 (day 7) — scarcity or limited offer. Email 5 (day 10) — final break-up email.",
  },
  style: {
    direct: "Write in a direct, no-fluff style. Open with a personalized line referencing their company or role, state the value prop in the first paragraph, include one social proof point, and end with a single clear CTA. Keep it under 125 words.",
    storytelling: "Write in a storytelling style. Open with a relatable anecdote about a challenge their role faces, transition into how your solution solved it for someone similar, and end with an invitation to learn more. Use a conversational but professional tone.",
    "data-focused": "Write in a data-driven style. Lead with a compelling statistic about their industry pain point, back each claim with specific metrics (percentage improvements, dollar amounts, time savings), include a brief case study quote, and offer to share a full report.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const position = selections.step1;
  const value = selections.step2;
  const followup = selections.step3;
  const style = selections.step4;

  const lines = ["# B2B Cold Email Sequence", "", "## Email Strategy", ""];
  if (position) lines.push(`**Recipient Position:** ${dict.position[position] ?? position}`);
  if (position) lines.push(`> ${notes[`position-${position}`] ?? ""}`);
  lines.push("");
  if (value) lines.push(`**Core Value Prop:** ${dict.value[value] ?? value}`);
  if (value) lines.push(`> ${notes[`value-${value}`] ?? ""}`);
  lines.push("");
  if (followup) lines.push(`**Follow-up Strategy:** ${dict.followup[followup] ?? followup}`);
  if (followup) lines.push(`> ${notes[`followup-${followup}`] ?? ""}`);
  lines.push("");
  if (style) lines.push(`**Persuasion Style:** ${dict.style[style] ?? style}`);
  if (style) lines.push(`> ${notes[`style-${style}`] ?? ""}`);
  lines.push("");
  lines.push("## Email Template", "");
  lines.push("### Subject Line");
  lines.push("[Generated subject line based on selections]");
  lines.push("");
  lines.push("### Body");
  lines.push(`[Written in a ${options.style.find(o => o.id === style)?.title ?? "direct"} style, targeting a ${options.position.find(o => o.id === position)?.title ?? "decision-maker"}, emphasizing ${options.value.find(o => o.id === value)?.title ?? "value"}]`);
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push(`**Sequence:** ${options.followup.find(o => o.id === followup)?.title ?? "Single email"}`);

  return lines.join("\n");
}

export default function ColdEmailPage() {
  return (
    <ToolShell
      title="B2B Cold Email Sequence"
      steps={[
        { id: 1, label: "Recipient", component: (p) => (
          <GenericStep {...p} title="Select Recipient Position" description="Who are you emailing?" options={options.position} mode="single" selected={p.selections.step1} onSelect={(id) => p.onSelect("step1", id)} notePrefix="position" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Value", component: (p) => (
          <GenericStep {...p} title="Select Core Value Prop" description="What is the main benefit you offer?" options={options.value} mode="single" selected={p.selections.step2} onSelect={(id) => p.onSelect("step2", id)} notePrefix="value" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Follow-up", component: (p) => (
          <GenericStep {...p} title="Select Number of Follow-ups" description="How many emails in the sequence?" options={options.followup} mode="single" selected={p.selections.step3} onSelect={(id) => p.onSelect("step3", id)} notePrefix="followup" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Style", component: (p) => (
          <GenericStep {...p} title="Select Persuasion Style" description="How should the email be written?" options={options.style} mode="single" selected={p.selections.step4} onSelect={(id) => p.onSelect("step4", id)} notePrefix="style" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}
