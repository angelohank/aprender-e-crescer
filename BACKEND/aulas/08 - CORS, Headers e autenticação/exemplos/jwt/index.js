import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

const PORT = 3000;
const JWT_SECRET = "segredo-super-secreto-de-aula";

const usuarios = [
  {
    id: 1,
    nome: "Ana Admin",
    email: "admin@email.com",
    senha: "123456",
    role: "admin",
  },
  {
    id: 2,
    nome: "Carlos Comum",
    email: "user@email.com",
    senha: "123456",
    role: "user",
  },
];

const livros = [
  { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis" },
  { id: 2, titulo: "Grande Sertão: Veredas", autor: "Guimarães Rosa" },
];

// Verifica se existe um token válido no header Authorization: Bearer <token>
function autenticar(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ erro: "Token não informado" });
  }

  try {
    // jwt.verify checa a assinatura e a expiração; lança erro se inválido
    const payload = jwt.verify(token, JWT_SECRET);

    req.usuario = payload; // disponibiliza os dados do token para as próximas funções
    next();
  } catch (err) {
    return res.status(401).json({ erro: "Token inválido ou expirado" });
  }
}

// Verifica se o usuário autenticado é admin
function apenasAdmin(req, res, next) {
  if (req.usuario.role !== "admin") {
    return res.status(403).json({ erro: "Acesso negado: apenas admins" });
  }
  next();
}

// Login: valida email/senha e devolve um token JWT
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  const usuario = usuarios.find((u) => u.email === email && u.senha === senha);

  if (!usuario) {
    return res.status(401).json({ erro: "Email ou senha inválidos" });
  }

  const token = jwt.sign(
    { id: usuario.id, nome: usuario.nome, role: usuario.role },
    JWT_SECRET,
    { expiresIn: "1h" },
  );

  res.json({ token });
});

// Buscar todos os livros: precisa estar logado (qualquer role)
app.get("/livros", autenticar, (req, res) => {
  res.json(livros);
});

// Criar livro: precisa estar logado E ser admin
app.post("/livros", autenticar, apenasAdmin, (req, res) => {
  const { titulo, autor } = req.body;

  if (!titulo || !autor) {
    return res.status(400).json({ erro: "titulo e autor são obrigatórios" });
  }

  const novoLivro = {
    id: livros.length ? livros[livros.length - 1].id + 1 : 1,
    titulo,
    autor,
  };

  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
