# E-Commerce Listing Copywriter - Task Checklist

## Phase 1: Project Initialization

- [ ] **1.1** Initialize Next.js 14 with App Router and TypeScript
- [ ] **1.2** Install dependencies (zustand, lucide-react, clsx, tailwind-merge)
- [ ] **1.3** Install Shadcn UI (button, card, textarea, tooltip)
- [ ] **1.4** Configure Tailwind, create directories, verify build

---

## Phase 2: Foundation and UI System Setup

- [ ] **2.1** Set up types (sellingPlatform, productCategory, copywritingStyle, extraElements)
- [ ] **2.2** Create Shadcn utility, fonts, dark mode layout
- [ ] **2.3** Create SelectableCard, WizardShell, Stepper (5 steps), WizardFooter

---

## Phase 3: Step Implementation

- [ ] **3.1** Create Zustand store with e-commerce listing selections
- [ ] **3.2** Create Step 1: Selling Platform
  - Options: Shopify Website, Amazon, Instagram Shop, Local Marketplace
  - Single selection, icons: ShoppingBag, Box, Camera, Store
- [ ] **3.3** Create Step 2: Product Category
  - Options: Fashion, Electronics, Skincare and Beauty, Food and Beverage
  - Single selection, icons: Shirt, Cpu, Droplet, Utensils
- [ ] **3.4** Create Step 3: Copywriting Style
  - Options: Hard Sell Discount Focus, Soft Sell Benefit Focus, Luxury and Premium
  - Single selection, icons: Tag, Heart, Crown
- [ ] **3.5** Create Step 4: Extra Elements
  - Options: Feature Bullet Points, How-to Use Guide, FAQ, Warranty Info
  - Multiple selection mode
  - Icons: List, BookOpen, HelpCircle, Shield
- [ ] **3.6** Create Step 5: Output Step with generate and copy
- [ ] **3.7** Create Step Content Router

---

## Phase 4: State Management and Logic

- [ ] **4.1** Create Dictionary for platform formats, category keywords, style guides
- [ ] **4.2** Create Markdown Generator (product listing builder)
- [ ] **4.3** Connect Generator to Store
- [ ] **4.4** Implement Reset

---

## Phase 5: Markdown Generator Logic

- [ ] **5.1** Build product title and main description
- [ ] **5.2** Build feature bullets section
- [ ] **5.3** Build how-to use guide (if selected)
- [ ] **5.4** Build FAQ section (if selected)
- [ ] **5.5** Build warranty/shipping info (if selected)
- [ ] **5.6** Apply copywriting style tone throughout
- [ ] **5.7** Implement Copy to Clipboard

---

## Phase 6: Final Polish

- [ ] **6.1** Loading States, Transitions, Keyboard Navigation
- [ ] **6.2** Error Boundaries, Mobile Responsiveness
- [ ] **6.3** Lint, Typecheck, Test full flow
- [ ] **6.4** Build Production Bundle

---

## Phase 7: Documentation

- [ ] **7.1** README for E-Commerce Listing Copywriter
- [ ] **7.2** Final review of all docs
