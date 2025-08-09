/**
for-of: usado em arrays
for-in: usado em objetos

ao inves de percorrer um array, vou percorrer as caracteristica de um objeto


 */

function forInExemplo() {
  const user = {
    name: "Fulano",
    idade: 25,
    endereco: "Rua dos bobos",
    numero: 0,
  };

  for (let key in user) {
    console.log(key); //isso aqui vai imprimir o valor da CHAVE, nao o valor
  }

  //para pegar o valor, fazemos da seguinte forma:
  for (key in user) {
    console.log(user[key]); //basicamente estou dizendo imprima o valor que tiver na chave Tal (key)
  }
}

forInExemplo();
