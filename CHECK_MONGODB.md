# How to Check Contact Messages in MongoDB

## Method 1: Using MongoDB Compass (GUI - Recommended)

### Step 1: Download MongoDB Compass
- Download from: https://www.mongodb.com/try/download/compass
- Install and open MongoDB Compass

### Step 2: Connect to MongoDB
1. Open MongoDB Compass
2. Enter connection string:
   - **Local MongoDB**: `mongodb://localhost:27017`
   - **MongoDB Atlas**: `mongodb+srv://username:password@cluster.mongodb.net`
3. Click "Connect"

### Step 3: Navigate to Database
1. In the left sidebar, find and click on database: **`portfolio-cms`**
2. If database doesn't exist, it will be created when first contact is submitted

### Step 4: View Contacts Collection
1. Click on collection: **`contacts`**
2. You'll see all contact form submissions
3. Each document shows:
   - `_id`: Unique ID
   - `name`: Sender's name
   - `email`: Sender's email
   - `message`: Message content
   - `subject`: Subject line
   - `status`: Status (new, read, replied, archived)
   - `createdAt`: Timestamp when submitted
   - `repliedAt`: Timestamp when replied (if applicable)

### Step 5: Filter and Search
- Use the filter bar to search by:
  - Email address
  - Name
  - Status
  - Date range

---

## Method 2: Using MongoDB Shell (Command Line)

### Step 1: Open Terminal/Command Prompt
- Windows: PowerShell or Command Prompt
- Mac/Linux: Terminal

### Step 2: Connect to MongoDB
```bash
mongosh
```
Or for older versions:
```bash
mongo
```

### Step 3: Select Database
```javascript
use portfolio-cms
```

### Step 4: View All Contacts
```javascript
db.contacts.find().pretty()
```

### Step 5: Count Total Contacts
```javascript
db.contacts.countDocuments()
```

### Step 6: Filter Contacts
```javascript
// Find by email
db.contacts.find({ email: "user@example.com" }).pretty()

// Find by status
db.contacts.find({ status: "new" }).pretty()

// Find recent contacts (last 24 hours)
db.contacts.find({ 
  createdAt: { $gte: new Date(Date.now() - 24*60*60*1000) } 
}).pretty()

// Find by name (case-insensitive)
db.contacts.find({ 
  name: { $regex: "john", $options: "i" } 
}).pretty()
```

### Step 7: Sort Contacts
```javascript
// Sort by newest first
db.contacts.find().sort({ createdAt: -1 }).pretty()

// Sort by oldest first
db.contacts.find().sort({ createdAt: 1 }).pretty()
```

### Step 8: Update Contact Status
```javascript
// Mark as read
db.contacts.updateOne(
  { _id: ObjectId("contact-id-here") },
  { $set: { status: "read" } }
)

// Mark as replied
db.contacts.updateOne(
  { _id: ObjectId("contact-id-here") },
  { 
    $set: { 
      status: "replied",
      repliedAt: new Date()
    }
  }
)
```

### Step 9: Delete Contact
```javascript
db.contacts.deleteOne({ _id: ObjectId("contact-id-here") })
```

---

## Method 3: Using API Endpoint (Admin Access Required)

### Step 1: Login to Get Token
```bash
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "your-password"
}
```

### Step 2: Get All Contacts
```bash
GET http://localhost:5000/api/contact
Authorization: Bearer <your-token>
```

### Step 3: Get Single Contact
```bash
GET http://localhost:5000/api/contact/:id
Authorization: Bearer <your-token>
```

### Step 4: Filter by Status
```bash
GET http://localhost:5000/api/contact?status=new
Authorization: Bearer <your-token>
```

---

## Method 4: Using Browser (MongoDB Atlas)

If using MongoDB Atlas:

### Step 1: Login to Atlas
- Go to: https://cloud.mongodb.com
- Login to your account

### Step 2: Navigate to Database
1. Click on your cluster
2. Click "Browse Collections"
3. Select database: **`portfolio-cms`**
4. Select collection: **`contacts`**

### Step 3: View Documents
- All contact submissions will be displayed
- Click on any document to view full details

---

## Quick Verification Commands

### Check if MongoDB is Running:
```bash
# Windows
Get-Service MongoDB

# Mac/Linux
brew services list | grep mongodb
# or
sudo systemctl status mongod
```

### Check Database Connection:
```bash
mongosh --eval "db.adminCommand('ping')"
```

### List All Databases:
```javascript
show dbs
```

### List Collections in Database:
```javascript
use portfolio-cms
show collections
```

### View Database Stats:
```javascript
db.stats()
```

---

## Sample Contact Document Structure

```json
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services...",
  "subject": "Project Inquiry",
  "status": "new",
  "createdAt": ISODate("2024-01-15T10:30:00.000Z"),
  "repliedAt": null
}
```

---

## Troubleshooting

### Database Not Found?
- Database is created automatically when first contact is submitted
- Make sure you've submitted at least one contact form

### Collection Not Found?
- Collection is created automatically when first contact is submitted
- Check if MongoDB connection is working

### Can't Connect to MongoDB?
- **Local**: Make sure MongoDB service is running
- **Atlas**: Check connection string and IP whitelist
- Verify connection string in `.env` file

### No Data Showing?
- Submit a test contact form first
- Check server logs for errors
- Verify MongoDB connection in server logs

---

## Quick Test

1. Submit a test contact form on your website
2. Open MongoDB Compass or shell
3. Connect to `portfolio-cms` database
4. View `contacts` collection
5. You should see your test submission!

---

## Useful MongoDB Queries

```javascript
// Get unread messages
db.contacts.find({ status: "new" }).count()

// Get messages from last 7 days
db.contacts.find({
  createdAt: { 
    $gte: new Date(Date.now() - 7*24*60*60*1000) 
  }
}).pretty()

// Search by keyword in message
db.contacts.find({
  message: { $regex: "project", $options: "i" }
}).pretty()

// Get latest 10 contacts
db.contacts.find()
  .sort({ createdAt: -1 })
  .limit(10)
  .pretty()
```



