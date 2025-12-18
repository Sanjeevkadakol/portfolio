# 🚀 Vercel Deployment Guide

Follow these steps to deploy your portfolio to Vercel:

## Prerequisites
- A GitHub account
- Your portfolio code ready to push

## Step-by-Step Deployment

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account

3. **Import your project**
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Select the repository containing your portfolio

4. **Configure project**
   - Framework Preset: **Vite**
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Install Command: `npm install` (auto-detected)

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (usually 1-2 minutes)
   - Your site will be live at `your-project-name.vercel.app`

6. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - For production: `vercel --prod`

## Post-Deployment

### Update Environment Variables (if needed)
- Go to Project Settings → Environment Variables
- Add any required variables

### Enable Automatic Deployments
- Every push to `main` branch will auto-deploy
- Preview deployments for pull requests

## Troubleshooting

**Build fails?**
- Check build logs in Vercel dashboard
- Ensure `package.json` has correct scripts
- Verify Node.js version compatibility

**Routes not working?**
- The `vercel.json` file handles SPA routing
- Ensure it's in your project root

**Need to update?**
- Just push changes to GitHub
- Vercel will auto-deploy

## Your Portfolio is Live! 🎉

Your portfolio will be accessible at:
- Production: `https://your-project-name.vercel.app`
- Preview: `https://your-project-name-git-branch.vercel.app`

---

**Need help?** Check [Vercel Documentation](https://vercel.com/docs)

