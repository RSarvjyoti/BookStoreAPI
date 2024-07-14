const { Router } = require('express');
const { createOrderItem, getAllOrderItems, getOrderItemById, updateOrderItem, deleteOrderItem } = require('../controllers/orderItemController');

const orderItem = Router();

orderItem.post('/', createOrderItem);
orderItem.get('/', getAllOrderItems);
orderItem.get('/:id', getOrderItemById);
orderItem.put('/:id', updateOrderItem);
orderItem.delete('/:id', deleteOrderItem);

module.exports = orderItem;