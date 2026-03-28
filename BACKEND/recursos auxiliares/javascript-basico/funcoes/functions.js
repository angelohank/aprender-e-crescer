/*
O QUE É UMA FUNCAO?
    trecho de código que só é executado quando for CHAMADO
    trecho de código que pode ser reutilizado


funcao void
    eh um tipo de funcao que NAO RETORNA NADA
    se nao tem a palavra "return", entao ela nao esta retornando nada, tornando-se void (vazia)

    nao quer dizer que ela nao faz nada, quer dizer que nao retorna nada, apenas opera sobre alguma coisa

funcao com parametro
    o parametro eh algo que a funcao  espera que seja passada para ela
    isso ocorre quando a funcao vai operar sobre algo, e ai precisa ter acesso a esse "algo". Para ela ter acesso, precisamos passar para ela esse "algo" como parametro

    exemplo: uma funcao de soma

    importante: os parametros sao executados na ordem
        por exemplo: se eu declaro uma funcao assim:
            function teste(parametro1, parametro2) {}

            e chamo ela assim:
                teste(1, 2)

            o meu parametro1 sera = 1
            o meu parametro2 sera = 2

            mas se eu mudar a ordem, da seguinte forma:
                teste(2,1)

            o seguinte acontece:
                o meu parametro1 sera = 2
                o meu parametro2 sera = 1


funcao return

    ao contrario da funcao void, a funcao return efetivamente retorna alguma coisa para quem a chama
    pode retornar textos, numeros, booleanos, etc
    ela pode, ou nao, receber parametros

    pense que alguem esta pedindo "o funcao, quando é 2 + 2?"
    e a funcao RETORNA para essa pessoa, o resultado da operacao

    exemplo da funcao estaIndividado, que retorna um "sim" ou "nao"

arrow function
    forma mais moderna de representar as funcoes
    funcao "anonima", pois nao precisa estar declarada, entao ela nao tem nome
        mas isso faz com que ela tambem nao possa ser reutilizada

    sintaxe:
        () => {}
*/

//esse cara nao vai ser impresso, a nao ser que eu CHAME a funcao
function minhaFuncao() {
  console.log("Executando minha funcao");
}

//isso é uma funcao que recebe um parametro
function minhaFuncaoComParametro(parametro) {
  console.log(parametro);
}

//criando uma funcao de soma que recebe QUAIS NUMEROS DEVE SOMAR
function soma(numero1, numero2) {
  let resultado = numero1 + numero2;

  console.log(resultado);
}

//funcao return
function minhaFuncaoRetornando(valor1, valor2) {
  return valor1 + valor2;
}

//exemplo de um retorno
function estaIndividado(quantoGanha, quantoGasta) {
  if (quantoGanha > quantoGasta) {
    return false;
  } else {
    return true;
  }

  //repare que essa funcao nao esta imprimindo nada, ela apenas retorna sim ou nao para quem a chamou
}

//exemplo arrowFunction
const nome = () => {
  //aqui dentro eh como se estivesse dentro de uma funcao normal
};

//arrow function com parametros
const nome2 = (nomeQueEuQuero) => {
  console.log("asdasd");
};
