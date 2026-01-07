import express from 'express';
import Blog from '../models/Blog.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/blog
// @desc    Get all blog posts (public - only published)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category, tag, limit = 10, page = 1 } = req.query;
    const query = { status: 'published' };

    if (category) {
      query.category = category;
    }
    if (tag) {
      query.tags = { $in: [tag] };
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const blogs = await Blog.find(query)
      .populate('author', 'username email')
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Blog.countDocuments(query);

    res.json({
      success: true,
      count: blogs.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / parseInt(limit)),
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   GET /api/blog/:slug
// @desc    Get single blog post by slug
// @access  Public
router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug })
      .populate('author', 'username email');
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found',
      });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    res.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   POST /api/blog
// @desc    Create new blog post
// @access  Private
router.post('/', protect, authorize('admin', 'editor'), async (req, res) => {
  try {
    const blogData = {
      ...req.body,
      author: req.user._id,
    };
    const blog = await Blog.create(blogData);
    res.status(201).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   PUT /api/blog/:id
// @desc    Update blog post
// @access  Private
router.put('/:id', protect, authorize('admin', 'editor'), async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('author', 'username email');

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found',
      });
    }

    res.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   DELETE /api/blog/:id
// @desc    Delete blog post
// @access  Private
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found',
      });
    }
    res.json({
      success: true,
      message: 'Blog post deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   GET /api/blog/admin/all
// @desc    Get all blog posts (including drafts) - Admin only
// @access  Private
router.get('/admin/all', protect, authorize('admin', 'editor'), async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate('author', 'username email')
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;

