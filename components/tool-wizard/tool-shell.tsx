"use client";

import { ArrowLeft, ArrowRight, Sparkles, Languages, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import type { FC, ComponentType } from "react";
import { useState, useMemo, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { translateToId } from "@/utils/tool-translations";
import { SelectableCard } from "@/components/selectable-card";

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
  const [selections, setSelections] = useState<Record<string, any>>({ _lang: "en" });
  const [notes, setNotes] = useState<Record<string, string>>({});
  const total = steps.length;
  const isLast = currentStep === total;

  const updateSelection = (key: string, value: any) => setSelections((p) => ({ ...p, [key]: value }));
  const updateNote = (key: string, value: string) => setNotes((p) => ({ ...p, [key]: value }));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== " ") return;
      if (currentStep >= total) return;
      const el = document.activeElement;
      if (!el || el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.getAttribute("role") === "radio" || el.getAttribute("role") === "checkbox") return;
      const stepKey = `step${currentStep}`;
      const val = selections[stepKey];
      const ok = Array.isArray(val) ? val.length > 0 : val !== undefined && val !== null && val !== "";
      if (ok) { e.preventDefault(); setCurrentStep((s) => s + 1); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [currentStep, total, selections]);

  const canProceed = () => {
    const val = selections[`step${currentStep}`];
    if (val === undefined || val === null || val === "") return false;
    if (Array.isArray(val)) return val.length > 0;
    return true;
  };

  const allDone = steps.every((s) => {
    const val = selections[`step${s.id}`];
    if (val === undefined || val === null || val === "") return false;
    if (Array.isArray(val)) return val.length > 0;
    return true;
  });

  const t = (text: string) => selections._lang === "id" ? translateToId(text) : text;
  const [output, setOutput] = useState("");
  const handleGenerate = () => {
    if (!allDone) { setOutput("Complete all steps first."); return; }
    try {
      const result = onGenerate({ ...selections }, notes);
      if (result) setOutput(t(result));
      else setOutput("Generate function returned empty.");
    } catch (e: any) { setOutput("Error: " + (e?.message || "Unknown error")); }
  };

  const livePreview = useMemo(() => {
    if (!allDone) return "Waiting for all steps to be completed...";
    try { return t(onGenerate({ ...selections }, notes)); }
    catch (e: any) { return "Error: " + (e?.message || "Unknown error"); }
  }, [selections, notes, allDone]);

  const StepComp = steps[currentStep - 1]?.component;

  return (
    <div className="flex h-screen overflow-hidden bg-base" onKeyDown={(e) => {
      if (e.key !== " " || currentStep >= total) return;
      const el = document.activeElement;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) return;
      e.preventDefault();
      setTimeout(() => setCurrentStep((s) => s + 1), 0);
    }}>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="shrink-0 flex items-center justify-between px-6 py-2 border-b border-border">
          <button onClick={() => router.push("/")} className="text-xs text-dim hover:text-muted transition-colors">&larr; Tools</button>
          <span className="text-xs text-dim font-mono">{title}</span>
        </header>

        <main className="flex-1 overflow-hidden px-6 py-3">
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-hidden">
              {!isLast && StepComp && <StepComp selections={selections} onSelect={updateSelection} onNote={updateNote} notes={notes} />}
              {isLast && (
                <div className="h-full flex flex-col gap-3 overflow-y-auto">
                  <div className="shrink-0">
                    {StepComp && <div className="[&>div]:!h-auto"><StepComp selections={selections} onSelect={updateSelection} onNote={updateNote} notes={notes} /></div>}
                  </div>
                  <div className="shrink-0 h-px bg-border" />
                  <div className="shrink-0 text-xs text-muted font-mono tracking-wider">Output Language</div>
                  <div className="grid grid-cols-2 gap-2 shrink-0">
                    <SelectableCard id="en" title="English" description="Generate blueprint in English" icon={MessageSquare} selected={selections._lang === "en"} onSelect={() => updateSelection("_lang", "en")} mode="single" />
                    <SelectableCard id="id" title="Bahasa Indonesia" description="Hasilkan blueprint dalam Bahasa Indonesia" icon={Languages} selected={selections._lang === "id"} onSelect={() => updateSelection("_lang", "id")} mode="single" />
                  </div>
                </div>
              )}
            </div>
            <div className="shrink-0 flex items-center justify-between pt-2 border-t border-border">
              <button onClick={() => setCurrentStep((s) => Math.max(1, s - 1))} disabled={currentStep === 1}
                className="flex items-center gap-1 text-xs text-dim hover:text-muted transition-colors disabled:opacity-20 disabled:pointer-events-none">
                <ArrowLeft className="size-3" /> Back
              </button>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: total }, (_, i) => i + 1).map((s) => (
                  <span key={s} className={`text-[10px] font-mono ${s === currentStep ? 'text-accent font-bold' : s < currentStep ? 'text-muted' : 'text-dim'}`}>
                    {s}
                  </span>
                ))}
              </div>
              {currentStep < total && (
                <button onClick={() => setCurrentStep((s) => s + 1)} disabled={!canProceed()}
                  className="flex items-center gap-1 text-xs text-accent hover:text-accent/80 transition-colors disabled:opacity-20 disabled:pointer-events-none font-medium">
                  Continue <span className="text-[9px] text-dim font-mono ml-1">&#9000;</span> <ArrowRight className="size-3" />
                </button>
              )}

            </div>
          </div>
        </main>
      </div>

      <div className="w-[30%] shrink-0 border-l border-border bg-surface flex flex-col overflow-hidden">
        <div className="shrink-0 px-4 py-3 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted font-semibold tracking-wider">Live Blueprint</span>
            {output && <span className="text-[10px] text-accent font-medium">&#10003;</span>}
          </div>
          <div className="flex gap-2">
            <button onClick={handleGenerate}
              className="text-[10px] text-accent hover:text-accent/80 transition-colors flex items-center gap-1 font-medium">
              <Sparkles className="size-3" /> Generate
            </button>
            <button onClick={() => navigator.clipboard.writeText(livePreview)}
              className="text-[10px] text-dim hover:text-muted transition-colors">Copy</button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-3">
          <pre className="text-xs font-mono text-text leading-relaxed whitespace-pre-wrap">{livePreview || "Complete all steps to see the generated output."}</pre>
        </div>
      </div>
    </div>
  );
};
