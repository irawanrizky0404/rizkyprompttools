"use client";

import type { FC } from "react";
import {
  Layout, Table, Gauge, User, LogIn, Frame, Swords, Layers, Ghost,
  Monitor, Palette, Sparkles, Moon, MousePointerClick, Pointer, Move,
  Square, Grid3X3, Columns, AlignCenter, StretchHorizontal, PanelRight,
  Sidebar, Kanban, Type, Bold, Italic, Underline, Highlighter,
  CaseSensitive, TextSelect, TextCursor,   Smartphone, Tablet,
  Monitor as MonitorIcon, ScreenShare, Maximize, Minimize, Minus,
  Expand, RotateCcw, Eye, Ear, Hand, Accessibility as AccessibilityIcon,
  Keyboard, Speech, Printer, ArrowRight,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  component: [
    { id: "landing-hero", title: "Landing Page Hero", description: "Hero section with headline, CTA, and background", icon: Layout },
    { id: "pricing-table", title: "Pricing Table", description: "Tiered pricing cards with feature comparison", icon: Table },
    { id: "admin-dashboard", title: "Admin Dashboard", description: "Data-heavy dashboard with charts and stats", icon: Gauge },
    { id: "user-profile", title: "User Profile", description: "Profile card with avatar, bio, and activity", icon: User },
    { id: "auth-form", title: "Auth Form", description: "Login or registration form with validation", icon: LogIn },
    { id: "navbar", title: "Navigation Bar", description: "Top nav with links, dropdown, mobile hamburger", icon: Columns },
    { id: "sidebar", title: "Sidebar Menu", description: "Collapsible vertical sidebar navigation", icon: Sidebar },
    { id: "kanban-board", title: "Kanban Board", description: "Drag-and-drop task board with columns", icon: Kanban },
  ],
  style: [
    { id: "minimalist", title: "Minimalist", description: "Clean, white space, subtle borders, muted tones", icon: Frame },
    { id: "neo-brutalism", title: "Neo-Brutalism", description: "Bold borders, harsh shadows, high contrast", icon: Swords },
    { id: "glassmorphism", title: "Glassmorphism", description: "Frosted glass, backdrop blur, soft transparency", icon: Layers },
    { id: "web3-futuristic", title: "Web3 Futuristic", description: "Neon gradients, glitch effects, dark UI", icon: Ghost },
    { id: "corporate", title: "Corporate Clean", description: "Professional, structured, brand-centric layout", icon: Monitor },
    { id: "playful", title: "Playful & Colorful", description: "Bright colors, rounded shapes, fun micro-interactions", icon: Sparkles },
    { id: "dark-elegant", title: "Dark Elegant", description: "Luxury dark theme with gold or emerald accents", icon: Moon },
    { id: "hand-drawn", title: "Hand-Drawn / Sketchy", description: "Rough edges, doodle icons, organic feel", icon: StretchHorizontal },
  ],
  color: [
    { id: "monochrome", title: "Monochrome", description: "Single hue with varying shades and tints", icon: Monitor },
    { id: "pastel", title: "Pastel", description: "Soft, muted colors with gentle contrast", icon: Palette },
    { id: "vibrant", title: "Vibrant", description: "Bold, saturated colors that pop visually", icon: Sparkles },
    { id: "high-contrast-dark", title: "High-Contrast Dark", description: "Dark background with bright accent colors", icon: Moon },
    { id: "earth-tones", title: "Earth Tones", description: "Browns, greens, terracotta, natural palette", icon: Palette },
    { id: "oceanic", title: "Oceanic Blues", description: "Deep blues, teals, aquamarines, sea-foam", icon: Palette },
    { id: "sunset-warm", title: "Sunset Warm", description: "Oranges, purples, pinks, and golden hues", icon: Sparkles },
    { id: "retro-80s", title: "Retro 80s Synthwave", description: "Neon pink, cyan, purple with grid backgrounds", icon: Moon },
  ],
  interactivity: [
    { id: "static", title: "Static", description: "No animations, pure static layout", icon: MousePointerClick },
    { id: "hover-animations", title: "Hover Animations", description: "Subtle hover effects on interactive elements", icon: Pointer },
    { id: "draggable", title: "Draggable", description: "Drag-and-drop interactions for cards or panels", icon: Move },
    { id: "modal-popup", title: "Modal Pop-up", description: "Click-triggered modal overlay for details", icon: Square },
    { id: "infinite-scroll", title: "Infinite Scroll", description: "Continuous content loading on scroll", icon: Expand },
    { id: "accordion", title: "Accordion / Tabs", description: "Expandable sections or tabbed content", icon: Columns },
    { id: "carousel", title: "Carousel / Slider", description: "Image or content carousel with navigation", icon: StretchHorizontal },
    { id: "parallax", title: "Parallax Scrolling", description: "Depth motion effect on scroll", icon: Move },
  ],
  layout: [
    { id: "single-column", title: "Single Column", description: "Narrow centered column, stacked layout", icon: AlignCenter },
    { id: "two-column", title: "Two-Column Grid", description: "Side by side content panels", icon: Columns },
    { id: "three-column", title: "Three-Column Grid", description: "Card grid with equal width columns", icon: Grid3X3 },
    { id: "sidebar-right", title: "Sidebar + Content", description: "Main content with right sidebar", icon: PanelRight },
    { id: "sidebar-left", title: "Content + Sidebar", description: "Main content with left sidebar", icon: Sidebar },
    { id: "full-width", title: "Full-Width Bleed", description: "Edge-to-edge content, no container padding", icon: Minimize },
    { id: "masonry", title: "Masonry Grid", description: "Pinterest-style uneven grid layout", icon: Grid3X3 },
    { id: "dashboard-layout", title: "Dashboard Layout", description: "Header, sidebar, and multi-panel content", icon: Monitor },
  ],
  typography: [
    { id: "system-ui", title: "System UI Stack", description: "Inter, system-ui, sans-serif for fast loading", icon: Type },
    { id: "serif-elegant", title: "Serif Elegant", description: "Merriweather, Playfair Display for editorial feel", icon: Bold },
    { id: "monospace-tech", title: "Monospace Tech", description: "JetBrains Mono, Fira Code for developer tools", icon: TextCursor },
    { id: "rounded-friendly", title: "Rounded Friendly", description: "Nunito, Quicksand for approachable apps", icon: CaseSensitive },
    { id: "display-bold", title: "Display Bold", description: "Heavy weight headings with thin body text", icon: Bold },
    { id: "handwriting", title: "Handwriting Script", description: "Caveat, Pacifico for casual/accent use", icon: Highlighter },
    { id: "mixed-pairing", title: "Mixed Pairing", description: "Serif headings + sans-serif body contrast", icon: TextSelect },
    { id: "variable-font", title: "Variable Font", description: "Single variable font with adjustable weight axis", icon: Italic },
  ],
  responsive: [
    { id: "mobile-first", title: "Mobile-First", description: "Base styles for mobile, scale up to desktop", icon: Smartphone },
    { id: "desktop-first", title: "Desktop-First", description: "Base styles for desktop, scale down to mobile", icon: MonitorIcon },
    { id: "adaptive", title: "Adaptive Breakpoints", description: "Fixed layouts per specific breakpoint ranges", icon: RotateCcw },
    { id: "fluid", title: "Fluid / Fully Responsive", description: "Fluid grids that work at any viewport width", icon: Expand },
    { id: "container-queries", title: "Container Queries", description: "Responsive based on parent container width", icon: Square },
    { id: "tablet-priority", title: "Tablet-Priority", description: "Optimized for tablet portrait first", icon: Tablet },
    { id: "foldable", title: "Foldable / Dual-Screen", description: "Support for surface duo, foldable devices", icon: ScreenShare },
    { id: "print-friendly", title: "Print-Friendly", description: "Optimized layout for print and PDF export", icon: Printer },
  ],
  accessibility: [
    { id: "aria-labels", title: "ARIA Labels", description: "Proper aria-label and aria-labelledby attributes", icon: AccessibilityIcon },
    { id: "keyboard-nav", title: "Keyboard Navigation", description: "Full keyboard operability with visible focus", icon: Keyboard },
    { id: "color-contrast", title: "Color Contrast WCAG AA", description: "Minimum 4.5:1 contrast ratio for text", icon: Eye },
    { id: "screen-reader", title: "Screen Reader Support", description: "Semantic HTML, live regions, alt text", icon: Speech },
    { id: "focus-trap", title: "Focus Trap", description: "Focus is contained within modals and menus", icon: Hand },
    { id: "motion-reduce", title: "Reduced Motion", description: "Respect prefers-reduced-motion media query", icon: Minus },
    { id: "touch-targets", title: "Touch Targets 44x44", description: "Minimum hit area of 44x44 CSS pixels", icon: Ear },
    { id: "skip-link", title: "Skip Navigation", description: "Skip-to-content link for keyboard users", icon: ArrowRight },
  ],
};

