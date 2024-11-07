// /src/db.js

const mongoose = require('mongoose');
// If you have any configuration settings

// MongoDB URI (make sure to use the correct one for your MongoDB instance)
const mongoURI = 'mongodb://localhost:27017/ecomm';  // For local MongoDB

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);  // Exit the process if the connection fails
  }
};

module.exports = connectDB;
