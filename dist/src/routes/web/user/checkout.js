
const express = require('express');
const passport = require('../../../middlewares/passport');
const OrderController = require('../../../controllers/web/OrderController');
const router = express.Router();

router.get('/cart', OrderController.getSessionCart);
router.get('/cart/:id', OrderController.getCartItem);
router.get('/shipping', [passport.isUserWeb, passport.hasCart], OrderController.getShipping);
router.get('/payment', [passport.isUserWeb, passport.hasCart], OrderController.getPayment);
router.post('/payment', [passport.isUserWeb, passport.hasCart], OrderController.postPayment);
router.post('/shipping', [passport.isUserWeb, passport.hasCart], OrderController.postShipping);

module.exports = router;