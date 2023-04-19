const { Schema, model } = require('mongoose');
const userSchema = require('./User');

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

const Student = model('Student', studentSchema);

module.exports = Student;
