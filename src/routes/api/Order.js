const express = require('express');
const router = express.Router();
const orderItemController = require('../../controllers/web/OrderItemController');


router.post('/orderItem', orderItemController.add);
router.post('/removeItem/:id', orderItemController.delete);
router.post('/updateQuantity/:id', orderItemController.updateQuantity);

module.exports = router;