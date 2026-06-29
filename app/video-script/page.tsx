"use client";

import type { FC } from "react";
import { Smartphone, Camera, Video, Film, BookOpen, Music, ShoppingBag, MessageSquare, Lightbulb, Search, Zap, AlertTriangle, Heart, ThumbsUp, MousePointerClick, Play } from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  platform: [
    { id: "tiktok", title: "TikTok", description: "Short vertical video, fast-paced, trend-driven", icon: Smartphone },
    { id: "instagram-reels", title: "Instagram Reels", description: "Creative short-form video with editing tools", icon: Camera },
    { id: "youtube-long", title: "YouTube Long-form", description: "In-depth video, 8+ minutes, high retention", icon: Video },
    { id: "youtube-shorts", title: "YouTube Shorts", description: "Vertical short video, under 60 seconds", icon: Film },
  ],
  category: [
    { id: "educational", title: "Educational", description: "Teach a concept, skill, or explain a topic", icon: BookOpen },
    { id: "entertainment", title: "Entertainment", description: "Fun, skits, comedy, or engaging challenges", icon: Music },
    { id: "product-review", title: "Product Review", description: "Honest review or unboxing of a product", icon: ShoppingBag },
    { id: "storytime", title: "Storytime", description: "Personal story or narrative storytelling", icon: MessageSquare },
    { id: "tips-tricks", title: "Tips and Tricks", description: "Quick actionable tips for a specific topic", icon: Lightbulb },
  ],
  hook: [
    { id: "curiosity-gap", title: "Curiosity Gap", description: "Pose a question or tease info to spark curiosity", icon: Search },
    { id: "surprising-fact", title: "Surprising Fact", description: "Open with a shocking or unexpected statistic", icon: Zap },
    { id: "controversial", title: "Controversial", description: "Take a bold stance or challenge common beliefs", icon: AlertTriangle },
    { id: "highly-relatable", title: "Highly Relatable", description: "Describe a universal experience the audience shares", icon: Heart },
  ],
  cta: [
    { id: "like-follow", title: "Like and Follow", description: "Encourage engagement and build follower base", icon: ThumbsUp },
    { id: "click-link", title: "Click Link in Bio", description: "Drive traffic to external landing page or store", icon: MousePointerClick },
    { id: "watch-part-2", title: "Watch Part 2", description: "Create a series and drive watch time across videos", icon: Play },
  ],
};

