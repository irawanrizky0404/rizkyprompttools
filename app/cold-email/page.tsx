"use client";

import type { FC } from "react";
import {
  Crown, Users, BarChart3, Monitor, DollarSign, TrendingUp, Clock, Zap,
  Mail, MailPlus, MailWarning, Target, BookOpen, BarChart, Shield, Award,
  Headphones, Star, MessageSquare, Flag, Calendar, Sun, Bell, Fingerprint,
  Search, FileText, Newspaper, ThumbsUp, Settings,
  HelpCircle,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  position: [
    { id: "ceo-founder", title: "CEO / Founder", description: "Executive decision-maker focused on growth and strategy", icon: Crown },
    { id: "hr-manager", title: "HR Manager", description: "People operations, recruitment, and employee experience", icon: Users },
    { id: "cmo-marketing", title: "CMO (Marketing)", description: "Brand, demand generation, and marketing strategy", icon: BarChart3 },
    { id: "cto-it", title: "CTO / IT", description: "Technology infrastructure, engineering, and product", icon: Monitor },
    { id: "vp-director", title: "VP / Director", description: "Senior leader reporting to C-suite, influential but not final decision-maker", icon: Star },
    { id: "head-of-sales", title: "Head of Sales", description: "Revenue leader managing sales team and pipeline", icon: TrendingUp },
    { id: "head-of-product", title: "Head of Product", description: "Product strategy, roadmap, and feature prioritization", icon: Shield },
    { id: "operations-manager", title: "Operations Manager", description: "Day-to-day operations, process optimization, efficiency", icon: Settings },
  ],
  value: [
    { id: "cost-savings", title: "Cost Savings", description: "Reduce operational expenses or overhead", icon: DollarSign },
    { id: "revenue-increase", title: "Revenue Increase", description: "Grow top-line revenue or average deal size", icon: TrendingUp },
    { id: "time-savings", title: "Time Savings", description: "Free up team hours by automating manual work", icon: Clock },
    { id: "workflow-automation", title: "Workflow Automation", description: "Automate repetitive processes end-to-end", icon: Zap },
    { id: "risk-reduction", title: "Risk Reduction", description: "Minimize compliance, security, or operational risk", icon: Shield },
    { id: "quality-improvement", title: "Quality Improvement", description: "Raise output quality, accuracy, or consistency", icon: Award },
    { id: "competitive-advantage", title: "Competitive Advantage", description: "Differentiate from competitors with unique capability", icon: Flag },
    { id: "customer-experience", title: "Customer Experience", description: "Improve satisfaction, NPS, or retention rates", icon: Star },
  ],
  followup: [
    { id: "just-1-email", title: "Just 1 Email", description: "Single cold email, no follow-up sequence", icon: Mail },
    { id: "2-email-sequence", title: "2-Email Sequence", description: "Initial email plus one strategic follow-up", icon: MailWarning },
    { id: "3-email-sequence", title: "3-Email Sequence", description: "Initial email plus two strategic follow-ups", icon: MailPlus },
    { id: "4-email-sequence", title: "4-Email Sequence", description: "Full sequence with varied angles and cadence", icon: MailPlus },
    { id: "aggressive-5-email", title: "Aggressive 5-Email Sequence", description: "Full sequence with persistence and varied angles", icon: MailWarning },
    { id: "6-email-sequence", title: "Extended 6-Email Sequence", description: "Maximum touches with break-up and re-engagement", icon: MailWarning },
    { id: "drip-campaign", title: "Drip Campaign (7+ Emails)", description: "Long-term nurture sequence with content-driven value", icon: MessageSquare },
    { id: "tailored-sequence", title: "Tailored Per Segment", description: "Different sequences based on recipient behavior or segment", icon: Settings },
  ],
  style: [
    { id: "direct", title: "Direct and To the Point", description: "Straightforward, concise, no fluff", icon: Target },
    { id: "storytelling", title: "Storytelling", description: "Narrative-driven with a relatable story arc", icon: BookOpen },
    { id: "data-focused", title: "Data and Case Study Focused", description: "Backed by statistics, metrics, and proof", icon: BarChart },
    { id: "conversational", title: "Conversational & Friendly", description: "Casual, warm tone like a peer reaching out", icon: MessageSquare },
    { id: "educational-authority", title: "Educational / Authority", description: "Teach something valuable to demonstrate expertise", icon: Award },
    { id: "problem-agitate-solution", title: "Problem-Agitate-Solution", description: "Name the pain, intensify it, then offer the cure", icon: Zap },
    { id: "social-selling", title: "Social Selling", description: "Reference social content or mutual connections", icon: Users },
    { id: "humor-witty", title: "Humor / Witty", description: "Light-hearted, memorable, breaks the boring email pattern", icon: Crown },
  ],
  subjectLine: [
    { id: "curiosity-gap", title: "Curiosity Gap", description: "Tease intriguing info without revealing it", icon: Search },
    { id: "personalization", title: "Personalization", description: "Include company name, role, or recent event", icon: Fingerprint },
    { id: "pain-point", title: "Pain Point", description: "Reference a specific problem they likely face", icon: Zap },
    { id: "value-proposition", title: "Value Proposition", description: "State the core benefit plainly in the subject", icon: TrendingUp },
    { id: "question-based", title: "Question-Based", description: "Pose a question the recipient wants answered", icon: HelpCircle },
    { id: "how-to", title: "How-To / Resource", description: "Promise a specific how-to or valuable resource", icon: BookOpen },
    { id: "statistic-led", title: "Statistic-Led", description: "Lead with an eye-catching number or stat", icon: BarChart },
    { id: "urgency-scarcity", title: "Urgency / Scarcity", description: "Create FOMO with time or availability constraints", icon: Bell },
  ],
  personalization: [
    { id: "company-research", title: "Company Research", description: "Reference recent company news, funding, or growth", icon: Newspaper },
    { id: "role-specific", title: "Role-Specific Pain", description: "Address challenges specific to their role title", icon: Target },
    { id: "industry-insight", title: "Industry Insight", description: "Show understanding of their industry trends", icon: Shield },
    { id: "recent-news", title: "Recent News / Event", description: "Cite a recent article, product launch, or hire", icon: FileText },
    { id: "referral-introduction", title: "Referral / Introduction", description: "Reference the person who referred you to them", icon: Star },
    { id: "shared-connection", title: "Shared Connection", description: "Mention a mutual connection or colleague", icon: Users },
    { id: "content-referral", title: "Content Referral", description: "Reference their recent post, talk, or publication", icon: MessageSquare },
    { id: "problem-aware", title: "Problem Awareness", description: "Show you understand their specific pain without being told", icon: Search },
  ],
  socialProof: [
    { id: "customer-testimonial", title: "Customer Testimonial", description: "Quote from a satisfied customer in their industry", icon: MessageSquare },
    { id: "case-study", title: "Case Study", description: "Detailed story of a similar company's success", icon: FileText },
    { id: "stats-figures", title: "Stats & Figures", description: "Hard numbers proving ROI (%, $, time saved)", icon: BarChart },
    { id: "client-logos", title: "Client Logos", description: "List of recognizable brands you work with", icon: Award },
    { id: "industry-award", title: "Industry Award", description: "Mention an award, certification, or ranking", icon: Star },
    { id: "media-mention", title: "Media Mention", description: "Reference coverage in reputable publications", icon: Newspaper },
    { id: "social-proof-count", title: "Social Proof Count", description: "Number of customers, reviews, or users", icon: ThumbsUp },
    { id: "influencer-endorsement", title: "Influencer Endorsement", description: "Known figure or thought leader who recommends you", icon: Star },
  ],
  timing: [
    { id: "tue-10am", title: "Tuesday 10 AM", description: "Start of business, high open rates for B2B", icon: Calendar },
    { id: "tue-2pm", title: "Tuesday 2 PM", description: "Post-lunch slot, decision-makers are reading", icon: Calendar },
    { id: "wed-10am", title: "Wednesday 10 AM", description: "Mid-week peak engagement window", icon: Calendar },
    { id: "wed-2pm", title: "Wednesday 2 PM", description: "Highest reply rate for cold emails", icon: Calendar },
    { id: "thu-10am", title: "Thursday 10 AM", description: "Strong engagement before Friday wind-down", icon: Calendar },
    { id: "thu-2pm", title: "Thursday 2 PM", description: "Last good slot before weekend low engagement", icon: Calendar },
    { id: "weekend-read", title: "Sunday Evening", description: "Weekend reading when inbox is quieter", icon: Sun },
    { id: "tue-early-morning", title: "Tuesday 6–7 AM", description: "Early bird slot before the workday rush", icon: Sun },
  ],
};

