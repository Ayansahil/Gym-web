import express from 'express';
import { getMemberships, getMembershipById } from '../controllers/membershipController.js';

const router = express.Router();

// GET /api/memberships
router.get('/', getMemberships);

// GET /api/memberships/:id
router.get('/:id', getMembershipById);

export default router;