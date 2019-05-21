/**
 * Created by nathan on 05/10/2017.
 */
// const usersRoute = require('../admin/user');
// const adminRoutes = require('../admin')
// const employeeRoute = require('./employee');

const express = require('express');
const passport = require('../../../middlewares/passport');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('index');
});
// router.use('/users', passport.notUserWeb, usersRoute);
// router.use('/employees', employeeRoute);

module.exports = router; 