const express = require('express');
const router = express.Router();
const orderItemController = require('../../controllers/web/OrderItemController');


router.post('/orderItem', orderItemController.add);

module.exports = router;