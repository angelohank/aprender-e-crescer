import Router from "express";
import {
  criarLivro,
  deletarLivro,
  findAll,
  findOne,
} from "../controllers/livros-controller.js";

const router = Router();

router.get("/", (req, res) => {
  const todosOsLivros = findAll();
  res.json(todosOsLivros);
});
router.get("/:id", (req, res) => {
  const idLivro = parseInt(req.params.id);

  if (isNaN(idLivro)) {
    return res
      .status(400)
      .json({ mensagem: "identificador deve ser um numero" });
  }

  let livro = findOne(idLivro);

  if (!livro) {
    return res.status(404).send();
  }

  res.json(livro);
});

router.post("/", (req, res) => {
  let autor_enviado = req.body.dsAutor;
  let titulo_enviado = req.body.dsTitulo;

  if (!autor_enviado || !titulo_enviado) {
    return res
      .status(400)
      .json({ mensagem: "dados faltando, verifique autor e titulo" });
  }

  let livro_criado = criarLivro(titulo_enviado, autor_enviado);
  if (!livro_criado) {
    return res.status(500).json({ mensagem: "algo deu errado" });
  }

  return res.status(201).json(livro_criado);
});

router.delete("/:id", (req, res) => {
  const idLivro = parseInt(req.params.id);

  if (isNaN(idLivro)) {
    return res
      .status(400)
      .json({ mensagem: "identificador deve ser um numero" });
  }

  let livro = findOne(idLivro);
  if (!livro) {
    return res.status(404).send();
  }

  deletarLivro(idLivro);
  return res.status(204).send();
});
router.patch("/:id", (req, res) => {});
export default router;
