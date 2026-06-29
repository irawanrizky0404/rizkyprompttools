# AI Automation Workflow Generator - Task Checklist

## Phase 1: Project Initialization

- [ ] **1.1** Initialize Next.js 14 project with App Router and TypeScript
  \\\ash
  npx create-next-app@latest promptgen --typescript --tailwind --eslint --app --src-dir=false --import-alias=\"@/*\" --use-npm
  \\\

- [ ] **1.2** Install dependencies
  \\\ash
  npm install zustand lucide-react clsx tailwind-merge
  \\\

- [ ] **1.3** Install Shadcn UI
  \\\ash
  npx shadcn-ui@latest init
  # Choose: Slate, CSS variables, Dark mode
  \\\

- [ ] **1.4** Add Shadcn components
  \\\ash
  npx shadcn-ui@latest add button card textarea tooltip
  \\\

- [ ] **1.5** Configure Tailwind for design system colors (design.md)
  - Update \globals.css\ with CSS variables for dark mode
  - Configure \	ailwind.config.ts\ with custom colors

- [ ] **1.6** Set up project folder structure (per architecture.md)
  - Create \src/features/ai-automation/steps/\ directory
  - Create \src/features/ai-automation/store/\ directory
  - Create \src/features/ai-automation/utils/\ directory
  - Create \src/features/ai-automation/types/\ directory

- [ ] **1.7** Verify empty shell builds and runs
  \\\ash
  npm run dev
  # Confirm http://localhost:3000 loads without errors
  \\\

---

## Phase 2: Foundation & UI System Setup

- [ ] **2.1** Set up global types (\	ypes/wizard.ts\)
  - Define \WizardSelections\ interface with triggerApp, actionApp, aiProcessing, complexityLevel
  - Define step types (TriggerAppStep, ActionAppStep, etc.)
  - Define \SelectableCardProps\ interface
  - Define all selection option types

- [ ] **2.2** Create Shadcn utility (\lib/utils.ts\)
  - Implement \cn()\ function for class merging
  - Ensure proper tailwind-merge setup

- [ ] **2.3** Set up fonts and layout (\pp/layout.tsx\)
  - Configure Inter font
  - Apply dark mode class to html
  - Import global CSS

- [ ] **2.4** Create \SelectableCard\ component (\components/selectable-card.tsx\)
  - Implement single selection mode (radio behavior)
  - Implement multiple selection mode (checkbox behavior)
  - Add icon, title, description props
  - Add optional text input slot
  - Add hover/selected visual states with neon glow
  - Add check indicator animation

- [ ] **2.5** Create \WizardShell\ layout component (\components/wizard/wizard-shell.tsx\)
  - Header with stepper integration
  - Content area for dynamic step rendering
  - Footer with navigation buttons
  - Apply glass morphism styling

- [ ] **2.6** Create \Stepper\ component (\components/wizard/stepper.tsx\)
  - Display 5 step indicators with labels
  - Show connecting lines
  - Highlight active step with glow effect
  - Show completion checkmarks for past steps

