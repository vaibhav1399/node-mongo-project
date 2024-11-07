// /src/app.js

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const productRoutes = require('./routes/productRoutes');  // Import product routes

const app = express();

// Middleware
app.use(morgan('combined'));  // Logging
app.use(bodyParser.json());  // JSON body parsing

// Register routes
app.use('/api/v1', productRoutes);  // Use the product routes under /api/v1

// Export app
module.exports = app;
