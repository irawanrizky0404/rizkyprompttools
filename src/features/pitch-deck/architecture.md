# Pitch Deck Architect - Architecture

## 1. Project Structure

```
src/features/pitch-deck/
├── steps/
│   ├── business-stage-step.tsx     # Step 1: Business Stage selection
│   ├── business-model-step.tsx     # Step 2: Business Model selection
│   ├── target-market-step.tsx      # Step 3: Target Market selection
│   ├── pitch-focus-step.tsx        # Step 4: Pitch Focus selection
│   └── output-step.tsx             # Step 5: Output/Generate
├── store/
│   └── useWizardStore.ts           # Zustand global state
├── types/
│   └── wizard.ts                   # TypeScript interfaces
└── utils/
    ├── dictionary.ts               # UI value to instruction mappings
    └── markdown-generator.ts       # Template literal engine
```

---

## 2. State Flow

```
                    Zustand Wizard Store
  selections: {
    businessStage: "ideation" | "pre-seed" | "seed" | "series-a",
    businessModel: "b2b-saas" | "marketplace" | "freemium-b2c" | "subscription",
    targetMarket: "gen-z" | "enterprise-b2b" | "smbs" | "mass-market",
    pitchFocus: "seeking-investors" | "competition" | "internal-alignment"
  }
                    |
        +-----------+-----------+
        v                       v
  Navigation              Step Components (1-4)
                            |
                            v
                    Step 5: Output Step
              generatePrompt() -> deck outline
```

---

## 3. Mermaid State Diagram

```mermaid
stateDiagram-v2
    [*] --> Step1: User opens app
    Step1 --> Step2: Next button
    Step2 --> Step3: Next button
    Step3 --> Step4: Next button
    Step4 --> Step5: Next button
    Step5 --> Step5: Generate clicked
    Step5 --> [*]: Copy and Done

    Step1 --> Step1: Card click (stage)
    Step2 --> Step2: Card click (model)
    Step3 --> Step3: Card click (market)
    Step4 --> Step4: Card click (focus)

    Step5 --> Step4: Back
    Step4 --> Step3: Back
    Step3 --> Step2: Back
    Step2 --> Step1: Back
```

---

## 4. File Responsibilities

| File | Responsibility |
|------|----------------|
| useWizardStore.ts | Global state, selections, navigation, generation |
| dictionary.ts | Maps UI values to pitch deck instructions |
| markdown-generator.ts | Builds full pitch deck outline in Markdown |
| wizard-shell.tsx | Layout, stepper, dynamic rendering |
| step-*.tsx | Individual step UI |
