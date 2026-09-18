# Design System: Lucky Numbers Pit
**Skill:** stitch-design-taste
**Product:** AI Live Casino Lite
**Inherits:** root `DESIGN.md` (9:16 shell, Ice Signal chrome, Outfit + Geist Mono)

Stitch screens for this pit: **Lucky Numbers category tables** and **Lucky Numbers table preview**. Not a lobby. Not a betting board.

---

## Configuration — Set Your Style

| Dial | Level | Description |
|------|-------|-------------|
| **Creativity** | `6` | Numbered-orb photography and a last-draw ticker carry expression. UI type stays utilitarian. |
| **Density** | `7` | Rail, two filters, table list with a compact draw-history strip per card. |
| **Variance** | `5` | Same stacked handset as other pits. The data board is a number ticker, not a bead road. |
| **Motion Intent** | `4` | Quiet hover and filter updates. Number tiles do not pulse. Honor `prefers-reduced-motion`. |

Operate surface: scan tables, open a DEMO preview, leave. No marketing hero.

---

## 1. Visual Theme & Atmosphere

A live number studio viewed through the same night-floor handset. Density 7, variance 5, motion 4.

Photography is a close numbered orb (4, 8, 5 family) under cool studio light — artwork only, never a UI fill and never a gold “jackpot” gradient on chrome. The pit feels like a LED call board: last draws sit in Geist Mono tiles, one current tile rimmed in Ice Signal, older tiles dimmed into Pit Steel.

Mood: electric, orderly, slightly compressed. Not carnival. Not a lottery landing page.

---

## 2. Color Palette & Roles

Cool navy family. **One brand accent: Ice Signal.** Number tiles use that accent as a state, not a second hue.

- **Stage Night** (#090e1c) — Outer world behind the shell. Never pure black.
- **Frame Navy** (#11162c) — Shell canvas and category rail.
- **Pit Steel** (#14284d / #143363) — Table cards and history-strip bodies.
- **Paper Light** (#f4f8ff) — Primary text.
- **Mist Caption** (#a9ccef) — Labels, “last draws”, dealer metadata.
- **Ice Signal** (#49d9ff) — Sole accent. Focus, DEMO badges, active rail halo, **current-draw tile rim**.
- **Enter Ice** (#e4ffff → #9cdefb) — Enter / Back / Clear filters. Ink #053358.
- **Called Tile** (#1d477f) — Past draw cells. Paper Light numerals.
- **Idle Tile** (#080d22) — Empty history slots. 1px rim #244574.

Artwork gold on the orb stays inside the photograph. Do not promote gold, amber, or magenta onto buttons, badges, or chrome.

---

## 3. Typography Rules

- **Display:** `Outfit` 700–800. Uppercase **LUCKY NUMBERS**. Table IDs stay Geist Mono (`N101`). Max display `2.125rem` in the 9:16 frame.
- **Body:** `Outfit` 400–500, leading 1.45, under 65 characters on the preview note.
- **Mono:** `Geist Mono` for all numbers at density 7: balance, limits `1,000 – 2,000,000`, draw values, table IDs `N101` `N102` `N301`.
- **Chinese:** Outfit/Geist with `"PingFang SC", "Noto Sans SC", sans-serif`. Catalog name stays Lucky Numbers.
- **Banned:** `Inter`, `Impact`, serifs, gradient text, novelty condensed “lotto” faces.

---

## 4. Component Stylings

* **Shared chrome:** Topbar, wallet DEMO chip, overflow menu, circular avatar — identical to lobby. No mute. No bottom Account/History bar.
* **Category rail:** Eight circular thumbs. Lucky Numbers is current: Ice Signal rim, scale 1.08. Horizontal scroll with 44px chevrons only — not page-instruction arrows.
* **Filters:** Label above. Level (All / Beginner / Royal) and Dealer (Sophia, Amelia, Grace). Empty: bordered note + one Clear filters CTA.
* **Table cards:** Heading **LUCKY NUMBERS** + Geist Mono ID (`N101`). Dealer photo 24% width; name in a bottom caption bar (#195d9ad9), never loose type on the face. One Enter CTA.
* **Draw history strip:** Horizontal row of 8–10 square tiles (28–32px, 4px radius) under the dealer row. Latest tile Ice Signal rim; older tiles Called Tile. Numerals Geist Mono 600. This replaces Baccarat beads. Do not use a 9×5 lattice.
* **Table preview:** Back + title → category artwork → DEMO PREVIEW badge → definition list (Table, Dealer, Limit, Mode DEMO) → last-draw ticker in its own band → honest note → one Back to tables button. No betting grid. No multiplier ladder.
* **Loaders:** Shimmer the history tiles as empty Idle Tile squares. No circular spinner. Status word: “Resulting...”
* **Empty filters:** Composed bordered well, not “No data”.

Tables to show: **N101 Sophia beginner**, **N102 Amelia beginner**, **N301 Grace royal**.

---

## 5. Layout Principles

- Handset first: `width: min(100vw, 430px)`, `height: 100dvh`. Desktop = shell on blurred stage.
- Stacked bands: topbar → category rail → 2-filter bar → scrolling table list. Preview: back row → art → badge → list → ticker → note → CTA.
- Catalog of tables is **one column of cards**, never 3 equal marketing cards.
- Last-draw ticker is a **horizontal data strip**, not a feature bento.
- No overlapping headlines on photography. Dealer names live in caption bars.
- One primary CTA per card or screen.
- Touch targets 44px. Shell `100dvh`, never `100vh`.

Hero for this pit is the **first table card**, not a centered marketing headline and not inline photos between letters of “LUCKY NUMBERS”.

---

## 6. Motion & Interaction

Stitch exports static frames. In code: CSS under 200ms, spring `stiffness: 140, damping: 22` if a library exists.

- Hover: brightness 1.12, card `translateY(-2px)`, Ice rim.
- Active: `scale(0.98)`.
- Lists: optional 60–80ms stagger. No theatrical load.
- Animate `transform` and `opacity` only.
- Reduced motion: durations `0.01ms`.
- **No perpetual loops** on number tiles, no pulsing “hot number”, no typewriter.

---

## 7. Anti-Patterns (Banned)

- No emojis, no `Inter`, no serifs, no pure black fills
- No second brand accent (gold, amber, magenta) on chrome
- No Baccarat bead road, no roulette red/black pockets, no dice glyphs
- No 3-column equal feature cards
- No betting, multipliers, jackpot meters, or live-money claims
- No generic names — dealers are Sophia, Amelia, Grace
- No fake stats (`99.99%`). Limits stay the catalog values
- No AI clichés, no “Scroll to explore”, no custom cursors, no circular spinners
- Do not rename Lucky Numbers
