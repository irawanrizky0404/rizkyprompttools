"use client";

import type { FC } from "react";
import { FileText, FileSignature, Scale, FileCheck, Building2, User, Briefcase, Lock, Clock, FileEdit, Shield, Heart } from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  document: [
    { id: "nda", title: "NDA Agreement", description: "Non-disclosure agreement to protect confidential info", icon: FileText },
    { id: "freelance-contract", title: "Freelance Contract", description: "Service agreement between freelancer and client", icon: FileSignature },
    { id: "tos", title: "Terms of Service (ToS)", description: "Legal terms for using a website or app", icon: Scale },
    { id: "privacy-policy", title: "Privacy Policy", description: "Data collection, usage, and protection notice", icon: FileCheck },
  ],
  parties: [
    { id: "company-b2b", title: "Company (B2B)", description: "Business-to-business agreement between two companies", icon: Building2 },
    { id: "individual-b2c", title: "Individual to Company (B2C)", description: "Agreement between a company and an individual consumer", icon: User },
    { id: "independent-contractor", title: "Independent Contractor", description: "Agreement with a freelancer or solo service provider", icon: Briefcase },
  ],
  clauses: [
    { id: "ip-rights", title: "IP Rights", description: "Intellectual property ownership and licensing terms", icon: Lock },
    { id: "late-payment-penalties", title: "Late Payment Penalties", description: "Fees and interest for overdue payments", icon: Clock },
    { id: "limited-revisions", title: "Limited Revisions", description: "Cap on number of revision cycles for deliverables", icon: FileEdit },
  ],
  tone: [
    { id: "strict-binding", title: "Strict and Binding", description: "Formal, enforceable legal language with rigid terms", icon: Shield },
    { id: "user-friendly", title: "User-friendly and Approachable", description: "Plain language, approachable tone, easy to understand", icon: Heart },
  ],
};

const dict: Record<string, Record<string, string>> = {
  document: {
    nda: "Draft a mutual or one-way Non-Disclosure Agreement that defines confidential information, permitted use cases, exclusions from confidentiality, term of the agreement, and remedies for breach. Include standard boilerplate such as governing law, jurisdiction, and severability.",
    "freelance-contract": "Draft a Freelance Contract covering scope of work, deliverables, timeline, payment terms (fixed fee or hourly), revision limits, intellectual property assignment, confidentiality, independent contractor status, termination clauses, and dispute resolution.",
    tos: "Draft Terms of Service for a digital platform covering account registration, user obligations, prohibited conduct, content ownership, license to use the service, payment terms, refund policy, limitation of liability, indemnification, termination, and governing law.",
    "privacy-policy": "Draft a Privacy Policy compliant with applicable regulations (GDPR, CCPA) covering data controller identity, types of data collected, lawful basis for processing, data sharing with third parties, data retention periods, user rights (access, deletion, portability), and cookie usage.",
  },
  parties: {
    "company-b2b": "Structure the agreement for two business entities. Include corporate representations and warranties, mutual indemnification, limitation of liability tied to fees paid, and dispute resolution via arbitration or courts in the company's jurisdiction.",
    "individual-b2c": "Structure the agreement for a company engaging an individual consumer. Include consumer protection disclaimers, refund rights, warranty disclaimers, and a clause that limits the company's liability to the maximum extent permitted by consumer law.",
    "independent-contractor": "Structure the agreement for an independent contractor. Emphasize that no employer-employee relationship exists, the contractor controls their own work schedule, provides their own tools, pays their own taxes, and is not entitled to benefits.",
  },
  clauses: {
    "ip-rights": "Include an IP Rights clause specifying that all work product, code, designs, and deliverables created under the agreement are the exclusive property of the client, with the contractor assigning all rights. For NDA contexts, specify that no IP license is granted by the disclosure.",
    "late-payment-penalties": "Include a Late Payment Penalties clause charging 1.5% monthly interest (or maximum allowed by law) on overdue amounts. Add a flat late fee of $50 per late invoice and the right to suspend services after 15 days of non-payment.",
    "limited-revisions": "Include a Limited Revisions clause capping revisions to two rounds per deliverable. Revisions beyond the cap will be billed at the standard hourly rate. Specify that changes to the original scope require a new statement of work.",
  },
  tone: {
    "strict-binding": "Draft the document in a strict, formal legal tone using traditional legal terminology (whereas, henceforth, herein, notwithstanding). Use binding language such as 'shall', 'must', and 'covenants'. Minimize explanatory footnotes or plain-language summaries.",
    "user-friendly": "Draft the document in a user-friendly, approachable tone using plain language. Replace 'hereinafter' with 'from now on'. Use short sentences, headings in question format ('What information do we collect?'), and include a plain-language summary at the top of each section.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const document = selections.step1;
  const parties = selections.step2;
  const clauses = selections.step3;
  const tone = selections.step4;

  const lines = ["# Legal Document Draft", "", "## Document Blueprint", ""];
  if (document) lines.push(`**Document Type:** ${dict.document[document] ?? document}`);
  if (document) lines.push(`> ${notes[`document-${document}`] ?? ""}`);
  lines.push("");
  if (parties) lines.push(`**Involved Parties:** ${dict.parties[parties] ?? parties}`);
  if (parties) lines.push(`> ${notes[`parties-${parties}`] ?? ""}`);
  lines.push("");
  if (clauses) lines.push(`**Special Clauses:** ${dict.clauses[clauses] ?? clauses}`);
  if (clauses) lines.push(`> ${notes[`clauses-${clauses}`] ?? ""}`);
  lines.push("");
  if (tone) lines.push(`**Tone:** ${dict.tone[tone] ?? tone}`);
  if (tone) lines.push(`> ${notes[`tone-${tone}`] ?? ""}`);
  lines.push("");
  lines.push("## Recommended Document Outline");
  lines.push("");
  lines.push("1. Title and Parties — Full legal names and addresses");
  lines.push("2. Recitals — Background and purpose of the agreement");
  lines.push("3. Definitions — Key terms used throughout the document");
  lines.push("4. Main Obligations — Core rights and duties of each party");
  if (clauses) lines.push(`5. Special Clauses — ${options.clauses.find(o => o.id === clauses)?.title}`);
  lines.push("6. Representations and Warranties");
  lines.push("7. Limitation of Liability");
  lines.push("8. Termination");
  lines.push("9. General Provisions (Boilerplate)");
  lines.push("10. Signatures");

  return lines.join("\n");
}

export default function LegalDraftPage() {
  return (
    <ToolShell
      title="Legal Document Draft Builder"
      steps={[
        { id: 1, label: "Document", component: (p) => (
          <GenericStep {...p} title="Select Document Type" description="What legal document do you need?" options={options.document} mode="single" selected={p.selections.step1} onSelect={(id) => p.onSelect("step1", id)} notePrefix="document" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Parties", component: (p) => (
          <GenericStep {...p} title="Select Involved Parties" description="Who are the parties in this agreement?" options={options.parties} mode="single" selected={p.selections.step2} onSelect={(id) => p.onSelect("step2", id)} notePrefix="parties" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Clauses", component: (p) => (
          <GenericStep {...p} title="Select Special Clauses" description="What additional clauses should be included?" options={options.clauses} mode="single" selected={p.selections.step3} onSelect={(id) => p.onSelect("step3", id)} notePrefix="clauses" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Tone", component: (p) => (
          <GenericStep {...p} title="Select Tone" description="How should the document be written?" options={options.tone} mode="single" selected={p.selections.step4} onSelect={(id) => p.onSelect("step4", id)} notePrefix="tone" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}
