# UI-UX Component Prompt Builder - Design Specification

## 1. Dark Mode Color System

### 1.1 Tailwind CSS Variables

```css
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
    --foreground: 210 40% 98%;
    --foreground-muted: 215 20% 65%;
    --border: 217.2 32.6% 17.5%;
    --step-active: 199 89% 48%;
    --step-complete: 142 71% 45%;
    --step-inactive: 215 15% 30%;
    --success: 142 71% 45%;
    --error: 0 84% 60%;
  }
}
```

### 1.2 Color Usage
- Page: bg-[hsl(var(--background))]
- Cards: bg-[hsl(var(--card))] with hover bg-[hsl(var(--card-hover))]
- Primary actions: bg-[hsl(var(--primary))]
- Text primary: text-[hsl(var(--foreground))]
- Text muted: text-[hsl(var(--foreground-muted))]

---

## 2. Interactive Card Design System

### 2.1 Card States
- Default: bg-card, border-border
- Hover: bg-card-hover, shadow-lg
- Selected: bg-primary/10, border-primary, ring-2
- Disabled: reduced opacity, no interactions

### 2.2 Card Specs
- Width: w-full (responsive grid)
- Min-height: min-h-[140px]
- Padding: p-5
- Border-radius: rounded-xl

---

## 3. Typography System

### 3.1 Font
Inter font from next/font/google.

### 3.2 Type Scale
h1: 3rem (48px) bold
h2: 2.25rem (36px) semibold
h3: 1.5rem (24px) semibold
body: 1rem (16px) normal
small: 0.875rem (14px) muted

---

## 4. Stepper Design

### 4.1 Steps
```
Step 1  o --- o --- o --- o --- o
        Type  Vibe  Color Inter Output
```

- Complete: green checkmark
- Active: cyan filled circle with glow
- Inactive: gray empty circle

---

## 5. Layout

### 5.1 Responsive
- sm: 640px (2 cols)
- lg: 1024px (3 cols)
- xl: 1280px (max width)

### 5.2 Spacing
- Section gap: gap-6
- Card gap: gap-4
- Padding: px-4 sm:px-6 lg:px-8
