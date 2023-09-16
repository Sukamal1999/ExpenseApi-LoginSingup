const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const db = require('./database/database'); // Adjust the path as needed
const app = express();

// Configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(flash());

// Set up routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/welcome.html');
});

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/public/signup.html');
});

// Assuming you have imported the 'db' module as mentioned earlier

app.get('/users', async (req, res) => {
    try {
      const users = await db.query('SELECT * FROM users');
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Database error' });
    }
  });
  
// Add signup POST route to handle form submission

// Add login routes

// Set the port number
const PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
