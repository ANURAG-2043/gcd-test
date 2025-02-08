import {pool} from '../config/db.js';

const userTableQuery = `CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    password VARCHAR(255) NOT NULL,
    ip_address VARCHAR(45) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

const createTable = async (tableName, query) =>{
    try{
        await pool.query(query);
    console.log(`${tableName} table created or already exists`);
  } catch (error) {
    console.error(`Error creating ${tableName}:`, error);
    throw error; // Propagate error for better error handling
  }
};

const createAllTable = async () =>{
    try {
        await createTable ("Users", userTableQuery);
        console.log("User table created Successfully!!");
    } catch (error){
        console.error("Error creating tables:", error);
        throw error;
    }
};

export const findUserByEmail = async (email) => {
    try {
      const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
      return rows[0];
    } catch (error) {
      console.error('Error finding user:', error);
      throw error;
    }
  };

  export const createNewUser = async (userData) => {
    try {
      const { name, email, mobile, password, ip_address } = userData;
      const [result] = await pool.query(
        'INSERT INTO users (name, email, mobile, password, ip_address) VALUES (?, ?, ?, ?, ?)',
        [name, email, mobile, password, ip_address]
      );
      return result.insertId;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  };

  export {createAllTable as default};