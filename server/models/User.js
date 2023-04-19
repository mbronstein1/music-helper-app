const { Schema } = require('mongoose');

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/, 'Must be a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = UserSchema;
