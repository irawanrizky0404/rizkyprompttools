"use client";

import type { FC } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useWizardStore } from "@/store/useWizardStore";

export const WizardFooter: FC = () => {
  const { currentStep, nextStep, prevStep, canProceed } = useWizardStore();
  const first = currentStep === 1;
  const last = currentStep === 8;

  return (
    <div className="flex items-center justify-between pt-3 border-t border-border">
      <button onClick={prevStep} disabled={first}
        className="flex items-center gap-1 text-xs text-foreground-muted hover:text-foreground transition-colors disabled:opacity-20 disabled:pointer-events-none">
        <ArrowLeft className="size-3.5" /> Back
      </button>
      {!last && (
        <button onClick={nextStep} disabled={!canProceed()}
          className="flex items-center gap-1 text-xs text-foreground-muted hover:text-foreground transition-colors disabled:opacity-20 disabled:pointer-events-none">
          Next <ArrowRight className="size-3.5" />
        </button>
      )}
    </div>
  );
};
