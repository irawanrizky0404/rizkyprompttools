"use client";

import type { FC } from "react";
import { Camera, Box, Palette, Droplets, Layout, Sun, Clock, Lamp, Zap, Drone, Search, Eye, Film, Flame, Heart, Ghost, Smile } from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  medium: [
    { id: "photorealistic", title: "Photorealistic", description: "Ultra-realistic like a high-end photograph", icon: Camera },
    { id: "3d-render-unreal", title: "3D Render Unreal Engine", description: "Real-time 3D render with cinematic quality", icon: Box },
    { id: "anime", title: "Anime", description: "Japanese animation style with bold lines and colors", icon: Palette },
    { id: "watercolor", title: "Watercolor", description: "Soft painterly look with wet brush strokes", icon: Droplets },
    { id: "flat-vector", title: "Flat Vector", description: "Clean vector illustration, no gradients or depth", icon: Layout },
  ],
  lighting: [
    { id: "cinematic", title: "Cinematic", description: "Dramatic lighting with strong contrast and shadows", icon: Sun },
    { id: "golden-hour", title: "Golden Hour", description: "Warm sunset or sunrise natural lighting", icon: Clock },
    { id: "studio-lighting", title: "Studio Lighting", description: "Controlled softbox lighting setup", icon: Lamp },
    { id: "cyberpunk-neon", title: "Cyberpunk Neon", description: "Neon colored lights in dark urban scenes", icon: Zap },
  ],
  lens: [
    { id: "drone-shot", title: "Drone Shot", description: "Aerial top-down or sweeping high-angle view", icon: Drone },
    { id: "macro-lens", title: "Macro Lens", description: "Extreme close-up with fine detail capture", icon: Search },
    { id: "fisheye", title: "Fisheye", description: "Ultra-wide angle with barrel distortion effect", icon: Eye },
    { id: "35mm-film", title: "35mm Film", description: "Classic film camera look with grain texture", icon: Film },
  ],
  mood: [
    { id: "dramatic", title: "Dramatic", description: "High tension, intense emotions, stormy atmosphere", icon: Flame },
    { id: "peaceful", title: "Peaceful", description: "Calm, serene, soft colors and gentle composition", icon: Heart },
    { id: "eerie", title: "Eerie", description: "Unsettling, dark, mysterious with unsettling undertones", icon: Ghost },
    { id: "cheerful", title: "Cheerful", description: "Bright, happy, vibrant colors and uplifting vibe", icon: Smile },
  ],
};

