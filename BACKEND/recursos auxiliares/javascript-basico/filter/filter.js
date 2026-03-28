/*
 FILTER (filtrar o array)
    - cria um novo array filtrando apenas os valores desejados a partir do array original
    - voce tem acesso a 3 dados:
        - item por item
        - posicao atual
        - array completo
 */

//problema: quero filtrar apenas pelos numeros pares
function exemploBasico() {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //para verificar se um numero eh par ou impar, eu preciso dividir ele e ver o quanto resta. Numeros pares tem resto 0, sempre. Se for mais que 0, eh impar
  const numerosPares = numeros.filter((numeroAtual) => {
    return numeroAtual % 2 === 0;
  });

  //quero apenas os numeros maiores que 5
  const numerosMaioresQue5 = numeros.filter((numeroAtual) => {
    return numeroAtual > 5;
  });

  console.log(numerosPares); //retorna 2,4,6,8,10
  console.log(numerosMaioresQue5);
}

function exemploReal() {
  //quero um array apenas com os itens que estiverem em promocao

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

  const produtosEmPromocao = produtos.filter((produto) => {
    return produto.temDesconto; //vai me retornar apenas os produtos que tiverem com o "temDesconto" == true
  });

  console.log(produtosEmPromocao);
}
