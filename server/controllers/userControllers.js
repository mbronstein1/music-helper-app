const { Teacher, Student } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
  async createUser(req, res) {
    if (req.params.userRole === 'student') {
      try {
        const user = await Student.create(req.body);
        const token = signToken(user);
        res.cookie('token', token, { httpOnly: true });
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      try {
        const user = await Teacher.create(req.body);
        const token = signToken(user);
        res.cookie('token', token, { httpOnly: true });
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  },

  async loginUser(req, res) {
    if (req.params.userRole === 'student') {
      try {
        const user = await Student.findOne({ email: req.body.email });

        if (!user) {
          return res.status(401).json({ message: 'No user found!' });
        }

        const correctPw = user.isCorrectPassword(req.body.password);

        if (!correctPw) {
          return res.status(401).json({ message: 'Incorrect credentials' });
        }

        const token = signToken(user);
        res.cookie('token', token, { httpOnly: true });
        res.json({ user, token });
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      try {
        const user = await Teacher.findOne({ email: req.body.email });

        if (!user) {
          return res.status(401).json({ message: 'No user found!' });
        }

        const correctPw = await user.isCorrectPassword(req.body.password);

        if (!correctPw) {
          return res.status(401).json({ message: 'Incorrect credentials' });
        }

        const token = signToken(user);
        res.cookie('token', token, { httpOnly: true });
        res.json({ user, token });
      } catch (err) {
        res.status(500).json(err);
      }
    }
  },
  async getAllUsers(req, res) {
    if (req.params.userRole === 'student') {
      try {
        const users = await Student.find().select('-__v');
        if (!users) {
          return res.status(401).json({ message: 'No students found!' });
        }

        res.json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      try {
        const users = await Teacher.find().populate('students').select('-__v');
        if (!users) {
          return res.status(401).json({ message: 'No students found!' });
        }

        res.json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  },
};
