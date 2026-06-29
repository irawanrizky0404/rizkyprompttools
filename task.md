# Blueprint Prompt Generator - Task Checklist

## Phase 1: Project Initialization

- [ ] **1.1** Initialize Next.js 14 project with App Router and TypeScript
  ```bash
  npx create-next-app@latest promptgen --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
  ```

- [ ] **1.2** Install dependencies
  ```bash
  npm install zustand lucide-react clsx tailwind-merge
  ```

- [ ] **1.3** Install Shadcn UI
  ```bash
  npx shadcn-ui@latest init
  # Choose: Slate, CSS variables, Dark mode
  ```

- [ ] **1.4** Add Shadcn components
  ```bash
  npx shadcn-ui@latest add button card textarea tooltip
  ```

- [ ] **1.5** Configure Tailwind for design system colors (design.md)
  - Update `globals.css` with CSS variables for dark mode
  - Configure `tailwind.config.ts` with custom colors

- [ ] **1.6** Set up project folder structure (per architecture.md)
  - Create `components/wizard/steps/` directory
  - Create `store/` directory
  - Create `utils/` directory
  - Create `types/` directory

- [ ] **1.7** Verify empty shell builds and runs
  ```bash
  npm run dev
  # Confirm http://localhost:3000 loads without errors
  ```

---

## Phase 2: Foundation & UI System Setup

- [ ] **2.1** Set up global types (`types/wizard.ts`)
  - Define `WizardSelections` interface
  - Define step types (TypeStep, IndustryStep, etc.)
  - Define `SelectableCardProps` interface
  - Define all selection option types

- [ ] **2.2** Create Shadcn utility (`lib/utils.ts`)
  - Implement `cn()` function for class merging
  - Ensure proper tailwind-merge setup

- [ ] **2.3** Set up fonts and layout (`app/layout.tsx`)
  - Configure Inter font
  - Apply dark mode class to html
  - Import global CSS

- [ ] **2.4** Create `SelectableCard` component (`components/selectable-card.tsx`)
  - Implement single selection mode (radio behavior)
  - Implement multiple selection mode (checkbox behavior)
  - Add icon, title, description props
  - Add optional text input slot
  - Add hover/selected visual states with neon glow
  - Add check indicator animation

- [ ] **2.5** Create `WizardShell` layout component (`components/wizard/wizard-shell.tsx`)
  - Header with stepper integration
  - Content area for dynamic step rendering
  - Footer with navigation buttons
  - Apply glass morphism styling

- [ ] **2.6** Create `Stepper` component (`components/wizard/stepper.tsx`)
  - Display 8 step indicators with labels
  - Show connecting lines
  - Highlight active step with glow effect
  - Show completion checkmarks for past steps

- [ ] **2.7** Create `WizardFooter` component (`components/wizard/wizard-footer.tsx`)
  - Back button (disabled on step 1)
  - Next button (changes to "Generate" on step 8)
  - Apply proper spacing and responsive layout

---

## Phase 3: UI Stepper & Cards Implementation

- [ ] **3.1** Create Zustand store (`store/useWizardStore.ts`)
  - Define complete state interface
  - Implement navigation actions (nextStep, prevStep, setCurrentStep)
  - Implement selection update actions
  - Implement prompt generation action
  - Implement reset action
  - Add devtools middleware for debugging

- [ ] **3.2** Create Step 1: Type selection (`components/wizard/steps/type-step.tsx`)
  - Options: Web App, API, Mobile App, Browser Extension, Desktop App
  - Single selection mode
  - Include relevant icons (Globe, Server, Smartphone, etc.)
  - Connect to `type` field in store

- [ ] **3.3** Create Step 2: Industry selection (`components/wizard/steps/industry-step.tsx`)
  - Options: Fintech, Healthcare, E-commerce, SaaS, Social, Education, Gaming
  - Single selection mode
  - Connect to `industry` field in store

- [ ] **3.4** Create Step 3: Authentication (`components/wizard/steps/auth-step.tsx`)
  - Options: JWT, OAuth 2.0, SSO, API Keys, None
  - Single selection for method
  - Multiple selection for providers (Google, GitHub, etc.)
  - Connect to `auth` field in store

- [ ] **3.5** Create Step 4: Features selection (`components/wizard/steps/features-step.tsx`)
  - Options: Dashboard, User Management, Analytics, Notifications, Search, File Upload, Export/Import, API Integration, Webhooks, Real-time
  - Multiple selection mode (checkbox behavior)
  - Connect to `features` array in store

- [ ] **3.6** Create Step 5: Database selection (`components/wizard/steps/database-step.tsx`)
  - Primary DB options: PostgreSQL, MySQL, MongoDB, Redis, SQLite
  - ORM options: Prisma, TypeORM, Drizzle, Mongoose
  - Single selection for each
  - Connect to `database` object in store

