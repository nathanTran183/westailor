// const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const productPath = path.join(__dirname, '../../data/products.json');
const imagePath = path.join(__dirname, '../../data/images.json');
const filePath = path.join(__dirname, '../../../../publics/images/components');

const OrderItem = require('../../models/OrderItem');

module.exports = {
    add: async (req, res) => {},

    delete: async (req, res) => {},

    updateMeasure: async (req, res) => {
        try {
            let id = req.params.id,
                itemId = req.params.itemId;
            if (!id || !itemId) {
                req.flash('errors', { msg: 'Invalid params!' });
                res.redirect('back');
            }
            let orderItem = await OrderItem.findOne({ _id: itemId, order_id: id });
            if (!orderItem) {
                req.flash('errors', { msg: 'Order Item not found!' });
                res.redirect('back');
            }

            let productFile = fs.readFileSync(productPath);
            let productData = JSON.parse(productFile);

            let product = productData.find(prod => prod.code == orderItem.product_id);
            if (!product) {
                req.flash('errors', { msg: 'Order Item not found!' });
                res.redirect('back');
            }
            if (!orderItem.measure) orderItem.measure = {};
            for (var i = 0; i < product.measure.length; i++) {
                if (!req.body[product.measure[i]]) {
                    req.flash('errors', { msg: 'Please fill all measure info!' });
                    res.redirect('back');
                }
                orderItem.measure[product.measure[i]] = req.body[product.measure[i]];
            }
            orderItem.markModified('measure');
            orderItem.status = true;
            await orderItem.save();
            req.flash('success', 'Update measure info successfully');
            res.redirect('/admin/orders/' + id);
        } catch (error) {
            req.flash('errors', { msg: error.message });
            res.redirect('back');
        }
    }
};