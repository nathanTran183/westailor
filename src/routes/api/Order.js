const express = require('express');
const router = express.Router();
const orderItemController = require('../../controllers/web/OrderItemController');
const orderController = require('../../controllers/web/OrderController');


router.post('/orderItem', orderItemController.add);
router.post('/removeItem/:id', orderItemController.delete);
router.post('/updateQuantity/:id', orderItemController.updateQuantity);
router.post('/addShipping', orderController.addShipping);

module.exports = router;