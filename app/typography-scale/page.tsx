"use client";

import type { FC } from "react";
import {
  TextQuote, Text, Type, Ruler, Bold, Italic, Underline,
  Baseline, ArrowUpDown, ArrowLeftRight, AlignCenter,
  Monitor, Smartphone, Tablet, BookOpen, FileText, Code,
  PanelTop, Layers, Split, GitBranch, Grid3x3, Pen,
  Diamond, Circle, Star, Zap, Sun, Moon, RefreshCw,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  baseSize: [
    { id: "10px", title: "10px (Tiny)", description: "Ultra-compact base for dense data dashboards", icon: Text },
    { id: "12px", title: "12px (Small)", description: "Compact base for tooltip-heavy interfaces", icon: TextQuote },
    { id: "14px", title: "14px (Standard)", description: "Common base for most web applications", icon: Type },
    { id: "16px", title: "16px (Large)", description: "Comfortable base for readability-focused apps", icon: BookOpen },
    { id: "18px", title: "18px (Extra Large)", description: "Accessibility-first base for senior users", icon: Star },
    { id: "20px", title: "20px (Oversized)", description: "Large base for children's apps or signage", icon: Diamond },
    { id: "fluid", title: "Fluid Viewport", description: "Responsive base that scales with viewport", icon: Monitor },
    { id: "clamp", title: "Clamp Function", description: "CSS clamp() for fluid yet bounded scaling", icon: Ruler },
  ],
  scaleRatio: [
    { id: "minor-second", title: "Minor Second (1.067)", description: "Subtle, refined increments — tight hierarchy", icon: ArrowUpDown },
    { id: "major-second", title: "Major Second (1.125)", description: "Conservative scale for text-heavy designs", icon: ArrowLeftRight },
    { id: "minor-third", title: "Minor Third (1.200)", description: "Popular musical scale — balanced proportions", icon: Diamond },
    { id: "major-third", title: "Major Third (1.250)", description: "Expressive but grounded — great for articles", icon: Star },
    { id: "perfect-fourth", title: "Perfect Fourth (1.333)", description: "Dramatic, clear hierarchy for marketing sites", icon: Sun },
    { id: "augmented-fourth", title: "Augmented Fourth (1.414)", description: "Bold contrast — impactful hero sections", icon: Zap },
    { id: "perfect-fifth", title: "Perfect Fifth (1.500)", description: "Very dramatic — large display type pairing", icon: Moon },
    { id: "golden-ratio", title: "Golden Ratio (1.618)", description: "Nature-inspired — maximum visual harmony", icon: RefreshCw },
  ],
  fontCategories: [
    { id: "serif-heading", title: "Serif Headings", description: "Traditional, authoritative serif for headers", icon: TextQuote },
    { id: "sans-heading", title: "Sans-Serif Headings", description: "Modern, clean sans-serif for headers", icon: Type },
    { id: "serif-body", title: "Serif Body", description: "Readable serif for long-form text", icon: BookOpen },
    { id: "sans-body", title: "Sans-Serif Body", description: "Clean sans-serif for body copy", icon: Text },
    { id: "mono-code", title: "Monospace Code", description: "Fixed-width for code snippets", icon: Code },
    { id: "display", title: "Display/Decorative", description: "Expressive font for hero text and logos", icon: Pen },
    { id: "handwriting", title: "Handwriting/Script", description: "Personal, hand-drawn style for accents", icon: Star },
    { id: "ui-system", title: "UI System Font", description: "Native OS font stack for performance", icon: Monitor },
  ],
  weights: [
    { id: "thin", title: "Thin (100)", description: "Ultra-light for large display text only", icon: Text },
    { id: "light", title: "Light (300)", description: "Delicate weight for headings and hero text", icon: TextQuote },
    { id: "regular", title: "Regular (400)", description: "Standard body text weight", icon: Type },
    { id: "medium", title: "Medium (500)", description: "Slightly heavier for subheadings", icon: Bold },
    { id: "semibold", title: "Semi-Bold (600)", description: "Emphasized headings and buttons", icon: Bold },
    { id: "bold", title: "Bold (700)", description: "Strong emphasis for headings and labels", icon: Bold },
    { id: "extrabold", title: "Extra Bold (800)", description: "Heavy weight for impactful headlines", icon: Bold },
    { id: "black", title: "Black (900)", description: "Maximum emphasis for posters and banners", icon: Bold },
  ],
  lineHeights: [
    { id: "tight", title: "Tight (1.0-1.1)", description: "Compressed — headings and display text", icon: ArrowUpDown },
    { id: "snug", title: "Snug (1.2-1.3)", description: "Compact — subheadings and navigation", icon: Baseline },
    { id: "normal", title: "Normal (1.4-1.5)", description: "Standard — body copy paragraphs", icon: Text },
    { id: "relaxed", title: "Relaxed (1.6-1.7)", description: "Spacious — long-form reading", icon: BookOpen },
    { id: "loose", title: "Loose (1.8-2.0)", description: "Very spacious — accessibility-friendly", icon: Star },
    { id: "custom", title: "Custom Value", description: "Specify exact line-height multiplier", icon: Ruler },
    { id: "fluid-tight", title: "Fluid Tight", description: "Clamp-based that scales with font size", icon: Layers },
    { id: "unitless", title: "Unitless (Recommended)", description: "Relative unitless values for inheritance", icon: RefreshCw },
  ],
  letterSpacing: [
    { id: "tighter", title: "Tighter (-0.05em)", description: "Condensed tracking for headlines", icon: ArrowLeftRight },
    { id: "tight", title: "Tight (-0.025em)", description: "Slightly condensed for subheadings", icon: Split },
    { id: "normal", title: "Normal (0em)", description: "Default tracking for body text", icon: AlignCenter },
    { id: "wide", title: "Wide (0.05em)", description: "Spaced out for uppercase labels", icon: GitBranch },
    { id: "wider", title: "Wider (0.1em)", description: "Notably spaced for accessibility", icon: Grid3x3 },
    { id: "widest", title: "Widest (0.2em)", description: "Maximum spacing for decorative text", icon: Diamond },
    { id: "mono-spacing", title: "Mono Specific", description: "Adjusted tracking for monospace fonts", icon: Code },
    { id: "responsive", title: "Responsive Tracking", description: "Adjusts spacing per viewport size", icon: Monitor },
  ],
  pairing: [
    { id: "serif-sans", title: "Serif + Sans-Serif", description: "Classic pairing — headings serif, body sans", icon: TextQuote },
    { id: "sans-serif", title: "Sans-Serif + Serif", description: "Modern pairing — headings sans, body serif", icon: Type },
    { id: "sans-sans", title: "Sans-Serif + Sans-Serif", description: "Clean minimal — two distinct sans families", icon: Text },
    { id: "serif-serif", title: "Serif + Serif", description: "Traditional — two contrasting serif families", icon: BookOpen },
    { id: "sans-mono", title: "Sans-Serif + Mono", description: "Technical — body sans, code mono", icon: Code },
    { id: "display-sans", title: "Display + Sans-Serif", description: "Expressive — decorative headers, clean body", icon: Pen },
    { id: "display-serif", title: "Display + Serif", description: "Editorial — decorative headers, serif body", icon: Star },
    { id: "mono-sans", title: "Mono + Sans-Serif", description: "Developer-friendly — mono headings, sans body", icon: Code },
  ],
  responsive: [
    { id: "static", title: "Static Scale", description: "Same type scale at all breakpoints", icon: Monitor },
    { id: "mobile-first", title: "Mobile First", description: "Scale grows proportionally on larger screens", icon: Smartphone },
    { id: "desktop-first", title: "Desktop First", description: "Scale shrinks proportionally on smaller screens", icon: Monitor },
    { id: "fluid-scale", title: "Fluid Scale", description: "Smooth interpolation between breakpoints", icon: Ruler },
    { id: "step-adjust", title: "Step Adjustment", description: "Adjust specific steps per breakpoint", icon: Layers },
    { id: "modular-responsive", title: "Modular Responsive", description: "Different ratios at different breakpoints", icon: Grid3x3 },
    { id: "container-based", title: "Container Based", description: "Scale responds to container width, not viewport", icon: Split },
    { id: "custom-breakpoints", title: "Custom Breakpoints", description: "Define custom breakpoints for scale shifts", icon: Star },
  ],
};

