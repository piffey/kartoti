"use strict";

// ===========================================================================
// Kartoti — Lithuanian repetition practice. Two modes (tabs): verb conjugation
// and noun/adjective declension. Both render fill-in inputs into a practice
// area and share the same grading, clipboard and modal infrastructure.
// ===========================================================================

// --- Shared constants ------------------------------------------------------

// Lithuanian letters not on a standard English keyboard. Shown in a copy bar so
// learners can paste tricky characters like "š" (s with a háček) into answers.
const SPECIAL_CHARS = ["ą", "č", "ę", "ė", "į", "š", "ų", "ū", "ž"];

let activeTab = "verbs"; // "verbs" | "decl"
let helpModal = null;
let listModal = null;

// --- Verb mode constants ---------------------------------------------------

const PRONOUNS = [
  { key: "as", label: "aš" },
  { key: "tu", label: "tu" },
  { key: "jis", label: "jis/ji" },
  { key: "mes", label: "mes" },
  { key: "jus", label: "jūs" },
  { key: "jie", label: "jie/jos" },
];

// Tense/mood metadata. Every entry is toggleable (see the checkboxes built in
// init); all are enabled by default. The imperative and conditional have no data
// in verbs.js — they are derived from the infinitive (see formsFor) since they
// are fully regular.
const TENSES = [
  { key: "present", name: "Present", lt: "esamasis laikas" },
  { key: "past", name: "Past", lt: "būtasis kartinis laikas" },
  { key: "past_freq", name: "Past frequentative", lt: "būtasis dažninis laikas" },
  { key: "future", name: "Future", lt: "būsimasis laikas" },
  { key: "imperative", name: "Imperative", lt: "liepiamoji nuosaka" },
  { key: "conditional", name: "Conditional", lt: "tariamoji nuosaka" },
];

const CLASS_NAMES = {
  1: "1st conjugation (3rd person ends in -a)",
  2: "2nd conjugation (3rd person ends in -i)",
  3: "3rd conjugation (3rd person ends in -o)",
  irregular: "Irregular verb",
};

// Tracks which tenses are currently shown. Populated in buildTenseToggles.
const tenseEnabled = {};
let currentVerb = null;

// --- Declension mode constants ---------------------------------------------

const CASES = [
  { key: "nom", short: "Nom.", name: "Nominative", lt: "Vardininkas" },
  { key: "gen", short: "Gen.", name: "Genitive", lt: "Kilmininkas" },
  { key: "dat", short: "Dat.", name: "Dative", lt: "Naudininkas" },
  { key: "acc", short: "Acc.", name: "Accusative", lt: "Galininkas" },
  { key: "ins", short: "Ins.", name: "Instrumental", lt: "Įnagininkas" },
  { key: "loc", short: "Loc.", name: "Locative", lt: "Vietininkas" },
  { key: "voc", short: "Voc.", name: "Vocative", lt: "Šauksmininkas", optional: true },
];
const GENDER_NAMES = { masc: "Masculine", fem: "Feminine" };

let includeVocative = true;
let currentWord = null;

// --- Helpers ---------------------------------------------------------------

// Normalize an answer for comparison: trim and lowercase. Lithuanian diacritics
// are significant, so they are intentionally preserved.
function normalize(value) {
  return value.trim().toLowerCase();
}

function pickRandom(list, current, keyOf) {
  if (!list || list.length === 0) return null;
  let next;
  do {
    next = list[Math.floor(Math.random() * list.length)];
  } while (list.length > 1 && current && keyOf(next) === keyOf(current));
  return next;
}

