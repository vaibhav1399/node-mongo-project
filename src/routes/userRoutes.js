// /src/routes/userRoutes.js

const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// GET route
router.get('/', userController.getUsers);

// POST route
router.post('/', userController.createUser);

module.exports = router;
