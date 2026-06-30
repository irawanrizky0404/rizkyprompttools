"use client";

import type { FC } from "react";
import {
  Smartphone, Camera, Video, Film, BookOpen, Music, ShoppingBag,
  MessageSquare, Lightbulb, Search, Zap, AlertTriangle, Heart, ThumbsUp,
  MousePointerClick, Play, Globe, BookMarked,
  Package, Mic, Sparkles, Sun, Moon, Volume2, Headphones, Radio, Sliders,
  Monitor, Scissors, PenTool, Layers, Clock, Timer, Image, Palette, Bell, Briefcase,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  platform: [
    { id: "tiktok", title: "TikTok", description: "Short vertical video, fast-paced, trend-driven", icon: Smartphone },
    { id: "instagram-reels", title: "Instagram Reels", description: "Creative short-form video with editing tools", icon: Camera },
    { id: "youtube-long", title: "YouTube Long-form", description: "In-depth video, 8+ minutes, high retention", icon: Video },
    { id: "youtube-shorts", title: "YouTube Shorts", description: "Vertical short video, under 60 seconds", icon: Film },
    { id: "linkedin-video", title: "LinkedIn Video", description: "Professional video for B2B audiences on LinkedIn", icon: Briefcase },
    { id: "twitter-video", title: "X / Twitter Video", description: "Short-form video optimized for X timeline", icon: MessageSquare },
    { id: "facebook-video", title: "Facebook Video", description: "Shareable video leveraging Facebook's algorithm", icon: Heart },
    { id: "podcast-video", title: "Podcast Video", description: "Long-form conversational video for podcast distribution", icon: Mic },
  ],
  category: [
    { id: "educational", title: "Educational", description: "Teach a concept, skill, or explain a topic", icon: BookOpen },
    { id: "entertainment", title: "Entertainment", description: "Fun, skits, comedy, or engaging challenges", icon: Music },
    { id: "product-review", title: "Product Review", description: "Honest review or unboxing of a product", icon: ShoppingBag },
    { id: "storytime", title: "Storytime", description: "Personal story or narrative storytelling", icon: MessageSquare },
    { id: "tips-tricks", title: "Tips and Tricks", description: "Quick actionable tips for a specific topic", icon: Lightbulb },
    { id: "tutorial-howto", title: "Tutorial / How-To", description: "Step-by-step guide teaching a practical skill", icon: BookMarked },
    { id: "unboxing", title: "Unboxing", description: "First-impression unboxing and initial setup", icon: Package },
    { id: "interview", title: "Interview", description: "Conversational Q&A with a guest or expert", icon: Mic },
  ],
  hook: [
    { id: "curiosity-gap", title: "Curiosity Gap", description: "Pose a question or tease info to spark curiosity", icon: Search },
    { id: "surprising-fact", title: "Surprising Fact", description: "Open with a shocking or unexpected statistic", icon: Zap },
    { id: "controversial", title: "Controversial", description: "Take a bold stance or challenge common beliefs", icon: AlertTriangle },
    { id: "highly-relatable", title: "Highly Relatable", description: "Describe a universal experience the audience shares", icon: Heart },
    { id: "emotional-story", title: "Emotional Story", description: "Open with a raw, vulnerable, or touching personal story", icon: Film },
    { id: "problem-solution", title: "Problem → Solution", description: "State a painful problem then promise a solution", icon: Lightbulb },
    { id: "bold-prediction", title: "Bold Prediction", description: "Make a confident forecast about the future", icon: Globe },
    { id: "question-rhetorical", title: "Rhetorical Question", description: "Pose a thought-provoking question the audience answers silently", icon: MessageSquare },
  ],
  cta: [
    { id: "like-follow", title: "Like and Follow", description: "Encourage engagement and build follower base", icon: ThumbsUp },
    { id: "click-link", title: "Click Link in Bio", description: "Drive traffic to external landing page or store", icon: MousePointerClick },
    { id: "watch-part-2", title: "Watch Part 2", description: "Create a series and drive watch time across videos", icon: Play },
    { id: "comment-discuss", title: "Comment and Discuss", description: "Prompt viewers to share their opinion in comments", icon: MessageSquare },
    { id: "share-tag", title: "Share and Tag Friends", description: "Encourage sharing with someone who needs to see it", icon: Heart },
    { id: "save-bookmark", title: "Save / Bookmark", description: "Ask viewers to save for later reference", icon: BookMarked },
    { id: "subscribe-notify", title: "Subscribe with Notifications", description: "Grow subscriber base with bell notification", icon: Bell },
    { id: "visit-website", title: "Visit Website", description: "Direct traffic to a specific URL or landing page", icon: Globe },
  ],
  tone: [
    { id: "energetic", title: "Energetic & High-Energy", description: "Fast talking, excited voice, dynamic pacing", icon: Zap },
    { id: "professional", title: "Professional & Authoritative", description: "Polished, credible, expert-like delivery", icon: Monitor },
    { id: "humorous", title: "Humorous & Witty", description: "Comedic timing, punchlines, light-hearted jokes", icon: Sun },
    { id: "dramatic", title: "Dramatic & Cinematic", description: "Serious, intense, emotional, movie-like narration", icon: Film },
    { id: "educational-calm", title: "Educational (Calm)", description: "Patient, explanatory, step-by-step with reassuring tone", icon: BookOpen },
    { id: "inspirational", title: "Inspirational & Motivational", description: "Uplifting, empowering, call to greatness", icon: Sparkles },
    { id: "conversational", title: "Conversational & Casual", description: "Like talking to a friend, natural speech pattern", icon: MessageSquare },
    { id: "suspenseful", title: "Suspenseful & Intriguing", description: "Building tension, mysterious, keeps viewer guessing", icon: Moon },
  ],
  length: [
    { id: "under-15s", title: "Under 15 Seconds", description: "Micro-content for maximum retention", icon: Timer },
    { id: "15-30s", title: "15–30 Seconds", description: "Standard short-form sweet spot", icon: Timer },
    { id: "30-60s", title: "30–60 Seconds", description: "Extended short-form with deeper content", icon: Timer },
    { id: "1-3min", title: "1–3 Minutes", description: "Medium-form: short story or tutorial", icon: Clock },
    { id: "3-5min", title: "3–5 Minutes", description: "Standard tutorial or review length", icon: Clock },
    { id: "5-10min", title: "5–10 Minutes", description: "In-depth guide or detailed review", icon: Clock },
    { id: "10-20min", title: "10–20 Minutes", description: "Long-form deep dive or full tutorial", icon: Clock },
    { id: "20min-plus", title: "20+ Minutes", description: "Extended content (podcast, documentary)", icon: Clock },
  ],
  musicSfx: [
    { id: "trending-audio", title: "Trending Audio", description: "Use current viral sounds from the platform", icon: Music },
    { id: "royalty-free", title: "Royalty-Free Library", description: "Pre-licensed music from stock libraries", icon: Headphones },
    { id: "custom-composed", title: "Custom Composed", description: "Original score composed for the video", icon: PenTool },
    { id: "no-music", title: "No Music (Voice Only)", description: "Rely entirely on voiceover and natural sound", icon: Mic },
    { id: "ambient", title: "Ambient Background", description: "Subtle, atmospheric background texture", icon: Radio },
    { id: "cinematic", title: "Cinematic Score", description: "Orchestral or epic film-style soundtrack", icon: Film },
    { id: "upbeat", title: "Upbeat & Energetic", description: "Fast tempo, positive, high-energy tracks", icon: Zap },
    { id: "lo-fi", title: "Lo-Fi / Chill", description: "Relaxed, mellow beats for study/ASMR content", icon: Moon },
  ],
  visualStyle: [
    { id: "fast-cut", title: "Fast-Cut Montage", description: "Rapid cuts every 1–3 seconds for high energy", icon: Scissors },
    { id: "cinematic", title: "Cinematic", description: "Film-like shots, shallow DOF, color grading", icon: Film },
    { id: "talking-head", title: "Talking Head", description: "Direct-to-camera, face centered, minimal b-roll", icon: Camera },
    { id: "screen-record", title: "Screen Recording", description: "Screen capture with cursor highlights and zooms", icon: Monitor },
    { id: "animation", title: "Animation / Motion Graphics", description: "Animated text, graphs, characters, explainer style", icon: Palette },
    { id: "stop-motion", title: "Stop Motion", description: "Frame-by-frame physical animation technique", icon: Layers },
    { id: "user-generated", title: "User-Generated Style", description: "Authentic, handheld, DIY aesthetic like UGC", icon: Smartphone },
    { id: "asmr", title: "ASMR / Close-Up", description: "Close-up macro shots, precise sounds, sensory detail", icon: Mic },
  ],
};

