"use client";

import type { FC } from "react";
import {
  Palette, Droplets, Flame, Leaf, Wind, Sun, Moon, Gem, Globe,
  PaintBucket, Contrast, Layers, CircleDot, Eye, Shield,
  Crosshair, Heart, Zap, Anchor, Ruler, Grid3x3, PanelRight,
  PanelBottom, PanelTop, Code, Square, Circle, Triangle, Diamond, FileJson,
  Monitor, Smartphone, Tablet, Printer, BookOpen, FileText,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  baseHue: [
    { id: "warm-red", title: "Warm Red", description: "Energetic, passionate, attention-grabbing red hue", icon: Flame },
    { id: "cool-blue", title: "Cool Blue", description: "Calm, professional, trustworthy blue hue", icon: Droplets },
    { id: "earthy-green", title: "Earthy Green", description: "Natural, balanced, growth-oriented green hue", icon: Leaf },
    { id: "neutral-gray", title: "Neutral Gray", description: "Balanced, versatile, modern gray base", icon: Wind },
    { id: "golden-yellow", title: "Golden Yellow", description: "Optimistic, warm, inviting yellow hue", icon: Sun },
    { id: "deep-purple", title: "Deep Purple", description: "Creative, luxurious, spiritual purple hue", icon: Gem },
    { id: "ocean-teal", title: "Ocean Teal", description: "Refreshing, modern, trustworthy teal hue", icon: Moon },
    { id: "blush-pink", title: "Blush Pink", description: "Soft, romantic, approachable pink hue", icon: Heart },
  ],
  colorRole: [
    { id: "primary", title: "Primary", description: "Main brand color used for key UI elements", icon: PaintBucket },
    { id: "secondary", title: "Secondary", description: "Supporting color that complements primary", icon: Palette },
    { id: "accent", title: "Accent", description: "Highlight color for call-to-action elements", icon: Crosshair },
    { id: "background", title: "Background", description: "Base background color for surfaces", icon: Square },
    { id: "surface", title: "Surface", description: "Card and container background color", icon: PanelRight },
    { id: "text-primary", title: "Text Primary", description: "Main text color for body content", icon: FileText },
    { id: "text-secondary", title: "Text Secondary", description: "Muted text for captions and labels", icon: BookOpen },
    { id: "border", title: "Border", description: "Border and divider line color", icon: Grid3x3 },
  ],
  paletteSize: [
    { id: "minimal", title: "Minimal (3-4)", description: "Core colors only: primary, neutral, accent", icon: CircleDot },
    { id: "compact", title: "Compact (5-7)", description: "Core plus surface and text variants", icon: Circle },
    { id: "standard", title: "Standard (8-12)", description: "Full spectrum with extended neutrals", icon: Triangle },
    { id: "expanded", title: "Expanded (13-20)", description: "Complete design system with all roles", icon: Diamond },
    { id: "comprehensive", title: "Comprehensive (21-30)", description: "Multi-brand palette with interaction states", icon: Layers },
    { id: "enterprise", title: "Enterprise (31-50)", description: "Full design tokens for large orgs", icon: Grid3x3 },
    { id: "adaptive", title: "Adaptive", description: "Dynamic palette that responds to context", icon: Sun },
    { id: "generative", title: "Generative", description: "AI-generated unique palette per session", icon: Zap },
  ],
  contrastLevel: [
    { id: "aaa", title: "AAA (7:1+)", description: "Maximum contrast for accessibility compliance", icon: Eye },
    { id: "aa", title: "AA (4.5:1+)", description: "Standard WCAG AA contrast ratio", icon: Shield },
    { id: "aa-large", title: "AA Large (3:1+)", description: "AA for text 18px+ or bold 14px+", icon: Crosshair },
    { id: "soft", title: "Soft Contrast", description: "Reduced contrast for elegant, subdued UI", icon: Moon },
    { id: "medium", title: "Medium Contrast", description: "Balanced contrast for comfortable reading", icon: Sun },
    { id: "high", title: "High Contrast", description: "Strong contrast for data-heavy interfaces", icon: Zap },
    { id: "custom", title: "Custom Ratio", description: "Define your own target contrast ratio", icon: Ruler },
    { id: "auto", title: "Auto-Adjust", description: "Automatically adjust contrast per component", icon: Contrast },
  ],
  accessibility: [
    { id: "wcag-aa", title: "WCAG AA", description: "Meet WCAG 2.1 AA level requirements", icon: Shield },
    { id: "wcag-aaa", title: "WCAG AAA", description: "Meet WCAG 2.1 AAA enhanced level", icon: Eye },
    { id: "colorblind", title: "Colorblind Safe", description: "Palette distinguishable for common deficiencies", icon: Contrast },
    { id: "dark-mode", title: "Dark Mode Ready", description: "Separate dark palette with proper contrast", icon: Moon },
    { id: "light-mode", title: "Light Mode Ready", description: "Optimized light palette for readability", icon: Sun },
    { id: "high-contrast", title: "High Contrast Mode", description: "Special mode for visual impairment", icon: Crosshair },
    { id: "reduced-motion", title: "Reduced Motion", description: "Color transitions respect motion preferences", icon: Square },
    { id: "screen-reader", title: "Screen Reader", description: "Color info conveyed via text alternatives", icon: BookOpen },
  ],
  colorMeaning: [
    { id: "brand-identity", title: "Brand Identity", description: "Colors that communicate brand values and personality", icon: Gem },
    { id: "emotional-tone", title: "Emotional Tone", description: "Evoke specific emotions through color psychology", icon: Heart },
    { id: "hierarchy", title: "Hierarchy & Structure", description: "Use color to establish visual hierarchy", icon: Layers },
    { id: "data-viz", title: "Data Visualization", description: "Palette optimized for charts and graphs", icon: PanelBottom },
    { id: "cultural", title: "Cultural Context", description: "Colors adapted for target regional audiences", icon: Globe },
    { id: "seasonal", title: "Seasonal Theme", description: "Palette that shifts with seasons or campaigns", icon: Sun },
    { id: "functional", title: "Functional Cues", description: "Color-coded status, alerts, and feedback", icon: Zap },
    { id: "artistic", title: "Artistic Expression", description: "Creative palette for artistic or editorial use", icon: Palette },
  ],
  modeSupport: [
    { id: "light-only", title: "Light Only", description: "Single light theme with no dark variant", icon: Sun },
    { id: "dark-only", title: "Dark Only", description: "Single dark theme with no light variant", icon: Moon },
    { id: "light-dark", title: "Light + Dark", description: "Both light and dark theme variants", icon: Contrast },
    { id: "os-preference", title: "OS Preference", description: "Auto-ArrowLeftRight based on system preference", icon: Monitor },
    { id: "time-based", title: "Time-Based ArrowLeftRight", description: "Auto-ArrowLeftRight at sunrise and sunset", icon: Sun },
    { id: "manual-toggle", title: "Manual Toggle", description: "User-controlled theme toggle ArrowLeftRight", icon: PanelTop },
    { id: "high-contrast-mode", title: "High Contrast Mode", description: "Separate high contrast accessibility mode", icon: Eye },
    { id: "brand-variant", title: "Brand Variant", description: "Theme that matches brand sub-brands", icon: Gem },
  ],
  outputFormat: [
    { id: "css-vars", title: "CSS Variables", description: "Custom properties for web use", icon: Code },
    { id: "tailwind", title: "Tailwind Config", description: "Tailwind CSS theme extension config", icon: FileText },
    { id: "scss", title: "SCSS Variables", description: "Sass variable definitions", icon: FileText },
    { id: "json-tokens", title: "Design Tokens (JSON)", description: "Platform-agnostic design token format", icon: FileJson },
    { id: "figma", title: "Figma Swatches", description: "Export as Figma color style JSON", icon: Palette },
    { id: "storybook", title: "Storybook Args", description: "Storybook control args format", icon: BookOpen },
    { id: "sketch", title: "Sketch Palette", description: "Sketch app color palette file", icon: PaintBucket },
    { id: "pdf-guide", title: "PDF Style Guide", description: "Printable color system reference guide", icon: Printer },
  ],
};

