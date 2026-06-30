"use client";

import type { FC } from "react";
import {
  FileText, FileSignature, Scale, FileCheck, Building2, User, Briefcase,
  Lock, Clock, FileEdit, Shield, Heart, BookOpen, Users, Handshake, Laptop,
  MapPin, Globe, Gavel, Database, Key, Ban, XCircle, ScrollText,
  ArrowRight, ChevronRight, AlertTriangle, PenTool, BookMarked, Stamp,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  document: [
    { id: "nda", title: "NDA Agreement", description: "Non-disclosure agreement to protect confidential info", icon: FileText },
    { id: "freelance-contract", title: "Freelance Contract", description: "Service agreement between freelancer and client", icon: FileSignature },
    { id: "tos", title: "Terms of Service (ToS)", description: "Legal terms for using a website or app", icon: Scale },
    { id: "privacy-policy", title: "Privacy Policy", description: "Data collection, usage, and protection notice", icon: FileCheck },
    { id: "employment-agreement", title: "Employment Agreement", description: "Employment terms between employer and employee", icon: Users },
    { id: "service-level-agreement", title: "SLA (Service Level)", description: "Service level commitments between provider and client", icon: BookOpen },
    { id: "partnership-agreement", title: "Partnership Agreement", description: "Terms governing a business partnership", icon: Handshake },
    { id: "software-license", title: "Software License", description: "License terms for software usage and distribution", icon: Laptop },
  ],
  parties: [
    { id: "company-b2b", title: "Company (B2B)", description: "Business-to-business agreement between two companies", icon: Building2 },
    { id: "individual-b2c", title: "Individual to Company (B2C)", description: "Agreement between a company and an individual consumer", icon: User },
    { id: "independent-contractor", title: "Independent Contractor", description: "Agreement with a freelancer or solo service provider", icon: Briefcase },
    { id: "government-entity", title: "Government Entity", description: "Agreement with a government agency or public body", icon: Shield },
    { id: "non-profit-org", title: "Non-Profit Organization", description: "Agreement with a charitable or non-profit entity", icon: Heart },
    { id: "joint-venture", title: "Joint Venture", description: "Collaborative agreement between two or more entities", icon: Handshake },
    { id: "multiple-parties", title: "Multiple Parties", description: "Agreement involving three or more signatories", icon: Users },
    { id: "educational-institution", title: "Educational Institution", description: "Agreement with a school, college, or university", icon: BookOpen },
  ],
  clauses: [
    { id: "ip-rights", title: "IP Rights", description: "Intellectual property ownership and licensing terms", icon: Lock },
    { id: "late-payment-penalties", title: "Late Payment Penalties", description: "Fees and interest for overdue payments", icon: Clock },
    { id: "limited-revisions", title: "Limited Revisions", description: "Cap on number of revision cycles for deliverables", icon: FileEdit },
    { id: "confidentiality", title: "Confidentiality", description: "Obligations to protect sensitive business information", icon: FileText },
    { id: "non-compete", title: "Non-Compete", description: "Restriction on competing activities during and after term", icon: Ban },
    { id: "force-majeure", title: "Force Majeure", description: "Relief from obligations due to unforeseeable events", icon: Shield },
    { id: "arbitration", title: "Arbitration", description: "Binding arbitration clause for all disputes", icon: Gavel },
    { id: "indemnification", title: "Indemnification", description: "Obligation to compensate for losses or damages", icon: Scale },
  ],
  tone: [
    { id: "strict-binding", title: "Strict and Binding", description: "Formal, enforceable legal language with rigid terms", icon: Lock },
    { id: "user-friendly", title: "User-friendly and Approachable", description: "Plain language, approachable tone, easy to understand", icon: Heart },
    { id: "formal-neutral", title: "Formal Neutral", description: "Professional yet balanced, avoiding extreme positions", icon: FileText },
    { id: "persuasive", title: "Persuasive", description: "Argumentative tone favoring one party's position", icon: Gavel },
    { id: "technical", title: "Technical", description: "Detailed, precise language suitable for technical agreements", icon: Laptop },
    { id: "plain-language", title: "Plain Language", description: "Simple, accessible wording for non-lawyer readers", icon: BookOpen },
    { id: "authoritative", title: "Authoritative", description: "Commanding tone that establishes clear rights and obligations", icon: Shield },
    { id: "diplomatic", title: "Diplomatic", description: "Balanced, respectful language for sensitive or negotiated terms", icon: Handshake },
  ],
  jurisdiction: [
    { id: "new-york", title: "New York (USA)", description: "Governed by New York State law — common for commercial contracts", icon: MapPin },
    { id: "delaware", title: "Delaware (USA)", description: "Governed by Delaware law — preferred for corporate entities", icon: MapPin },
    { id: "california", title: "California (USA)", description: "Governed by California law — strong consumer protections", icon: MapPin },
    { id: "uk-england", title: "England & Wales (UK)", description: "Governed by English common law — global standard for finance", icon: Globe },
    { id: "singapore", title: "Singapore", description: "Governed by Singaporean law — preferred in Southeast Asia", icon: Globe },
    { id: "hong-kong", title: "Hong Kong", description: "Governed by Hong Kong law — common law with Chinese proximity", icon: Globe },
    { id: "eu-framework", title: "EU Regulatory", description: "Governed by EU regulations, directives, and CJEU rulings", icon: Shield },
    { id: "international-icc", title: "International (ICC)", description: "Neutral international framework with ICC dispute rules", icon: Scale },
  ],
  dataHandling: [
    { id: "gdpr-compliant", title: "GDPR Compliant", description: "Full compliance with EU General Data Protection Regulation", icon: Database },
    { id: "ccpa-compliant", title: "CCPA Compliant", description: "California Consumer Privacy Act compliance", icon: Database },
    { id: "minimal-collection", title: "Minimal Data Collection", description: "Collect only essential data strictly necessary for service", icon: Key },
    { id: "encryption-required", title: "Encryption Required", description: "All data encrypted at rest (AES-256) and in transit (TLS 1.3)", icon: Lock },
    { id: "third-party-restricted", title: "Third-Party Restricted", description: "No data sharing with third parties without explicit consent", icon: Ban },
    { id: "data-retention-scheduled", title: "Data Retention Schedule", description: "Defined retention periods with automatic deletion procedures", icon: Clock },
    { id: "anonymization-policy", title: "Anonymization Policy", description: "Data must be irreversibly anonymized after retention period", icon: FileText },
    { id: "cross-border", title: "Cross-Border Transfer", description: "Mechanisms for international data transfers (SCCs, BCRs)", icon: Globe },
  ],
  termination: [
    { id: "standard-30-day", title: "Standard 30-Day Notice", description: "Either party may terminate with 30 days' written notice", icon: Clock },
    { id: "immediate-breach", title: "Immediate on Breach", description: "Termination effective immediately upon material breach", icon: XCircle },
    { id: "for-cause", title: "For Cause", description: "Termination with cause after a cure period", icon: AlertTriangle },
    { id: "without-cause", title: "Without Cause", description: "Termination at any time without cause or reason", icon: Ban },
    { id: "mutual-agreement", title: "Mutual Agreement", description: "Termination only by mutual written consent of all parties", icon: Handshake },
    { id: "phased-transition", title: "Phased Transition", description: "Gradual wind-down with transition period for handover", icon: ArrowRight },
    { id: "automatic-renewal", title: "Automatic Renewal", description: "Agreement auto-renews unless notice of non-renewal is given", icon: ScrollText },
    { id: "project-completion", title: "Project Completion", description: "Termination upon completion of all deliverables and acceptance", icon: FileSignature },
  ],
  disputeResolution: [
    { id: "arbitration-icc", title: "Arbitration (ICC Rules)", description: "Binding arbitration under ICC Rules in neutral venue", icon: Gavel },
    { id: "mediation-first", title: "Mediation First", description: "Mandatory mediation before any litigation or arbitration", icon: Handshake },
    { id: "court-litigation", title: "Court Litigation", description: "Disputes resolved in courts of the governing jurisdiction", icon: Scale },
    { id: "expert-determination", title: "Expert Determination", description: "Technical disputes resolved by an independent qualified expert", icon: BookOpen },
    { id: "negotiation-required", title: "Negotiation Required", description: "Good-faith negotiation between senior executives for 30 days", icon: PenTool },
    { id: "binding-arbitration", title: "Binding Arbitration", description: "Final and binding arbitration for all disputes with limited appeal", icon: Gavel },
    { id: "online-dispute", title: "Online Dispute Resolution", description: "Digital platform-based resolution (e.g., ICA, Modria)", icon: Laptop },
    { id: "escalation-ladder", title: "Escalation Ladder", description: "Stepwise escalation from manager → director → CEO → arbitration", icon: ChevronRight },
  ],
};

