// EXERCÍCIO 2: todo valor de variável de ambiente é TEXTO (string)
// Rode assim:  PORT=4000 DEBUG=false node 02-strings.js   (veja o README para Windows)

const porta = process.env.PORT; // "4000"
console.log("typeof:", typeof porta); // string
console.log("porta + 1 =", porta + 1); // "40001" (concatenou!)
console.log("Number(porta) + 1 =", Number(porta) + 1); // 4001

const debug = process.env.DEBUG; // "false"
if (debug) {
  console.log("if (debug): entrou! Qualquer texto não vazio é verdadeiro, até 'false'");
}
if (debug === "true") {
  console.log("Debug ligado");
} else {
  console.log("CERTO: comparando com o texto 'true', o debug está desligado");
}
