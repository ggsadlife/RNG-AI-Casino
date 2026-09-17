// Optional, dependency-free runtime smoke test. Run with: node smoke-test.js
const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

class Element {
  constructor(id) {
    this.id = id;
    this.innerHTML = "";
    this.hidden = id === "menuPanel";
    this.listeners = {};
    this.attrs = {};
    this.isConnected = true;
    this.scrollLeft = 0;
    this.scrollWidth = id === "categoryStrip" ? 900 : 0;
    this.clientWidth = id === "categoryStrip" ? 350 : 0;
    this.classList = { add() {}, remove() {} };
  }
  addEventListener(name, callback) { this.listeners[name] = callback; }
  setAttribute(name, value) { this.attrs[name] = value; }
  focus() {}
  contains() { return false; }
  showModal() { this.open = true; }
  close() { this.open = false; this.listeners.close?.(); }
  scrollBy({ left }) {
    this.scrollLeft = Math.max(0, Math.min(this.scrollWidth - this.clientWidth, this.scrollLeft + left));
    this.listeners.scroll?.();
  }
  querySelector(selector) {
    if (selector === ".table-list") return elements.tableList;
    if (selector === "#levelFilter") return elements.levelFilter;
    if (selector === "#dealerFilter") return elements.dealerFilter;
    if (selector === '[aria-current="page"]') return { scrollIntoView() {} };
    if (selector === ".category-strip") return elements.categoryStrip;
    if (selector === ".category-arrow--left") return elements.leftArrow;
    if (selector === ".category-arrow--right") return elements.rightArrow;
    if (selector === ".modal-close") return { focus() {} };
    return null;
  }
}

const ids = ["view", "menuButton", "menuPanel", "modal", "modalContent", "toast", "profileButton", "refreshButton", "balanceText", "tableList", "levelFilter", "dealerFilter", "categoryStrip", "leftArrow", "rightArrow"];
const elements = Object.fromEntries(ids.map(id => [id, new Element(id)]));
const documentListeners = {};
const windowListeners = {};
let currentHash = "";
const location = {
  get hash() { return currentHash; },
  set hash(value) { currentHash = value; windowListeners.hashchange?.(); }
};
const document = {
  title: "",
  documentElement: { lang: "en" },
  activeElement: elements.menuButton,
  getElementById(id) { return elements[id]; },
  querySelectorAll() { return []; },
  addEventListener(name, callback) { documentListeners[name] = callback; }
};
const window = { addEventListener(name, callback) { windowListeners[name] = callback; } };
const context = { document, window, location, setTimeout, clearTimeout, console };

vm.runInNewContext(fs.readFileSync("app.js", "utf8"), context, { filename: "app.js" });
assert(!fs.readFileSync("index.html", "utf8").includes('class="bottom-bar"'));
assert(elements.view.innerHTML.includes("lobby-view"));
assert(document.title.includes("Lobby"));
assert((elements.view.innerHTML.match(/class="game-card/g) || []).length === 8);
assert((elements.view.innerHTML.match(/class="road-card"/g) || []).length === 3);
assert(elements.view.innerHTML.includes("LIVE PIT SELECTION"));
assert(elements.view.innerHTML.includes("cat-tab"));

function clickView(nav, action, scrollDirection) {
  elements.view.listeners.click({ target: { closest(selector) {
    if (selector === "[data-scroll]") return scrollDirection ? { dataset: { scroll: scrollDirection } } : null;
    if (selector === "[data-nav]") return nav ? { dataset: { nav } } : null;
    if (selector === '[data-action="clear-filters"]') return action === "clear-filters" ? {} : null;
    return null;
  } } });
}

for (const category of ["lucky-numbers", "bingo-frenzy", "speed-frenzy", "baccarat", "roulette", "sic-bo", "craps", "blackjack"]) {
  clickView(`category/${category}`);
  assert(elements.view.innerHTML.includes("category-view"));
  assert((elements.tableList.innerHTML.match(/class="table-card"/g) || []).length >= 3);
}

clickView("category/baccarat");
assert(elements.view.innerHTML.includes("category-view"));
assert(document.title.includes("BACCARAT"));
assert((elements.tableList.innerHTML.match(/class="table-card"/g) || []).length === 4);
assert(elements.leftArrow.disabled);
assert(!elements.rightArrow.disabled);
clickView(null, null, "right");
assert(elements.categoryStrip.scrollLeft > 0);
assert(!elements.leftArrow.disabled);
clickView(null, null, "left");
assert(elements.categoryStrip.scrollLeft === 0);

elements.levelFilter.value = "royal";
elements.view.listeners.change({ target: elements.levelFilter });
elements.dealerFilter.value = "Grace";
elements.view.listeners.change({ target: elements.dealerFilter });
assert(elements.tableList.innerHTML.includes("No tables match"));

clickView(null, "clear-filters");
assert((elements.tableList.innerHTML.match(/class="table-card"/g) || []).length === 4);

clickView("table/baccarat/A104");
assert(elements.view.innerHTML.includes("DEMO PREVIEW"));
assert(document.title.includes("A104"));
assert(elements.view.innerHTML.includes("Betting and live results are unavailable"));

elements.menuPanel.listeners.click({ target: { closest() { return { dataset: { action: "home" } }; } } });
assert(elements.view.innerHTML.includes("lobby-view"));

elements.profileButton.listeners.click();
assert(elements.modal.open);
assert(elements.modalContent.innerHTML.includes("5,380,461"));
elements.modal.close();

elements.menuPanel.listeners.click({ target: { closest() { return { dataset: { action: "language" } }; } } });
assert(elements.modal.open);
elements.modal.listeners.click({ target: { closest(selector) {
  return selector === "[data-language]" ? { dataset: { language: "zh" } } : null;
} } });
assert(document.documentElement.lang === "zh-CN");
assert(elements.view.innerHTML.includes("好路推荐"));
assert(document.title.includes("大厅"));
assert(elements.view.innerHTML.includes("现场桌台"));

console.log("Smoke test passed: category arrows, no footer, lobby, all categories, filters, table preview, menu home, profile, language.");
