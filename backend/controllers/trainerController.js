import { Trainer } from '../models/Trainer.js';

export const getTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.findAll();
    
    res.json({
      success: true,
      data: trainers
    });
  } catch (error) {
    console.error('Error fetching trainers:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching trainers'
    });
  }
};

export const getTrainerById = async (req, res) => {
  try {
    const { id } = req.params;
    const trainer = await Trainer.findById(id);
    
    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: 'Trainer not found'
      });
    }

    res.json({
      success: true,
      data: trainer
    });
  } catch (error) {
    console.error('Error fetching trainer:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching trainer'
    });
  }
};