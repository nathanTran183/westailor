/**
 * Created by nathan on 05/10/2019.
 */
const checkoutRoute = require('./checkout');
const orderRoute = require('./order');
// const adminRoutes = require('../admin')
// const employeeRoute = require('./employee');

const express = require('express');
const passport = require('../../../middlewares/passport');
const FabricController = require('../../../controllers/web/FabricController');
const OrderController = require('../../../controllers/web/OrderController');
const UserController = require('../../../controllers/web/UserController');
const router = express.Router();

router.get('/', function (req, res) {
    var ua = req.headers['user-agent'];
    if (/mobile/i.test(ua)) res.render('user/mobile/index');else res.render('user/web/index');
});
router.get('/signIn', passport.notLogIn, function (req, res) {
    var ua = req.headers['user-agent'];
    if (/mobile/i.test(ua)) res.render('user/mobile/signIn');else res.render('user/web/signIn');
});
router.get('/chat', function (req, res) {
    res.render('user/web/chat');
});

router.post('/signIn', passport.notLogIn, UserController.postSignIn);
router.post('/signUp', passport.notLogIn, UserController.postSignUp);
router.get('/signOut', passport.isUserWeb, UserController.signOut);
router.get('/profile', passport.isUserWeb, UserController.userProfile);
router.post('/profile', passport.isUserWeb, UserController.updateUserInfo);
router.post('/change-password', passport.isUserWeb, UserController.changePass);

router.get('/men/design-suit', function (req, res, next) {
    res.locals.item = "item_001";next();
}, FabricController.list);
router.get('/men/design-suit/:id', function (req, res, next) {
    res.locals.item = "item_001";next();
}, FabricController.list);
router.get('/men/design-vest', function (req, res, next) {
    res.locals.item = "item_002";next();
}, FabricController.list);
router.get('/men/design-vest/:id', function (req, res, next) {
    res.locals.item = "item_002";next();
}, FabricController.list);
router.get('/men/design-shirt', function (req, res, next) {
    res.locals.item = "item_003";next();
}, FabricController.list);
router.get('/men/design-shirt/:id', function (req, res, next) {
    res.locals.item = "item_003";next();
}, FabricController.list);

router.use('/orders', orderRoute);
router.use('/checkout', checkoutRoute);

module.exports = router;