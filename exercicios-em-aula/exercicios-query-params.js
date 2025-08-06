import express from "express";

//para todos os exercicios, considere a seguinte lista de objetos
const usuarios = [
  { id: 1, nome: "João" },
  { id: 2, nome: "Maria" },
  { id: 3, nome: "Joana" },
  { id: 4, nome: "Carlos" },
];

const app = express();
app.use(express.json());

/*
Exercicio 1 - Limitando o numero de resultados
Utilize a rota /usuarios, declarada a seguir, para a resolucao do exercicio

*considere que sera passado, via query param, um parametro chamado "limit"

faça com que a resposta contenha apenas o numero de registros solicitado pelo usuario

DICA: a funcao .slice(inicio, fim), "corta" a lista, retornando apenas os valores de um intervalo
*/
app.get("/usuarios", (req, res) => {
  //capture o parametro que deseja
  //verifique se o parametro existe
  //realize o filtro da lista
  //retorne os usuarios com a quantidade limitada
});

app.listen(3000);
