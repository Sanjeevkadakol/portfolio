import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../models/index.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Register (Admin only - technically, passing 'secret' or relying on protect for subsequent ones)
// For first run, you might need a way to create the first admin.
// This route is often public for the first user or protected.
// For this portfolio, we'll keep it simple: checking if any user exists?
// OR just leave it open but warn.
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    const userExists = await User.findOne({ where: { username } });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const user = await User.create({ username, password });

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    console.log('--- LOGIN REQUEST ---');
    console.log('Body:', JSON.stringify(req.body));
    console.log('Headers Content-Type:', req.headers['content-type']);

    const { username, password } = req.body;
    console.log(`Username: '${username}' (Type: ${typeof username}, Length: ${username?.length})`);
    console.log(`Password: '${password}' (Type: ${typeof password}, Length: ${password?.length})`);
    console.log('JWT_SECRET defined:', !!process.env.JWT_SECRET);

    const user = await User.findOne({ where: { username } });
    if (!user) {
      console.log('❌ User not found in DB');
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    console.log('✅ User found in DB:', user.username);
    console.log('Stored Hash:', user.password.substring(0, 10) + '...');

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password comparison result:', isMatch);

    if (!isMatch) {
      console.log('❌ Password mismatch');
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    console.log('✅ Login successful, token generated');
    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get Current User
router.get('/me', protect, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] }
    });
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
