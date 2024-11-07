// /src/controllers/userController.js

const userService = require('../services/userService');

// Get all users
exports.getUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.status(200).json({ users });
};

// Create a new user
exports.createUser = (req, res) => {
  const { name, age } = req.body;
  
  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }

  const newUser = userService.createUser({ name, age });
  res.status(201).json({ user: newUser });
};
