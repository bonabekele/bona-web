# Portfolio Website - MySQL Backend Setup

This document provides instructions for setting up a MySQL backend to work with the portfolio website.

## Database Setup

1. Install MySQL on your machine if not already installed
2. Create a new database:
```sql
CREATE DATABASE portfolio_db;
USE portfolio_db;
```

3. Create the necessary tables:

```sql
-- Projects Table
CREATE TABLE projects (
  id VARCHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  shortDescription VARCHAR(255),
  category VARCHAR(100),
  image VARCHAR(255),
  githubUrl VARCHAR(255),
  demoUrl VARCHAR(255),
  technologies JSON,
  featured BOOLEAN DEFAULT FALSE
);

-- Skills Table
CREATE TABLE skills (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  level INT CHECK (level BETWEEN 1 AND 5),
  category VARCHAR(100)
);

-- Education Table
CREATE TABLE education (
  id VARCHAR(36) PRIMARY KEY,
  institution VARCHAR(255) NOT NULL,
  degree VARCHAR(255),
  field VARCHAR(255),
  startDate VARCHAR(50),
  endDate VARCHAR(50),
  description TEXT
);

-- Contact Messages Table
CREATE TABLE contact_messages (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  read BOOLEAN DEFAULT FALSE
);

-- Gallery Items Table
CREATE TABLE gallery_items (
  id VARCHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  date VARCHAR(50),
  imageUrl VARCHAR(255),
  description TEXT
);

-- Services Table
CREATE TABLE services (
  id VARCHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  shortDescription VARCHAR(255),
  description TEXT,
  technologies JSON
);

-- User Profile Table
CREATE TABLE user_profile (
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  title VARCHAR(255),
  bio TEXT,
  email VARCHAR(255),
  phone VARCHAR(50),
  location VARCHAR(255),
  avatar VARCHAR(255)
);
```

## Node.js Backend Setup

1. Create a new directory for your backend:
```bash
mkdir portfolio-backend
cd portfolio-backend
npm init -y
npm install express mysql2 cors dotenv
```

2. Create a `.env` file:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=portfolio_db
PORT=3001
```

3. Create a server.js file:
```javascript
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Projects endpoint
app.get('/api/projects', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM projects');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

app.get('/api/projects/featured', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM projects WHERE featured = TRUE');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    res.status(500).json({ error: 'Failed to fetch featured projects' });
  }
});

app.get('/api/projects/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM projects WHERE id = ?', [req.params.id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Project not found' });
    }
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ error: 'Failed to fetch project' });
  }
});

// Skills endpoint
app.get('/api/skills', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM skills');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required' });
  }
  
  try {
    await pool.query(
      'INSERT INTO contact_messages (id, name, email, message) VALUES (UUID(), ?, ?, ?)',
      [name, email, message]
    );
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

// Services endpoint
app.get('/api/services', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM services');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

// Gallery endpoint
app.get('/api/gallery', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM gallery_items');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching gallery items:', error);
    res.status(500).json({ error: 'Failed to fetch gallery items' });
  }
});

// Profile data endpoint
app.get('/api/profile', async (req, res) => {
  try {
    const [profile] = await pool.query('SELECT * FROM user_profile LIMIT 1');
    const [skills] = await pool.query('SELECT * FROM skills');
    const [education] = await pool.query('SELECT * FROM education');
    const [projects] = await pool.query('SELECT * FROM projects WHERE featured = TRUE LIMIT 6');
    
    res.json({
      profile: profile[0] || {},
      skills: skills || [],
      education: education || [],
      projects: projects || []
    });
  } catch (error) {
    console.error('Error fetching profile data:', error);
    res.status(500).json({ error: 'Failed to fetch profile data' });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

4. Run the backend:
```bash
node server.js
```

5. Import the data from the frontend into the MySQL database. You can create SQL insert statements from the data.js file in your frontend project.

## Connecting to your React app

In your React app, make sure the API_BASE_URL in src/lib/dbConfig.ts points to your backend server:
```typescript
export const API_BASE_URL = "http://localhost:3001/api";
```

This allows your React app to communicate with the MySQL database through the Express.js API.
