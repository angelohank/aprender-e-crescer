/*
FOR-OF

automatiza algumas coisas

automaticamente passa por todos os itens do array, sem precisar especificar o tamanho
basicamente com ele nós dizemos: "percorra todo o array X e faça isso para cada registro", mas de maneira automatica
sempre vai percorrer o array todo
*/

function forOfExemplo() {
  const users = ["Joao", "Pedro", "Maria"];

  //esse "name" por ser o nome que voce quiser
  for (let name of users) {
    console.log(name);
  }
}

forOfExemplo();
