"use client";

import type { FC } from "react";
import {
  Globe, ShoppingBag, Camera, Store, Shirt, Cpu, Sparkles, Utensils,
  Tag, Heart, Crown, List, BookOpen, HelpCircle, Shield, Search, BarChart,
  Users, Target, DollarSign, TrendingUp, Percent, Package, Ruler, Box,
  Award, Eye, Home, Bike, Gamepad2, BookText, Smile, Lightbulb, Star,
  Leaf, Wallet, Gift, Briefcase,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  platform: [
    { id: "shopify", title: "Shopify Website", description: "Standalone e-commerce store on Shopify", icon: Globe },
    { id: "amazon", title: "Amazon", description: "Product listing on Amazon marketplace", icon: ShoppingBag },
    { id: "instagram-shop", title: "Instagram Shop", description: "Social commerce via Instagram product catalog", icon: Camera },
    { id: "local-marketplace", title: "Local Marketplace", description: "Regional platform like Tokopedia, Shopee, etc.", icon: Store },
    { id: "etsy", title: "Etsy", description: "Handmade, vintage, and unique goods marketplace", icon: Award },
    { id: "walmart", title: "Walmart Marketplace", description: "Mass retail marketplace with strict requirements", icon: Star },
    { id: "ebay", title: "eBay", description: "Auction-style and fixed-price listings", icon: Tag },
    { id: "facebook-marketplace", title: "Facebook Marketplace", description: "Local and social commerce via Facebook", icon: ShoppingBag },
  ],
  category: [
    { id: "fashion", title: "Fashion", description: "Clothing, accessories, shoes, and apparel", icon: Shirt },
    { id: "electronics", title: "Electronics", description: "Gadgets, devices, and tech accessories", icon: Cpu },
    { id: "skincare-beauty", title: "Skincare and Beauty", description: "Cosmetics, skincare routines, and beauty tools", icon: Sparkles },
    { id: "food-beverage", title: "Food and Beverage", description: "Packaged food, drinks, and gourmet products", icon: Utensils },
    { id: "home-garden", title: "Home and Garden", description: "Home decor, furniture, tools, and garden supplies", icon: Home },
    { id: "sports-fitness", title: "Sports and Fitness", description: "Sporting goods, gym equipment, and activewear", icon: Bike },
    { id: "toys-games", title: "Toys and Games", description: "Children's toys, board games, and puzzles", icon: Gamepad2 },
    { id: "books-media", title: "Books and Media", description: "Physical books, ebooks, music, and video", icon: BookText },
  ],
  style: [
    { id: "hard-sell", title: "Hard Sell Discount Focus", description: "Urgency-driven with discounts, limited stock, and promos", icon: Tag },
    { id: "soft-sell", title: "Soft Sell Benefit Focus", description: "Value-driven, storytelling, and emotional benefits", icon: Heart },
    { id: "luxury-premium", title: "Luxury and Premium", description: "Exclusive, aspirational language with prestige positioning", icon: Crown },
    { id: "minimalist-clean", title: "Minimalist and Clean", description: "Short, scannable, no-fluff product-focused copy", icon: Eye },
    { id: "humorous-playful", title: "Humorous and Playful", description: "Witty, fun, personality-driven brand voice", icon: Smile },
    { id: "educational-informative", title: "Educational / Informative", description: "Detailed, specs-heavy, teach-the-customer approach", icon: BookOpen },
    { id: "social-proof-heavy", title: "Social Proof Heavy", description: "Reviews, testimonials, and user ratings centered", icon: Star },
    { id: "seo-optimized", title: "SEO Optimized", description: "Keyword-rich, search-friendly, algorithm-targeted", icon: Search },
  ],
  extras: [
    { id: "feature-bullets", title: "Feature Bullet Points", description: "Key specs and features in scannable bullet list", icon: List },
    { id: "how-to-guide", title: "How-to Use Guide", description: "Step-by-step instructions for using the product", icon: BookOpen },
    { id: "faq", title: "FAQ", description: "Answer common customer questions upfront", icon: HelpCircle },
    { id: "warranty-info", title: "Warranty Info", description: "Warranty coverage, duration, and claim process", icon: Shield },
    { id: "size-chart", title: "Size Chart", description: "Detailed measurements and fit guidance", icon: Ruler },
    { id: "shipping-info", title: "Shipping Information", description: "Delivery times, costs, and international options", icon: Package },
    { id: "reviews-ratings", title: "Reviews and Ratings", description: "Customer review display and rating summary", icon: Star },
    { id: "comparison-chart", title: "Comparison Chart", description: "Compare this product with alternatives side-by-side", icon: BarChart },
  ],
  keywords: [
    { id: "high-volume-short", title: "High-Volume Short Keywords", description: "Short, broad keywords with high search volume", icon: Search },
    { id: "long-tail-specific", title: "Long-Tail Specific Keywords", description: "Detailed 3–5 word phrases targeting specific intent", icon: BarChart },
    { id: "branded-keywords", title: "Branded Keywords", description: "Include your brand name and product line terms", icon: Crown },
    { id: "competitor-terms", title: "Competitor Terms", description: "Target competitor brand + product comparison searches", icon: Target },
    { id: "season-trending", title: "Seasonal / Trending", description: "Capitalize on seasonal demand and current trends", icon: TrendingUp },
    { id: "benefit-focused", title: "Benefit-Focused", description: "Keywords that describe the outcome or benefit", icon: Heart },
    { id: "question-based", title: "Question-Based", description: "Target how-to and what-is search queries", icon: HelpCircle },
    { id: "local-geo", title: "Local / Geo-Targeted", description: "Location-based keywords for local commerce", icon: Globe },
  ],
  audience: [
    { id: "budget-shoppers", title: "Budget Shoppers", description: "Price-sensitive, deal-seeking, value-conscious", icon: DollarSign },
    { id: "premium-buyers", title: "Premium Buyers", description: "Quality-focused, brand-conscious, willing to pay more", icon: Crown },
    { id: "early-adopters", title: "Early Adopters", description: "Trend-first, new-product seekers, influencer-driven", icon: Lightbulb },
    { id: "gift-shoppers", title: "Gift Shoppers", description: "Looking for presents, gift-wrapping, seasonal buyers", icon: Gift },
    { id: "recurring-buyers", title: "Recurring Buyers", description: "Subscription potential, repeat purchasers, loyalty-driven", icon: Wallet },
    { id: "style-conscious", title: "Style-Conscious", description: "Aesthetic-driven, fashion-forward, design-aware", icon: Smile },
    { id: "eco-conscious", title: "Eco-Conscious", description: "Sustainable, ethical, environmentally responsible", icon: Leaf },
    { id: "value-seekers", title: "Value Seekers", description: "Best-value, quality-per-dollar, comparison shoppers", icon: Award },
  ],
  pricing: [
    { id: "competitive-pricing", title: "Competitive Pricing", description: "Price matched or slightly below market average", icon: DollarSign },
    { id: "premium-pricing", title: "Premium Pricing", description: "Above-market price positioned as luxury/exclusive", icon: Crown },
    { id: "penetration-pricing", title: "Penetration Pricing", description: "Low initial price to gain market share quickly", icon: TrendingUp },
    { id: "bundle-discount", title: "Bundle / Package Discount", description: "Discount for buying multiple items together", icon: Package },
    { id: "tiered-pricing", title: "Tiered Pricing", description: "Different price points for different feature/quantity levels", icon: BarChart },
    { id: "dynamic-pricing", title: "Dynamic Pricing", description: "Price changes based on demand, time, or segment", icon: TrendingUp },
    { id: "psychological-pricing", title: "Psychological Pricing", description: "$.99 endings, charm pricing, anchoring techniques", icon: Percent },
    { id: "freemium-trial", title: "Freemium / Trial", description: "Free basic version with paid premium upgrades", icon: Star },
  ],
  packaging: [
    { id: "standard-box", title: "Standard Corrugated Box", description: "Durable cardboard box, cost-effective shipping", icon: Package },
    { id: "eco-packaging", title: "Eco-Friendly Packaging", description: "Biodegradable, recycled, minimal environmental impact", icon: Leaf },
    { id: "gift-box", title: "Premium Gift Box", description: "Elegant box with tissue, ribbon, and gift message option", icon: Gift },
    { id: "minimal-packaging", title: "Minimal / Poly Mailer", description: "Lightweight poly mailer, low cost, low waste", icon: Box },
    { id: "multi-pack", title: "Multi-Pack Bundle", description: "Multiple units in one package for bulk buyers", icon: Package },
    { id: "travel-size", title: "Travel / Sample Size", description: "Small format for sampling, travel, or trial", icon: Briefcase },
    { id: "bulk-packaging", title: "Bulk / Wholesale Packaging", description: "Large quantity packaging for resellers and businesses", icon: Box },
    { id: "display-box", title: "Retail Display Box", description: "Shelf-ready packaging with retail branding and POP display", icon: Store },
  ],
};

