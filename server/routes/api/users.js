// route: '/api/user'
const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const { loginUser, createUser, uploadImage, getAllUsers, getUserById } = require('../../controllers/userControllers');
const upload = require('../../utils/multer-config');

router.get('/:userRole', authMiddleware, getAllUsers);
router.get('/:userRole/:id', authMiddleware, getUserById);
router.post('/login/:userRole', loginUser);
router.post('/signup/:userRole', createUser);
router.post('/image-upload', upload, uploadImage);

module.exports = router;