const dict: Record<string, Record<string, string>> = {
  baseHue: {
    "warm-red": "A vibrant warm red hue that commands attention and conveys energy, passion, and urgency. Use sparingly for primary CTAs and critical alerts to maximize visual impact without overwhelming the interface.",
    "cool-blue": "A calm, professional cool blue hue that inspires trust and reliability. Ideal for corporate applications, financial services, and healthcare interfaces where clarity and confidence are paramount.",
    "earthy-green": "A natural earthy green hue associated with growth, balance, and sustainability. Perfect for environmental brands, wellness apps, and organic product lines seeking an authentic connection.",
    "neutral-gray": "A balanced neutral gray that serves as a versatile foundation for any design system. Pairs well with any accent color and provides a sophisticated, modern baseline for content-focused interfaces.",
    "golden-yellow": "An optimistic golden yellow that radiates warmth, happiness, and creativity. Effective for highlighting features, drawing attention to promotions, and creating approachable brand personalities.",
    "deep-purple": "A rich deep purple conveying creativity, luxury, and spiritual depth. Well-suited for premium brands, creative tools, meditation apps, and products targeting artistic audiences.",
    "ocean-teal": "A refreshing ocean teal that combines blue's trustworthiness with green's natural feel. Works exceptionally well for travel, hospitality, health tech, and modern SaaS platforms.",
    "blush-pink": "A soft blush pink that feels warm, romantic, and approachable. Ideal for beauty brands, lifestyle products, children's apps, and any interface targeting a predominantly female audience.",
  },
  colorRole: {
    primary: "The primary color is your brand's hero — used for key interactive elements like buttons, links, active states, and prominent UI components. It should have sufficient contrast on all surfaces and convey your brand's core personality.",
    secondary: "The secondary color supports your primary without competing for attention. Use it for less prominent actions, secondary buttons, background accents, and UI elements that need differentiation from the primary.",
    accent: "The accent color is your spotlight — reserved for call-to-action buttons, promotional banners, sale tags, and any element requiring urgent attention. Use it sparingly to maintain its visual weight.",
    background: "The background color defines the canvas of your interface. Choose a light, neutral tone for light mode or a deep, muted tone for dark mode. Ensure it provides enough contrast with surface and text colors.",
    surface: "Surface colors define cards, modals, dropdowns, and elevated containers. They sit on top of the background and should be slightly lighter (light mode) or darker (dark mode) than the base background.",
    "text-primary": "Primary text color for headings, body paragraphs, and main content. Must have the highest contrast ratio against the background to ensure optimal readability across all device types.",
    "text-secondary": "Secondary text for captions, labels, metadata, and placeholder text. Lower contrast creates visual hierarchy and helps primary content stand out while remaining legible.",
    border: "Border colors define structural boundaries — dividers, input outlines, table rows, and card edges. Use subtle, low-contrast hues that provide definition without adding visual noise.",
  },
  paletteSize: {
    minimal: "A minimal palette of 3-4 colors: a primary brand color, a neutral, and a single accent. Best for MVPs, personal projects, or brands that want a clean, uncluttered visual identity.",
    compact: "A compact 5-7 color palette that adds surface and text color variants. Suitable for small business sites, landing pages, and simple applications with limited UI complexity.",
    standard: "A standard 8-12 color palette with extended neutrals and interaction states (hover, active, disabled). Appropriate for most web applications, marketing sites, and SaaS products.",
    expanded: "An expanded 13-20 color palette covering all design roles plus semantic colors (success, warning, error). Ideal for design systems supporting multiple products or complex enterprise applications.",
    comprehensive: "A comprehensive 21-30 color palette with multi-brand support, gradient stops, and chart colors. Designed for large organizations managing multiple brands within a single design system.",
    enterprise: "An enterprise-grade 31-50 color palette with full design token coverage, cross-platform considerations, and legacy color mappings. Suitable for global organizations with extensive accessibility requirements.",
    adaptive: "An adaptive palette that adjusts colors based on context such as time of day, user preferences, or content type. The palette contains base hues and algorithms rather than fixed color values.",
    generative: "A generative palette created by AI algorithms unique to each session or user. Every visitor experiences a personalized color scheme while maintaining brand consistency through constrained generation.",
  },
  contrastLevel: {
    aaa: "Maximum WCAG AAA contrast ratio of 7:1 for normal text and 4.5:1 for large text. Use for critical reading interfaces, document viewers, and accessibility-first products targeting users with visual impairments.",
    aa: "WCAG AA standard with 4.5:1 ratio for normal text and 3:1 for large text. The industry standard for most web applications and the minimum compliance level for government and enterprise software.",
    "aa-large": "WCAG AA Large Text with 3:1 minimum for text 18px and larger or 14px bold and larger. Acceptable for headlines, labels, and decorative text but not for body copy or critical information.",
    soft: "Soft contrast ratios of 2.5-3:1 for backgrounds, borders, and non-critical UI elements. Creates an elegant, airy aesthetic suitable for editorial designs, portfolios, and premium brand experiences.",
    medium: "Medium contrast of 3.5-4.5:1 that balances readability with aesthetic comfort. Ideal for content-rich applications where extended reading sessions demand reduced eye strain.",
    high: "High contrast of 5:1 and above for data-heavy interfaces, monitoring dashboards, and control rooms where quick information scanning is critical and visual clarity cannot be compromised.",
    custom: "Define custom contrast ratios per component type. Specify minimum ratios for body text, headings, UI controls, and decorative elements independently to fine-tune the visual hierarchy.",
    "auto-adjust": "Automatically adjust contrast ratios based on component context, surrounding colors, and ambient lighting conditions. Uses perceptual contrast algorithms rather than simple luminance calculations.",
  },
  accessibility: {
    "wcag-aa": "Meet WCAG 2.1 AA guidelines with 4.5:1 contrast for text, proper focus indicators, and non-color-dependent information conveyance. The minimum standard for legal compliance in most jurisdictions.",
    "wcag-aaa": "Meet WCAG 2.1 AAA enhanced guidelines with 7:1 contrast ratio, extended focus styles, and additional sensory characteristics beyond color. Required for specialized accessibility-focused products.",
    colorblind: "Design for color vision deficiencies including protanopia, deuteranopia, and tritanopia. Use patterns, icons, and labels alongside color to convey information without relying on hue perception alone.",
    "dark-mode": "Develop a complete dark mode palette where surfaces use deep, muted tones instead of pure black. Ensure all contrast ratios are maintained and text remains legible on dark backgrounds.",
    "light-mode": "Optimize the light mode palette for readability with appropriate luminance contrast, reduced glare, and comfortable brightness levels for extended use in well-lit environments.",
    "high-contrast-mode": "Provide a dedicated high contrast mode that overrides the standard palette with maximum contrast colors, thick borders, and underlines on links to assist users with moderate visual impairments.",
    "reduced-motion": "Honor the prefers-reduced-motion media query by eliminating or reducing color transitions, animations, and pulsing effects. Ensure all state changes are instant when motion is reduced.",
    "screen-reader": "Ensure all color-coded information is also conveyed via text labels, ARIA attributes, and semantic HTML. Color should never be the sole method of conveying meaning or status.",
  },
  colorMeaning: {
    "brand-identity": "Select colors that embody your brand's core values and personality traits. Red for boldness, blue for trust, green for growth — each hue should tell a deliberate story about who you are.",
    "emotional-tone": "Leverage color psychology to evoke specific emotional responses from users. Warm tones for excitement and energy, cool tones for calm and reliability, and neutrals for sophistication.",
    "hierarchy": "Use color weight and contrast strategically to establish clear visual hierarchy. Higher contrast elements draw attention first, while muted tones recede, guiding users through content naturally.",
    "data-viz": "Build a dedicated data visualization palette with colorblind-safe distinctions, sequential and diverging scales, and sufficient differentiation between adjacent data series for accurate interpretation.",
    cultural: "Adapt color choices for regional preferences and cultural associations. Red symbolizes luck in East Asia but danger in Western contexts. Research target markets thoroughly before finalizing palettes.",
    seasonal: "Design a seasonal palette system that can shift for holidays, campaigns, or quarterly refreshes. Define token overrides that let non-designers update the look without breaking accessibility.",
    functional: "Assign distinct colors to functional states: green for success, red for errors, yellow for warnings, blue for information. Ensure each functional color maintains accessibility across all surfaces.",
    artistic: "Push creative boundaries with unexpected color combinations, gradients, and saturation levels for artistic or editorial projects. Balance visual impact with readability for content-focused sections.",
  },
  modeSupport: {
    "light-only": "A single light mode theme optimized for daytime and well-lit environments. Use warm or neutral backgrounds with dark text. Simpler to maintain but excludes users who prefer dark interfaces.",
    "dark-only": "A single dark mode theme optimized for low-light environments and OLED displays. Use deep gray backgrounds with light text. Popular for developer tools, media consumption, and gaming apps.",
    "light-dark": "Support both light and dark themes with complete, independently tested palettes for each mode. Each color token maps to both themes, ensuring consistent experience regardless of preference.",
    "os-preference": "Read the user's system-level theme preference via prefers-color-scheme media query and apply the matching palette automatically. Respects the user's OS-wide setting without manual intervention.",
    "time-based": "Automatically ArrowLeftRight between light and dark themes based on local sunrise and sunset times. Provides a natural transition that reduces eye strain during evening hours without user input.",
    "manual-toggle": "Provide a prominent theme toggle allowing users to manually override their current mode. Persist the preference in localStorage or user settings to maintain choice across sessions.",
    "high-contrast-mode": "A dedicated high contrast mode accessible via quick toggle or system settings. Overrides all color tokens with maximum contrast ratios for users who need enhanced visual distinction.",
    "brand-variant": "Support multiple brand sub-themes within the same application. Each variant inherits the design system structure but overrides primary and accent colors for brand-specific sections.",
  },
  outputFormat: {
    "css-vars": "Export the palette as CSS custom properties defined in :root and optionally in a dark mode media query. Include fallback values and JSDoc comments documenting each token's usage.",
    tailwind: "Generate a Tailwind CSS configuration that extends the default theme with your color palette. Include all shades (50-950) where applicable and semantic color mappings for consistent usage.",
    scss: "Export as SCSS variables and maps with proper naming conventions. Include color functions for lightening, darkening, and mixing colors directly in your Sass build pipeline.",
    "json-tokens": "Output in standard design token JSON format following the Design Tokens Format Module specification. Include name, value, type, and description for each token with export-compatible structure.",
    figma: "Generate a Figma-compatible JSON file that can be imported as local styles. Include fill, stroke, and effect styles with proper naming conventions for design handoff workflows.",
    storybook: "Export as Storybook control argument presets for your component library. Each color token becomes a color control option in Storybook's addon controls panel for interactive documentation.",
    sketch: "Generate a Sketch palette JSON file that maps to Sketch's native color variables. Include proper formatting for direct import into Sketch's color management system for asset creation.",
    "pdf-guide": "Create a printable PDF style guide with swatch cards, color names, hex/RGB/HSL values, contrast ratio tables, and usage guidelines for stakeholder approval and developer reference.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const baseHue = selections.step1;
  const colorRole = selections.step2;
  const paletteSize = selections.step3;
  const contrastLevel = selections.step4;
  const accessibility = selections.step5;
  const colorMeaning = selections.step6;
  const modeSupport = selections.step7;
  const outputFormat = selections.step8;

  const lines: string[] = [];

  lines.push("# Color Palette Design System");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const bhLabel = Array.isArray(baseHue) ? baseHue.map(id => options.baseHue.find(o => o.id === id)?.title || id).join(", ") : options.baseHue.find(o => o.id === baseHue)?.title || baseHue;
  const bhNote = notes[`baseHue-${baseHue}`] || "";
  lines.push(`| Base Hue | ${bhLabel} | ${bhNote}`);
  const crLabel = Array.isArray(colorRole) ? colorRole.map(id => options.colorRole.find(o => o.id === id)?.title || id).join(", ") : options.colorRole.find(o => o.id === colorRole)?.title || colorRole;
  const crNote = notes[`colorRole-${colorRole}`] || "";
  lines.push(`| Color Role | ${crLabel} | ${crNote}`);
  const psLabel = Array.isArray(paletteSize) ? paletteSize.map(id => options.paletteSize.find(o => o.id === id)?.title || id).join(", ") : options.paletteSize.find(o => o.id === paletteSize)?.title || paletteSize;
  const psNote = notes[`paletteSize-${paletteSize}`] || "";
  lines.push(`| Palette Size | ${psLabel} | ${psNote}`);
  const clLabel = Array.isArray(contrastLevel) ? contrastLevel.map(id => options.contrastLevel.find(o => o.id === id)?.title || id).join(", ") : options.contrastLevel.find(o => o.id === contrastLevel)?.title || contrastLevel;
  const clNote = notes[`contrastLevel-${contrastLevel}`] || "";
  lines.push(`| Contrast Level | ${clLabel} | ${clNote}`);
  const acLabel = Array.isArray(accessibility) ? accessibility.map(id => options.accessibility.find(o => o.id === id)?.title || id).join(", ") : options.accessibility.find(o => o.id === accessibility)?.title || accessibility;
  const acNote = notes[`accessibility-${accessibility}`] || "";
  lines.push(`| Accessibility | ${acLabel} | ${acNote}`);
  const cmLabel = Array.isArray(colorMeaning) ? colorMeaning.map(id => options.colorMeaning.find(o => o.id === id)?.title || id).join(", ") : options.colorMeaning.find(o => o.id === colorMeaning)?.title || colorMeaning;
  const cmNote = notes[`colorMeaning-${colorMeaning}`] || "";
  lines.push(`| Color Meaning | ${cmLabel} | ${cmNote}`);
  const msLabel = Array.isArray(modeSupport) ? modeSupport.map(id => options.modeSupport.find(o => o.id === id)?.title || id).join(", ") : options.modeSupport.find(o => o.id === modeSupport)?.title || modeSupport;
  const msNote = notes[`modeSupport-${modeSupport}`] || "";
  lines.push(`| Mode Support | ${msLabel} | ${msNote}`);
  const ofLabel = Array.isArray(outputFormat) ? outputFormat.map(id => options.outputFormat.find(o => o.id === id)?.title || id).join(", ") : options.outputFormat.find(o => o.id === outputFormat)?.title || outputFormat;
  const ofNote = notes[`outputFormat-${outputFormat}`] || "";
  lines.push(`| Output Format | ${ofLabel} | ${ofNote}`);
  lines.push("");

  lines.push("## Color Philosophy");
  lines.push("");
  if (baseHue) {
    lines.push(`### Base Hue: ${bhLabel}`);
    lines.push("");
    lines.push(Array.isArray(baseHue) ? baseHue.map(v => dict.baseHue[v] || v).join(", ") : dict.baseHue[baseHue] || baseHue);
    if (bhNote) lines.push(`> **Note:** ${bhNote}`);
    lines.push("");
  }

  if (colorRole) {
    lines.push(`### Color Role: ${crLabel}`);
    lines.push("");
    lines.push(Array.isArray(colorRole) ? colorRole.map(v => dict.colorRole[v] || v).join(", ") : dict.colorRole[colorRole] || colorRole);
    if (crNote) lines.push(`> **Note:** ${crNote}`);
    lines.push("");
  }

  if (paletteSize) {
    lines.push(`### Palette Size: ${psLabel}`);
    lines.push("");
    lines.push(Array.isArray(paletteSize) ? paletteSize.map(v => dict.paletteSize[v] || v).join(", ") : dict.paletteSize[paletteSize] || paletteSize);
    if (psNote) lines.push(`> **Note:** ${psNote}`);
    lines.push("");
  }

  if (contrastLevel) {
    lines.push(`### Contrast Level: ${clLabel}`);
    lines.push("");
    lines.push(Array.isArray(contrastLevel) ? contrastLevel.map(v => dict.contrastLevel[v] || v).join(", ") : dict.contrastLevel[contrastLevel] || contrastLevel);
    if (clNote) lines.push(`> **Note:** ${clNote}`);
    lines.push("");
  }

  if (accessibility) {
    lines.push(`### Accessibility: ${acLabel}`);
    lines.push("");
    lines.push(Array.isArray(accessibility) ? accessibility.map(v => dict.accessibility[v] || v).join(", ") : dict.accessibility[accessibility] || accessibility);
    if (acNote) lines.push(`> **Note:** ${acNote}`);
    lines.push("");
  }

  if (colorMeaning) {
    lines.push(`### Color Meaning: ${cmLabel}`);
    lines.push("");
    lines.push(Array.isArray(colorMeaning) ? colorMeaning.map(v => dict.colorMeaning[v] || v).join(", ") : dict.colorMeaning[colorMeaning] || colorMeaning);
    if (cmNote) lines.push(`> **Note:** ${cmNote}`);
    lines.push("");
  }

  if (modeSupport) {
    lines.push(`### Mode Support: ${msLabel}`);
    lines.push("");
    lines.push(Array.isArray(modeSupport) ? modeSupport.map(v => dict.modeSupport[v] || v).join(", ") : dict.modeSupport[modeSupport] || modeSupport);
    if (msNote) lines.push(`> **Note:** ${msNote}`);
    lines.push("");
  }

  if (outputFormat) {
    lines.push(`### Output Format: ${ofLabel}`);
    lines.push("");
    lines.push(Array.isArray(outputFormat) ? outputFormat.map(v => dict.outputFormat[v] || v).join(", ") : dict.outputFormat[outputFormat] || outputFormat);
    if (ofNote) lines.push(`> **Note:** ${ofNote}`);
    lines.push("");
  }

  lines.push("## Palette Token Map");
  lines.push("");
  lines.push("| Token Name | Role | Light Mode Value | Dark Mode Value | Usage");
  lines.push("|------------|------|-----------------|-----------------|-------");
  lines.push("| `--color-primary` | Primary Brand | `#...` | `#...` | Buttons, links, active states");
  lines.push("| `--color-primary-hover` | Primary Hover | `#...` | `#...` | Button hover states");
  lines.push("| `--color-primary-active` | Primary Active | `#...` | `#...` | Button pressed states");
  lines.push("| `--color-secondary` | Secondary | `#...` | `#...` | Secondary actions, badges");
  lines.push("| `--color-accent` | Accent | `#...` | `#...` | CTAs, promotions, highlights");
  lines.push("| `--color-bg` | Background | `#...` | `#...` | Page background");
  lines.push("| `--color-surface` | Surface | `#...` | `#...` | Cards, modals, panels");
  lines.push("| `--color-text` | Text Primary | `#...` | `#...` | Body copy, headings");
  lines.push("| `--color-text-secondary` | Text Secondary | `#...` | `#...` | Captions, labels");
  lines.push("| `--color-border` | Border | `#...` | `#...` | Dividers, outlines");
  lines.push("");

  lines.push("## Contrast Verification");
  lines.push("");
  lines.push("| Color Pair | Ratio | WCAG AA | WCAG AAA | Status");
  lines.push("|------------|-------|---------|----------|--------");
  lines.push("| Primary on Surface | 4.5:1 | ✓ Pass | ✗ Fail | Good for AA");
  lines.push("| Text on Background | 7.1:1 | ✓ Pass | ✓ Pass | AAA compliant");
  lines.push("| Text Secondary on Surface | 4.5:1 | ✓ Pass | ✗ Fail | AA compliant");
  lines.push("| Accent on Surface | 4.5:1 | ✓ Pass | ✗ Fail | AA compliant");
  lines.push("| Error on Surface | 4.5:1 | ✓ Pass | ✗ Fail | AA compliant");
  lines.push("");

  lines.push("## Light Mode Palette");
  lines.push("");
  lines.push("```css");
  lines.push(":root {");
  lines.push("  /* Primary palette based on " + bhLabel + " */");
  lines.push("  --color-primary: #...;");
  lines.push("  --color-secondary: #...;");
  lines.push("  --color-accent: #...;");
  lines.push("  /* Neutral palette */");
  lines.push("  --color-bg: #FFFFFF;");
  lines.push("  --color-surface: #F5F5F5;");
  lines.push("  --color-text: #1A1A1A;");
  lines.push("  --color-text-secondary: #666666;");
  lines.push("  --color-border: #D4D4D4;");
  lines.push("  /* Semantic colors */");
  lines.push("  --color-success: #2E7D32;");
  lines.push("  --color-warning: #F57F17;");
  lines.push("  --color-error: #C62828;");
  lines.push("  --color-info: #1565C0;");
  lines.push("}");
  lines.push("```");
  lines.push("");

  lines.push("## Dark Mode Palette");
  lines.push("");
  lines.push("```css");
  lines.push("@media (prefers-color-scheme: dark) {");
  lines.push("  :root {");
  lines.push("    --color-primary: #...;");
  lines.push("    --color-secondary: #...;");
  lines.push("    --color-accent: #...;");
  lines.push("    --color-bg: #121212;");
  lines.push("    --color-surface: #1E1E1E;");
  lines.push("    --color-text: #E0E0E0;");
  lines.push("    --color-text-secondary: #9E9E9E;");
  lines.push("    --color-border: #333333;");
  lines.push("    --color-success: #66BB6A;");
  lines.push("    --color-warning: #FFB74D;");
  lines.push("    --color-error: #EF5350;");
  lines.push("    --color-info: #42A5F5;");
  lines.push("  }");
  lines.push("}");
  lines.push("```");
  lines.push("");

  lines.push("## Accessibility Guidelines");
  lines.push("");
  lines.push("- **Minimum Contrast**: All text meets WCAG AA 4.5:1 minimum contrast ratio against background.");
  lines.push("- **Color Independence**: Never rely solely on color to convey information. Use icons, labels, and patterns.");
  lines.push("- **Focus Indicators**: All interactive elements have visible focus rings with 3:1 minimum contrast.");
  lines.push("- **Target Sizes**: Interactive color swatches and pickers meet 44x44px minimum touch target size.");
  lines.push("- **Testing**: Verify palette with colorblind simulators for protanopia, deuteranopia, and tritanopia.");
  lines.push("- **Dark Mode**: Invert or adjust contrast appropriately for dark mode without losing hierarchy.");
  lines.push("- **Customization**: Allow users to override colors via browser extensions or OS accessibility settings.");
  lines.push("");

  lines.push("## Implementation Recommendations");
  lines.push("");
  if (outputFormat === "tailwind") {
    lines.push("- Use Tailwind CSS `theme.extend.colors` to map palette tokens to utility classes.");
    lines.push("- Generate all 50-950 shade variants automatically from base color values using OKLCH interpolation.");
    lines.push("- Configure dark mode using Tailwind's `darkMode: 'class'` or `darkMode: 'media'` strategy.");
  } else if (outputFormat === "css-vars") {
    lines.push("- Define all tokens as CSS custom properties on `:root` for easy overrides and theming.");
    lines.push("- Use `color-mix()` for hover and active states instead of hardcoding additional values.");
    lines.push("- Provide fallback values for browsers that do not support CSS custom properties.");
  } else {
    lines.push("- Use an automated color token pipeline to generate platform-specific output from a single source of truth.");
    lines.push("- Version your palette tokens in a design token management system for cross-team consistency.");
    lines.push("- Run automated contrast checks as part of your CI pipeline to catch regressions.");
  }
  lines.push("- Document each color token's intended usage, accessible contrast pairs, and interaction states.");
  lines.push("- Create a playground page where all color tokens are displayed for visual review and approval.");
  lines.push("");

  lines.push("## Performance & Consistency");
  lines.push("");
  lines.push("| Concern | Recommendation");
  lines.push("|---------|--------------");
  lines.push("| CSS Size | Use CSS custom properties — they add zero file size overhead vs static values");
  lines.push("| Rendering | Avoid frequent repaints by minimizing color changes in animations");
  lines.push("| Consistency | Use a single source of truth — do not duplicate tokens across multiple formats");
  lines.push("| Updates | Update palette in design tokens first, then regenerate platform output");
  lines.push("| Caching | Cache generated tokens — palette changes infrequently after initial design");
  lines.push("");

  lines.push("## Color Palette Flow");
  lines.push("");
  lines.push("```");
  lines.push("┌─────────────────────┐");
  lines.push(`│   Base Hue Choice   │`);
  lines.push(`│      ${bhLabel.padEnd(17)}│`);
  lines.push("└──────────┬──────────┘");
  lines.push("           ▼");
  lines.push("┌─────────────────────┐");
  lines.push(`│  Color Role Definition`);
  lines.push(`│      ${crLabel.padEnd(17)}│`);
  lines.push("└──────────┬──────────┘");
  lines.push("           ▼");
  lines.push("┌─────────────────────┐");
  lines.push(`│   Palette Scaling   │`);
  lines.push(`│   ${psLabel.padEnd(18)}│`);
  lines.push("└──────────┬──────────┘");
  lines.push("           ▼");
  lines.push("┌─────────────────────┐");
  lines.push(`│  Contrast Targeting │`);
  lines.push(`│    ${clLabel.padEnd(18)}│`);
  lines.push("└──────────┬──────────┘");
  lines.push("           ▼");
  lines.push("┌─────────────────────┐");
  lines.push(`│ Accessibility Checks │`);
  lines.push(`│   ${acLabel.padEnd(18)}│`);
  lines.push("└──────────┬──────────┘");
  lines.push("           ▼");
  lines.push("┌─────────────────────┐");
  lines.push(`│  Color Meaning & Use │`);
  lines.push(`│   ${cmLabel.padEnd(18)}│`);
  lines.push("└──────────┬──────────┘");
  lines.push("           ▼");
  lines.push("┌─────────────────────┐");
  lines.push(`│   Theme Mode Config │`);
  lines.push(`│   ${msLabel.padEnd(18)}│`);
  lines.push("└──────────┬──────────┘");
  lines.push("           ▼");
  lines.push("┌─────────────────────┐");
  lines.push(`│     Export Output   │`);
  lines.push(`│   ${ofLabel.padEnd(18)}│`);
  lines.push("└─────────────────────┘");
  lines.push("```");
  lines.push("");

  lines.push("## Maintenance & Governance");
  lines.push("");
  lines.push("- **Token Naming**: Use consistent `--color-{role}-{variant}` naming across all platforms.");
  lines.push("- **Review Cadence**: Audit the color palette quarterly for brand alignment and accessibility compliance.");
  lines.push("- **Deprecation**: Mark deprecated tokens with `--color-{role}-deprecated` and set a removal timeline.");
  lines.push("- **Contribution**: Require accessibility review for any new color tokens added to the system.");
  lines.push("- **Documentation**: Keep living documentation with real-world examples of each color in use.");
  lines.push("- **Versioning**: Use semantic versioning for the color token package to communicate breaking changes.");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Color Palette Generator_");

  return lines.join("\n");
}

export default function ColorPalettePage() {
  return (
    <ToolShell
      title="Color Palette Generator"
      steps={[
        { id: 1, label: "Base Hue", component: (p) => (
          <GenericStep {...p} title="Select Base Hue" description="Choose the foundational hue for your palette" options={options.baseHue} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="baseHue" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Color Role", component: (p) => (
          <GenericStep {...p} title="Define Color Role" description="What role should this color fulfill?" options={options.colorRole} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="colorRole" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Palette Size", component: (p) => (
          <GenericStep {...p} title="Choose Palette Size" description="How many colors should the palette contain?" options={options.paletteSize} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="paletteSize" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Contrast", component: (p) => (
          <GenericStep {...p} title="Set Contrast Level" description="What contrast target should colors meet?" options={options.contrastLevel} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="contrastLevel" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Accessibility", component: (p) => (
          <GenericStep {...p} title="Select Accessibility Standards" description="Which accessibility requirements apply?" options={options.accessibility} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="accessibility" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Color Meaning", component: (p) => (
          <GenericStep {...p} title="Define Color Meaning" description="What purpose does the color serve?" options={options.colorMeaning} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="colorMeaning" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Mode", component: (p) => (
          <GenericStep {...p} title="Choose Mode Support" description="Which theme modes should be supported?" options={options.modeSupport} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="modeSupport" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Output", component: (p) => (
          <GenericStep {...p} title="Select Output Format" description="How should the palette be exported?" options={options.outputFormat} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="outputFormat" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}












