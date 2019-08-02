const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
    product_id: { type: String, require: true },
    fabric_id: { type: String, require: true },
    price: { type: Number, require: true },
    style: { type: Object, require: true },
    measure: { type: Object },
    quantity: { type: Number, require: true },
    status: { type: Boolean, default: false },
    img: { type: String, require: true },
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }
}, { timestamps: true });



module.exports = mongoose.model('OrderItem', OrderItemSchema);