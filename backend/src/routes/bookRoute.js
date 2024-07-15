const { Router } = require("express");
const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require("../controllers/bookController");
const { authenticateJWT, authorizeRole } = require("../middilewares/authMiddleware");
const paginate = require("../middilewares/pagination");

const book = Router();

book.post('/', createBook);
book.get('/', authenticateJWT, authorizeRole('user'), paginate(book), getAllBooks);
book.get('/:id', getBookById);
book.put('/:id', updateBook);
book.delete('/:id', deleteBook);

module.exports = book;

// createBook, getAllBooks, getBookById, updateBook, deleteBook