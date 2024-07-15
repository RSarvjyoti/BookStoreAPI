const { Router } = require("express");
const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require("../controllers/bookController");

const book = Router();

book.post('/', createBook);
book.get('/', getAllBooks);
book.get('/:id', getBookById);
book.put('/:id', updateBook);
book.delete('/:id', deleteBook);

module.exports = book;

// createBook, getAllBooks, getBookById, updateBook, deleteBook