"use client";

import { useMemo, type FC } from "react";
import { useWizardStore } from "@/store/useWizardStore";
import { generateMarkdownPrompt } from "@/utils/markdown-generator";
import { Copy, Sparkles } from "lucide-react";


export const BlueprintPreview: FC = () => {
  const { selections, generatePrompt, generatedPrompt } = useWizardStore();

  const livePreview = useMemo(
    () => generateMarkdownPrompt(selections),
    [selections]
  );

  const handleCopy = async () => {
    await navigator.clipboard.writeText(livePreview);
  };

  return (
    <div className="h-full flex flex-col bg-surface border-l border-border">
      <div className="shrink-0 px-4 py-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted font-semibold tracking-wider">Live Blueprint</span>
          {generatedPrompt && <span className="text-[10px] text-accent font-medium">&#10003;</span>}
        </div>
        <div className="flex gap-1.5">
          <button onClick={handleCopy} className="text-[10px] text-dim hover:text-muted transition-colors flex items-center gap-1">
            <Copy className="size-3" /> Copy
          </button>
          <button onClick={generatePrompt} className="text-[10px] text-accent hover:text-accent/80 transition-colors flex items-center gap-1 font-medium">
            <Sparkles className="size-3" /> Generate
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3">
        <pre className="text-xs font-mono text-text leading-relaxed whitespace-pre-wrap">
          {livePreview}
        </pre>
      </div>
    </div>
  );
};
