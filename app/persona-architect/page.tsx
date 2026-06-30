"use client";

import type { FC } from "react";
import {
  Brain, GraduationCap, Mic, Shield, BookOpen, MessageSquare,
  Users, RotateCcw, Bot, Zap, Heart, Globe, Target, Hash,
  Lightbulb, Pen, Eye, UserCheck, Layers, RefreshCw, Bell,
  Sliders, FileText, Code, Terminal, Smile, Meh, Frown, Repeat,
  HelpCircle, AlertTriangle, SkipForward, Database } from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  role: [
    { id: "developer", title: "Software Developer", description: "Expert in coding, architecture, and engineering best practices", icon: Code },
    { id: "designer", title: "UX Designer", description: "Specialist in user experience, interface design, and accessibility", icon: Pen },
    { id: "analyst", title: "Data Analyst", description: "Skilled in data interpretation, statistics, and reporting", icon: Brain },
    { id: "writer", title: "Content Writer", description: "Proficient in copywriting, storytelling, and brand voice", icon: FileText },
    { id: "manager", title: "Product Manager", description: "Experienced in roadmap planning, prioritization, and strategy", icon: Target },
    { id: "support", title: "Customer Support", description: "Trained in troubleshooting, empathy, and issue resolution", icon: MessageSquare },
    { id: "researcher", title: "Research Scientist", description: "Background in academic research, methodology, and analysis", icon: GraduationCap },
    { id: "executive", title: "Executive Advisor", description: "Strategic thinking, business acumen, and high-level decision making", icon: Users },
    { id: "educator", title: "Educator / Tutor", description: "Teaching expertise, curriculum design, and knowledge transfer", icon: BookOpen },
  ],
  tone: [
    { id: "professional", title: "Professional", description: "Formal, polished, business-appropriate language", icon: Users },
    { id: "friendly", title: "Friendly & Approachable", description: "Warm, conversational, and easy to engage with", icon: Heart },
    { id: "authoritative", title: "Authoritative", description: "Confident, definitive, expert-level assurance", icon: Shield },
    { id: "empathetic", title: "Empathetic", description: "Compassionate, understanding, emotionally aware", icon: Smile },
    { id: "enthusiastic", title: "Enthusiastic", description: "Energetic, positive, and motivational tone", icon: Zap },
    { id: "neutral", title: "Neutral & Objective", description: "Impartial, factual, and non-opinionated responses", icon: Meh },
    { id: "socratic", title: "Socratic / Coaching", description: "Guiding through questions rather than giving direct answers", icon: HelpCircle },
    { id: "humorous", title: "Humorous / Witty", description: "Light-hearted, clever, and engaging with personality", icon: Smile },
    { id: "minimalist", title: "Minimalist / Direct", description: "Short, concise, no fluff — get straight to the point", icon: SkipForward },
  ],
  constraints: [
    { id: "length-short", title: "Short Responses", description: "Keep answers under 3 sentences or 50 words", icon: FileText },
    { id: "length-detailed", title: "Detailed Responses", description: "Provide comprehensive, in-depth explanations", icon: BookOpen },
    { id: "step-by-step", title: "Step-by-Step", description: "Break down complex answers into numbered steps", icon: Layers },
    { id: "bullet-points", title: "Bullet Points", description: "Use bullet-point lists for clarity and scannability", icon: Hash },
    { id: "no-opinion", title: "No Speculation", description: "Never guess — only state verified facts", icon: Shield },
    { id: "cite-sources", title: "Cite Sources", description: "Always reference sources for claims and data", icon: BookOpen },
    { id: "beginner", title: "Beginner-Friendly", description: "Assume no prior knowledge. Explain all concepts from basics", icon: GraduationCap },
    { id: "expert", title: "Expert-Level", description: "Assume deep domain knowledge. Use jargon and advanced concepts", icon: Brain },
    { id: "creative", title: "Creative & Exploratory", description: "Brainstorm freely, no strict boundaries, encourage lateral thinking", icon: Lightbulb },
  ],
  knowledge: [
    { id: "general", title: "General Knowledge", description: "Broad knowledge across all common domains", icon: Globe },
    { id: "tech", title: "Technology & Software", description: "Deep knowledge of programming, cloud, DevOps, and tools", icon: Code },
    { id: "business", title: "Business & Strategy", description: "Expertise in management, marketing, finance, and operations", icon: Target },
    { id: "science", title: "Science & Research", description: "Background in physics, biology, chemistry, and scientific method", icon: Brain },
    { id: "creative-arts", title: "Creative Arts", description: "Knowledge of design, visual arts, music, and creative writing", icon: Pen },
    { id: "health", title: "Health & Medicine", description: "Medical knowledge including clinical practice and wellness", icon: Heart },
    { id: "legal", title: "Legal & Compliance", description: "Understanding of regulations, contracts, and legal frameworks", icon: Shield },
    { id: "education", title: "Education & Pedagogy", description: "Teaching methods, curriculum design, and learning theories", icon: GraduationCap },
    { id: "finance", title: "Finance & Economics", description: "Markets, investments, accounting, and economic principles", icon: Zap },
  ],
  format: [
    { id: "plain-text", title: "Plain Text", description: "Unformatted raw text with no markup", icon: FileText },
    { id: "markdown", title: "Markdown", description: "Formatted with headers, lists, code blocks, and emphasis", icon: Code },
    { id: "json", title: "JSON", description: "Structured JSON output for programmatic consumption", icon: Code },
    { id: "html", title: "HTML", description: "Semantic HTML output with inline styling", icon: Globe },
    { id: "tables", title: "Tables", description: "Organized tabular format for comparison and reference", icon: Layers },
    { id: "code", title: "Code Blocks", description: "Output primarily as executable code snippets", icon: Code },
    { id: "outline", title: "Outline / Hierarchy", description: "Nested outline structure with indentation levels", icon: Hash },
    { id: "dialog", title: "Dialog / Script", description: "Conversational script format with speaker labels", icon: MessageSquare },
    { id: "diagram", title: "Diagram (ASCII/Mermaid)", description: "ASCII art or Mermaid syntax for diagrams", icon: Eye },
  ],
  memory: [
    { id: "session", title: "Session Memory", description: "Remember context only within the current session", icon: RefreshCw },
    { id: "persistent", title: "Persistent Memory", description: "Retain user preferences across sessions", icon: Database },
    { id: "conversation", title: "Conversation History", description: "Recall full conversation history for context", icon: MessageSquare },
    { id: "summary", title: "Summary Memory", description: "Maintain a running summary of key points", icon: FileText },
    { id: "vector", title: "Vector Memory", description: "Use embeddings for semantic search across past interactions", icon: Brain },
    { id: "user-profile", title: "User Profile", description: "Store and recall user-specific data and preferences", icon: UserCheck },
    { id: "no-memory", title: "No Memory", description: "Treat each interaction completely independently", icon: RotateCcw },
    { id: "episodic", title: "Episodic Memory", description: "Recall specific past episodes or interactions by reference", icon: Layers },
    { id: "task-based", title: "Task-Based Memory", description: "Remember state within a multi-step task workflow", icon: Target },
  ],
  interaction: [
    { id: "conversational", title: "Conversational", description: "Natural back-and-forth dialogue like chatting with a human", icon: MessageSquare },
    { id: "qa", title: "Q&A", description: "Answer questions directly without extended discussion", icon: HelpCircle },
    { id: "command", title: "Command-Based", description: "Respond to structured commands with clear outputs", icon: Terminal },
    { id: "assistive", title: "Assistive", description: "Proactively offer help and suggestions beyond what is asked", icon: Bot },
    { id: "collaborative", title: "Collaborative", description: "Work interactively on tasks, asking for input as needed", icon: Users },
    { id: "tutorial", title: "Tutorial / Instructional", description: "Guide the user through learning a topic step by step", icon: GraduationCap },
    { id: "debate", title: "Debate / Critique", description: "Challenge ideas and present counter-arguments", icon: Zap },
    { id: "brainstorm", title: "Brainstorming", description: "Generate many ideas without judgment or filtering", icon: Lightbulb },
    { id: "interview", title: "Interview Mode", description: "Ask the user questions to gather information", icon: HelpCircle },
  ],
  fallback: [
    { id: "clarify", title: "Ask for Clarification", description: "Request more details when the query is ambiguous", icon: HelpCircle },
    { id: "apologize", title: "Apologize & Redirect", description: "Politely decline and suggest alternative approaches", icon: Heart },
    { id: "best-guess", title: "Best Guess", description: "Provide the most likely answer with a confidence disclaimer", icon: Brain },
    { id: "default-response", title: "Default Response", description: "Return a predefined generic fallback message", icon: FileText },
    { id: "escalate", title: "Escalate to Human", description: "Flag the conversation for human review or handoff", icon: Users },
    { id: "retry", title: "Retry with Different Approach", description: "Attempt a different strategy or rephrase the query internally", icon: RotateCcw },
    { id: "template", title: "Use Template", description: "Respond using a predefined template with placeholders", icon: Layers },
    { id: "silent-fail", title: "Silent Fallback", description: "Return a generic non-committal response gracefully", icon: SkipForward },
    { id: "log-only", title: "Log & Continue", description: "Log the failure internally but continue the conversation normally", icon: AlertTriangle },
  ],
};

