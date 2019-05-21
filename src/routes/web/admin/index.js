/**
 * Created by nathan on 05/10/2017.
 */
// const usersRoute = require('./user');
const employeeRoute = require('./employee');
const EmployeeController = require('../../../controllers/web/EmployeeController');
const express = require('express');
const passport = require('../../../middlewares/passport');
const router = express.Router();

router.get('/', passport.notUserWeb, function (req, res) {
    res.render('admin/index');
});
router.get('/signIn', passport.notLogIn, EmployeeController.signIn);
router.post('/signIn', passport.notLogIn, EmployeeController.postSignIn);
router.get('/signOut', passport.notUserWeb, EmployeeController.signOut);
router.get('/profile', passport.notUserWeb, EmployeeController.profile);
router.post('/updateInfo', passport.notUserWeb, EmployeeController.updateInfo);
router.post('/changePassword', passport.notUserWeb, EmployeeController.changePassword);

// router.use('/users', passport.notUserWeb, usersRoute);
router.use('/employees'/* , passport.isAdminWeb */, employeeRoute);

module.exports = router; 