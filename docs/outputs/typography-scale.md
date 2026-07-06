# Typography Scale: SunriseBot

**Font Stack:**
- Headings: `Inter` (sans-serif)
- Body: `Inter` (sans-serif)
- Mono: `JetBrains Mono` (monospace)
- Fallback: `system-ui, -apple-system, sans-serif`

---

## Type Scale (1.25 — Major Third)

| Step | Name | Size | Line Height | Weight | Letter Spacing | CSS |
|------|------|------|-------------|--------|---------------|-----|
| -2 | caption | 0.75rem (12px) | 1.4 | 400 | 0.01em | `text-caption` |
| -1 | small | 0.875rem (14px) | 1.5 | 400 | 0 | `text-small` |
| 0 | base | 1rem (16px) | 1.6 | 400 | 0 | `text-base` |
| 1 | h6 | 1.25rem (20px) | 1.4 | 600 | -0.01em | `text-h6` |
| 2 | h5 | 1.563rem (25px) | 1.35 | 600 | -0.015em | `text-h5` |
| 3 | h4 | 1.953rem (31px) | 1.3 | 650 | -0.02em | `text-h4` |
| 4 | h3 | 2.441rem (39px) | 1.25 | 650 | -0.025em | `text-h3` |
| 5 | h2 | 3.052rem (49px) | 1.2 | 700 | -0.03em | `text-h2` |
| 6 | h1 | 3.815rem (61px) | 1.15 | 700 | -0.035em | `text-h1` |
| 7 | display | 4.768rem (76px) | 1.1 | 800 | -0.04em | `text-display` |

## Responsive Scale (Mobile)

| Step | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| h1 | 2.441rem (39px) | 3.052rem (49px) | 3.815rem (61px) |
| h2 | 1.953rem (31px) | 2.441rem (39px) | 3.052rem (49px) |
| h3 | 1.563rem (25px) | 1.953rem (31px) | 2.441rem (39px) |
| h4 | 1.25rem (20px) | 1.563rem (25px) | 1.953rem (31px) |
| base | 0.875rem (14px) | 1rem (16px) | 1rem (16px) |

## Font Weights

| Weight | CSS Name | Usage |
|--------|----------|-------|
| 400 | Regular | Body text, paragraphs |
| 500 | Medium | Navigation, labels |
| 600 | Semibold | Subheadings, buttons |
| 700 | Bold | Headings (h2–h4) |
| 800 | Extra Bold | Display, h1 |

## CSS Custom Properties

```css
:root {
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --text-caption:   0.75rem;
  --text-small:     0.875rem;
  --text-base:      1rem;
  --text-h6:        1.25rem;
  --text-h5:        1.563rem;
  --text-h4:        1.953rem;
  --text-h3:        2.441rem;
  --text-h2:        3.052rem;
  --text-h1:        3.815rem;
  --text-display:   4.768rem;

  --leading-tight:  1.15;
  --leading-normal: 1.5;
  --leading-relaxed: 1.6;
  --leading-loose:  1.8;
}
```

## Usage Examples

```html
<h1 class="text-h1">Welcome to SunriseBot</h1>
<p class="text-base leading-relaxed">
  Your intelligent support assistant that never sleeps.
</p>
<small class="text-caption text-stone">
  Last updated 2 hours ago
</small>
<code class="font-mono text-small">npm install sunrise-bot</code>
```

## Mono Specs (Code)

```
Font: JetBrains Mono
Weights: 400, 500, 600
Size: 0.875rem (14px) — body code
       0.75rem (12px)  — inline code
Line height: 1.6
Ligatures: Enabled (->, =>, !==, etc)
```

## Line Length Max
| Context | Max Width | Characters |
|---------|-----------|------------|
| Article body | 680px | ~70ch |
| UI panels | 480px | ~50ch |
| Dashboard cards | 320px | ~35ch |
| Code blocks | 100% | Scroll if overflow |
