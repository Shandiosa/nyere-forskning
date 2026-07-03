# Consort Design System

> Last updated: June 2026

## About Consort

**Consort AS** is a Norwegian consultancy/advisory firm. The brand communicates through a warm, trustworthy, and distinctly different voice — an open, honest, and engaged advisory tone that is easy to understand, clear, and solution-focused. Always with strong visual contrasts.

The company name "Consort" and its tree logo suggest partnership, growth, and rootedness — a company that cares about what it does, and conveys this with warmth and clarity.

### Sources

The following files were provided for building this design system:
- `uploads/Poppins-Black.ttf` — Display font (Black weight)
- `uploads/Poppins-ExtraBold.ttf` — Display font (ExtraBold weight)
- `uploads/200x40.png` — Horizontal logo lockup
- `uploads/Consort_logo_tre_grønn.png` — Tree icon logo mark
- `uploads/Consort_logo_tre-og-navn_grønn_portrait.png` — Portrait lockup (icon + wordmark)
- `uploads/Dots - kvadrat.png` — Square dot-grid brand ornament
- `uploads/Dots - linje.png` — Single-line dot ornament
- `uploads/Dots - rektangel.png` — Rectangular dot-grid ornament
- `uploads/Dots - tripptrapp.png` — Staircase/step dot ornament

No Figma files, GitHub repositories, or other codebases were provided.

---

## CONTENT FUNDAMENTALS

### Voice & Tone
Consort communicates in **Norwegian** with a warm, advisory, and trustworthy voice. Key qualities:

- **Åpen og ærlig** (Open and honest) — no jargon, no corporate-speak
- **Engasjert** (Engaged) — genuinely interested, never robotic
- **Oppmerksom og ekte** (Attentive and real) — meets people where they are
- **Leken og nysgjerrig** (Playful and curious) — balanced with professionalism
- **Løsningsfokusert** (Solution-focused) — always pointing forward

### Casing
- Headlines: **Sentence case** (not ALL CAPS or Title Case)
- Buttons/CTAs: Sentence case
- Labels/tags: Can use uppercase with wide letter-spacing for distinction

### Pronouns & Address
- Addresses users as **"du"** (informal you in Norwegian)
- Speaks as **"vi"** (we) for Consort
- Example: *"Vi hjelper deg å finne de riktige løsningene."*

### Copywriting Style
- Short, clear sentences. No padding.
- Specificity over vagueness: "Vi leverer innen 48 timer" not "Vi er raske"
- Warmth through concrete detail, not adjectives
- Questions to invite engagement: *"Lurer du på noe?"*
- No emoji in professional/formal contexts; occasional use in casual digital comms

### Examples
| ✅ Consort tone | ❌ Not Consort |
|---|---|
| "Vi bryr oss om det vi gjør." | "Vi er ledende innen bransjen." |
| "Enkelt, og med løsninger i fokus." | "Innovative, cutting-edge solutions." |
| "Hva trenger du hjelp med?" | "Submit a request below." |

---

## VISUAL FOUNDATIONS

### Colors
| Token | Value | Usage |
|---|---|---|
| `--color-brand-green` | `#0BCD75` | Primary brand, CTAs, highlights |
| `--color-brand-blue` | `#0C8BE2` | Secondary brand, accents, links |
| `--color-brand-yellow` | `#FFC335` | Tertiary, warnings, warm accents |
| `--color-bg-dark` | `#0D0D0D` | Dark surfaces, dramatic backgrounds |
| `--color-bg-light` | `#FFFFFF` | Default light surface |
| Gradient | `#0BCD75 → #0C8BE2` | Dot ornaments, CTAs, highlights |

**Always strong contrasts** — a core brand principle. White text on dark, dark text on light, never grey-on-grey.

### Typography
- **Display/Headlines**: Poppins Black (900) and ExtraBold (800)
- **Body**: Segoe UI (system) — familiar, readable, accessible
- Headlines: very tight tracking (`-0.03em`), large scale contrast
- Body: relaxed line-height (1.7) for readability

### Spacing & Layout
- 8px base grid
- Generous white space — "less is more" approach
- Max content width: 1200px
- Sections use full-bleed color bands (dark vs. light alternating)

### Backgrounds
- Two primary surfaces: **near-black `#0D0D0D`** and **white `#FFFFFF`**
- Subtle off-white `#F5F5F5` for secondary sections
- No background imagery as a rule — brand relies on typography + dots + color
- Dot patterns used as decorative texture on backgrounds

### Dot Ornaments
The "Dots" pattern family is a **key brand differentiator**. They use the brand gradient (green → blue) and come in four shapes:
- **Kvadrat** (square grid) — large area fill, section backgrounds
- **Rektangel** (rectangle grid) — wider panels, headers
- **Linje** (single line) — dividers, horizontal separators
- **Tripptrapp** (staircase) — step-pattern, dynamic sections

Used as corner accents, section dividers, background texture, and decorative framing.

