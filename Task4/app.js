const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Use the MONGO_URL environment variable to connect to MongoDB
const MONGO_URL = process.env.MONGO_URL || 'mongodb://db:27017/mydatabase';

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
