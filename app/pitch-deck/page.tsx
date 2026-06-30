"use client";

import type { FC } from "react";
import {
  Lightbulb, DollarSign, TrendingUp, Building2, Cloud, ShoppingCart,
  Users, Repeat, Zap, Globe, Store, Handshake, Trophy, Target,
  MousePointerClick, Shield, Star, Briefcase, GraduationCap,
  UserCheck, UsersRound, UserPlus, Medal, BarChart3, LineChart,
  PieChart, Coins, Receipt, TrendingDown, Calculator, Wallet,
  Crosshair, Swords as SwordsIcon, Eye, ArrowUpDown, Scale,
  Calendar, Clock, GitBranch, Flag, Milestone, Rocket,
  Timer, ListChecks,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  stage: [
    { id: "ideation", title: "Ideation", description: "Early concept stage, problem-solution fit", icon: Lightbulb },
    { id: "pre-seed", title: "Pre-Seed", description: "Building MVP, initial team formation", icon: DollarSign },
    { id: "seed", title: "Seed", description: "Product-market fit, early traction", icon: TrendingUp },
    { id: "series-a", title: "Series A", description: "Scaling operations, growth metrics", icon: Building2 },
    { id: "series-b", title: "Series B", description: "Market expansion, scaling team", icon: Rocket },
    { id: "series-c", title: "Series C+", description: "Late stage, international growth", icon: Globe },
    { id: "acquisition", title: "Acquisition Target", description: "Positioning for strategic exit", icon: Handshake },
    { id: "internal", title: "Internal Initiative", description: "New product line or spin-off", icon: Star },
  ],
  model: [
    { id: "b2b-saas", title: "B2B SaaS", description: "Subscription software sold to businesses", icon: Cloud },
    { id: "marketplace", title: "Marketplace", description: "Two-sided platform connecting buyers and sellers", icon: ShoppingCart },
    { id: "freemium-b2c", title: "Freemium B2C", description: "Free tier with premium upgrade for consumers", icon: Users },
    { id: "subscription", title: "Subscription", description: "Recurring revenue from ongoing subscriptions", icon: Repeat },
    { id: "transactional", title: "Transactional Fees", description: "Per-transaction revenue model", icon: Receipt },
    { id: "hardware", title: "Hardware + Software", description: "Physical product with recurring software", icon: Shield },
    { id: "ad-supported", title: "Ad-Supported", description: "Free product monetized through advertising", icon: MousePointerClick },
    { id: "white-label", title: "White Label / API", description: "Sell platform access to other businesses", icon: Cloud },
  ],
  market: [
    { id: "gen-z", title: "Gen-Z", description: "Young audience aged 13–28, mobile-first", icon: Zap },
    { id: "enterprise-b2b", title: "Enterprise B2B", description: "Large organizations with complex sales cycles", icon: Building2 },
    { id: "smbs", title: "SMBs", description: "Small to medium businesses, self-serve onboarding", icon: Store },
    { id: "mass-market", title: "Mass Market", description: "Broad consumer audience across demographics", icon: Globe },
    { id: "developers", title: "Developers / API", description: "Technical audience, API-first products", icon: Cloud },
    { id: "healthcare", title: "Healthcare", description: "HIPAA-compliant, medical professionals", icon: Shield },
    { id: "education", title: "Education", description: "Schools, universities, EdTech platforms", icon: GraduationCap },
    { id: "nonprofit", title: "Nonprofit / Gov", description: "Government agencies and nonprofit organizations", icon: Building2 },
  ],
  focus: [
    { id: "seeking-investors", title: "Seeking Investors", description: "Convince VCs or angel investors to fund", icon: Handshake },
    { id: "business-pitch-competition", title: "Pitch Competition", description: "Win a pitch contest with judges", icon: Trophy },
    { id: "internal-team-alignment", title: "Internal Alignment", description: "Align your team around strategy and vision", icon: Target },
    { id: "customer-sales", title: "Customer / Sales", description: "Close enterprise customers with the deck", icon: DollarSign },
    { id: "partner-onboarding", title: "Partner Onboarding", description: "Onboard strategic partners or resellers", icon: Handshake },
    { id: "talent-recruitment", title: "Talent Recruitment", description: "Attract top talent with company vision", icon: UserPlus },
    { id: "board-update", title: "Board Update", description: "Quarterly board presentation with progress", icon: BarChart3 },
    { id: "media-pr", title: "Media / PR", description: "Press announcement or media coverage pitch", icon: Globe },
  ],
  team: [
    { id: "solo-founder", title: "Solo Founder", description: "Single founder with advisors", icon: UserCheck },
    { id: "co-founders", title: "Co-Founders", description: "2–3 co-founders with complementary skills", icon: UsersRound },
    { id: "full-team", title: "Full Team Built", description: "Complete team with engineers, designers, operators", icon: Briefcase },
    { id: "remote-global", title: "Remote Global Team", description: "Distributed team across time zones", icon: Globe },
    { id: "ai-lab", title: "AI / Research Lab", description: "PhD-heavy team, research-driven", icon: GraduationCap },
    { id: "ex-faang", title: "Ex-FAANG Founders", description: "Founders from top tech companies", icon: Star },
    { id: "serial-founders", title: "Serial Founders", description: "Founders with previous successful exits", icon: Medal },
    { id: "advisor-heavy", title: "Advisor-Heavy", description: "Strong advisory board, lean core team", icon: Lightbulb },
  ],
  financials: [
    { id: "pre-revenue", title: "Pre-Revenue", description: "No revenue yet, pre-launch", icon: Calculator },
    { id: "early-revenue", title: "Early Revenue", description: "First $10K–$100K MRR", icon: LineChart },
    { id: "growth-revenue", title: "Growth Revenue", description: "$100K–$1M MRR with growth", icon: TrendingUp },
    { id: "profitable", title: "Profitable", description: "Operating profitably, positive margins", icon: Coins },
    { id: "unit-economics", title: "Unit Economics Focus", description: "Highlighting CAC, LTV, payback period", icon: Receipt },
    { id: "fundraising", title: "Active Fundraising", description: "Currently raising with defined ask", icon: Wallet },
    { id: "burn-management", title: "Burn Management", description: "Optimizing runway and cost structure", icon: TrendingDown },
    { id: "projections", title: "Forward Projections", description: "5-year financial forecast model", icon: PieChart },
  ],
  competition: [
    { id: "none", title: "No Direct Competition", description: "New category, no established players", icon: Eye },
    { id: "fragmented", title: "Fragmented Market", description: "Many small players, no dominant leader", icon: SwordsIcon },
    { id: "one-dominant", title: "One Dominant Player", description: "Single large incumbent to displace", icon: Crosshair },
    { id: "oligopoly", title: "Oligopoly (Few Big)", description: "2–4 major players controlling the market", icon: Building2 },
    { id: "indirect", title: "Indirect Competition", description: "Alternative solutions, not direct competitors", icon: ArrowUpDown },
    { id: "substitute", title: "Substitute Threats", description: "Do-it-yourself or manual alternatives", icon: Scale },
    { id: "fast-followers", title: "Fast Followers", description: "Startups that can copy quickly", icon: Zap },
    { id: "platform-risk", title: "Platform Risk", description: "Dependence on big platforms (Meta, Google, Apple)", icon: Cloud },
  ],
  timeline: [
    { id: "0-3-months", title: "Next 3 Months", description: "Immediate milestones and near-term goals", icon: Clock },
    { id: "3-6-months", title: "3–6 Months", description: "Short-to-medium term product roadmap", icon: Calendar },
    { id: "6-12-months", title: "6–12 Months", description: "Annual planning and growth targets", icon: Milestone },
    { id: "12-24-months", title: "12–24 Months", description: "Medium-term expansion and scaling", icon: Flag },
    { id: "24-60-months", title: "2–5 Years", description: "Long-term vision and exit strategy", icon: Rocket },
    { id: "pre-launch", title: "Pre-Launch", description: "Before public launch, building and testing", icon: Timer },
    { id: "post-launch", title: "Post-Launch Iteration", description: "After launch, iterating based on feedback", icon: GitBranch },
    { id: "growth-hockey", title: "Growth / Hockey Stick", description: "Rapid scaling phase with exponential growth", icon: TrendingUp },
  ],
};

