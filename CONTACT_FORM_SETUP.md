# Contact Form Setup Guide

## ✅ What's Already Implemented

Your contact form is **fully functional** and includes:

1. **MongoDB Storage** ✅
   - All contact form submissions are automatically saved to MongoDB
   - Stored in the `contacts` collection
   - Includes: name, email, message, subject, status, timestamps

2. **Admin Email Notifications** ✅
   - Admin receives email notification when someone submits the form
   - Email includes: name, email, subject, and message
   - Reply-to is set to the sender's email for easy replies

3. **Auto-Reply to Users** ✅
   - Users receive a confirmation email after submitting
   - Professional thank-you message

4. **Error Handling** ✅
   - Form validation (name, email, message required)
   - Email validation
   - Database saves even if email fails
   - Detailed error logging

## 🔧 Configuration Required

### 1. MongoDB Setup

Make sure MongoDB is running and update `.env`:

```env
MONGODB_URI=mongodb://localhost:27017/portfolio-cms
```

Or use MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio-cms
```

### 2. Email Configuration (Required for Email Notifications)

Update your `.env` file with SMTP settings:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@example.com
```

#### For Gmail:
1. Enable 2-Step Verification
2. Generate App Password:
   - Go to Google Account → Security
   - App passwords → Generate
   - Use the 16-character password (not your regular password)

#### Note:
- If email is not configured, messages will still be saved to MongoDB
- Email failures won't prevent form submission
- Check server logs for email status

## 📊 How It Works

### Flow:
1. User fills out contact form on website
2. Form validates input (client-side)
3. Form submits to `/api/contact` endpoint
4. **MongoDB**: Message saved to database ✅
5. **Email**: Admin notification sent ✅
6. **Email**: Auto-reply sent to user ✅
7. Success response returned to frontend

### Database Schema:
```javascript
{
  name: String (required),
  email: String (required, validated),
  message: String (required),
  subject: String (default: "Portfolio Inquiry"),
  status: String (enum: 'new', 'read', 'replied', 'archived'),
  createdAt: Date,
  repliedAt: Date (when status = 'replied')
}
```

## 🧪 Testing

### Test the Contact Form:
1. Go to: http://localhost:5173
2. Scroll to Contact section
3. Fill out the form
4. Submit

### Check Server Logs:
You should see:
```
📧 New contact form submission: { name: '...', email: '...' }
✅ Contact saved to MongoDB: <id>
✅ Admin notification email sent
✅ Auto-reply email sent to user
```

### View Messages in Database:
- Use MongoDB Compass or mongo shell
- Database: `portfolio-cms`
- Collection: `contacts`

### View Messages via API (Admin):
```bash
GET http://localhost:5000/api/contact
Headers: Authorization: Bearer <your-token>
```

## 🔍 Troubleshooting

### Messages Not Saving to MongoDB:
- ✅ Check MongoDB is running
- ✅ Verify MONGODB_URI in .env
- ✅ Check server logs for connection errors
- ✅ Test: `GET http://localhost:5000/api/health`

### Emails Not Sending:
- ✅ Check SMTP settings in .env
- ✅ For Gmail: Use App Password (not regular password)
- ✅ Check server logs for email errors
- ✅ Verify ADMIN_EMAIL is set correctly
- ✅ Note: Messages still save even if email fails

### Form Not Submitting:
- ✅ Check browser console for errors
- ✅ Verify API URL in `.env`: `VITE_API_URL=http://localhost:5000/api`
- ✅ Check backend server is running on port 5000
- ✅ Check CORS settings

## 📝 API Endpoints

### Submit Contact Form (Public):
```bash
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'm interested in..."
}
```

### Get All Contacts (Admin Only):
```bash
GET /api/contact
Authorization: Bearer <token>
```

### Update Contact Status (Admin Only):
```bash
PUT /api/contact/:id/status
Authorization: Bearer <token>
Body: { "status": "read" }
```

## ✅ Verification Checklist

- [ ] MongoDB is running and connected
- [ ] `.env` file has MONGODB_URI configured
- [ ] `.env` file has SMTP settings (if using email)
- [ ] Backend server is running (port 5000)
- [ ] Frontend server is running (port 5173)
- [ ] Test form submission works
- [ ] Check MongoDB for saved messages
- [ ] Check admin email for notifications (if configured)

## 🎯 Next Steps

1. **Test the form** - Submit a test message
2. **Check MongoDB** - Verify message is saved
3. **Configure email** - Set up SMTP for notifications
4. **View in CMS** - Login to admin dashboard to see messages
5. **Customize** - Update email templates if needed

Your contact form is ready to use! 🚀

