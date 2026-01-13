import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Manual parsing to check for raw file issues
const envPath = path.resolve(process.cwd(), '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');

console.log('--- DEBUG START ---');

// Check required fields existence in file
const lines = envContent.split('\n');
const userLine = lines.find(l => l.startsWith('SMTP_USER'));
const passLine = lines.find(l => l.startsWith('SMTP_PASS'));

if (!userLine) console.error('❌ SMTP_USER not found in .env file!');
if (!passLine) console.error('❌ SMTP_PASS not found in .env file!');

// Parse with dotenv
dotenv.config();

const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

console.log(`Checking configuration for: ${user}`);

// 1. Check for whitespace
if (user && user.trim() !== user) {
    console.error(`❌ CRITICAL: SMTP_USER has extra spaces! Value: "${user}"`);
    console.log('FIX: Remove spaces around the email in .env');
}
if (pass && pass.trim() !== pass) {
    console.error(`❌ CRITICAL: SMTP_PASS has extra spaces! Value: "${pass}"`);
    console.log('FIX: Remove spaces around the password in .env');
}

// 2. Check password format
if (pass) {
    if (pass.includes(' ')) {
        console.warn('⚠️ WARNING: Password contains spaces. App Passwords usually work better without spaces.');
    }
    if (pass.length !== 16 && pass.replace(/ /g, '').length !== 16) {
        console.warn(`⚠️ WARNING: Password length is ${pass.length}. Google App Passwords are exactly 16 characters.`);
    }
}

// 3. Try Connection
console.log('Attempting connection to smtp.gmail.com:587...');
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: { user, pass }
});

transporter.verify((error, success) => {
    if (error) {
        console.error('❌ CONNECTION FAILED:');
        console.error(error);
        if (error.response && error.response.includes('535')) {
            console.log('\n--- TROUBLESHOOTING ---');
            console.log('1. Ensure "2-Step Verification" is ON for account: ' + user);
            console.log('2. Ensure this is an "App Password" (16 chars), NOT your login password.');
            console.log('3. Generate a NEW App Password and try again.');
        }
    } else {
        console.log('✅ SUCCESS! Credentials are working.');
    }
    console.log('--- DEBUG END ---');
});
