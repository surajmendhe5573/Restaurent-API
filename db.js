const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL

// Set up MongoDB connection
mongoose.connect(mongoURL)

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// Define event listeners for database connection

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Export the database connection
module.exports = db;

// this is suraj mendhe

