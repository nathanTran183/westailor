const mongoose = require('mongoose');

/* Status of order
 *  1: pending
 *  2: confirmed
 *  3: processing
 *  4: delivering
 *  5: completed
 *  0: cancelled
 */

const OrderSchema = new mongoose.Schema({
    discount_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Discount'
    },
    bag_price: { type: Number, require: true },
    ship_fee: { type: Number, require: true },
    total_price: { type: Number, require: true },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    shipping: {
        name: { type: String, require: true },
        address: { type: String, require: true },
        city: { type: String, require: true },
        zipcode: { type: String },
        country: { type: String, require: true },
        province: { type: String },
        phone: { type: String }
    },
    status: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5],
        default: 2
    },
    order_item: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderItem' }],
    transaction_id: { type: String, require: true }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);