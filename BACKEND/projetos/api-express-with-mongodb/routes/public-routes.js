import express from 'express'
import { PrismaClient } from '@prisma/client'
import { OAuth2Client } from 'google-auth-library'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()
const router = express.Router()
const oauth = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

const jwt_secret = process.env.JWT_SECRET

router.post('/cadastro', async (req, res) => {

    try {
        const user = req.body
        
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(user.password, salt)
        
        await prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                password: hash,
            }
        })

        res.status(201).json(user)
    } catch(err) {
        res.status(500).json({message: "Erro no servidor, tente novamente"})
    }
    
})

router.post('/login', async (req, res) => {
    try {
        const userInfo = req.body

        const user = await prisma.user.findUnique({
            where: { email: userInfo.email }, 
        })

        if(!user) {
            return res.status(404).json({message: "Usuário não encontrado"})
        }

        const isMatch = await bcrypt.compare(userInfo.password, user.password)
        if(!isMatch) {
            return res.status(401).json({message: "Senha incorreta"}) 
        }

        const token = jwt.sign({id: user.id}, jwt_secret, {expiresIn: '2m'})
        res.status(200).json(token)

    } catch(err) {
        res.status(500).json({message: "Erro no servidor, tente novamente"})
    }
    
})

router.post('/auth/google/token', async (req, res) => {    
    const { idToken } = req.body

    if(!idToken) {
        return res.status(401).json({message: "Token nao encontrado"})
    }

    try {
        const ticket = await oauth.verifyIdToken({
            idToken: idToken,
            audience: process.env.GOOGLE_CLIENT_ID
        })
        
        const payload = ticket.getPayload()
        const { sub, email, name, picture } = payload

        const token = jwt.sign({id: sub, email}, jwt_secret, {expiresIn: '1h'})
        res.status(200).json({
            token,
            user: {email, name, picture}
        })

    } catch (err) {
        return res.status(500).json({message: "Erro na autenticacao, tente novamente"})
    }
})

export default router