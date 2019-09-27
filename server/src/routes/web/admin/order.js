/**
 * Created by nathan on 05/10/2017.
 */
const express = require('express');
const ordersController = require('../../../controllers/web/OrderController');
const orderItemsController = require('../../../controllers/web/OrderItemController');
const router = express.Router();

router.get('/', ordersController.list);
router.get('/pending', ordersController.pendingList);
router.get('/confirmed', ordersController.confirmedList);
router.get('/processing', ordersController.processingList);
router.get('/statistic', ordersController.statistic);

router.get('/create', ordersController.getCreate);
router.post('/create', ordersController.postCreate);

router.get('/:id', ordersController.get);
// router.post('/update/:id', ordersController.update); 
router.post('/update/:id/change-status', ordersController.updateStatus); //only update user status

router.post('/:id/orderItems/:itemId/update', orderItemsController.updateMeasure);

module.exports = router;