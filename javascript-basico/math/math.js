/**
 * biblioteca focada em matematica, numeros, etc
 */
// --------------------------------------------------------

/*
POW
potenciacao

->quero saber o valor de um numero elevado à potencia de outro

parametros necessarios:
1 - valor base
2 - valor da potencia
*/
function calcPow() {
  const calculo = Math.pow(2, 3); //calculando o valor de 2 elevado a 3
  console.log(calculo);
}

/**
 SQRT
 raiz quadrada

quero saber a raiz de um numero

parametros:
1 - valor base
2 - raiz

 */
function calcSqrt() {
  const calculo = Math.sqrt(25, 2); //quero saber a raiz quadrada (2) de 25
  const calculo2 = Math.sqrt(30, 3); // quero saber a raiz cubica (3) de 30

  console.log(`calculo1: ${calculo}, calculo2: ${calculo2}`);
}

/*
CEIL
arredondamento (para cima)

parametro: valor que eu desejo arredondar
*/
function calcArredondamentoCima() {
  const pi = 3.1415;
  const piArredondado = Math.ceil(pi); //vai virar 4

  console.log(piArredondado);
}

/*
FLOOR
arredondamento (para baixo)

parametro: valor que eu desejo arredondar
*/
function calcArredondamentoBaixo() {
  const pi = 3.1415;
  const piArredondado = Math.floor(pi); //vai virar 3

  console.log(piArredondado);
}

/**
RANDOM
numeros aleatorios

parametros: nenhum

*ele retorna valores aleatorios entre 0 e 1

importante: ele sempre retorna valores quebrados, entao pode-se utilizar a funcao RANDOM junto com as funcoes CEIL e FLOOR
 */
function chamaRandom() {
  const valorAleatorio = Math.random();
  console.log(valorAleatorio); //vai sair algum valor entre 0 e 1, quebrado

  //para imprimir valores entre um intervalo especifico, por exemplo, um valor aleatorio entre 1 e 100, precisamos definir uma regrinha:
  //Math.random() * (max - min) + min
  //ou seja, estamos passando o valor maximo e o valor minimo, e realizando um calculo, que vai permitir que os valores gerados fiquem dentro do intervalo

  const valorAleatorio2 = Math.random() * (100 - 1) + 1;
  console.log(valorAleatorio2);
}

//----
/*
Alem de funcoes, a biblioteca MATH tambem fornece algumas constantes, como por exemplo, o próprio PI

digitando "Math.", o vsCode ja fornece varios metodos e variaveis
*/
function piMath() {
  const pi = Math.PI;
}
