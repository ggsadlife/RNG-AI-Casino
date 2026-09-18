# Design System: Blackjack Pit
**Skill:** stitch-design-taste
**Product:** AI Live Casino Lite
**Inherits:** root `DESIGN.md` (9:16 shell, Ice Signal chrome, Outfit + Geist Mono)

Stitch screens for this pit: **Blackjack category tables** and **Blackjack table preview**. Catalog art is **synthetic** — Outfit ExtraBold **BLACKJACK** on the pit tile. Not a lobby. Not a hit/stand table.

---

## Configuration — Set Your Style

| Dial | Level | Description |
|------|-------|-------------|
| **Creativity** | `6` | Felt-and-cards photography. Shoe status is a word, not a cartoon hand. |
| **Density** | `7` | Rail, filters, cards with two-card thumbnail + shoe note. |
| **Variance** | `5` | Same handset. Data board is cards + status, not a bead road. |
| **Motion Intent** | `4` | Cards still. Honor `prefers-reduced-motion`. |

Operate surface: B101 / B102 / B301. DEMO preview. No hit / stand / double.

---

## 1. Visual Theme & Atmosphere

A live blackjack pit: navy felt and ice-lit cards in photography. Density 7, variance 5, motion 4.

Synthetic catalog tiles need a **BLACKJACK** ExtraBold caption on dimmed art. The signature data object is a **two-card pair** (dealer up-card language only — illustrative backs or ice-rimmed faces) plus a status word: “Dealing”, “Shuffling”, or “Resulting...”. Shoe remaining is Geist Mono metadata, not a progress bar carnival.

Mood: quiet, felt, exact. Not a poker-app neon. Not a 21 neon sign.

---

## 2. Color Palette & Roles

Cool navy family. **One brand accent: Ice Signal.** Card-face red/black pips are **domain ink on the card thumbnail only**.

- **Stage Night** (#090e1c) — Outer world. Never pure black.
- **Frame Navy** (#11162c) — Shell, rail.
- **Pit Steel** (#14284d / #143363) — Cards, thumbnail mats.
- **Paper Light** (#f4f8ff) — Primary text, card faces.
- **Mist Caption** (#a9ccef) — Labels, status words.
- **Ice Signal** (#49d9ff) — Sole brand accent. Focus, DEMO, rail, thumbnail rims.
- **Enter Ice** (#e4ffff → #9cdefb) — Primary actions. Ink #053358.
- **Pip Night** (#1c2744) — Spades/clubs on thumbnails. Never `#000000`.
- **Pip Crimson** (#b5474e) — Hearts/diamonds on thumbnails. Data ink only, saturation under 80%. Never a button fill.

Do not add emerald felt as a chrome fill. Felt stays in the photograph.

---

## 3. Typography Rules

- **Display:** `Outfit` 800 for synthetic **BLACKJACK**; 700–800 for titles. Max `2.125rem`.
- **Body:** `Outfit` 400–500, leading 1.45, preview note under 65 characters.
- **Mono:** `Geist Mono` for `B101` `B102` `B301`, limits, shoe counts.
- **Chinese:** Outfit/Geist + PingFang SC / Noto Sans SC. Catalog name stays Blackjack.
- **Banned:** `Inter`, `Impact`, serifs, script “Blackjack”, gradient titles.

---

## 4. Component Stylings

* **Shared chrome:** Lobby topbar. No mute. No bottom nav.
* **Category rail:** Blackjack current. Short name Blackjack.
* **Filters:** Level, Dealer (Sophia, Grace, Amelia). Empty + Clear filters.
* **Table cards:** Title **BLACKJACK** + ID. Dealer 24% + caption bar. **Two 40×56px card thumbnails** on a Pit Steel mat, 4px radius, 1px Ice rim on the up-card. Status word right of heading. One Enter. **No Hit / Stand.**
* **Card thumbnail:** Paper Light face, pip in Pip Night or Pip Crimson, rank in Geist Mono 11px. Backed cards use a simple Ice-grid back on Pit Steel — not a noisy pattern.
* **Table preview:** Back + title → card artwork → DEMO PREVIEW → definition list (Table, Dealer, Limit, Mode DEMO) → **two-card mat + status + shoe note** in its own band → honest note → Back to tables. No action bar. No chip stack.
* **Loaders:** Two empty card rectangles shimmer. Status word, never a spinner.
* **Empty filters:** Bordered well.

Tables: **B101 Sophia beginner**, **B102 Grace beginner**, **B301 Amelia royal**.

---

## 5. Layout Principles

- Handset 9:16, `100dvh`.
- Stack: topbar → rail → filters → one-column cards.
- Preview: back → art → badge → list → card mat → note → CTA.
- Card thumbnails occupy their own mat. They do not overlap the dealer portrait.
- Two cards are one data object — not 2 marketing columns.
- One primary CTA (Enter or Back). Touch 44px.

Hero is the first table card. Do not inline card photos between letters of BLACKJACK.

---

## 6. Motion & Interaction

- Hover brightness 1.12, `translateY(-2px)`.
- Active `scale(0.98)`. Under 200ms. Transform/opacity only.
- Optional 60–80ms stagger.
- Reduced motion: off.
- **No dealing animation**, no flipping loop, no chip bounce.

---

## 7. Anti-Patterns (Banned)

- No emojis, no `Inter`, no serifs, no pure black fills
- No Hit / Stand / Double / Split controls
- Pip crimson is not a CTA or error color on this screen
- No Baccarat beads, no roulette pockets, no dice, no bingo lattice
- No betting, no live-money, no “21” neon signage
- Dealers: Sophia, Grace, Amelia
- No fake 99.99%
- No AI clichés, scroll-to-explore, custom cursors, circular spinners
- Do not rename Blackjack