// A single labelled answer row. Used by both verb and declension rendering.
function makeConjRow(labelText, expected, aria) {
  const row = document.createElement("div");
  row.className = "conj-row";

  const label = document.createElement("span");
  label.className = "pronoun";
  label.textContent = labelText;

  const input = document.createElement("input");
  input.type = "text";
  input.autocomplete = "off";
  input.autocapitalize = "off";
  input.spellcheck = false;
  input.dataset.expected = expected;
  input.setAttribute("aria-label", aria);
  input.addEventListener("blur", () => checkInput(input));
  input.addEventListener("input", () => {
    input.classList.remove("correct", "incorrect");
    const ans = row.querySelector(".answer");
    if (ans) ans.remove();
  });

  row.appendChild(label);
  row.appendChild(input);
  return row;
}

// Validate a single input. Empty inputs are left neutral unless revealing.
function checkInput(input, { reveal = false } = {}) {
  const expected = input.dataset.expected;
  const value = input.value;

  if (!reveal && value.trim() === "") {
    input.classList.remove("correct", "incorrect");
    return null;
  }

  const ok = normalize(value) === normalize(expected);
  input.classList.toggle("correct", ok);
  input.classList.toggle("incorrect", !ok);

  const row = input.closest(".conj-row");
  let ans = row.querySelector(".answer");
  if (!ok) {
    if (!ans) {
      ans = document.createElement("span");
      ans.className = "answer";
      row.appendChild(ans);
    }
    ans.textContent = `→ ${expected}`;
  } else if (ans) {
    ans.remove();
  }
  return ok;
}

// Grade every input inside a practice area and report the score.
function checkArea(root, scoreEl) {
  const inputs = root.querySelectorAll(".conj-row input");
  let correct = 0;
  let answered = 0;
  inputs.forEach((input) => {
    const result = checkInput(input);
    if (result !== null) {
      answered += 1;
      if (result) correct += 1;
    }
  });
  if (answered === 0) {
    scoreEl.textContent = "Fill in some answers first.";
  } else {
    scoreEl.textContent = `Score: ${correct} / ${answered} correct` +
      (answered < inputs.length ? ` (${inputs.length - answered} blank)` : "");
  }
}

// Fill blanks and mark the rest inside a practice area.
function revealArea(root) {
  root.querySelectorAll(".conj-row input").forEach((input) => {
    if (input.value.trim() === "") {
      input.value = input.dataset.expected;
      input.classList.add("correct");
    } else {
      checkInput(input, { reveal: true });
    }
  });
}

// --- Verb mode -------------------------------------------------------------

function activeTenses() {
  return TENSES.filter((t) => tenseEnabled[t.key]);
}

// Imperative (liepiamoji nuosaka) for tu / mes / jūs. Fully regular: infinitive
// stem (infinitive minus -ti) + -k / -kime / -kite. A stem-final -k or -g merges
// with the imperative -k- (laukti → lauk, bėgti → bėk, pirkti → pirk).
function buildImperative(infinitive) {
  let stem = infinitive.slice(0, -2);
  if (/[kg]$/.test(stem)) stem = stem.slice(0, -1);
  return { tu: stem + "k", mes: stem + "kime", jus: stem + "kite" };
}

// Conditional mood (tariamoji nuosaka) for all six persons. Fully regular:
// infinitive stem + -čiau / -tum / -tų / -tumėme / -tumėte / -tų.
function buildConditional(infinitive) {
  const stem = infinitive.slice(0, -2);
  return {
    as: stem + "čiau",
    tu: stem + "tum",
    jis: stem + "tų",
    mes: stem + "tumėme",
    jus: stem + "tumėte",
    jie: stem + "tų",
  };
}

// Forms for a given tense, preferring explicit data and falling back to the
// derived imperative/conditional so irregular verbs can still override them in
// verbs.js.
function formsFor(verb, tenseKey) {
  if (verb.tenses[tenseKey]) return verb.tenses[tenseKey];
  if (tenseKey === "imperative") return buildImperative(verb.infinitive);
  if (tenseKey === "conditional") return buildConditional(verb.infinitive);
  return null;
}

