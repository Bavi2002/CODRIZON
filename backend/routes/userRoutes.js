const express = require('express');
const { protect } = require("../middleware/authMiddleware");
const { register, login, profile } = require("../controllers/userController");

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/profile', protect, profile);

module.exports = router;