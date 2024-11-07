// /src/server.js

// /src/server.js

const connectDB = require('./db');  // Import the DB connection function
const app = require('./app');       // Import the Express app

// Connect to the database
connectDB();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
