const express = require('express');
// const expressJwt = require('express-jwt');
const userController = require('../../controllers/api/UserController');
const router = express.Router();
// const config = require('../../config/index');
// const passport = require('../../middlewares/passport');

router.get('/', userController.listUsers);
router.post('/signUp', userController.signUp);
router.post('/signIn', userController.signIn);
router.get('/:id', userController.getUser);

module.exports = router;