import express from 'express';
import { Skill } from '../models/index.js';

const router = express.Router();

// Get all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.findAll({
      order: [
        ['order', 'ASC'],
        ['name', 'ASC']
      ],
    });
    res.json({ success: true, data: skills });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
