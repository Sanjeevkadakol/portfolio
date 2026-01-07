import express from 'express';
import Contact from '../models/Contact.js';
import { sendContactEmail, sendAutoReply } from '../utils/emailService.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      });
    }

    console.log('📧 New contact form submission:', { name, email, subject });

    // Save contact to database
    const contact = await Contact.create({
      name,
      email,
      message,
      subject: subject || 'Portfolio Inquiry',
    });

    console.log('✅ Contact saved to MongoDB:', contact._id);

    // Send email notification to admin (don't fail if email fails)
    let emailResult = { success: false, error: null };
    try {
      emailResult = await sendContactEmail({
        name,
        email,
        message,
        subject: subject || 'Portfolio Inquiry',
      });
      if (emailResult.success) {
        console.log('✅ Admin notification email sent');
      } else {
        console.warn('⚠️ Failed to send admin notification:', emailResult.error);
      }
    } catch (emailError) {
      console.error('❌ Email error (non-blocking):', emailError.message);
      // Continue even if email fails
    }

    // Send auto-reply to user (don't fail if email fails)
    try {
      await sendAutoReply({ name, email });
      console.log('✅ Auto-reply email sent to user');
    } catch (emailError) {
      console.warn('⚠️ Failed to send auto-reply:', emailError.message);
      // Continue even if auto-reply fails
    }

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        createdAt: contact.createdAt,
      },
      emailSent: emailResult.success,
    });
  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to process contact form',
    });
  }
});

// @route   GET /api/contact
// @desc    Get all contact submissions
// @access  Private
router.get('/', protect, authorize('admin', 'editor'), async (req, res) => {
  try {
    const { status } = req.query;
    const query = {};

    if (status) {
      query.status = status;
    }

    const contacts = await Contact.find(query).sort({ createdAt: -1 });
    res.json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   GET /api/contact/:id
// @desc    Get single contact submission
// @access  Private
router.get('/:id', protect, authorize('admin', 'editor'), async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      });
    }
    res.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   PUT /api/contact/:id/status
// @desc    Update contact status
// @access  Private
router.put('/:id/status', protect, authorize('admin', 'editor'), async (req, res) => {
  try {
    const { status } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { 
        status,
        ...(status === 'replied' && { repliedAt: Date.now() }),
      },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      });
    }

    res.json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// @route   DELETE /api/contact/:id
// @desc    Delete contact submission
// @access  Private
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found',
      });
    }
    res.json({
      success: true,
      message: 'Contact deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;

