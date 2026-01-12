import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Project from './models/Project.js';
import Skill from './models/Skill.js';
import Blog from './models/Blog.js';

dotenv.config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio-cms');
        console.log('✅ Connected to MongoDB');

        // 1. Create Admin User
        const adminExists = await User.findOne({ email: 'admin@example.com' });
        if (!adminExists) {
            await User.create({
                username: 'admin',
                email: 'admin@example.com',
                password: 'password123',
                role: 'admin'
            });
            console.log('👤 Admin user created: admin@example.com / password123');
        } else {
            console.log('ℹ️ Admin user already exists');
        }

        // 2. Sample Project (if none exist)
        const projectCount = await Project.countDocuments();
        if (projectCount === 0) {
            await Project.create({
                title: 'Portfolio Website',
                description: 'A full-stack portfolio website with CMS.',
                category: 'fullstack',
                technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
                featured: true,
                status: 'published'
            });
            console.log('📁 Sample project created');
        }

        console.log('✨ Database seeding completed!');
        process.exit();
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};

seedData();
