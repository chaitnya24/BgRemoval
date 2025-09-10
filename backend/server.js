import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from './configs/db.js'


const PORT = process.env.PORT || 4000
const app = express();

// Initialize Middleware
app.use(express.json())
app.use(cors())

connectDB();

app.get('/', (req, res)=>res.send('API Working'))

app.listen(PORT, ()=> console.log("Server Running on port http://localhost:" + PORT))