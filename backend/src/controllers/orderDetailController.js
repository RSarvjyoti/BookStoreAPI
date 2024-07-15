const orderDetailsModel = require("../models/mongoose/orderDetails");

const getAllBookDetails = async (req, res) => {
    try {
        const orderDetails = await orderDetailsModel.find().populate('book');
        res.status(200).send(orderDetails);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
}

const getBookDetailsById = async (req, res) => {
    try {
        const orderDetail = await orderDetailsModel.findById(req.params.id).populate('book');
        if (!orderDetail) {
            return res.status(404).send({ error: 'Order detail not found' });
        }
        res.status(200).send(orderDetail);
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
}


const deleteBookDetails = async (req, res) => {
    try {
        const orderDetail = await orderDetailsModel.findByIdAndDelete(req.params.id);
        if (!orderDetail) {
            return res.status(404).send({ error: 'Order detail not found' });
        }
        res.status(200).send({ message: 'Order detail deleted successfully' });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
}

module.exports = { getAllBookDetails, getBookDetailsById, deleteBookDetails };