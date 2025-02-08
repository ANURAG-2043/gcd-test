import express from 'express';
import {getAllUsers, createUser, login} from '../controllers/authController.js';
import { googleLogin } from '../controllers/googleAuthController.js';

const router = express.Router();

router.post('/login',login);
router.post('/register', createUser);
router.post('/google-login', googleLogin);
router.get('/users', getAllUsers);

export default router;