const dict: Record<string, Record<string, string>> = {
  document: {
    nda: "Draft a mutual or one-way Non-Disclosure Agreement that defines confidential information, permitted use cases, exclusions from confidentiality, term of the agreement, and remedies for breach. Include standard boilerplate such as governing law, jurisdiction, and severability. Mark confidential materials with a stamp and limit disclosure to employees with a need-to-know basis.",
    "freelance-contract": "Draft a Freelance Contract covering scope of work, deliverables, timeline, payment terms (fixed fee or hourly), revision limits, intellectual property assignment, confidentiality, independent contractor status, termination clauses, and dispute resolution. Include a statement of work (SOW) exhibit for each project.",
    tos: "Draft Terms of Service for a digital platform covering account registration, user obligations, prohibited conduct, content ownership, license to use the service, payment terms, refund policy, limitation of liability, indemnification, termination, and governing law. Include a DMCA notice section for copyright claims.",
    "privacy-policy": "Draft a Privacy Policy compliant with applicable regulations (GDPR, CCPA) covering data controller identity, types of data collected, lawful basis for processing, data sharing with third parties, data retention periods, user rights (access, deletion, portability), and cookie usage. Include a 'Last Updated' date.",
    "employment-agreement": "Draft an Employment Agreement covering job title and duties, compensation and bonuses, benefits (health, retirement, PTO), at-will employment status, non-compete and non-solicitation, confidentiality, IP assignment, termination conditions, and severance package. Adhere to local labor law requirements.",
    "service-level-agreement": "Draft an SLA covering service description, uptime guarantees (e.g., 99.9% availability), performance metrics, monitoring and reporting, credit structure for breaches, maintenance windows, escalation procedures, and termination rights for repeated SLA failures.",
    "partnership-agreement": "Draft a Partnership Agreement covering capital contributions, profit and loss sharing ratios, management authority and voting rights, admission and withdrawal of partners, dispute resolution, dissolution procedures, and buy-sell provisions. Include tax partnership election language.",
    "software-license": "Draft a Software License Agreement covering grant of license (perpetual or subscription), scope of use (number of users, instances), usage restrictions, maintenance and support terms, SLA attachments, audit rights, and termination for non-compliance. Distinguish between source code and object code.",
  },
  parties: {
    "company-b2b": "Structure the agreement for two business entities. Include corporate representations and warranties, mutual indemnification, limitation of liability tied to fees paid, and dispute resolution via arbitration or courts in the company's jurisdiction. Both parties warrant they are duly organized and in good standing.",
    "individual-b2c": "Structure the agreement for a company engaging an individual consumer. Include consumer protection disclaimers, refund rights, warranty disclaimers, and a clause that limits the company's liability to the maximum extent permitted by consumer law. Provide a 14-day cooling-off period if required.",
    "independent-contractor": "Structure the agreement for an independent contractor. Emphasize that no employer-employee relationship exists, the contractor controls their own work schedule, provides their own tools, pays their own taxes, and is not entitled to benefits. The contractor must maintain their own insurance.",
    "government-entity": "Structure the agreement for a government entity. Include compliance with public procurement regulations, FOIA disclosure exceptions, anti-corruption certifications, audit rights by the government, and sovereign immunity disclaimers. Use plain language for public accountability.",
    "non-profit-org": "Structure the agreement for a non-profit organization. Include compliance with 501(c)(3) restrictions, gift acceptance policies, donor confidentiality, board approval requirements, and limitation on private inurement. Use mission-aligned language.",
    "joint-venture": "Structure the agreement for a joint venture. Define governance via a steering committee, capital and resource contributions, IP ownership of JV outputs, profit sharing, exit strategies, and deadlock resolution. Both parties retain their separate legal identities.",
    "multiple-parties": "Structure the agreement for three or more parties. Define each party's roles and obligations separately, collective decision-making rules (majority vs unanimous), several (not joint) liability, notice provisions for multiple addresses, and amendement by all parties consent.",
    "educational-institution": "Structure the agreement for an educational institution. Include compliance with FERPA (student privacy), Title IX, academic freedom provisions, research IP ownership, grant compliance, and term aligned with academic calendar or fiscal year.",
  },
  clauses: {
    "ip-rights": "Include an IP Rights clause specifying that all work product, code, designs, and deliverables created under the agreement are the exclusive property of the client, with the contractor assigning all rights. For NDA contexts, specify that no IP license is granted by the disclosure of confidential information.",
    "late-payment-penalties": "Include a Late Payment Penalties clause charging 1.5% monthly interest (or maximum allowed by law) on overdue amounts. Add a flat late fee of $50 per late invoice and the right to suspend services after 15 days of non-payment. Interest accrues from the invoice due date.",
    "limited-revisions": "Include a Limited Revisions clause capping revisions to two rounds per deliverable. Revisions beyond the cap will be billed at the standard hourly rate. Specify that changes to the original scope require a new statement of work and separate fee arrangement.",
    "confidentiality": "Include a confidentiality clause defining what constitutes confidential information, exclusions (public knowledge, independently developed), obligations of the receiving party (reasonable care, restricted disclosure), duration of confidentiality obligations, and return of materials upon termination.",
    "non-compete": "Include a Non-Compete clause restricting the departing party from engaging in similar business within a defined geographic area for a specified period (e.g., 12 months). Must be reasonable in scope and duration to be enforceable. Include non-solicitation of clients and employees.",
    "force-majeure": "Include a Force Majeure clause excusing performance delays caused by events outside reasonable control: acts of God, war, terrorism, pandemic, government action, natural disasters. The affected party must give prompt notice and mitigate impacts. Performance resumes when the event ends.",
    "arbitration": "Include an Arbitration clause requiring all disputes to be resolved by binding arbitration under the rules of the chosen institution (AAA, JAMS, ICC). Specify number of arbitrators, venue (seat of arbitration), language, and the allocation of arbitration costs. Exclude class actions.",
    "indemnification": "Include an Indemnification clause where one party agrees to hold the other harmless from third-party claims arising from the indemnifying party's breach, IP infringement, or negligence. Cover defense costs, settlements, and judgments. Include a 'duty to defend' provision.",
  },
  tone: {
    "strict-binding": "Draft the document in a strict, formal legal tone using traditional legal terminology (whereas, henceforth, herein, notwithstanding). Use binding language such as 'shall', 'must', and 'covenants'. Minimize explanatory footnotes or plain-language summaries. Assume a legal audience.",
    "user-friendly": "Draft the document in a user-friendly, approachable tone using plain language. Replace 'hereinafter' with 'from now on'. Use short sentences, headings in question format ('What information do we collect?'), and include a plain-language summary at the top of each section.",
    "formal-neutral": "Draft in a formal but neutral tone that balances professionalism with readability. Use traditional legal structure but avoid archaic terms. Write in a measured, objective voice. Suitable for standard commercial agreements where neither party has disproportionate bargaining power.",
    "persuasive": "Draft in a persuasive tone that argues for the interests of the drafting party. Use strategic language choices that favor one party's position while remaining legally sound. Include unilateral rights, broad discretion, and favorable default positions. Flag areas for negotiation.",
    "technical": "Draft in a technical tone with precise, unambiguous language. Define all technical terms, use consistent terminology throughout, and include detailed specifications, performance standards, and measurable thresholds. Suitable for software, engineering, and scientific agreements.",
    "plain-language": "Draft in plain language designed for maximum accessibility. Follow clear writing principles: short sentences, active voice, everyday words. Use examples and illustrations. Test readability targeting a 6th–8th grade reading level. Suitable for consumer-facing documents.",
    "authoritative": "Draft in an authoritative tone that establishes clear hierarchies of rights and obligations. Use definitive language ('The Company reserves the right to...'), clear prohibitions ('No party shall...'), and unambiguous consequences. Suitable for policies and compliance documents.",
    "diplomatic": "Draft in a diplomatic tone suitable for negotiated or collaborative agreements. Use balanced language ('The parties agree to use reasonable efforts...'), mutual obligations, shared risk allocation, and consensus-based decision-making. Avoid unilateral terms. Encourage collaboration.",
  },
  jurisdiction: {
    "new-york": "Apply New York State law as the governing law. All disputes shall be resolved in the state or federal courts located in New York County. New York has well-developed commercial case law and is a preferred jurisdiction for financial and business contracts.",
    "delaware": "Apply Delaware law as the governing law. Delaware is the most common jurisdiction for corporate entities due to its sophisticated Court of Chancery, extensive corporate case law, and business-friendly legal framework. Specify venue in the Court of Chancery.",
    "california": "Apply California law as the governing law. California has strong consumer protection laws (including CCPA), robust employee protections, and unique contract interpretation rules. Be aware of California Civil Code sections that may override standard contract provisions.",
    "uk-england": "Apply the laws of England and Wales as the governing law. English common law is a global standard for international contracts, particularly in finance, insurance, and shipping. Specify the courts of London as the exclusive venue for disputes.",
    "singapore": "Apply Singapore law as the governing law. Singapore is a leading arbitration hub in Asia with a common law system, strong rule of law, and the Singapore International Commercial Court (SICC) for cross-border disputes. Specify SIAC arbitration rules ideally.",
    "hong-kong": "Apply Hong Kong law as the governing law. Hong Kong operates under a common law system with strong judicial independence. Specify the Hong Kong International Arbitration Centre (HKIAC) for dispute resolution. Note implications of cross-border enforcement with China.",
    "eu-framework": "Apply EU regulatory framework as the governing legal regime. Relevant for GDPR compliance, digital services regulation, and cross-border EU matters. Specify that disputes shall be resolved in the courts of the EU member state where the data subject is domiciled.",
    "international-icc": "Apply a neutral international framework under the ICC. No single national law governs; instead, the contract references general principles of international commercial law, UNIDROIT principles, or lex mercatoria. Disputes resolved via ICC arbitration in a neutral seat.",
  },
  dataHandling: {
    "gdpr-compliant": "Implement full GDPR compliance measures: lawful basis for processing (consent, legitimate interest, contract necessity), data subject access requests (DSARs) within 30 days, data breach notification within 72 hours, Data Protection Officer (DPO) appointment, and Data Processing Agreements (DPAs) with all sub-processors.",
    "ccpa-compliant": "Implement CCPA compliance: notice at collection, right to know categories of personal information collected, right to delete, right to opt-out of sale, financial incentive disclosures, and prohibitions on discrimination for exercising rights. Maintain a CCPA request log and verify consumer identities.",
    "minimal-collection": "Adopt a data minimization policy: collect only the personal data that is strictly necessary for the specified purpose. Do not collect sensitive data (biometric, health, political) unless essential. Conduct a Data Protection Impact Assessment (DPIA) for any new data collection initiative.",
    "encryption-required": "Mandate encryption for all data: AES-256 encryption at rest for stored data, TLS 1.3 for data in transit, end-to-end encryption for messaging features. Encryption keys must be managed through a Hardware Security Module (HSM) or equivalent secure key management system.",
    "third-party-restricted": "Restrict all third-party data sharing: no transfer to third parties without explicit prior written consent. All sub-processors must execute a Data Processing Agreement (DPA) with the same data protection obligations. Maintain a register of all third-party data recipients.",
    "data-retention-scheduled": "Define a data retention schedule: customer data retained for the duration of the agreement plus 90 days. Logs retained for 12 months. Financial records retained for 7 years (legal requirement). After the retention period, data must be securely deleted with a certificate of destruction.",
    "anonymization-policy": "Implement data anonymization: after the retention period, all personal data must be irreversibly anonymized using techniques such as aggregation, generalization, or perturbation. Anonymized data may be used for analytics and product improvement. Anonymization process must be documented and auditable.",
    "cross-border": "Establish cross-border transfer mechanisms: for EU data transfers, use Standard Contractual Clauses (SCCs) approved by the European Commission. For UK data transfers, use the International Data Transfer Agreement (IDTA). For APAC, consider APEC CBPR certification. Document Transfer Impact Assessments (TIAs).",
  },
  termination: {
    "standard-30-day": "Either party may terminate this agreement upon 30 days' prior written notice. During the notice period, both parties must fulfill all outstanding obligations. Any accrued rights and obligations survive termination. No termination fee applies unless otherwise specified in a fee schedule.",
    "immediate-breach": "Either party may terminate this agreement immediately upon written notice if the other party commits a material breach that is not capable of cure, or fails to cure a curable breach within 15 days of receiving written notice specifying the breach in reasonable detail.",
    "for-cause": "Termination for cause is permitted upon: (a) material breach after a 30-day cure period, (b) insolvency or bankruptcy filing, (c) breach of confidentiality or IP provisions, (d) violation of applicable law. The terminating party must provide detailed written notice describing the cause.",
    "without-cause": "Either party may terminate this agreement at any time, without cause, upon 60 days' prior written notice. No reason need be given. The party exercising this right is not liable for any termination-related damages, but remains liable for obligations accrued before the effective termination date.",
    "mutual-agreement": "This agreement may only be terminated by mutual written agreement of all parties. Any party wishing to terminate must propose terms in writing. If mutual agreement cannot be reached within 90 days, any party may initiate the dispute resolution process specified in this agreement.",
    "phased-transition": "Termination follows a three-phase transition: Phase 1 (30 days) — knowledge transfer and documentation, Phase 2 (30 days) — handover of systems and access, Phase 3 (30 days) — post-termination support and final reconciliation. Each phase has defined milestones and acceptance criteria.",
    "automatic-renewal": "This agreement shall automatically renew for successive one-year (or other mutually agreed) terms unless either party provides written notice of non-renewal at least 90 days before the end of the then-current term. Notice of non-renewal must be sent via certified mail and email.",
    "project-completion": "This agreement terminates automatically upon the final acceptance of all deliverables by the receiving party. Final acceptance occurs when the last deliverable is approved in writing. Post-termination, the provider delivers all project assets and a final invoice is due net 30.",
  },
  disputeResolution: {
    "arbitration-icc": "All disputes arising out of or in connection with this agreement shall be referred to and finally resolved by arbitration administered by the International Chamber of Commerce (ICC) in accordance with the ICC Rules. The tribunal shall consist of three arbitrators. The seat of arbitration shall be London. The language shall be English.",
    "mediation-first": "Before initiating any arbitration or litigation, the parties shall first attempt to resolve the dispute through mediation administered by JAMS or CPR Institute. The mediation shall be completed within 60 days. The mediator's fees shall be shared equally. If mediation fails, any party may pursue other remedies.",
    "court-litigation": "Any legal suit, action, or proceeding arising out of or relating to this agreement shall be instituted exclusively in the federal or state courts located in the governing jurisdiction. Each party consents to personal jurisdiction and venue in those courts. Service of process may be made by certified mail.",
    "expert-determination": "Disputes of a technical, accounting, or valuation nature shall be referred to an independent expert jointly appointed by the parties. If the parties cannot agree on an expert within 14 days, either party may request the ICC to appoint one. The expert's determination is final and binding on technical matters.",
    "negotiation-required": "Before commencing any formal dispute proceeding, senior executives of each party (with full settlement authority) shall meet in person or by video conference within 21 days of a written dispute notice and attempt in good faith to negotiate a resolution. Negotiations shall continue for at least 30 days.",
    "binding-arbitration": "All disputes shall be finally resolved by binding arbitration conducted by a single arbitrator under the rules of the American Arbitration Association (AAA). The arbitration shall take place virtually unless all parties agree otherwise. The arbitrator's award is final and binding and may be entered in any court having jurisdiction.",
    "online-dispute": "Disputes involving amounts under $50,000 shall be resolved through an online dispute resolution (ODR) platform certified by the relevant authority. The process is conducted entirely in writing via the platform. The ODR provider shall appoint a neutral evaluator. Decisions are binding and rendered within 45 days.",
    "escalation-ladder": "Disputes shall be resolved through a four-step escalation ladder: Step 1 — direct negotiation between the parties' representatives (10 days). Step 2 — escalation to senior management (15 days). Step 3 — mediation (30 days). Step 4 — binding arbitration or litigation if no resolution reached.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const document = selections.step1;
  const parties = selections.step2;
  const clauseIds: string[] = selections.step3 || [];
  const tone = selections.step4;
  const jurisdiction = selections.step5;
  const dataHandling = selections.step6;
  const termination = selections.step7;
  const disputeResolution = selections.step8;

  const lines: string[] = [];

  lines.push("# Legal Document Draft Builder");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const docLabel = Array.isArray(document) ? document.map(id => options.document.find(o => o.id === id)?.title || id).join(", ") : options.document.find(o => o.id === document)?.title || document;
  lines.push(`| Document Type | ${docLabel} | ${notes[`document-${document}`] || ""}`);
  const partyLabel = Array.isArray(parties) ? parties.map(id => options.parties.find(o => o.id === id)?.title || id).join(", ") : options.parties.find(o => o.id === parties)?.title || parties;
  lines.push(`| Involved Parties | ${partyLabel} | ${notes[`parties-${parties}`] || ""}`);
  const clauseLabels = clauseIds.map(id => options.clauses.find(o => o.id === id)?.title || id).join(", ");
  lines.push(`| Special Clauses | ${clauseLabels || "None"} | ${clauseIds.map(id => notes[`clauses-${id}`] || "").filter(Boolean).join("; ")}`);
  const toneLabel = Array.isArray(tone) ? tone.map(id => options.tone.find(o => o.id === id)?.title || id).join(", ") : options.tone.find(o => o.id === tone)?.title || tone;
  lines.push(`| Tone | ${toneLabel} | ${notes[`tone-${tone}`] || ""}`);
  const jurLabel = Array.isArray(jurisdiction) ? jurisdiction.map(id => options.jurisdiction.find(o => o.id === id)?.title || id).join(", ") : options.jurisdiction.find(o => o.id === jurisdiction)?.title || jurisdiction;
  lines.push(`| Jurisdiction | ${jurLabel} | ${notes[`jurisdiction-${jurisdiction}`] || ""}`);
  const dhLabel = Array.isArray(dataHandling) ? dataHandling.map(id => options.dataHandling.find(o => o.id === id)?.title || id).join(", ") : options.dataHandling.find(o => o.id === dataHandling)?.title || dataHandling;
  lines.push(`| Data Handling | ${dhLabel} | ${notes[`dataHandling-${dataHandling}`] || ""}`);
  const termLabel = Array.isArray(termination) ? termination.map(id => options.termination.find(o => o.id === id)?.title || id).join(", ") : options.termination.find(o => o.id === termination)?.title || termination;
  lines.push(`| Termination | ${termLabel} | ${notes[`termination-${termination}`] || ""}`);
  const drLabel = Array.isArray(disputeResolution) ? disputeResolution.map(id => options.disputeResolution.find(o => o.id === id)?.title || id).join(", ") : options.disputeResolution.find(o => o.id === disputeResolution)?.title || disputeResolution;
  lines.push(`| Dispute Resolution | ${drLabel} | ${notes[`disputeResolution-${disputeResolution}`] || ""}`);
  lines.push("");

  const sections: [string, string, string, string][] = [
    ["Document Type", docLabel, document, "document"],
    ["Involved Parties", partyLabel, parties, "parties"],
    ["Tone", toneLabel, tone, "tone"],
    ["Governing Law / Jurisdiction", jurLabel, jurisdiction, "jurisdiction"],
    ["Data Handling & Privacy", dhLabel, dataHandling, "dataHandling"],
    ["Termination Provisions", termLabel, termination, "termination"],
    ["Dispute Resolution", drLabel, disputeResolution, "disputeResolution"],
  ];

  for (const [heading, label, key, prefix] of sections) {
    lines.push(`## ${heading}: ${label}`);
    lines.push("");
    lines.push(Array.isArray(key) ? key.map(v => dict[prefix]?.[v] || v).join(", ") : dict[prefix]?.[key] || key);
    const note = notes[`${prefix}-${key}`] || "";
    if (note) lines.push(`> **Note:** ${note}`);
    lines.push("");
  }

  if (clauseIds.length > 0) {
    lines.push("## Special Clauses");
    lines.push("");
    for (const cId of clauseIds) {
      const label = options.clauses.find(o => o.id === cId)?.title || cId;
      lines.push("### " + label);
      lines.push("");
      lines.push(Array.isArray(cId) ? cId.map(v => dict.clauses[v] || v).join(", ") : dict.clauses[cId] || cId);
      const note = notes[`clauses-${cId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  lines.push("## Full Document Outline");
  lines.push("");
  lines.push("| # | Section | Description");
  lines.push("|---|---------|------------");
  lines.push("| 1 | **Title and Parties** | Full legal names, addresses, and definitions of the parties involved");
  lines.push("| 2 | **Recitals** | Background, context, and purpose of the agreement");
  lines.push("| 3 | **Definitions** | Key terms and their meanings throughout the document");
  lines.push("| 4 | **Scope / Subject Matter** | Core obligations and what is being agreed upon");
  lines.push("| 5 | **Payment & Fees** | Financial terms, schedule, and invoicing");
  lines.push("| 6 | **Data Handling** | Data collection, processing, storage, and protection measures");
  lines.push("| 7 | **Intellectual Property** | Ownership, licensing, and usage rights");
  lines.push("| 8 | **Representations & Warranties** | Mutual assurances of legal capacity and compliance");
  lines.push("| 9 | **Term & Termination** | Duration, termination rights, and post-termination obligations");
  lines.push("| 10 | **Confidentiality** | Treatment of confidential information and exclusions");
  lines.push("| 11 | **Limitation of Liability** | Caps, exclusions, and disclaimers of damages");
  lines.push("| 12 | **Indemnification** | Duty to defend and hold harmless");
  lines.push("| 13 | **Force Majeure** | Relief from performance due to unforeseen events");
  lines.push("| 14 | **Governing Law & Jurisdiction** | Law and venue for disputes");
  lines.push("| 15 | **Dispute Resolution** | Method for resolving disagreements");
  lines.push("| 16 | **General Provisions** | Severability, waiver, entire agreement, amendments, notices");
  lines.push("| 17 | **Signature Blocks** | Execution lines for all parties with date and title");
  lines.push("");

  lines.push("## Key Legal Considerations");
  lines.push("");
  lines.push(`- **Governing Law**: ${jurLabel} — dictates how the agreement is interpreted and enforced.`);
  lines.push(`- **Dispute Resolution**: ${drLabel} — determines how disagreements will be handled.`);
  lines.push(`- **Data Protection**: ${dhLabel} — governs how personal and business data is managed.`);
  lines.push("- **Severability**: If one clause is invalid, the rest of the agreement remains enforceable.");
  lines.push("- **Entire Agreement**: The document supersedes all prior discussions and agreements.");
  lines.push("- **Amendments**: Any changes must be made in writing and signed by all parties.");
  lines.push("- **Waiver**: Failure to enforce a right does not constitute a waiver of that right.");
  lines.push("- **Third-Party Rights**: No third party has rights under this agreement unless explicitly stated.");
  lines.push("");

  lines.push("## Compliance Checklist");
  lines.push("");
  lines.push("- [ ] All party names and addresses are correct and complete");
  lines.push("- [ ] Effective date and termination date are clearly stated");
  lines.push("- [ ] Definitions are consistent throughout the document");
  lines.push("- [ ] Signature blocks are present for all parties");
  lines.push("- [ ] Counterpart clause allows electronic signatures");
  lines.push("- [ ] Notice addresses are current and accurate");
  lines.push("- [ ] Governing law and jurisdiction match business operations");
  lines.push("- [ ] Data handling provisions comply with applicable privacy laws");
  lines.push("- [ ] Termination rights are balanced and enforceable");
  lines.push("- [ ] Dispute resolution process is clearly defined");
  lines.push("- [ ] Limitation of liability is commercially reasonable");
  lines.push("- [ ] All exhibits and schedules are attached and referenced");
  lines.push("");

  lines.push("## Drafting Recommendations");
  lines.push("");
  lines.push("- Review for internal consistency — terms defined in Section 3 must be used uniformly.");
  lines.push("- Avoid conflicting clauses — check that special clauses do not contradict the main body.");
  lines.push(`- Keep the tone "${toneLabel}" consistent throughout; do not mix styles.`);
  lines.push("- Have the document reviewed by a qualified attorney in the relevant jurisdiction.");
  lines.push("- Store the signed document securely and provide copies to all parties.");
  lines.push("- Use version control for drafts and track changes during negotiation.");
  lines.push("- Consider local language requirements if parties are in different countries.");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Legal Document Draft Builder_");

  return lines.join("\n");
}

export default function LegalDraftPage() {
  return (
    <ToolShell
      title="Legal Document Draft Builder"
      steps={[
        { id: 1, label: "Document", component: (p) => (
          <GenericStep {...p} title="Select Document Type" description="What legal document do you need?" options={options.document} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="document" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Parties", component: (p) => (
          <GenericStep {...p} title="Select Involved Parties" description="Who are the parties in this agreement?" options={options.parties} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="parties" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Clauses", component: (p) => (
          <GenericStep {...p} title="Select Special Clauses" description="What additional clauses should be included?" options={options.clauses} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="clauses" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Tone", component: (p) => (
          <GenericStep {...p} title="Select Tone" description="How should the document be written?" options={options.tone} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="tone" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Jurisdiction", component: (p) => (
          <GenericStep {...p} title="Select Governing Law / Jurisdiction" description="Which laws govern this agreement?" options={options.jurisdiction} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="jurisdiction" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Data", component: (p) => (
          <GenericStep {...p} title="Select Data Handling Policy" description="How should data be managed and protected?" options={options.dataHandling} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="dataHandling" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Termination", component: (p) => (
          <GenericStep {...p} title="Select Termination Provisions" description="How can this agreement be ended?" options={options.termination} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="termination" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Disputes", component: (p) => (
          <GenericStep {...p} title="Select Dispute Resolution" description="How should disputes be resolved?" options={options.disputeResolution} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="disputeResolution" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}









