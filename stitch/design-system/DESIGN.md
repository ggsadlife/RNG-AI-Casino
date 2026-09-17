---
name: Live Handset Pit
colors:
  surface: '#0d1228'
  surface-dim: '#0d1228'
  surface-bright: '#333850'
  surface-container-lowest: '#080d22'
  surface-container-low: '#151a30'
  surface-container: '#191e35'
  surface-container-high: '#242940'
  surface-container-highest: '#2f334b'
  on-surface: '#dde1ff'
  on-surface-variant: '#bcc9ce'
  inverse-surface: '#dde1ff'
  inverse-on-surface: '#2a2f46'
  outline: '#869398'
  outline-variant: '#3c494d'
  surface-tint: '#45d7fc'
  primary: '#baedff'
  on-primary: '#003642'
  primary-container: '#49d9ff'
  on-primary-container: '#005c70'
  inverse-primary: '#00677d'
  secondary: '#8ed0ec'
  on-secondary: '#003545'
  secondary-container: '#005a72'
  on-secondary-container: '#8dcfec'
  tertiary: '#dce5ff'
  on-tertiary: '#1c3055'
  tertiary-container: '#b6c9f7'
  on-tertiary-container: '#42547b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b3ebff'
  primary-fixed-dim: '#45d7fc'
  on-primary-fixed: '#001f27'
  on-primary-fixed-variant: '#004e5f'
  secondary-fixed: '#bbe9ff'
  secondary-fixed-dim: '#8ed0ec'
  on-secondary-fixed: '#001f29'
  on-secondary-fixed-variant: '#004d63'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#b4c6f4'
  on-tertiary-fixed: '#041a3f'
  on-tertiary-fixed-variant: '#34466d'
  background: '#0d1228'
  on-background: '#dde1ff'
  surface-variant: '#2f334b'
  stage-night: '#090e1c'
  frame-navy: '#11162c'
  pit-steel: '#14284d'
  pit-steel-deep: '#143363'
  enter-ice-start: '#e4ffff'
  enter-ice-end: '#9cdefb'
  enter-ink: '#053358'
  paper-light: '#f4f8ff'
  mist-caption: '#a9ccef'
  mist-caption-soft: '#aac9e8'
  ice-signal: '#49d9ff'
  ice-rim: '#4fc9ff'
  ice-focus: '#83e7ff'
  structural-border: '#579ce7'
  structural-border-subtle: '#244574'
  wallet-glass: '#122653c7'
  wallet-rim: '#345e9b'
  hero-violet: '#3222a1'
  banker-bead: '#ef54b9'
  player-bead: '#75c5ff'
  tie-slash: '#39eb82'
  table-header-start: '#1d477f'
  table-header-end: '#213761'
  dealer-caption: '#195d9ad9'
  badge-navy: '#134b6e'
typography:
  headline-lg:
    fontFamily: Outfit
    fontSize: 34px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 26px
    fontWeight: '800'
    lineHeight: 32px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 26px
    letterSpacing: 0.03em
  headline-sm:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 22px
    letterSpacing: 0.04em
  body-lg:
    fontFamily: Outfit
    fontSize: 15px
    fontWeight: '500'
    lineHeight: 22px
  body-md:
    fontFamily: Outfit
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 19px
  body-sm:
    fontFamily: Outfit
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
  label-mono-lg:
    fontFamily: Geist Mono
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: -0.01em
  label-mono-md:
    fontFamily: Geist Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-mono-sm:
    fontFamily: Geist Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
  badge-caps:
    fontFamily: Outfit
    fontSize: 10px
    fontWeight: '800'
    lineHeight: 12px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 0.5rem
  gutter-loose: 0.75rem
  margin: 0.75rem
  margin-mobile: 0.5rem
  space-xxs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.25rem
  space-2xl: 1.75rem
---

## Brand & Style

The design system establishes an authentic live-casino handset environment anchored to a 9:16 mobile container floating over a dimmed, blurred dealer stage. It abandons SaaS dashboard neutrality and generic "AI purple" neon landing-page theatrics in favor of an intense, disciplined live pit atmosphere: cool navy steel, ice-cyan active signals, and photographic live-dealer tiles. 

The aesthetic is **High-Contrast Cockpit & Tactile Glass** tuned for operational scanning. It prioritizes immediate, high-density comprehension (density dial 7, variance dial 5) across three core operational loops: lobby glance, category filter, and table preview. The visual mood evokes looking through anti-reflective casino glass under deep stage illumination. 

Every surface communicates honest demo functionality without speculative marketing copy or false real-money claims. Visual weight is carried entirely by genuine dealer photography framed in precision-milled navy geometry and accented by a singular chromatic signal hue: Ice Signal.

## Colors

The system uses a strict, cold single-accent color engine. Pure black (`#000000`) is strictly forbidden; all dark values are rooted in oceanic pit tones. 

