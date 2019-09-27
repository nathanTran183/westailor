
const express = require('express');
const passport = require('../../../middlewares/passport');
const OrderController = require('../../../controllers/web/OrderController');
const router = express.Router();

router.get('/', passport.isUserWeb, OrderController.listOrder);
router.get('/pending', passport.isUserWeb, OrderController.getPendingCart);
router.get('/:id', passport.isUserWeb, OrderController.getOrder);
router.get('/:id/items/:itemId', passport.isUserWeb, OrderController.getOrderItem);

module.exports = router;