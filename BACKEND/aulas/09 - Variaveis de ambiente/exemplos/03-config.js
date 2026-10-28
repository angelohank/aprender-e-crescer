// Centraliza a leitura do .env e valida as variáveis obrigatórias.
// O import do dotenv vem PRIMEIRO, antes de qualquer leitura de process.env.
import "dotenv/config";

const obrigatorias = ["API_KEY", "FRONTEND_URL"];
const faltando = obrigatorias.filter((nome) => !process.env[nome]);

if (faltando.length > 0) {
  console.error("Faltam variáveis no .env:", faltando.join(", "));
  process.exit(1); // melhor falhar ao iniciar do que no meio de uma requisição
}

export const config = {
  porta: Number(process.env.PORT) || 3000,
  nomeApp: process.env.APP_NAME || "API",
  apiKey: process.env.API_KEY,
  frontendUrl: process.env.FRONTEND_URL,
  producao: process.env.NODE_ENV === "production",
};
