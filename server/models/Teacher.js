const {
  Schema,
  model,
  Types: { ObjectId },
} = require('mongoose');
const UserSchema = require('./User');

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

const Teacher = model('Teacher', teacherSchema);

module.exports = Teacher;
