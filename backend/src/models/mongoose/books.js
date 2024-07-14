const { Schema, model  } = require('mongoose');

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
    price: Number,
    isbn: String,
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
})

const bookModel = model('books', bookSchema);

module.exports = bookModel;