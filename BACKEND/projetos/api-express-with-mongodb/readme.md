<h2> 🚀 Tecnologias </h2>
Node.js <br>
Express para roteamento HTTP <br>
Prisma como ORM para MongoDB <br>
MongoDB (via conexão Atlas) <br>
JWT para autenticação <br>
bcrypt para hash de senhas <br>


<h2> ⚙️ Instalação </h2>
**Clone o projeto:**

```
git clone https://github.com/angelohank/rest-api-mongo.git
cd rest-api-mongo
```

**Instale dependências:**

```npm install```


**Configure seu .env com:**
```
DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/seuDB?retryWrites=true&w=majority"
JWT_SECRET="sua_chave_secreta_aqui"
```

**Gere o client Prisma (caso use output padrão):**

`npx prisma generate`

<h2> 📦 Prisma Schema (modelo User) </h2>

```
model User {
  id       String @id @default(auto()) @map("_id") @db.ObjectId
  email    String @unique
  name     String
  password String
}
```

<h2> ▶️ Executando </h2>

`node --watch server.js`