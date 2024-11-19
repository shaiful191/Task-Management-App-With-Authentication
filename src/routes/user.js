import express from 'express'
import { login, register, getUserProfile, logout } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/logout', logout);
userRouter.get('/profile', isAuthenticated, getUserProfile);

export default userRouter;