const dict: Record<string, Record<string, string>> = {
  platform: {
    tiktok: "Write a script optimized for TikTok — fast pacing, on-screen text captions, trending audio integration, hook within the first 2 seconds, and a runtime of 15–60 seconds. Use vertical 9:16 aspect ratio. Text should be bold, center-aligned with 2–3 words per frame for maximum readability.",
    "instagram-reels": "Write a script optimized for Instagram Reels — visually polished, use of Reels editing tools (transitions, effects), text overlays, and a runtime of 15–90 seconds. Include a strong visual hook and save-friendly content. IG Reels favor aesthetic appeal and trend participation.",
    "youtube-long": "Write a script for a long-form YouTube video — 8–20 minutes in length, structured with chapters, intro hook, main content with examples, and an outro with end screens. Prioritize retention and watch time. Use a narrative arc with setup, complication, and resolution.",
    "youtube-shorts": "Write a script for a YouTube Short — under 60 seconds, vertical 9:16, fast cuts, on-screen captions, and a loopable structure that encourages re-watches. Trending audio recommended. The first frame must be the most engaging as Shorts autoplay on the explore page.",
    "linkedin-video": "Write a script optimized for LinkedIn — professional tone, value-first content, soft hook that respects the B2B audience. The first 5 seconds should state the topic clearly. Keep to 60–120 seconds. End with a thought-provoking question to drive comments.",
    "twitter-video": "Write a script optimized for X (Twitter) — maximum 140 seconds, fast-paced, text-heavy captions for mute viewing. The first 2 seconds must contain the core message as videos autoplay silently. Include a strong text CTA overlay since click-through is key.",
    "facebook-video": "Write a script optimized for Facebook — emotionally engaging, relatable storytelling, captioned for silent autoplay. Native Facebook videos perform well at 2–5 minutes. Lead with an emotional hook and end with a share-worthy moment to drive virality.",
    "podcast-video": "Write a script optimized for podcast video distribution (YouTube, Spotify) — conversational, unscripted feel with a loose structure. Include intro, topic discussion with key talking points, and outro. Runtime of 20–60 minutes. Use wide shots and multiple camera angles.",
  },
  category: {
    educational: "Structure the educational script with: hook (problem statement), context (why it matters), core lesson (step-by-step or concept breakdown), example (real-world application), and key takeaway (one thing to remember). Use analogies to simplify complex topics.",
    entertainment: "Structure the entertainment script with: hook (funny moment or tease), setup (relatable scenario), punchline or twist (unexpected outcome), and call to action. Keep energy high throughout. Pace should feel effortless — short clips, quick transitions, and upbeat timing.",
    "product-review": "Structure the product review script with: hook (initial reaction), unboxing or first impressions, features overview, pros and cons, real usage demonstration, final verdict, and recommendation. Include a rating scale and a 'who is this for' section.",
    storytime: "Structure the storytime script with: hook (intriguing first line), context (background info), rising action (the conflict or challenge), climax (the turning point), resolution (how it ended), and lesson or reflection. Use vivid sensory details to immerse the viewer.",
    "tips-tricks": "Structure the tips script with: hook (the pain point), list of 3–5 tips (each with brief explanation and example), bonus tip (extra value), and a call to action to try the first tip immediately. Numbered lists work well for retention.",
    "tutorial-howto": "Structure the tutorial script with: hook (end result shown first), materials/tools list, numbered steps with timestamps, common mistakes section, and final result recap. Each step should include both the action and the expected outcome.",
    unboxing: "Structure the unboxing script with: hook (first glimpse of packaging), reveal (unboxing with genuine reactions), initial impressions (build quality, design), contents overview (everything in the box), and first-use experience (setup or test).",
    interview: "Structure the interview script with: intro (guest introduction and credibility), background (their story and expertise), key questions (5–7 prepared questions with follow-ups), rapid-fire round, and outro with guest's social handles and freebie.",
  },
  hook: {
    "curiosity-gap": "Craft a curiosity-gap hook: start with a provocative question (e.g., 'What if I told you there is a one-line CSS property that fixes layout issues instantly?') or a teaser that requires watching to resolve. Leave the answer incomplete to force engagement.",
    "surprising-fact": "Craft a surprising-fact hook: open with a statistic or fact that challenges assumptions (e.g., '90% of startups fail within the first year — but here is what the successful 10% do differently'). Use authoritative sources to build credibility.",
    controversial: "Craft a controversial hook: take a strong stance against a popular opinion (e.g., 'I have been a developer for 10 years and I think TypeScript is a waste of time. Here is why.'). Back up the stance with reasoning — the goal is discussion, not outrage.",
    "highly-relatable": "Craft a highly-relatable hook: describe a universal experience the target audience faces daily (e.g., 'You know that moment when you spend 2 hours debugging only to find a missing semicolon?'). The more specific the scenario, the more it resonates.",
    "emotional-story": "Craft an emotional-story hook: open with a raw, vulnerable moment — 'I remember sitting in my car, too afraid to go inside because I knew I had to tell my team we were out of money.' Emotional hooks build deep trust and connection instantly.",
    "problem-solution": "Craft a problem-solution hook: 'Struggling with [exact pain point]? There is a simple fix most people overlook.' State the problem in vivid, specific terms, then promise a clear solution. This targets viewers actively searching for answers.",
    "bold-prediction": "Craft a bold-prediction hook: 'By 2030, this industry will be completely unrecognizable — and most people are not ready.' Predictions create FOMO and position you as a forward-thinker. Back predictions with trend data and reasoning.",
    "question-rhetorical": "Craft a rhetorical-question hook: 'When was the last time you truly felt [emotion related to the topic]?' Rhetorical questions trigger self-reflection. The viewer answers inwardly before you even provide the response, creating engagement.",
  },
  cta: {
    "like-follow": "End the video with a direct request to like and follow. Explain the value — regular tips, weekly content, or exclusive insights — to incentivize the action. Use on-screen animation of the like button and follow icon as visual reinforcement.",
    "click-link": "End the video by directing viewers to the link in the bio or a pinned comment. Clearly state what they will get (free guide, discount code, full tutorial) and create urgency if applicable. Use a directional arrow graphic pointing to the link location.",
    "watch-part-2": "End the video by teasing the next part and asking viewers to watch Part 2. Use an end screen or annotation pointing to the next video. Create a cliffhanger — 'But there is one more thing I did not tell you...' — to drive curiosity.",
    "comment-discuss": "End with a specific, easy-to-answer question: 'Which of these three tips surprised you the most? Let me know in the comments.' The easier the question, the more responses you get. Pin your own comment with an example answer to seed the discussion.",
    "share-tag": "Ask viewers to tag someone who needs to see this: 'Tag a friend who still [does common mistake].' Make the tagging prompt specific and slightly playful. This leverages social reciprocity — the tagged person feels valued and often engages too.",
    "save-bookmark": "Ask viewers to save the video: 'Save this now so you have it when you need it.' Saving signals to the algorithm that the video is valuable, increasing reach. Pair with 'you will forget this in 10 minutes, so save it' for urgency.",
    "subscribe-notify": "Encourage subscription with notifications turned on: 'Hit subscribe and tap the bell so you do not miss the next one.' Explain the specific day/time you upload. Use the 'subscribe' visual pop-up with bell icon animation at the end frame.",
    "visit-website": "Direct viewers to a specific URL: 'Visit [website] to get the full guide / exclusive discount.' If the platform allows clickable links (YouTube, LinkedIn), hyperlink in the description. For others, say 'link in bio' with a visual arrow.",
  },
  tone: {
    energetic: "Write the script with high energy throughout. Use short sentences, exclamation points, and rapid transitions. Punchy, quick wording like 'Here is the thing — most people get this wrong.' Pace the delivery at 160–180 words per minute.",
    professional: "Write in a polished, expert tone. Use precise terminology, measured pacing, and confident statements. Avoid filler words. Structure arguments logically: claim, evidence, explanation. Speak at 140–150 words per minute with deliberate pauses.",
    humorous: "Weave humor into the script with punchlines,ironic observations, or unexpected analogies. Use setup → pause → punchline structure. Self-deprecating humor works well. Keep jokes relevant to the topic — avoid forced or offensive humor.",
    dramatic: "Write in a dramatic, cinematic style. Use descriptive language, building tension with each sentence. Slow pacing with meaningful pauses. Paint vivid mental images. Think documentary narration or movie trailer voiceover. 'In a world where...' energy.",
    "educational-calm": "Write in a calm, patient teaching style. Use phrases like 'Let us break this down' and 'Think of it this way.' Repeat key concepts. Pause after important points. Speak at 130–140 words per minute. Reassuring, never rushed. Ideal for complex topics.",
    inspirational: "Write to inspire and uplift. Use powerful, emotive language. Tell a transformation story: struggle → perseverance → triumph. End with an empowering call to action. 'You have everything you need to succeed — the only question is: will you start today?'",
    conversational: "Write as if speaking to one person over coffee. Use contractions ('I will', 'you have'), casual transitions ('So here is the thing...'), and direct address ('You might be wondering...'). Avoid scripted-sounding sentences. Leave room for natural pauses and ad-libs.",
    suspenseful: "Write with a slow build of tension. Use short, clipped sentences. Hint at something coming: 'But what I am about to tell you changes everything.' Pause for effect. Use sound design pauses. The payoff should feel earned and satisfying.",
  },
  length: {
    "under-15s": "Write an ultra-concise script. Every word must earn its place. Hook in the first character. Core message in 10 seconds. No filler, no slow buildup. One single takeaway or emotion. This format is for maximum retention and shareability.",
    "15-30s": "Write a tight script with a clear hook (first 3 seconds), body (key message or demonstration), and quick CTA (last 3 seconds). Eliminate all redundant words. Use 40–60 words total. One clear message per video — do not try to cover multiple points.",
    "30-60s": "Write a standard short-form script. Hook in first 3 seconds, context (5–10 seconds), main content (30–40 seconds), CTA (5 seconds). Ideal for one tip, one story, or one demonstration. Use on-screen captions for every spoken word to maximize retention.",
    "1-3min": "Write a medium-form script with a proper narrative arc. Hook (10 seconds), introduction (15 seconds), 3–5 key points (60–120 seconds), recap (15 seconds), and CTA (10 seconds). This length works well for tutorials, reviews, and storytelling.",
    "3-5min": "Write a comprehensive script with detailed explanations. Use chapters or timestamps. Include an intro (30 seconds), main content with 4–6 sections (3–4 minutes), and structured outro with summary and CTA (30 seconds). Can cover multiple subtopics.",
    "5-10min": "Write an in-depth script suitable for thorough exploration of a topic. Include detailed examples, case studies, demonstrations, and multiple angles. Use chapter markers. The first 60 seconds must justify the viewer's time investment up front.",
    "10-20min": "Write a deep-dive script with multiple sections, examples, and detailed explanations. Structure with clear chapters and timestamps. Include a 'why this matters' section early to secure retention. Viewer expects comprehensive, authoritative treatment of the topic.",
    "20min-plus": "Write a long-form content script suitable for documentaries, deep tutorials, or podcast episodes. Structure in acts or segments. Include a table of contents at the start. Use natural pacing with room for digressions. Prioritize watch time over density.",
  },
  musicSfx: {
    "trending-audio": "Select a currently trending audio track from the platform's music library. Align the beat drops and transitions with key moments in the script. Trending audio boosts discoverability via the platform's sound-based recommendation algorithm.",
    "royalty-free": "Select background music from royalty-free libraries (Epidemic Sound, Artlist, Musicbed). Match tempo to the pacing of the script — fast for energetic content, slow for emotional. Ensure license covers the platform and monetization needs.",
    "custom-composed": "Commission or create an original music track that matches the brand's sonic identity. Original music becomes an owned asset. Coordinate with the composer to align musical peaks with script climaxes. No licensing limitations or copyright claims.",
    "no-music": "Rely entirely on voiceover quality, natural sound, and room tone. This is ideal for ASMR, interview, and tutorial content. Invest in a high-quality microphone and sound-treated recording environment. Clean audio is critical when there is no music to mask noise.",
    ambient: "Use subtle ambient soundscapes — rain, coffee shop bustle, forest sounds — as a low-volume background layer. Ambient audio adds atmosphere without distracting from the spoken content. Keep it 20–30% of the main audio volume.",
    cinematic: "Use an orchestral or cinematic score to elevate production value. Match music to emotional beats: rising tension before the climax, swelling triumph at the resolution, minimal piano during reflective moments. Think Hans Zimmer or John Williams style.",
    upbeat: "Choose high-energy tracks with fast BPM (120–160) and driving rhythm. Upbeat music works for energetic content, motivational videos, and entertainment. Sync visual cuts to the beat for cohesive editing. Test the track against the script's pacing.",
    "lo-fi": "Use lo-fi hip hop or chill beats for a relaxed, study-friendly vibe. Lo-fi pairs well with calm educational content, coding tutorials, and ASMR-style videos. The repetitive, non-distracting nature of lo-fi encourages longer watch times.",
  },
  visualStyle: {
    "fast-cut": "Edit with rapid cuts every 1–3 seconds. Each shot should be a single sentence or even a single word. Use this style for high-energy, entertaining content. Keep the viewer's visual cortex constantly stimulated. Perfect for TikTok and Reels.",
    cinematic: "Shoot with cinematic techniques: shallow depth of field (f/1.4–2.8), anamorphic or 24fps frame rate, three-point lighting, and color grading (teal/orange LUT). Each shot should be visually intentional. Use slow pans and deliberate camera movements.",
    "talking-head": "Center the speaker in the frame, eyes slightly above center. Use a high-quality prime lens (50mm or 85mm). Background should be clean and branded but not distracting. Minimal b-roll. The speaker's energy and expression carry the entire video.",
    "screen-record": "Record the screen at high resolution (1440p or 4K) with cursor highlighting. Use zoom-in effects on important UI elements. Keep mouse movement minimal and purposeful. Add a small webcam overlay of the presenter in the corner for human connection.",
    animation: "Use motion graphics, kinetic typography, 2D/3D animation, or whiteboard-style explainers. Tools: After Effects, Manim, or Vyond. Script every visual element — what appears when, transition types, and on-screen text timing. Perfect for abstract or complex topics.",
    "stop-motion": "Use frame-by-frame physical animation with real objects. Requires a stable tripod, consistent lighting, and a lot of patience (24 frames = 1 second at 24fps). Best for product showcases, creative intros, and unique storytelling. Labor-intensive but highly shareable.",
    "user-generated": "Emulate user-generated content style: handheld camera, natural lighting (window light), authentic unscripted delivery, minor imperfections. No professional lighting or stabilizers. This style builds trust through authenticity and relatability.",
    asmr: "Use extreme close-ups with macro lenses, precise audio capture (binaural microphones), and slow, deliberate movements. Focus on satisfying sensory details — tapping, crinkling, pouring, brushing. No background music. Whisper or soft-spoken voiceover only.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const platform = selections.step1;
  const category = selections.step2;
  const hook = selections.step3;
  const ctaList: string[] = selections.step4 || [];
  const tone = selections.step5;
  const length = selections.step6;
  const musicSfx = selections.step7;
  const visualStyle = selections.step8;

  const lines: string[] = [];

  lines.push("# Viral Video Script Generator");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const platLabel = Array.isArray(platform) ? platform.map(id => options.platform.find(o => o.id === id)?.title || id).join(", ") : options.platform.find(o => o.id === platform)?.title || platform;
  lines.push(`| Platform | ${platLabel} | ${notes[`platform-${platform}`] || ""}`);
  const catLabel = Array.isArray(category) ? category.map(id => options.category.find(o => o.id === id)?.title || id).join(", ") : options.category.find(o => o.id === category)?.title || category;
  lines.push(`| Content Category | ${catLabel} | ${notes[`category-${category}`] || ""}`);
  const hookLabel = Array.isArray(hook) ? hook.map(id => options.hook.find(o => o.id === id)?.title || id).join(", ") : options.hook.find(o => o.id === hook)?.title || hook;
  lines.push(`| Hook Strategy | ${hookLabel} | ${notes[`hook-${hook}`] || ""}`);
  const ctaLabels = ctaList.map(id => options.cta.find(o => o.id === id)?.title || id).join(", ");
  lines.push(`| Call(s) to Action | ${ctaLabels || "None"} | ${ctaList.map(id => notes[`cta-${id}`] || "").filter(Boolean).join("; ")}`);
  const toneLabel = Array.isArray(tone) ? tone.map(id => options.tone.find(o => o.id === id)?.title || id).join(", ") : options.tone.find(o => o.id === tone)?.title || tone;
  lines.push(`| Delivery Tone | ${toneLabel} | ${notes[`tone-${tone}`] || ""}`);
  const lenLabel = Array.isArray(length) ? length.map(id => options.length.find(o => o.id === id)?.title || id).join(", ") : options.length.find(o => o.id === length)?.title || length;
  lines.push(`| Video Length | ${lenLabel} | ${notes[`length-${length}`] || ""}`);
  const musicLabel = Array.isArray(musicSfx) ? musicSfx.map(id => options.musicSfx.find(o => o.id === id)?.title || id).join(", ") : options.musicSfx.find(o => o.id === musicSfx)?.title || musicSfx;
  lines.push(`| Music / SFX | ${musicLabel} | ${notes[`musicSfx-${musicSfx}`] || ""}`);
  const vsLabel = Array.isArray(visualStyle) ? visualStyle.map(id => options.visualStyle.find(o => o.id === id)?.title || id).join(", ") : options.visualStyle.find(o => o.id === visualStyle)?.title || visualStyle;
  lines.push(`| Visual Style | ${vsLabel} | ${notes[`visualStyle-${visualStyle}`] || ""}`);
  lines.push("");

  const sections: [string, string, string, string][] = [
    ["Platform", platLabel, platform, "platform"],
    ["Content Category", catLabel, category, "category"],
    ["Hook Strategy", hookLabel, hook, "hook"],
    ["Delivery Tone", toneLabel, tone, "tone"],
    ["Video Length", lenLabel, length, "length"],
    ["Music / Sound Design", musicLabel, musicSfx, "musicSfx"],
    ["Visual Style", vsLabel, visualStyle, "visualStyle"],
  ];

  for (const [heading, label, key, prefix] of sections) {
    lines.push(`## ${heading}: ${label}`);
    lines.push("");
    lines.push(Array.isArray(key) ? key.map(v => dict[prefix]?.[v] || v).join(", ") : dict[prefix]?.[key] || key);
    const note = notes[`${prefix}-${key}`] || "";
    if (note) lines.push(`> **Note:** ${note}`);
    lines.push("");
  }

  if (ctaList.length > 0) {
    lines.push("## Call(s) to Action");
    lines.push("");
    for (const ctaId of ctaList) {
      const label = options.cta.find(o => o.id === ctaId)?.title || ctaId;
      lines.push("### " + label);
      lines.push("");
      lines.push(Array.isArray(ctaId) ? ctaId.map(v => dict.cta[v] || v).join(", ") : dict.cta[ctaId] || ctaId);
      const note = notes[`cta-${ctaId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  const isShort = ["tiktok", "instagram-reels", "youtube-shorts", "twitter-video"].includes(platform);
  const durationMatch = length?.match(/\d+/g);
  const maxSec = durationMatch ? parseInt(durationMatch[durationMatch.length - 1]) : (isShort ? 60 : 600);
  const hookEnd = isShort ? 5 : 15;
  const setupEnd = isShort ? 20 : 45;
  const mainEnd = isShort ? 40 : 180;
  const detailEnd = Math.floor(maxSec * 0.9);

  lines.push("## Full Script — Timed Breakdown");
  lines.push("");
  lines.push("| Time | Section | Visual | Audio / Script");
  lines.push("|------|---------|--------|---------------");
  lines.push(`| 0:00–0:0${hookEnd} | **Hook** | [Visual matching "${hookLabel}" strategy, ${vsLabel} style] | [${hookLabel} — compelling opening line]`);
  lines.push(`| 0:0${hookEnd}–0:${setupEnd > 60 ? Math.floor(setupEnd / 60) + ":" + (setupEnd % 60).toString().padStart(2, "0") : setupEnd} | **Setup** | [Establish context, ${musicLabel} audio begins] | [Build on the hook, introduce the topic]`);
  lines.push(`| 0:${setupEnd}–0:${mainEnd > 60 ? Math.floor(mainEnd / 60) + ":" + (mainEnd % 60).toString().padStart(2, "0") : mainEnd} | **Main Content** | [${catLabel} visuals, ${vsLabel} editing] | [Core content following ${catLabel} structure]`);
  lines.push(`| 0:${mainEnd}–0:${detailEnd > 60 ? Math.floor(detailEnd / 60) + ":" + (detailEnd % 60).toString().padStart(2, "0") : detailEnd} | **Value / Detail** | [Demonstrations, examples, proof points] | [Elaborate on key points with ${toneLabel} tone]`);
  lines.push(`| 0:${detailEnd}–${maxSec > 60 ? Math.floor(maxSec / 60) + ":" + (maxSec % 60).toString().padStart(2, "0") : maxSec + "s" || "1:00"} | **CTA** | [CTA overlay + end screen] | ${ctaLabels || "Engagement prompt"}`);
  lines.push("");

  lines.push("## Script Body");
  lines.push("");
  if (category === "educational") {
    lines.push("### [Opening — Hook]");
    lines.push(`[${hookLabel} — write the compelling opening line here]`);
    lines.push("");
    lines.push("### [Context — Why This Matters]");
    lines.push("[Explain why the viewer should care — what problem does this solve for them?]");
    lines.push("");
    lines.push("### [Core Lesson — Step by Step]");
    lines.push("1. **Step 1:** [First actionable step with explanation]");
    lines.push("2. **Step 2:** [Second step with demonstration]");
    lines.push("3. **Step 3:** [Third step with example]");
    lines.push("4. **Step 4:** [Fourth step or pro tip]");
    lines.push("");
    lines.push("### [Key Takeaway]");
    lines.push("[One sentence summary the viewer must remember]");
  } else if (category === "product-review" || category === "unboxing") {
    lines.push("### [First Impression — Hook]");
    lines.push("[Show the product for the first time — genuine reaction]");
    lines.push("");
    lines.push("### [Unboxing / First Look]");
    lines.push("[Walk through the packaging, build quality, design]");
    lines.push("");
    lines.push("### [Features Breakdown]");
    lines.push("| Feature | Rating | Notes");
    lines.push("| Feature 1 | ⭐⭐⭐⭐ | [Brief comment]");
    lines.push("| Feature 2 | ⭐⭐⭐⭐⭐ | [Brief comment]");
    lines.push("| Feature 3 | ⭐⭐⭐ | [Brief comment]");
    lines.push("| Feature 4 | ⭐⭐⭐⭐ | [Brief comment]");
    lines.push("");
    lines.push("### [Pros vs Cons]");
    lines.push("**Pros:** [List 3–5 advantages]");
    lines.push("**Cons:** [List 1–3 limitations]");
    lines.push("");
    lines.push("### [Final Verdict]");
    lines.push("[Summary rating and recommendation — who is this for?]");
  } else if (category === "tips-tricks" || category === "tutorial-howto") {
    lines.push("### [Pain Point — Hook]");
    lines.push("[Describe the frustration the audience feels]");
    lines.push("");
    lines.push("### [Tip / Step 1 — Quick Win]");
    lines.push("[First actionable tip with demonstration]");
    lines.push("");
    lines.push("### [Tip / Step 2 — Intermediate]");
    lines.push("[Second tip with explanation]");
    lines.push("");
    lines.push("### [Tip / Step 3 — Advanced]");
    lines.push("[Third tip that adds significant value]");
    lines.push("");
    lines.push("### [Tip / Step 4 — Pro Level]");
    lines.push("[Advanced technique or hidden feature]");
    lines.push("");
    lines.push("### [Bonus Tip / Common Mistakes]");
    lines.push("[Extra value as a bonus or pitfalls to avoid]");
  } else {
    lines.push("### [Hook — Grab Attention]");
    lines.push(`[${hookLabel} — write the opening line, max ${hookEnd} seconds]`);
    lines.push("");
    lines.push("### [Body — Main Narrative]");
    lines.push("[Develop the story, information, or entertainment]");
    lines.push("");
    lines.push("### [Climax / Twist / Key Moment]");
    lines.push("[The most important moment — emotional peak or revelation]");
    lines.push("");
    lines.push("### [Resolution]");
    lines.push("[How it wraps up and transitions to CTA]");
  }
  lines.push("");

  lines.push("## Production Notes");
  lines.push("");
  lines.push(`- **Format**: ${["tiktok", "instagram-reels", "youtube-shorts", "twitter-video", "linkedin-video"].includes(platform) ? "9:16 vertical, 1080×1920" : "16:9 landscape, 1080p or 4K"}`);
  lines.push(`- **Duration**: ${lenLabel} (target ${maxSec} seconds max)`);
  lines.push(`- **Audio**: ${musicLabel} — ${(Array.isArray(musicSfx) ? musicSfx.map(v => dict.musicSfx[v]?.substring(0, 80) || v).join(", ") : dict.musicSfx[musicSfx]?.substring(0, 80)) || "see music section"}`);
  lines.push(`- **Visual Style**: ${vsLabel}`);
  lines.push(`- **Delivery Tone**: ${toneLabel}`);
  lines.push(`- **Captions**: ${["tiktok", "instagram-reels", "youtube-shorts", "twitter-video"].includes(platform) ? "Full on-screen captions required" : "Optional — add for accessibility"}`);
  lines.push(`- **Thumbnail**: ${platform === "youtube-long" ? "High-CTR thumbnail with face + text overlay required" : "Cover frame should be the most visually interesting moment"}`);
  lines.push("");

  lines.push("## Posting & Optimization");
  lines.push("");
  lines.push("| Element | Best Practice");
  lines.push("|---------|--------------");
  lines.push("| Caption | First 2 lines must hook — rest is hidden behind 'more'");
  lines.push("| Hashtags | 3–5 relevant tags + 2 broad tags");
  lines.push("| Post Time | Peak audience time (check platform analytics)");
  lines.push("| Engagement | Reply to all comments in first 2 hours");
  lines.push("| Cross-post | Adapt aspect ratio and caption for other platforms");
  lines.push("| Analytics | Track retention graph — drop-off points indicate improvement areas");
  lines.push("");

  lines.push("## Music & Audio Cue Sheet");
  lines.push("");
  lines.push("| Timestamp | Cue | Type | Notes");
  lines.push("|-----------|-----|------|-------");
  lines.push("| 0:00–0:05 | Intro music swell | Music | Hook the audience with audio");
  lines.push("| 0:05–0:20 | Background music at 30% volume | Music | Support voiceover");
  lines.push("| 0:20–0:40 | Beat synced transition | SFX | Align visual cut with beat drop");
  lines.push("| 0:40–1:00 | Ambient pad continues | Music | Maintain energy");
  lines.push("| 1:00–End | Outro music fade + CTA tone | Music + SFX | Signal video ending");
  lines.push("");

  lines.push("## Post-Production Checklist");
  lines.push("");
  lines.push("- [ ] Color grading applied (consistent look throughout)");
  lines.push("- [ ] Audio levels balanced (voiceover at -6dB, music at -18dB)");
  lines.push("- [ ] Captions synced and proofread");
  lines.push("- [ ] Thumbnail designed and exported");
  lines.push("- [ ] End screen / cards added (if YouTube)");
  lines.push("- [ ] Description written with timestamps and links");
  lines.push("- [ ] Hashtags researched and added");
  lines.push("- [ ] Video exported in correct format and resolution");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Viral Video Script Generator_");

  return lines.join("\n");
}

export default function VideoScriptPage() {
  return (
    <ToolShell
      title="Viral Video Script Generator"
      steps={[
        { id: 1, label: "Platform", component: (p) => (
          <GenericStep {...p} title="Select Main Platform" description="Where will this video be published?" options={options.platform} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="platform" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Category", component: (p) => (
          <GenericStep {...p} title="Select Content Category" description="What type of content is this video?" options={options.category} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="category" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Hook", component: (p) => (
          <GenericStep {...p} title="Select Hook Strategy" description="How will you grab attention in the first 5 seconds?" options={options.hook} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="hook" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "CTA", component: (p) => (
          <GenericStep {...p} title="Select Call to Action" description="What should viewers do after watching?" options={options.cta} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="cta" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Tone", component: (p) => (
          <GenericStep {...p} title="Select Delivery Tone" description="What energy and attitude should the video convey?" options={options.tone} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="tone" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Length", component: (p) => (
          <GenericStep {...p} title="Select Video Length" description="How long should the final video be?" options={options.length} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="length" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Music", component: (p) => (
          <GenericStep {...p} title="Select Music / SFX Approach" description="What audio background should the video have?" options={options.musicSfx} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="musicSfx" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Visuals", component: (p) => (
          <GenericStep {...p} title="Select Visual Style" description="What production and editing style should be used?" options={options.visualStyle} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="visualStyle" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}









