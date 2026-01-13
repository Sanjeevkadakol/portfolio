
import sequelize from './config/database.js';
import { User } from './models/index.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const checkLogin = async () => {
    try {
        await sequelize.authenticate();
        console.log('DB Connected');

        const username = 'admin';
        const password = 'password123';

        console.log(`Checking user: ${username}`);
        const user = await User.findOne({ where: { username } });

        if (!user) {
            console.log('❌ User NOT found');
            return;
        }
        console.log('✅ User found');
        console.log('Stored Hash:', user.password);

        console.log(`Comparing password: ${password}`);
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            console.log('✅ Password VALID');
        } else {
            console.log('❌ Password INVALID');

            // Debug: check what a new hash looks like
            const newHash = await bcrypt.hash(password, 10);
            console.log('New Hash would be:', newHash);
        }

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await sequelize.close();
    }
};

checkLogin();
