"use strict";

// Lithuanian noun & adjective declension dataset for the Declensions tab.
//
// Cases (order): nom gen dat acc ins loc voc.
// Nouns store forms.sg / forms.pl. Adjectives store forms.masc / forms.fem,
// each with .sg / .pl. Regular classes were generated from paradigm tables and
// the irregular 3rd/5th declensions were entered and checked by hand.
// Diacritics are significant and are checked exactly.

window.DECL_WORDS = [
  {
    word: "vyras", translation: "man", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "vyras", gen: "vyro", dat: "vyrui", acc: "vyrą", ins: "vyru", loc: "vyre", voc: "vyre" },
      pl: { nom: "vyrai", gen: "vyrų", dat: "vyrams", acc: "vyrus", ins: "vyrais", loc: "vyruose", voc: "vyrai" },
    },
  },
  {
    word: "namas", translation: "house", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "namas", gen: "namo", dat: "namui", acc: "namą", ins: "namu", loc: "name", voc: "name" },
      pl: { nom: "namai", gen: "namų", dat: "namams", acc: "namus", ins: "namais", loc: "namuose", voc: "namai" },
    },
  },
  {
    word: "draugas", translation: "friend", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "draugas", gen: "draugo", dat: "draugui", acc: "draugą", ins: "draugu", loc: "drauge", voc: "drauge" },
      pl: { nom: "draugai", gen: "draugų", dat: "draugams", acc: "draugus", ins: "draugais", loc: "drauguose", voc: "draugai" },
    },
  },
  {
    word: "stalas", translation: "table", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "stalas", gen: "stalo", dat: "stalui", acc: "stalą", ins: "stalu", loc: "stale", voc: "stale" },
      pl: { nom: "stalai", gen: "stalų", dat: "stalams", acc: "stalus", ins: "stalais", loc: "staluose", voc: "stalai" },
    },
  },
  {
    word: "darbas", translation: "work, job", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "darbas", gen: "darbo", dat: "darbui", acc: "darbą", ins: "darbu", loc: "darbe", voc: "darbe" },
      pl: { nom: "darbai", gen: "darbų", dat: "darbams", acc: "darbus", ins: "darbais", loc: "darbuose", voc: "darbai" },
    },
  },
  {
    word: "vaikas", translation: "child", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "vaikas", gen: "vaiko", dat: "vaikui", acc: "vaiką", ins: "vaiku", loc: "vaike", voc: "vaike" },
      pl: { nom: "vaikai", gen: "vaikų", dat: "vaikams", acc: "vaikus", ins: "vaikais", loc: "vaikuose", voc: "vaikai" },
    },
  },
  {
    word: "brolis", translation: "brother", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "brolis", gen: "brolio", dat: "broliui", acc: "brolį", ins: "broliu", loc: "brolyje", voc: "broli" },
      pl: { nom: "broliai", gen: "brolių", dat: "broliams", acc: "brolius", ins: "broliais", loc: "broliuose", voc: "broliai" },
    },
  },
  {
    word: "peilis", translation: "knife", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "peilis", gen: "peilio", dat: "peiliui", acc: "peilį", ins: "peiliu", loc: "peilyje", voc: "peili" },
      pl: { nom: "peiliai", gen: "peilių", dat: "peiliams", acc: "peilius", ins: "peiliais", loc: "peiliuose", voc: "peiliai" },
    },
  },
  {
    word: "arklys", translation: "horse", pos: "noun", gender: "masc", declension: "1st declension (-ys)",
    forms: {
      sg: { nom: "arklys", gen: "arklio", dat: "arkliui", acc: "arklį", ins: "arkliu", loc: "arklyje", voc: "arkly" },
      pl: { nom: "arkliai", gen: "arklių", dat: "arkliams", acc: "arklius", ins: "arkliais", loc: "arkliuose", voc: "arkliai" },
    },
  },
  {
    word: "gaidys", translation: "rooster", pos: "noun", gender: "masc", declension: "1st declension (-ys)",
    forms: {
      sg: { nom: "gaidys", gen: "gaidžio", dat: "gaidžiui", acc: "gaidį", ins: "gaidžiu", loc: "gaidyje", voc: "gaidy" },
      pl: { nom: "gaidžiai", gen: "gaidžių", dat: "gaidžiams", acc: "gaidžius", ins: "gaidžiais", loc: "gaidžiuose", voc: "gaidžiai" },
    },
  },
  {
    word: "ranka", translation: "hand, arm", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "ranka", gen: "rankos", dat: "rankai", acc: "ranką", ins: "ranka", loc: "rankoje", voc: "ranka" },
      pl: { nom: "rankos", gen: "rankų", dat: "rankoms", acc: "rankas", ins: "rankomis", loc: "rankose", voc: "rankos" },
    },
  },
  {
    word: "galva", translation: "head", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "galva", gen: "galvos", dat: "galvai", acc: "galvą", ins: "galva", loc: "galvoje", voc: "galva" },
      pl: { nom: "galvos", gen: "galvų", dat: "galvoms", acc: "galvas", ins: "galvomis", loc: "galvose", voc: "galvos" },
    },
  },
  {
    word: "knyga", translation: "book", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "knyga", gen: "knygos", dat: "knygai", acc: "knygą", ins: "knyga", loc: "knygoje", voc: "knyga" },
      pl: { nom: "knygos", gen: "knygų", dat: "knygoms", acc: "knygas", ins: "knygomis", loc: "knygose", voc: "knygos" },
    },
  },
  {
    word: "motina", translation: "mother", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "motina", gen: "motinos", dat: "motinai", acc: "motiną", ins: "motina", loc: "motinoje", voc: "motina" },
      pl: { nom: "motinos", gen: "motinų", dat: "motinoms", acc: "motinas", ins: "motinomis", loc: "motinose", voc: "motinos" },
    },
  },
  {
    word: "diena", translation: "day", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "diena", gen: "dienos", dat: "dienai", acc: "dieną", ins: "diena", loc: "dienoje", voc: "diena" },
      pl: { nom: "dienos", gen: "dienų", dat: "dienoms", acc: "dienas", ins: "dienomis", loc: "dienose", voc: "dienos" },
    },
  },
  {
    word: "katė", translation: "cat", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "katė", gen: "katės", dat: "katei", acc: "katę", ins: "kate", loc: "katėje", voc: "kate" },
      pl: { nom: "katės", gen: "kačių", dat: "katėms", acc: "kates", ins: "katėmis", loc: "katėse", voc: "katės" },
    },
  },
  {
    word: "gatvė", translation: "street", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "gatvė", gen: "gatvės", dat: "gatvei", acc: "gatvę", ins: "gatve", loc: "gatvėje", voc: "gatve" },
      pl: { nom: "gatvės", gen: "gatvių", dat: "gatvėms", acc: "gatves", ins: "gatvėmis", loc: "gatvėse", voc: "gatvės" },
    },
  },
  {
    word: "saulė", translation: "sun", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "saulė", gen: "saulės", dat: "saulei", acc: "saulę", ins: "saule", loc: "saulėje", voc: "saule" },
      pl: { nom: "saulės", gen: "saulių", dat: "saulėms", acc: "saules", ins: "saulėmis", loc: "saulėse", voc: "saulės" },
    },
  },
  {
    word: "gėlė", translation: "flower", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "gėlė", gen: "gėlės", dat: "gėlei", acc: "gėlę", ins: "gėle", loc: "gėlėje", voc: "gėle" },
      pl: { nom: "gėlės", gen: "gėlių", dat: "gėlėms", acc: "gėles", ins: "gėlėmis", loc: "gėlėse", voc: "gėlės" },
    },
  },
  {
    word: "sūnus", translation: "son", pos: "noun", gender: "masc", declension: "4th declension (-us)",
    forms: {
      sg: { nom: "sūnus", gen: "sūnaus", dat: "sūnui", acc: "sūnų", ins: "sūnumi", loc: "sūnuje", voc: "sūnau" },
      pl: { nom: "sūnūs", gen: "sūnų", dat: "sūnums", acc: "sūnus", ins: "sūnumis", loc: "sūnuose", voc: "sūnūs" },
    },
  },
  {
    word: "turgus", translation: "market", pos: "noun", gender: "masc", declension: "4th declension (-us)",
    forms: {
      sg: { nom: "turgus", gen: "turgaus", dat: "turgui", acc: "turgų", ins: "turgumi", loc: "turguje", voc: "turgau" },
      pl: { nom: "turgūs", gen: "turgų", dat: "turgums", acc: "turgus", ins: "turgumis", loc: "turguose", voc: "turgūs" },
    },
  },
  {
    word: "pilis", translation: "castle", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "pilis", gen: "pilies", dat: "piliai", acc: "pilį", ins: "pilimi", loc: "pilyje", voc: "pilie" },
      pl: { nom: "pilys", gen: "pilių", dat: "pilims", acc: "pilis", ins: "pilimis", loc: "pilyse", voc: "pilys" },
    },
  },
  {
    word: "akis", translation: "eye", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "akis", gen: "akies", dat: "akiai", acc: "akį", ins: "akimi", loc: "akyje", voc: "akie" },
      pl: { nom: "akys", gen: "akių", dat: "akims", acc: "akis", ins: "akimis", loc: "akyse", voc: "akys" },
    },
  },
  {
    word: "vanduo", translation: "water", pos: "noun", gender: "masc", declension: "5th declension (-uo)",
    forms: {
      sg: { nom: "vanduo", gen: "vandens", dat: "vandeniui", acc: "vandenį", ins: "vandeniu", loc: "vandenyje", voc: "vandenie" },
      pl: { nom: "vandenys", gen: "vandenų", dat: "vandenims", acc: "vandenis", ins: "vandenimis", loc: "vandenyse", voc: "vandenys" },
    },
  },
  {
    word: "akmuo", translation: "stone", pos: "noun", gender: "masc", declension: "5th declension (-uo)",
    forms: {
      sg: { nom: "akmuo", gen: "akmens", dat: "akmeniui", acc: "akmenį", ins: "akmeniu", loc: "akmenyje", voc: "akmenie" },
      pl: { nom: "akmenys", gen: "akmenų", dat: "akmenims", acc: "akmenis", ins: "akmenimis", loc: "akmenyse", voc: "akmenys" },
    },
  },
  {
    word: "geras", translation: "good", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "geras", gen: "gero", dat: "geram", acc: "gerą", ins: "geru", loc: "gerame", voc: "geras" }, pl: { nom: "geri", gen: "gerų", dat: "geriems", acc: "gerus", ins: "gerais", loc: "geruose", voc: "geri" } },
      fem:  { sg: { nom: "gera", gen: "geros", dat: "gerai", acc: "gerą", ins: "gera", loc: "geroje", voc: "gera" }, pl: { nom: "geros", gen: "gerų", dat: "geroms", acc: "geras", ins: "geromis", loc: "gerose", voc: "geros" } },
    },
  },
  {
    word: "naujas", translation: "new", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "naujas", gen: "naujo", dat: "naujam", acc: "naują", ins: "nauju", loc: "naujame", voc: "naujas" }, pl: { nom: "nauji", gen: "naujų", dat: "naujiems", acc: "naujus", ins: "naujais", loc: "naujuose", voc: "nauji" } },
      fem:  { sg: { nom: "nauja", gen: "naujos", dat: "naujai", acc: "naują", ins: "nauja", loc: "naujoje", voc: "nauja" }, pl: { nom: "naujos", gen: "naujų", dat: "naujoms", acc: "naujas", ins: "naujomis", loc: "naujose", voc: "naujos" } },
    },
  },
  {
    word: "baltas", translation: "white", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "baltas", gen: "balto", dat: "baltam", acc: "baltą", ins: "baltu", loc: "baltame", voc: "baltas" }, pl: { nom: "balti", gen: "baltų", dat: "baltiems", acc: "baltus", ins: "baltais", loc: "baltuose", voc: "balti" } },
      fem:  { sg: { nom: "balta", gen: "baltos", dat: "baltai", acc: "baltą", ins: "balta", loc: "baltoje", voc: "balta" }, pl: { nom: "baltos", gen: "baltų", dat: "baltoms", acc: "baltas", ins: "baltomis", loc: "baltose", voc: "baltos" } },
    },
  },
  {
    word: "gražus", translation: "beautiful", pos: "adj", declension: "(-us, -i)",
    forms: {
      masc: { sg: { nom: "gražus", gen: "gražaus", dat: "gražiam", acc: "gražų", ins: "gražiu", loc: "gražiame", voc: "gražus" }, pl: { nom: "gražūs", gen: "gražių", dat: "gražiems", acc: "gražius", ins: "gražiais", loc: "gražiuose", voc: "gražūs" } },
      fem:  { sg: { nom: "graži", gen: "gražios", dat: "gražiai", acc: "gražią", ins: "gražia", loc: "gražioje", voc: "graži" }, pl: { nom: "gražios", gen: "gražių", dat: "gražioms", acc: "gražias", ins: "gražiomis", loc: "gražiose", voc: "gražios" } },
    },
  },
  {
    word: "medinis", translation: "wooden", pos: "adj", declension: "(-is, -ė)",
    forms: {
      masc: { sg: { nom: "medinis", gen: "medinio", dat: "mediniam", acc: "medinį", ins: "mediniu", loc: "mediniame", voc: "medinis" }, pl: { nom: "mediniai", gen: "medinių", dat: "mediniams", acc: "medinius", ins: "mediniais", loc: "mediniuose", voc: "mediniai" } },
      fem:  { sg: { nom: "medinė", gen: "medinės", dat: "medinei", acc: "medinę", ins: "medine", loc: "medinėje", voc: "medinė" }, pl: { nom: "medinės", gen: "medinių", dat: "medinėms", acc: "medines", ins: "medinėmis", loc: "medinėse", voc: "medinės" } },
    },
  },
];