function renderVerb(verb) {
  currentVerb = verb;

  const prompt = document.getElementById("verb-prompt");
  prompt.classList.remove("hidden");

  // Show verbs the way dictionaries do: infinitive, 3rd-person singular present,
  // 3rd-person singular past — e.g. "dirbti, dirba, dirbo".
  const principalParts = [
    verb.infinitive,
    verb.tenses.present && verb.tenses.present.jis,
    verb.tenses.past && verb.tenses.past.jis,
  ].filter(Boolean);
  document.getElementById("verb-infinitive").textContent = principalParts.join(", ");
  document.getElementById("verb-translation").textContent = verb.translation || "";
  document.getElementById("verb-class").textContent =
    CLASS_NAMES[verb.conjugation_class] || "";

  // Which case the verb governs, shown as the question word its object answers.
  // Verbs added without government data leave this blank rather than asserting a
  // (possibly wrong) "intransitive" label.
  const govEl = document.getElementById("verb-governs");
  if (!verb.governs) {
    govEl.innerHTML = "";
  } else if (verb.governs.q && verb.governs.q !== "—") {
    govEl.innerHTML =
      `Takes <strong>${verb.governs.q}</strong>` +
      (verb.governs.case ? ` <span class="case-name">(${verb.governs.case})</span>` : "");
  } else {
    govEl.innerHTML =
      `<span class="case-name">${verb.governs.case || "intransitive"}</span>`;
  }

  // One example sentence with its English translation.
  const exEl = document.getElementById("verb-example");
  if (verb.example && verb.example.lt) {
    exEl.innerHTML =
      `<span class="example-lt">${verb.example.lt}</span>` +
      (verb.example.en ? ` <span class="example-en">— ${verb.example.en}</span>` : "");
  } else {
    exEl.textContent = "";
  }

  document.getElementById("verb-score").textContent = "";

  const area = document.getElementById("conjugation-area");
  area.innerHTML = "";

  activeTenses().forEach((tense) => {
    const forms = formsFor(verb, tense.key);
    if (!forms) return;

    const block = document.createElement("section");
    block.className = "tense-block";

    const h3 = document.createElement("h3");
    h3.innerHTML = `${tense.name} <span class="lt-name">${tense.lt}</span>`;
    block.appendChild(h3);

    const rows = document.createElement("div");
    rows.className = "rows";
    PRONOUNS.forEach((p) => {
      const expected = forms[p.key];
      if (expected == null) return;
      rows.appendChild(makeConjRow(p.label, expected, `${tense.name}, ${p.label}`));
    });

    block.appendChild(rows);
    area.appendChild(block);
  });
}

// Build a checkbox per tense. All start enabled; toggling re-renders the verb.
function buildTenseToggles() {
  const container = document.getElementById("tense-toggles");
  TENSES.forEach((tense) => {
    tenseEnabled[tense.key] = true;

    const label = document.createElement("label");
    label.className = "tense-toggle";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = true;
    input.addEventListener("change", () => {
      tenseEnabled[tense.key] = input.checked;
      if (currentVerb) renderVerb(currentVerb);
    });

    label.appendChild(input);
    label.appendChild(document.createTextNode(" " + tense.name));
    container.appendChild(label);
  });
}

// --- Declension mode -------------------------------------------------------

function activeCases() {
  return CASES.filter((c) => !c.optional || includeVocative);
}

// Render one case paradigm (a {nom, gen, …} object) as a titled block of rows.
function renderParadigm(area, title, formsObj, cases) {
  const block = document.createElement("section");
  block.className = "tense-block";

  const h3 = document.createElement("h3");
  h3.textContent = title;
  block.appendChild(h3);

  const rows = document.createElement("div");
  rows.className = "rows";
  cases.forEach((c) => {
    const expected = formsObj[c.key];
    if (expected == null) return;
    rows.appendChild(makeConjRow(c.short, expected, `${title}, ${c.name}`));
  });

  block.appendChild(rows);
  area.appendChild(block);
}

