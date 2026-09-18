(function () {
  "use strict";

  const BALANCE = "5,380,461";
  const categories = [
    { id: "lucky-numbers", name: "LUCKY NUMBERS", short: "Lucky Num", image: "lucky-numbers.webp" },
    { id: "bingo-frenzy", name: "BINGO FRENZY", short: "Bingo", image: "bingo-frenzy.webp" },
    { id: "speed-frenzy", name: "SPEED FRENZY", short: "Speed Pit", image: "speed-frenzy.webp" },
    { id: "baccarat", name: "BACCARAT", short: "Baccarat", image: "baccarat.webp" },
    { id: "roulette", name: "ROULETTE", short: "Roulette", image: "roulette.webp" },
    { id: "sic-bo", name: "SIC BO", short: "Sic Bo", image: "sic-bo.webp" },
    { id: "craps", name: "CRAPS", short: "Craps", image: "craps.webp", synthetic: true },
    { id: "blackjack", name: "BLACKJACK", short: "Blackjack", image: "blackjack.webp", synthetic: true }
  ];

  const tables = {
    "lucky-numbers": [
      { id: "N101", dealer: "Sophia", level: "beginner", limit: "1,000 – 2,000,000" },
      { id: "N102", dealer: "Amelia", level: "beginner", limit: "1,000 – 2,000,000" },
      { id: "N301", dealer: "Grace", level: "royal", limit: "100,000 – 20,000,000" }
    ],
    "bingo-frenzy": [
      { id: "I001", dealer: "Sophia", level: "beginner", limit: "1,000 – 2,000,000" },
      { id: "I002", dealer: "Amelia", level: "beginner", limit: "1,000 – 2,000,000" },
      { id: "I301", dealer: "Betty", level: "royal", limit: "100,000 – 20,000,000" }
    ],
    "speed-frenzy": [
      { id: "S101", dealer: "Grace", level: "beginner", limit: "1,000 – 2,000,000" },
      { id: "S102", dealer: "Betty", level: "beginner", limit: "1,000 – 2,000,000" },
      { id: "S301", dealer: "Sophia", level: "royal", limit: "100,000 – 20,000,000" }
    ],
    baccarat: [
      { id: "A104", dealer: "Grace", level: "beginner", limit: "1,000 – 2,000,000" },
      { id: "A116", dealer: "Betty", level: "beginner", limit: "1,000 – 2,000,000" },
      { id: "A318", dealer: "Sophia", level: "royal", limit: "100,000 – 20,000,000" },
      { id: "A301", dealer: "Amelia", level: "royal", limit: "100,000 – 20,000,000" }
    ],
    roulette: [
      { id: "R101", dealer: "Amelia", level: "beginner", limit: "1,000 – 2,000,000" },
      { id: "R102", dealer: "Grace", level: "beginner", limit: "1,000 – 2,000,000" },
      { id: "R301", dealer: "Betty", level: "royal", limit: "100,000 – 20,000,000" }
    ],
    "sic-bo": [
      { id: "D101", dealer: "Betty", level: "beginner", limit: "1,000 – 2,000,000" },
      { id: "D102", dealer: "Sophia", level: "beginner", limit: "1,000 – 2,000,000" },
      { id: "D301", dealer: "Grace", level: "royal", limit: "100,000 – 20,000,000" }
    ],
    craps: [
      { id: "C101", dealer: "Amelia", level: "beginner", limit: "1,000 – 2,000,000" },
      { id: "C102", dealer: "Betty", level: "beginner", limit: "1,000 – 2,000,000" },
      { id: "C301", dealer: "Sophia", level: "royal", limit: "100,000 – 20,000,000" }
    ],
    blackjack: [
      { id: "B101", dealer: "Sophia", level: "beginner", limit: "1,000 – 2,000,000" },
      { id: "B102", dealer: "Grace", level: "beginner", limit: "1,000 – 2,000,000" },
      { id: "B301", dealer: "Amelia", level: "royal", limit: "100,000 – 20,000,000" }
    ]
  };

  const messages = {
    en: {
      language: "Language", profile: "Profile", about: "About demo", lobby: "Lobby", goodRoad: "GOOD ROAD GLANCE",
      level: "Level", dealer: "Dealer", allLevels: "All levels", beginner: "Beginner", royal: "Royal",
      allDealers: "All dealers", tableLimit: "TABLE LIMIT", resulting: "Resulting...", enter: "ENTER",
      demo: "DEMO", back: "Back", table: "Table", limit: "Table limit", mode: "Mode",
      preview: "DEMO PREVIEW", previewNote: "This is a local preview. Betting and live results are unavailable.",
      tableId: "Table ID", shoeMatrix: "Shoe matrix", beadPlate: "12×5 bead plate", langs: "EN / 中文",
      backTables: "Back to tables", noTables: "No tables match these filters.", clearFilters: "Clear filters",
      nickname: "Nickname", balance: "Balance", demoPlayer: "Demo Player", localBalance: "The demo balance is fixed and does not connect to a casino account.",
      aboutText: "This offline lobby is a visual demo based on the supplied screenshots. Tables and roadmaps use illustrative data. No bets or live games are available.",
      refreshText: "Demo balance is fixed at 5,380,461.", home: "Go to lobby", openMenu: "Open menu", closeMenu: "Close menu", openProfile: "Open profile",
      refreshBalance: "Refresh demo balance", open: "Open", close: "Close", games: "Games", scrollLeft: "Scroll games left", scrollRight: "Scroll games right",
      heroLabel: "AI Live Casino dealer on a neon stage", artwork: "game artwork", featured: "FEATURED PIT", livePit: "LIVE PIT SELECTION",
      tablesCount: "8 TABLES", limits: "Limits", pts: "PTS", type: "Type",
      tables: "TABLES", lastPockets: "Pocket history", lastRoll: "Latest roll", lastResults: "Last results",
      lastDraws: "Last draws", callCard: "Call card", upCards: "Up cards", sum: "Sum", total: "Total"
    },
    zh: {
      language: "语言", profile: "个人资料", about: "关于演示", lobby: "大厅", goodRoad: "好路推荐",
      level: "级别", dealer: "荷官", allLevels: "全部级别", beginner: "初级", royal: "高级",
      allDealers: "全部荷官", tableLimit: "桌台限额", resulting: "正在开奖…", enter: "进入",
      demo: "演示", back: "返回", table: "桌台", limit: "桌台限额", mode: "模式",
      preview: "演示预览", previewNote: "这是本地预览，不提供下注或实时开奖结果。",
      tableId: "桌台编号", shoeMatrix: "路单矩阵", beadPlate: "12×5 珠盘", langs: "EN / 中文",
      backTables: "返回桌台列表", noTables: "没有符合筛选条件的桌台。", clearFilters: "清除筛选",
      nickname: "昵称", balance: "余额", demoPlayer: "演示玩家", localBalance: "演示余额固定，不连接赌场账户。",
      aboutText: "这个离线大厅根据提供的截图制作。桌台及路单使用演示数据，不提供下注或实时游戏。",
      refreshText: "演示余额固定为 5,380,461。", home: "返回大厅", openMenu: "打开菜单", closeMenu: "关闭菜单", openProfile: "打开个人资料",
      refreshBalance: "刷新演示余额", open: "打开", close: "关闭", games: "游戏分类", scrollLeft: "向左滚动游戏", scrollRight: "向右滚动游戏",
      heroLabel: "霓虹舞台上的 AI Live Casino 荷官", artwork: "游戏图片", featured: "精选赌台", livePit: "现场桌台",
      tablesCount: "8 张桌台", limits: "限额", pts: "PTS", type: "类型",
      tables: "张桌台", lastPockets: "号码记录", lastRoll: "最近一骰", lastResults: "最近结果",
      lastDraws: "最近开奖", callCard: "开奖卡", upCards: "明牌", sum: "和值", total: "合计"
    }
  };

  const view = document.getElementById("view");
  const menuButton = document.getElementById("menuButton");
  const menuPanel = document.getElementById("menuPanel");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  const toast = document.getElementById("toast");
  const state = { language: "en", level: "all", dealer: "all", category: "baccarat" };
  let toastTimer;
  let modalReturnFocus;

  const t = key => messages[state.language][key];
  const categoryById = id => categories.find(item => item.id === id);
  const image = name => `assets/${name}`;
  const chartIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/></svg>';

  function roadDots(seed, columns, rows, labeled) {
    const dots = [];
    for (let column = 1; column <= columns; column += 1) {
      const count = 1 + ((seed + column * 7) % Math.min(rows, 4));
      for (let row = 1; row <= count; row += 1) {
        const banker = (seed + column * 3 + row) % 3 !== 0;
        const tie = (seed + column + row * 2) % 13 === 0;
        const color = tie ? null : banker ? "#ef54b9" : "#75c5ff";
        const letter = labeled ? (tie ? "T" : banker ? "B" : "P") : "";
        dots.push(`<i class="road-dot${tie ? " tie" : ""}${labeled ? " labeled" : ""}" style="grid-column:${column};grid-row:${row};${color ? `--dot:${color}` : ""}" aria-hidden="true">${letter}</i>`);
      }
    }
    return dots.join("");
  }

  function catButtons(activeId, className) {
    return categories.map(item => `<button class="${className}" type="button" data-nav="category/${item.id}" ${item.id === activeId ? 'aria-current="page"' : ""} aria-label="${t("open")} ${item.name}"><img src="${image(item.image)}" alt="" /><span>${item.short}</span></button>`).join("");
  }

  function renderLobby() {
    const roadIds = ["A104", "A116", "A318"];
    const featured = tables.baccarat[0];
    view.innerHTML = `
      <div class="lobby-view">
        <div class="hero" role="img" aria-label="${t("heroLabel")}">
          <div class="hero-chip"><span class="live-dot" aria-hidden="true"></span>${featured.dealer}</div>
          <div class="hero-bar">
            <div class="hero-copy">
              <div class="hero-meta"><span class="badge">${t("featured")}</span><span class="status-word">${t("resulting")}</span></div>
              <h1>Baccarat ${featured.id}</h1>
              <div class="hero-limits"><span>${featured.limit} ${t("pts")}</span></div>
            </div>
            <button class="enter-button" type="button" data-nav="table/baccarat/${featured.id}">${t("enter")}</button>
          </div>
        </div>
        <div class="hero-edge"></div>
        <div class="lobby-rail">${catButtons("baccarat", "cat-tab")}</div>
        <section class="road-section" aria-label="${t("goodRoad")}">
          <div class="road-head">
            <h2 class="road-title">${chartIcon}${t("goodRoad")}</h2>
            <div class="legend"><span><i class="b"></i>B</span><span><i class="p"></i>P</span><span><i class="t"></i>T</span></div>
          </div>
          <div class="road-row">
            ${roadIds.map((id, index) => {
              const table = tables.baccarat.find(item => item.id === id);
              return `<button class="road-card" type="button" data-nav="table/baccarat/${id}" aria-label="${t("open")} Baccarat ${id}"><span class="road-card-title">${id}<em>${t("demo")}</em></span><span class="road-grid">${roadDots(index + 2, 9, 5)}</span><span class="road-foot"><span>${table.limit}</span><span>${table.dealer}</span></span></button>`;
            }).join("")}
          </div>
        </section>
        <section class="pit-section">
          <div class="pit-head"><h2>${t("livePit")}</h2><span>${t("tablesCount")}</span></div>
          <div class="game-grid">
            ${categories.map(item => `<button class="game-card${item.synthetic ? " synthetic" : ""}" type="button" data-nav="category/${item.id}" aria-label="${t("open")} ${item.name}"><img src="${image(item.image)}" alt="" />${item.synthetic ? `<span class="synthetic-label">${item.name}</span>` : ""}<span class="game-copy">${t("demo")}</span></button>`).join("")}
          </div>
        </section>
      </div>`;
  }

  function diePips(value) {
    const map = { 1: [5], 2: [1, 9], 3: [1, 5, 9], 4: [1, 3, 7, 9], 5: [1, 3, 5, 7, 9], 6: [1, 3, 4, 6, 7, 9] };
    const on = map[value] || [];
    return `<span class="die" aria-hidden="true">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => `<i${on.includes(i) ? ' class="on"' : ""}></i>`).join("")}</span>`;
  }

  function tableBoard(category, item, index) {
    let seed = index + 1;
    for (let i = 0; i < item.id.length; i += 1) seed = (seed * 33 + item.id.charCodeAt(i)) >>> 0;
    if (category.id === "baccarat") {
      return `<div class="mini-road" aria-hidden="true">${roadDots(index + 5, 12, 5)}</div>`;
    }
    if (category.id === "roulette") {
      const reds = new Set([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]);
      const pills = Array.from({ length: 8 }, (_, i) => {
        const n = (seed * 7 + i * 11) % 37;
        const kind = n === 0 ? "green" : reds.has(n) ? "red" : "black";
        return `<span class="pocket ${kind}">${n}</span>`;
      }).join("");
      return `<small class="board-label">${t("lastPockets")}</small><div class="pocket-row">${pills}</div>`;
    }
    if (category.id === "sic-bo") {
      const a = 1 + (seed * 7) % 6, b = 1 + (seed * 13 + 2) % 6, c = 1 + (seed * 17 + 4) % 6;
      return `<small class="board-label">${t("lastRoll")}</small><div class="dice-row">${diePips(a)}${diePips(b)}${diePips(c)}<span class="dice-sum">${t("sum")} ${a + b + c}</span></div>`;
    }
    if (category.id === "craps") {
      const a = 1 + (seed * 7) % 6, b = 1 + (seed * 13 + 3) % 6;
      return `<small class="board-label">${t("lastRoll")}</small><div class="dice-row">${diePips(a)}${diePips(b)}<span class="dice-sum">${t("total")} ${a + b}</span></div>`;
    }
    if (category.id === "blackjack") {
      const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
      const suits = ["s", "h", "d", "c"];
      return `<small class="board-label">${t("upCards")}</small><div class="card-pair"><span class="playing-card ${suits[seed % 4]}">${ranks[seed % 13]}</span><span class="playing-card ${suits[(seed * 5) % 4]}">${ranks[(seed * 3) % 13]}</span></div>`;
    }
    if (category.id === "speed-frenzy") {
      const chips = Array.from({ length: 12 }, (_, i) => `<span class="result-chip">${(seed + i * 5) % 36 + 1}</span>`).join("");
      return `<small class="board-label">${t("lastResults")}</small><div class="result-row">${chips}</div>`;
    }
    if (category.id === "lucky-numbers") {
      const tiles = Array.from({ length: 8 }, (_, i) => `<span class="num-tile${i === 0 ? " current" : ""}">${(seed + i * 9) % 36 + 1}</span>`).join("");
      return `<small class="board-label">${t("lastDraws")}</small><div class="num-row">${tiles}</div>`;
    }
    if (category.id === "bingo-frenzy") {
      const cells = Array.from({ length: 25 }, (_, i) => `<i class="bingo-cell${(seed + i) % 3 === 0 ? " called" : ""}">${i === 12 ? "" : ((seed + i) % 75) + 1}</i>`).join("");
      return `<small class="board-label">${t("callCard")}</small><div class="bingo-mini">${cells}</div>`;
    }
    return `<div class="table-art"><img src="${image(category.image)}" alt="" /></div>`;
  }

  function tableCard(item, category, index) {
    return `<article class="table-card">
      <div class="table-heading">${category.name} <strong>${item.id}</strong><em>${t(item.level)}</em><span class="resulting">${t("resulting")}</span></div>
      <div class="table-body">
        <div class="dealer-tile"><img src="${image("hero.webp")}" alt="" /><span>${item.dealer}</span></div>
        <div class="table-info">${tableBoard(category, item, index)}<div class="table-actions"><span class="limit-stack"><small>${t("limits")}</small><b>${item.limit} ${t("pts")}</b></span><button class="enter-button" type="button" data-nav="table/${category.id}/${item.id}" aria-label="${t("enter")} ${category.name} ${item.id}">${t("enter")}</button></div></div>
      </div>
    </article>`;
  }

  function updateTableList(category) {
    const filtered = tables[category.id].filter(item =>
      (state.level === "all" || item.level === state.level) &&
      (state.dealer === "all" || item.dealer === state.dealer)
    );
    const list = view.querySelector(".table-list");
    list.innerHTML = filtered.length
      ? filtered.map((item, index) => tableCard(item, category, index)).join("")
      : `<div class="empty-state">${t("noTables")}<br /><br /><button class="primary-button" type="button" data-action="clear-filters">${t("clearFilters")}</button></div>`;
  }

  function updateCategoryArrows() {
    const strip = view.querySelector(".category-strip");
    if (!strip) return;
    const maxScroll = Math.max(0, strip.scrollWidth - strip.clientWidth);
    view.querySelector(".category-arrow--left").disabled = strip.scrollLeft <= 2;
    view.querySelector(".category-arrow--right").disabled = strip.scrollLeft >= maxScroll - 2;
  }

  function renderCategory(category) {
    state.category = category.id;
    const dealers = [...new Set(tables[category.id].map(item => item.dealer))];
    view.innerHTML = `<div class="category-view">
      <div class="category-rail">
        <button class="category-arrow category-arrow--left" type="button" data-scroll="left" aria-label="${t("scrollLeft")}" aria-controls="categoryStrip"><span class="arrow-chevron" aria-hidden="true"></span></button>
        <nav class="category-strip" id="categoryStrip" aria-label="${t("games")}">
          ${catButtons(category.id, "category-tab")}
        </nav>
        <button class="category-arrow category-arrow--right" type="button" data-scroll="right" aria-label="${t("scrollRight")}" aria-controls="categoryStrip"><span class="arrow-chevron" aria-hidden="true"></span></button>
      </div>
      <div class="filter-bar">
        <label><span>${t("level")}</span><select id="levelFilter"><option value="all">${t("allLevels")}</option><option value="beginner">${t("beginner")}</option><option value="royal">${t("royal")}</option></select></label>
        <label><span>${t("dealer")}</span><select id="dealerFilter"><option value="all">${t("allDealers")}</option>${dealers.map(name => `<option value="${name}">${name}</option>`).join("")}</select></label>
      </div>
      <div class="pit-kicker"><h2>${category.name}</h2><span>${tables[category.id].length} ${t("tables")}</span></div>
      <div class="table-list" aria-live="polite"></div>
    </div>`;
    view.querySelector("#levelFilter").value = state.level;
    view.querySelector("#dealerFilter").value = dealers.includes(state.dealer) ? state.dealer : "all";
    if (!dealers.includes(state.dealer)) state.dealer = "all";
    updateTableList(category);
    const strip = view.querySelector(".category-strip");
    strip.addEventListener("scroll", updateCategoryArrows);
    const selected = view.querySelector('[aria-current="page"]');
    if (selected) selected.scrollIntoView({ block: "nearest", inline: "center" });
    updateCategoryArrows();
  }

  function renderDetail(category, table) {
    const baccarat = category.id === "baccarat";
    const tableIndex = tables[category.id].findIndex(item => item.id === table.id);
    const stageSrc = baccarat ? image("hero.webp") : image(category.image);
    const extra = baccarat
      ? `<section class="shoe-card" aria-label="${t("shoeMatrix")}">
        <div class="shoe-head">
          <div><h2>${t("shoeMatrix")}</h2><span>${t("beadPlate")}</span></div>
          <div class="legend"><span><i class="b"></i>B</span><span><i class="p"></i>P</span><span><i class="t"></i>T</span></div>
        </div>
        <div class="shoe-grid">${roadDots(tableIndex + 5, 12, 5, true)}</div>
      </section>`
      : `<section class="board-card">${tableBoard(category, table, tableIndex)}</section>`;
    view.innerHTML = `<div class="detail-view">
      <div class="detail-subhead">
        <button class="icon-back" type="button" data-nav="category/${category.id}" aria-label="${t("backTables")}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6 9 12l6 6"/></svg>
        </button>
        <div class="detail-titles">
          <h1>${category.name} ${table.id}</h1>
          <span>${t(table.level)} · ${table.dealer}</span>
        </div>
        <span class="preview-badge">${t("preview")}</span>
      </div>
      <div class="detail-stage">
        <img src="${stageSrc}" alt="${category.name} ${t("artwork")}" />
        <div class="stage-chip"><span class="live-dot" aria-hidden="true"></span>${t("resulting")}</div>
        <div class="dealer-plate"><span>${table.dealer}</span><em>${t("langs")}</em></div>
        <div class="hero-edge"></div>
      </div>
      <div class="preview-stack">
        <dl class="info-card">
          <div><dt>${t("tableId")}</dt><dd>${table.id}</dd></div>
          <div><dt>${t("limit")}</dt><dd>${table.limit} ${t("pts")}</dd></div>
          <div><dt>${t("dealer")}</dt><dd>${table.dealer}</dd></div>
          <div><dt>${t("mode")}</dt><dd>${t("demo")}</dd></div>
        </dl>
        ${extra}
        <p class="detail-note">${t("previewNote")}</p>
        <button class="primary-button" type="button" data-nav="category/${category.id}">${t("backTables")}</button>
      </div>
    </div>`;
  }

  function render() {
    const parts = decodeURIComponent(location.hash.replace(/^#/, "")).split("/").filter(Boolean);
    const section = parts[0] || "lobby";
    const category = categoryById(parts[1]);
    let pageTitle = t("lobby");
    closeMenu();
    if (section === "category" && category) {
      renderCategory(category);
      pageTitle = category.name;
    } else if (section === "table" && category) {
      const table = tables[category.id].find(item => item.id === parts[2]);
      if (table) {
        renderDetail(category, table);
        pageTitle = `${category.name} ${table.id}`;
      } else renderLobby();
    } else renderLobby();
    document.title = `${pageTitle} · AI Live Casino Lite`;
    updateStaticLabels();
    view.focus({ preventScroll: true });
  }

  function navigate(path) {
    const next = `#${path}`;
    if (location.hash === next) render();
    else location.hash = next;
  }

  function updateStaticLabels() {
    document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.getElementById("profileButton").setAttribute("aria-label", t("openProfile"));
    document.getElementById("refreshButton").setAttribute("aria-label", t("refreshBalance"));
    menuButton.setAttribute("aria-label", menuPanel.hidden ? t("openMenu") : t("closeMenu"));
  }

  function closeMenu() {
    menuPanel.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", t("openMenu"));
  }

  function openModal(kind) {
    modalReturnFocus = document.activeElement;
    closeMenu();
    let title = "";
    let body = "";
    if (kind === "profile") {
      title = t("profile");
      body = `<img class="modal-avatar" src="${image("avatar.webp")}" alt="" /><div class="profile-row"><span>${t("nickname")}</span><strong>${t("demoPlayer")}</strong></div><div class="profile-row"><span>${t("balance")}</span><strong>${BALANCE}</strong></div><p>${t("localBalance")}</p>`;
    } else if (kind === "language") {
      title = t("language");
      body = `<div class="language-options"><button type="button" data-language="en" aria-pressed="${state.language === "en"}"><span>English</span><span>${state.language === "en" ? "✓" : ""}</span></button><button type="button" data-language="zh" aria-pressed="${state.language === "zh"}"><span>简体中文</span><span>${state.language === "zh" ? "✓" : ""}</span></button></div>`;
    } else {
      title = t("about");
      body = `<p>${t("aboutText")}</p>`;
    }
    modalContent.innerHTML = `<div class="modal-header"><h2 id="modalTitle">${title}</h2><button class="modal-close" type="button" data-action="close-modal" aria-label="${t("close")}">×</button></div><div class="modal-body">${body}</div>`;
    modal.showModal();
    modal.querySelector(".modal-close").focus();
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("show");
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  function handleViewClick(event) {
    const scrollButton = event.target.closest("[data-scroll]");
    if (scrollButton) {
      const strip = view.querySelector(".category-strip");
      const direction = scrollButton.dataset.scroll === "left" ? -1 : 1;
      strip.scrollBy({ left: direction * strip.clientWidth * .8, behavior: "smooth" });
      return;
    }
    const nav = event.target.closest("[data-nav]");
    if (nav) {
      if (nav.dataset.nav.startsWith("category/") && nav.dataset.nav !== `category/${state.category}`) {
        state.level = "all";
        state.dealer = "all";
      }
      navigate(nav.dataset.nav);
      return;
    }
    if (event.target.closest('[data-action="clear-filters"]')) {
      state.level = "all";
      state.dealer = "all";
      renderCategory(categoryById(state.category));
    }
  }

  view.addEventListener("click", handleViewClick);
  document.getElementById("homeButton")?.addEventListener("click", () => navigate("lobby"));

  view.addEventListener("change", event => {
    if (event.target.id === "levelFilter") state.level = event.target.value;
    else if (event.target.id === "dealerFilter") state.dealer = event.target.value;
    else return;
    updateTableList(categoryById(state.category));
  });

  document.getElementById("profileButton").addEventListener("click", () => openModal("profile"));
  document.getElementById("refreshButton").addEventListener("click", () => showToast(t("refreshText")));
  menuButton.addEventListener("click", () => {
    menuPanel.hidden = !menuPanel.hidden;
    menuButton.setAttribute("aria-expanded", String(!menuPanel.hidden));
    menuButton.setAttribute("aria-label", menuPanel.hidden ? t("openMenu") : t("closeMenu"));
  });
  menuPanel.addEventListener("click", event => {
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (action === "home") navigate("lobby");
    else if (action) openModal(action);
  });
  modal.addEventListener("click", event => {
    if (event.target === modal || event.target.closest('[data-action="close-modal"]')) modal.close();
    const language = event.target.closest("[data-language]")?.dataset.language;
    if (language) {
      state.language = language;
      modal.close();
      render();
    }
  });
  modal.addEventListener("close", () => {
    if (modalReturnFocus && modalReturnFocus.isConnected) modalReturnFocus.focus();
  });
  document.addEventListener("click", event => {
    if (!menuPanel.hidden && !menuPanel.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !menuPanel.hidden) closeMenu();
  });
  window.addEventListener("hashchange", render);
  window.addEventListener("resize", updateCategoryArrows);

  document.getElementById("balanceText").textContent = BALANCE;
  render();
}());
