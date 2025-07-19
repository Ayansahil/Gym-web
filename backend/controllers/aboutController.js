import { About } from '../models/About.js';

export const getAbout = async (req, res) => {
  try {
    const aboutData = await About.findAll();
    
    res.json({
      success: true,
      data: aboutData
    });
  } catch (error) {
    console.error('Error fetching about:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching about information'
    });
  }
};

export const getAboutById = async (req, res) => {
  try {
    const { id } = req.params;
    const aboutItem = await About.findById(id);
    
    if (!aboutItem) {
      return res.status(404).json({
        success: false,
        message: 'About section not found'
      });
    }

    res.json({
      success: true,
      data: aboutItem
    });
  } catch (error) {
    console.error('Error fetching about section:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching about section'
    });
  }
};