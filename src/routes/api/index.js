const express = require('express');
const router = express.Router(); 
const user = require('./User');
const discount = require('./Discount')
/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/users', user);
router.use('/discounts', discount);
router.post('/feedback', (req, res) => {
  console.log(req.body)
  return res.status(200).json('success')
})

module.exports = router;
