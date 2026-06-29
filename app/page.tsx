"use client";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { tools } from "@/lib/tools";
import { Lock, ArrowUpRight } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-base">
      <header className="shrink-0 px-10 pt-10 pb-8">
        <p className="text-xs text-muted font-mono tracking-wider mb-2">TOOLKIT</p>
        <h1 className="text-4xl font-semibold text-text tracking-tight leading-none">Prompt Tools</h1>
        <p className="text-sm text-muted mt-3 max-w-md leading-relaxed">
          A set of generators for building system prompts and technical specifications.
        </p>
      </header>

      <main className="flex-1 overflow-hidden px-10">
        <div className="grid grid-cols-2 gap-3">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => !tool.placeholder && router.push(`/${tool.slug}`)}
              disabled={tool.placeholder}
              className={cn(
                "group flex items-start gap-4 p-5 border transition-all duration-200 text-left",
                tool.placeholder
                  ? "border-dashed border-border opacity-30 cursor-not-allowed"
                  : "border-border bg-surface hover:border-accent/30 cursor-pointer"
              )}
            >
              <div className="flex size-10 items-center justify-center border border-border group-hover:border-accent/30 transition-colors shrink-0">
                <tool.icon className="size-4 text-muted group-hover:text-accent transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-text group-hover:text-accent transition-colors">{tool.title}</span>
                  {tool.placeholder && <Lock className="size-3 text-dim" />}
                  {!tool.placeholder && <ArrowUpRight className="size-3.5 text-dim group-hover:text-accent transition-colors ml-auto" />}
                </div>
                <p className="text-xs text-dim mt-1.5 leading-relaxed">{tool.description}</p>
                <span className="text-[10px] text-dim font-mono mt-2 block">{tool.steps} steps</span>
              </div>
            </button>
          ))}
        </div>
      </main>

      <footer className="shrink-0 border-t border-border px-10 py-4 mt-4">
        <p className="text-xs text-dim">{tools.length} tools &middot; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
