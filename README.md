# Portfolio CMS - Full Stack Portfolio Website with Content Management System

A modern, full-stack portfolio website with an integrated Content Management System (CMS) built with React, Node.js, Express, and MongoDB.

## Features

### Frontend (Portfolio Website)
- ✅ Responsive design compatible across all devices
- ✅ Dynamic project showcases
- ✅ Blog section with dynamic content
- ✅ Skills section
- ✅ Contact form with email notifications
- ✅ Theme customization (light/dark/auto mode)
- ✅ Smooth animations and transitions
- ✅ Form validation

### Backend (CMS & API)
- ✅ RESTful API endpoints
- ✅ MongoDB database integration
- ✅ JWT-based authentication and authorization
- ✅ Content Management System (CMS) dashboard
- ✅ Email notification service
- ✅ Secure admin panel

## Tech Stack

### Frontend
- React 18
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- Nodemailer
- Bcryptjs

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd porteasy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # MongoDB Connection
   MONGODB_URI=mongodb://localhost:27017/portfolio-cms

   # JWT Secret (Change this in production!)
   JWT_SECRET=your-super-secret-jwt-key-change-in-production

   # Email Configuration (SMTP)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ADMIN_EMAIL=admin@example.com

   # Frontend URL
   FRONTEND_URL=http://localhost:5173
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start MongoDB**
   - If using local MongoDB, ensure it's running
   - Or use MongoDB Atlas connection string in `.env`

5. **Run the application**

   **Development mode (both frontend and backend):**
   ```bash
   npm run dev:full
   ```

   **Or run separately:**
   
   Backend only:
   ```bash
   npm run server:dev
   ```

   Frontend only:
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Portfolio Website: http://localhost:5173
   - CMS Dashboard: http://localhost:5173/admin/login
   - API: http://localhost:5000/api

## Initial Setup

### Create Admin User

You can create an admin user by making a POST request to `/api/auth/register`:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@example.com",
    "password": "yourpassword",
    "role": "admin"
  }'
```

Or use the API directly from your frontend/admin panel.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Projects
- `GET /api/projects` - Get all published projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (Protected)
- `PUT /api/projects/:id` - Update project (Protected)
- `DELETE /api/projects/:id` - Delete project (Protected)
- `GET /api/projects/admin/all` - Get all projects including drafts (Protected)

### Blog
- `GET /api/blog` - Get all published blog posts
- `GET /api/blog/:slug` - Get blog post by slug
- `POST /api/blog` - Create blog post (Protected)
- `PUT /api/blog/:id` - Update blog post (Protected)
- `DELETE /api/blog/:id` - Delete blog post (Protected)
- `GET /api/blog/admin/all` - Get all blog posts (Protected)

### Skills
- `GET /api/skills` - Get all active skills
- `POST /api/skills` - Create skill (Protected)
- `PUT /api/skills/:id` - Update skill (Protected)
- `DELETE /api/skills/:id` - Delete skill (Protected)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions (Protected)
- `GET /api/contact/:id` - Get single contact (Protected)
- `PUT /api/contact/:id/status` - Update contact status (Protected)
- `DELETE /api/contact/:id` - Delete contact (Protected)

### Settings
- `GET /api/settings` - Get settings
- `PUT /api/settings` - Update settings (Protected)

## Project Structure

```
porteasy/
├── server/
│   ├── config/
│   │   └── database.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   ├── Blog.js
│   │   ├── Skill.js
│   │   ├── Contact.js
│   │   └── Settings.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── projects.js
│   │   ├── blog.js
│   │   ├── skills.js
│   │   ├── contact.js
│   │   └── settings.js
│   ├── utils/
│   │   ├── generateToken.js
│   │   └── emailService.js
│   └── index.js
├── src/
│   ├── admin/
│   │   ├── AdminLogin.jsx
│   │   ├── Dashboard.jsx
│   │   └── *.css
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   └── Navbar.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── AppRouter.jsx
│   └── main.jsx
└── package.json
```

## Features in Detail

### Theme Customization
- Light/Dark/Auto mode
- Customizable primary and secondary colors
- Persistent theme preferences

### Email Notifications
- Contact form submissions trigger email notifications
- Auto-reply to users
- Configurable SMTP settings

### CMS Dashboard
- Secure admin login
- Content management for projects, blog, and skills
- Contact message management
- Settings configuration

## Development

### Scripts
- `npm run dev` - Start frontend dev server
- `npm run server` - Start backend server
- `npm run server:dev` - Start backend with nodemon
- `npm run dev:full` - Start both frontend and backend concurrently
- `npm run build` - Build for production

## Production Deployment

1. Set `NODE_ENV=production` in `.env`
2. Update `MONGODB_URI` with production database
3. Set secure `JWT_SECRET`
4. Configure production SMTP settings
5. Build frontend: `npm run build`
6. Deploy backend and serve frontend build

## License

MIT License

## Support

For issues and questions, please open an issue on the repository.
