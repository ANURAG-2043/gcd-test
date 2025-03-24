import mysql2 from 'mysql2';  // Remove /promise from import
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: process.env.DB_SSL === 'true' ? {
        rejectUnauthorized: true
    } : false
});

const promisePool = pool.promise();  // Create promise pool separately

const checkConnection = async () => {
    try {
        const connection = await promisePool.getConnection();
        console.log("Database Connection Successful!");
        connection.release();
    } catch (error) {
        console.log("Error connecting to database!");
        throw error;
    }
}

export { promisePool as pool, checkConnection };  // Export promisePool as pool