import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const createDatabase = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASS || 'Jeeva@123',
        });

        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME || 'portfolio_cms'}\`;`);
        console.log(`✅ Database '${process.env.DB_NAME || 'portfolio_cms'}' created successfully or already exists.`);
        await connection.end();
        process.exit(0);
    } catch (error) {
        console.error('❌ Failed to create database:', error);
        process.exit(1);
    }
};

createDatabase();
