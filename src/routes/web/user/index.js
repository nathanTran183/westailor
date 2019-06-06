/**
 * Created by nathan on 05/10/2017.
 */
// const usersRoute = require('../admin/user');
// const adminRoutes = require('../admin')
// const employeeRoute = require('./employee');

const express = require('express');
const passport = require('../../../middlewares/passport');
const FabricController = require('../../../controllers/web/FabricController');
const router = express.Router();

router.get('/', function (req, res) {
    var ua = req.headers['user-agent'];
    if (/mobile/i.test(ua))
        res.render('user/mobile/index');
    else
        res.render('user/web/index');
});

// router.get('/design-suit', function (req, res) {
//     var ua = req.headers['user-agent'];
//     if (/mobile/i.test(ua))
//         res.render('user/mobile/index');
//     else    
//     res.render('user/web/design-suit');
// });

router.get('/design-suit', FabricController.list);
// router.use('/users', passport.notUserWeb, usersRoute);
// router.use('/employees', employeeRoute);

module.exports = router; 