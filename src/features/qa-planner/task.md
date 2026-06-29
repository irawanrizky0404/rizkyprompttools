# QA Edge-Case Planner - Task Checklist

## Phase 1: Project Initialization

- [ ] **1.1** Initialize Next.js 14 with App Router and TypeScript
- [ ] **1.2** Install dependencies (zustand, lucide-react, clsx, tailwind-merge)
- [ ] **1.3** Install Shadcn UI (button, card, textarea, tooltip)
- [ ] **1.4** Configure Tailwind, create directories, verify build

---

## Phase 2: Foundation and UI System Setup

- [ ] **2.1** Set up types (featureToTest, testCoverage, outputFormat, platformTarget)
- [ ] **2.2** Create Shadcn utility, fonts, dark mode layout
- [ ] **2.3** Create SelectableCard, WizardShell, Stepper (5 steps), WizardFooter

---

## Phase 3: Step Implementation

- [ ] **3.1** Create Zustand store with QA selections
- [ ] **3.2** Create Step 1: Feature to Test
  - Options: Login-Register Form, Payment Checkout, File Upload, Search Feature
  - Single selection, icons: LogIn, CreditCard, Upload, Search
- [ ] **3.3** Create Step 2: Test Coverage
  - Options: Happy Path Normal, Edge Cases Extreme, Accessibility, Security SQLi-XSS
  - Multiple selection mode
  - Icons: CheckCircle2, AlertTriangle, Eye, Shield
- [ ] **3.4** Create Step 3: Output Format
  - Options: Gherkin Given-When-Then, Manual Checklist Table, Jest-Cypress Code
  - Single selection, icons: FileText, List, Code
- [ ] **3.5** Create Step 4: Platform Target
  - Options: Desktop Web App, Mobile Web, Native App iOS-Android, API
  - Single selection, icons: Monitor, Smartphone, Tablet, Server
- [ ] **3.6** Create Step 5: Output Step with generate and copy
- [ ] **3.7** Create Step Content Router

---

## Phase 4: State Management and Logic

- [ ] **4.1** Create Dictionary for test scenarios, edge cases, platforms
- [ ] **4.2** Create Markdown Generator (test plan builder)
- [ ] **4.3** Connect Generator to Store
- [ ] **4.4** Implement Reset

---

## Phase 5: Markdown Generator Logic

- [ ] **5.1** Build feature description section
- [ ] **5.2** Build test scenarios based on coverage type
- [ ] **5.3** Format output per selected format (Gherkin/Checklist/Code)
- [ ] **5.4** Add platform-specific test configurations
- [ ] **5.5** Implement Copy to Clipboard

---

## Phase 6: Final Polish

- [ ] **6.1** Loading States, Transitions, Keyboard Navigation
- [ ] **6.2** Error Boundaries, Mobile Responsiveness
- [ ] **6.3** Lint, Typecheck, Test full flow
- [ ] **6.4** Build Production Bundle

---

## Phase 7: Documentation

- [ ] **7.1** README for QA Edge-Case Planner
- [ ] **7.2** Final review of all docs
