# Kartoti — Lithuanian Repetition Practice

A tiny, dependency-free static web app for practicing Lithuanian. Two modes,
switched with the tabs at the top:

- **Verbs** — conjugation. Pick a random verb and fill in every person across
  the present, past, past frequentative, future, imperative and conditional.
- **Declensions** — nouns & adjectives. Pick a random word and fill in all seven
  cases for singular and plural (adjectives in both the masculine and feminine
  paradigms).

You get instant per-field feedback (green = correct, red = wrong) as you tab
through the form. A built-in help panel (the **?** in the top-right) explains the
rules for whichever tab you're on; the **☰** button browses and picks a specific
entry. A copy bar of Lithuanian special letters sits at the top for easy pasting.

Works on phones and desktops, runs entirely in the browser, and needs no build
step or backend.

## Run it

### Option A — just open the file
Double-click `index.html`, or open it in your browser. All data lives in plain
`.js` files (loaded with `<script>` tags, not `fetch`), so it works straight
from `file://` with no server.

### Option B — local web server (optional)
```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

### Option C — GitHub Pages
1. Push this repository to GitHub.
2. Repo **Settings → Pages → Build and deployment**.
3. Source: **Deploy from a branch**, branch: `main`, folder: `/ (root)`.
4. Save. Your site appears at `https://<user>.github.io/<repo>/`.

The included empty `.nojekyll` file tells Pages to serve the files as-is.

## How to use

- **New verb / New word** — loads a random entry with blank fields.
- Type each form; when you leave a field (blur/tab) it's checked instantly. A
  wrong answer turns the box red and shows the correct form beneath it.
- **Check all** — grades every filled field and shows a score.
- **Reveal answers** — fills in everything (for studying).
- **Show tenses & moods** (Verbs) — toggle any tense/mood on or off.
- **Include vocative** (Declensions) — drop the rarest case to drill the six
  core cases.
- **?** — opens the rules and reference for the active tab.
- **☰** — browse and pick a specific verb or word.

Diacritics matter: `ė`, `ą`, `č`, `š`, `ž`, etc. are checked exactly (only case
and surrounding whitespace are ignored).

## Project layout

| File | Purpose |
|------|---------|
| `index.html` | Page structure (tabs, panels, modals) |
| `styles.css` | Responsive styling |
| `app.js` | App logic (tabs, rendering, validation, scoring) |
| `verbs.js` | Verb dataset (`window.VERBS`) |
| `declensions.js` | Noun & adjective dataset (`window.DECL_WORDS`) |
| `help.js` | Verb help content (`window.HELP_HTML`) |
| `help-decl.js` | Declension help content (`window.DECL_HELP_HTML`) |
| `favicon.svg` | Lithuanian-flag favicon |

## Adding more verbs

The app renders whatever is in the `window.VERBS` array in `verbs.js` (pronoun
keys: `as` = aš, `tu`, `jis` = jis/ji, `mes`, `jus` = jūs, `jie` = jie/jos). The
imperative and conditional are derived from the infinitive, so only the four
indicative tenses are stored:

```js
{
  infinitive: "verbas",
  translation: "to ...",
  conjugation_class: 1, // 1 (-a), 2 (-i), 3 (-o), or "irregular"
  governs: { q: "ką?", case: "accusative" },
  example: { lt: "...", en: "..." },
  tenses: {
    present:   { as: "", tu: "", jis: "", mes: "", jus: "", jie: "" },
    past:      { as: "", tu: "", jis: "", mes: "", jus: "", jie: "" },
    past_freq: { as: "", tu: "", jis: "", mes: "", jus: "", jie: "" },
    future:    { as: "", tu: "", jis: "", mes: "", jus: "", jie: "" },
  },
}
```

## Adding more words (declensions)

Append to `window.DECL_WORDS` in `declensions.js`. Cases, in order: `nom gen dat
acc ins loc voc`. Nouns store `forms.sg` / `forms.pl`; adjectives store
`forms.masc` / `forms.fem`, each with `.sg` / `.pl`:

```js
// noun
{ word: "namas", translation: "house", pos: "noun", gender: "masc",
  declension: "1st declension (-as)",
  forms: { sg: { nom:"namas", /* … */ }, pl: { nom:"namai", /* … */ } } }

// adjective
{ word: "geras", translation: "good", pos: "adj", declension: "(-as, -a)",
  forms: { masc: { sg:{…}, pl:{…} }, fem: { sg:{…}, pl:{…} } } }
```

Both datasets are intentionally curated and verified rather than auto-generated —
for a learning tool, accuracy matters more than raw count. Verify new entries
against a dictionary such as [lkz.lt](https://lkz.lt/), Wiktionary, or
[Wikipedia: Lithuanian declension](https://en.wikipedia.org/wiki/Lithuanian_declension)
before adding them.
