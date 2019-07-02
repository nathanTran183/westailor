/**
 * Created by nathan on 05/10/2019.
 */
// const usersRoute = require('../admin/user');
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
    if (/mobile/i.test(ua))
        res.render('user/mobile/index');
    else
        res.render('user/web/index');
});
router.get('/signIn', function (req, res) {
    var ua = req.headers['user-agent'];
    if (/mobile/i.test(ua))
        res.render('user/mobile/index');
    else
        res.render('user/web/signIn');
});

router.post('/signIn', UserController.postSignIn);
router.post('/signUp', UserController.postSignUp);



// router.get('/design-suit', function (req, res) {
//     var ua = req.headers['user-agent'];
//     if (/mobile/i.test(ua))
//         res.render('user/mobile/index');
//     else    
//     res.render('user/web/design-suit');
// });
router.get('/checkout/cart', OrderController.getSessionCart);
router.get('/checkout/shipping', passport.hasCart, OrderController.getShipping);
router.get('/checkout/payment', passport.hasCart, OrderController.getPayment);
router.post('/checkout/payment', passport.hasCart, OrderController.postPayment);
router.get('/men/design-suit', FabricController.list);
router.get('/men/design-suit/:id', FabricController.list);

module.exports = router; 