const dict: Record<string, Record<string, string>> = {
  baseSize: {
    "10px": "A 10px base produces very compact type. Suitable for data-dense interfaces like dashboards, admin panels, and monitoring tools where information density is prioritized over reading comfort.",
    "12px": "A 12px base offers a compact but generally readable scale. Common in tool-heavy enterprise applications where maximizing visible content on screen is a primary concern.",
    "14px": "The 14px base is the traditional sweet spot for web typography. Provides a good balance of readability and density, making it suitable for most general-purpose web applications.",
    "16px": "A 16px base prioritizes reading comfort over density. Excellent for content-heavy sites, blogs, news publications, and any application where extended reading sessions are common.",
    "18px": "An 18px base is deliberately generous and accessibility-forward. Designed for applications targeting older adults, users with visual impairments, or children's educational content.",
    "20px": "An oversized 20px base makes a bold statement. Best suited for minimal content pages, signage-style interfaces, kiosks, or applications where large touch targets are essential.",
    fluid: "A fluid viewport base uses viewport units (vw) so the root font size scales continuously with the browser window. GitBranch with clamp() for minimum and maximum bounds.",
    clamp: "Use CSS clamp() to define a responsive base size with minimum, preferred, and maximum values. Example: clamp(14px, 1rem + 0.5vw, 18px) provides fluid scaling within bounds.",
  },
  scaleRatio: {
    "minor-second": "The minor second ratio (1.067) produces very subtle size increments. Best for text-heavy interfaces where maintaining a flat hierarchy is important and dramatic size jumps are undesirable.",
    "major-second": "The major second ratio (1.125) provides conservative but clear size progression. Widely used in editorial design and long-form reading experiences where subtle hierarchy suffices.",
    "minor-third": "The minor third ratio (1.200) is the most commonly recommended starting point for web typography. Provides clear differentiation between levels without being overly dramatic.",
    "major-third": "The major third ratio (1.250) creates more noticeable size steps while remaining grounded. Excellent for marketing pages that need clear visual hierarchy without sacrificing sophistication.",
    "perfect-fourth": "The perfect fourth ratio (1.333) produces dramatic size differences ideal for creating strong visual impact. Perfect for landing pages, portfolios, and brand hero sections.",
    "augmented-fourth": "The augmented fourth ratio (1.414) creates bold, unmistakable hierarchy. Use with restraint — best for designs where typographic contrast is a defining aesthetic feature.",
    "perfect-fifth": "The perfect fifth ratio (1.500) is extremely dramatic. Reserved for display typography, poster-like layouts, and situations where maximum contrast between type levels is desired.",
    "golden-ratio": "The golden ratio (1.618) is nature's proportion, believed to be intrinsically harmonious. Creates the most visually pleasing but also most dramatic type scale. Use for high-end brand experiences.",
  },
  fontCategories: {
    "serif-heading": "Serif headings convey tradition, authority, and elegance. Pair with simpler sans-serif body text for contrast. Best for editorial, legal, academic, and luxury brand applications.",
    "sans-heading": "Sans-serif headings feel modern, clean, and approachable. Versatile across industries and pair well with most body fonts. The safe choice for contemporary web design.",
    "serif-body": "Serif body text excels for long-form reading. The serifs guide the eye horizontally, reducing fatigue during extended reading. Ideal for blogs, news, and educational content.",
    "sans-body": "Sans-serif body text offers excellent on-screen readability, especially at smaller sizes. The clean letterforms render well on low-resolution displays. Best for most web applications.",
    "mono-code": "Monospace fonts are essential for code display. Every character occupies the same width, making alignment predictable. Choose fonts with clear punctuation and zero/letter differentiation.",
    display: "Display or decorative fonts are for hero text, logos, and short impactful phrases only. They sacrifice readability for personality and should never be used for body copy or small sizes.",
    handwriting: "Handwriting and script fonts add a personal, human touch. Use extremely sparingly for accent text, pull quotes, or signature elements. Never use for body text or UI labels.",
    "ui-system": "System font stacks (SF Pro, Segoe UI, Roboto) load instantly because they are already installed on the device. Provides best performance but limited aesthetic control.",
  },
  weights: {
    thin: "Thin (100) weight is suitable only for very large display text (48px+) where the light stroke adds elegance. Avoid at small sizes where legibility degrades significantly.",
    light: "Light (300) works for large headings, hero text, and oversized quotes. Provides a delicate, airy feel but should be avoided for body copy or small UI text.",
    regular: "Regular (400) is the standard body text weight. Most readable weight for continuous reading at sizes below 18px. Use for paragraphs, lists, and general content.",
    medium: "Medium (500) is slightly heavier than regular and adds emphasis without the weight of bold. Excellent for subheadings, navigation items, and button labels.",
    semibold: "Semi-Bold (600) provides clear emphasis while remaining approachable. Ideal for section headings, card titles, and form labels where medium is too light but bold is too heavy.",
    bold: "Bold (700) creates strong emphasis and clear hierarchy. Use for primary headings, important labels, and call-to-action text. Avoid using bold for long passages.",
    extrabold: "Extra Bold (800) is heavy and commanding. Reserved for headlines, banners, and any text that needs to dominate the visual hierarchy. Pair with lighter weights for contrast.",
    black: "Black (900) is the heaviest common weight. Use only for poster-scale display text, mega-menus, or brief impactful phrases. Rarely needed in standard UI typography.",
  },
  lineHeights: {
    tight: "Tight line-height of 1.0-1.1 is for headings and display text where each line is self-contained. Avoid for multi-line text as descenders will collide with the next line.",
    snug: "Snug line-height of 1.2-1.3 works well for subheadings, navigation, and short UI text blocks. Provides compact spacing while maintaining basic readability for 2-3 line blocks.",
    normal: "Normal line-height of 1.4-1.5 is the standard for body copy. Provides comfortable spacing between lines for extended reading without wasting excessive vertical space.",
    relaxed: "Relaxed line-height of 1.6-1.7 improves readability for long-form content. The extra whitespace helps the eye track across lines, reducing fatigue during extended reading sessions.",
    loose: "Loose line-height of 1.8-2.0 maximizes readability and is recommended for accessibility-focused designs. Provides ample space for users who need larger text or have tracking difficulties.",
    custom: "Define a custom line-height multiplier for specific use cases. Unitless values are recommended as they inherit proportionally from the element's computed font size.",
    "fluid-tight": "Fluid tight line-height uses clamp() to dynamically adjust between a tight and relaxed value depending on the viewport. Tighter on mobile, more relaxed on desktop.",
    unitless: "Unitless line-height values (e.g., 1.5) are the WCAG recommendation. They scale proportionally with the element's font-size, preventing spacing issues when font size changes.",
  },
  letterSpacing: {
    tighter: "Tighter letter-spacing (-0.05em) condenses text, useful for large headlines where default spacing looks too loose. Apply only to display-sized text (48px+).",
    tight: "Tight letter-spacing (-0.025em) provides subtle compression for subheadings and medium headings. Improves visual density without affecting readability at larger sizes.",
    normal: "Normal letter-spacing (0em) is the default and appropriate for body text and most UI elements. Do not apply negative tracking to body copy as it harms legibility.",
    wide: "Wide letter-spacing (0.05em) is commonly used for uppercase text, labels, and small caps. The added space improves readability of all-caps text significantly.",
    wider: "Wider letter-spacing (0.1em) creates a noticeable spacious feel. Suitable for nav links, button text, and short uppercase labels where each letter needs distinct visibility.",
    widest: "Widest letter-spacing (0.2em) is for decorative use only. Suitable for logos, monograms, or short display text where the aesthetic of widely spaced letters is intentional.",
    "mono-spacing": "Monospace fonts often require adjusted letter-spacing because of their uniform character widths. Slight positive tracking (+0.02em) can improve readability for code.",
    responsive: "Responsive tracking adjusts letter-spacing based on viewport or container size. Tighter on small screens to save space, wider on large screens for elegance and readability.",
  },
  pairing: {
    "serif-sans": "The classic serif headings + sans-serif body pairing combines warmth with clarity. The serif headings add character and authority while the sans body ensures clean readability.",
    "sans-serif": "The modern sans-serif headings + serif body pairing feels contemporary yet sophisticated. Sans headings feel clean and direct while the serif body invites extended reading.",
    "sans-sans": "The two sans-serif families approach creates a clean, minimal aesthetic. Choose fonts with distinct personalities (e.g., geometric + humanist) to maintain visual interest.",
    "serif-serif": "Paired serif families create a traditional, scholarly feel. Contrast a sturdy slab serif for headings with a delicate old-style serif for body to establish clear hierarchy.",
    "sans-mono": "Sans-serif + monospace is the technical designer's choice. Clean sans body with monospace for code, data, or technical terms. Popular in developer tools and documentation.",
    "display-sans": "A display font for headlines paired with a neutral sans-serif for body creates maximum visual impact. The display font carries the personality while the sans family ensures usability.",
    "display-serif": "Display + serif is an editorial powerhouse. A dramatic display face headlines articles while a readable serif handles long-form body copy. Seen in high-end digital magazines.",
    "mono-sans": "Monospace headings with sans-serif body is an unconventional, developer-friendly pairing. The monospace commands attention while sans provides comfortable long-form reading.",
  },
  responsive: {
    static: "A static type scale applies the same font sizes at every breakpoint. Simplest to implement but does not optimize for different screen sizes — text may be too large on mobile or too small on desktop.",
    "mobile-first": "Mobile-first scaling defines sizes for small screens then increases them at defined breakpoints. Ensures readability on mobile while taking advantage of desktop screen real estate.",
    "desktop-first": "Desktop-first defines large sizes then reduces them for smaller screens. Risk of starting too large and mobile text becoming oversized or requiring excessive scrolling.",
    "fluid-scale": "Fluid type scale uses viewport units or clamp() to smoothly interpolate between minimum and maximum sizes. Each step becomes a formula rather than a fixed value per breakpoint.",
    "step-adjust": "Step adjustment keeps the same base scale but tweaks individual step values per breakpoint. For example, h1 might be 48px on desktop but 36px on tablet while body remains 16px.",
    "modular-responsive": "Modular responsive uses different scale ratios at different breakpoints. A conservative ratio (1.200) on mobile and a more dramatic ratio (1.333) on desktop for enhanced hierarchy.",
    "container-based": "Container-based scaling uses container query units (cqw) rather than viewport units. The type scale responds to the component's container width, enabling truly modular responsive typography.",
    "custom-breakpoints": "Define application-specific breakpoints for typography that may differ from general layout breakpoints. Useful when type size adjustments need to happen at different thresholds.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const baseSize = selections.step1;
  const scaleRatio = selections.step2;
  const fontCategories = selections.step3;
  const weights = selections.step4;
  const lineHeights = selections.step5;
  const letterSpacing = selections.step6;
  const pairing = selections.step7;
  const responsive = selections.step8;

  const lines: string[] = [];

  lines.push("# Typography Scale System");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const bsLabel = Array.isArray(baseSize) ? baseSize.map(id => options.baseSize.find(o => o.id === id)?.title || id).join(", ") : options.baseSize.find(o => o.id === baseSize)?.title || baseSize;
  const bsNote = notes[`baseSize-${baseSize}`] || "";
  lines.push(`| Base Size | ${bsLabel} | ${bsNote}`);
  const srLabel = Array.isArray(scaleRatio) ? scaleRatio.map(id => options.scaleRatio.find(o => o.id === id)?.title || id).join(", ") : options.scaleRatio.find(o => o.id === scaleRatio)?.title || scaleRatio;
  const srNote = notes[`scaleRatio-${scaleRatio}`] || "";
  lines.push(`| Scale Ratio | ${srLabel} | ${srNote}`);
  const fcLabel = Array.isArray(fontCategories) ? fontCategories.map(id => options.fontCategories.find(o => o.id === id)?.title || id).join(", ") : options.fontCategories.find(o => o.id === fontCategories)?.title || fontCategories;
  const fcNote = notes[`fontCategories-${fontCategories}`] || "";
  lines.push(`| Font Categories | ${fcLabel} | ${fcNote}`);
  const wLabel = Array.isArray(weights) ? weights.map(id => options.weights.find(o => o.id === id)?.title || id).join(", ") : options.weights.find(o => o.id === weights)?.title || weights;
  const wNote = notes[`weights-${weights}`] || "";
  lines.push(`| Weights | ${wLabel} | ${wNote}`);
  const lhLabel = Array.isArray(lineHeights) ? lineHeights.map(id => options.lineHeights.find(o => o.id === id)?.title || id).join(", ") : options.lineHeights.find(o => o.id === lineHeights)?.title || lineHeights;
  const lhNote = notes[`lineHeights-${lineHeights}`] || "";
  lines.push(`| Line Heights | ${lhLabel} | ${lhNote}`);
  const lsLabel = Array.isArray(letterSpacing) ? letterSpacing.map(id => options.letterSpacing.find(o => o.id === id)?.title || id).join(", ") : options.letterSpacing.find(o => o.id === letterSpacing)?.title || letterSpacing;
  const lsNote = notes[`letterSpacing-${letterSpacing}`] || "";
  lines.push(`| Letter Spacing | ${lsLabel} | ${lsNote}`);
  const pLabel = Array.isArray(pairing) ? pairing.map(id => options.pairing.find(o => o.id === id)?.title || id).join(", ") : options.pairing.find(o => o.id === pairing)?.title || pairing;
  const pNote = notes[`pairing-${pairing}`] || "";
  lines.push(`| Font Pairing | ${pLabel} | ${pNote}`);
  const rLabel = Array.isArray(responsive) ? responsive.map(id => options.responsive.find(o => o.id === id)?.title || id).join(", ") : options.responsive.find(o => o.id === responsive)?.title || responsive;
  const rNote = notes[`responsive-${responsive}`] || "";
  lines.push(`| Responsive | ${rLabel} | ${rNote}`);
  lines.push("");

  lines.push("## Typography System Details");
  lines.push("");
  if (baseSize) {
    lines.push(`### Base Size: ${bsLabel}`);
    lines.push("");
    lines.push(Array.isArray(baseSize) ? baseSize.map(v => dict.baseSize[v] || v).join(", ") : dict.baseSize[baseSize] || baseSize);
    if (bsNote) lines.push(`> **Note:** ${bsNote}`);
    lines.push("");
  }

  if (scaleRatio) {
    lines.push(`### Scale Ratio: ${srLabel}`);
    lines.push("");
    lines.push(Array.isArray(scaleRatio) ? scaleRatio.map(v => dict.scaleRatio[v] || v).join(", ") : dict.scaleRatio[scaleRatio] || scaleRatio);
    if (srNote) lines.push(`> **Note:** ${srNote}`);
    lines.push("");
  }

  if (fontCategories) {
    lines.push(`### Font Categories: ${fcLabel}`);
    lines.push("");
    lines.push(Array.isArray(fontCategories) ? fontCategories.map(v => dict.fontCategories[v] || v).join(", ") : dict.fontCategories[fontCategories] || fontCategories);
    if (fcNote) lines.push(`> **Note:** ${fcNote}`);
    lines.push("");
  }

  lines.push("## Generated Type Scale Table");
  lines.push("");
  const baseSizeVal = baseSize ? parseInt(baseSize.replace("px", "").replace("pt", "")) || 16 : 16;
  const ratioMap: Record<string, number> = { "minor-second": 1.067, "major-second": 1.125, "minor-third": 1.200, "major-third": 1.250, "perfect-fourth": 1.333, "augmented-fourth": 1.414, "perfect-fifth": 1.500, "golden-ratio": 1.618 };
  const ratio = ratioMap[scaleRatio] || 1.25;
  lines.push("| Step | Name | Size (px) | Size (rem) | Line Height | Letter Spacing | Usage");
  lines.push("|------|------|-----------|------------|-------------|----------------|-------");
  const steps = [
    { step: -2, name: "Fine Print" },
    { step: -1, name: "Caption" },
    { step: 0, name: "Body" },
    { step: 1, name: "H6" },
    { step: 2, name: "H5" },
    { step: 3, name: "H4" },
    { step: 4, name: "H3" },
    { step: 5, name: "H2" },
    { step: 6, name: "H1" },
    { step: 7, name: "Display" },
  ];
  for (const s of steps) {
    const size = Math.round(baseSizeVal * Math.pow(ratio, s.step));
    const rem = (size / 16).toFixed(3);
    const lh = s.step <= 0 ? "1.5" : s.step <= 3 ? "1.3" : "1.1";
    const ls = s.step <= 0 ? "normal" : s.step <= 3 ? "-0.01em" : "-0.02em";
    lines.push(`| ${s.step} | ${s.name} | ${size}px | ${rem}rem | ${lh} | ${ls} | ${s.step <= 0 ? "Body & UI" : s.step <= 3 ? "Subheadings" : "Headings"}`);
  }
  lines.push("");

  lines.push("## Font Pairing Strategy");
  lines.push("");
  if (pairing) {
    lines.push(`### Pairing: ${pLabel}`);
    lines.push("");
    lines.push(Array.isArray(pairing) ? pairing.map(v => dict.pairing[v] || v).join(", ") : dict.pairing[pairing] || pairing);
    if (pNote) lines.push(`> **Note:** ${pNote}`);
    lines.push("");
  }

  lines.push("### Recommended Font Combinations");
  lines.push("");
  lines.push("| Role | Font Family | Category | Weight | Backup Stack");
  lines.push("|------|-------------|----------|--------|-------------");
  if (pairing?.includes("serif") || pairing?.includes("display") || pairing?.includes("sans")) {
    const headingFont = pairing?.includes("serif") ? "Playfair Display" : pairing?.includes("display") ? "Bebas Neue" : "Inter";
    const bodyFont = pairing?.includes("mono") ? "JetBrains Mono" : pairing?.includes("serif") ? "Merriweather" : "Inter";
    const headingCategory = pairing?.includes("serif") ? "Serif" : pairing?.includes("display") ? "Display" : "Sans-Serif";
    const bodyCategory = pairing?.includes("mono") ? "Monospace" : pairing?.includes("serif") ? "Serif" : "Sans-Serif";
    lines.push(`| Heading | ${headingFont} | ${headingCategory} | Bold 700 | Georgia, serif / Arial, sans-serif`);
    lines.push(`| Body | ${bodyFont} | ${bodyCategory} | Regular 400 | ${bodyCategory === "Serif" ? "Georgia, serif" : bodyCategory === "Monospace" ? "Courier New, monospace" : "Arial, sans-serif"}`);
    lines.push(`| Code | JetBrains Mono / Fira Code | Monospace | Regular 400 | Consolas, monospace`);
  } else {
    lines.push("| Heading | Inter | Sans-Serif | Bold 700 | Arial, sans-serif");
    lines.push("| Body | Source Serif 4 | Serif | Regular 400 | Georgia, serif");
    lines.push("| Code | JetBrains Mono | Monospace | Regular 400 | Consolas, monospace");
  }
  lines.push("");

  lines.push("## CSS Variable Architecture");
  lines.push("");
  lines.push("```css");
  lines.push(":root {");
  lines.push("  /* Base configuration */");
  const bsVal = baseSize?.includes("px") ? baseSize :
    baseSize === "fluid" ? "clamp(14px, 1rem + 0.5vw, 18px)" :
    baseSize === "clamp" ? "clamp(14px, 1rem + 0.5vw, 18px)" : "16px";
  lines.push(`  --fs-base: ${bsVal};`);
  lines.push(`  --font-heading: 'Inter', 'SF Pro Display', system-ui, sans-serif;`);
  lines.push(`  --font-body: 'Source Serif 4', Georgia, serif;`);
  lines.push(`  --font-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;`);
  lines.push("  ");
  lines.push("  /* Type scale tokens */");
  for (const s of steps) {
    const size = Math.round(baseSizeVal * Math.pow(ratio, s.step));
    lines.push(`  --fs-step-${s.step}: ${size}px;`);
  }
  lines.push("  ");
  lines.push("  /* Line height tokens */");
  lines.push("  --lh-tight: 1.1;");
  lines.push("  --lh-snug: 1.3;");
  lines.push("  --lh-normal: 1.5;");
  lines.push("  --lh-relaxed: 1.7;");
  lines.push("  ");
  lines.push("  /* Letter spacing tokens */");
  lines.push("  --ls-tight: -0.02em;");
  lines.push("  --ls-normal: 0em;");
  lines.push("  --ls-wide: 0.05em;");
  lines.push("}");
  lines.push("```");
  lines.push("");

  lines.push("## Responsive Behavior");
  lines.push("");
  lines.push("| Breakpoint | Viewport | Base Size | Scale Adjustment | Notes");
  lines.push("|------------|----------|-----------|-----------------|-------");
  lines.push("| Mobile | < 640px | " + (baseSize === "clamp" || baseSize === "fluid" ? "14px" : baseSize?.includes("px") ? baseSize : "16px") + " | Conservative | Single column, snug spacing");
  lines.push("| Tablet | 640-1024px | " + (baseSize === "clamp" || baseSize === "fluid" ? "15px" : baseSize?.includes("px") ? baseSize : "16px") + " | Moderate | Two columns, comfortable");
  lines.push("| Desktop | 1024-1440px | " + (baseSize === "clamp" || baseSize === "fluid" ? "16px" : baseSize?.includes("px") ? baseSize : "18px") + " | Full scale | Multi-column, relaxed spacing");
  lines.push("| Wide | > 1440px | " + (baseSize === "clamp" || baseSize === "fluid" ? "18px" : baseSize?.includes("px") ? baseSize : "20px") + " | Enhanced | Maximum layout, generous spacing");
  lines.push("");

  lines.push("## Accessibility & Readability");
  lines.push("");
  lines.push("- **Minimum Size**: Body text never falls below 14px (or 16px for accessibility targets).");
  lines.push("- **Line Length**: Target 45-75 characters per line for optimal readability.");
  lines.push("- **Line Height**: Body text minimum 1.5 line-height factor per WCAG recommendation.");
  lines.push("- **Font Weight**: Minimum 400 weight for body text below 18px size.");
  lines.push("- **Zoom Support**: All type scales use relative units (rem/em) to respect browser zoom.");
  lines.push("- **Contrast**: Ensure adequate contrast between text and background at all sizes.");
  lines.push("- **Respect Preferences**: Honor prefers-reduced-motion and prefers-contrast media queries.");
  lines.push("");

  lines.push("## Typography Scale Flow");
  lines.push("");
  lines.push("```");
  lines.push("┌───────────────────────────┐");
  lines.push("│      Base Font Size      │");
  lines.push(`│     ${bsLabel.padEnd(21)}│`);
  lines.push("└───────────┬───────────────┘");
  lines.push("            ▼");
  lines.push("┌───────────────────────────┐");
  lines.push("│      Scale Ratio          │");
  lines.push(`│    ${srLabel.padEnd(21)}│`);
  lines.push("└───────────┬───────────────┘");
  lines.push("            ▼");
  lines.push("┌───────────────────────────┐");
  lines.push("│    Font Categories        │");
  lines.push(`│   ${fcLabel.padEnd(21)}│`);
  lines.push("└───────────┬───────────────┘");
  lines.push("            ▼");
  lines.push("┌───────────────────────────┐");
  lines.push("│   Weight Selections       │");
  lines.push(`│    ${wLabel.padEnd(21)}│`);
  lines.push("└───────────┬───────────────┘");
  lines.push("            ▼");
  lines.push("┌───────────────────────────┐");
  lines.push("│     Line Heights          │");
  lines.push(`│   ${lhLabel.padEnd(21)}│`);
  lines.push("└───────────┬───────────────┘");
  lines.push("            ▼");
  lines.push("┌───────────────────────────┐");
  lines.push("│    Letter Spacing         │");
  lines.push(`│   ${lsLabel.padEnd(21)}│`);
  lines.push("└───────────┬───────────────┘");
  lines.push("            ▼");
  lines.push("┌───────────────────────────┐");
  lines.push("│     Font Pairing          │");
  lines.push(`│    ${pLabel.padEnd(21)}│`);
  lines.push("└───────────┬───────────────┘");
  lines.push("            ▼");
  lines.push("┌───────────────────────────┐");
  lines.push("│  Responsive Strategy      │");
  lines.push(`│    ${rLabel.padEnd(21)}│`);
  lines.push("└───────────────────────────┘");
  lines.push("```");
  lines.push("");

  lines.push("## Implementation Notes");
  lines.push("");
  lines.push("- Use `rem` units for all font sizes to respect user browser font-size preferences.");
  lines.push("- Define type scale tokens as CSS custom properties for easy global updates.");
  lines.push("- Test all type combinations at minimum and maximum viewport sizes.");
  lines.push("- Verify readability on actual devices, not just browser dev tools.");
  lines.push("- Pair each heading size with its corresponding line-height and letter-spacing.");
  lines.push("- Document orphan and widow control strategy for headings and body text.");
  lines.push("");

  lines.push("## Performance Considerations");
  lines.push("");
  lines.push("| Concern | Recommendation");
  lines.push("|---------|--------------");
  lines.push("| Web Font Loading | Preload primary fonts, use font-display: swap or optional");
  lines.push("| File Size | Subset fonts to latin characters, use woff2 format");
  lines.push("| FOUT/FOIT | Use font-family fallback with matching metrics via @font-face size-adjust");
  lines.push("| Variable Fonts | Use variable fonts to reduce file count while preserving weight flexibility");
  lines.push("| Critical Path | Inline critical styles, defer non-critical font loading");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Typography Scale Gen_");

  return lines.join("\n");
}

export default function TypographyScalePage() {
  return (
    <ToolShell
      title="Typography Scale Gen"
      steps={[
        { id: 1, label: "Base Size", component: (p) => (
          <GenericStep {...p} title="Select Base Font Size" description="Choose the root font size for your type system" options={options.baseSize} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="baseSize" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Scale Ratio", component: (p) => (
          <GenericStep {...p} title="Choose Scale Ratio" description="Select the ratio between type scale steps" options={options.scaleRatio} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="scaleRatio" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Font Cats", component: (p) => (
          <GenericStep {...p} title="Select Font Categories" description="What font categories does your project need?" options={options.fontCategories} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="fontCategories" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Weights", component: (p) => (
          <GenericStep {...p} title="Select Font Weights" description="Which font weights should be available?" options={options.weights} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="weights" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Line Heights", component: (p) => (
          <GenericStep {...p} title="Set Line Heights" description="Define line-height values for each type level" options={options.lineHeights} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="lineHeights" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Letter Spacing", component: (p) => (
          <GenericStep {...p} title="Set Letter Spacing" description="Configure tracking for different type levels" options={options.letterSpacing} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="letterSpacing" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Pairing", component: (p) => (
          <GenericStep {...p} title="Choose Font Pairing" description="Select how heading and body fonts pair together" options={options.pairing} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="pairing" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Responsive", component: (p) => (
          <GenericStep {...p} title="Set Responsive Strategy" description="How should the type scale adapt across breakpoints?" options={options.responsive} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="responsive" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}










