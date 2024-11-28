import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import dotenv from 'dotenv'

dotenv.config()

const authMiddleware = async (req, res, next) => {
    

    const authHeader = req.header('Authorization')
    if (!authHeader) {
        return res.status(401).send({ error:'Access denied. No token provided'})
    }

    const token = authHeader.split(' ')[1] // retrieve the token from Bearer Token
    console.log(token)
    if (!token) {
        return res.status(401).send({ error:'Access denied. No token provided'})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)
        req.user = decoded //this will be used to the next middleware
        next()

    } catch (error) {
        console.log(error.message)
        return res.status(401).send({ error:'Access denied. Invalid token'})
    }
}

export default authMiddleware
