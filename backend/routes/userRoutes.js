const express = require('express');

const router = express.Router();
const userControllers = require('../controlles/userController');
const authControllers = require('../controlles/authController');
const statusControllers = require('../controlles/statusController');
const { uploadSingle } = require('../middelwares/upload');

router.post('/auth/google-login', authControllers.googleLogin);

router.route('/auth/login').post(authControllers.login);

router.route('/auth/sing-up').post(authControllers.singUp);

router.route('/auth/forgot-password').post(authControllers.forgotPassword);

router.route('/auth/reset-password/:token').post(authControllers.resetPassword);

// protect all next routes
router.use(authControllers.auth);

router
  .route('/')
  .get(userControllers.getUsers)
  .post(userControllers.createUser);

router
  .route('/me')
  .get(userControllers.getViewerID, userControllers.getViewer)
  .post(uploadSingle, userControllers.updateViewer);

// only admin can get next routes
router.use(statusControllers.isAdmin);

router.route('/:id').delete(userControllers.deleteUser);

module.exports = router;