const dict: Record<string, Record<string, string>> = {
  stage: {
    ideation: "You are at the ideation stage. Focus on the problem you are solving, the target user's pain point, your unique insight into the market, and the initial concept for a solution. Back it with qualitative research or real-world observations.",
    "pre-seed": "You are at the pre-seed stage. Highlight your founding team's background, the MVP you have built or are building, early design prototypes, and any initial user feedback or waitlist traction you have gathered.",
    seed: "You are at the seed stage. Present early revenue numbers, user growth metrics, engagement data, and unit economics. Emphasize product-market fit signals and why now is the right time to invest.",
    "series-a": "You are at Series A. Showcase strong month-over-month growth, customer acquisition cost versus lifetime value, retention cohorts, and a clear plan for scaling sales, engineering, and operations.",
    "series-b": "You are at Series B. Demonstrate proven unit economics, expanding sales channels, geographic expansion plans, key hires in leadership, and a path to market dominance in your vertical.",
    "series-c": "You are at Series C or later. Focus on international expansion, M&A strategy, operational leverage, network effects, and the path to an IPO or major liquidity event.",
    acquisition: "You are positioning for acquisition. Emphasize strategic value to potential acquirers, technology moat, customer concentration, revenue quality, and integration synergies.",
    internal: "You are pitching an internal initiative. Frame the opportunity in terms of strategic value to the parent company, resource requirements, expected ROI, and how it leverages existing assets.",
  },
  model: {
    "b2b-saas": "Your business model is B2B SaaS. Emphasize predictable recurring revenue, enterprise contracts, net dollar retention, and how your software solves a critical workflow problem for businesses.",
    marketplace: "Your model is a marketplace. Focus on liquidity, supply and demand dynamics, take rate, gross merchandise value, and the flywheel effect that strengthens the network with each transaction.",
    "freemium-b2c": "Your model is freemium B2C. Highlight user acquisition at scale, conversion rate from free to paid, viral growth mechanics, and how the free tier serves as a top-of-funnel growth engine.",
    subscription: "Your model is subscription-based. Emphasize recurring revenue, churn rate, average revenue per user, subscription tiers, and the value ladder that moves users to higher plans.",
    transactional: "Your model is transaction-based. Focus on transaction volume, average transaction value, take rate percentage, payment processing reliability, and scale economics per transaction.",
    hardware: "Your model combines hardware and software. Emphasize gross margins on hardware, recurring revenue from subscriptions or consumables, manufacturing partnerships, and supply chain resilience.",
    "ad-supported": "Your model is ad-supported. Highlight monthly active users, daily active users, ad inventory, CPM rates, user engagement time, and targeting capabilities for advertisers.",
    "white-label": "Your model is white-label or API licensing. Focus on platform reliability, API usage metrics, customer onboarding velocity, partnership pipeline, and revenue per API call or per seat.",
  },
  market: {
    "gen-z": "Your target market is Gen-Z. Frame the pitch around mobile-first design, social media distribution, authenticity, short attention spans, and cultural relevance. Gen-Z values purpose-driven brands.",
    "enterprise-b2b": "Your target is enterprise B2B buyers. Address security compliance, SSO, role-based access control, SLAs, dedicated support, integration with existing enterprise tools, and procurement workflows.",
    smbs: "Your target is SMBs. Emphasize ease of use, self-serve onboarding, affordable pricing, quick time-to-value, and integrations with popular SMB tools like QuickBooks, Stripe, and Shopify.",
    "mass-market": "Your target is the mass consumer market. Highlight broad appeal, simplicity, freemium or low price point, cross-platform availability, and marketing channels with wide reach.",
    developers: "Your target is developers. Focus on API documentation, SDK quality, developer experience, sandbox environment, pricing transparency, and community building through open-source or forums.",
    healthcare: "Your target is healthcare. Address HIPAA compliance, integration with EHR systems, clinical workflow compatibility, interoperability standards, and patient data privacy and security.",
    education: "Your target is education. Emphasize accessibility standards, curriculum alignment, integration with LMS platforms, student data privacy, and measurable learning outcome improvements.",
    nonprofit: "Your target is nonprofit or government. Focus on social impact metrics, compliance with government standards, cost-effectiveness, data security certifications, and grant funding eligibility.",
  },
  focus: {
    "seeking-investors": "Tailor the deck for investors. Lead with the problem and market size, show traction metrics prominently, include a clear ask with use of funds, and end with a compelling vision for the future.",
    "business-pitch-competition": "Tailor for a pitch competition. Open with a hook that grabs attention, keep slides visual and minimal, practice a tight 3-minute delivery, and emphasize the wow factor and your team's passion.",
    "internal-team-alignment": "Tailor for internal alignment. Focus on company vision, strategic priorities, resource allocation, milestones for the next quarter, and how each team member's work feeds into the broader mission.",
    "customer-sales": "Tailor for customer sales. Lead with customer pain points, show ROI calculations, include case studies or testimonials, address objections proactively, and end with a clear next step.",
    "partner-onboarding": "Tailor for partner onboarding. Highlight mutual benefits, co-marketing opportunities, revenue share terms, technical integration requirements, and timeline for partnership ramp-up.",
    "talent-recruitment": "Tailor for recruiting top talent. Emphasize company mission, culture values, technical challenges, equity compensation, career growth opportunities, and the impact the candidate can make.",
    "board-update": "Tailor for a board update. Lead with key metrics versus targets, highlight wins and challenges, present updated forecasts, and clearly state what decisions or resources you need from the board.",
    "media-pr": "Tailor for media coverage. Craft a compelling narrative hook, include quotable soundbites, provide data and statistics, offer exclusive access or demos, and prepare a press kit with high-res assets.",
  },
  team: {
    "solo-founder": "A solo founder scenario. Highlight the founder's depth of expertise, advisory board strength, and ability to execute with lean resources. Address the risk by showing a plan to build the team post-funding.",
    "co-founders": "A co-founding team with complementary skills. Showcase the balance between technical and business expertise, the working relationship history, and how each co-founder's background fills critical gaps.",
    "full-team": "A complete team is already in place. Present the organizational chart, key hires with bios, the reporting structure, and how each department head brings relevant domain experience.",
    "remote-global": "A remote global team. Emphasize async communication practices, time zone overlap strategy, remote culture building, global talent advantages, and tools used for distributed collaboration.",
    "ai-lab": "An AI or research lab team. Highlight publications, patents, PhD credentials, conference presentations, and the team's track record of pushing the state of the art in relevant fields.",
    "ex-faang": "Founders from top tech companies. Leverage the brand recognition and credibility of FAANG backgrounds. Emphasize the specific skills, network, and operational knowledge gained at those companies.",
    "serial-founders": "Serial founders with prior exits. Highlight the track record of building and selling companies, the lessons learned from previous ventures, and how those experiences de-risk the current opportunity.",
    "advisor-heavy": "A lean team with a strong advisory board. Present advisors' credentials, their specific roles, the equity or compensation structure for advisors, and how their network opens doors.",
  },
  financials: {
    "pre-revenue": "Pre-revenue financial state. Present the cost structure, burn rate, current runway, development milestones achieved, and the amount needed to reach the first revenue milestone.",
    "early-revenue": "Early revenue stage. Show MRR growth trajectory, customer count, average revenue per customer, gross margin, and the month-over-month percentage growth rate.",
    "growth-revenue": "Growth revenue stage. Demonstrate scalable acquisition channels, cohort retention data, net dollar retention, customer acquisition cost efficiency, and a clear path to $10M ARR.",
    profitable: "Profitable and cash-flow positive. Emphasize operating margins, free cash flow generation, reinvestment strategy, and how profitability enables sustainable growth without dilutive fundraising.",
    "unit-economics": "Unit economics focused. Detail customer acquisition cost by channel, lifetime value calculation methodology, payback period in months, and the ratio of LTV to CAC.",
    fundraising: "Actively fundraising. State the amount raised to date, current round size, instruments used, lead investor name, and the specific use of funds broken down by category.",
    "burn-management": "Burn management mode. Show monthly burn rate, runway in months, cost reduction initiatives implemented, and how the company is balancing growth investments with capital efficiency.",
    projections: "Forward-looking financial projections. Present a 5-year model with revenue, expense, and cash flow projections. Include key assumptions and scenario analysis for upside and downside cases.",
  },
  competition: {
    none: "No direct competition exists because you are creating a new category. Emphasize the market education required and the first-mover advantage you have in defining the category.",
    fragmented: "The market is highly fragmented with many small players. Emphasize consolidation opportunity, your superior product or go-to-market, and how you will win through scale and brand.",
    "one-dominant": "A single dominant player exists. Acknowledge their strengths honestly, then highlight their weaknesses, your differentiated approach, and why incumbents are slow to innovate.",
    oligopoly: "A few large players control the market. Position yourself as the agile challenger. Highlight specific pain points the incumbents ignore and your ability to serve underserved segments.",
    indirect: "Competition is indirect. Users currently solve the problem with manual work, spreadsheets, or general-purpose tools. Emphasize the time savings and accuracy improvement of your dedicated solution.",
    substitute: "The main competition is the do-nothing or do-it-yourself alternative. Frame the cost of inaction and the ROI your solution delivers compared to the manual alternative.",
    "fast-followers": "Risk of fast followers copying your concept. Emphasize your moat: brand, network effects, data advantages, proprietary technology, and speed of execution.",
    "platform-risk": "Dependence on major platform APIs. Address platform risk mitigation strategies including API redundancy, owned channels, and revenue diversification away from any single platform.",
  },
  timeline: {
    "0-3-months": "Focus on the next 3 months. Define clear sprint goals, MVP feature completion, initial user testing, and early metric targets for the immediate quarter ahead.",
    "3-6-months": "Cover the 3–6 month horizon. Key product releases, first customer milestones, hiring targets, marketing campaign launches, and partnership development goals.",
    "6-12-months": "Annual planning horizon. Revenue targets, market share goals, team size growth, geographic expansion plans, and strategic initiatives for the full fiscal year.",
    "12-24-months": "Medium-term 1–2 year outlook. Scaling operations, entering new verticals, raising next funding round, achieving profitability, or launching in international markets.",
    "24-60-months": "Long-term 2–5 year vision. Market leadership position, potential exit scenarios, disruptive impact on the industry, and the enduring legacy the company aims to build.",
    "pre-launch": "Pre-launch phase. Final product development, beta testing, QA and security audits, launch marketing preparation, and building the initial pipeline of early adopters.",
    "post-launch": "Post-launch iteration phase. Analyzing user feedback, prioritizing feature requests, fixing critical bugs, improving onboarding funnel, and iterating toward product-market fit.",
    "growth-hockey": "Hockey stick growth phase. Scaling sales and marketing investment, expanding the team rapidly, building infrastructure for 10x traffic, and managing hyper-growth challenges.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const stage = selections.step1;
  const model = selections.step2;
  const market = selections.step3;
  const focus = selections.step4;
  const team = selections.step5;
  const financials = selections.step6;
  const competition = selections.step7;
  const timeline = selections.step8;

  const lines: string[] = [];

  lines.push("# Pitch Deck Architect");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const stageLabel = Array.isArray(stage) ? stage.map(id => options.stage.find(o => o.id === id)?.title || id).join(", ") : options.stage.find(o => o.id === stage)?.title || stage;
  const stageNote = notes[`stage-${stage}`] || "";
  lines.push(`| Business Stage | ${stageLabel} | ${stageNote}`);
  const modelLabel = Array.isArray(model) ? model.map(id => options.model.find(o => o.id === id)?.title || id).join(", ") : options.model.find(o => o.id === model)?.title || model;
  const modelNote = notes[`model-${model}`] || "";
  lines.push(`| Business Model | ${modelLabel} | ${modelNote}`);
  const marketLabel = Array.isArray(market) ? market.map(id => options.market.find(o => o.id === id)?.title || id).join(", ") : options.market.find(o => o.id === market)?.title || market;
  const marketNote = notes[`market-${market}`] || "";
  lines.push(`| Target Market | ${marketLabel} | ${marketNote}`);
  const focusLabel = Array.isArray(focus) ? focus.map(id => options.focus.find(o => o.id === id)?.title || id).join(", ") : options.focus.find(o => o.id === focus)?.title || focus;
  const focusNote = notes[`focus-${focus}`] || "";
  lines.push(`| Pitch Focus | ${focusLabel} | ${focusNote}`);
  const teamLabel = Array.isArray(team) ? team.map(id => options.team.find(o => o.id === id)?.title || id).join(", ") : options.team.find(o => o.id === team)?.title || team;
  const teamNote = notes[`team-${team}`] || "";
  lines.push(`| Team Profile | ${teamLabel} | ${teamNote}`);
  const finLabel = Array.isArray(financials) ? financials.map(id => options.financials.find(o => o.id === id)?.title || id).join(", ") : options.financials.find(o => o.id === financials)?.title || financials;
  const finNote = notes[`financials-${financials}`] || "";
  lines.push(`| Financial State | ${finLabel} | ${finNote}`);
  const compLabel = Array.isArray(competition) ? competition.map(id => options.competition.find(o => o.id === id)?.title || id).join(", ") : options.competition.find(o => o.id === competition)?.title || competition;
  const compNote = notes[`competition-${competition}`] || "";
  lines.push(`| Competition | ${compLabel} | ${compNote}`);
  const timeLabel = Array.isArray(timeline) ? timeline.map(id => options.timeline.find(o => o.id === id)?.title || id).join(", ") : options.timeline.find(o => o.id === timeline)?.title || timeline;
  const timeNote = notes[`timeline-${timeline}`] || "";
  lines.push(`| Timeline Focus | ${timeLabel} | ${timeNote}`);
  lines.push("");

  lines.push("## Strategic Context");
  lines.push("");
  if (stage) {
    lines.push("### Stage: " + stageLabel);
    lines.push("");
    lines.push(Array.isArray(stage) ? stage.map(v => dict.stage[v] || v).join(", ") : dict.stage[stage] || stage);
    if (stageNote) lines.push(`> **Note:** ${stageNote}`);
    lines.push("");
  }
  if (model) {
    lines.push("### Business Model: " + modelLabel);
    lines.push("");
    lines.push(Array.isArray(model) ? model.map(v => dict.model[v] || v).join(", ") : dict.model[model] || model);
    if (modelNote) lines.push(`> **Note:** ${modelNote}`);
    lines.push("");
  }
  if (market) {
    lines.push("### Target Market: " + marketLabel);
    lines.push("");
    lines.push(Array.isArray(market) ? market.map(v => dict.market[v] || v).join(", ") : dict.market[market] || market);
    if (marketNote) lines.push(`> **Note:** ${marketNote}`);
    lines.push("");
  }
  if (team) {
    lines.push("### Team Profile: " + teamLabel);
    lines.push("");
    lines.push(Array.isArray(team) ? team.map(v => dict.team[v] || v).join(", ") : dict.team[team] || team);
    if (teamNote) lines.push(`> **Note:** ${teamNote}`);
    lines.push("");
  }
  if (financials) {
    lines.push("### Financial State: " + finLabel);
    lines.push("");
    lines.push(Array.isArray(financials) ? financials.map(v => dict.financials[v] || v).join(", ") : dict.financials[financials] || financials);
    if (finNote) lines.push(`> **Note:** ${finNote}`);
    lines.push("");
  }
  if (competition) {
    lines.push("### Competition Landscape: " + compLabel);
    lines.push("");
    lines.push(Array.isArray(competition) ? competition.map(v => dict.competition[v] || v).join(", ") : dict.competition[competition] || competition);
    if (compNote) lines.push(`> **Note:** ${compNote}`);
    lines.push("");
  }

  lines.push("## Recommended Slide Structure");
  lines.push("");
  lines.push("| # | Slide Title | Content Focus | Duration");
  lines.push("|---|-------------|--------------|---------");
  lines.push("| 1 | **Title Slide** | Company name, tagline, presenter name, date | 30s");
  lines.push("| 2 | **Problem** | The pain point, who experiences it, how big is the pain | 60s");
  lines.push("| 3 | **Solution** | Your product/service, how it solves the problem uniquely | 60s");
  const modelTitle = options.model.find(o => o.id === model)?.title || "Business Model";
  lines.push(`| 4 | **${modelTitle}** | Revenue model, pricing, unit economics | 45s`);
  const marketTitle = options.market.find(o => o.id === market)?.title || "Target Market";
  lines.push(`| 5 | **${marketTitle}** | TAM, SAM, SOM, customer persona, go-to-market | 45s`);
  lines.push("| 6 | **Traction** | Key metrics, milestones, customer logos, growth curve | 60s");
  lines.push("| 7 | **Competition** | Competitive landscape, moat, differentiation | 45s");
  lines.push("| 8 | **Team** | Founders, key hires, advisors, relevant experience | 30s");
  lines.push("| 9 | **Financials** | Revenue projections, burn rate, key assumptions | 45s");
  lines.push("| 10 | **Timeline** | Milestones, roadmap, use of funds timeline | 30s");
  lines.push("| 11 | **Ask** | Amount raised/raising, use of funds, milestones | 30s");
  lines.push("");

  lines.push("## Key Metrics to Highlight");
  lines.push("");
  if (stage === "ideation" || stage === "pre-seed") {
    lines.push("- **Problem validation**: Number of user interviews conducted");
    lines.push("- **Market research**: TAM estimate and competitive gaps identified");
    lines.push("- **Team**: Founder-market fit and domain expertise");
    lines.push("- **Early traction**: Waitlist sign-ups, pilot interest, LOIs");
  } else if (stage === "seed" || stage === "series-a") {
    lines.push("- **Revenue**: MRR/ARR, growth rate (month-over-month)");
    lines.push("- **Users**: Active users, retention rate, engagement metrics");
    lines.push("- **Unit economics**: CAC, LTV, payback period");
    lines.push("- **Product**: NPS score, feature adoption rates");
  } else {
    lines.push("- **Growth**: Month-over-month revenue growth, net dollar retention");
    lines.push("- **Efficiency**: CAC payback period, gross margin, burn multiple");
    lines.push("- **Scale**: Customer count, enterprise deals, geographic expansion");
    lines.push("- **Team**: Headcount growth, key executive hires");
  }
  if (market === "enterprise-b2b") {
    lines.push("- **Enterprise pipeline**: Number of active enterprise deals, average contract value");
  }
  if (financials === "profitable") {
    lines.push("- **Profitability**: Gross margin %, operating margin, free cash flow");
  }
  lines.push("");

  lines.push("## Pitch Delivery Tips");
  lines.push("");
  if (focus === "seeking-investors") {
    lines.push("- Open with the problem and market size to hook investor interest immediately.");
    lines.push("- Use the Why Now? slide to explain the timing opportunity.");
    lines.push("- Be specific about the ask: how much, what terms, what it funds.");
    lines.push("- Practice the 30-second elevator pitch version for hallway conversations.");
  } else if (focus === "business-pitch-competition") {
    lines.push("- Start with a bold statement or surprising statistic to grab judges attention.");
    lines.push("- Keep slides highly visual — minimal text, maximum impact.");
    lines.push("- Time your delivery to fit within 3 minutes. Rehearse with a stopwatch.");
    lines.push("- End with a memorable closing line that reinforces your core message.");
  } else if (focus === "customer-sales") {
    lines.push("- Focus on the specific pain points your prospect has mentioned.");
    lines.push("- Use ROI calculations tailored to their industry and company size.");
    lines.push("- Bring case studies from similar companies for social proof.");
    lines.push("- End with a clear next step: trial, demo, or pilot proposal.");
  } else if (focus === "board-update") {
    lines.push("- Lead with the metrics that matter most to the board.");
    lines.push("- Be transparent about challenges and what you need help with.");
    lines.push("- Present a clear action plan with owner and deadline for each initiative.");
  } else {
    lines.push("- Use the deck to align the team around a shared vision and quarterly priorities.");
    lines.push("- Include a clear roadmap slide showing milestones and ownership.");
    lines.push("- Encourage Q&A and discussion after each major section.");
    lines.push("- Follow up with a written summary and action items.");
  }
  lines.push("");

  lines.push("## Competition Matrix");
  lines.push("");
  lines.push("| Competitor | Strength | Weakness | Our Advantage");
  lines.push("|------------|----------|----------|--------------");
  lines.push("| Competitor A | Brand recognition | High price point | Affordable alternative");
  lines.push("| Competitor B | Feature depth | Steep learning curve | Simpler UX");
  lines.push("| Competitor C | Large user base | Poor support | White-glove onboarding");
  if (competition === "fragmented") {
    lines.push("| Others (10+) | Niche focus | Lack of integration | All-in-one platform");
  }
  if (competition === "one-dominant") {
    lines.push("| Incumbent | Market share | Legacy tech | Modern architecture");
  }
  lines.push("");

  lines.push("## Team Snapshot");
  lines.push("");
  lines.push("| Role | Name | Background | Key Contribution");
  lines.push("|------|------|------------|-----------------");
  lines.push("| CEO | [Name] | [Previous company/role] | Vision, strategy, fundraising");
  lines.push("| CTO | [Name] | [Previous tech lead role] | Architecture, engineering");
  lines.push("| COO | [Name] | [Operations experience] | Operations, partnerships");
  if (team === "solo-founder") {
    lines.push("| Advisor 1 | [Name] | [Industry expertise] | Strategic guidance");
    lines.push("| Advisor 2 | [Name] | [Technical expertise] | Technical oversight");
  }
  lines.push("");

  lines.push("## Use of Funds");
  lines.push("");
  lines.push("| Category | Percentage | Purpose");
  lines.push("|----------|------------|--------");
  lines.push("| Product Development | 40% | Engineering, product design, QA");
  lines.push("| Sales & Marketing | 30% | Demand gen, sales team, content");
  lines.push("| Operations | 15% | Infrastructure, tools, admin");
  lines.push("| Reserve | 15% | Runway extension, contingency");
  if (timeline === "12-24-months" || timeline === "24-60-months") {
    lines.push("| International Expansion | 10% | Localization, regional offices");
  }
  lines.push("");

  lines.push("## Timeline & Milestones");
  lines.push("");
  lines.push("| Period | Milestone | Success Metric");
  lines.push("|--------|-----------|--------------");
  if (timeline === "0-3-months" || timeline === "pre-launch") {
    lines.push("| Q1 | MVP Launch | 1,000 active users");
    lines.push("| Q2 | First Paid Customers | $10K MRR");
    lines.push("| Q3 | Feature Expansion | 50% retention rate");
  } else if (timeline === "3-6-months") {
    lines.push("| Q1 | Product Launch | 5,000 users");
    lines.push("| Q2 | Scaling Sales | $50K MRR");
    lines.push("| Q3 | Series A Raise | $5M raised");
  } else if (timeline === "growth-hockey") {
    lines.push("| Q1 | Growth Infrastructure | Handle 100K DAU");
    lines.push("| Q2 | Expansion | 3 new markets");
    lines.push("| Q3 | Series B | $20M raised at 10x multiple");
  } else {
    lines.push("| Year 1 | Market Entry | $500K ARR");
    lines.push("| Year 2 | Scale | $3M ARR");
    lines.push("| Year 3 | Dominance | $15M ARR");
  }
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Pitch Deck Architect_");

  return lines.join("\n");
}

export default function PitchDeckPage() {
  return (
    <ToolShell
      title="Pitch Deck Architect"
      steps={[
        { id: 1, label: "Stage", component: (p) => (
          <GenericStep {...p} title="Select Business Stage" description="What stage is your business at?" options={options.stage} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="stage" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Model", component: (p) => (
          <GenericStep {...p} title="Select Business Model" description="How does your business make money?" options={options.model} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="model" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Market", component: (p) => (
          <GenericStep {...p} title="Select Target Market" description="Who are you selling to?" options={options.market} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="market" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Focus", component: (p) => (
          <GenericStep {...p} title="Select Pitch Focus" description="What is the goal of this pitch deck?" options={options.focus} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="focus" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Team", component: (p) => (
          <GenericStep {...p} title="Select Team Profile" description="What does your founding team look like?" options={options.team} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="team" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Financials", component: (p) => (
          <GenericStep {...p} title="Select Financial State" description="What is your current financial situation?" options={options.financials} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="financials" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Competition", component: (p) => (
          <GenericStep {...p} title="Select Competition Landscape" description="How would you describe your competitive environment?" options={options.competition} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="competition" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Timeline", component: (p) => (
          <GenericStep {...p} title="Select Timeline Focus" description="What timeframe does your plan cover?" options={options.timeline} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="timeline" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}