const dict: Record<string, Record<string, string>> = {
  medium: {
    photorealistic: "Generate the image in a photorealistic style. Prioritize accurate lighting, realistic textures, natural skin tones, and lifelike proportions. Use --style raw and high detail parameters for maximum realism.",
    "3d-render-unreal": "Generate the image as a 3D render in Unreal Engine 5 style. Include realistic global illumination, volumetric fog, high-poly geometry, and post-processing effects like bloom and depth of field.",
    anime: "Generate the image in an anime art style inspired by Studio Ghibli or Makoto Shinkai. Use bold outlines, expressive eyes, cel-shaded colors, and dynamic camera angles typical of Japanese animation.",
    watercolor: "Generate the image as a watercolor painting. Use soft bleeding edges, paper texture overlay, diluted pigment splotches, and a light, airy color palette typical of wet-on-wet techniques.",
    "flat-vector": "Generate the image as a flat vector illustration. Use solid unshaded colors, no gradients, simple geometric shapes, and clean silhouettes reminiscent of modern UI illustrations.",
  },
  lighting: {
    cinematic: "Apply cinematic lighting with strong chiaroscuro contrast, a single key light source, deep shadows in the background, and a subtle rim light to separate the subject from the dark environment.",
    "golden-hour": "Apply golden hour lighting with warm orange-gold sunlight coming from a low angle, long soft shadows, and a warm glow on the subject's edges. Use a slight lens flare for atmosphere.",
    "studio-lighting": "Apply studio lighting with a soft key light at 45 degrees, a fill light on the opposite side to reduce shadows, and a backlight for rim definition. Use a clean white or seamless gray backdrop.",
    "cyberpunk-neon": "Apply cyberpunk neon lighting with vibrant pink, cyan, and purple light sources illuminating the scene from multiple angles. Use strong volumetric beams, reflective wet surfaces, and deep blue ambient shadows.",
  },
  lens: {
    "drone-shot": "Compose the shot as a drone aerial view. Use a top-down or 45-degree angle, wide field of view, and include sweeping landscapes or cityscapes with a sense of scale and depth.",
    "macro-lens": "Compose the shot with a macro lens for extreme close-up detail. Use a very shallow depth of field so the subject is sharp while the background blurs into soft bokeh circles.",
    fisheye: "Compose the shot with a fisheye lens effect. Use an ultra-wide 180-degree field of view with noticeable barrel distortion curving the edges, creating a dynamic and immersive perspective.",
    "35mm-film": "Compose the shot as if taken with a 35mm film camera. Add subtle film grain, slight color shifts characteristic of specific film stocks (Kodak Portra or Fuji Superia), and natural light leaks.",
  },
  mood: {
    dramatic: "Set a dramatic mood with dark storm clouds, strong directional lighting, intense shadows, and a color palette dominated by deep blues, blacks, and striking red or orange accents.",
    peaceful: "Set a peaceful mood with soft pastel colors, gentle morning light, calm water or open fields, and a composition that emphasizes balance, symmetry, and negative space.",
    eerie: "Set an eerie mood with fog or mist, dim lighting, desaturated cool colors (teal, gray, deep green), twisted organic shapes, and an overall unsettling atmosphere that feels uncanny.",
    cheerful: "Set a cheerful mood with bright saturated colors, sunny clear skies, dynamic action poses, smiling subjects, and a warm color palette full of yellows, pinks, and light blues.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const medium = selections.step1;
  const lighting = selections.step2;
  const lens = selections.step3;
  const mood = selections.step4;

  const lines = ["# Midjourney Prompt", "", "## Full Prompt", ""];
  lines.push("```");
  const parts: string[] = [];
  if (medium) parts.push(options.medium.find(o => o.id === medium)?.title ?? medium);
  if (lighting) parts.push(options.lighting.find(o => o.id === lighting)?.title ?? lighting);
  if (lens) parts.push(options.lens.find(o => o.id === lens)?.title ?? lens);
  if (mood) parts.push(options.mood.find(o => o.id === mood)?.title ?? mood);
  lines.push(parts.join(" ") + " --ar 16:9 --v 6");
  lines.push("```");
  lines.push("");
  if (medium) lines.push(`**Art Medium:** ${dict.medium[medium] ?? medium}`);
  if (medium) lines.push(`> ${notes[`medium-${medium}`] ?? ""}`);
  lines.push("");
  if (lighting) lines.push(`**Lighting:** ${dict.lighting[lighting] ?? lighting}`);
  if (lighting) lines.push(`> ${notes[`lighting-${lighting}`] ?? ""}`);
  lines.push("");
  if (lens) lines.push(`**Camera & Lens:** ${dict.lens[lens] ?? lens}`);
  if (lens) lines.push(`> ${notes[`lens-${lens}`] ?? ""}`);
  lines.push("");
  if (mood) lines.push(`**Mood / Vibe:** ${dict.mood[mood] ?? mood}`);
  if (mood) lines.push(`> ${notes[`mood-${mood}`] ?? ""}`);

  return lines.join("\n");
}

export default function MidjourneyPage() {
  return (
    <ToolShell
      title="Midjourney Prompt Builder"
      steps={[
        { id: 1, label: "Medium", component: (p) => (
          <GenericStep {...p} title="Select Art Medium" description="What artistic medium should the image use?" options={options.medium} mode="single" selected={p.selections.step1} onSelect={(id) => p.onSelect("step1", id)} notePrefix="medium" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Lighting", component: (p) => (
          <GenericStep {...p} title="Select Lighting Style" description="How should the scene be lit?" options={options.lighting} mode="single" selected={p.selections.step2} onSelect={(id) => p.onSelect("step2", id)} notePrefix="lighting" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Lens", component: (p) => (
          <GenericStep {...p} title="Select Camera & Lens" description="What camera perspective or lens effect?" options={options.lens} mode="single" selected={p.selections.step3} onSelect={(id) => p.onSelect("step3", id)} notePrefix="lens" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Mood", component: (p) => (
          <GenericStep {...p} title="Select Mood & Vibe" description="What emotional tone should the image convey?" options={options.mood} mode="single" selected={p.selections.step4} onSelect={(id) => p.onSelect("step4", id)} notePrefix="mood" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}
