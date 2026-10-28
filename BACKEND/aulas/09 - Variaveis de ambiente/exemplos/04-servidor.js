// EXERCÍCIO 3: API Express configurada só por variáveis de ambiente
import express from "express";
import cors from "cors";
import { config } from "./03-config.js";

const app = express();

app.use(cors({ origin: config.frontendUrl }));

app.get("/", (req, res) => {
  res.json({
    app: config.nomeApp,
    ambiente: config.producao ? "produção" : "desenvolvimento",
  });
});

app.get("/segredo", (req, res) => {
  if (req.headers["x-api-key"] !== config.apiKey) {
    return res.status(401).json({ erro: "chave inválida" });
  }
  res.json({ mensagem: "Você acessou a rota protegida" });
});

app.listen(config.porta, () => {
  console.log(`${config.nomeApp} em http://localhost:${config.porta}`);
});
