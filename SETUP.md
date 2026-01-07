# Setup Guide - Portfolio CMS

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory (copy from `env.example`):

```bash
cp env.example .env
```

Edit `.env` and update the following:

- **MONGODB_URI**: Your MongoDB connection string
  - Local: `mongodb://localhost:27017/portfolio-cms`
  - Atlas: `mongodb+srv://username:password@cluster.mongodb.net/portfolio-cms`

- **JWT_SECRET**: A secure random string for JWT tokens
  - Generate one: `openssl rand -base64 32`

- **SMTP Settings**: For email notifications
  - Gmail: Use App Password (not regular password)
  - Other providers: Update SMTP_HOST and SMTP_PORT accordingly

### 3. Start MongoDB

**Option A: Local MongoDB**
```bash
# Windows
mongod

# Mac/Linux
sudo systemctl start mongod
# or
brew services start mongodb-community
```

**Option B: MongoDB Atlas (Cloud)**
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update MONGODB_URI in `.env`

### 4. Create Admin User

After starting the server, create an admin user:

**Using curl:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@example.com",
    "password": "SecurePassword123!",
    "role": "admin"
  }'
```

**Or using Postman/Thunder Client:**
- Method: POST
- URL: http://localhost:5000/api/auth/register
- Body (JSON):
```json
{
  "username": "admin",
  "email": "admin@example.com",
  "password": "SecurePassword123!",
  "role": "admin"
}
```

### 5. Run the Application

**Development (Both Frontend & Backend):**
```bash
npm run dev:full
```

**Or separately:**

Terminal 1 (Backend):
```bash
npm run server:dev
```

Terminal 2 (Frontend):
```bash
npm run dev
```

### 6. Access the Application

- **Portfolio Website**: http://localhost:5173
- **CMS Login**: http://localhost:5173/admin/login
- **API**: http://localhost:5000/api

## Email Configuration

### Gmail Setup

1. Enable 2-Step Verification on your Google Account
2. Generate an App Password:
   - Go to Google Account → Security
   - App passwords → Generate
   - Copy the 16-character password
3. Update `.env`:
   ```
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   ```

### Other Email Providers

Update SMTP settings in `.env`:
- **Outlook**: `smtp-mail.outlook.com`, port 587
- **Yahoo**: `smtp.mail.yahoo.com`, port 587
- **Custom**: Check your provider's SMTP settings

## Troubleshooting

### MongoDB Connection Issues

**Error: "MongoServerError: Authentication failed"**
- Check MongoDB credentials
- Ensure database user has proper permissions

**Error: "MongooseServerSelectionError"**
- Verify MongoDB is running
- Check connection string format
- For Atlas: Whitelist your IP address

### Port Already in Use

**Error: "Port 5000 already in use"**
- Change PORT in `.env` to another port (e.g., 5001)
- Update VITE_API_URL accordingly

### Email Not Sending

- Verify SMTP credentials
- Check spam folder
- For Gmail: Ensure App Password is used (not regular password)
- Check server logs for detailed error messages

### Frontend Can't Connect to API

- Ensure backend server is running
- Check VITE_API_URL in `.env`
- Verify CORS settings in server/index.js
- Check browser console for errors

## Production Deployment

1. **Set Environment Variables**
   ```env
   NODE_ENV=production
   MONGODB_URI=your-production-mongodb-uri
   JWT_SECRET=your-production-secret
   ```

2. **Build Frontend**
   ```bash
   npm run build
   ```

3. **Serve Frontend**
   - Option A: Serve `dist` folder with Express
   - Option B: Deploy to Vercel/Netlify
   - Option C: Use nginx/Apache

4. **Deploy Backend**
   - Deploy to Heroku, Railway, or VPS
   - Ensure MongoDB is accessible
   - Set environment variables on hosting platform

## Next Steps

1. ✅ Create admin user
2. ✅ Login to CMS dashboard
3. ✅ Add your projects
4. ✅ Create blog posts
5. ✅ Update skills
6. ✅ Customize settings
7. ✅ Test contact form

## Support

For issues, check:
- Server logs in terminal
- Browser console for frontend errors
- MongoDB connection status
- Environment variables are set correctly

