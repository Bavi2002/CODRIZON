const express = require('express');

const router = express.Router();

router.post('/', (req,res) => {
    res.send("Add Product");
});

router.get('/', (req,res) => {
    res.send("Fetch Products");
});

router.put('/:id', (req,res) => {
    res.send("Update Product");
});

router.delete('/:id', (req,res) => {
    res.send("Delete Product");
});

module.exports = router;