# Design System: Bingo Frenzy Pit
**Skill:** stitch-design-taste
**Product:** AI Live Casino Lite
**Inherits:** root `DESIGN.md` (9:16 shell, Ice Signal chrome, Outfit + Geist Mono)

Stitch screens for this pit: **Bingo Frenzy category tables** and **Bingo Frenzy table preview**. Not a lobby. Not a playable bingo card.

---

## Configuration — Set Your Style

| Dial | Level | Description |
|------|-------|-------------|
| **Creativity** | `6` | Blower-chamber photography and a 5×5 call lattice carry expression. UI type stays utilitarian. |
| **Density** | `7` | Rail, filters, table cards with a miniature called-grid. Preview adds a last-called ticker. |
| **Variance** | `5` | Same handset bands. Data board is a bingo lattice, not beads and not a number ticker alone. |
| **Motion Intent** | `4` | Quiet CSS. Lattice cells do not blink. Honor `prefers-reduced-motion`. |

Operate surface: scan I001 / I002 / I301, open DEMO preview, leave.

---

## 1. Visual Theme & Atmosphere

A live bingo studio: acrylic blower and numbered balls exist only as photography. Density 7, variance 5, motion 4.

Inside the chrome, the pit is a **call board**. A 5×5 lattice shows which cells have been marked in this illustrative shoe. Called cells fill Pit Steel with an Ice Signal hairline; empty cells stay Idle Night. The center free cell is a still Mist Caption “FREE” — not an emoji, not a burst.

Mood: chambered, luminous, orderly. Not a church-hall paper card. Not a carnival ticket.

---

## 2. Color Palette & Roles

Cool navy family. **One brand accent: Ice Signal.** Ball colors in the photograph stay in the photograph.

- **Stage Night** (#090e1c) — Outer world. Never pure black.
- **Frame Navy** (#11162c) — Shell and rail.
- **Pit Steel** (#14284d / #143363) — Table cards, called lattice cells.
- **Idle Night** (#080d22) — Uncalled lattice cells.
- **Paper Light** (#f4f8ff) — Primary text and called numerals.
- **Mist Caption** (#a9ccef) — Labels, FREE cell, metadata.
- **Ice Signal** (#49d9ff) — Sole accent. Focus, DEMO, active rail, called-cell rims, last-called tile.
- **Enter Ice** (#e4ffff → #9cdefb) — Primary actions. Ink #053358.

Do not lift rainbow ball hues from the artwork onto chrome, buttons, or badges.

---

## 3. Typography Rules

- **Display:** `Outfit` 700–800. Uppercase **BINGO FRENZY**. Max `2.125rem`.
- **Body:** `Outfit` 400–500, leading 1.45, preview note under 65 characters.
- **Mono:** `Geist Mono` for IDs `I001` `I002` `I301`, limits, last-called numbers, lattice numerals.
- **Chinese:** Outfit/Geist + PingFang SC / Noto Sans SC. Catalog name stays Bingo Frenzy.
- **Banned:** `Inter`, `Impact`, serifs, gradient titles, handwritten “B-I-N-G-O” novelty fonts.

---

## 4. Component Stylings

* **Shared chrome:** Identical lobby topbar. No mute. No bottom nav.
* **Category rail:** Bingo Frenzy current — Ice rim, scale 1.08.
* **Filters:** Level and Dealer (Sophia, Amelia, Betty). Empty well + Clear filters.
* **Table cards:** Title **BINGO FRENZY** + ID. Dealer 24% + caption bar. Beside the dealer: a **5×5 mini lattice** (not 9×5 beads). One Enter CTA.
* **Last-called chip:** One Geist Mono number in an Ice-rimmed 32px tile on the heading bar. Label “LAST” in Mist Caption 9px.
* **Table preview:** Back + title → blower/ball artwork → DEMO PREVIEW → definition list → **full 5×5 lattice** in its own band (called vs idle, FREE in center) → last-called ticker of 8 numbers → honest note → Back to tables. No daubing. No extra cards to buy.
* **Loaders:** Lattice shimmers as Idle Night squares. Status: “Resulting...”
* **Empty filters:** Bordered note, not a blank card.

Tables: **I001 Sophia beginner**, **I002 Amelia beginner**, **I301 Betty royal**.

---

## 5. Layout Principles

- Handset 9:16 shell on Stage Night. `100dvh`.
- Stack: topbar → rail → filters → one-column table cards.
- Preview: back → art → badge → list → lattice band → ticker → note → CTA.
- Mini lattice on cards sits in its own column next to the dealer — no type overlapping the face or the grid.
- Do not use 3 equal feature cards. Do not reuse Good Road 3-up.
- One primary CTA per card or screen.
- Touch 44px. No horizontal page scroll; the last-called ticker may scroll inside its band only.

Hero is the first table card. Do not set “BINGO” as a centered marketing wordmark with inline ball photos between letters.

---

## 6. Motion & Interaction

- Hover brightness 1.12, `translateY(-2px)` on cards.
- Active `scale(0.98)`. Durations under 200ms. Transform/opacity only.
- Optional 60–80ms list stagger.
- Reduced motion: kill transitions.
- No looping ball bounce, no pulsing FREE cell, no confetti.

---

## 7. Anti-Patterns (Banned)

- No emojis, no `Inter`, no serifs, no pure black fills
- No second brand accent sampled from rainbow balls
- No Baccarat beads, no roulette pockets, no dice
- No 3-column marketing cards, no playable daubing, no card-pack shop
- No live-money or “winner” banners
- Dealers: Sophia, Amelia, Betty only
- No fake 99.99% hit rates
- No AI clichés, scroll-to-explore, custom cursors, circular spinners
- Do not rename Bingo Frenzy