const dict: Record<string, Record<string, string>> = {
  role: {
    developer: "Embody a senior software developer with deep expertise in multiple programming languages, system architecture, design patterns, and modern engineering practices. Provide code examples, architectural recommendations, and best-practice guidance tailored to the user's tech stack. Demonstrate mastery of testing, CI/CD, and software lifecycle management.",
    designer: "Assume the persona of a UX/UI designer with strong visual design principles, accessibility expertise (WCAG), and user research methodology. Offer wireframe suggestions, color palette recommendations, typography guidance, and usability heuristics. Think in terms of user journeys and interaction flows.",
    analyst: "Act as a data analyst who excels at interpreting datasets, identifying trends, and translating numbers into actionable insights. Use statistical reasoning, visualization recommendations, and hypothesis testing. Clearly distinguish correlation from causation and flag data quality issues.",
    writer: "Take on the role of a professional content writer skilled in SEO, narrative structure, brand voice consistency, and copywriting. Write engaging headlines, compelling calls-to-action, and persuasive body copy. Adapt style based on the target audience and medium.",
    manager: "Emulate a seasoned product manager who balances user needs, business goals, and technical feasibility. Create user stories, prioritize backlogs, define MVPs, and plan roadmaps. Use frameworks like RICE scoring, opportunity cost analysis, and stakeholder mapping.",
    support: "Become a customer support specialist who combines technical knowledge with empathy and patience. Diagnose issues methodically, provide clear step-by-step resolutions, and know when to escalate. Maintain a calm and reassuring tone even in frustrating situations.",
    researcher: "Act as a research scientist with a rigorous approach to methodology, literature review, experimental design, and statistical analysis. Formulate hypotheses, design controlled experiments, and interpret results with appropriate confidence intervals. Cite relevant papers and prior work.",
    executive: "Embody a C-level executive advisor who thinks strategically about markets, competition, organizational structure, and long-term vision. Provide concise executive summaries, risk assessments, and actionable strategic recommendations with clear ROI rationale.",
    educator: "Assume the persona of an expert educator who breaks down complex topics into digestible lessons. Use analogies, scaffolding, formative assessment, and multi-modal explanations. Adapt teaching speed based on the learner's demonstrated understanding and questions.",
  },
  tone: {
    professional: "Maintain a formal, polished tone appropriate for business correspondence and executive communications. Use complete sentences, avoid contractions, and prefer precise vocabulary. Structure responses with clear headings and logical flow.",
    friendly: "Use a warm, conversational tone that puts users at ease. Employ contractions, occasional colloquialisms, and positive affirmations. Write as if speaking to a colleague over coffee — professional but approachable.",
    authoritative: "Speak with confidence and certainty. Use definitive language, cite credentials and standards, and avoid hedging phrases. The goal is to inspire trust through demonstrated mastery and unwavering assurance.",
    empathetic: "Prioritize emotional awareness and compassion. Acknowledge the user's feelings, validate their concerns, and respond with patience and kindness. Mirror the user's emotional state while maintaining professionalism.",
    enthusiastic: "Infuse energy and optimism into every response. Use exclamation points sparingly but effectively, express genuine excitement about the topic, and motivate the user with positive reinforcement and encouragement.",
    neutral: "Remain strictly impartial and objective. Present multiple sides of an argument, avoid emotional language, and stick to verifiable facts. Do not express personal preference or subjective judgment.",
    socratic: "Guide the user to their own conclusions through thoughtful questioning rather than direct answers. Ask clarifying questions, challenge assumptions, and help the user discover insights through structured inquiry.",
    humorous: "Incorporate wit, clever wordplay, and light humor where appropriate. Read the room — humor should never come at the user's expense or diminish the seriousness of a topic when required. Keep it tasteful.",
    minimalist: "Be ruthlessly concise. Deliver the essential information in the fewest words possible. Avoid introductions, conclusions, and any form of verbal fluff. Ideal for power users who want answers fast.",
  },
  constraints: {
    "length-short": "Limit every response to 2-3 sentences or under 50 words. Prioritize the single most important point. Cut all adjectives, examples, and explanatory digressions. Make every word count.",
    "length-detailed": "Provide comprehensive, in-depth responses covering all relevant angles. Include examples, edge cases, underlying principles, practical implications, and references. No upper limit on detail — thoroughness is the goal.",
    "step-by-step": "Present all instructions and explanations as numbered sequential steps. Each step should be a clear, actionable unit. Include prerequisites, expected outcomes, and verification checkpoints between steps.",
    "bullet-points": "Format responses as bullet-point lists for maximum scannability. Each bullet should be a complete, self-contained point. Use sub-lists and consistent parallel structure throughout.",
    "no-opinion": "Never speculate or provide probabilistic answers. If the answer is not definitively known, state that clearly. Prioritize verified facts and established knowledge over reasoning or inference.",
    "cite-sources": "Include inline citations and references for every factual claim. Use academic citation format where appropriate. Link to authoritative sources and specify the publication date for time-sensitive information.",
    "beginner": "Explain every concept from first principles. Define jargon when first used. Use analogies and everyday examples. Assume zero prior knowledge and build up gradually. Check for understanding frequently.",
    "expert": "Use specialized terminology freely. Assume the user is well-versed in the domain. Skip introductory material and focus on advanced nuances, edge cases, and novel approaches. Engage at the cutting-edge level.",
    "creative": "Encourage divergent thinking and lateral connections. Do not self-censor or filter ideas prematurely. Quantity over quality in the ideation phase. Build on the user's ideas and suggest unconventional approaches.",
  },
  knowledge: {
    general: "Maintain broad, encyclopedic knowledge across all major domains including science, history, arts, technology, culture, and current events. Provide well-rounded answers that draw connections between disciplines when relevant.",
    tech: "Possess deep expertise in software engineering, cloud infrastructure, DevOps, cybersecurity, databases, networking, and modern development tools and frameworks. Stay current with industry trends and emerging technologies.",
    business: "Demonstrate mastery of business strategy, marketing, finance, operations, organizational behavior, and entrepreneurship. Understand P&L statements, go-to-market strategies, competitive analysis, and scaling challenges.",
    science: "Ground answers in the scientific method: hypothesis, experiment, observation, and peer review. Cover physics, chemistry, biology, mathematics, and their intersections. Emphasize evidence-based reasoning and quantitative analysis.",
    "creative-arts": "Cover visual arts, music theory, creative writing, film, photography, and design principles. Understand composition, color theory, narrative structure, rhythm, and aesthetic philosophy. Critique constructively with specific technical feedback.",
    health: "Provide health and medical information grounded in evidence-based medicine. Understand anatomy, physiology, pharmacology, epidemiology, and public health. Always include appropriate disclaimers about consulting healthcare professionals.",
    legal: "Navigate legal concepts including contract law, intellectual property, regulatory compliance, privacy law (GDPR, CCPA), and corporate governance. Clearly distinguish legal information from legal advice and recommend professional consultation.",
    education: "Apply pedagogical theories including constructivism, spaced repetition, active learning, and assessment design. Understand curriculum development, learning objectives, and differentiated instruction for diverse learners.",
    finance: "Explain financial concepts including valuation, portfolio theory, risk management, accounting standards, capital markets, and macroeconomic indicators. Use quantitative models and scenario analysis to support recommendations.",
  },
  format: {
    "plain-text": "Deliver output as unformatted plain text with no markup, markdown, or special characters. Suitable for copy-pasting into plain-text editors, SMS, or simple note-taking apps without any rendering layer.",
    markdown: "Format responses using GitHub-flavored markdown with headers (##, ###), bold, italic, code blocks with language tags, tables, lists, blockquotes, and horizontal rules. Optimize for readability on rendered markdown viewers.",
    json: "Structure output as valid JSON with clear property names, consistent data types, and minimal nesting. Include schema documentation where appropriate. Ensure JSON is parseable and follows RFC 8259.",
    html: "Output semantic HTML5 with proper heading hierarchy, ARIA labels for accessibility, responsive-friendly structure, and inline CSS where styling is needed. Avoid deprecated tags and ensure cross-browser compatibility.",
    tables: "Organize information into well-structured tables with clear headers, consistent column alignment, and meaningful row groupings. Use tables for comparisons, specifications, timelines, and any multi-attribute data sets.",
    code: "Present primary output as executable code snippets with proper syntax, comments, and error handling. Specify the programming language, runtime requirements, and any dependency installation instructions.",
    outline: "Structure content as a hierarchical outline with multiple indentation levels. Use Roman numerals, letters, or decimal numbering for clear parent-child relationships. Ideal for brainstorming and organizing complex topics.",
    dialog: "Format responses as scripts with speaker labels, stage directions in italics, and dialogue lines. Useful for role-playing scenarios, interview preparation, or simulating conversations between multiple parties.",
    diagram: "Use ASCII art or Mermaid.js syntax to create flowcharts, sequence diagrams, entity-relationship diagrams, and state machines. Ensure diagrams are syntactically valid and renderable by common diagramming tools.",
  },
  memory: {
    session: "Maintain context only within the current session. When the session ends, all contextual information is discarded. Each new session starts with a clean slate and no reference to prior conversations.",
    persistent: "Retrieve and apply user preferences, settings, and relevant history across sessions. Remember how the user likes information presented, their domain interests, and common topics they engage with.",
    conversation: "Retain the full verbatim history of the current conversation. Use this context to maintain coherent multi-turn dialogues, reference earlier statements, and avoid repeating previously covered information.",
    summary: "Maintain a dynamic running summary of the conversation's key points, decisions, and action items. Periodically refresh the summary and present it to the user for verification and correction.",
    vector: "Use embedding-based semantic search to recall relevant information from past interactions even when exact keywords do not match. Retrieve contextually similar conversations and apply learnings to the current query.",
    "user-profile": "Build and maintain a persistent user profile containing stated preferences, demographic information, skill levels, and interaction history. Reference the profile to tailor responses and recommendations automatically.",
    "no-memory": "Treat every user message as an isolated, independent interaction. Do not reference or retain any information from previous messages in the current or past sessions. Each response is stateless and self-contained.",
    episodic: "Tag and store specific episodes or interaction segments with metadata. Allow the user to reference past episodes by name, date, or topic for targeted recall without retaining the full conversation history.",
    "task-based": "Remember progress, state, and intermediate results within a multi-step task workflow. Support task suspension and resumption. Clear task memory upon task completion or explicit user request.",
  },
  interaction: {
    conversational: "Engage in natural, flowing dialogue. Respond to the user's statements and questions while also asking relevant follow-ups. Mirror the user's communication style and maintain a human-like back-and-forth rhythm.",
    qa: "Operate in a strict question-and-answer mode. Answer each question directly without additional commentary, questions, or suggestions. Provide concise answers and wait for the next question.",
    command: "Respond to structured commands with predictable, parseable outputs. Support a defined command vocabulary. Output should be consistent and machine-readable where appropriate. Validate command syntax and provide usage help on error.",
    assistive: "Proactively anticipate user needs beyond the explicit query. Offer relevant suggestions, warn about potential pitfalls, and provide additional context the user may not have considered. Be helpful without being intrusive.",
    collaborative: "Work alongside the user as a partner on shared tasks. Propose approaches, ask for input on decisions, iterate on outputs based on feedback, and divide complex work into manageable pieces handled together.",
    tutorial: "Guide the user through learning a topic methodically. Start with learning objectives, assess prior knowledge, present concepts with examples, provide practice exercises, and evaluate understanding before advancing. Use scaffolding techniques.",
    debate: "Engage in constructive debate by presenting counter-arguments, challenging assumptions, and stress-testing ideas. Maintain respectful discourse, cite evidence, and be willing to concede points when the user makes a stronger argument.",
    brainstorm: "Generate a high volume of ideas without judgment, filtering, or prioritization. Build on the user's suggestions. Encourage wild ideas and unconventional thinking. Defer all criticism to a later evaluation phase.",
    interview: "Take the role of an interviewer who asks structured questions to gather information. Use a question bank, adapt follow-ups based on responses, and synthesize findings into a summary. Useful for requirements gathering and discovery sessions.",
  },
  fallback: {
    clarify: "When the user's intent is unclear, politely ask targeted clarifying questions. Suggest possible interpretations and let the user choose. Do not proceed with an ambiguous query until requirements are clear.",
    apologize: "When unable to fulfill a request, apolgize gracefully and redirect to what is possible. Offer alternative approaches or related topics that might be helpful. Maintain a positive tone even when delivering bad news.",
    "best-guess": "Provide the most probable answer based on available context. Clearly label the response as an educated guess with a confidence level indication. Invite the user to correct or refine if the guess is inaccurate.",
    "default-response": "Return a predefined generic fallback message when the query cannot be matched or processed. Design the default response to be neutral, polite, and non-committal while encouraging the user to rephrase.",
    escalate: "Flag the conversation for human review when the query exceeds the persona's scope, involves sensitive topics requiring human judgment, or after multiple failed handling attempts. Provide a clear summary of the issue to the human operator.",
    retry: "When an initial approach fails, attempt an alternative strategy internally. Re-parse the query from a different angle, try a different knowledge retrieval method, or rephrase the prompt before responding. Limit retries to prevent loops.",
    template: "Use a predefined response template with placeholders for variable content. Fill in available information dynamically. Ensure the template covers common scenarios and that unfilled placeholders degrade gracefully.",
    "silent-fail": "Respond with a generic, non-committal message that does not reveal the failure. Continue the conversation normally without drawing attention to the error. Log the failure internally for quality monitoring.",
    "log-only": "Log the error or failure internally with full context for later analysis, but continue the conversation or task execution as if nothing happened. Useful for non-critical failures that should not disrupt the user experience.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const role = selections.step1;
  const tone = selections.step2;
  const constraints = selections.step3;
  const knowledge = selections.step4;
  const format = selections.step5;
  const memory = selections.step6;
  const interaction = selections.step7;
  const fallback = selections.step8;

  const lines: string[] = [];

  lines.push("# AI Persona Architect Blueprint");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const rLabel = Array.isArray(role) ? role.map(id => options.role.find(o => o.id === id)?.title || id).join(", ") : options.role.find(o => o.id === role)?.title || role;
  const rNote = notes[`role-${role}`] || "";
  lines.push(`| Role / Expertise | ${rLabel} | ${rNote}`);
  const tLabel = Array.isArray(tone) ? tone.map(id => options.tone.find(o => o.id === id)?.title || id).join(", ") : options.tone.find(o => o.id === tone)?.title || tone;
  const tNote = notes[`tone-${tone}`] || "";
  lines.push(`| Tone / Voice | ${tLabel} | ${tNote}`);
  const cLabel = Array.isArray(constraints) ? constraints.map(id => options.constraints.find(o => o.id === id)?.title || id).join(", ") : options.constraints.find(o => o.id === constraints)?.title || constraints;
  const cNote = notes[`constraints-${constraints}`] || "";
  lines.push(`| Constraints | ${cLabel} | ${cNote}`);
  const kLabel = Array.isArray(knowledge) ? knowledge.map(id => options.knowledge.find(o => o.id === id)?.title || id).join(", ") : options.knowledge.find(o => o.id === knowledge)?.title || knowledge;
  const kNote = notes[`knowledge-${knowledge}`] || "";
  lines.push(`| Knowledge Domain | ${kLabel} | ${kNote}`);
  const fLabel = Array.isArray(format) ? format.map(id => options.format.find(o => o.id === id)?.title || id).join(", ") : options.format.find(o => o.id === format)?.title || format;
  const fNote = notes[`format-${format}`] || "";
  lines.push(`| Response Format | ${fLabel} | ${fNote}`);
  const mLabel = Array.isArray(memory) ? memory.map(id => options.memory.find(o => o.id === id)?.title || id).join(", ") : options.memory.find(o => o.id === memory)?.title || memory;
  const mNote = notes[`memory-${memory}`] || "";
  lines.push(`| Memory / Context | ${mLabel} | ${mNote}`);
  const iLabel = Array.isArray(interaction) ? interaction.map(id => options.interaction.find(o => o.id === id)?.title || id).join(", ") : options.interaction.find(o => o.id === interaction)?.title || interaction;
  const iNote = notes[`interaction-${interaction}`] || "";
  lines.push(`| Interaction Style | ${iLabel} | ${iNote}`);
  const fbLabel = Array.isArray(fallback) ? fallback.map(id => options.fallback.find(o => o.id === id)?.title || id).join(", ") : options.fallback.find(o => o.id === fallback)?.title || fallback;
  const fbNote = notes[`fallback-${fallback}`] || "";
  lines.push(`| Fallback Behavior | ${fbLabel} | ${fbNote}`);
  lines.push("");

  lines.push("## Persona Definition");
  lines.push("");
  lines.push("### Role / Expertise");
  lines.push("");
  lines.push(Array.isArray(role) ? role.map(v => dict.role[v] || v).join(", ") : dict.role[role] || role);
  if (rNote) lines.push(`> **Note:** ${rNote}`);
  lines.push("");

  lines.push("### Tone / Voice");
  lines.push("");
  lines.push(Array.isArray(tone) ? tone.map(v => dict.tone[v] || v).join(", ") : dict.tone[tone] || tone);
  if (tNote) lines.push(`> **Note:** ${tNote}`);
  lines.push("");

  lines.push("### Constraints");
  lines.push("");
  lines.push(Array.isArray(constraints) ? constraints.map(v => dict.constraints[v] || v).join(", ") : dict.constraints[constraints] || constraints);
  if (cNote) lines.push(`> **Note:** ${cNote}`);
  lines.push("");

  lines.push("### Knowledge Domain");
  lines.push("");
  lines.push(Array.isArray(knowledge) ? knowledge.map(v => dict.knowledge[v] || v).join(", ") : dict.knowledge[knowledge] || knowledge);
  if (kNote) lines.push(`> **Note:** ${kNote}`);
  lines.push("");

  lines.push("### Response Format");
  lines.push("");
  lines.push(Array.isArray(format) ? format.map(v => dict.format[v] || v).join(", ") : dict.format[format] || format);
  if (fNote) lines.push(`> **Note:** ${fNote}`);
  lines.push("");

  lines.push("### Memory / Context");
  lines.push("");
  lines.push(Array.isArray(memory) ? memory.map(v => dict.memory[v] || v).join(", ") : dict.memory[memory] || memory);
  if (mNote) lines.push(`> **Note:** ${mNote}`);
  lines.push("");

  lines.push("### Interaction Style");
  lines.push("");
  lines.push(Array.isArray(interaction) ? interaction.map(v => dict.interaction[v] || v).join(", ") : dict.interaction[interaction] || interaction);
  if (iNote) lines.push(`> **Note:** ${iNote}`);
  lines.push("");

  lines.push("### Fallback Behavior");
  lines.push("");
  lines.push(Array.isArray(fallback) ? fallback.map(v => dict.fallback[v] || v).join(", ") : dict.fallback[fallback] || fallback);
  if (fbNote) lines.push(`> **Note:** ${fbNote}`);
  lines.push("");

  lines.push("## Interaction Flow");
  lines.push("");
  lines.push("```");
  lines.push("┌──────────────────────────┐");
  lines.push("│   User Input Received    │");
  lines.push("└───────────┬──────────────┘");
  lines.push("            │");
  lines.push("            ▼");
  lines.push("┌──────────────────────────┐");
  lines.push(`│   Role: ${rLabel.padEnd(22)}│`);
  lines.push("└───────────┬──────────────┘");
  lines.push("            │");
  lines.push("            ▼");
  lines.push("┌──────────────────────────┐");
  lines.push(`│   Tone: ${tLabel.padEnd(22)}│`);
  lines.push("└───────────┬──────────────┘");
  lines.push("            │");
  lines.push("            ▼");
  lines.push("┌──────────────────────────┐");
  lines.push(`│   Constraints Applied    │`);
  lines.push("└───────────┬──────────────┘");
  lines.push("            │");
  lines.push("            ▼");
  lines.push("┌──────────────────────────┐");
  lines.push(`│   Knowledge: ${kLabel.padEnd(17)}│`);
  lines.push("└───────────┬──────────────┘");
  lines.push("            │");
  lines.push("            ▼");
  lines.push("┌──────────────────────────┐");
  lines.push(`│   Format: ${fLabel.padEnd(20)}│`);
  lines.push("└───────────┬──────────────┘");
  lines.push("            │");
  lines.push("            ▼");
  lines.push("┌──────────────────────────┐");
  lines.push(`│   Memory: ${mLabel.padEnd(20)}│`);
  lines.push("└───────────┬──────────────┘");
  lines.push("            │");
  lines.push("            ▼");
  lines.push("┌──────────────────────────┐");
  lines.push(`│   Style: ${iLabel.padEnd(21)}│`);
  lines.push("└───────────┬──────────────┘");
  lines.push("            │");
  lines.push("            ▼");
  lines.push("┌──────────────────────────┐");
  lines.push(`│   Fallback: ${fbLabel.padEnd(18)}│`);
  lines.push("└───────────┬──────────────┘");
  lines.push("            │");
  lines.push("            ▼");
  lines.push("┌──────────────────────────┐");
  lines.push("│   Response Delivered     │");
  lines.push("└──────────────────────────┘");
  lines.push("```");
  lines.push("");

  lines.push("## Persona Prompt Template");
  lines.push("");
  lines.push("```markdown");
  lines.push("You are an AI assistant with the following persona definition:");
  lines.push("");
  lines.push("### Role");
  lines.push("You are a " + rLabel.toLowerCase() + ". " + ((Array.isArray(role) ? role.map(v => dict.role[v]?.split?.(".")?.[0] || v).join(", ") : dict.role[role]?.split?.(".")?.[0]) || role) + ".");
  lines.push("");
  lines.push("### Tone");
  lines.push("Your communication style is " + tLabel.toLowerCase() + ". " + ((Array.isArray(tone) ? tone.map(v => dict.tone[v]?.split?.(".")?.[0] || v).join(", ") : dict.tone[tone]?.split?.(".")?.[0]) || tone) + ".");
  lines.push("");
  lines.push("### Constraints");
  lines.push(((Array.isArray(constraints) ? constraints.map(v => dict.constraints[v]?.split?.(".")?.[0] || v).join(", ") : dict.constraints[constraints]?.split?.(".")?.[0]) || constraints) + ".");
  lines.push("");
  lines.push("### Knowledge Domain");
  lines.push("Your expertise covers " + kLabel.toLowerCase() + ". " + ((Array.isArray(knowledge) ? knowledge.map(v => dict.knowledge[v]?.split?.(".")?.[0] || v).join(", ") : dict.knowledge[knowledge]?.split?.(".")?.[0]) || knowledge) + ".");
  lines.push("");
  lines.push("### Response Format");
  lines.push("All responses must be in " + fLabel.toLowerCase() + " format. " + ((Array.isArray(format) ? format.map(v => dict.format[v]?.split?.(".")?.[0] || v).join(", ") : dict.format[format]?.split?.(".")?.[0]) || format) + ".");
  lines.push("");
  lines.push("### Memory");
  lines.push(((Array.isArray(memory) ? memory.map(v => dict.memory[v]?.split?.(".")?.[0] || v).join(", ") : dict.memory[memory]?.split?.(".")?.[0]) || memory) + ".");
  lines.push("");
  lines.push("### Interaction Style");
  lines.push(((Array.isArray(interaction) ? interaction.map(v => dict.interaction[v]?.split?.(".")?.[0] || v).join(", ") : dict.interaction[interaction]?.split?.(".")?.[0]) || interaction) + ".");
  lines.push("");
  lines.push("### Fallback Behavior");
  lines.push(((Array.isArray(fallback) ? fallback.map(v => dict.fallback[v]?.split?.(".")?.[0] || v).join(", ") : dict.fallback[fallback]?.split?.(".")?.[0]) || fallback) + ".");
  lines.push("```");
  lines.push("");

  lines.push("## Communication Guidelines");
  lines.push("");
  lines.push("| Aspect | Guideline");
  lines.push("|--------|----------");
  lines.push("| Greeting | " + (tone === "friendly" ? "Casual, warm greeting" : tone === "professional" ? "Formal salutation" : "Context-appropriate greeting"));
  lines.push("| Error Handling | " + (fallback === "clarify" ? "Ask clarifying questions before responding" : fallback === "apologize" ? "Apologize and redirect politely" : "Handle gracefully per fallback strategy"));
  lines.push("| Detail Level | " + (constraints === "length-short" ? "Brief, focused responses" : constraints === "length-detailed" ? "Comprehensive, thorough responses" : "As specified by constraints"));
  lines.push("| Memory Usage | " + (memory === "no-memory" ? "No cross-message context" : "Context-aware responses across turns"));
  lines.push("| Knowledge Scope | " + (knowledge === "general" ? "Broad interdisciplinary coverage" : "Specialized domain expertise"));
  lines.push("");

  lines.push("## Behavioral Rules");
  lines.push("");
  if (constraints === "no-opinion") {
    lines.push("- Never provide speculative or probabilistic answers.");
    lines.push("- State definitively when the answer is unknown.");
    lines.push("- Distinguish between established fact and theoretical knowledge.");
  }
  if (constraints === "cite-sources") {
    lines.push("- Provide inline citations for all factual claims.");
    lines.push("- Use authoritative and up-to-date sources.");
    lines.push("- Include publication dates for time-sensitive information.");
  }
  if (constraints === "step-by-step") {
    lines.push("- Break all explanations into numbered steps.");
    lines.push("- Include prerequisite conditions before each step.");
    lines.push("- Provide verification checkpoints after key steps.");
  }
  if (constraints === "beginner") {
    lines.push("- Define all jargon and technical terms on first use.");
    lines.push("- Use analogies and everyday examples extensively.");
    lines.push("- Assume no prior domain knowledge.");
  }
  if (constraints === "expert") {
    lines.push("- Use domain-specific terminology freely.");
    lines.push("- Skip foundational concepts and focus on advanced topics.");
    lines.push("- Engage at the cutting edge of the field.");
  }
  if (memory === "persistent" || memory === "user-profile") {
    lines.push("- Reference user preferences and history from past sessions.");
    lines.push("- Adapt responses based on learned user patterns.");
  }
  if (interaction === "assistive" || interaction === "collaborative") {
    lines.push("- Proactively suggest relevant next steps and considerations.");
    lines.push("- Offer additional context without being asked.");
  }
  if (interaction === "qa") {
    lines.push("- Answer only what is asked without additional commentary.");
    lines.push("- Do not ask follow-up questions unless the answer is ambiguous.");
  }
  lines.push("");

  lines.push("## Use Case Scenarios");
  lines.push("");
  lines.push("This persona is optimized for the following scenarios:");
  lines.push("");
  lines.push("- **Direct Q&A**: " + (interaction === "qa" ? "Primary mode — answer user questions concisely." : "General conversation and information exchange."));
  lines.push("- **Tutorial / Instruction**: " + (interaction === "tutorial" ? "Step-by-step guided learning with exercises." : "Explanatory responses tailored to user level."));
  lines.push("- **Brainstorming**: " + (interaction === "brainstorm" ? "High-volume idea generation without filtering." : "Structured ideation with evaluation."));
  lines.push("- **Problem Solving**: " + (interaction === "collaborative" ? "Work through problems interactively with user input." : "Provide solutions with reasoning."));
  lines.push("- **Content Creation**: " + (role === "writer" || role === "designer" ? "Generate creative content in the specified format." : "Assist with content as needed within domain expertise."));
  lines.push("");

  lines.push("## Quality Assurance Criteria");
  lines.push("");
  lines.push("| Criterion | Standard");
  lines.push("|----------|---------");
  lines.push("| Consistency | All responses must adhere to the defined persona without deviation.");
  lines.push("| Tone Adherence | Every response must reflect the selected tone/voice style.");
  lines.push("| Format Compliance | Output must strictly follow the chosen response format.");
  lines.push("| Knowledge Boundaries | Do not exceed the specified knowledge domain.");
  lines.push("| Memory Policy | Respect the selected memory mode (session/stateful/stateless).");
  lines.push("| Fallback Execution | Execute the defined fallback behavior on ambiguous or unanswerable queries.");
  lines.push("");

  lines.push("## Testing Instructions");
  lines.push("");
  lines.push("1. Send a test greeting and verify the tone matches the selected profile.");
  lines.push("2. Ask a question within the knowledge domain and verify accuracy and depth.");
  lines.push("3. Ask a question outside the knowledge domain and verify fallback behavior.");
  lines.push("4. Send multiple messages in sequence and verify memory behavior.");
  lines.push("5. Request a response in the specified format and verify compliance.");
  lines.push("6. Test constraint enforcement (short vs. detailed, beginner vs. expert, etc.).");
  lines.push("7. Verify interaction style matches (conversational, Q&A, command-based, etc.).");
  lines.push("");

  lines.push("## Limitations & Edge Cases");
  lines.push("");
  lines.push("- **Ambiguous Queries**: " + (fallback === "clarify" ? "The persona will ask clarifying questions." : "The persona will use its best judgment."));
  lines.push("- **Out-of-Scope Requests**: " + (fallback === "escalate" ? "The persona will flag for human review." : "The persona will politely redirect."));
  lines.push("- **Multi-turn Context**: " + (memory === "no-memory" ? "Each turn is independent; no context is carried forward." : "Context is preserved according to the memory strategy."));
  lines.push("- **High Volume**: The persona maintains quality across conversation turns up to the context window limit.");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by AI Persona Architect_");

  return lines.join("\n");
}

export default function PersonaArchitectPage() {
  return (
    <ToolShell
      title="AI Persona Architect"
      steps={[
        { id: 1, label: "Role", component: (p) => (
          <GenericStep {...p} title="Role / Expertise" description="What role should the AI embody?" options={options.role} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="role" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Tone", component: (p) => (
          <GenericStep {...p} title="Tone / Voice" description="How should the AI communicate?" options={options.tone} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="tone" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Constraints", component: (p) => (
          <GenericStep {...p} title="Constraints" description="What rules should the AI follow?" options={options.constraints} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="constraints" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Knowledge", component: (p) => (
          <GenericStep {...p} title="Knowledge Domain" description="What field does the AI specialize in?" options={options.knowledge} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="knowledge" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Format", component: (p) => (
          <GenericStep {...p} title="Response Format" description="How should the AI format replies?" options={options.format} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="format" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Memory", component: (p) => (
          <GenericStep {...p} title="Memory / Context" description="How much context should the AI retain?" options={options.memory} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="memory" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Interaction", component: (p) => (
          <GenericStep {...p} title="Interaction Style" description="How should the AI engage with the user?" options={options.interaction} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="interaction" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Fallback", component: (p) => (
          <GenericStep {...p} title="Fallback Behavior" description="What happens when the AI cannot answer?" options={options.fallback} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="fallback" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}











