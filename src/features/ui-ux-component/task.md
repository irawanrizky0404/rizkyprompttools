# UI-UX Component Prompt Builder - Task Checklist

## Phase 1: Project Initialization

- [ ] **1.1** Initialize Next.js 14 project with App Router and TypeScript
- [ ] **1.2** Install dependencies (zustand, lucide-react, clsx, tailwind-merge)
- [ ] **1.3** Install Shadcn UI and add components (button, card, textarea, tooltip)
- [ ] **1.4** Configure Tailwind for design system colors
- [ ] **1.5** Create directory structure: steps/, store/, utils/, types/
- [ ] **1.6** Verify empty shell builds and runs

---

## Phase 2: Foundation and UI System Setup

- [ ] **2.1** Set up global types (WizardSelections with componentType, vibeStyle, colorScheme, interactivity)
- [ ] **2.2** Create Shadcn utility (cn() function)
- [ ] **2.3** Set up fonts and layout with dark mode
- [ ] **2.4** Create SelectableCard component (single/multiple selection, icons, animations)
- [ ] **2.5** Create WizardShell layout with stepper and footer
- [ ] **2.6** Create Stepper component (5 step indicators)
- [ ] **2.7** Create WizardFooter (Back/Next navigation)

---

## Phase 3: Step Implementation

- [ ] **3.1** Create Zustand store with UI-UX component selections
- [ ] **3.2** Create Step 1: Component Type
  - Options: Landing Page Hero, Pricing Table, Admin Dashboard, User Profile, Auth Form
  - Single selection mode
  - Icons: Layout, DollarSign, LayoutDashboard, User, Lock
- [ ] **3.3** Create Step 2: Vibe and Style
  - Options: Minimalist, Neo-Brutalism, Glassmorphism, Web3 Futuristic
  - Single selection mode
  - Icons: Feather, Bold, GlassWater, Orbit
- [ ] **3.4** Create Step 3: Color Scheme
  - Options: Monochrome, Pastel, Vibrant, High-Contrast Dark
  - Single selection mode
  - Icons: Palette, Droplet, Sparkles, Moon
- [ ] **3.5** Create Step 4: Interactivity
  - Options: Static, Hover Animations, Draggable, Modal Pop-up
  - Single selection mode
  - Icons: Square, MousePointerClick, Move, PanelTop
- [ ] **3.6** Create Step 5: Output Step with Generate button and copy functionality
- [ ] **3.7** Create Step Content Router

---

## Phase 4: State Management and Logic

- [ ] **4.1** Create Dictionary mappings for component types, vibes, colors, interactivity
- [ ] **4.2** Create Markdown Generator (component prompt builder)
- [ ] **4.3** Connect Generator to Store
- [ ] **4.4** Implement Reset functionality

---

## Phase 5: Markdown Generator Logic

- [ ] **5.1** Build Component Type section
- [ ] **5.2** Build Vibe and Style section with CSS guidance
- [ ] **5.3** Build Color Scheme section with exact color values
- [ ] **5.4** Build Interactivity section with animation specs
- [ ] **5.5** Implement Copy to Clipboard

---

## Phase 6: Final Polish

- [ ] **6.1** Add Loading States
- [ ] **6.2** Add Transitions and Animations
- [ ] **6.3** Add Keyboard Navigation
- [ ] **6.4** Add Error Boundaries
- [ ] **6.5** Verify Mobile Responsiveness
- [ ] **6.6** Lint and Typecheck
- [ ] **6.7** Test Complete User Flow (5 steps + generate + copy)
- [ ] **6.8** Build Production Bundle

---

## Phase 7: Documentation and Cleanup

- [ ] **7.1** Update README for UI-UX Component tool
- [ ] **7.2** Add comments to complex functions
- [ ] **7.3** Final review of all docs
