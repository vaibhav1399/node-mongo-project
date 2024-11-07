// /src/services/userService.js

let users = [];  // In-memory users array

// Get all users
exports.getAllUsers = () => {
  return users;
};

// Create a new user
exports.createUser = (userData) => {
  const newUser = { id: users.length + 1, ...userData };
  users.push(newUser);
  return newUser;
};

