# Design System: Baccarat Pit
**Skill:** stitch-design-taste
**Product:** AI Live Casino Lite
**Inherits:** root `DESIGN.md` (9:16 shell, Ice Signal chrome, Outfit + Geist Mono)

Stitch screens for this pit: **Baccarat category tables** and **Baccarat table preview**. Canonical bead-road pit. Do not copy this lattice onto other games.

---

## Configuration — Set Your Style

| Dial | Level | Description |
|------|-------|-------------|
| **Creativity** | `6` | Dealer photography + bead road. UI type utilitarian. |
| **Density** | `7` | Rail, two filters, four table cards with 12×5 roads. |
| **Variance** | `5` | Stacked handset. Road is a data lattice, not a feature bento. |
| **Motion Intent** | `4` | Quiet CSS. Beads do not twinkle. Honor `prefers-reduced-motion`. |

Operate surface: A104 / A116 / A318 / A301. DEMO preview. No bets.

---

## 1. Visual Theme & Atmosphere

A live baccarat pit through anti-reflective glass: navy steel, ice rims, dealer on a violet studio stage (artwork only). Density 7, variance 5, motion 4.

The signature object is the **bead road** — a 12×5 (table card) or 9×5 (lobby glance) lattice of Banker / Player / Tie beads. Beads are data points, never chips, never avatars, never gemstones.

Mood: cool, electric, slightly compressed. The same pit as the lobby Good Road strip, now as a full category.

---

## 2. Color Palette & Roles

Cool navy family. **One brand accent: Ice Signal.** Banker / Player / Tie are **domain data colors**, not brand.

- **Stage Night** (#090e1c) — Outer world. Never pure black.
- **Frame Navy** (#11162c) — Shell, rail.
- **Pit Steel** (#14284d / #143363) — Table cards, road bodies.
- **Table Header** (#1d477f → #213761) — Card heading bar.
- **Paper Light** (#f4f8ff) — Primary text.
- **Mist Caption** (#a9ccef) — Labels, “Resulting...”
- **Ice Signal** (#49d9ff) — Sole brand accent. Focus, DEMO, rail, rims.
- **Enter Ice** (#e4ffff → #9cdefb) — Primary actions. Ink #053358.
- **Banker Bead** (#ef54b9) — Road dots for banker columns only.
- **Player Bead** (#75c5ff) — Road dots for player columns only.
- **Tie Slash** (#39eb82) — Diagonal mark on a bead, not a fill, not a button.
- **Hero Violet** (#3222a1) — Dealer photography backing only. Never chrome.

Legend (B / P / T) uses those three domain colors as 8px dots beside labels. Do not add gold “VIP” as a fourth outcome color.

---

## 3. Typography Rules

- **Display:** `Outfit` 700–800. **BACCARAT**. Max `2.125rem`.
- **Body:** `Outfit` 400–500, leading 1.45, preview note under 65 characters.
- **Mono:** `Geist Mono` for `A104` `A116` `A318` `A301`, limits, shoe metadata.
- **Chinese:** Outfit/Geist + PingFang SC / Noto Sans SC. Good Road ZH: 好路推荐.
- **Banned:** `Inter`, `Impact`, serifs, script “Baccarat” wordmarks, gradient titles.

---

## 4. Component Stylings

* **Shared chrome:** Lobby topbar. No mute. No bottom nav.
* **Category rail:** Baccarat current — Ice rim, scale 1.08.
* **Filters:** Level, Dealer (Grace, Betty, Sophia, Amelia). Empty + Clear filters.
* **Table cards:** Heading **BACCARAT** + ID chip + “Resulting...” right. Dealer 24–30% with caption bar (Grace / Betty / Sophia / Amelia). Road lattice 12×5 on `#080d22`. Limits Geist Mono. One Enter Ice button.
* **Road beads:** Circles ~70% of cell. Banker / Player fills. Tie = Tie Slash on transparent or ice-dim cell. Never restyle as chips.
* **Legend:** Three 8px dots + B P T in Geist Mono 9px, top-right of a road section if a section header exists. On category list, omit a big legend; beads are self-evident.
* **Table preview:** Back + title → baccarat card artwork → DEMO PREVIEW → definition list (Table, Dealer, Limit, Mode DEMO) → **12×5 road** in its own band with B/P/T legend → honest note → Back to tables. No betting grid. No player/banker wager buttons.
* **Loaders:** Lattice skeleton matching 12×5. Status word only.
* **Empty filters:** Bordered note + Clear filters.

Tables: **A104 Grace beginner**, **A116 Betty beginner**, **A318 Sophia royal**, **A301 Amelia royal**.

---

## 5. Layout Principles

- Handset 9:16, `100dvh`.
- Stack: topbar → rail → filters → one-column table cards.
- Preview: back → art → badge → list → road band → note → CTA.
- Lobby Good Road may be 3-up **data** tiles. Category list is **not** 3-up cards — one column.
- Dealer names in caption bars. No headlines on photography.
- One primary CTA per card or screen.
- Touch 44px.

Hero is the first table (A104). Do not center a marketing “BACCARAT” with inline card photos between letters.

---

## 6. Motion & Interaction

- Hover brightness 1.12–1.15, `translateY(-2px)`.
- Active `scale(0.98)`. Under 200ms. Transform/opacity only.
- Optional 60–80ms stagger on the four cards.
- Reduced motion: off.
- Beads stay still. No traveling “new bead” sparkle in Stitch frames.

---

## 7. Anti-Patterns (Banned)

- No emojis, no `Inter`, no serifs, no pure black fills
- No second brand accent; Banker/Player/Tie are data only
- No betting spots, chip stacks, or “Banker 1:0.95” paytable as a CTA
- No 3-column marketing feature cards
- Dealers: Grace, Betty, Sophia, Amelia
- No fake 99.99% banker rates
- No AI clichés, scroll-to-explore, custom cursors, circular spinners
- Do not rename Baccarat
- Do not export this road onto Lucky Numbers, Roulette, or dice games
