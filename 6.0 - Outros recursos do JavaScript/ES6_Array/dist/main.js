"use strict";

var nome = "Rodolfo";
var saudacao = function saudacao() {
  return "Ol\xE1, ".concat(nome, "!");
};
console.log(saudacao());