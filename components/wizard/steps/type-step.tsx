"use client";

import { useCallback, type FC } from "react";
import { Globe, Cloud, Server, Boxes, Smartphone, Layout, Puzzle, GitBranch, Monitor, Terminal, Bot, MessageSquare, Command, Cable, Workflow } from "lucide-react";
import { SelectableCard } from "@/components/selectable-card";
import { useWizardStore } from "@/store/useWizardStore";
import type { SelectableCardOption } from "@/types/wizard";

const opts: SelectableCardOption[] = [
  { id: "web-app", title: "Web App", description: "Full-stack Next.js with SSR", icon: Globe },
  { id: "saas-platform", title: "SaaS", description: "Multi-tenant platform", icon: Cloud },
  { id: "api", title: "API", description: "REST or GraphQL backend", icon: Server },
  { id: "microservice", title: "Microservice", description: "Independent service", icon: Boxes },
  { id: "mobile", title: "Mobile", description: "React Native/Flutter", icon: Smartphone },
  { id: "pwa", title: "PWA", description: "Offline-capable web", icon: Layout },
  { id: "chrome-extension", title: "Chrome", description: "Manifest V3 ext", icon: Puzzle },
  { id: "firefox-extension", title: "Firefox", description: "WebExtensions", icon: GitBranch },
  { id: "desktop", title: "Desktop", description: "Electron or Tauri", icon: Monitor },
  { id: "cli-tool", title: "CLI", description: "Command-line tool", icon: Terminal },
  { id: "ai-agent", title: "AI Agent", description: "Autonomous agent", icon: Bot },
  { id: "chatbot", title: "Chatbot", description: "Conversational AI", icon: MessageSquare },
  { id: "cms", title: "CMS", description: "Content management", icon: Command },
  { id: "wordpress-plugin", title: "WP Plugin", description: "WordPress ext", icon: Cable },
  { id: "workflow", title: "Workflow", description: "Process automation", icon: Workflow },
];

export const TypeStep: FC = () => {
  const { selections, updateSelection, updateNote } = useWizardStore();
  const sel = useCallback((id: string) => updateSelection("type", id), [updateSelection]);
  const nt = useCallback((id: string, t: string) => updateNote(`type-${id}`, t), [updateNote]);

  return (
    <div className="h-full flex flex-col gap-1.5">
      <h2 className="text-lg font-semibold text-text">What are you building?</h2>
      <div className="grid grid-cols-4 gap-1.5">
        {opts.map((o) => (
          <SelectableCard key={o.id} {...o} selected={selections.type === o.id}
            onSelect={sel} mode="single"
            optionalText={selections.notes[`type-${o.id}`] ?? ""}
            onOptionalTextChange={(t) => nt(o.id, t)} />
        ))}
      </div>
    </div>
  );
};





