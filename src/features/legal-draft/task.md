# Legal Document Draft Builder - Task Checklist

## Phase 1: Project Initialization

- [ ] **1.1** Initialize Next.js 14 with App Router and TypeScript
- [ ] **1.2** Install dependencies (zustand, lucide-react, clsx, tailwind-merge)
- [ ] **1.3** Install Shadcn UI (button, card, textarea, tooltip)
- [ ] **1.4** Configure Tailwind, create directories, verify build

---

## Phase 2: Foundation and UI System Setup

- [ ] **2.1** Set up types (documentType, involvedParties, specialClauses, tone)
- [ ] **2.2** Create Shadcn utility, fonts, dark mode layout
- [ ] **2.3** Create SelectableCard, WizardShell, Stepper (5 steps), WizardFooter

---

## Phase 3: Step Implementation

- [ ] **3.1** Create Zustand store with legal document selections
- [ ] **3.2** Create Step 1: Document Type
  - Options: NDA Agreement, Freelance Contract, Terms of Service ToS, Privacy Policy
  - Single selection, icons: FileLock, FileSignature, FileText, Shield
- [ ] **3.3** Create Step 2: Involved Parties
  - Options: Company B2B, Individual to Company B2C, Independent Contractor
  - Single selection, icons: Building2, User, Briefcase
- [ ] **3.4** Create Step 3: Special Clauses
  - Options: IP Rights, Late Payment Penalties, Limited Revisions
  - Multiple selection mode
  - Icons: Lightbulb, AlertTriangle, RefreshCw
- [ ] **3.5** Create Step 4: Tone
  - Options: Strict and Binding, User-friendly and Approachable
  - Single selection, icons: Gavel, Heart
- [ ] **3.6** Create Step 5: Output Step with generate and copy
- [ ] **3.7** Create Step Content Router

---

## Phase 4: State Management and Logic

- [ ] **4.1** Create Dictionary for legal templates, clauses, tone language
- [ ] **4.2** Create Markdown Generator (legal document builder)
- [ ] **4.3** Connect Generator to Store
- [ ] **4.4** Implement Reset

---

## Phase 5: Markdown Generator Logic

- [ ] **5.1** Build document header and party identification
- [ ] **5.2** Build recitals/background section
- [ ] **5.3** Build terms and conditions based on document type
- [ ] **5.4** Add selected special clauses
- [ ] **5.5** Apply tone to language throughout
- [ ] **5.6** Build signature blocks
- [ ] **5.7** Implement Copy to Clipboard

---

## Phase 6: Final Polish

- [ ] **6.1** Loading States, Transitions, Keyboard Navigation
- [ ] **6.2** Error Boundaries, Mobile Responsiveness
- [ ] **6.3** Lint, Typecheck, Test full flow
- [ ] **6.4** Build Production Bundle

---

## Phase 7: Documentation

- [ ] **7.1** README for Legal Document Draft Builder
- [ ] **7.2** Final review of all docs
