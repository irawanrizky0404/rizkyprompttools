# B2B Cold Email Sequence - Task Checklist

## Phase 1: Project Initialization

- [ ] **1.1** Initialize Next.js 14 with App Router and TypeScript
- [ ] **1.2** Install dependencies
- [ ] **1.3** Install Shadcn UI
- [ ] **1.4** Configure Tailwind, create directories, verify build

---

## Phase 2: Foundation and UI System Setup

- [ ] **2.1** Set up types (recipientPosition, coreValueProp, numberOfFollowups, persuasionStyle)
- [ ] **2.2** Create Shadcn utility, fonts, dark mode layout
- [ ] **2.3** Create SelectableCard, WizardShell, Stepper (5 steps), WizardFooter

---

## Phase 3: Step Implementation

- [ ] **3.1** Create Zustand store with cold email selections
- [ ] **3.2** Create Step 1: Recipient Position
  - Options: CEO-Founder, HR Manager, CMO Marketing, CTO IT
  - Single selection, icons: Crown, Users, Megaphone, Monitor
- [ ] **3.3** Create Step 2: Core Value Prop
  - Options: Cost Savings, Revenue Increase, Time Savings, Workflow Automation
  - Single selection, icons: DollarSign, TrendingUp, Clock, Settings
- [ ] **3.4** Create Step 3: Number of Follow-ups
  - Options: Just 1 Email, 3-Email Sequence, Aggressive 5-Email Sequence
  - Single selection, icons: Mail, MailPlus, Mails
- [ ] **3.5** Create Step 4: Persuasion Style
  - Options: Direct and To the Point, Storytelling, Data and Case Study Focused
  - Single selection, icons: Target, BookOpen, BarChart
- [ ] **3.6** Create Step 5: Output Step
- [ ] **3.7** Create Step Content Router

---

## Phase 4: State Management and Logic

- [ ] **4.1** Create Dictionary for email templates, subject lines, body copy
- [ ] **4.2** Create Markdown Generator (multi-email sequence builder)
- [ ] **4.3** Connect Generator to Store
- [ ] **4.4** Implement Reset

---

## Phase 5: Markdown Generator Logic

- [ ] **5.1** Build email-1: subject line + opening + value prop + CTA
- [ ] **5.2** Build email-2 (follow-up): new angle + social proof
- [ ] **5.3** Build email-3 (follow-up): case study or data point
- [ ] **5.4** Build email-4/5 (if selected): break-up or last-chance
- [ ] **5.5** Implement Copy to Clipboard

---

## Phase 6: Final Polish

- [ ] **6.1** Loading States, Transitions, Keyboard Navigation
- [ ] **6.2** Error Boundaries, Mobile Responsiveness
- [ ] **6.3** Lint, Typecheck, Test full flow
- [ ] **6.4** Build Production Bundle

---

## Phase 7: Documentation

- [ ] **7.1** README for B2B Cold Email Sequence
- [ ] **7.2** Final review of all docs
