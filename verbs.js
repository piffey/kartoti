"use strict";

// Lithuanian verb dataset.
//
// Each entry holds:
//   infinitive          the dictionary headword
//   translation         English gloss
//   conjugation_class   1 = 3rd-person present in -a, 2 = -i, 3 = -o, or "irregular"
//   governs             { q, case }: the object case the verb takes, expressed
//                       as a question word (ką? ko? kam? kuo?) plus a label
//   example             { lt, en }: one example sentence and its translation
//   tenses              the indicative tenses for all six persons:
//                       as = aš, tu, jis = jis/ji, mes, jus = jūs, jie = jie/jos
//
// The imperative and conditional moods are not stored here — they are derived
// from the infinitive in app.js since they are fully regular. An entry may still
// supply tenses.imperative / tenses.conditional to override the derivation.
//
// To add more verbs, append objects with the same shape. The app reads
// whatever is in this array, so growing toward the full 500 is just more
// entries here. Diacritics are significant and are checked exactly.

window.VERBS = [
  {
    infinitive: "būti", translation: "to be", conjugation_class: "irregular",
    governs: { q: "kuo?", case: "instrumental (predicate)" },
    example: { lt: "Jis yra geras žmogus.", en: "He is a good person." },
    tenses: {
      present: { as: "esu", tu: "esi", jis: "yra", mes: "esame", jus: "esate", jie: "yra" },
      past: { as: "buvau", tu: "buvai", jis: "buvo", mes: "buvome", jus: "buvote", jie: "buvo" },
      past_freq: { as: "būdavau", tu: "būdavai", jis: "būdavo", mes: "būdavome", jus: "būdavote", jie: "būdavo" },
      future: { as: "būsiu", tu: "būsi", jis: "bus", mes: "būsime", jus: "būsite", jie: "bus" },
    },
  },
  {
    infinitive: "turėti", translation: "to have", conjugation_class: 2,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Aš turiu du brolius.", en: "I have two brothers." },
    tenses: {
      present: { as: "turiu", tu: "turi", jis: "turi", mes: "turime", jus: "turite", jie: "turi" },
      past: { as: "turėjau", tu: "turėjai", jis: "turėjo", mes: "turėjome", jus: "turėjote", jie: "turėjo" },
      past_freq: { as: "turėdavau", tu: "turėdavai", jis: "turėdavo", mes: "turėdavome", jus: "turėdavote", jie: "turėdavo" },
      future: { as: "turėsiu", tu: "turėsi", jis: "turės", mes: "turėsime", jus: "turėsite", jie: "turės" },
    },
  },
  {
    infinitive: "eiti", translation: "to go", conjugation_class: "irregular",
    governs: { q: "—", case: "intransitive" },
    example: { lt: "Mes einame į mokyklą.", en: "We are going to school." },
    tenses: {
      present: { as: "einu", tu: "eini", jis: "eina", mes: "einame", jus: "einate", jie: "eina" },
      past: { as: "ėjau", tu: "ėjai", jis: "ėjo", mes: "ėjome", jus: "ėjote", jie: "ėjo" },
      past_freq: { as: "eidavau", tu: "eidavai", jis: "eidavo", mes: "eidavome", jus: "eidavote", jie: "eidavo" },
      future: { as: "eisiu", tu: "eisi", jis: "eis", mes: "eisime", jus: "eisite", jie: "eis" },
    },
  },
  {
    infinitive: "daryti", translation: "to do, to make", conjugation_class: 3,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Ką tu darai?", en: "What are you doing?" },
    tenses: {
      present: { as: "darau", tu: "darai", jis: "daro", mes: "darome", jus: "darote", jie: "daro" },
      past: { as: "dariau", tu: "darei", jis: "darė", mes: "darėme", jus: "darėte", jie: "darė" },
      past_freq: { as: "darydavau", tu: "darydavai", jis: "darydavo", mes: "darydavome", jus: "darydavote", jie: "darydavo" },
      future: { as: "darysiu", tu: "darysi", jis: "darys", mes: "darysime", jus: "darysite", jie: "darys" },
    },
  },
  {
    infinitive: "sakyti", translation: "to say", conjugation_class: 3,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Ji sako tiesą.", en: "She tells the truth." },
    tenses: {
      present: { as: "sakau", tu: "sakai", jis: "sako", mes: "sakome", jus: "sakote", jie: "sako" },
      past: { as: "sakiau", tu: "sakei", jis: "sakė", mes: "sakėme", jus: "sakėte", jie: "sakė" },
      past_freq: { as: "sakydavau", tu: "sakydavai", jis: "sakydavo", mes: "sakydavome", jus: "sakydavote", jie: "sakydavo" },
      future: { as: "sakysiu", tu: "sakysi", jis: "sakys", mes: "sakysime", jus: "sakysite", jie: "sakys" },
    },
  },
  {
    infinitive: "matyti", translation: "to see", conjugation_class: 3,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Aš matau tave.", en: "I see you." },
    tenses: {
      present: { as: "matau", tu: "matai", jis: "mato", mes: "matome", jus: "matote", jie: "mato" },
      past: { as: "mačiau", tu: "matei", jis: "matė", mes: "matėme", jus: "matėte", jie: "matė" },
      past_freq: { as: "matydavau", tu: "matydavai", jis: "matydavo", mes: "matydavome", jus: "matydavote", jie: "matydavo" },
      future: { as: "matysiu", tu: "matysi", jis: "matys", mes: "matysime", jus: "matysite", jie: "matys" },
    },
  },
  {
    infinitive: "žinoti", translation: "to know (a fact)", conjugation_class: 3,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Aš žinau atsakymą.", en: "I know the answer." },
    tenses: {
      present: { as: "žinau", tu: "žinai", jis: "žino", mes: "žinome", jus: "žinote", jie: "žino" },
      past: { as: "žinojau", tu: "žinojai", jis: "žinojo", mes: "žinojome", jus: "žinojote", jie: "žinojo" },
      past_freq: { as: "žinodavau", tu: "žinodavai", jis: "žinodavo", mes: "žinodavome", jus: "žinodavote", jie: "žinodavo" },
      future: { as: "žinosiu", tu: "žinosi", jis: "žinos", mes: "žinosime", jus: "žinosite", jie: "žinos" },
    },
  },
  {
    infinitive: "galėti", translation: "to be able to, can", conjugation_class: 2,
    governs: { q: "—", case: "+ infinitive" },
    example: { lt: "Ar gali man padėti?", en: "Can you help me?" },
    tenses: {
      present: { as: "galiu", tu: "gali", jis: "gali", mes: "galime", jus: "galite", jie: "gali" },
      past: { as: "galėjau", tu: "galėjai", jis: "galėjo", mes: "galėjome", jus: "galėjote", jie: "galėjo" },
      past_freq: { as: "galėdavau", tu: "galėdavai", jis: "galėdavo", mes: "galėdavome", jus: "galėdavote", jie: "galėdavo" },
      future: { as: "galėsiu", tu: "galėsi", jis: "galės", mes: "galėsime", jus: "galėsite", jie: "galės" },
    },
  },
  {
    infinitive: "norėti", translation: "to want", conjugation_class: 2,
    governs: { q: "ko?", case: "genitive" },
    example: { lt: "Aš noriu kavos.", en: "I want some coffee." },
    tenses: {
      present: { as: "noriu", tu: "nori", jis: "nori", mes: "norime", jus: "norite", jie: "nori" },
      past: { as: "norėjau", tu: "norėjai", jis: "norėjo", mes: "norėjome", jus: "norėjote", jie: "norėjo" },
      past_freq: { as: "norėdavau", tu: "norėdavai", jis: "norėdavo", mes: "norėdavome", jus: "norėdavote", jie: "norėdavo" },
      future: { as: "norėsiu", tu: "norėsi", jis: "norės", mes: "norėsime", jus: "norėsite", jie: "norės" },
    },
  },
  {
    infinitive: "kalbėti", translation: "to speak, to talk", conjugation_class: 1,
    governs: { q: "—", case: "intransitive" },
    example: { lt: "Mes kalbame lietuviškai.", en: "We speak Lithuanian." },
    tenses: {
      present: { as: "kalbu", tu: "kalbi", jis: "kalba", mes: "kalbame", jus: "kalbate", jie: "kalba" },
      past: { as: "kalbėjau", tu: "kalbėjai", jis: "kalbėjo", mes: "kalbėjome", jus: "kalbėjote", jie: "kalbėjo" },
      past_freq: { as: "kalbėdavau", tu: "kalbėdavai", jis: "kalbėdavo", mes: "kalbėdavome", jus: "kalbėdavote", jie: "kalbėdavo" },
      future: { as: "kalbėsiu", tu: "kalbėsi", jis: "kalbės", mes: "kalbėsime", jus: "kalbėsite", jie: "kalbės" },
    },
  },
  {
    infinitive: "gyventi", translation: "to live", conjugation_class: 1,
    governs: { q: "—", case: "intransitive" },
    example: { lt: "Jie gyvena Vilniuje.", en: "They live in Vilnius." },
    tenses: {
      present: { as: "gyvenu", tu: "gyveni", jis: "gyvena", mes: "gyvename", jus: "gyvenate", jie: "gyvena" },
      past: { as: "gyvenau", tu: "gyvenai", jis: "gyveno", mes: "gyvenome", jus: "gyvenote", jie: "gyveno" },
      past_freq: { as: "gyvendavau", tu: "gyvendavai", jis: "gyvendavo", mes: "gyvendavome", jus: "gyvendavote", jie: "gyvendavo" },
      future: { as: "gyvensiu", tu: "gyvensi", jis: "gyvens", mes: "gyvensime", jus: "gyvensite", jie: "gyvens" },
    },
  },
  {
    infinitive: "mylėti", translation: "to love", conjugation_class: 2,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Aš tave myliu.", en: "I love you." },
    tenses: {
      present: { as: "myliu", tu: "myli", jis: "myli", mes: "mylime", jus: "mylite", jie: "myli" },
      past: { as: "mylėjau", tu: "mylėjai", jis: "mylėjo", mes: "mylėjome", jus: "mylėjote", jie: "mylėjo" },
      past_freq: { as: "mylėdavau", tu: "mylėdavai", jis: "mylėdavo", mes: "mylėdavome", jus: "mylėdavote", jie: "mylėdavo" },
      future: { as: "mylėsiu", tu: "mylėsi", jis: "mylės", mes: "mylėsime", jus: "mylėsite", jie: "mylės" },
    },
  },
  {
    infinitive: "skaityti", translation: "to read", conjugation_class: 3,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Ji skaito knygą.", en: "She is reading a book." },
    tenses: {
      present: { as: "skaitau", tu: "skaitai", jis: "skaito", mes: "skaitome", jus: "skaitote", jie: "skaito" },
      past: { as: "skaičiau", tu: "skaitei", jis: "skaitė", mes: "skaitėme", jus: "skaitėte", jie: "skaitė" },
      past_freq: { as: "skaitydavau", tu: "skaitydavai", jis: "skaitydavo", mes: "skaitydavome", jus: "skaitydavote", jie: "skaitydavo" },
      future: { as: "skaitysiu", tu: "skaitysi", jis: "skaitys", mes: "skaitysime", jus: "skaitysite", jie: "skaitys" },
    },
  },
  {
    infinitive: "rašyti", translation: "to write", conjugation_class: 3,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Aš rašau laišką.", en: "I am writing a letter." },
    tenses: {
      present: { as: "rašau", tu: "rašai", jis: "rašo", mes: "rašome", jus: "rašote", jie: "rašo" },
      past: { as: "rašiau", tu: "rašei", jis: "rašė", mes: "rašėme", jus: "rašėte", jie: "rašė" },
      past_freq: { as: "rašydavau", tu: "rašydavai", jis: "rašydavo", mes: "rašydavome", jus: "rašydavote", jie: "rašydavo" },
      future: { as: "rašysiu", tu: "rašysi", jis: "rašys", mes: "rašysime", jus: "rašysite", jie: "rašys" },
    },
  },
  {
    infinitive: "valgyti", translation: "to eat", conjugation_class: 3,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Mes valgome pusryčius.", en: "We are eating breakfast." },
    tenses: {
      present: { as: "valgau", tu: "valgai", jis: "valgo", mes: "valgome", jus: "valgote", jie: "valgo" },
      past: { as: "valgiau", tu: "valgei", jis: "valgė", mes: "valgėme", jus: "valgėte", jie: "valgė" },
      past_freq: { as: "valgydavau", tu: "valgydavai", jis: "valgydavo", mes: "valgydavome", jus: "valgydavote", jie: "valgydavo" },
      future: { as: "valgysiu", tu: "valgysi", jis: "valgys", mes: "valgysime", jus: "valgysite", jie: "valgys" },
    },
  },
  {
    infinitive: "gerti", translation: "to drink", conjugation_class: 1,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Jis geria vandenį.", en: "He is drinking water." },
    tenses: {
      present: { as: "geriu", tu: "geri", jis: "geria", mes: "geriame", jus: "geriate", jie: "geria" },
      past: { as: "gėriau", tu: "gėrei", jis: "gėrė", mes: "gėrėme", jus: "gėrėte", jie: "gėrė" },
      past_freq: { as: "gerdavau", tu: "gerdavai", jis: "gerdavo", mes: "gerdavome", jus: "gerdavote", jie: "gerdavo" },
      future: { as: "gersiu", tu: "gersi", jis: "gers", mes: "gersime", jus: "gersite", jie: "gers" },
    },
  },
  {
    infinitive: "miegoti", translation: "to sleep", conjugation_class: 1,
    governs: { q: "—", case: "intransitive" },
    example: { lt: "Vaikas dar miega.", en: "The child is still sleeping." },
    tenses: {
      present: { as: "miegu", tu: "miegi", jis: "miega", mes: "miegame", jus: "miegate", jie: "miega" },
      past: { as: "miegojau", tu: "miegojai", jis: "miegojo", mes: "miegojome", jus: "miegojote", jie: "miegojo" },
      past_freq: { as: "miegodavau", tu: "miegodavai", jis: "miegodavo", mes: "miegodavome", jus: "miegodavote", jie: "miegodavo" },
      future: { as: "miegosiu", tu: "miegosi", jis: "miegos", mes: "miegosime", jus: "miegosite", jie: "miegos" },
    },
  },
  {
    infinitive: "duoti", translation: "to give", conjugation_class: "irregular",
    governs: { q: "ką? kam?", case: "accusative + dative" },
    example: { lt: "Duok man knygą.", en: "Give me the book." },
    tenses: {
      present: { as: "duodu", tu: "duodi", jis: "duoda", mes: "duodame", jus: "duodate", jie: "duoda" },
      past: { as: "daviau", tu: "davei", jis: "davė", mes: "davėme", jus: "davėte", jie: "davė" },
      past_freq: { as: "duodavau", tu: "duodavai", jis: "duodavo", mes: "duodavome", jus: "duodavote", jie: "duodavo" },
      future: { as: "duosiu", tu: "duosi", jis: "duos", mes: "duosime", jus: "duosite", jie: "duos" },
    },
  },
  {
    infinitive: "imti", translation: "to take", conjugation_class: 1,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Imk šitą obuolį.", en: "Take this apple." },
    tenses: {
      present: { as: "imu", tu: "imi", jis: "ima", mes: "imame", jus: "imate", jie: "ima" },
      past: { as: "ėmiau", tu: "ėmei", jis: "ėmė", mes: "ėmėme", jus: "ėmėte", jie: "ėmė" },
      past_freq: { as: "imdavau", tu: "imdavai", jis: "imdavo", mes: "imdavome", jus: "imdavote", jie: "imdavo" },
      future: { as: "imsiu", tu: "imsi", jis: "ims", mes: "imsime", jus: "imsite", jie: "ims" },
    },
  },
  {
    infinitive: "rasti", translation: "to find", conjugation_class: 1,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Aš radau raktus.", en: "I found the keys." },
    tenses: {
      present: { as: "randu", tu: "randi", jis: "randa", mes: "randame", jus: "randate", jie: "randa" },
      past: { as: "radau", tu: "radai", jis: "rado", mes: "radome", jus: "radote", jie: "rado" },
      past_freq: { as: "rasdavau", tu: "rasdavai", jis: "rasdavo", mes: "rasdavome", jus: "rasdavote", jie: "rasdavo" },
      future: { as: "rasiu", tu: "rasi", jis: "ras", mes: "rasime", jus: "rasite", jie: "ras" },
    },
  },
  {
    infinitive: "pirkti", translation: "to buy", conjugation_class: 1,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Ji perka duoną.", en: "She is buying bread." },
    tenses: {
      present: { as: "perku", tu: "perki", jis: "perka", mes: "perkame", jus: "perkate", jie: "perka" },
      past: { as: "pirkau", tu: "pirkai", jis: "pirko", mes: "pirkome", jus: "pirkote", jie: "pirko" },
      past_freq: { as: "pirkdavau", tu: "pirkdavai", jis: "pirkdavo", mes: "pirkdavome", jus: "pirkdavote", jie: "pirkdavo" },
      future: { as: "pirksiu", tu: "pirksi", jis: "pirks", mes: "pirksime", jus: "pirksite", jie: "pirks" },
    },
  },
  {
    infinitive: "dirbti", translation: "to work", conjugation_class: 1,
    governs: { q: "—", case: "intransitive" },
    example: { lt: "Aš dirbu biure.", en: "I work in an office." },
    tenses: {
      present: { as: "dirbu", tu: "dirbi", jis: "dirba", mes: "dirbame", jus: "dirbate", jie: "dirba" },
      past: { as: "dirbau", tu: "dirbai", jis: "dirbo", mes: "dirbome", jus: "dirbote", jie: "dirbo" },
      past_freq: { as: "dirbdavau", tu: "dirbdavai", jis: "dirbdavo", mes: "dirbdavome", jus: "dirbdavote", jie: "dirbdavo" },
      future: { as: "dirbsiu", tu: "dirbsi", jis: "dirbs", mes: "dirbsime", jus: "dirbsite", jie: "dirbs" },
    },
  },
  {
    infinitive: "mokėti", translation: "to know how to; to pay", conjugation_class: 1,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Ar moki anglų kalbą?", en: "Do you know English?" },
    tenses: {
      present: { as: "moku", tu: "moki", jis: "moka", mes: "mokame", jus: "mokate", jie: "moka" },
      past: { as: "mokėjau", tu: "mokėjai", jis: "mokėjo", mes: "mokėjome", jus: "mokėjote", jie: "mokėjo" },
      past_freq: { as: "mokėdavau", tu: "mokėdavai", jis: "mokėdavo", mes: "mokėdavome", jus: "mokėdavote", jie: "mokėdavo" },
      future: { as: "mokėsiu", tu: "mokėsi", jis: "mokės", mes: "mokėsime", jus: "mokėsite", jie: "mokės" },
    },
  },
  {
    infinitive: "suprasti", translation: "to understand", conjugation_class: 1,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Aš suprantu tave.", en: "I understand you." },
    tenses: {
      present: { as: "suprantu", tu: "supranti", jis: "supranta", mes: "suprantame", jus: "suprantate", jie: "supranta" },
      past: { as: "supratau", tu: "supratai", jis: "suprato", mes: "supratome", jus: "supratote", jie: "suprato" },
      past_freq: { as: "suprasdavau", tu: "suprasdavai", jis: "suprasdavo", mes: "suprasdavome", jus: "suprasdavote", jie: "suprasdavo" },
      future: { as: "suprasiu", tu: "suprasi", jis: "supras", mes: "suprasime", jus: "suprasite", jie: "supras" },
    },
  },
  {
    infinitive: "atsakyti", translation: "to answer", conjugation_class: 3,
    governs: { q: "kam?", case: "dative" },
    example: { lt: "Atsakyk mokytojui.", en: "Answer the teacher." },
    tenses: {
      present: { as: "atsakau", tu: "atsakai", jis: "atsako", mes: "atsakome", jus: "atsakote", jie: "atsako" },
      past: { as: "atsakiau", tu: "atsakei", jis: "atsakė", mes: "atsakėme", jus: "atsakėte", jie: "atsakė" },
      past_freq: { as: "atsakydavau", tu: "atsakydavai", jis: "atsakydavo", mes: "atsakydavome", jus: "atsakydavote", jie: "atsakydavo" },
      future: { as: "atsakysiu", tu: "atsakysi", jis: "atsakys", mes: "atsakysime", jus: "atsakysite", jie: "atsakys" },
    },
  },
  {
    infinitive: "mokyti", translation: "to teach", conjugation_class: 3,
    governs: { q: "ką? ko?", case: "accusative + genitive" },
    example: { lt: "Ji moko vaikus matematikos.", en: "She teaches the children mathematics." },
    tenses: {
      present: { as: "mokau", tu: "mokai", jis: "moko", mes: "mokome", jus: "mokote", jie: "moko" },
      past: { as: "mokiau", tu: "mokei", jis: "mokė", mes: "mokėme", jus: "mokėte", jie: "mokė" },
      past_freq: { as: "mokydavau", tu: "mokydavai", jis: "mokydavo", mes: "mokydavome", jus: "mokydavote", jie: "mokydavo" },
      future: { as: "mokysiu", tu: "mokysi", jis: "mokys", mes: "mokysime", jus: "mokysite", jie: "mokys" },
    },
  },
  {
    infinitive: "pradėti", translation: "to begin, to start", conjugation_class: 1,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Mes pradedame darbą.", en: "We are starting the work." },
    tenses: {
      present: { as: "pradedu", tu: "pradedi", jis: "pradeda", mes: "pradedame", jus: "pradedate", jie: "pradeda" },
      past: { as: "pradėjau", tu: "pradėjai", jis: "pradėjo", mes: "pradėjome", jus: "pradėjote", jie: "pradėjo" },
      past_freq: { as: "pradėdavau", tu: "pradėdavai", jis: "pradėdavo", mes: "pradėdavome", jus: "pradėdavote", jie: "pradėdavo" },
      future: { as: "pradėsiu", tu: "pradėsi", jis: "pradės", mes: "pradėsime", jus: "pradėsite", jie: "pradės" },
    },
  },
  {
    infinitive: "baigti", translation: "to finish, to end", conjugation_class: 1,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Aš baigiau darbą.", en: "I finished the work." },
    tenses: {
      present: { as: "baigiu", tu: "baigi", jis: "baigia", mes: "baigiame", jus: "baigiate", jie: "baigia" },
      past: { as: "baigiau", tu: "baigei", jis: "baigė", mes: "baigėme", jus: "baigėte", jie: "baigė" },
      past_freq: { as: "baigdavau", tu: "baigdavai", jis: "baigdavo", mes: "baigdavome", jus: "baigdavote", jie: "baigdavo" },
      future: { as: "baigsiu", tu: "baigsi", jis: "baigs", mes: "baigsime", jus: "baigsite", jie: "baigs" },
    },
  },
  {
    infinitive: "laukti", translation: "to wait", conjugation_class: 1,
    governs: { q: "ko?", case: "genitive" },
    example: { lt: "Aš laukiu autobuso.", en: "I am waiting for the bus." },
    tenses: {
      present: { as: "laukiu", tu: "lauki", jis: "laukia", mes: "laukiame", jus: "laukiate", jie: "laukia" },
      past: { as: "laukiau", tu: "laukei", jis: "laukė", mes: "laukėme", jus: "laukėte", jie: "laukė" },
      past_freq: { as: "laukdavau", tu: "laukdavai", jis: "laukdavo", mes: "laukdavome", jus: "laukdavote", jie: "laukdavo" },
      future: { as: "lauksiu", tu: "lauksi", jis: "lauks", mes: "lauksime", jus: "lauksite", jie: "lauks" },
    },
  },
  {
    infinitive: "žaisti", translation: "to play", conjugation_class: 1,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Vaikai žaidžia kieme.", en: "The children are playing in the yard." },
    tenses: {
      present: { as: "žaidžiu", tu: "žaidi", jis: "žaidžia", mes: "žaidžiame", jus: "žaidžiate", jie: "žaidžia" },
      past: { as: "žaidžiau", tu: "žaidei", jis: "žaidė", mes: "žaidėme", jus: "žaidėte", jie: "žaidė" },
      past_freq: { as: "žaisdavau", tu: "žaisdavai", jis: "žaisdavo", mes: "žaisdavome", jus: "žaisdavote", jie: "žaisdavo" },
      future: { as: "žaisiu", tu: "žaisi", jis: "žais", mes: "žaisime", jus: "žaisite", jie: "žais" },
    },
  },
  {
    infinitive: "dainuoti", translation: "to sing", conjugation_class: 1,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Ji gražiai dainuoja dainą.", en: "She sings a song beautifully." },
    tenses: {
      present: { as: "dainuoju", tu: "dainuoji", jis: "dainuoja", mes: "dainuojame", jus: "dainuojate", jie: "dainuoja" },
      past: { as: "dainavau", tu: "dainavai", jis: "dainavo", mes: "dainavome", jus: "dainavote", jie: "dainavo" },
      past_freq: { as: "dainuodavau", tu: "dainuodavai", jis: "dainuodavo", mes: "dainuodavome", jus: "dainuodavote", jie: "dainuodavo" },
      future: { as: "dainuosiu", tu: "dainuosi", jis: "dainuos", mes: "dainuosime", jus: "dainuosite", jie: "dainuos" },
    },
  },
  {
    infinitive: "važiuoti", translation: "to drive, to ride", conjugation_class: 1,
    governs: { q: "—", case: "intransitive" },
    example: { lt: "Mes važiuojame namo.", en: "We are driving home." },
    tenses: {
      present: { as: "važiuoju", tu: "važiuoji", jis: "važiuoja", mes: "važiuojame", jus: "važiuojate", jie: "važiuoja" },
      past: { as: "važiavau", tu: "važiavai", jis: "važiavo", mes: "važiavome", jus: "važiavote", jie: "važiavo" },
      past_freq: { as: "važiuodavau", tu: "važiuodavai", jis: "važiuodavo", mes: "važiuodavome", jus: "važiuodavote", jie: "važiuodavo" },
      future: { as: "važiuosiu", tu: "važiuosi", jis: "važiuos", mes: "važiuosime", jus: "važiuosite", jie: "važiuos" },
    },
  },
  {
    infinitive: "bėgti", translation: "to run", conjugation_class: 1,
    governs: { q: "—", case: "intransitive" },
    example: { lt: "Šuo bėga greitai.", en: "The dog runs fast." },
    tenses: {
      present: { as: "bėgu", tu: "bėgi", jis: "bėga", mes: "bėgame", jus: "bėgate", jie: "bėga" },
      past: { as: "bėgau", tu: "bėgai", jis: "bėgo", mes: "bėgome", jus: "bėgote", jie: "bėgo" },
      past_freq: { as: "bėgdavau", tu: "bėgdavai", jis: "bėgdavo", mes: "bėgdavome", jus: "bėgdavote", jie: "bėgdavo" },
      future: { as: "bėgsiu", tu: "bėgsi", jis: "bėgs", mes: "bėgsime", jus: "bėgsite", jie: "bėgs" },
    },
  },
  {
    infinitive: "augti", translation: "to grow", conjugation_class: 1,
    governs: { q: "—", case: "intransitive" },
    example: { lt: "Medžiai auga lėtai.", en: "Trees grow slowly." },
    tenses: {
      present: { as: "augu", tu: "augi", jis: "auga", mes: "augame", jus: "augate", jie: "auga" },
      past: { as: "augau", tu: "augai", jis: "augo", mes: "augome", jus: "augote", jie: "augo" },
      past_freq: { as: "augdavau", tu: "augdavai", jis: "augdavo", mes: "augdavome", jus: "augdavote", jie: "augdavo" },
      future: { as: "augsiu", tu: "augsi", jis: "augs", mes: "augsime", jus: "augsite", jie: "augs" },
    },
  },
  {
    infinitive: "mąstyti", translation: "to think, to reason", conjugation_class: 3,
    governs: { q: "apie ką?", case: "apie + accusative" },
    example: { lt: "Jis giliai mąsto.", en: "He thinks deeply." },
    tenses: {
      present: { as: "mąstau", tu: "mąstai", jis: "mąsto", mes: "mąstome", jus: "mąstote", jie: "mąsto" },
      past: { as: "mąsčiau", tu: "mąstei", jis: "mąstė", mes: "mąstėme", jus: "mąstėte", jie: "mąstė" },
      past_freq: { as: "mąstydavau", tu: "mąstydavai", jis: "mąstydavo", mes: "mąstydavome", jus: "mąstydavote", jie: "mąstydavo" },
      future: { as: "mąstysiu", tu: "mąstysi", jis: "mąstys", mes: "mąstysime", jus: "mąstysite", jie: "mąstys" },
    },
  },
  {
    infinitive: "galvoti", translation: "to think", conjugation_class: 1,
    governs: { q: "apie ką?", case: "apie + accusative" },
    example: { lt: "Apie ką tu galvoji?", en: "What are you thinking about?" },
    tenses: {
      present: { as: "galvoju", tu: "galvoji", jis: "galvoja", mes: "galvojame", jus: "galvojate", jie: "galvoja" },
      past: { as: "galvojau", tu: "galvojai", jis: "galvojo", mes: "galvojome", jus: "galvojote", jie: "galvojo" },
      past_freq: { as: "galvodavau", tu: "galvodavai", jis: "galvodavo", mes: "galvodavome", jus: "galvodavote", jie: "galvodavo" },
      future: { as: "galvosiu", tu: "galvosi", jis: "galvos", mes: "galvosime", jus: "galvosite", jie: "galvos" },
    },
  },
  {
    infinitive: "klausyti", translation: "to listen", conjugation_class: 3,
    governs: { q: "ko?", case: "genitive" },
    example: { lt: "Aš klausau muzikos.", en: "I am listening to music." },
    tenses: {
      present: { as: "klausau", tu: "klausai", jis: "klauso", mes: "klausome", jus: "klausote", jie: "klauso" },
      past: { as: "klausiau", tu: "klausei", jis: "klausė", mes: "klausėme", jus: "klausėte", jie: "klausė" },
      past_freq: { as: "klausydavau", tu: "klausydavai", jis: "klausydavo", mes: "klausydavome", jus: "klausydavote", jie: "klausydavo" },
      future: { as: "klausysiu", tu: "klausysi", jis: "klausys", mes: "klausysime", jus: "klausysite", jie: "klausys" },
    },
  },
  {
    infinitive: "padėti", translation: "to help; to put down", conjugation_class: 1,
    governs: { q: "kam?", case: "dative" },
    example: { lt: "Padėk man, prašau.", en: "Help me, please." },
    tenses: {
      present: { as: "padedu", tu: "padedi", jis: "padeda", mes: "padedame", jus: "padedate", jie: "padeda" },
      past: { as: "padėjau", tu: "padėjai", jis: "padėjo", mes: "padėjome", jus: "padėjote", jie: "padėjo" },
      past_freq: { as: "padėdavau", tu: "padėdavai", jis: "padėdavo", mes: "padėdavome", jus: "padėdavote", jie: "padėdavo" },
      future: { as: "padėsiu", tu: "padėsi", jis: "padės", mes: "padėsime", jus: "padėsite", jie: "padės" },
    },
  },
  {
    infinitive: "gauti", translation: "to get, to receive", conjugation_class: 1,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Aš gavau dovaną.", en: "I received a gift." },
    tenses: {
      present: { as: "gaunu", tu: "gauni", jis: "gauna", mes: "gauname", jus: "gaunate", jie: "gauna" },
      past: { as: "gavau", tu: "gavai", jis: "gavo", mes: "gavome", jus: "gavote", jie: "gavo" },
      past_freq: { as: "gaudavau", tu: "gaudavai", jis: "gaudavo", mes: "gaudavome", jus: "gaudavote", jie: "gaudavo" },
      future: { as: "gausiu", tu: "gausi", jis: "gaus", mes: "gausime", jus: "gausite", jie: "gaus" },
    },
  },
  {
    infinitive: "prašyti", translation: "to ask for, to request", conjugation_class: 3,
    governs: { q: "ko?", case: "genitive" },
    example: { lt: "Ji prašo pagalbos.", en: "She is asking for help." },
    tenses: {
      present: { as: "prašau", tu: "prašai", jis: "prašo", mes: "prašome", jus: "prašote", jie: "prašo" },
      past: { as: "prašiau", tu: "prašei", jis: "prašė", mes: "prašėme", jus: "prašėte", jie: "prašė" },
      past_freq: { as: "prašydavau", tu: "prašydavai", jis: "prašydavo", mes: "prašydavome", jus: "prašydavote", jie: "prašydavo" },
      future: { as: "prašysiu", tu: "prašysi", jis: "prašys", mes: "prašysime", jus: "prašysite", jie: "prašys" },
    },
  },
  {
    infinitive: "vadinti", translation: "to call, to name", conjugation_class: 1,
    governs: { q: "ką? kuo?", case: "accusative + instrumental" },
    example: { lt: "Visi jį vadina draugu.", en: "Everyone calls him a friend." },
    tenses: {
      present: { as: "vadinu", tu: "vadini", jis: "vadina", mes: "vadiname", jus: "vadinate", jie: "vadina" },
      past: { as: "vadinau", tu: "vadinai", jis: "vadino", mes: "vadinome", jus: "vadinote", jie: "vadino" },
      past_freq: { as: "vadindavau", tu: "vadindavai", jis: "vadindavo", mes: "vadindavome", jus: "vadindavote", jie: "vadindavo" },
      future: { as: "vadinsiu", tu: "vadinsi", jis: "vadins", mes: "vadinsime", jus: "vadinsite", jie: "vadins" },
    },
  },
  {
    infinitive: "lankyti", translation: "to visit, to attend", conjugation_class: 3,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Aš lankau pamokas.", en: "I attend the lessons." },
    tenses: {
      present: { as: "lankau", tu: "lankai", jis: "lanko", mes: "lankome", jus: "lankote", jie: "lanko" },
      past: { as: "lankiau", tu: "lankei", jis: "lankė", mes: "lankėme", jus: "lankėte", jie: "lankė" },
      past_freq: { as: "lankydavau", tu: "lankydavai", jis: "lankydavo", mes: "lankydavome", jus: "lankydavote", jie: "lankydavo" },
      future: { as: "lankysiu", tu: "lankysi", jis: "lankys", mes: "lankysime", jus: "lankysite", jie: "lankys" },
    },
  },
  {
    infinitive: "tikėti", translation: "to believe", conjugation_class: 2,
    governs: { q: "kuo?", case: "instrumental" },
    example: { lt: "Aš tikiu tavimi.", en: "I believe in you." },
    tenses: {
      present: { as: "tikiu", tu: "tiki", jis: "tiki", mes: "tikime", jus: "tikite", jie: "tiki" },
      past: { as: "tikėjau", tu: "tikėjai", jis: "tikėjo", mes: "tikėjome", jus: "tikėjote", jie: "tikėjo" },
      past_freq: { as: "tikėdavau", tu: "tikėdavai", jis: "tikėdavo", mes: "tikėdavome", jus: "tikėdavote", jie: "tikėdavo" },
      future: { as: "tikėsiu", tu: "tikėsi", jis: "tikės", mes: "tikėsime", jus: "tikėsite", jie: "tikės" },
    },
  },
  {
    infinitive: "jausti", translation: "to feel", conjugation_class: 1,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Aš jaučiu skausmą.", en: "I feel pain." },
    tenses: {
      present: { as: "jaučiu", tu: "jauti", jis: "jaučia", mes: "jaučiame", jus: "jaučiate", jie: "jaučia" },
      past: { as: "jaučiau", tu: "jautei", jis: "jautė", mes: "jautėme", jus: "jautėte", jie: "jautė" },
      past_freq: { as: "jausdavau", tu: "jausdavai", jis: "jausdavo", mes: "jausdavome", jus: "jausdavote", jie: "jausdavo" },
      future: { as: "jausiu", tu: "jausi", jis: "jaus", mes: "jausime", jus: "jausite", jie: "jaus" },
    },
  },
  {
    infinitive: "keisti", translation: "to change", conjugation_class: 1,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Jie keičia planus.", en: "They are changing plans." },
    tenses: {
      present: { as: "keičiu", tu: "keiti", jis: "keičia", mes: "keičiame", jus: "keičiate", jie: "keičia" },
      past: { as: "keičiau", tu: "keitei", jis: "keitė", mes: "keitėme", jus: "keitėte", jie: "keitė" },
      past_freq: { as: "keisdavau", tu: "keisdavai", jis: "keisdavo", mes: "keisdavome", jus: "keisdavote", jie: "keisdavo" },
      future: { as: "keisiu", tu: "keisi", jis: "keis", mes: "keisime", jus: "keisite", jie: "keis" },
    },
  },
  {
    infinitive: "statyti", translation: "to build", conjugation_class: 3,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Jie stato namą.", en: "They are building a house." },
    tenses: {
      present: { as: "statau", tu: "statai", jis: "stato", mes: "statome", jus: "statote", jie: "stato" },
      past: { as: "stačiau", tu: "statei", jis: "statė", mes: "statėme", jus: "statėte", jie: "statė" },
      past_freq: { as: "statydavau", tu: "statydavai", jis: "statydavo", mes: "statydavome", jus: "statydavote", jie: "statydavo" },
      future: { as: "statysiu", tu: "statysi", jis: "statys", mes: "statysime", jus: "statysite", jie: "statys" },
    },
  },
  {
    infinitive: "kelti", translation: "to lift, to raise", conjugation_class: 1,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Jis kelia ranką.", en: "He is raising his hand." },
    tenses: {
      present: { as: "keliu", tu: "keli", jis: "kelia", mes: "keliame", jus: "keliate", jie: "kelia" },
      past: { as: "kėliau", tu: "kėlei", jis: "kėlė", mes: "kėlėme", jus: "kėlėte", jie: "kėlė" },
      past_freq: { as: "keldavau", tu: "keldavai", jis: "keldavo", mes: "keldavome", jus: "keldavote", jie: "keldavo" },
      future: { as: "kelsiu", tu: "kelsi", jis: "kels", mes: "kelsime", jus: "kelsite", jie: "kels" },
    },
  },
  {
    infinitive: "vesti", translation: "to lead, to guide", conjugation_class: 1,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Mokytojas veda pamoką.", en: "The teacher is leading the lesson." },
    tenses: {
      present: { as: "vedu", tu: "vedi", jis: "veda", mes: "vedame", jus: "vedate", jie: "veda" },
      past: { as: "vedžiau", tu: "vedei", jis: "vedė", mes: "vedėme", jus: "vedėte", jie: "vedė" },
      past_freq: { as: "vesdavau", tu: "vesdavai", jis: "vesdavo", mes: "vesdavome", jus: "vesdavote", jie: "vesdavo" },
      future: { as: "vesiu", tu: "vesi", jis: "ves", mes: "vesime", jus: "vesite", jie: "ves" },
    },
  },
  {
    infinitive: "pamiršti", translation: "to forget", conjugation_class: 1,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Aš pamiršau jo vardą.", en: "I forgot his name." },
    tenses: {
      present: { as: "pamirštu", tu: "pamiršti", jis: "pamiršta", mes: "pamirštame", jus: "pamirštate", jie: "pamiršta" },
      past: { as: "pamiršau", tu: "pamiršai", jis: "pamiršo", mes: "pamiršome", jus: "pamiršote", jie: "pamiršo" },
      past_freq: { as: "pamiršdavau", tu: "pamiršdavai", jis: "pamiršdavo", mes: "pamiršdavome", jus: "pamiršdavote", jie: "pamiršdavo" },
      future: { as: "pamiršiu", tu: "pamirši", jis: "pamirš", mes: "pamiršime", jus: "pamiršite", jie: "pamirš" },
    },
  },
  {
    infinitive: "dėti", translation: "to put, to place", conjugation_class: 1,
    governs: { q: "ką?", case: "accusative" },
    example: { lt: "Dėk knygą ant stalo.", en: "Put the book on the table." },
    tenses: {
      present: { as: "dedu", tu: "dedi", jis: "deda", mes: "dedame", jus: "dedate", jie: "deda" },
      past: { as: "dėjau", tu: "dėjai", jis: "dėjo", mes: "dėjome", jus: "dėjote", jie: "dėjo" },
      past_freq: { as: "dėdavau", tu: "dėdavai", jis: "dėdavo", mes: "dėdavome", jus: "dėdavote", jie: "dėdavo" },
      future: { as: "dėsiu", tu: "dėsi", jis: "dės", mes: "dėsime", jus: "dėsite", jie: "dės" },
    },
  },
  {
    infinitive: "likti", translation: "to remain, to stay", conjugation_class: 1,
    governs: { q: "—", case: "intransitive" },
    example: { lt: "Aš lieku namie.", en: "I am staying at home." },
    tenses: {
      present: { as: "lieku", tu: "lieki", jis: "lieka", mes: "liekame", jus: "liekate", jie: "lieka" },
      past: { as: "likau", tu: "likai", jis: "liko", mes: "likome", jus: "likote", jie: "liko" },
      past_freq: { as: "likdavau", tu: "likdavai", jis: "likdavo", mes: "likdavome", jus: "likdavote", jie: "likdavo" },
      future: { as: "liksiu", tu: "liksi", jis: "liks", mes: "liksime", jus: "liksite", jie: "liks" },
    },
  },
];
