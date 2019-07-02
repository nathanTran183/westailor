/**
 * Created by nathan on 14/10/2017.
 */
const express = require('express');
const discountController = require('../../../controllers/web/DiscountController');
const router = express.Router();
const passport = require('../../../middlewares/passport');

router.get('/', /* passport.isAdminWeb, */ discountController.list);
router.post('/', discountController.create);
router.post('/delete/:id', discountController.delete);
router.get('/generateCode', discountController.genCode);
router.get('/:id', /* passport.isAdminWeb, */ discountController.get);



module.exports = router;