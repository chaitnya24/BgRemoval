import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from './configs/db.js'
import userRouter from './routes/userRoutes.js'


const PORT = process.env.PORT || 4000
const app = express();

// Initialize Middleware
app.use(express.json())
app.use(cors())

// connecting database
connectDB();

// API routes
app.get('/', (req, res)=>res.send('API Working'))
app.use('/api/user',userRouter)

app.listen(PORT, ()=> console.log("Server Running on port http://localhost:" + PORT))