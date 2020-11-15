const Router = require('express');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');
//const { requireAuth } = require('../middleware/auth');
const { checkUser } = require('../middleware/auth');
const router = Router();

router.get('*', checkUser)
//here add   requireAuth   if needed
//router.get('/signup', authController.signup_get)
router.post('/signup', authController.signup_post)
//router.get('/login', authController.login_get)
router.post('/login', authController.login_post)
router.get('/logout', authController.logout_get);

module.exports = router;