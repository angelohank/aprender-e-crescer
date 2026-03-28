/**
 
MAP (mapear itens de um array)

    - cria um novo array com a mesma quantidade de itens do array original
    - o novo array pode ser alterado como quiser em relação ao array original
    - voce tem acesso a 3 dados:    
        item por item do array
        posicao atual do array
        array completo

        *como no foreach

 */

const arrayDeNumeros = [2, 4, 6, 8, 10];

//esse "numeroAtual" pode ser um nome da sua preferencia
const arrayMultiplicado = arrayDeNumeros.map((numeroAtual) => numeroAtual * 2);

const arrayModificado = arrayDeNumeros.map(
  (numeroAtual, posicao) => numeroAtual * 2
);

/*
Exemplo de aplicação real

tenho um array de produtos (considere que eh o banco de dados da empresa)

problema 1: o preco nao esta formatado. Ele tem apenas o valor, e eu gostaria que ficasse formatado com "R$"
problema 2: quero dar desconto de 10% nos produtos que tem desconto. Entao quero criar um novo array, ja com o valor com desconto para os usuarios
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

  //nao preciso da posicao nem do array completo, apenas do item
  const produtosComDesconto = produtos.map((produto) => {
    //dando 10% de desconto no produto, com base no seu valor
    const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco;
    return {
      id: produto.id,
      nome: produto.nome,
      preco: novoPreco.toLocaleString("pt-br", {
        //aqui eu estou dizendo que quero que esse campo seja um tipo "moeda" (currency), e que seja no estilo da moeda brasileira (brl)
        style: "currency",
        currency: "brl",
      }),
      quantidade: produto.quantidade,
    };
  });

  console.log(produtosComDesconto);
}

exemploReal();
