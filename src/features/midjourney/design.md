# Midjourney Prompt Builder - Design Specification

## 1. Dark Mode Color System

Base CSS variables matching root design system:
- Background: hsl(222.2 84% 4.9%)
- Card: hsl(222.2 84% 4.9%) / hover: hsl(217.2 32.6% 8%)
- Primary: hsl(199 89% 48%) - Neon Cyan
- Border: hsl(217.2 32.6% 17.5%)
- Text: hsl(210 40% 98%) / muted: hsl(215 20% 65%)

---

## 2. Card Design System

### 2.1 Card Dimensions
- Width: w-full (responsive: 1 col mobile, 2-3 cols desktop)
- Min-height: min-h-[140px]
- Padding: p-5
- Border-radius: rounded-xl

### 2.2 States
- Default: bg-card, border-border, text-muted icon
- Hover: bg-card-hover, hover:shadow-lg, icon brightens
- Selected: bg-primary/10, border-primary, ring-2 ring-primary/50
- Disabled: reduced opacity, no pointer events

### 2.3 Animations
- Hover scale: 1.02 / 200ms ease-out
- Selection ring: 150ms ease-in-out
- Check icon: scale from 0 to 100 / 200ms ease-out

---

## 3. Typography

Inter font with CSS variable:
- h1: 48px bold
- h2: 36px semibold
- h3: 24px semibold
- body: 16px normal
- small: 14px muted

---

## 4. Stepper

5-step stepper: Art Medium, Lighting, Camera/Lens, Mood/Vibe, Output
- Complete: green checkmark
- Active: cyan filled with glow
- Inactive: gray empty circle
- Line connector: 2px, active segment cyan

---

## 5. Layout

- Max content: 1152px
- Card grid max: 448px
- Padding: px-4 sm:px-6 lg:px-8
- Section gaps: gap-6, card gaps: gap-4
- Breakpoints: sm:640px (2 cols), lg:1024px (3 cols)

---

## 6. Visual Effects

- Neon glow for active states (shadow-glow-primary)
- Radial gradient header (ellipse 80% 50% at 50% -20%)
- Glass effect: backdrop-filter blur(12px)
- Step transitions: fade + slide, 300ms ease-out
