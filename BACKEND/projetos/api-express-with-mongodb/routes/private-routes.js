import express from 'express'
import { PrismaClient } from '@prisma/client'

const router = express.Router()
const prisma = new PrismaClient()

router.get('/list', async(req, res) => {
    try {
        const users = await prisma.user.findMany({ 
            omit: { password: true} 
        })

        res.status(200).json({ message: "Usuários listados com sucesso", users})

    } catch {
        res.status(500).json({message: "Erro no servidor, tenta novamente"})
    }
})

export default router