import express from 'express';
import { Project } from '../models/index.js';

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.findAll({
      order: [['order', 'ASC']],
    });
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get single project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
