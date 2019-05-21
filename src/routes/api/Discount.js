const express = require('express');
// const expressJwt = require('express-jwt');
const discountController = require('../../controllers/api/DiscountController');
const router = express.Router();
// const config = require('../../config/index');
// const passport = require('../../middlewares/passport');

router.get('/', discountController.listDiscounts);
router.get('/:id', discountController.getDiscount);

module.exports = router;