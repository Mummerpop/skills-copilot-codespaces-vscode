// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse JSON data
app.use(bodyParser.json());

// Comments array
const comments = [
  { id: 1, author: 'John Doe', text: 'A comment' },
  { id: 2, author: 'Jane Doe', text: 'Another comment' }
];

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Start server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});