const dict: Record<string, Record<string, string>> = {
  platform: {
    tiktok: "Write a script optimized for TikTok — fast pacing, on-screen text captions, trending audio integration, hook within the first 2 seconds, and a runtime of 15–60 seconds. Use vertical 9:16 aspect ratio.",
    "instagram-reels": "Write a script optimized for Instagram Reels — visually polished, use of Reels editing tools (transitions, effects), text overlays, and a runtime of 15–90 seconds. Include a strong visual hook and save-friendly content.",
    "youtube-long": "Write a script for a long-form YouTube video — 8–20 minutes in length, structured with chapters, intro hook, main content with examples, and an outro with end screens. Prioritize retention and watch time.",
    "youtube-shorts": "Write a script for a YouTube Short — under 60 seconds, vertical 9:16, fast cuts, on-screen captions, and a loopable structure that encourages re-watches. Trending audio recommended.",
  },
  category: {
    educational: "Structure the educational script with: hook (problem statement), context (why it matters), core lesson (step-by-step or concept breakdown), example (real-world application), and key takeaway (one thing to remember).",
    entertainment: "Structure the entertainment script with: hook (funny moment or tease), setup (relatable scenario), punchline or twist (unexpected outcome), and call to action. Keep energy high throughout.",
    "product-review": "Structure the product review script with: hook (initial reaction), unboxing or first impressions, features overview, pros and cons, real usage demonstration, final verdict, and recommendation.",
    storytime: "Structure the storytime script with: hook (intriguing first line), context (background info), rising action (the conflict or challenge), climax (the turning point), resolution (how it ended), and lesson or reflection.",
    "tips-tricks": "Structure the tips script with: hook (the pain point), list of 3–5 tips (each with brief explanation and example), bonus tip (extra value), and a call to action to try the first tip immediately.",
  },
  hook: {
    "curiosity-gap": "Craft a curiosity-gap hook: start with a provocative question (e.g., 'What if I told you there is a one-line CSS property that fixes layout issues instantly?') or a teaser that requires watching to resolve.",
    "surprising-fact": "Craft a surprising-fact hook: open with a statistic or fact that challenges assumptions (e.g., '90% of startups fail within the first year — but here is what the successful 10% do differently').",
    controversial: "Craft a controversial hook: take a strong stance against a popular opinion (e.g., 'I have been a developer for 10 years and I think TypeScript is a waste of time. Here is why.'). Back up the stance with reasoning.",
    "highly-relatable": "Craft a highly-relatable hook: describe a universal experience the target audience faces daily (e.g., 'You know that moment when you spend 2 hours debugging only to find a missing semicolon?').",
  },
  cta: {
    "like-follow": "End the video with a request to like the video and follow the account. Explain the value of following — regular tips, weekly content, or exclusive insights — to incentivize the action.",
    "click-link": "End the video by directing viewers to the link in the bio or a pinned comment. Clearly state what they will get (free guide, discount code, full tutorial) and create urgency if applicable.",
    "watch-part-2": "End the video by teasing the next part and explicitly asking viewers to watch Part 2. Use an end screen or annotation pointing to the next video. Create a cliffhanger to drive curiosity.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const platform = selections.step1;
  const category = selections.step2;
  const hook = selections.step3;
  const cta = selections.step4;

  const lines = ["# Viral Video Script", "", "## Script Overview", ""];
  if (platform) lines.push(`**Platform:** ${dict.platform[platform] ?? platform}`);
  if (platform) lines.push(`> ${notes[`platform-${platform}`] ?? ""}`);
  lines.push("");
  if (category) lines.push(`**Content Category:** ${dict.category[category] ?? category}`);
  if (category) lines.push(`> ${notes[`category-${category}`] ?? ""}`);
  lines.push("");
  if (hook) lines.push(`**Hook Strategy:** ${dict.hook[hook] ?? hook}`);
  if (hook) lines.push(`> ${notes[`hook-${hook}`] ?? ""}`);
  lines.push("");
  if (cta) lines.push(`**CTA:** ${dict.cta[cta] ?? cta}`);
  if (cta) lines.push(`> ${notes[`cta-${cta}`] ?? ""}`);
  lines.push("");
  lines.push("## Script Structure");
  lines.push("");
  lines.push("### Hook (0–5s)");
  lines.push(`[${options.hook.find(o => o.id === hook)?.title ?? "Hook"} strategy]`);
  lines.push("");
  lines.push("### Body (5–80% of video)");
  lines.push(`[${options.category.find(o => o.id === category)?.title ?? "Content"} content structure]`);
  lines.push("");
  lines.push("### CTA (Final 5–10s)");
  lines.push(`[${options.cta.find(o => o.id === cta)?.title ?? "CTA"} call to action]`);

  return lines.join("\n");
}

export default function VideoScriptPage() {
  return (
    <ToolShell
      title="Viral Video Script Generator"
      steps={[
        { id: 1, label: "Platform", component: (p) => (
          <GenericStep {...p} title="Select Main Platform" description="Where will this video be published?" options={options.platform} mode="single" selected={p.selections.step1} onSelect={(id) => p.onSelect("step1", id)} notePrefix="platform" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Category", component: (p) => (
          <GenericStep {...p} title="Select Content Category" description="What type of content is this video?" options={options.category} mode="single" selected={p.selections.step2} onSelect={(id) => p.onSelect("step2", id)} notePrefix="category" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Hook", component: (p) => (
          <GenericStep {...p} title="Select Hook Strategy" description="How will you grab attention in the first 5 seconds?" options={options.hook} mode="single" selected={p.selections.step3} onSelect={(id) => p.onSelect("step3", id)} notePrefix="hook" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "CTA", component: (p) => (
          <GenericStep {...p} title="Select Call to Action" description="What should viewers do after watching?" options={options.cta} mode="single" selected={p.selections.step4} onSelect={(id) => p.onSelect("step4", id)} notePrefix="cta" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}
