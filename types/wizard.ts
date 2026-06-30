export interface AuthSelections {
  method: string[];
  providers: string[];
}

export interface DatabaseSelections {
  primary: string | null;
  orm: string | null;
}

export interface DesignSelections {
  style: string | null;
  colorScheme: string | null;
  typography: string | null;
}

export interface DeploySelections {
  platform: string | null;
  ciCd: string[];
}

export interface AISelections {
  provider: string | null;
  model: string | null;
  temperature: string | null;
  language: string;
}

export interface WizardSelections {
  type: string | null;
  industry: string | null;
  auth: AuthSelections;
  features: string[];
  database: DatabaseSelections;
  design: DesignSelections;
  deploy: DeploySelections;
  ai: AISelections;
  notes: Record<string, string>;
}

export interface WizardState {
  currentStep: number;
  selections: WizardSelections;
  generatedPrompt: string;
}

export interface WizardActions {
  nextStep: () => void;
  prevStep: () => void;
  setCurrentStep: (step: number) => void;
  updateSelection: (key: string, value: unknown) => void;
  updateNote: (noteKey: string, value: string) => void;
  generatePrompt: () => void;
  resetWizard: () => void;
  canProceed: () => boolean;
}

export type WizardStore = WizardState & WizardActions;

export interface SelectableCardOption {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SelectableCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  selected: boolean;
  onSelect: (id: string) => void;
  mode: "single" | "multiple";
  optionalText?: string;
  onOptionalTextChange?: (text: string) => void;
}

export const WIZARD_STEPS = [
  { id: 1, label: "Type" },
  { id: 2, label: "Industry" },
  { id: 3, label: "Auth" },
  { id: 4, label: "Features" },
  { id: 5, label: "Database" },
  { id: 6, label: "Design" },
  { id: 7, label: "Deploy" },
  { id: 8, label: "AI" },
] as const;

export function hasSelectionForStep(step: number, selections: WizardSelections): boolean {
  const hasVal = (v: any) => {
    if (v === null || v === undefined) return false;
    if (Array.isArray(v)) return v.length > 0;
    return true;
  };
  switch (step) {
    case 1: return selections.type !== null;
    case 2: return hasVal(selections.industry);
    case 3: return selections.auth.method.length > 0 || selections.auth.providers.length > 0;
    case 4: return selections.features.length > 0;
    case 5: return selections.database.primary !== null;
    case 6: return selections.design.style !== null;
    case 7: return hasVal(selections.deploy.platform);
    case 8: return true;
    default: return false;
  }
}

export const INITIAL_SELECTIONS: WizardSelections = {
  type: null,
  industry: null,
  auth: { method: [], providers: [] },
  features: [],
  database: { primary: null, orm: null },
  design: { style: null, colorScheme: null, typography: null },
  deploy: { platform: null, ciCd: [] },
  ai: { provider: null, model: null, temperature: null, language: "en" },
  notes: {},
};
