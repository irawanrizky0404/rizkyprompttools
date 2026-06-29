# QA Edge-Case Planner - Architecture

## 1. Project Structure

```
src/features/qa-planner/
├── steps/
│   ├── feature-to-test-step.tsx    # Step 1: Feature selection
│   ├── test-coverage-step.tsx      # Step 2: Test Coverage selection
│   ├── output-format-step.tsx      # Step 3: Output Format selection
│   ├── platform-target-step.tsx    # Step 4: Platform Target selection
│   └── output-step.tsx             # Step 5: Output/Generate
├── store/
│   └── useWizardStore.ts           # Zustand global state
├── types/
│   └── wizard.ts                   # TypeScript interfaces
└── utils/
    ├── dictionary.ts               # UI value to test instruction mappings
    └── markdown-generator.ts       # Template literal engine
```

---

## 2. State Flow

```
                    Zustand Wizard Store
  selections: {
    featureToTest: "login-register" | "payment-checkout" | ...,
    testCoverage: "happy-path" | "edge-cases" | "accessibility" | ...,
    outputFormat: "gherkin" | "manual-checklist" | "jest-cypress",
    platformTarget: "desktop-web" | "mobile-web" | "native-app" | "api"
  }
                    |
        +-----------+-----------+
        v                       v
  Navigation              Step Components
                            |
                            v
                    Step 5: Output Step
              generatePrompt() -> test plan
```

---

## 3. Mermaid State Diagram

```mermaid
stateDiagram-v2
    [*] --> Step1: User opens app
    Step1 --> Step2: Next
    Step2 --> Step3: Next
    Step3 --> Step4: Next
    Step4 --> Step5: Next
    Step5 --> Step5: Generate
    Step5 --> [*]: Copy and Done

    Step1 --> Step1: Feature
    Step2 --> Step2: Coverage
    Step3 --> Step3: Format
    Step4 --> Step4: Platform
```

---

## 4. File Responsibilities

| File | Responsibility |
|------|----------------|
| useWizardStore.ts | Global state, selections, navigation, generation |
| dictionary.ts | Maps to test scenarios, assertions, platform configs |
| markdown-generator.ts | Builds test cases in selected format |
| step-*.tsx | Individual step UI |
