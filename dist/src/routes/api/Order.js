const express = require('express');
const router = express.Router();
const orderItemController = require('../../controllers/api/OrderItemController');
const orderController = require('../../controllers/api/OrderController');
const passport = require('../../middlewares/passport');

// router.get('/orders', passport.isUserWeb, orderController.list);
router.get('/orderItems', passport.notUserWeb, orderItemController.list);

router.post('/orderItem', orderItemController.add);
router.post('/clearItem', passport.notUserWeb, orderItemController.clear);
router.post('/orderItem/:id', orderItemController.add);
router.post('/removeItem/:id', orderItemController.delete);
router.post('/updateQuantity/:id', orderItemController.updateQuantity);

module.exports = router;