const express = require('express');
const path = require('path');
const app = express();

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Landing page route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Game page route
app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'game.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

// const express = require('express');
// const app = express();
// const path = require('path');

// app.use(express.static('public')); // Serve static files like HTML, CSS, and JS

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });

// app.listen(3000, () => {
//   console.log('Card Guessing Game running on http://localhost:3000');
// });