### Animations
- Subtle, purposeful — no flashy effects
- Transitions: `ease-out`, 200–300ms for UI interactions
- Hover: slight upward translate (`translateY(-2px)`) + shadow increase
- Press/click: slight downward translate (`translateY(1px)`) + scale `0.98`
- No infinite decorative loops

### Hover & Press States
- **Buttons**: Brightness increase (`filter: brightness(1.1)`), slight lift
- **Cards**: Elevation increase (shadow deepens), `translateY(-2px)`
- **Links**: Color shift to `--color-brand-blue`
- **Press**: Scale `0.98`, `translateY(1px)`

### Borders
- Subtle: `1px solid #E0E0E0` for cards on light backgrounds
- Strong: `1px solid #0D0D0D` for outlined elements
- Brand: `2px solid #0BCD75` for active/focused states
- No decorative borders with color-left-accent only pattern

### Shadows
- Light: `0 1px 3px rgba(0,0,0,0.10)` — card resting state
- Medium: `0 4px 16px rgba(0,0,0,0.12)` — elevated cards
- Large: `0 8px 32px rgba(0,0,0,0.15)` — modals, overlays
- Brand glow: `0 4px 20px rgba(11,205,117,0.25)` — for brand-colored elements

### Corner Radii
- Small UI elements (badges, tags): `4px`
- Cards, inputs, buttons: `8px`
- Larger cards: `12px`
- Pills/chips: `9999px`
- Logo mark: always circular

### Cards
- Background: white or `#0D0D0D`
- Border: `1px solid #E0E0E0` on light; no border on dark
- Border-radius: `8–12px`
- Shadow: `--shadow-md` at rest, `--shadow-lg` on hover
- Padding: `24–32px`

### Imagery
- No photographic imagery provided — brand relies on type + geometry + dots
- When imagery is used: high-contrast, clean photography
- Color vibe: cool-to-neutral, not warm/filtered

### Transparency & Blur
- Avoid frosted-glass effects — brand prefers hard, clean surfaces
- Overlays: `rgba(13,13,13,0.7)` for dark scrims

---

## ICONOGRAPHY

No icon system was provided in the source assets. **Recommendation**: Use [Lucide Icons](https://lucide.dev/) — available via CDN — as it matches the brand's clean, modern, slightly geometric aesthetic.

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

Usage: `<i data-lucide="arrow-right"></i>` then `lucide.createIcons();`

- **Style**: Stroke-based, 1.5–2px weight, rounded line caps
- **Size**: 16px (inline), 20px (UI), 24px (standalone)
- **Color**: Inherits from parent or use brand tokens
- **No emoji** in formal/professional contexts
- **Unicode symbols** not used as icons

### Logo Assets (in `assets/`)
| File | Usage |
|---|---|
| `assets/logo-tree.png` | Standalone icon mark (circular) |
| `assets/logo-portrait.png` | Portrait lockup — icon + "Consort" wordmark |
| `assets/logo-horizontal.png` | Horizontal lockup — default for headers |

### Dot Ornament Assets (in `assets/`)
| File | Usage |
|---|---|
| `assets/dots-kvadrat.png` | Square grid — large decorative backgrounds |
| `assets/dots-rektangel.png` | Rectangular grid — wide panels |
| `assets/dots-linje.png` | Single line — dividers, separators |
| `assets/dots-tripptrapp.png` | Staircase — dynamic section accents |

---

## FILE INDEX

```
/
├── README.md                    ← This file (brand guide + manifest)
├── colors_and_type.css          ← All CSS tokens: colors, type, spacing, radius, shadows
├── SKILL.md                     ← Agent skill definition
│
├── fonts/
│   ├── Poppins-Black.ttf
│   └── Poppins-ExtraBold.ttf
│
├── assets/
│   ├── logo-tree.png            ← Icon mark
│   ├── logo-portrait.png        ← Portrait lockup
│   ├── logo-horizontal.png      ← Horizontal lockup (default)
│   ├── dots-kvadrat.png         ← Dot ornament: square grid
│   ├── dots-rektangel.png       ← Dot ornament: rectangle grid
│   ├── dots-linje.png           ← Dot ornament: line
│   └── dots-tripptrapp.png      ← Dot ornament: staircase
│
├── preview/                     ← Design System tab cards
│   ├── colors-brand.html
│   ├── colors-neutral.html
│   ├── colors-semantic.html
│   ├── colors-gradient.html
│   ├── type-display.html
│   ├── type-body.html
│   ├── type-scale.html
│   ├── spacing-tokens.html
│   ├── spacing-radius.html
│   ├── spacing-shadows.html
│   ├── brand-logos.html
│   ├── brand-dots.html
│   ├── components-buttons.html
│   ├── components-badges.html
│   ├── components-cards.html
│   ├── components-forms.html
│   └── components-nav.html
│
└── ui_kits/
    └── web/
        ├── README.md
        ├── index.html           ← Main interactive prototype
        ├── Header.jsx
        ├── Hero.jsx
        ├── Services.jsx
        ├── ContactSection.jsx
        └── Footer.jsx
```
