import sequelize from './config/database.js';
import { Project, Skill, User, Settings } from './models/index.js';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config();

const projects = [
    {
        title: 'Hand Gesture Volume Adjuster',
        description: 'A CV project using OpenCV and MediaPipe to control system volume with hand gestures.',
        techStack: ['Python', 'OpenCV', 'MediaPipe'],
        category: 'ai',
        link: '#',
        github: '#',
        featured: true,
        order: 1
    },
    {
        title: 'Voice Assistant',
        description: 'An AI-powered voice assistant capable of performing various tasks via voice commands.',
        techStack: ['Python', 'Speech Recognition', 'NLP'],
        category: 'ai',
        link: '#',
        github: '#',
        featured: true,
        order: 2
    },
    {
        title: 'Virtual Pen',
        description: 'A computer vision application allowing users to draw on screen using hand gestures.',
        techStack: ['Python', 'OpenCV', 'NumPy'],
        category: 'ai',
        link: '#',
        github: '#',
        featured: true,
        order: 3
    },
    {
        title: 'Mental Health Chatbot',
        description: 'An AI-powered chatbot designed to provide mental health support and resources.',
        techStack: ['Python', 'NLP', 'TensorFlow', 'Flask'],
        category: 'ml',
        link: '#',
        github: '#',
        featured: true,
        order: 4
    }
];

const skills = [
    { name: 'Gen AI', category: 'ai-ml', proficiency: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    { name: 'Agentic AI', category: 'ai-ml', proficiency: 85, icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png' },
    { name: 'Azure ML', category: 'ai-ml', proficiency: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'HTML / CSS', category: 'web-dev', proficiency: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'Javascript', category: 'web-dev', proficiency: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'UI/UX Design', category: 'design', proficiency: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Communication', category: 'design', proficiency: 90, icon: 'https://cdn-icons-png.flaticon.com/512/1000/1000946.png' },
    { name: 'Cyber Security', category: 'other', proficiency: 75, icon: 'https://cdn-icons-png.flaticon.com/512/2092/2092663.png' },
    // Certifications
    { name: 'Python Fundamentals', category: 'certification', proficiency: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Cyber Security & Data Analytics', category: 'certification', proficiency: 100, icon: 'https://cdn-icons-png.flaticon.com/512/2716/2716612.png' },
    { name: 'Gen AI Models and Tools', category: 'certification', proficiency: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    { name: 'Certification in DevOps with Cloud, Docker, CI CD & Ansible', category: 'certification', proficiency: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'ML and DS with AWS', category: 'certification', proficiency: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Certification in AZURE ML', category: 'certification', proficiency: 100, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' }
];

const seedWithSequelize = async () => {
    try {
        // Sync all models (Force true drops tables)
        await sequelize.sync({ force: true });
        console.log('✅ Database synced (Tables recreated)');

        // Create Admin User
        // Note: User hook handles hashing, but seeded pwd might bypass if using bulkCreate?
        // No, individual create or using hooks: true needed.
        // Let's use individual create for safety.
        await User.create({
            username: 'admin',
            password: 'password123', // Will be hashed by hook
            role: 'admin'
        });
        console.log('✅ Admin user created');

        // Create Projects
        await Project.bulkCreate(projects);
        console.log('✅ Projects inserted');

        // Create Skills
        await Skill.bulkCreate(skills);
        console.log('✅ Skills inserted');

        // Create Settings
        await Settings.create();
        console.log('✅ Default settings created');

        console.log('✅ Seeding complete!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Seeding failed:', error);
        process.exit(1);
    }
};

seedWithSequelize();
