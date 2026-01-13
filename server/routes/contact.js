import express from 'express';
import { Contact } from '../models/index.js';
import { protect } from '../middleware/auth.js';
import { sendContactEmail, sendAutoReply } from '../utils/emailService.js';

const router = express.Router();

// Submit contact form
router.post('/', async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    // Send emails (non-blocking)
    try {
      await sendContactEmail(contact);
      await sendAutoReply(contact);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all contacts (Admin)
router.get('/', protect, async (req, res) => {
  try {
    const contacts = await Contact.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get single contact
router.get('/:id', protect, async (req, res) => {
  try {
    const contact = await Contact.findByPk(req.params.id);
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }
    res.json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update status
router.put('/:id/status', protect, async (req, res) => {
  try {
    const contact = await Contact.findByPk(req.params.id);
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    await contact.update({ status: req.body.status });

    res.json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete contact
router.delete('/:id', protect, async (req, res) => {
  try {
    const contact = await Contact.findByPk(req.params.id);
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }

    await contact.destroy();

    res.json({ success: true, message: 'Contact deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
