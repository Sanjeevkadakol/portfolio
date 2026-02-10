import express from 'express';
import { Settings } from '../models/index.js';

const router = express.Router();

// Get settings
router.get('/', async (req, res) => {
  try {
    // Attempt to find the first settings record
    let settings = await Settings.findOne();

    // If no settings exist, create default
    if (!settings) {
      settings = await Settings.create();
    }

    res.json({ success: true, data: settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
