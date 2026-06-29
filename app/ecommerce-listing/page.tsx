"use client";

import type { FC } from "react";
import { Globe, ShoppingBag, Camera, Store, Shirt, Cpu, Sparkles, Utensils, Tag, Heart, Crown, List, BookOpen, HelpCircle, Shield } from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  platform: [
    { id: "shopify", title: "Shopify Website", description: "Standalone e-commerce store on Shopify", icon: Globe },
    { id: "amazon", title: "Amazon", description: "Product listing on Amazon marketplace", icon: ShoppingBag },
    { id: "instagram-shop", title: "Instagram Shop", description: "Social commerce via Instagram product catalog", icon: Camera },
    { id: "local-marketplace", title: "Local Marketplace", description: "Regional platform like Tokopedia, Shopee, etc.", icon: Store },
  ],
  category: [
    { id: "fashion", title: "Fashion", description: "Clothing, accessories, shoes, and apparel", icon: Shirt },
    { id: "electronics", title: "Electronics", description: "Gadgets, devices, and tech accessories", icon: Cpu },
    { id: "skincare-beauty", title: "Skincare and Beauty", description: "Cosmetics, skincare routines, and beauty tools", icon: Sparkles },
    { id: "food-beverage", title: "Food and Beverage", description: "Packaged food, drinks, and gourmet products", icon: Utensils },
  ],
  style: [
    { id: "hard-sell", title: "Hard Sell Discount Focus", description: "Urgency-driven with discounts, limited stock, and promos", icon: Tag },
    { id: "soft-sell", title: "Soft Sell Benefit Focus", description: "Value-driven, storytelling, and emotional benefits", icon: Heart },
    { id: "luxury-premium", title: "Luxury and Premium", description: "Exclusive, aspirational language with prestige positioning", icon: Crown },
  ],
  extras: [
    { id: "feature-bullets", title: "Feature Bullet Points", description: "Key specs and features in scannable bullet list", icon: List },
    { id: "how-to-guide", title: "How-to Use Guide", description: "Step-by-step instructions for using the product", icon: BookOpen },
    { id: "faq", title: "FAQ", description: "Answer common customer questions upfront", icon: HelpCircle },
    { id: "warranty-info", title: "Warranty Info", description: "Warranty coverage, duration, and claim process", icon: Shield },
  ],
};

