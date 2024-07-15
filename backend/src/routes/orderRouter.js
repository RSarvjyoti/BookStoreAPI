const { Router } = require('express');
const { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } = require('../controllers/orderController');
const { authenticateJWT } = require('../middilewares/authMiddleware');

const order = Router();

order.post('/', createOrder);
order.get('/',authenticateJWT, getAllOrders);
order.get('/:id', getOrderById);
order.put('/:id', updateOrder);
order.delete('/:id', deleteOrder);

module.exports = order;
