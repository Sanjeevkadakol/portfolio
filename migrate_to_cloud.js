import { Sequelize } from 'sequelize';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { Project, Skill, Blog, Contact, Settings } from './server/models/index.js';

dotenv.config();

/**
 * MIGRATION SCRIPT
 * This script will:
 * 1. Connect to your LOCAL database
 * 2. Connect to your CLOUD database
 * 3. Export data from local and import to cloud (or just sync models)
 */

const CLOUD_URI = "mysql://avnadmin:AVNS_kFrHYJLxbKap46X2_eI@mysql-2c1df8be-sanjeevpkadakol1-cbf1.d.aivencloud.com:22569/defaultdb?ssl-mode=REQUIRED";

const cloudSequelize = new Sequelize(CLOUD_URI, {
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

async function migrate() {
    try {
        console.log('⏳ Connecting to Cloud Database...');
        await cloudSequelize.authenticate();
        console.log('✅ Connected to Cloud Database.');

        console.log('⏳ Syncing models (Creating tables)...');
        // Define cloud models using the local model definitions
        const cloudProject = cloudSequelize.define('Project', Project.rawAttributes, Project.options);
        const cloudSkill = cloudSequelize.define('Skill', Skill.rawAttributes, Skill.options);
        const cloudBlog = cloudSequelize.define('Blog', Blog.rawAttributes, Blog.options);
        const cloudContact = cloudSequelize.define('Contact', Contact.rawAttributes, Contact.options);
        const cloudSettings = cloudSequelize.define('Settings', Settings.rawAttributes, Settings.options);

        // Create tables in the cloud
        await cloudSequelize.sync({ force: true });
        console.log('✅ Tables created in Cloud Database.');

        console.log('⏳ Copying data from LOCAL to CLOUD...');

        // Copy Projects
        const projects = await Project.findAll();
        if (projects.length > 0) {
            await cloudProject.bulkCreate(projects.map(p => p.toJSON()));
            console.log(`✅ Copied ${projects.length} Projects.`);
        }

        // Copy Skills
        const skills = await Skill.findAll();
        if (skills.length > 0) {
            await cloudSkill.bulkCreate(skills.map(s => s.toJSON()));
            console.log(`✅ Copied ${skills.length} Skills.`);
        }

        // Copy Blog
        const blogs = await Blog.findAll();
        if (blogs.length > 0) {
            await cloudBlog.bulkCreate(blogs.map(b => b.toJSON()));
            console.log(`✅ Copied ${blogs.length} Blogs.`);
        }

        // Copy Settings
        const settingsItems = await Settings.findAll();
        if (settingsItems.length > 0) {
            await cloudSettings.bulkCreate(settingsItems.map(s => s.toJSON()));
            console.log(`✅ Copied Settings.`);
        }

        console.log('\n✨ MIGRATION COMPLETE! Your cloud database is now ready.');
        process.exit(0);
    } catch (error) {
        console.error('❌ Migration failed:', error);
        process.exit(1);
    }
}

migrate();
