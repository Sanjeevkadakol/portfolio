# Free Cloud Database Setup (Aiven)

Since you don't have hosting, we will use **Aiven** to get a free MySQL database.

## Step 1: Create Account
1.  Go to [Aiven.io](https://aiven.io/).
2.  Sign up for a free account.

## Step 2: Create Database
1.  Click **Create Service**.
2.  Select **MySQL**.
3.  Choose **Free** (Cloud: Google Cloud or AWS, Region: Nearest to you).
4.  Click **Create Service**.

## Step 3: Get Credentials
Once the service is "Running" (it takes a minute):
1.  Look for **Connection Information**.
2.  Copy the **Service URI**. It looks like:
    `mysql://avnadmin:password@host:port/defaultdb?ssl-mode=REQUIRED`

## Step 4: Configure Vercel
Go to your Vercel Project Settings -> Environment Variables and add:

| Name | Value from Aiven |
|------|------------------|
| `DB_HOST` | The host part (e.g., `mysql-123.aivencloud.com`) |
| `DB_PORT` | The port (e.g., `21234`) |
| `DB_USER` | `avnadmin` |
| `DB_PASS` | The password |
| `DB_NAME` | `defaultdb` |
| `DB_SSL` | `true` |

## Step 5: Migrate Data
You need to put your tables into this new database.
1.  I will provide a script to copy your local data to Aiven once you have the URI.
