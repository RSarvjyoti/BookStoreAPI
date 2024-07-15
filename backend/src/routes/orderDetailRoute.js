const { Router } = require("express");
const { getAllBookDetails, getBookDetailsById, deleteBookDetails } = require("../controllers/orderDetailController");
const { authenticateJWT, authorizeRole } = require("../middilewares/authMiddleware");

const review = Router();

review.get("/", authenticateJWT, authorizeRole('user'),  getAllBookDetails);

review.get('/:id', getBookDetailsById);

review.delete('/:id', deleteBookDetails);

module.exports = review;


// getAllBookDetails, getBookDetailsById, deleteBookDetails