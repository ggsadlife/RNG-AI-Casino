# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Designers and engineers on a live-casino product team. They open this local lobby to inspect navigation, catalog, and table-preview flows without standing up casino infrastructure.

## Product Purpose

**AI Live Casino Lite** is a self-contained visual prototype of an AI live-casino lobby. Today it lets the team review lobby → category → table-preview without a backend. Success is a file they can open locally and walk the catalog honestly.

A real live-casino product (betting, live results, accounts) is an **open future option**, not current scope.

## Positioning

An offline, screenshot-derived lobby that can be reviewed by opening static HTML. A neighboring live-casino client that needs wallets, dealers, or a game engine cannot truthfully copy that.

## Operating Context

- Open `index.html` in a browser, or serve the folder over localhost.
- Hash routes: lobby, game category, table preview.
- Optional check: `node smoke-test.js`.
- English and 简体中文, switched from the menu.
- Menu also exposes lobby, profile, and about-demo.

## Capabilities and Constraints

Shipped now:

- Lobby with Good Road baccarat shortcuts and eight game categories: Lucky Numbers, Bingo Frenzy, Speed Frenzy, Baccarat, Roulette, Sic Bo, Craps, Blackjack.
- Category lists with beginner/royal and dealer filters; empty-filter state.
- Table preview pages that do not accept bets or run games.
- Profile and about dialogs; fixed illustrative balance `5,380,461`.
- Hash navigation; no external assets, fonts, services, or game engine.

Must preserve:

- Product name **AI Live Casino Lite**.
- The eight game categories and their names.
- English and 简体中文.

Explicitly open:

- Whether and when betting, live results, and real accounts land.
- Demo-only constraints (no bets, no live play, illustrative dealers/tables/roadmaps/balance) **may change later**.

## Brand Commitments

- Name: AI Live Casino Lite.
- Catalog labels stay the eight shipped category names.
- Voice stays demo-honest while it remains a prototype (preview copy, DEMO tags, about-demo). Do not imply live play or real money until that scope is chosen.

## Evidence on Hand

- Screenshot-derived artwork in `assets/` (hero, category cards, avatar, stage).
- Illustrative dealers, table IDs, limits, roadmaps, and balance in `app.js`.
- Product copy in `index.html` / `app.js` (EN and ZH); overview in `README.md`.
- Runtime smoke coverage in `smoke-test.js`.

Do not fabricate testimonials, real customer balances, live results, licensing, or production deployment claims.

## Product Principles

1. Reviewable without infrastructure: the prototype must stay openable as static files until a real backend is an explicit decision.
2. Honest about scope: while it is a demo, do not present betting, wallets, or live outcomes as real.
3. Catalog is durable: the name and eight game categories are product truth, not throwaway placeholders.
4. Prototype now, product later: keep a path to a real live-casino client without pretending that path is already built.
5. Bilingual by default: English and 简体中文 stay first-class.
