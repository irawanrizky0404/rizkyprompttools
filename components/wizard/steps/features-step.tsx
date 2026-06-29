"use client";

import { useCallback, useState, type FC } from "react";
import { LayoutDashboard, Users, CreditCard, Building2, BarChart3, Bell, Search, ClipboardList, FileText, Mail, Upload, Download, FileSpreadsheet, Calendar, MapPin, MessageSquare, Cable, Webhook, FileOutput, GitBranch, Split, Zap, Star, Share2, Bookmark, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { SelectableCard } from "@/components/selectable-card";
import { useWizardStore } from "@/store/useWizardStore";
import type { SelectableCardOption } from "@/types/wizard";

const all: SelectableCardOption[] = [
  { id: "dashboard", title: "Dashboard", description: "KPIs, charts", icon: LayoutDashboard },
  { id: "user-management", title: "User Mgmt", description: "CRUD, RBAC", icon: Users },
  { id: "billing", title: "Billing", description: "Subscriptions", icon: CreditCard },
  { id: "multi-tenancy", title: "Tenancy", description: "Workspaces", icon: Building2 },
  { id: "analytics", title: "Analytics", description: "Events, funnels", icon: BarChart3 },
  { id: "notifications", title: "Notifications", description: "Email, push", icon: Bell },
  { id: "search", title: "Search", description: "Full-text", icon: Search },
  { id: "audit-logging", title: "Audit Log", description: "Activity trail", icon: ClipboardList },
  { id: "cms", title: "CMS", description: "Rich text", icon: FileText },
  { id: "email-templates", title: "Emails", description: "Templates", icon: Mail },
  { id: "file-upload", title: "File Upload", description: "Drag-drop", icon: Upload },
  { id: "export-import", title: "Export", description: "CSV, Excel", icon: Download },
  { id: "reporting", title: "Reporting", description: "Report builder", icon: FileSpreadsheet },
  { id: "calendar", title: "Calendar", description: "Scheduling", icon: Calendar },
  { id: "maps", title: "Maps", description: "Geocoding", icon: MapPin },
  { id: "chat", title: "Chat", description: "Messaging", icon: MessageSquare },
  { id: "api-integration", title: "API Integration", description: "External APIs", icon: Cable },
  { id: "webhooks", title: "Webhooks", description: "Event-driven", icon: Webhook },
  { id: "doc-gen", title: "Doc Gen", description: "PDF templates", icon: FileOutput },
  { id: "workflow", title: "Workflow", description: "Approvals", icon: GitBranch },
  { id: "ab-testing", title: "A/B Test", description: "Experiments", icon: Split },
  { id: "realtime", title: "Real-time", description: "WebSockets", icon: Zap },
  { id: "ratings", title: "Ratings", description: "Reviews", icon: Star },
  { id: "social-sharing", title: "Social", description: "Share buttons", icon: Share2 },
  { id: "bookmarking", title: "Bookmarks", description: "Favorites", icon: Bookmark },
  { id: "invitations", title: "Invites", description: "Referrals", icon: UserPlus },
];

const tabs = [
  { id: "core", label: "Core", ids: ["dashboard", "user-management", "billing", "multi-tenancy", "analytics", "search", "audit-logging"] },
  { id: "content", label: "Content", ids: ["cms", "email-templates", "file-upload", "export-import", "reporting", "doc-gen"] },
  { id: "engage", label: "Engage", ids: ["notifications", "calendar", "maps", "chat", "ratings", "social-sharing", "bookmarking"] },
  { id: "integrate", label: "Integrate", ids: ["api-integration", "webhooks", "workflow", "ab-testing", "realtime", "invitations"] },
];

export const FeaturesStep: FC = () => {
  const { selections, updateSelection, updateNote } = useWizardStore();
  const [tab, setTab] = useState("core");
  const tg = useCallback((id: string) => {
    const f = selections.features.includes(id) ? selections.features.filter((x) => x !== id) : [...selections.features, id];
    updateSelection("features", f);
  }, [selections.features, updateSelection]);
  const nt = useCallback((id: string, t: string) => updateNote(`features-${id}`, t), [updateNote]);
  const cur = tabs.find((t) => t.id === tab)!;
  const items = all.filter((o) => cur.ids.includes(o.id));

  return (
    <div className="h-full flex flex-col gap-1.5">
      <h2 className="text-lg font-semibold text-text">Features</h2>
      <div className="flex gap-1.5 flex-wrap shrink-0">
        {tabs.map((t) => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={cn("text-xs px-2.5 py-1 rounded-md border transition-colors", tab === t.id ? "border-accent text-accent" : "border-border text-dim hover:text-text")}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {items.map((o) => (
          <SelectableCard key={o.id} {...o} selected={selections.features.includes(o.id)}
            onSelect={tg} mode="multiple"
            optionalText={selections.notes[`features-${o.id}`] ?? ""}
            onOptionalTextChange={(t) => nt(o.id, t)} />
        ))}
      </div>
    </div>
  );
};





