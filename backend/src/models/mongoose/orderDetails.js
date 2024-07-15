const { Schema, model  } = require('mongoose');

const orderDetails = new Schema({
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    customer_id: { type: Number, required: true }, 
    review_text: String,
    rating: Number,
    review_date: { type: Date, default: Date.now }
})

const orderDetailsModel = model('OrderDetails', orderDetails);

module.exports = orderDetailsModel;