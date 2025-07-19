import express from 'express';
import { getSchedule, getScheduleById } from '../controllers/scheduleController.js';

const router = express.Router();

// GET /api/schedule
router.get('/', getSchedule);

// GET /api/schedule/:id
router.get('/:id', getScheduleById);

export default router;