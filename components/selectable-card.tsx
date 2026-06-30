"use client";

import { useCallback, type FC } from "react";
import { cn } from "@/lib/utils";
import type { SelectableCardProps } from "@/types/wizard";

export const SelectableCard: FC<SelectableCardProps> = ({
  id, title, description, icon: Icon,
  selected, onSelect, mode,
  optionalText, onOptionalTextChange,
}) => {
  const handleClick = useCallback(() => onSelect(id), [id, onSelect]);
  const handleKey = useCallback((e: React.KeyboardEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
    if (e.key === "Enter") { e.preventDefault(); onSelect(id); }
  }, [id, onSelect]);

  return (
    <div
      role={mode === "single" ? "radio" : "checkbox"}
      aria-checked={selected}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKey}
      className={cn(
        "flex items-start gap-3 py-3 cursor-pointer transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/30 group border-b border-border last:border-0",
        selected ? "text-text" : "text-text hover:text-text"
      )}
    >
      <div className={cn(
        "mt-0.5 w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors",
        selected ? "border-accent" : "border-dim group-hover:border-muted"
      )}>
          {selected && <div className="w-2.5 h-2.5 rounded-full bg-accent" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <Icon className={cn("size-4 shrink-0", selected ? "text-accent" : "text-muted")} />
          <span className={cn("text-sm", selected ? "font-semibold text-accent" : "font-medium text-text")}>
            {title}
          </span>
        </div>
        <p className={cn("text-xs mt-1 leading-snug", selected ? "text-muted" : "text-muted")}>
          {description}
        </p>
        {onOptionalTextChange && (
          <input
            type="text"
            placeholder="Add notes..."
            value={optionalText ?? ""}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => onOptionalTextChange(e.target.value)}
            className="mt-2 w-full bg-transparent border-0 border-b border-border px-0 py-1 text-xs text-text placeholder:text-dim/50 outline-none focus:border-accent/50 transition-colors"
          />
        )}
      </div>
    </div>
  );
};
