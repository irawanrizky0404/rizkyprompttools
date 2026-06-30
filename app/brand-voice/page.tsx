"use client";

import type { FC } from "react";
import {
  Landmark, Mic, BookOpen, AlignLeft, Globe, Smartphone,
  Heart, TrendingUp, Sword, Sparkles, GraduationCap,
  Droplets, Zap, Sun, Moon, Wind, Hash, Quote,
  Type, Bold, Italic, AlignCenter, Earth, Compass,
  Camera, Link, MessageCircle, Video, MessageSquare,
  Star, Target, Flame, Bell, Shield, Gauge,
  ArrowUp, ArrowRight, Repeat,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  archetype: [
    { id: "hero", title: "Hero", description: "Courageous, bold, overcomes obstacles", icon: Sword },
    { id: "sage", title: "Sage", description: "Wise, knowledgeable, truth-seeking", icon: GraduationCap },
    { id: "outlaw", title: "Outlaw", description: "Rebellious, disruptive, rule-breaker", icon: Zap },
    { id: "magician", title: "Magician", description: "Visionary, transformative, awe-inspiring", icon: Sparkles },
    { id: "innocent", title: "Innocent", description: "Pure, optimistic, nostalgic", icon: Sun },
    { id: "explorer", title: "Explorer", description: "Adventurous, curious, freedom-seeking", icon: Compass },
    { id: "ruler", title: "Ruler", description: "Authoritative, organized, controlling", icon: Landmark },
    { id: "caregiver", title: "Caregiver", description: "Nurturing, supportive, compassionate", icon: Heart },
  ],
  tone: [
    { id: "formal", title: "Formal", description: "Professional, polished, authoritative", icon: Mic },
    { id: "casual", title: "Casual", description: "Relaxed, conversational, friendly", icon: MessageSquare },
    { id: "witty", title: "Witty", description: "Clever, humorous, sharp", icon: Quote },
    { id: "empathetic", title: "Empathetic", description: "Warm, understanding, gentle", icon: Heart },
    { id: "urgent", title: "Urgent", description: "Direct, time-sensitive, imperative", icon: Zap },
    { id: "aspirational", title: "Aspirational", description: "Inspiring, elevated, visionary", icon: Star },
    { id: "playful", title: "Playful", description: "Fun, lighthearted, mischievous", icon: Wind },
    { id: "minimalist", title: "Minimalist", description: "Clean, stripped-down, essential", icon: Bold },
  ],
  vocabulary: [
    { id: "simple", title: "Simple & Direct", description: "Short words, clear meaning, accessible", icon: Type },
    { id: "technical", title: "Technical", description: "Industry terms, precise language", icon: Hash },
    { id: "jargon-rich", title: "Jargon-Rich", description: "Deep specialization, insider vocabulary", icon: BookOpen },
    { id: "poetic", title: "Poetic", description: "Metaphorical, rhythmic, evocative", icon: Quote },
    { id: "action-driven", title: "Action-Driven", description: "Strong verbs, imperative, dynamic", icon: Zap },
    { id: "abstract", title: "Abstract", description: "Conceptual, philosophical, open-ended", icon: Sparkles },
    { id: "conversational", title: "Conversational", description: "Everyday speech, contractions, idioms", icon: MessageSquare },
    { id: "luxury", title: "Luxury", description: "Refined, exclusive, sensory-rich", icon: Droplets },
  ],
  sentenceStructure: [
    { id: "short-punchy", title: "Short & Punchy", description: "Brief sentences, high impact", icon: AlignLeft },
    { id: "long-flowing", title: "Long & Flowing", description: "Complex sentences, rhythmic cadence", icon: AlignCenter },
    { id: "varied", title: "Varied Rhythm", description: "Mix of lengths for dynamic pacing", icon: Type },
    { id: "bullet-style", title: "Bullet-Style", description: "List-heavy, scannable, structured", icon: Bold },
    { id: "question-led", title: "Question-Led", description: "Open with questions, invite reflection", icon: Quote },
    { id: "imperative", title: "Imperative", description: "Commands and directives throughout", icon: Zap },
    { id: "circular", title: "Circular", description: "Return to opening theme, full circle", icon: Repeat },
    { id: "parallel", title: "Parallel Structure", description: "Repeated patterns for emphasis", icon: Italic },
  ],
  culturalContext: [
    { id: "western", title: "Western", description: "Individualistic, direct, action-oriented", icon: Earth },
    { id: "eastern", title: "Eastern", description: "Collectivist, indirect, harmony-seeking", icon: Sun },
    { id: "latin", title: "Latin", description: "Passionate, warm, relationship-first", icon: Flame },
    { id: "nordic", title: "Nordic", description: "Minimalist, egalitarian, understated", icon: Wind },
    { id: "mideast", title: "Middle Eastern", description: "Hospitality-rich, tradition-rooted, poetic", icon: Moon },
    { id: "african", title: "African", description: "Storytelling, communal, vibrant", icon: Sun },
    { id: "global", title: "Global Neutral", description: "Cross-cultural, standardized, universal", icon: Globe },
    { id: "hybrid", title: "Hybrid Fusion", description: "Blended cultural elements, multicultural", icon: Compass },
  ],
  platformAdaptation: [
    { id: "Link", title: "Link", description: "Professional tone, industry insights, thought leadership", icon: Link },
    { id: "MessageCircle", title: "X / MessageCircle", description: "Concise, punchy, real-time engagement", icon: MessageCircle },
    { id: "Camera", title: "Camera", description: "Visual-first, aspirational, community-driven", icon: Camera },
    { id: "tiktok", title: "TikTok", description: "Trend-driven, authentic, fast-paced", icon: Smartphone },
    { id: "blog", title: "Blog", description: "Long-form, educational, SEO-optimized", icon: BookOpen },
    { id: "email", title: "Email", description: "Personal, direct, conversion-focused", icon: MessageSquare },
    { id: "Video", title: "Video", description: "Engaging hooks, storytelling, call-to-action", icon: Video },
    { id: "website", title: "Website", description: "Brand-centric, scannable, persuasive", icon: Globe },
  ],
  emotionalTriggers: [
    { id: "trust", title: "Trust", description: "Reliability, consistency, safety", icon: Shield },
    { id: "urgency", title: "Urgency", description: "Scarcity, time-limited, FOMO", icon: Flame },
    { id: "curiosity", title: "Curiosity", description: "Intrigue, gaps, mystery", icon: Target },
    { id: "belonging", title: "Belonging", description: "Community, inclusion, shared identity", icon: Heart },
    { id: "ambition", title: "Ambition", description: "Aspiration, achievement, status", icon: Star },
    { id: "fear", title: "Fear", description: "Risk avoidance, loss aversion", icon: Bell },
    { id: "joy", title: "Joy", description: "Delight, humor, happiness", icon: Sun },
    { id: "surprise", title: "Surprise", description: "Novelty, unexpected delight, revelation", icon: Sparkles },
  ],
  voiceEvolution: [
    { id: "static", title: "Static", description: "Fixed voice, never changes across touchpoints", icon: Landmark },
    { id: "gradual", title: "Gradual Shift", description: "Evolves subtly over months and years", icon: TrendingUp },
    { id: "seasonal", title: "Seasonal Adaptation", description: "Adjusts for campaigns, holidays, trends", icon: Sun },
    { id: "audience-adapt", title: "Audience-Adaptive", description: "Shifts based on segment or persona", icon: MessageSquare },
    { id: "platform-native", title: "Platform-Native", description: "Voice optimized per-platform automatically", icon: Smartphone },
    { id: "maturity-led", title: "Maturity-Led", description: "Evolves as brand matures from startup to enterprise", icon: ArrowUp },
    { id: "crisis-mode", title: "Crisis Mode", description: "Shifts to serious, empathetic during emergencies", icon: Bell },
    { id: "ai-assisted", title: "AI-Assisted", description: "Dynamically generated voice via brand AI model", icon: Sparkles },
  ],
};

