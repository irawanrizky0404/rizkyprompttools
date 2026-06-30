"use client";

import type { FC } from "react";
import {
  Globe, Type, Hash, MessageSquare, Shield,
  Braces, FileJson, FileText, Code, Box, Download,
  Link, ArrowLeftRight, Layers, Filter, Split, GitBranch,
  BookOpen, Terminal, Database, Zap, Star,
  Sliders, Activity, Clock, Check, List, Server,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  locales: [
    { id: "en-US", title: "English (US)", description: "American English locale", icon: Globe },
    { id: "en-GB", title: "English (UK)", description: "British English locale", icon: Globe },
    { id: "zh-CN", title: "Chinese (Simplified)", description: "Simplified Chinese locale", icon: Globe },
    { id: "zh-TW", title: "Chinese (Traditional)", description: "Traditional Chinese locale", icon: Globe },
    { id: "ja-JP", title: "Japanese", description: "Japanese locale", icon: Globe },
    { id: "ko-KR", title: "Korean", description: "Korean locale", icon: Globe },
    { id: "fr-FR", title: "French", description: "French locale", icon: Globe },
    { id: "de-DE", title: "German", description: "German locale", icon: Globe },
    { id: "es-ES", title: "Spanish", description: "Spanish locale", icon: Globe },
    { id: "pt-BR", title: "Portuguese (Brazil)", description: "Brazilian Portuguese locale", icon: Globe },
    { id: "ar-SA", title: "Arabic", description: "Arabic locale (RTL)", icon: Globe },
    { id: "hi-IN", title: "Hindi", description: "Hindi locale", icon: Globe },
  ],
  stringType: [
    { id: "ui-label", title: "UI Labels", description: "Button text, headings, and navigation labels", icon: Type },
    { id: "message", title: "Messages", description: "Success, error, and info notification messages", icon: MessageSquare },
    { id: "tooltip", title: "Tooltips", description: "Hover hints and helper text", icon: BookOpen },
    { id: "placeholder", title: "Placeholders", description: "Input placeholder and hint text", icon: Terminal },
    { id: "validation", title: "Validation Messages", description: "Form validation error and success messages", icon: Shield },
    { id: "accessibility", title: "Accessibility Labels", description: "ARIA labels and screen reader text", icon: Star },
    { id: "content", title: "Content Strings", description: "Descriptive paragraphs and body text", icon: FileText },
    { id: "error-boundary", title: "Error Boundary", description: "Fallback UI and error boundary messages", icon: Box },
  ],
  pluralization: [
    { id: "zero-one-other", title: "Zero/One/Other", description: "Zero, one, and many forms", icon: Hash },
    { id: "one-other", title: "One/Other", description: "Simple singular vs plural", icon: ArrowLeftRight },
    { id: "multiple-forms", title: "Multiple Forms", description: "One, few, many, other (Slavic rules)", icon: Layers },
    { id: "ordinal", title: "Ordinal", description: "1st, 2nd, 3rd ordinal formatting", icon: List },
    { id: "range", title: "Range Plurals", description: "Ranges like [1-5 items], [6+ items]", icon: Sliders },
    { id: "exact-count", title: "Exact Count", description: "Specific number expressions", icon: Hash },
    { id: "fractional", title: "Fractional", description: "Decimal quantity expressions 0.5 items", icon: Split },
    { id: "none-plural", title: "No Pluralization", description: "Single form for all counts", icon: ArrowLeftRight },
  ],
  formatting: [
    { id: "date-format", title: "Date Formatting", description: "Date and time display patterns", icon: Clock },
    { id: "number-format", title: "Number Formatting", description: "Decimal, thousand, and currency format", icon: Hash },
    { id: "currency-format", title: "Currency Formatting", description: "Locale-aware currency display", icon: FileJson },
    { id: "percentage", title: "Percentage", description: "Percentage display with locale rules", icon: FileText },
    { id: "unit-format", title: "Unit Formatting", description: "Distance, weight, volume unit display", icon: Box },
    { id: "list-format", title: "List Formatting", description: "Conjunction/disjunction list formatting", icon: List },
    { id: "relative-time", title: "Relative Time", description: "2 days ago, in 3 hours format", icon: Clock },
    { id: "text-case", title: "Text Case", description: "Uppercase, lowercase, title case transforms", icon: Type },
  ],
  contextHints: [
    { id: "description", title: "Description Hints", description: "Describe where the string appears", icon: FileText },
    { id: "max-length", title: "Max Length Hint", description: "Character limit annotation for translators", icon: Sliders },
    { id: "placeholder-ctx", title: "Placeholder Context", description: "Explain what placeholders mean", icon: Terminal },
    { id: "gender-ctx", title: "Gender Context", description: "Gender-specific translation instructions", icon: ArrowLeftRight },
    { id: "formal-informal", title: "Formal vs Informal", description: "Tone and formality level guidance", icon: Star },
    { id: "screen-location", title: "Screen Location", description: "Where on the UI the string appears", icon: Globe },
    { id: "character-restrict", title: "Character Restriction", description: "Alphanumeric or symbol restrictions", icon: Shield },
    { id: "cultural-note", title: "Cultural Notes", description: "Cultural sensitivity and idiom warnings", icon: BookOpen },
  ],
  fallback: [
    { id: "key-fallback", title: "Key as Fallback", description: "Show the string key when translation is missing", icon: Code },
    { id: "locale-chain", title: "Locale Chain", description: "en-US -> en -> root fallback chain", icon: Globe },
    { id: "default-string", title: "Default String", description: "Developer-defined default fallback text", icon: Type },
    { id: "empty-fallback", title: "Empty Fallback", description: "Return empty string for missing translations", icon: Box },
    { id: "parent-locale", title: "Parent Locale Fallback", description: "es-MX falls back to es-ES then en", icon: Layers },
    { id: "namespace-fallback", title: "Namespace Fallback", description: "Fall back within same namespace first", icon: FileJson },
    { id: "missing-warning", title: "Warn on Missing", description: "Log warning for missing keys in development", icon: Activity },
    { id: "reporting", title: "Missing Report", description: "Collect and report all missing translations", icon: Database },
  ],
  interpolation: [
    { id: "mustache", title: "Mustache {{var}}", description: "Double curly brace interpolation", icon: Braces },
    { id: "placeholder-num", title: "Numeric {0} {1}", description: "Positional numeric placeholders", icon: Hash },
    { id: "named-placeholder", title: "Named {name}", description: "Named variable placeholders", icon: Type },
    { id: "react-jsx", title: "React JSX Element", description: "Inline JSX component interpolation", icon: Code },
    { id: "markdown", title: "Markdown Inline", description: "Markdown formatting inside strings", icon: FileText },
    { id: "html-safe", title: "HTML Safe HTML", description: "Render raw HTML with sanitization", icon: Globe },
    { id: "rich-text", title: "Rich Text Tags", description: "Custom rich text tag interpolation", icon: Box },
    { id: "conditional", title: "Conditional Interpolation", description: "Conditional content within strings", icon: Split },
  ],
  exportFormat: [
    { id: "json-nested", title: "JSON (Nested)", description: "Nested JSON object per locale", icon: FileJson },
    { id: "json-flat", title: "JSON (Flat Keys)", description: "Flat key-value JSON per locale", icon: Code },
    { id: "yaml", title: "YAML", description: "YAML format with comments support", icon: FileText },
    { id: "po", title: "PO / POT", description: "GNU gettext PO file format", icon: BookOpen },
    { id: "xliff", title: "XLIFF 1.2", description: "XML-based translation exchange format", icon: FileJson },
    { id: "csv", title: "CSV", description: "Comma-separated values for spreadsheets", icon: Terminal },
    { id: "typescript", title: "TypeScript Constants", description: "Typed TypeScript constant exports", icon: Code },
    { id: "icu-messages", title: "ICU Message Format", description: "ICU MessageFormat strings", icon: MessageSquare },
  ],
};
const dict: Record<string, Record<string, string>> = {
  locales: {
    "en-US": "Set English (United States) as a primary or supported locale. Use US date formats (MM/DD/YYYY), imperial units, and American English spelling conventions throughout the translation files.",
    "en-GB": "Set English (United Kingdom) as a supported locale. Use UK date formats (DD/MM/YYYY), metric units, and British English spelling (colour, centre, organisation) in translations.",
    "zh-CN": "Set Simplified Chinese as a supported locale. Use simplified Chinese characters, appropriate date formats (YYYY-MM-DD), and number grouping conventions.",
    "zh-TW": "Set Traditional Chinese as a supported locale. Use traditional Chinese characters as used in Taiwan, with regional date conventions and numbering systems.",
    "ja-JP": "Set Japanese as a supported locale. Use Japanese date format, appropriate honorific levels, and Japanese-specific number grouping conventions.",
    "ko-KR": "Set Korean as a supported locale. Use Korean date formats, subject-object-verb sentence structure in translations, and Korean honorific system.",
    "fr-FR": "Set French (France) as a supported locale. Use French date (DD/MM/YYYY), number formatting, and gendered noun agreement in translations.",
    "de-DE": "Set German (Germany) as a supported locale. Use German date (DD.MM.YYYY), capitalization rules for nouns, and appropriate formal/informal forms.",
    "es-ES": "Set Spanish (Spain) as a supported locale. Use Spanish date formats and appropriate formality levels.",
    "pt-BR": "Set Portuguese (Brazil) as a supported locale. Use Brazilian date (DD/MM/YYYY), Brazilian number conventions, and the voce form for second person.",
    "ar-SA": "Set Arabic (Saudi Arabia) as a supported locale with RTL layout support. Use Arabic-Indic digits and right-aligned UI adjustments.",
    "hi-IN": "Set Hindi (India) as a supported locale. Use Hindi script (Devanagari), Indian number grouping, and appropriate formality levels.",
  },
  stringType: {
    "ui-label": "Define UI label strings for buttons, navigation items, section headings, tabs, and action labels. Keep labels concise under 50 characters and use sentence case or title case consistently.",
    message: "Define message strings for toast notifications, alerts, success confirmations, error banners, and info prompts. Include severity context so translators understand the tone.",
    tooltip: "Define tooltip strings that appear on hover or focus. Keep under 200 characters. Provide context about the associated UI element and when the tooltip should be displayed.",
    placeholder: "Define placeholder text for input fields, search bars, dropdown hints, and textarea prompts. Indicate expected input format so translators can provide appropriate examples.",
    validation: "Define validation error and success messages for form fields. Include information about the validation rule so translators can craft clear, actionable messages.",
    accessibility: "Define accessibility labels for screen readers, ARIA descriptions, alt text for images, and skip navigation links. Critical for WCAG accessibility compliance.",
    content: "Define longer content strings for descriptive text, help articles, onboarding copy, empty states, and legal disclaimers. May include markdown formatting and multiple paragraphs.",
    "error-boundary": "Define fallback strings for error boundaries, 404 pages, offline states, and crash recovery screens. Keep messages friendly and actionable even in failure scenarios.",
  },
  pluralization: {
    "zero-one-other": "Implement CLDR plural rule with zero, one, and other forms. Used by Arabic and some other languages. Example: zero: No items found, one: 1 item found, other: {count} items found.",
    "one-other": "Implement CLDR plural rule with one and other forms. Used by English, German, Dutch, and many other languages. Example: one: 1 item, other: {count} items.",
    "multiple-forms": "Implement CLDR plural rules with one, few, many, and other forms. Used by Slavic languages like Russian, Polish, Czech. Each number category uses a different translation.",
    ordinal: "Implement ordinal pluralization rules for 1st, 2nd, 3rd, nth. Different languages have different ordinal rules. Example English: one: 1st, two: 2nd, few: 3rd, other: {n}th.",
    range: "Implement range-based pluralization where different messages are shown for different count ranges. Example: 0: No items, 1-5: A few items, 6+: Many items.",
    "exact-count": "Implement exact-count pluralization where specific numbers get unique forms. Used in Arabic and Celtic languages. Example: 1: one item, 2: two items, other: {count} items.",
    fractional: "Implement fractional pluralization for decimal quantities. Different languages handle decimals differently. Best practice: treat all fractional values as other category.",
    "none-plural": "Use a single form for all quantities. No pluralization rules applied. Best for languages or contexts where the same string works regardless of count.",
  },
  formatting: {
    "date-format": "Configure locale-aware date formatting using Intl.DateTimeFormat. Support short, medium, long, and full date patterns. Each locale has inherent date formatting conventions.",
    "number-format": "Configure locale-aware number formatting using Intl.NumberFormat. Support decimal precision, grouping separators, and sign display. Different locales use different separators.",
    "currency-format": "Configure locale-aware currency display with ISO 4217 currency codes. Support symbol placement, decimal precision, and formatting. Position of currency symbol varies by locale.",
    percentage: "Configure locale-aware percentage display. Support decimal precision and sign placement. Locale determines separator and symbol position.",
    "unit-format": "Configure locale-aware unit formatting for measurement units. Use Intl.NumberFormat with unit option. Locale determines unit naming and formatting patterns.",
    "list-format": "Configure locale-aware list joining using Intl.ListFormat. Support conjunction, disjunction, and unit styles. Language-specific list rules apply for commas and conjunctions.",
    "relative-time": "Configure relative time formatting using Intl.RelativeTimeFormat. Support past and future relative times across all standard time units.",
    "text-case": "Configure locale-aware text case transformations. Use toLocaleUpperCase and toLocaleLowerCase for language-specific case mapping.",
  },
  contextHints: {
    description: "Add a description hint to each translation key explaining where and how the string is used. Helps translators provide accurate and contextually appropriate translations.",
    "max-length": "Add a max length annotation indicating the maximum character count the UI can accommodate. Translators can adjust translations to fit within the available space.",
    "placeholder-ctx": "Document placeholder variables in the string with type and example values. Ensures translators handle variables correctly and understand what they represent.",
    "gender-ctx": "Add gender context annotations for languages with grammatical gender. Indicate whether the subject is male, female, or neutral for correct adjective and article agreement.",
    "formal-informal": "Add formality level annotations for languages with T-V distinction. Specify the expected social context and audience for appropriate formality level selection.",
    "screen-location": "Add screen location annotations describing exactly where the string appears in the UI. Gives translators full visual context of the string usage.",
    "character-restrict": "Add character restriction annotations for strings that must use only specific character sets. Critical for URLs, slugs, and technical identifier strings.",
    "cultural-note": "Add cultural sensitivity notes for idioms, metaphors, humor, or culturally specific references. Guidance for adapting culturally bound expressions appropriately.",
  },
  fallback: {
    "key-fallback": "Configure fallback to display the translation key itself when no translation is found. Useful during development to identify missing translations in the UI.",
    "locale-chain": "Configure a fallback chain: en-US to en to root. Each level checks progressively broader locale until a match is found. Prevents missing strings for unspecific locales.",
    "default-string": "Configure fallback to a developer-defined default string specified in the source code. The default is used when no translation exists in any locale.",
    "empty-fallback": "Configure fallback to return an empty string for missing translations. The UI element renders with no text. Use with caution as it may appear broken.",
    "parent-locale": "Configure parent locale fallback where region-specific locales fall back to their base language. Reduces translation duplication for regional variants.",
    "namespace-fallback": "Configure namespace-level fallback where missing keys fall back within the same namespace first, then to the global namespace. Useful for modular translation files.",
    "missing-warning": "Configure development-mode warnings that log missing translation keys to the console. Helps catch missing translations during development before production release.",
    reporting: "Configure a reporting system that collects all missing translation keys across locales. Generate reports with key counts and missing locales for translation management.",
  },
  interpolation: {
    mustache: "Use double curly brace {{variable}} interpolation syntax. Variables are HTML-escaped by default. Use triple braces {{{html}}} for raw HTML in translation strings.",
    "placeholder-num": "Use numeric positional placeholders {0}, {1}, {2} for variable substitution. Arguments are passed as an array and substituted in positional order.",
    "named-placeholder": "Use named placeholders {name}, {count}, {date} for descriptive variable substitution. Variables are passed as an object with matching key names.",
    "react-jsx": "Use React JSX component interpolation where React components can be embedded within translation strings. Components retain their interactive behavior and styling.",
    markdown: "Use markdown interpolation where translation strings can contain basic markdown formatting: bold, italic, links, lists, and code blocks. Render with a markdown parser.",
    "html-safe": "Use HTML-safe interpolation where HTML tags within translations are rendered after sanitization. Strip dangerous tags using a sanitizer like DOMPurify for security.",
    "rich-text": "Use custom rich text tag interpolation with user-defined tag handlers. Tags like <bold> or <highlight> are replaced by React components at runtime.",
    conditional: "Use conditional interpolation with if/else logic within strings. Supports select and plural ICU-style conditions for context-dependent content in translations.",
  },
  exportFormat: {
    "json-nested": "Export translations as nested JSON objects where keys mirror the component or feature hierarchy. One file per locale with a nested key structure.",
    "json-flat": "Export translations as flat key-value JSON where keys use dot notation for hierarchy. Easier to parse for simple tooling and script-based translation workflows.",
    yaml: "Export translations as YAML files with support for comments, multiline strings, and anchors. More human-readable for translators working directly with files.",
    po: "Export translations as GNU gettext PO files with msgid and msgstr pairs. Support plural forms and translator comments. Standard format for open-source tooling.",
    xliff: "Export translations as XLIFF 1.2 XML format, the standard interchange format for professional translation tools. Includes source, target, and notes per unit.",
    csv: "Export translations as CSV with columns for key, source, translation, and notes. Easy to open in spreadsheet apps for bulk translation by non-technical translators.",
    typescript: "Export translations as typed TypeScript constants with readonly types. Generate type definitions from keys for compile-time safety and IDE autocompletion.",
    "icu-messages": "Export translations as ICU MessageFormat strings supporting pluralization, select, and complex grammar. Parse with formatjs libraries for runtime rendering.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const locales: string[] = selections.step1 || [];
  const stringType = selections.step2;
  const pluralization = selections.step3;
  const formatting: string[] = selections.step4 || [];
  const contextHints: string[] = selections.step5 || [];
  const fallback = selections.step6;
  const interpolation = selections.step7;
  const exportFormat = selections.step8;

  const lines: string[] = [];

  lines.push("# i18n String Management Configuration");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const loLabels = locales.map(id => options.locales.find(o => o.id === id)?.title || id).join(", ");
  const loNotes = locales.map(id => notes[`locales-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Supported Locales | ${loLabels || "None"} | ${loNotes}`);
  const stLabel = Array.isArray(stringType) ? stringType.map(id => options.stringType.find(o => o.id === id)?.title || id).join(", ") : options.stringType.find(o => o.id === stringType)?.title || stringType;
  const stNote = notes[`stringType-${stringType}`] || "";
  lines.push(`| String Type | ${stLabel} | ${stNote}`);
  const plLabel = Array.isArray(pluralization) ? pluralization.map(id => options.pluralization.find(o => o.id === id)?.title || id).join(", ") : options.pluralization.find(o => o.id === pluralization)?.title || pluralization;
  const plNote = notes[`pluralization-${pluralization}`] || "";
  lines.push(`| Pluralization | ${plLabel} | ${plNote}`);
  const fmLabels = formatting.map(id => options.formatting.find(o => o.id === id)?.title || id).join(", ");
  const fmNotes = formatting.map(id => notes[`formatting-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Formatting | ${fmLabels || "None"} | ${fmNotes}`);
  const chLabels = contextHints.map(id => options.contextHints.find(o => o.id === id)?.title || id).join(", ");
  const chNotes = contextHints.map(id => notes[`contextHints-${id}`] || "").filter(Boolean).join("; ");
  lines.push(`| Context Hints | ${chLabels || "None"} | ${chNotes}`);
  const fbLabel = Array.isArray(fallback) ? fallback.map(id => options.fallback.find(o => o.id === id)?.title || id).join(", ") : options.fallback.find(o => o.id === fallback)?.title || fallback;
  const fbNote = notes[`fallback-${fallback}`] || "";
  lines.push(`| Fallback Strategy | ${fbLabel} | ${fbNote}`);
  const ipLabel = Array.isArray(interpolation) ? interpolation.map(id => options.interpolation.find(o => o.id === id)?.title || id).join(", ") : options.interpolation.find(o => o.id === interpolation)?.title || interpolation;
  const ipNote = notes[`interpolation-${interpolation}`] || "";
  lines.push(`| Interpolation | ${ipLabel} | ${ipNote}`);
  const efLabel = Array.isArray(exportFormat) ? exportFormat.map(id => options.exportFormat.find(o => o.id === id)?.title || id).join(", ") : options.exportFormat.find(o => o.id === exportFormat)?.title || exportFormat;
  const efNote = notes[`exportFormat-${exportFormat}`] || "";
  lines.push(`| Export Format | ${efLabel} | ${efNote}`);
  lines.push("");

  lines.push("## Locale Configuration");
  lines.push("");
  for (const lId of locales) {
    const label = options.locales.find(o => o.id === lId)?.title || lId;
    lines.push(`### ${label}`);
    lines.push("");
    lines.push(dict.locales[lId] || "");
    const note = notes[`locales-${lId}`] || "";
    if (note) lines.push(`> **Note:** ${note}`);
    lines.push("");
  }

  if (stringType) {
    lines.push("## String Type: " + stLabel);
    lines.push("");
    lines.push(Array.isArray(stringType) ? stringType.map(v => dict.stringType[v] || v).join(", ") : dict.stringType[stringType] || stringType);
    if (stNote) lines.push(`> **Note:** ${stNote}`);
    lines.push("");
  }

  if (pluralization) {
    lines.push("## Pluralization: " + plLabel);
    lines.push("");
    lines.push(Array.isArray(pluralization) ? pluralization.map(v => dict.pluralization[v] || v).join(", ") : dict.pluralization[pluralization] || pluralization);
    if (plNote) lines.push(`> **Note:** ${plNote}`);
    lines.push("");
  }

  if (formatting.length > 0) {
    lines.push("## Formatting Options");
    lines.push("");
    for (const fId of formatting) {
      const label = options.formatting.find(o => o.id === fId)?.title || fId;
      lines.push(`### ${label}`);
      lines.push("");
      lines.push(dict.formatting[fId] || "");
      const note = notes[`formatting-${fId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (contextHints.length > 0) {
    lines.push("## Context Hints");
    lines.push("");
    for (const cId of contextHints) {
      const label = options.contextHints.find(o => o.id === cId)?.title || cId;
      lines.push(`### ${label}`);
      lines.push("");
      lines.push(dict.contextHints[cId] || "");
      const note = notes[`contextHints-${cId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  if (fallback) {
    lines.push("## Fallback Strategy: " + fbLabel);
    lines.push("");
    lines.push(Array.isArray(fallback) ? fallback.map(v => dict.fallback[v] || v).join(", ") : dict.fallback[fallback] || fallback);
    if (fbNote) lines.push(`> **Note:** ${fbNote}`);
    lines.push("");
  }

  if (interpolation) {
    lines.push("## Interpolation: " + ipLabel);
    lines.push("");
    lines.push(Array.isArray(interpolation) ? interpolation.map(v => dict.interpolation[v] || v).join(", ") : dict.interpolation[interpolation] || interpolation);
    if (ipNote) lines.push(`> **Note:** ${ipNote}`);
    lines.push("");
  }

  if (exportFormat) {
    lines.push("## Export Format: " + efLabel);
    lines.push("");
    lines.push(Array.isArray(exportFormat) ? exportFormat.map(v => dict.exportFormat[v] || v).join(", ") : dict.exportFormat[exportFormat] || exportFormat);
    if (efNote) lines.push(`> **Note:** ${efNote}`);
    lines.push("");
  }

  lines.push("## Translation File Structure");
  lines.push("");
  if (exportFormat === "json-nested") {
    lines.push("```");
    lines.push("locales/");
    lines.push("  en-US.json");
    lines.push("  zh-CN.json");
    lines.push("  fr-FR.json");
    lines.push("```");
  } else if (exportFormat === "json-flat") {
    lines.push("```");
    lines.push("locales/");
    lines.push("  en-US.json");
    lines.push("  de-DE.json");
    lines.push("```");
  } else if (exportFormat === "yaml") {
    lines.push("```");
    lines.push("locales/");
    lines.push("  en-US.yml");
    lines.push("  ja-JP.yml");
    lines.push("```");
  } else if (exportFormat === "po") {
    lines.push("```");
    lines.push("locales/");
    lines.push("  en-US.po");
    lines.push("  fr-FR.po");
    lines.push("```");
  } else if (exportFormat === "xliff") {
    lines.push("```");
    lines.push("locales/");
    lines.push("  messages-en.xlf");
    lines.push("  messages-fr.xlf");
    lines.push("```");
  } else if (exportFormat === "csv") {
    lines.push("```");
    lines.push("translations.csv");
    lines.push("```");
  } else {
    lines.push("```");
    lines.push("locales/");
    lines.push("  en-US.ts");
    lines.push("  zh-CN.ts");
    lines.push("```");
  }
  lines.push("");

  lines.push("## Sample Translation");
  lines.push("");
  const sampleLang = locales.length > 0 ? options.locales.find(o => o.id === locales[0])?.title || locales[0] : "en-US";
  lines.push(`### ${sampleLang} Translation File`);
  lines.push("");
  lines.push("```json");
  lines.push("{");
  lines.push('  "app.title": "My Application",');
  lines.push('  "nav.home": "Home",');
  lines.push('  "nav.settings": "Settings",');
  lines.push('  "nav.profile": "Profile",');
  lines.push('  "button.submit": "Submit",');
  lines.push('  "button.cancel": "Cancel",');
  lines.push('  "message.welcome": "Welcome back, {username}!",');
  if (pluralization !== "none-plural") {
    lines.push('  "item.count": "{count} item(s)",');
    lines.push('  "item.count_plural": "{count} items",');
  }
  lines.push('  "error.required": "This field is required",');
  lines.push('  "error.email": "Please enter a valid email address",');
  lines.push('  "empty.state": "No items found",');
  lines.push('  "footer.copyright": "2026 My Company. All rights reserved."');
  lines.push("}");
  lines.push("```");
  lines.push("");

  lines.push("## Implementation Guidelines");
  lines.push("");
  lines.push("- Use a standard i18n library (react-intl, i18next, formattingjs) for runtime string resolution.");
  lines.push("- Load only the active locale's translation file to minimize bundle size.");
  lines.push("- Use namespaced keys (feature.key) for modular translation organization.");
  lines.push("- Implement lazy loading for translation files to reduce initial page load.");
  lines.push("- Generate TypeScript types from translation keys for compile-time safety.");
  lines.push("- Set up automated translation extraction from source code comments.");
  lines.push("");

  lines.push("## Translation Workflow");
  lines.push("");
  lines.push("1. Extract all translatable strings from source code using a babel plugin or scanner.");
  lines.push("2. Generate the base locale file (en-US) with all extracted keys and default values.");
  lines.push("3. Upload base file to translation management platform (Crowdin, Lokalise, POEditor).");
  lines.push("4. Translators provide translations for each target locale.");
  lines.push("5. Download completed translation files and integrate into the build pipeline.");
  lines.push("6. Validate translations with automated checks for placeholder mismatches and length limits.");
  lines.push("");

  lines.push("## Best Practices");
  lines.push("");
  lines.push("- Always include context hints for translators to ensure accurate translations.");
  lines.push("- Use message IDs (keys) that describe the string purpose, not the content.");
  lines.push("- Avoid string concatenation in code; use interpolation with named placeholders.");
  lines.push("- Keep translation files in sync with a CI check that flags missing translations.");
  lines.push("- Set up a fallback strategy to prevent empty UI elements.");
  lines.push("- Consider RTL layout adjustments for Arabic, Hebrew, and Persian locales.");
  lines.push("- Test translations in context within the UI, not just as isolated strings.");
  lines.push("");

  lines.push("## Locale-Specific Considerations");
  lines.push("");
  lines.push("| Locale | Direction | Date Format | Number Format");
  lines.push("|--------|-----------|-------------|--------------");
  for (const lId of locales) {
    const label = options.locales.find(o => o.id === lId)?.title || lId;
    const dir = ["ar-SA"].includes(lId) ? "RTL" : "LTR";
    lines.push(`| ${label} | ${dir} | Locale-dependent | Locale-dependent`);
  }
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by i18n String Manager_");

  return lines.join("\n");
}

export default function I18nStringsPage() {
  return (
    <ToolShell
      title="i18n String Manager"
      steps={[
        { id: 1, label: "Locales", component: (p) => (
          <GenericStep {...p} title="Supported Locales" description="Which locales do you need to support?" options={options.locales} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="locales" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Type", component: (p) => (
          <GenericStep {...p} title="String Type" description="What type of strings are you managing?" options={options.stringType} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="stringType" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Plural", component: (p) => (
          <GenericStep {...p} title="Pluralization Rules" description="How should plural forms be handled?" options={options.pluralization} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="pluralization" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Format", component: (p) => (
          <GenericStep {...p} title="Formatting Options" description="What formatting capabilities are needed?" options={options.formatting} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="formatting" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Context", component: (p) => (
          <GenericStep {...p} title="Context Hints" description="What context should be provided to translators?" options={options.contextHints} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="contextHints" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Fallback", component: (p) => (
          <GenericStep {...p} title="Fallback Strategy" description="How should missing translations be handled?" options={options.fallback} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="fallback" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Interpolate", component: (p) => (
          <GenericStep {...p} title="Interpolation Syntax" description="How are variables embedded in strings?" options={options.interpolation} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="interpolation" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Export", component: (p) => (
          <GenericStep {...p} title="Export Format" description="What format should translations be exported as?" options={options.exportFormat} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="exportFormat" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}













