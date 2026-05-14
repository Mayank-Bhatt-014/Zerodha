require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const url = process.env.MONGODB_URI;
const app = express();

mongoose.connect(url);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});