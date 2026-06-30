"use client";

import type { FC } from "react";
import {
  Search, MousePointer2, FileText, Scale, ShoppingCart,
  Heart, TrendingUp, Users, Share2, Globe, Video,
  BarChart3, CreditCard, Gift, Zap, Target, Bell,
  Star, ArrowRight, ArrowUp, RefreshCw, Repeat,
  Smartphone, Mail, MessageSquare, Download, Lock,
  BadgePercent, Rocket, Headphones, Package,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  awareness: [
    { id: "social-organic", title: "Social Organic", description: "Free social media reach and engagement", icon: Users },
    { id: "paid-social", title: "Paid Social", description: "Targeted social media advertising", icon: Target },
    { id: "seo", title: "SEO Organic", description: "Search engine optimization for organic traffic", icon: Search },
    { id: "ppc", title: "PPC / SEM", description: "Paid search engine advertising", icon: MousePointer2 },
    { id: "content-marketing", title: "Content Marketing", description: "Blogs, videos, and educational content", icon: FileText },
    { id: "influencer", title: "Influencer Marketing", description: "Partner with influencers for reach", icon: Star },
    { id: "referral", title: "Referral Program", description: "Word-of-mouth and customer referrals", icon: Share2 },
    { id: "pr", title: "PR & Media", description: "Press coverage and media appearances", icon: Globe },
  ],
  interest: [
    { id: "free-trial", title: "Free Trial", description: "Time-limited free product access", icon: Gift },
    { id: "demo", title: "Live Demo", description: "Personalized product demonstration", icon: Video },
    { id: "webinar", title: "Webinar", description: "Educational live or recorded session", icon: Users },
    { id: "lead-magnet", title: "Lead Magnet", description: "Free ebook, checklist, or template download", icon: Download },
    { id: "quiz", title: "Interactive Quiz", description: "Personalized assessment or recommendation", icon: Target },
    { id: "sample", title: "Free Sample", description: "Physical or digital product sample", icon: Gift },
    { id: "consultation", title: "Free Consultation", description: "One-on-one expert consultation call", icon: Headphones },
    { id: "early-access", title: "Early Access", description: "Exclusive preview or beta access", icon: Rocket },
  ],
  consideration: [
    { id: "case-study", title: "Case Studies", description: "Detailed customer success stories", icon: FileText },
    { id: "whitepaper", title: "Whitepapers", description: "In-depth industry research reports", icon: BarChart3 },
    { id: "comparison", title: "Comparison Pages", description: "Side-by-side feature comparisons", icon: Scale },
    { id: "testimonials", title: "Testimonials", description: "Customer quotes and video testimonials", icon: Star },
    { id: "roi-calc", title: "ROI Calculator", description: "Interactive value and savings calculator", icon: CreditCard },
    { id: "product-video", title: "Product Video", description: "Detailed product walkthrough video", icon: Video },
    { id: "faq", title: "FAQ / Knowledge Base", description: "Comprehensive answer database", icon: MessageSquare },
    { id: "live-chat", title: "Live Chat", description: "Real-time sales chat support", icon: MessageSquare },
  ],
  decision: [
    { id: "price", title: "Pricing Transparency", description: "Clear, upfront pricing information", icon: CreditCard },
    { id: "quality", title: "Quality Assurance", description: "Certifications, guarantees, quality marks", icon: BadgePercent },
    { id: "support", title: "Support Quality", description: "24/7 support, response time SLAs", icon: Headphones },
    { id: "social-proof", title: "Social Proof", description: "Review counts, ratings, user numbers", icon: Users },
    { id: "security", title: "Security & Trust", description: "SSL, compliance, data protection", icon: Lock },
    { id: "feature-set", title: "Feature Set", description: "Unique features vs competitors", icon: Package },
    { id: "integration", title: "Integrations", description: "Ecosystem and third-party connections", icon: Share2 },
    { id: "trial-offer", title: "Risk-Free Trial", description: "Money-back guarantee or free period", icon: Gift },
  ],
  purchase: [
    { id: "one-click", title: "One-Click Checkout", description: "Saved payment, instant purchase", icon: Zap },
    { id: "cart-abandon", title: "Cart Abandonment Flow", description: "Automated recovery email sequence", icon: ShoppingCart },
    { id: "multi-step", title: "Multi-Step Checkout", description: "Guided step-by-step purchase process", icon: ArrowRight },
    { id: "subscription", title: "Subscription Model", description: "Recurring billing with plans", icon: RefreshCw },
    { id: "negotiated", title: "Negotiated Deal", description: "Custom quote and sales negotiation", icon: Scale },
    { id: "self-serve", title: "Self-Serve Portal", description: "Customer-managed purchasing dashboard", icon: Smartphone },
    { id: "bundle", title: "Bundle & Save", description: "Product bundles at discounted rates", icon: Package },
    { id: "checkout-optimized", title: "Optimized Checkout", description: "A/B tested, friction-minimized flow", icon: Target },
  ],
  retention: [
    { id: "email-nurture", title: "Email Nurture", description: "Ongoing educational and engagement emails", icon: Mail },
    { id: "loyalty-program", title: "Loyalty Program", description: "Points, tiers, and reward system", icon: Star },
    { id: "onboarding", title: "Onboarding Sequence", description: "Structured new-user activation flow", icon: Rocket },
    { id: "community", title: "Community Building", description: "User forums, groups, events", icon: Users },
    { id: "personalization", title: "Personalization Engine", description: "AI-driven content and recommendations", icon: Target },
    { id: "feedback-loop", title: "Feedback Loop", description: "NPS surveys, reviews, improvement cycle", icon: MessageSquare },
    { id: "re-engagement", title: "Re-Engagement Campaign", description: "Win-back offers for inactive users", icon: RefreshCw },
    { id: "education", title: "Education Hub", description: "Tutorials, courses, certification program", icon: FileText },
  ],
  upsell: [
    { id: "cross-sell", title: "Cross-Sell", description: "Related product recommendations", icon: Share2 },
    { id: "tier-upgrade", title: "Tier Upgrade", description: "Move to higher plan with more features", icon: ArrowUp },
    { id: "volume-discount", title: "Volume Discount", description: "Bulk purchase or annual discount", icon: BadgePercent },
    { id: "add-on", title: "Add-On Services", description: "Premium features, support, or consulting", icon: Package },
    { id: "product-expansion", title: "Product Expansion", description: "Introduce new product lines to existing customers", icon: TrendingUp },
    { id: "lifetime-offer", title: "Lifetime Deal", description: "One-time payment for lifetime access", icon: Lock },
    { id: "referral-upsell", title: "Referral + Upgrade", description: "Refer friends, both get upgrade benefits", icon: Users },
    { id: "usage-based", title: "Usage-Based Upgrade", description: "Auto-upgrade when usage exceeds limits", icon: BarChart3 },
  ],
  referral: [
    { id: "share-incentive", title: "Share Incentive", description: "Reward for sharing with friends", icon: Share2 },
    { id: "referral-code", title: "Referral Code", description: "Unique code for referrer and referee", icon: Repeat },
    { id: "two-sided-reward", title: "Two-Sided Reward", description: "Both parties get value on referral", icon: Gift },
    { id: "leaderboard", title: "Leaderboard System", description: "Gamified top-referrer rankings", icon: Star },
    { id: "social-share", title: "Social Share Flow", description: "One-click social media sharing", icon: Users },
    { id: "affiliate", title: "Affiliate Program", description: "Commission-based partner referrals", icon: CreditCard },
    { id: "virality-loop", title: "Virality Loop", description: "In-product share triggers built into UX", icon: Zap },
    { id: "community-referral", title: "Community Referral", description: "Referral within private communities or groups", icon: Users },
  ],
};

