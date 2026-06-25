# Kartoti — Lithuanian Verb Conjugation Practice

A tiny, dependency-free static web app for practicing Lithuanian verb
conjugations. Pick a random verb, fill in every person of every tense, and get
instant per-field feedback (green = correct, red = wrong) as you tab through the
form. A built-in help panel (the **?** in the top-right) explains the
conjugation rules, consonant alternations, exceptions, and common verb prefixes.

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

- **New verb** — loads a random verb with blank conjugation fields.
- Type each form; when you leave a field (blur/tab) it's checked instantly. A
  wrong answer turns the box red and shows the correct form beneath it.
- **Check all** — grades every filled field and shows a score.
- **Reveal answers** — fills in everything (for studying).
- **Include frequentative past** — toggles the *būtasis dažninis* tense, which
  is regular and can be hidden to focus on the other three tenses.
- **?** — opens the conjugation rules and prefix reference.

Diacritics matter: `ė`, `ą`, `č`, `š`, `ž`, etc. are checked exactly (only case
and surrounding whitespace are ignored).

## Project layout

| File | Purpose |
|------|---------|
| `index.html` | Page structure |
| `styles.css` | Responsive styling |
| `app.js` | App logic (rendering, validation, scoring) |
| `verbs.js` | The verb dataset (`window.VERBS`) |
| `help.js` | Help-panel content (`window.HELP_HTML`) |

## Adding more verbs

The app renders whatever is in the `window.VERBS` array in `verbs.js`. To add a
verb, append an object of this shape (pronoun keys: `as` = aš, `tu`, `jis` =
jis/ji, `mes`, `jus` = jūs, `jie` = jie/jos):

```js
{
  infinitive: "verbas",
  translation: "to ...",
  conjugation_class: 1, // 1 (-a), 2 (-i), 3 (-o), or "irregular"
  tenses: {
    present:   { as: "", tu: "", jis: "", mes: "", jus: "", jie: "" },
    past:      { as: "", tu: "", jis: "", mes: "", jus: "", jie: "" },
    past_freq: { as: "", tu: "", jis: "", mes: "", jus: "", jie: "" },
    future:    { as: "", tu: "", jis: "", mes: "", jus: "", jie: "" },
  },
}
```

The ships-with dataset is a verified set of the most common verbs across all
three conjugation classes plus key irregulars (`būti`, `eiti`, `duoti`). It is
intentionally curated rather than auto-generated — for a learning tool, accuracy
matters more than raw count. Verify new entries against a dictionary such as
[lkz.lt](https://lkz.lt/) or Wiktionary before adding them.
