# AI Automation Workflow Generator - Design Specification

## 1. Dark Mode Color System

### 1.1 Tailwind CSS Variables (globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 222.2 84% 4.9%;
    --background-secondary: 217.2 32.6% 8%;
    --background-tertiary: 217.2 32.6% 12%;
    --card: 222.2 84% 4.9%;
    --card-hover: 217.2 32.6% 8%;
    --card-border: 217.2 32.6% 17.5%;
    --primary: 199 89% 48%;
    --primary-hover: 199 89% 40%;
    --primary-glow: 199 89% 48% / 0.4;
    --accent: 210 40% 98%;
    --accent-muted: 215 20% 65%;
    --foreground: 210 40% 98%;
    --foreground-muted: 215 20% 65%;
    --foreground-dim: 215 15% 45%;
    --selected-border: 199 89% 48%;
    --selected-bg: 199 89% 48% / 0.1;
    --border: 217.2 32.6% 17.5%;
    --ring: 199 89% 48%;
    --muted: 217.2 32.6% 17.5%;
    --step-active: 199 89% 48%;
    --step-complete: 142 71% 45%;
    --step-inactive: 215 15% 30%;
    --success: 142 71% 45%;
    --error: 0 84% 60%;
  }
}
```

### 1.2 Color Usage Map

| Element | Tailwind Class | Hex Reference |
|---------|----------------|---------------|
| Page background | bg-[hsl(var(--background))] | #0a0a0f |
| Card background | bg-[hsl(var(--card))] | #0a0a0f |
| Card hover | bg-[hsl(var(--card-hover))] | #111827 |
| Primary button | bg-[hsl(var(--primary))] | #06b6d4 |
| Primary hover | hover:bg-[hsl(var(--primary-hover))] | #0891b2 |
| Text primary | text-[hsl(var(--foreground))] | #f8fafc |
| Text muted | text-[hsl(var(--foreground-muted))] | #94a3b8 |
| Border | border-[hsl(var(--border))] | #1e293b |

---

## 2. Interactive Card Design System

### 2.1 SelectableCard Component States

```tsx
interface CardStates {
  default: {
    background: "bg-card";
    border: "border-border";
    icon: "text-muted-foreground";
    text: "text-foreground";
  };
  hover: {
    background: "hover:bg-card-hover";
    border: "hover:border-muted-foreground/50";
    icon: "group-hover:text-foreground";
    shadow: "hover:shadow-lg hover:shadow-cyan-500/5";
  };
  selected: {
    background: "bg-primary/10";
    border: "border-primary";
    icon: "text-primary";
    text: "text-foreground";
    ring: "ring-2 ring-primary/50";
  };
}
```

### 2.2 Card Visual Specifications

- Width: w-full (responsive grid)
- Min-height: min-h-[140px]
- Padding: p-5 (20px)
- Border-radius: rounded-xl
- Border-width: border (1px default, 2px selected)

### 2.3 Single vs Multiple Selection

**Single Selection (Radio behavior):**
Only ONE card can be selected at a time per group.
Clicking a new card deselects the previous one.

**Multiple Selection (Checkbox behavior):**
Multiple cards can be selected simultaneously.
Each card toggles independently.

### 2.4 Card Animation Specs

| Animation | Property | Duration | Easing |
|-----------|----------|----------|--------|
| Hover scale | scale-[1.02] | 200ms | ease-out |
| Selection ring | ring-2 | 150ms | ease-in-out |
| Check icon | scale-100 from scale-0 | 200ms | ease-out |
| Background fade | opacity | 200ms | ease-out |

---

## 3. Typography System

### 3.1 Font Configuration
Inter font from next/font/google with variable --font-inter.

### 3.2 Type Scale
h1: 3rem (48px) - font-bold, tracking-tight
h2: 2.25rem (36px) - font-semibold
h3: 1.5rem (24px) - font-semibold
h4: 1.25rem (20px) - font-medium
body: 1rem (16px) - font-normal
small: 0.875rem (14px) - text-muted-foreground

---

## 4. Stepper Design

### 4.1 Stepper States
```
Step 1  o --- o --- o --- o --- o
        Trigger Action  AI   Cplx  Output
       (done) (active)           (pending)
```

**State Colors:**
- Complete: hsl(var(--step-complete)) + checkmark icon
- Active: hsl(var(--step-active)) + filled circle + glow
- Inactive: hsl(var(--step-inactive)) + empty circle

### 4.2 Stepper Dimensions
- Connector line: h-[2px], bg-border
- Active connector: bg-primary, w-1/2
- Circle diameter: w-8 h-8

---

## 5. Spacing and Layout

### 5.1 Wizard Layout
- Maximum content width: max-w-5xl (1152px)
- Card grid: max-w-md (448px)
- Padding: px-4 sm:px-6 lg:px-8
- Vertical rhythm: gap-6 sections, gap-4 cards, gap-3 title/desc

### 5.2 Responsive Breakpoints
- sm: 640px (2 columns for cards)
- md: 768px (side padding adjustments)
- lg: 1024px (3 columns for cards)
- xl: 1280px (max content width)

---

## 6. Visual Effects

### 6.1 Neon Glow Effects
Primary glow for active states with box-shadow.
Subtle card glow on hover.

### 6.2 Gradients
Radial gradient for header/hero area.

### 6.3 Glass Effect
Semi-transparent background with backdrop-filter: blur(12px).

---

## 7. Animation Guidelines

### 7.1 Page Transitions (Step changes)
Fade + slide transition: transition-all duration-300 ease-out.

### 7.2 Micro-interactions
- Button press: active:scale-[0.98]
- Card press: active:scale-[0.98]
- Icons: duration-200 ease-out for checkmarks
