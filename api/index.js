import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from '../server/config/database.js';
import '../server/models/index.js'; // Import models to initialize them
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import Routes
import projectRoutes from '../server/routes/projects.js';
import blogRoutes from '../server/routes/blog.js';
import skillRoutes from '../server/routes/skills.js';
import contactRoutes from '../server/routes/contact.js';
import settingsRoutes from '../server/routes/settings.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
sequelize.sync({ alter: true })
  .then(() => console.log('✅ MySQL connected and synced'))
  .catch((err) => console.error('❌ MySQL connection error:', err));

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/settings', settingsRoutes);

// Health check
// Serve static files from the React app (Only for Monolith/Local)
if (process.env.VERCEL !== '1') {
  app.use(express.static(path.join(__dirname, '../dist')));

  // The "catchall" handler: for any request that doesn't
  // match one above, send back React's index.html file.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

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

if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

export default app;
