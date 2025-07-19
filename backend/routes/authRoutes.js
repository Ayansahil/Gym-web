import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

// POST /api/register
router.post('/register', register);

// POST /api/login
router.post('/login', login);

export default router;