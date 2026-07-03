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
  // ---------------------------------------------------------------------------
  // Common verbs from the 2000-most-common list (forms via Wiktionary/kaikki.org).
  // ---------------------------------------------------------------------------
  {
    infinitive: "aplankyti", translation: "to visit", conjugation_class: 3,
    tenses: {
      present: { as: "aplankau", tu: "aplankai", jis: "aplanko", mes: "aplankome", jus: "aplankote", jie: "aplanko" },
      past: { as: "aplankiau", tu: "aplankei", jis: "aplankė", mes: "aplankėme", jus: "aplankėte", jie: "aplankė" },
      past_freq: { as: "aplankydavau", tu: "aplankydavai", jis: "aplankydavo", mes: "aplankydavome", jus: "aplankydavote", jie: "aplankydavo" },
      future: { as: "aplankysiu", tu: "aplankysi", jis: "aplankys", mes: "aplankysime", jus: "aplankysite", jie: "aplankys" },
    },
  },
  {
    infinitive: "ateiti", translation: "to come", conjugation_class: 1,
    tenses: {
      present: { as: "ateinu", tu: "ateini", jis: "ateina", mes: "ateiname", jus: "ateinate", jie: "ateina" },
      past: { as: "atėjau", tu: "atėjai", jis: "atėjo", mes: "atėjome", jus: "atėjote", jie: "atėjo" },
      past_freq: { as: "ateidavau", tu: "ateidavai", jis: "ateidavo", mes: "ateidavome", jus: "ateidavote", jie: "ateidavo" },
      future: { as: "ateisiu", tu: "ateisi", jis: "ateis", mes: "ateisime", jus: "ateisite", jie: "ateis" },
    },
  },
  {
    infinitive: "atidaryti", translation: "to open", conjugation_class: 3,
    tenses: {
      present: { as: "atidarau", tu: "atidarai", jis: "atidaro", mes: "atidarome", jus: "atidarote", jie: "atidaro" },
      past: { as: "atidariau", tu: "atidarei", jis: "atidarė", mes: "atidarėme", jus: "atidarėte", jie: "atidarė" },
      past_freq: { as: "atidarydavau", tu: "atidarydavai", jis: "atidarydavo", mes: "atidarydavome", jus: "atidarydavote", jie: "atidarydavo" },
      future: { as: "atidarysiu", tu: "atidarysi", jis: "atidarys", mes: "atidarysime", jus: "atidarysite", jie: "atidarys" },
    },
  },
  {
    infinitive: "atrasti", translation: "to discover", conjugation_class: 1,
    tenses: {
      present: { as: "atrandu", tu: "atrandi", jis: "atranda", mes: "atrandame", jus: "atrandate", jie: "atranda" },
      past: { as: "atradau", tu: "atradai", jis: "atrado", mes: "atradome", jus: "atradote", jie: "atrado" },
      past_freq: { as: "atrasdavau", tu: "atrasdavai", jis: "atrasdavo", mes: "atrasdavome", jus: "atrasdavote", jie: "atrasdavo" },
      future: { as: "atrasiu", tu: "atrasi", jis: "atrass", mes: "atrasime", jus: "atrasite", jie: "atrass" },
    },
  },
  {
    infinitive: "atrodyti", translation: "to seem", conjugation_class: 3,
    tenses: {
      present: { as: "atrodau", tu: "atrodai", jis: "atrodo", mes: "atrodome", jus: "atrodote", jie: "atrodo" },
      past: { as: "atrodžiau", tu: "atrodei", jis: "atrodė", mes: "atrodėme", jus: "atrodėte", jie: "atrodė" },
      past_freq: { as: "atrodydavau", tu: "atrodydavai", jis: "atrodydavo", mes: "atrodydavome", jus: "atrodydavote", jie: "atrodydavo" },
      future: { as: "atrodysiu", tu: "atrodysi", jis: "atrodys", mes: "atrodysime", jus: "atrodysite", jie: "atrodys" },
    },
  },
  {
    infinitive: "atsisakyti", translation: "to refuse", conjugation_class: 3,
    tenses: {
      present: { as: "atsisakau", tu: "atsisakai", jis: "atsisako", mes: "atsisakome", jus: "atsisakote", jie: "atsisako" },
      past: { as: "atsisakiau", tu: "atsisakei", jis: "atsisakė", mes: "atsisakėme", jus: "atsisakėte", jie: "atsisakė" },
      past_freq: { as: "atsisakydavau", tu: "atsisakydavai", jis: "atsisakydavo", mes: "atsisakydavome", jus: "atsisakydavote", jie: "atsisakydavo" },
      future: { as: "atsisakysiu", tu: "atsisakysi", jis: "atsisakys", mes: "atsisakysime", jus: "atsisakysite", jie: "atsisakys" },
    },
  },
  {
    infinitive: "atvykti", translation: "to arrive", conjugation_class: 1,
    tenses: {
      present: { as: "atvykstu", tu: "atvyksti", jis: "atvyksta", mes: "atvykstame", jus: "atvykstate", jie: "atvyksta" },
      past: { as: "atvykau", tu: "atvykai", jis: "atvyko", mes: "atvykome", jus: "atvykote", jie: "atvyko" },
      past_freq: { as: "atvykdavau", tu: "atvykdavai", jis: "atvykdavo", mes: "atvykdavome", jus: "atvykdavote", jie: "atvykdavo" },
      future: { as: "atvyksiu", tu: "atvyksi", jis: "atvyks", mes: "atvyksime", jus: "atvyksite", jie: "atvyks" },
    },
  },
  {
    infinitive: "bandyti", translation: "to try", conjugation_class: 3,
    tenses: {
      present: { as: "bandau", tu: "bandai", jis: "bando", mes: "bandome", jus: "bandote", jie: "bando" },
      past: { as: "bandžiau", tu: "bandei", jis: "bandė", mes: "bandėme", jus: "bandėte", jie: "bandė" },
      past_freq: { as: "bandydavau", tu: "bandydavai", jis: "bandydavo", mes: "bandydavome", jus: "bandydavote", jie: "bandydavo" },
      future: { as: "bandysiu", tu: "bandysi", jis: "bandys", mes: "bandysime", jus: "bandysite", jie: "bandys" },
    },
  },
  {
    infinitive: "degti", translation: "to burn", conjugation_class: 1,
    tenses: {
      present: { as: "degu", tu: "degi", jis: "dega", mes: "degame", jus: "degate", jie: "dega" },
      past: { as: "degiau", tu: "degei", jis: "degė", mes: "degėme", jus: "degėte", jie: "degė" },
      past_freq: { as: "degdavau", tu: "degdavai", jis: "degdavo", mes: "degdavome", jus: "degdavote", jie: "degdavo" },
      future: { as: "degsiu", tu: "degsi", jis: "degs", mes: "degsime", jus: "degsite", jie: "degs" },
    },
  },
  {
    infinitive: "gaminti", translation: "to make", conjugation_class: 1,
    tenses: {
      present: { as: "gaminu", tu: "gamini", jis: "gamina", mes: "gaminame", jus: "gaminate", jie: "gamina" },
      past: { as: "gaminau", tu: "gaminai", jis: "gamino", mes: "gaminome", jus: "gaminote", jie: "gamino" },
      past_freq: { as: "gamindavau", tu: "gamindavai", jis: "gamindavo", mes: "gamindavome", jus: "gamindavote", jie: "gamindavo" },
      future: { as: "gaminsiu", tu: "gaminsi", jis: "gamins", mes: "gaminsime", jus: "gaminsite", jie: "gamins" },
    },
  },
  {
    infinitive: "girdėti", translation: "to hear", conjugation_class: 2,
    tenses: {
      present: { as: "girdžiu", tu: "girdi", jis: "girdi", mes: "girdime", jus: "girdite", jie: "girdi" },
      past: { as: "girdėjau", tu: "girdėjai", jis: "girdėjo", mes: "girdėjome", jus: "girdėjote", jie: "girdėjo" },
      past_freq: { as: "girdėdavau", tu: "girdėdavai", jis: "girdėdavo", mes: "girdėdavome", jus: "girdėdavote", jie: "girdėdavo" },
      future: { as: "girdėsiu", tu: "girdėsi", jis: "girdės", mes: "girdėsime", jus: "girdėsite", jie: "girdės" },
    },
  },
  {
    infinitive: "gulėti", translation: "to lay", conjugation_class: 2,
    tenses: {
      present: { as: "guliu", tu: "guli", jis: "guli", mes: "gulime", jus: "gulite", jie: "guli" },
      past: { as: "gulėjau", tu: "gulėjai", jis: "gulėjo", mes: "gulėjome", jus: "gulėjote", jie: "gulėjo" },
      past_freq: { as: "gulėdavau", tu: "gulėdavai", jis: "gulėdavo", mes: "gulėdavome", jus: "gulėdavote", jie: "gulėdavo" },
      future: { as: "gulėsiu", tu: "gulėsi", jis: "gulės", mes: "gulėsime", jus: "gulėsite", jie: "gulės" },
    },
  },
  {
    infinitive: "gydyti", translation: "to treat", conjugation_class: 3,
    tenses: {
      present: { as: "gydau", tu: "gydai", jis: "gydo", mes: "gydome", jus: "gydote", jie: "gydo" },
      past: { as: "gydžiau", tu: "gydei", jis: "gydė", mes: "gydėme", jus: "gydėte", jie: "gydė" },
      past_freq: { as: "gydydavau", tu: "gydydavai", jis: "gydydavo", mes: "gydydavome", jus: "gydydavote", jie: "gydydavo" },
      future: { as: "gydysiu", tu: "gydysi", jis: "gydys", mes: "gydysime", jus: "gydysite", jie: "gydys" },
    },
  },
  {
    infinitive: "ieškoti", translation: "to search", conjugation_class: 3,
    tenses: {
      present: { as: "ieškau", tu: "ieškai", jis: "ieško", mes: "ieškome", jus: "ieškote", jie: "ieško" },
      past: { as: "ieškojau", tu: "ieškojai", jis: "ieškojo", mes: "ieškojome", jus: "ieškojote", jie: "ieškojo" },
      past_freq: { as: "ieškodavau", tu: "ieškodavai", jis: "ieškodavo", mes: "ieškodavome", jus: "ieškodavote", jie: "ieškodavo" },
      future: { as: "ieškosiu", tu: "ieškosi", jis: "ieškos", mes: "ieškosime", jus: "ieškosite", jie: "ieškos" },
    },
  },
  {
    infinitive: "išdrįsti", translation: "to dare", conjugation_class: 1,
    tenses: {
      present: { as: "išdrįstu", tu: "išdrįsti", jis: "išdrįsta", mes: "išdrįstame", jus: "išdrįstate", jie: "išdrįsta" },
      past: { as: "išdrįsau", tu: "išdrįsai", jis: "išdrįso", mes: "išdrįsome", jus: "išdrįsote", jie: "išdrįso" },
      past_freq: { as: "išdrįsdavau", tu: "išdrįsdavai", jis: "išdrįsdavo", mes: "išdrįsdavome", jus: "išdrįsdavote", jie: "išdrįsdavo" },
      future: { as: "išdrįsiu", tu: "išdrįsi", jis: "išdrįs", mes: "išdrįsime", jus: "išdrįsite", jie: "išdrįs" },
    },
  },
  {
    infinitive: "išleisti", translation: "to spend", conjugation_class: 1,
    tenses: {
      present: { as: "išleidžiu", tu: "išleidi", jis: "išleidžia", mes: "išleidžiame", jus: "išleidžiate", jie: "išleidžia" },
      past: { as: "išleidau", tu: "išleidai", jis: "išleido", mes: "išleidome", jus: "išleidote", jie: "išleido" },
      past_freq: { as: "išleisdavau", tu: "išleisdavai", jis: "išleisdavo", mes: "išleisdavome", jus: "išleisdavote", jie: "išleisdavo" },
      future: { as: "išleisiu", tu: "išleisi", jis: "išleiss", mes: "išleisime", jus: "išleisite", jie: "išleiss" },
    },
  },
  {
    infinitive: "išlikti", translation: "to remain", conjugation_class: 1,
    tenses: {
      present: { as: "išlieku", tu: "išlieki", jis: "išlieka", mes: "išliekame", jus: "išliekate", jie: "išlieka" },
      past: { as: "išlikau", tu: "išlikai", jis: "išliko", mes: "išlikome", jus: "išlikote", jie: "išliko" },
      past_freq: { as: "išlikdavau", tu: "išlikdavai", jis: "išlikdavo", mes: "išlikdavome", jus: "išlikdavote", jie: "išlikdavo" },
      future: { as: "išliksiu", tu: "išliksi", jis: "išliks", mes: "išliksime", jus: "išliksite", jie: "išliks" },
    },
  },
  {
    infinitive: "išmesti", translation: "to drop", conjugation_class: 1,
    tenses: {
      present: { as: "išmetu", tu: "išmeti", jis: "išmeta", mes: "išmetame", jus: "išmetate", jie: "išmeta" },
      past: { as: "išmečiau", tu: "išmetei", jis: "išmetė", mes: "išmetėme", jus: "išmetėte", jie: "išmetė" },
      past_freq: { as: "išmesdavau", tu: "išmesdavai", jis: "išmesdavo", mes: "išmesdavome", jus: "išmesdavote", jie: "išmesdavo" },
      future: { as: "išmesiu", tu: "išmesi", jis: "išmes", mes: "išmesime", jus: "išmesite", jie: "išmes" },
    },
  },
  {
    infinitive: "išmokti", translation: "to learn", conjugation_class: 1,
    tenses: {
      present: { as: "išmokstu", tu: "išmoksti", jis: "išmoksta", mes: "išmokstame", jus: "išmokstate", jie: "išmoksta" },
      past: { as: "išmokau", tu: "išmokai", jis: "išmoko", mes: "išmokome", jus: "išmokote", jie: "išmoko" },
      past_freq: { as: "išmokdavau", tu: "išmokdavai", jis: "išmokdavo", mes: "išmokdavome", jus: "išmokdavote", jie: "išmokdavo" },
      future: { as: "išmoksiu", tu: "išmoksi", jis: "išmoks", mes: "išmoksime", jus: "išmoksite", jie: "išmoks" },
    },
  },
  {
    infinitive: "išsaugoti", translation: "to save", conjugation_class: 3,
    tenses: {
      present: { as: "išsaugau", tu: "išsaugai", jis: "išsaugo", mes: "išsaugome", jus: "išsaugote", jie: "išsaugo" },
      past: { as: "išsaugojau", tu: "išsaugojai", jis: "išsaugojo", mes: "išsaugojome", jus: "išsaugojote", jie: "išsaugojo" },
      past_freq: { as: "išsaugodavau", tu: "išsaugodavai", jis: "išsaugodavo", mes: "išsaugodavome", jus: "išsaugodavote", jie: "išsaugodavo" },
      future: { as: "išsaugosiu", tu: "išsaugosi", jis: "išsaugos", mes: "išsaugosime", jus: "išsaugosite", jie: "išsaugos" },
    },
  },
  {
    infinitive: "išvengti", translation: "to escape", conjugation_class: 1,
    tenses: {
      present: { as: "išvengiu", tu: "išvengi", jis: "išvengia", mes: "išvengiame", jus: "išvengiate", jie: "išvengia" },
      past: { as: "išvengiau", tu: "išvengei", jis: "išvengė", mes: "išvengėme", jus: "išvengėte", jie: "išvengė" },
      past_freq: { as: "išvengdavau", tu: "išvengdavai", jis: "išvengdavo", mes: "išvengdavome", jus: "išvengdavote", jie: "išvengdavo" },
      future: { as: "išvengsiu", tu: "išvengsi", jis: "išvengs", mes: "išvengsime", jus: "išvengsite", jie: "išvengs" },
    },
  },
  {
    infinitive: "judėti", translation: "to move", conjugation_class: 1,
    tenses: {
      present: { as: "judu", tu: "judi", jis: "juda", mes: "judame", jus: "judate", jie: "juda" },
      past: { as: "judėjau", tu: "judėjai", jis: "judėjo", mes: "judėjome", jus: "judėjote", jie: "judėjo" },
      past_freq: { as: "judėdavau", tu: "judėdavai", jis: "judėdavo", mes: "judėdavome", jus: "judėdavote", jie: "judėdavo" },
      future: { as: "judėsiu", tu: "judėsi", jis: "judės", mes: "judėsime", jus: "judėsite", jie: "judės" },
    },
  },
  {
    infinitive: "keliauti", translation: "to travel", conjugation_class: 1,
    tenses: {
      present: { as: "keliauju", tu: "keliauji", jis: "keliauja", mes: "keliaujame", jus: "keliaujate", jie: "keliauja" },
      past: { as: "keliavau", tu: "keliavai", jis: "keliavo", mes: "keliavome", jus: "keliavote", jie: "keliavo" },
      past_freq: { as: "keliaudavau", tu: "keliaudavai", jis: "keliaudavo", mes: "keliaudavome", jus: "keliaudavote", jie: "keliaudavo" },
      future: { as: "keliausiu", tu: "keliausi", jis: "keliaus", mes: "keliausime", jus: "keliausite", jie: "keliaus" },
    },
  },
  {
    infinitive: "ketinti", translation: "to intend", conjugation_class: 1,
    tenses: {
      present: { as: "ketinu", tu: "ketini", jis: "ketina", mes: "ketiname", jus: "ketinate", jie: "ketina" },
      past: { as: "ketinau", tu: "ketinai", jis: "ketino", mes: "ketinome", jus: "ketinote", jie: "ketino" },
      past_freq: { as: "ketindavau", tu: "ketindavai", jis: "ketindavo", mes: "ketindavome", jus: "ketindavote", jie: "ketindavo" },
      future: { as: "ketinsiu", tu: "ketinsi", jis: "ketins", mes: "ketinsime", jus: "ketinsite", jie: "ketins" },
    },
  },
  {
    infinitive: "kirpti", translation: "to cut", conjugation_class: 1,
    tenses: {
      present: { as: "kerpu", tu: "kerpi", jis: "kerpa", mes: "kerpame", jus: "kerpate", jie: "kerpa" },
      past: { as: "kirpau", tu: "kirpai", jis: "kirpo", mes: "kirpome", jus: "kirpote", jie: "kirpo" },
      past_freq: { as: "kirpdavau", tu: "kirpdavai", jis: "kirpdavo", mes: "kirpdavome", jus: "kirpdavote", jie: "kirpdavo" },
      future: { as: "kirpsiu", tu: "kirpsi", jis: "kirps", mes: "kirpsime", jus: "kirpsite", jie: "kirps" },
    },
  },
  {
    infinitive: "kirsti", translation: "to cross", conjugation_class: 1,
    tenses: {
      present: { as: "kertu", tu: "kerti", jis: "kerta", mes: "kertame", jus: "kertate", jie: "kerta" },
      past: { as: "kirtau", tu: "kirtai", jis: "kirto", mes: "kirtome", jus: "kirtote", jie: "kirto" },
      past_freq: { as: "kirsdavau", tu: "kirsdavai", jis: "kirsdavo", mes: "kirsdavome", jus: "kirsdavote", jie: "kirsdavo" },
      future: { as: "kirsiu", tu: "kirsi", jis: "kirs", mes: "kirsime", jus: "kirsite", jie: "kirs" },
    },
  },
  {
    infinitive: "klijuoti", translation: "to stick", conjugation_class: 1,
    tenses: {
      present: { as: "klijuoju", tu: "klijuoji", jis: "klijuoja", mes: "klijuojame", jus: "klijuojate", jie: "klijuoja" },
      past: { as: "klijavau", tu: "klijavai", jis: "klijavo", mes: "klijavome", jus: "klijavote", jie: "klijavo" },
      past_freq: { as: "klijuodavau", tu: "klijuodavai", jis: "klijuodavo", mes: "klijuodavome", jus: "klijuodavote", jie: "klijuodavo" },
      future: { as: "klijuosiu", tu: "klijuosi", jis: "klijuos", mes: "klijuosime", jus: "klijuosite", jie: "klijuos" },
    },
  },
  {
    infinitive: "kovoti", translation: "to fight", conjugation_class: 1,
    tenses: {
      present: { as: "kovoju", tu: "kovoji", jis: "kovoja", mes: "kovojame", jus: "kovojate", jie: "kovoja" },
      past: { as: "kovojau", tu: "kovojai", jis: "kovojo", mes: "kovojome", jus: "kovojote", jie: "kovojo" },
      past_freq: { as: "kovodavau", tu: "kovodavai", jis: "kovodavo", mes: "kovodavome", jus: "kovodavote", jie: "kovodavo" },
      future: { as: "kovosiu", tu: "kovosi", jis: "kovos", mes: "kovosime", jus: "kovosite", jie: "kovos" },
    },
  },
  {
    infinitive: "laikyti", translation: "to hold", conjugation_class: 3,
    tenses: {
      present: { as: "laikau", tu: "laikai", jis: "laiko", mes: "laikome", jus: "laikote", jie: "laiko" },
      past: { as: "laikiau", tu: "laikei", jis: "laikė", mes: "laikėme", jus: "laikėte", jie: "laikė" },
      past_freq: { as: "laikydavau", tu: "laikydavai", jis: "laikydavo", mes: "laikydavome", jus: "laikydavote", jie: "laikydavo" },
      future: { as: "laikysiu", tu: "laikysi", jis: "laikys", mes: "laikysime", jus: "laikysite", jie: "laikys" },
    },
  },
  {
    infinitive: "laimėti", translation: "to win", conjugation_class: 2,
    tenses: {
      present: { as: "laimiu", tu: "laimi", jis: "laimi", mes: "laimime", jus: "laimite", jie: "laimi" },
      past: { as: "laimėjau", tu: "laimėjai", jis: "laimėjo", mes: "laimėjome", jus: "laimėjote", jie: "laimėjo" },
      past_freq: { as: "laimėdavau", tu: "laimėdavai", jis: "laimėdavo", mes: "laimėdavome", jus: "laimėdavote", jie: "laimėdavo" },
      future: { as: "laimėsiu", tu: "laimėsi", jis: "laimės", mes: "laimėsime", jus: "laimėsite", jie: "laimės" },
    },
  },
  {
    infinitive: "leisti", translation: "to allow", conjugation_class: 1,
    tenses: {
      present: { as: "leidžiu", tu: "leidi", jis: "leidžia", mes: "leidžiame", jus: "leidžiate", jie: "leidžia" },
      past: { as: "leidau", tu: "leidai", jis: "leido", mes: "leidome", jus: "leidote", jie: "leido" },
      past_freq: { as: "leisdavau", tu: "leisdavai", jis: "leisdavo", mes: "leisdavome", jus: "leisdavote", jie: "leisdavo" },
      future: { as: "leisiu", tu: "leisi", jis: "leiss", mes: "leisime", jus: "leisite", jie: "leiss" },
    },
  },
  {
    infinitive: "lipti", translation: "to climb", conjugation_class: 1,
    tenses: {
      present: { as: "limpu", tu: "limpi", jis: "limpa", mes: "limpame", jus: "limpate", jie: "limpa" },
      past: { as: "lipau", tu: "lipai", jis: "lipo", mes: "lipome", jus: "lipote", jie: "lipo" },
      past_freq: { as: "lipdavau", tu: "lipdavai", jis: "lipdavo", mes: "lipdavome", jus: "lipdavote", jie: "lipdavo" },
      future: { as: "lipsiu", tu: "lipsi", jis: "lips", mes: "lipsime", jus: "lipsite", jie: "lips" },
    },
  },
  {
    infinitive: "manyti", translation: "to suppose", conjugation_class: 3,
    tenses: {
      present: { as: "manau", tu: "manai", jis: "mano", mes: "manome", jus: "manote", jie: "mano" },
      past: { as: "maniau", tu: "manei", jis: "manė", mes: "manėme", jus: "manėte", jie: "manė" },
      past_freq: { as: "manydavau", tu: "manydavai", jis: "manydavo", mes: "manydavome", jus: "manydavote", jie: "manydavo" },
      future: { as: "manysiu", tu: "manysi", jis: "manys", mes: "manysime", jus: "manysite", jie: "manys" },
    },
  },
  {
    infinitive: "mesti", translation: "to throw", conjugation_class: 1,
    tenses: {
      present: { as: "metu", tu: "meti", jis: "meta", mes: "metame", jus: "metate", jie: "meta" },
      past: { as: "mečiau", tu: "metei", jis: "metė", mes: "metėme", jus: "metėte", jie: "metė" },
      past_freq: { as: "mesdavau", tu: "mesdavai", jis: "mesdavo", mes: "mesdavome", jus: "mesdavote", jie: "mesdavo" },
      future: { as: "mesiu", tu: "mesi", jis: "mes", mes: "mesime", jus: "mesite", jie: "mes" },
    },
  },
  {
    infinitive: "mirti", translation: "to die", conjugation_class: 1,
    tenses: {
      present: { as: "mirštu", tu: "miršti", jis: "miršta", mes: "mirštame", jus: "mirštate", jie: "miršta" },
      past: { as: "miriau", tu: "mirei", jis: "mirė", mes: "mirėme", jus: "mirėte", jie: "mirė" },
      past_freq: { as: "mirdavau", tu: "mirdavai", jis: "mirdavo", mes: "mirdavome", jus: "mirdavote", jie: "mirdavo" },
      future: { as: "mirsiu", tu: "mirsi", jis: "mirs", mes: "mirsime", jus: "mirsite", jie: "mirs" },
    },
  },
  {
    infinitive: "naudoti", translation: "to use", conjugation_class: 1,
    tenses: {
      present: { as: "naudoju", tu: "naudoji", jis: "naudoja", mes: "naudojame", jus: "naudojate", jie: "naudoja" },
      past: { as: "naudojau", tu: "naudojai", jis: "naudojo", mes: "naudojome", jus: "naudojote", jie: "naudojo" },
      past_freq: { as: "naudodavau", tu: "naudodavai", jis: "naudodavo", mes: "naudodavome", jus: "naudodavote", jie: "naudodavo" },
      future: { as: "naudosiu", tu: "naudosi", jis: "naudos", mes: "naudosime", jus: "naudosite", jie: "naudos" },
    },
  },
  {
    infinitive: "nekęsti", translation: "to hate", conjugation_class: 1,
    tenses: {
      present: { as: "nekenčiu", tu: "nekenti", jis: "nekenčia", mes: "nekenčiame", jus: "nekenčiate", jie: "nekenčia" },
      past: { as: "nekenčiau", tu: "nekentei", jis: "nekentė", mes: "nekentėme", jus: "nekentėte", jie: "nekentė" },
      past_freq: { as: "nekęsdavau", tu: "nekęsdavai", jis: "nekęsdavo", mes: "nekęsdavome", jus: "nekęsdavote", jie: "nekęsdavo" },
      future: { as: "nekęsiu", tu: "nekęsi", jis: "nekęs", mes: "nekęsime", jus: "nekęsite", jie: "nekęs" },
    },
  },
  {
    infinitive: "nugriauti", translation: "to shrug", conjugation_class: 1,
    tenses: {
      present: { as: "nugriaunu", tu: "nugriauni", jis: "nugriauna", mes: "nugriauname", jus: "nugriaunate", jie: "nugriauna" },
      past: { as: "nugrioviau", tu: "nugriovei", jis: "nugriovė", mes: "nugriovėme", jus: "nugriovėte", jie: "nugriovė" },
      past_freq: { as: "nugriaudavau", tu: "nugriaudavai", jis: "nugriaudavo", mes: "nugriaudavome", jus: "nugriaudavote", jie: "nugriaudavo" },
      future: { as: "nugriausiu", tu: "nugriausi", jis: "nugriaus", mes: "nugriausime", jus: "nugriausite", jie: "nugriaus" },
    },
  },
  {
    infinitive: "nustatyti", translation: "to set", conjugation_class: 3,
    tenses: {
      present: { as: "nustatau", tu: "nustatai", jis: "nustato", mes: "nustatome", jus: "nustatote", jie: "nustato" },
      past: { as: "nustačiau", tu: "nustatei", jis: "nustatė", mes: "nustatėme", jus: "nustatėte", jie: "nustatė" },
      past_freq: { as: "nustatydavau", tu: "nustatydavai", jis: "nustatydavo", mes: "nustatydavome", jus: "nustatydavote", jie: "nustatydavo" },
      future: { as: "nustatysiu", tu: "nustatysi", jis: "nustatys", mes: "nustatysime", jus: "nustatysite", jie: "nustatys" },
    },
  },
  {
    infinitive: "nutikti", translation: "to happen", conjugation_class: 1,
    tenses: {
      present: { as: "nutinku", tu: "nutinki", jis: "nutinka", mes: "nutinkame", jus: "nutinkate", jie: "nutinka" },
      past: { as: "nutikau", tu: "nutikai", jis: "nutiko", mes: "nutikome", jus: "nutikote", jie: "nutiko" },
      past_freq: { as: "nutikdavau", tu: "nutikdavai", jis: "nutikdavo", mes: "nutikdavome", jus: "nutikdavote", jie: "nutikdavo" },
      future: { as: "nutiksiu", tu: "nutiksi", jis: "nutiks", mes: "nutiksime", jus: "nutiksite", jie: "nutiks" },
    },
  },
  {
    infinitive: "nutraukti", translation: "to break", conjugation_class: 1,
    tenses: {
      present: { as: "nutraukiu", tu: "nutrauki", jis: "nutraukia", mes: "nutraukiame", jus: "nutraukiate", jie: "nutraukia" },
      past: { as: "nutraukiau", tu: "nutraukei", jis: "nutraukė", mes: "nutraukėme", jus: "nutraukėte", jie: "nutraukė" },
      past_freq: { as: "nutraukdavau", tu: "nutraukdavai", jis: "nutraukdavo", mes: "nutraukdavome", jus: "nutraukdavote", jie: "nutraukdavo" },
      future: { as: "nutrauksiu", tu: "nutrauksi", jis: "nutrauks", mes: "nutrauksime", jus: "nutrauksite", jie: "nutrauks" },
    },
  },
  {
    infinitive: "nužudyti", translation: "to kill", conjugation_class: 3,
    tenses: {
      present: { as: "nužudau", tu: "nužudai", jis: "nužudo", mes: "nužudome", jus: "nužudote", jie: "nužudo" },
      past: { as: "nužudžiau", tu: "nužudei", jis: "nužudė", mes: "nužudėme", jus: "nužudėte", jie: "nužudė" },
      past_freq: { as: "nužudydavau", tu: "nužudydavai", jis: "nužudydavo", mes: "nužudydavome", jus: "nužudydavote", jie: "nužudydavo" },
      future: { as: "nužudysiu", tu: "nužudysi", jis: "nužudys", mes: "nužudysime", jus: "nužudysite", jie: "nužudys" },
    },
  },
  {
    infinitive: "paaiškinti", translation: "to explain", conjugation_class: 1,
    tenses: {
      present: { as: "paaiškinu", tu: "paaiškini", jis: "paaiškina", mes: "paaiškiname", jus: "paaiškinate", jie: "paaiškina" },
      past: { as: "paaiškinau", tu: "paaiškinai", jis: "paaiškino", mes: "paaiškinome", jus: "paaiškinote", jie: "paaiškino" },
      past_freq: { as: "paaiškindavau", tu: "paaiškindavai", jis: "paaiškindavo", mes: "paaiškindavome", jus: "paaiškindavote", jie: "paaiškindavo" },
      future: { as: "paaiškinsiu", tu: "paaiškinsi", jis: "paaiškins", mes: "paaiškinsime", jus: "paaiškinsite", jie: "paaiškins" },
    },
  },
  {
    infinitive: "pabaigti", translation: "to finish", conjugation_class: 1,
    tenses: {
      present: { as: "pabaigiu", tu: "pabaigi", jis: "pabaigia", mes: "pabaigiame", jus: "pabaigiate", jie: "pabaigia" },
      past: { as: "pabaigiau", tu: "pabaigei", jis: "pabaigė", mes: "pabaigėme", jus: "pabaigėte", jie: "pabaigė" },
      past_freq: { as: "pabaigdavau", tu: "pabaigdavai", jis: "pabaigdavo", mes: "pabaigdavome", jus: "pabaigdavote", jie: "pabaigdavo" },
      future: { as: "pabaigsiu", tu: "pabaigsi", jis: "pabaigs", mes: "pabaigsime", jus: "pabaigsite", jie: "pabaigs" },
    },
  },
  {
    infinitive: "pabučiuoti", translation: "to kiss", conjugation_class: 1,
    tenses: {
      present: { as: "pabučiuoju", tu: "pabučiuoji", jis: "pabučiuoja", mes: "pabučiuojame", jus: "pabučiuojate", jie: "pabučiuoja" },
      past: { as: "pabučiavau", tu: "pabučiavai", jis: "pabučiavo", mes: "pabučiavome", jus: "pabučiavote", jie: "pabučiavo" },
      past_freq: { as: "pabučiuodavau", tu: "pabučiuodavai", jis: "pabučiuodavo", mes: "pabučiuodavome", jus: "pabučiuodavote", jie: "pabučiuodavo" },
      future: { as: "pabučiuosiu", tu: "pabučiuosi", jis: "pabučiuos", mes: "pabučiuosime", jus: "pabučiuosite", jie: "pabučiuos" },
    },
  },
  {
    infinitive: "padengti", translation: "to bear", conjugation_class: 1,
    tenses: {
      present: { as: "padengiu", tu: "padengi", jis: "padengia", mes: "padengiame", jus: "padengiate", jie: "padengia" },
      past: { as: "padengiau", tu: "padengei", jis: "padengė", mes: "padengėme", jus: "padengėte", jie: "padengė" },
      past_freq: { as: "padengdavau", tu: "padengdavai", jis: "padengdavo", mes: "padengdavome", jus: "padengdavote", jie: "padengdavo" },
      future: { as: "padengsiu", tu: "padengsi", jis: "padengs", mes: "padengsime", jus: "padengsite", jie: "padengs" },
    },
  },
  {
    infinitive: "padėkoti", translation: "to thank", conjugation_class: 1,
    tenses: {
      present: { as: "padėkoju", tu: "padėkoji", jis: "padėkoja", mes: "padėkojame", jus: "padėkojate", jie: "padėkoja" },
      past: { as: "padėkojau", tu: "padėkojai", jis: "padėkojo", mes: "padėkojome", jus: "padėkojote", jie: "padėkojo" },
      past_freq: { as: "padėkodavau", tu: "padėkodavai", jis: "padėkodavo", mes: "padėkodavome", jus: "padėkodavote", jie: "padėkodavo" },
      future: { as: "padėkosiu", tu: "padėkosi", jis: "padėkos", mes: "padėkosime", jus: "padėkosite", jie: "padėkos" },
    },
  },
  {
    infinitive: "pagauti", translation: "to catch", conjugation_class: 1,
    tenses: {
      present: { as: "pagaunu", tu: "pagauni", jis: "pagauna", mes: "pagauname", jus: "pagaunate", jie: "pagauna" },
      past: { as: "pagavau", tu: "pagavai", jis: "pagavo", mes: "pagavome", jus: "pagavote", jie: "pagavo" },
      past_freq: { as: "pagaudavau", tu: "pagaudavai", jis: "pagaudavo", mes: "pagaudavome", jus: "pagaudavote", jie: "pagaudavo" },
      future: { as: "pagausiu", tu: "pagausi", jis: "pagaus", mes: "pagausime", jus: "pagausite", jie: "pagaus" },
    },
  },
  {
    infinitive: "paimti", translation: "to take", conjugation_class: 1,
    tenses: {
      present: { as: "paimu", tu: "paimi", jis: "paima", mes: "paimame", jus: "paimate", jie: "paima" },
      past: { as: "paėmiau", tu: "paėmei", jis: "paėmė", mes: "paėmėme", jus: "paėmėte", jie: "paėmė" },
      past_freq: { as: "paimdavau", tu: "paimdavai", jis: "paimdavo", mes: "paimdavome", jus: "paimdavote", jie: "paimdavo" },
      future: { as: "paimsiu", tu: "paimsi", jis: "paims", mes: "paimsime", jus: "paimsite", jie: "paims" },
    },
  },
  {
    infinitive: "pakartoti", translation: "to repeat", conjugation_class: 1,
    tenses: {
      present: { as: "pakartoju", tu: "pakartoji", jis: "pakartoja", mes: "pakartojame", jus: "pakartojate", jie: "pakartoja" },
      past: { as: "pakartojau", tu: "pakartojai", jis: "pakartojo", mes: "pakartojome", jus: "pakartojote", jie: "pakartojo" },
      past_freq: { as: "pakartodavau", tu: "pakartodavai", jis: "pakartodavo", mes: "pakartodavome", jus: "pakartodavote", jie: "pakartodavo" },
      future: { as: "pakartosiu", tu: "pakartosi", jis: "pakartos", mes: "pakartosime", jus: "pakartosite", jie: "pakartos" },
    },
  },
  {
    infinitive: "pakelti", translation: "to raise", conjugation_class: 1,
    tenses: {
      present: { as: "pakeliu", tu: "pakeli", jis: "pakelia", mes: "pakeliame", jus: "pakeliate", jie: "pakelia" },
      past: { as: "pakėliau", tu: "pakėlei", jis: "pakėlė", mes: "pakėlėme", jus: "pakėlėte", jie: "pakėlė" },
      past_freq: { as: "pakeldavau", tu: "pakeldavai", jis: "pakeldavo", mes: "pakeldavome", jus: "pakeldavote", jie: "pakeldavo" },
      future: { as: "pakelsiu", tu: "pakelsi", jis: "pakels", mes: "pakelsime", jus: "pakelsite", jie: "pakels" },
    },
  },
  {
    infinitive: "pakilti", translation: "to rise", conjugation_class: 1,
    tenses: {
      present: { as: "pakylu", tu: "pakyli", jis: "pakyla", mes: "pakylame", jus: "pakylate", jie: "pakyla" },
      past: { as: "pakilau", tu: "pakilai", jis: "pakilo", mes: "pakilome", jus: "pakilote", jie: "pakilo" },
      past_freq: { as: "pakildavau", tu: "pakildavai", jis: "pakildavo", mes: "pakildavome", jus: "pakildavote", jie: "pakildavo" },
      future: { as: "pakilsiu", tu: "pakilsi", jis: "pakils", mes: "pakilsime", jus: "pakilsite", jie: "pakils" },
    },
  },
  {
    infinitive: "palaukti", translation: "to wait", conjugation_class: 1,
    tenses: {
      present: { as: "palaukiu", tu: "palauki", jis: "palaukia", mes: "palaukiame", jus: "palaukiate", jie: "palaukia" },
      past: { as: "palaukiau", tu: "palaukei", jis: "palaukė", mes: "palaukėme", jus: "palaukėte", jie: "palaukė" },
      past_freq: { as: "palaukdavau", tu: "palaukdavai", jis: "palaukdavo", mes: "palaukdavome", jus: "palaukdavote", jie: "palaukdavo" },
      future: { as: "palauksiu", tu: "palauksi", jis: "palauks", mes: "palauksime", jus: "palauksite", jie: "palauks" },
    },
  },
  {
    infinitive: "paliesti", translation: "to touch", conjugation_class: 1,
    tenses: {
      present: { as: "paliečiu", tu: "palieti", jis: "paliečia", mes: "paliečiame", jus: "paliečiate", jie: "paliečia" },
      past: { as: "paliečiau", tu: "palietei", jis: "palietė", mes: "palietėme", jus: "palietėte", jie: "palietė" },
      past_freq: { as: "paliesdavau", tu: "paliesdavai", jis: "paliesdavo", mes: "paliesdavome", jus: "paliesdavote", jie: "paliesdavo" },
      future: { as: "paliesiu", tu: "paliesi", jis: "palies", mes: "paliesime", jus: "paliesite", jie: "palies" },
    },
  },
  {
    infinitive: "palikti", translation: "to leave", conjugation_class: 1,
    tenses: {
      present: { as: "palieku", tu: "palieki", jis: "palieka", mes: "paliekame", jus: "paliekate", jie: "palieka" },
      past: { as: "palikau", tu: "palikai", jis: "paliko", mes: "palikome", jus: "palikote", jie: "paliko" },
      past_freq: { as: "palikdavau", tu: "palikdavai", jis: "palikdavo", mes: "palikdavome", jus: "palikdavote", jie: "palikdavo" },
      future: { as: "paliksiu", tu: "paliksi", jis: "paliks", mes: "paliksime", jus: "paliksite", jie: "paliks" },
    },
  },
  {
    infinitive: "palinkėti", translation: "to wish", conjugation_class: 2,
    tenses: {
      present: { as: "palinkiu", tu: "palinki", jis: "palinki", mes: "palinkime", jus: "palinkite", jie: "palinki" },
      past: { as: "palinkėjau", tu: "palinkėjai", jis: "palinkėjo", mes: "palinkėjome", jus: "palinkėjote", jie: "palinkėjo" },
      past_freq: { as: "palinkėdavau", tu: "palinkėdavai", jis: "palinkėdavo", mes: "palinkėdavome", jus: "palinkėdavote", jie: "palinkėdavo" },
      future: { as: "palinkėsiu", tu: "palinkėsi", jis: "palinkės", mes: "palinkėsime", jus: "palinkėsite", jie: "palinkės" },
    },
  },
  {
    infinitive: "parduoti", translation: "to sell", conjugation_class: 1,
    tenses: {
      present: { as: "parduodu", tu: "parduodi", jis: "parduoda", mes: "parduodame", jus: "parduodate", jie: "parduoda" },
      past: { as: "pardaviau", tu: "pardavei", jis: "pardavė", mes: "pardavėme", jus: "pardavėte", jie: "pardavė" },
      past_freq: { as: "parduodavau", tu: "parduodavai", jis: "parduodavo", mes: "parduodavome", jus: "parduodavote", jie: "parduodavo" },
      future: { as: "parduosiu", tu: "parduosi", jis: "parduos", mes: "parduosime", jus: "parduosite", jie: "parduos" },
    },
  },
  {
    infinitive: "parodyti", translation: "to show", conjugation_class: 3,
    tenses: {
      present: { as: "parodau", tu: "parodai", jis: "parodo", mes: "parodome", jus: "parodote", jie: "parodo" },
      past: { as: "parodžiau", tu: "parodei", jis: "parodė", mes: "parodėme", jus: "parodėte", jie: "parodė" },
      past_freq: { as: "parodydavau", tu: "parodydavai", jis: "parodydavo", mes: "parodydavome", jus: "parodydavote", jie: "parodydavo" },
      future: { as: "parodysiu", tu: "parodysi", jis: "parodys", mes: "parodysime", jus: "parodysite", jie: "parodys" },
    },
  },
  {
    infinitive: "pasakyti", translation: "to tell", conjugation_class: 3,
    tenses: {
      present: { as: "pasakau", tu: "pasakai", jis: "pasako", mes: "pasakome", jus: "pasakote", jie: "pasako" },
      past: { as: "pasakiau", tu: "pasakei", jis: "pasakė", mes: "pasakėme", jus: "pasakėte", jie: "pasakė" },
      past_freq: { as: "pasakydavau", tu: "pasakydavai", jis: "pasakydavo", mes: "pasakydavome", jus: "pasakydavote", jie: "pasakydavo" },
      future: { as: "pasakysiu", tu: "pasakysi", jis: "pasakys", mes: "pasakysime", jus: "pasakysite", jie: "pasakys" },
    },
  },
  {
    infinitive: "pasiduoti", translation: "to nod", conjugation_class: 1,
    tenses: {
      present: { as: "pasiduodu", tu: "pasiduodi", jis: "pasiduoda", mes: "pasiduodame", jus: "pasiduodate", jie: "pasiduoda" },
      past: { as: "pasidaviau", tu: "pasidavei", jis: "pasidavė", mes: "pasidavėme", jus: "pasidavėte", jie: "pasidavė" },
      past_freq: { as: "pasiduodavau", tu: "pasiduodavai", jis: "pasiduodavo", mes: "pasiduodavome", jus: "pasiduodavote", jie: "pasiduodavo" },
      future: { as: "pasiduosiu", tu: "pasiduosi", jis: "pasiduos", mes: "pasiduosime", jus: "pasiduosite", jie: "pasiduos" },
    },
  },
  {
    infinitive: "paskambinti", translation: "to call", conjugation_class: 1,
    tenses: {
      present: { as: "paskambinu", tu: "paskambini", jis: "paskambina", mes: "paskambiname", jus: "paskambinate", jie: "paskambina" },
      past: { as: "paskambinau", tu: "paskambinai", jis: "paskambino", mes: "paskambinome", jus: "paskambinote", jie: "paskambino" },
      past_freq: { as: "paskambindavau", tu: "paskambindavai", jis: "paskambindavo", mes: "paskambindavome", jus: "paskambindavote", jie: "paskambindavo" },
      future: { as: "paskambinsiu", tu: "paskambinsi", jis: "paskambins", mes: "paskambinsime", jus: "paskambinsite", jie: "paskambins" },
    },
  },
  {
    infinitive: "pastebėti", translation: "to notice", conjugation_class: 2,
    tenses: {
      present: { as: "pastebiu", tu: "pastebi", jis: "pastebi", mes: "pastebime", jus: "pastebite", jie: "pastebi" },
      past: { as: "pastebėjau", tu: "pastebėjai", jis: "pastebėjo", mes: "pastebėjome", jus: "pastebėjote", jie: "pastebėjo" },
      past_freq: { as: "pastebėdavau", tu: "pastebėdavai", jis: "pastebėdavo", mes: "pastebėdavome", jus: "pastebėdavote", jie: "pastebėdavo" },
      future: { as: "pastebėsiu", tu: "pastebėsi", jis: "pastebės", mes: "pastebėsime", jus: "pastebėsite", jie: "pastebės" },
    },
  },
  {
    infinitive: "pasukti", translation: "to turn", conjugation_class: 1,
    tenses: {
      present: { as: "pasuku", tu: "pasuki", jis: "pasuka", mes: "pasukame", jus: "pasukate", jie: "pasuka" },
      past: { as: "pasukau", tu: "pasukai", jis: "pasuko", mes: "pasukome", jus: "pasukote", jie: "pasuko" },
      past_freq: { as: "pasukdavau", tu: "pasukdavai", jis: "pasukdavo", mes: "pasukdavome", jus: "pasukdavote", jie: "pasukdavo" },
      future: { as: "pasuksiu", tu: "pasuksi", jis: "pasuks", mes: "pasuksime", jus: "pasuksite", jie: "pasuks" },
    },
  },
  {
    infinitive: "patraukti", translation: "to grab", conjugation_class: 1,
    tenses: {
      present: { as: "patraukiu", tu: "patrauki", jis: "patraukia", mes: "patraukiame", jus: "patraukiate", jie: "patraukia" },
      past: { as: "patraukiau", tu: "patraukei", jis: "patraukė", mes: "patraukėme", jus: "patraukėte", jie: "patraukė" },
      past_freq: { as: "patraukdavau", tu: "patraukdavai", jis: "patraukdavo", mes: "patraukdavome", jus: "patraukdavote", jie: "patraukdavo" },
      future: { as: "patrauksiu", tu: "patrauksi", jis: "patrauks", mes: "patrauksime", jus: "patrauksite", jie: "patrauks" },
    },
  },
  {
    infinitive: "patvirtinti", translation: "to claim", conjugation_class: 1,
    tenses: {
      present: { as: "patvirtinu", tu: "patvirtini", jis: "patvirtina", mes: "patvirtiname", jus: "patvirtinate", jie: "patvirtina" },
      past: { as: "patvirtinau", tu: "patvirtinai", jis: "patvirtino", mes: "patvirtinome", jus: "patvirtinote", jie: "patvirtino" },
      past_freq: { as: "patvirtindavau", tu: "patvirtindavai", jis: "patvirtindavo", mes: "patvirtindavome", jus: "patvirtindavote", jie: "patvirtindavo" },
      future: { as: "patvirtinsiu", tu: "patvirtinsi", jis: "patvirtins", mes: "patvirtinsime", jus: "patvirtinsite", jie: "patvirtins" },
    },
  },
  {
    infinitive: "pašalinti", translation: "to remove", conjugation_class: 1,
    tenses: {
      present: { as: "pašalinu", tu: "pašalini", jis: "pašalina", mes: "pašaliname", jus: "pašalinate", jie: "pašalina" },
      past: { as: "pašalinau", tu: "pašalinai", jis: "pašalino", mes: "pašalinome", jus: "pašalinote", jie: "pašalino" },
      past_freq: { as: "pašalindavau", tu: "pašalindavai", jis: "pašalindavo", mes: "pašalindavome", jus: "pašalindavote", jie: "pašalindavo" },
      future: { as: "pašalinsiu", tu: "pašalinsi", jis: "pašalins", mes: "pašalinsime", jus: "pašalinsite", jie: "pašalins" },
    },
  },
  {
    infinitive: "pažadėti", translation: "to promise", conjugation_class: 1,
    tenses: {
      present: { as: "pažadu", tu: "pažadi", jis: "pažada", mes: "pažadame", jus: "pažadate", jie: "pažada" },
      past: { as: "pažadėjau", tu: "pažadėjai", jis: "pažadėjo", mes: "pažadėjome", jus: "pažadėjote", jie: "pažadėjo" },
      past_freq: { as: "pažadėdavau", tu: "pažadėdavai", jis: "pažadėdavo", mes: "pažadėdavome", jus: "pažadėdavote", jie: "pažadėdavo" },
      future: { as: "pažadėsiu", tu: "pažadėsi", jis: "pažadės", mes: "pažadėsime", jus: "pažadėsite", jie: "pažadės" },
    },
  },
  {
    infinitive: "plauti", translation: "to wash", conjugation_class: 1,
    tenses: {
      present: { as: "plaunu", tu: "plauni", jis: "plauna", mes: "plauname", jus: "plaunate", jie: "plauna" },
      past: { as: "ploviau", tu: "plovei", jis: "plovė", mes: "plovėme", jus: "plovėte", jie: "plovė" },
      past_freq: { as: "plaudavau", tu: "plaudavai", jis: "plaudavo", mes: "plaudavome", jus: "plaudavote", jie: "plaudavo" },
      future: { as: "plausiu", tu: "plausi", jis: "plaus", mes: "plausime", jus: "plausite", jie: "plaus" },
    },
  },
  {
    infinitive: "pradingti", translation: "to disappear", conjugation_class: 1,
    tenses: {
      present: { as: "pradingstu", tu: "pradingsti", jis: "pradingsta", mes: "pradingstame", jus: "pradingstate", jie: "pradingsta" },
      past: { as: "pradingau", tu: "pradingai", jis: "pradingo", mes: "pradingome", jus: "pradingote", jie: "pradingo" },
      past_freq: { as: "pradingdavau", tu: "pradingdavai", jis: "pradingdavo", mes: "pradingdavome", jus: "pradingdavote", jie: "pradingdavo" },
      future: { as: "pradingsiu", tu: "pradingsi", jis: "pradings", mes: "pradingsime", jus: "pradingsite", jie: "pradings" },
    },
  },
  {
    infinitive: "praeiti", translation: "to pass", conjugation_class: 1,
    tenses: {
      present: { as: "praeinu", tu: "praeini", jis: "praeina", mes: "praeiname", jus: "praeinate", jie: "praeina" },
      past: { as: "praėjau", tu: "praėjai", jis: "praėjo", mes: "praėjome", jus: "praėjote", jie: "praėjo" },
      past_freq: { as: "praeidavau", tu: "praeidavai", jis: "praeidavo", mes: "praeidavome", jus: "praeidavote", jie: "praeidavo" },
      future: { as: "praeisiu", tu: "praeisi", jis: "praeis", mes: "praeisime", jus: "praeisite", jie: "praeis" },
    },
  },
  {
    infinitive: "prarasti", translation: "to lose", conjugation_class: 1,
    tenses: {
      present: { as: "prarandu", tu: "prarandi", jis: "praranda", mes: "prarandame", jus: "prarandate", jie: "praranda" },
      past: { as: "praradau", tu: "praradai", jis: "prarado", mes: "praradome", jus: "praradote", jie: "prarado" },
      past_freq: { as: "prarasdavau", tu: "prarasdavai", jis: "prarasdavo", mes: "prarasdavome", jus: "prarasdavote", jie: "prarasdavo" },
      future: { as: "prarasiu", tu: "prarasi", jis: "praras", mes: "prarasime", jus: "prarasite", jie: "praras" },
    },
  },
  {
    infinitive: "pridėti", translation: "to add", conjugation_class: 1,
    tenses: {
      present: { as: "pridedu", tu: "pridedi", jis: "prideda", mes: "pridedame", jus: "pridedate", jie: "prideda" },
      past: { as: "pridėjau", tu: "pridėjai", jis: "pridėjo", mes: "pridėjome", jus: "pridėjote", jie: "pridėjo" },
      past_freq: { as: "pridėdavau", tu: "pridėdavai", jis: "pridėdavo", mes: "pridėdavome", jus: "pridėdavote", jie: "pridėdavo" },
      future: { as: "pridėsiu", tu: "pridėsi", jis: "pridės", mes: "pridėsime", jus: "pridėsite", jie: "pridės" },
    },
  },
  {
    infinitive: "priklausyti", translation: "to belong", conjugation_class: 3,
    tenses: {
      present: { as: "priklausau", tu: "priklausai", jis: "priklauso", mes: "priklausome", jus: "priklausote", jie: "priklauso" },
      past: { as: "priklausiau", tu: "priklausei", jis: "priklausė", mes: "priklausėme", jus: "priklausėte", jie: "priklausė" },
      past_freq: { as: "priklausydavau", tu: "priklausydavai", jis: "priklausydavo", mes: "priklausydavome", jus: "priklausydavote", jie: "priklausydavo" },
      future: { as: "priklausysiu", tu: "priklausysi", jis: "priklausys", mes: "priklausysime", jus: "priklausysite", jie: "priklausys" },
    },
  },
  {
    infinitive: "priminti", translation: "to remind", conjugation_class: 1,
    tenses: {
      present: { as: "priminu", tu: "primini", jis: "primina", mes: "priminame", jus: "priminate", jie: "primina" },
      past: { as: "primyniau", tu: "primynei", jis: "primynė", mes: "primynėme", jus: "primynėte", jie: "primynė" },
      past_freq: { as: "primindavau", tu: "primindavai", jis: "primindavo", mes: "primindavome", jus: "primindavote", jie: "primindavo" },
      future: { as: "priminsiu", tu: "priminsi", jis: "primins", mes: "priminsime", jus: "priminsite", jie: "primins" },
    },
  },
  {
    infinitive: "pripažinti", translation: "to admit", conjugation_class: 1,
    tenses: {
      present: { as: "pripažįstu", tu: "pripažįsti", jis: "pripažįsta", mes: "pripažįstame", jus: "pripažįstate", jie: "pripažįsta" },
      past: { as: "pripažinau", tu: "pripažinai", jis: "pripažino", mes: "pripažinome", jus: "pripažinote", jie: "pripažino" },
      past_freq: { as: "pripažindavau", tu: "pripažindavai", jis: "pripažindavo", mes: "pripažindavome", jus: "pripažindavote", jie: "pripažindavo" },
      future: { as: "pripažinsiu", tu: "pripažinsi", jis: "pripažins", mes: "pripažinsime", jus: "pripažinsite", jie: "pripažins" },
    },
  },
  {
    infinitive: "reikalauti", translation: "to demand", conjugation_class: 1,
    tenses: {
      present: { as: "reikalauju", tu: "reikalauji", jis: "reikalauja", mes: "reikalaujame", jus: "reikalaujate", jie: "reikalauja" },
      past: { as: "reikalavau", tu: "reikalavai", jis: "reikalavo", mes: "reikalavome", jus: "reikalavote", jie: "reikalavo" },
      past_freq: { as: "reikalaudavau", tu: "reikalaudavai", jis: "reikalaudavo", mes: "reikalaudavome", jus: "reikalaudavote", jie: "reikalaudavo" },
      future: { as: "reikalausiu", tu: "reikalausi", jis: "reikalaus", mes: "reikalausime", jus: "reikalausite", jie: "reikalaus" },
    },
  },
  {
    infinitive: "reikėti", translation: "to need", conjugation_class: 1,
    tenses: {
      present: { as: "reikiu", tu: "reiki", jis: "reikia", mes: "reikiame", jus: "reikiate", jie: "reikia" },
      past: { as: "reikėjau", tu: "reikėjai", jis: "reikėjo", mes: "reikėjome", jus: "reikėjote", jie: "reikėjo" },
      past_freq: { as: "reikėdavau", tu: "reikėdavai", jis: "reikėdavo", mes: "reikėdavome", jus: "reikėdavote", jie: "reikėdavo" },
      future: { as: "reikėsiu", tu: "reikėsi", jis: "reikės", mes: "reikėsime", jus: "reikėsite", jie: "reikės" },
    },
  },
  {
    infinitive: "rinkti", translation: "to gather", conjugation_class: 1,
    tenses: {
      present: { as: "renku", tu: "renki", jis: "renka", mes: "renkame", jus: "renkate", jie: "renka" },
      past: { as: "rinkau", tu: "rinkai", jis: "rinko", mes: "rinkome", jus: "rinkote", jie: "rinko" },
      past_freq: { as: "rinkdavau", tu: "rinkdavai", jis: "rinkdavo", mes: "rinkdavome", jus: "rinkdavote", jie: "rinkdavo" },
      future: { as: "rinksiu", tu: "rinksi", jis: "rinks", mes: "rinksime", jus: "rinksite", jie: "rinks" },
    },
  },
  {
    infinitive: "rėkti", translation: "to scream", conjugation_class: 1,
    tenses: {
      present: { as: "rėkiu", tu: "rėki", jis: "rėkia", mes: "rėkiame", jus: "rėkiate", jie: "rėkia" },
      past: { as: "rėkiau", tu: "rėkei", jis: "rėkė", mes: "rėkėme", jus: "rėkėte", jie: "rėkė" },
      past_freq: { as: "rėkdavau", tu: "rėkdavai", jis: "rėkdavo", mes: "rėkdavome", jus: "rėkdavote", jie: "rėkdavo" },
      future: { as: "rėksiu", tu: "rėksi", jis: "rėks", mes: "rėksime", jus: "rėksite", jie: "rėks" },
    },
  },
  {
    infinitive: "rūkyti", translation: "to smoke", conjugation_class: 3,
    tenses: {
      present: { as: "rūkau", tu: "rūkai", jis: "rūko", mes: "rūkome", jus: "rūkote", jie: "rūko" },
      past: { as: "rūkiau", tu: "rūkei", jis: "rūkė", mes: "rūkėme", jus: "rūkėte", jie: "rūkė" },
      past_freq: { as: "rūkydavau", tu: "rūkydavai", jis: "rūkydavo", mes: "rūkydavome", jus: "rūkydavote", jie: "rūkydavo" },
      future: { as: "rūkysiu", tu: "rūkysi", jis: "rūkys", mes: "rūkysime", jus: "rūkysite", jie: "rūkys" },
    },
  },
  {
    infinitive: "sekti", translation: "to follow", conjugation_class: 1,
    tenses: {
      present: { as: "seku", tu: "seki", jis: "seka", mes: "sekame", jus: "sekate", jie: "seka" },
      past: { as: "sekiau", tu: "sekei", jis: "sekė", mes: "sekėme", jus: "sekėte", jie: "sekė" },
      past_freq: { as: "sekdavau", tu: "sekdavai", jis: "sekdavo", mes: "sekdavome", jus: "sekdavote", jie: "sekdavo" },
      future: { as: "seksiu", tu: "seksi", jis: "seks", mes: "seksime", jus: "seksite", jie: "seks" },
    },
  },
  {
    infinitive: "siūlyti", translation: "to offer", conjugation_class: 3,
    tenses: {
      present: { as: "siūlau", tu: "siūlai", jis: "siūlo", mes: "siūlome", jus: "siūlote", jie: "siūlo" },
      past: { as: "siūliau", tu: "siūlei", jis: "siūlė", mes: "siūlėme", jus: "siūlėte", jie: "siūlė" },
      past_freq: { as: "siūlydavau", tu: "siūlydavai", jis: "siūlydavo", mes: "siūlydavome", jus: "siūlydavote", jie: "siūlydavo" },
      future: { as: "siūlysiu", tu: "siūlysi", jis: "siūlys", mes: "siūlysime", jus: "siūlysite", jie: "siūlys" },
    },
  },
  {
    infinitive: "siųsti", translation: "to send", conjugation_class: 1,
    tenses: {
      present: { as: "siunčiu", tu: "siunti", jis: "siunčia", mes: "siunčiame", jus: "siunčiate", jie: "siunčia" },
      past: { as: "siunčiau", tu: "siuntei", jis: "siuntė", mes: "siuntėme", jus: "siuntėte", jie: "siuntė" },
      past_freq: { as: "siųsdavau", tu: "siųsdavai", jis: "siųsdavo", mes: "siųsdavome", jus: "siųsdavote", jie: "siųsdavo" },
      future: { as: "siųsiu", tu: "siųsi", jis: "siųs", mes: "siųsime", jus: "siųsite", jie: "siųs" },
    },
  },
  {
    infinitive: "skaičiuoti", translation: "to count", conjugation_class: 1,
    tenses: {
      present: { as: "skaičiuoju", tu: "skaičiuoji", jis: "skaičiuoja", mes: "skaičiuojame", jus: "skaičiuojate", jie: "skaičiuoja" },
      past: { as: "skaičiavau", tu: "skaičiavai", jis: "skaičiavo", mes: "skaičiavome", jus: "skaičiavote", jie: "skaičiavo" },
      past_freq: { as: "skaičiuodavau", tu: "skaičiuodavai", jis: "skaičiuodavo", mes: "skaičiuodavome", jus: "skaičiuodavote", jie: "skaičiuodavo" },
      future: { as: "skaičiuosiu", tu: "skaičiuosi", jis: "skaičiuos", mes: "skaičiuosime", jus: "skaičiuosite", jie: "skaičiuos" },
    },
  },
  {
    infinitive: "skristi", translation: "to fly", conjugation_class: 1,
    tenses: {
      present: { as: "skrendu", tu: "skrendi", jis: "skrenda", mes: "skrendame", jus: "skrendate", jie: "skrenda" },
      past: { as: "skridau", tu: "skridai", jis: "skrido", mes: "skridome", jus: "skridote", jie: "skrido" },
      past_freq: { as: "skrisdavau", tu: "skrisdavai", jis: "skrisdavo", mes: "skrisdavome", jus: "skrisdavote", jie: "skrisdavo" },
      future: { as: "skrisiu", tu: "skrisi", jis: "skriss", mes: "skrisime", jus: "skrisite", jie: "skriss" },
    },
  },
  {
    infinitive: "skubėti", translation: "to rush", conjugation_class: 1,
    tenses: {
      present: { as: "skubu", tu: "skubi", jis: "skuba", mes: "skubame", jus: "skubate", jie: "skuba" },
      past: { as: "skubėjau", tu: "skubėjai", jis: "skubėjo", mes: "skubėjome", jus: "skubėjote", jie: "skubėjo" },
      past_freq: { as: "skubėdavau", tu: "skubėdavai", jis: "skubėdavo", mes: "skubėdavome", jus: "skubėdavote", jie: "skubėdavo" },
      future: { as: "skubėsiu", tu: "skubėsi", jis: "skubės", mes: "skubėsime", jus: "skubėsite", jie: "skubės" },
    },
  },
  {
    infinitive: "skęsti", translation: "to sink", conjugation_class: 1,
    tenses: {
      present: { as: "skęstu", tu: "skęsti", jis: "skęsta", mes: "skęstame", jus: "skęstate", jie: "skęsta" },
      past: { as: "skendau", tu: "skendai", jis: "skendo", mes: "skendome", jus: "skendote", jie: "skendo" },
      past_freq: { as: "skęsdavau", tu: "skęsdavai", jis: "skęsdavo", mes: "skęsdavome", jus: "skęsdavote", jie: "skęsdavo" },
      future: { as: "skęsiu", tu: "skęsi", jis: "skęs", mes: "skęsime", jus: "skęsite", jie: "skęs" },
    },
  },
  {
    infinitive: "smogti", translation: "to hit", conjugation_class: 1,
    tenses: {
      present: { as: "smogiu", tu: "smogi", jis: "smogia", mes: "smogiame", jus: "smogiate", jie: "smogia" },
      past: { as: "smogiau", tu: "smogei", jis: "smogė", mes: "smogėme", jus: "smogėte", jie: "smogė" },
      past_freq: { as: "smogdavau", tu: "smogdavai", jis: "smogdavo", mes: "smogdavome", jus: "smogdavote", jie: "smogdavo" },
      future: { as: "smogsiu", tu: "smogsi", jis: "smogs", mes: "smogsime", jus: "smogsite", jie: "smogs" },
    },
  },
  {
    infinitive: "sprogti", translation: "to burst", conjugation_class: 1,
    tenses: {
      present: { as: "sprogstu", tu: "sprogsti", jis: "sprogsta", mes: "sprogstame", jus: "sprogstate", jie: "sprogsta" },
      past: { as: "sprogau", tu: "sprogai", jis: "sprogo", mes: "sprogome", jus: "sprogote", jie: "sprogo" },
      past_freq: { as: "sprogdavau", tu: "sprogdavai", jis: "sprogdavo", mes: "sprogdavome", jus: "sprogdavote", jie: "sprogdavo" },
      future: { as: "sprogsiu", tu: "sprogsi", jis: "sprogs", mes: "sprogsime", jus: "sprogsite", jie: "sprogs" },
    },
  },
  {
    infinitive: "spėti", translation: "to guess", conjugation_class: 1,
    tenses: {
      present: { as: "spėju", tu: "spėji", jis: "spėja", mes: "spėjame", jus: "spėjate", jie: "spėja" },
      past: { as: "spėjau", tu: "spėjai", jis: "spėjo", mes: "spėjome", jus: "spėjote", jie: "spėjo" },
      past_freq: { as: "spėdavau", tu: "spėdavai", jis: "spėdavo", mes: "spėdavome", jus: "spėdavote", jie: "spėdavo" },
      future: { as: "spėsiu", tu: "spėsi", jis: "spės", mes: "spėsime", jus: "spėsite", jie: "spės" },
    },
  },
  {
    infinitive: "stovėti", translation: "to stand", conjugation_class: 2,
    tenses: {
      present: { as: "stoviu", tu: "stovi", jis: "stovi", mes: "stovime", jus: "stovite", jie: "stovi" },
      past: { as: "stovėjau", tu: "stovėjai", jis: "stovėjo", mes: "stovėjome", jus: "stovėjote", jie: "stovėjo" },
      past_freq: { as: "stovėdavau", tu: "stovėdavai", jis: "stovėdavo", mes: "stovėdavome", jus: "stovėdavote", jie: "stovėdavo" },
      future: { as: "stovėsiu", tu: "stovėsi", jis: "stovės", mes: "stovėsime", jus: "stovėsite", jie: "stovės" },
    },
  },
  {
    infinitive: "sukelti", translation: "to cause", conjugation_class: 1,
    tenses: {
      present: { as: "sukeliu", tu: "sukeli", jis: "sukelia", mes: "sukeliame", jus: "sukeliate", jie: "sukelia" },
      past: { as: "sukėliau", tu: "sukėlei", jis: "sukėlė", mes: "sukėlėme", jus: "sukėlėte", jie: "sukėlė" },
      past_freq: { as: "sukeldavau", tu: "sukeldavai", jis: "sukeldavo", mes: "sukeldavome", jus: "sukeldavote", jie: "sukeldavo" },
      future: { as: "sukelsiu", tu: "sukelsi", jis: "sukels", mes: "sukelsime", jus: "sukelsite", jie: "sukels" },
    },
  },
  {
    infinitive: "sukti", translation: "to roll", conjugation_class: 1,
    tenses: {
      present: { as: "suku", tu: "suki", jis: "suka", mes: "sukame", jus: "sukate", jie: "suka" },
      past: { as: "sukau", tu: "sukai", jis: "suko", mes: "sukome", jus: "sukote", jie: "suko" },
      past_freq: { as: "sukdavau", tu: "sukdavai", jis: "sukdavo", mes: "sukdavome", jus: "sukdavote", jie: "sukdavo" },
      future: { as: "suksiu", tu: "suksi", jis: "suks", mes: "suksime", jus: "suksite", jie: "suks" },
    },
  },
  {
    infinitive: "susitikti", translation: "to meet", conjugation_class: 1,
    tenses: {
      present: { as: "susitinku", tu: "susitinki", jis: "susitinka", mes: "susitinkame", jus: "susitinkate", jie: "susitinka" },
      past: { as: "susitikau", tu: "susitikai", jis: "susitiko", mes: "susitikome", jus: "susitikote", jie: "susitiko" },
      past_freq: { as: "susitikdavau", tu: "susitikdavai", jis: "susitikdavo", mes: "susitikdavome", jus: "susitikdavote", jie: "susitikdavo" },
      future: { as: "susitiksiu", tu: "susitiksi", jis: "susitiks", mes: "susitiksime", jus: "susitiksite", jie: "susitiks" },
    },
  },
  {
    infinitive: "sustoti", translation: "to stop", conjugation_class: 1,
    tenses: {
      present: { as: "sustoju", tu: "sustoji", jis: "sustoja", mes: "sustojame", jus: "sustojate", jie: "sustoja" },
      past: { as: "sustojau", tu: "sustojai", jis: "sustojo", mes: "sustojome", jus: "sustojote", jie: "sustojo" },
      past_freq: { as: "sustodavau", tu: "sustodavai", jis: "sustodavo", mes: "sustodavome", jus: "sustodavote", jie: "sustodavo" },
      future: { as: "sustosiu", tu: "sustosi", jis: "sustos", mes: "sustosime", jus: "sustosite", jie: "sustos" },
    },
  },
  {
    infinitive: "sutaisyti", translation: "to fix", conjugation_class: 3,
    tenses: {
      present: { as: "sutaisau", tu: "sutaisai", jis: "sutaiso", mes: "sutaisome", jus: "sutaisote", jie: "sutaiso" },
      past: { as: "sutaisiau", tu: "sutaisei", jis: "sutaisė", mes: "sutaisėme", jus: "sutaisėte", jie: "sutaisė" },
      past_freq: { as: "sutaisydavau", tu: "sutaisydavai", jis: "sutaisydavo", mes: "sutaisydavome", jus: "sutaisydavote", jie: "sutaisydavo" },
      future: { as: "sutaisysiu", tu: "sutaisysi", jis: "sutaisys", mes: "sutaisysime", jus: "sutaisysite", jie: "sutaisys" },
    },
  },
  {
    infinitive: "sutikti", translation: "to accept", conjugation_class: 1,
    tenses: {
      present: { as: "sutinku", tu: "sutinki", jis: "sutinka", mes: "sutinkame", jus: "sutinkate", jie: "sutinka" },
      past: { as: "sutikau", tu: "sutikai", jis: "sutiko", mes: "sutikome", jus: "sutikote", jie: "sutiko" },
      past_freq: { as: "sutikdavau", tu: "sutikdavai", jis: "sutikdavo", mes: "sutikdavome", jus: "sutikdavote", jie: "sutikdavo" },
      future: { as: "sutiksiu", tu: "sutiksi", jis: "sutiks", mes: "sutiksime", jus: "sutiksite", jie: "sutiks" },
    },
  },
  {
    infinitive: "suvokti", translation: "to realize", conjugation_class: 1,
    tenses: {
      present: { as: "suvokiu", tu: "suvoki", jis: "suvokia", mes: "suvokiame", jus: "suvokiate", jie: "suvokia" },
      past: { as: "suvokiau", tu: "suvokei", jis: "suvokė", mes: "suvokėme", jus: "suvokėte", jie: "suvokė" },
      past_freq: { as: "suvokdavau", tu: "suvokdavai", jis: "suvokdavo", mes: "suvokdavome", jus: "suvokdavote", jie: "suvokdavo" },
      future: { as: "suvoksiu", tu: "suvoksi", jis: "suvoks", mes: "suvoksime", jus: "suvoksite", jie: "suvoks" },
    },
  },
  {
    infinitive: "tapti", translation: "to become", conjugation_class: 1,
    tenses: {
      present: { as: "tampu", tu: "tampi", jis: "tampa", mes: "tampame", jus: "tampate", jie: "tampa" },
      past: { as: "tapau", tu: "tapai", jis: "tapo", mes: "tapome", jus: "tapote", jie: "tapo" },
      past_freq: { as: "tapdavau", tu: "tapdavai", jis: "tapdavo", mes: "tapdavome", jus: "tapdavote", jie: "tapdavo" },
      future: { as: "tapsiu", tu: "tapsi", jis: "taps", mes: "tapsime", jus: "tapsite", jie: "taps" },
    },
  },
  {
    infinitive: "teikti", translation: "to provide", conjugation_class: 1,
    tenses: {
      present: { as: "teikiu", tu: "teiki", jis: "teikia", mes: "teikiame", jus: "teikiate", jie: "teikia" },
      past: { as: "teikiau", tu: "teikei", jis: "teikė", mes: "teikėme", jus: "teikėte", jie: "teikė" },
      past_freq: { as: "teikdavau", tu: "teikdavai", jis: "teikdavo", mes: "teikdavome", jus: "teikdavote", jie: "teikdavo" },
      future: { as: "teiksiu", tu: "teiksi", jis: "teiks", mes: "teiksime", jus: "teiksite", jie: "teiks" },
    },
  },
  {
    infinitive: "tikti", translation: "to fit", conjugation_class: 1,
    tenses: {
      present: { as: "tinku", tu: "tinki", jis: "tinka", mes: "tinkame", jus: "tinkate", jie: "tinka" },
      past: { as: "tikau", tu: "tikai", jis: "tiko", mes: "tikome", jus: "tikote", jie: "tiko" },
      past_freq: { as: "tikdavau", tu: "tikdavai", jis: "tikdavo", mes: "tikdavome", jus: "tikdavote", jie: "tikdavo" },
      future: { as: "tiksiu", tu: "tiksi", jis: "tiks", mes: "tiksime", jus: "tiksite", jie: "tiks" },
    },
  },
  {
    infinitive: "traukti", translation: "to pull", conjugation_class: 1,
    tenses: {
      present: { as: "traukiu", tu: "trauki", jis: "traukia", mes: "traukiame", jus: "traukiate", jie: "traukia" },
      past: { as: "traukiau", tu: "traukei", jis: "traukė", mes: "traukėme", jus: "traukėte", jie: "traukė" },
      past_freq: { as: "traukdavau", tu: "traukdavai", jis: "traukdavo", mes: "traukdavome", jus: "traukdavote", jie: "traukdavo" },
      future: { as: "trauksiu", tu: "trauksi", jis: "trauks", mes: "trauksime", jus: "trauksite", jie: "trauks" },
    },
  },
  {
    infinitive: "uostyti", translation: "to smell", conjugation_class: 3,
    tenses: {
      present: { as: "uostau", tu: "uostai", jis: "uosto", mes: "uostome", jus: "uostote", jie: "uosto" },
      past: { as: "uosčiau", tu: "uostei", jis: "uostė", mes: "uostėme", jus: "uostėte", jie: "uostė" },
      past_freq: { as: "uostydavau", tu: "uostydavai", jis: "uostydavo", mes: "uostydavome", jus: "uostydavote", jie: "uostydavo" },
      future: { as: "uostysiu", tu: "uostysi", jis: "uostys", mes: "uostysime", jus: "uostysite", jie: "uostys" },
    },
  },
  {
    infinitive: "užaugti", translation: "to grow", conjugation_class: 1,
    tenses: {
      present: { as: "užaugu", tu: "užaugi", jis: "užauga", mes: "užaugame", jus: "užaugate", jie: "užauga" },
      past: { as: "užaugau", tu: "užaugai", jis: "užaugo", mes: "užaugome", jus: "užaugote", jie: "užaugo" },
      past_freq: { as: "užaugdavau", tu: "užaugdavai", jis: "užaugdavo", mes: "užaugdavome", jus: "užaugdavote", jie: "užaugdavo" },
      future: { as: "užaugsiu", tu: "užaugsi", jis: "užaugs", mes: "užaugsime", jus: "užaugsite", jie: "užaugs" },
    },
  },
  {
    infinitive: "uždaryti", translation: "to close", conjugation_class: 3,
    tenses: {
      present: { as: "uždarau", tu: "uždarai", jis: "uždaro", mes: "uždarome", jus: "uždarote", jie: "uždaro" },
      past: { as: "uždariau", tu: "uždarei", jis: "uždarė", mes: "uždarėme", jus: "uždarėte", jie: "uždarė" },
      past_freq: { as: "uždarydavau", tu: "uždarydavai", jis: "uždarydavo", mes: "uždarydavome", jus: "uždarydavote", jie: "uždarydavo" },
      future: { as: "uždarysiu", tu: "uždarysi", jis: "uždarys", mes: "uždarysime", jus: "uždarysite", jie: "uždarys" },
    },
  },
  {
    infinitive: "uždengti", translation: "to cover", conjugation_class: 1,
    tenses: {
      present: { as: "uždengiu", tu: "uždengi", jis: "uždengia", mes: "uždengiame", jus: "uždengiate", jie: "uždengia" },
      past: { as: "uždengiau", tu: "uždengei", jis: "uždengė", mes: "uždengėme", jus: "uždengėte", jie: "uždengė" },
      past_freq: { as: "uždengdavau", tu: "uždengdavai", jis: "uždengdavo", mes: "uždengdavome", jus: "uždengdavote", jie: "uždengdavo" },
      future: { as: "uždengsiu", tu: "uždengsi", jis: "uždengs", mes: "uždengsime", jus: "uždengsite", jie: "uždengs" },
    },
  },
  {
    infinitive: "vadovauti", translation: "to lead", conjugation_class: 1,
    tenses: {
      present: { as: "vadovauju", tu: "vadovauji", jis: "vadovauja", mes: "vadovaujame", jus: "vadovaujate", jie: "vadovauja" },
      past: { as: "vadovavau", tu: "vadovavai", jis: "vadovavo", mes: "vadovavome", jus: "vadovavote", jie: "vadovavo" },
      past_freq: { as: "vadovaudavau", tu: "vadovaudavai", jis: "vadovaudavo", mes: "vadovaudavome", jus: "vadovaudavote", jie: "vadovaudavo" },
      future: { as: "vadovausiu", tu: "vadovausi", jis: "vadovaus", mes: "vadovausime", jus: "vadovausite", jie: "vadovaus" },
    },
  },
  {
    infinitive: "vaikščioti", translation: "to walk", conjugation_class: 1,
    tenses: {
      present: { as: "vaikščioju", tu: "vaikščioji", jis: "vaikščioja", mes: "vaikščiojame", jus: "vaikščiojate", jie: "vaikščioja" },
      past: { as: "vaikščiojau", tu: "vaikščiojai", jis: "vaikščiojo", mes: "vaikščiojome", jus: "vaikščiojote", jie: "vaikščiojo" },
      past_freq: { as: "vaikščiodavau", tu: "vaikščiodavai", jis: "vaikščiodavo", mes: "vaikščiodavome", jus: "vaikščiodavote", jie: "vaikščiodavo" },
      future: { as: "vaikščiosiu", tu: "vaikščiosi", jis: "vaikščios", mes: "vaikščiosime", jus: "vaikščiosite", jie: "vaikščios" },
    },
  },
  {
    infinitive: "vairuoti", translation: "to drive", conjugation_class: 1,
    tenses: {
      present: { as: "vairuoju", tu: "vairuoji", jis: "vairuoja", mes: "vairuojame", jus: "vairuojate", jie: "vairuoja" },
      past: { as: "vairavau", tu: "vairavai", jis: "vairavo", mes: "vairavome", jus: "vairavote", jie: "vairavo" },
      past_freq: { as: "vairuodavau", tu: "vairuodavai", jis: "vairuodavo", mes: "vairuodavome", jus: "vairuodavote", jie: "vairuodavo" },
      future: { as: "vairuosiu", tu: "vairuosi", jis: "vairuos", mes: "vairuosime", jus: "vairuosite", jie: "vairuos" },
    },
  },
  {
    infinitive: "valdyti", translation: "to manage", conjugation_class: 3,
    tenses: {
      present: { as: "valdau", tu: "valdai", jis: "valdo", mes: "valdome", jus: "valdote", jie: "valdo" },
      past: { as: "valdžiau", tu: "valdei", jis: "valdė", mes: "valdėme", jus: "valdėte", jie: "valdė" },
      past_freq: { as: "valdydavau", tu: "valdydavai", jis: "valdydavo", mes: "valdydavome", jus: "valdydavote", jie: "valdydavo" },
      future: { as: "valdysiu", tu: "valdysi", jis: "valdys", mes: "valdysime", jus: "valdysite", jie: "valdys" },
    },
  },
  {
    infinitive: "vengti", translation: "to avoid", conjugation_class: 1,
    tenses: {
      present: { as: "vengiu", tu: "vengi", jis: "vengia", mes: "vengiame", jus: "vengiate", jie: "vengia" },
      past: { as: "vengiau", tu: "vengei", jis: "vengė", mes: "vengėme", jus: "vengėte", jie: "vengė" },
      past_freq: { as: "vengdavau", tu: "vengdavai", jis: "vengdavo", mes: "vengdavome", jus: "vengdavote", jie: "vengdavo" },
      future: { as: "vengsiu", tu: "vengsi", jis: "vengs", mes: "vengsime", jus: "vengsite", jie: "vengs" },
    },
  },
  {
    infinitive: "įeiti", translation: "to enter", conjugation_class: 1,
    tenses: {
      present: { as: "įeinu", tu: "įeini", jis: "įeina", mes: "įeiname", jus: "įeinate", jie: "įeina" },
      past: { as: "įėjau", tu: "įėjai", jis: "įėjo", mes: "įėjome", jus: "įėjote", jie: "įėjo" },
      past_freq: { as: "įeidavau", tu: "įeidavai", jis: "įeidavo", mes: "įeidavome", jus: "įeidavote", jie: "įeidavo" },
      future: { as: "įeisiu", tu: "įeisi", jis: "įeis", mes: "įeisime", jus: "įeisite", jie: "įeis" },
    },
  },
  {
    infinitive: "įrodyti", translation: "to prove", conjugation_class: 3,
    tenses: {
      present: { as: "įrodau", tu: "įrodai", jis: "įrodo", mes: "įrodome", jus: "įrodote", jie: "įrodo" },
      past: { as: "įrodžiau", tu: "įrodei", jis: "įrodė", mes: "įrodėme", jus: "įrodėte", jie: "įrodė" },
      past_freq: { as: "įrodydavau", tu: "įrodydavai", jis: "įrodydavo", mes: "įrodydavome", jus: "įrodydavote", jie: "įrodydavo" },
      future: { as: "įrodysiu", tu: "įrodysi", jis: "įrodys", mes: "įrodysime", jus: "įrodysite", jie: "įrodys" },
    },
  },
  {
    infinitive: "įtarti", translation: "to suspect", conjugation_class: 1,
    tenses: {
      present: { as: "įtariu", tu: "įtari", jis: "įtaria", mes: "įtariame", jus: "įtariate", jie: "įtaria" },
      past: { as: "įtariau", tu: "įtarei", jis: "įtarė", mes: "įtarėme", jus: "įtarėte", jie: "įtarė" },
      past_freq: { as: "įtardavau", tu: "įtardavai", jis: "įtardavo", mes: "įtardavome", jus: "įtardavote", jie: "įtardavo" },
      future: { as: "įtarsiu", tu: "įtarsi", jis: "įtars", mes: "įtarsime", jus: "įtarsite", jie: "įtars" },
    },
  },
  {
    infinitive: "įtraukti", translation: "to involve", conjugation_class: 1,
    tenses: {
      present: { as: "įtraukiu", tu: "įtrauki", jis: "įtraukia", mes: "įtraukiame", jus: "įtraukiate", jie: "įtraukia" },
      past: { as: "įtraukiau", tu: "įtraukei", jis: "įtraukė", mes: "įtraukėme", jus: "įtraukėte", jie: "įtraukė" },
      past_freq: { as: "įtraukdavau", tu: "įtraukdavai", jis: "įtraukdavo", mes: "įtraukdavome", jus: "įtraukdavote", jie: "įtraukdavo" },
      future: { as: "įtrauksiu", tu: "įtrauksi", jis: "įtrauks", mes: "įtrauksime", jus: "įtrauksite", jie: "įtrauks" },
    },
  },
  {
    infinitive: "įveikti", translation: "to beat", conjugation_class: 1,
    tenses: {
      present: { as: "įveikiu", tu: "įveiki", jis: "įveikia", mes: "įveikiame", jus: "įveikiate", jie: "įveikia" },
      past: { as: "įveikiau", tu: "įveikei", jis: "įveikė", mes: "įveikėme", jus: "įveikėte", jie: "įveikė" },
      past_freq: { as: "įveikdavau", tu: "įveikdavai", jis: "įveikdavo", mes: "įveikdavome", jus: "įveikdavote", jie: "įveikdavo" },
      future: { as: "įveiksiu", tu: "įveiksi", jis: "įveiks", mes: "įveiksime", jus: "įveiksite", jie: "įveiks" },
    },
  },
  {
    infinitive: "šaukti", translation: "to shout", conjugation_class: 1,
    tenses: {
      present: { as: "šaukiu", tu: "šauki", jis: "šaukia", mes: "šaukiame", jus: "šaukiate", jie: "šaukia" },
      past: { as: "šaukiau", tu: "šaukei", jis: "šaukė", mes: "šaukėme", jus: "šaukėte", jie: "šaukė" },
      past_freq: { as: "šaukdavau", tu: "šaukdavai", jis: "šaukdavo", mes: "šaukdavome", jus: "šaukdavote", jie: "šaukdavo" },
      future: { as: "šauksiu", tu: "šauksi", jis: "šauks", mes: "šauksime", jus: "šauksite", jie: "šauks" },
    },
  },
  {
    infinitive: "šnibždėti", translation: "to whisper", conjugation_class: 1,
    tenses: {
      present: { as: "šnibždu", tu: "šnibždi", jis: "šnibžda", mes: "šnibždame", jus: "šnibždate", jie: "šnibžda" },
      past: { as: "šnibždėjau", tu: "šnibždėjai", jis: "šnibždėjo", mes: "šnibždėjome", jus: "šnibždėjote", jie: "šnibždėjo" },
      past_freq: { as: "šnibždėdavau", tu: "šnibždėdavai", jis: "šnibždėdavo", mes: "šnibždėdavome", jus: "šnibždėdavote", jie: "šnibždėdavo" },
      future: { as: "šnibždėsiu", tu: "šnibždėsi", jis: "šnibždės", mes: "šnibždėsime", jus: "šnibždėsite", jie: "šnibždės" },
    },
  },
  {
    infinitive: "šokti", translation: "to dance", conjugation_class: 1,
    tenses: {
      present: { as: "šoku", tu: "šoki", jis: "šoka", mes: "šokame", jus: "šokate", jie: "šoka" },
      past: { as: "šokau", tu: "šokai", jis: "šoko", mes: "šokome", jus: "šokote", jie: "šoko" },
      past_freq: { as: "šokdavau", tu: "šokdavai", jis: "šokdavo", mes: "šokdavome", jus: "šokdavote", jie: "šokdavo" },
      future: { as: "šoksiu", tu: "šoksi", jis: "šoks", mes: "šoksime", jus: "šoksite", jie: "šoks" },
    },
  },
  {
    infinitive: "žiūrėti", translation: "to look", conjugation_class: 2,
    tenses: {
      present: { as: "žiūriu", tu: "žiūri", jis: "žiūri", mes: "žiūrime", jus: "žiūrite", jie: "žiūri" },
      past: { as: "žiūrėjau", tu: "žiūrėjai", jis: "žiūrėjo", mes: "žiūrėjome", jus: "žiūrėjote", jie: "žiūrėjo" },
      past_freq: { as: "žiūrėdavau", tu: "žiūrėdavai", jis: "žiūrėdavo", mes: "žiūrėdavome", jus: "žiūrėdavote", jie: "žiūrėdavo" },
      future: { as: "žiūrėsiu", tu: "žiūrėsi", jis: "žiūrės", mes: "žiūrėsime", jus: "žiūrėsite", jie: "žiūrės" },
    },
  },
];
