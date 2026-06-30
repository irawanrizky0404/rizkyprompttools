"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { tools } from "@/lib/tools";
import { Lock, ArrowUpRight } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const cats = Array.from(new Set(tools.map((t) => t.category)));
  const [tab, setTab] = useState(cats[0]);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-base">
      <header className="shrink-0 px-6 pt-6 pb-3 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-lg font-semibold text-text">Prompt Tools</h1>
          <span className="text-xs text-dim">{tools.length} tools</span>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {cats.map((cat) => (
            <button key={cat} onClick={() => setTab(cat)}
              className={cn("text-[11px] px-2.5 py-1 border transition-colors", tab === cat ? "border-accent text-accent bg-accent-bg" : "border-border text-dim hover:text-text")}>
              {cat}
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 overflow-hidden px-6 py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {tools.filter((t) => t.category === tab).map((tool) => (
            <button
              key={tool.id}
              onClick={() => !tool.placeholder && router.push(`/${tool.slug}`)}
              disabled={tool.placeholder}
              className={cn(
                "group flex flex-col gap-1.5 p-2.5 border transition-all text-left",
                tool.placeholder
                  ? "border-dashed border-border opacity-30 cursor-not-allowed"
                  : "border-border bg-surface hover:border-accent/30 cursor-pointer"
              )}
            >
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center border border-border shrink-0">
                  <tool.icon className="size-3.5 text-muted" />
                </div>
                <span className="text-xs font-medium text-text truncate flex-1">{tool.title}</span>
                {tool.placeholder && <Lock className="size-2.5 text-dim shrink-0" />}
                {!tool.placeholder && <ArrowUpRight className="size-3 text-dim shrink-0" />}
              </div>
              <p className="text-[9px] text-dim leading-relaxed line-clamp-2">{tool.description}</p>
              <span className="text-[8px] text-dim font-mono">{tool.steps} steps</span>
            </button>
          ))}
        </div>
      </main>

      <footer className="shrink-0 border-t border-border px-6 py-2.5">
        <p className="text-xs text-dim">{tools.length} tools &middot; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
