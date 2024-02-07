const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = 'mongodb://localhost:27017/Restaurent'
// const mongoURL = 'mongodb+srv://SurajM:Suraj777@cluster0.vdhcphr.mongodb.net/'

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);  // github
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;

// this is suraj mendhe

