# Variáveis de ambiente na prática

Exemplos para acompanhar a aula. Precisa do Node 20.6 ou superior (`node -v`).

```bash
npm install
```

## Exercício 1: process.env

```bash
node 01-process-env.js
```

Tudo aparece como `undefined`: ninguém definiu as variáveis. Agora defina e rode de novo.

**PowerShell (Windows)**

```powershell
$env:NOME = "Ana"; $env:PORT = "4000"; node 01-process-env.js
Remove-Item Env:NOME, Env:PORT     # limpa as variáveis depois
```

**CMD (Windows)**

```bat
set NOME=Ana && set PORT=4000 && node 01-process-env.js
```

**Linux / macOS / Git Bash**

```bash
NOME=Ana PORT=4000 node 01-process-env.js
```

## Exercício 2: todo valor é texto

```bash
PORT=4000 DEBUG=false node 02-strings.js
```

(No PowerShell: `$env:PORT="4000"; $env:DEBUG="false"; node 02-strings.js`.)

Repare que `"4000" + 1` vira `"40001"` e que `"false"` é verdadeiro no `if`.

## Exercício 3: o arquivo .env

1. Copie o modelo: `cp .env.example .env` (no Windows: `copy .env.example .env`).
2. Abra o `.env` e troque o valor de `NOME`/`PORT` à vontade.
3. Rode sem instalar nada, usando o recurso nativo do Node:

   ```bash
   node --env-file=.env 01-process-env.js
   ```

4. Teste a precedência: `PORT=9 node --env-file=.env 01-process-env.js`. A variável definida no terminal vence a do arquivo. É assim que as plataformas de produção sobrescrevem a configuração.

## Exercício 4: API configurada pelo .env

```bash
npm run api
```

Em outro terminal:

```bash
curl http://localhost:3000/
curl -i http://localhost:3000/segredo
curl -H "x-api-key: troque-por-uma-chave-de-verdade" http://localhost:3000/segredo
```

O `03-config.js` usa o pacote `dotenv` e valida as variáveis obrigatórias.

## Experimentos

- **Apague a linha `API_KEY`** do `.env` e rode `npm run api`. O servidor nem sobe e avisa o que falta.
- **Rode com `NODE_ENV=production`** (PowerShell: `$env:NODE_ENV="production"`) e abra `http://localhost:3000/`: o campo `ambiente` muda para "produção".
- **Mude o `.env` com o servidor ligado.** Nada muda: as variáveis são lidas só ao iniciar, então reinicie o servidor.
- **Importe o `dotenv` depois de quem lê `process.env`** (por exemplo, `dotenv.config()` depois de um `import` que lê a variável no topo do arquivo). A variável chega `undefined`, porque os `import` rodam primeiro. Por isso o `03-config.js` começa com `import "dotenv/config"`.

## Estrutura

```
env-demo/
├── 01-process-env.js     lê variáveis do sistema
├── 02-strings.js         tudo é texto
├── 03-config.js          carrega o .env e valida
├── 04-servidor.js        API Express usando a configuração
├── .env.example          modelo (vai para o Git)
├── .gitignore            ignora node_modules e .env
└── package.json
```
