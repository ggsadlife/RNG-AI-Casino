# Design System: Roulette Pit
**Skill:** stitch-design-taste
**Product:** AI Live Casino Lite
**Inherits:** root `DESIGN.md` (9:16 shell, Ice Signal chrome, Outfit + Geist Mono)

Stitch screens for this pit: **Roulette category tables** and **Roulette table preview**. Not a lobby. Not a betting felt.

---

## Configuration — Set Your Style

| Dial | Level | Description |
|------|-------|-------------|
| **Creativity** | `6` | Milled-wheel photography. Pocket history is the data board. |
| **Density** | `7` | Rail, filters, table cards with last-spin pills. |
| **Variance** | `5` | Same handset. History is a pocket strip, not a bead road. |
| **Motion Intent** | `4` | Still wheel in UI. Honor `prefers-reduced-motion`. |

Operate surface: R101 / R102 / R301. DEMO preview. No chip placement.

---

## 1. Visual Theme & Atmosphere

A precision wheel pit: mahogany turret and ivory ball exist in photography only. Density 7, variance 5, motion 4.

The signature object is the **pocket history** — a row of last-spin numbers. Each pill is Geist Mono, colored by table physics (red / black / green zero) as **domain data**, never as extra brand accents. The newest pill gets an Ice Signal outer rim so chrome still speaks one accent.

Mood: milled, cool, exact. Not Vegas neon. Not a European travel poster.

---

## 2. Color Palette & Roles

Cool navy family. **One brand accent: Ice Signal.** Pocket red/black/green are data fills inside 18×22px pills only.

- **Stage Night** (#090e1c) — Outer world. Never pure black.
- **Frame Navy** (#11162c) — Shell, rail.
- **Pit Steel** (#14284d / #143363) — Table cards.
- **Paper Light** (#f4f8ff) — Primary text; numerals on red/black pills.
- **Mist Caption** (#a9ccef) — Labels.
- **Ice Signal** (#49d9ff) — Sole brand accent. Focus, DEMO, rail, **newest-pill rim**.
- **Enter Ice** (#e4ffff → #9cdefb) — Primary actions. Ink #053358.
- **Pocket Red** (#b5474e) — Red pockets. Saturation kept under 80%. Data only.
- **Pocket Night** (#1c2744) — Black pockets. Navy-black, never `#000000`.
- **Pocket Green** (#2f7a5b) — Zero only. Data only. Never a success toast color.

Do not use Pocket Red on buttons. Do not add gold turret brass to chrome.

---

## 3. Typography Rules

- **Display:** `Outfit` 700–800. **ROULETTE**. Max `2.125rem`.
- **Body:** `Outfit` 400–500, leading 1.45, preview note under 65 characters.
- **Mono:** `Geist Mono` for `R101` `R102` `R301`, limits, every pocket number (`0`, `32`, `15`).
- **Chinese:** Outfit/Geist + PingFang SC / Noto Sans SC.
- **Banned:** `Inter`, `Impact`, serifs, decorative “casino” initials, gradient titles.

---

## 4. Component Stylings

* **Shared chrome:** Lobby topbar. No mute. No bottom nav.
* **Category rail:** Roulette current.
* **Filters:** Level, Dealer (Amelia, Grace, Betty). Empty + Clear filters.
* **Table cards:** Title **ROULETTE** + ID. Dealer 24% + caption bar. **Last 8 pocket pills** in a wrap row under the dealer (gap 4px, 4px radius). Newest pill: 2px Ice Signal rim. One Enter.
* **Table preview:** Back + title → wheel artwork → DEMO PREVIEW → definition list → **last 12 pocket pills** in their own band with a tiny R/B/0 legend using domain dots → honest note → Back to tables. No 0–36 betting grid. No inside/outside wager UI.
* **Loaders:** Empty Pocket Night pills shimmer. Status: “Resulting...”
* **Empty filters:** Bordered well.

Tables: **R101 Amelia beginner**, **R102 Grace beginner**, **R301 Betty royal**.

---

## 5. Layout Principles

- Handset 9:16, `100dvh`.
- Stack: topbar → rail → filters → one-column cards.
- Preview: back → art → badge → list → pocket band → note → CTA.
- Pocket strip is a wrapping data row, **not** a 3-column feature set, **not** a circular prize graphic.
- No overlapping type on the wheel photo.
- One primary CTA. Touch 44px.

Hero is the first table card. Do not center “ROULETTE” with inline wheel crops between letters.

---

## 6. Motion & Interaction

- Hover brightness 1.12, `translateY(-2px)`.
- Active `scale(0.98)`. Under 200ms. Transform/opacity only.
- Optional 60–80ms stagger.
- Reduced motion: off.
- **No rotating wheel widget**, no ball orbit, no blinking last number.

---

## 7. Anti-Patterns (Banned)

- No emojis, no `Inter`, no serifs, no pure black fills
- No Ice-plus-gold chrome; brass lives in photography only
- Pocket colors are not CTAs, alerts, or nav
- No Baccarat beads, no bingo lattice, no dice
- No betting felt, racetrack, or chip tray UI
- Dealers: Amelia, Grace, Betty
- No fake 99.99% or “hot number” marketing
- No AI clichés, scroll-to-explore, custom cursors, circular spinners
- Do not rename Roulette
