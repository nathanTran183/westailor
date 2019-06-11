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
router.get('/checkout/cart', OrderController.getSessionCart);
router.get('/men/design-suit', FabricController.list);

module.exports = router; 