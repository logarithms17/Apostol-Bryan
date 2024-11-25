import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import router from './routes/routes.js'


dotenv.config()

//PORT
const port = process.env.PORT || 3000

const app = express()

// Middleware
app.use(express.json()); // Parses JSON requests

//connect to database
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
    }
}

//Routes

app.use('/todos',
    router
)

//start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
    connectToDatabase()
})

