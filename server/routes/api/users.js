// route: '/api/user'
const router = require('express').Router();
const { loginUser, createUser, getAllUsers, getUserById } = require('../../controllers/userControllers');

router.get('/:userRole', getAllUsers);
router.get('/:userRole/:id', getUserById);
router.post('/login/:userRole', loginUser);
router.post('/signup/:userRole', createUser);

module.exports = router;
