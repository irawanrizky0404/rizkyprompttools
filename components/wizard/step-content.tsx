"use client";

import { useMemo, type FC, type ComponentType } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TypeStep } from "@/components/wizard/steps/type-step";
import { IndustryStep } from "@/components/wizard/steps/industry-step";
import { AuthStep } from "@/components/wizard/steps/auth-step";
import { FeaturesStep } from "@/components/wizard/steps/features-step";
import { DatabaseStep } from "@/components/wizard/steps/database-step";
import { DesignStep } from "@/components/wizard/steps/design-step";
import { DeployStep } from "@/components/wizard/steps/deploy-step";
import { AIStep } from "@/components/wizard/steps/ai-step";
import { useWizardStore } from "@/store/useWizardStore";

const map: Record<number, ComponentType> = {
  1: TypeStep, 2: IndustryStep, 3: AuthStep, 4: FeaturesStep,
  5: DatabaseStep, 6: DesignStep, 7: DeployStep, 8: AIStep,
};

export const StepContent: FC = () => {
  const step = useWizardStore((s) => s.currentStep);
  const Comp = useMemo(() => map[step], [step]);

  return (
    <div className="flex flex-col h-full gap-3 animate">
      <div className="flex-1 overflow-hidden">
        {Comp && <Comp />}
      </div>
      <Nav />
    </div>
  );
};

function Nav() {
  const { currentStep, nextStep, prevStep, canProceed } = useWizardStore();
  return (
    <div className="shrink-0 flex items-center justify-between pt-2 border-t border-border">
      <button onClick={prevStep} disabled={currentStep === 1}
        className="flex items-center gap-1 text-xs text-dim hover:text-muted transition-colors disabled:opacity-20 disabled:pointer-events-none">
        <ArrowLeft className="size-3" /> Back
      </button>
      <div className="flex items-center gap-1.5">
        {Array.from({ length: 8 }, (_, i) => i + 1).map((s) => (
          <span key={s} className={`text-[10px] font-mono ${s === currentStep ? 'text-accent font-bold' : s < currentStep ? 'text-muted' : 'text-dim'}`}>
            {s}
          </span>
        ))}
      </div>
      {currentStep < 8 && (
        <button onClick={nextStep} disabled={!canProceed()}
          className="flex items-center gap-1 text-xs text-accent hover:text-accent/80 transition-colors disabled:opacity-20 disabled:pointer-events-none font-medium">
          Continue <ArrowRight className="size-3" />
        </button>
      )}
    </div>
  );
}
