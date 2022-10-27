#!/usr/bin/env node

const fs = require("fs");

var language = {
  navbar: null,
  home: null,
  token: null,
  staking: null,
  brand: null,
  update: null,
  roadmap: null,
  partners: null,
  tokenpurchase: null,
}
var keys = Object.keys(language);

var LANGS = ["EN", "KR","CN"];

var langPath = "../../../dist/languages";

fs.mkdirSync(langPath, {recursive:true});

LANGS.forEach(LANG => {
  keys.forEach(prop => {
    language[prop] = require("./" + prop + "_" + LANG + ".json");
  });
  fs.writeFileSync(LANG + ".json", JSON.stringify(language, null, 2));  
  fs.copyFileSync(LANG + ".json", langPath + "/" + LANG + ".json");
});


