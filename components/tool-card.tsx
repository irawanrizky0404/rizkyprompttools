"use client";

import type { FC } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import type { ToolDefinition } from "@/lib/tools";
import { Lock } from "lucide-react";

interface ToolCardProps {
  tool: ToolDefinition;
}

export const ToolCard: FC<ToolCardProps> = ({ tool }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => !tool.placeholder && router.push(`/${tool.slug}`)}
      disabled={tool.placeholder}
      className={cn(
        "group relative flex flex-col items-start gap-3 rounded-lg border bg-card p-5 text-left transition-all duration-200",
        tool.placeholder
          ? "border-dashed border-border/50 opacity-60 cursor-not-allowed"
          : "border-border hover:border-primary/50 hover:bg-card-hover hover:shadow-sm cursor-pointer"
      )}
    >
      {tool.placeholder && (
        <div className="absolute top-3 right-3">
          <Lock className="size-3 text-foreground-dim" />
        </div>
      )}
      <div className="flex size-10 items-center justify-center rounded-lg bg-background-secondary border border-border">
        <tool.icon className="size-4 text-primary" />
      </div>
      <div className="flex-1 space-y-1">
        <h3 className="text-sm font-medium text-foreground">{tool.title}</h3>
        <p className="text-xs text-foreground-muted leading-relaxed line-clamp-2">{tool.description}</p>
      </div>
      <div className="flex w-full items-center justify-between border-t border-border pt-3 mt-1">
        <span className="text-[11px] text-foreground-dim">{tool.steps} steps</span>
        {!tool.placeholder && (
          <span className="text-xs text-foreground-dim group-hover:text-primary transition-colors">Open &rarr;</span>
        )}
        {tool.placeholder && (
          <span className="text-[11px] text-foreground-dim">Coming soon</span>
        )}
      </div>
    </button>
  );
};
