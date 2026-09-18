# Design System: Craps Pit
**Skill:** stitch-design-taste
**Product:** AI Live Casino Lite
**Inherits:** root `DESIGN.md` (9:16 shell, Ice Signal chrome, Outfit + Geist Mono)

Stitch screens for this pit: **Craps category tables** and **Craps table preview**. Catalog art is **synthetic** — the tile needs an Outfit ExtraBold **CRAPS** label. Not a lobby. Not a pass-line betting layout.

---

## Configuration — Set Your Style

| Dial | Level | Description |
|------|-------|-------------|
| **Creativity** | `6` | Wooden-table photography + a two-die roll object. Synthetic title on the pit tile. |
| **Density** | `7` | Rail, filters, cards with dice pair + point. |
| **Variance** | `5` | Same handset. Data board is a roll pair, not beads. |
| **Motion Intent** | `4` | Dice still. Honor `prefers-reduced-motion`. |

Operate surface: C101 / C102 / C301. DEMO preview. No come-out wager UI.

---

## 1. Visual Theme & Atmosphere

A live craps pit: diamond-back table photography, navy chrome. Density 7, variance 5, motion 4.

Because the catalog tile is synthetic, the **CRAPS** word sits in Outfit ExtraBold on a dimmed photo — caption zone, not novelty condensed type. The signature data object is a **two-die pair** plus an optional **POINT** in Geist Mono (illustrative, or em dash when none).

Mood: wooden, low, exact. Not a frat-house dice gif. Not a western wanted poster.

---

## 2. Color Palette & Roles

Cool navy family. **One brand accent: Ice Signal.** Felt green in photography stays in photography.

- **Stage Night** (#090e1c) — Outer world. Never pure black.
- **Frame Navy** (#11162c) — Shell, rail.
- **Pit Steel** (#14284d / #143363) — Cards, die faces.
- **Idle Night** (#080d22) — Pip plates.
- **Paper Light** (#f4f8ff) — Pips, primary text, synthetic **CRAPS** label.
- **Mist Caption** (#a9ccef) — Labels, POINT.
- **Ice Signal** (#49d9ff) — Sole accent. Focus, DEMO, rail, latest-pair rim.
- **Enter Ice** (#e4ffff → #9cdefb) — Primary actions. Ink #053358.

Do not lift felt green or dice red onto buttons.

---

## 3. Typography Rules

- **Display:** `Outfit` 800 for synthetic **CRAPS** on tiles; 700–800 for screen titles. Max `2.125rem`.
- **Body:** `Outfit` 400–500, leading 1.45, preview note under 65 characters.
- **Mono:** `Geist Mono` for `C101` `C102` `C301`, limits, roll totals, POINT.
- **Chinese:** Outfit/Geist + PingFang SC / Noto Sans SC. Catalog name stays Craps.
- **Banned:** `Inter`, `Impact`, serifs, western slab, gradient titles.

---

## 4. Component Stylings

* **Shared chrome:** Lobby topbar. No mute. No bottom nav.
* **Category rail:** Craps current. Circular thumb from `craps.webp`; synthetic label already on the pit tile in lobby — rail uses the short name Craps.
* **Filters:** Level, Dealer (Amelia, Betty, Sophia). Empty + Clear filters.
* **Table cards:** Title **CRAPS** + ID. Dealer 24% + caption bar. **Two 36px die faces** + TOTAL and POINT rows in Geist Mono. POINT uses em dash when off. One Enter.
* **Die face:** Same construction as Sic Bo (Idle Night plate, Paper Light pips) but **pair, not trio**.
* **Table preview:** Back + title → dice artwork → DEMO PREVIEW → definition list → **pair + total + point** in its own band → last 6 rolls as dimmed pairs → honest note → Back to tables. No pass/don’t-pass layout. No chip spots.
* **Loaders:** Two empty plates shimmer. Status: “Resulting...”
* **Empty filters:** Bordered well.

Tables: **C101 Amelia beginner**, **C102 Betty beginner**, **C301 Sophia royal**.

---

## 5. Layout Principles

- Handset 9:16, `100dvh`.
- Stack: topbar → rail → filters → one-column cards.
- Preview: back → art → badge → list → roll band → history → note → CTA.
- Synthetic **CRAPS** on lobby tiles sits in the bottom caption zone of the image, never as floating overlap on the dice.
- Two dice are one object — not a 2-column marketing zig-zag.
- One primary CTA. Touch 44px.

Hero is the first table card. No inline photos inside the word CRAPS.

---

## 6. Motion & Interaction

- Hover brightness 1.12, `translateY(-2px)`.
- Active `scale(0.98)`. Under 200ms. Transform/opacity only.
- Optional 60–80ms stagger.
- Reduced motion: off.
- **No bouncing dice**, no stick animation, no looping throw.

---

## 7. Anti-Patterns (Banned)

- No emojis (including dice emoji)
- No `Inter`, no serifs, no pure black fills
- No felt-green or dice-red chrome
- No Baccarat beads, no roulette pockets, no bingo lattice, no sic-bo trio
- No betting layout, no odds buttons, no live-money claims
- Dealers: Amelia, Betty, Sophia
- No fake 99.99%
- No AI clichés, scroll-to-explore, custom cursors, circular spinners
- Do not rename Craps