const dict: Record<string, Record<string, string>> = {
  platform: {
    shopify: "Optimize the listing for a Shopify store with a featured image gallery, product description below the fold, SEO-friendly meta title and description, variant options (size, color), and customer review integration. Use Shopify's rich text editor for formatting.",
    amazon: "Optimize the listing for Amazon with A+ Content (enhanced brand content), backend search terms, bullet points for key features, a compelling product title under 200 characters, and high-resolution white-background main images.",
    "instagram-shop": "Optimize the listing for Instagram Shop with a punchy short description (under 125 characters), lifestyle images and carousel posts, tagged product links in stories and reels, and a clear CTA to 'Shop Now' from the profile.",
    "local-marketplace": "Optimize the listing for local marketplace platforms. Use local language keywords, competitive pricing, fast-shipping badges, high-rated seller profile, and promotional banners such as 'Flash Sale' or 'Free Shipping'.",
  },
  category: {
    fashion: "Write fashion copy that emphasizes style, fit, fabric quality, versatility, and sizing guidance. Include size charts, material composition (cotton %, polyester %, etc.), care instructions, and styling tips for different occasions.",
    electronics: "Write electronics copy that emphasizes specs, performance, compatibility, warranty, and technical support. Include detailed specifications table, what's in the box, system requirements, and certification logos.",
    "skincare-beauty": "Write skincare and beauty copy that emphasizes ingredients, benefits for different skin types, usage routine, dermatologist testing, and before/after results. Highlight natural or active ingredients with their scientific benefits.",
    "food-beverage": "Write food and beverage copy that emphasizes taste, ingredients, nutrition facts, dietary certifications (halal, organic, gluten-free), packaging size, shelf life, and serving suggestions. Use sensory language — crunchy, rich, refreshing.",
  },
  style: {
    "hard-sell": "Write in a hard-sell style with urgency triggers including limited-time discounts, countdown timers, stock scarcity ('Only 5 left!'), bold price comparisons, and strong action verbs ('Buy Now', 'Get Yours Today'). Use bright, attention-grabbing badges.",
    "soft-sell": "Write in a soft-sell style focusing on benefits and customer value. Use storytelling about how the product improves daily life, include authentic customer testimonials, explain the 'why' behind the product, and end with a gentle CTA.",
    "luxury-premium": "Write in a luxury premium style with sophisticated vocabulary, exclusivity cues ('Limited Edition', 'Artisan Crafted'), minimal but elegant formatting, emphasis on heritage and quality craftsmanship, and a refined, understated CTA.",
  },
  extras: {
    "feature-bullets": "Add a scannable bullet list of 5–7 key features. Each bullet should include the feature name in bold, followed by a brief explanation. Prioritize the most important selling points first. Use emoji bullets sparingly if on-brand.",
    "how-to-guide": "Add a how-to use guide with 3–5 numbered steps. Include photos or icons for each step if possible. Cover setup, usage tips, maintenance, and what to avoid. Write in clear, simple language suitable for first-time users.",
    faq: "Add an FAQ section with 5–8 common questions. Cover shipping, returns, product usage, sizing, and compatibility. Write answers in a helpful, conversational tone. Use collapsible accordion format if the platform supports it.",
    "warranty-info": "Add warranty information including coverage period, what is covered (defects, damage), what is excluded (wear and tear, misuse), how to file a claim (contact email, form link), and estimated response time for warranty requests.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const platform = selections.step1;
  const category = selections.step2;
  const style = selections.step3;
  const extras = selections.step4;

  const lines = ["# E-Commerce Listing Copy", "", "## Listing Blueprint", ""];
  if (platform) lines.push(`**Selling Platform:** ${dict.platform[platform] ?? platform}`);
  if (platform) lines.push(`> ${notes[`platform-${platform}`] ?? ""}`);
  lines.push("");
  if (category) lines.push(`**Product Category:** ${dict.category[category] ?? category}`);
  if (category) lines.push(`> ${notes[`category-${category}`] ?? ""}`);
  lines.push("");
  if (style) lines.push(`**Copywriting Style:** ${dict.style[style] ?? style}`);
  if (style) lines.push(`> ${notes[`style-${style}`] ?? ""}`);
  lines.push("");
  if (extras) lines.push(`**Extra Elements:** ${dict.extras[extras] ?? extras}`);
  if (extras) lines.push(`> ${notes[`extras-${extras}`] ?? ""}`);
  lines.push("");
  lines.push("## Listing Structure");
  lines.push("");
  lines.push("### Product Title");
  lines.push(`[SEO-optimized title for ${options.platform.find(o => o.id === platform)?.title ?? "platform"}]`);
  lines.push("");
  lines.push("### Product Description");
  lines.push(`[${options.style.find(o => o.id === style)?.title ?? "Balanced"} style copy for ${options.category.find(o => o.id === category)?.title ?? "product"}]`);
  lines.push("");
  lines.push(`### Extra: ${options.extras.find(o => o.id === extras)?.title ?? "Additional info"}`);

  return lines.join("\n");
}

export default function EcommerceListingPage() {
  return (
    <ToolShell
      title="E-Commerce Listing Copywriter"
      steps={[
        { id: 1, label: "Platform", component: (p) => (
          <GenericStep {...p} title="Select Selling Platform" description="Where will this product be listed?" options={options.platform} mode="single" selected={p.selections.step1} onSelect={(id) => p.onSelect("step1", id)} notePrefix="platform" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Category", component: (p) => (
          <GenericStep {...p} title="Select Product Category" description="What type of product are you selling?" options={options.category} mode="single" selected={p.selections.step2} onSelect={(id) => p.onSelect("step2", id)} notePrefix="category" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Style", component: (p) => (
          <GenericStep {...p} title="Select Copywriting Style" description="What tone should the listing copy use?" options={options.style} mode="single" selected={p.selections.step3} onSelect={(id) => p.onSelect("step3", id)} notePrefix="style" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Extras", component: (p) => (
          <GenericStep {...p} title="Select Extra Elements" description="What additional sections should be included?" options={options.extras} mode="single" selected={p.selections.step4} onSelect={(id) => p.onSelect("step4", id)} notePrefix="extras" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}
