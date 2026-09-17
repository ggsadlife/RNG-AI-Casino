## Brand & Style

The design system establishes an authentic live-casino handset environment anchored to a 9:16 mobile container floating over a dimmed, blurred dealer stage. It abandons SaaS dashboard neutrality and generic "AI purple" neon landing-page theatrics in favor of an intense, disciplined live pit atmosphere: cool navy steel, ice-cyan active signals, and photographic live-dealer tiles. 

The aesthetic is **High-Contrast Cockpit & Tactile Glass** tuned for operational scanning. It prioritizes immediate, high-density comprehension (density dial 7, variance dial 5) across three core operational loops: lobby glance, category filter, and table preview. The visual mood evokes looking through anti-reflective casino glass under deep stage illumination. 

Every surface communicates honest demo functionality without speculative marketing copy or false real-money claims. Visual weight is carried entirely by genuine dealer photography framed in precision-milled navy geometry and accented by a singular chromatic signal hue: Ice Signal.

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