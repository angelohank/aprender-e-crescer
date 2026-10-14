import express from 'express'
import cors from 'cors'

import {criarLogger, registrarRotas} from './base.js'

const app = express()

app.use(criarLogger("CORS RESTRITO"))
app.use(
    cors({
        origin: "http://localhost:5174", // protocolo + domínio + porta, exatamente assim
        methods: ["GET", "POST", "DELETE"], // métodos aceitos (Access-Control-Allow-Methods)
        allowedHeaders: ["Content-Type", "Authorization"], // headers aceitos (Access-Control-Allow-Headers)
    })
);


registrarRotas(app)

app.listen(3003, () => {
    console.log(`Rodando exemplo CORS RESTRITO`)
})