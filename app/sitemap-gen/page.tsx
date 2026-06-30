"use client";

import type { FC } from "react";
import {
  Globe, Building2, Store, GraduationCap, Heart, Newspaper,
  Laptop, BookOpen, FolderTree, Share2, TreePine, Layers,
  PanelRight, PanelBottom, ArrowUpDown, ArrowLeftRight, Grid3x3,
  FileText, Image, Video, Music, Code, ShoppingCart, Users,
  Map, Route, Target, TrendingUp, Star, Flag,
  Languages, MessageSquare, RefreshCw, Wrench,
  HardDrive, Shield, Bell, Clock,
} from "lucide-react";
import { ToolShell } from "@/components/tool-wizard/tool-shell";
import { GenericStep } from "@/components/tool-wizard/generic-step";

const options = {
  siteType: [
    { id: "ecommerce", title: "E-Commerce", description: "Online store with product catalogs and checkout", icon: ShoppingCart },
    { id: "corporate", title: "Corporate / Business", description: "Company website showcasing services and info", icon: Building2 },
    { id: "saas", title: "SaaS / Web App", description: "Software-as-a-service multi-page application", icon: Laptop },
    { id: "blog", title: "Blog / Publication", description: "Content-driven site with articles and posts", icon: Newspaper },
    { id: "portfolio", title: "Portfolio", description: "Creative showcase for individuals or agencies", icon: Image },
    { id: "education", title: "Education / LMS", description: "Learning management and course content site", icon: GraduationCap },
    { id: "nonprofit", title: "Non-Profit", description: "Charity or cause-driven informational website", icon: Heart },
    { id: "marketplace", title: "Marketplace", description: "Multi-vendor platform connecting buyers and sellers", icon: Store },
  ],
  pageCategories: [
    { id: "landing", title: "Landing Pages", description: "Entry pages for marketing campaigns and SEO", icon: Flag },
    { id: "content", title: "Content Pages", description: "Articles, guides, documentation, and resources", icon: FileText },
    { id: "product", title: "Product Pages", description: "Individual product or service detail pages", icon: ShoppingCart },
    { id: "listing", title: "Listing / Archive", description: "Category browse and filtered search results", icon: Grid3x3 },
    { id: "account", title: "Account Pages", description: "User profile, settings, dashboard, and orders", icon: Users },
    { id: "utility", title: "Utility Pages", description: "Contact, about, FAQ, privacy, terms, 404", icon: Wrench },
    { id: "form", title: "Form Pages", description: "Application forms, surveys, sign-up, checkout", icon: FileText },
    { id: "media", title: "Media Pages", description: "Galleries, video libraries, podcast archives", icon: Video },
  ],
  navigationDepth: [
    { id: "flat", title: "Flat (1 Level)", description: "All pages accessible from top navigation", icon: PanelRight },
    { id: "shallow", title: "Shallow (2 Levels)", description: "Main categories with sub-pages one level deep", icon: ArrowUpDown },
    { id: "moderate", title: "Moderate (3 Levels)", description: "Categories, subcategories, and detailed pages", icon: FolderTree },
    { id: "deep", title: "Deep (4-5 Levels)", description: "Complex hierarchy for large content-rich sites", icon: TreePine },
    { id: "mega-List", title: "Mega List", description: "Multi-column dropdown with rich navigation panels", icon: Layers },
    { id: "dynamic", title: "Dynamic / Faceted", description: "Navigation adapts based on content and filters", icon: Grid3x3 },
    { id: "breadcrumb-only", title: "Breadcrumb Only", description: "No top nav — breadcrumb-driven navigation", icon: ArrowLeftRight },
    { id: "sidebar-nav", title: "Sidebar Navigation", description: "Persistent sidebar with expandable sections", icon: PanelBottom },
  ],
  contentTypes: [
    { id: "articles", title: "Articles & Blog Posts", description: "SEO-optimized written content with metadata", icon: FileText },
    { id: "products", title: "Products / Services", description: "Structured product listings with variants", icon: ShoppingCart },
    { id: "images", title: "Images & Galleries", description: "Visual media with lightboxes and albums", icon: Image },
    { id: "video", title: "Video Content", description: "Embedded or self-hosted video pages", icon: Video },
    { id: "audio", title: "Audio / Podcasts", description: "Audio players with episode transcripts", icon: Music },
    { id: "documents", title: "Documents / PDFs", description: "Downloadable resources and whitepapers", icon: BookOpen },
    { id: "code", title: "Code / Snippets", description: "Code examples with syntax highlighting", icon: Code },
    { id: "user-content", title: "User-Generated", description: "Reviews, comments, forums, and submissions", icon: Users },
  ],
  userFlows: [
    { id: "browse-buy", title: "Browse → Buy", description: "Discovery to purchase conversion funnel", icon: ShoppingCart },
    { id: "signup-onboard", title: "Sign Up → Onboard", description: "Registration to first-value experience", icon: Users },
    { id: "search-find", title: "Search → Find", description: "Information retrieval and content discovery", icon: Route },
    { id: "learn-certify", title: "Learn → Certify", description: "Course enrollment to certification path", icon: GraduationCap },
    { id: "support-resolve", title: "Support → Resolve", description: "Ticket submission to resolution journey", icon: MessageSquare },
    { id: "explore-subscribe", title: "Explore → Subscribe", description: "Content sampling to paid subscription", icon: Star },
    { id: "compare-choose", title: "Compare → Choose", description: "Product comparison to selection decision", icon: Target },
    { id: "share-engage", title: "Share → Engage", description: "Social sharing to community participation", icon: Heart },
  ],
  seoPriority: [
    { id: "critical", title: "Critical (Index Now)", description: "Pages that must be indexed immediately", icon: Target },
    { id: "high", title: "High Priority", description: "Important pages for organic search rankings", icon: TrendingUp },
    { id: "medium", title: "Medium Priority", description: "Standard pages with regular crawl frequency", icon: Star },
    { id: "low", title: "Low Priority", description: "Supporting pages with less frequent indexing", icon: Flag },
    { id: "noindex", title: "No Index", description: "Pages excluded from search engine indexing", icon: Shield },
    { id: "canonical", title: "Canonical Focus", description: "Consolidate duplicates with canonical URLs", icon: FileText },
    { id: "structured-data", title: "Structured Data", description: "Schema.org markup for rich search results", icon: Code },
    { id: "Share2-only", title: "Share2 Only", description: "Include in Share2 but no special priority", icon: Share2 },
  ],
  multiLanguage: [
    { id: "single", title: "Single Language", description: "One language, no translation needed", icon: Globe },
    { id: "dual", title: "Dual Language", description: "Two languages with toggle", icon: Languages },
    { id: "multi", title: "Multi-Language (3-5)", description: "Several languages for regional markets", icon: Globe },
    { id: "global", title: "Global (10+)", description: "Full internationalization for worldwide audience", icon: Globe },
    { id: "rtl", title: "RTL Support", description: "Right-to-left language layout support", icon: ArrowLeftRight },
    { id: "subdomain", title: "Subdomain per Language", description: "Separate subdomain per language (en.site.com)", icon: FolderTree },
    { id: "subdirectory", title: "Subdirectory per Language", description: "URL path prefix per language (site.com/en/)", icon: Layers },
    { id: "auto-detect", title: "Auto-Detect", description: "Language detection via browser or IP", icon: MessageSquare },
  ],
  maintenance: [
    { id: "static", title: "Static / Manual", description: "Manual page additions and updates", icon: Wrench },
    { id: "cms-driven", title: "CMS-Driven", description: "Content management system powers all pages", icon: FileText },
    { id: "headless-cms", title: "Headless CMS", description: "API-driven content with static generation", icon: Code },
    { id: "auto-generated", title: "Auto-Generated", description: "Pages generated from data or templates", icon: RefreshCw },
    { id: "git-based", title: "Git-Based", description: "Markdown files in repo, built by CI/CD", icon: HardDrive },
    { id: "scheduled-audit", title: "Scheduled Audit", description: "Regular automated Share2 reviews and fixes", icon: Clock },
    { id: "redirect-manager", title: "Redirect Manager", description: "Automated redirect tracking and cleanup", icon: ArrowLeftRight },
    { id: "health-monitor", title: "Health Monitor", description: "Page uptime and dead link monitoring", icon: Bell },
  ],
};

