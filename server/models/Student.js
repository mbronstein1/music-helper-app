const { Schema, model } = require('mongoose');
const UserSchema = require('./User');

const assignmentsSchema = new Schema({
  dueDate: Date,
  assignment: [
    {
      topic: String,
      list: [String],
    },
  ],
});

const studentSchema = new Schema({
  ...UserSchema.obj,
  instruments: [String],
  homework: [assignmentsSchema],
});

const Student = model('Student', studentSchema);

module.exports = Student;
