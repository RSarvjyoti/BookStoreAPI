const { Router } = require('express');
const { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } = require('../controllers/orderController');
const { authenticateJWT, authorizeRole } = require('../middilewares/authMiddleware');

const order = Router();

order.post('/', createOrder);
order.get('/',authenticateJWT, authorizeRole('user'), getAllOrders);
order.get('/:id', getOrderById);
order.put('/:id', updateOrder);
order.delete('/:id', deleteOrder);

module.exports = order;
