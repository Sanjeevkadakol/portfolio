import express from 'express';
import Skill from '../models/Skill.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/skills
// @desc    Get all skills (public - only active)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const query = { status: 'active' };

    if (category) {
      query.category = category;
    }

    const skills = await Skill.find(query).sort({ order: 1, name: 1 });
    res.json({
      success: true,
      count: skills.length,
      data: skills,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   POST /api/skills
// @desc    Create new skill
// @access  Private
router.post('/', protect, authorize('admin', 'editor'), async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json({
      success: true,
      data: skill,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   PUT /api/skills/:id
// @desc    Update skill
// @access  Private
router.put('/:id', protect, authorize('admin', 'editor'), async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: 'Skill not found',
      });
    }

    res.json({
      success: true,
      data: skill,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   DELETE /api/skills/:id
// @desc    Delete skill
// @access  Private
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) {
      return res.status(404).json({
        success: false,
        message: 'Skill not found',
      });
    }
    res.json({
      success: true,
      message: 'Skill deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;

