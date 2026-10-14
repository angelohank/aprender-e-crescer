import express from 'express'
import cors from 'cors'

import {criarLogger, registrarRotas} from './base.js'

const app = express()

app.use(criarLogger("CORS ABERTO"))
app.use(cors({origin: "*"})) //permite que qualquer origem chame o backend


registrarRotas(app)

app.listen(3002, () => {
    console.log(`Rodando exemplo CORS ABERTO`)
})