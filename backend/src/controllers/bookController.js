const bookModel = require("../models/mongoose/books");

const createBook = async (req, res) => {
    try {
        const book = new bookModel(req.body);
        await book.save();
        res.status(201).send(book);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
}

const getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.find();
        res.status(200).send(books);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
}

const getBookById = async (req, res) => {
    try {
        const book = await bookModel.findById(req.params.id);
        if (!book) {
            return res.status(404).send({ error: 'Book not found' });
        }
        res.status(200).send(book);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
}

const updateBook = async (req, res) => {
    try {
        const book = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!book) {
            return res.status(404).send({ error: 'Book not found' });
        }
        res.status(200).send(book);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
}

const deleteBook = async (req, res) => {
    try {
        const book = await bookModel.findByIdAndDelete(req.params.id);
        
        if (!book) {
            return res.status(404).send({ error: 'Book not found' });
        }
        
        res.status(200).send({ message: 'Book deleted successfully' });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
}

module.exports = { createBook, getAllBooks, getBookById, updateBook, deleteBook };