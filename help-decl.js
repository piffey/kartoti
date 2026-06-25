"use strict";

// Help content for the Declensions tab. Kept as an HTML string so the app stays
// a dependency-free static site. Reference paradigms follow the tables at
// https://en.wikipedia.org/wiki/Lithuanian_declension
window.DECL_HELP_HTML = `
<h2>Declension practice</h2>
<p>Lithuanian nouns, adjectives and pronouns <strong>decline</strong>: they
change their ending to show the word's role in the sentence. There are
<strong>seven cases</strong>, each in a <strong>singular</strong> and a
<strong>plural</strong> form. This tab drills those forms.</p>

<h3>How to use it</h3>
<ol>
  <li>Press <strong>New word</strong> to get a noun or adjective. Its meaning is
      shown next to it, along with which declension it belongs to.</li>
  <li>Fill in every case for singular and plural. Adjectives are drilled in both
      the <em>masculine</em> and <em>feminine</em> gender paradigms.</li>
  <li><strong>Check all</strong> grades your answers; <strong>Reveal
      answers</strong> fills in the blanks. Diacritics count.</li>
  <li>The <strong>vocative</strong> is the rarest case — use its toggle to hide
      it if you only want the six core cases.</li>
  <li>Press <strong>☰</strong> in the header to browse and pick a specific
      word.</li>
</ol>

<h2>The seven cases</h2>
<table>
  <tr><th>Case</th><th>Lithuanian</th><th>Asks</th><th>Used for</th></tr>
  <tr><td>Nominative</td><td>Vardininkas</td><td><code>kas?</code></td><td>the subject of the sentence (the doer)</td></tr>
  <tr><td>Genitive</td><td>Kilmininkas</td><td><code>ko?</code></td><td>possession ("of"), the object of many verbs, and negated objects</td></tr>
  <tr><td>Dative</td><td>Naudininkas</td><td><code>kam?</code></td><td>the indirect object — to / for whom</td></tr>
  <tr><td>Accusative</td><td>Galininkas</td><td><code>ką?</code></td><td>the direct object of an affirmative verb</td></tr>
  <tr><td>Instrumental</td><td>Įnagininkas</td><td><code>kuo?</code></td><td>the means / instrument ("with", "by"), and predicates of <em>būti</em></td></tr>
  <tr><td>Locative</td><td>Vietininkas</td><td><code>kur? kame?</code></td><td>location — "in / at" (no preposition needed)</td></tr>
  <tr><td>Vocative</td><td>Šauksmininkas</td><td>—</td><td>directly addressing someone ("Jonai!", "drauge!")</td></tr>
</table>

<h2>Noun declensions</h2>
<p>Nouns fall into <strong>five declensions</strong>, set by the
nominative-singular ending and gender. The full set of case suffixes is below,
including the rarer <strong>soft</strong> variants (shown in grey) and the
<code>-en-/-er-</code> stems of the 5th declension. Adjective endings are listed
on the right for comparison.</p>
<div class="tscroll"><table class="suffix-table">
  <tr>
    <th rowspan="3">Case</th>
    <th colspan="5">1st decl.</th>
    <th colspan="3">2nd decl.</th>
    <th colspan="2">3rd decl.</th>
    <th colspan="2">4th decl.</th>
    <th colspan="2">5th decl.</th>
    <th colspan="2">Adjectives</th>
  </tr>
  <tr>
    <th colspan="5">masc.</th>
    <th colspan="3">fem.</th>
    <th>fem.</th><th>masc.</th>
    <th colspan="2">masc.</th>
    <th>masc.</th><th>fem.</th>
    <th>masc.</th><th>fem.</th>
  </tr>
  <tr>
    <th colspan="2">-ǎ-</th><th colspan="3">-i-</th>
    <th colspan="2">-o-</th><th>-ė-</th>
    <th colspan="2">-i-</th>
    <th colspan="2">-u-</th>
    <th colspan="2">-i-</th>
    <th>-ǎ-</th><th>-o-</th>
  </tr>
  <tr class="section"><th colspan="17">Singular</th></tr>
  <tr><td>Nom.</td>
    <td colspan="2">-as</td><td>-is</td><td>-ys</td><td>-ias</td>
    <td>-a</td><td class="rare">-ia</td><td>-ė</td>
    <td colspan="2">-is</td>
    <td>-us</td><td class="rare">-ius</td>
    <td colspan="2">-uo</td>
    <td>-as</td><td>-a</td></tr>
  <tr><td>Gen.</td>
    <td colspan="2">-o</td><td colspan="3">-io</td>
    <td>-os</td><td class="rare">-ios</td><td>-ės</td>
    <td colspan="2">-ies</td>
    <td>-aus</td><td class="rare">-iaus</td>
    <td>-en-s</td><td class="rare">-er-s</td>
    <td>-o</td><td>-os</td></tr>
  <tr><td>Dat.</td>
    <td colspan="2">-ui</td><td colspan="3">-iui</td>
    <td>-ai</td><td class="rare">-iai</td><td>-ei</td>
    <td>-iai</td><td>-iui</td>
    <td>-ui</td><td class="rare">-iui</td>
    <td>-en-iui</td><td>-er-iai</td>
    <td>-am</td><td>-ai</td></tr>
  <tr><td>Acc.</td>
    <td colspan="2">-ą</td><td colspan="2">-į</td><td>-ią</td>
    <td>-ą</td><td class="rare">-ią</td><td>-ę</td>
    <td colspan="2">-į</td>
    <td>-ų</td><td class="rare">-ių</td>
    <td>-en-į</td><td class="rare">-er-į</td>
    <td colspan="2">-ą</td></tr>
  <tr><td>Ins.</td>
    <td colspan="2">-u</td><td colspan="3">-iu</td>
    <td>-a</td><td class="rare">-ia</td><td>-e</td>
    <td colspan="2">-imi</td>
    <td>-umi</td><td class="rare">-iumi</td>
    <td>-en-iu</td><td>-er-imi</td>
    <td>-u</td><td>-a</td></tr>
  <tr><td>Loc.</td>
    <td colspan="2">-e</td><td colspan="3">-yje</td>
    <td>-oje</td><td class="rare">-ioje</td><td>-ėje</td>
    <td colspan="2">-yje</td>
    <td>-uje</td><td class="rare">-iuje</td>
    <td>-en-yje</td><td class="rare">-er-yje</td>
    <td>-ame</td><td>-oje</td></tr>
  <tr><td>Voc.</td>
    <td>-e</td><td>-ai</td><td>-i</td><td>-y</td><td>-y</td>
    <td>-a</td><td class="rare">-ia</td><td>-e</td>
    <td colspan="2">-ie</td>
    <td>-au</td><td class="rare">-iau</td>
    <td>-en-ie</td><td class="rare">-er-ie</td>
    <td>-as</td><td>-a</td></tr>
  <tr class="section"><th colspan="17">Plural</th></tr>
  <tr><td>Nom.</td>
    <td colspan="2">-ai</td><td colspan="3">-iai</td>
    <td>-os</td><td class="rare">-ios</td><td>-ės</td>
    <td colspan="2">-ys</td>
    <td>-ūs</td><td>-iai</td>
    <td>-en-ys</td><td class="rare">-er-ys</td>
    <td>-i</td><td>-os</td></tr>
  <tr><td>Gen.</td>
    <td colspan="2">-ų</td><td colspan="3">-ių</td>
    <td>-ų</td><td class="rare">-ių</td><td>-ių</td>
    <td colspan="2">-ių</td>
    <td>-ų</td><td>-ių</td>
    <td>-en-ų</td><td class="rare">-er-ų</td>
    <td>-ų</td><td>-ų</td></tr>
  <tr><td>Dat.</td>
    <td colspan="2">-ams</td><td colspan="3">-iams</td>
    <td>-oms</td><td class="rare">-ioms</td><td>-ėms</td>
    <td colspan="2">-ims</td>
    <td>-ums</td><td>-iams</td>
    <td>-en-ims</td><td class="rare">-er-ims</td>
    <td>-iems</td><td>-oms</td></tr>
  <tr><td>Acc.</td>
    <td colspan="2">-us</td><td colspan="3">-ius</td>
    <td>-as</td><td class="rare">-ias</td><td>-es</td>
    <td colspan="2">-is</td>
    <td>-us</td><td>-ius</td>
    <td>-en-is</td><td class="rare">-er-is</td>
    <td>-us</td><td>-as</td></tr>
  <tr><td>Ins.</td>
    <td colspan="2">-ais</td><td colspan="3">-iais</td>
    <td>-omis</td><td class="rare">-iomis</td><td>-ėmis</td>
    <td colspan="2">-imis</td>
    <td>-umis</td><td>-iais</td>
    <td>-en-imis</td><td class="rare">-er-imis</td>
    <td>-ais</td><td>-omis</td></tr>
  <tr><td>Loc.</td>
    <td colspan="2">-uose</td><td colspan="3">-iuose</td>
    <td>-ose</td><td class="rare">-iose</td><td>-ėse</td>
    <td colspan="2">-yse</td>
    <td>-uose</td><td>-iuose</td>
    <td>-en-yse</td><td class="rare">-er-yse</td>
    <td>-uose</td><td>-ose</td></tr>
  <tr><td>Voc.</td>
    <td colspan="2">-ai</td><td colspan="3">-iai</td>
    <td>-os</td><td class="rare">-ios</td><td>-ės</td>
    <td colspan="2">-ys</td>
    <td>-ūs</td><td>-iai</td>
    <td>-en-ys</td><td class="rare">-er-ys</td>
    <td>-i</td><td>-os</td></tr>
</table></div>
<div class="note"><strong>Reading the table:</strong>
<ul>
  <li><strong>Grey endings</strong> are the soft (palatalised) variants, used when
      the stem ends in a soft consonant — e.g. nouns in <code>-ias</code> /
      <code>-ius</code> (<em>kelias → kelio, keliui</em>).</li>
  <li>The <strong>5th declension</strong> inserts <code>-en-</code> (masc:
      <em>vanduo → vandens, vandeniui</em>) or <code>-er-</code> (fem:
      <em>sesuo → sesers, seseriai</em>) before most endings.</li>
  <li>First-declension <code>-as</code> nouns usually take vocative
      <code>-e</code> (<em>vyras → vyre</em>), but names and many others take
      <code>-ai</code> (<em>Jonas → Jonai</em>).</li>
</ul></div>

<h3>Worked examples</h3>
<p>Singular:</p>
<div class="tscroll"><table>
  <tr><th>Case</th><th>I <code>-as</code><br>vyras (m)</th><th>I <code>-is</code><br>brolis (m)</th><th>II <code>-a</code><br>ranka (f)</th><th>II <code>-ė</code><br>katė (f)</th><th>III <code>-is</code><br>pilis (f)</th><th>IV <code>-us</code><br>sūnus (m)</th><th>V <code>-uo</code><br>vanduo (m)</th></tr>
  <tr><td>Nom.</td><td>vyras</td><td>brolis</td><td>ranka</td><td>katė</td><td>pilis</td><td>sūnus</td><td>vanduo</td></tr>
  <tr><td>Gen.</td><td>vyro</td><td>brolio</td><td>rankos</td><td>katės</td><td>pilies</td><td>sūnaus</td><td>vandens</td></tr>
  <tr><td>Dat.</td><td>vyrui</td><td>broliui</td><td>rankai</td><td>katei</td><td>piliai</td><td>sūnui</td><td>vandeniui</td></tr>
  <tr><td>Acc.</td><td>vyrą</td><td>brolį</td><td>ranką</td><td>katę</td><td>pilį</td><td>sūnų</td><td>vandenį</td></tr>
  <tr><td>Ins.</td><td>vyru</td><td>broliu</td><td>ranka</td><td>kate</td><td>pilimi</td><td>sūnumi</td><td>vandeniu</td></tr>
  <tr><td>Loc.</td><td>vyre</td><td>brolyje</td><td>rankoje</td><td>katėje</td><td>pilyje</td><td>sūnuje</td><td>vandenyje</td></tr>
  <tr><td>Voc.</td><td>vyre</td><td>broli</td><td>ranka</td><td>kate</td><td>pilie</td><td>sūnau</td><td>vandenie</td></tr>
</table></div>
<p>Plural:</p>
<div class="tscroll"><table>
  <tr><th>Case</th><th>I <code>-as</code><br>vyras (m)</th><th>I <code>-is</code><br>brolis (m)</th><th>II <code>-a</code><br>ranka (f)</th><th>II <code>-ė</code><br>katė (f)</th><th>III <code>-is</code><br>pilis (f)</th><th>IV <code>-us</code><br>sūnus (m)</th><th>V <code>-uo</code><br>vanduo (m)</th></tr>
  <tr><td>Nom.</td><td>vyrai</td><td>broliai</td><td>rankos</td><td>katės</td><td>pilys</td><td>sūnūs</td><td>vandenys</td></tr>
  <tr><td>Gen.</td><td>vyrų</td><td>brolių</td><td>rankų</td><td>kačių</td><td>pilių</td><td>sūnų</td><td>vandenų</td></tr>
  <tr><td>Dat.</td><td>vyrams</td><td>broliams</td><td>rankoms</td><td>katėms</td><td>pilims</td><td>sūnums</td><td>vandenims</td></tr>
  <tr><td>Acc.</td><td>vyrus</td><td>brolius</td><td>rankas</td><td>kates</td><td>pilis</td><td>sūnus</td><td>vandenis</td></tr>
  <tr><td>Ins.</td><td>vyrais</td><td>broliais</td><td>rankomis</td><td>katėmis</td><td>pilimis</td><td>sūnumis</td><td>vandenimis</td></tr>
  <tr><td>Loc.</td><td>vyruose</td><td>broliuose</td><td>rankose</td><td>katėse</td><td>pilyse</td><td>sūnuose</td><td>vandenyse</td></tr>
</table></div>
<div class="note"><strong>Consonant softening:</strong> before the soft endings of
the <code>-is/-ys</code> and <code>-ė</code> types, <code>t → č</code> and
<code>d → dž</code> (gaidys → gai<strong>dž</strong>io, katė → ka<strong>č</strong>ių).</div>

<h2>Declined pronouns</h2>
<p>The personal pronouns are irregular and worth memorising:</p>
<div class="tscroll"><table>
  <tr><th>Case</th><th>aš (I)</th><th>tu (you)</th><th>jis (he)</th><th>ji (she)</th><th>mes (we)</th><th>jūs (you pl.)</th><th>jie (they m)</th><th>jos (they f)</th></tr>
  <tr><td>Nom.</td><td>aš</td><td>tu</td><td>jis</td><td>ji</td><td>mes</td><td>jūs</td><td>jie</td><td>jos</td></tr>
  <tr><td>Gen.</td><td>manęs</td><td>tavęs</td><td>jo</td><td>jos</td><td>mūsų</td><td>jūsų</td><td>jų</td><td>jų</td></tr>
  <tr><td>Dat.</td><td>man</td><td>tau</td><td>jam</td><td>jai</td><td>mums</td><td>jums</td><td>jiems</td><td>joms</td></tr>
  <tr><td>Acc.</td><td>mane</td><td>tave</td><td>jį</td><td>ją</td><td>mus</td><td>jus</td><td>juos</td><td>jas</td></tr>
  <tr><td>Ins.</td><td>manimi</td><td>tavimi</td><td>juo</td><td>ja</td><td>mumis</td><td>jumis</td><td>jais</td><td>jomis</td></tr>
  <tr><td>Loc.</td><td>manyje</td><td>tavyje</td><td>jame</td><td>joje</td><td>mumyse</td><td>jumyse</td><td>juose</td><td>jose</td></tr>
</table></div>
<div class="note">The <strong>reflexive</strong> pronoun "oneself" has no
nominative: gen <em>savęs</em>, dat <em>sau</em>, acc <em>save</em>, ins
<em>savimi</em>, loc <em>savyje</em>.</div>

<h2>Declined adjectives</h2>
<p>Adjectives agree with their noun in gender, number and case. Their endings
differ slightly from nouns (note dative <code>-am</code> and nominative plural
masculine <code>-i</code>). Example — <strong>geras</strong> (good):</p>
<div class="tscroll"><table>
  <tr><th>Case</th><th>m. sg.</th><th>f. sg.</th><th>m. pl.</th><th>f. pl.</th></tr>
  <tr><td>Nom.</td><td>geras</td><td>gera</td><td>geri</td><td>geros</td></tr>
  <tr><td>Gen.</td><td>gero</td><td>geros</td><td>gerų</td><td>gerų</td></tr>
  <tr><td>Dat.</td><td>geram</td><td>gerai</td><td>geriems</td><td>geroms</td></tr>
  <tr><td>Acc.</td><td>gerą</td><td>gerą</td><td>gerus</td><td>geras</td></tr>
  <tr><td>Ins.</td><td>geru</td><td>gera</td><td>gerais</td><td>geromis</td></tr>
  <tr><td>Loc.</td><td>gerame</td><td>geroje</td><td>geruose</td><td>gerose</td></tr>
</table></div>
<p>Adjectives in <code>-us</code> (gražus → graži) and <code>-is</code>
(medinis → medinė) follow their own paradigms, drilled in this tab.</p>

<h3>Comparatives &amp; superlatives</h3>
<p>Qualitative adjectives have three degrees. Take the masculine stem (drop the
ending) and add the degree suffix; the result then declines like an ordinary
adjective:</p>
<table>
  <tr><th>Degree</th><th>Suffix (m. / f.)</th><th>geras (good)</th><th>gražus (pretty)</th></tr>
  <tr><td>Positive</td><td>—</td><td>geras / gera</td><td>gražus / graži</td></tr>
  <tr><td>Comparative ("more …")</td><td><code>-esnis</code> / <code>-esnė</code></td><td>geresnis / geresnė</td><td>gražesnis / gražesnė</td></tr>
  <tr><td>Superlative ("most …")</td><td><code>-iausias</code> / <code>-iausia</code></td><td>geriausias / geriausia</td><td>gražiausias / gražiausia</td></tr>
</table>
<div class="note">A few common adjectives are irregular: <em>didelis</em> (big) →
<em>didesnis</em> → <em>didžiausias</em>; <em>mažas</em> (small) →
<em>mažesnis</em> → <em>mažiausias</em>.</div>

<h3>Adverbs from adjectives</h3>
<p>Most qualitative adjectives form an adverb by swapping the ending — answering
<em>kaip?</em> ("how?"):</p>
<table>
  <tr><th>Adjective</th><th>Adverb</th></tr>
  <tr><td><code>-as</code> geras (good)</td><td><code>-ai</code> gerai (well)</td></tr>
  <tr><td><code>-us</code> gražus (pretty)</td><td><code>-iai</code> gražiai (prettily)</td></tr>
</table>
<p>Adverbs have their own comparative and superlative: <code>-iau</code>
(gerai → <strong>geriau</strong>, "better") and <code>-iausiai</code>
(→ <strong>geriausiai</strong>, "best"). Compare the adjective
<em>geresnis</em> ("a better one") with the adverb <em>geriau</em>
("does it better").</p>

<div class="note">Reference paradigms follow
<a href="https://en.wikipedia.org/wiki/Lithuanian_declension" target="_blank" rel="noopener">Wikipedia: Lithuanian declension</a>.</div>
`;