- [ ] **2.7** Create \WizardFooter\ component (\components/wizard/wizard-footer.tsx\)
  - Back button (disabled on step 1)
  - Next button (changes to \"Generate\" on step 5)
  - Apply proper spacing and responsive layout

---

## Phase 3: Step Implementation

- [ ] **3.1** Create Zustand store (\store/useWizardStore.ts\)
  - Define complete state interface for AI Automation selections
  - Implement navigation actions (nextStep, prevStep, setCurrentStep)
  - Implement selection update actions for triggerApp, actionApp, aiProcessing, complexityLevel
  - Implement prompt generation action
  - Implement reset action
  - Add devtools middleware for debugging

- [ ] **3.2** Create Step 1: Trigger App selection (\steps/trigger-app-step.tsx\)
  - Options: Webhook, Gmail, Typeform, Shopify, Schedule
  - Single selection mode
  - Include relevant icons (Zap, Mail, FormInput, ShoppingCart, Clock)
  - Connect to \	riggerApp\ field in store

- [ ] **3.3** Create Step 2: Action App selection (\steps/action-app-step.tsx\)
  - Options: Google Sheets, Notion, Slack, CRM HubSpot, Database
  - Single selection mode
  - Include relevant icons (Table, FileText, MessageSquare, Database, HardDrive)
  - Connect to \ctionApp\ field in store

- [ ] **3.4** Create Step 3: AI Processing selection (\steps/ai-processing-step.tsx\)
  - Options: Summarize Text, Extract JSON, Language Translation, None
  - Single selection mode
  - Include relevant icons (FileText, Code, Languages, X)
  - Connect to \iProcessing\ field in store

- [ ] **3.5** Create Step 4: Complexity Level selection (\steps/complexity-level-step.tsx\)
  - Options: Simple Linear, Advanced Routers
  - Single selection mode
  - Include relevant icons (GitBranch, Share2)
  - Connect to \complexityLevel\ field in store

- [ ] **3.6** Create Step 5: Output Step (\steps/output-step.tsx\)
  - Display selected configuration summary
  - Include \"Generate Prompt\" button
  - Display generated markdown textarea
  - Add \"Copy to Clipboard\" functionality

- [ ] **3.7** Create Step Content Router (\components/wizard/step-content.tsx\)
  - Dynamic rendering based on \currentStep\
  - Import all step components
  - Handle step-to-component mapping

---

## Phase 4: State Management & Logic

- [ ] **4.1** Create Dictionary mappings (\utils/dictionary.ts\)
  - Map \	riggerApp\ values to detailed descriptions
  - Map \ctionApp\ values to integration instructions
  - Map \iProcessing\ to AI model instructions
  - Map \complexityLevel\ to workflow complexity details

- [ ] **4.2** Create Markdown Generator (\utils/markdown-generator.ts\)
  - Implement template literal function
  - Build sections: Trigger Configuration, Action Steps, AI Processing, Complexity Setup
  - Apply dictionary lookups for all selections
  - Handle optional fields gracefully
  - Format output as valid Markdown

- [ ] **4.3** Connect Generator to Store
  - Import markdown-generator in useWizardStore
  - Wire \generatePrompt()\ to template function
  - Store result in \generatedPrompt\ state

- [ ] **4.4** Implement Reset functionality
  - Reset all selections to initial state
  - Reset currentStep to 1
  - Clear generated prompt

---

## Phase 5: Markdown Generator Logic

- [ ] **5.1** Build Trigger Configuration Section
  \\\	ypescript
  // Output structure:
  # AI Automation Workflow

  ## Trigger Configuration
  Trigger App: [selected trigger]
  Setup steps for [trigger] integration...
  \\\

- [ ] **5.2** Build Action App Section
  \\\	ypescript
  // Include:
  - Action app details from dictionary
  - Integration instructions
  - Data mapping considerations
  \\\

- [ ] **5.3** Build AI Processing Section
  \\\	ypescript
  // Include selected AI processing:
  - AI model configuration
  - Processing instructions
  - Output format specifications
  \\\

- [ ] **5.4** Build Complexity Level Section
  \\\	ypescript
  // Include:
  - Workflow structure
  - Conditional routing logic
  - Error handling approach
  \\\

- [ ] **5.5** Implement Copy to Clipboard
  - Use \
avigator.clipboard.writeText()\
  - Add \"Copied!\" feedback toast/tooltip
  - Confirm functionality works on all browsers

---

## Phase 6: Final Polish

- [ ] **6.1** Add Loading States
  - Skeleton loaders for cards during hydration
  - Button loading states for \"Generate\" action

- [ ] **6.2** Add Transitions/Animations
  - Step transition animations (fade + slide)
  - Card selection animations
  - Stepper progress animations

- [ ] **6.3** Add Keyboard Navigation
  - Tab through cards
  - Enter/Space to select
  - Arrow keys for navigation within step

- [ ] **6.4** Add Error Boundaries
  - Wrap wizard in error boundary
  - Graceful error display with retry

- [ ] **6.5** Verify Mobile Responsiveness
  - Test card grid layouts
  - Test stepper on small screens
  - Verify touch interactions

- [ ] **6.6** Lint and Typecheck
  \\\ash
  npm run lint
  npm run typecheck
  # Fix any errors
  \\\

- [ ] **6.7** Test Complete User Flow
  - Complete all 5 steps
  - Generate prompt
  - Copy to clipboard
  - Reset and start over
  - Verify state persists correctly

- [ ] **6.8** Build Production Bundle
  \\\ash
  npm run build
  # Verify no build errors
  \\\

---

## Phase 7: Documentation & Cleanup

- [ ] **7.1** Update README with usage instructions for AI Automation tool
- [ ] **7.2** Add comments to complex functions
- [ ] **7.3** Verify all imports are correct and tree-shakeable
- [ ] **7.4** Final review of \.cursorrules\, \rchitecture.md\, \design.md\

---

## Total Tasks: 48 checklist items
