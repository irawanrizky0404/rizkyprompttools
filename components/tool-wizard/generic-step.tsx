"use client";

import type { FC } from "react";
import { SelectableCard } from "@/components/selectable-card";
import type { SelectableCardOption } from "@/types/wizard";

interface GenericStepProps {
  title: string;
  description: string;
  options: SelectableCardOption[];
  mode: "single" | "multiple";
  selected: string | string[] | null;
  onSelect: (id: string) => void;
  notePrefix: string;
  notes: Record<string, string>;
  onNote: (key: string, value: string) => void;
}

export const GenericStep: FC<GenericStepProps> = ({
  title, description, options, mode, selected, onSelect,
  notePrefix, notes, onNote,
}) => {
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
            onSelect={onSelect}
            mode={mode}
            optionalText={notes[`${notePrefix}-${opt.id}`] ?? ""}
            onOptionalTextChange={(t) => onNote(`${notePrefix}-${opt.id}`, t)}
          />
        ))}
      </div>
    </div>
  );
};
