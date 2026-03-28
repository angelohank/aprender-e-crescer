import express from 'express'
import publicRoutes from './routes/public-routes.js'
import privateRoutes from './routes/private-routes.js'
import auth from './middleware/auth.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static('public'))
app.use('/', publicRoutes)
app.use('/api', auth, privateRoutes)

const PORT = 3000
app.listen(3000, ()=> {
    console.log(`servidor rodando na porta ${PORT}`)
})
