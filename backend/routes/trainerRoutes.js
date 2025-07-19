import express from 'express';
import { getTrainers, getTrainerById } from '../controllers/trainerController.js';

const router = express.Router();

// GET /api/trainers
router.get('/', getTrainers);

// GET /api/trainers/:id
router.get('/:id', getTrainerById);

export default router;