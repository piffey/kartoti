"use strict";

// Pronoun labels for the six grammatical persons.
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

// Lithuanian letters not on a standard English keyboard. Shown in a copy bar so
// learners can paste tricky characters like "š" (s with a háček) into answers.
const SPECIAL_CHARS = ["ą", "č", "ę", "ė", "į", "š", "ų", "ū", "ž"];

// Tracks which tenses are currently shown. Populated in buildTenseToggles.
const tenseEnabled = {};

const CLASS_NAMES = {
  1: "1st conjugation (3rd person ends in -a)",
  2: "2nd conjugation (3rd person ends in -i)",
  3: "3rd conjugation (3rd person ends in -o)",
  irregular: "Irregular verb",
};

let currentVerb = null;

// --- Helpers ---------------------------------------------------------------

// Normalize an answer for comparison: trim and lowercase. Lithuanian diacritics
// are significant, so they are intentionally preserved.
function normalize(value) {
  return value.trim().toLowerCase();
}

function pickRandomVerb() {
  const verbs = window.VERBS || [];
  if (verbs.length === 0) return null;
  // Avoid repeating the same verb twice in a row when possible.
  let next;
  do {
    next = verbs[Math.floor(Math.random() * verbs.length)];
  } while (verbs.length > 1 && currentVerb && next.infinitive === currentVerb.infinitive);
  return next;
}

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
// infinitive stem + -čiau / -tum / -tų / -tume / -tute / -tų.
function buildConditional(infinitive) {
  const stem = infinitive.slice(0, -2);
  return {
    as: stem + "čiau",
    tu: stem + "tum",
    jis: stem + "tų",
    mes: stem + "tume",
    jus: stem + "tute",
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

// --- Rendering -------------------------------------------------------------

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
  const govEl = document.getElementById("verb-governs");
  if (verb.governs && verb.governs.q && verb.governs.q !== "—") {
    govEl.innerHTML =
      `Takes <strong>${verb.governs.q}</strong>` +
      (verb.governs.case ? ` <span class="case-name">(${verb.governs.case})</span>` : "");
  } else {
    govEl.innerHTML =
      `<span class="case-name">${(verb.governs && verb.governs.case) || "intransitive"}</span>`;
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

  document.getElementById("score").textContent = "";

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

      const row = document.createElement("div");
      row.className = "conj-row";

      const label = document.createElement("span");
      label.className = "pronoun";
      label.textContent = p.label;

      const input = document.createElement("input");
      input.type = "text";
      input.autocomplete = "off";
      input.autocapitalize = "off";
      input.spellcheck = false;
      input.dataset.expected = expected;
      input.setAttribute("aria-label", `${tense.name}, ${p.label}`);
      input.addEventListener("blur", () => checkInput(input));
      input.addEventListener("input", () => {
        // Clear marking while the user edits.
        input.classList.remove("correct", "incorrect");
        const ans = row.querySelector(".answer");
        if (ans) ans.remove();
      });

      row.appendChild(label);
      row.appendChild(input);
      rows.appendChild(row);
    });

    block.appendChild(rows);
    area.appendChild(block);
  });
}

// Validate a single input. Empty inputs are left neutral.
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

  // Show the correct form beneath a wrong answer.
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

function checkAll() {
  const inputs = document.querySelectorAll(".conj-row input");
  let correct = 0;
  let answered = 0;
  inputs.forEach((input) => {
    const result = checkInput(input);
    if (result !== null) {
      answered += 1;
      if (result) correct += 1;
    }
  });
  const score = document.getElementById("score");
  if (answered === 0) {
    score.textContent = "Fill in some answers first.";
  } else {
    score.textContent = `Score: ${correct} / ${answered} correct` +
      (answered < inputs.length ? ` (${inputs.length - answered} blank)` : "");
  }
}

function revealAll() {
  document.querySelectorAll(".conj-row input").forEach((input) => {
    if (input.value.trim() === "") {
      input.value = input.dataset.expected;
      input.classList.add("correct");
    } else {
      checkInput(input, { reveal: true });
    }
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

// Build the row of clickable special-character chips.
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

// Build the browsable, filterable list of all verbs. onPick is called with the
// chosen verb when a list entry is clicked.
function buildVerbList(onPick) {
  const list = document.getElementById("verb-list");
  const filter = document.getElementById("list-filter");
  const verbs = (window.VERBS || []).slice().sort((a, b) =>
    a.infinitive.localeCompare(b.infinitive, "lt"));

  function render(term) {
    const q = term.trim().toLowerCase();
    list.innerHTML = "";
    let shown = 0;
    verbs.forEach((verb) => {
      const tr = (verb.translation || "").toLowerCase();
      if (q && !verb.infinitive.toLowerCase().includes(q) && !tr.includes(q)) return;
      shown += 1;

      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "verb-list-item";

      const inf = document.createElement("span");
      inf.className = "vli-inf";
      inf.textContent = verb.infinitive;
      const trans = document.createElement("span");
      trans.className = "vli-tr";
      trans.textContent = verb.translation || "";

      btn.appendChild(inf);
      btn.appendChild(trans);
      btn.addEventListener("click", () => onPick(verb));
      li.appendChild(btn);
      list.appendChild(li);
    });

    if (shown === 0) {
      const li = document.createElement("li");
      li.className = "verb-list-empty";
      li.textContent = "No verbs match.";
      list.appendChild(li);
    }
  }

  filter.addEventListener("input", () => render(filter.value));
  render("");
}

// --- Init ------------------------------------------------------------------

function init() {
  const count = (window.VERBS || []).length;
  document.getElementById("verb-count").textContent =
    `${count} verb${count === 1 ? "" : "s"} loaded`;

  buildTenseToggles();
  buildCharBar();

  document.getElementById("new-verb-btn").addEventListener("click", () => {
    const verb = pickRandomVerb();
    if (verb) renderVerb(verb);
  });
  document.getElementById("check-btn").addEventListener("click", checkAll);
  document.getElementById("reveal-btn").addEventListener("click", revealAll);

  // Modal wiring. Each modal closes on its × button, a backdrop click, or Esc.
  const helpModal = document.getElementById("help-modal");
  const listModal = document.getElementById("list-modal");
  const modals = [helpModal, listModal];
  const closeAll = () => modals.forEach((m) => m.classList.add("hidden"));
  const open = (m) => { closeAll(); m.classList.remove("hidden"); };

  document.getElementById("help-body").innerHTML = window.HELP_HTML || "";
  document.getElementById("help-btn").addEventListener("click", () => open(helpModal));
  document.getElementById("help-close").addEventListener("click", closeAll);

  document.getElementById("list-btn").addEventListener("click", () => {
    open(listModal);
    document.getElementById("list-filter").focus();
  });
  document.getElementById("list-close").addEventListener("click", closeAll);

  modals.forEach((m) => {
    m.addEventListener("click", (e) => { if (e.target === m) closeAll(); });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });

  // Picking a verb from the list renders it and closes the dialog.
  buildVerbList((verb) => {
    renderVerb(verb);
    closeAll();
  });

  // Open with the help dialog rather than a verb, so first-time visitors read
  // what the app is and how to use it before practising.
  helpModal.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", init);
