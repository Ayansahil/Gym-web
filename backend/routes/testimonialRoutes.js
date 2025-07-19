import express from 'express';
import { getTestimonials, createTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

// GET /api/testimonials
router.get('/', getTestimonials);

// POST /api/testimonials
router.post('/', createTestimonial);

export default router;