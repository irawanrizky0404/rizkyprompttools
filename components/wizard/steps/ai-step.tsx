"use client";

import { useCallback, type FC } from "react";
import { Bot, Sparkles, Brain, Cpu, MessageSquare, CodeXml, Star, Atom, Box, GitBranch, Ship, Users, BookOpen, Cloud, Shield, Rabbit, Turtle, Feather, Rocket, Zap, Gauge, Languages } from "lucide-react";
import { SelectableCard } from "@/components/selectable-card";
import { useWizardStore } from "@/store/useWizardStore";
import type { SelectableCardOption } from "@/types/wizard";

const providers: SelectableCardOption[] = [
  { id: "openai", title: "OpenAI", description: "GPT-4o, o1, o3", icon: Sparkles },
  { id: "anthropic", title: "Anthropic", description: "Claude 3.5", icon: Brain },
  { id: "google", title: "Google AI", description: "Gemini 2.0", icon: Bot },
  { id: "mistral", title: "Mistral", description: "Large, Codestral", icon: Atom },
  { id: "cohere", title: "Cohere", description: "Command R+", icon: Box },
  { id: "groq", title: "Groq", description: "Fast inference", icon: Zap },
  { id: "meta", title: "Meta Llama", description: "Llama 3.1", icon: BookOpen },
  { id: "deepseek", title: "DeepSeek", description: "V2, Coder", icon: Brain },
  { id: "azure-ai", title: "Azure AI", description: "Enterprise", icon: Cloud },
  { id: "bedrock", title: "AWS Bedrock", description: "Foundation models", icon: Shield },
  { id: "ollama", title: "Ollama", description: "Local, private", icon: Cpu },
];

const models: SelectableCardOption[] = [
  { id: "gpt-4o", title: "GPT-4o", description: "Multimodal", icon: Sparkles },
  { id: "gpt-4o-mini", title: "GPT-4o Mini", description: "Fast", icon: Zap },
  { id: "o1", title: "o1", description: "Reasoning", icon: Brain },
  { id: "claude-3.5", title: "Claude 3.5", description: "Best coding", icon: Brain },
  { id: "gemini-2.0", title: "Gemini 2.0", description: "Google fast", icon: Bot },
  { id: "mistral-large", title: "Mistral L", description: "Multilingual", icon: Atom },
  { id: "llama-3.1", title: "Llama 3.1", description: "Meta open", icon: BookOpen },
  { id: "mixtral", title: "Mixtral", description: "MoE", icon: Cpu },
];

const temps: SelectableCardOption[] = [
  { id: "precise", title: "Precise", description: "0.1-0.3", icon: Turtle },
  { id: "balanced", title: "Balanced", description: "0.5-0.7", icon: Gauge },
  { id: "creative", title: "Creative", description: "0.8-1.0", icon: Rocket },
];

export const AIStep: FC = () => {
  const { selections, updateSelection, updateNote, generatedPrompt, generatePrompt } = useWizardStore();
  const upd = useCallback((k: string, v: string) => {
    if (k === "provider" || k === "model") {
      const cur = (selections.ai as any)[k];
      const arr = Array.isArray(cur) ? cur : cur ? [cur] : [];
      const next = arr.includes(v) ? arr.filter((x: string) => x !== v) : [...arr, v];
      updateSelection("ai", { ...selections.ai, [k]: next });
    } else {
      updateSelection("ai", { ...selections.ai, [k]: v });
    }
  }, [selections.ai, updateSelection]);
  const nt = useCallback((s: string, id: string, t: string) => updateNote(`ai-${s}-${id}`, t), [updateNote]);

  return (
    <div className="h-full flex flex-col gap-1.5">
      <h2 className="text-lg font-semibold text-text">AI Configuration</h2>
      <div className="grid grid-cols-4 gap-1.5">
        {providers.map((o) => (
          <SelectableCard key={o.id} {...o} selected={Array.isArray(selections.ai.provider) ? selections.ai.provider.includes(o.id) : selections.ai.provider === o.id}
            onSelect={(id) => upd("provider", id)} mode="multiple"
            optionalText={selections.notes[`ai-provider-${o.id}`] ?? ""}
            onOptionalTextChange={(t) => nt("provider", o.id, t)} />
        ))}
        <div className="col-span-full h-px bg-border my-0.5" />
        {models.map((o) => (
          <SelectableCard key={o.id} {...o} selected={Array.isArray(selections.ai.model) ? selections.ai.model.includes(o.id) : selections.ai.model === o.id}
            onSelect={(id) => upd("model", id)} mode="multiple"
            optionalText={selections.notes[`ai-model-${o.id}`] ?? ""}
            onOptionalTextChange={(t) => nt("model", o.id, t)} />
        ))}
        <div className="col-span-full h-px bg-border my-0.5" />
        {temps.map((o) => (
          <SelectableCard key={o.id} {...o} selected={selections.ai.temperature === o.id}
            onSelect={(id) => upd("temperature", id)} mode="single"
            optionalText={selections.notes[`ai-temperature-${o.id}`] ?? ""}
            onOptionalTextChange={(t) => nt("temperature", o.id, t)} />
        ))}
        <div className="col-span-full h-px bg-border my-0.5" />
        <div className="col-span-full text-xs text-muted font-mono tracking-wider">Output Language</div>
        {[{ id: "en", title: "English", description: "Generate blueprint in English", icon: MessageSquare }, { id: "id", title: "Bahasa Indonesia", description: "Hasilkan blueprint dalam Bahasa Indonesia", icon: Languages }].map((o) => (
          <SelectableCard key={o.id} {...o} selected={selections.ai.language === o.id}
            onSelect={(id) => updateSelection("ai", { ...selections.ai, language: id })}
            mode="single" />
        ))}
      </div>
    </div>
  );
};





