import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes
import authRoutes from './routes/authRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import membershipRoutes from './routes/membershipRoutes.js';
import trainerRoutes from './routes/trainerRoutes.js';
import scheduleRoutes from './routes/scheduleRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';
import aboutRoutes from './routes/aboutRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Gym API is running',
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use('/api', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/memberships', membershipRoutes);
app.use('/api/trainers', trainerRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/about', aboutRoutes);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Gym API server running on port ${PORT}`);
  console.log(`📍 Server URL: http://localhost:${PORT}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
});