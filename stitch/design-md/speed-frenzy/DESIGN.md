# Design System: Speed Frenzy Pit
**Skill:** stitch-design-taste
**Product:** AI Live Casino Lite
**Inherits:** root `DESIGN.md` (9:16 shell, Ice Signal chrome, Outfit + Geist Mono)

Stitch screens for this pit: **Speed Frenzy category tables** and **Speed Frenzy table preview**. Not a lobby. Not a spinning wheel control.

---

## Configuration — Set Your Style

| Dial | Level | Description |
|------|-------|-------------|
| **Creativity** | `6` | Wheel photography carries motion. The UI stays a compressed last-result strip. |
| **Density** | `8` | Cockpit-dense: tighter cards, 12-result ticker, status word always visible. |
| **Variance** | `5` | Same stacked handset. Faster cadence in the data board, not a new layout language. |
| **Motion Intent** | `5` | Slightly snappier hover than other pits. Still CSS, still no cinematic wheel spin. |

Operate surface: S101 / S102 / S301, DEMO preview, leave. Speed is **cadence**, not animation spectacle.

---

## 1. Visual Theme & Atmosphere

A high-tempo live pit: colorful wheel photography frozen mid-arc, ice chrome around it. Density 8, variance 5, motion 5.

The interface is a **rapid call strip**. Twelve last results sit in a single row of compact chips. The newest chip has an Ice Signal rim; the rest recede into Pit Steel. Status is the still word “Resulting...” — never a spinning GIF.

Mood: compressed, bright, impatient. Not a carnival wheel landing. Not motion-blur UI chrome.

---

## 2. Color Palette & Roles

Cool navy family. **One brand accent: Ice Signal.** Wheel rainbow stays in the photograph.

- **Stage Night** (#090e1c) — Outer world. Never pure black.
- **Frame Navy** (#11162c) — Shell, rail.
- **Pit Steel** (#14284d / #143363) — Cards and older result chips.
- **Surface Low** (#151a30) — Filter bar, denser than other pits by 4px less vertical padding.
- **Paper Light** (#f4f8ff) — Primary text.
- **Mist Caption** (#a9ccef) — Labels, status word.
- **Ice Signal** (#49d9ff) — Sole accent. Focus, DEMO, current-result rim, active rail.
- **Enter Ice** (#e4ffff → #9cdefb) — Primary actions. Ink #053358.

Do not add amber “speed” or magenta streaks to buttons.

---

## 3. Typography Rules

- **Display:** `Outfit` 700–800. **SPEED FRENZY**. Short rail label: Speed Pit. Max `2.125rem`.
- **Body:** `Outfit` 400–500, leading 1.4 (tighter than other pits). Preview note still under 65 characters.
- **Mono:** `Geist Mono` for `S101` `S102` `S301`, limits, all result tokens. Density 8: **every number is mono**.
- **Chinese:** Outfit/Geist + PingFang SC / Noto Sans SC.
- **Banned:** `Inter`, `Impact`, serifs, italic “FRENZY” costumes, gradient titles.

---

## 4. Component Stylings

* **Shared chrome:** Same topbar. No mute. No bottom nav.
* **Category rail:** Speed Frenzy current.
* **Filters:** Level, Dealer (Grace, Betty, Sophia). Empty + Clear filters.
* **Table cards:** Tighter padding (8px). Title + ID. Dealer 22% width. **12-chip ticker** under the heading, 22–24px tall, 4px radius, Geist Mono 10px. Newest chip Ice rim. One Enter.
* **Status:** “Resulting...” in Geist Mono Mist Caption on the heading, right-aligned. Not a spinner.
* **Table preview:** Back + title → wheel artwork → DEMO PREVIEW → definition list → **full-width 12-chip ticker** in its own band → honest note → Back to tables. No wheel to spin. No chip-stack betting.
* **Loaders:** Ticker chips shimmer as empty Pit Steel. Match chip geometry.
* **Empty filters:** Bordered well.

Tables: **S101 Grace beginner**, **S102 Betty beginner**, **S301 Sophia royal**.

---

## 5. Layout Principles

- Handset 9:16, `100dvh`. Denser vertical rhythm: filter bar 8px padding, card gap 6px.
- Stack: topbar → rail → filters → one-column cards.
- Preview: back → art → badge → list → ticker band → note → CTA.
- Ticker is a **horizontal data strip**, never 3 equal feature cards, never a circular prize wheel widget.
- Dealer caption bar; no overlapping type on the wheel photo.
- One primary CTA. Touch 44px even at density 8 — do not shrink Enter below 44px height.

Hero is the first table card. Do not center a “SPEED” wordmark with inline wheel crops between letters.

---

## 6. Motion & Interaction

- Hover 1.12 brightness, `translateY(-1px)` (shorter than other pits).
- Active `scale(0.98)`. Durations 120–160ms. Transform/opacity only.
- List stagger 40–60ms.
- Reduced motion: off.
- **No looping wheel rotation**, no strobe, no countdown ring.

---

## 7. Anti-Patterns (Banned)

- No emojis, no `Inter`, no serifs, no pure black
- No second “speed” accent, no rainbow chrome
- No Baccarat beads, no bingo 5×5, no dice
- No interactive wheel, no betting, no live RTP meters
- Dealers: Grace, Betty, Sophia
- No fake 99.99% or “instant win”
- No AI clichés, scroll chevrons, custom cursors, circular spinners
- Do not rename Speed Frenzy
