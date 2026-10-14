import express from 'express'

import {criarLogger, registrarRotas} from './base.js'

const app = express()

app.use(criarLogger("SEM CORS"))

registrarRotas(app)

app.listen(3001, () => {
    console.log(`Rodando exemplo SEM CORS`)
})