import { findUserByEmail, createNewUser } from '../utils/dbUtils.js';
import bcrypt from 'bcryptjs';


const users= [];

export const getAllUsers = (req,res) =>{
    res.json(users);
};

export const createUser = async (req, res) =>{
    try {
        const {username, email, mobile, password} = req.body;
        const ip_address = req.ip || req.connection.remoteAddress;

        if(!username || !email || !mobile || !password){
            return res.status(400).json({
                message:'All fields are required'
            });
        }

        const existingUser = await findUserByEmail(email);
        if(existingUser){
            return res.status(400).json({
                message: 'Email already registered'
            });
        }
        
        const hashedPassword = await bcrypt.hash(password,10);

        const userId = await createNewUser({
            name: username,
            email,
            mobile,
            password: hashedPassword,
            ip_address
        });

        res.status(201).json({
            message: 'User registered successfully',
            userId
        });
    }catch(error){
        console.error('Registration error:', error);
        res.status(500).json({message:' Server error'});
    }
};

export const login = async (req, res) =>{
    console.log('Login attempt:', req.body); // Add this line
    try{
        const {email, password} = req.body;
        const user = await findUserByEmail(email);
        if(!user){
            return res.status(401).json({ message: 'Invalid credentials'});
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword){
            return res.status(401).json({message:'Invalid Credentials'});
        }

        delete user.password;

        res.json({
            message: 'Login successful',
            user
        });
    }catch(error){
        console.error('Login error:' ,error);
        res.status(500).json({
         message:'Server error'
        });
    }
};
