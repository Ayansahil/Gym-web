import { Membership } from '../models/Membership.js';

export const getMemberships = async (req, res) => {
  try {
    const memberships = await Membership.findAll();
    
    res.json({
      success: true,
      data: memberships
    });
  } catch (error) {
    console.error('Error fetching memberships:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching memberships'
    });
  }
};

export const getMembershipById = async (req, res) => {
  try {
    const { id } = req.params;
    const membership = await Membership.findById(id);
    
    if (!membership) {
      return res.status(404).json({
        success: false,
        message: 'Membership not found'
      });
    }

    res.json({
      success: true,
      data: membership
    });
  } catch (error) {
    console.error('Error fetching membership:', error);
    res.status(500).json({
      success: false,
      message: 'Server error fetching membership'
    });
  }
};