- **Primary Accent (`#49d9ff` — Ice Signal):** The only brand action and focus hue on chrome. Used for focus rings, DEMO badges, category active states, and structural hairline borders.
- **Secondary Action (`#9cdefb` — Enter Ice):** Combined with `#e4ffff` as a 180° linear gradient fill for primary "Enter" CTAs, using dark navy ink (`#053358`) for maximum contrast and tactile punch.
- **Tertiary Surface (`#14284d` — Pit Steel):** Foundations for road cards, table preview containers, and interactive tiles.
- **Neutral Canvas (`#11162c` — Frame Navy):** The 9:16 handset body background. Surrounded on wider screens by `#090e1c` (Stage Night).

### Data Domain Colors
- **Banker Bead (`#ef54b9`)**, **Player Bead (`#75c5ff`)**, and **Tie Slash (`#39eb82`)** are reserved exclusively for Baccarat roadmap lattices and game data visualization. They are functional domain tokens, never brand or chrome accents.

### Color Governance Rules
- Never use generic neon AI gradients (magenta/purple glows).
- Secondary text must be derived from `mist-caption` (`#a9ccef`), never neutral gray. Primary text must be `paper-light` (`#f4f8ff`).
- `hero-violet` (`#3222a1`) belongs solely to dealer portrait backplates and photographic hero stages; it must never tint UI chrome or buttons.

## Typography

The typographic engine balances bold, geometry-driven UI headers with monospaced data precision.

- **Display & Headings (`Outfit` 700–800):** Used for game nomenclature, category titles, top-level actions, and modal headers. Titles are set uppercase or title case with deliberate tracking (`0.02em` to `0.08em`). Heading scales inside the 9:16 frame are strictly bounded (maximum 34px on desktop display, scaling fluidly to 26px on mobile viewports).
- **Body (`Outfit` 400–500):** Engineered for terse operational scanning. Line height is fixed at `1.45`, with maximum measure kept below 60 characters. Text colors utilize `paper-light` for primary instructions and `mist-caption` for subtext.
- **Tabular Figures & Identifiers (`Geist Mono` 500–600):** Applied universally to currency values, table codes (e.g., `B02`, `A104`), betting limits (`1,000 – 2,000,000`), shoe counts, and road timestamps. Monospacing ensures zero layout jitter when balance or limit data updates.
- **Multilingual Support:** All levels are paired with system CJK fonts (`"PingFang SC", "Noto Sans SC"`). Component dimensions and paddings must accommodate Chinese glyph density without truncating English labels.

## Layout & Spacing

The layout is strictly **Handset First**, locked to a 9:16 proportional viewport:
- Mobile / Handset: `width: min(100vw, 56.25dvh)`, `height: 100dvh`.
- Desktop presentation: The shell floats centered on an expansive stage blurred background (`#090e1c`). Below 600px viewport width, the shell expands to 100% width and 100dvh.

### Grid & Density Rhythm
- **Internal Shell Grid:** Density level 7 enforces a compact modular rhythm. The shell utilizes a 2-column catalog grid (`gap: 0.5rem`) for game tiles, with a strict aspect ratio of `2.48`.
- **Road Strip:** A 3-up data tile arrangement restricted specifically to high-density Baccarat shoe summaries (Good Road) using `0.375rem` gaps. Three-up layouts are banned for promotional feature blocks.
- **Stacked Band Structure:** Outer shell bands stack in rigid vertical sequence:
  1. Topbar (`height: 14cqw`, min 54px)
  2. Hero stage photograph (aspect 715/351) with 2px Ice Signal lower boundary
  3. Horizontal scroll category rail with 44px sticky nav arrows
  4. Good Road glance strip
  5. 2-column game matrix or vertically scrolling live table pit list.
- **Overflow & Scrolling:** Body scroll is locked (`overflow: hidden`). Individual scroll regions within the shell manage internal momentum scrolling (`-webkit-overflow-scrolling: touch`).

## Elevation & Depth

Depth is established through dark luminous structural frames, tonal glass containers, and cold cyan perimeter lines rather than heavy drop shadows.

- **Level 0 (Stage Horizon):** `#090e1c` backdrop with a dimmed, heavily blurred (40px blur) dealer studio photo.
- **Level 1 (Handset Canvas):** `#11162c` with a 1px perimeter border of `#244574` holding the complete 9:16 operating canvas.
- **Level 2 (Pit Containers & Table Tiles):** `#14284d` to `#143363` structural fills bordered with 1px `#4d7bac` or `#579ce7`. Inset hairline borders carry a subtle `0.5px` white or ice highlight at 15% opacity along top edges.
- **Level 3 (Tactile Glass Chips):** Translucent fills (`#122653c7`) with `backdrop-filter: blur(12px)` and 1px `#345e9b` rims used on balance chips and dealer nameplates.
- **Level 4 (Floating Dialogs & Sheets):** Backdrop tinted to `#020919a8` with 8px blur. Dialog frames use a gradient from `#1d3563` to `#132042` with a continuous 1px `#49d9ff` hairline rim.
- **Focus & Selection Signals:** Active elements omit fuzzy ambient drop shadows; they receive a crisp, structural `3px solid #83e7ff` outline with `2px` offset.

