"use client";

import type { FC } from "react";
import { Layout, Table, Gauge, User, LogIn, Frame, Swords, Layers, Ghost, Monitor, Palette, Sparkles, Moon, MousePointerClick, Pointer, Move, Square } from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  component: [
    { id: "landing-hero", title: "Landing Page Hero", description: "Hero section with headline, CTA, and background", icon: Layout },
    { id: "pricing-table", title: "Pricing Table", description: "Tiered pricing cards with feature comparison", icon: Table },
    { id: "admin-dashboard", title: "Admin Dashboard", description: "Data-heavy dashboard with charts and stats", icon: Gauge },
    { id: "user-profile", title: "User Profile", description: "Profile card with avatar, bio, and activity", icon: User },
    { id: "auth-form", title: "Auth Form", description: "Login or registration form with validation", icon: LogIn },
  ],
  style: [
    { id: "minimalist", title: "Minimalist", description: "Clean, white space, subtle borders, muted tones", icon: Frame },
    { id: "neo-brutalism", title: "Neo-Brutalism", description: "Bold borders, harsh shadows, high contrast", icon: Swords },
    { id: "glassmorphism", title: "Glassmorphism", description: "Frosted glass, backdrop blur, soft transparency", icon: Layers },
    { id: "web3-futuristic", title: "Web3 Futuristic", description: "Neon gradients, glitch effects, dark UI", icon: Ghost },
  ],
  color: [
    { id: "monochrome", title: "Monochrome", description: "Single hue with varying shades and tints", icon: Monitor },
    { id: "pastel", title: "Pastel", description: "Soft, muted colors with gentle contrast", icon: Palette },
    { id: "vibrant", title: "Vibrant", description: "Bold, saturated colors that pop visually", icon: Sparkles },
    { id: "high-contrast-dark", title: "High-Contrast Dark", description: "Dark background with bright accent colors", icon: Moon },
  ],
  interactivity: [
    { id: "static", title: "Static", description: "No animations, pure static layout", icon: MousePointerClick },
    { id: "hover-animations", title: "Hover Animations", description: "Subtle hover effects on interactive elements", icon: Pointer },
    { id: "draggable", title: "Draggable", description: "Drag-and-drop interactions for cards or panels", icon: Move },
    { id: "modal-popup", title: "Modal Pop-up", description: "Click-triggered modal overlay for details", icon: Square },
  ],
};

