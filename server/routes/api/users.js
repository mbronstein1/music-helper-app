// route: '/api/user'
const router = require('express').Router();
const { loginUser, createUser, getAllUsers } = require('../../controllers/userControllers');

router.get('/:userRole', getAllUsers);
// router.get('users/:userRole/:id', getUserById);
router.post('/login/:userRole', loginUser);
router.post('/signup/:userRole', createUser);

module.exports = router;
