import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import './models/index.js'; // Import models to initialize them

// Import Routes
import projectRoutes from './routes/projects.js';
import blogRoutes from './routes/blog.js';
import skillRoutes from './routes/skills.js';
import authRoutes from './routes/auth.js';
import contactRoutes from './routes/contact.js';
import settingsRoutes from './routes/settings.js';

dotenv.config();

const app = express();
const PORT = process.env.BACKEND_PORT || process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
sequelize.sync({ force: false }) // Set force: true to reset DB arrays
  .then(() => console.log('✅ MySQL connected and synced'))
  .catch((err) => console.error('❌ MySQL connection error:', err));

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/settings', settingsRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Portfolio API is running. Access endpoints via /api');
});

app.get('/api/health', async (req, res) => {
  try {
    await sequelize.authenticate();
    const dbStatus = 'connected';

    const emailConfigured = !!(process.env.SMTP_USER && process.env.SMTP_PASS);

    res.json({
      status: 'OK',
      message: 'Server is running',
      database: dbStatus,
      email: emailConfigured ? 'configured' : 'not configured'
    });
  } catch (error) {
    res.status(500).json({
      status: 'ERROR',
      message: 'Database connection failed',
      error: error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

export default app;
