const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose');
const UserSchema = require('./User');
const bcrypt = require('bcrypt');

const teacherSchema = new Schema({
  ...UserSchema.obj,
  institution: String,
  students: [
    {
      type: ObjectId,
      ref: 'Student',
    },
  ],
});

//Hashing user password on signup
teacherSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

//Comparing inputted password with user's stored hashed password on login
teacherSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Teacher = model('Teacher', teacherSchema);

module.exports = Teacher;
