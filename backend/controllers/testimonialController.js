import { Testimonial } from '../models/Testimonial.js';
import Joi from 'joi';

// Validation schema
const testimonialSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  content: Joi.string().min(10).max(500).required(),
  rating: Joi.number().integer().min(1).max(5).required(),
  image_url: Joi.string().uri().optional()
});

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll();
    
    res.json({
      success: true,
      data: testimonials
    });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching testimonials'
    });
  }
};

export const createTestimonial = async (req, res) => {
  try {
    // Validate request body
    const { error, value } = testimonialSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.details.map(detail => detail.message)
      });
    }

    // Create testimonial
    const newTestimonial = await Testimonial.create(value);

    res.status(201).json({
      success: true,
      message: 'Testimonial submitted successfully (pending approval)',
      data: newTestimonial
    });
  } catch (error) {
    console.error('Testimonial submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during testimonial submission'
    });
  }
};