function renderWord(word) {
  currentWord = word;

  const prompt = document.getElementById("word-prompt");
  prompt.classList.remove("hidden");
  document.getElementById("word-headword").textContent = word.word;
  document.getElementById("word-translation").textContent = word.translation || "";
  document.getElementById("word-class").textContent = word.pos === "adj"
    ? `Adjective ${word.declension}`
    : `${GENDER_NAMES[word.gender] || ""} noun · ${word.declension}`;
  document.getElementById("decl-score").textContent = "";

  const area = document.getElementById("declension-area");
  area.innerHTML = "";
  const cases = activeCases();

  if (word.pos === "adj") {
    renderParadigm(area, "Masculine — singular", word.forms.masc.sg, cases);
    renderParadigm(area, "Masculine — plural", word.forms.masc.pl, cases);
    renderParadigm(area, "Feminine — singular", word.forms.fem.sg, cases);
    renderParadigm(area, "Feminine — plural", word.forms.fem.pl, cases);
  } else {
    renderParadigm(area, "Singular", word.forms.sg, cases);
    renderParadigm(area, "Plural", word.forms.pl, cases);
  }
}

// --- Clipboard + character bar ---------------------------------------------

// Copy text to the clipboard, with a fallback for non-secure contexts (file://).
function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (e) { /* ignore */ }
  document.body.removeChild(ta);
  return Promise.resolve();
}

function buildCharBar() {
  const container = document.getElementById("char-chips");
  const status = document.getElementById("char-copied");
  let clearTimer;

  SPECIAL_CHARS.forEach((ch) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "char-chip";
    chip.textContent = ch;
    chip.setAttribute("aria-label", `Copy ${ch}`);
    chip.addEventListener("click", () => {
      copyText(ch).then(() => {
        status.textContent = `Copied “${ch}”`;
        clearTimeout(clearTimer);
        clearTimer = setTimeout(() => { status.textContent = ""; }, 1500);
      });
    });
    container.appendChild(chip);
  });
}

// --- Modals (help + list), tab-aware ---------------------------------------

function closeModals() {
  helpModal.classList.add("hidden");
  listModal.classList.add("hidden");
}
function openModal(m) {
  closeModals();
  m.classList.remove("hidden");
}

function openHelp() {
  document.getElementById("help-body").innerHTML =
    (activeTab === "verbs" ? window.HELP_HTML : window.DECL_HELP_HTML) || "";
  openModal(helpModal);
}

// State for the list modal, rebuilt from the active tab each time it opens.
let listState = null;

function renderListItems(term) {
  const listEl = document.getElementById("entry-list");
  const q = term.trim().toLowerCase();
  listEl.innerHTML = "";
  let shown = 0;

  listState.items.forEach((it) => {
    const label = listState.label(it);
    const sub = listState.sub(it);
    if (q && !label.toLowerCase().includes(q) && !sub.toLowerCase().includes(q)) return;
    shown += 1;

    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "verb-list-item";

    const a = document.createElement("span");
    a.className = "vli-inf";
    a.textContent = label;
    const b = document.createElement("span");
    b.className = "vli-tr";
    b.textContent = sub;

    btn.appendChild(a);
    btn.appendChild(b);
    btn.addEventListener("click", () => listState.pick(it));
    li.appendChild(btn);
    listEl.appendChild(li);
  });

  if (shown === 0) {
    const li = document.createElement("li");
    li.className = "verb-list-empty";
    li.textContent = "No matches.";
    listEl.appendChild(li);
  }
}

