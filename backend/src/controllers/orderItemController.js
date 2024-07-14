const orderItem = require('../models/mysql/orderItem');

const createOrderItem = async (req, res) => {
    const { order_id, book_id, quantity } = req.body;
    try {
        const [result] = await orderItem.query(
            'INSERT INTO OrderItem (order_id, book_id, quantity) VALUES (?, ?, ?)',
            [order_id, book_id, quantity]
        );
        res.status(201).json({ id: result.insertId, order_id, book_id, quantity });
    } catch (err) {
        res.status(500).json({ error: 'Error creating order item' });
    }
};

const getAllOrderItems = async (req, res) => {
    try {
        const [orderItems] = await orderItem.query('SELECT * FROM OrderItem');
        res.json(orderItems);
    } catch (err) {
        res.status(500).json({ error: 'Error retrieving order items' });
    }
};

const getOrderItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const [orderItems] = await orderItem.query('SELECT * FROM OrderItem WHERE id = ?', [id]);
        if (orderItems.length === 0) {
            return res.status(404).json({ error: 'Order item not found' });
        }
        res.json(orderItems[0]);
    } catch (err) {
        res.status(500).json({ error: 'Error retrieving order item' });
    }
};

const updateOrderItem = async (req, res) => {
    const { id } = req.params;
    const { order_id, book_id, quantity } = req.body;
    try {
        await orderItem.query(
            'UPDATE OrderItem SET order_id = ?, book_id = ?, quantity = ? WHERE id = ?',
            [order_id, book_id, quantity, id]
        );
        res.json({ message: 'Order item updated successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error updating order item' });
    }
};

const deleteOrderItem = async (req, res) => {
    const { id } = req.params;
    try {
        await orderItem.query('DELETE FROM OrderItem WHERE id = ?', [id]);
        res.json({ message: 'Order item deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting order item' });
    }
};

module.exports = {
    createOrderItem,
    getAllOrderItems,
    getOrderItemById,
    updateOrderItem,
    deleteOrderItem
};
