# Design System: AI Live Casino Lite
**Skill:** stitch-design-taste

A Stitch-ready visual contract for the offline lobby prototype. New screens must read as the same live-casino handset, not a generic dark dashboard and not a marketing landing page.

---

## Configuration — Set Your Style

| Dial | Level | Description |
|------|-------|-------------|
| **Creativity** | `6` | Image-led lobby chrome. Photographic dealer stage and game-card art carry expression. UI type stays utilitarian. No editorial experiments that fight the 9:16 frame. |
| **Density** | `7` | Daily-app toward cockpit: topbar, hero, road strip, catalog, then table lists with filters. Tight groups, not gallery air. |
| **Variance** | `5` | Offset by the phone shell on a blurred stage. Inside the shell: stacked bands, 2-column catalog, horizontal category rail. Not artsy chaos. |
| **Motion Intent** | `4` | Fluid CSS on hover, focus, toast, and filter updates. No cinematic orchestration. Honor `prefers-reduced-motion`. |

This is an **Operate** surface: designers and engineers scan lobby → category → table preview. Scanability and screenshot-faithful chrome outrank landing-page theatrics.

---

## 1. Visual Theme & Atmosphere

A night-floor live-casino handset: one 9:16 chrome frame (`width: min(100vw, 56.25dvh)`, `height: 100dvh`) floating on a blurred, dimmed stage photograph. Inside the frame, navy steel, ice-cyan rims, and photographic tiles. Density 7, variance 5, motion 4.

The mood is a dealer pit viewed through glass — cool, electric, slightly compressed — not a SaaS console and not a purple-neon “AI product” poster. Hero photography (dealer on a violet stage) is artwork, not a UI fill. Copy stays demo-honest: DEMO tags, preview notes, no live-money claims.

Preserve: the 9:16 central frame, navy and ice-cyan chrome, purple photographic hero, image-led game cards, blurred side stage on wide viewports.

### Pit design systems

Lobby chrome lives in this file. Generate each live pit from its own contract — same shell, different data board:

| Category | Stitch contract | Tables |
|----------|-----------------|--------|
| Lucky Numbers | `lucky-numbers/DESIGN.md` | N101, N102, N301 |
| Bingo Frenzy | `bingo-frenzy/DESIGN.md` | I001, I002, I301 |
| Speed Frenzy | `speed-frenzy/DESIGN.md` | S101, S102, S301 |
| Baccarat | `baccarat/DESIGN.md` | A104, A116, A318, A301 |
| Roulette | `roulette/DESIGN.md` | R101, R102, R301 |
| Sic Bo | `sic-bo/DESIGN.md` | D101, D102, D301 |
| Craps | `craps/DESIGN.md` | C101, C102, C301 |
| Blackjack | `blackjack/DESIGN.md` | B101, B102, B301 |

Do not reuse the Baccarat bead road on other pits. Do not invent a second brand accent per game.

---

## 2. Color Palette & Roles

Cool navy family only. One brand accent: Ice Signal. Do not introduce a second brand hue.

