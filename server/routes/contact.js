import express from 'express';
import { Contact } from '../models/index.js';
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

export default router;
