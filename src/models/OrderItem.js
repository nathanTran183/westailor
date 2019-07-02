const Promise = require('bluebird');
const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
    code: { type: String, required: true },
    percent: { type: Number, enum: [10,20,30,50,70], required: true },
    date_start: { type: Date, required: true },
    date_end: { type: Date, required: true },
    
}, {timestamps: true});



module.exports = mongoose.model('OrderItem', OrderItemSchema);