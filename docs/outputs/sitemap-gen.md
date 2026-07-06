# Sitemap Generator Output

**Website:** TaskFlow Pro (project management SaaS)
**Base URL:** `https://taskflowpro.app`

---

## Structure

```
/
├── (marketing) — Public pages
│   ├── /                          Homepage
│   ├── /features                  Feature overview
│   ├── /features/boards           Kanban boards
│   ├── /features/automation       Automation rules
│   ├── /features/timeline         Gantt timeline
│   ├── /features/reports          Analytics & reports
│   ├── /pricing                   Pricing (3 tiers)
│   ├── /pricing/enterprise        Enterprise plan
│   ├── /integrations              All integrations
│   ├── /integrations/slack        Slack integration
│   ├── /integrations/github       GitHub integration
│   ├── /integrations/figma        Figma integration
│   ├── /about                     About us
│   ├── /blog                      Blog (paginated)
│   ├── /blog/remote-work-tips     Blog post
│   ├── /blog/sprint-planning      Blog post
│   ├── /blog/agile-vs-waterfall   Blog post
│   ├── /changelog                 Product updates
│   ├── /docs                      Knowledge base
│   ├── /docs/getting-started      Quickstart guide
│   ├── /docs/tutorials            Video tutorials
│   ├── /docs/faq                  FAQ
│   ├── /status                    Status page
│   ├── /contact                   Contact sales
│   ├── /legal/privacy             Privacy policy
│   ├── /legal/terms               Terms of service
│   ├── /legal/gdpr                GDPR compliance
│   └── /legal/cookies             Cookie policy
│
├── (auth) — Pre-authentication
│   ├── /login                     Sign in
│   ├── /signup                    Sign up
│   ├── /forgot-password           Reset password
│   └── /verify-email              Email verification
│
└── (app) — Authenticated routes
    ├── /dashboard                 User dashboard
    ├── /workspace/{id}            Workspace home
    ├── /workspace/{id}/board/{id} Single board
    ├── /workspace/{id}/timeline   Project timeline
    ├── /workspace/{id}/calendar   Calendar view
    ├── /workspace/{id}/members    Team members
    ├── /workspace/{id}/settings   Workspace settings
    ├── /profile                   User profile
    ├── /profile/notifications     Notification prefs
    └── /profile/billing           Billing & invoices
```

## XML Output

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://taskflowpro.app/</loc>
    <lastmod>2025-06-15</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://taskflowpro.app/en"/>
    <xhtml:link rel="alternate" hreflang="id" href="https://taskflowpro.app/id"/>
  </url>
  <url>
    <loc>https://taskflowpro.app/features</loc>
    <lastmod>2025-06-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://taskflowpro.app/pricing</loc>
    <lastmod>2025-06-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://taskflowpro.app/blog</loc>
    <lastmod>2025-06-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://taskflowpro.app/docs/getting-started</loc>
    <lastmod>2025-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

## Robots.txt

```
User-agent: *
Allow: /
Disallow: /app/
Disallow: /api/
Disallow: /login
Disallow: /signup
Disallow: /forgot-password

Sitemap: https://taskflowpro.app/sitemap.xml
```

## Page Distribution Summary

| Category | Count | Crawl Priority |
|----------|-------|---------------|
| Marketing (static) | 24 | High |
| Auth | 4 | Low (index blocked) |
| App (authenticated) | 11 | None (blocked) |
| Blog | ~150 | Medium |
| Docs | ~40 | Medium |
| **Total indexable** | **~218** | |
