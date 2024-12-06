const express = require('express');
const { protect } = require("../middleware/authMiddleware");
const { register, login, profile, update, deleteUser } = require("../controllers/userController");

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/profile', protect, profile);

router.put('/update', protect, update);    

router.delete('/delete', protect, deleteUser);


module.exports = router;