const dict: Record<string, Record<string, string>> = {
  platform: {
    shopify: "Optimize the listing for a Shopify store with a featured image gallery, product description below the fold, SEO-friendly meta title and description, variant options (size, color), and customer review integration. Use Shopify's rich text editor for formatting. Include alt text for every image.",
    amazon: "Optimize the listing for Amazon with A+ Content (enhanced brand content), backend search terms, bullet points for key features, a compelling product title under 200 characters, and high-resolution white-background main images. Include a Brand Story section if registered in Brand Registry.",
    "instagram-shop": "Optimize the listing for Instagram Shop with a punchy short description (under 125 characters), lifestyle images and carousel posts, tagged product links in stories and reels, and a clear CTA to 'Shop Now' from the profile. Use Instagram's product tagging in organic posts.",
    "local-marketplace": "Optimize the listing for local marketplace platforms. Use local language keywords, competitive pricing, fast-shipping badges, high-rated seller profile, and promotional banners such as 'Flash Sale' or 'Free Shipping'. Include local payment methods (e-wallet, bank transfer).",
    etsy: "Optimize the listing for Etsy with a story-driven description (materials, process, inspiration), 10+ high-quality photos showing detail, tags matching Etsy search categories, and clear policies section. Etsy favors handmade, vintage, and unique items. Use all 13 tag slots.",
    walmart: "Optimize the listing for Walmart Marketplace with a GTIN/UPC barcode, Item ID, detailed spec sheets, and strict compliance with Walmart's content guidelines. Use Item Specifics attributes thoroughly. Walmart requires a minimum 2-3 day shipping promise.",
    ebay: "Optimize the listing for eBay with a clear condition description, item specifics attributes, return policy, and competitive pricing. Use eBay's catalog product matching if available. Add a handling time of 1 business day for Best Match ranking boost.",
    "facebook-marketplace": "Optimize the listing for Facebook Marketplace with clear photos (no watermarks), a concise description (under 200 characters), accurate category, and local pickup / shipping options. Facebook Marketplace favors items with multiple high-quality images.",
  },
  category: {
    fashion: "Write fashion copy that emphasizes style, fit, fabric quality, versatility, and sizing guidance. Include size charts, material composition (cotton %, polyester %, etc.), care instructions, and styling tips for different occasions. Use sensory fabric descriptors — buttery soft, breathable, structured.",
    electronics: "Write electronics copy that emphasizes specs, performance, compatibility, warranty, and technical support. Include detailed specifications table, what's in the box, system requirements, and certification logos (FCC, CE, RoHS). Use comparison benchmarks where relevant.",
    "skincare-beauty": "Write skincare and beauty copy that emphasizes ingredients, benefits for different skin types, usage routine, dermatologist testing, and before/after results. Highlight natural or active ingredients with their scientific benefits. Include pH levels and sensitivity warnings.",
    "food-beverage": "Write food and beverage copy that emphasizes taste, ingredients, nutrition facts, dietary certifications (halal, organic, gluten-free), packaging size, shelf life, and serving suggestions. Use sensory language — crunchy, rich, refreshing, velvety.",
    "home-garden": "Write home and garden copy that emphasizes quality materials, dimensions, assembly requirements, weather resistance (for outdoor), style compatibility (modern, rustic, etc.), and maintenance. Include room-setting photos showing scale and use context.",
    "sports-fitness": "Write sports and fitness copy that emphasizes performance benefits, durability, weight capacity, material technology (moisture-wicking, impact-absorbing), and safety certifications. Include size/weight specifications and care/cleaning instructions.",
    "toys-games": "Write toys and games copy that emphasizes age range, skill development, safety certifications (ASTM, CE), included components, number of players, playtime duration, and educational value. Use playful, engaging language that appeals to both children and gift-buying adults.",
    "books-media": "Write books and media copy that emphasizes author credentials, page count, ISBN, publication date, edition, format (hardcover, paperback, digital), and key topics or chapters. Include review excerpts and 'if you liked X, you will love Y' recommendations.",
  },
  style: {
    "hard-sell": "Write in a hard-sell style with urgency triggers including limited-time discounts, countdown timers, stock scarcity ('Only 5 left!'), bold price comparisons, and strong action verbs ('Buy Now', 'Get Yours Today'). Use bright, attention-grabbing badges. Create FOMO with social proof counters.",
    "soft-sell": "Write in a soft-sell style focusing on benefits and customer value. Use storytelling about how the product improves daily life, include authentic customer testimonials, explain the 'why' behind the product, and end with a gentle CTA. Build desire without pressure.",
    "luxury-premium": "Write in a luxury premium style with sophisticated vocabulary, exclusivity cues ('Limited Edition', 'Artisan Crafted'), minimal but elegant formatting, emphasis on heritage and quality craftsmanship, and a refined, understated CTA. Less is more — let the product speak.",
    "minimalist-clean": "Write in a minimalist style with short sentences, ample white space, simple formatting, and focused messaging. No fluff, no excessive adjectives. State what the product is, what it does, and why it matters — in that order. Use precision over persuasion.",
    "humorous-playful": "Write in a humorous, playful brand voice. Use puns, witty observations, and light-hearted comparisons. Break the fourth wall ('Yes, this really works.'). Keep humor relevant to the product category — avoid forced jokes. Personality drives shareability.",
    "educational-informative": "Write in an educational style that teaches the customer. Include how it works, why the materials matter, the science behind the formula, or the engineering behind the design. Treat the description as a mini-article. Informed customers buy with confidence.",
    "social-proof-heavy": "Center the copy around other customers' experiences. Lead with a strong review excerpt, include a star rating summary at the top, sprinkle testimonials throughout, and end with a 'join thousands of happy customers' social proof closer.",
    "seo-optimized": "Write copy optimized for search engines without sacrificing readability. Front-load keywords in the title, include secondary keywords naturally in the description, use header tags (H1, H2) with keyword variants, and write meta descriptions under 160 characters.",
  },
  extras: {
    "feature-bullets": "Add a scannable bullet list of 5–7 key features. Each bullet should include the feature name in bold, followed by a brief explanation of the customer benefit. Prioritize the most important selling points first. Use emoji bullets sparingly if on-brand.",
    "how-to-guide": "Add a how-to use guide with 3–5 numbered steps. Include photos or icons for each step if possible. Cover setup, usage tips, maintenance, and what to avoid. Write in clear, simple language. Include a troubleshooting tip for common mistakes.",
    faq: "Add an FAQ section with 5–8 common questions. Cover shipping, returns, product usage, sizing, and compatibility. Write answers in a helpful, conversational tone. Use collapsible accordion format if the platform supports it. Update FAQs based on real customer inquiries.",
    "warranty-info": "Add warranty information including coverage period, what is covered (defects, damage), what is excluded (wear and tear, misuse), how to file a claim (contact email, form link), and estimated response time for warranty requests. Include steps to register the warranty.",
    "size-chart": "Add a detailed size chart with measurements in both imperial and metric. Include body measurements (chest, waist, hip, inseam) and corresponding product sizes. Add fit guidance: 'true to size', 'size up if between sizes', 'relaxed fit'. Include model measurements for reference.",
    "shipping-info": "Add shipping details including delivery timeframes (standard, expedited, overnight), shipping costs and free shipping threshold, international shipping availability, tracking information, and carriers used. Include a shipping policy link. Set clear delivery expectations.",
    "reviews-ratings": "Display customer reviews with star ratings, written reviews, verified purchase badges, and helpfulness votes. Show aggregate rating at the top. Include photo reviews for social proof. Respond to reviews (especially negative ones) professionally and promptly.",
    "comparison-chart": "Add a side-by-side comparison table with similar products or variants. Compare key specs, features, price, and ratings. Help the customer make an informed decision. Highlight why this product is the best choice. Use checkmarks for features included.",
  },
  keywords: {
    "high-volume-short": "Target broad, high-search-volume keywords (1–2 words). Use these in the product title, primary category, and main search terms. Examples: 'wireless headphones', 'yoga mat', 'leather wallet'. Competition is high but the traffic potential is significant.",
    "long-tail-specific": "Target detailed, specific search phrases (3–5 words). These have lower search volume but higher conversion intent. Examples: 'noise cancelling wireless headphones for running', 'extra thick yoga mat for knee pain'. Long-tail keywords face less competition.",
    "branded-keywords": "Target keywords that include your brand name or product line. Examples: 'Nike Air Max size 10', '[YourBrand] skincare set'. Branded keywords have high conversion rates because the searcher already has awareness. Protect your brand name in listings.",
    "competitor-terms": "Target competitor brand names and product models (where platform policy allows). Examples: 'alternative to Yeti tumbler', 'vs. Dyson V15'. Use comparison keywords strategically. Ensure your product genuinely competes to avoid negative reviews.",
    "season-trending": "Target seasonal and trending keywords based on the time of year. Examples: 'summer beach bag', 'Christmas gift for dad', 'back to school backpack'. Use Google Trends and platform search data to identify rising terms. Update listings seasonally.",
    "benefit-focused": "Target keywords that describe the outcome or benefit rather than the product itself. Examples: 'improve sleep quality', 'reduce back pain', 'organize your desk'. Benefit keywords capture problem-aware shoppers who are actively looking for solutions.",
    "question-based": "Target keywords phrased as questions. Examples: 'how to clean a yoga mat', 'what size backpack for hiking', 'best moisturizer for dry skin'. Question-based keywords capture shoppers in the research phase. Answer the question in your listing content.",
    "local-geo": "Target location-specific keywords for local or regional selling. Examples: 'handmade soap Brooklyn', 'organic coffee beans Seattle', 'custom t-shirt Toronto'. Geo-targeted keywords reduce competition and attract shoppers who prefer local sellers.",
  },
  audience: {
    "budget-shoppers": "Speak directly to budget-conscious shoppers. Highlight price, discounts, value for money, and cost-per-use. Use phrases like 'affordable', 'great value', 'best bang for your buck'. Emphasize long-term savings and price comparisons. Include a price-match or lowest-price guarantee.",
    "premium-buyers": "Speak to premium buyers who prioritize quality over price. Use aspirational language emphasizing exclusivity, craftsmanship, premium materials, and superior design. Highlight limited availability, awards, and celebrity/designer endorsements. Never mention discounts.",
    "early-adopters": "Target early adopters who love being first. Use language like 'new', 'just launched', 'first to market', 'cutting-edge'. Highlight innovative features, exclusive pre-order bonuses, and limited early-bird pricing. Early adopters value novelty over price.",
    "gift-shoppers": "Appeal to gift shoppers by emphasizing presentation, gift-wrapping options, gift message inclusion, and delivery timing. Use phrases like 'perfect gift for...', 'gift-ready packaging', 'includes gift receipt'. Suggest complementary products for gifting bundles.",
    "recurring-buyers": "Target customers likely to purchase repeatedly. Emphasize subscription options, refill packs, loyalty programs, and consumable nature of the product. Use phrases like 'subscribe and save', 'never run out', 'automatic refills'. Highlight membership benefits.",
    "style-conscious": "Speak to style-conscious buyers with visually-focused copy. Emphasize design, aesthetics, color options, and how the product complements different styles. Use fashion-forward language. Include lifestyle imagery showing the product in aesthetically curated settings.",
    "eco-conscious": "Target environmentally conscious consumers. Highlight sustainable materials, eco-friendly packaging, carbon-neutral shipping, ethical manufacturing, and certifications (FSC, organic, fair trade, B Corp). Be transparent about environmental impact. Avoid greenwashing.",
    "value-seekers": "Appeal to value seekers who want the best quality-to-price ratio. Emphasize durability, longevity, multi-functionality, and quality materials. Use phrases like 'invest in quality', 'built to last', 'premium without the premium price'. Show total cost of ownership.",
  },
  pricing: {
    "competitive-pricing": "Position the price as at or slightly below market average. Highlight the value-to-price ratio. Use comparison calls like 'Compare at $[X]' or 'Market average $[X]'. Emphasize that the customer is getting more for less without compromising quality.",
    "premium-pricing": "Position the premium price as a signal of superior quality. Never apologize for the price — justify it with craftsmanship, materials, exclusivity, or performance. Use phrases like 'an investment in quality', 'the finest [category] available', 'worth every penny'.",
    "penetration-pricing": "Use an introductory low price to drive initial sales volume and build reviews. Clearly state 'Introductory Price' or 'Launch Special'. Include a future price note ('Price will increase to $[X] after [date]'). Focus on gaining traction and social proof.",
    "bundle-discount": "Create product bundles with a discounted combined price. Show individual prices vs bundle price with savings highlighted ('Save $[X]!'). Position bundles as solutions: 'The Complete [Category] Kit'. Include a mix of best-sellers and complementary items.",
    "tiered-pricing": "Offer multiple price tiers based on quantity, features, or service level. Clearly differentiate what each tier includes. Highlight the best-value tier with a 'Most Popular' badge. Use a pricing table for easy comparison. Encourage upsells with clear incremental value.",
    "dynamic-pricing": "Implement dynamic pricing that adjusts based on demand, time of day, or customer segment. Use countdown timers for time-sensitive pricing. Flash sale pricing with 'limited time at this price' creates urgency. Monitor competitor pricing and adjust algorithmically.",
    "psychological-pricing": "Use psychological pricing techniques: charm pricing ($9.99 instead of $10.00), price anchoring (show higher original price crossed out), decoy pricing (three tiers where middle is most attractive), and bundling (perceived value with combined price).",
    "freemium-trial": "For digital or subscription products, offer a free basic version or time-limited trial. Clearly state what the free tier includes and what features unlock at paid tiers. Use a 'Start Free Trial' CTA. Limit the trial duration to create conversion urgency.",
  },
  packaging: {
    "standard-box": "Package in a standard corrugated cardboard box. Provide internal dimensions, weight capacity, and recommended packing materials (bubble wrap, air pillows). Suitable for most products. Cost-effective for shipping. Custom print available for branded unboxing experience.",
    "eco-packaging": "Use 100% recycled and biodegradable materials. Remove all single-use plastics. Use compostable mailers, recycled kraft boxes, and soy-based inks. Carbon-neutral shipping available. Clearly label packaging as eco-friendly. Appeals to environmentally conscious customers.",
    "gift-box": "Package in a premium rigid gift box with magnetic closure. Include branded tissue paper, satin ribbon, care instructions card, and optional handwritten gift message. Product is gift-ready upon arrival — no need for the buyer to wrap it. Ideal for gifting occasions.",
    "minimal-packaging": "Use lightweight poly mailers or thin cardboard for minimal material usage. For small, durable items, no box is needed. Reduces shipping weight and material cost. Not suitable for fragile items. Clearly label 'Fragile' if needed despite minimal approach.",
    "multi-pack": "Package multiple units together in a bundle pack. Use a master carton containing individually wrapped units. Offer cost savings per unit vs single purchase. Ideal for consumables, family packs, and wholesale orders. Include bundle pricing label on outer carton.",
    "travel-size": "Package in compact, TSA-friendly sizes (under 100ml / 3.4oz for liquids). Use small squeeze bottles, mini jars, or sample sachets. Ideal for trial purchases, travel sets, and discovery kits. Price lower to encourage first-time purchase with minimal commitment.",
    "bulk-packaging": "Use heavy-duty corrugated boxes for large-quantity shipments. Palletize for B2B wholesale orders. Include packing lists, MSDS sheets if applicable, and compliance documentation. Stretch wrap pallets for stability. Label with quantity, SKU, and batch number.",
    "display-box": "Package in a retail-ready display box with POP (Point of Purchase) graphics. Box doubles as a shelf display — open the top flap and place directly on retail shelving. Includes brand logo, product features, and QR code. Compliant with major retailer display standards.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const platform = selections.step1;
  const category = selections.step2;
  const style = selections.step3;
  const extraIds: string[] = selections.step4 || [];
  const keywords = selections.step5;
  const audience = selections.step6;
  const pricing = selections.step7;
  const packaging = selections.step8;

  const lines: string[] = [];

  lines.push("# E-Commerce Listing Copywriter");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const platLabel = Array.isArray(platform) ? platform.map(id => options.platform.find(o => o.id === id)?.title || id).join(", ") : options.platform.find(o => o.id === platform)?.title || platform;
  lines.push(`| Selling Platform | ${platLabel} | ${notes[`platform-${platform}`] || ""}`);
  const catLabel = Array.isArray(category) ? category.map(id => options.category.find(o => o.id === id)?.title || id).join(", ") : options.category.find(o => o.id === category)?.title || category;
  lines.push(`| Product Category | ${catLabel} | ${notes[`category-${category}`] || ""}`);
  const styleLabel = Array.isArray(style) ? style.map(id => options.style.find(o => o.id === id)?.title || id).join(", ") : options.style.find(o => o.id === style)?.title || style;
  lines.push(`| Copywriting Style | ${styleLabel} | ${notes[`style-${style}`] || ""}`);
  const extraLabels = extraIds.map(id => options.extras.find(o => o.id === id)?.title || id).join(", ");
  lines.push(`| Extra Elements | ${extraLabels || "None"} | ${extraIds.map(id => notes[`extras-${id}`] || "").filter(Boolean).join("; ")}`);
  const kwLabel = Array.isArray(keywords) ? keywords.map(id => options.keywords.find(o => o.id === id)?.title || id).join(", ") : options.keywords.find(o => o.id === keywords)?.title || keywords;
  lines.push(`| Keyword Strategy | ${kwLabel} | ${notes[`keywords-${keywords}`] || ""}`);
  const audLabel = Array.isArray(audience) ? audience.map(id => options.audience.find(o => o.id === id)?.title || id).join(", ") : options.audience.find(o => o.id === audience)?.title || audience;
  lines.push(`| Target Audience | ${audLabel} | ${notes[`audience-${audience}`] || ""}`);
  const prLabel = Array.isArray(pricing) ? pricing.map(id => options.pricing.find(o => o.id === id)?.title || id).join(", ") : options.pricing.find(o => o.id === pricing)?.title || pricing;
  lines.push(`| Pricing Strategy | ${prLabel} | ${notes[`pricing-${pricing}`] || ""}`);
  const pkgLabel = Array.isArray(packaging) ? packaging.map(id => options.packaging.find(o => o.id === id)?.title || id).join(", ") : options.packaging.find(o => o.id === packaging)?.title || packaging;
  lines.push(`| Packaging Type | ${pkgLabel} | ${notes[`packaging-${packaging}`] || ""}`);
  lines.push("");

  const sections: [string, string, string, string][] = [
    ["Platform", platLabel, platform, "platform"],
    ["Product Category", catLabel, category, "category"],
    ["Copywriting Style", styleLabel, style, "style"],
    ["Keyword Strategy", kwLabel, keywords, "keywords"],
    ["Target Audience", audLabel, audience, "audience"],
    ["Pricing Strategy", prLabel, pricing, "pricing"],
    ["Packaging & Dimensions", pkgLabel, packaging, "packaging"],
  ];

  for (const [heading, label, key, prefix] of sections) {
    lines.push(`## ${heading}: ${label}`);
    lines.push("");
    lines.push(Array.isArray(key) ? key.map(v => dict[prefix]?.[v] || v).join(", ") : dict[prefix]?.[key] || key);
    const note = notes[`${prefix}-${key}`] || "";
    if (note) lines.push(`> **Note:** ${note}`);
    lines.push("");
  }

  if (extraIds.length > 0) {
    lines.push("## Extra Elements");
    lines.push("");
    for (const exId of extraIds) {
      const label = options.extras.find(o => o.id === exId)?.title || exId;
      lines.push("### " + label);
      lines.push("");
      lines.push(Array.isArray(exId) ? exId.map(v => dict.extras[v] || v).join(", ") : dict.extras[exId] || exId);
      const note = notes[`extras-${exId}`] || "";
      if (note) lines.push(`> **Note:** ${note}`);
      lines.push("");
    }
  }

  lines.push("## Product Title Structure");
  lines.push("");
  lines.push(options.platform.find(o => o.id === platform)?.title || "General");
  lines.push("");
  lines.push(`[${kwLabel}] ${catLabel} Product Title`);
  lines.push("");
  if (category === "fashion") {
    lines.push("[Brand] — [Product Name] — [Key Feature] — [Material/Fit] — [Color/Size Options]");
  } else if (category === "electronics") {
    lines.push("[Brand] [Model] — [Key Spec 1], [Key Spec 2] — [Capacity/Color] — [Compatibility]");
  } else if (category === "skincare-beauty") {
    lines.push("[Brand] [Product Name] — [Key Ingredient] — [Skin Type] — [Size] — [Benefit]");
  } else if (category === "food-beverage") {
    lines.push("[Brand] [Product Name] — [Flavor/Variant] — [Weight/Size] — [Pack Quantity]");
  } else if (category === "home-garden") {
    lines.push("[Brand] [Product Name] — [Material] — [Dimension] — [Color/Finish] — [Room]");
  } else if (category === "sports-fitness") {
    lines.push("[Brand] [Product Name] — [Key Feature] — [Weight/Load Capacity] — [Size] — [Sport]");
  } else if (category === "toys-games") {
    lines.push("[Brand] [Product Name] — [Age Range] — [Player Count] — [Skill] — [Theme]");
  } else if (category === "books-media") {
    lines.push("[Title] — [Author] — [Format] — [Edition] — [Key Topic]");
  }
  lines.push("");

  lines.push("## Product Description");
  lines.push("");
  if (style === "hard-sell") {
    lines.push("### ⏰ LIMITED TIME OFFER — UP TO 50% OFF ###");
    lines.push("");
    lines.push("🚀 **Why settle for less when you can have the best?**");
    lines.push("");
    lines.push("Introducing [Product Name] — the [audLabel] solution you have been waiting for. Whether you need [benefit 1] or [benefit 2], this product delivers results you can see and feel.");
    lines.push("");
    lines.push("✅ **[Feature 1]** — [Benefit explanation in 5–10 words]");
    lines.push("✅ **[Feature 2]** — [Benefit explanation in 5–10 words]");
    lines.push("✅ **[Feature 3]** — [Benefit explanation in 5–10 words]");
    lines.push("✅ **[Feature 4]** — [Benefit explanation in 5–10 words]");
    lines.push("");
    lines.push("🔥 **HURRY! Only [X] left in stock!**");
    lines.push("");
    lines.push(`👉 **Click 'Add to Cart' now and [pricing-specific offer — ${prLabel}]!**`);
    lines.push("");
    lines.push("⏳ Offer ends: [Date]");
  } else if (style === "soft-sell") {
    lines.push("### Your [morning/routine/wardrobe/home] deserves better.");
    lines.push("");
    lines.push("Meet [Product Name] — thoughtfully designed for [audLabel] who value quality and simplicity.");
    lines.push("");
    lines.push("Imagine [aspirational scenario — how life improves with this product]. That is the feeling [Product Name] delivers, every single day.");
    lines.push("");
    lines.push("**What makes it special?**");
    lines.push("");
    lines.push("- **[Feature 1]**: [Benefit-focused description]");
    lines.push("- **[Feature 2]**: [Benefit-focused description]");
    lines.push("- **[Feature 3]**: [Benefit-focused description]");
    lines.push("");
    lines.push("**What our customers say:**");
    lines.push("");
    lines.push("> \"[Customer testimonial quote — 1–2 sentences]\"");
    lines.push("> — [Customer Name], [Verification badge]");
    lines.push("");
    lines.push("Ready to experience the difference? Add [Product Name] to your cart today.");
  } else if (style === "luxury-premium") {
    lines.push("### [Product Name] — Where Quality Meets Craftsmanship");
    lines.push("");
    lines.push("For those who demand nothing but the finest, [Product Name] represents the pinnacle of [category] design.");
    lines.push("");
    lines.push("**Handcrafted with precision.** [Description of craftsmanship and attention to detail — 2–3 sentences].");
    lines.push("");
    lines.push("**Exclusively yours.** [Description of limited availability, unique features, or bespoke nature].");
    lines.push("");
    lines.push("**The Details:**");
    lines.push("");
    lines.push("| Specification | Detail");
    lines.push("|--------------|-------");
    lines.push("| Material | [Premium material description]");
    lines.push(`| Packaging | ${pkgLabel}`);
    lines.push("| Dimensions | [Measurements]");
    lines.push("| Origin | [Country of origin]");
    lines.push("| Craftsmanship | [Handmade/Artisan/etc.]");
    lines.push("");
    lines.push("_Experience the extraordinary. Inquire for private viewing._");
  } else {
    lines.push("### [Product Name] — Designed for [audLabel]");
    lines.push("");
    lines.push("[Opening statement describing the product and its primary value proposition in 2–3 sentences]");
    lines.push("");
    lines.push("**Key Highlights:**");
    lines.push("");
    lines.push(`- [Feature 1 aligned with ${kwLabel} keyword strategy]`);
    lines.push(`- [Feature 2 that appeals to ${audLabel} audience]`);
    lines.push(`- [Feature 3 highlighting ${prLabel} pricing value]`);
    lines.push("- [Feature 4 addressing a common customer need]");
    lines.push("");
    lines.push("[Closing statement with a natural CTA]");
  }
  lines.push("");

  if (extraIds.includes("feature-bullets")) {
    lines.push("## Key Features");
    lines.push("");
    lines.push("- **Feature 1:** [Detailed explanation of the feature and its benefit to the customer]");
    lines.push("- **Feature 2:** [Detailed explanation of the feature and its benefit to the customer]");
    lines.push("- **Feature 3:** [Detailed explanation of the feature and its benefit to the customer]");
    lines.push("- **Feature 4:** [Detailed explanation of the feature and its benefit to the customer]");
    lines.push("- **Feature 5:** [Detailed explanation of the feature and its benefit to the customer]");
    lines.push("");
  }

  lines.push("## SEO Keywords");
  lines.push("");
  lines.push("| Keyword Type | Keywords");
  lines.push("|--------------|---------");
  lines.push(`| Primary (${kwLabel}) | [primary keyword 1], [primary keyword 2], [primary keyword 3]`);
  lines.push("| Secondary | [feature keywords], [use-case keywords], [benefit keywords]");
  lines.push("| Long-tail | [specific phrase], [question-based phrase], [comparison phrase]");
  lines.push(`| Audience-targeted | [${audLabel}-specific terms]`);
  lines.push("");

  lines.push("## Image Requirements");
  lines.push("");
  lines.push("| Image Type | Requirements");
  lines.push("|------------|-------------");
  lines.push("| Main Image | White background, product centered, 1000×1000px minimum");
  lines.push("| Lifestyle | Product in use, natural lighting, aspirational setting");
  lines.push("| Detail | Close-up of texture/material, 2000×2000px for zoom");
  lines.push(`| Packaging | ${pkgLabel} — show the actual packaging the customer receives`);
  lines.push("| Size Comparison | Product next to common object for scale reference");
  lines.push("| Uses / Variants | Different angles, color options, or usage scenarios");
  lines.push("");

  lines.push("## Pricing & Promotion Strategy");
  lines.push("");
  lines.push(`- **Strategy**: ${prLabel} — ${(Array.isArray(pricing) ? pricing.map(v => dict.pricing[v]?.split?.(".")?.[0] || v).join(", ") : dict.pricing[pricing]?.split?.(".")?.[0]) || "priced accordingly"}`);
  lines.push(`- **Target Audience**: ${audLabel} — ${(Array.isArray(audience) ? audience.map(v => dict.audience[v]?.split?.(".")?.[0] || v).join(", ") : dict.audience[audience]?.split?.(".")?.[0]) || "speak to this segment"}`);
  lines.push("- **Discount Tiers**: [Set volume or bundle discount levels]");
  lines.push("- **Comparison Price**: [Show 'Compare at' or 'Was' price if applicable]");
  lines.push("- **Promo Calendar**: [Seasonal promotions, flash sales, coupon codes]");
  lines.push("");

  if (extraIds.includes("size-chart")) {
    lines.push("## Size Chart");
    lines.push("");
    lines.push("| Size | Chest (in) | Waist (in) | Hip (in) | Length (in)");
    lines.push("|------|-----------|-----------|---------|-----------");
    lines.push("| XS | 32–34 | 26–28 | 34–36 | [Length]");
    lines.push("| S | 34–36 | 28–30 | 36–38 | [Length]");
    lines.push("| M | 36–38 | 30–32 | 38–40 | [Length]");
    lines.push("| L | 38–40 | 32–34 | 40–42 | [Length]");
    lines.push("| XL | 40–42 | 34–36 | 42–44 | [Length]");
    lines.push("| XXL | 42–44 | 36–38 | 44–46 | [Length]");
    lines.push("");
    lines.push("**Fit Guide**: [True to size / Size up / Relaxed fit]");
    lines.push("");
  }

  if (extraIds.includes("faq")) {
    lines.push("## Frequently Asked Questions");
    lines.push("");
    lines.push("**Q1: How long does shipping take?**");
    lines.push("A: Standard shipping takes 3–7 business days. Express shipping (1–2 days) is available at checkout for an additional fee.");
    lines.push("");
    lines.push("**Q2: Can I return this product?**");
    lines.push("A: Yes, we offer a 30-day hassle-free return policy. Items must be unused and in original packaging.");
    lines.push("");
    lines.push("**Q3: Is this product compatible with [X]?**");
    lines.push("A: [Product Name] is compatible with [list of compatible systems/items]. Check the specifications section for full compatibility details.");
    lines.push("");
    lines.push("**Q4: How do I clean/maintain this product?**");
    lines.push("A: [Cleaning instructions specific to the category]");
    lines.push("");
    lines.push("**Q5: Do you ship internationally?**");
    lines.push("A: [Yes/No — shipping destinations, duties, and estimated delivery times]");
    lines.push("");
  }

  if (extraIds.includes("warranty-info")) {
    lines.push("## Warranty Information");
    lines.push("");
    lines.push("| Detail | Information");
    lines.push("|--------|------------");
    lines.push("| Coverage Period | [X] months/years from date of purchase");
    lines.push("| What is Covered | Manufacturing defects, material faults, workmanship issues");
    lines.push("| What is Not Covered | Accidental damage, normal wear and tear, unauthorized modifications");
    lines.push("| Claim Process | Email [support@email.com] with order number and description of issue");
    lines.push("| Response Time | Within 24–48 hours on business days");
    lines.push("| Resolution | Repair, replacement, or refund at our discretion");
    lines.push("");
  }

  lines.push("## Posting Checklist");
  lines.push("");
  lines.push("- [ ] Product title is under the platform's character limit");
  lines.push("- [ ] Primary image meets resolution requirements");
  lines.push("- [ ] At least 3 lifestyle images included");
  lines.push("- [ ] Price is correctly formatted with currency symbol");
  lines.push("- [ ] Inventory/stock count is accurate");
  lines.push("- [ ] Shipping details are configured");
  lines.push("- [ ] Variant options (size/color) are set up correctly");
  lines.push("- [ ] SEO title and description are optimized");
  lines.push(`- [ ] Keywords follow ${kwLabel} strategy`);
  lines.push(`- [ ] Copy speaks to ${audLabel} segment`);
  lines.push(`- [ ] Pricing reflects ${prLabel} approach`);
  lines.push(`- [ ] Packaging details match ${pkgLabel} specifications`);
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by E-Commerce Listing Copywriter_");

  return lines.join("\n");
}

export default function EcommerceListingPage() {
  return (
    <ToolShell
      title="E-Commerce Listing Copywriter"
      steps={[
        { id: 1, label: "Platform", component: (p) => (
          <GenericStep {...p} title="Select Selling Platform" description="Where will this product be listed?" options={options.platform} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="platform" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Category", component: (p) => (
          <GenericStep {...p} title="Select Product Category" description="What type of product are you selling?" options={options.category} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="category" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Style", component: (p) => (
          <GenericStep {...p} title="Select Copywriting Style" description="What tone should the listing copy use?" options={options.style} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="style" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Extras", component: (p) => (
          <GenericStep {...p} title="Select Extra Elements" description="What additional sections should be included?" options={options.extras} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="extras" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "Keywords", component: (p) => (
          <GenericStep {...p} title="Select Keyword Strategy" description="What approach to search keywords?" options={options.keywords} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="keywords" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "Audience", component: (p) => (
          <GenericStep {...p} title="Select Target Audience" description="Who is your ideal customer?" options={options.audience} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="audience" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Pricing", component: (p) => (
          <GenericStep {...p} title="Select Pricing Strategy" description="How should the product be priced?" options={options.pricing} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="pricing" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Packaging", component: (p) => (
          <GenericStep {...p} title="Select Packaging Type" description="How will the product be packaged and shipped?" options={options.packaging} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="packaging" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}









