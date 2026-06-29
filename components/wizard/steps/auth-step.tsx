"use client";

import { useCallback, type FC } from "react";
import { KeyRound, Lock, Fingerprint, ShieldCheck, Unlock, Globe, GitFork, Apple, Monitor, Mail, Smartphone, ScanFace, IdCard, Library, FileCheck, Eye, MessageCircle, Share2, Briefcase, MessageSquare, Play, Music, ShoppingBag } from "lucide-react";
import { SelectableCard } from "@/components/selectable-card";
import { useWizardStore } from "@/store/useWizardStore";
import type { SelectableCardOption } from "@/types/wizard";

const methods: SelectableCardOption[] = [
  { id: "jwt", title: "JWT", description: "Token-based auth", icon: KeyRound },
  { id: "oauth", title: "OAuth 2.0", description: "Social login", icon: Lock },
  { id: "magic-link", title: "Magic Link", description: "Passwordless email", icon: Mail },
  { id: "sms-otp", title: "SMS OTP", description: "One-time password", icon: Smartphone },
  { id: "biometric", title: "Biometric", description: "Face ID", icon: ScanFace },
  { id: "webauthn", title: "WebAuthn", description: "Passkeys", icon: Fingerprint },
  { id: "sso", title: "SSO", description: "Enterprise SSO", icon: IdCard },
  { id: "ldap", title: "LDAP", description: "Active Directory", icon: Library },
  { id: "api-keys", title: "API Keys", description: "Service-to-service", icon: ShieldCheck },
  { id: "passwordless", title: "Passwordless", description: "No passwords", icon: Eye },
  { id: "none", title: "None", description: "Open access", icon: Unlock },
];

const providers: SelectableCardOption[] = [
  { id: "google", title: "Google", description: "Google OAuth", icon: Globe },
  { id: "github", title: "GitHub", description: "GitHub OAuth", icon: GitFork },
  { id: "apple", title: "Apple", description: "Apple Sign In", icon: Apple },
  { id: "microsoft", title: "Microsoft", description: "Azure AD", icon: Monitor },
  { id: "twitter", title: "X", description: "Twitter OAuth", icon: MessageCircle },
  { id: "linkedin", title: "LinkedIn", description: "LinkedIn OAuth", icon: Briefcase },
  { id: "discord", title: "Discord", description: "Discord OAuth2", icon: MessageCircle },
  { id: "slack", title: "Slack", description: "Slack Sign In", icon: MessageSquare },
  { id: "twitch", title: "Twitch", description: "Twitch OAuth", icon: Play },
];

export const AuthStep: FC = () => {
  const { selections, updateSelection, updateNote } = useWizardStore();
  const tm = useCallback((id: string) => {
    const arr = selections.auth.method.includes(id) ? selections.auth.method.filter((x) => x !== id) : [...selections.auth.method, id];
    updateSelection("auth", { ...selections.auth, method: arr });
  }, [selections.auth, updateSelection]);
  const tp = useCallback((id: string) => {
    const arr = selections.auth.providers.includes(id) ? selections.auth.providers.filter((x) => x !== id) : [...selections.auth.providers, id];
    updateSelection("auth", { ...selections.auth, providers: arr });
  }, [selections.auth, updateSelection]);
  const nm = useCallback((id: string, t: string) => updateNote(`auth-method-${id}`, t), [updateNote]);
  const np = useCallback((id: string, t: string) => updateNote(`auth-provider-${id}`, t), [updateNote]);
  const showP = selections.auth.method.length > 0 && !selections.auth.method.includes("none");

  return (
    <div className="h-full flex flex-col gap-1.5">
      <h2 className="text-lg font-semibold text-text">Authentication</h2>
      <div className="grid grid-cols-4 gap-1.5">
        {methods.map((o) => (
          <SelectableCard key={o.id} {...o} selected={selections.auth.method.includes(o.id)}
            onSelect={tm} mode="multiple"
            optionalText={selections.notes[`auth-method-${o.id}`] ?? ""}
            onOptionalTextChange={(t) => nm(o.id, t)} />
        ))}
        {showP && (
          <>
            <div className="col-span-full h-px bg-border my-0.5" />
            {providers.map((o) => (
              <SelectableCard key={o.id} {...o} selected={selections.auth.providers.includes(o.id)}
                onSelect={tp} mode="multiple"
                optionalText={selections.notes[`auth-provider-${o.id}`] ?? ""}
                onOptionalTextChange={(t) => np(o.id, t)} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};





