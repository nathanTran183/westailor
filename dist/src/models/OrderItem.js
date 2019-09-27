const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
    item_id: { type: String, require: true },
    fabric_id: { type: String, require: true },
    price: { type: Number, require: true },
    products: [{
        product_id: { type: String, require: true },
        style: { type: Object, require: true },
        img: { type: String, require: true },
        measure: { type: Object }
    }],
    quantity: { type: Number, require: true },
    status: { type: Boolean, default: false },
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }
}, { timestamps: true });

module.exports = mongoose.model('OrderItem', OrderItemSchema);