const dict: Record<string, Record<string, string>> = {
  archetype: {
    hero: "Position your brand as a courageous force that overcomes challenges and inspires others. Use bold declarative statements, victory narratives, and calls to action that frame the customer as the hero your brand enables.",
    sage: "Establish your brand as a trusted source of wisdom and insight. Share deep expertise through educational content, data-backed claims, and thoughtful analysis that helps customers make informed decisions.",
    outlaw: "Disrupt conventions with a rebellious streak. Challenge the status quo, use provocative language, and position your brand as the bold alternative to outdated industry norms.",
    magician: "Create a sense of wonder and transformation. Use evocative language that paints a picture of what's possible, framing your product or service as the catalyst for remarkable change.",
    innocent: "Tap into nostalgia and optimism with pure, simple messaging. Emphasize honesty, simplicity, and the belief that things can be good and trustworthy without complication.",
    explorer: "Appeal to the adventurer and the curious. Use language of discovery, journey, and frontier. Frame your offerings as tools for exploration and new experiences.",
    ruler: "Project authority and control with commanding language. Emphasize structure, reliability, and governance. Position your brand as the gold standard in your industry.",
    caregiver: "Speak with warmth and nurturing support. Use comforting language, emphasize safety and care, and position your brand as a protective force for your customers' wellbeing.",
  },
  tone: {
    formal: "Employ a professional tone with precise language, proper grammar, and no contractions. Use industry-standard terminology and maintain a respectful distance. Avoid humor or casual expressions.",
    casual: "Write as you would speak to a colleague. Use contractions, everyday language, and occasional colloquialisms. Keep sentences natural and unforced.",
    witty: "Inject clever wordplay, unexpected twists, and sharp observations. Use humor that lands without alienating. Timing and context are everything.",
    empathetic: "Lead with understanding and validation. Acknowledge pain points and challenges before offering solutions. Use gentle, reassuring language that makes the reader feel heard.",
    urgent: "Create immediate action through time-sensitive language. Use strong imperatives, countdown cues, and direct calls to action. Every word should convey importance.",
    aspirational: "Elevate your language to inspire and uplift. Paint vivid pictures of a better future. Use superlatives carefully and maintain credibility while reaching high.",
    playful: "Have fun with language. Use puns, jokes, and lighthearted metaphors. Keep energy high and tone approachable. Never take yourself too seriously.",
    minimalist: "Strip away every unnecessary word. Use simple constructions, short sentences, and precise vocabulary. Let the message breathe with white space and clarity.",
  },
  vocabulary: {
    simple: "Choose common words that any reader can understand. Prefer Anglo-Saxon roots over Latin. Short words, short sentences. Aim for a 5th-8th grade reading level.",
    technical: "Use precise industry terminology that signals expertise. Define acronyms on first use. Prioritize accuracy over accessibility. Your audience expects specialist language.",
    "jargon-rich": "Embrace deep specialization language. Use proprietary terms, insider references, and advanced concepts. This vocabulary is a gatekeeper that signals in-group membership.",
    poetic: "Employ metaphor, simile, and figurative language. Focus on rhythm and sound. Choose words for their emotional resonance as much as their meaning.",
    "action-driven": "Fill your copy with strong verbs. Minimize adjectives and adverbs. Every word should push toward an action or outcome. Passive voice is forbidden.",
    abstract: "Use conceptual language that invites interpretation. Discuss ideas, philosophies, and big-picture thinking. Leave room for the reader to derive their own meaning.",
    conversational: "Write like a real person talks. Use contractions, sentence fragments, interjections, and vocal inflections. Draw from everyday speech patterns.",
    luxury: "Choose sumptuous, sensory-rich language. Emphasize craftsmanship, exclusivity, and refinement. Less is more, but every word must carry weight and elegance.",
  },
  sentenceStructure: {
    "short-punchy": "Keep sentences under 15 words. Each sentence delivers one idea. Period. This creates urgency and impact. Readers move fast. So should your sentences.",
    "long-flowing": "Craft sentences that unfold like a journey, using subordinate clauses, parallel constructions, and rhythmic pacing to carry the reader forward on a wave of language.",
    varied: "Alternate between short, medium, and long sentences. Use a short sentence for impact. Follow with a longer one for explanation. This creates a natural, engaging rhythm.",
    "bullet-style": "Structure content as scannable lists. Lead with a strong header. Follow with concise bullet points. Readers can absorb key information at a glance.",
    "question-led": "Open paragraphs and sections with provocative questions. Engage the reader's curiosity before providing answers. Questions create a gap that answers fill.",
    imperative: "Command attention with direct instructions. Start sentences with verbs. Tell the reader exactly what to do and why they should do it now.",
    circular: "Start with a theme or image, develop it through the piece, then return to it in the conclusion. This creates satisfying closure and reinforces key ideas.",
    parallel: "Use the same grammatical structure across successive sentences or clauses. Repetition of form creates emphasis and makes your points more memorable.",
  },
  culturalContext: {
    western: "Emphasize individual achievement, direct communication, and action orientation. Use linear storytelling. Value clarity and getting to the point quickly.",
    eastern: "Focus on group harmony, indirect communication, and relationship-building. Use circular storytelling. Value context and reading between the lines.",
    latin: "Prioritize emotional connection, warmth, and personal relationships. Use expressive language. Family and community values are central themes.",
    nordic: "Embrace minimalism, egalitarianism, and understatement. Avoid hyperbole. Focus on functionality, sustainability, and collective wellbeing.",
    mideast: "Honor tradition and hospitality with elaborate greetings and respectful language. Use poetic flourishes. Deep relationships precede business transactions.",
    african: "Weave storytelling into every message. Use proverbs, rhythmic language, and communal themes. Emphasize shared success and collective progress.",
    "global": "Use standardized English that avoids cultural idioms, references, or assumptions. Prioritize universal clarity. Test with diverse audiences for unintended connotations.",
    hybrid: "Intentionally blend elements from multiple cultures. Create a fusion voice that respects differences while forging a new, inclusive brand identity.",
  },
  platformAdaptation: {
    Link: "Write professional, insight-driven content. Use industry thought leadership, data points, and career-oriented language. Post 2-4x weekly with engagement-focused questions.",
    MessageCircle: "Keep it under 280 characters. Lead with the hook. Use threads for depth. Engage in real-time conversations. Polish your hot takes—they define your brand voice here.",
    Camera: "Let visuals lead. Captions should be short, emotive, and community-oriented. Use Stories for authenticity. Hashtags strategic, not spammy.",
    tiktok: "Be raw, authentic, and trend-aware. Jump on sounds and formats quickly. Educational content delivered with personality. Captions are secondary to video.",
    blog: "Go deep. Use long-form content with clear headers, subheaders, and scannable sections. Optimize for SEO without sacrificing voice. Include internal and external links.",
    email: "Write a compelling subject line. Open with a hook. Keep body copy focused on one goal. Personalize where possible. Clear CTA above the fold.",
    Video: "Hook viewers in the first 5 seconds. Use pattern interrupts. Storyboard your script with verbal and visual cues. End with a clear CTA and subscribe reminder.",
    website: "Lead with value proposition above the fold. Use layered content: headlines, subheaders, body copy. Every page must pass the 5-second clarity test.",
  },
  emotionalTriggers: {
    trust: "Build trust through consistency, testimonials, guarantees, certifications, and transparent communication. Use reliable data and third-party endorsements.",
    urgency: "Create urgency with limited-time offers, countdown timers, low-stock alerts, and exclusive deadlines. Use language that implies scarcity without dishonesty.",
    curiosity: "Pique curiosity with open loops, intriguing questions, and partial information. Use headlines that promise a reveal. The gap between what we know and want to know drives engagement.",
    belonging: "Foster belonging with inclusive language, community references, shared missions, and user-generated content. Make the audience feel part of something bigger.",
    ambition: "Appeal to ambition with aspirational imagery, success stories, and progress metrics. Frame your product as the tool that helps customers reach their goals.",
    fear: "Use fear carefully. Highlight risks of inaction, potential losses, and missed opportunities. Always provide a safe solution. Never manipulate or exaggerate threats.",
    joy: "Generate joy through humor, delight, surprise, and positive outcomes. Share customer wins, celebrate milestones, and find reasons to be upbeat.",
    surprise: "Deliver unexpected value, insights, or experiences. Break patterns. Use twists, reveals, and unexpected gifts to create memorable brand moments.",
  },
  voiceEvolution: {
    static: "Maintain an identical voice across every channel, campaign, and year. Consistency builds recognition. Only change in response to a major brand refresh.",
    gradual: "Plan a slow voice evolution over months or years. Shift one dimension at a time. Keep a brand voice timeline document to track changes.",
    seasonal: "Adapt your voice for seasonal campaigns, holidays, and cultural moments. Maintain core identity while flexing tone to match the calendar and cultural mood.",
    "audience-adapt": "Dynamically adjust voice based on audience segment. Speak differently to executives vs students, loyalists vs prospects. Use data to inform shifts.",
    "platform-native": "Let each platform's native culture influence your voice. The same message should sound native to Link, MessageCircle, and TikTok while remaining recognizably your brand.",
    "maturity-led": "Plan voice evolution stages that match your company's growth. Startup scrappiness evolves into established authority, then into industry leadership.",
    "crisis-mode": "Have a predefined crisis voice protocol. Shift immediately to serious, empathetic, and transparent communication. Pause scheduled content. Focus on stakeholder safety.",
    "ai-assisted": "Train an AI model on your brand guidelines to generate on-brand copy at scale. Define tone parameters, vocabulary constraints, and structural rules for the model.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const archetype = selections.step1;
  const tone = selections.step2;
  const vocabulary = selections.step3;
  const sentenceStructure = selections.step4;
  const culturalContext = selections.step5;
  const platformAdaptation = selections.step6;
  const emotionalTriggers: string[] = selections.step7 || [];
  const voiceEvolution = selections.step8;

  const lines: string[] = [];

  lines.push("# Brand Voice Identity Blueprint");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const aLabel = Array.isArray(archetype) ? archetype.map(id => options.archetype.find(o => o.id === id)?.title || id).join(", ") : options.archetype.find(o => o.id === archetype)?.title || archetype;
  const aNote = notes[`archetype-${archetype}`] || "";
  lines.push(`| Brand Archetype | ${aLabel} | ${aNote}`);
  const tLabel = Array.isArray(tone) ? tone.map(id => options.tone.find(o => o.id === id)?.title || id).join(", ") : options.tone.find(o => o.id === tone)?.title || tone;
  const tNote = notes[`tone-${tone}`] || "";
  lines.push(`| Tone Range | ${tLabel} | ${tNote}`);
  const vLabel = Array.isArray(vocabulary) ? vocabulary.map(id => options.vocabulary.find(o => o.id === id)?.title || id).join(", ") : options.vocabulary.find(o => o.id === vocabulary)?.title || vocabulary;
  const vNote = notes[`vocabulary-${vocabulary}`] || "";
  lines.push(`| Vocabulary Style | ${vLabel} | ${vNote}`);
  const sLabel = Array.isArray(sentenceStructure) ? sentenceStructure.map(id => options.sentenceStructure.find(o => o.id === id)?.title || id).join(", ") : options.sentenceStructure.find(o => o.id === sentenceStructure)?.title || sentenceStructure;
  const sNote = notes[`sentenceStructure-${sentenceStructure}`] || "";
  lines.push(`| Sentence Structure | ${sLabel} | ${sNote}`);
  const cLabel = Array.isArray(culturalContext) ? culturalContext.map(id => options.culturalContext.find(o => o.id === id)?.title || id).join(", ") : options.culturalContext.find(o => o.id === culturalContext)?.title || culturalContext;
  const cNote = notes[`culturalContext-${culturalContext}`] || "";
  lines.push(`| Cultural Context | ${cLabel} | ${cNote}`);
  const pLabel = Array.isArray(platformAdaptation) ? platformAdaptation.map(id => options.platformAdaptation.find(o => o.id === id)?.title || id).join(", ") : options.platformAdaptation.find(o => o.id === platformAdaptation)?.title || platformAdaptation;
  const pNote = notes[`platformAdaptation-${platformAdaptation}`] || "";
  lines.push(`| Platform Adaptation | ${pLabel} | ${pNote}`);
  const etLabels = emotionalTriggers.map(id => options.emotionalTriggers.find(o => o.id === id)?.title || id).join(", ");
  const etNotes = emotionalTriggers.map(id => notes[`emotionalTriggers-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Emotional Triggers | ${etLabels || "None selected"} | ${etNotes}`);
  const evLabel = Array.isArray(voiceEvolution) ? voiceEvolution.map(id => options.voiceEvolution.find(o => o.id === id)?.title || id).join(", ") : options.voiceEvolution.find(o => o.id === voiceEvolution)?.title || voiceEvolution;
  const evNote = notes[`voiceEvolution-${voiceEvolution}`] || "";
  lines.push(`| Voice Evolution | ${evLabel} | ${evNote}`);
  lines.push("");

  lines.push("## Brand Voice Profile");
  lines.push("");

  if (archetype) {
    lines.push("### Brand Archetype: " + aLabel);
    lines.push("");
    lines.push(Array.isArray(archetype) ? archetype.map(v => dict.archetype[v] || v).join(", ") : dict.archetype[archetype] || archetype);
    if (aNote) lines.push(`> **Note:** ${aNote}`);
    lines.push("");
  }

  if (tone) {
    lines.push("### Tone Range: " + tLabel);
    lines.push("");
    lines.push(Array.isArray(tone) ? tone.map(v => dict.tone[v] || v).join(", ") : dict.tone[tone] || tone);
    if (tNote) lines.push(`> **Note:** ${tNote}`);
    lines.push("");
  }

  if (vocabulary) {
    lines.push("### Vocabulary Style: " + vLabel);
    lines.push("");
    lines.push(Array.isArray(vocabulary) ? vocabulary.map(v => dict.vocabulary[v] || v).join(", ") : dict.vocabulary[vocabulary] || vocabulary);
    if (vNote) lines.push(`> **Note:** ${vNote}`);
    lines.push("");
  }

  if (sentenceStructure) {
    lines.push("### Sentence Structure: " + sLabel);
    lines.push("");
    lines.push(Array.isArray(sentenceStructure) ? sentenceStructure.map(v => dict.sentenceStructure[v] || v).join(", ") : dict.sentenceStructure[sentenceStructure] || sentenceStructure);
    if (sNote) lines.push(`> **Note:** ${sNote}`);
    lines.push("");
  }

  if (culturalContext) {
    lines.push("### Cultural Context: " + cLabel);
    lines.push("");
    lines.push(Array.isArray(culturalContext) ? culturalContext.map(v => dict.culturalContext[v] || v).join(", ") : dict.culturalContext[culturalContext] || culturalContext);
    if (cNote) lines.push(`> **Note:** ${cNote}`);
    lines.push("");
  }

  if (platformAdaptation) {
    lines.push("### Platform Adaptation: " + pLabel);
    lines.push("");
    lines.push(Array.isArray(platformAdaptation) ? platformAdaptation.map(v => dict.platformAdaptation[v] || v).join(", ") : dict.platformAdaptation[platformAdaptation] || platformAdaptation);
    if (pNote) lines.push(`> **Note:** ${pNote}`);
    lines.push("");
  }

  if (emotionalTriggers.length > 0) {
    lines.push("### Emotional Triggers");
    lines.push("");
    for (const etId of emotionalTriggers) {
      const label = options.emotionalTriggers.find(o => o.id === etId)?.title || etId;
      lines.push(`#### ${label}`);
      lines.push("");
      lines.push(dict.emotionalTriggers[etId] || "");
      const note = notes[`emotionalTriggers-${etId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (voiceEvolution) {
    lines.push("### Voice Evolution Strategy: " + evLabel);
    lines.push("");
    lines.push(Array.isArray(voiceEvolution) ? voiceEvolution.map(v => dict.voiceEvolution[v] || v).join(", ") : dict.voiceEvolution[voiceEvolution] || voiceEvolution);
    if (evNote) lines.push(`> **Note:** ${evNote}`);
    lines.push("");
  }

  lines.push("## Voice Guidelines Matrix");
  lines.push("");
  lines.push("| Dimension | Do | Don't | Example");
  lines.push("|-----------|----|-------|---------");
  lines.push(`| ${tLabel || "Tone"} | Maintain ${(tLabel || "consistent").toLowerCase()} tone | ArrowLeftRight tone mid-message | "Craft each message with a ${(tLabel || "steady").toLowerCase()} cadence"`);
  lines.push(`| ${vLabel || "Vocabulary"} | Use ${(vLabel || "clear").toLowerCase()} language | Overcomplicate unnecessarily | "Choose ${(vLabel || "simple").toLowerCase()} words that resonate"`);
  lines.push(`| ${sLabel || "Structure"} | Apply ${(sLabel || "varied").toLowerCase()} sentence patterns | Use same structure repeatedly | "${(sLabel === "Short & Punchy" ? "Keep it short. Move fast." : "Vary your rhythm to keep readers engaged.").toLowerCase()}"`);
  lines.push(`| Cultural Lens | Respect ${(cLabel || "global").toLowerCase()} norms | Use untranslated idioms | "Speak to ${(cLabel || "global").toLowerCase()} audiences with care"`);
  lines.push("");

  lines.push("## Platform-Specific Guidelines");
  lines.push("");
  lines.push("| Platform | Voice Adaptation | Content Cadence | Success Metrics");
  lines.push("|----------|-----------------|-----------------|---------------");
  if (platformAdaptation) {
    const cMap: Record<string, { adapt: string; cadence: string; metrics: string }> = {
      Link: { adapt: "Professional thought leadership with data points", cadence: "3-4 posts per week", metrics: "Engagement rate, profile visits" },
      MessageCircle: { adapt: "Concise, witty, real-time commentary", cadence: "3-10 tweets per day", metrics: "Impressions, retweets, replies" },
      Camera: { adapt: "Visual-first, emotive, community-centric", cadence: "3-5 posts per week + Stories daily", metrics: "Saves, shares, DM replies" },
      tiktok: { adapt: "Authentic, trend-aware, educational wrapped in fun", cadence: "1-2 posts per day", metrics: "Watch time, completion rate" },
      blog: { adapt: "Deep dive, educational, SEO-optimized", cadence: "2-4 posts per month", metrics: "Organic traffic, time on page" },
      email: { adapt: "Personal, direct, single-goal focused", cadence: "1-4 emails per week", metrics: "Open rate, click rate, unsubscribe" },
      Video: { adapt: "Engaging hook, structured storytelling, CTA-driven", cadence: "1-2 videos per week", metrics: "View duration, CTR, subscriber growth" },
      website: { adapt: "Value prop upfront, scannable, persuasive hierarchy", cadence: "Continuous A/B testing", metrics: "Bounce rate, conversion rate" },
    };
    const pInfo = cMap[platformAdaptation] || { adapt: "Consistent brand voice", cadence: "As needed", metrics: "Brand perception" };
    lines.push(`| ${pLabel} | ${pInfo.adapt} | ${pInfo.cadence} | ${pInfo.metrics}`);
  }
  lines.push("");

  lines.push("## Emotional Trigger Strategy");
  lines.push("");
  if (emotionalTriggers.length > 0) {
    lines.push("The following emotional triggers will be activated across touchpoints:");
    lines.push("");
    for (const etId of emotionalTriggers) {
      const label = options.emotionalTriggers.find(o => o.id === etId)?.title || etId;
      lines.push(`- **${label}**: ${(Array.isArray(etId) ? etId.map(v => dict.emotionalTriggers[v]?.split?.(".")?.[0] || v).join(", ") : dict.emotionalTriggers[etId]?.split?.(".")?.[0]) || ""}`);
    }
  } else {
    lines.push("No emotional triggers selected. Consider adding at least one trigger to deepen audience connection.");
  }
  lines.push("");

  lines.push("## Voice Evolution Roadmap");
  lines.push("");
  lines.push(`| Phase | Timeline | Voice State | Key Actions`);
  lines.push(`|-------|----------|-------------|-----------`);
  const evolutionPhases: Record<string, { p1: string; p2: string; p3: string }> = {
    static: { p1: "Current", p2: "Ongoing", p3: "Maintain strict consistency across all channels" },
    gradual: { p1: "Phase 1", p2: "Months 1-6", p3: "Introduce subtle shifts in vocabulary, monitor response" },
    seasonal: { p1: "Q1 Baseline", p2: "Quarterly", p3: "Align voice with seasonal themes and campaigns" },
    "audience-adapt": { p1: "Segment Map", p2: "Ongoing", p3: "Define voice variants for each audience segment" },
    "platform-native": { p1: "Platform Audit", p2: "Month 1", p3: "Define platform-specific voice guidelines" },
    "maturity-led": { p1: "Current Stage", p2: "Per Milestone", p3: "Evolve voice at each company growth stage" },
    "crisis-mode": { p1: "Normal Ops", p2: "As needed", p3: "Maintain standard voice, activate crisis protocol when triggered" },
    "ai-assisted": { p1: "Model Training", p2: "Month 1-2", p3: "Train brand voice model, define guardrails" },
  };
  const evPhase = evolutionPhases[voiceEvolution] || { p1: "Current", p2: "Ongoing", p3: "Monitor and adjust" };
  lines.push(`| ${evPhase.p1} | ${evPhase.p2} | ${evLabel} | ${evPhase.p3}`);
  lines.push("");

  lines.push("## Content Creation Workflow");
  lines.push("");
  lines.push("1. **Brief**: Define content objective, platform, and target audience segment");
  lines.push("2. **Archetype Check**: Align message with the " + aLabel + " archetype");
  lines.push("3. **Tone Calibration**: Apply " + tLabel + " tone guidelines");
  lines.push("4. **Vocabulary Filter**: Use " + vLabel + " vocabulary rules");
  lines.push("5. **Structure Format**: Apply " + sLabel + " sentence structure");
  lines.push("6. **Cultural Review**: Validate against " + cLabel + " cultural context");
  lines.push("7. **Platform Polish**: Adapt for " + pLabel + " platform conventions");
  lines.push("8. **Emotional Check**: Verify " + (emotionalTriggers.length > 0 ? emotionalTriggers.map(id => options.emotionalTriggers.find(o => o.id === id)?.title).join(", ") : "no emotional triggers") + " are activated");
  lines.push("9. **Voice Consistency**: Ensure content matches evolution strategy (" + evLabel + ")");
  lines.push("");

  lines.push("## Quality Checklist");
  lines.push("");
  lines.push("- [ ] Content reflects the " + aLabel + " brand archetype");
  lines.push("- [ ] Tone is consistently " + tLabel + " throughout");
  lines.push("- [ ] Vocabulary follows " + vLabel + " guidelines");
  lines.push("- [ ] Sentence structure matches " + sLabel + " pattern");
  lines.push("- [ ] Cultural context is respected (" + cLabel + ")");
  lines.push("- [ ] Platform adaptation addresses " + pLabel + " best practices");
  if (emotionalTriggers.length > 0) {
    for (const etId of emotionalTriggers) {
      const label = options.emotionalTriggers.find(o => o.id === etId)?.title || etId;
      lines.push(`- [ ] ${label} emotional trigger is effectively activated`);
    }
  }
  lines.push("- [ ] Voice evolution strategy (" + evLabel + ") is followed");
  lines.push("- [ ] All copy passes brand voice review");
  lines.push("");

  lines.push("## Performance Metrics");
  lines.push("");
  lines.push("| Metric | Target | Measurement");
  lines.push("|--------|--------|-----------");
  lines.push("| Brand Recall | +25% within 6 months | Surveys, assisted recall tests");
  lines.push("| Voice Consistency | <10% off-brand content | Monthly content audit");
  lines.push("| Engagement Rate | +15% vs baseline | Per-platform analytics");
  lines.push("| Audience Sentiment | >80% positive | Social listening tools");
  lines.push("| Content Efficiency | -20% revision time | Editorial workflow tracking");
  lines.push("");

  lines.push("## Recommendations");
  lines.push("");
  if (archetype === "ruler" || archetype === "sage") {
    lines.push("- **Authority Building**: Publish industry reports and whitepapers to reinforce your " + aLabel + " positioning.");
  }
  if (archetype === "outlaw" || archetype === "explorer") {
    lines.push("- **Differentiation**: Lean into your " + aLabel + " edge to stand out from competitors with safer brand voices.");
  }
  if (emotionalTriggers.length > 2) {
    lines.push("- **Trigger Balance**: Avoid stacking too many emotional triggers in a single piece. Let one or two lead per message.");
  }
  if (voiceEvolution === "ai-assisted") {
    lines.push("- **AI Guardrails**: Define strict content boundaries and review AI-generated copy before publishing.");
  }
  if (platformAdaptation === "Link" || platformAdaptation === "blog") {
    lines.push("- **Thought Leadership**: Invest in long-form content that showcases your " + aLabel + " archetype and " + tLabel + " tone.");
  }
  lines.push("- **Documentation**: Maintain a living brand voice guide accessible to all content creators.");
  lines.push("- **Training**: Conduct brand voice workshops for every new team member and agency partner.");
  lines.push("- **Audit**: Perform a quarterly brand voice audit across all channels with a scoring rubric.");
  lines.push("- **Evolution**: Revisit these selections annually as your brand matures and market conditions shift.");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Brand Voice Identity Generator_");

  return lines.join("\n");
}

export default function BrandVoicePage() {
  return (
    <ToolShell
      title="Brand Voice Identity Gen"
      steps={[
        { id: 1, label: "Archetype", component: (p) => (
          <GenericStep {...p} title="Brand Archetype" description="What personality archetype defines your brand?" options={options.archetype} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="archetype" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Tone", component: (p) => (
          <GenericStep {...p} title="Tone Range" description="What tone should your brand communicate in?" options={options.tone} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="tone" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Vocabulary", component: (p) => (
          <GenericStep {...p} title="Vocabulary Style" description="What vocabulary level fits your brand?" options={options.vocabulary} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="vocabulary" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Structure", component: (p) => (
          <GenericStep {...p} title="Sentence Structure" description="How should your sentences be constructed?" options={options.sentenceStructure} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="sentenceStructure" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Culture", component: (p) => (
          <GenericStep {...p} title="Cultural Context" description="What cultural lens should your brand use?" options={options.culturalContext} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="culturalContext" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Platform", component: (p) => (
          <GenericStep {...p} title="Platform Adaptation" description="Which platform will this voice target?" options={options.platformAdaptation} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="platformAdaptation" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Emotions", component: (p) => (
          <GenericStep {...p} title="Emotional Triggers" description="What emotions should your brand evoke?" options={options.emotionalTriggers} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="emotionalTriggers" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Evolution", component: (p) => (
          <GenericStep {...p} title="Voice Evolution" description="How should your voice change over time?" options={options.voiceEvolution} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="voiceEvolution" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}