const dict: Record<string, Record<string, string>> = {
  component: {
    "landing-hero": "Design a hero section featuring a bold headline, supporting subheadline, primary CTA button, optional secondary link, and a full-width background image or gradient. Ensure text is readable with proper contrast and responsive to mobile viewports.",
    "pricing-table": "Design a pricing table with 3–4 tiers arranged horizontally. Each card includes the plan name, price, key feature bullets, and a CTA button. Highlight the recommended/most popular tier with a visual badge or accent border.",
    "admin-dashboard": "Design an admin dashboard layout with a sidebar navigation, top header bar, and a main content area containing data cards, a line or bar chart, recent activity feed, and a stats summary row.",
    "user-profile": "Design a user profile card or page with a circular avatar, cover photo area, display name, bio text, follower/following counts, and action buttons such as Follow or Message.",
    "auth-form": "Design a login or registration form with email and password inputs, a submit button, remember-me checkbox, forgot-password link, and social login dividers. Include inline validation error messages.",
  },
  style: {
    minimalist: "Apply a minimalist aesthetic with generous white space, thin 1px borders in light gray, sans-serif typefaces, a maximum content width of 1200px centered on the page, and subtle box shadows for depth.",
    "neo-brutalism": "Apply neo-brutalist styling with thick 3–4px black borders, bold box shadows offset 4px right and 4px down, high-contrast color palette, chunky sans-serif typography, and minimal rounded corners.",
    glassmorphism: "Apply glassmorphism with semi-transparent backgrounds (backdrop-filter: blur(16px)), light border highlights, subtle inner shadows, layered depth with z-index stacking, and a colorful gradient background behind the glass elements.",
    "web3-futuristic": "Apply a Web3 futuristic theme with dark backgrounds (#0a0a0f), neon cyan and magenta accent colors, gradient text effects, subtle noise texture overlay, animated gradient borders, and monospaced font for technical feel.",
  },
  color: {
    monochrome: "Use a monochrome palette based on a single primary hue. Apply lighter tints for backgrounds, the base hue for interactive elements, and darker shades for text. Keep all UI elements within this single color family.",
    pastel: "Use a pastel palette with soft pinks, lavenders, mint greens, and baby blues. Keep contrast gentle by pairing pastel backgrounds with slightly darker pastel text. Avoid pure black text.",
    vibrant: "Use a vibrant palette with saturated primary colors. Pair intense hues with neutral whites or dark grays to balance visual energy. Reserve the most saturated colors for accents and CTAs.",
    "high-contrast-dark": "Use a dark background (#0d1117 or similar) with bright accent colors such as electric blue, neon green, or hot pink. Ensure all text meets WCAG AA contrast ratios against the dark surface.",
  },
  interactivity: {
    static: "Deliver a completely static layout with no hover effects, transitions, or animations. All interactive states (hover, focus, active) should use simple color changes without CSS transitions.",
    "hover-animations": "Add hover animations to buttons, cards, and links. Use CSS transitions for transform (scale 1.02), box-shadow elevation, and background-color shifts. Keep animations under 300ms for snappy feedback.",
    draggable: "Implement drag-and-drop interactions using the HTML5 Drag and Drop API or a library like dnd-kit. Cards and panels should be draggable within their container with visual feedback during drag.",
    "modal-popup": "Implement a modal pop-up triggered by clicking a primary button. The modal should have a dark backdrop overlay, centered content card with a close button, smooth fade-in transition, and focus trap.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const component = selections.step1;
  const style = selections.step2;
  const color = selections.step3;
  const interactivity = selections.step4;

  const lines = ["# UI/UX Component Prompt", "", "## Component Specification", ""];
  if (component) lines.push(`**Component Type:** ${dict.component[component] ?? component}`);
  if (component) lines.push(`> ${notes[`component-${component}`] ?? ""}`);
  lines.push("");
  if (style) lines.push(`**Vibe & Style:** ${dict.style[style] ?? style}`);
  if (style) lines.push(`> ${notes[`style-${style}`] ?? ""}`);
  lines.push("");
  if (color) lines.push(`**Color Scheme:** ${dict.color[color] ?? color}`);
  if (color) lines.push(`> ${notes[`color-${color}`] ?? ""}`);
  lines.push("");
  if (interactivity) lines.push(`**Interactivity:** ${dict.interactivity[interactivity] ?? interactivity}`);
  if (interactivity) lines.push(`> ${notes[`interactivity-${interactivity}`] ?? ""}`);
  lines.push("");
  lines.push("## Generated Prompt");
  lines.push("");
  lines.push("Based on your selections, here is the full prompt for the AI designer:");
  lines.push("");
  if (component) lines.push(`- Build a **${options.component.find(o => o.id === component)?.title}** component.`);
  if (style) lines.push(`- Apply a **${options.style.find(o => o.id === style)?.title}** visual style.`);
  if (color) lines.push(`- Use a **${options.color.find(o => o.id === color)?.title}** color scheme.`);
  if (interactivity) lines.push(`- Add **${options.interactivity.find(o => o.id === interactivity)?.title}** interactivity.`);

  return lines.join("\n");
}

export default function UiUxComponentPage() {
  return (
    <ToolShell
      title="UI/UX Component Prompt Builder"
      steps={[
        { id: 1, label: "Component", component: (p) => (
          <GenericStep {...p} title="Select Component Type" description="What UI element are you building?" options={options.component} mode="single" selected={p.selections.step1} onSelect={(id) => p.onSelect("step1", id)} notePrefix="component" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Style", component: (p) => (
          <GenericStep {...p} title="Select Vibe & Style" description="What visual direction should the component follow?" options={options.style} mode="single" selected={p.selections.step2} onSelect={(id) => p.onSelect("step2", id)} notePrefix="style" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Color", component: (p) => (
          <GenericStep {...p} title="Select Color Scheme" description="What color palette should be used?" options={options.color} mode="single" selected={p.selections.step3} onSelect={(id) => p.onSelect("step3", id)} notePrefix="color" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Interaction", component: (p) => (
          <GenericStep {...p} title="Select Interactivity Level" description="How interactive should the component be?" options={options.interactivity} mode="single" selected={p.selections.step4} onSelect={(id) => p.onSelect("step4", id)} notePrefix="interactivity" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}
