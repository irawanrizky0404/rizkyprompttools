"use client";

import type { FC } from "react";
import {
  HelpCircle, CheckCircle, BarChart, Target, Globe,
  TrendingUp, DollarSign, Award, Zap, Users, Lightbulb,
  Heart, Layers, Clock, Shield, Activity, Search,
  BookOpen, Star, Rocket, Share2, MessageSquare,
  Building2, Database, Package, Download, Mail,
  ShoppingCart, CreditCard, PiggyBank, XCircle, Code,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  problem: [
    { id: "inefficiency", title: "Inefficiency", description: "Manual, slow, or error-prone processes wasting time and money", icon: Clock },
    { id: "high-cost", title: "High Cost", description: "Existing solution is too expensive for the target market", icon: DollarSign },
    { id: "poor-experience", title: "Poor User Experience", description: "Existing tools are hard to use, ugly, or frustrating", icon: XCircle },
    { id: "access-gap", title: "Access Gap", description: "Solution exists but is not accessible to underserved segments", icon: Globe },
    { id: "data-silo", title: "Data Silos", description: "Information trapped in disconnected systems with no integration", icon: Database },
    { id: "quality-issue", title: "Quality Issue", description: "Existing solutions produce inconsistent or low-quality results", icon: Shield },
    { id: "lack-insight", title: "Lack of Insight", description: "No visibility into key metrics or business performance", icon: Search },
    { id: "complexity", title: "Over-Complexity", description: "Existing tools have steep learning curves or unnecessary features", icon: Layers },
    { id: "speed-gap", title: "Speed Gap", description: "Existing process is too slow for modern demands", icon: Zap },
  ],
  solution: [
    { id: "automation", title: "Automation", description: "Automate repetitive manual tasks end-to-end", icon: Zap },
    { id: "simplification", title: "Simplification", description: "Reduce complexity and streamline the workflow", icon: Layers },
    { id: "integration", title: "Integration Platform", description: "Connect disparate systems into a unified flow", icon: Share2 },
    { id: "analytics", title: "Analytics & Insights", description: "Provide data-driven insights and recommendations", icon: BarChart },
    { id: "cost-reduction", title: "Cost Reduction", description: "Deliver comparable value at a fraction of the cost", icon: PiggyBank },
    { id: "quality-improvement", title: "Quality Improvement", description: "Raise the bar on output quality and consistency", icon: Award },
    { id: "accessibility", title: "Accessibility", description: "Make the solution available to a broader audience", icon: Heart },
    { id: "personalization", title: "Personalization", description: "Tailor the experience to individual user needs", icon: Star },
    { id: "speed", title: "Speed Optimization", description: "Deliver results significantly faster than alternatives", icon: Rocket },
  ],
  metrics: [
    { id: "mrr", title: "Monthly Recurring Revenue", description: "Predictable revenue stream from subscriptions", icon: TrendingUp },
    { id: "cac", title: "Customer Acquisition Cost", description: "Cost to acquire a single paying customer", icon: DollarSign },
    { id: "ltv", title: "Lifetime Value (LTV)", description: "Total revenue from a customer over their lifetime", icon: Star },
    { id: "churn", title: "Churn Rate", description: "Percentage of customers who stop using the product", icon: XCircle },
    { id: "activation", title: "Activation Rate", description: "Percentage of sign-ups who reach the aha moment", icon: Zap },
    { id: "nps", title: "Net Promoter Score", description: "Customer satisfaction and likelihood to recommend", icon: Heart },
    { id: "usage", title: "Daily/Weekly Active Users", description: "Engagement frequency and stickiness", icon: Activity },
    { id: "conversion", title: "Conversion Rate", description: "Percentage of visitors who take desired action", icon: Target },
    { id: "virality", title: "Viral Coefficient", description: "Number of new users each existing user brings", icon: Share2 },
  ],
  uvp: [
    { id: "cost-save", title: "Save Money", description: "We help you save money compared to alternatives", icon: PiggyBank },
    { id: "time-save", title: "Save Time", description: "We help you accomplish tasks faster", icon: Clock },
    { id: "quality", title: "Higher Quality", description: "We deliver superior quality and consistency", icon: Award },
    { id: "simplicity", title: "Simplicity", description: "We make complex things simple and intuitive", icon: Layers },
    { id: "speed", title: "Speed", description: "We deliver results in record time", icon: Rocket },
    { id: "expertise", title: "Expertise Access", description: "We provide expert-level capabilities to everyone", icon: BookOpen },
    { id: "integration", title: "Seamless Integration", description: "We work with your existing tools and workflows", icon: Share2 },
    { id: "delight", title: "Delightful Experience", description: "We make the experience enjoyable, not painful", icon: Heart },
    { id: "results", title: "Guaranteed Results", description: "We guarantee specific outcomes or your money back", icon: CheckCircle },
  ],
  channels: [
    { id: "content-marketing", title: "Content Marketing", description: "Blogs, whitepapers, videos, and SEO-driven content", icon: BookOpen },
    { id: "social-media", title: "Social Media", description: "Organic and paid social media presence", icon: MessageSquare },
    { id: "email", title: "Email Marketing", description: "Newsletters, drip campaigns, and promotional emails", icon: Mail },
    { id: "sales-direct", title: "Direct Sales", description: "Outbound sales calls, demos, and meetings", icon: Users },
    { id: "partners", title: "Partners & Resellers", description: "Channel partners who sell or distribute your product", icon: Building2 },
    { id: "marketplace", title: "App Marketplace", description: "List on Shopify, Salesforce, or other app marketplaces", icon: Package },
    { id: "product-led", title: "Product-Led Growth", description: "Free tier, trial, freemium to drive organic adoption", icon: Zap },
    { id: "communities", title: "Community Building", description: "Discord, Slack, forum communities for organic growth", icon: Users },
    { id: "ads", title: "Paid Advertising", description: "Google Ads, social ads, sponsored content", icon: Target },
  ],
  revenue: [
    { id: "subscription", title: "Subscription (SaaS)", description: "Monthly or annual recurring subscription fees", icon: CreditCard },
    { id: "usage-based", title: "Usage-Based Pricing", description: "Pay per API call, per seat, per unit consumed", icon: Activity },
    { id: "freemium", title: "Freemium", description: "Free basic tier with paid premium features", icon: Zap },
    { id: "one-time", title: "One-Time Purchase", description: "Single payment for perpetual access", icon: DollarSign },
    { id: "marketplace", title: "Marketplace Commission", description: "Take a percentage of each transaction", icon: ShoppingCart },
    { id: "advertising", title: "Advertising", description: "Revenue from ads displayed to users", icon: Target },
    { id: "licensing", title: "Licensing", description: "License the technology to other businesses", icon: Shield },
    { id: "consulting", title: "Services & Consulting", description: "Paid implementation, training, or consulting services", icon: Users },
    { id: "affiliate", title: "Affiliate Revenue", description: "Commission from referring customers to other services", icon: Share2 },
  ],
  cost: [
    { id: "engineering", title: "Engineering & Development", description: "Salaries, contractors, and development tooling costs", icon: Code },
    { id: "cloud-infra", title: "Cloud Infrastructure", description: "Servers, hosting, CDN, and cloud service fees", icon: Database },
    { id: "marketing-sales", title: "Marketing & Sales", description: "Ads, content production, sales team, and CRM costs", icon: Target },
    { id: "people", title: "People & Operations", description: "Salaries, benefits, office, HR, and admin", icon: Users },
    { id: "legal", title: "Legal & Compliance", description: "Legal fees, compliance audits, IP protection", icon: Shield },
    { id: "customer-support", title: "Customer Support", description: "Support team, tooling, and ticket resolution costs", icon: MessageSquare },
    { id: "payment-fees", title: "Payment Processing", description: "Stripe/PayPal fees, chargebacks, transaction costs", icon: CreditCard },
    { id: "third-party", title: "Third-Party Services", description: "APIs, SaaS tools, data sources, and subscriptions", icon: Package },
    { id: "capital", title: "Capital Expenditure", description: "Hardware, equipment, and upfront capital costs", icon: Building2 },
  ],
  advantage: [
    { id: "first-mover", title: "First Mover", description: "First to market in this specific niche or category", icon: Rocket },
    { id: "technology", title: "Proprietary Technology", description: "Patented algorithms, unique tech stack, or trade secrets", icon: Database },
    { id: "network", title: "Network Effects", description: "Product becomes more valuable as more users join", icon: Share2 },
    { id: "brand", title: "Brand & Trust", description: "Established reputation, reviews, and customer trust", icon: Star },
    { id: "data", title: "Data Moat", description: "Unique dataset that improves the product over time", icon: Database },
    { id: "community", title: "Community & Ecosystem", description: "Active user community creating content and extensions", icon: Users },
    { id: "integration-lock", title: "Integration Depth", description: "Deep integrations that are hard for competitors to replicate", icon: Share2 },
    { id: "team", title: "Team Expertise", description: "World-class team with unique domain experience", icon: Users },
    { id: "cost-structure", title: "Cost Structure Advantage", description: "Inherently lower cost structure than competitors", icon: PiggyBank },
  ],
};

