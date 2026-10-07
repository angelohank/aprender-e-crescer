import { checkUsuario } from "./user-controller.js";

function userValidate(req, res, next) {
  const { username, password } = req.headers;

  console.log(username, password);

  if (!checkUsuario(username, password)) {
    return res.status(401).json({
      mensagem: "Usuário ou senha inválidos",
    });
  }

  next();
}

export default userValidate;
