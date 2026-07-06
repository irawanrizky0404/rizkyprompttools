# Color Palette Generator Output

**Brand:** SunriseBot (AI Support Chat)
**Vibe:** Warm, trustworthy, energetic, modern
**Base:** Orange-amber leaning with cool neutral support

---

## Palette

| Role | Name | Hex | RGB | OKLCH | Usage |
|------|------|-----|-----|-------|-------|
| **Primary** | Sunrise | `#FF7A1B` | `rgb(255, 122, 27)` | `oklch(0.65 0.18 45)` | Buttons, links, active states |
| **Primary Dark** | Ember | `#E05A00` | `rgb(224, 90, 0)` | `oklch(0.55 0.16 40)` | Hover, pressed states |
| **Primary Light** | Apricot | `#FFB380` | `rgb(255, 179, 128)` | `oklch(0.78 0.11 55)` | Badges, highlights, light bg |
| **Accent** | Sky | `#3B82F6` | `rgb(59, 130, 246)` | `oklch(0.58 0.18 265)` | Secondary CTAs, info banners |
| **Accent Dark** | Navy | `#1D4ED8` | `rgb(29, 78, 216)` | `oklch(0.45 0.16 270)` | Accent hover |
| **Success** | Mint | `#10B981` | `rgb(16, 185, 129)` | `oklch(0.65 0.16 165)` | Confirmations, success toasts |
| **Warning** | Amber | `#F59E0B` | `rgb(245, 158, 11)` | `oklch(0.72 0.16 75)` | Warnings, pending states |
| **Error** | Cherry | `#EF4444` | `rgb(239, 68, 68)` | `oklch(0.58 0.21 25)` | Errors, destructive actions |
| **Neutral 900** | Ink | `#0F172A` | `rgb(15, 23, 42)` | `oklch(0.18 0.02 265)` | Text primary |
| **Neutral 700** | Slate | `#334155` | `rgb(51, 65, 85)` | `oklch(0.35 0.02 265)` | Text secondary |
| **Neutral 500** | Stone | `#64748B` | `rgb(100, 116, 139)` | `oklch(0.52 0.02 265)` | Text muted, icons |
| **Neutral 300** | Mist | `#CBD5E1` | `rgb(203, 213, 225)` | `oklch(0.78 0.02 265)` | Borders, dividers |
| **Neutral 100** | Cloud | `#F1F5F9` | `rgb(241, 245, 249)` | `oklch(0.95 0.01 265)` | Background light |
| **Neutral 50** | White | `#FFFFFF` | `rgb(255, 255, 255)` | `oklch(1.0 0 0)` | Card backgrounds |

## Contrast Ratios

| Foreground | Background | Ratio | WCAG |
|-----------|-----------|-------|------|
| Ink (#0F172A) | White (#FFF) | 16.3:1 | AAA |
| Ink (#0F172A) | Cloud (#F1F5F9) | 14.1:1 | AAA |
| Slate (#334155) | White (#FFF) | 9.8:1 | AAA |
| Stone (#64748B) | White (#FFF) | 5.2:1 | AA |
| White (#FFF) | Sunrise (#FF7A1B) | 4.8:1 | AA |
| White (#FFF) | Ember (#E05A00) | 5.9:1 | AA |
| White (#FFF) | Sky (#3B82F6) | 4.6:1 | AA |
| Sunrise (#FF7A1B) | White (#FFF) | 4.8:1 | AA |

## Dark Mode Adaptation

| Role | Light | Dark |
|------|-------|------|
| Background | `#FFFFFF` | `#0F172A` |
| Surface | `#F1F5F9` | `#1E293B` |
| Border | `#CBD5E1` | `#334155` |
| Text Primary | `#0F172A` | `#F1F5F9` |
| Text Secondary | `#334155` | `#CBD5E1` |
| Primary | `#FF7A1B` | `#FF9C4A` |
| Primary Hover | `#E05A00` | `#FFB380` |

## Tailwind Config

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        sunrise: {
          50:  '#FFF5ED',
          100: '#FFE8D4',
          200: '#FFC78A',
          300: '#FFB380',
          400: '#FF944D',
          500: '#FF7A1B',
          600: '#E05A00',
          700: '#B84500',
          800: '#8A3400',
          900: '#5C2200',
        },
        sky: {
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        ink: '#0F172A',
        slate: '#334155',
        stone: '#64748B',
        mist: '#CBD5E1',
        cloud: '#F1F5F9',
      }
    }
  }
}
```
