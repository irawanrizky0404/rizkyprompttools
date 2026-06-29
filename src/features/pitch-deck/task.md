# Pitch Deck Architect - Task Checklist

## Phase 1: Project Initialization

- [ ] **1.1** Initialize Next.js 14 project with App Router and TypeScript
- [ ] **1.2** Install dependencies (zustand, lucide-react, clsx, tailwind-merge)
- [ ] **1.3** Install Shadcn UI and add components
- [ ] **1.4** Configure Tailwind for design system colors
- [ ] **1.5** Create directory structure
- [ ] **1.6** Verify build

---

## Phase 2: Foundation and UI System Setup

- [ ] **2.1** Set up global types (WizardSelections with businessStage, businessModel, targetMarket, pitchFocus)
- [ ] **2.2** Create Shadcn utility, fonts, layout
- [ ] **2.3** Create SelectableCard, WizardShell, Stepper, WizardFooter

---

## Phase 3: Step Implementation

- [ ] **3.1** Create Zustand store with pitch deck selections
- [ ] **3.2** Create Step 1: Business Stage
  - Options: Ideation, Pre-Seed, Seed, Series A
  - Single selection, icons: Lightbulb, Sprout, Seed, TrendingUp
- [ ] **3.3** Create Step 2: Business Model
  - Options: B2B SaaS, Marketplace, Freemium B2C, Subscription
  - Single selection, icons: Cloud, Storefront, Gift, Repeat
- [ ] **3.4** Create Step 3: Target Market
  - Options: Gen-Z, Enterprise B2B, SMBs, Mass Market
  - Single selection, icons: Smartphone, Building2, Store, Globe
- [ ] **3.5** Create Step 4: Pitch Focus
  - Options: Seeking Investors, Business Pitch Competition, Internal Team Alignment
  - Single selection, icons: Handshake, Trophy, Users
- [ ] **3.6** Create Step 5: Output Step
- [ ] **3.7** Create Step Content Router

---

## Phase 4: State Management and Logic

- [ ] **4.1** Create Dictionary mappings for pitch deck content
- [ ] **4.2** Create Markdown Generator (deck outline builder)
- [ ] **4.3** Connect Generator to Store
- [ ] **4.4** Implement Reset

---

## Phase 5: Markdown Generator Logic

- [ ] **5.1** Build Executive Summary section
- [ ] **5.2** Build Problem/Solution section
- [ ] **5.3** Build Market Size section
- [ ] **5.4** Build Business Model section
- [ ] **5.5** Build Financials section
- [ ] **5.6** Build Team section
- [ ] **5.7** Implement Copy to Clipboard

---

## Phase 6: Final Polish

- [ ] **6.1** Loading States, Transitions, Keyboard Nav
- [ ] **6.2** Error Boundaries, Mobile Responsiveness
- [ ] **6.3** Lint, Typecheck, Test full flow
- [ ] **6.4** Build Production Bundle

---

## Phase 7: Documentation

- [ ] **7.1** README for Pitch Deck tool
- [ ] **7.2** Final review of all docs
