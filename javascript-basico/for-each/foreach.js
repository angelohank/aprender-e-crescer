/*
foreach eh especializado em passar por arrays

arrays sao, por exemplo, uma lista de nomes
['Fulano', 'Ciclano', 'Beltrano']

o que ele retorna:
    item
    index
    array

no caso, mostra o valor que eu quero ver, a posicao desse valor, e em seguida mostra o array completo
*/

function forEachExemplo() {
  //array de usuarios
  const users = [
    { name: "Fulano", age: 25, contact: "(99)99999-9999" },
    { name: "Ciclano", age: 55, contact: "(88)88888-8888" },
    { name: "Beltrano", age: 17, contact: "(77)77777-7777" },
  ];

  //estrutura
  //nome_do_array.forEach()
  //dentro dos paranteses vai uma funcao
  //essa funcao pode ser uma ARROW FUNCTION (rever arquivo de funcoes), ou uma funcao normal, segue exemplo das duas formas:

  //usando arrow function
  //o item (primeiro parametro é obrigatorio, sempre precisa estar ali). Ja o index e o array completo sao opcionais, voce pode optar por nao receber eles
  users.forEach((item, posicao, arrayCompleto) => {
    if (item.age < 18) {
      console.log(`Usuario ${item.name} é menor de idade`);
    }
  });

  //usando funcoes normais
  users.forEach(function (item) {
    console.log(item);
  });
}

forEachExemplo();
