import { Contact } from '../models/Contact.js';
import Joi from 'joi';

// Validation schema
const contactSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  subject: Joi.string().max(100).optional(),
  message: Joi.string().min(10).max(1000).required()
});

export const createContact = async (req, res) => {
  try {
    // Validate request body
    const { error, value } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.details.map(detail => detail.message)
      });
    }

    // Create contact
    const newContact = await Contact.create(value);

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: newContact
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during contact submission'
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    
    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching contacts'
    });
  }
};