/*
Reduz TODO o array para um unico valor

voce tem acesso a 4 dados
    - acumulador
    - valor atual
    - posicao atual
    - array completo
*/
//para exemplo, vamos usar o mesmo array de produtos do MAP

//exemplo basico
function exemploBasico() {
  const numeros = [1, 2, 3, 4, 5];

  //acumulador começa em 0
  //para fazer o acumulador começar com um valor diferente, voce pode adicionar esse valor la no final do reduce, por exemplo:
  const exemplo = numeros.reduce(() => {}, 10); //isso aqui vai fazer com que o acumulador se inicie em 10

  const soma = numeros.reduce((valorAcumulado, valorAtual) => {
    let vlTotal = valorAcumulado + valorAtual;
    return vlTotal;
  });

  console.log(soma); //imprime o valor 15, que eh a soma de todos
}

/*
Problema: quero saber qual vai ser o faturamento caso eu venda todo o estoque
*/
function exemploReal() {
  const produtos = [
    {
      id: 1,
      nome: "Camiseta Básica",
      preco: 49.9,
      temDesconto: true,
      quantidade: 30,
    },
    {
      id: 2,
      nome: "Calça Jeans",
      preco: 129.9,
      temDesconto: false,
      quantidade: 15,
    },
    {
      id: 3,
      nome: "Tênis Esportivo",
      preco: 249.9,
      temDesconto: true,
      quantidade: 20,
    },
    {
      id: 4,
      nome: "Jaqueta de Couro",
      preco: 399.9,
      temDesconto: false,
      quantidade: 5,
    },
    { id: 5, nome: "Boné", preco: 39.9, temDesconto: true, quantidade: 50 },
    {
      id: 6,
      nome: "Mochila Escolar",
      preco: 89.9,
      temDesconto: false,
      quantidade: 12,
    },
    {
      id: 7,
      nome: "Relógio Digital",
      preco: 199.9,
      temDesconto: true,
      quantidade: 8,
    },
    {
      id: 8,
      nome: "Óculos de Sol",
      preco: 149.9,
      temDesconto: false,
      quantidade: 18,
    },
    {
      id: 9,
      nome: "Fone de Ouvido",
      preco: 79.9,
      temDesconto: true,
      quantidade: 25,
    },
    {
      id: 10,
      nome: "Carteira de Couro",
      preco: 59.9,
      temDesconto: false,
      quantidade: 10,
    },
  ];

  //preciso do valor acumulado e do valor do item atual
  const vlTotal = produtos.reduce((totalAcumulado, produtoAtual) => {
    return totalAcumulado + produtoAtual.preco * produtoAtual.quantidade;
  }, 0);

  console.log(
    vlTotal.toLocaleString("pt-br", { style: "currency", currency: "brl" }) //imprimindo formatado com a moeda brasileira
  );
}

exemploReal();
