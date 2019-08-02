const fs = require('fs');
const path = require('path');
const Discount = require('../../models/Discount');
const Order = require('../../models/Order');
const OrderItem = require('../../models/OrderItem');
const filePath = path.join(__dirname, '../../models/data.json');
const gateway = require('../../../config/gateway');


module.exports = {
    list: async (req, res) => {
        try {
            let orders;
            page = req.params.pageNumber;
            if (!!page)
                orders = await Order.find({ user_id: req.session.user._id }).skip((page - 1) * 5).limit(5).lean();
            orders = await Order.find({ user_id: req.session.user._id }).skip(0).limit(5).lean();
            return res.json({ success: true, data: { orders: orders } });
        } catch (err) {
            console.log(err);
            res.redirect('back')
        }
    },

    
}