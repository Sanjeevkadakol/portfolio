import { Sequelize } from 'sequelize';
import { Project, Skill, Blog } from './server/models/index.js';

const CLOUD_URI = process.env.DATABASE_URL || "mysql://avnadmin:YOUR_PASSWORD@mysql-2c1df8be-sanjeevpkadakol1-cbf1.d.aivencloud.com:22569/defaultdb?ssl-mode=REQUIRED";

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

// Link models to cloud instance for checking
const CloudProject = cloudSequelize.define('Project', Project.rawAttributes, Project.options);
const CloudSkill = cloudSequelize.define('Skill', Skill.rawAttributes, Skill.options);

async function check() {
    try {
        console.log('⏳ Connecting to Aiven Cloud to verify data...');
        await cloudSequelize.authenticate();
        console.log('✅ Connection Successful!');

        const projectCount = await CloudProject.count();
        const skillCount = await CloudSkill.count();

        console.log('\n--- Database Content Report ---');
        console.log(`Projects found in Cloud: ${projectCount}`);
        console.log(`Skills found in Cloud:   ${skillCount}`);

        if (projectCount > 0) {
            console.log('\n✅ Data exists in Cloud! The problem is likely the Vercel connection.');
        } else {
            console.log('\n❌ Cloud is EMPTY. We need to run the migration again.');
        }

        process.exit(0);
    } catch (error) {
        console.error('❌ Error checking cloud data:', error.message);
        process.exit(1);
    }
}

check();