const dict: Record<string, Record<string, string>> = {
  siteType: {
    ecommerce: "An e-commerce Share2 prioritizes product catalog pages, category listings, cart and checkout flows, and account management. Each product variant may have its own URL requiring careful canonical management.",
    corporate: "A corporate Share2 focuses on company information, service pages, case studies, team profiles, and investor relations. Breadcrumb structure and clear hierarchy are essential for professional credibility.",
    saas: "A SaaS Share2 structures feature pages, pricing tiers, documentation, changelog, and user dashboard areas. The Share2 must separate public marketing pages from authenticated application routes.",
    blog: "A blog Share2 organizes posts by category, tag, author, and date archive. Content discovery paths including related posts, featured content, and series navigation are critical for engagement.",
    portfolio: "A portfolio Share2 showcases projects, case studies, client testimonials, and a personal bio. Visual hierarchy in the Share2 structure directly reflects the creative brand experience.",
    education: "An education Share2 structures courses, lessons, quizzes, instructor profiles, and learning paths. The navigation must support both linear course progression and exploratory content discovery.",
    nonprofit: "A nonprofit Share2 highlights mission pages, donation flows, volunteer sign-up, event calendars, and impact reports. Clear calls-to-action should be reflected in the information architecture.",
    marketplace: "A marketplace Share2 manages seller profiles, product listings, search filters, reviews, and transaction history. Dual user types (buyer + seller) require parallel navigation structures.",
  },
  pageCategories: {
    landing: "Landing pages are campaign-specific entry points optimized for conversion. They typically sit outside the main navigation hierarchy and have distinct Share2 entries with high crawl priority.",
    content: "Content pages form the informational backbone of the site. Include articles, guides, whitepapers, and documentation organized by topic with clear parent-child relationships in the URL structure.",
    product: "Product pages display individual items or services with detailed specifications, pricing, images, and add-to-cart functionality. Each product needs a unique canonical URL to prevent duplicate content issues.",
    listing: "Listing or archive pages aggregate multiple items under a category, tag, or search filter. Pagination strategy and filter URL parameters must be carefully handled for SEO and crawl efficiency.",
    account: "Account pages handle user-specific content behind authentication. These pages should be excluded from search indexing but included in the XML Share2 for logged-in user navigation within the app.",
    utility: "Utility pages provide essential site information: contact forms, about us, FAQ, privacy policy, terms of service, and custom 404. These should always be accessible from the footer navigation.",
    form: "Form pages capture user input for various purposes: checkout, registration, surveys, contact, and applications. Multi-step forms should have clear URL progression and save-in-progress support.",
    media: "Media pages showcase rich content — image galleries, video libraries, podcast episodes, and interactive media. Each media asset should have its own dedicated page with appropriate metadata.",
  },
  navigationDepth: {
    flat: "Flat navigation keeps all primary pages at the root level. Best for small sites with fewer than 10 pages where every section deserves equal visibility in the main navigation bar.",
    shallow: "Shallow two-level navigation groups pages into categories with direct sub-pages. Suitable for small to medium sites where each category has manageable content under it without needing further nesting.",
    moderate: "Moderate three-level navigation accommodates categories, subcategories, and individual content pages. Common in content-rich sites and e-commerce platforms with department > category > product structures.",
    deep: "Deep navigation of 4-5 levels is necessary for large enterprises, extensive documentation, or massive content archives. Requires careful breadcrumb design and search support to prevent user disorientation.",
    "mega-List": "Mega menus display multiple navigation levels in a rich dropdown panel with images, descriptions, and featured links. Ideal for e-commerce and content sites with many categories requiring visual browsing.",
    dynamic: "Dynamic or faceted navigation adjusts available options based on current context, filters, and user behavior. Navigation options change dynamically based on the content being browsed or searched.",
    "breadcrumb-only": "Breadcrumb-only navigation removes the top navigation bar entirely and relies solely on breadcrumb trails for orientation. Suitable for linear workflows like checkout, account setup, or guided tutorials.",
    "sidebar-nav": "Sidebar navigation provides a persistent vertical navigation panel that can expand/collapse sections. Excellent for documentation, dashboards, and content-heavy sites where context switching is frequent.",
  },
  contentTypes: {
    articles: "Articles form the core of content-driven sites. Each article needs a unique URL, publish date, author metadata, categories, tags, and SEO meta fields for proper indexing and content discovery.",
    products: "Products require structured data including SKU, price, availability, variants (size/color), images, and descriptions. URL structure should reflect category hierarchy for SEO best practices.",
    images: "Images and galleries need dedicated pages with high-resolution assets, EXIF data, captions, and share functionality. Implement lazy loading and responsive image sets for performance.",
    video: "Video content pages require embedded players, transcripts, chapter markers, and related video recommendations. Schema.org VideoObject markup is essential for rich search results.",
    audio: "Audio and podcast pages need embedded players, episode descriptions, show notes, download links, and RSS feed integration. Transcripts improve accessibility and SEO simultaneously.",
    documents: "Document and PDF pages provide downloadable resources with preview thumbnails, file size indicators, and categorization. Host on CDN with proper content-disposition headers for download management.",
    code: "Code snippet pages require syntax highlighting, copy-to-clipboard functionality, language labels, and version information. Useful for developer documentation, tutorials, and API references.",
    "user-content": "User-generated content includes reviews, comments, forum posts, and community submissions. Moderate for quality, implement pagination, and manage SEO for scalable user content pages.",
  },
  userFlows: {
    "browse-buy": "The browse-to-buy flow covers product discovery through category browsing, search, product detail viewing, add-to-cart, and checkout. Optimize each step for minimal friction and maximum conversion.",
    "signup-onboard": "The signup-to-onboard flow takes users from registration through profile setup to first meaningful interaction. Reduce drop-off by breaking onboarding into digestible steps with progress indicators.",
    "search-find": "The search-to-find flow is critical for content and documentation sites. Implement robust full-text search, faceted filters, and relevance ranking to help users locate information quickly.",
    "learn-certify": "The learn-to-certify flow guides students through course enrollment, lesson progression, assessment completion, and certificate issuance. Track progress and provide clear completion criteria at each stage.",
    "support-resolve": "The support-to-resolve flow starts with self-service options (FAQ, knowledge base), escalates to ticket submission, and ends with resolution. Measure time-to-resolution and customer satisfaction scores.",
    "explore-subscribe": "The explore-to-subscribe flow lets free users sample content or features before committing to a paid plan. Gate premium content behind subscription while making value immediately apparent.",
    "compare-choose": "The compare-to-choose flow helps users evaluate options side-by-side. Include comparison tables, feature highlights, reviews, and confidence indicators to facilitate informed decision-making.",
    "share-engage": "The share-to-engage flow encourages users to share content and participate in community discussions. Implement social sharing, comments, likes, and user profiles to foster engagement loops.",
  },
  seoPriority: {
    critical: "Critical priority pages like homepage, flagship products, and campaign landing pages should be crawled and indexed immediately. Submit to Google via Indexing API and include in the top priority Share2.",
    high: "High priority pages include category hubs, top-converting product pages, cornerstone articles, and key service pages. These form the bulk of organic search traffic and should be crawled daily.",
    medium: "Medium priority pages include standard blog posts, subcategory pages, and less prominent product pages. Weekly crawl frequency is appropriate unless content is updated more frequently.",
    low: "Low priority pages include archived content, old blog posts, thin affiliate pages, and secondary utility pages. Monthly or quarterly crawl frequency is sufficient for these lower-value pages.",
    noindex: "Noindex pages include admin areas, duplicate content, staging pages, internal search results, and thank-you pages. Use the noindex meta tag and exclude from the XML Share2 entirely.",
    canonical: "Canonical consolidation is essential for pages with multiple URL variations (sort, filter, pagination). Always specify a self-referencing canonical or point to the preferred version.",
    "structured-data": "Structured data markup (Schema.org) enables rich search results with stars, prices, FAQs, and breadcrumbs. Implement per page type: Product, Article, FAQPage, BreadcrumbList, and Organization.",
    "Share2-only": "Share2-only pages have no special crawl priority but should still be discoverable via Share2 submission. Suitable for rarely-updated reference content and archival materials.",
  },
  multiLanguage: {
    single: "Single language sites have a straightforward Share2 with no hreflang annotations. All content serves one locale, simplifying URL structure, content management, and SEO targeting.",
    dual: "Dual language sites serve two languages with a toggle. Implement hreflang tags, separate URL structures per language, and ensure translated content has equivalent SEO metadata.",
    multi: "Multi-language sites (3-5 languages) serve regional markets with localized content. Use hreflang Share2 annotations or HTML link tags. Each language version should be a complete, independent page.",
    global: "Global sites with 10+ languages require a scalable i18n strategy. Automate translation workflows, manage locale-specific SEO, and consider a translation management system for consistency.",
    rtl: "RTL support requires mirroring the layout for right-to-left languages (Arabic, Hebrew, Persian). Ensure the Share2, navigation, and UI components all properly reflect the RTL reading direction.",
    subdomain: "Subdomain-per-language (en.site.com, fr.site.com) treats each language as a separate site entity. Each subdomain needs its own Share2 and may be treated as separate properties in Google Search Console.",
    subdirectory: "Subdirectory-per-language (site.com/en/, site.com/fr/) keeps all languages under the same domain. Domain authority consolidates across languages, but URL management must be precise.",
    "auto-detect": "Auto-detect uses browser Accept-Language header, IP geolocation, or user preferences to serve the appropriate language. Implement with a language selector fallback for when detection is incorrect.",
  },
  maintenance: {
    static: "Static/manual maintenance means pages are hand-coded or manually created. Suitable for very small sites but becomes unsustainable as scale increases. Every URL change requires manual intervention.",
    "cms-driven": "CMS-driven maintenance uses a content management system (WordPress, Drupal, Contentful) where editors manage pages through an admin interface. Pages are database-driven with templates and plugins.",
    "headless-cms": "Headless CMS separates content management from presentation. Content is stored in a backend CMS and delivered via API to a frontend framework (Next.js, Gatsby) that generates pages at build or request time.",
    "auto-generated": "Auto-generated pages are created programmatically from structured data sources — product catalogs, API responses, database records, or spreadsheet imports. New data automatically creates new pages.",
    "git-based": "Git-based maintenance stores content as markdown or JSON files in a repository. Pages are built via CI/CD pipeline on each commit. Enables version control, code review, and rollback for content.",
    "scheduled-audit": "Scheduled audits run automated checks on the Share2: broken links, missing meta descriptions, orphaned pages, and redirect chains. Generate reports and create tickets for discovered issues.",
    "redirect-manager": "A redirect manager tracks all URL changes and maintains redirect rules. Automatically suggests redirects when pages are moved, detects redirect chains, and logs 404 hits for new page creation.",
    "health-monitor": "Health monitoring tracks page uptime, load speed, and status codes across the entire Share2. Alert on 404s, 500s, slow pages, and SSL certificate issues with integration to incident management tools.",
  },
};

