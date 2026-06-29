# Viral Video Script Generator - Task Checklist

## Phase 1: Project Initialization

- [ ] **1.1** Initialize Next.js 14 with App Router and TypeScript
- [ ] **1.2** Install dependencies
- [ ] **1.3** Install Shadcn UI
- [ ] **1.4** Configure Tailwind, create directories, verify build

---

## Phase 2: Foundation and UI System Setup

- [ ] **2.1** Set up types (mainPlatform, contentCategory, hookStrategy, cta)
- [ ] **2.2** Create Shadcn utility, fonts, dark mode layout
- [ ] **2.3** Create SelectableCard, WizardShell, Stepper (5 steps), WizardFooter

---

## Phase 3: Step Implementation

- [ ] **3.1** Create Zustand store with video script selections
- [ ] **3.2** Create Step 1: Main Platform
  - Options: TikTok, Instagram Reels, YouTube Long-form, YouTube Shorts
  - Single selection, icons: Music2, Instagram, Youtube, Film
- [ ] **3.3** Create Step 2: Content Category
  - Options: Educational, Entertainment, Product Review, Storytime, Tips and Tricks
  - Single selection, icons: BookOpen, Tv, ShoppingBag, MessageCircle, Lightbulb
- [ ] **3.4** Create Step 3: Hook Strategy
  - Options: Curiosity Gap, Surprising Fact, Controversial, Highly Relatable
  - Single selection, icons: Puzzle, AlertCircle, Flame, Heart
- [ ] **3.5** Create Step 4: CTA
  - Options: Like and Follow, Click Link in Bio, Watch Part 2
  - Single selection, icons: ThumbsUp, Link, Play
- [ ] **3.6** Create Step 5: Output Step
- [ ] **3.7** Create Step Content Router

---

## Phase 4: State Management and Logic

- [ ] **4.1** Create Dictionary for platform formats, hooks, CTAs
- [ ] **4.2** Create Markdown Generator (script with timestamps)
- [ ] **4.3** Connect Generator to Store
- [ ] **4.4** Implement Reset

---

## Phase 5: Markdown Generator Logic

- [ ] **5.1** Build opening hook section
- [ ] **5.2** Build body content based on category
- [ ] **5.3** Add platform-specific timing and formatting
- [ ] **5.4** Add CTA section
- [ ] **5.5** Implement Copy to Clipboard

---

## Phase 6: Final Polish

- [ ] **6.1** Loading States, Transitions, Keyboard Navigation
- [ ] **6.2** Error Boundaries, Mobile Responsiveness
- [ ] **6.3** Lint, Typecheck, Test full flow
- [ ] **6.4** Build Production Bundle

---

## Phase 7: Documentation

- [ ] **7.1** README for Viral Video Script Generator
- [ ] **7.2** Final review of all docs
