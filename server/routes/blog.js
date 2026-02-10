import express from 'express';
import { Blog } from '../models/index.js';

const router = express.Router();

// Get all published blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      where: { published: true },
      order: [['createdAt', 'DESC']],
    });
    res.json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get single blog by slug
router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ where: { slug: req.params.slug } });
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog post not found' });
    }
    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
