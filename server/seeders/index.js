require('dotenv').config();
const util = require('util');
const { Teacher, Student } = require('../models');
const db = require('../config/connection');
const dummyStudent = require('./dummyStudent');
const dummyTeacher = require('./dummyTeacher');

db.once('open', async () => {
  try {
    // Ran this first to create a unique ObjectId so I could use it in the dummyTeacher seed
    // await Student.deleteMany({});
    // await Student.create(dummyStudent);

    await Teacher.deleteMany({});
    await Teacher.create(dummyTeacher);

    console.log('Seeding done');
    process.exit(0);
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
});
