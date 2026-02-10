# Deployment Guide for GoDaddy (cPanel)

This guide will help you deploy your portfolio to GoDaddy using cPanel.

## Prerequisites
- **cPanel Hosting** with **Node.js** support (usually under "Software" or "Exclusive for GoDaddy" sections).
- **MySQL Database** limit not reached.
- **Domain** linked to your hosting.

## Step 1: Prepare Your Application
1.  Open your project in the terminal.
2.  Run the build command to create the production frontend:
    ```bash
    npm run build:full
    ```
    This creates a `dist` folder with your website files.

## Step 2: Database Setup
1.  **Export Local Database**:
    - Open your local database tool (e.g., Workbench, phpMyAdmin).
    - Export your `portfolio_db` (or whatever it's named) to a `.sql` file.
2.  **Create Live Database**:
    - Log in to **cPanel** -> **MySQL® Database Wizard**.
    - Create a new database (e.g., `sanjeev_portfolio`).
    - Create a new user (e.g., `sanjeev_admin`) and password. **Save these details.**
    - Add user to database with **ALL PRIVILEGES**.
3.  **Import Data**:
    - Go to **phpMyAdmin** in cPanel.
    - Select your new database.
    - Click **Import** and upload your `.sql` file.

## Step 3: Upload Files
**Option A: Simplified (Recommended)**
1.  Go to **File Manager** in cPanel.
2.  Navigate to the root of your domain (usually `public_html` or a subdomain folder).
3.  Upload the `deploy_package.zip` file I created for you.
4.  Right-click `deploy_package.zip` and select **Extract**.
5.  This will extract `dist`, `server`, and other files.

**Option B: Manual**
1.  Go to **File Manager** in cPanel.
2.  Navigate to the root of your domain (usually `public_html` or a subdomain folder).
3.  Upload the following files/folders from your local project:
    - `dist/` (The entire folder)
    - `server/` (The entire folder)
    - `public/` (For certificates)
    - `package.json`
    - `package-lock.json`
    - `vite.config.ts` (Optional, but safe to keep)
4.  **DO NOT** upload `node_modules`. We will install dependencies there.

## Step 4: Configure Node.js APP
1.  In cPanel, find **Setup Node.js App**.
2.  Click **Create Application**.
3.  **Node.js Version**: Select 18.x or 20.x (Recommended).
4.  **Application Mode**: Production.
5.  **Application Root**: The path to your uploaded files (e.g., `public_html`).
6.  **Application URL**: Select your domain.
7.  **Application Startup File**: `server/index.js`
8.  Click **Create**.

## Step 5: Install Dependencies
1.  Once created, scroll down to detect the "Virtual Environment" command.
2.  Click **Run NPM Install**. This installs all libraries on the server.

## Step 6: Environment Variables
1.  In the File Manager, create a new file named `.env` in your root folder.
2.  Add your production configuration:
    ```ini
    PORT=5000
    NODE_ENV=production
    DB_HOST=localhost
    DB_USER=your_cpanel_db_user
    DB_PASS=your_cpanel_db_password
    DB_NAME=your_cpanel_db_name
    SMTP_HOST=your_smtp_host
    SMTP_PORT=587
    SMTP_USER=your_email
    SMTP_PASS=your_email_password
    ```
3.  Save the file.

## Step 7: Restart
1.  Go back to **Setup Node.js App**.
2.  Click **Restart Application**.
3.  Visit your website!

## Troubleshooting
- **404 Errors**: Ensure `server/index.js` is set as the startup file.
- **Database Connection Error**: Check your `.env` credentials. The `DB_HOST` is almost always `localhost` on cPanel.
- **White Screen**: Check the browser console or server logs (in cPanel) for errors.
