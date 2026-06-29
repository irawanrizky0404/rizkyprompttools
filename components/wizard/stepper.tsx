"use client";

import { useMemo, type FC } from "react";
import { cn } from "@/lib/utils";
import { WIZARD_STEPS } from "@/types/wizard";

interface StepperProps {
  currentStep: number;
}

export const Stepper: FC<StepperProps> = ({ currentStep }) => {
  const steps = useMemo(() => WIZARD_STEPS, []);

  return (
    <nav aria-label="Progress" className="w-full">
      <ol className="flex items-center gap-0">
        {steps.map((step, index) => {
          const done = step.id < currentStep;
          const active = step.id === currentStep;
          const last = index === steps.length - 1;

          return (
            <li key={step.id} className={cn("flex items-center", last ? "" : "flex-1")}>
              <span className={cn(
                "text-[11px] font-medium whitespace-nowrap transition-colors",
                done && "text-step-complete",
                active && "text-step-active",
                !done && !active && "text-step-inactive"
              )}>
                {step.id}.{step.label}
              </span>
              {!last && <div className={cn("mx-2 h-px flex-1", done ? "bg-step-complete" : "bg-step-inactive/30")} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