const dict: Record<string, Record<string, string>> = {
  problem: {
    inefficiency: "Target customers are wasting significant time or money on manual, slow, or error-prone processes. The existing workflow requires multiple steps across different tools with no automation. This creates frustration, delays, and inconsistent results that directly impact business performance.",
    "high-cost": "The existing solutions in the market are priced beyond what the target segment can afford. Customers are either overpaying for features they do not need or are priced out entirely. There is an opportunity to deliver core value at a more accessible price point.",
    "poor-experience": "Users are forced to use tools with steep learning curves, outdated interfaces, or poor usability. The cognitive load required to achieve basic tasks is unnecessarily high. Users would ArrowLeftRight to a better-designed alternative if one existed with comparable functionality.",
    "access-gap": "A segment of potential users is underserved because existing solutions require specific hardware, connectivity, technical skills, or geographic presence. The solution is not accessible to these users despite genuine need and willingness to pay.",
    "data-silo": "Critical business data is trapped in disconnected systems — CRM, email, spreadsheets, databases — with no integration. Teams waste time manually copying data between systems. Decisions are made with incomplete information due to data fragmentation.",
    "quality-issue": "Existing solutions produce inconsistent, unreliable, or low-quality outputs. Users must invest significant effort in verification, correction, and rework. The market needs a solution that consistently delivers high-quality results with minimal manual oversight.",
    "lack-insight": "Businesses lack visibility into their own operations, metrics, or customer behavior. Decisions are made based on intuition rather than data. The absence of actionable insights leads to missed opportunities and suboptimal resource allocation.",
    complexity: "Current tools are over-engineered with features that 90% of users never touch. The learning curve is steep, onboarding takes weeks, and daily tasks require navigating complex interfaces. Users need a simpler, more focused alternative.",
    "speed-gap": "The existing process or solution is too slow for modern business demands. What takes hours should take minutes; what takes days should take hours. Users are losing competitive advantage due to processing delays.",
  },
  solution: {
    automation: "Build intelligent automation that eliminates manual steps. The system handles repetitive tasks end-to-end with configurable rules, scheduled execution, and exception handling. Users set it up once and save hours of manual work daily.",
    simplification: "Radically simplify the user experience by stripping away unnecessary features and optimizing the core workflow. Every screen, click, and interaction is purpose-driven. The learning curve is measured in minutes, not weeks.",
    integration: "Create a unified platform that connects the disparate tools and data sources the customer already uses. Data flows automatically between systems with bidirectional sync, conflict resolution, and transformation rules.",
    analytics: "Provide clear, actionable insights through dashboards, reports, and automated alerts. Transform raw data into visual stories with trend analysis, anomaly detection, and prescriptive recommendations that drive better decisions.",
    "cost-reduction": "Deliver comparable or superior value at a significantly lower price. Achieve cost advantages through automation, efficient architecture, or a lean business model. Pass the savings to customers while maintaining healthy margins.",
    "quality-improvement": "Implement systematic quality controls, validation rules, and automated checks that catch errors before they reach the customer. Use AI and pattern recognition to continuously improve output quality and consistency.",
    accessibility: "Design the solution to be accessible to the broadest possible audience. Support multiple languages, assistive technologies, low-bandwidth environments, and varied device types. Remove barriers to entry for underserved segments.",
    personalization: "Tailor every aspect of the experience to individual user preferences, behavior, and needs. Use machine learning to adapt recommendations, UI layout, communication frequency, and feature prioritization for each user.",
    speed: "Optimize every layer for speed — from the user interface to the backend processing to the delivery pipeline. Leverage caching, edge computing, async processing, and efficient algorithms to deliver results in real-time or near-real-time.",
  },
  metrics: {
    mrr: "Monthly Recurring Revenue measures the predictable revenue generated from subscription customers. Track MRR growth rate, expansion MRR (upsells), contraction MRR (downgrades), and churned MRR. Aim for 15-20% month-over-month growth in early stages.",
    cac: "Customer Acquisition Cost calculates the total sales and marketing cost divided by the number of new customers acquired. Include ad spend, salaries, tools, and content production costs. Benchmark against LTV — target an LTV:CAC ratio of 3:1 or higher.",
    ltv: "Lifetime Value estimates the total revenue a customer generates from first purchase to churn. Calculated as ARPU × Average Customer Lifetime. Use cohort analysis to track LTV trends. LTV drives decisions on CAC limits and retention investment.",
    churn: "Churn Rate is the percentage of customers who cancel or fail to renew in a given period. Monthly churn of 3-5% is typical for SaaS; under 2% is excellent. Track gross churn (total lost) and net churn (lost minus reactivated).",
    activation: "Activation Rate measures the percentage of new sign-ups who reach the key 'aha moment' that correlates with long-term retention. Define the activation event (e.g., first API call, first report generated) and optimize the onboarding flow to maximize this metric.",
    nps: "Net Promoter Score surveys customers on a 0-10 scale: 'How likely are you to recommend us?' Promoters (9-10) minus Detractors (0-6) = NPS. Score above 50 is excellent. Follow up with qualitative questions to understand the reasoning behind scores.",
    usage: "Daily Active Users (DAU) and Weekly Active Users (WAU) measure engagement frequency and product stickiness. Track DAU/MAU ratio (stickiness) — above 50% means users engage with the product more than half the days in a month.",
    conversion: "Conversion Rate measures the percentage of visitors or trial users who complete a desired action (sign up, purchase, upgrade). Track funnel conversion at each stage: visit → sign-up → activation → paid. Identify and optimize the biggest drop-off points.",
    virality: "Viral Coefficient (K-factor) measures how many new users each existing user brings in. K = Invites Sent × Conversion Rate. A K > 1 means exponential viral growth. Drive virality through referral programs, share features, and network effects.",
  },
  uvp: {
    "cost-save": "The core value proposition is saving customers money. Whether through a lower price than competitors, reduced operational costs, or elimination of expensive alternatives, the customer's financial benefit is clear, measurable, and significant.",
    "time-save": "The product dramatically reduces the time required to accomplish key tasks. Quantify the time savings in concrete terms — 'Save 10 hours per week' or 'Reduce processing time from 2 hours to 5 minutes.' Time is the most precious resource.",
    quality: "Deliver consistently higher quality outputs than any alternative. Whether through AI-driven precision, expert-designed templates, or rigorous quality controls, customers can trust that results will be excellent every time without manual review.",
    simplicity: "Make the complex simple. The product hides technical complexity behind an intuitive interface. New users can achieve meaningful results within minutes of first use. No training, no manual, no support ticket required to get started.",
    speed: "Deliver results faster than any alternative. Real-time processing, instant insights, zero waiting. Speed is the defining competitive advantage. Customers choose the product because it respects their time and delivers when they need it.",
    expertise: "Democratize access to expert-level capabilities. What previously required a specialist (designer, data scientist, lawyer) can now be done by anyone through the product. Expert-level outputs without the expert-level price tag or wait time.",
    integration: "The product seamlessly fits into the customer's existing workflow and tech stack. No rip-and-replace. No data migration nightmare. The product works with what they already have and makes their existing tools better through integration.",
    delight: "Transform a painful, dreaded task into an enjoyable experience. Through thoughtful design, delightful micro-interactions, and genuine user empathy, the product creates positive emotional responses that differentiate it from utilitarian alternatives.",
    results: "Guarantee specific, measurable outcomes. Whether it is increased revenue, reduced costs, or improved metrics, the product backs its promises with a guarantee. This reduces the perceived risk for customers and demonstrates confidence in the product's value.",
  },
  channels: {
    "content-marketing": "Create high-quality content (blog posts, whitepapers, videos, podcasts) that attracts potential customers through search and social. Establish thought leadership in the space. SEO-optimized content provides compounding returns over time as the library grows.",
    "social-media": "Build a presence on platforms where target customers spend time. Share valuable content, engage in discussions, run targeted ad campaigns, and leverage influencer partnerships. Platform choice depends on audience — Link for B2B, TikTok/Camera for B2C.",
    email: "Build and nurture an email list through lead magnets, newsletters, and automated drip campaigns. Segment by behavior and engagement. Email provides direct, personal communication with high ROI. Focus on deliverability, open rates, and click-through rates.",
    "sales-direct": "Deploy a direct sales team for high-value accounts. Outbound prospecting, personalized demos, proof-of-concept engagements, and contract negotiation. Works best when deal sizes justify the sales cost. Requires strong sales enablement materials.",
    partners: "Recruit channel partners — agencies, consultants, resellers — who sell or recommend your product to their clients. Provide partner training, certification, commission structures, and co-marketing support. Partners extend reach into new segments and geographies.",
    marketplace: "List the product on app marketplaces (Shopify, Salesforce AppExchange, Atlassian Marketplace, etc.) where users actively search for solutions. Marketplace listings benefit from built-in discovery, trust signals (reviews), and streamlined installation.",
    "product-led": "Drive adoption through the product itself — free tier, freemium, free trial, or open-source. Users discover and adopt the product without sales intervention. Monetize through usage limits, premium features, or team/enterprise plans.",
    communities: "Build a community around the product or problem space. Discord, Slack, forum, or in-app community. Users help each other, share tips, provide feedback, and become brand advocates. Communities drive retention, referrals, and product insights.",
    ads: "Use paid advertising channels — Google Ads, Link Ads, Meta Ads, sponsored content — to drive targeted traffic. Track CAC by channel and campaign. Scale channels with positive ROI. A/B test ad creative, landing pages, and targeting.",
  },
  revenue: {
    subscription: "Charge a recurring fee (monthly or annually) for access to the product. Provides predictable, recurring revenue. Offer tiered plans based on features, usage, or team size. Annual plans with discounts improve cash flow and reduce churn.",
    "usage-based": "Charge based on actual consumption — API calls, processing volume, active users, storage used. Aligns cost with value received. Scales naturally from small to large customers. Requires clear metering and billing infrastructure.",
    freemium: "Offer a generous free tier that delivers genuine value. Monetize through limits on usage, features, or team size that encourage upgrades. Free tier drives top-of-funnel adoption. Conversion rate of 2-5% from free to paid is typical.",
    "one-time": "Charge a single upfront fee for perpetual access. Simple pricing with no ongoing commitment. Common for desktop software, templates, and digital goods. Requires ongoing updates and support to justify the purchase and drive upgrades.",
    marketplace: "Take a commission on each transaction facilitated through the platform. Revenue scales with transaction volume. Works well for multi-sided marketplaces. Balance commission rate with the need to attract both buyers and sellers.",
    advertising: "Generate revenue by showing ads to users. Ad inventory value depends on audience size, engagement, and targeting capability. Requires large user base to be meaningful. Can negatively impact user experience if not implemented thoughtfully.",
    licensing: "License the technology, IP, or white-label solution to other businesses. One-time or recurring license fees. Lower margin per customer but lower support burden. Requires strong IP protection and clear licensing terms.",
    consulting: "Offer paid services — implementation, customization, training, strategy consulting — alongside the product. Services revenue can be significant, especially for enterprise customers. Risk of becoming a services company rather than a product company.",
    affiliate: "Earn commissions by referring customers to complementary products or services. Integrate affiliate links naturally into the product experience. Low effort revenue stream but typically small relative to core revenue.",
  },
  cost: {
    engineering: "Costs for software engineers, developers, QA, and DevOps. Includes salaries, contractor fees, development tools (IDEs, CI/CD, monitoring), and training. Engineering is typically the largest cost center for technology companies.",
    "cloud-infra": "Cloud computing costs: servers, storage, databases, CDN, bandwidth, and managed services. Costs scale with usage. Optimize through reserved instances, auto-scaling, efficient architecture, and regular cost audits. Typical range: 10-30% of revenue.",
    "marketing-sales": "Costs for marketing campaigns, advertising, content production, sales team salaries, CRM tools, and sales enablement. Usually the second-largest cost center. Track CAC by channel and optimize toward channels with the best ROI.",
    people: "Salaries, benefits, payroll taxes, office rent, equipment, and administrative costs for non-engineering staff including management, HR, finance, and operations. As the team grows, these costs scale but can benefit from economies of scale.",
    legal: "Legal fees for entity formation, contracts, IP protection (patents, trademarks), compliance (GDPR, SOC 2), and regulatory filings. Often underestimated. Engage fractional or in-house counsel as the business grows. Budget 1-3% of revenue.",
    "customer-support": "Support team salaries, helpdesk software, knowledge base tools, and customer success platform costs. Cost per ticket decreases with self-service options (docs, chatbots, community). Target resolution time and CSAT score as key metrics.",
    "payment-fees": "Payment processing fees (2.9% + $0.30 per transaction typical for Stripe), chargeback costs, and currency conversion fees. Negotiate better rates at higher volumes. Offer ACH/bank transfer as a lower-cost alternative for high-value transactions.",
    "third-party": "Costs for SaaS subscriptions, APIs, data sources, and other third-party services used to build and operate the product. Audit regularly for unused or duplicate subscriptions. Consolidate vendors to negotiate better pricing.",
    capital: "One-time or upfront capital expenditures for hardware, equipment, furniture, and major software purchases. Lower for cloud-native SaaS companies. Include depreciation in financial planning. Budget capital expenditures separately from operating expenses.",
  },
  advantage: {
    "first-mover": "Being first to market in a specific niche provides brand recognition, customer lock-in, and operational learning advantages. However, first-mover advantage alone is insufficient — execution and continuous innovation determine long-term success.",
    technology: "Proprietary technology, patents, trade secrets, or hard-to-replicate algorithms create a defensible moat. Competitors cannot easily copy the core technology. Maintain the advantage through ongoing R&D investment and IP protection.",
    network: "Network effects make the product more valuable as more people use it. Each new user adds value for all existing users. Creates a powerful competitive moat because switching becomes costly — the network is the product. Hardest advantage for competitors to overcome.",
    brand: "Strong brand recognition, trust, and positive reputation create customer preference even when competitors offer comparable features. Built through consistent quality, customer success stories, thought leadership, and positive user experiences over time.",
    data: "A unique dataset that improves the product as more data is collected. The data itself becomes a competitive moat because competitors cannot replicate years of accumulated data. Common in AI/ML products where model accuracy improves with data volume.",
    community: "An active, engaged user community that creates content, extensions, integrations, and provides peer support. The community ecosystem becomes a reason to choose the product and a barrier to switching. Requires investment in community management and developer relations.",
    "integration-lock": "Deep, high-quality integrations with other popular tools that are time-consuming and expensive for competitors to build. Each integration increases switching costs. Maintain integrations proactively as partner APIs evolve.",
    team: "A world-class team with unique domain expertise, industry relationships, and execution capability. Hard for competitors to replicate because it requires years of hiring, culture building, and domain experience. The team is often the key factor investors bet on.",
    "cost-structure": "An inherently lower cost structure due to automation, efficient architecture, geographic advantages, or economies of scale. Allows the company to offer competitive pricing while maintaining healthy margins. Hard to copy without similar scale or approach.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const problem = selections.step1;
  const solution = selections.step2;
  const metrics = selections.step3;
  const uvp = selections.step4;
  const channels = selections.step5;
  const revenue = selections.step6;
  const cost = selections.step7;
  const advantage = selections.step8;

  const lines: string[] = [];

  lines.push("# Lean Canvas Business Model");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Block | Selection | Notes");
  lines.push("|------|-----------|------");
  const prLabel = Array.isArray(problem) ? problem.map(id => options.problem.find(o => o.id === id)?.title || id).join(", ") : options.problem.find(o => o.id === problem)?.title || problem;
  const prNote = notes[`problem-${problem}`] || "";
  lines.push(`| Problem | ${prLabel} | ${prNote}`);
  const soLabel = Array.isArray(solution) ? solution.map(id => options.solution.find(o => o.id === id)?.title || id).join(", ") : options.solution.find(o => o.id === solution)?.title || solution;
  const soNote = notes[`solution-${solution}`] || "";
  lines.push(`| Solution | ${soLabel} | ${soNote}`);
  const mLabel = Array.isArray(metrics) ? metrics.map(id => options.metrics.find(o => o.id === id)?.title || id).join(", ") : options.metrics.find(o => o.id === metrics)?.title || metrics;
  const mNote = notes[`metrics-${metrics}`] || "";
  lines.push(`| Key Metrics | ${mLabel} | ${mNote}`);
  const uLabel = Array.isArray(uvp) ? uvp.map(id => options.uvp.find(o => o.id === id)?.title || id).join(", ") : options.uvp.find(o => o.id === uvp)?.title || uvp;
  const uNote = notes[`uvp-${uvp}`] || "";
  lines.push(`| Unique Value Prop | ${uLabel} | ${uNote}`);
  const cLabel = Array.isArray(channels) ? channels.map(id => options.channels.find(o => o.id === id)?.title || id).join(", ") : options.channels.find(o => o.id === channels)?.title || channels;
  const cNote = notes[`channels-${channels}`] || "";
  lines.push(`| Channels | ${cLabel} | ${cNote}`);
  const rLabel = Array.isArray(revenue) ? revenue.map(id => options.revenue.find(o => o.id === id)?.title || id).join(", ") : options.revenue.find(o => o.id === revenue)?.title || revenue;
  const rNote = notes[`revenue-${revenue}`] || "";
  lines.push(`| Revenue Streams | ${rLabel} | ${rNote}`);
  const coLabel = Array.isArray(cost) ? cost.map(id => options.cost.find(o => o.id === id)?.title || id).join(", ") : options.cost.find(o => o.id === cost)?.title || cost;
  const coNote = notes[`cost-${cost}`] || "";
  lines.push(`| Cost Structure | ${coLabel} | ${coNote}`);
  const aLabel = Array.isArray(advantage) ? advantage.map(id => options.advantage.find(o => o.id === id)?.title || id).join(", ") : options.advantage.find(o => o.id === advantage)?.title || advantage;
  const aNote = notes[`advantage-${advantage}`] || "";
  lines.push(`| Competitive Advantage | ${aLabel} | ${aNote}`);
  lines.push("");

  lines.push("## Canvas Detail");
  lines.push("");
  lines.push("### 1. Problem");
  lines.push("");
  lines.push(Array.isArray(problem) ? problem.map(v => dict.problem[v] || v).join(", ") : dict.problem[problem] || problem);
  if (prNote) lines.push(`> **Note:** ${prNote}`);
  lines.push("");

  lines.push("**Existing Alternatives:**");
  lines.push("- Manual processes and spreadsheets");
  lines.push("- Legacy software with outdated UX");
  lines.push("- Competitor solutions with different trade-offs");
  lines.push("- Doing nothing (status quo bias)");
  lines.push("");

  lines.push("### 2. Solution");
  lines.push("");
  lines.push(Array.isArray(solution) ? solution.map(v => dict.solution[v] || v).join(", ") : dict.solution[solution] || solution);
  if (soNote) lines.push(`> **Note:** ${soNote}`);
  lines.push("");

  lines.push("### 3. Key Metrics");
  lines.push("");
  lines.push(Array.isArray(metrics) ? metrics.map(v => dict.metrics[v] || v).join(", ") : dict.metrics[metrics] || metrics);
  if (mNote) lines.push(`> **Note:** ${mNote}`);
  lines.push("");

  lines.push("### 4. Unique Value Proposition");
  lines.push("");
  lines.push(Array.isArray(uvp) ? uvp.map(v => dict.uvp[v] || v).join(", ") : dict.uvp[uvp] || uvp);
  if (uNote) lines.push(`> **Note:** ${uNote}`);
  lines.push("");

  lines.push("**High-Concept Pitch:**");
  lines.push("A one-line description that makes people want to learn more.");
  lines.push("");

  lines.push("### 5. Channels");
  lines.push("");
  lines.push(Array.isArray(channels) ? channels.map(v => dict.channels[v] || v).join(", ") : dict.channels[channels] || channels);
  if (cNote) lines.push(`> **Note:** ${cNote}`);
  lines.push("");

  lines.push("### 6. Revenue Streams");
  lines.push("");
  lines.push(Array.isArray(revenue) ? revenue.map(v => dict.revenue[v] || v).join(", ") : dict.revenue[revenue] || revenue);
  if (rNote) lines.push(`> **Note:** ${rNote}`);
  lines.push("");

  lines.push("### 7. Cost Structure");
  lines.push("");
  lines.push(Array.isArray(cost) ? cost.map(v => dict.cost[v] || v).join(", ") : dict.cost[cost] || cost);
  if (coNote) lines.push(`> **Note:** ${coNote}`);
  lines.push("");

  lines.push("### 8. Competitive Advantage (Unfair Advantage)");
  lines.push("");
  lines.push(Array.isArray(advantage) ? advantage.map(v => dict.advantage[v] || v).join(", ") : dict.advantage[advantage] || advantage);
  if (aNote) lines.push(`> **Note:** ${aNote}`);
  lines.push("");

  lines.push("## Lean Canvas Summary");
  lines.push("");
  lines.push("```");
  lines.push("┌─────────────────────────────────────────────────────────────┐");
  lines.push("│                    LEAN CANVAS                            │");
  lines.push("├──────────────┬──────────────────┬────────────────────────┤");
  lines.push("│   PROBLEM    │    SOLUTION       │  UNIQUE VALUE PROP    │");
  lines.push("│  " + prLabel.padEnd(12) + "│  " + soLabel.padEnd(16) + "│  " + uLabel.padEnd(20) + "│");
  lines.push("│              │                   │                        │");
  lines.push("├──────────────┼──────────────────┤  UNFAIR ADVANTAGE      │");
  lines.push("│  KEY METRICS │                  │  " + aLabel.padEnd(22) + "│");
  lines.push("│  " + mLabel.padEnd(12) + "│                   │                        │");
  lines.push("├──────────────┴──────────────────┴────────────────────────┤");
  lines.push("│                      CHANNELS                            │");
  lines.push("│  " + cLabel.padEnd(57) + "│");
  lines.push("├──────────────┬───────────────────────────────────────────┤");
  lines.push("│  COST STRUCT │           REVENUE STREAMS                 │");
  lines.push("│  " + coLabel.padEnd(12) + "│  " + rLabel.padEnd(42) + "│");
  lines.push("└──────────────┴───────────────────────────────────────────┘");
  lines.push("```");
  lines.push("");

  lines.push("## Business Model Analysis");
  lines.push("");
  lines.push("### Unit Economics");
  lines.push("");
  lines.push("| Metric | Estimated Value | Target");
  lines.push("|--------|----------------|-------");
  lines.push("| Customer Acquisition Cost (CAC) | $0 | Target < 30% of LTV");
  lines.push("| Lifetime Value (LTV) | $0 | Target > 3x CAC");
  lines.push("| LTV:CAC Ratio | N/A | Target > 3:1");
  lines.push("| Monthly Churn Rate | 0% | Target < 5%");
  lines.push("| Gross Margin | 0% | Target > 70%");
  lines.push("| Payback Period | N/A | Target < 12 months");
  lines.push("");

  lines.push("### Revenue Projection (Year 1)");
  lines.push("");
  lines.push("| Month | Customers | Revenue | Cumulative");
  lines.push("|-------|-----------|---------|-----------");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  for (let i = 0; i < 12; i++) {
    const projected = Math.round(100 * (1 + i * 0.2));
    lines.push(`| ${months[i]} | ${projected} | $${projected * 10} | $${projected * 10 * (i + 1)}`);
  }
  lines.push("");

  lines.push("### Risk Assessment");
  lines.push("");
  lines.push("| Risk Category | Risk | Mitigation");
  lines.push("|--------------|------|-----------");
  lines.push("| Product Risk | Solution does not solve problem effectively | Validate with MVP, user testing, and iterative feedback");
  lines.push("| Market Risk | Insufficient demand for the solution | Conduct customer interviews, pre-sales, and landing page tests");
  lines.push("| Competition Risk | Competitors copy or beat the solution | Build moat through " + advantageLabel() + ", network effects, and brand");
  lines.push("| Channel Risk | Unable to reach target customers | Test multiple channels early; double down on high-ROI channels");
  lines.push("| Financial Risk | Run out of funding before reaching PMF | Maintain lean ops, extend runway, consider revenue before funding");
  lines.push("");

  lines.push("## Action Plan");
  lines.push("");
  lines.push("### Immediate (Next 30 Days)");
  lines.push("- Conduct 20 customer discovery interviews to validate the problem");
  lines.push("- Build a landing page with the UVP and measure conversion");
  lines.push("- Create a prototype or MVP for user testing");
  lines.push("- Define and instrument the key metric (" + mLabel + ")");
  lines.push("");
  lines.push("### Short-Term (1-3 Months)");
  lines.push("- Launch MVP to a small group of early adopters");
  lines.push("- Test primary channel: " + cLabel);
  lines.push("- Establish pricing model: " + rLabel);
  lines.push("- Track unit economics and adjust as needed");
  lines.push("");
  lines.push("### Medium-Term (3-6 Months)");
  lines.push("- Scale customer acquisition through validated channels");
  lines.push("- Build and reinforce the competitive advantage");
  lines.push("- Optimize cost structure: focus on " + coLabel + " efficiency");
  lines.push("- Seek product-market fit signals (retention, NPS, organic growth)");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Lean Canvas Generator_");

  function advantageLabel(): string {
    return aLabel;
  }

  return lines.join("\n");
}

export default function LeanCanvasPage() {
  return (
    <ToolShell
      title="Lean Canvas Generator"
      steps={[
        { id: 1, label: "Problem", component: (p) => (
          <GenericStep {...p} title="Problem" description="What problem are you solving?" options={options.problem} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="problem" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Solution", component: (p) => (
          <GenericStep {...p} title="Solution" description="What is your proposed solution?" options={options.solution} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="solution" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Metrics", component: (p) => (
          <GenericStep {...p} title="Key Metrics" description="What metrics will you track?" options={options.metrics} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="metrics" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "UVP", component: (p) => (
          <GenericStep {...p} title="Unique Value Proposition" description="What makes you different?" options={options.uvp} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="uvp" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Channels", component: (p) => (
          <GenericStep {...p} title="Channels" description="How will you reach customers?" options={options.channels} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="channels" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Revenue", component: (p) => (
          <GenericStep {...p} title="Revenue Streams" description="How will you make money?" options={options.revenue} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="revenue" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Cost", component: (p) => (
          <GenericStep {...p} title="Cost Structure" description="What are your costs?" options={options.cost} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="cost" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Advantage", component: (p) => (
          <GenericStep {...p} title="Competitive Advantage" description="What is your unfair advantage?" options={options.advantage} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="advantage" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}










