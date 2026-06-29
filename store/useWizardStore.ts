import { create } from "zustand";
import { INITIAL_SELECTIONS, hasSelectionForStep, type WizardStore } from "@/types/wizard";
import { generateMarkdownPrompt } from "@/utils/markdown-generator";

export const useWizardStore = create<WizardStore>((set, get) => ({
  currentStep: 1,
  selections: { ...INITIAL_SELECTIONS, notes: {} },
  generatedPrompt: "",

  nextStep: () => {
    const { currentStep } = get();
    if (currentStep < 8) {
      set({ currentStep: currentStep + 1 });
    }
  },

  prevStep: () => {
    const { currentStep } = get();
    if (currentStep > 1) {
      set({ currentStep: currentStep - 1 });
    }
  },

  setCurrentStep: (step: number) => {
    set({ currentStep: step });
  },

  updateSelection: (key: string, value: unknown) => {
    set((state) => ({
      selections: { ...state.selections, [key]: value },
    }));
  },

  updateNote: (noteKey: string, value: string) => {
    set((state) => ({
      selections: {
        ...state.selections,
        notes: { ...state.selections.notes, [noteKey]: value },
      },
    }));
  },

  generatePrompt: () => {
    const { selections } = get();
    const prompt = generateMarkdownPrompt(selections);
    set({ generatedPrompt: prompt });
  },

  resetWizard: () => {
    set({
      currentStep: 1,
      selections: { ...INITIAL_SELECTIONS, notes: {} },
      generatedPrompt: "",
    });
  },

  canProceed: () => {
    const { currentStep, selections } = get();
    return hasSelectionForStep(currentStep, selections);
  },
}));
