var somaFunc = require ("./soma.js");
var subtracaoFunc = require("./sub.js").default;
var multiplicacaoFunc = require ("./mult.js");
var divisaoFunc = require ("./div.js");     
console.log(`1 + 2 = ${somaFunc(1, 2)}`);
console.log(`1 - 2 = ${subtracaoFunc(1, 2)}`);
console.log(`1 * 2 = ${multiplicacaoFunc(1, 2)}`);
console.log(`1 / 2 = ${divisaoFunc(1, 2)}`);     