function openList() {
  if (activeTab === "verbs") {
    const items = (window.VERBS || []).slice()
      .sort((a, b) => a.infinitive.localeCompare(b.infinitive, "lt"));
    document.getElementById("list-title").textContent = "All verbs";
    listState = {
      items,
      label: (v) => v.infinitive,
      sub: (v) => v.translation || "",
      pick: (v) => { renderVerb(v); closeModals(); },
    };
  } else {
    const items = (window.DECL_WORDS || []).slice()
      .sort((a, b) => a.word.localeCompare(b.word, "lt"));
    document.getElementById("list-title").textContent = "All words";
    listState = {
      items,
      label: (w) => w.word,
      sub: (w) => `${w.translation || ""} · ${w.pos === "adj" ? "adj." : "noun"}`,
      pick: (w) => { renderWord(w); closeModals(); },
    };
  }

  const filter = document.getElementById("list-filter");
  filter.value = "";
  renderListItems("");
  openModal(listModal);
  filter.focus();
}

// --- Tabs ------------------------------------------------------------------

function switchTab(tab) {
  activeTab = tab;
  const isV = tab === "verbs";
  document.getElementById("panel-verbs").classList.toggle("hidden", !isV);
  document.getElementById("panel-decl").classList.toggle("hidden", isV);
  const tv = document.getElementById("tab-verbs");
  const td = document.getElementById("tab-decl");
  tv.classList.toggle("active", isV);
  td.classList.toggle("active", !isV);
  tv.setAttribute("aria-selected", String(isV));
  td.setAttribute("aria-selected", String(!isV));
}

// --- Init ------------------------------------------------------------------

function init() {
  const verbCount = (window.VERBS || []).length;
  const wordCount = (window.DECL_WORDS || []).length;
  document.getElementById("entry-count").textContent =
    `${verbCount} verbs · ${wordCount} words loaded`;

  buildTenseToggles();
  buildCharBar();

  // Tabs.
  document.getElementById("tab-verbs").addEventListener("click", () => switchTab("verbs"));
  document.getElementById("tab-decl").addEventListener("click", () => switchTab("decl"));

  // Verb controls.
  document.getElementById("new-verb-btn").addEventListener("click", () => {
    const verb = pickRandom(window.VERBS, currentVerb, (v) => v.infinitive);
    if (verb) renderVerb(verb);
  });
  const conjArea = document.getElementById("conjugation-area");
  document.getElementById("verb-check-btn").addEventListener("click",
    () => checkArea(conjArea, document.getElementById("verb-score")));
  document.getElementById("verb-reveal-btn").addEventListener("click",
    () => revealArea(conjArea));

  // Declension controls.
  document.getElementById("new-word-btn").addEventListener("click", () => {
    const word = pickRandom(window.DECL_WORDS, currentWord, (w) => w.word);
    if (word) renderWord(word);
  });
  const declArea = document.getElementById("declension-area");
  document.getElementById("decl-check-btn").addEventListener("click",
    () => checkArea(declArea, document.getElementById("decl-score")));
  document.getElementById("decl-reveal-btn").addEventListener("click",
    () => revealArea(declArea));
  document.getElementById("voc-toggle").addEventListener("change", (e) => {
    includeVocative = e.target.checked;
    if (currentWord) renderWord(currentWord);
  });

  // Modals.
  helpModal = document.getElementById("help-modal");
  listModal = document.getElementById("list-modal");
  document.getElementById("help-btn").addEventListener("click", openHelp);
  document.getElementById("help-close").addEventListener("click", closeModals);
  document.getElementById("list-btn").addEventListener("click", openList);
  document.getElementById("list-close").addEventListener("click", closeModals);
  document.getElementById("list-filter").addEventListener("input", (e) => {
    if (listState) renderListItems(e.target.value);
  });
  [helpModal, listModal].forEach((m) => {
    m.addEventListener("click", (e) => { if (e.target === m) closeModals(); });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModals();
  });

  // Open with the tab-agnostic intro rather than a verb, so first-time visitors
  // read what the app is before practising. Tab-specific rules are then a click
  // away on the "?" button.
  document.getElementById("help-body").innerHTML = window.INTRO_HTML || "";
  openModal(helpModal);
}

document.addEventListener("DOMContentLoaded", init);