const dict: Record<string, Record<string, string>> = {
  position: {
    "ceo-founder": "Tailor the email for a CEO or founder. Speak to high-level business impact — revenue growth, market positioning, competitive advantage, and ROI. Be concise; CEOs value brevity and directness. Avoid technical deep-dives. Use executive-level language.",
    "hr-manager": "Tailor the email for an HR manager. Focus on people-related outcomes — employee satisfaction, retention rates, time-to-hire, onboarding efficiency, and compliance. Emphasize ease of implementation and team adoption. Reference HR-specific KPIs.",
    "cmo-marketing": "Tailor the email for a CMO or marketing leader. Speak to pipeline generation, conversion rates, campaign ROI, brand awareness, and marketing analytics. Use marketing-specific terminology (MQL, SQL, CAC, LTV) and show understanding of their funnel.",
    "cto-it": "Tailor the email for a CTO or IT leader. Focus on technical benefits — security, scalability, API integration, developer experience, uptime, and performance. Include technical specs or architecture details if relevant. Respect their time with data.",
    "vp-director": "Tailor the email for a VP or Director. These leaders influence decisions but may need to build a business case for higher approval. Provide ROI data, competitive analysis, and implementation timelines. Be thorough but structured with clear takeaways.",
    "head-of-sales": "Tailor the email for a Head of Sales. Speak to pipeline velocity, close rates, quota attainment, sales enablement, and forecast accuracy. Use sales metrics and language. Show how your solution removes friction from their team's process.",
    "head-of-product": "Tailor the email for a Head of Product. Focus on user research, feature prioritization, time-to-market, product-market fit, and engineering collaboration. Speak to how your solution improves the product development lifecycle or user insights.",
    "operations-manager": "Tailor the email for an Operations Manager. Focus on process efficiency, workflow optimization, error reduction, team productivity, and reporting. Ops managers care about measurable improvements and quick wins that can be demonstrated to leadership.",
  },
  value: {
    "cost-savings": "Frame the value prop around cost reduction. Use specific percentages or dollar amounts where possible. Highlight ROIs like 'reduce operational costs by 40%' or 'save $50k annually on manual processes'. Show payback period and total cost of ownership.",
    "revenue-increase": "Frame the value prop around revenue growth. Emphasize how your solution increases average order value, customer lifetime value, conversion rates, or expands wallet share with existing customers. Tie revenue impact directly to their role.",
    "time-savings": "Frame the value prop around time savings. Use concrete metrics like 'save 10 hours per week per team member' or 'reduce response time from 4 hours to 2 minutes'. Time is often the most compelling B2B value prop — monetize the hours saved.",
    "workflow-automation": "Frame the value prop around end-to-end automation. Describe how manual steps are eliminated, data flows automatically between systems, and teams can focus on high-value work instead of repetitive tasks. Map the current workflow vs the automated workflow.",
    "risk-reduction": "Frame the value prop around risk mitigation. Highlight compliance certifications (SOC 2, ISO 27001), security features, data privacy protections, and audit trails. For regulated industries, risk reduction can be more important than cost savings.",
    "quality-improvement": "Frame the value prop around quality. Use metrics like error rate reduction, accuracy improvement, consistency scores, or defect reduction. Quality improvements often have cascading effects on customer satisfaction, retention, and brand reputation.",
    "competitive-advantage": "Frame the value prop around competitive differentiation. Show how your solution helps them win deals faster, enter new markets, launch products quicker, or deliver a superior customer experience. 'Your competitors are already using this.'",
    "customer-experience": "Frame the value prop around customer experience. Highlight NPS improvements, response time reductions, personalization capabilities, and customer satisfaction metrics. CX is a board-level priority — speak to its strategic importance.",
  },
  followup: {
    "just-1-email": "Write a single email that must do everything — grab attention, convey value, build credibility, and drive action. Make every word count. Aim for 100–150 words. No follow-up will be sent, so include a clear deadline or urgency. Make the CTA impossible to ignore.",
    "2-email-sequence": "Write a 2-email sequence: Email 1 — personalized value proposition with a specific observation about their company. Email 2 (day 4) — break-up email with a final offer or alternative contact method. Keep both emails tight under 100 words each.",
    "3-email-sequence": "Write a 3-email sequence: Email 1 — personalized value proposition and social proof. Email 2 (day 3) — case study or success story relevant to their role. Email 3 (day 6) — break-up email with a final offer or alternative contact method.",
    "4-email-sequence": "Write a 4-email sequence: Email 1 — personalized intro and primary value prop. Email 2 (day 3) — social proof with customer results. Email 3 (day 6) — objection handling or FAQ style. Email 4 (day 10) — break-up with a parting resource or recommendation.",
    "aggressive-5-email": "Write a 5-email sequence with increasing urgency and varied angles: Email 1 — personalized intro and value prop. Email 2 (day 2) — social proof and results. Email 3 (day 4) — objection handling. Email 4 (day 7) — scarcity or limited offer. Email 5 (day 10) — final break-up email.",
    "6-email-sequence": "Write a 6-email sequence: Email 1 — intro + value prop. Email 2 (day 3) — case study. Email 3 (day 5) — objection handling. Email 4 (day 8) — social proof + testimonials. Email 5 (day 12) — scarcity/limited offer. Email 6 (day 15) — final break-up with resource handoff.",
    "drip-campaign": "Write a drip campaign of 7+ emails spread over 4–6 weeks. Emails alternate between value delivery (tips, guides, insights) and gentle CTAs. Include content downloads, webinar invites, and case studies. The goal is nurturing, not hard selling. Track open and click engagement.",
    "tailored-sequence": "Design multiple sequence tracks based on recipient behavior: Track A — opened but no reply (send follow-up with more value). Track B — clicked but no reply (send demo offer). Track C — no open after 3 sends (change subject line strategy). Track D — replied but not now (set 90-day nurture).",
  },
  style: {
    direct: "Write in a direct, no-fluff style. Open with a personalized line referencing their company or role, state the value prop in the first paragraph, include one social proof point, and end with a single clear CTA. Keep it under 125 words. No anecdotes, no fluff.",
    storytelling: "Write in a storytelling style. Open with a relatable anecdote about a challenge their role faces, transition into how your solution solved it for someone similar, and end with an invitation to learn more. Use a conversational but professional tone. Keep the story under 3 sentences.",
    "data-focused": "Write in a data-driven style. Lead with a compelling statistic about their industry pain point, back each claim with specific metrics (percentage improvements, dollar amounts, time savings), include a brief case study quote, and offer to share a full report.",
    conversational: "Write in a conversational, friendly style. Use casual greetings ('Hey [Name]'), contractions, and a warm tone. Write as if emailing a peer at a conference. Keep it natural — avoid template-sounding phrases. Use humor carefully and only if it matches your brand voice.",
    "educational-authority": "Write in an educational style. Open with a valuable insight or tip related to their role or industry. Demonstrate expertise by teaching something useful. Transition by showing how your solution amplifies this insight. Establish authority before selling.",
    "problem-agitate-solution": "Use the PAS framework: Problem — name their specific pain vividly. Agitate — describe the consequences of not solving it (wasted money, lost time, falling behind). Solution — present your offer as the clear answer. End with a low-friction CTA.",
    "social-selling": "Use a social-selling approach. Reference something from their LinkedIn activity, a recent post, or a mutual connection. 'I saw your post about [topic] and it resonated because...' Establish common ground before introducing your value proposition.",
    "humor-witty": "Use humor strategically. A well-placed joke or clever observation makes your email memorable. Keep it relevant to their context — industry humor lands better than generic jokes. Never make fun of the recipient. A 20% humor, 80% substance ratio works well.",
  },
  subjectLine: {
    "curiosity-gap": "Craft a curiosity-gap subject line that teases information without revealing it. Examples: 'The 3-word email that booked 14 meetings', 'I asked your competitor one question', 'Your [Role] team is missing this'. The subject should be impossible to ignore without context.",
    personalization: "Craft a personalized subject line using the company name, their name, or a specific reference. Examples: '[Company Name] + [Your Company]', '[Name], a thought on [topic]', 'Quick question about [Company]'s growth'. Personalization boosts open rates by 20–40%.",
    "pain-point": "Craft a pain-point subject line that names a specific problem they face. Examples: 'Still using spreadsheets for [process]?', 'The [specific pain] problem', '5 hours wasted on [task] every week?'. The subject should make them think 'yes, that is exactly my problem'.",
    "value-proposition": "Craft a value-prop subject line that states the core benefit. Examples: 'Reduce [cost] by 40% in 90 days', 'Double your [metric] with one change', 'Free up 10 hours per week for your team'. Lead with the outcome, not the feature.",
    "question-based": "Craft a question-based subject line that makes them want the answer. Examples: 'What is your [metric] target for 2025?', 'How does [Company] handle [specific challenge]?', 'Is [common belief] actually true?' Questions trigger a mental response even before opening.",
    "how-to": "Craft a how-to subject line promising practical value. Examples: 'How [Company] can [achieve outcome] in 30 days', 'A 3-step framework for [goal]', 'The playbook [Competitor] used to [result]'. Promise a specific, actionable takeaway.",
    "statistic-led": "Craft a statistic-led subject line with an eye-popping number. Examples: '86% of [industry] teams miss this', 'We saved $2.3M for [similar company]', '1 change. 42% more [metric].' Numbers create specificity and credibility. Use odd numbers for higher believability.",
    "urgency-scarcity": "Craft an urgency subject line with time or availability constraints. Examples: 'Limited: [Number] slots open for [offer]', 'Ending [day]: special pricing for [Company]', 'Last chance: [offer] expires [date]'. Use genuine scarcity only — false urgency erodes trust.",
  },
  personalization: {
    "company-research": "Personalize using company research: reference their recent funding round, office expansion, new product launch, hiring spree, or leadership change. 'Congratulations on the Series B — this is exactly when companies like yours invest in [solution].' Shows genuine homework.",
    "role-specific": "Personalize by addressing role-specific challenges. For a CMO: 'Balancing brand spend and performance marketing is brutal right now.' For a CTO: 'Legacy system migration without downtime — I know that keeps you up at night.' Shows you understand their world.",
    "industry-insight": "Personalize by demonstrating industry knowledge. Reference trends, regulations, or shifts specific to their vertical. 'The new [regulation] in [industry] is creating compliance headaches for [role].' Positions you as an insider who gets their context.",
    "recent-news": "Personalize with a recent news reference. Cite an article, interview, product launch, or award they recently received. 'Saw your interview on [Publication] — loved your take on [topic].' Timely references prove the email is not a mass blast.",
    "referral-introduction": "Personalize by referencing who referred you. '[Name] suggested I reach out — they thought you would be interested in [solution].' Referral intros have the highest response rates (50%+). Send a warm intro email if possible rather than cold.",
    "shared-connection": "Personalize by mentioning a mutual connection. '[Name] and I worked together at [Company] — they mentioned you might be working on [challenge].' Mutual connections build instant trust. Keep the connection mention brief and relevant.",
    "content-referral": "Personalize by referencing their content. Mention their recent blog post, LinkedIn article, conference talk, or podcast appearance. 'Your post on [topic] really resonated — especially the point about [specific insight].' Shows depth of research and genuine interest.",
    "problem-aware": "Personalize by demonstrating problem awareness without being told. 'Based on [Company]'s recent [signal — job posting, partnership, product change], I noticed you are probably dealing with [specific challenge].' Predictive personalization is highly impressive.",
  },
  socialProof: {
    "customer-testimonial": "Include a direct customer testimonial quote. Use a real name, title, and company (with permission). Keep it 1–2 sentences focused on a specific outcome. '[Name], [Title] at [Company]: \"[Solution] helped us reduce [metric] by [X]% in [timeframe].\"'",
    "case-study": "Reference a relevant case study. Describe the before state (their pain), the intervention (your solution), and the after state (measurable results). Keep it to 3–4 sentences. Offer to share the full case study as a link or attachment. Use industry-specific examples.",
    "stats-figures": "Lead with hard numbers. 'Our customers average a 4.2x ROI within 6 months.' 'Teams save 15+ hours per week.' '99.9% uptime guarantee.' Specific, verifiable numbers build credibility. Avoid round numbers — '$1,847 saved per employee' sounds more real than '$2,000'.",
    "client-logos": "Mention recognizable client logos relevant to their industry or company size. 'We work with [Logo 1], [Logo 2], and [Logo 3] — all of whom saw [specific outcome].' If you cannot name-drop, describe the type of company: 'Several Series B SaaS companies in your space...'",
    "industry-award": "Cite relevant awards, rankings, or certifications. 'G2 Leader in [Category] for 2024', 'Forbes Cloud 100', 'SOC 2 Type II certified', 'ISO 27001 certified'. Awards signal third-party validation and reduce perceived risk for the buyer.",
    "media-mention": "Reference coverage in reputable industry or mainstream publications. 'As featured in [Publication]', '[Publication] called us the [market leader / game-changer] for [industry]'. Media mentions provide credibility through association with trusted editorial brands.",
    "social-proof-count": "Use social proof numbers strategically. 'Join 10,000+ companies using [Product]', 'Rated 4.8/5 on G2 with 500+ reviews', 'Trusted by 3 of the top 10 Fortune 500 companies in [industry].' Large numbers create a bandwagon effect — 'everyone else is using it'.",
    "influencer-endorsement": "Reference a thought leader or industry influencer who uses or endorses your solution. '[Influencer Name], [Title] at [Company], says [Product] is the best [category] tool they have used.' Influencer credibility transfers to your brand.",
  },
  timing: {
    "tue-10am": "Send at Tuesday 10 AM in the recipient's local timezone. Tuesday is the highest open-rate day across B2B. 10 AM catches people after they have cleared morning emails but before lunch meetings. Ideal for initial outreach emails.",
    "tue-2pm": "Send at Tuesday 2 PM. Post-lunch slot captures decision-makers who use afternoons for reading and research. Tuesday 2 PM has the highest reply rate among cold email benchmarks. Good for follow-up emails with case studies.",
    "wed-10am": "Send at Wednesday 10 AM. Wednesday continues the mid-week peak. Wednesday morning has high inbox attention as people settle into the week. Best for email 2 or 3 in a sequence when the recipient is more familiar with your name.",
    "wed-2pm": "Send at Wednesday 2 PM. The highest reply rate slot for cold emails overall. Wednesday afternoons find decision-makers in a reflective, research-oriented mindset. Ideal for emails that include a case study or ROI data.",
    "thu-10am": "Send at Thursday 10 AM. Thursday morning remains strong for B2B email engagement. Good for break-up emails or scarcity-focused emails — the recipient knows the week is ending and action needs to be taken soon.",
    "thu-2pm": "Send at Thursday 2 PM. The last high-engagement slot before the Friday drop-off. Thursday afternoon emails should be shorter and more direct. Use for simple, low-friction CTAs or last-chance offers.",
    "weekend-read": "Send at Sunday evening (6–8 PM). Weekend inboxes are less crowded, so your email has less competition. Decision-makers often catch up on reading Sunday night. Best for value-driven, educational content rather than hard pitches.",
    "tue-early-morning": "Send at Tuesday 6–7 AM. Early morning catches the recipient before their inbox fills up. High open rates from mobile-first readers checking email in bed or during commute. Keep it short — they will likely read on mobile and reply later.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const position = selections.step1;
  const value = selections.step2;
  const followup = selections.step3;
  const style = selections.step4;
  const subjectLine = selections.step5;
  const personalization = selections.step6;
  const socialProof = selections.step7;
  const timing = selections.step8;

  const lines: string[] = [];

  lines.push("# B2B Cold Email Sequence Builder");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const posLabel = Array.isArray(position) ? position.map(id => options.position.find(o => o.id === id)?.title || id).join(", ") : options.position.find(o => o.id === position)?.title || position;
  lines.push(`| Recipient Position | ${posLabel} | ${notes[`position-${position}`] || ""}`);
  const valLabel = Array.isArray(value) ? value.map(id => options.value.find(o => o.id === id)?.title || id).join(", ") : options.value.find(o => o.id === value)?.title || value;
  lines.push(`| Core Value Prop | ${valLabel} | ${notes[`value-${value}`] || ""}`);
  const folLabel = Array.isArray(followup) ? followup.map(id => options.followup.find(o => o.id === id)?.title || id).join(", ") : options.followup.find(o => o.id === followup)?.title || followup;
  lines.push(`| Follow-up Strategy | ${folLabel} | ${notes[`followup-${followup}`] || ""}`);
  const styleLabel = Array.isArray(style) ? style.map(id => options.style.find(o => o.id === id)?.title || id).join(", ") : options.style.find(o => o.id === style)?.title || style;
  lines.push(`| Persuasion Style | ${styleLabel} | ${notes[`style-${style}`] || ""}`);
  const slLabel = Array.isArray(subjectLine) ? subjectLine.map(id => options.subjectLine.find(o => o.id === id)?.title || id).join(", ") : options.subjectLine.find(o => o.id === subjectLine)?.title || subjectLine;
  lines.push(`| Subject Line Strategy | ${slLabel} | ${notes[`subjectLine-${subjectLine}`] || ""}`);
  const perLabel = Array.isArray(personalization) ? personalization.map(id => options.personalization.find(o => o.id === id)?.title || id).join(", ") : options.personalization.find(o => o.id === personalization)?.title || personalization;
  lines.push(`| Personalization Approach | ${perLabel} | ${notes[`personalization-${personalization}`] || ""}`);
  const spLabel = Array.isArray(socialProof) ? socialProof.map(id => options.socialProof.find(o => o.id === id)?.title || id).join(", ") : options.socialProof.find(o => o.id === socialProof)?.title || socialProof;
  lines.push(`| Social Proof Type | ${spLabel} | ${notes[`socialProof-${socialProof}`] || ""}`);
  const timLabel = Array.isArray(timing) ? timing.map(id => options.timing.find(o => o.id === id)?.title || id).join(", ") : options.timing.find(o => o.id === timing)?.title || timing;
  lines.push(`| Send Timing | ${timLabel} | ${notes[`timing-${timing}`] || ""}`);
  lines.push("");

  const sections: [string, string, string, string][] = [
    ["Recipient", posLabel, position, "position"],
    ["Value Proposition", valLabel, value, "value"],
    ["Persuasion Style", styleLabel, style, "style"],
    ["Subject Line Strategy", slLabel, subjectLine, "subjectLine"],
    ["Personalization Approach", perLabel, personalization, "personalization"],
    ["Social Proof Strategy", spLabel, socialProof, "socialProof"],
    ["Send Timing", timLabel, timing, "timing"],
  ];

  for (const [heading, label, key, prefix] of sections) {
    lines.push(`## ${heading}: ${label}`);
    lines.push("");
    lines.push(Array.isArray(key) ? key.map(v => dict[prefix]?.[v] || v).join(", ") : dict[prefix]?.[key] || key);
    const note = notes[`${prefix}-${key}`] || "";
    if (note) lines.push(`> **Note:** ${note}`);
    lines.push("");
  }

  lines.push("## Follow-up Strategy: " + folLabel);
  lines.push("");
  lines.push(Array.isArray(followup) ? followup.map(v => dict.followup[v] || v).join(", ") : dict.followup[followup] || followup);
  const folNote = notes[`followup-${followup}`] || "";
  if (folNote) lines.push(`> **Note:** ${folNote}`);
  lines.push("");

  const numEmails = followup === "just-1-email" ? 1 : followup === "2-email-sequence" ? 2 : followup === "3-email-sequence" ? 3 : followup === "4-email-sequence" ? 4 : followup === "aggressive-5-email" ? 5 : followup === "6-email-sequence" ? 6 : followup === "drip-campaign" ? 7 : 3;

  lines.push("## Email Sequence (" + numEmails + " emails)");
  lines.push("");

  for (let i = 1; i <= numEmails; i++) {
    if (i > 1) {
      lines.push("---");
      lines.push("");
    }
    const emailNames: Record<number, string> = {
      1: "Initial Outreach",
      2: "Follow-up — Value Add",
      3: numEmails === 3 ? "Break-up" : "Objection Handling",
      4: numEmails === 4 ? "Break-up" : "Social Proof & Testimonials",
      5: "Scarcity / Limited Offer",
      6: "Final Break-up",
      7: "Re-engagement / Resource Handoff",
    };
    lines.push(`### Email ${i} — ${emailNames[i] || "Follow-up"}`);
    lines.push("");
    lines.push(`**Subject Line:** [${slLabel}: ${(Array.isArray(subjectLine) ? subjectLine.map(v => dict.subjectLine[v]?.split?.(".")?.[0] || v).join(", ") : dict.subjectLine[subjectLine]?.split?.(".")?.[0]) || "crafted subject"}]`);
    lines.push("");
    lines.push("Hi [First Name],");
    lines.push("");
    if (i === 1) {
      lines.push(`[${perLabel} personalization — ${(Array.isArray(personalization) ? personalization.map(v => dict.personalization[v]?.split?.(".")?.[0] || v).join(", ") : dict.personalization[personalization]?.split?.(".")?.[0]) || "personalized line"}]`);
      lines.push("");
      lines.push(`[${valLabel} value proposition — ${(Array.isArray(value) ? value.map(v => dict.value[v]?.split?.(".")?.[0] || v).join(", ") : dict.value[value]?.split?.(".")?.[0]) || "value prop"}]`);
      lines.push("");
      lines.push(`[${spLabel} social proof — ${(Array.isArray(socialProof) ? socialProof.map(v => dict.socialProof[v]?.split?.(".")?.[0] || v).join(", ") : dict.socialProof[socialProof]?.split?.(".")?.[0]) || "proof point"}]`);
      lines.push("");
      lines.push("Would you be open to a 15-minute call to explore this further?");
    } else if (i === numEmails) {
      lines.push("I understand you are busy, so I will keep this brief.");
      lines.push("");
      lines.push("If improving " + valLabel.toLowerCase() + " is not a priority right now, I completely understand. This will be my last email.");
      lines.push("");
      lines.push("However, if you would like to explore this when the timing is better, feel free to reach out anytime.");
      lines.push("");
      lines.push("Wishing you and [Company] the best,");
    } else if (i === 2) {
      lines.push(`Following up on my previous email — here is a relevant example of how [Customer] achieved [specific outcome] using [our solution].`);
      lines.push("");
      lines.push(`[${spLabel} — detailed social proof relevant to their role]`);
      lines.push("");
      lines.push("Would you be open to a 10-minute call to see if we can deliver similar results for [Company]?");
    } else {
      lines.push("[Email " + i + " — " + emailNames[i] + " content based on the selected follow-up strategy and persuasion style]");
      lines.push("");
      lines.push("[Continue the sequence with appropriate messaging, maintaining a " + styleLabel + " style throughout]");
    }
    lines.push("");
    lines.push("Best,");
    lines.push("[Your Name]");
    lines.push("");
  }

  lines.push("## Sequence Schedule");
  lines.push("");
  lines.push("| Email | Day | Send Time | Goal");
  lines.push("|-------|-----|-----------|------");
  const dayMap = [0, 3, 6, 10, 14, 18, 25];
  for (let i = 1; i <= numEmails; i++) {
    const day = dayMap[i - 1] ?? i * 3;
    const goals = ["Grab attention, deliver value prop", "Social proof, reinforce value", "Objection handling or additional angle", "Testimonials / social proof", "Scarcity or limited offer", "Final break-up, soft exit", "Nurture / resource handoff"];
    lines.push(`| Email ${i} | Day ${day} | ${timLabel} | ${goals[i - 1] || "Follow-up"} |`);
  }
  lines.push("");

  lines.push("## Best Practices");
  lines.push("");
  lines.push(`- **Personalize** using ${perLabel}: ${(Array.isArray(personalization) ? personalization.map(v => dict.personalization[v]?.split?.(".")?.[0] || v).join(", ") : dict.personalization[personalization]?.split?.(".")?.[0]) || "personalize each email"}.`);
  lines.push(`- **Subject lines**: Use the ${slLabel} strategy — ${(Array.isArray(subjectLine) ? subjectLine.map(v => dict.subjectLine[v]?.split?.(".")?.[0] || v).join(", ") : dict.subjectLine[subjectLine]?.split?.(".")?.[0]) || "write compelling subjects"}.`);
  lines.push(`- **Social proof**: Incorporate ${spLabel} to build credibility without bragging.`);
  lines.push(`- **Send timing**: ${timLabel} — ${(Array.isArray(timing) ? timing.map(v => dict.timing[v]?.split?.(".")?.[0] || v).join(", ") : dict.timing[timing]?.split?.(".")?.[0]) || "optimize send time"}.`);
  lines.push("- **Track opens and clicks** with a CRM or email tracking tool.");
  lines.push("- **A/B test subject lines** — personal vs. curiosity vs. value-focused.");
  lines.push("- **Keep emails under 125 words** — respect their time.");
  lines.push("- **Include one CTA per email** — too many choices kill response rates.");
  lines.push("- **Use a professional email address** — no generic Gmail for B2B outreach.");
  lines.push("- **Warm up the sending domain** before sending at scale.");
  lines.push("");

  lines.push("## Metrics to Track");
  lines.push("");
  lines.push("| Metric | Benchmark | Target");
  lines.push("|--------|-----------|-------");
  lines.push("| Open Rate | 40–60% | ≥ 50%");
  lines.push("| Reply Rate | 5–15% | ≥ 10%");
  lines.push("| Meeting Booked | 2–5% | ≥ 3%");
  lines.push("| Bounce Rate | < 5% | < 2%");
  lines.push("| Unsubscribe Rate | < 1% | < 0.5%");
  lines.push("| Forward / Share Rate | < 1% | > 2%");
  lines.push("");

  lines.push("## Email Personalization Matrix");
  lines.push("");
  lines.push("| Personalization Level | Example | Effort | Impact");
  lines.push("|-----------------------|---------|--------|--------");
  lines.push("| Basic (Name + Company) | \"Hi John, I see you are at Acme Corp\" | Low | +20% OR");
  lines.push("| Medium (Role + Industry) | \"As CMO at Acme, you probably deal with...\" | Medium | +35% OR");
  lines.push("| High (Recent Event) | \"Congrats on the Series B — timing is perfect for...\" | High | +50% OR");
  lines.push("| Custom (Deep Research) | \"Your recent post on [topic] aligns perfectly with...\" | Very High | +70% OR");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by B2B Cold Email Sequence Builder_");

  return lines.join("\n");
}

export default function ColdEmailPage() {
  return (
    <ToolShell
      title="B2B Cold Email Sequence"
      steps={[
        { id: 1, label: "Recipient", component: (p) => (
          <GenericStep {...p} title="Select Recipient Position" description="Who are you emailing?" options={options.position} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="position" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Value", component: (p) => (
          <GenericStep {...p} title="Select Core Value Prop" description="What is the main benefit you offer?" options={options.value} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="value" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Follow-up", component: (p) => (
          <GenericStep {...p} title="Select Follow-up Strategy" description="How many emails in the sequence?" options={options.followup} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="followup" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Style", component: (p) => (
          <GenericStep {...p} title="Select Persuasion Style" description="How should the email be written?" options={options.style} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="style" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Subject", component: (p) => (
          <GenericStep {...p} title="Select Subject Line Strategy" description="What approach grabs their attention in the inbox?" options={options.subjectLine} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="subjectLine" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Personalize", component: (p) => (
          <GenericStep {...p} title="Select Personalization Approach" description="How will you customize each email?" options={options.personalization} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="personalization" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Proof", component: (p) => (
          <GenericStep {...p} title="Select Social Proof Type" description="What evidence builds credibility?" options={options.socialProof} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="socialProof" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Timing", component: (p) => (
          <GenericStep {...p} title="Select Send Timing" description="When should the emails be sent?" options={options.timing} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="timing" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}