const dict: Record<string, Record<string, string>> = {
  awareness: {
    "social-organic": "Leverage unpaid social media content across platforms like Link, MessageCircle, Camera, and TikTok to build brand awareness. Focus on value-driven content that educates, entertains, or inspires your target audience without direct selling.",
    "paid-social": "Run targeted paid campaigns on social platforms using interest-based, lookalike, and retargeting audiences. Set clear CPC and CPM benchmarks. A/B test creative formats including carousel, video, and collection ads.",
    seo: "Optimize your website and content for search engines to capture high-intent organic traffic. Conduct keyword research, build topical authority clusters, and earn backlinks. Track rankings and organic CTR monthly.",
    ppc: "Run search engine ads on Google, Bing, or other platforms targeting high-intent keywords. Use exact match, phrase match, and broad match strategies. Monitor Quality Score, impression share, and cost per acquisition.",
    "content-marketing": "Create and distribute valuable, relevant content to attract and retain a clearly defined audience. Use a content calendar with a mix of blog posts, videos, infographics, and podcasts. Measure engagement and lead generation.",
    influencer: "Partner with influencers whose audience aligns with your target market. Define deliverables, disclosure requirements, and performance metrics. Micro-influencers often deliver higher engagement rates than macro-influencers.",
    referral: "Design a referral program that incentivizes existing customers to bring new ones. Make sharing easy with pre-written messages and unique referral links. Track referral source and conversion rates.",
    pr: "Generate earned media coverage through press releases, media outreach, and thought leadership. Build relationships with industry journalists. Measure share of voice and sentiment in coverage.",
  },
  interest: {
    "free-trial": "Offer a time-limited free trial (typically 7-30 days) that gives full product access. Require minimal commitment to start. Send onboarding emails throughout the trial with tips, success stories, and upgrade prompts at key milestones.",
    demo: "Schedule live, personalized demos with qualified prospects. Prepare a tailored walkthrough addressing their specific use cases. Follow up immediately with a recording and next steps.",
    webinar: "Host live or on-demand webinars on topics relevant to your audience. Use registration data for lead scoring. Include Q&A sessions and polls for engagement. Repurpose webinar content as blog posts and clips.",
    "lead-magnet": "Create a high-value downloadable resource such as an ebook, checklist, template, or toolkit. Gate it behind a simple form. Deliver immediately via email and follow up with a nurture sequence.",
    quiz: "Build an interactive quiz or assessment that provides personalized results. Use responses for segmentation and lead scoring. Share results socially to extend reach. Follow up with recommendations based on quiz outcomes.",
    sample: "Offer free physical or digital samples that let prospects experience your product first-hand. Collect feedback in exchange. Samples reduce perceived risk and increase purchase confidence significantly.",
    consultation: "Provide a free 15-30 minute consultation call with an expert on your team. Use this time to understand their challenges and demonstrate how your solution addresses them. Quality over quantity.",
    "early-access": "Create exclusivity with early access or beta programs. Invite a select group to use the product before public launch. Gather feedback, build testimonials, and create buzz through their word-of-mouth.",
  },
  consideration: {
    "case-study": "Publish detailed case studies that follow a clear problem-solution-results structure. Include specific metrics and quotes from the customer. Use video case studies for higher engagement and authenticity.",
    whitepaper: "Produce in-depth research whitepapers that establish thought leadership. Include original data, industry analysis, and actionable insights. Gate behind a form for lead generation. Promote to your email list and Link.",
    comparison: "Create comparison pages that honestly evaluate your solution against competitors. Highlight your unique advantages while acknowledging legitimate alternatives. Use tables and checkmarks for at-a-glance evaluation.",
    testimonials: "Collect and display customer testimonials across your website and marketing materials. Use video testimonials for authenticity. Include the customer's name, title, company, and photo for credibility.",
    "roi-calc": "Build an interactive ROI calculator where prospects input their numbers and see potential savings or revenue. Make it shareable. Use the data to understand what value drivers matter most to different segments.",
    "product-video": "Produce professional product videos that demonstrate key features and workflows. Keep videos under 3 minutes. Include captions for silent viewing on social media. End with a clear next step.",
    faq: "Maintain a comprehensive FAQ section and knowledge base that answers common questions. Organize by category and searchability. Use the data to identify content gaps and inform product improvements.",
    "live-chat": "Deploy live chat on key pages with trained sales representatives. Use proactive triggers based on time on page or exit intent. Integrate with your CRM for seamless handoffs and tracking.",
  },
  decision: {
    price: "Display pricing clearly and transparently. Use tiered pricing with feature differentiation. Offer annual vs monthly options. Include a comparison table so prospects can easily see what each plan includes.",
    quality: "Showcase quality certifications, industry awards, and compliance badges. Highlight guarantee policies and quality control processes. Use third-party verification logos and accreditation seals prominently.",
    support: "Detail your support offerings including availability hours, response time SLAs, and support channels. Publish customer satisfaction ratings for your support team. Offer premium support tiers for enterprise customers.",
    "social-proof": "Display social proof elements prominently: total users served, customer count, rating averages, and logos of notable clients. Update these numbers regularly to maintain freshness and credibility.",
    security: "Publish your security and compliance certifications including SOC 2, GDPR, HIPAA, or PCI compliance. Detail data encryption practices, backup procedures, and incident response protocols. Make your trust page easy to find.",
    "feature-set": "Create a comprehensive feature comparison against competitors. Highlight unique features that only your product offers. Use visuals and demos to show features in action rather than just listing them.",
    integration: "Maintain an up-to-date integrations directory showing all tools your product connects with. Include setup guides for each integration. Highlight popular or strategic integrations with dedicated landing pages.",
    "trial-offer": "Offer a risk-free trial or money-back guarantee. Remove friction by not requiring a credit card. Set clear expectations for what happens at trial end. Send countdown reminders as the trial period winds down.",
  },
  purchase: {
    "one-click": "Implement one-click checkout with stored payment methods. Auto-detect saved addresses. Show order summary clearly. Minimize form fields. Send instant order confirmation with tracking information.",
    "cart-abandon": "Trigger an automated email sequence when users abandon their cart. Send the first email within 1 hour, then follow up at 24h and 72h. Include the abandoned items, a clear CTA, and optionally a time-limited discount.",
    "multi-step": "Design a multi-step checkout that breaks the purchase into manageable steps. Show a progress indicator. Allow users to review all details before final confirmation. Save progress if users navigate away.",
    subscription: "Offer subscription billing with monthly, annual, and custom plans. Support prorated upgrades and downgrades. Send payment failure notifications with retry logic. Provide a self-service cancellation flow.",
    negotiated: "For enterprise deals, use a consultative sales approach. Provide custom quotes based on usage or scale. Include dedicated account management and onboarding. Build a proposal document with pricing, terms, and ROI summary.",
    "self-serve": "Build a self-service purchase portal where customers can manage their own plans, add-ons, and billing. Include usage dashboards, invoice history, and payment method management. Support instant upgrades without sales touch.",
    bundle: "Create product bundles with a discounted combined price. Show the savings clearly. Use tiered bundles (starter, growth, enterprise). Allow customers to customize their bundle by selecting preferred features.",
    "checkout-optimized": "A/B test every element of your checkout flow including button colors, form layouts, trust signals, and copy. Reduce form fields to absolute minimum. Add trust badges near payment inputs. Test single-page vs multi-step.",
  },
  retention: {
    "email-nurture": "Send a regular nurture email sequence that delivers ongoing value. Segment based on behavior, engagement level, and lifecycle stage. Include educational content, product tips, and relevant case studies.",
    "loyalty-program": "Design a loyalty program with points, tiers, and meaningful rewards. Make earning points easy and transparent. Offer exclusive perks at higher tiers. Gamify progression with badges and milestones.",
    onboarding: "Create a structured onboarding sequence that activates new users within the first 14 days. Include welcome emails, in-app guidance, milestone checklists, and a personal check-in call for high-value accounts.",
    community: "Build a community where customers can connect, share best practices, and provide feedback. Choose a platform (Slack, Discord, forum) that fits your audience. Assign community managers to foster engagement and moderate discussions.",
    personalization: "Implement personalization across email, in-app, and web experiences. Use behavioral data, purchase history, and preferences to tailor content and recommendations. A/B test personalization rules to avoid getting it wrong.",
    "feedback-loop": "Systematically collect feedback through NPS surveys, CSAT scores, and customer interviews. Close the loop by communicating what you've learned and what you're changing. Show customers their input matters.",
    "re-engagement": "Run re-engagement campaigns targeting inactive users. Start with a gentle check-in, escalate to an offer, and finally a breakup email. Clearly communicate what they'll miss. Make it easy to return.",
    education: "Develop an education hub with tutorials, courses, webinars, and certification programs. Track completion rates and certification achievements. Educated customers are more likely to expand usage and renew.",
  },
  upsell: {
    "cross-sell": "Recommend complementary products or features based on what customers already use. Use collaborative filtering or rule-based logic. Present cross-sells at natural moments like after purchase or during onboarding.",
    "tier-upgrade": "Encourage customers to upgrade to a higher tier with more features, capacity, or support. Highlight the additional value they'll receive. Use usage data to proactively suggest upgrades when limits are approached.",
    "volume-discount": "Offer discounts for annual billing commitments or higher usage volumes. Show the savings clearly in the pricing page and checkout. Make the annual option the default to anchor higher value.",
    "add-on": "List available add-on services or features that enhance the core product. Price add-ons transparently. Let customers add them at checkout or from their account dashboard. Offer bundles of add-ons at a discount.",
    "product-expansion": "Introduce new product lines or features to your existing customer base. Use segmented launch emails targeting the most likely adopters first. Offer introductory pricing or bundled access to drive adoption.",
    "lifetime-offer": "Occasionally offer a lifetime deal for a limited time. Use this strategically for cash infusion, market entry, or clearing inventory. Set clear expectations about what lifetime support and updates include.",
    "referral-upsell": "GitBranch referral and upsell programs by rewarding both the referrer and referee with upgrade benefits. For example, both parties get one month free on a higher tier when a referral converts.",
    "usage-based": "Monitor customer usage metrics and auto-suggest upgrades when they approach limits. Send friendly notifications at 75%, 90%, and 100% usage. Make upgrading seamless with no service interruption.",
  },
  referral: {
    "share-incentive": "Offer a tangible reward for each successful referral. Common incentives include discounts, credits, gift cards, or free months. Make the reward compelling enough to motivate action but sustainable for your margins.",
    "referral-code": "Generate unique referral codes for each customer that they can share via link, email, or text. Track referrals back to the source. Display the code prominently in the account dashboard and post-purchase confirmation.",
    "two-sided-reward": "Reward both the referrer and the new customer when a referral converts. This creates a win-win dynamic. Common pairings include give-get discounts ($50 off for both) or month credits for each.",
    leaderboard: "Gamify referrals with a leaderboard showing top referrers. Offer special badges or rewards for reaching milestone referral counts. Public recognition can motivate competitive customers to increase sharing activity.",
    "social-share": "Build one-click social sharing flows that pre-populate a message about your product with the referral link. Optimize the message for each platform. Track which social channels drive the most referrals.",
    affiliate: "Establish an affiliate program with commission-based payouts. Provide affiliates with marketing materials, tracking links, and a dashboard. Pay commissions on a recurring basis for subscription products to incentivize long-term partnership.",
    "virality-loop": "Embed share triggers directly into the product experience. For example, after a user completes an action, prompt them to invite a colleague or share a result. Make sharing a natural part of the workflow.",
    "community-referral": "Leverage existing communities (Slack groups, Facebook groups, subreddits, industry associations) for referrals. Provide community-specific referral codes. Respect community rules and avoid spamming.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const awareness = selections.step1;
  const interest = selections.step2;
  const consideration = selections.step3;
  const decision = selections.step4;
  const purchase = selections.step5;
  const retention = selections.step6;
  const upsell: string[] = selections.step7 || [];
  const referral = selections.step8;

  const lines: string[] = [];

  lines.push("# Conversion Funnel Strategy Blueprint");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Funnel Stage | Strategy | Notes");
  lines.push("|--------------|----------|------");
  const awLabel = Array.isArray(awareness) ? awareness.map(id => options.awareness.find(o => o.id === id)?.title || id).join(", ") : options.awareness.find(o => o.id === awareness)?.title || awareness;
  const awNote = notes[`awareness-${awareness}`] || "";
  lines.push(`| Awareness | ${awLabel} | ${awNote}`);
  const inLabel = Array.isArray(interest) ? interest.map(id => options.interest.find(o => o.id === id)?.title || id).join(", ") : options.interest.find(o => o.id === interest)?.title || interest;
  const inNote = notes[`interest-${interest}`] || "";
  lines.push(`| Interest | ${inLabel} | ${inNote}`);
  const coLabel = Array.isArray(consideration) ? consideration.map(id => options.consideration.find(o => o.id === id)?.title || id).join(", ") : options.consideration.find(o => o.id === consideration)?.title || consideration;
  const coNote = notes[`consideration-${consideration}`] || "";
  lines.push(`| Consideration | ${coLabel} | ${coNote}`);
  const deLabel = Array.isArray(decision) ? decision.map(id => options.decision.find(o => o.id === id)?.title || id).join(", ") : options.decision.find(o => o.id === decision)?.title || decision;
  const deNote = notes[`decision-${decision}`] || "";
  lines.push(`| Decision | ${deLabel} | ${deNote}`);
  const puLabel = Array.isArray(purchase) ? purchase.map(id => options.purchase.find(o => o.id === id)?.title || id).join(", ") : options.purchase.find(o => o.id === purchase)?.title || purchase;
  const puNote = notes[`purchase-${purchase}`] || "";
  lines.push(`| Purchase | ${puLabel} | ${puNote}`);
  const reLabel = Array.isArray(retention) ? retention.map(id => options.retention.find(o => o.id === id)?.title || id).join(", ") : options.retention.find(o => o.id === retention)?.title || retention;
  const reNote = notes[`retention-${retention}`] || "";
  lines.push(`| Retention | ${reLabel} | ${reNote}`);
  const upLabels = upsell.map(id => options.upsell.find(o => o.id === id)?.title || id).join(", ");
  const upNotes = upsell.map(id => notes[`upsell-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Upsell | ${upLabels || "None"} | ${upNotes}`);
  const rfLabel = Array.isArray(referral) ? referral.map(id => options.referral.find(o => o.id === id)?.title || id).join(", ") : options.referral.find(o => o.id === referral)?.title || referral;
  const rfNote = notes[`referral-${referral}`] || "";
  lines.push(`| Referral | ${rfLabel} | ${rfNote}`);
  lines.push("");

  lines.push("## Funnel Stage Breakdown");
  lines.push("");

  if (awareness) {
    lines.push("### Stage 1: Awareness — " + awLabel);
    lines.push("");
    lines.push(Array.isArray(awareness) ? awareness.map(v => dict.awareness[v] || v).join(", ") : dict.awareness[awareness] || awareness);
    if (awNote) lines.push(`> **Note:** ${awNote}`);
    lines.push("");
  }

  if (interest) {
    lines.push("### Stage 2: Interest — " + inLabel);
    lines.push("");
    lines.push(Array.isArray(interest) ? interest.map(v => dict.interest[v] || v).join(", ") : dict.interest[interest] || interest);
    if (inNote) lines.push(`> **Note:** ${inNote}`);
    lines.push("");
  }

  if (consideration) {
    lines.push("### Stage 3: Consideration — " + coLabel);
    lines.push("");
    lines.push(Array.isArray(consideration) ? consideration.map(v => dict.consideration[v] || v).join(", ") : dict.consideration[consideration] || consideration);
    if (coNote) lines.push(`> **Note:** ${coNote}`);
    lines.push("");
  }

  if (decision) {
    lines.push("### Stage 4: Decision — " + deLabel);
    lines.push("");
    lines.push(Array.isArray(decision) ? decision.map(v => dict.decision[v] || v).join(", ") : dict.decision[decision] || decision);
    if (deNote) lines.push(`> **Note:** ${deNote}`);
    lines.push("");
  }

  if (purchase) {
    lines.push("### Stage 5: Purchase — " + puLabel);
    lines.push("");
    lines.push(Array.isArray(purchase) ? purchase.map(v => dict.purchase[v] || v).join(", ") : dict.purchase[purchase] || purchase);
    if (puNote) lines.push(`> **Note:** ${puNote}`);
    lines.push("");
  }

  if (retention) {
    lines.push("### Stage 6: Retention — " + reLabel);
    lines.push("");
    lines.push(Array.isArray(retention) ? retention.map(v => dict.retention[v] || v).join(", ") : dict.retention[retention] || retention);
    if (reNote) lines.push(`> **Note:** ${reNote}`);
    lines.push("");
  }

  if (upsell.length > 0) {
    lines.push("### Stage 7: Upsell Path(s)");
    lines.push("");
    for (const upId of upsell) {
      const label = options.upsell.find(o => o.id === upId)?.title || upId;
      lines.push(`#### ${label}`);
      lines.push("");
      lines.push(dict.upsell[upId] || "");
      const note = notes[`upsell-${upId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (referral) {
    lines.push("### Stage 8: Referral — " + rfLabel);
    lines.push("");
    lines.push(Array.isArray(referral) ? referral.map(v => dict.referral[v] || v).join(", ") : dict.referral[referral] || referral);
    if (rfNote) lines.push(`> **Note:** ${rfNote}`);
    lines.push("");
  }

  lines.push("## Funnel Flow Diagram");
  lines.push("");
  lines.push("```");
  const stageLabels = [
    awLabel || "Awareness",
    inLabel || "Interest",
    coLabel || "Consideration",
    deLabel || "Decision",
    puLabel || "Purchase",
    reLabel || "Retention",
    upLabels || "Upsell",
    rfLabel || "Referral",
  ];
  for (let i = 0; i < stageLabels.length; i++) {
    lines.push("┌─────────────────┐");
    lines.push(`│   ${stageLabels[i].padEnd(14)}│`);
    lines.push("└────────┬────────┘");
    if (i < stageLabels.length - 1) lines.push("         │");
    if (i < stageLabels.length - 1) lines.push("         ▼");
  }
  lines.push("```");
  lines.push("");

  lines.push("## Funnel Metrics & KPIs");
  lines.push("");
  lines.push("| Stage | Top Metric | Secondary Metrics | Target");
  lines.push("|-------|-----------|-------------------|--------");
  lines.push(`| Awareness | Reach / Impressions | CPM, Share of Voice, Brand Search Volume | Define baseline, grow 20% QoQ`);
  lines.push(`| Interest | Engagement Rate | Click-Through Rate, Time on Site, Content Downloads | >5% engagement rate`);
  lines.push(`| Consideration | Lead Conversion Rate | MQL to SQL Rate, Content Consumption Depth | >15% lead conversion`);
  lines.push(`| Decision | Demo / Trial Request Rate | Sales Accepted Ratio, Pipeline Velocity | >10% request rate`);
  lines.push(`| Purchase | Conversion Rate | Average Order Value, Cart Abandonment Rate | >3% conversion, <65% abandonment`);
  lines.push(`| Retention | Churn Rate | NPS Score, Customer Lifetime Value, Activation Rate | <5% monthly churn`);
  lines.push(`| Upsell | Expansion MRR | Upgrade Rate, Feature Adoption, Package Penetration | >10% expansion MRR`);
  lines.push(`| Referral | Referral Conversion Rate | Referral Sources, Viral Coefficient | >2.0 viral coefficient`);
  lines.push("");

  lines.push("## Channel Allocation");
  lines.push("");
  lines.push("| Channel | Budget Allocation | Attribution Model | Notes");
  lines.push("|---------|-----------------|-------------------|-------");
  lines.push("| Paid Search | 25-30% | Last-click | Capture high-intent demand at decision stage");
  lines.push("| Paid Social | 20-25% | First-click / View-through | Top-of-funnel awareness and interest");
  lines.push("| Organic / SEO | 15-20% | Multi-touch | Long-term consideration and education content");
  lines.push("| Email | 10-15% | Multi-touch | Retention, upsell, and re-engagement");
  lines.push("| Content | 10-15% | First-click | Blog, video, and resource-driven awareness");
  lines.push("| Referral | 5-10% | First-click | High-quality referral traffic");
  lines.push("");

  lines.push("## Implementation Timeline");
  lines.push("");
  lines.push("| Phase | Duration | Focus Area | Deliverables");
  lines.push("|-------|----------|------------|------------");
  lines.push("| Foundation | Weeks 1-2 | Awareness + Interest | Set up tracking, create top-of-funnel assets, launch initial campaigns");
  lines.push("| Mid-Funnel | Weeks 3-4 | Consideration + Decision | Build comparison pages, case studies, demo booking flow");
  lines.push("| Conversion | Weeks 5-6 | Purchase | Optimize checkout, implement cart recovery, set up subscription flows");
  lines.push("| Post-Purchase | Weeks 7-8 | Retention + Upsell | Deploy onboarding sequence, set up loyalty program triggers");
  lines.push("| Growth Loop | Weeks 9-10 | Referral | Launch referral program, build viral triggers, optimize sharing flow");
  lines.push("| Optimization | Ongoing | All Stages | A/B test, analyze funnel drop-offs, iterate on underperforming stages");
  lines.push("");

  lines.push("## Risk & Mitigation");
  lines.push("");
  lines.push("| Risk | Impact | Mitigation Strategy");
  lines.push("|------|--------|-------------------");
  lines.push("| Low awareness reach | Top-of-funnel shortage | Diversify channels, increase paid budget, test new creative angles");
  lines.push("| Interest-to-consideration drop | Weak lead magnets | Refresh content offers, improve landing page conversion, test CTAs");
  lines.push("| Consideration-to-decision stall | Insufficient social proof | Accelerate case study production, collect more reviews, add trust signals");
  lines.push("| Cart abandonment high | Checkout friction | Simplify forms, add trust badges, test one-click checkout, improve speed");
  lines.push("| Post-purchase churn | Poor activation | Revamp onboarding sequence, add success milestones, assign customer success");
  lines.push("| Low referral conversion | Weak incentive | Increase reward value, make sharing easier, A/B test referral messaging");
  lines.push("");

  lines.push("## Recommendations");
  lines.push("");
  lines.push("- **Top Priority**: Fix the biggest gap in your current funnel before optimizing strong stages.");
  lines.push("- **Attribution**: Implement multi-touch attribution to understand true channel contribution.");
  lines.push("- **Segmentation**: Build separate funnels for different personas, industries, and deal sizes.");
  if (awareness === "seo" || awareness === "content-marketing") {
    lines.push("- **Content Investment**: SEO and content take 3-6 months to peak. Maintain consistent publishing cadence.");
  }
  if (purchase === "cart-abandon") {
    lines.push("- **Abandonment Recovery**: Test discount timing — immediate 10% off may cannibalize full-price sales.");
  }
  if (retention === "loyalty-program") {
    lines.push("- **Tier Benefits**: Make top-tier benefits aspirational but achievable. Include experiential rewards.");
  }
  if (referral === "virality-loop") {
    lines.push("- **Virality Math**: Aim for viral coefficient >1.0 for exponential growth. Measure K-factor weekly.");
  }
  if (upsell.length > 1) {
    lines.push("- **Upsell Sequencing**: Introduce one upsell at a time. Start with the highest value, lowest friction option.");
  }
  lines.push("- **Data Integration**: Connect all funnel stages in your CRM and analytics for end-to-end visibility.");
  lines.push("- **Review Cadence**: Conduct a full funnel review monthly. Check each stage's KPIs and drop-off rates.");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Conversion Funnel Strategy Generator_");

  return lines.join("\n");
}

export default function ConversionFunnelPage() {
  return (
    <ToolShell
      title="Conversion Funnel Strategy"
      steps={[
        { id: 1, label: "Awareness", component: (p) => (
          <GenericStep {...p} title="Awareness Channel" description="How will prospects first discover you?" options={options.awareness} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="awareness" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Interest", component: (p) => (
          <GenericStep {...p} title="Interest Trigger" description="What hooks prospects to engage further?" options={options.interest} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="interest" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Consideration", component: (p) => (
          <GenericStep {...p} title="Consideration Content" description="What content helps prospects evaluate you?" options={options.consideration} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="consideration" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Decision", component: (p) => (
          <GenericStep {...p} title="Decision Factors" description="What tips the scale toward purchase?" options={options.decision} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="decision" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Purchase", component: (p) => (
          <GenericStep {...p} title="Purchase Flow" description="How do customers complete their purchase?" options={options.purchase} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="purchase" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Retention", component: (p) => (
          <GenericStep {...p} title="Retention Strategy" description="How will you keep customers engaged?" options={options.retention} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="retention" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Upsell", component: (p) => (
          <GenericStep {...p} title="Upsell Path" description="How will you grow existing customer value?" options={options.upsell} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="upsell" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Referral", component: (p) => (
          <GenericStep {...p} title="Referral Loop" description="How will customers bring in new business?" options={options.referral} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="referral" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}











