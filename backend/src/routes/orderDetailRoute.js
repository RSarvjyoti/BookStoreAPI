const { Router } = require("express");
const { getAllBookDetails, getBookDetailsById, deleteBookDetails } = require("../controllers/orderDetailController");

const review = Router();

review.get("/",  getAllBookDetails);

review.get('/:id', getBookDetailsById);

review.delete('/:id', deleteBookDetails);

module.exports = review;


// getAllBookDetails, getBookDetailsById, deleteBookDetails