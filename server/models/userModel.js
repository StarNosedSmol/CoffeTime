const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

/**
* Hint: Why is bcrypt required here?
*/
const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);