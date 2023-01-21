const express = require('express');
const path = require('path');

const mongoose = require('mongoose');
const PORT = 3000;

const app = express();

const mongoURI =
  'mongodb+srv://francois:”MN7s20IhEKCnNudZ”@cluster0.mntpk3e.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURI);

/**
 * Automatically parse urlencoded body content and form data from incoming requests and place it
 * in req.body
 */
app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
