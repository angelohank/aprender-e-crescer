
# 📘 Manual de Configuração do Lint e Prettier no Visual Studio Code

### 📖 1. Introdução
Este manual ensina como configurar o Lint e o Prettier em um projeto JavaScript/TypeScript no Visual Studio Code, garantindo qualidade e padronização do código.

### 🟢 2. O que é Lint
Lint é uma ferramenta que analisa seu código-fonte para encontrar erros, problemas de estilo e más práticas de programação.
O mais popular é o ESLint, que oferece centenas de regras configuráveis.

### 🖌️ 3. O que é Prettier
Prettier é um formatador de código que ajusta automaticamente a indentação, espaçamento e quebras de linha, garantindo que todo o código siga o mesmo padrão visual.

### 🛠️ 4. Instalação das Extensões no VS Code
Abra o Visual Studio Code e instale as seguintes extensões:

✅ ESLint
✅ Prettier – Code formatter

Para isso:

Clique em Extensões (Ctrl + Shift + X).

Pesquise por cada extensão e clique em Install.

### 🟡 5. Configuração do Projeto Node.js
Se seu projeto ainda não tem um package.json, inicialize com:


`npm init -y`

⚙️ 6. Instalação dos Pacotes NPM
Instale o ESLint e o Prettier como dependências de desenvolvimento:

`npm install --save-dev eslint prettier`

🟢 7. Configuração do ESLint
Execute a configuração interativa:

`npx eslint --init`

Responda às perguntas conforme seu projeto.
Ao final, será criado um arquivo `.eslintrc.json.`

Exemplo de configuração mínima:
```
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["eslint:recommended"],
  "rules": {}
}
```

Crie um arquivo `.eslintignore` para ignorar pastas:
```
node_modules
dist
```

🟢 8. Configuração do Prettier
Crie um arquivo `.prettierrc` na raiz do projeto:

```
{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "es5"
}
```

E também `.prettierignore`
```
node_modules
dist
```

🔄 9. Integração do ESLint com o Prettier
Para evitar conflitos entre ESLint e Prettier, instale mais dois pacotes:

`npm install --save-dev eslint-config-prettier eslint-plugin-prettier`

🖥️ 10. Configuração do VS Code para Formatação Automática
Ativar format on save:

Vá em Configurações (Ctrl + ,).

Pesquise "Format On Save" e marque como habilitado.

Definir `Prettier` como formatador padrão:

📝 11. Comandos Úteis
✅ Rodar o ESLint manualmente:

`npx eslint .`

✅ Corrigir automaticamente problemas:

`npx eslint . --fix`
✅ Formatar todos os arquivos com Prettier:
`npx prettier --write .`