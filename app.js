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

// Tense metadata. `optional: true` tenses can be hidden via the toggle.
const TENSES = [
  { key: "present", name: "Present", lt: "esamasis laikas" },
  { key: "past", name: "Past", lt: "būtasis kartinis laikas" },
  { key: "past_freq", name: "Past frequentative", lt: "būtasis dažninis laikas", optional: true },
  { key: "future", name: "Future", lt: "būsimasis laikas" },
];

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

function includeFreq() {
  return document.getElementById("freq-toggle").checked;
}

function activeTenses() {
  return TENSES.filter((t) => !t.optional || includeFreq());
}

// --- Rendering -------------------------------------------------------------

function renderVerb(verb) {
  currentVerb = verb;

  const prompt = document.getElementById("verb-prompt");
  prompt.classList.remove("hidden");
  document.getElementById("verb-infinitive").textContent = verb.infinitive;
  document.getElementById("verb-translation").textContent = verb.translation || "";
  document.getElementById("verb-class").textContent =
    CLASS_NAMES[verb.conjugation_class] || "";
  document.getElementById("score").textContent = "";

  const area = document.getElementById("conjugation-area");
  area.innerHTML = "";

  activeTenses().forEach((tense) => {
    const forms = verb.tenses[tense.key];
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

// --- Init ------------------------------------------------------------------

function init() {
  const count = (window.VERBS || []).length;
  document.getElementById("verb-count").textContent =
    `${count} verb${count === 1 ? "" : "s"} loaded`;

  document.getElementById("new-verb-btn").addEventListener("click", () => {
    const verb = pickRandomVerb();
    if (verb) renderVerb(verb);
  });
  document.getElementById("check-btn").addEventListener("click", checkAll);
  document.getElementById("reveal-btn").addEventListener("click", revealAll);
  document.getElementById("freq-toggle").addEventListener("change", () => {
    if (currentVerb) renderVerb(currentVerb);
  });

  // Help modal wiring.
  const modal = document.getElementById("help-modal");
  document.getElementById("help-body").innerHTML = window.HELP_HTML || "";
  document.getElementById("help-btn").addEventListener("click", () =>
    modal.classList.remove("hidden")
  );
  document.getElementById("help-close").addEventListener("click", () =>
    modal.classList.add("hidden")
  );
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.classList.add("hidden");
  });

  // Start with a verb already on screen.
  const first = pickRandomVerb();
  if (first) renderVerb(first);
}

document.addEventListener("DOMContentLoaded", init);