- **Stage Night** (#090e1c) — Outer world behind the shell. Never pure black.
- **Frame Navy** (#11162c) — Shell canvas, catalog scroller, category rail.
- **Header Tide** (#1a315f → #142146 → #182e60) — Topbar gradient, 180deg. Hairline hatch overlay at 22% opacity using #4b80bd.
- **Pit Steel** (#14284d / #143363) — Table cards and road-card bodies.
- **Wallet Glass** (#122653c7) — Balance chip fill, 1px rim #345e9b.
- **Paper Light** (#f4f8ff) — Primary text on navy. Never gray-on-navy.
- **Mist Caption** (#a9ccef / #aac9e8) — Labels, metadata, secondary copy. Tinted from the ice family, not neutral gray.
- **Ice Signal** (#49d9ff) — **Sole accent.** Focus rings, primary-button rims, DEMO badges, active category halo. Related chrome: rim #4fc9ff, structural border #579ce7 / #569ce1, focus outline #83e7ff.
- **Enter Ice** (#e4ffff → #9cdefb) — Primary action fill, text #053358. One CTA language for Enter / Back / primary.
- **Banker Bead** (#ef54b9) and **Player Bead** (#75c5ff) — Baccarat roadmap dots only. Domain data colors, not brand accents. Tie slash #39eb82.
- **Hero Violet** (#3222a1) — Photographic hero backing only. Never buttons, never gradients on chrome.

### Banned colors
- Generic “AI purple” button fills, magenta outer glows, rainbow neon gradients
- Pure black (#000000) as a fill
- Warm gray / cool gray mixed in one screen
- A second brand accent (gold, emerald, hot pink) on chrome
- Oversaturated decorative glows beyond the calibrated Ice Signal rims already specified

---

## 3. Typography Rules

Software UI: sans + mono only. No serif. No `Inter`. No `Impact` as a display costume.

- **Display:** `Outfit` — Weights 700–800. Track `0.02em`–`0.08em` on badges and section titles (GOOD ROAD, DEMO PREVIEW). Uppercase for game names and table IDs. Scale via `clamp()`, not one screaming size. Max display `2.125rem` inside the 9:16 frame.
- **Body:** `Outfit` 400–500 — Leading `1.45`. Measure under 65 characters on detail notes. Color Paper Light or Mist Caption.
- **Mono:** `Geist Mono` — All numbers at this density (7): balance `5,380,461`, table IDs (`A104`, `N301`), limits (`1,000 – 2,000,000`). Tabular figures.
- **Chinese:** Same Outfit/Geist pairing with system-ui CJK fallback (`"PingFang SC", "Noto Sans SC", sans-serif`). English and 简体中文 are first-class; do not design type that only fits Latin.
- **Banned:** `Inter`, Arial-as-identity, `Impact`, generic serifs, gradient text on titles.

Hierarchy is weight + ice vs mist color, not size jumps. Synthetic card labels (Craps, Blackjack) use Outfit ExtraBold over dimmed photography — never a novelty condensed face.

---

## 4. Component Stylings

* **Phone shell:** Single column of bands. 1px outer rim #244574. No desktop max-width marketing container. On viewports wider than the shell, the blurred stage remains visible; below 600px the stage hides and the shell goes full viewport.
* **Topbar:** Height `14cqw` (min 54px). Circular avatar 44px minimum, 2px Ice Signal rim, photo `object-fit: cover` at `center 45%`. Wallet chip left-aligned after avatar. Icon buttons ice-stroke, no fill. Menu is a right-docked panel, not a centered modal.
* **Buttons — primary:** Ice fill gradient (#e4ffff → #9cdefb), navy ink (#053358), 1px #7cddff border, 4px radius, weight 800. Active: `scale(0.98)` or `translateY(1px)`. Hover: brightness 1.15. No extra outer glow on the button itself.
* **Buttons — ghost:** Transparent, ice stroke icons. Disabled: #6d849e, no pointer.
* **Game cards:** 2-column grid, aspect `2.48`, 8px radius, 1px #4d7bac, inset ice whisper. Image fills the tile. Hover: `translateY(-2px)`, rim #8fd5ff. Not icon+heading+text cards.
* **Road cards:** Compact data tiles, 6px radius, navy body, titled ice bar. Bead grid on a 9×5 (lobby) or 12×5 (table) lattice. Do not restyle beads as avatars or chips.
* **Table cards:** Heading bar gradient (#1d477f → #213761), dealer tile 24% + info. Dealer name sits in a bottom caption bar (#195d9ad9), never overlapping the face as loose type. One Enter CTA per card.
* **Category tabs:** Circular 13cqw thumbnails, 2px #4e87c3. Current page: rim #9ceeff, scale 1.08. Label ellipsis, 10–13px.
* **Inputs / filters:** Label above. Pill select, fill #243d70, rim #5e9adb, Paper Light text. No floating labels. Empty filter state: bordered note + Clear filters primary action.
* **Dialogs:** 14px radius, ice rim, navy glass gradient. Header row + circular close 38px. Backdrop #020919a8. Profile: avatar 110px, nickname/balance rows, honest demo copy.
* **Badges:** DEMO PREVIEW pill, letter-spacing `0.08em`, ice on #134b6e.
* **Toast:** Bottom-centered in the shell, ice rim, #16396f fill. 14px type. No emoji.
* **Loaders:** Road and table grids shimmer as lattice skeletons matching bead/card geometry. No circular spinners. “Resulting...” is a status word, not a spinner.
* **Focus:** `3px solid #83e7ff`, offset 2px (inset -4px on rail arrows). Visible keyboard path required.

---

## 5. Layout Principles

- **Handset first:** All product UI lives in the 9:16 shell. Desktop is the shell on a blurred stage, not a 1400px marketing page.
- **Stacked bands, not bento marketing:** Topbar → photographic hero (aspect 715/351) → Good Road strip → 2-column game catalog. Category view: rail → 2-filter bar → scrolling table list. Detail: back + title → art → badge → definition list → honest note → one primary.
- **Catalog is 2-up, never 3 equal marketing cards.** Good Road may stay a 3-up *data* strip because it is baccarat table IDs, not a feature row. Do not reuse 3-up for new marketing sections.
- **Category rail:** Horizontal scroll with 44px chevrons. No hamburger inside the lobby.
- **Grid over percentage hacks:** Use CSS Grid / `cqw` inside the shell. No `calc(33% - 1rem)`.
- **Height:** Shell `100dvh`. Never `100vh`. Body overflow hidden; inner regions scroll.
- **No content overlap:** Dealer names, badges, and titles occupy caption bars or flow blocks. Do not stack headlines on photography with absolute type. Photographic hero is a labeled image band, empty of UI chrome.
- **Hero (lobby):** Full-bleed dealer photograph, 2px ice underline. No “Scroll to explore”, no second CTA, no centered marketing headline. The catalog below is the action.
- **CTA restraint:** One primary per card or screen (Enter, Back to tables, Clear filters).

---

## 6. Motion & Interaction

Stitch exports static frames. Implement motion only in code, and keep it quiet.

- **Physics:** Short CSS easing, not linear. Spring if a library is present: `stiffness: 140, damping: 22`. Duration under 200ms for chrome.
- **Hover:** Brightness 1.1–1.17, ice rim intensification, `translateY(-2px)` on game cards. Rail chevrons: color to Paper Light, 4px ice drop-shadow on the glyph only.
- **Toast:** Opacity + 8px rise. Auto-dismiss ~2.6s.
- **Lists:** Optional 60–80ms stagger on table cards. Never a theatrical page load.
- **Hardware:** Animate `transform` and `opacity` only.
- **Reduced motion:** Kill transitions and animation duration (`0.01ms`) when `prefers-reduced-motion: reduce`.
- **No perpetual loops** on the lobby (no pulsing neon, no typewriter, no floating chips). Status may be a still “Resulting...” label.

---

## 7. Anti-Patterns (Banned)

- No emojis in UI, copy, or alt text (replace the current unicode menu/wallet glyphs with stroked SVG in the same ice weight)
- No `Inter`, no `Impact`, no generic serifs
- No pure black (#000000) fills
- No generic AI-purple / magenta neon kits; Ice Signal rims only
- No second brand accent
- No gradient text on titles
- No custom mouse cursors
- No overlapping headlines on photography
- No 3-column equal *feature* cards
- No centered marketing hero, no “Scroll to explore” / swipe chevrons
- No generic names (John Doe, Acme, Nexus). Use shipped dealers: Sophia, Amelia, Grace, Betty
- No fake round marketing stats (`99.99%`). Limits and balance stay the illustrative catalog values already in product copy
- No AI clichés: Elevate, Seamless, Unleash, Next-Gen, Revolutionize
- No live-money or “real-time win” claims while this remains a demo
- No Unsplash interiors; use `assets/` crops or `picsum.photos` only as last resort
- No `h-screen` — `100dvh` / `min-height: 100dvh`
- No circular spinners
- No betting controls on table preview
- No renaming the eight categories: Lucky Numbers, Bingo Frenzy, Speed Frenzy, Baccarat, Roulette, Sic Bo, Craps, Blackjack

---

## 8. Product locks (do not invent)

- Name: **AI Live Casino Lite**
- Languages: English and 简体中文
- Flows: lobby, category tables, table preview (hash routes)
- Table preview is DEMO only — no bets, no live results
- Artwork lives in `assets/` (hero, category tiles, avatar, stage)
- Runtime for the current prototype: static HTML/CSS/JS, no external font hosts required in the shipped demo; Stitch comps may specify Outfit / Geist Mono for later implementation
