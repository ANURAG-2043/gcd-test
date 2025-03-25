import express from 'express';
import userRoutes from './routes/authRoutes.js';
import {checkConnection} from './config/db.js';
import createAllTable from './utils/dbUtils.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: [
        'https://gcd-test-o1rb8sp98-anurag2043s-projects.vercel.app',
        'http://localhost:5173'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use('/api/users', userRoutes);  // Added forward slash before 'api'

app.listen(PORT, async() =>{
    console.log(`Server running on port ${PORT}`);
    try {
        await checkConnection();
        await createAllTable();
    }catch(error){
        console.log("Failed to initialize the database", error);
    }
});