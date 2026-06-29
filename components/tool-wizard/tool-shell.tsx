"use client";

import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import type { FC, ComponentType } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface StepDef {
  id: number;
  label: string;
  component: ComponentType<{
    selections: Record<string, any>;
    onSelect: (key: string, value: any) => void;
    onNote: (key: string, value: string) => void;
    notes: Record<string, string>;
  }>;
}

interface ToolShellProps {
  title: string;
  steps: StepDef[];
  onGenerate: (selections: Record<string, any>, notes: Record<string, string>) => string;
}

export const ToolShell: FC<ToolShellProps> = ({ title, steps, onGenerate }) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState<Record<string, any>>({});
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [output, setOutput] = useState("");
  const total = steps.length;

  const updateSelection = (key: string, value: any) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
  };

  const updateNote = (key: string, value: string) => {
    setNotes((prev) => ({ ...prev, [key]: value }));
  };

  const canProceed = () => {
    const step = steps[currentStep - 1];
    if (!step) return false;
    const stepKey = `step${currentStep}`;
    const val = selections[stepKey];
    if (Array.isArray(val)) return val.length > 0;
    return val !== undefined && val !== null && val !== "";
  };

  const handleGenerate = () => {
    const result = onGenerate(selections, notes);
    setOutput(result);
  };

  const StepComponent = steps[currentStep - 1]?.component;

  return (
    <div className="flex h-screen overflow-hidden bg-base">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="shrink-0 flex items-center justify-between px-6 py-2 border-b border-border">
          <button onClick={() => router.push("/")} className="text-xs text-dim hover:text-muted transition-colors">&larr; Tools</button>
          <span className="text-xs text-dim font-mono">{title}</span>
        </header>
        <main className="flex-1 overflow-hidden px-6 py-3">
          <div className="flex flex-col h-full gap-3 animate">
            <div className="flex items-center gap-2 mb-1">
              {steps.map((s, i) => (
                <div key={s.id} className="flex items-center gap-1.5">
                  <div className={cn("size-2 rounded-full transition-colors", s.id < currentStep ? "bg-accent" : s.id === currentStep ? "bg-accent ring-2 ring-accent/30" : "bg-border")} />
                  <span className={cn("text-[9px] font-mono tracking-wider", s.id === currentStep ? "text-accent" : s.id < currentStep ? "text-muted" : "text-dim")}>{s.label}</span>
                  {i < steps.length - 1 && <div className={cn("w-4 h-px", s.id < currentStep ? "bg-accent/50" : "bg-border")} />}
                </div>
              ))}
            </div>
            <div className="flex-1 overflow-hidden">
              {StepComponent && (
                <StepComponent
                  selections={selections}
                  onSelect={updateSelection}
                  onNote={updateNote}
                  notes={notes}
                />
              )}
            </div>
            <div className="shrink-0 flex items-center justify-between pt-2 border-t border-border">
              <button onClick={() => setCurrentStep((s) => Math.max(1, s - 1))} disabled={currentStep === 1}
                className="flex items-center gap-1 text-xs text-dim hover:text-muted transition-colors disabled:opacity-20 disabled:pointer-events-none">
                <ArrowLeft className="size-3" /> Back
              </button>
              {currentStep < total ? (
                <button onClick={() => setCurrentStep((s) => s + 1)} disabled={!canProceed()}
                  className="flex items-center gap-1 text-xs text-accent hover:text-accent/80 transition-colors disabled:opacity-20 disabled:pointer-events-none font-medium">
                  Continue <ArrowRight className="size-3" />
                </button>
              ) : (
                <button onClick={handleGenerate}
                  className="flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 transition-colors font-medium">
                  <Sparkles className="size-3" /> Generate
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
      <div className="w-[30%] shrink-0 border-l border-border bg-surface flex flex-col overflow-hidden">
        <div className="shrink-0 px-4 py-3 border-b border-border flex items-center justify-between">
          <span className="text-xs text-muted font-semibold tracking-wider">Output</span>
          {output && (
            <button onClick={() => navigator.clipboard.writeText(output)}
              className="text-[10px] text-dim hover:text-muted transition-colors">Copy</button>
          )}
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-3">
          <pre className="text-xs font-mono text-text leading-relaxed whitespace-pre-wrap">{output || "Make your selections and click Generate."}</pre>
        </div>
      </div>
    </div>
  );
};
