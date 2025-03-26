import express from 'express';
import userRoutes from './routes/authRoutes.js';
import {checkConnection} from './config/db.js';
import createAllTable from './utils/dbUtils.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Update CORS configuration
app.use(cors({
    origin: ['https://gcd-test.vercel.app'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin'],
    exposedHeaders: ['Content-Range', 'X-Content-Range'],
    maxAge: 86400
}));
// Add this after CORS configuration
app.use((req, res, next) => {
    res.header('Cross-Origin-Resource-Policy', 'cross-origin');
    next();
});
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