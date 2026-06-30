"use client";

import { useCallback, type FC } from "react";
import { SelectableCard } from "@/components/selectable-card";
import type { SelectableCardOption } from "@/types/wizard";

interface GenericStepProps {
  title: string;
  description: string;
  options: SelectableCardOption[];
  mode: "single" | "multiple";
  selected: string | string[] | null;
  onSelect: (key: string, value: any) => void;
  selectKey: string;
  notePrefix: string;
  notes: Record<string, string>;
  onNote: (key: string, value: string) => void;
}

export const GenericStep: FC<GenericStepProps> = ({
  title, description, options, mode, selected, onSelect, selectKey,
  notePrefix, notes, onNote,
}) => {
  const handleSelect = useCallback((id: string) => {
    if (mode === "multiple") {
      const current: string[] = Array.isArray(selected) ? selected : [];
      const next = current.includes(id)
        ? current.filter((x) => x !== id)
        : [...current, id];
      onSelect(selectKey, next);
    } else {
      onSelect(selectKey, id);
    }
  }, [mode, selected, onSelect, selectKey]);

  return (
    <div className="flex flex-col h-full gap-3">
      <h2 className="text-base font-semibold text-text">{title}</h2>
      <p className="text-xs text-muted">{description}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {options.map((opt) => (
          <SelectableCard
            key={opt.id}
            {...opt}
            selected={
              Array.isArray(selected)
                ? selected.includes(opt.id)
                : selected === opt.id
            }
            onSelect={handleSelect}
            mode={mode}
            optionalText={notes[`${notePrefix}-${opt.id}`] ?? ""}
            onOptionalTextChange={(t) => onNote(`${notePrefix}-${opt.id}`, t)}
          />
        ))}
      </div>
    </div>
  );
};
