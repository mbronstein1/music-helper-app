const { Schema, model } = require('mongoose');
const userSchema = require('./User');
const bcrypt = require('bcrypt');

const assignmentsSchema = new Schema({
  dueDate: Date,
  assignments: [
    {
      topic: String,
      list: [String],
    },
  ],
});

const studentSchema = new Schema({
  ...userSchema.obj,
  instruments: [String],
  homework: [assignmentsSchema],
});

//Hashing user password on signup
studentSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

//Comparing inputted password with user's stored hashed password on login
studentSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Student = model('Student', studentSchema);

module.exports = Student;
