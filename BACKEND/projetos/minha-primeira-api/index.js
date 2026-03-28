import express from "express";

const minhaApi = express();

minhaApi.use(express.json()); // Middleware para interpretar JSON

minhaApi.get("/login", (req, res) => {
  console.log("Rota de login acessada");
});

//padrao do express
minhaApi.get("/logoff", (req, res) => {});

minhaApi.get("/minharota", (req, res) => {
  //onde defino o que a minha rota faz
});

minhaApi.get("/usuarios", (req, res) => {
  const user1 = {
    id: 1,
    nome: "João",
    email: "",
  };

  const user2 = {
    id: 2,
    nome: "Maria",
    email: "",
  };

  const user3 = {
    id: 3,
    nome: "José",
    email: "",
  };

  res.json([user1, user2, user3]); // Envia a lista de usuários como resposta
});
minhaApi.get("/produtos", (req, res) => {
  //busca no banco de dados todos os produtos
  const produto = {
    id: 1,
    nome: "Notebook",
    preco: 2500.0,
    descricao: "Notebook Dell Inspiron 15",
    categoria: "Eletrônicos",
  };

  res.json(produto);
});

minhaApi.listen(3000);
