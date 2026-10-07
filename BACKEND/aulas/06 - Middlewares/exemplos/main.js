import express from "express";
import logRequest from "./log-request.js";
import userValidate from "./user-validate-middleware.js";

const app = express();

app.get("/", logRequest, userValidate, (req, res) => {
  console.log("cheguei na rota");
  return res.status(200).json({ mensagem: "voce pode acessar a rota" });
});

app.listen(3000);
