"use strict";

// Help content shown in the "?" modal. Kept as an HTML string so the app stays
// a dependency-free static site that also runs from file:// without a server.
window.HELP_HTML = `
<h2>What is Kartoti?</h2>
<p><strong>Kartoti</strong> (Lithuanian for "to repeat / to revise") is a
repetition practice tool for Lithuanian. Use the <strong>tabs</strong> at the top
to switch between <strong>Verbs</strong> (conjugation) and
<strong>Declensions</strong> (nouns &amp; adjectives). This page covers the Verbs
tab — open help again from the Declensions tab for declension rules.</p>
<p>Each round shows you one verb and asks you to type its forms for every
grammatical person across the tenses you have switched on. Your answers are
checked instantly, with the correct form shown when you slip up — diacritics
count, so <code>š</code> is not the same as <code>s</code>.</p>

<h3>How to use it</h3>
<ol>
  <li>Close this dialog and press <strong>New verb</strong> to get a verb.</li>
  <li>The verb is shown the way dictionaries list it —
      <em>infinitive, 3rd-person singular present, 3rd-person singular past</em>
      (e.g. <code>dirbti, dirba, dirbo</code>). Those three "principal parts"
      are what you need to derive every other form, so learn verbs in this
      shape.</li>
  <li>Fill in the boxes. Press <strong>Check all</strong> to grade them, or
      <strong>Reveal answers</strong> to fill in the blanks.</li>
  <li>Use <strong>Show tenses &amp; moods</strong> to turn individual tenses and
      moods (imperative, conditional) on or off — all are on by default.</li>
  <li>Need a letter that is not on your keyboard? Click it in the
      <em>Lietuviškos raidės</em> bar at the top to copy it, then paste it in.</li>
</ol>

<h2>Lithuanian verb conjugation</h2>
<p>Lithuanian verbs are sorted into <strong>three conjugations</strong> based on
the ending of the <strong>3rd person present tense</strong> form (which is the
same for both singular <em>jis/ji</em> and plural <em>jie/jos</em>).</p>

<table>
  <tr><th>Conjugation</th><th>3rd person ends in</th><th>Example (3rd p.)</th></tr>
  <tr><td>1st</td><td><code>-a</code></td><td>dirb<strong>a</strong> (works)</td></tr>
  <tr><td>2nd</td><td><code>-i</code></td><td>tur<strong>i</strong> (has)</td></tr>
  <tr><td>3rd</td><td><code>-o</code></td><td>mok<strong>o</strong> (teaches)</td></tr>
</table>

<div class="note">To find a verb's conjugation you need the 3rd-person present
form — you cannot always tell it from the infinitive alone. Dictionaries list
the 3rd-person present and 3rd-person past next to the infinitive for this
reason, e.g. <code>dirbti, dirba, dirbo</code>.</div>

<h3>Present tense (esamasis laikas)</h3>
<p>Personal endings are added to the present stem:</p>
<table>
  <tr><th>Person</th><th>1st (-a)</th><th>2nd (-i)</th><th>3rd (-o)</th></tr>
  <tr><td>aš</td><td>-u</td><td>-iu</td><td>-au</td></tr>
  <tr><td>tu</td><td>-i</td><td>-i</td><td>-ai</td></tr>
  <tr><td>jis/ji</td><td>-a</td><td>-i</td><td>-o</td></tr>
  <tr><td>mes</td><td>-ame</td><td>-ime</td><td>-ome</td></tr>
  <tr><td>jūs</td><td>-ate</td><td>-ite</td><td>-ote</td></tr>
  <tr><td>jie/jos</td><td>-a</td><td>-i</td><td>-o</td></tr>
</table>
<p>Example — <strong>dirbti</strong> (1st): dirbu, dirbi, dirba, dirbame,
dirbate, dirba.</p>

<h3>Past tense (būtasis kartinis laikas)</h3>
<p>Built on the past stem (the 3rd-person past form). There are two ending sets
depending on whether the past stem ends in <code>-o</code> or <code>-ė</code>:</p>
<table>
  <tr><th>Person</th><th>-o stem</th><th>-ė stem</th></tr>
  <tr><td>aš</td><td>-au</td><td>-iau</td></tr>
  <tr><td>tu</td><td>-ai</td><td>-ei</td></tr>
  <tr><td>jis/ji</td><td>-o</td><td>-ė</td></tr>
  <tr><td>mes</td><td>-ome</td><td>-ėme</td></tr>
  <tr><td>jūs</td><td>-ote</td><td>-ėte</td></tr>
  <tr><td>jie/jos</td><td>-o</td><td>-ė</td></tr>
</table>
<p>Example — <strong>dirbti</strong>: dirbau, dirbai, dirbo… &nbsp;
<strong>matyti</strong>: ma<strong>č</strong>iau, matei, matė…</p>
<div class="note"><strong>Consonant alternation:</strong> before the
<code>-iau</code> ending, <code>t → č</code> and <code>d → dž</code>
(matyti → ma<strong>č</strong>iau, vesti → ve<strong>dž</strong>iau). The same
alternation appears in the 1st-person singular present of many 1st-conjugation
verbs (jausti → jau<strong>č</strong>iu).</div>

<h3>Past frequentative (būtasis dažninis laikas)</h3>
<p>"Used to / would repeatedly do." Completely regular: take the infinitive stem
(infinitive minus <code>-ti</code>), add <code>-dav-</code>, then the same
endings as the 1st conjugation:</p>
<table>
  <tr><th>aš</th><th>tu</th><th>jis</th><th>mes</th><th>jūs</th><th>jie</th></tr>
  <tr><td>-davau</td><td>-davai</td><td>-davo</td><td>-davome</td><td>-davote</td><td>-davo</td></tr>
</table>
<p>Example — <strong>dirbti</strong>: dirbdavau, dirbdavai, dirbdavo…</p>

<h3>Future tense (būsimasis laikas)</h3>
<p>Take the infinitive stem, add <code>-s-</code>, then the endings below:</p>
<table>
  <tr><th>aš</th><th>tu</th><th>jis</th><th>mes</th><th>jūs</th><th>jie</th></tr>
  <tr><td>-siu</td><td>-si</td><td>-s</td><td>-sime</td><td>-site</td><td>-s</td></tr>
</table>
<p>Example — <strong>dirbti</strong>: dirbsiu, dirbsi, dirbs, dirbsime,
dirbsite, dirbs.</p>
<div class="note"><strong>Future exceptions:</strong> when the stem already ends
in <code>s, z, š, ž</code>, the cluster simplifies (e.g. <em>vežti</em> →
veš + … ). These verbs can also collide with present-tense forms, so check a
dictionary for stems ending in a sibilant.</div>

<h3>Imperative (liepiamoji nuosaka)</h3>
<p>Commands and requests ("do it!"). Only three persons are used —
<em>tu</em>, <em>mes</em>, <em>jūs</em>. Take the infinitive stem (infinitive
minus <code>-ti</code>) and add the endings below:</p>
<table>
  <tr><th>tu (sg.)</th><th>mes (let's …)</th><th>jūs (pl./polite)</th></tr>
  <tr><td>-k</td><td>-kime</td><td>-kite</td></tr>
</table>
<p>Example — <strong>dirbti</strong>: dirbk, dirbkime, dirbkite.</p>
<div class="note"><strong>Stem-final <code>k</code> or <code>g</code></strong>
merges with the imperative <code>-k-</code>: <em>laukti</em> → lauk, laukime;
<em>bėgti</em> → bėk, bėkime; <em>pirkti</em> → pirk, pirkime.</div>

<h3>Conditional (tariamoji nuosaka)</h3>
<p>"Would do" — hypotheticals, polite requests and wishes. Take the infinitive
stem (infinitive minus <code>-ti</code>) and add:</p>
<table>
  <tr><th>aš</th><th>tu</th><th>jis</th><th>mes</th><th>jūs</th><th>jie</th></tr>
  <tr><td>-čiau</td><td>-tum</td><td>-tų</td><td>-tume</td><td>-tute</td><td>-tų</td></tr>
</table>
<p>Example — <strong>dirbti</strong>: dirbčiau, dirbtum, dirbtų, dirbtume,
dirbtute, dirbtų. ("Aš dirbčiau" = I would work.)</p>
<div class="note">You will also hear the longer endings <code>-tumei</code> (tu),
<code>-tumėme</code> (mes) and <code>-tumėte</code> (jūs); this app uses the
shorter standard forms.</div>

<h2>Cases verbs take</h2>
<p>Every verb is shown with the <strong>case it governs</strong>, written as the
question word its object answers. Learn this together with the verb — it tells
you which ending the object noun needs.</p>
<table>
  <tr><th>Question word</th><th>Case</th><th>Example verb</th></tr>
  <tr><td><code>ką?</code></td><td>accusative</td><td>matyti <em>ką?</em> (to see)</td></tr>
  <tr><td><code>ko?</code></td><td>genitive</td><td>laukti <em>ko?</em> (to wait for)</td></tr>
  <tr><td><code>kam?</code></td><td>dative</td><td>padėti <em>kam?</em> (to help)</td></tr>
  <tr><td><code>kuo?</code></td><td>instrumental</td><td>tikėti <em>kuo?</em> (to believe in)</td></tr>
</table>
<div class="note">Some verbs take two objects (e.g. <em>duoti</em> ką? kam? — to
give something to someone), and a few are intransitive (no object case).</div>

<h2>Reflexive verbs (sangrąžiniai veiksmažodžiai)</h2>
<p>Reflexive verbs carry the particle <code>-si</code>, showing that the action
turns back on the doer (oneself). The verb <strong>mokyti</strong> means "to
teach"; its reflexive <strong>mokytis</strong> means "to learn" (literally "to
teach oneself").</p>

<h3>Without a prefix: <code>-si</code> is a suffix at the very end</h3>
<p>On a plain verb the particle sits at the end of every form and fuses with the
ending. <strong>mokytis</strong> (present):</p>
<table>
  <tr><th>aš</th><th>tu</th><th>jis/ji</th><th>mes</th><th>jūs</th><th>jie/jos</th></tr>
  <tr><td>mokausi</td><td>mokaisi</td><td>mokosi</td><td>mokomės</td><td>mokotės</td><td>mokosi</td></tr>
</table>
<p>The infinitive simply adds it too: mokyti → moky<strong>tis</strong>; prausti
(to wash) → praus<strong>tis</strong> (to wash oneself).</p>

<h3>With a prefix: the suffix jumps inward and becomes an infix</h3>
<p>As soon as you attach a prefix, the reflexive particle moves to sit
<em>between the prefix and the stem</em> as <code>-si-</code> — it is no longer
at the end:</p>
<table>
  <tr><th>Plain (suffix)</th><th>Prefixed (infix after prefix)</th></tr>
  <tr><td>mokytis</td><td>pa<strong>si</strong>mokyti, iš<strong>si</strong>mokyti</td></tr>
  <tr><td>praustis</td><td>nu<strong>si</strong>prausti</td></tr>
</table>
<div class="note">So the rule of thumb: <strong>no prefix → <code>-si</code> at
the end; prefix → <code>-si-</code> right after the prefix.</strong> Compare
<em>mokausi</em> ("I am learning") with <em>aš pasimokysiu</em> ("I'll study a
bit").</div>

<h3>Common irregular / tricky verbs</h3>
<ul>
  <li><strong>būti</strong> (to be): present esu, esi, <em>yra</em>, esame,
      esate, yra; future <em>bus</em> in the 3rd person.</li>
  <li><strong>eiti</strong> (to go): present einu, eini, eina… past ėjau, ėjo…</li>
  <li><strong>duoti</strong> (to give): present duodu, duodi, duoda… past
      daviau, davė…</li>
  <li><strong>rasti</strong> (to find): present ra<strong>nd</strong>u,
      randa… past radau, rado… (the <code>-nd-</code> appears only in the
      present).</li>
  <li><strong>imti</strong> (to take): past ėmiau, ėmė… (stem vowel changes).</li>
</ul>

<h2>Common verb prefixes</h2>
<p>Prefixes attach to a base verb and change its meaning — usually adding
direction, completion (perfective aspect), or a figurative nuance. The same
base verb can take many prefixes. Examples below use <strong>eiti</strong>
(to go) and <strong>dėti</strong> (to put) where helpful.</p>
<table>
  <tr><th>Prefix</th><th>Core meaning</th><th>Example</th></tr>
  <tr><td><code>at-</code></td><td>motion toward / back, return, un-doing</td><td>at-eiti (to come / arrive)</td></tr>
  <tr><td><code>ap-</code></td><td>around, encircling, covering over</td><td>ap-eiti (to walk around)</td></tr>
  <tr><td><code>be-</code></td><td>continuing / still doing (often with a particle)</td><td>te-be-dirba (is still working)</td></tr>
  <tr><td><code>į-</code></td><td>into, inward; achieving a result</td><td>į-eiti (to go in, enter)</td></tr>
  <tr><td><code>iš-</code></td><td>out of, outward; thoroughly / to completion</td><td>iš-eiti (to go out, leave)</td></tr>
  <tr><td><code>nu-</code></td><td>away, off, downward; completion</td><td>nu-eiti (to go away / to a place)</td></tr>
  <tr><td><code>pa-</code></td><td>a little / briefly; completion; sub-, beneath</td><td>pa-dėti (to help; to put down)</td></tr>
  <tr><td><code>par-</code></td><td>back home, return</td><td>par-eiti (to come back home)</td></tr>
  <tr><td><code>per-</code></td><td>across, through; over-, re-doing</td><td>per-eiti (to cross over)</td></tr>
  <tr><td><code>pra-</code></td><td>past / by; beginning of an action</td><td>pra-eiti (to pass by); pra-dėti (to begin)</td></tr>
  <tr><td><code>pri-</code></td><td>toward / up to; adding; a sufficient amount</td><td>pri-eiti (to approach)</td></tr>
  <tr><td><code>su-</code></td><td>together; completion (perfective)</td><td>su-eiti (to come together, gather)</td></tr>
  <tr><td><code>už-</code></td><td>behind, beyond; onto; starting / blocking</td><td>už-eiti (to drop by / call in)</td></tr>
  <tr><td><code>iš-si-</code> / <code>-si-</code></td><td>reflexive (oneself); often combined with prefixes</td><td>mokytis (to learn = teach oneself)</td></tr>
</table>
<div class="note"><strong>Notes on prefixes:</strong>
<ul>
  <li>Prefixes very often make a verb <em>perfective</em> (one completed action)
      versus the imperfective base verb (ongoing/repeated). Compare
      <em>skaityti</em> (to read) vs <em>per-skaityti</em> (to read through to
      the end).</li>
  <li>The reflexive particle <code>-si-</code> goes <em>after</em> a prefix but
      is a <em>suffix</em> <code>-si</code>/<code>-s</code> on an unprefixed
      verb: <em>prausti → praustis</em>, but <em>nu-si-prausti</em>.</li>
  <li>Meanings are guidelines, not rules — many prefixed verbs have idiomatic
      meanings you must learn individually.</li>
  <li><code>i</code> becomes <code>į</code> (with the nasal hook) as the prefix
      meaning "into".</li>
</ul>
</div>
`;
