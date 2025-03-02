const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Example route (adjust based on your dice game logic)
app.get('/roll', (req, res) => {
  res.json({ result: Math.floor(Math.random() * 6) + 1 });
});

// Vercel uses this export for serverless functions
module.exports = app;