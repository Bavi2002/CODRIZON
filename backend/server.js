const express = require('express');
const cors = require('cors');
const connectDb = require("./config/db.js");
const dotenv =require('dotenv');
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js');

dotenv.config();

connectDb();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req,res) => {
    res.send("Api is incoming.....");
});


//Port Configuration
const Port = process.env.PORT;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});