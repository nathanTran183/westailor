const express = require('express');
// const expressJwt = require('express-jwt');
const discountController = require('../../controllers/api/DiscountController');
const router = express.Router();
// const config = require('../../config/index');
// const passport = require('../../middlewares/passport');

router.get('/', discountController.list);
router.get('/:id', discountController.get);
router.post('/check', discountController.checkDiscount);

module.exports = router;