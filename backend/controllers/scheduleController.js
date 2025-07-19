import { Schedule } from '../models/Schedule.js';

export const getSchedule = async (req, res) => {
  try {
    const scheduleData = await Schedule.findAll();
    
    res.json({
      success: true,
      data: scheduleData
    });
  } catch (error) {
    console.error('Error fetching schedule:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching schedule'
    });
  }
};

export const getScheduleById = async (req, res) => {
  try {
    const { id } = req.params;
    const scheduleItem = await Schedule.findById(id);
    
    if (!scheduleItem) {
      return res.status(404).json({
        success: false,
        message: 'Schedule item not found'
      });
    }

    res.json({
      success: true,
      data: scheduleItem
    });
  } catch (error) {
    console.error('Error fetching schedule item:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching schedule item'
    });
  }
};