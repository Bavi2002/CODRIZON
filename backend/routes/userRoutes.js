const express = require('express');

const router = express.Router();

router.post('/register', (req,res) => {
    res.send("Register User");
});

router.post('/login', (req,res) => {
    res.send("Login User");
});

router.get('/profile', (req,res) => {
    res.send("User Profile");
});

module.exports = router;