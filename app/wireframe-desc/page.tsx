"use client";

import type { FC } from "react";
import {
  Monitor, Smartphone, Tablet, Laptop, LayoutDashboard,
  Columns2, Rows2, Grid3x3, PanelLeft, PanelRight,
  PanelTop, PanelBottom, Square, Circle, RectangleHorizontal,
  RectangleVertical, Grid2x2, AlignStartVertical, AlignEndVertical,
  AlignStartHorizontal, AlignEndHorizontal, Ruler, Layers,
  MousePointer, Keyboard, Hand, Eye, EyeOff, Zap,
  FileText, Image, Video, Music, ShoppingCart, MessageSquare,
  ArrowUpDown, ArrowLeftRight, RefreshCw, Sun, Moon,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";
const options = {
  screenType: [
    { id: "mobile", title: "Mobile (375px)", description: "Small screen portrait-first layout", icon: Smartphone },
    { id: "tablet", title: "Tablet (768px)", description: "Medium screen with adaptive layout", icon: Tablet },
    { id: "laptop", title: "Laptop (1280px)", description: "Standard desktop layout with sidebar", icon: Laptop },
    { id: "desktop", title: "Desktop (1440px+)", description: "Full widescreen with multi-column layout", icon: Monitor },
    { id: "responsive", title: "Responsive All", description: "Adapts fluidly across all breakpoints", icon: LayoutDashboard },
    { id: "mobile-first", title: "Mobile-First", description: "Designed for mobile, scales up", icon: Smartphone },
    { id: "tablet-first", title: "Tablet-First", description: "Designed for tablet as primary", icon: Tablet },
    { id: "desktop-first", title: "Desktop-First", description: "Designed for desktop, scales down", icon: Monitor },
  ],
  layoutStructure: [
    { id: "single-column", title: "Single Column", description: "Vertical stack - content flows top to bottom", icon: Rows2 },
    { id: "two-column", title: "Two Column", description: "Sidebar + main content area", icon: Columns2 },
    { id: "three-column", title: "Three Column", description: "Left sidebar + content + right sidebar", icon: Grid3x3 },
    { id: "grid-layout", title: "Grid Layout", description: "Multi-card grid with consistent sizing", icon: Grid2x2 },
    { id: "dashboard", title: "Dashboard", description: "Widget-based layout with panels and charts", icon: LayoutDashboard },
    { id: "full-width", title: "Full Width", description: "Edge-to-edge content with no side margins", icon: RectangleHorizontal },
    { id: "split-screen", title: "Split Screen", description: "Two equal halves for comparison or detail", icon: AlignStartHorizontal },
    { id: "overlay", title: "Overlay / Modal", description: "Content layered on top of a background", icon: Square },
  ],
  componentPlacement: [
    { id: "header-top", title: "Header (Top)", description: "Top bar with logo, nav, and actions", icon: PanelTop },
    { id: "nav-left", title: "Nav (Left Sidebar)", description: "Vertical navigation on the left edge", icon: PanelLeft },
    { id: "nav-right", title: "Nav (Right Sidebar)", description: "Vertical navigation or info on the right", icon: PanelRight },
    { id: "footer-bottom", title: "Footer (Bottom)", description: "Bottom bar with links and copyright", icon: PanelBottom },
    { id: "hero-center", title: "Hero (Center)", description: "Large centered hero section with CTA", icon: Square },
    { id: "floating-action", title: "Floating Action", description: "FAB button fixed in bottom-right corner", icon: Circle },
    { id: "sticky-header", title: "Sticky Header", description: "Header that remains visible on scroll", icon: AlignStartVertical },
    { id: "sticky-sidebar", title: "Sticky Sidebar", description: "Sidebar content that follows on scroll", icon: AlignEndVertical },
  ],
  spacingGrid: [
    { id: "compact", title: "Compact (4px base)", description: "Tight spacing for dense content", icon: Grid2x2 },
    { id: "default", title: "Default (8px base)", description: "Standard 8px grid system", icon: Grid3x3 },
    { id: "comfortable", title: "Comfortable (12px base)", description: "Generous spacing for readability", icon: Ruler },
    { id: "generous", title: "Generous (16px base)", description: "Loose spacing for premium feel", icon: Layers },
    { id: "custom-grid", title: "Custom Grid", description: "Define custom column and gutter sizes", icon: Grid3x3 },
    { id: "12-col", title: "12-Column Grid", description: "Standard 12-column responsive grid", icon: Columns2 },
    { id: "8-col", title: "8-Column Grid", description: "8-column grid for content-focused sites", icon: Columns2 },
    { id: "6-col", title: "6-Column Grid", description: "6-column grid for simple layouts", icon: Columns2 },
  ],
  contentAreas: [
    { id: "text-block", title: "Text Block", description: "Paragraphs, headings, and rich text", icon: FileText },
    { id: "image-area", title: "Image Area", description: "Hero images, thumbnails, and galleries", icon: Image },
    { id: "video-player", title: "Video Player", description: "Embedded or native video playback area", icon: Video },
    { id: "audio-player", title: "Audio Player", description: "Music or podcast playback controls", icon: Music },
    { id: "form-section", title: "Form Section", description: "Input fields, selects, and submit buttons", icon: FileText },
    { id: "card-grid", title: "Card Grid", description: "Grid of cards with image, title, and description", icon: Grid3x3 },
    { id: "data-table", title: "Data Table", description: "Tabular data with sortable columns", icon: Rows2 },
    { id: "map-area", title: "Map / Location", description: "Embedded interactive map container", icon: RectangleVertical },
  ],
  interactiveElements: [
    { id: "buttons", title: "Buttons", description: "Clickable action buttons with hover/active states", icon: MousePointer },
    { id: "forms-inputs", title: "Forms and Inputs", description: "Text inputs, dropdowns, checkboxes, radios", icon: Keyboard },
    { id: "modals", title: "Modals / Dialogs", description: "Overlay popups for confirmations and forms", icon: Square },
    { id: "accordions", title: "Accordions / Tabs", description: "Expandable sections and tabbed content", icon: ArrowUpDown },
    { id: "carousels", title: "Carousels / Sliders", description: "Horizontal scrolling content panels", icon: ArrowLeftRight },
    { id: "tooltips", title: "Tooltips / Popovers", description: "Hover-activated information bubbles", icon: Hand },
    { id: "toast-notifications", title: "Toast Notifications", description: "Temporary status messages at screen edges", icon: Eye },
    { id: "drag-drop", title: "Drag and Drop", description: "Reorderable lists and droppable zones", icon: RefreshCw },
  ],
  states: [
    { id: "default", title: "Default / Idle", description: "Component in its normal resting state", icon: Sun },
    { id: "hover", title: "Hover", description: "Component with mouse cursor over it", icon: MousePointer },
    { id: "active", title: "Active / Pressed", description: "Component being actively clicked or pressed", icon: Hand },
    { id: "focus", title: "Focus", description: "Component with keyboard focus ring visible", icon: Eye },
    { id: "disabled", title: "Disabled", description: "Component that cannot be interacted with", icon: EyeOff },
    { id: "loading", title: "Loading", description: "Component showing progress or skeleton state", icon: RefreshCw },
    { id: "error", title: "Error", description: "Component displaying validation or system error", icon: Zap },
    { id: "empty", title: "Empty / Null", description: "Component with no data to display", icon: Square },
  ],
  breakpoints: [
    { id: "mobile-only", title: "Mobile Only", description: "Single small breakpoint only", icon: Smartphone },
    { id: "mobile-tablet", title: "Mobile + Tablet", description: "Two breakpoints up to 1024px", icon: Tablet },
    { id: "mobile-desktop", title: "Mobile + Desktop", description: "Two breakpoints jumping small to large", icon: Monitor },
    { id: "standard-3", title: "Standard 3 Breakpoints", description: "Mobile, tablet, desktop (640/1024/1280)", icon: Laptop },
    { id: "extended-4", title: "Extended 4 Breakpoints", description: "Mobile, tablet, laptop, desktop (480/768/1024/1440)", icon: LayoutDashboard },
    { id: "fluid", title: "Fully Fluid", description: "Continuous scaling across all widths", icon: Ruler },
    { id: "container-queries", title: "Container Queries", description: "Responds to container width not viewport", icon: Grid3x3 },
    { id: "custom-bp", title: "Custom Breakpoints", description: "Define your own pixel thresholds", icon: ArrowLeftRight },
  ],
};

const dict: Record<string, Record<string, string>> = {
  screenType: {
    mobile: "A 375px mobile layout prioritizes vertical scrolling, single-column content, and thumb-friendly touch targets. Navigation is typically a hamburger List, and content is stripped to essentials for small screen consumption.",
    tablet: "A 768px tablet layout offers more horizontal space for split-pane views, sidebars, and multi-column grids. Touch targets remain generous while accommodating richer content layouts than mobile.",
    laptop: "A 1280px laptop layout provides standard desktop real estate with room for persistent sidebars, multi-panel layouts, and comprehensive navigation. Suitable for most productivity applications.",
    desktop: "A 1440px+ desktop layout enables expansive multi-column designs, wide hero sections, and complex dashboard layouts. Extra horizontal space allows for sidebars, tool panels, and content side-by-side.",
    responsive: "A fully responsive design adapts gracefully across all breakpoints from 320px to 1920px. Layout shifts occur at predefined breakpoints while maintaining design consistency and usability at every size.",
    "mobile-first": "Mobile-first design starts with the smallest screen layout as the default and progressively enhances for larger screens. CSS min-width media queries add complexity as viewport grows.",
    "tablet-first": "Tablet-first prioritizes the tablet experience as the baseline and adjusts for smaller and larger screens. Ideal for apps where tablet usage represents the primary user behavior.",
    "desktop-first": "Desktop-first starts with the largest layout and uses max-width media queries to simplify for smaller screens. Can result in heavy mobile pages if not carefully optimized.",
  },
  layoutStructure: {
    "single-column": "A single column layout stacks all content vertically from top to bottom. Simplest to implement and works universally across all devices. Best for linear reading experiences and focused content consumption.",
    "two-column": "A two-column layout places a sidebar (typically 25-30% width) alongside the main content area (70-75% width). The sidebar can contain navigation, filters, ads, or supplementary information panels.",
    "three-column": "A three-column layout divides the page into left sidebar, main content, and right sidebar. Provides maximum information density but can overwhelm readers on smaller viewports where sidebars collapse.",
    "grid-layout": "A grid layout arranges content cards in rows and columns with consistent sizing. Each card is a self-contained content unit. Works well for galleries, dashboards, and content discovery pages.",
    dashboard: "A dashboard layout combines multiple widgets, charts, and data panels in a flexible grid. Widgets can be resized, rearranged, or hidden. Common in analytics, monitoring, and admin interfaces.",
    "full-width": "Full-width layout extends content to the edges of the viewport with minimal or no padding. Creates an immersive, cinematic feel but requires careful handling of text line lengths for readability.",
    "split-screen": "Split-screen divides the viewport into two equal halves, each containing independent content. Ideal for comparison tools, before/after showcases, and bilingual layouts needing parallel presentation.",
    overlay: "Overlay or modal layout presents content in a layer above the main page with a semi-transparent backdrop. Used for dialogs, lightboxes, detail views, and forms that require focused attention.",
  },
  componentPlacement: {
    "header-top": "The top header bar is the most prominent navigation element. Contains the logo, primary navigation links, search, and user actions. Should be sticky on content-heavy pages for constant access.",
    "nav-left": "Left sidebar navigation provides persistent access to all main sections. Supports collapsible groups, icons with labels, and nested List items. Best for apps with many navigation destinations.",
    "nav-right": "Right sidebar typically holds secondary information: related content, ads, chat widgets, or contextual help. Less common for primary navigation but useful for supplemental controls and panels.",
    "footer-bottom": "The footer appears at the bottom of every page containing secondary links, contact information, social media icons, and copyright notices. Often multi-column with accordions on mobile viewports.",
    "hero-center": "The hero section dominates the top of the page with a large headline, supporting text, and primary call-to-action. Often includes a background image or video. Sets the visual tone for the entire page.",
    "floating-action": "The floating action button (FAB) is a circular button fixed in the bottom-right corner that triggers the primary action on the screen. Common in mobile apps for quick access to compose or add functions.",
    "sticky-header": "The sticky header remains fixed at the top of the viewport when scrolling. Ensures navigation and key actions are always accessible. Should shrink or simplify on scroll to conserve vertical space.",
    "sticky-sidebar": "A sticky sidebar follows the user as they scroll, keeping secondary content always in view. Useful for table of contents, shopping cart summaries, or contextual tool panels on long pages.",
  },
  spacingGrid: {
    compact: "Use a 4px base unit for compact layouts with tight spacing. Ideal for data-heavy dashboards, admin panels, and developer tools where information density is more important than whitespace.",
    default: "The 8px grid system is the industry standard. All margins, paddings, and gaps are multiples of 8px. Provides consistent vertical and horizontal rhythm across all components and layouts.",
    comfortable: "12px base spacing offers more breathing room between elements. Creates a relaxed reading experience suitable for content sites, blogs, and editorial applications where readability matters most.",
    generous: "16px base spacing prioritizes whitespace and premium feel. Common in luxury brand sites, portfolio showcases, and minimal design systems where each element needs room to be appreciated.",
    "custom-grid": "Define custom column count, gutter width, and margin values for your specific layout needs. Custom grids allow fine control over proportions that standard grid systems cannot achieve.",
    "12-col": "The 12-column grid is the most flexible as it divides cleanly by 1, 2, 3, 4, 6, and 12 columns. Widely supported by CSS frameworks and provides maximum layout versatility.",
    "8-col": "8-column grids offer fewer subdivision options (1, 2, 4, 8) but create wider columns suitable for content-focused designs. Good for blog layouts and editorial page structures.",
    "6-col": "6-column grids provide simplicity with clean divisions (1, 2, 3, 6). Best for simple marketing sites, landing pages, and portfolios where complex layout flexibility is not needed.",
  },
  contentAreas: {
    "text-block": "Text blocks contain paragraphs, headings, lists, and rich formatted content. Ensure adequate line length (45-75 characters), proper heading hierarchy, and sufficient whitespace between blocks.",
    "image-area": "Image areas display hero images, thumbnails, product photos, or galleries. Support responsive images with srcset, lazy loading for performance, and appropriate aspect ratio containers.",
    "video-player": "Video player areas embed streaming or self-hosted video content. Include play/pause controls, progress bar, volume adjustment, fullscreen toggle, and captions for accessibility compliance.",
    "audio-player": "Audio player sections provide playback controls for music, podcasts, or voice recordings. Include seek bar, play/pause, volume, playback speed, and download options where applicable.",
    "form-section": "Form sections group related input fields for data collection. Use clear labels, helpful placeholders, inline validation, and logical tab order. Group related fields with fieldset and legend elements.",
    "card-grid": "Card grids present multiple content items in a consistent visual format. Each card typically includes an image, title, description, and action. Ensure cards are keyboard navigable and screen-reader friendly.",
    "data-table": "Data tables display structured row-and-column information with sortable headers, filter controls, pagination, and responsive overflow handling. Support row selection and bulk actions where needed.",
    "map-area": "Map or location areas embed interactive maps for geographic data visualization. Include zoom controls, marker clustering for density, and info popups for point-of-interest details.",
  },
  interactiveElements: {
    buttons: "Buttons trigger actions when clicked or tapped. Provide clear visual states for default, hover, active, focus, and disabled. Include proper aria-label for icon-only buttons and support keyboard activation.",
    "forms-inputs": "Form inputs collect user data through text fields, dropdowns, checkboxes, radio buttons, and file uploads. Each input needs an associated label, validation feedback, and accessible error messages.",
    modals: "Modals and dialogs overlay the page to focus user attention on a specific task. Include a close button, backdrop dismiss, keyboard escape handling, focus trapping, and proper ARIA role attributes.",
    accordions: "Accordions and tabs organize content into expandable sections or tabbed panels. Only one panel should be open at a time for accordions. Support keyboard navigation with arrow keys between tabs.",
    carousels: "Carousels and sliders rotate through content panels horizontally. Provide prev/next controls, dot indicators, autoplay with pause on hover, and swipe support on touch devices. Avoid auto-playing for accessibility.",
    tooltips: "Tooltips and popovers display contextual information on hover or focus. Position relative to the trigger element, handle overflow boundaries, and include a small delay before showing to prevent flickering.",
    "toast-notifications": "Toast notifications display temporary status messages at the edge of the screen. Support success, error, warning, and info variants. Auto-dismiss after a configurable duration with manual close option.",
    "drag-drop": "Drag and drop interfaces allow users to reorder lists, rearrange dashboard widgets, or upload files. Provide visual feedback during drag, clear drop zone indicators, and keyboard alternatives for accessibility.",
  },
  states: {
    default: "The default or idle state shows the component in its normal resting appearance. All interactive elements must have a clearly distinguishable default state that follows the design system visual language.",
    hover: "The hover state activates when the user places their cursor over an interactive element. Use subtle visual changes like background color shift, underline, or shadow elevation to indicate interactivity.",
    active: "The active or pressed state triggers momentarily when the user clicks or taps an element. Provide immediate visual feedback such as scale down or darken to confirm the interaction was registered.",
    focus: "The focus state appears when an element is selected via keyboard navigation using the Tab key. Always show a visible focus ring or outline. Never remove outlines without providing an alternative indicator.",
    disabled: "The disabled state indicates an element that cannot be interacted with. Reduce opacity to typically 40-50%, remove hover effects, and prevent click events. Ensure disabled elements remain perceivable by screen readers.",
    loading: "The loading state shows progress while content is being fetched or processed. Use skeleton screens for layout content, spinners for actions, and progress bars for multi-step processes with known duration.",
    error: "The error state displays when validation fails or a system error occurs. Show clear error messages near the relevant field, use red as the error color, and provide guidance on how to fix the issue.",
    empty: "The empty or null state appears when a component has no data to display. Show a helpful illustration, a clear message explaining why the area is empty, and a call-to-action if applicable.",
  },
  breakpoints: {
    "mobile-only": "A single mobile breakpoint targets small screens only. Content is optimized for portrait orientation with touch-friendly targets. No responsive adaptation occurs for larger viewports.",
    "mobile-tablet": "Two breakpoints covering mobile and tablet. Layout adapts from single-column on small screens to two-column on tablets. Suitable for apps with limited desktop usage patterns.",
    "mobile-desktop": "Two breakpoints jumping directly from mobile to desktop. Tablets see the mobile layout. Best for simple sites where tablet-specific optimizations are unnecessary for the experience.",
    "standard-3": "Three standard breakpoints at 640px (mobile), 1024px (tablet), and 1280px (desktop). The most common responsive strategy providing appropriate layouts for all major device categories.",
    "extended-4": "Four breakpoints adding a laptop tier between tablet and desktop: 480px, 768px, 1024px, 1440px. Provides fine-grained control for increasingly diverse screen sizes in the modern device landscape.",
    fluid: "Fully fluid layout uses relative units and flex/grid properties to scale continuously without fixed breakpoints. Content flows naturally at every width between minimum and maximum constraints.",
    "container-queries": "Container queries allow components to respond to their parent container width rather than the viewport. Enables truly modular, reusable components that adapt wherever they are placed.",
    "custom-bp": "Define custom breakpoint thresholds based on your content needs rather than generic device sizes. Test actual content collapse points and set breakpoints where the design naturally breaks.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const screenType = selections.step1;
  const layoutStructure = selections.step2;
  const componentPlacement = selections.step3;
  const spacingGrid = selections.step4;
  const contentAreas = selections.step5;
  const interactiveElements = selections.step6;
  const states = selections.step7;
  const breakpoints = selections.step8;

  const lines: string[] = [];

  lines.push("# Wireframe Description Document");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const stLabel = Array.isArray(screenType) ? screenType.map(id => options.screenType.find(o => o.id === id)?.title || id).join(", ") : options.screenType.find(o => o.id === screenType)?.title || screenType;
  const stNote = notes["screenType-" + screenType] || "";
  lines.push("| Screen Type | " + stLabel + " | " + stNote);
  const lsLabel = Array.isArray(layoutStructure) ? layoutStructure.map(id => options.layoutStructure.find(o => o.id === id)?.title || id).join(", ") : options.layoutStructure.find(o => o.id === layoutStructure)?.title || layoutStructure;
  const lsNote = notes["layoutStructure-" + layoutStructure] || "";
  lines.push("| Layout Structure | " + lsLabel + " | " + lsNote);
  const cpLabel = Array.isArray(componentPlacement) ? componentPlacement.map(id => options.componentPlacement.find(o => o.id === id)?.title || id).join(", ") : options.componentPlacement.find(o => o.id === componentPlacement)?.title || componentPlacement;
  const cpNote = notes["componentPlacement-" + componentPlacement] || "";
  lines.push("| Component Placement | " + cpLabel + " | " + cpNote);
  const sgLabel = Array.isArray(spacingGrid) ? spacingGrid.map(id => options.spacingGrid.find(o => o.id === id)?.title || id).join(", ") : options.spacingGrid.find(o => o.id === spacingGrid)?.title || spacingGrid;
  const sgNote = notes["spacingGrid-" + spacingGrid] || "";
  lines.push("| Spacing / Grid | " + sgLabel + " | " + sgNote);
  const caLabel = Array.isArray(contentAreas) ? contentAreas.map(id => options.contentAreas.find(o => o.id === id)?.title || id).join(", ") : options.contentAreas.find(o => o.id === contentAreas)?.title || contentAreas;
  const caNote = notes["contentAreas-" + contentAreas] || "";
  lines.push("| Content Areas | " + caLabel + " | " + caNote);
  const ieLabel = Array.isArray(interactiveElements) ? interactiveElements.map(id => options.interactiveElements.find(o => o.id === id)?.title || id).join(", ") : options.interactiveElements.find(o => o.id === interactiveElements)?.title || interactiveElements;
  const ieNote = notes["interactiveElements-" + interactiveElements] || "";
  lines.push("| Interactive Elements | " + ieLabel + " | " + ieNote);
  const st2Label = Array.isArray(states) ? states.map(id => options.states.find(o => o.id === id)?.title || id).join(", ") : options.states.find(o => o.id === states)?.title || states;
  const st2Note = notes["states-" + states] || "";
  lines.push("| States | " + st2Label + " | " + st2Note);
  const bpLabel = Array.isArray(breakpoints) ? breakpoints.map(id => options.breakpoints.find(o => o.id === id)?.title || id).join(", ") : options.breakpoints.find(o => o.id === breakpoints)?.title || breakpoints;
  const bpNote = notes["breakpoints-" + breakpoints] || "";
  lines.push("| Breakpoints | " + bpLabel + " | " + bpNote);
  lines.push("");

  lines.push("## Screen Overview");
  lines.push("");
  if (screenType) {
    lines.push("### Screen Type: " + stLabel);
    lines.push("");
    lines.push(Array.isArray(screenType) ? screenType.map(v => dict.screenType[v] || v).join(", ") : dict.screenType[screenType] || screenType);
    if (stNote) lines.push("> **Note:** " + stNote);
    lines.push("");
  }

  if (layoutStructure) {
    lines.push("### Layout Structure: " + lsLabel);
    lines.push("");
    lines.push(Array.isArray(layoutStructure) ? layoutStructure.map(v => dict.layoutStructure[v] || v).join(", ") : dict.layoutStructure[layoutStructure] || layoutStructure);
    if (lsNote) lines.push("> **Note:** " + lsNote);
    lines.push("");
  }

  lines.push("## Layout Blueprint");
  lines.push("");
  lines.push("```");
  lines.push("┌─────────────────────────────────────────┐");
  if (componentPlacement === "header-top" || componentPlacement === "sticky-header") {
    lines.push("│                HEADER                      │");
    lines.push("│    Logo      Nav Links      Actions       │");
  }
  lines.push("├─────────────────────────────────────────┤");
  if (componentPlacement === "nav-left") {
    lines.push("│  SIDE  │          MAIN CONTENT            │");
    lines.push("│  BAR   │                                  │");
    lines.push("│        │                                  │");
  } else if (componentPlacement === "nav-right") {
    lines.push("│          MAIN CONTENT         │  SIDE    │");
    lines.push("│                               │  BAR     │");
    lines.push("│                               │          │");
  } else if (layoutStructure === "single-column" || layoutStructure === "full-width") {
    lines.push("│          MAIN CONTENT AREA                │");
    lines.push("│                                           │");
    lines.push("│                                           │");
  } else if (layoutStructure === "two-column") {
    lines.push("│     SIDEBAR      │     MAIN CONTENT        │");
    lines.push("│                  │                          │");
    lines.push("│                  │                          │");
  } else if (layoutStructure === "three-column") {
    lines.push("│ L  │     MAIN CONTENT      │  R            │");
    lines.push("│ S  │                        │  S            │");
    lines.push("│ B  │                        │  B            │");
  } else if (layoutStructure === "grid-layout" || layoutStructure === "dashboard") {
    lines.push("│  ┌──────┐  ┌──────┐  ┌──────┐            │");
    lines.push("│  │ WIDGET │  │ WIDGET │  │ WIDGET │       │");
    lines.push("│  └──────┘  └──────┘  └──────┘            │");
  } else if (layoutStructure === "split-screen") {
    lines.push("│     LEFT PANEL        │    RIGHT PANEL     │");
    lines.push("│                        │                     │");
    lines.push("│                        │                     │");
  } else if (layoutStructure === "overlay") {
    lines.push("│           BACKGROUND PAGE                  │");
    lines.push("│       ┌──────────────────┐                │");
    lines.push("│       │   MODAL CONTENT  │                │");
    lines.push("│       └──────────────────┘                │");
  }
  if (componentPlacement === "footer-bottom") {
    lines.push("├─────────────────────────────────────────┤");
    lines.push("│                FOOTER                      │");
    lines.push("│    Links     Social     Copyright          │");
  }
  lines.push("└─────────────────────────────────────────┘");
  lines.push("```");
  lines.push("");

  lines.push("## Component Placement Details");
  lines.push("");
  if (componentPlacement) {
    lines.push("### Placement: " + cpLabel);
    lines.push("");
    lines.push(Array.isArray(componentPlacement) ? componentPlacement.map(v => dict.componentPlacement[v] || v).join(", ") : dict.componentPlacement[componentPlacement] || componentPlacement);
    if (cpNote) lines.push("> **Note:** " + cpNote);
    lines.push("");
  }

  lines.push("### Component Coordinates");
  lines.push("");
  lines.push("| Component | Position | Width | Height | Z-Index | Behavior");
  lines.push("|-----------|----------|-------|--------|---------|---------");
  lines.push("| Header | Top: 0, Left: 0 | 100% | 64px | 100 | Fixed on scroll");
  lines.push("| Sidebar | Top: 64px, Left: 0 | 260px | calc(100vh - 64px) | 90 | Sticky");
  lines.push("| Main Content | Top: 64px, Left: 260px | calc(100% - 260px) | auto | 10 | Scrollable");
  lines.push("| Footer | Bottom: 0 | 100% | auto | 80 | Static bottom");
  lines.push("| FAB | Bottom: 24px, Right: 24px | 56px | 56px | 200 | Fixed");
  lines.push("");

  lines.push("## Spacing & Grid System");
  lines.push("");
  if (spacingGrid) {
    lines.push("### Grid: " + sgLabel);
    lines.push("");
    lines.push(Array.isArray(spacingGrid) ? spacingGrid.map(v => dict.spacingGrid[v] || v).join(", ") : dict.spacingGrid[spacingGrid] || spacingGrid);
    if (sgNote) lines.push("> **Note:** " + sgNote);
    lines.push("");
  }

  const gridCols = spacingGrid === "12-col" ? 12 : spacingGrid === "8-col" ? 8 : spacingGrid === "6-col" ? 6 : 12;
  const basePx = spacingGrid === "compact" ? 4 : spacingGrid === "comfortable" ? 12 : spacingGrid === "generous" ? 16 : 8;
  lines.push("### Grid Configuration");
  lines.push("");
  lines.push("| Property | Value");
  lines.push("|----------|-------");
  lines.push("| Grid Columns | " + gridCols);
  lines.push("| Base Unit | " + basePx + "px");
  lines.push("| Gutter | " + (basePx * 2) + "px");
  lines.push("| Margin | " + (basePx * 4) + "px");
  lines.push("| Container Max | 1200px");
  lines.push("");

  lines.push("## Content Areas");
  lines.push("");
  if (contentAreas) {
    lines.push("### Content: " + caLabel);
    lines.push("");
    lines.push(Array.isArray(contentAreas) ? contentAreas.map(v => dict.contentAreas[v] || v).join(", ") : dict.contentAreas[contentAreas] || contentAreas);
    if (caNote) lines.push("> **Note:** " + caNote);
    lines.push("");
  }

  lines.push("### Content Area Specifications");
  lines.push("");
  lines.push("| Content Area | Recommended Size | Spacing | Typography | Notes");
  lines.push("|-------------|-----------------|---------|------------|-------");
  lines.push("| Text Block | 100% width, auto height | 24px bottom | Body 16px / 1.5 | Readable line length 70ch max");
  lines.push("| Image Area | 100% width, 16:9 ratio | 16px bottom | Caption 14px | Lazy load, srcset responsive");
  lines.push("| Video Player | 100% width, 16:9 ratio | 24px bottom | Title 18px | Autoplay off, controls on");
  lines.push("| Card Grid | 3 cols desktop, 2 tablet, 1 mobile | 16px gap | Card title 16px bold | Consistent card height");
  lines.push("| Form Section | 100% width, max 600px | 20px between fields | Label 14px bold | Inline validation");
  lines.push("| Data Table | 100% width, scroll X | 8px cell padding | Cell 14px | Sortable headers");
  lines.push("");

  lines.push("## Interactive Elements");
  lines.push("");
  if (interactiveElements) {
    lines.push("### Elements: " + ieLabel);
    lines.push("");
    lines.push(Array.isArray(interactiveElements) ? interactiveElements.map(v => dict.interactiveElements[v] || v).join(", ") : dict.interactiveElements[interactiveElements] || interactiveElements);
    if (ieNote) lines.push("> **Note:** " + ieNote);
    lines.push("");
  }

  lines.push("### Interaction Specifications");
  lines.push("");
  lines.push("| Element | Trigger | Feedback | Timing | Accessibility");
  lines.push("|---------|---------|----------|--------|--------------");
  lines.push("| Button | Click / Tap | Background shift + scale | 150ms | aria-label, min 44x44px");
  lines.push("| Input | Focus / Type | Border color + label float | 200ms | aria-describedby for errors");
  lines.push("| Modal | Button click | Fade in backdrop + slide up | 300ms | aria-modal, focus trap");
  lines.push("| Accordion | Click header | Chevron rotate + slide content | 250ms | aria-expanded, role button");
  lines.push("| Tooltip | Hover / Focus | Fade in with delay | 200ms delay | role tooltip, aria-describedby");
  lines.push("| Toast | System trigger | Slide in from top-right | 400ms in, 5000ms out | role alert, aria-live polite");
  lines.push("");

  lines.push("## State Specifications");
  lines.push("");
  if (states) {
    lines.push("### States: " + st2Label);
    lines.push("");
    lines.push(Array.isArray(states) ? states.map(v => dict.states[v] || v).join(", ") : dict.states[states] || states);
    if (st2Note) lines.push("> **Note:** " + st2Note);
    lines.push("");
  }

  lines.push("### State Visual Mapping");
  lines.push("");
  lines.push("| State | Visual Treatment | CSS Pseudo | Color Change | Animation");
  lines.push("|-------|-----------------|------------|-------------|-----------");
  lines.push("| Default | Normal appearance | :not() | Base token | None");
  lines.push("| Hover | Background highlight | :hover | +5% brightness | 150ms ease");
  lines.push("| Active | Pressed appearance | :active | Scale 0.97 | 100ms ease");
  lines.push("| Focus | Visible ring outline | :focus-visible | Ring token | 0ms instant");
  lines.push("| Disabled | 40% opacity | :disabled | Gray overlay | None");
  lines.push("| Loading | Skeleton / Spinner | .loading | Neutral shimmer | 1.5s pulse");
  lines.push("| Error | Red border + message | :invalid | Error token | 200ms shake");
  lines.push("| Empty | Illustration + text | .empty | Muted colors | Fade in 300ms");
  lines.push("");

  lines.push("## Responsive Breakpoints");
  lines.push("");
  if (breakpoints) {
    lines.push("### Strategy: " + bpLabel);
    lines.push("");
    lines.push(Array.isArray(breakpoints) ? breakpoints.map(v => dict.breakpoints[v] || v).join(", ") : dict.breakpoints[breakpoints] || breakpoints);
    if (bpNote) lines.push("> **Note:** " + bpNote);
    lines.push("");
  }

  lines.push("### Breakpoint Layout Adaptations");
  lines.push("");
  lines.push("| Breakpoint | Viewport | Layout | Columns | Header | Sidebar | Font Size");
  lines.push("|------------|----------|--------|---------|--------|---------|----------");
  lines.push("| Mobile | < 640px | Single col | 1 | Hamburger | Hidden | 14px");
  lines.push("| Tablet | 640-1024px | Two col | 2 | Condensed | Collapsed | 15px");
  lines.push("| Laptop | 1024-1280px | Multi col | 3 | Full | Visible | 16px");
  lines.push("| Desktop | 1280-1440px | Multi col | 4 | Full + Search | Visible + Sticky | 16px");
  lines.push("| Wide | > 1440px | Expanded | 6 | Full + Extra | Visible + Sticky | 18px");
  lines.push("");

  lines.push("## Wireframe Flow Diagram");
  lines.push("");
  lines.push("```");
  lines.push("┌─────────────────────────────┐");
  lines.push("│     Screen Type Config    │");
  lines.push("│     " + stLabel.padEnd(23) + "│");
  lines.push("└───────────┬─────────────────┘");
  lines.push("            ▼");
  lines.push("┌─────────────────────────────┐");
  lines.push("│    Layout Structure        │");
  lines.push("│     " + lsLabel.padEnd(23) + "│");
  lines.push("└───────────┬─────────────────┘");
  lines.push("            ▼");
  lines.push("┌─────────────────────────────┐");
  lines.push("│   Component Placement      │");
  lines.push("│     " + cpLabel.padEnd(23) + "│");
  lines.push("└───────────┬─────────────────┘");
  lines.push("            ▼");
  lines.push("┌─────────────────────────────┐");
  lines.push("│    Spacing & Grid          │");
  lines.push("│     " + sgLabel.padEnd(23) + "│");
  lines.push("└───────────┬─────────────────┘");
  lines.push("            ▼");
  lines.push("┌─────────────────────────────┐");
  lines.push("│     Content Areas          │");
  lines.push("│     " + caLabel.padEnd(23) + "│");
  lines.push("└───────────┬─────────────────┘");
  lines.push("            ▼");
  lines.push("┌─────────────────────────────┐");
  lines.push("│  Interactive Elements      │");
  lines.push("│     " + ieLabel.padEnd(23) + "│");
  lines.push("└───────────┬─────────────────┘");
  lines.push("            ▼");
  lines.push("┌─────────────────────────────┐");
  lines.push("│     State Specifications   │");
  lines.push("│     " + st2Label.padEnd(23) + "│");
  lines.push("└───────────┬─────────────────┘");
  lines.push("            ▼");
  lines.push("┌─────────────────────────────┐");
  lines.push("│    Responsive Breakpoints  │");
  lines.push("│     " + bpLabel.padEnd(23) + "│");
  lines.push("└─────────────────────────────┘");
  lines.push("```");
  lines.push("");

  lines.push("## Implementation Guidelines");
  lines.push("");
  if (breakpoints === "mobile-first") {
    lines.push("- **Mobile First**: Write base styles for 375px, then add min-width media queries for larger screens.");
    lines.push("- **Progressive Enhancement**: Start with core functionality, layer on advanced features at larger breakpoints.");
    lines.push("- **Testing**: Test on actual mobile devices first, then scale up to tablet and desktop.");
  } else if (breakpoints === "desktop-first") {
    lines.push("- **Desktop First**: Write base styles for 1440px, then use max-width media queries for smaller screens.");
    lines.push("- **Graceful Degradation**: Ensure all functionality works on smaller screens with adapted layouts.");
    lines.push("- **Touch Targets**: Even when designing desktop-first, ensure 44x44px touch targets for tablet/mobile.");
  } else {
    lines.push("- Use relative units (rem, %, vw) for all layout dimensions to ensure proper scaling across devices.");
    lines.push("- Implement touch-friendly interactive elements with minimum 44x44px touch target size.");
    lines.push("- Ensure all interactive elements have visible focus indicators for keyboard accessibility.");
  }
  lines.push("- Test all component states (default, hover, active, focus, disabled, loading, error, empty).");
  lines.push("- Verify contrast ratios meet WCAG AA minimum for all text and interactive elements.");
  lines.push("- Use semantic HTML elements and ARIA attributes for screen reader compatibility.");
  lines.push("");

  lines.push("## Accessibility Checklist");
  lines.push("");
  lines.push("- [ ] All interactive elements are keyboard accessible (Tab, Enter, Escape).");
  lines.push("- [ ] Focus order follows a logical reading sequence (top to bottom, left to right).");
  lines.push("- [ ] All form inputs have associated label elements.");
  lines.push("- [ ] Error messages are programmatically associated with their inputs via aria-describedby.");
  lines.push("- [ ] Modal dialogs trap focus and restore focus on close.");
  lines.push("- [ ] Color is not the sole means of conveying information (use icons, text, patterns).");
  lines.push("- [ ] Touch targets are minimum 44x44px for mobile interactive elements.");
  lines.push("- [ ] Text contrast ratio is at least 4.5:1 for normal text, 3:1 for large text.");
  lines.push("- [ ] Page content is navigable by heading hierarchy (h1 > h2 > h3) without skipping levels.");
  lines.push("");

  lines.push("## Performance Considerations");
  lines.push("");
  lines.push("| Concern | Recommendation");
  lines.push("|---------|--------------");
  lines.push("| Layout Shifts | Set explicit width/height on images and media embeds to prevent CLS");
  lines.push("| Image Loading | Use loading=lazy for below-fold images, eager for above-fold hero images");
  lines.push("| Font Loading | Preload critical fonts, use font-display: swap with matching fallback metrics");
  lines.push("| Bundle Size | Lazy load off-screen components and heavy third-party widgets");
  lines.push("| Re-renders | Memoize expensive components, use React.memo for list items and cards");
  lines.push("| Animation | Use CSS transforms and opacity for animations, avoid layout-triggering properties");
  lines.push("| SSR / SSG | Pre-render critical above-fold content, defer interactive enhancements");
  lines.push("");

  lines.push("## Technical Specification");
  lines.push("");
  lines.push("| Aspect | Specification");
  lines.push("|--------|--------------");
  lines.push("| Framework | React + TypeScript with Next.js App Router");
  lines.push("| Styling | Tailwind CSS with CSS custom properties for theming");
  lines.push("| State Management | Component-local state, React Context for shared UI state");
  lines.push("| Animation | CSS transitions for micro-interactions, Framer Motion for page transitions");
  lines.push("| Responsive | CSS Grid and Flexbox with media queries or container queries");
  lines.push("| Accessibility | WCAG 2.1 AA target, axe-core testing in CI pipeline");
  lines.push("| Testing | Jest + React Testing Library for unit tests, Playwright for E2E");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Wireframe Describer_");

  return lines.join("\n");
}

export default function WireframeDescPage() {
  return (
    <ToolShell
      title="Wireframe Describer"
      steps={[
        { id: 1, label: "Screen Type", component: (p) => (
          <GenericStep {...p} title="Select Screen Type" description="What screen size or device is this wireframe for?" options={options.screenType} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="screenType" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Layout", component: (p) => (
          <GenericStep {...p} title="Choose Layout Structure" description="How should the page layout be structured?" options={options.layoutStructure} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="layoutStructure" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Components", component: (p) => (
          <GenericStep {...p} title="Place Components" description="Where should key UI components be placed?" options={options.componentPlacement} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="componentPlacement" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Spacing", component: (p) => (
          <GenericStep {...p} title="Set Spacing & Grid" description="What spacing and grid system should be used?" options={options.spacingGrid} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="spacingGrid" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Content", component: (p) => (
          <GenericStep {...p} title="Define Content Areas" description="What content areas does the wireframe include?" options={options.contentAreas} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="contentAreas" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Interact", component: (p) => (
          <GenericStep {...p} title="Add Interactive Elements" description="What interactive elements should be included?" options={options.interactiveElements} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="interactiveElements" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "States", component: (p) => (
          <GenericStep {...p} title="Define States" description="What component states need to be designed?" options={options.states} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="states" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Breakpoints", component: (p) => (
          <GenericStep {...p} title="Set Breakpoints" description="How should the wireframe adapt to different screens?" options={options.breakpoints} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="breakpoints" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}