## Shapes

The design system maintains a **Soft / High-Precision Mechanical** shape language (roundedness level 1) to maximize usable visual field within the high-density handset:

- **Buttons & Chips:** `4px` corner radius. Crisp, compact, and engineered to prevent accidental touch bleeds.
- **Road & Table Data Tiles:** `6px` radius for information-dense grids and bead lattices.
- **Game Cards & Photographic Tiles:** `8px` corner radius, perfectly framing 16:9 or 2.48 aspect ratio crops.
- **Modals & Flyout Panels:** `14px` radius along exposed interior edges.
- **Avatar & Category Rail Nodes:** Strict circular nodes (`rounded-full`, 50% radius) providing clear visual differentiation from rectangular game tiles.
- **Status & DEMO Badges:** `3px` mini-pills or rectangular tags with subtle `2px` radii, emphasizing utilitarian hardware labeling.

## Components

### Primary Buttons (Enter Ice)
- **Visuals:** Linear gradient background (`180deg, #e4ffff 0%, #9cdefb 100%`), solid dark navy ink (`#053358`), font `Outfit 800` uppercase, tracking `0.04em`.
- **Borders & Radius:** 1px `#7cddff` perimeter border, `4px` border-radius.
- **Interactions:** Hover increases brightness to 1.15. Active state triggers `transform: scale(0.98)` or `translateY(1px)`. No external neon shadow.

### Ghost & Navigation Buttons
- **Visuals:** Background transparent, border 1px `#4fc9ff` (or `#244574` when idle). Icon strokes rendered in `#49d9ff`.
- **States:** Hover changes icon stroke to `#f4f8ff` with subtle `4px` ice drop shadow on the glyph. Disabled state applies color `#6d849e` with pointer events muted.

### Balance & Wallet Chip
- **Visuals:** Surface `#122653c7` with 12px backdrop-filter, border 1px `#345e9b`.
- **Typography:** Value set in `Geist Mono 600` in `#f4f8ff`. Currency prefix rendered in `mist-caption` (`#a9ccef`).

### Game Catalog Cards (2-Column)
- **Geometry:** 2-column grid layout, fixed aspect ratio `2.48`, `8px` radius. 1px `#4d7bac` border.
- **Art:** Photographic game texture fills the entire card container with an inset dark vignette.
- **Typography:** Game title set in `Outfit 800` uppercase with a bottom-left anchored text block over an inline dark glass gradient band (`#091224cc`). Never loose type floating over raw photography.
- **Interaction:** Hover induces `translateY(-2px)` and highlights the border to `#8fd5ff`.

### Table Cards & Pit Lists
- **Structure:** Split composition. Top bar gradient (`#1d477f` to `#213761`) with table name, table ID (`Geist Mono`), and shoe/round counter.
- **Dealer Stage:** Dealer portrait taking 24%–30% card width. Dealer name locked in a fixed bottom glass caption bar (`#195d9ad9`), completely separated from face photography.
- **Table Data:** Limits displayed in `Geist Mono` with `mist-caption` labels. Exactly one Enter Ice CTA button docked to the right.

### Baccarat Road Cards
- **Structure:** Compact `6px` radius `#14284d` container with top title bar.
- **Lattice:** 9×5 (lobby) or 12×5 (table preview) dot matrix.
- **Beads:** Crisp circular dots rendered strictly in `#ef54b9` (Banker) and `#75c5ff` (Player), with `#39eb82` diagonal tie slashes. Beads are pure data points; never skin beads as casino chips or avatars.

### Category Rail Tabs
- **Nodes:** `13cqw` circular photographic nodes framed in a 2px `#4e87c3` border.
- **Active State:** Border intensifies to 2px `#9ceeff`, scaled up `1.08x` with an ice halo ring.
- **Labels:** Centered below nodes in `Outfit 600`, 11px–12px, truncated with ellipsis if exceeding container width.

### DEMO & Status Badges
- **Structure:** Solid `#134b6e` background, 1px `#49d9ff` border, `3px` radius.
- **Type:** "DEMO PREVIEW" text in `Outfit 800`, uppercase, 10px, letter-spacing `0.08em`, `#49d9ff` color.
- **Status Words:** Dynamic states use static labels (e.g., "Resulting...", "Dealing", "Shuffling") in `Geist Mono` mist typography. Circular spinning loaders are strictly forbidden.

### Inputs & Filters
- **Visuals:** Surface `#243d70`, 1px `#5e9adb` border, `4px` radius, `paper-light` text. Labels positioned strictly above fields in `Outfit 600` (`#a9ccef`).
- **Pill Filters:** Compact selection pills with `#14284d` base; selected state switches fill to `#1d477f` with a 1px `#49d9ff` rim.