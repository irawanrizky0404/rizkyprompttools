# Pitch Deck Architect - Design Specification

## 1. Dark Mode Color System

### 1.1 CSS Variables
Same base variables as root design system:
- Background: hsl(222.2 84% 4.9%)
- Card: hsl(222.2 84% 4.9%)
- Primary: hsl(199 89% 48%) - Neon Cyan/Blue
- Accent: hsl(210 40% 98%)
- Success: hsl(142 71% 45%)
- Error: hsl(0 84% 60%)

### 1.2 Color Usage
- Page bg: #0a0a0f
- Card bg: #0a0a0f with #111827 on hover
- Primary button: #06b6d4
- Text: #f8fafc primary, #94a3b8 muted

---

## 2. Card Design System

### 2.1 Card Dimensions
- Width: w-full (responsive grid)
- Min-height: min-h-[140px]
- Padding: p-5
- Border-radius: rounded-xl

### 2.2 States
- Default: bg-card, border-border
- Hover: bg-card-hover, shadow-lg hover:shadow-cyan-500/5
- Selected: bg-primary/10, border-primary, ring-2 ring-primary/50

### 2.3 Animations
- Hover scale: 1.02 at 200ms ease-out
- Selection ring: 150ms ease-in-out
- Check icon: scale animation 200ms ease-out

---

## 3. Typography

### 3.1 Font
Inter font family with CSS variable --font-inter.
```
h1: 48px bold
h2: 36px semibold
h3: 24px semibold
body: 16px normal
small: 14px muted
```

---

## 4. Stepper

- 5 steps: Stage, Model, Market, Focus, Output
- Complete: green checkmark
- Active: cyan filled + glow
- Inactive: gray empty
- Connector: 2px lines

---

## 5. Layout

### 5.1 Responsive Breakpoints
- sm (640px): 2 card columns
- lg (1024px): 3 card columns
- xl (1280px): max content width

### 5.2 Spacing
- Section gap: 1.5rem
- Card gap: 1rem
- Content padding: 1rem / 1.5rem / 2rem

---

## 6. Visual Effects

- Neon glow for active states
- Radial gradient header
- Glass effect with backdrop-filter blur
- Fade + slide for step transitions
