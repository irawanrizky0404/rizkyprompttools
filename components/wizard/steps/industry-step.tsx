"use client";

import { useCallback, type FC } from "react";
import { Banknote, HeartPulse, ShoppingCart, Cloud, Users, GraduationCap, Gamepad2, Building2, Plane, Truck, Scale, Film, Sprout, Zap, Landmark, Heart, Hammer, Wifi, Shield } from "lucide-react";
import { SelectableCard } from "@/components/selectable-card";
import { useWizardStore } from "@/store/useWizardStore";
import type { SelectableCardOption } from "@/types/wizard";

const opts: SelectableCardOption[] = [
  { id: "fintech", title: "Fintech", description: "Banking, payments", icon: Banknote },
  { id: "healthcare", title: "Healthcare", description: "Medical, HIPAA", icon: HeartPulse },
  { id: "ecommerce", title: "E-commerce", description: "Online stores", icon: ShoppingCart },
  { id: "saas", title: "SaaS", description: "Software platform", icon: Cloud },
  { id: "social", title: "Social", description: "Communities, feeds", icon: Users },
  { id: "education", title: "Education", description: "LMS, courses", icon: GraduationCap },
  { id: "gaming", title: "Gaming", description: "Leaderboards, MP", icon: Gamepad2 },
  { id: "real-estate", title: "Real Estate", description: "Property, CRM", icon: Building2 },
  { id: "travel", title: "Travel", description: "Booking, itineraries", icon: Plane },
  { id: "logistics", title: "Logistics", description: "Warehouse, tracking", icon: Truck },
  { id: "legal", title: "Legal", description: "Case management", icon: Scale },
  { id: "media", title: "Media", description: "Streaming, DRM", icon: Film },
  { id: "agriculture", title: "Agriculture", description: "Farm mgmt", icon: Sprout },
  { id: "energy", title: "Energy", description: "Grid, metering", icon: Zap },
  { id: "government", title: "Government", description: "Civic services", icon: Landmark },
  { id: "non-profit", title: "Non-Profit", description: "Donations, CRM", icon: Heart },
  { id: "manufacturing", title: "Manufacturing", description: "Production, QC", icon: Hammer },
  { id: "telecom", title: "Telecom", description: "Network, billing", icon: Wifi },
  { id: "cybersecurity", title: "Security", description: "Threat detection", icon: Shield },
];

export const IndustryStep: FC = () => {
  const { selections, updateSelection, updateNote } = useWizardStore();
  const sel = useCallback((id: string) => {
    const cur = selections.industry;
    const arr = Array.isArray(cur) ? cur : cur ? [cur] : [];
    const next = arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id];
    updateSelection("industry", next);
  }, [selections.industry, updateSelection]);
  const nt = useCallback((id: string, t: string) => updateNote(`industry-${id}`, t), [updateNote]);

  return (
    <div className="h-full flex flex-col gap-1.5">
      <h2 className="text-lg font-semibold text-text">Which industry?</h2>
      <div className="grid grid-cols-4 gap-1.5">
        {opts.map((o) => (
          <SelectableCard key={o.id} {...o} selected={Array.isArray(selections.industry) ? selections.industry.includes(o.id) : selections.industry === o.id}
            onSelect={sel} mode="multiple"
            optionalText={selections.notes[`industry-${o.id}`] ?? ""}
            onOptionalTextChange={(t) => nt(o.id, t)} />
        ))}
      </div>
    </div>
  );
};





