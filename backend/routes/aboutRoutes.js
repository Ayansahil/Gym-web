import express from 'express';
import { getAbout, getAboutById } from '../controllers/aboutController.js';

const router = express.Router();

// GET /api/about
router.get('/', getAbout);

// GET /api/about/:id
router.get('/:id', getAboutById);

export default router;