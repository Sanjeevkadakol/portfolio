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
const PORT = process.env.PORT || 5000;

// ... (keep middleware and routes)

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

export default app;
