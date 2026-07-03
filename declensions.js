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
  // ---------------------------------------------------------------------------
  // Common nouns & adjectives from the 2000-most-common list (forms via Wiktionary/kaikki.org).
  // ---------------------------------------------------------------------------
  {
    word: "abejonė", translation: "doubt", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "abejonė", gen: "abejonės", dat: "abejonei", acc: "abejonę", ins: "abejone", loc: "abejonėje", voc: "abejone" },
      pl: { nom: "abejonės", gen: "abejonių", dat: "abejonėms", acc: "abejones", ins: "abejonėmis", loc: "abejonėse", voc: "abejonės" },
    },
  },
  {
    word: "amžius", translation: "age", pos: "noun", gender: "masc", declension: "4th declension (-us)",
    forms: {
      sg: { nom: "amžius", gen: "amžiaus", dat: "amžiui", acc: "amžių", ins: "amžiumi", loc: "amžiuje", voc: "amžiau" },
      pl: { nom: "amžiai", gen: "amžių", dat: "amžiams", acc: "amžius", ins: "amžiais", loc: "amžiuose", voc: "amžiai" },
    },
  },
  {
    word: "apsauga", translation: "guard", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "apsauga", gen: "apsaugos", dat: "apsaugai", acc: "apsaugą", ins: "apsauga", loc: "apsaugoje", voc: "apsauga" },
      pl: { nom: "apsaugos", gen: "apsaugų", dat: "apsaugoms", acc: "apsaugas", ins: "apsaugomis", loc: "apsaugose", voc: "apsaugos" },
    },
  },
  {
    word: "arbata", translation: "tea", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "arbata", gen: "arbatos", dat: "arbatai", acc: "arbatą", ins: "arbata", loc: "arbatoje", voc: "arbata" },
      pl: { nom: "arbatos", gen: "arbatų", dat: "arbatoms", acc: "arbatas", ins: "arbatomis", loc: "arbatose", voc: "arbatos" },
    },
  },
  {
    word: "armija", translation: "army", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "armija", gen: "armijos", dat: "armijai", acc: "armiją", ins: "armija", loc: "armijoje", voc: "armija" },
      pl: { nom: "armijos", gen: "armijų", dat: "armijoms", acc: "armijas", ins: "armijomis", loc: "armijose", voc: "armijos" },
    },
  },
  {
    word: "asmuo", translation: "person", pos: "noun", gender: "masc", declension: "5th declension (-uo)",
    forms: {
      sg: { nom: "asmuo", gen: "asmens", dat: "asmeniui", acc: "asmenį", ins: "asmeniu", loc: "asmenyje", voc: "asmenie" },
      pl: { nom: "asmenys", gen: "asmenų", dat: "asmenims", acc: "asmenis", ins: "asmenimis", loc: "asmenyse", voc: "asmenys" },
    },
  },
  {
    word: "ataskaita", translation: "report", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "ataskaita", gen: "ataskaitos", dat: "ataskaitai", acc: "ataskaitą", ins: "ataskaita", loc: "ataskaitoje", voc: "ataskaita" },
      pl: { nom: "ataskaitos", gen: "ataskaitų", dat: "ataskaitoms", acc: "ataskaitas", ins: "ataskaitomis", loc: "ataskaitose", voc: "ataskaitos" },
    },
  },
  {
    word: "ateitis", translation: "future", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "ateitis", gen: "ateities", dat: "ateičiai", acc: "ateitį", ins: "ateitimi", loc: "ateityje", voc: "ateitie" },
      pl: { nom: "ateitys", gen: "ateičių", dat: "ateitims", acc: "ateitis", ins: "ateitimis", loc: "ateityse", voc: "ateitys" },
    },
  },
  {
    word: "atmintis", translation: "memory", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "atmintis", gen: "atminties", dat: "atminčiai", acc: "atmintį", ins: "atmintimi", loc: "atmintyje", voc: "atmintie" },
      pl: { nom: "atmintys", gen: "atminčių", dat: "atmintims", acc: "atmintis", ins: "atmintimis", loc: "atmintyse", voc: "atmintys" },
    },
  },
  {
    word: "atvejis", translation: "case", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "atvejis", gen: "atvejo", dat: "atvejui", acc: "atvejį", ins: "atveju", loc: "atvejyje", voc: "atveji" },
      pl: { nom: "atvejai", gen: "atvejų", dat: "atvejams", acc: "atvejus", ins: "atvejais", loc: "atvejuose", voc: "atvejai" },
    },
  },
  {
    word: "ausis", translation: "ear", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "ausis", gen: "ausies", dat: "ausiai", acc: "ausį", ins: "ausimi", loc: "ausyje", voc: "ausie" },
      pl: { nom: "ausys", gen: "ausų", dat: "ausims", acc: "ausis", ins: "ausimis", loc: "ausyse", voc: "ausys" },
    },
  },
  {
    word: "automobilis", translation: "car", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "automobilis", gen: "automobilio", dat: "automobiliui", acc: "automobilį", ins: "automobiliu", loc: "automobilyje", voc: "automobili" },
      pl: { nom: "automobiliai", gen: "automobilių", dat: "automobiliams", acc: "automobilius", ins: "automobiliais", loc: "automobiliuose", voc: "automobiliai" },
    },
  },
  {
    word: "autorius", translation: "author", pos: "noun", gender: "masc", declension: "4th declension (-us)",
    forms: {
      sg: { nom: "autorius", gen: "autoriaus", dat: "autoriui", acc: "autorių", ins: "autoriumi", loc: "autoriuje", voc: "autoriau" },
      pl: { nom: "autoriai", gen: "autorių", dat: "autoriams", acc: "autorius", ins: "autoriais", loc: "autoriuose", voc: "autoriai" },
    },
  },
  {
    word: "baimė", translation: "fear", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "baimė", gen: "baimės", dat: "baimei", acc: "baimę", ins: "baime", loc: "baimėje", voc: "baime" },
      pl: { nom: "baimės", gen: "baimių", dat: "baimėms", acc: "baimes", ins: "baimėmis", loc: "baimėse", voc: "baimės" },
    },
  },
  {
    word: "balsas", translation: "voice", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "balsas", gen: "balso", dat: "balsui", acc: "balsą", ins: "balsu", loc: "balse", voc: "balse" },
      pl: { nom: "balsai", gen: "balsų", dat: "balsams", acc: "balsus", ins: "balsais", loc: "balsuose", voc: "balsai" },
    },
  },
  {
    word: "bandymas", translation: "attempt", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "bandymas", gen: "bandymo", dat: "bandymui", acc: "bandymą", ins: "bandymu", loc: "bandyme", voc: "bandyme" },
      pl: { nom: "bandymai", gen: "bandymų", dat: "bandymams", acc: "bandymus", ins: "bandymais", loc: "bandymuose", voc: "bandymai" },
    },
  },
  {
    word: "banga", translation: "wave", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "banga", gen: "bangos", dat: "bangai", acc: "bangą", ins: "banga", loc: "bangoje", voc: "banga" },
      pl: { nom: "bangos", gen: "bangų", dat: "bangoms", acc: "bangas", ins: "bangomis", loc: "bangose", voc: "bangos" },
    },
  },
  {
    word: "bankas", translation: "bank", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "bankas", gen: "banko", dat: "bankui", acc: "banką", ins: "banku", loc: "banke", voc: "banke" },
      pl: { nom: "bankai", gen: "bankų", dat: "bankams", acc: "bankus", ins: "bankais", loc: "bankuose", voc: "bankai" },
    },
  },
  {
    word: "baras", translation: "bar", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "baras", gen: "baro", dat: "barui", acc: "barą", ins: "baru", loc: "bare", voc: "bare" },
      pl: { nom: "barai", gen: "barų", dat: "barams", acc: "barus", ins: "barais", loc: "baruose", voc: "barai" },
    },
  },
  {
    word: "bažnyčia", translation: "church", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "bažnyčia", gen: "bažnyčios", dat: "bažnyčiai", acc: "bažnyčią", ins: "bažnyčia", loc: "bažnyčioje", voc: "bažnyčia" },
      pl: { nom: "bažnyčios", gen: "bažnyčių", dat: "bažnyčioms", acc: "bažnyčias", ins: "bažnyčiomis", loc: "bažnyčiose", voc: "bažnyčios" },
    },
  },
  {
    word: "berniukas", translation: "boy", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "berniukas", gen: "berniuko", dat: "berniukui", acc: "berniuką", ins: "berniuku", loc: "berniuke", voc: "berniuk" },
      pl: { nom: "berniukai", gen: "berniukų", dat: "berniukams", acc: "berniukus", ins: "berniukais", loc: "berniukuose", voc: "berniukai" },
    },
  },
  {
    word: "biuras", translation: "office", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "biuras", gen: "biuro", dat: "biurui", acc: "biurą", ins: "biuru", loc: "biure", voc: "biure" },
      pl: { nom: "biurai", gen: "biurų", dat: "biurams", acc: "biurus", ins: "biurais", loc: "biuruose", voc: "biurai" },
    },
  },
  {
    word: "burna", translation: "mouth", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "burna", gen: "burnos", dat: "burnai", acc: "burną", ins: "burna", loc: "burnoje", voc: "burna" },
      pl: { nom: "burnos", gen: "burnų", dat: "burnoms", acc: "burnas", ins: "burnomis", loc: "burnose", voc: "burnos" },
    },
  },
  {
    word: "butas", translation: "apartment", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "butas", gen: "buto", dat: "butui", acc: "butą", ins: "butu", loc: "bute", voc: "bute" },
      pl: { nom: "butai", gen: "butų", dat: "butams", acc: "butus", ins: "butais", loc: "butuose", voc: "butai" },
    },
  },
  {
    word: "butelis", translation: "bottle", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "butelis", gen: "butelio", dat: "buteliui", acc: "butelį", ins: "buteliu", loc: "butelyje", voc: "buteli" },
      pl: { nom: "buteliai", gen: "butelių", dat: "buteliams", acc: "butelius", ins: "buteliais", loc: "buteliuose", voc: "buteliai" },
    },
  },
  {
    word: "būdas", translation: "manner", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "būdas", gen: "būdo", dat: "būdui", acc: "būdą", ins: "būdu", loc: "būde", voc: "būde" },
      pl: { nom: "būdai", gen: "būdų", dat: "būdams", acc: "būdus", ins: "būdais", loc: "būduose", voc: "būdai" },
    },
  },
  {
    word: "charakteris", translation: "character", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "charakteris", gen: "charakterio", dat: "charakteriui", acc: "charakterį", ins: "charakteriu", loc: "charakteryje", voc: "charakteri" },
      pl: { nom: "charakteriai", gen: "charakterių", dat: "charakteriams", acc: "charakterius", ins: "charakteriais", loc: "charakteriuose", voc: "charakteriai" },
    },
  },
  {
    word: "daina", translation: "song", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "daina", gen: "dainos", dat: "dainai", acc: "dainą", ins: "daina", loc: "dainoje", voc: "daina" },
      pl: { nom: "dainos", gen: "dainų", dat: "dainoms", acc: "dainas", ins: "dainomis", loc: "dainose", voc: "dainos" },
    },
  },
  {
    word: "dalis", translation: "part", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "dalis", gen: "dalies", dat: "daliai", acc: "dalį", ins: "dalimi", loc: "dalyje", voc: "dalie" },
      pl: { nom: "dalys", gen: "dalių", dat: "dalims", acc: "dalis", ins: "dalimis", loc: "dalyse", voc: "dalys" },
    },
  },
  {
    word: "dalykas", translation: "thing", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "dalykas", gen: "dalyko", dat: "dalykui", acc: "dalyką", ins: "dalyku", loc: "dalyke", voc: "dalyke" },
      pl: { nom: "dalykai", gen: "dalykų", dat: "dalykams", acc: "dalykus", ins: "dalykais", loc: "dalykuose", voc: "dalykai" },
    },
  },
  {
    word: "dangus", translation: "sky", pos: "noun", gender: "masc", declension: "4th declension (-us)",
    forms: {
      sg: { nom: "dangus", gen: "dangaus", dat: "dangui", acc: "dangų", ins: "dangumi", loc: "danguje", voc: "dangau" },
      pl: { nom: "dangūs", gen: "dangų", dat: "dangums", acc: "dangus", ins: "dangumis", loc: "danguose", voc: "dangūs" },
    },
  },
  {
    word: "dantis", translation: "tooth", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "dantis", gen: "danties", dat: "dančiui", acc: "dantį", ins: "dantimi", loc: "dantyje", voc: "dantie" },
      pl: { nom: "dantys", gen: "dantų", dat: "dantims", acc: "dantis", ins: "dantimis", loc: "dantyse", voc: "dantys" },
    },
  },
  {
    word: "debesis", translation: "cloud", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "debesis", gen: "debesies", dat: "debesiui", acc: "debesį", ins: "debesimi", loc: "debesyje", voc: "debesie" },
      pl: { nom: "debesys", gen: "debesų", dat: "debesims", acc: "debesis", ins: "debesimis", loc: "debesyse", voc: "debesys" },
    },
  },
  {
    word: "detalė", translation: "detail", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "detalė", gen: "detalės", dat: "detalei", acc: "detalę", ins: "detale", loc: "detalėje", voc: "detale" },
      pl: { nom: "detalės", gen: "detalių", dat: "detalėms", acc: "detales", ins: "detalėmis", loc: "detalėse", voc: "detalės" },
    },
  },
  {
    word: "doleris", translation: "dollar", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "doleris", gen: "dolerio", dat: "doleriui", acc: "dolerį", ins: "doleriu", loc: "doleryje", voc: "doleri" },
      pl: { nom: "doleriai", gen: "dolerių", dat: "doleriams", acc: "dolerius", ins: "doleriais", loc: "doleriuose", voc: "doleriai" },
    },
  },
  {
    word: "dukra", translation: "daughter", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "dukra", gen: "dukros", dat: "dukrai", acc: "dukrą", ins: "dukra", loc: "dukroje", voc: "dukra" },
      pl: { nom: "dukros", gen: "dukrų", dat: "dukroms", acc: "dukras", ins: "dukromis", loc: "dukrose", voc: "dukros" },
    },
  },
  {
    word: "dvasia", translation: "spirit", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "dvasia", gen: "dvasios", dat: "dvasiai", acc: "dvasią", ins: "dvasia", loc: "dvasioje", voc: "dvasia" },
      pl: { nom: "dvasios", gen: "dvasių", dat: "dvasioms", acc: "dvasias", ins: "dvasiomis", loc: "dvasiose", voc: "dvasios" },
    },
  },
  {
    word: "dėmesys", translation: "attention", pos: "noun", gender: "masc", declension: "1st declension (-ys)",
    forms: {
      sg: { nom: "dėmesys", gen: "dėmesio", dat: "dėmesiui", acc: "dėmesį", ins: "dėmesiu", loc: "dėmesyje", voc: "dėmesy" },
      pl: { nom: "dėmesiai", gen: "dėmesių", dat: "dėmesiams", acc: "dėmesius", ins: "dėmesiais", loc: "dėmesiuose", voc: "dėmesiai" },
    },
  },
  {
    word: "dėžė", translation: "box", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "dėžė", gen: "dėžės", dat: "dėžei", acc: "dėžę", ins: "dėže", loc: "dėžėje", voc: "dėže" },
      pl: { nom: "dėžės", gen: "dėžių", dat: "dėžėms", acc: "dėžes", ins: "dėžėmis", loc: "dėžėse", voc: "dėžės" },
    },
  },
  {
    word: "erdvė", translation: "space", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "erdvė", gen: "erdvės", dat: "erdvei", acc: "erdvę", ins: "erdve", loc: "erdvėje", voc: "erdve" },
      pl: { nom: "erdvės", gen: "erdvių", dat: "erdvėms", acc: "erdves", ins: "erdvėmis", loc: "erdvėse", voc: "erdvės" },
    },
  },
  {
    word: "faktas", translation: "fact", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "faktas", gen: "fakto", dat: "faktui", acc: "faktą", ins: "faktu", loc: "fakte", voc: "fakte" },
      pl: { nom: "faktai", gen: "faktų", dat: "faktams", acc: "faktus", ins: "faktais", loc: "faktuose", voc: "faktai" },
    },
  },
  {
    word: "forma", translation: "form", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "forma", gen: "formos", dat: "formai", acc: "formą", ins: "forma", loc: "formoje", voc: "forma" },
      pl: { nom: "formos", gen: "formų", dat: "formoms", acc: "formas", ins: "formomis", loc: "formose", voc: "formos" },
    },
  },
  {
    word: "gabalas", translation: "piece", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "gabalas", gen: "gabalo", dat: "gabalui", acc: "gabalą", ins: "gabalu", loc: "gabale", voc: "gabale" },
      pl: { nom: "gabalai", gen: "gabalų", dat: "gabalams", acc: "gabalus", ins: "gabalais", loc: "gabaluose", voc: "gabalai" },
    },
  },
  {
    word: "galia", translation: "power", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "galia", gen: "galios", dat: "galiai", acc: "galią", ins: "galia", loc: "galioje", voc: "galia" },
      pl: { nom: "galios", gen: "galių", dat: "galioms", acc: "galias", ins: "galiomis", loc: "galiose", voc: "galios" },
    },
  },
  {
    word: "garsas", translation: "sound", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "garsas", gen: "garso", dat: "garsui", acc: "garsą", ins: "garsu", loc: "garse", voc: "garse" },
      pl: { nom: "garsai", gen: "garsų", dat: "garsams", acc: "garsus", ins: "garsais", loc: "garsuose", voc: "garsai" },
    },
  },
  {
    word: "gerklė", translation: "throat", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "gerklė", gen: "gerklės", dat: "gerklei", acc: "gerklę", ins: "gerkle", loc: "gerklėje", voc: "gerkle" },
      pl: { nom: "gerklės", gen: "gerklių", dat: "gerklėms", acc: "gerkles", ins: "gerklėmis", loc: "gerklėse", voc: "gerklės" },
    },
  },
  {
    word: "ginklas", translation: "gun", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "ginklas", gen: "ginklo", dat: "ginklui", acc: "ginklą", ins: "ginklu", loc: "ginkle", voc: "ginkle" },
      pl: { nom: "ginklai", gen: "ginklų", dat: "ginklams", acc: "ginklus", ins: "ginklais", loc: "ginkluose", voc: "ginklai" },
    },
  },
  {
    word: "grupė", translation: "group", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "grupė", gen: "grupės", dat: "grupei", acc: "grupę", ins: "grupe", loc: "grupėje", voc: "grupe" },
      pl: { nom: "grupės", gen: "grupių", dat: "grupėms", acc: "grupes", ins: "grupėmis", loc: "grupėse", voc: "grupės" },
    },
  },
  {
    word: "gydytojas", translation: "doctor", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "gydytojas", gen: "gydytojo", dat: "gydytojui", acc: "gydytoją", ins: "gydytoju", loc: "gydytoje", voc: "gydytoje" },
      pl: { nom: "gydytojai", gen: "gydytojų", dat: "gydytojams", acc: "gydytojus", ins: "gydytojais", loc: "gydytojuose", voc: "gydytojai" },
    },
  },
  {
    word: "gyvenimas", translation: "life", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "gyvenimas", gen: "gyvenimo", dat: "gyvenimui", acc: "gyvenimą", ins: "gyvenimu", loc: "gyvenime", voc: "gyvenime" },
      pl: { nom: "gyvenimai", gen: "gyvenimų", dat: "gyvenimams", acc: "gyvenimus", ins: "gyvenimais", loc: "gyvenimuose", voc: "gyvenimai" },
    },
  },
  {
    word: "gyvūnas", translation: "animal", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "gyvūnas", gen: "gyvūno", dat: "gyvūnui", acc: "gyvūną", ins: "gyvūnu", loc: "gyvūne", voc: "gyvūne" },
      pl: { nom: "gyvūnai", gen: "gyvūnų", dat: "gyvūnams", acc: "gyvūnus", ins: "gyvūnais", loc: "gyvūnuose", voc: "gyvūnai" },
    },
  },
  {
    word: "idėja", translation: "idea", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "idėja", gen: "idėjos", dat: "idėjai", acc: "idėją", ins: "idėja", loc: "idėjoje", voc: "idėja" },
      pl: { nom: "idėjos", gen: "idėjų", dat: "idėjoms", acc: "idėjas", ins: "idėjomis", loc: "idėjose", voc: "idėjos" },
    },
  },
  {
    word: "ilgis", translation: "length", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "ilgis", gen: "ilgio", dat: "ilgiui", acc: "ilgį", ins: "ilgiu", loc: "ilgyje", voc: "ilgi" },
      pl: { nom: "ilgiai", gen: "ilgių", dat: "ilgiams", acc: "ilgius", ins: "ilgiais", loc: "ilgiuose", voc: "ilgiai" },
    },
  },
  {
    word: "istorija", translation: "story", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "istorija", gen: "istorijos", dat: "istorijai", acc: "istoriją", ins: "istorija", loc: "istorijoje", voc: "istorija" },
      pl: { nom: "istorijos", gen: "istorijų", dat: "istorijoms", acc: "istorijas", ins: "istorijomis", loc: "istorijose", voc: "istorijos" },
    },
  },
  {
    word: "išraiška", translation: "expression", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "išraiška", gen: "išraiškos", dat: "išraiškai", acc: "išraišką", ins: "išraiška", loc: "išraiškoje", voc: "išraiška" },
      pl: { nom: "išraiškos", gen: "išraiškų", dat: "išraiškoms", acc: "išraiškas", ins: "išraiškomis", loc: "išraiškose", voc: "išraiškos" },
    },
  },
  {
    word: "jausmas", translation: "feeling", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "jausmas", gen: "jausmo", dat: "jausmui", acc: "jausmą", ins: "jausmu", loc: "jausme", voc: "jausme" },
      pl: { nom: "jausmai", gen: "jausmų", dat: "jausmams", acc: "jausmus", ins: "jausmais", loc: "jausmuose", voc: "jausmai" },
    },
  },
  {
    word: "jėga", translation: "force", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "jėga", gen: "jėgos", dat: "jėgai", acc: "jėgą", ins: "jėga", loc: "jėgoje", voc: "jėga" },
      pl: { nom: "jėgos", gen: "jėgų", dat: "jėgoms", acc: "jėgas", ins: "jėgomis", loc: "jėgose", voc: "jėgos" },
    },
  },
  {
    word: "jūra", translation: "sea", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "jūra", gen: "jūros", dat: "jūrai", acc: "jūrą", ins: "jūra", loc: "jūroje", voc: "jūra" },
      pl: { nom: "jūros", gen: "jūrų", dat: "jūroms", acc: "jūras", ins: "jūromis", loc: "jūrose", voc: "jūros" },
    },
  },
  {
    word: "kailis", translation: "coat", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "kailis", gen: "kailio", dat: "kailiui", acc: "kailį", ins: "kailiu", loc: "kailyje", voc: "kaili" },
      pl: { nom: "kailiai", gen: "kailių", dat: "kailiams", acc: "kailius", ins: "kailiais", loc: "kailiuose", voc: "kailiai" },
    },
  },
  {
    word: "kaimas", translation: "village", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "kaimas", gen: "kaimo", dat: "kaimui", acc: "kaimą", ins: "kaimu", loc: "kaime", voc: "kaime" },
      pl: { nom: "kaimai", gen: "kaimų", dat: "kaimams", acc: "kaimus", ins: "kaimais", loc: "kaimuose", voc: "kaimai" },
    },
  },
  {
    word: "kaklas", translation: "neck", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "kaklas", gen: "kaklo", dat: "kaklui", acc: "kaklą", ins: "kaklu", loc: "kakle", voc: "kakle" },
      pl: { nom: "kaklai", gen: "kaklų", dat: "kaklams", acc: "kaklus", ins: "kaklais", loc: "kakluose", voc: "kaklai" },
    },
  },
  {
    word: "kalba", translation: "language", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "kalba", gen: "kalbos", dat: "kalbai", acc: "kalbą", ins: "kalba", loc: "kalboje", voc: "kalba" },
      pl: { nom: "kalbos", gen: "kalbų", dat: "kalboms", acc: "kalbas", ins: "kalbomis", loc: "kalbose", voc: "kalbos" },
    },
  },
  {
    word: "kalnas", translation: "mountain", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "kalnas", gen: "kalno", dat: "kalnui", acc: "kalną", ins: "kalnu", loc: "kalne", voc: "kalne" },
      pl: { nom: "kalnai", gen: "kalnų", dat: "kalnams", acc: "kalnus", ins: "kalnais", loc: "kalnuose", voc: "kalnai" },
    },
  },
  {
    word: "kambarys", translation: "room", pos: "noun", gender: "masc", declension: "1st declension (-ys)",
    forms: {
      sg: { nom: "kambarys", gen: "kambario", dat: "kambariui", acc: "kambarį", ins: "kambariu", loc: "kambaryje", voc: "kambary" },
      pl: { nom: "kambariai", gen: "kambarių", dat: "kambariams", acc: "kambarius", ins: "kambariais", loc: "kambariuose", voc: "kambariai" },
    },
  },
  {
    word: "kampas", translation: "corner", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "kampas", gen: "kampo", dat: "kampui", acc: "kampą", ins: "kampu", loc: "kampe", voc: "kampe" },
      pl: { nom: "kampai", gen: "kampų", dat: "kampams", acc: "kampus", ins: "kampais", loc: "kampuose", voc: "kampai" },
    },
  },
  {
    word: "kamuolys", translation: "ball", pos: "noun", gender: "masc", declension: "1st declension (-ys)",
    forms: {
      sg: { nom: "kamuolys", gen: "kamuolio", dat: "kamuoliui", acc: "kamuolį", ins: "kamuoliu", loc: "kamuolyje", voc: "kamuoly" },
      pl: { nom: "kamuoliai", gen: "kamuolių", dat: "kamuoliams", acc: "kamuolius", ins: "kamuoliais", loc: "kamuoliuose", voc: "kamuoliai" },
    },
  },
  {
    word: "karalius", translation: "king", pos: "noun", gender: "masc", declension: "4th declension (-us)",
    forms: {
      sg: { nom: "karalius", gen: "karaliaus", dat: "karaliui", acc: "karalių", ins: "karaliumi", loc: "karaliuje", voc: "karaliau" },
      pl: { nom: "karaliai", gen: "karalių", dat: "karaliams", acc: "karalius", ins: "karaliais", loc: "karaliuose", voc: "karaliai" },
    },
  },
  {
    word: "karas", translation: "war", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "karas", gen: "karo", dat: "karui", acc: "karą", ins: "karu", loc: "kare", voc: "kare" },
      pl: { nom: "karai", gen: "karų", dat: "karams", acc: "karus", ins: "karais", loc: "karuose", voc: "karai" },
    },
  },
  {
    word: "kareivis", translation: "soldier", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "kareivis", gen: "kareivio", dat: "kareiviui", acc: "kareivį", ins: "kareiviu", loc: "kareivyje", voc: "kareivi" },
      pl: { nom: "kareiviai", gen: "kareivių", dat: "kareiviams", acc: "kareivius", ins: "kareiviais", loc: "kareiviuose", voc: "kareiviai" },
    },
  },
  {
    word: "kava", translation: "coffee", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "kava", gen: "kavos", dat: "kavai", acc: "kavą", ins: "kava", loc: "kavoje", voc: "kava" },
      pl: { nom: "kavos", gen: "kavų", dat: "kavoms", acc: "kavas", ins: "kavomis", loc: "kavose", voc: "kavos" },
    },
  },
  {
    word: "kelias", translation: "road", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "kelias", gen: "kelio", dat: "keliui", acc: "kelią", ins: "keliu", loc: "kelyje", voc: "kely" },
      pl: { nom: "keliai", gen: "kelių", dat: "keliams", acc: "kelius", ins: "keliais", loc: "keliuose", voc: "keliai" },
    },
  },
  {
    word: "kelionė", translation: "trip", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "kelionė", gen: "kelionės", dat: "kelionei", acc: "kelionę", ins: "kelione", loc: "kelionėje", voc: "kelione" },
      pl: { nom: "kelionės", gen: "kelionių", dat: "kelionėms", acc: "keliones", ins: "kelionėmis", loc: "kelionėse", voc: "kelionės" },
    },
  },
  {
    word: "kiemas", translation: "yard", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "kiemas", gen: "kiemo", dat: "kiemui", acc: "kiemą", ins: "kiemu", loc: "kieme", voc: "kieme" },
      pl: { nom: "kiemai", gen: "kiemų", dat: "kiemams", acc: "kiemus", ins: "kiemais", loc: "kiemuose", voc: "kiemai" },
    },
  },
  {
    word: "kišenė", translation: "pocket", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "kišenė", gen: "kišenės", dat: "kišenei", acc: "kišenę", ins: "kišene", loc: "kišenėje", voc: "kišene" },
      pl: { nom: "kišenės", gen: "kišenių", dat: "kišenėms", acc: "kišenes", ins: "kišenėmis", loc: "kišenėse", voc: "kišenės" },
    },
  },
  {
    word: "klaida", translation: "mistake", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "klaida", gen: "klaidos", dat: "klaidai", acc: "klaidą", ins: "klaida", loc: "klaidoje", voc: "klaida" },
      pl: { nom: "klaidos", gen: "klaidų", dat: "klaidoms", acc: "klaidas", ins: "klaidomis", loc: "klaidose", voc: "klaidos" },
    },
  },
  {
    word: "klasė", translation: "class", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "klasė", gen: "klasės", dat: "klasei", acc: "klasę", ins: "klase", loc: "klasėje", voc: "klase" },
      pl: { nom: "klasės", gen: "klasių", dat: "klasėms", acc: "klases", ins: "klasėmis", loc: "klasėse", voc: "klasės" },
    },
  },
  {
    word: "klausimas", translation: "question", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "klausimas", gen: "klausimo", dat: "klausimui", acc: "klausimą", ins: "klausimu", loc: "klausime", voc: "klausime" },
      pl: { nom: "klausimai", gen: "klausimų", dat: "klausimams", acc: "klausimus", ins: "klausimais", loc: "klausimuose", voc: "klausimai" },
    },
  },
  {
    word: "koja", translation: "leg", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "koja", gen: "kojos", dat: "kojai", acc: "koją", ins: "koja", loc: "kojoje", voc: "koja" },
      pl: { nom: "kojos", gen: "kojų", dat: "kojoms", acc: "kojas", ins: "kojomis", loc: "kojose", voc: "kojos" },
    },
  },
  {
    word: "komanda", translation: "command", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "komanda", gen: "komandos", dat: "komandai", acc: "komandą", ins: "komanda", loc: "komandoje", voc: "komanda" },
      pl: { nom: "komandos", gen: "komandų", dat: "komandoms", acc: "komandas", ins: "komandomis", loc: "komandose", voc: "komandos" },
    },
  },
  {
    word: "kontrolė", translation: "control", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "kontrolė", gen: "kontrolės", dat: "kontrolei", acc: "kontrolę", ins: "kontrole", loc: "kontrolėje", voc: "kontrole" },
      pl: { nom: "kontrolės", gen: "kontrolių", dat: "kontrolėms", acc: "kontroles", ins: "kontrolėmis", loc: "kontrolėse", voc: "kontrolės" },
    },
  },
  {
    word: "kraujas", translation: "blood", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "kraujas", gen: "kraujo", dat: "kraujui", acc: "kraują", ins: "krauju", loc: "kraujuje", voc: "kraujau" },
      pl: { nom: "kraujai", gen: "kraujų", dat: "kraujams", acc: "kraujus", ins: "kraujais", loc: "kraujuose", voc: "kraujai" },
    },
  },
  {
    word: "kraštas", translation: "edge", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "kraštas", gen: "krašto", dat: "kraštui", acc: "kraštą", ins: "kraštu", loc: "krašte", voc: "krašte" },
      pl: { nom: "kraštai", gen: "kraštų", dat: "kraštams", acc: "kraštus", ins: "kraštais", loc: "kraštuose", voc: "kraštai" },
    },
  },
  {
    word: "kryptis", translation: "direction", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "kryptis", gen: "krypties", dat: "krypčiai", acc: "kryptį", ins: "kryptimi", loc: "kryptyje", voc: "kryptie" },
      pl: { nom: "kryptys", gen: "krypčių", dat: "kryptims", acc: "kryptis", ins: "kryptimis", loc: "kryptyse", voc: "kryptys" },
    },
  },
  {
    word: "krūtinė", translation: "chest", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "krūtinė", gen: "krūtinės", dat: "krūtinei", acc: "krūtinę", ins: "krūtine", loc: "krūtinėje", voc: "krūtine" },
      pl: { nom: "krūtinės", gen: "krūtinių", dat: "krūtinėms", acc: "krūtines", ins: "krūtinėmis", loc: "krūtinėse", voc: "krūtinės" },
    },
  },
  {
    word: "krūtis", translation: "breast", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "krūtis", gen: "krūties", dat: "krūčiai", acc: "krūtį", ins: "krūtimi", loc: "krūtyje", voc: "krūtie" },
      pl: { nom: "krūtys", gen: "krūčių", dat: "krūtims", acc: "krūtis", ins: "krūtimis", loc: "krūtyse", voc: "krūtys" },
    },
  },
  {
    word: "kvailys", translation: "fool", pos: "noun", gender: "masc", declension: "1st declension (-ys)",
    forms: {
      sg: { nom: "kvailys", gen: "kvailio", dat: "kvailiui", acc: "kvailį", ins: "kvailiu", loc: "kvailyje", voc: "kvaily" },
      pl: { nom: "kvailiai", gen: "kvailių", dat: "kvailiams", acc: "kvailius", ins: "kvailiais", loc: "kvailiuose", voc: "kvailiai" },
    },
  },
  {
    word: "kėdė", translation: "chair", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "kėdė", gen: "kėdės", dat: "kėdei", acc: "kėdę", ins: "kėde", loc: "kėdėje", voc: "kėde" },
      pl: { nom: "kėdės", gen: "kėdžių", dat: "kėdėms", acc: "kėdes", ins: "kėdėmis", loc: "kėdėse", voc: "kėdės" },
    },
  },
  {
    word: "kūdikis", translation: "baby", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "kūdikis", gen: "kūdikio", dat: "kūdikiui", acc: "kūdikį", ins: "kūdikiu", loc: "kūdikyje", voc: "kūdiki" },
      pl: { nom: "kūdikiai", gen: "kūdikių", dat: "kūdikiams", acc: "kūdikius", ins: "kūdikiais", loc: "kūdikiuose", voc: "kūdikiai" },
    },
  },
  {
    word: "kūnas", translation: "body", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "kūnas", gen: "kūno", dat: "kūnui", acc: "kūną", ins: "kūnu", loc: "kūne", voc: "kūne" },
      pl: { nom: "kūnai", gen: "kūnų", dat: "kūnams", acc: "kūnus", ins: "kūnais", loc: "kūnuose", voc: "kūnai" },
    },
  },
  {
    word: "laikas", translation: "time", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "laikas", gen: "laiko", dat: "laikui", acc: "laiką", ins: "laiku", loc: "laike", voc: "laike" },
      pl: { nom: "laikai", gen: "laikų", dat: "laikams", acc: "laikus", ins: "laikais", loc: "laikuose", voc: "laikai" },
    },
  },
  {
    word: "laiptas", translation: "stair", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "laiptas", gen: "laipto", dat: "laiptui", acc: "laiptą", ins: "laiptu", loc: "laipte", voc: "laipte" },
      pl: { nom: "laiptai", gen: "laiptų", dat: "laiptams", acc: "laiptus", ins: "laiptais", loc: "laiptuose", voc: "laiptai" },
    },
  },
  {
    word: "laivas", translation: "ship", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "laivas", gen: "laivo", dat: "laivui", acc: "laivą", ins: "laivu", loc: "laive", voc: "laive" },
      pl: { nom: "laivai", gen: "laivų", dat: "laivams", acc: "laivus", ins: "laivais", loc: "laivuose", voc: "laivai" },
    },
  },
  {
    word: "laiškas", translation: "letter", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "laiškas", gen: "laiško", dat: "laiškui", acc: "laišką", ins: "laišku", loc: "laiške", voc: "laiške" },
      pl: { nom: "laiškai", gen: "laiškų", dat: "laiškams", acc: "laiškus", ins: "laiškais", loc: "laiškuose", voc: "laiškai" },
    },
  },
  {
    word: "langas", translation: "window", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "langas", gen: "lango", dat: "langui", acc: "langą", ins: "langu", loc: "lange", voc: "lange" },
      pl: { nom: "langai", gen: "langų", dat: "langams", acc: "langus", ins: "langais", loc: "languose", voc: "langai" },
    },
  },
  {
    word: "laukas", translation: "field", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "laukas", gen: "lauko", dat: "laukui", acc: "lauką", ins: "lauku", loc: "lauke", voc: "lauke" },
      pl: { nom: "laukai", gen: "laukų", dat: "laukams", acc: "laukus", ins: "laukais", loc: "laukuose", voc: "laukai" },
    },
  },
  {
    word: "lenta", translation: "board", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "lenta", gen: "lentos", dat: "lentai", acc: "lentą", ins: "lenta", loc: "lentoje", voc: "lenta" },
      pl: { nom: "lentos", gen: "lentų", dat: "lentoms", acc: "lentas", ins: "lentomis", loc: "lentose", voc: "lentos" },
    },
  },
  {
    word: "lentelė", translation: "table", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "lentelė", gen: "lentelės", dat: "lentelei", acc: "lentelę", ins: "lentele", loc: "lentelėje", voc: "lentele" },
      pl: { nom: "lentelės", gen: "lentelių", dat: "lentelėms", acc: "lenteles", ins: "lentelėmis", loc: "lentelėse", voc: "lentelės" },
    },
  },
  {
    word: "lietus", translation: "rain", pos: "noun", gender: "masc", declension: "4th declension (-us)",
    forms: {
      sg: { nom: "lietus", gen: "lietaus", dat: "lietui", acc: "lietų", ins: "lietumi", loc: "lietuje", voc: "lietau" },
      pl: { nom: "lietūs", gen: "lietų", dat: "lietums", acc: "lietus", ins: "lietumis", loc: "lietuose", voc: "lietūs" },
    },
  },
  {
    word: "liežuvis", translation: "tongue", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "liežuvis", gen: "liežuvio", dat: "liežuviui", acc: "liežuvį", ins: "liežuviu", loc: "liežuvyje", voc: "liežuvi" },
      pl: { nom: "liežuviai", gen: "liežuvių", dat: "liežuviams", acc: "liežuvius", ins: "liežuviais", loc: "liežuviuose", voc: "liežuviai" },
    },
  },
  {
    word: "linija", translation: "line", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "linija", gen: "linijos", dat: "linijai", acc: "liniją", ins: "linija", loc: "linijoje", voc: "linija" },
      pl: { nom: "linijos", gen: "linijų", dat: "linijoms", acc: "linijas", ins: "linijomis", loc: "linijose", voc: "linijos" },
    },
  },
  {
    word: "lova", translation: "bed", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "lova", gen: "lovos", dat: "lovai", acc: "lovą", ins: "lova", loc: "lovoje", voc: "lova" },
      pl: { nom: "lovos", gen: "lovų", dat: "lovoms", acc: "lovas", ins: "lovomis", loc: "lovose", voc: "lovos" },
    },
  },
  {
    word: "lygis", translation: "level", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "lygis", gen: "lygio", dat: "lygiui", acc: "lygį", ins: "lygiu", loc: "lygyje", voc: "lygi" },
      pl: { nom: "lygiai", gen: "lygių", dat: "lygiams", acc: "lygius", ins: "lygiais", loc: "lygiuose", voc: "lygiai" },
    },
  },
  {
    word: "lūpa", translation: "lip", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "lūpa", gen: "lūpos", dat: "lūpai", acc: "lūpą", ins: "lūpa", loc: "lūpoje", voc: "lūpa" },
      pl: { nom: "lūpos", gen: "lūpų", dat: "lūpoms", acc: "lūpas", ins: "lūpomis", loc: "lūpose", voc: "lūpos" },
    },
  },
  {
    word: "maišas", translation: "bag", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "maišas", gen: "maišo", dat: "maišui", acc: "maišą", ins: "maišu", loc: "maiše", voc: "maiše" },
      pl: { nom: "maišai", gen: "maišų", dat: "maišams", acc: "maišus", ins: "maišais", loc: "maišuose", voc: "maišai" },
    },
  },
  {
    word: "malonumas", translation: "pleasure", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "malonumas", gen: "malonumo", dat: "malonumui", acc: "malonumą", ins: "malonumu", loc: "malonume", voc: "malonume" },
      pl: { nom: "malonumai", gen: "malonumų", dat: "malonumams", acc: "malonumus", ins: "malonumais", loc: "malonumuose", voc: "malonumai" },
    },
  },
  {
    word: "mediena", translation: "wood", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "mediena", gen: "medienos", dat: "medienai", acc: "medieną", ins: "mediena", loc: "medienoje", voc: "mediena" },
      pl: { nom: "medienos", gen: "medienų", dat: "medienoms", acc: "medienas", ins: "medienomis", loc: "medienose", voc: "medienos" },
    },
  },
  {
    word: "medis", translation: "tree", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "medis", gen: "medžio", dat: "medžiui", acc: "medį", ins: "medžiu", loc: "medyje", voc: "medi" },
      pl: { nom: "medžiai", gen: "medžių", dat: "medžiams", acc: "medžius", ins: "medžiais", loc: "medžiuose", voc: "medžiai" },
    },
  },
  {
    word: "menas", translation: "art", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "menas", gen: "meno", dat: "menui", acc: "meną", ins: "menu", loc: "mene", voc: "mene" },
      pl: { nom: "menai", gen: "menų", dat: "menams", acc: "menus", ins: "menais", loc: "menuose", voc: "menai" },
    },
  },
  {
    word: "mergina", translation: "girl", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "mergina", gen: "merginos", dat: "merginai", acc: "merginą", ins: "mergina", loc: "merginoje", voc: "mergina" },
      pl: { nom: "merginos", gen: "merginų", dat: "merginoms", acc: "merginas", ins: "merginomis", loc: "merginose", voc: "merginos" },
    },
  },
  {
    word: "miegamasis", translation: "bedroom", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "miegamasis", gen: "miegamojo", dat: "miegamajam", acc: "miegamąjį", ins: "miegamuoju", loc: "miegamajame", voc: "miegamasis" },
      pl: { nom: "miegamieji", gen: "miegamųjų", dat: "miegamiesiems", acc: "miegamuosius", ins: "miegamaisiais", loc: "miegamuosiuose", voc: "miegamieji" },
    },
  },
  {
    word: "miestas", translation: "town", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "miestas", gen: "miesto", dat: "miestui", acc: "miestą", ins: "miestu", loc: "mieste", voc: "mieste" },
      pl: { nom: "miestai", gen: "miestų", dat: "miestams", acc: "miestus", ins: "miestais", loc: "miestuose", voc: "miestai" },
    },
  },
  {
    word: "minutė", translation: "minute", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "minutė", gen: "minutės", dat: "minutei", acc: "minutę", ins: "mintte", loc: "minutėje", voc: "minute" },
      pl: { nom: "minutės", gen: "minučių", dat: "minutėms", acc: "minttes", ins: "minutėmis", loc: "minutėse", voc: "minutės" },
    },
  },
  {
    word: "mirtis", translation: "death", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "mirtis", gen: "mirties", dat: "mirčiai", acc: "mirtį", ins: "mirtimi", loc: "mirtyje", voc: "mirtie" },
      pl: { nom: "mirtys", gen: "mirčių", dat: "mirtims", acc: "mirtis", ins: "mirtimis", loc: "mirtyse", voc: "mirtys" },
    },
  },
  {
    word: "mokestis", translation: "charge", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "mokestis", gen: "mokesčio", dat: "mokesčiui", acc: "mokestį", ins: "mokesčiu", loc: "mokestyje", voc: "mokesti" },
      pl: { nom: "mokesčiai", gen: "mokesčių", dat: "mokesčiams", acc: "mokesčius", ins: "mokesčiais", loc: "mokesčiuose", voc: "mokesčiai" },
    },
  },
  {
    word: "mokykla", translation: "school", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "mokykla", gen: "mokyklos", dat: "mokyklai", acc: "mokyklą", ins: "mokykla", loc: "mokykloje", voc: "mokykla" },
      pl: { nom: "mokyklos", gen: "mokyklų", dat: "mokykloms", acc: "mokyklas", ins: "mokyklomis", loc: "mokyklose", voc: "mokyklos" },
    },
  },
  {
    word: "moteris", translation: "woman", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "moteris", gen: "moteries", dat: "moteriai", acc: "moterį", ins: "moterimi", loc: "moteryje", voc: "moterie" },
      pl: { nom: "moterys", gen: "moterų", dat: "moterims", acc: "moteris", ins: "moterimis", loc: "moteryse", voc: "moterys" },
    },
  },
  {
    word: "muzika", translation: "music", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "muzika", gen: "muzikos", dat: "muzikai", acc: "muziką", ins: "muzika", loc: "muzikoje", voc: "muzika" },
      pl: { nom: "muzikos", gen: "muzikų", dat: "muzikoms", acc: "muzikas", ins: "muzikomis", loc: "muzikose", voc: "muzikos" },
    },
  },
  {
    word: "mylia", translation: "mile", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "mylia", gen: "mylios", dat: "myliai", acc: "mylią", ins: "mylia", loc: "mylioje", voc: "mylia" },
      pl: { nom: "mylios", gen: "mylių", dat: "mylioms", acc: "mylias", ins: "myliomis", loc: "myliose", voc: "mylios" },
    },
  },
  {
    word: "mėnuo", translation: "month", pos: "noun", gender: "masc", declension: "5th declension (-uo)",
    forms: {
      sg: { nom: "mėnuo", gen: "mėnesio", dat: "mėnesiui", acc: "mėnesį", ins: "mėnesiu", loc: "mėnesyje", voc: "mėnesi" },
      pl: { nom: "mėnesiai", gen: "mėnesių", dat: "mėnesiams", acc: "mėnesius", ins: "mėnesiais", loc: "mėnesiuose", voc: "mėnesiai" },
    },
  },
  {
    word: "naktis", translation: "night", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "naktis", gen: "nakties", dat: "nakčiai", acc: "naktį", ins: "naktimi", loc: "naktyje", voc: "naktie" },
      pl: { nom: "naktys", gen: "naktų", dat: "naktims", acc: "naktis", ins: "naktimis", loc: "naktyse", voc: "naktys" },
    },
  },
  {
    word: "narys", translation: "member", pos: "noun", gender: "masc", declension: "1st declension (-ys)",
    forms: {
      sg: { nom: "narys", gen: "nario", dat: "nariui", acc: "narį", ins: "nariu", loc: "naryje", voc: "nary" },
      pl: { nom: "nariai", gen: "narių", dat: "nariams", acc: "narius", ins: "nariais", loc: "nariuose", voc: "nariai" },
    },
  },
  {
    word: "noras", translation: "desire", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "noras", gen: "noro", dat: "norui", acc: "norą", ins: "noru", loc: "nore", voc: "nore" },
      pl: { nom: "norai", gen: "norų", dat: "norams", acc: "norus", ins: "norais", loc: "noruose", voc: "norai" },
    },
  },
  {
    word: "nosis", translation: "nose", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "nosis", gen: "nosies", dat: "nosiai", acc: "nosį", ins: "nosimi", loc: "nosyje", voc: "nosie" },
      pl: { nom: "nosys", gen: "nosių", dat: "nosims", acc: "nosis", ins: "nosimis", loc: "nosyse", voc: "nosys" },
    },
  },
  {
    word: "numeris", translation: "number", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "numeris", gen: "numerio", dat: "numeriui", acc: "numerį", ins: "numeriu", loc: "numeryje", voc: "numeri" },
      pl: { nom: "numeriai", gen: "numerių", dat: "numeriams", acc: "numerius", ins: "numeriais", loc: "numeriuose", voc: "numeriai" },
    },
  },
  {
    word: "nuomonė", translation: "opinion", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "nuomonė", gen: "nuomonės", dat: "nuomonei", acc: "nuomonę", ins: "nuomone", loc: "nuomonėje", voc: "nuomone" },
      pl: { nom: "nuomonės", gen: "nuomonių", dat: "nuomonėms", acc: "nuomones", ins: "nuomonėmis", loc: "nuomonėse", voc: "nuomonės" },
    },
  },
  {
    word: "objektas", translation: "object", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "objektas", gen: "objekto", dat: "objektui", acc: "objektą", ins: "objektu", loc: "objekte", voc: "objekte" },
      pl: { nom: "objektai", gen: "objektų", dat: "objektams", acc: "objektus", ins: "objektais", loc: "objektuose", voc: "objektai" },
    },
  },
  {
    word: "oda", translation: "skin", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "oda", gen: "odos", dat: "odai", acc: "odą", ins: "oda", loc: "odoje", voc: "oda" },
      pl: { nom: "odos", gen: "odų", dat: "odoms", acc: "odas", ins: "odomis", loc: "odose", voc: "odos" },
    },
  },
  {
    word: "oras", translation: "air", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "oras", gen: "oro", dat: "orui", acc: "orą", ins: "oru", loc: "ore", voc: "ore" },
      pl: { nom: "orai", gen: "orų", dat: "orams", acc: "orus", ins: "orais", loc: "oruose", voc: "orai" },
    },
  },
  {
    word: "pabaiga", translation: "end", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "pabaiga", gen: "pabaigos", dat: "pabaigai", acc: "pabaigą", ins: "pabaiga", loc: "pabaigoje", voc: "pabaiga" },
      pl: { nom: "pabaigos", gen: "pabaigų", dat: "pabaigoms", acc: "pabaigas", ins: "pabaigomis", loc: "pabaigose", voc: "pabaigos" },
    },
  },
  {
    word: "padaras", translation: "creature", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "padaras", gen: "padaro", dat: "padarui", acc: "padarą", ins: "padaru", loc: "padare", voc: "padare" },
      pl: { nom: "padarai", gen: "padarų", dat: "padarams", acc: "padarus", ins: "padarais", loc: "padaruose", voc: "padarai" },
    },
  },
  {
    word: "parduotuvė", translation: "shop", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "parduotuvė", gen: "parduotuvės", dat: "parduotuvei", acc: "parduotuvę", ins: "parduotuve", loc: "parduotuvėje", voc: "parduotuve" },
      pl: { nom: "parduotuvės", gen: "parduotuvių", dat: "parduotuvėms", acc: "parduotuves", ins: "parduotuvėmis", loc: "parduotuvėse", voc: "parduotuvės" },
    },
  },
  {
    word: "pareiga", translation: "duty", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "pareiga", gen: "pareigos", dat: "pareigai", acc: "pareigą", ins: "pareiga", loc: "pareigoje", voc: "pareiga" },
      pl: { nom: "pareigos", gen: "pareigų", dat: "pareigoms", acc: "pareigas", ins: "pareigomis", loc: "pareigose", voc: "pareigos" },
    },
  },
  {
    word: "pareigūnas", translation: "officer", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "pareigūnas", gen: "pareigūno", dat: "pareigūnui", acc: "pareigūną", ins: "pareigūnu", loc: "pareigūne", voc: "pareigūne" },
      pl: { nom: "pareigūnai", gen: "pareigūnų", dat: "pareigūnams", acc: "pareigūnus", ins: "pareigūnais", loc: "pareigūnuose", voc: "pareigūnai" },
    },
  },
  {
    word: "pasaka", translation: "tale", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "pasaka", gen: "pasakos", dat: "pasakai", acc: "pasaką", ins: "pasaka", loc: "pasakoje", voc: "pasaka" },
      pl: { nom: "pasakos", gen: "pasakų", dat: "pasakoms", acc: "pasakas", ins: "pasakomis", loc: "pasakose", voc: "pasakos" },
    },
  },
  {
    word: "pasaulis", translation: "world", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "pasaulis", gen: "pasaulio", dat: "pasauliui", acc: "pasaulį", ins: "pasauliu", loc: "pasaulyje", voc: "pasauli" },
      pl: { nom: "pasauliai", gen: "pasaulių", dat: "pasauliams", acc: "pasaulius", ins: "pasauliais", loc: "pasauliuose", voc: "pasauliai" },
    },
  },
  {
    word: "paslaptis", translation: "secret", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "paslaptis", gen: "paslapties", dat: "paslapčiai", acc: "paslaptį", ins: "paslaptimi", loc: "paslaptyje", voc: "paslaptie" },
      pl: { nom: "paslaptys", gen: "paslapčių", dat: "paslaptims", acc: "paslaptis", ins: "paslaptimis", loc: "paslaptyse", voc: "paslaptys" },
    },
  },
  {
    word: "paslauga", translation: "service", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "paslauga", gen: "paslaugos", dat: "paslaugai", acc: "paslaugą", ins: "paslauga", loc: "paslaugoje", voc: "paslauga" },
      pl: { nom: "paslaugos", gen: "paslaugų", dat: "paslaugoms", acc: "paslaugas", ins: "paslaugomis", loc: "paslaugose", voc: "paslaugos" },
    },
  },
  {
    word: "pastaba", translation: "note", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "pastaba", gen: "pastabos", dat: "pastabai", acc: "pastabą", ins: "pastaba", loc: "pastaboje", voc: "pastaba" },
      pl: { nom: "pastabos", gen: "pastabų", dat: "pastaboms", acc: "pastabas", ins: "pastabomis", loc: "pastabose", voc: "pastabos" },
    },
  },
  {
    word: "pastatas", translation: "building", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "pastatas", gen: "pastato", dat: "pastatui", acc: "pastatą", ins: "pastatu", loc: "pastate", voc: "pastate" },
      pl: { nom: "pastatai", gen: "pastatų", dat: "pastatams", acc: "pastatus", ins: "pastatais", loc: "pastatuose", voc: "pastatai" },
    },
  },
  {
    word: "patirtis", translation: "experience", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "patirtis", gen: "patirties", dat: "patirčiai", acc: "patirtį", ins: "patirtimi", loc: "patirtyje", voc: "patirtie" },
      pl: { nom: "patirtys", gen: "patirčių", dat: "patirtims", acc: "patirtis", ins: "patirtimis", loc: "patirtyse", voc: "patirtys" },
    },
  },
  {
    word: "paukštis", translation: "bird", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "paukštis", gen: "paukščio", dat: "paukščiui", acc: "paukštį", ins: "paukščiu", loc: "paukštyje", voc: "paukšti" },
      pl: { nom: "paukščiai", gen: "paukščių", dat: "paukščiams", acc: "paukščius", ins: "paukščiais", loc: "paukščiuose", voc: "paukščiai" },
    },
  },
  {
    word: "pavasaris", translation: "spring", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "pavasaris", gen: "pavasario", dat: "pavasariui", acc: "pavasarį", ins: "pavasariu", loc: "pavasaryje", voc: "pavasari" },
      pl: { nom: "pavasariai", gen: "pavasarių", dat: "pavasariams", acc: "pavasarius", ins: "pavasariais", loc: "pavasariuose", voc: "pavasariai" },
    },
  },
  {
    word: "pavojus", translation: "danger", pos: "noun", gender: "masc", declension: "4th declension (-us)",
    forms: {
      sg: { nom: "pavojus", gen: "pavojaus", dat: "pavojui", acc: "pavojų", ins: "pavojumi", loc: "pavojuje", voc: "pavojau" },
      pl: { nom: "pavojai", gen: "pavojų", dat: "pavojams", acc: "pavojus", ins: "pavojais", loc: "pavojuose", voc: "pavojai" },
    },
  },
  {
    word: "pavyzdys", translation: "example", pos: "noun", gender: "masc", declension: "1st declension (-ys)",
    forms: {
      sg: { nom: "pavyzdys", gen: "pavyzdžio", dat: "pavyzdžiui", acc: "pavyzdį", ins: "pavyzdžiu", loc: "pavyzdyje", voc: "pavyzdy" },
      pl: { nom: "pavyzdžiai", gen: "pavyzdžių", dat: "pavyzdžiams", acc: "pavyzdžius", ins: "pavyzdžiais", loc: "pavyzdžiuose", voc: "pavyzdžiai" },
    },
  },
  {
    word: "petys", translation: "shoulder", pos: "noun", gender: "masc", declension: "1st declension (-ys)",
    forms: {
      sg: { nom: "petys", gen: "pečio", dat: "pečiui", acc: "petį", ins: "pečiu", loc: "petyje", voc: "pety" },
      pl: { nom: "pečiai", gen: "pečių", dat: "pečiams", acc: "pečius", ins: "pečiais", loc: "pečiuose", voc: "pečiai" },
    },
  },
  {
    word: "pirštas", translation: "finger", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "pirštas", gen: "piršto", dat: "pirštui", acc: "pirštą", ins: "pirštu", loc: "piršte", voc: "piršte" },
      pl: { nom: "pirštai", gen: "pirštų", dat: "pirštams", acc: "pirštus", ins: "pirštais", loc: "pirštuose", voc: "pirštai" },
    },
  },
  {
    word: "planas", translation: "plan", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "planas", gen: "plano", dat: "planui", acc: "planą", ins: "planu", loc: "plane", voc: "plane" },
      pl: { nom: "planai", gen: "planų", dat: "planams", acc: "planus", ins: "planais", loc: "planuose", voc: "planai" },
    },
  },
  {
    word: "pokalbis", translation: "conversation", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "pokalbis", gen: "pokalbio", dat: "pokalbiui", acc: "pokalbį", ins: "pokalbiu", loc: "pokalbyje", voc: "pokalbi" },
      pl: { nom: "pokalbiai", gen: "pokalbių", dat: "pokalbiams", acc: "pokalbius", ins: "pokalbiais", loc: "pokalbiuose", voc: "pokalbiai" },
    },
  },
  {
    word: "policija", translation: "police", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "policija", gen: "policijos", dat: "policijai", acc: "policiją", ins: "policija", loc: "policijoje", voc: "policija" },
      pl: { nom: "policijos", gen: "policijų", dat: "policijoms", acc: "policijas", ins: "policijomis", loc: "policijose", voc: "policijos" },
    },
  },
  {
    word: "ponas", translation: "sir", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "ponas", gen: "pono", dat: "ponui", acc: "poną", ins: "ponu", loc: "pone", voc: "pone" },
      pl: { nom: "ponai", gen: "ponų", dat: "ponams", acc: "ponus", ins: "ponais", loc: "ponuose", voc: "ponai" },
    },
  },
  {
    word: "popierius", translation: "paper", pos: "noun", gender: "masc", declension: "4th declension (-us)",
    forms: {
      sg: { nom: "popierius", gen: "popieriaus", dat: "popieriui", acc: "popierių", ins: "popieriumi", loc: "popieriuje", voc: "popieriau" },
      pl: { nom: "popieriai", gen: "popierių", dat: "popieriams", acc: "popierius", ins: "popieriais", loc: "popieriuose", voc: "popieriai" },
    },
  },
  {
    word: "pora", translation: "couple", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "pora", gen: "poros", dat: "porai", acc: "porą", ins: "pora", loc: "poroje", voc: "pora" },
      pl: { nom: "poros", gen: "porų", dat: "poroms", acc: "poras", ins: "poromis", loc: "porose", voc: "poros" },
    },
  },
  {
    word: "posėdis", translation: "meeting", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "posėdis", gen: "posėdžio", dat: "posėdžiui", acc: "posėdį", ins: "posėdžiu", loc: "posėdyje", voc: "posėdi" },
      pl: { nom: "posėdžiai", gen: "posėdžių", dat: "posėdžiams", acc: "posėdžius", ins: "posėdžiais", loc: "posėdžiuose", voc: "posėdžiai" },
    },
  },
  {
    word: "pozicija", translation: "position", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "pozicija", gen: "pozicijos", dat: "pozicijai", acc: "poziciją", ins: "pozicija", loc: "pozicijoje", voc: "pozicija" },
      pl: { nom: "pozicijos", gen: "pozicijų", dat: "pozicijoms", acc: "pozicijas", ins: "pozicijomis", loc: "pozicijose", voc: "pozicijos" },
    },
  },
  {
    word: "pragaras", translation: "hell", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "pragaras", gen: "pragaro", dat: "pragarui", acc: "pragarą", ins: "pragaru", loc: "pragare", voc: "pragare" },
      pl: { nom: "pragarai", gen: "pragarų", dat: "pragarams", acc: "pragarus", ins: "pragarais", loc: "pragaruose", voc: "pragarai" },
    },
  },
  {
    word: "pranešimas", translation: "message", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "pranešimas", gen: "pranešimo", dat: "pranešimui", acc: "pranešimą", ins: "pranešimu", loc: "pranešime", voc: "pranešime" },
      pl: { nom: "pranešimai", gen: "pranešimų", dat: "pranešimams", acc: "pranešimus", ins: "pranešimais", loc: "pranešimuose", voc: "pranešimai" },
    },
  },
  {
    word: "prasmė", translation: "sense", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "prasmė", gen: "prasmės", dat: "prasmei", acc: "prasmę", ins: "prasme", loc: "prasmėje", voc: "prasme" },
      pl: { nom: "prasmės", gen: "prasmių", dat: "prasmėms", acc: "prasmes", ins: "prasmėmis", loc: "prasmėse", voc: "prasmės" },
    },
  },
  {
    word: "priešas", translation: "enemy", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "priešas", gen: "priešo", dat: "priešui", acc: "priešą", ins: "priešu", loc: "prieše", voc: "prieše" },
      pl: { nom: "priešai", gen: "priešų", dat: "priešams", acc: "priešus", ins: "priešais", loc: "priešuose", voc: "priešai" },
    },
  },
  {
    word: "priežastis", translation: "reason", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "priežastis", gen: "priežasties", dat: "priežasčiai", acc: "priežastį", ins: "priežastimi", loc: "priežastyje", voc: "priežastie" },
      pl: { nom: "priežastys", gen: "priežasčių", dat: "priežastims", acc: "priežastis", ins: "priežastimis", loc: "priežastyse", voc: "priežastys" },
    },
  },
  {
    word: "problema", translation: "problem", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "problema", gen: "problemos", dat: "problemai", acc: "problemą", ins: "problema", loc: "problemoje", voc: "problema" },
      pl: { nom: "problemos", gen: "problemų", dat: "problemoms", acc: "problemas", ins: "problemomis", loc: "problemose", voc: "problemos" },
    },
  },
  {
    word: "proga", translation: "occasion", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "proga", gen: "progos", dat: "progai", acc: "progą", ins: "proga", loc: "progoje", voc: "proga" },
      pl: { nom: "progos", gen: "progų", dat: "progoms", acc: "progas", ins: "progomis", loc: "progose", voc: "progos" },
    },
  },
  {
    word: "protas", translation: "mind", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "protas", gen: "proto", dat: "protui", acc: "protą", ins: "protu", loc: "prote", voc: "prote" },
      pl: { nom: "protai", gen: "protų", dat: "protams", acc: "protus", ins: "protais", loc: "protuose", voc: "protai" },
    },
  },
  {
    word: "puslapis", translation: "page", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "puslapis", gen: "puslapio", dat: "puslapiui", acc: "puslapį", ins: "puslapiu", loc: "puslapyje", voc: "puslapi" },
      pl: { nom: "puslapiai", gen: "puslapių", dat: "puslapiams", acc: "puslapius", ins: "puslapiais", loc: "puslapiuose", voc: "puslapiai" },
    },
  },
  {
    word: "pusė", translation: "side", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "pusė", gen: "pusės", dat: "pusei", acc: "pusę", ins: "puse", loc: "pusėje", voc: "puse" },
      pl: { nom: "pusės", gen: "pusių", dat: "pusėms", acc: "puses", ins: "pusėmis", loc: "pusėse", voc: "pusės" },
    },
  },
  {
    word: "pyktis", translation: "anger", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "pyktis", gen: "pykčio", dat: "pykčiui", acc: "pyktį", ins: "pykčiu", loc: "pyktyje", voc: "pykti" },
      pl: { nom: "pykčiai", gen: "pykčių", dat: "pykčiams", acc: "pykčius", ins: "pykčiais", loc: "pykčiuose", voc: "pykčiai" },
    },
  },
  {
    word: "pėda", translation: "foot", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "pėda", gen: "pėdos", dat: "pėdai", acc: "pėdą", ins: "pėda", loc: "pėdoje", voc: "pėda" },
      pl: { nom: "pėdos", gen: "pėdų", dat: "pėdoms", acc: "pėdas", ins: "pėdomis", loc: "pėdose", voc: "pėdos" },
    },
  },
  {
    word: "raktas", translation: "key", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "raktas", gen: "rakto", dat: "raktui", acc: "raktą", ins: "raktu", loc: "rakte", voc: "rakte" },
      pl: { nom: "raktai", gen: "raktų", dat: "raktams", acc: "raktus", ins: "raktais", loc: "raktuose", voc: "raktai" },
    },
  },
  {
    word: "ratas", translation: "circle", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "ratas", gen: "rato", dat: "ratui", acc: "ratą", ins: "ratu", loc: "rate", voc: "rate" },
      pl: { nom: "ratai", gen: "ratų", dat: "ratams", acc: "ratus", ins: "ratais", loc: "ratuose", voc: "ratai" },
    },
  },
  {
    word: "rašytojas", translation: "writer", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "rašytojas", gen: "rašytojo", dat: "rašytojui", acc: "rašytoją", ins: "rašytoju", loc: "rašytojuje", voc: "rašytojau" },
      pl: { nom: "rašytojai", gen: "rašytojų", dat: "rašytojams", acc: "rašytojus", ins: "rašytojais", loc: "rašytojuose", voc: "rašytojai" },
    },
  },
  {
    word: "reikalas", translation: "affair", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "reikalas", gen: "reikalo", dat: "reikalui", acc: "reikalą", ins: "reikalu", loc: "reikale", voc: "reikale" },
      pl: { nom: "reikalai", gen: "reikalų", dat: "reikalams", acc: "reikalus", ins: "reikalais", loc: "reikaluose", voc: "reikalai" },
    },
  },
  {
    word: "rezultatas", translation: "result", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "rezultatas", gen: "rezultato", dat: "rezultatui", acc: "rezultatą", ins: "rezultatu", loc: "rezultate", voc: "rezultate" },
      pl: { nom: "rezultatai", gen: "rezultatų", dat: "rezultatams", acc: "rezultatus", ins: "rezultatais", loc: "rezultatuose", voc: "rezultatai" },
    },
  },
  {
    word: "rytas", translation: "morning", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "rytas", gen: "ryto", dat: "rytui", acc: "rytą", ins: "rytu", loc: "ryte", voc: "ryte" },
      pl: { nom: "rytai", gen: "rytų", dat: "rytams", acc: "rytus", ins: "rytais", loc: "rytuose", voc: "rytai" },
    },
  },
  {
    word: "salė", translation: "hall", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "salė", gen: "salės", dat: "salei", acc: "salę", ins: "sale", loc: "salėje", voc: "sale" },
      pl: { nom: "salės", gen: "salių", dat: "salėms", acc: "sales", ins: "salėmis", loc: "salėse", voc: "salės" },
    },
  },
  {
    word: "santuoka", translation: "marriage", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "santuoka", gen: "santuokos", dat: "santuokai", acc: "santuoką", ins: "santuoka", loc: "santuokoje", voc: "santuoka" },
      pl: { nom: "santuokos", gen: "santuokų", dat: "santuokoms", acc: "santuokas", ins: "santuokomis", loc: "santuokose", voc: "santuokos" },
    },
  },
  {
    word: "savaitė", translation: "week", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "savaitė", gen: "savaitės", dat: "savaitei", acc: "savaitę", ins: "savaite", loc: "savaitėje", voc: "savaite" },
      pl: { nom: "savaitės", gen: "savaičių", dat: "savaitėms", acc: "savaites", ins: "savaitėmis", loc: "savaitėse", voc: "savaitės" },
    },
  },
  {
    word: "sesuo", translation: "sister", pos: "noun", gender: "fem", declension: "5th declension (-uo)",
    forms: {
      sg: { nom: "sesuo", gen: "sesers", dat: "seseriai", acc: "seserį", ins: "seseria", loc: "seseryje", voc: "seserie" },
      pl: { nom: "seserys", gen: "seserų", dat: "seserims", acc: "seseris", ins: "seserimis", loc: "seseryse", voc: "seserys" },
    },
  },
  {
    word: "siela", translation: "soul", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "siela", gen: "sielos", dat: "sielai", acc: "sielą", ins: "siela", loc: "sieloje", voc: "siela" },
      pl: { nom: "sielos", gen: "sielų", dat: "sieloms", acc: "sielas", ins: "sielomis", loc: "sielose", voc: "sielos" },
    },
  },
  {
    word: "siena", translation: "wall", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "siena", gen: "sienos", dat: "sienai", acc: "sieną", ins: "siena", loc: "sienoje", voc: "siena" },
      pl: { nom: "sienos", gen: "sienų", dat: "sienoms", acc: "sienas", ins: "sienomis", loc: "sienose", voc: "sienos" },
    },
  },
  {
    word: "sistema", translation: "system", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "sistema", gen: "sistemos", dat: "sistemai", acc: "sistemą", ins: "sistema", loc: "sistemoje", voc: "sistema" },
      pl: { nom: "sistemos", gen: "sistemų", dat: "sistemoms", acc: "sistemas", ins: "sistemomis", loc: "sistemose", voc: "sistemos" },
    },
  },
  {
    word: "situacija", translation: "situation", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "situacija", gen: "situacijos", dat: "situacijai", acc: "situaciją", ins: "situacija", loc: "situacijoje", voc: "situacija" },
      pl: { nom: "situacijos", gen: "situacijų", dat: "situacijoms", acc: "situacijas", ins: "situacijomis", loc: "situacijose", voc: "situacijos" },
    },
  },
  {
    word: "skaičius", translation: "figure", pos: "noun", gender: "masc", declension: "4th declension (-us)",
    forms: {
      sg: { nom: "skaičius", gen: "skaičiaus", dat: "skaičiui", acc: "skaičių", ins: "skaičiumi", loc: "skaičiuje", voc: "skaičiau" },
      pl: { nom: "skaičiai", gen: "skaičių", dat: "skaičiams", acc: "skaičius", ins: "skaičiais", loc: "skaičiuose", voc: "skaičiai" },
    },
  },
  {
    word: "skausmas", translation: "pain", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "skausmas", gen: "skausmo", dat: "skausmui", acc: "skausmą", ins: "skausmu", loc: "skausme", voc: "skausme" },
      pl: { nom: "skausmai", gen: "skausmų", dat: "skausmams", acc: "skausmus", ins: "skausmais", loc: "skausmuose", voc: "skausmai" },
    },
  },
  {
    word: "skirtumas", translation: "difference", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "skirtumas", gen: "skirtumo", dat: "skirtumui", acc: "skirtumą", ins: "skirtumu", loc: "skirtume", voc: "skirtume" },
      pl: { nom: "skirtumai", gen: "skirtumų", dat: "skirtumams", acc: "skirtumus", ins: "skirtumais", loc: "skirtumuose", voc: "skirtumai" },
    },
  },
  {
    word: "skonis", translation: "taste", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "skonis", gen: "skonio", dat: "skoniui", acc: "skonį", ins: "skoniu", loc: "skonyje", voc: "skoni" },
      pl: { nom: "skoniai", gen: "skonių", dat: "skoniams", acc: "skonius", ins: "skoniais", loc: "skoniuose", voc: "skoniai" },
    },
  },
  {
    word: "skruostas", translation: "cheek", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "skruostas", gen: "skruosto", dat: "skruostui", acc: "skruostą", ins: "skruostu", loc: "skruoste", voc: "skruoste" },
      pl: { nom: "skruostai", gen: "skruostų", dat: "skruostams", acc: "skruostus", ins: "skruostais", loc: "skruostuose", voc: "skruostai" },
    },
  },
  {
    word: "skylė", translation: "hole", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "skylė", gen: "skylės", dat: "skylei", acc: "skylę", ins: "skyle", loc: "skylėje", voc: "skyle" },
      pl: { nom: "skylės", gen: "skylių", dat: "skylėms", acc: "skyles", ins: "skylėmis", loc: "skylėse", voc: "skylės" },
    },
  },
  {
    word: "sniegas", translation: "snow", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "sniegas", gen: "sniego", dat: "sniegui", acc: "sniegą", ins: "sniegu", loc: "sniege", voc: "sniege" },
      pl: { nom: "sniegai", gen: "sniegų", dat: "sniegams", acc: "sniegus", ins: "sniegais", loc: "snieguose", voc: "sniegai" },
    },
  },
  {
    word: "sodas", translation: "garden", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "sodas", gen: "sodo", dat: "sodui", acc: "sodą", ins: "sodu", loc: "sode", voc: "sode" },
      pl: { nom: "sodai", gen: "sodų", dat: "sodams", acc: "sodus", ins: "sodais", loc: "soduose", voc: "sodai" },
    },
  },
  {
    word: "spalva", translation: "color", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "spalva", gen: "spalvos", dat: "spalvai", acc: "spalvą", ins: "spalva", loc: "spalvoje", voc: "spalva" },
      pl: { nom: "spalvos", gen: "spalvų", dat: "spalvoms", acc: "spalvas", ins: "spalvomis", loc: "spalvose", voc: "spalvos" },
    },
  },
  {
    word: "sritis", translation: "area", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "sritis", gen: "srities", dat: "sričiai", acc: "sritį", ins: "sritimi", loc: "srityje", voc: "sritie" },
      pl: { nom: "sritys", gen: "sričių", dat: "sritims", acc: "sritis", ins: "sritimis", loc: "srityse", voc: "sritys" },
    },
  },
  {
    word: "stiklas", translation: "glass", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "stiklas", gen: "stiklo", dat: "stiklui", acc: "stiklą", ins: "stiklu", loc: "stikle", voc: "stikle" },
      pl: { nom: "stiklai", gen: "stiklų", dat: "stiklams", acc: "stiklus", ins: "stiklais", loc: "stikluose", voc: "stiklai" },
    },
  },
  {
    word: "stotis", translation: "station", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "stotis", gen: "stoties", dat: "stočiai", acc: "stotį", ins: "stotimi", loc: "stotyje", voc: "stotie" },
      pl: { nom: "stotys", gen: "stočių", dat: "stotims", acc: "stotis", ins: "stotimis", loc: "stotyse", voc: "stotys" },
    },
  },
  {
    word: "stovykla", translation: "camp", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "stovykla", gen: "stovyklos", dat: "stovyklai", acc: "stovyklą", ins: "stovykla", loc: "stovykloje", voc: "stovykla" },
      pl: { nom: "stovyklos", gen: "stovyklų", dat: "stovykloms", acc: "stovyklas", ins: "stovyklomis", loc: "stovyklose", voc: "stovyklos" },
    },
  },
  {
    word: "svajonė", translation: "dream", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "svajonė", gen: "svajonės", dat: "svajonei", acc: "svajonę", ins: "svajone", loc: "svajonėje", voc: "svajone" },
      pl: { nom: "svajonės", gen: "svajonių", dat: "svajonėms", acc: "svajones", ins: "svajonėmis", loc: "svajonėse", voc: "svajonės" },
    },
  },
  {
    word: "svaras", translation: "pound", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "svaras", gen: "svaro", dat: "svarui", acc: "svarą", ins: "svaru", loc: "svare", voc: "svare" },
      pl: { nom: "svarai", gen: "svarų", dat: "svarams", acc: "svarus", ins: "svarais", loc: "svaruose", voc: "svarai" },
    },
  },
  {
    word: "svečias", translation: "guest", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "svečias", gen: "svečio", dat: "svečiui", acc: "svečią", ins: "svečiu", loc: "svetyje", voc: "svety" },
      pl: { nom: "svečiai", gen: "svečių", dat: "svečiams", acc: "svečius", ins: "svečiais", loc: "svečiuose", voc: "svečiai" },
    },
  },
  {
    word: "sąlyga", translation: "condition", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "sąlyga", gen: "sąlygos", dat: "sąlygai", acc: "sąlygą", ins: "sąlyga", loc: "sąlygoje", voc: "sąlyga" },
      pl: { nom: "sąlygos", gen: "sąlygų", dat: "sąlygoms", acc: "sąlygas", ins: "sąlygomis", loc: "sąlygose", voc: "sąlygos" },
    },
  },
  {
    word: "sąskaita", translation: "account", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "sąskaita", gen: "sąskaitos", dat: "sąskaitai", acc: "sąskaitą", ins: "sąskaita", loc: "sąskaitoje", voc: "sąskaita" },
      pl: { nom: "sąskaitos", gen: "sąskaitų", dat: "sąskaitoms", acc: "sąskaitas", ins: "sąskaitomis", loc: "sąskaitose", voc: "sąskaitos" },
    },
  },
  {
    word: "taisyklė", translation: "rule", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "taisyklė", gen: "taisyklės", dat: "taisyklei", acc: "taisyklę", ins: "taisykle", loc: "taisyklėje", voc: "taisykle" },
      pl: { nom: "taisyklės", gen: "taisyklių", dat: "taisyklėms", acc: "taisykles", ins: "taisyklėmis", loc: "taisyklėse", voc: "taisyklės" },
    },
  },
  {
    word: "tamsa", translation: "darkness", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "tamsa", gen: "tamsos", dat: "tamsai", acc: "tamsą", ins: "tamsa", loc: "tamsoje", voc: "tamsa" },
      pl: { nom: "tamsos", gen: "tamsų", dat: "tamsoms", acc: "tamsas", ins: "tamsomis", loc: "tamsose", voc: "tamsos" },
    },
  },
  {
    word: "tarnas", translation: "servant", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "tarnas", gen: "tarno", dat: "tarnui", acc: "tarną", ins: "tarnu", loc: "tarne", voc: "tarne" },
      pl: { nom: "tarnai", gen: "tarnų", dat: "tarnams", acc: "tarnus", ins: "tarnais", loc: "tarnuose", voc: "tarnai" },
    },
  },
  {
    word: "taškas", translation: "point", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "taškas", gen: "taško", dat: "taškui", acc: "tašką", ins: "tašku", loc: "taške", voc: "taške" },
      pl: { nom: "taškai", gen: "taškų", dat: "taškams", acc: "taškus", ins: "taškais", loc: "taškuose", voc: "taškai" },
    },
  },
  {
    word: "teismas", translation: "court", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "teismas", gen: "teismo", dat: "teismui", acc: "teismą", ins: "teismu", loc: "teisme", voc: "teisme" },
      pl: { nom: "teismai", gen: "teismų", dat: "teismams", acc: "teismus", ins: "teismais", loc: "teismuose", voc: "teismai" },
    },
  },
  {
    word: "teisė", translation: "right", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "teisė", gen: "teisės", dat: "teisei", acc: "teisę", ins: "teise", loc: "teisėje", voc: "teise" },
      pl: { nom: "teisės", gen: "teisių", dat: "teisėms", acc: "teises", ins: "teisėmis", loc: "teisėse", voc: "teisės" },
    },
  },
  {
    word: "teisėjas", translation: "judge", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "teisėjas", gen: "teisėjo", dat: "teisėjui", acc: "teisėją", ins: "teisėju", loc: "teisėjuje", voc: "teisėjau" },
      pl: { nom: "teisėjai", gen: "teisėjų", dat: "teisėjams", acc: "teisėjus", ins: "teisėjais", loc: "teisėjuose", voc: "teisėjai" },
    },
  },
  {
    word: "telefonas", translation: "phone", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "telefonas", gen: "telefono", dat: "telefonui", acc: "telefoną", ins: "telefonu", loc: "telefone", voc: "telefone" },
      pl: { nom: "telefonai", gen: "telefonų", dat: "telefonams", acc: "telefonus", ins: "telefonais", loc: "telefonuose", voc: "telefonai" },
    },
  },
  {
    word: "tema", translation: "subject", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "tema", gen: "temos", dat: "temai", acc: "temą", ins: "tema", loc: "temoje", voc: "tema" },
      pl: { nom: "temos", gen: "temų", dat: "temoms", acc: "temas", ins: "temomis", loc: "temose", voc: "temos" },
    },
  },
  {
    word: "terminas", translation: "term", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "terminas", gen: "termino", dat: "terminui", acc: "terminą", ins: "terminu", loc: "termine", voc: "termine" },
      pl: { nom: "terminai", gen: "terminų", dat: "terminams", acc: "terminus", ins: "terminais", loc: "terminuose", voc: "terminai" },
    },
  },
  {
    word: "tiesa", translation: "true", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "tiesa", gen: "tiesos", dat: "tiesai", acc: "tiesą", ins: "tiesa", loc: "tiesoje", voc: "tiesa" },
      pl: { nom: "tiesos", gen: "tiesų", dat: "tiesoms", acc: "tiesas", ins: "tiesomis", loc: "tiesose", voc: "tiesos" },
    },
  },
  {
    word: "traukinys", translation: "train", pos: "noun", gender: "masc", declension: "1st declension (-ys)",
    forms: {
      sg: { nom: "traukinys", gen: "traukinio", dat: "traukiniui", acc: "traukinį", ins: "traukiniu", loc: "traukinyje", voc: "traukiny" },
      pl: { nom: "traukiniai", gen: "traukinių", dat: "traukiniams", acc: "traukinius", ins: "traukiniais", loc: "traukiniuose", voc: "traukiniai" },
    },
  },
  {
    word: "triukšmas", translation: "noise", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "triukšmas", gen: "triukšmo", dat: "triukšmui", acc: "triukšmą", ins: "triukšmu", loc: "triukšme", voc: "triukšme" },
      pl: { nom: "triukšmai", gen: "triukšmų", dat: "triukšmams", acc: "triukšmus", ins: "triukšmais", loc: "triukšmuose", voc: "triukšmai" },
    },
  },
  {
    word: "tyla", translation: "silence", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "tyla", gen: "tylos", dat: "tylai", acc: "tylą", ins: "tyla", loc: "tyloje", voc: "tyla" },
      pl: { nom: "tylos", gen: "tylų", dat: "tyloms", acc: "tylas", ins: "tylomis", loc: "tylose", voc: "tylos" },
    },
  },
  {
    word: "tėvas", translation: "father", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "tėvas", gen: "tėvo", dat: "tėvui", acc: "tėvą", ins: "tėvu", loc: "tėve", voc: "tėve" },
      pl: { nom: "tėvai", gen: "tėvų", dat: "tėvams", acc: "tėvus", ins: "tėvais", loc: "tėvuose", voc: "tėvai" },
    },
  },
  {
    word: "ugnis", translation: "fire", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "ugnis", gen: "ugnies", dat: "ugniai", acc: "ugnį", ins: "ugnimi", loc: "ugnyje", voc: "ugnie" },
      pl: { nom: "ugnys", gen: "ugnių", dat: "ugnims", acc: "ugnis", ins: "ugnimis", loc: "ugnyse", voc: "ugnys" },
    },
  },
  {
    word: "upė", translation: "river", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "upė", gen: "upės", dat: "upei", acc: "upę", ins: "upe", loc: "upėje", voc: "upe" },
      pl: { nom: "upės", gen: "upių", dat: "upėms", acc: "upes", ins: "upėmis", loc: "upėse", voc: "upės" },
    },
  },
  {
    word: "vaikinas", translation: "guy", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "vaikinas", gen: "vaikino", dat: "vaikinui", acc: "vaikiną", ins: "vaikinu", loc: "vaikine", voc: "vaikine" },
      pl: { nom: "vaikinai", gen: "vaikinų", dat: "vaikinams", acc: "vaikinus", ins: "vaikinais", loc: "vaikinuose", voc: "vaikinai" },
    },
  },
  {
    word: "vaizdas", translation: "picture", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "vaizdas", gen: "vaizdo", dat: "vaizdui", acc: "vaizdą", ins: "vaizdu", loc: "vaizde", voc: "vaizde" },
      pl: { nom: "vaizdai", gen: "vaizdų", dat: "vaizdams", acc: "vaizdus", ins: "vaizdais", loc: "vaizduose", voc: "vaizdai" },
    },
  },
  {
    word: "vakarienė", translation: "dinner", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "vakarienė", gen: "vakarienės", dat: "vakarienei", acc: "vakarienę", ins: "vakariene", loc: "vakarienėje", voc: "vakariene" },
      pl: { nom: "vakarienės", gen: "vakarienių", dat: "vakarienėms", acc: "vakarienes", ins: "vakarienėmis", loc: "vakarienėse", voc: "vakarienės" },
    },
  },
  {
    word: "vakarėlis", translation: "party", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "vakarėlis", gen: "vakarėlio", dat: "vakarėliui", acc: "vakarėlį", ins: "vakarėliu", loc: "vakarėlyje", voc: "vakarėli" },
      pl: { nom: "vakarėliai", gen: "vakarėlių", dat: "vakarėliams", acc: "vakarėlius", ins: "vakarėliais", loc: "vakarėliuose", voc: "vakarėliai" },
    },
  },
  {
    word: "valanda", translation: "hour", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "valanda", gen: "valandos", dat: "valandai", acc: "valandą", ins: "valanda", loc: "valandoje", voc: "valanda" },
      pl: { nom: "valandos", gen: "valandų", dat: "valandoms", acc: "valandas", ins: "valandomis", loc: "valandose", voc: "valandos" },
    },
  },
  {
    word: "valtis", translation: "boat", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "valtis", gen: "valties", dat: "valčiai", acc: "valtį", ins: "valtimi", loc: "valtyje", voc: "valtie" },
      pl: { nom: "valtys", gen: "valčių", dat: "valtims", acc: "valtis", ins: "valtimis", loc: "valtyse", voc: "valtys" },
    },
  },
  {
    word: "vardas", translation: "name", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "vardas", gen: "vardo", dat: "vardui", acc: "vardą", ins: "vardu", loc: "varde", voc: "varde" },
      pl: { nom: "vardai", gen: "vardų", dat: "vardams", acc: "vardus", ins: "vardais", loc: "varduose", voc: "vardai" },
    },
  },
  {
    word: "vargšas", translation: "poor", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "vargšas", gen: "vargšo", dat: "vargšui", acc: "vargšą", ins: "vargšu", loc: "vargše", voc: "vargše" },
      pl: { nom: "vargšai", gen: "vargšų", dat: "vargšams", acc: "vargšus", ins: "vargšais", loc: "vargšuose", voc: "vargšai" },
    },
  },
  {
    word: "vasara", translation: "summer", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "vasara", gen: "vasaros", dat: "vasarai", acc: "vasarą", ins: "vasara", loc: "vasaroje", voc: "vasara" },
      pl: { nom: "vasaros", gen: "vasarų", dat: "vasaroms", acc: "vasaras", ins: "vasaromis", loc: "vasarose", voc: "vasaros" },
    },
  },
  {
    word: "veidas", translation: "face", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "veidas", gen: "veido", dat: "veidui", acc: "veidą", ins: "veidu", loc: "veide", voc: "veide" },
      pl: { nom: "veidai", gen: "veidų", dat: "veidams", acc: "veidus", ins: "veidais", loc: "veiduose", voc: "veidai" },
    },
  },
  {
    word: "veiksmas", translation: "action", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "veiksmas", gen: "veiksmo", dat: "veiksmui", acc: "veiksmą", ins: "veiksmu", loc: "veiksme", voc: "veiksme" },
      pl: { nom: "veiksmai", gen: "veiksmų", dat: "veiksmams", acc: "veiksmus", ins: "veiksmais", loc: "veiksmuose", voc: "veiksmai" },
    },
  },
  {
    word: "verslas", translation: "business", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "verslas", gen: "verslo", dat: "verslui", acc: "verslą", ins: "verslu", loc: "versle", voc: "versle" },
      pl: { nom: "verslai", gen: "verslų", dat: "verslams", acc: "verslus", ins: "verslais", loc: "versluose", voc: "verslai" },
    },
  },
  {
    word: "vidurys", translation: "middle", pos: "noun", gender: "masc", declension: "1st declension (-ys)",
    forms: {
      sg: { nom: "vidurys", gen: "vidurio", dat: "viduriui", acc: "vidurį", ins: "viduriu", loc: "viduryje", voc: "vidury" },
      pl: { nom: "viduriai", gen: "vidurių", dat: "viduriams", acc: "vidurius", ins: "viduriais", loc: "viduriuose", voc: "viduriai" },
    },
  },
  {
    word: "vieta", translation: "place", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "vieta", gen: "vietos", dat: "vietai", acc: "vietą", ins: "vieta", loc: "vietoje", voc: "vieta" },
      pl: { nom: "vietos", gen: "vietų", dat: "vietoms", acc: "vietas", ins: "vietomis", loc: "vietose", voc: "vietos" },
    },
  },
  {
    word: "viešbutis", translation: "hotel", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "viešbutis", gen: "viešbučio", dat: "viešbučiui", acc: "viešbutį", ins: "viešbučiu", loc: "viešbutyje", voc: "viešbuti" },
      pl: { nom: "viešbučiai", gen: "viešbučių", dat: "viešbučiams", acc: "viešbučius", ins: "viešbučiais", loc: "viešbučiuose", voc: "viešbučiai" },
    },
  },
  {
    word: "virtuvė", translation: "kitchen", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "virtuvė", gen: "virtuvės", dat: "virtuvei", acc: "virtuvę", ins: "virtuve", loc: "virtuvėje", voc: "virtuve" },
      pl: { nom: "virtuvės", gen: "virtuvių", dat: "virtuvėms", acc: "virtuves", ins: "virtuvėmis", loc: "virtuvėse", voc: "virtuvės" },
    },
  },
  {
    word: "viršininkas", translation: "chief", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "viršininkas", gen: "viršininko", dat: "viršininkui", acc: "viršininką", ins: "viršininku", loc: "viršininke", voc: "viršininke" },
      pl: { nom: "viršininkai", gen: "viršininkų", dat: "viršininkams", acc: "viršininkus", ins: "viršininkais", loc: "viršininkuose", voc: "viršininkai" },
    },
  },
  {
    word: "viršus", translation: "top", pos: "noun", gender: "masc", declension: "4th declension (-us)",
    forms: {
      sg: { nom: "viršus", gen: "viršaus", dat: "viršui", acc: "viršų", ins: "viršumi", loc: "viršuje", voc: "viršau" },
      pl: { nom: "viršūs", gen: "viršų", dat: "viršums", acc: "viršus", ins: "viršumis", loc: "viršuose", voc: "viršūs" },
    },
  },
  {
    word: "visuomenė", translation: "society", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "visuomenė", gen: "visuomenės", dat: "visuomenei", acc: "visuomenę", ins: "visuomene", loc: "visuomenėje", voc: "visuomene" },
      pl: { nom: "visuomenės", gen: "visuomenių", dat: "visuomenėms", acc: "visuomenes", ins: "visuomenėmis", loc: "visuomenėse", voc: "visuomenės" },
    },
  },
  {
    word: "vynas", translation: "wine", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "vynas", gen: "vyno", dat: "vynui", acc: "vyną", ins: "vynu", loc: "vyne", voc: "vyne" },
      pl: { nom: "vynai", gen: "vynų", dat: "vynams", acc: "vynus", ins: "vynais", loc: "vynuose", voc: "vynai" },
    },
  },
  {
    word: "vyriausybė", translation: "government", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "vyriausybė", gen: "vyriausybės", dat: "vyriausybei", acc: "vyriausybę", ins: "vyriausybe", loc: "vyriausybėje", voc: "vyriausybe" },
      pl: { nom: "vyriausybės", gen: "vyriausybių", dat: "vyriausybėms", acc: "vyriausybes", ins: "vyriausybėmis", loc: "vyriausybėse", voc: "vyriausybės" },
    },
  },
  {
    word: "vėjas", translation: "wind", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "vėjas", gen: "vėjo", dat: "vėjui", acc: "vėją", ins: "vėju", loc: "vėjuje", voc: "vėjau" },
      pl: { nom: "vėjai", gen: "vėjų", dat: "vėjams", acc: "vėjus", ins: "vėjais", loc: "vėjuose", voc: "vėjai" },
    },
  },
  {
    word: "įmonė", translation: "company", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "įmonė", gen: "įmonės", dat: "įmonei", acc: "įmonę", ins: "įmone", loc: "įmonėje", voc: "įmone" },
      pl: { nom: "įmonės", gen: "įmonių", dat: "įmonėms", acc: "įmones", ins: "įmonėmis", loc: "įmonėse", voc: "įmonės" },
    },
  },
  {
    word: "įrašas", translation: "record", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "įrašas", gen: "įrašo", dat: "įrašui", acc: "įrašą", ins: "įrašu", loc: "įraše", voc: "įraše" },
      pl: { nom: "įrašai", gen: "įrašų", dat: "įrašams", acc: "įrašus", ins: "įrašais", loc: "įrašuose", voc: "įrašai" },
    },
  },
  {
    word: "įsakymas", translation: "order", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "įsakymas", gen: "įsakymo", dat: "įsakymui", acc: "įsakymą", ins: "įsakymu", loc: "įsakyme", voc: "įsakyme" },
      pl: { nom: "įsakymai", gen: "įsakymų", dat: "įsakymams", acc: "įsakymus", ins: "įsakymais", loc: "įsakymuose", voc: "įsakymai" },
    },
  },
  {
    word: "įvykis", translation: "event", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "įvykis", gen: "įvykio", dat: "įvykiui", acc: "įvykį", ins: "įvykiu", loc: "įvykyje", voc: "įvyki" },
      pl: { nom: "įvykiai", gen: "įvykių", dat: "įvykiams", acc: "įvykius", ins: "įvykiais", loc: "įvykiuose", voc: "įvykiai" },
    },
  },
  {
    word: "šalis", translation: "country", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "šalis", gen: "šalies", dat: "šaliai", acc: "šalį", ins: "šalimi", loc: "šalyje", voc: "šalie" },
      pl: { nom: "šalys", gen: "šalių", dat: "šalims", acc: "šalis", ins: "šalimis", loc: "šalyse", voc: "šalys" },
    },
  },
  {
    word: "šeima", translation: "family", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "šeima", gen: "šeimos", dat: "šeimai", acc: "šeimą", ins: "šeima", loc: "šeimoje", voc: "šeima" },
      pl: { nom: "šeimos", gen: "šeimų", dat: "šeimoms", acc: "šeimas", ins: "šeimomis", loc: "šeimose", voc: "šeimos" },
    },
  },
  {
    word: "šešėlis", translation: "shadow", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "šešėlis", gen: "šešėlio", dat: "šešėliui", acc: "šešėlį", ins: "šešėliu", loc: "šešėlyje", voc: "šešėli" },
      pl: { nom: "šešėliai", gen: "šešėlių", dat: "šešėliams", acc: "šešėlius", ins: "šešėliais", loc: "šešėliuose", voc: "šešėliai" },
    },
  },
  {
    word: "širdis", translation: "heart", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "širdis", gen: "širdies", dat: "širdžiai", acc: "širdį", ins: "širdimi", loc: "širdyje", voc: "širdie" },
      pl: { nom: "širdys", gen: "širdžių", dat: "širdims", acc: "širdis", ins: "širdimis", loc: "širdyse", voc: "širdys" },
    },
  },
  {
    word: "šuo", translation: "dog", pos: "noun", gender: "masc", declension: "5th declension (-uo)",
    forms: {
      sg: { nom: "šuo", gen: "šuns", dat: "šuniui", acc: "šunį", ins: "šuniu", loc: "šunyje", voc: "šunie" },
      pl: { nom: "šunys", gen: "šunų", dat: "šunims", acc: "šunis", ins: "šunimis", loc: "šunyse", voc: "šunys" },
    },
  },
  {
    word: "šviesa", translation: "light", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "šviesa", gen: "šviesos", dat: "šviesai", acc: "šviesą", ins: "šviesa", loc: "šviesoje", voc: "šviesa" },
      pl: { nom: "šviesos", gen: "šviesų", dat: "šviesoms", acc: "šviesas", ins: "šviesomis", loc: "šviesose", voc: "šviesos" },
    },
  },
  {
    word: "žaidimas", translation: "game", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "žaidimas", gen: "žaidimo", dat: "žaidimui", acc: "žaidimą", ins: "žaidimu", loc: "žaidime", voc: "žaidime" },
      pl: { nom: "žaidimai", gen: "žaidimų", dat: "žaidimams", acc: "žaidimus", ins: "žaidimais", loc: "žaidimuose", voc: "žaidimai" },
    },
  },
  {
    word: "žaizda", translation: "wound", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "žaizda", gen: "žaizdos", dat: "žaizdai", acc: "žaizdą", ins: "žaizda", loc: "žaizdoje", voc: "žaizda" },
      pl: { nom: "žaizdos", gen: "žaizdų", dat: "žaizdoms", acc: "žaizdas", ins: "žaizdomis", loc: "žaizdose", voc: "žaizdos" },
    },
  },
  {
    word: "žemė", translation: "ground", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "žemė", gen: "žemės", dat: "žemei", acc: "žemę", ins: "žeme", loc: "žemėje", voc: "žeme" },
      pl: { nom: "žemės", gen: "žemių", dat: "žemėms", acc: "žemes", ins: "žemėmis", loc: "žemėse", voc: "žemės" },
    },
  },
  {
    word: "žiedas", translation: "ring", pos: "noun", gender: "masc", declension: "1st declension (-as)",
    forms: {
      sg: { nom: "žiedas", gen: "žiedo", dat: "žiedui", acc: "žiedą", ins: "žiedu", loc: "žiede", voc: "žiede" },
      pl: { nom: "žiedai", gen: "žiedų", dat: "žiedams", acc: "žiedus", ins: "žiedais", loc: "žieduose", voc: "žiedai" },
    },
  },
  {
    word: "žingsnis", translation: "step", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "žingsnis", gen: "žingsnio", dat: "žingsniui", acc: "žingsnį", ins: "žingsniu", loc: "žingsnyje", voc: "žingsni" },
      pl: { nom: "žingsniai", gen: "žingsnių", dat: "žingsniams", acc: "žingsnius", ins: "žingsniais", loc: "žingsniuose", voc: "žingsniai" },
    },
  },
  {
    word: "žmogus", translation: "human", pos: "noun", gender: "masc", declension: "4th declension (-us)",
    forms: {
      sg: { nom: "žmogus", gen: "žmogaus", dat: "žmogui", acc: "žmogų", ins: "žmogumi", loc: "žmoguje", voc: "žmogau" },
      pl: { nom: "žmonės", gen: "žmonių", dat: "žmonėms", acc: "žmones", ins: "žmonėmis", loc: "žmonėse", voc: "žmonės" },
    },
  },
  {
    word: "žmona", translation: "wife", pos: "noun", gender: "fem", declension: "2nd declension (-a)",
    forms: {
      sg: { nom: "žmona", gen: "žmonos", dat: "žmonai", acc: "žmoną", ins: "žmona", loc: "žmonoje", voc: "žmona" },
      pl: { nom: "žmonos", gen: "žmonų", dat: "žmonoms", acc: "žmonas", ins: "žmonomis", loc: "žmonose", voc: "žmonos" },
    },
  },
  {
    word: "žodis", translation: "word", pos: "noun", gender: "masc", declension: "1st declension (-is)",
    forms: {
      sg: { nom: "žodis", gen: "žodžio", dat: "žodžiui", acc: "žodį", ins: "žodžiu", loc: "žodyje", voc: "žodi" },
      pl: { nom: "žodžiai", gen: "žodžių", dat: "žodžiams", acc: "žodžius", ins: "žodžiais", loc: "žodžiuose", voc: "žodžiai" },
    },
  },
  {
    word: "žuvis", translation: "fish", pos: "noun", gender: "fem", declension: "3rd declension (-is)",
    forms: {
      sg: { nom: "žuvis", gen: "žuvies", dat: "žuviai", acc: "žuvį", ins: "žuvimi", loc: "žuvyje", voc: "žuvie" },
      pl: { nom: "žuvys", gen: "žuvų", dat: "žuvims", acc: "žuvis", ins: "žuvimis", loc: "žuvyse", voc: "žuvys" },
    },
  },
  {
    word: "žvaigždė", translation: "star", pos: "noun", gender: "fem", declension: "2nd declension (-ė)",
    forms: {
      sg: { nom: "žvaigždė", gen: "žvaigždės", dat: "žvaigždei", acc: "žvaigždę", ins: "žvaigžde", loc: "žvaigždėje", voc: "žvaigžde" },
      pl: { nom: "žvaigždės", gen: "žvaigždžių", dat: "žvaigždėms", acc: "žvaigždes", ins: "žvaigždėmis", loc: "žvaigždėse", voc: "žvaigždės" },
    },
  },
  {
    word: "asmeninis", translation: "personal", pos: "adj", declension: "(-is, -ė)",
    forms: {
      masc: { sg: { nom: "asmeninis", gen: "asmeninio", dat: "asmeniniam", acc: "asmeninį", ins: "asmeniniu", loc: "asmeniniame", voc: "asmeninis" }, pl: { nom: "asmeniniai", gen: "asmeninių", dat: "asmeniniams", acc: "asmeninius", ins: "asmeniniais", loc: "asmeniniuose", voc: "asmeniniai" } },
      fem:  { sg: { nom: "asmeninė", gen: "asmeninės", dat: "asmeninei", acc: "asmeninę", ins: "asmenine", loc: "asmeninėje", voc: "asmeninė" }, pl: { nom: "asmeninės", gen: "asmeninių", dat: "asmeninėms", acc: "asmenines", ins: "asmeninėmis", loc: "asmeninėse", voc: "asmeninės" } },
    },
  },
  {
    word: "aukštas", translation: "high", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "aukštas", gen: "aukšto", dat: "aukštam", acc: "aukštą", ins: "aukštu", loc: "aukštame", voc: "aukštas" }, pl: { nom: "aukšti", gen: "aukštų", dat: "aukštiems", acc: "aukštus", ins: "aukštais", loc: "aukštuose", voc: "aukšti" } },
      fem:  { sg: { nom: "aukšta", gen: "aukštos", dat: "aukštai", acc: "aukštą", ins: "aukšta", loc: "aukštoje", voc: "aukšta" }, pl: { nom: "aukštos", gen: "aukštų", dat: "aukštoms", acc: "aukštas", ins: "aukštomis", loc: "aukštose", voc: "aukštos" } },
    },
  },
  {
    word: "aštrus", translation: "sharp", pos: "adj", declension: "(-us, -i)",
    forms: {
      masc: { sg: { nom: "aštrus", gen: "aštraus", dat: "aštriam", acc: "aštrų", ins: "aštriu", loc: "aštriame", voc: "aštrus" }, pl: { nom: "aštrūs", gen: "aštrių", dat: "aštriems", acc: "aštrius", ins: "aštriais", loc: "aštriuose", voc: "aštrūs" } },
      fem:  { sg: { nom: "aštri", gen: "aštrios", dat: "aštriai", acc: "aštrią", ins: "aštria", loc: "aštrioje", voc: "aštri" }, pl: { nom: "aštrios", gen: "aštrių", dat: "aštrioms", acc: "aštrias", ins: "aštriomis", loc: "aštriose", voc: "aštrios" } },
    },
  },
  {
    word: "baisus", translation: "terrible", pos: "adj", declension: "(-us, -i)",
    forms: {
      masc: { sg: { nom: "baisus", gen: "baisaus", dat: "baisiam", acc: "baisų", ins: "baisiu", loc: "baisiame", voc: "baisus" }, pl: { nom: "baisūs", gen: "baisių", dat: "baisiems", acc: "baisius", ins: "baisiais", loc: "baisiuose", voc: "baisūs" } },
      fem:  { sg: { nom: "baisi", gen: "baisios", dat: "baisiai", acc: "baisią", ins: "baisia", loc: "baisioje", voc: "baisi" }, pl: { nom: "baisios", gen: "baisių", dat: "baisioms", acc: "baisias", ins: "baisiomis", loc: "baisiose", voc: "baisios" } },
    },
  },
  {
    word: "blogas", translation: "bad", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "blogas", gen: "blogo", dat: "blogam", acc: "blogą", ins: "blogu", loc: "blogame", voc: "blogas" }, pl: { nom: "blogi", gen: "blogų", dat: "blogiems", acc: "blogus", ins: "blogais", loc: "bloguose", voc: "blogi" } },
      fem:  { sg: { nom: "bloga", gen: "blogos", dat: "blogai", acc: "blogą", ins: "bloga", loc: "blogoje", voc: "bloga" }, pl: { nom: "blogos", gen: "blogų", dat: "blogoms", acc: "blogas", ins: "blogomis", loc: "blogose", voc: "blogos" } },
    },
  },
  {
    word: "brangus", translation: "dear", pos: "adj", declension: "(-us, -i)",
    forms: {
      masc: { sg: { nom: "brangus", gen: "brangaus", dat: "brangiam", acc: "brangų", ins: "brangiu", loc: "brangiame", voc: "brangus" }, pl: { nom: "brangūs", gen: "brangių", dat: "brangiems", acc: "brangius", ins: "brangiais", loc: "brangiuose", voc: "brangūs" } },
      fem:  { sg: { nom: "brangi", gen: "brangios", dat: "brangiai", acc: "brangią", ins: "brangia", loc: "brangioje", voc: "brangi" }, pl: { nom: "brangios", gen: "brangių", dat: "brangioms", acc: "brangias", ins: "brangiomis", loc: "brangiose", voc: "brangios" } },
    },
  },
  {
    word: "didelis", translation: "big", pos: "adj", declension: "(-is, -ė)",
    forms: {
      masc: { sg: { nom: "didelis", gen: "didelio", dat: "dideliam", acc: "didelį", ins: "dideliu", loc: "dideliame", voc: "didelis" }, pl: { nom: "dideli", gen: "didelių", dat: "dideliems", acc: "didelius", ins: "dideliais", loc: "dideliuose", voc: "dideli" } },
      fem:  { sg: { nom: "didelė", gen: "didelės", dat: "didelei", acc: "didelę", ins: "didele", loc: "didelėje", voc: "didele" }, pl: { nom: "didelės", gen: "didelių", dat: "didelėms", acc: "dideles", ins: "didelėmis", loc: "didelėse", voc: "didelės" } },
    },
  },
  {
    word: "geltonas", translation: "yellow", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "geltonas", gen: "geltono", dat: "geltonam", acc: "geltoną", ins: "geltonu", loc: "geltoname", voc: "geltonas" }, pl: { nom: "geltoni", gen: "geltonų", dat: "geltoniems", acc: "geltonus", ins: "geltonais", loc: "geltonuose", voc: "geltoni" } },
      fem:  { sg: { nom: "geltona", gen: "geltonos", dat: "geltonai", acc: "geltoną", ins: "geltona", loc: "geltonoje", voc: "geltona" }, pl: { nom: "geltonos", gen: "geltonų", dat: "geltonoms", acc: "geltonas", ins: "geltonomis", loc: "geltonose", voc: "geltonos" } },
    },
  },
  {
    word: "greitas", translation: "fast", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "greitas", gen: "greito", dat: "greitam", acc: "greitą", ins: "greitu", loc: "greitame", voc: "greitas" }, pl: { nom: "greiti", gen: "greitų", dat: "greitiems", acc: "greitus", ins: "greitais", loc: "greituose", voc: "greiti" } },
      fem:  { sg: { nom: "greita", gen: "greitos", dat: "greitai", acc: "greitą", ins: "greita", loc: "greitoje", voc: "greita" }, pl: { nom: "greitos", gen: "greitų", dat: "greitoms", acc: "greitas", ins: "greitomis", loc: "greitose", voc: "greitos" } },
    },
  },
  {
    word: "gyvas", translation: "alive", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "gyvas", gen: "gyvo", dat: "gyvam", acc: "gyvą", ins: "gyvu", loc: "gyvame", voc: "gyvas" }, pl: { nom: "gyvi", gen: "gyvų", dat: "gyviems", acc: "gyvus", ins: "gyvais", loc: "gyvuose", voc: "gyvi" } },
      fem:  { sg: { nom: "gyva", gen: "gyvos", dat: "gyvai", acc: "gyvą", ins: "gyva", loc: "gyvoje", voc: "gyva" }, pl: { nom: "gyvos", gen: "gyvų", dat: "gyvoms", acc: "gyvas", ins: "gyvomis", loc: "gyvose", voc: "gyvos" } },
    },
  },
  {
    word: "jaunas", translation: "young", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "jaunas", gen: "jauno", dat: "jaunam", acc: "jauną", ins: "jaunu", loc: "jauname", voc: "jaunas" }, pl: { nom: "jauni", gen: "jaunų", dat: "jauniems", acc: "jaunus", ins: "jaunais", loc: "jaunuose", voc: "jauni" } },
      fem:  { sg: { nom: "jauna", gen: "jaunos", dat: "jaunai", acc: "jauną", ins: "jauna", loc: "jaunoje", voc: "jauna" }, pl: { nom: "jaunos", gen: "jaunų", dat: "jaunoms", acc: "jaunas", ins: "jaunomis", loc: "jaunose", voc: "jaunos" } },
    },
  },
  {
    word: "juodas", translation: "black", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "juodas", gen: "juodo", dat: "juodam", acc: "juodą", ins: "juodu", loc: "juodame", voc: "juodas" }, pl: { nom: "juodi", gen: "juodų", dat: "juodiems", acc: "juodus", ins: "juodais", loc: "juoduose", voc: "juodi" } },
      fem:  { sg: { nom: "juoda", gen: "juodos", dat: "juodai", acc: "juodą", ins: "juoda", loc: "juodoje", voc: "juoda" }, pl: { nom: "juodos", gen: "juodų", dat: "juodoms", acc: "juodas", ins: "juodomis", loc: "juodose", voc: "juodos" } },
    },
  },
  {
    word: "karštas", translation: "hot", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "karštas", gen: "karšto", dat: "karštam", acc: "karštą", ins: "karštu", loc: "karštame", voc: "karštas" }, pl: { nom: "karšti", gen: "karštų", dat: "karštiems", acc: "karštus", ins: "karštais", loc: "karštuose", voc: "karšti" } },
      fem:  { sg: { nom: "karšta", gen: "karštos", dat: "karštai", acc: "karštą", ins: "karšta", loc: "karštoje", voc: "karšta" }, pl: { nom: "karštos", gen: "karštų", dat: "karštoms", acc: "karštas", ins: "karštomis", loc: "karštose", voc: "karštos" } },
    },
  },
  {
    word: "keistas", translation: "strange", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "keistas", gen: "keisto", dat: "keistam", acc: "keistą", ins: "keistu", loc: "keistame", voc: "keistas" }, pl: { nom: "keisti", gen: "keistų", dat: "keistiems", acc: "keistus", ins: "keistais", loc: "keistuose", voc: "keisti" } },
      fem:  { sg: { nom: "keista", gen: "keistos", dat: "keistai", acc: "keistą", ins: "keista", loc: "keistoje", voc: "keista" }, pl: { nom: "keistos", gen: "keistų", dat: "keistoms", acc: "keistas", ins: "keistomis", loc: "keistose", voc: "keistos" } },
    },
  },
  {
    word: "laimingas", translation: "happy", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "laimingas", gen: "laimingo", dat: "laimingam", acc: "laimingą", ins: "laimingu", loc: "laimingame", voc: "laimingas" }, pl: { nom: "laimingi", gen: "laimingų", dat: "laimingiems", acc: "laimingus", ins: "laimingais", loc: "laiminguose", voc: "laimingi" } },
      fem:  { sg: { nom: "laiminga", gen: "laimingos", dat: "laimingai", acc: "laimingą", ins: "laiminga", loc: "laimingoje", voc: "laiminga" }, pl: { nom: "laimingos", gen: "laimingų", dat: "laimingoms", acc: "laimingas", ins: "laimingomis", loc: "laimingose", voc: "laimingos" } },
    },
  },
  {
    word: "laisvas", translation: "free", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "laisvas", gen: "laisvo", dat: "laisvam", acc: "laisvą", ins: "laisvu", loc: "laisvame", voc: "laisvas" }, pl: { nom: "laisvi", gen: "laisvų", dat: "laisviems", acc: "laisvus", ins: "laisvais", loc: "laisvuose", voc: "laisvi" } },
      fem:  { sg: { nom: "laisva", gen: "laisvos", dat: "laisvai", acc: "laisvą", ins: "laisva", loc: "laisvoje", voc: "laisva" }, pl: { nom: "laisvos", gen: "laisvų", dat: "laisvoms", acc: "laisvas", ins: "laisvomis", loc: "laisvose", voc: "laisvos" } },
    },
  },
  {
    word: "laukinis", translation: "wild", pos: "adj", declension: "(-is, -ė)",
    forms: {
      masc: { sg: { nom: "laukinis", gen: "laukinio", dat: "laukiniam", acc: "laukinį", ins: "laukiniu", loc: "laukiniame", voc: "laukinis" }, pl: { nom: "laukiniai", gen: "laukinių", dat: "laukiniams", acc: "laukinius", ins: "laukiniais", loc: "laukiniuose", voc: "laukiniai" } },
      fem:  { sg: { nom: "laukinė", gen: "laukinės", dat: "laukinei", acc: "laukinę", ins: "laukine", loc: "laukinėje", voc: "laukinė" }, pl: { nom: "laukinės", gen: "laukinių", dat: "laukinėms", acc: "laukines", ins: "laukinėmis", loc: "laukinėse", voc: "laukinės" } },
    },
  },
  {
    word: "lengvas", translation: "easy", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "lengvas", gen: "lengvo", dat: "lengvam", acc: "lengvą", ins: "lengvu", loc: "lengvame", voc: "lengvas" }, pl: { nom: "lengvi", gen: "lengvų", dat: "lengviems", acc: "lengvus", ins: "lengvais", loc: "lengvuose", voc: "lengvi" } },
      fem:  { sg: { nom: "lengva", gen: "lengvos", dat: "lengvai", acc: "lengvą", ins: "lengva", loc: "lengvoje", voc: "lengva" }, pl: { nom: "lengvos", gen: "lengvų", dat: "lengvoms", acc: "lengvas", ins: "lengvomis", loc: "lengvose", voc: "lengvos" } },
    },
  },
  {
    word: "lėtas", translation: "slow", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "lėtas", gen: "lėto", dat: "lėtam", acc: "lėtą", ins: "lėtu", loc: "lėtame", voc: "lėtas" }, pl: { nom: "lėti", gen: "lėtų", dat: "lėtiems", acc: "lėtus", ins: "lėtais", loc: "lėtuose", voc: "lėti" } },
      fem:  { sg: { nom: "lėta", gen: "lėtos", dat: "lėtai", acc: "lėtą", ins: "lėta", loc: "lėtoje", voc: "lėta" }, pl: { nom: "lėtos", gen: "lėtų", dat: "lėtoms", acc: "lėtas", ins: "lėtomis", loc: "lėtose", voc: "lėtos" } },
    },
  },
  {
    word: "malonus", translation: "kind", pos: "adj", declension: "(-us, -i)",
    forms: {
      masc: { sg: { nom: "malonus", gen: "malonaus", dat: "maloniam", acc: "malonų", ins: "maloniu", loc: "maloniame", voc: "malonus" }, pl: { nom: "malonūs", gen: "malonių", dat: "maloniems", acc: "malonius", ins: "maloniais", loc: "maloniuose", voc: "malonūs" } },
      fem:  { sg: { nom: "maloni", gen: "malonios", dat: "maloniai", acc: "malonią", ins: "malonia", loc: "malonioje", voc: "maloni" }, pl: { nom: "malonios", gen: "malonių", dat: "malonioms", acc: "malonias", ins: "maloniomis", loc: "maloniose", voc: "malonios" } },
    },
  },
  {
    word: "mažas", translation: "small", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "mažas", gen: "mažo", dat: "mažam", acc: "mažą", ins: "mažu", loc: "mažame", voc: "mažas" }, pl: { nom: "maži", gen: "mažų", dat: "mažiems", acc: "mažus", ins: "mažais", loc: "mažuose", voc: "maži" } },
      fem:  { sg: { nom: "maža", gen: "mažos", dat: "mažai", acc: "mažą", ins: "maža", loc: "mažoje", voc: "maža" }, pl: { nom: "mažos", gen: "mažų", dat: "mažoms", acc: "mažas", ins: "mažomis", loc: "mažose", voc: "mažos" } },
    },
  },
  {
    word: "minkštas", translation: "soft", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "minkštas", gen: "minkšto", dat: "minkštam", acc: "minkštą", ins: "minkštu", loc: "minkštame", voc: "minkštas" }, pl: { nom: "minkšti", gen: "minkštų", dat: "minkštiems", acc: "minkštus", ins: "minkštais", loc: "minkštuose", voc: "minkšti" } },
      fem:  { sg: { nom: "minkšta", gen: "minkštos", dat: "minkštai", acc: "minkštą", ins: "minkšta", loc: "minkštoje", voc: "minkšta" }, pl: { nom: "minkštos", gen: "minkštų", dat: "minkštoms", acc: "minkštas", ins: "minkštomis", loc: "minkštose", voc: "minkštos" } },
    },
  },
  {
    word: "neįmanomas", translation: "impossible", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "neįmanomas", gen: "neįmanomo", dat: "neįmanomam", acc: "neįmanomą", ins: "neįmanomu", loc: "neįmanomame", voc: "neįmanomas" }, pl: { nom: "neįmanomi", gen: "neįmanomų", dat: "neįmanomiems", acc: "neįmanomus", ins: "neįmanomais", loc: "neįmanomuose", voc: "neįmanomi" } },
      fem:  { sg: { nom: "neįmanoma", gen: "neįmanomos", dat: "neįmanomai", acc: "neįmanomą", ins: "neįmanoma", loc: "neįmanomoje", voc: "neįmanoma" }, pl: { nom: "neįmanomos", gen: "neįmanomų", dat: "neįmanomoms", acc: "neįmanomas", ins: "neįmanomomis", loc: "neįmanomose", voc: "neįmanomos" } },
    },
  },
  {
    word: "pagrindinis", translation: "main", pos: "adj", declension: "(-is, -ė)",
    forms: {
      masc: { sg: { nom: "pagrindinis", gen: "pagrindinio", dat: "pagrindiniam", acc: "pagrindinį", ins: "pagrindiniu", loc: "pagrindiniame", voc: "pagrindinis" }, pl: { nom: "pagrindiniai", gen: "pagrindinių", dat: "pagrindiniams", acc: "pagrindinius", ins: "pagrindiniais", loc: "pagrindiniuose", voc: "pagrindiniai" } },
      fem:  { sg: { nom: "pagrindinė", gen: "pagrindinės", dat: "pagrindinei", acc: "pagrindinę", ins: "pagrindine", loc: "pagrindinėje", voc: "pagrindinė" }, pl: { nom: "pagrindinės", gen: "pagrindinių", dat: "pagrindinėms", acc: "pagrindines", ins: "pagrindinėmis", loc: "pagrindinėse", voc: "pagrindinės" } },
    },
  },
  {
    word: "paprastas", translation: "simple", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "paprastas", gen: "paprasto", dat: "paprastam", acc: "paprastą", ins: "paprastu", loc: "paprastame", voc: "paprastas" }, pl: { nom: "paprasti", gen: "paprastų", dat: "paprastiems", acc: "paprastus", ins: "paprastais", loc: "paprastuose", voc: "paprasti" } },
      fem:  { sg: { nom: "paprasta", gen: "paprastos", dat: "paprastai", acc: "paprastą", ins: "paprasta", loc: "paprastoje", voc: "paprasta" }, pl: { nom: "paprastos", gen: "paprastų", dat: "paprastoms", acc: "paprastas", ins: "paprastomis", loc: "paprastose", voc: "paprastos" } },
    },
  },
  {
    word: "piktas", translation: "angry", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "piktas", gen: "pikto", dat: "piktam", acc: "piktą", ins: "piktu", loc: "piktame", voc: "piktas" }, pl: { nom: "pikti", gen: "piktų", dat: "piktiems", acc: "piktus", ins: "piktais", loc: "piktuose", voc: "pikti" } },
      fem:  { sg: { nom: "pikta", gen: "piktos", dat: "piktai", acc: "piktą", ins: "pikta", loc: "piktoje", voc: "pikta" }, pl: { nom: "piktos", gen: "piktų", dat: "piktoms", acc: "piktas", ins: "piktomis", loc: "piktose", voc: "piktos" } },
    },
  },
  {
    word: "pilkas", translation: "gray", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "pilkas", gen: "pilko", dat: "pilkam", acc: "pilką", ins: "pilku", loc: "pilkame", voc: "pilkas" }, pl: { nom: "pilki", gen: "pilkų", dat: "pilkiems", acc: "pilkus", ins: "pilkais", loc: "pilkuose", voc: "pilki" } },
      fem:  { sg: { nom: "pilka", gen: "pilkos", dat: "pilkai", acc: "pilką", ins: "pilka", loc: "pilkoje", voc: "pilka" }, pl: { nom: "pilkos", gen: "pilkų", dat: "pilkoms", acc: "pilkas", ins: "pilkomis", loc: "pilkose", voc: "pilkos" } },
    },
  },
  {
    word: "pilnas", translation: "full", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "pilnas", gen: "pilno", dat: "pilnam", acc: "pilną", ins: "pilnu", loc: "pilname", voc: "pilnas" }, pl: { nom: "pilni", gen: "pilnų", dat: "pilniems", acc: "pilnus", ins: "pilnais", loc: "pilnuose", voc: "pilni" } },
      fem:  { sg: { nom: "pilna", gen: "pilnos", dat: "pilnai", acc: "pilną", ins: "pilna", loc: "pilnoje", voc: "pilna" }, pl: { nom: "pilnos", gen: "pilnų", dat: "pilnoms", acc: "pilnas", ins: "pilnomis", loc: "pilnose", voc: "pilnos" } },
    },
  },
  {
    word: "platus", translation: "wide", pos: "adj", declension: "(-us, -i)",
    forms: {
      masc: { sg: { nom: "platus", gen: "plataus", dat: "plačiam", acc: "platų", ins: "plačiu", loc: "plačiame", voc: "platus" }, pl: { nom: "platūs", gen: "plačių", dat: "platiems", acc: "plačius", ins: "plačiais", loc: "plačiuose", voc: "platūs" } },
      fem:  { sg: { nom: "plati", gen: "plačios", dat: "plačiai", acc: "plačią", ins: "plačia", loc: "plačioje", voc: "plati" }, pl: { nom: "plačios", gen: "plačių", dat: "plačioms", acc: "plačias", ins: "plačiomis", loc: "plačiose", voc: "plačios" } },
    },
  },
  {
    word: "plonas", translation: "thin", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "plonas", gen: "plono", dat: "plonam", acc: "ploną", ins: "plonu", loc: "ploname", voc: "plonas" }, pl: { nom: "ploni", gen: "plonų", dat: "ploniems", acc: "plonus", ins: "plonais", loc: "plonuose", voc: "ploni" } },
      fem:  { sg: { nom: "plona", gen: "plonos", dat: "plonai", acc: "ploną", ins: "plona", loc: "plonoje", voc: "plona" }, pl: { nom: "plonos", gen: "plonų", dat: "plonoms", acc: "plonas", ins: "plonomis", loc: "plonose", voc: "plonos" } },
    },
  },
  {
    word: "privatus", translation: "private", pos: "adj", declension: "(-us, -i)",
    forms: {
      masc: { sg: { nom: "privatus", gen: "privataus", dat: "privačiam", acc: "privatų", ins: "privačiu", loc: "privačiame", voc: "privatus" }, pl: { nom: "privatūs", gen: "privačių", dat: "privatiems", acc: "privačius", ins: "privačiais", loc: "privačiuose", voc: "privatūs" } },
      fem:  { sg: { nom: "privati", gen: "privačios", dat: "privačiai", acc: "privačią", ins: "privačia", loc: "privačioje", voc: "privati" }, pl: { nom: "privačios", gen: "privačių", dat: "privačioms", acc: "privačias", ins: "privačiomis", loc: "privačiose", voc: "privačios" } },
    },
  },
  {
    word: "puikus", translation: "great", pos: "adj", declension: "(-us, -i)",
    forms: {
      masc: { sg: { nom: "puikus", gen: "puikaus", dat: "puikiam", acc: "puikų", ins: "puikiu", loc: "puikiame", voc: "puikus" }, pl: { nom: "puikūs", gen: "puikių", dat: "puikiems", acc: "puikius", ins: "puikiais", loc: "puikiuose", voc: "puikūs" } },
      fem:  { sg: { nom: "puiki", gen: "puikios", dat: "puikiai", acc: "puikią", ins: "puikia", loc: "puikioje", voc: "puiki" }, pl: { nom: "puikios", gen: "puikių", dat: "puikioms", acc: "puikias", ins: "puikiomis", loc: "puikiose", voc: "puikios" } },
    },
  },
  {
    word: "ramus", translation: "calm", pos: "adj", declension: "(-us, -i)",
    forms: {
      masc: { sg: { nom: "ramus", gen: "ramaus", dat: "ramiam", acc: "ramų", ins: "ramiu", loc: "ramiame", voc: "ramus" }, pl: { nom: "ramūs", gen: "ramių", dat: "ramiems", acc: "ramius", ins: "ramiais", loc: "ramiuose", voc: "ramūs" } },
      fem:  { sg: { nom: "rami", gen: "ramios", dat: "ramiai", acc: "ramią", ins: "ramia", loc: "ramioje", voc: "rami" }, pl: { nom: "ramios", gen: "ramių", dat: "ramioms", acc: "ramias", ins: "ramiomis", loc: "ramiose", voc: "ramios" } },
    },
  },
  {
    word: "raudonas", translation: "red", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "raudonas", gen: "raudono", dat: "raudonam", acc: "raudoną", ins: "raudonu", loc: "raudoname", voc: "raudonas" }, pl: { nom: "raudoni", gen: "raudonų", dat: "raudoniems", acc: "raudonus", ins: "raudonais", loc: "raudonuose", voc: "raudoni" } },
      fem:  { sg: { nom: "raudona", gen: "raudonos", dat: "raudonai", acc: "raudoną", ins: "raudona", loc: "raudonoje", voc: "raudona" }, pl: { nom: "raudonos", gen: "raudonų", dat: "raudonoms", acc: "raudonas", ins: "raudonomis", loc: "raudonose", voc: "raudonos" } },
    },
  },
  {
    word: "rimtas", translation: "serious", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "rimtas", gen: "rimto", dat: "rimtam", acc: "rimtą", ins: "rimtu", loc: "rimtame", voc: "rimtas" }, pl: { nom: "rimti", gen: "rimtų", dat: "rimtiems", acc: "rimtus", ins: "rimtais", loc: "rimtuose", voc: "rimti" } },
      fem:  { sg: { nom: "rimta", gen: "rimtos", dat: "rimtai", acc: "rimtą", ins: "rimta", loc: "rimtoje", voc: "rimta" }, pl: { nom: "rimtos", gen: "rimtų", dat: "rimtoms", acc: "rimtas", ins: "rimtomis", loc: "rimtose", voc: "rimtos" } },
    },
  },
  {
    word: "rudas", translation: "brown", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "rudas", gen: "rudo", dat: "rudam", acc: "rudą", ins: "rudu", loc: "rudame", voc: "rudas" }, pl: { nom: "rudi", gen: "rudų", dat: "rudiems", acc: "rudus", ins: "rudais", loc: "ruduose", voc: "rudi" } },
      fem:  { sg: { nom: "ruda", gen: "rudos", dat: "rudai", acc: "rudą", ins: "ruda", loc: "rudoje", voc: "ruda" }, pl: { nom: "rudos", gen: "rudų", dat: "rudoms", acc: "rudas", ins: "rudomis", loc: "rudose", voc: "rudos" } },
    },
  },
  {
    word: "saldus", translation: "sweet", pos: "adj", declension: "(-us, -i)",
    forms: {
      masc: { sg: { nom: "saldus", gen: "saldaus", dat: "saldžiam", acc: "saldų", ins: "saldžiu", loc: "saldžiame", voc: "saldus" }, pl: { nom: "saldūs", gen: "saldžių", dat: "saldiems", acc: "saldžius", ins: "saldžiais", loc: "saldžiuose", voc: "saldūs" } },
      fem:  { sg: { nom: "saldi", gen: "saldžios", dat: "saldžiai", acc: "saldžią", ins: "saldžia", loc: "saldžioje", voc: "saldi" }, pl: { nom: "saldžios", gen: "saldžių", dat: "saldžioms", acc: "saldžias", ins: "saldžiomis", loc: "saldžiose", voc: "saldžios" } },
    },
  },
  {
    word: "saugus", translation: "safe", pos: "adj", declension: "(-us, -i)",
    forms: {
      masc: { sg: { nom: "saugus", gen: "saugaus", dat: "saugiam", acc: "saugų", ins: "saugiu", loc: "saugiame", voc: "saugus" }, pl: { nom: "saugūs", gen: "saugių", dat: "saugiems", acc: "saugius", ins: "saugiais", loc: "saugiuose", voc: "saugūs" } },
      fem:  { sg: { nom: "saugi", gen: "saugios", dat: "saugiai", acc: "saugią", ins: "saugia", loc: "saugioje", voc: "saugi" }, pl: { nom: "saugios", gen: "saugių", dat: "saugioms", acc: "saugias", ins: "saugiomis", loc: "saugiose", voc: "saugios" } },
    },
  },
  {
    word: "sausas", translation: "dry", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "sausas", gen: "sauso", dat: "sausam", acc: "sausą", ins: "sausu", loc: "sausame", voc: "sausas" }, pl: { nom: "sausi", gen: "sausų", dat: "sausiems", acc: "sausus", ins: "sausais", loc: "sausuose", voc: "sausi" } },
      fem:  { sg: { nom: "sausa", gen: "sausos", dat: "sausai", acc: "sausą", ins: "sausa", loc: "sausoje", voc: "sausa" }, pl: { nom: "sausos", gen: "sausų", dat: "sausoms", acc: "sausas", ins: "sausomis", loc: "sausose", voc: "sausos" } },
    },
  },
  {
    word: "senas", translation: "old", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "senas", gen: "seno", dat: "senam", acc: "seną", ins: "senu", loc: "sename", voc: "senas" }, pl: { nom: "seni", gen: "senų", dat: "seniems", acc: "senus", ins: "senais", loc: "senuose", voc: "seni" } },
      fem:  { sg: { nom: "sena", gen: "senos", dat: "senai", acc: "seną", ins: "sena", loc: "senoje", voc: "sena" }, pl: { nom: "senos", gen: "senų", dat: "senoms", acc: "senas", ins: "senomis", loc: "senose", voc: "senos" } },
    },
  },
  {
    word: "siauras", translation: "narrow", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "siauras", gen: "siauro", dat: "siauram", acc: "siaurą", ins: "siauru", loc: "siaurame", voc: "siauras" }, pl: { nom: "siauri", gen: "siaurų", dat: "siauriems", acc: "siaurus", ins: "siaurais", loc: "siauruose", voc: "siauri" } },
      fem:  { sg: { nom: "siaura", gen: "siauros", dat: "siaurai", acc: "siaurą", ins: "siaura", loc: "siauroje", voc: "siaura" }, pl: { nom: "siauros", gen: "siaurų", dat: "siauroms", acc: "siauras", ins: "siauromis", loc: "siaurose", voc: "siauros" } },
    },
  },
  {
    word: "socialinis", translation: "social", pos: "adj", declension: "(-is, -ė)",
    forms: {
      masc: { sg: { nom: "socialinis", gen: "socialinio", dat: "socialiniam", acc: "socialinį", ins: "socialiniu", loc: "socialiniame", voc: "socialinis" }, pl: { nom: "socialiniai", gen: "socialinių", dat: "socialiniams", acc: "socialinius", ins: "socialiniais", loc: "socialiniuose", voc: "socialiniai" } },
      fem:  { sg: { nom: "socialinė", gen: "socialinės", dat: "socialinei", acc: "socialinę", ins: "socialine", loc: "socialinėje", voc: "socialinė" }, pl: { nom: "socialinės", gen: "socialinių", dat: "socialinėms", acc: "socialines", ins: "socialinėmis", loc: "socialinėse", voc: "socialinės" } },
    },
  },
  {
    word: "stiprus", translation: "strong", pos: "adj", declension: "(-us, -i)",
    forms: {
      masc: { sg: { nom: "stiprus", gen: "stipraus", dat: "stipriam", acc: "stiprų", ins: "stipriu", loc: "stipriame", voc: "stiprus" }, pl: { nom: "stiprūs", gen: "stiprių", dat: "stipriems", acc: "stiprius", ins: "stipriais", loc: "stipriuose", voc: "stiprūs" } },
      fem:  { sg: { nom: "stipri", gen: "stiprios", dat: "stipriai", acc: "stiprią", ins: "stipria", loc: "stiprioje", voc: "stipri" }, pl: { nom: "stiprios", gen: "stiprių", dat: "stiprioms", acc: "stiprias", ins: "stipriomis", loc: "stipriose", voc: "stiprios" } },
    },
  },
  {
    word: "storas", translation: "thick", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "storas", gen: "storo", dat: "storam", acc: "storą", ins: "storu", loc: "storame", voc: "storas" }, pl: { nom: "stori", gen: "storų", dat: "storiems", acc: "storus", ins: "storais", loc: "storuose", voc: "stori" } },
      fem:  { sg: { nom: "stora", gen: "storos", dat: "storai", acc: "storą", ins: "stora", loc: "storoje", voc: "stora" }, pl: { nom: "storos", gen: "storų", dat: "storoms", acc: "storas", ins: "storomis", loc: "storose", voc: "storos" } },
    },
  },
  {
    word: "sunkus", translation: "hard", pos: "adj", declension: "(-us, -i)",
    forms: {
      masc: { sg: { nom: "sunkus", gen: "sunkaus", dat: "sunkiam", acc: "sunkų", ins: "sunkiu", loc: "sunkiame", voc: "sunkus" }, pl: { nom: "sunkūs", gen: "sunkių", dat: "sunkiems", acc: "sunkius", ins: "sunkiais", loc: "sunkiuose", voc: "sunkūs" } },
      fem:  { sg: { nom: "sunki", gen: "sunkios", dat: "sunkiai", acc: "sunkią", ins: "sunkia", loc: "sunkioje", voc: "sunki" }, pl: { nom: "sunkios", gen: "sunkių", dat: "sunkioms", acc: "sunkias", ins: "sunkiomis", loc: "sunkiose", voc: "sunkios" } },
    },
  },
  {
    word: "svarbus", translation: "important", pos: "adj", declension: "(-us, -i)",
    forms: {
      masc: { sg: { nom: "svarbus", gen: "svarbaus", dat: "svarbiam", acc: "svarbų", ins: "svarbiu", loc: "svarbiame", voc: "svarbus" }, pl: { nom: "svarbūs", gen: "svarbių", dat: "svarbiems", acc: "svarbius", ins: "svarbiais", loc: "svarbiuose", voc: "svarbūs" } },
      fem:  { sg: { nom: "svarbi", gen: "svarbios", dat: "svarbiai", acc: "svarbią", ins: "svarbia", loc: "svarbioje", voc: "svarbi" }, pl: { nom: "svarbios", gen: "svarbių", dat: "svarbioms", acc: "svarbias", ins: "svarbiomis", loc: "svarbiose", voc: "svarbios" } },
    },
  },
  {
    word: "svetimas", translation: "stranger", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "svetimas", gen: "svetimo", dat: "svetimam", acc: "svetimą", ins: "svetimu", loc: "svetimame", voc: "svetimas" }, pl: { nom: "svetimi", gen: "svetimų", dat: "svetimiems", acc: "svetimus", ins: "svetimais", loc: "svetimuose", voc: "svetimi" } },
      fem:  { sg: { nom: "svetima", gen: "svetimos", dat: "svetimai", acc: "svetimą", ins: "svetima", loc: "svetimoje", voc: "svetima" }, pl: { nom: "svetimos", gen: "svetimų", dat: "svetimoms", acc: "svetimas", ins: "svetimomis", loc: "svetimose", voc: "svetimos" } },
    },
  },
  {
    word: "tamsus", translation: "dark", pos: "adj", declension: "(-us, -i)",
    forms: {
      masc: { sg: { nom: "tamsus", gen: "tamsaus", dat: "tamsiam", acc: "tamsų", ins: "tamsiu", loc: "tamsiame", voc: "tamsus" }, pl: { nom: "tamsūs", gen: "tamsių", dat: "tamsiems", acc: "tamsius", ins: "tamsiais", loc: "tamsiuose", voc: "tamsūs" } },
      fem:  { sg: { nom: "tamsi", gen: "tamsios", dat: "tamsiai", acc: "tamsią", ins: "tamsia", loc: "tamsioje", voc: "tamsi" }, pl: { nom: "tamsios", gen: "tamsių", dat: "tamsioms", acc: "tamsias", ins: "tamsiomis", loc: "tamsiose", voc: "tamsios" } },
    },
  },
  {
    word: "tikras", translation: "real", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "tikras", gen: "tikro", dat: "tikram", acc: "tikrą", ins: "tikru", loc: "tikrame", voc: "tikras" }, pl: { nom: "tikri", gen: "tikrų", dat: "tikriems", acc: "tikrus", ins: "tikrais", loc: "tikruose", voc: "tikri" } },
      fem:  { sg: { nom: "tikra", gen: "tikros", dat: "tikrai", acc: "tikrą", ins: "tikra", loc: "tikroje", voc: "tikra" }, pl: { nom: "tikros", gen: "tikrų", dat: "tikroms", acc: "tikras", ins: "tikromis", loc: "tikrose", voc: "tikros" } },
    },
  },
  {
    word: "trečias", translation: "third", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "trečias", gen: "trečio", dat: "trečiam", acc: "trečią", ins: "trečiu", loc: "trečiame", voc: "trečias" }, pl: { nom: "treti", gen: "trečių", dat: "tretiems", acc: "trečius", ins: "trečiais", loc: "trečiuose", voc: "treti" } },
      fem:  { sg: { nom: "trečia", gen: "trečios", dat: "trečiai", acc: "trečią", ins: "trečia", loc: "trečioje", voc: "trečia" }, pl: { nom: "trečios", gen: "trečių", dat: "trečioms", acc: "trečias", ins: "trečiomis", loc: "trečiose", voc: "trečios" } },
    },
  },
  {
    word: "trumpas", translation: "short", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "trumpas", gen: "trumpo", dat: "trumpam", acc: "trumpą", ins: "trumpu", loc: "trumpame", voc: "trumpas" }, pl: { nom: "trumpi", gen: "trumpų", dat: "trumpiems", acc: "trumpus", ins: "trumpais", loc: "trumpuose", voc: "trumpi" } },
      fem:  { sg: { nom: "trumpa", gen: "trumpos", dat: "trumpai", acc: "trumpą", ins: "trumpa", loc: "trumpoje", voc: "trumpa" }, pl: { nom: "trumpos", gen: "trumpų", dat: "trumpoms", acc: "trumpas", ins: "trumpomis", loc: "trumpose", voc: "trumpos" } },
    },
  },
  {
    word: "tuščias", translation: "empty", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "tuščias", gen: "tuščio", dat: "tuščiam", acc: "tuščią", ins: "tuščiu", loc: "tuščiame", voc: "tuščias" }, pl: { nom: "tušti", gen: "tuščių", dat: "tuštiems", acc: "tuščius", ins: "tuščiais", loc: "tuščiuose", voc: "tušti" } },
      fem:  { sg: { nom: "tuščia", gen: "tuščios", dat: "tuščiai", acc: "tuščią", ins: "tuščia", loc: "tuščioje", voc: "tuščia" }, pl: { nom: "tuščios", gen: "tuščių", dat: "tuščioms", acc: "tuščias", ins: "tuščiomis", loc: "tuščiose", voc: "tuščios" } },
    },
  },
  {
    word: "vienas", translation: "single", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "vienas", gen: "vieno", dat: "vienam", acc: "vieną", ins: "vienu", loc: "viename", voc: "vienas" }, pl: { nom: "vieni", gen: "vienų", dat: "vieniems", acc: "vienus", ins: "vienais", loc: "vienuose", voc: "vieni" } },
      fem:  { sg: { nom: "viena", gen: "vienos", dat: "vienai", acc: "vieną", ins: "viena", loc: "vienoje", voc: "viena" }, pl: { nom: "vienos", gen: "vienų", dat: "vienoms", acc: "vienas", ins: "vienomis", loc: "vienose", voc: "vienos" } },
    },
  },
  {
    word: "ypatingas", translation: "special", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "ypatingas", gen: "ypatingo", dat: "ypatingam", acc: "ypatingą", ins: "ypatingu", loc: "ypatingame", voc: "ypatingas" }, pl: { nom: "ypatingi", gen: "ypatingų", dat: "ypatingiems", acc: "ypatingus", ins: "ypatingais", loc: "ypatinguose", voc: "ypatingi" } },
      fem:  { sg: { nom: "ypatinga", gen: "ypatingos", dat: "ypatingai", acc: "ypatingą", ins: "ypatinga", loc: "ypatingoje", voc: "ypatinga" }, pl: { nom: "ypatingos", gen: "ypatingų", dat: "ypatingoms", acc: "ypatingas", ins: "ypatingomis", loc: "ypatingose", voc: "ypatingos" } },
    },
  },
  {
    word: "įmanomas", translation: "possible", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "įmanomas", gen: "įmanomo", dat: "įmanomam", acc: "įmanomą", ins: "įmanomu", loc: "įmanomame", voc: "įmanomas" }, pl: { nom: "įmanomi", gen: "įmanomų", dat: "įmanomiems", acc: "įmanomus", ins: "įmanomais", loc: "įmanomuose", voc: "įmanomi" } },
      fem:  { sg: { nom: "įmanoma", gen: "įmanomos", dat: "įmanomai", acc: "įmanomą", ins: "įmanoma", loc: "įmanomoje", voc: "įmanoma" }, pl: { nom: "įmanomos", gen: "įmanomų", dat: "įmanomoms", acc: "įmanomas", ins: "įmanomomis", loc: "įmanomose", voc: "įmanomos" } },
    },
  },
  {
    word: "šaltas", translation: "cold", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "šaltas", gen: "šalto", dat: "šaltam", acc: "šaltą", ins: "šaltu", loc: "šaltame", voc: "šaltas" }, pl: { nom: "šalti", gen: "šaltų", dat: "šaltiems", acc: "šaltus", ins: "šaltais", loc: "šaltuose", voc: "šalti" } },
      fem:  { sg: { nom: "šalta", gen: "šaltos", dat: "šaltai", acc: "šaltą", ins: "šalta", loc: "šaltoje", voc: "šalta" }, pl: { nom: "šaltos", gen: "šaltų", dat: "šaltoms", acc: "šaltas", ins: "šaltomis", loc: "šaltose", voc: "šaltos" } },
    },
  },
  {
    word: "šiltas", translation: "warm", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "šiltas", gen: "šilto", dat: "šiltam", acc: "šiltą", ins: "šiltu", loc: "šiltame", voc: "šiltas" }, pl: { nom: "šilti", gen: "šiltų", dat: "šiltiems", acc: "šiltus", ins: "šiltais", loc: "šiltuose", voc: "šilti" } },
      fem:  { sg: { nom: "šilta", gen: "šiltos", dat: "šiltai", acc: "šiltą", ins: "šilta", loc: "šiltoje", voc: "šilta" }, pl: { nom: "šiltos", gen: "šiltų", dat: "šiltoms", acc: "šiltas", ins: "šiltomis", loc: "šiltose", voc: "šiltos" } },
    },
  },
  {
    word: "švarus", translation: "clean", pos: "adj", declension: "(-us, -i)",
    forms: {
      masc: { sg: { nom: "švarus", gen: "švaraus", dat: "švariam", acc: "švarų", ins: "švariu", loc: "švariame", voc: "švarus" }, pl: { nom: "švarūs", gen: "švarių", dat: "švariems", acc: "švarius", ins: "švariais", loc: "švariuose", voc: "švarūs" } },
      fem:  { sg: { nom: "švari", gen: "švarios", dat: "švariai", acc: "švarią", ins: "švaria", loc: "švarioje", voc: "švari" }, pl: { nom: "švarios", gen: "švarių", dat: "švarioms", acc: "švarias", ins: "švariomis", loc: "švariose", voc: "švarios" } },
    },
  },
  {
    word: "šviesus", translation: "bright", pos: "adj", declension: "(-us, -i)",
    forms: {
      masc: { sg: { nom: "šviesus", gen: "šviesaus", dat: "šviesiam", acc: "šviesų", ins: "šviesiu", loc: "šviesiame", voc: "šviesus" }, pl: { nom: "šviesūs", gen: "šviesių", dat: "šviesiems", acc: "šviesius", ins: "šviesiais", loc: "šviesiuose", voc: "šviesūs" } },
      fem:  { sg: { nom: "šviesi", gen: "šviesios", dat: "šviesiai", acc: "šviesią", ins: "šviesia", loc: "šviesioje", voc: "šviesi" }, pl: { nom: "šviesios", gen: "šviesių", dat: "šviesioms", acc: "šviesias", ins: "šviesiomis", loc: "šviesiose", voc: "šviesios" } },
    },
  },
  {
    word: "šviežias", translation: "fresh", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "šviežias", gen: "šviežio", dat: "šviežiam", acc: "šviežią", ins: "šviežiu", loc: "šviežiame", voc: "šviežias" }, pl: { nom: "šviežii", gen: "šviežių", dat: "šviežiiems", acc: "šviežius", ins: "šviežiais", loc: "šviežiuose", voc: "šviežii" } },
      fem:  { sg: { nom: "šviežia", gen: "šviežios", dat: "šviežiai", acc: "šviežią", ins: "šviežia", loc: "šviežioje", voc: "šviežia" }, pl: { nom: "šviežios", gen: "šviežių", dat: "šviežioms", acc: "šviežias", ins: "šviežiomis", loc: "šviežiose", voc: "šviežios" } },
    },
  },
  {
    word: "žalias", translation: "green", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "žalias", gen: "žalio", dat: "žaliam", acc: "žalią", ins: "žaliu", loc: "žaliame", voc: "žalias" }, pl: { nom: "žali", gen: "žalių", dat: "žaliems", acc: "žalius", ins: "žaliais", loc: "žaliuose", voc: "žali" } },
      fem:  { sg: { nom: "žalia", gen: "žalios", dat: "žaliai", acc: "žalią", ins: "žalia", loc: "žalioje", voc: "žalia" }, pl: { nom: "žalios", gen: "žalių", dat: "žalioms", acc: "žalias", ins: "žaliomis", loc: "žaliose", voc: "žalios" } },
    },
  },
  {
    word: "žemas", translation: "low", pos: "adj", declension: "(-as, -a)",
    forms: {
      masc: { sg: { nom: "žemas", gen: "žemo", dat: "žemam", acc: "žemą", ins: "žemu", loc: "žemame", voc: "žemas" }, pl: { nom: "žemi", gen: "žemų", dat: "žemiems", acc: "žemus", ins: "žemais", loc: "žemuose", voc: "žemi" } },
      fem:  { sg: { nom: "žema", gen: "žemos", dat: "žemai", acc: "žemą", ins: "žema", loc: "žemoje", voc: "žema" }, pl: { nom: "žemos", gen: "žemų", dat: "žemoms", acc: "žemas", ins: "žemomis", loc: "žemose", voc: "žemos" } },
    },
  },
];
