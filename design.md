# Blueprint Prompt Generator - Design Specification

## 1. Dark Mode Color System

### 1.1 Tailwind CSS Variables (globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Background Colors */
    --background: 222.2 84% 4.9%;
    --background-secondary: 217.2 32.6% 8%;
    --background-tertiary: 217.2 32.6% 12%;

    /* Card/Panel Colors */
    --card: 222.2 84% 4.9%;
    --card-hover: 217.2 32.6% 8%;
    --card-border: 217.2 32.6% 17.5%;

    /* Primary - Neon Cyan/Blue */
    --primary: 199 89% 48%;
    --primary-hover: 199 89% 40%;
    --primary-glow: 199 89% 48% / 0.4;

    /* Accent */
    --accent: 210 40% 98%;
    --accent-muted: 215 20% 65%;

    /* Text Colors */
    --foreground: 210 40% 98%;
    --foreground-muted: 215 20% 65%;
    --foreground-dim: 215 15% 45%;

    /* Selection States */
    --selected-border: 199 89% 48%;
    --selected-bg: 199 89% 48% / 0.1;

    /* UI Elements */
    --border: 217.2 32.6% 17.5%;
    --ring: 199 89% 48%;
    --muted: 217.2 32.6% 17.5%;

    /* Stepper */
    --step-active: 199 89% 48%;
    --step-complete: 142 71% 45%;
    --step-inactive: 215 15% 30%;

    /* Success/Error */
    --success: 142 71% 45%;
    --error: 0 84% 60%;
  }
}
```

### 1.2 Color Usage Map

| Element | Tailwind Class | Hex Reference |
|---------|----------------|---------------|
| Page background | `bg-[hsl(var(--background))]` | `#0a0a0f` |
| Card background | `bg-[hsl(var(--card))]` | `#0a0a0f` |
| Card hover | `bg-[hsl(var(--card-hover))]` | `#111827` |
| Primary button | `bg-[hsl(var(--primary))]` | `#06b6d4` |
| Primary hover | `hover:bg-[hsl(var(--primary-hover))]` | `#0891b2` |
| Text primary | `text-[hsl(var(--foreground))]` | `#f8fafc` |
| Text muted | `text-[hsl(var(--foreground-muted))]` | `#94a3b8` |
| Border | `border-[hsl(var(--border))]` | `#1e293b` |

---

## 2. Interactive Card Design System

### 2.1 SelectableCard Component States

```tsx
// States:
// 1. Default (unselected)
// 2. Hover (mouse over)
// 3. Selected (single/multiple mode)
// 4. Selected + Hover
// 5. Disabled (optional)

interface CardStates {
  default: {
    background: 'bg-card';
    border: 'border-border';
    icon: 'text-muted-foreground';
    text: 'text-foreground';
  };
  hover: {
    background: 'hover:bg-card-hover';
    border: 'hover:border-muted-foreground/50';
    icon: 'group-hover:text-foreground';
    shadow: 'hover:shadow-lg hover:shadow-cyan-500/5';
  };
  selected: {
    background: 'bg-primary/10';
    border: 'border-primary';
    icon: 'text-primary';
    text: 'text-foreground';
    ring: 'ring-2 ring-primary/50';
  };
}
```

### 2.2 Card Visual Specifications

```
┌──────────────────────────────────────────────────┐
│  ┌─────┐                                         │
│  │ICON │  Title (text-lg, font-semibold)          │
│  └─────┘  Description (text-sm, text-muted)      │
│                                                  │
│  ┌────────────────────────────────────────────┐ │
│  │ Additional configuration... (optional)      │ │  ← Optional input
│  └────────────────────────────────────────────┘ │
│                                        ✓        │  ← Check indicator
└──────────────────────────────────────────────────┘
```

**Card Dimensions:**
- Width: `w-full` (responsive grid: 1 col mobile, 2-3 cols desktop)
- Min-height: `min-h-[140px]`
- Padding: `p-5` (20px)
- Border-radius: `rounded-xl`
- Border-width: `border` (1px default, 2px selected)

### 2.3 Single vs Multiple Selection

**Single Selection (Radio behavior):**
```tsx
// Only ONE card can be selected at a time per group
// Clicking a new card deselects the previous one
// Visual: solid border, checkmark icon appears
```

**Multiple Selection (Checkbox behavior):**
```tsx
// Multiple cards can be selected simultaneously
// Each card toggles independently
// Visual: border highlights, individual checkmarks
```

### 2.4 Card Animation Specs

