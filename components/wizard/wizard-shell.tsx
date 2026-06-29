"use client";

import { useRouter } from "next/navigation";
import type { FC } from "react";
import { StepContent } from "@/components/wizard/step-content";
import { BlueprintPreview } from "@/components/blueprint-preview";

export const WizardShell: FC = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen overflow-hidden bg-base">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="shrink-0 flex items-center justify-between px-6 py-2 border-b border-border">
          <button onClick={() => router.push("/")} className="text-xs text-dim hover:text-muted transition-colors">&larr; Tools</button>
          <span className="text-xs text-dim font-mono">v0.1</span>
        </header>
        <main className="flex-1 overflow-hidden px-6 py-3">
          <StepContent />
        </main>
      </div>
      <div className="w-[30%] shrink-0 overflow-hidden">
        <BlueprintPreview />
      </div>
    </div>
  );
};
