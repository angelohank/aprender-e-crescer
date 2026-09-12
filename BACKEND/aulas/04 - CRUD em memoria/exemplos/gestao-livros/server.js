import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
//livro: id, titulo, autor, ano, editora

let livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954,
    editora: "Allen & Unwin",
  },
  {
    id: 2,
    titulo: "1984",
    autor: "George Orwell",
    ano: 1949,
    editora: "Secker & Warburg",
  },
  {
    id: 3,
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    editora: "Reynal & Hitchcock",
  },
  {
    id: 4,
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    ano: 1605,
    editora: "Francisco de Robles",
  },
  {
    id: 5,
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    ano: 1945,
    editora: "Secker & Warburg",
  },
];

app.get("/livros", (req, res) => {
  console.log("GET /livros");
  res.json(livros);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
