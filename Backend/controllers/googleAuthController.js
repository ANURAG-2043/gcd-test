import { OAuth2Client } from 'google-auth-library';
import { pool } from '../config/db.js';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req, res) => {
    try {
        const { credential } = req.body;
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const { email, name, picture } = ticket.getPayload();
        const ip_address = req.ip || req.connection.remoteAddress;

        // Check if user exists
        const [existingUser] = await pool.query(
            'SELECT * FROM users WHERE email = ?',
            [email]
        );

        let user;
        if (existingUser.length === 0) {
            // Create new user if doesn't exist with default values
            const [result] = await pool.query(
                'INSERT INTO users (name, email, picture, mobile, password, ip_address) VALUES (?, ?, ?, ?, ?, ?)',
                [name, email, picture, '', 'google_auth_user', ip_address]
            );
            
            user = {
                id: result.insertId,
                name,
                email,
                picture,
                mobile: '',
                ip_address
            };
        } else {
            user = existingUser[0];
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error('Google auth error:', error);
        res.status(500).json({ message: 'Authentication failed' });
    }
};