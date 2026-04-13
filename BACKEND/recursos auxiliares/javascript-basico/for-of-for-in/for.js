/*
O que é o FOR?
    estrutura de repetição

        ou seja: é uma maneira de voce repetir alguma coisa que queira dentro do seu codigo
        quando usar: use para evitar que tenha que chamar a mesma funcao ou operacao varias vezes


SINTAXE:
    for(INICIALIZACA; CONDICAO; EXPRESSAO FINAL) { FUNCAO }

INICIALIZACAO:
    cria uma variavel e atribui um valor para ela
    *normalmente chamam de "i" porque é o "itarador"

CONDICAO:
    agora eu preciso dizer "ate quando o for deve ser executado"
    quando essa condicao for atingida, o for vai para automaticamente

EXPRESSAO FINAL:
    aqui a gente define o que deve acontecer quando o for "der uma volta completa"
    ou seja: depois de executar a funcao, o que eu tenho que fazer?

    no caso, normalmente passamos para o proximo registro
*/

function usandoFor() {
  //estou imprimindo "OI" 10 vezes
  for (let i = 0; i < 10; i++) {
    console.log("OI");
  }
}

function tabuada() {
  //quero imprimir toda a tabuada do 2
  //pra evitar que se chame console.log(2*1), 2*2, e assim por diante, usamos o for

  for (let i = 0; i <= 10; i++) {
    console.log(`2*${i} = ${2 * i}`);
  }
}

function imprimeUsuarios() {
  const users = ["Joao", "Pedro", "Maria"];

  //length eh uma funcao dos arrys que retorna o seu TAMANHO
  //enquanto nao percorrer tudo que estiver no users
  for (let i = 0; i < users.length; i++) {
    //funcao que diz: imprima pra mim o valor que tiver no array de usuario, na determinada posicao (i)
    console.log(`User = ${users.at(i)}`);
  }
}

tabuada();
imprimeUsuarios();
