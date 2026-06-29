# QA Edge-Case Planner - Design Specification

## 1. Dark Mode Color System

Base CSS variables matching root design system:
- Background: hsl(222.2 84% 4.9%)
- Card: hsl(222.2 84% 4.9%) / hover: hsl(217.2 32.6% 8%)
- Primary: hsl(199 89% 48%) - Neon Cyan
- Border: hsl(217.2 32.6% 17.5%)
- Text: hsl(210 40% 98%) / muted: hsl(215 20% 65%)

---

## 2. Card Design System

### 2.1 Card Specs
- Width: w-full (responsive)
- Min-height: min-h-[140px]
- Padding: p-5
- Border-radius: rounded-xl

### 2.2 States
- Default: bg-card, border-border
- Hover: bg-card-hover, hover:shadow-lg
- Selected: bg-primary/10, border-primary, ring-2

### 2.3 Animations
- Hover scale: 1.02 / 200ms ease-out
- Selection: 150ms ease-in-out
- Check icon: scale 200ms

---

## 3. Typography

Inter font:
- h1: 48px bold, h2: 36px semibold, h3: 24px semibold
- body: 16px normal, small: 14px muted

---

## 4. Stepper

5 steps: Feature, Coverage, Format, Platform, Output
- Complete: green checkmark
- Active: cyan glow
- Inactive: gray empty

---

## 5. Layout

- Max content: 1152px
- Card grid: 448px max
- Padding: px-4 sm:px-6 lg:px-8
- Gaps: section gap-6, cards gap-4
- Breakpoints: sm:640px (2 cols), lg:1024px (3 cols)

---

## 6. Visual Effects

- Neon glow for active states
- Radial gradient header
- Glass effect: backdrop-filter blur(12px)
- Fade + slide step transitions
