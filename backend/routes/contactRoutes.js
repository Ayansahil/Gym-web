import express from 'express';
import { createContact, getContacts } from '../controllers/contactController.js';

const router = express.Router();

// POST /api/contact
router.post('/', createContact);

// GET /api/contact (for admin use)
router.get('/', getContacts);

export default router;