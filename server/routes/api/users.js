// route: '/api/user'
const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const { loginUser, createUser, getAllUsers, getUserById } = require('../../controllers/userControllers');

router.get('/:userRole', authMiddleware, getAllUsers);
router.get('/:userRole/:id', authMiddleware, getUserById);
router.post('/login/:userRole', loginUser);
router.post('/signup/:userRole', createUser);

module.exports = router;