- [ ] **3.7** Create Step 6: Design selection (`components/wizard/steps/design-step.tsx`)
  - Style options: Minimal, Rounded, Bold, Elegant
  - Color scheme options: Dark, Light, Auto, Custom
  - Typography options: Sans-serif, Serif, Monospace
  - Single selection for each sub-category
  - Connect to `design` object in store

- [ ] **3.8** Create Step 7: Deployment (`components/wizard/steps/deploy-step.tsx`)
  - Platform options: Vercel, AWS, Azure, Google Cloud, Docker, Kubernetes, Static Export
  - CI/CD options: GitHub Actions, GitLab CI, Jenkins, None
  - Single selection for platform, multiple for CI/CD
  - Connect to `deploy` object in store

- [ ] **3.9** Create Step 8: AI Configuration (`components/wizard/steps/ai-step.tsx`)
  - Provider options: OpenAI, Anthropic, Google AI, Local/Ollama
  - Model options: GPT-4, GPT-3.5, Claude 3, PaLM, Custom
  - Temperature presets: Precise, Balanced, Creative
  - Output format options: Markdown, JSON, XML
  - Connect to `ai` object in store
  - Include "Generate Prompt" button
  - Display generated markdown textarea
  - Add "Copy to Clipboard" functionality

- [ ] **3.10** Create Step Content Router (`components/wizard/step-content.tsx`)
  - Dynamic rendering based on `currentStep`
  - Import all step components
  - Handle step-to-component mapping

---

## Phase 4: State Management & Logic

- [ ] **4.1** Create Dictionary mappings (`utils/dictionary.ts`)
  - Map `type` values to detailed descriptions
  - Map `industry` values to context instructions
  - Map `auth` methods to implementation details
  - Map `features` to feature-specific instructions
  - Map `database` to schema/data modeling instructions
  - Map `design.styles` to Tailwind classes
  - Map `design.colors` to CSS variables
  - Map `deploy.platforms` to deployment instructions
  - Map `ai.providers` to API integration instructions

- [ ] **4.2** Create Markdown Generator (`utils/markdown-generator.ts`)
  - Implement template literal function
  - Build sections: Role/Context, Constraints, Style, Features, Technical
  - Apply dictionary lookups for all selections
  - Handle optional fields gracefully
  - Format output as valid Markdown

- [ ] **4.3** Connect Generator to Store
  - Import markdown-generator in useWizardStore
  - Wire `generatePrompt()` to template function
  - Store result in `generatedPrompt` state

- [ ] **4.4** Implement Reset functionality
  - Reset all selections to initial state
  - Reset currentStep to 1
  - Clear generated prompt

---

## Phase 5: Markdown Generator Logic

- [ ] **5.1** Build Role/Context Section
  ```typescript
  // Output structure:
  # System Prompt
  
  ## Role
  You are an expert AI assistant specializing in [industry]...
  
  ## Context
  This is a [project type] designed for...
  ```

- [ ] **5.2** Build Authentication Section
  ```typescript
  // Include:
  - Auth method details from dictionary
  - Provider-specific instructions
  - Security considerations
  ```

- [ ] **5.3** Build Features Section
  ```typescript
  // Loop through selected features
  // Lookup feature details in dictionary
  // Generate feature-specific instructions
  ```

- [ ] **5.4** Build Technical Stack Section
  ```typescript
  // Include:
  - Database selection and ORM
  - Design system specifications
  - Deployment platform instructions
  ```

- [ ] **5.5** Build AI Configuration Section
  ```typescript
  // Include:
  - Provider-specific prompts
  - Model selection rationale
  - Temperature/behavior settings
  ```

- [ ] **5.6** Implement Copy to Clipboard
  - Use `navigator.clipboard.writeText()`
  - Add "Copied!" feedback toast/tooltip
  - Confirm functionality works on all browsers

---

## Phase 6: Final Polish

- [ ] **6.1** Add Loading States
  - Skeleton loaders for cards during hydration
  - Button loading states for "Generate" action

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
  ```bash
  npm run lint
  npm run typecheck
  # Fix any errors
  ```

- [ ] **6.7** Test Complete User Flow
  - Complete all 8 steps
  - Generate prompt
  - Copy to clipboard
  - Reset and start over
  - Verify state persists correctly

- [ ] **6.8** Build Production Bundle
  ```bash
  npm run build
  # Verify no build errors
  ```

---

## Phase 7: Documentation & Cleanup

- [ ] **7.1** Update README with usage instructions
- [ ] **7.2** Add comments to complex functions
- [ ] **7.3** Verify all imports are correct and tree-shakeable
- [ ] **7.4** Final review of `.cursorrules`, `architecture.md`, `design.md`

---

## Total Tasks: 48 checklist items
