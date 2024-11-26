import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors()) // this will allow all origins to access the API, such as http://localhost:3000

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

// Import Routes
import router from './routes/authRoutes.js'
import blogRoutes from './routes/blogRoutes.js'

// Routes
app.use('/api/auth', router);

app.use('/api/blogs', blogRoutes)

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