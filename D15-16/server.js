import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
    }
}

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
    connectToDatabase()
})
