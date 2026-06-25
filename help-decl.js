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
<p>Nouns fall into five declensions, set by the nominative-singular ending and
gender. Singular endings with one example each:</p>
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
<p>Plural of the same nouns:</p>
<div class="tscroll"><table>
  <tr><th>Case</th><th>vyrai</th><th>broliai</th><th>rankos</th><th>katės</th><th>pilys</th><th>sūnūs</th><th>vandenys</th></tr>
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

<div class="note">Reference paradigms follow
<a href="https://en.wikipedia.org/wiki/Lithuanian_declension" target="_blank" rel="noopener">Wikipedia: Lithuanian declension</a>.</div>
`;