| Animation | Property | Duration | Easing |
|-----------|----------|----------|--------|
| Hover scale | `scale-[1.02]` | 200ms | `ease-out` |
| Selection ring | `ring-2` | 150ms | `ease-in-out` |
| Check icon | `scale-100` from `scale-0` | 200ms | `ease-out` |
| Background fade | opacity | 200ms | `ease-out` |

---

## 3. Typography System

### 3.1 Font Configuration
```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

// Usage: className="font-[var(--font-inter)]"
```

### 3.2 Type Scale
```css
/* Heading sizes */
h1: 3rem (48px)    - font-bold, tracking-tight
h2: 2.25rem (36px) - font-semibold
h3: 1.5rem (24px)  - font-semibold
h4: 1.25rem (20px) - font-medium

/* Body sizes */
body: 1rem (16px)  - font-normal
small: 0.875rem (14px) - text-muted-foreground
caption: 0.75rem (12px) - text-muted-foreground
```

---

## 4. Stepper Design

### 4.1 Stepper States

```
Step 1 ● ─ ─ ─ ● ─ ─ ─ ● ─ ─ ─ ● ─ ─ ─ ● ─ ─ ─ ● ─ ─ ─ ● ─ ─ ─ ●
       ✓   Type   Industry   Auth   Features  Database Design  Deploy  AI
     (done)  (active)                                      (pending)
```

**State Colors:**
- Complete: `text-[hsl(var(--step-complete))]` + checkmark icon
- Active: `text-[hsl(var(--step-active))]` + filled circle + glow
- Inactive: `text-[hsl(var(--step-inactive))]` + empty circle

### 4.2 Stepper Dimensions
- Connector line: `h-[2px]`, `bg-border`
- Active connector: `bg-primary`, `w-1/2`
- Circle diameter: `w-8 h-8`
- Gap between steps: `gap-0` (connector handles spacing)

---

## 5. Spacing & Layout

### 5.1 Wizard Layout
```tsx
// Maximum content width
max-w-5xl: 1152px  // For step content
max-w-md: 448px    // For card grids

// Content padding
px-4 sm:px-6 lg:px-8

// Vertical rhythm
gap-6: Between sections
gap-4: Between cards in grid
gap-3: Between card title and description
```

### 5.2 Responsive Breakpoints
```tsx
// Mobile-first approach
sm: 640px   // 2 columns for cards
md: 768px   // Side padding adjustments
lg: 1024px  // 3 columns for cards
xl: 1280px  // Max content width
```

---

## 6. Visual Effects

### 6.1 Neon Glow Effects
```css
/* Primary glow for active states */
.shadow-glow-primary {
  box-shadow: 0 0 20px hsl(var(--primary-glow)),
              0 0 40px hsl(var(--primary-glow));
}

/* Subtle card glow on hover */
.hover\:shadow-glow-sm:hover {
  box-shadow: 0 0 10px hsl(var(--primary-glow));
}
```

### 6.2 Gradients
```css
/* Header/hero gradient */
.bg-gradient-radial {
  background: radial-gradient(
    ellipse 80% 50% at 50% -20%,
    hsl(var(--primary)) / 0.15,
    transparent
  );
}
```

### 6.3 Glass Effect
```css
.bg-glass {
  background: hsl(var(--card) / 0.8);
  backdrop-filter: blur(12px);
}
```

---

## 7. Component Shadow System

```css
/* Elevation levels */
shadow-sm:   0 1px 2px rgba(0, 0, 0, 0.3)
shadow-md:   0 4px 6px rgba(0, 0, 0, 0.4)
shadow-lg:   0 10px 15px rgba(0, 0, 0, 0.5)
shadow-card: 0 0 0 1px hsl(var(--card-border)), 0 4px 6px rgba(0, 0, 0, 0.3)
shadow-glow: 0 0 20px hsl(var(--primary-glow))
```

---

## 8. Animation Guidelines

### 8.1 Page Transitions (Step changes)
```tsx
// Fade + slide transition
transition: 'transition-all duration-300 ease-out'
enter: 'opacity-0 translate-y-4'
enterTo: 'opacity-100 translate-y-0'
exit: 'opacity-100 translate-y-0'
exitTo: 'opacity-0 -translate-y-4'
```

### 8.2 Micro-interactions
```tsx
// Button press
active:scale-[0.98]

// Card press
active:scale-[0.98]

// Icon animations
duration-200 ease-out for checkmarks
duration-300 ease-in-out for rotations
```
