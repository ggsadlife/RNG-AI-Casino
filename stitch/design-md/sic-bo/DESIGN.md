# Design System: Sic Bo Pit
**Skill:** stitch-design-taste
**Product:** AI Live Casino Lite
**Inherits:** root `DESIGN.md` (9:16 shell, Ice Signal chrome, Outfit + Geist Mono)

Stitch screens for this pit: **Sic Bo category tables** and **Sic Bo table preview**. Not a lobby. Not a triple-dice betting grid.

---

## Configuration — Set Your Style

| Dial | Level | Description |
|------|-------|-------------|
| **Creativity** | `6` | Glass-dome photography. Three dice faces are the data object. |
| **Density** | `7` | Rail, filters, cards with a dice trio + sum. |
| **Variance** | `5` | Same handset. Data board is dice, not beads. |
| **Motion Intent** | `4` | Dice are still. Honor `prefers-reduced-motion`. |

Operate surface: D101 / D102 / D301. DEMO preview. No shake control.

---

## 1. Visual Theme & Atmosphere

A live sic bo pit: transparent shaker dome and dice live in photography. Density 7, variance 5, motion 4.

The signature object is a **dice trio** — three square faces (36px on cards, 48px on preview) with pip marks in Paper Light on Pit Steel, Ice Signal rim on the latest trio only. Beside them, Geist Mono shows the **sum**. History is a row of older trios at 24px, dimmed.

Mood: chambered, glassy, exact. Not a cartoon dice app. Not a gold-fortune landing.

---

## 2. Color Palette & Roles

Cool navy family. **One brand accent: Ice Signal.** Artwork gold on the die stays in the photograph.

- **Stage Night** (#090e1c) — Outer world. Never pure black.
- **Frame Navy** (#11162c) — Shell, rail.
- **Pit Steel** (#14284d / #143363) — Cards and die faces.
- **Idle Night** (#080d22) — Pip plate fill.
- **Paper Light** (#f4f8ff) — Pips and primary text.
- **Mist Caption** (#a9ccef) — Labels, “SUM”.
- **Ice Signal** (#49d9ff) — Sole accent. Focus, DEMO, rail, latest-trio rim.
- **Enter Ice** (#e4ffff → #9cdefb) — Primary actions. Ink #053358.

Pips are geometric circles, not emoji. Do not introduce crimson as a brand fill even if the photo dice are red.

---

## 3. Typography Rules

- **Display:** `Outfit` 700–800. **SIC BO**. Max `2.125rem`.
- **Body:** `Outfit` 400–500, leading 1.45, preview note under 65 characters.
- **Mono:** `Geist Mono` for `D101` `D102` `D301`, limits, sums (`4`–`17` illustrative).
- **Chinese:** Outfit/Geist + PingFang SC / Noto Sans SC. Catalog name stays Sic Bo.
- **Banned:** `Inter`, `Impact`, serifs, brush-script “Sic Bo”, gradient titles.

---

## 4. Component Stylings

* **Shared chrome:** Lobby topbar. No mute. No bottom nav.
* **Category rail:** Sic Bo current.
* **Filters:** Level, Dealer (Betty, Sophia, Grace). Empty + Clear filters.
* **Table cards:** Title **SIC BO** + ID. Dealer 24% + caption bar. **Three 36px die faces** in a row + SUM in Geist Mono. One Enter.
* **Die face:** 4px radius, Idle Night plate, 1px #579ce7, pips 5px Paper Light circles in standard die layouts (1–6). Latest trio: Ice Signal rim.
* **Table preview:** Back + title → dice artwork → DEMO PREVIEW → definition list → **large trio + sum** in its own band → last 6 trios as a history strip → honest note → Back to tables. No big-small / odd-even wager grid. No shake button.
* **Loaders:** Three empty plates shimmer. Status: “Resulting...”
* **Empty filters:** Bordered well.

Tables: **D101 Betty beginner**, **D102 Sophia beginner**, **D301 Grace royal**.

---

## 5. Layout Principles

- Handset 9:16, `100dvh`.
- Stack: topbar → rail → filters → one-column cards.
- Preview: back → art → badge → list → trio band → history → note → CTA.
- Dice sit in a dedicated column; they do not overlap the dealer face.
- Not 3 equal marketing cards — the three dice are **one data object**.
- One primary CTA. Touch 44px.

Hero is the first table card. Do not split “SIC BO” with inline die photos between letters.

---

## 6. Motion & Interaction

- Hover brightness 1.12, `translateY(-2px)`.
- Active `scale(0.98)`. Under 200ms. Transform/opacity only.
- Optional 60–80ms stagger.
- Reduced motion: off.
- **No tumbling dice loop**, no dome vibration, no pip blink.

---

## 7. Anti-Patterns (Banned)

- No emojis (including dice emoji)
- No `Inter`, no serifs, no pure black fills
- No gold or crimson chrome sampled from the photo die
- No Baccarat beads, no roulette pockets, no bingo lattice
- No betting grid, no shake CTA, no live-money claims
- Dealers: Betty, Sophia, Grace
- No fake 99.99%
- No AI clichés, scroll-to-explore, custom cursors, circular spinners
- Do not rename Sic Bo