const dict: Record<string, Record<string, string>> = {
  component: {
    "landing-hero": "Design a hero section featuring a bold headline, supporting subheadline, primary CTA button, optional secondary link, and a full-width background image or gradient. Ensure text is readable with proper contrast and responsive to mobile viewports.",
    "pricing-table": "Design a pricing table with 3–4 tiers arranged horizontally. Each card includes the plan name, price, key feature bullets, and a CTA button. Highlight the recommended/most popular tier with a visual badge or accent border.",
    "admin-dashboard": "Design an admin dashboard layout with a sidebar navigation, top header bar, and a main content area containing data cards, a line or bar chart, recent activity feed, and a stats summary row.",
    "user-profile": "Design a user profile card or page with a circular avatar, cover photo area, display name, bio text, follower/following counts, and action buttons such as Follow or Message.",
    "auth-form": "Design a login or registration form with email and password inputs, a submit button, remember-me checkbox, forgot-password link, and social login dividers. Include inline validation error messages.",
    navbar: "Design a responsive navigation bar with the brand logo on the left, center or right-aligned links, a CTA button, and a hamburger menu for mobile. Include dropdown support for nested pages.",
    sidebar: "Design a collapsible sidebar navigation with icon+label menu items, section grouping, active state indicators, and a collapse toggle button. Support nested sub-menus with indentation.",
    "kanban-board": "Design a Kanban board with horizontally scrollable columns for each status. Each column contains vertically stacked cards with title, labels, assignee avatar, and a drag handle.",
  },
  style: {
    minimalist: "Apply a minimalist aesthetic with generous white space, thin 1px borders in light gray, sans-serif typefaces, a maximum content width of 1200px centered on the page, and subtle box shadows for depth.",
    "neo-brutalism": "Apply neo-brutalist styling with thick 3–4px black borders, bold box shadows offset 4px right and 4px down, high-contrast color palette, chunky sans-serif typography, and minimal rounded corners.",
    glassmorphism: "Apply glassmorphism with semi-transparent backgrounds, backdrop blur of 16px, light border highlights, subtle inner shadows, layered depth with z-index stacking, and a colorful gradient background behind the glass elements.",
    "web3-futuristic": "Apply a Web3 futuristic theme with dark backgrounds, neon cyan and magenta accent colors, gradient text effects, subtle noise texture overlay, animated gradient borders, and monospaced font for technical feel.",
    corporate: "Apply a clean corporate style with a defined brand color palette, consistent spacing system, professional photography, subtle gradients, rounded corners on cards, and a strong visual hierarchy.",
    playful: "Apply a playful style with rounded shapes, bouncy animations, bright candy colors, doodle-style illustrations, fun micro-copy, and generous use of emoji or custom icons.",
    "dark-elegant": "Apply a dark elegant theme with a near-black background, gold or emerald accent colors, serif or sophisticated typography, soft lighting effects, and rich texture overlays.",
    "hand-drawn": "Apply a hand-drawn sketchy style with irregular borders, slightly rotated elements, doodle-style icons, rough line art, paper texture backgrounds, and an imperfect organic feel.",
  },
  color: {
    monochrome: "Use a monochrome palette based on a single primary hue. Apply lighter tints for backgrounds, the base hue for interactive elements, and darker shades for text. Keep all UI elements within this single color family.",
    pastel: "Use a pastel palette with soft pinks, lavenders, mint greens, and baby blues. Keep contrast gentle by pairing pastel backgrounds with slightly darker pastel text. Avoid pure black text.",
    vibrant: "Use a vibrant palette with saturated primary colors. Pair intense hues with neutral whites or dark grays to balance visual energy. Reserve the most saturated colors for accents and CTAs.",
    "high-contrast-dark": "Use a dark background with bright accent colors such as electric blue, neon green, or hot pink. Ensure all text meets WCAG AA contrast ratios against the dark surface.",
    "earth-tones": "Use an earth-toned palette with warm browns, olive greens, terracotta, sand, and clay. Pair with cream or off-white backgrounds for a natural, organic feel.",
    oceanic: "Use an oceanic blue palette with deep navy, teal, aquamarine, and sea-foam green. Accent with coral or sand-colored highlights for a coastal theme.",
    "sunset-warm": "Use a warm sunset palette with rich oranges, magenta purples, golden yellows, and dusty pinks. Create gradients that transition from warm to cool.",
    "retro-80s": "Use a retro 80s synthwave palette with neon pink, cyan blue, deep purple, and black. Include grid overlays and scanning line effects for the full retro aesthetic.",
  },
  interactivity: {
    static: "Deliver a completely static layout with no hover effects, transitions, or animations. All interactive states should use simple color changes without CSS transitions.",
    "hover-animations": "Add hover animations to buttons, cards, and links. Use CSS transitions for transform, box-shadow elevation, and background-color shifts. Keep animations under 300ms for snappy feedback.",
    draggable: "Implement drag-and-drop interactions using the HTML5 Drag and Drop API or a library like dnd-kit. Cards and panels should be draggable within their container with visual feedback during drag.",
    "modal-popup": "Implement a modal pop-up triggered by clicking a primary button. The modal should have a dark backdrop overlay, centered content card with a close button, smooth fade-in transition, and focus trap.",
    "infinite-scroll": "Implement infinite scroll with a virtualized list. Load more content when the user scrolls within 200px of the bottom. Show a loading spinner during fetch and handle empty states.",
    accordion: "Implement accordion or tabbed sections. Accordions expand/collapse on click with smooth height transitions. Tabs switch content instantly with underline or fill animation on the active tab.",
    carousel: "Implement an image or content carousel with previous/next navigation arrows, dot indicators, autoplay with pause on hover, and swipe gesture support for touch devices.",
    parallax: "Implement parallax scrolling where background elements move at a slower rate than foreground content. Use CSS transform for performance and respect prefers-reduced-motion.",
  },
  layout: {
    "single-column": "Use a single-column layout with centered content constrained to a max-width container. All sections stack vertically. Ideal for reading-focused pages and mobile-first designs.",
    "two-column": "Use a two-column grid layout with equal or hierarchical column widths. Commonly used for content + sidebar patterns or side-by-side card layouts.",
    "three-column": "Use a three-column grid layout with equal spacing between columns. Each column contains independent content. Responsively collapses to fewer columns on smaller viewports.",
    "sidebar-right": "Use a main content area with a right sidebar. The sidebar contains secondary or supplementary content such as navigation, ads, or related links.",
    "sidebar-left": "Use a main content area with a left sidebar. The sidebar typically holds primary navigation, filters, or a table of contents.",
    "full-width": "Use a full-width bleeding layout with no container padding. Content stretches edge-to-edge. Sections use background colors or images to create visual separation.",
    masonry: "Use a masonry grid layout where items are placed in optimal positions based on available vertical space. Items can have varying heights creating an organically packed arrangement.",
    "dashboard-layout": "Use a dashboard layout with a fixed top header bar, collapsible sidebar, and a main content area divided into resizable panels or widget grid zones.",
  },
  typography: {
    "system-ui": "Use the system UI font stack with Inter as the primary choice. Optimize for fast loading with font-display: swap. Use weights 400 for body and 600/700 for headings.",
    "serif-elegant": "Use elegant serif typefaces like Playfair Display or Merriweather for headings. Pair with a light sans-serif for body text. Ideal for editorial, fashion, or luxury brands.",
    "monospace-tech": "Use monospace fonts like JetBrains Mono or Fira Code. Perfect for developer tools, code editors, terminal UIs, and technical documentation interfaces.",
    "rounded-friendly": "Use rounded sans-serif fonts like Nunito or Quicksand. These soften the interface and make it feel approachable, ideal for childrens apps, wellness, or casual products.",
    "display-bold": "Use heavy display weights for headings to create strong visual impact. Thin or regular weights for body text maintain readability. Creates a clear typographic hierarchy.",
    handwriting: "Use handwriting or script fonts sparingly for accent text, quotes, or branding elements. Keep body text in a clean sans-serif for readability. Avoid script for long passages.",
    "mixed-pairing": "Combine serif headings with a clean sans-serif body for contrast. The serif adds character and editorial feel while the sans-serif ensures readability at smaller sizes.",
    "variable-font": "Use a single variable font that supports an adjustable weight axis. Reduce HTTP requests while gaining flexibility. Tune weight per heading level and screen size.",
  },
  responsive: {
    "mobile-first": "Build mobile-first with base styles at 375px width. Use min-width media queries to progressively enhance for tablet (768px) and desktop (1024px+).",
    "desktop-first": "Build desktop-first with base styles at 1440px. Use max-width media queries to adapt down for tablet and mobile breakpoints.",
    adaptive: "Use fixed layouts at specific breakpoints rather than fluid scaling. Layouts snap between predefined designs for mobile, tablet, and desktop. Good for complex layouts.",
    fluid: "Use fluid typography and grid systems with relative units. Layout adapts smoothly to any viewport width without hard breakpoints. Use clamp() for responsive font sizes.",
    "container-queries": "Use CSS container queries for component-level responsiveness. Components adapt to their parent container width rather than the viewport. More modular and reusable.",
    "tablet-priority": "Optimize for tablet portrait (768×1024) as the primary viewport. Ensure touch targets are large enough and layouts use 2-3 column grids comfortably.",
    foldable: "Support dual-screen and foldable devices by using the CSS foldable display environment variables. Test spans across the hinge and both displays.",
    "print-friendly": "Optimize for print by hiding non-essential elements, using black text on white, removing backgrounds, and setting page breaks between major sections.",
  },
  accessibility: {
    "aria-labels": "Add aria-label or aria-labelledby to all interactive elements without visible text. Use aria-describedby for additional descriptions. Follow the ARIA authoring practices guide.",
    "keyboard-nav": "Ensure all interactive elements are reachable and operable via keyboard. Use Tab for forward navigation, Shift+Tab for reverse, Enter/Space to activate, and Escape to close modals.",
    "color-contrast": "Maintain a minimum 4.5:1 contrast ratio for normal text and 3:1 for large text (18px+). Test all color combinations with a contrast checker tool during development.",
    "screen-reader": "Use semantic HTML elements throughout. Provide alt text for all images. Use aria-live regions for dynamic content updates. Test with VoiceOver, NVDA, and JAWS.",
    "focus-trap": "Trap keyboard focus inside modals, sidebars, and dropdown menus when they are open. Return focus to the triggering element when the component closes.",
    "motion-reduce": "Wrap animations and transitions in a prefers-reduced-motion media query. Provide a static alternative for all motion-based interactions and effects.",
    "touch-targets": "Ensure all interactive elements have a minimum touch target of 44×44 CSS pixels. Provide adequate spacing between adjacent touch targets to prevent mis-taps.",
    "skip-link": "Add a skip-to-main-content link as the first focusable element on the page. Make it visible on focus for keyboard users. Hide it visually but keep it accessible when not focused.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const component = selections.step1;
  const style = selections.step2;
  const color = selections.step3;
  const interactivity: string[] = selections.step4 || [];
  const layout = selections.step5;
  const typography = selections.step6;
  const responsive = selections.step7;
  const accessibility: string[] = selections.step8 || [];

  const lines: string[] = [];

  lines.push("# UI/UX Component Prompt");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const compLabel = Array.isArray(component) ? component.map(id => options.component.find(o => o.id === id)?.title || id).join(", ") : options.component.find(o => o.id === component)?.title || component;
  const compNote = notes[`component-${component}`] || "";
  lines.push(`| Component Type | ${compLabel} | ${compNote}`);
  const styleLabel = Array.isArray(style) ? style.map(id => options.style.find(o => o.id === id)?.title || id).join(", ") : options.style.find(o => o.id === style)?.title || style;
  const styleNote = notes[`style-${style}`] || "";
  lines.push(`| Visual Style | ${styleLabel} | ${styleNote}`);
  const colorLabel = Array.isArray(color) ? color.map(id => options.color.find(o => o.id === id)?.title || id).join(", ") : options.color.find(o => o.id === color)?.title || color;
  const colorNote = notes[`color-${color}`] || "";
  lines.push(`| Color Scheme | ${colorLabel} | ${colorNote}`);
  const intLabels = interactivity.map(id => options.interactivity.find(o => o.id === id)?.title || id).join(", ");
  const intNotes = interactivity.map(id => notes[`interactivity-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Interactivity | ${intLabels || "None"} | ${intNotes}`);
  const layLabel = Array.isArray(layout) ? layout.map(id => options.layout.find(o => o.id === id)?.title || id).join(", ") : options.layout.find(o => o.id === layout)?.title || layout;
  const layNote = notes[`layout-${layout}`] || "";
  lines.push(`| Layout | ${layLabel} | ${layNote}`);
  const typLabel = Array.isArray(typography) ? typography.map(id => options.typography.find(o => o.id === id)?.title || id).join(", ") : options.typography.find(o => o.id === typography)?.title || typography;
  const typNote = notes[`typography-${typography}`] || "";
  lines.push(`| Typography | ${typLabel} | ${typNote}`);
  const respLabel = Array.isArray(responsive) ? responsive.map(id => options.responsive.find(o => o.id === id)?.title || id).join(", ") : options.responsive.find(o => o.id === responsive)?.title || responsive;
  const respNote = notes[`responsive-${responsive}`] || "";
  lines.push(`| Responsive Strategy | ${respLabel} | ${respNote}`);
  const accLabels = accessibility.map(id => options.accessibility.find(o => o.id === id)?.title || id).join(", ");
  const accNotes = accessibility.map(id => notes[`accessibility-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Accessibility | ${accLabels || "None"} | ${accNotes}`);
  lines.push("");

  lines.push("## Component Specification");
  lines.push("");
  if (component) {
    lines.push("### " + compLabel);
    lines.push("");
    lines.push(Array.isArray(component) ? component.map(v => dict.component[v] || v).join(", ") : dict.component[component] || component);
    if (compNote) lines.push(`> **Note:** ${compNote}`);
    lines.push("");
  }

  lines.push("## Visual Design Direction");
  lines.push("");
  if (style) {
    lines.push("### Style: " + styleLabel);
    lines.push("");
    lines.push(Array.isArray(style) ? style.map(v => dict.style[v] || v).join(", ") : dict.style[style] || style);
    if (styleNote) lines.push(`> **Note:** ${styleNote}`);
    lines.push("");
  }
  if (color) {
    lines.push("### Color Palette: " + colorLabel);
    lines.push("");
    lines.push(Array.isArray(color) ? color.map(v => dict.color[v] || v).join(", ") : dict.color[color] || color);
    if (colorNote) lines.push(`> **Note:** ${colorNote}`);
    lines.push("");
  }

  if (layout) {
    lines.push("### Layout: " + layLabel);
    lines.push("");
    lines.push(Array.isArray(layout) ? layout.map(v => dict.layout[v] || v).join(", ") : dict.layout[layout] || layout);
    if (layNote) lines.push(`> **Note:** ${layNote}`);
    lines.push("");
  }

  if (typography) {
    lines.push("### Typography: " + typLabel);
    lines.push("");
    lines.push(Array.isArray(typography) ? typography.map(v => dict.typography[v] || v).join(", ") : dict.typography[typography] || typography);
    if (typNote) lines.push(`> **Note:** ${typNote}`);
    lines.push("");
  }

  if (interactivity.length > 0) {
    lines.push("## Interaction Design");
    lines.push("");
    for (const intId of interactivity) {
      const label = options.interactivity.find(o => o.id === intId)?.title || intId;
      lines.push("### " + label);
      lines.push("");
      lines.push(dict.interactivity[intId] || "");
      const note = notes[`interactivity-${intId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  lines.push("## Responsive Strategy");
  lines.push("");
  if (responsive) {
    lines.push("### Strategy: " + respLabel);
    lines.push("");
    lines.push(Array.isArray(responsive) ? responsive.map(v => dict.responsive[v] || v).join(", ") : dict.responsive[responsive] || responsive);
    if (respNote) lines.push(`> **Note:** ${respNote}`);
    lines.push("");
  }

  lines.push("| Breakpoint | Width | Layout Changes");
  lines.push("|------------|-------|--------------");
  if (responsive === "mobile-first") {
    lines.push("| Base | 375px | Single column, stacked layout");
    lines.push("| Mobile Large | 425px | Slightly wider margins");
    lines.push("| Tablet | 768px | 2-column grid, larger cards");
    lines.push("| Desktop | 1024px | Full multi-column layout");
    lines.push("| Wide | 1440px | Max-width container centered");
  } else {
    lines.push("| Desktop | ≥1024px | Full multi-column layout");
    lines.push("| Tablet | 768px–1023px | 2-column grid, smaller cards");
    lines.push("| Mobile | <768px | Single column, stacked layout");
  }
  lines.push("");

  lines.push("## Accessibility Checklist");
  lines.push("");
  for (const accId of accessibility) {
    const label = options.accessibility.find(o => o.id === accId)?.title || accId;
    lines.push(`- [ ] ${label}: ${dict.accessibility[accId] || ""}`);
  }
  if (accessibility.length === 0) {
    lines.push("- [ ] All interactive elements are keyboard-focusable");
    lines.push("- [ ] Focus indicators visible (outline or ring)");
    lines.push("- [ ] Color contrast meets WCAG AA minimum (4.5:1)");
    lines.push("- [ ] ARIA labels provided for icon-only buttons");
    lines.push("- [ ] Form inputs have associated `<label>` elements");
    lines.push("- [ ] Touch targets are at least 44×44px on mobile");
    lines.push("- [ ] Motion reduced via `prefers-reduced-motion`");
  }
  lines.push("");

  lines.push("## Design System Tokens");
  lines.push("");
  lines.push("| Token | Value | Usage");
  lines.push("|-------|-------|------");
  lines.push("| `--font-primary` | `Inter, system-ui, sans-serif` | Body and headings");
  lines.push("| `--radius-sm` | `4px` | Small elements, tags, badges");
  lines.push("| `--radius-md` | `8px` | Cards, modals, buttons");
  lines.push("| `--radius-lg` | `16px` | Large containers, hero sections");
  lines.push("| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle elevation");
  lines.push("| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Card elevation");
  lines.push("| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.15)` | Modal, dropdown");
  if (style === "neo-brutalism") {
    lines.push("| `--border-width` | `4px` | Neo-brutalist borders");
    lines.push("| `--shadow-brutal` | `4px 4px 0 #000` | Brutalist box shadow");
  }
  if (style === "glassmorphism") {
    lines.push("| `--glass-bg` | `rgba(255,255,255,0.15)` | Glass background");
    lines.push("| `--glass-blur` | `16px` | Backdrop blur amount");
  }
  lines.push("");

  lines.push("## Implementation Recommendations");
  lines.push("");
  lines.push("- Use **Tailwind CSS** utility classes for consistent styling.");
  lines.push("- Structure the component as a composable set of sub-components.");
  lines.push("- Export a single named export with TypeScript interface for props.");
  lines.push("- Include a Storybook story for visual regression testing.");
  lines.push("- Add unit tests for state logic and integration tests for user interactions.");
  if (interactivity.includes("draggable")) {
    lines.push("- Use `@dnd-kit/core` for drag-and-drop with smooth animations.");
  }
  if (interactivity.includes("modal-popup")) {
    lines.push("- Trap focus inside the modal. Close on `Escape` key and backdrop click.");
  }
  if (responsive === "container-queries") {
    lines.push("- Use CSS container queries with `container-type: inline-size` on parent elements.");
  }
  if (accessibility.includes("focus-trap")) {
    lines.push("- Implement focus trap using a library like `focus-trap-react` for modals.");
  }
  lines.push("");

  lines.push("## Generated Prompt for AI Designer");
  lines.push("");
  lines.push("```");
  const promptParts: string[] = [];
  promptParts.push(`Design a ${compLabel} component.`);
  promptParts.push(`Apply a ${styleLabel} visual style.`);
  promptParts.push(`Use a ${colorLabel} color scheme.`);
  promptParts.push(`Use a ${layLabel} layout.`);
  promptParts.push(`Typography: ${typLabel}.`);
  if (interactivity.length > 0) {
    promptParts.push(`Add ${interactivity.map(id => options.interactivity.find(o => o.id === id)?.title || id).join(", ")} interactivity.`);
  }
  promptParts.push(`Responsive approach: ${respLabel}.`);
  if (accessibility.length > 0) {
    promptParts.push(`Accessibility: ${accessibility.map(id => options.accessibility.find(o => o.id === id)?.title || id).join(", ")}.`);
  }
  lines.push(promptParts.join(" "));
  lines.push("```");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by UI/UX Component Prompt Builder_");

  return lines.join("\n");
}

export default function UiUxComponentPage() {
  return (
    <ToolShell
      title="UI/UX Component Prompt Builder"
      steps={[
        { id: 1, label: "Component", component: (p) => (
          <GenericStep {...p} title="Select Component Type" description="What UI element are you building?" options={options.component} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="component" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Style", component: (p) => (
          <GenericStep {...p} title="Select Visual Style" description="What visual direction should the component follow?" options={options.style} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="style" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Color", component: (p) => (
          <GenericStep {...p} title="Select Color Scheme" description="What color palette should be used?" options={options.color} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="color" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Interact", component: (p) => (
          <GenericStep {...p} title="Select Interactivity Level" description="How interactive should the component be?" options={options.interactivity} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="interactivity" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Layout", component: (p) => (
          <GenericStep {...p} title="Select Layout Pattern" description="How should the content be arranged?" options={options.layout} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="layout" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Typography", component: (p) => (
          <GenericStep {...p} title="Select Typography Style" description="What typeface direction should be used?" options={options.typography} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="typography" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Responsive", component: (p) => (
          <GenericStep {...p} title="Select Responsive Strategy" description="How should the UI adapt to screen sizes?" options={options.responsive} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="responsive" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Access", component: (p) => (
          <GenericStep {...p} title="Select Accessibility Requirements" description="What accessibility features are needed?" options={options.accessibility} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="accessibility" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}









