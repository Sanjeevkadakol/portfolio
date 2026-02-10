# Vercel Deployment Guide

Deploying to Vercel allows for continuous deployment from GitHub and high performance.

## Prerequisites
- **GitHub Account**: Your project code must be on GitHub.
- **Vercel Account**: Linked to your GitHub.
- **Remote Database**: A MySQL database accessible from the internet.
  - **Option A**: Enable "Remote MySQL" in GoDaddy cPanel (Add `%` to access list).
  - **Option B**: Use a cloud database like PlanetScale, Aiven, or Railway.

## Step 1: Push to GitHub
1.  Initialize Git if you haven't:
    ```bash
    git init
    git add .
    git commit -m "Ready for deploy"
    ```
2.  Create a repository on GitHub.
3.  Push your code:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
    git push -u origin main
    ```

## Step 2: Connect to Vercel
1.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **Add New...** -> **Project**.
3.  Import your GitHub repository.

## Step 3: Configure Project
Vercel will auto-detect Vite. The default settings are mostly correct, but we need to check:

- **Framework Preset**: Vite
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build` (or `npm run build:full` - sticking to standard `npm run build` is fine for Vercel as it handles functions separately).

## Step 4: Environment Variables (Critical)
In the Vercel project deployment screen (or under Settings -> Environment Variables), add the following exactly:

| Name | Value |
|------|-------|
| `DB_HOST` | `mysql-2c1df8be-sanjeevpkadakol1-cbf1.d.aivencloud.com` |
| `DB_PORT` | `22569` |
| `DB_USER` | `avnadmin` |
| `DB_PASS` | `AVNS_kFrHYJLxbKap46X2_eI` |
| `DB_NAME` | `defaultdb` |
| `DB_SSL` | `true` |
| `JWT_SECRET` | `sanjeev_portfolio_secret_2026` |
| `VERCEL` | `1` |

**Note**: `PORT` is not needed on Vercel.

## Step 5: Deploy
1.  Click **Deploy**.
2.  Vercel will build your frontend and prepare your backend API.
3.  Once done, you will get a URL (e.g., `project-name.vercel.app`).

## Troubleshooting Database
If your API returns errors or internal server errors:
1.  Check **Runtime Logs** in Vercel Dashboard -> Deployments -> [Select Deployment] -> Functions.
2.  Common error: `connect ETIMEDOUT` or `Access denied`.
    - This means Vercel cannot reach your GoDaddy database.
    - **Fix**: Go to GoDaddy cPanel -> **Remote MySQL**. Add IP address `0.0.0.0` or allow all `%`. (Note: `%` is less secure but guarantees Vercel can connect).
