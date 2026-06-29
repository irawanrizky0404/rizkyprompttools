"use client";

import { useCallback, type FC } from "react";
import { Frame, Sparkles, Bold, Feather, Layers, Swords, Rabbit, Ghost, Palette, Moon, Sun, Monitor, CircleDot, BookOpen, Mountain, Sunset, Bird, Type, TextQuote, Code, Hand, MonitorCheck } from "lucide-react";
import { SelectableCard } from "@/components/selectable-card";
import { useWizardStore } from "@/store/useWizardStore";
import type { SelectableCardOption } from "@/types/wizard";

const styles: SelectableCardOption[] = [
  { id: "minimal", title: "Minimal", description: "Whitespace-driven", icon: Frame },
  { id: "rounded", title: "Rounded", description: "Soft corners", icon: Sparkles },
  { id: "bold", title: "Bold", description: "High-contrast", icon: Bold },
  { id: "elegant", title: "Elegant", description: "Refined serifs", icon: Feather },
  { id: "glassmorphism", title: "Glass", description: "Frosted blur", icon: Layers },
  { id: "brutalist", title: "Brutalist", description: "Raw, stark", icon: Swords },
  { id: "retro", title: "Retro", description: "Vintage feel", icon: Rabbit },
  { id: "cyberpunk", title: "Cyberpunk", description: "Neon glow", icon: Ghost },
  { id: "japanese", title: "Japanese", description: "Wabi-sabi", icon: Palette },
];

const colors: SelectableCardOption[] = [
  { id: "dark", title: "Dark", description: "Deep bg", icon: Moon },
  { id: "light", title: "Light", description: "White bg", icon: Sun },
  { id: "auto", title: "Auto", description: "System pref", icon: Monitor },
  { id: "nord", title: "Nord", description: "Arctic teal", icon: Mountain },
  { id: "solarized", title: "Solarized", description: "Scientific", icon: BookOpen },
  { id: "tokyo-night", title: "Tokyo Night", description: "Blue-dark", icon: Sunset },
];

const fonts: SelectableCardOption[] = [
  { id: "sans-serif", title: "Sans-serif", description: "Modern, Inter", icon: Type },
  { id: "serif", title: "Serif", description: "Editorial", icon: TextQuote },
  { id: "monospace", title: "Monospace", description: "Developer", icon: Code },
];

export const DesignStep: FC = () => {
  const { selections, updateSelection, updateNote } = useWizardStore();
  const upd = useCallback((k: string, v: string) => updateSelection("design", { ...selections.design, [k]: v }), [selections.design, updateSelection]);
  const nt = useCallback((s: string, id: string, t: string) => updateNote(`design-${s}-${id}`, t), [updateNote]);

  return (
    <div className="h-full flex flex-col gap-1.5">
      <h2 className="text-lg font-semibold text-text">Design System</h2>
      <div className="grid grid-cols-4 gap-1.5">
        <div className="col-span-full text-xs text-muted font-mono tracking-wider">Style</div>
        {styles.map((o) => (
          <SelectableCard key={o.id} {...o} selected={selections.design.style === o.id}
            onSelect={(id) => upd("style", id)} mode="single"
            optionalText={selections.notes[`design-style-${o.id}`] ?? ""}
            onOptionalTextChange={(t) => nt("style", o.id, t)} />
        ))}
        <div className="col-span-full h-px bg-border my-0.5" />
        <div className="col-span-full text-xs text-muted font-mono tracking-wider">Colors</div>
        {colors.map((o) => (
          <SelectableCard key={o.id} {...o} selected={selections.design.colorScheme === o.id}
            onSelect={(id) => upd("colorScheme", id)} mode="single"
            optionalText={selections.notes[`design-color-${o.id}`] ?? ""}
            onOptionalTextChange={(t) => nt("color", o.id, t)} />
        ))}
        <div className="col-span-full h-px bg-border my-0.5" />
        <div className="col-span-full text-xs text-muted font-mono tracking-wider">Fonts</div>
        {fonts.map((o) => (
          <SelectableCard key={o.id} {...o} selected={selections.design.typography === o.id}
            onSelect={(id) => upd("typography", id)} mode="single"
            optionalText={selections.notes[`design-typography-${o.id}`] ?? ""}
            onOptionalTextChange={(t) => nt("typography", o.id, t)} />
        ))}
      </div>
    </div>
  );
};