function generate(selections: Record<string, any>, notes: Record<string, string>): string {
  const siteType = selections.step1;
  const pageCategories = selections.step2;
  const navigationDepth = selections.step3;
  const contentTypes = selections.step4;
  const userFlows = selections.step5;
  const seoPriority = selections.step6;
  const multiLanguage = selections.step7;
  const maintenance = selections.step8;

  const lines: string[] = [];

  lines.push("# Share2 Architecture Plan");
  lines.push("");
  lines.push("## Configuration Summary");
  lines.push("");
  lines.push("| Setting | Selection | Notes");
  lines.push("|---------|-----------|------");
  const stLabel = Array.isArray(siteType) ? siteType.map(id => options.siteType.find(o => o.id === id)?.title || id).join(", ") : options.siteType.find(o => o.id === siteType)?.title || siteType;
  const stNote = notes[`siteType-${siteType}`] || "";
  lines.push(`| Site Type | ${stLabel} | ${stNote}`);
  const pcLabel = Array.isArray(pageCategories) ? pageCategories.map(id => options.pageCategories.find(o => o.id === id)?.title || id).join(", ") : options.pageCategories.find(o => o.id === pageCategories)?.title || pageCategories;
  const pcNote = notes[`pageCategories-${pageCategories}`] || "";
  lines.push(`| Page Categories | ${pcLabel} | ${pcNote}`);
  const ndLabel = Array.isArray(navigationDepth) ? navigationDepth.map(id => options.navigationDepth.find(o => o.id === id)?.title || id).join(", ") : options.navigationDepth.find(o => o.id === navigationDepth)?.title || navigationDepth;
  const ndNote = notes[`navigationDepth-${navigationDepth}`] || "";
  lines.push(`| Navigation Depth | ${ndLabel} | ${ndNote}`);
  const ctLabel = Array.isArray(contentTypes) ? contentTypes.map(id => options.contentTypes.find(o => o.id === id)?.title || id).join(", ") : options.contentTypes.find(o => o.id === contentTypes)?.title || contentTypes;
  const ctNote = notes[`contentTypes-${contentTypes}`] || "";
  lines.push(`| Content Types | ${ctLabel} | ${ctNote}`);
  const ufLabel = Array.isArray(userFlows) ? userFlows.map(id => options.userFlows.find(o => o.id === id)?.title || id).join(", ") : options.userFlows.find(o => o.id === userFlows)?.title || userFlows;
  const ufNote = notes[`userFlows-${userFlows}`] || "";
  lines.push(`| User Flows | ${ufLabel} | ${ufNote}`);
  const seoLabel = Array.isArray(seoPriority) ? seoPriority.map(id => options.seoPriority.find(o => o.id === id)?.title || id).join(", ") : options.seoPriority.find(o => o.id === seoPriority)?.title || seoPriority;
  const seoNote = notes[`seoPriority-${seoPriority}`] || "";
  lines.push(`| SEO Priority | ${seoLabel} | ${seoNote}`);
  const mlLabel = Array.isArray(multiLanguage) ? multiLanguage.map(id => options.multiLanguage.find(o => o.id === id)?.title || id).join(", ") : options.multiLanguage.find(o => o.id === multiLanguage)?.title || multiLanguage;
  const mlNote = notes[`multiLanguage-${multiLanguage}`] || "";
  lines.push(`| Multi-Language | ${mlLabel} | ${mlNote}`);
  const mLabel = Array.isArray(maintenance) ? maintenance.map(id => options.maintenance.find(o => o.id === id)?.title || id).join(", ") : options.maintenance.find(o => o.id === maintenance)?.title || maintenance;
  const mNote = notes[`maintenance-${maintenance}`] || "";
  lines.push(`| Maintenance | ${mLabel} | ${mNote}`);
  lines.push("");

  lines.push("## Site Type Analysis");
  lines.push("");
  lines.push(Array.isArray(siteType) ? siteType.map(v => dict.siteType[v] || v).join(", ") : dict.siteType[siteType] || siteType);
  if (stNote) lines.push(`> **Note:** ${stNote}`);
  lines.push("");

  lines.push("## Page Inventory");
  lines.push("");
  lines.push("| # | Page Group | URL Pattern | Content Type | Auth | Priority | Est. Count");
  lines.push("|---|------------|-------------|--------------|------|----------|-----------");
  const pages: [string, string, string, string, string, string][] = [
    ["Homepage", "/", "Landing", "No", "Critical", "1"],
    ["About Us", "/about", "Utility", "No", "Medium", "1"],
    ["Contact", "/contact", "Form", "No", "Medium", "1"],
    ["Blog Index", "/blog", "Listing", "No", "High", "1"],
    ["Blog Post", "/blog/{slug}", "Articles", "No", "Medium", "50+"],
    ["Products", "/products", "Listing", "No", "High", "1"],
    ["Product Detail", "/products/{slug}", "Products", "No", "High", "100+"],
    ["FAQ", "/faq", "Utility", "No", "Low", "1"],
    ["Search Results", "/search", "Listing", "No", "Low", "1"],
    ["User Dashboard", "/account", "Account", "Yes", "Noindex", "1"],
  ];
  for (const [name, url, cat, auth, priority, count] of pages) {
    lines.push(`| ${name} | \`${url}\` | ${cat} | ${auth} | ${priority} | ${count}`);
  }
  lines.push("");

  lines.push("## URL Structure & Hierarchy");
  lines.push("");
  lines.push("```");
  lines.push("/                          # Homepage (Critical)");
  lines.push("├── about/                 # About Us");
  lines.push("│   ├── team/              # Team Members");
  lines.push("│   ├── careers/           # Job Openings");
  lines.push("│   └── press/             # Press Kit");
  lines.push("├── blog/                  # Blog Archive");
  lines.push("│   ├── {category}/        # Category Filter");
  lines.push("│   │   └── {slug}/        # Article");
  lines.push("│   └── tag/{tag}/         # Tag Filter");
  lines.push("├── products/              # Product Catalog");
  lines.push("│   ├── {category}/        # Category Page");
  lines.push("│   │   └── {product}/     # Product Detail");
  lines.push("│   └── featured/          # Featured Items");
  lines.push("├── faq/                   # Frequently Asked Questions");
  lines.push("├── contact/               # Contact Form");
  lines.push("├── search/                # Internal Search");
  lines.push("└── account/               # User Area (Auth)");
  lines.push("    ├── profile/           # Profile Settings");
  lines.push("    ├── orders/            # Order History");
  lines.push("    └── settings/          # Account Settings");
  lines.push("```");
  lines.push("");

  lines.push("## Navigation Structure");
  lines.push("");
  if (navigationDepth) {
    lines.push(`### Navigation Depth: ${ndLabel}`);
    lines.push("");
    lines.push(Array.isArray(navigationDepth) ? navigationDepth.map(v => dict.navigationDepth[v] || v).join(", ") : dict.navigationDepth[navigationDepth] || navigationDepth);
    if (ndNote) lines.push(`> **Note:** ${ndNote}`);
    lines.push("");
  }
  lines.push("### Site Navigation Map");
  lines.push("");
  if (navigationDepth === "flat") {
    lines.push("Top Nav: Home | About | Blog | Products | FAQ | Contact");
  } else if (navigationDepth === "shallow") {
    lines.push("Top Nav: Home | About (Team, Careers, Press) | Blog (Categories, Tags) | Products (Categories) | FAQ | Contact");
  } else if (navigationDepth === "moderate") {
    lines.push("Top Nav: Home | About | Blog | Products | Resources | FAQ | Contact");
    lines.push("├─ About: Team | Careers | Press");
    lines.push("├─ Blog: Category A | Category B | Category C | Tags");
    lines.push("├─ Products: Category A (Sub A, Sub B) | Category B (Sub A, Sub B) | Featured");
    lines.push("└─ Resources: Guides | Whitepapers | Webinars | Case Studies");
  } else {
    lines.push("Top Nav: Home | About | Blog | Products | Resources | Support | FAQ | Contact");
    lines.push("├─ About: Mission | Team | Careers | Press | Partners");
    lines.push("├─ Blog: Category A (Sub A1, Sub A2) | Category B | Category C | Tags | Authors");
    lines.push("├─ Products: Category A (Sub A1/a, Sub A1/b, Sub A2) | Category B (Sub B1, Sub B2) | Featured | Sale");
    lines.push("├─ Resources: Guides | Whitepapers | Webinars | Case Studies | Templates");
    lines.push("└─ Support: Help Center | Tickets | Status | Community");
  }
  lines.push("");

  lines.push("## XML Share2 Structure");
  lines.push("");
  lines.push("```xml");
  lines.push("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
  lines.push("<urlset xmlns=\"http://www.sitemaps.org/schemas/Share2/0.9\"");
  lines.push("          xmlns:xhtml=\"http://www.w3.org/1999/xhtml\">");
  lines.push("  <url>");
  lines.push("    <loc>https://example.com/</loc>");
  lines.push("    <lastmod>2026-06-30</lastmod>");
  lines.push("    <changefreq>daily</changefreq>");
  lines.push("    <priority>1.0</priority>");
  lines.push("  </url>");
  lines.push("  <url>");
  lines.push("    <loc>https://example.com/blog/</loc>");
  lines.push("    <lastmod>2026-06-29</lastmod>");
  lines.push("    <changefreq>daily</changefreq>");
  lines.push("    <priority>0.8</priority>");
  lines.push("  </url>");
  lines.push("</urlset>");
  lines.push("```");
  lines.push("");

  lines.push("## User Flow Analysis");
  lines.push("");
  lines.push(`### Primary Flow: ${ufLabel}`);
  lines.push("");
  lines.push(Array.isArray(userFlows) ? userFlows.map(v => dict.userFlows[v] || v).join(", ") : dict.userFlows[userFlows] || userFlows);
  if (ufNote) lines.push(`> **Note:** ${ufNote}`);
  lines.push("");

  lines.push("### Key Conversion Funnels");
  lines.push("");
  lines.push("| Stage | Page | Action | Metric | Target");
  lines.push("|-------|------|--------|--------|-------");
  lines.push("| Awareness | Home / Blog | Read content | Time on page | > 2 min");
  lines.push("| Interest | Category / Listing | Browse items | Pages per session | > 5 pages");
  lines.push("| Consideration | Product / Service | View details | Add to cart rate | > 15%");
  lines.push("| Conversion | Checkout / Signup | Complete action | Conversion rate | > 3%");
  lines.push("| Retention | Dashboard / Account | Return visit | Retention rate | > 40%");
  lines.push("| Advocacy | Share / Review | Refer others | NPS score | > 50");
  lines.push("");

  lines.push("## SEO Strategy");
  lines.push("");
  lines.push(`### Priority Level: ${seoLabel}`);
  lines.push("");
  lines.push(Array.isArray(seoPriority) ? seoPriority.map(v => dict.seoPriority[v] || v).join(", ") : dict.seoPriority[seoPriority] || seoPriority);
  if (seoNote) lines.push(`> **Note:** ${seoNote}`);
  lines.push("");

  lines.push("### Page-Level SEO Recommendations");
  lines.push("");
  lines.push("| Page Type | Title Tag | Meta Description | H1 | Schema Type");
  lines.push("|-----------|-----------|-----------------|-----|------------");
  lines.push("| Homepage | Brand Name - Tagline | Value proposition | Headline | Organization");
  lines.push("| Blog Post | Post Title | Excerpt | Post Title | Article");
  lines.push("| Product | Product Name | Key features | Product Name | Product");
  lines.push("| Category | Category Name | Browse selection | Category Name | CollectionPage");
  lines.push("| FAQ | FAQs - Brand | Common questions | Frequently Asked Questions | FAQPage");
  lines.push("");

  lines.push("## Multi-Language Strategy");
  lines.push("");
  lines.push(Array.isArray(multiLanguage) ? multiLanguage.map(v => dict.multiLanguage[v] || v).join(", ") : dict.multiLanguage[multiLanguage] || multiLanguage);
  if (mlNote) lines.push(`> **Note:** ${mlNote}`);
  lines.push("");
  if (multiLanguage !== "single") {
    lines.push("### Hreflang Implementation");
    lines.push("");
    lines.push("```html");
    lines.push("<link rel=\"alternate\" hreflang=\"en\" href=\"https://example.com/en/\" />");
    lines.push("<link rel=\"alternate\" hreflang=\"fr\" href=\"https://example.com/fr/\" />");
    lines.push("<link rel=\"alternate\" hreflang=\"de\" href=\"https://example.com/de/\" />");
    lines.push("<link rel=\"alternate\" hreflang=\"x-default\" href=\"https://example.com/\" />");
    lines.push("```");
    lines.push("");
  }

  lines.push("## Share2 Flow Diagram");
  lines.push("");
  lines.push("```");
  lines.push("┌─────────────────────────────┐");
  lines.push("│      Site Type Config      │");
  lines.push(`│      ${stLabel.padEnd(22)}│`);
  lines.push("└─────────────┬───────────────┘");
  lines.push("              ▼");
  lines.push("┌─────────────────────────────┐");
  lines.push("│     Page Categories         │");
  lines.push(`│     ${pcLabel.padEnd(22)}│`);
  lines.push("└─────────────┬───────────────┘");
  lines.push("              ▼");
  lines.push("┌─────────────────────────────┐");
  lines.push("│     Navigation Depth        │");
  lines.push(`│     ${ndLabel.padEnd(22)}│`);
  lines.push("└─────────────┬───────────────┘");
  lines.push("              ▼");
  lines.push("┌─────────────────────────────┐");
  lines.push("│      Content Types          │");
  lines.push(`│      ${ctLabel.padEnd(22)}│`);
  lines.push("└─────────────┬───────────────┘");
  lines.push("              ▼");
  lines.push("┌─────────────────────────────┐");
  lines.push("│      User Flows             │");
  lines.push(`│      ${ufLabel.padEnd(22)}│`);
  lines.push("└─────────────┬───────────────┘");
  lines.push("              ▼");
  lines.push("┌─────────────────────────────┐");
  lines.push("│      SEO Priority           │");
  lines.push(`│      ${seoLabel.padEnd(22)}│`);
  lines.push("└─────────────┬───────────────┘");
  lines.push("              ▼");
  lines.push("┌─────────────────────────────┐");
  lines.push("│     Multi-Language          │");
  lines.push(`│     ${mlLabel.padEnd(22)}│`);
  lines.push("└─────────────┬───────────────┘");
  lines.push("              ▼");
  lines.push("┌─────────────────────────────┐");
  lines.push("│      Maintenance Plan       │");
  lines.push(`│      ${mLabel.padEnd(22)}│`);
  lines.push("└─────────────────────────────┘");
  lines.push("```");
  lines.push("");

  lines.push("## Maintenance Strategy");
  lines.push("");
  lines.push(Array.isArray(maintenance) ? maintenance.map(v => dict.maintenance[v] || v).join(", ") : dict.maintenance[maintenance] || maintenance);
  if (mNote) lines.push(`> **Note:** ${mNote}`);
  lines.push("");
  lines.push("### Share2 Maintenance Checklist");
  lines.push("");
  lines.push("- [ ] Regenerate Share2 when content is added, updated, or removed.");
  lines.push("- [ ] Validate all URLs in the Share2 return 200 status codes.");
  lines.push("- [ ] Ensure no broken internal links exist across the entire site.");
  lines.push("- [ ] Check for orphaned pages not linked from any navigation.");
  lines.push("- [ ] Review redirect chains and consolidate where possible.");
  lines.push("- [ ] Verify hreflang tags point to correct language variants.");
  lines.push("- [ ] Confirm noindex pages are excluded from the XML Share2.");
  lines.push("- [ ] Check Share2 index file references all sub-sitemaps correctly.");
  lines.push("");

  lines.push("## Performance & Technical Considerations");
  lines.push("");
  lines.push("| Concern | Recommendation");
  lines.push("|---------|--------------");
  lines.push("| Share2 Size | Keep under 50,000 URLs or 50MB per Share2 file");
  lines.push("| Share2 Index | Use a Share2 index file to reference multiple sub-sitemaps");
  lines.push("| Compression | Gzip Share2 files — most search engines accept .xml.gz");
  lines.push("| Submission | Submit to Google Search Console and Bing Webmaster Tools");
  lines.push("| Dynamic Sitemaps | Generate on content change events, not on every request");
  lines.push("| Robots.txt | Reference the Share2 location in robots.txt for discovery");
  lines.push("| CDN Caching | Cache Share2 on CDN with 1-hour TTL for fast crawling");
  lines.push("| Monitoring | Set up alerts for Share2 parsing errors from search consoles");
  lines.push("");

  lines.push("---");
  lines.push("");
  lines.push("_Generated by Share2 Generator_");

  return lines.join("\n");
}

export default function SitemapGenPage() {
  return (
    <ToolShell
      title="Share2 Generator"
      steps={[
        { id: 1, label: "Site Type", component: (p) => (
          <GenericStep {...p} title="Select Site Type" description="What kind of website are you building?" options={options.siteType} mode="multiple" selected={p.selections.step1} selectKey="step1" notePrefix="siteType" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 2, label: "Pages", component: (p) => (
          <GenericStep {...p} title="Select Page Categories" description="What categories of pages does your site need?" options={options.pageCategories} mode="multiple" selected={p.selections.step2} selectKey="step2" notePrefix="pageCategories" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 3, label: "Nav Depth", component: (p) => (
          <GenericStep {...p} title="Set Navigation Depth" description="How deep should your site navigation be?" options={options.navigationDepth} mode="multiple" selected={p.selections.step3} selectKey="step3" notePrefix="navigationDepth" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 4, label: "Content", component: (p) => (
          <GenericStep {...p} title="Select Content Types" description="What types of content will your site host?" options={options.contentTypes} mode="multiple" selected={p.selections.step4} selectKey="step4" notePrefix="contentTypes" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 5, label: "User Flows", component: (p) => (
          <GenericStep {...p} title="Define User Flows" description="What are the key user journeys on your site?" options={options.userFlows} mode="multiple" selected={p.selections.step5} selectKey="step5" notePrefix="userFlows" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 6, label: "SEO", component: (p) => (
          <GenericStep {...p} title="Set SEO Priority" description="How should search engines prioritize your pages?" options={options.seoPriority} mode="multiple" selected={p.selections.step6} selectKey="step6" notePrefix="seoPriority" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 7, label: "Languages", component: (p) => (
          <GenericStep {...p} title="Multi-Language Support" description="Does your Share2 need to support multiple languages?" options={options.multiLanguage} mode="multiple" selected={p.selections.step7} selectKey="step7" notePrefix="multiLanguage" notes={p.notes} onNote={p.onNote} />
        )},
        { id: 8, label: "Maintenance", component: (p) => (
          <GenericStep {...p} title="Maintenance Strategy" description="How will the Share2 be maintained over time?" options={options.maintenance} mode="multiple" selected={p.selections.step8} selectKey="step8" notePrefix="maintenance" notes={p.notes} onNote={p.onNote} />
        )},
      ]}
      onGenerate={generate}
    />
  );
}













