const orderModel = require('../models/mysql/order');

const createOrder = async (req, res) => {
    const { customer_id, status } = req.body;
    try {
        const [result] = await orderModel.query(
            'INSERT INTO `Order` (customer_id, status) VALUES (?, ?)',
            [customer_id, status]
        );
        res.status(201).json({ id: result.insertId, customer_id, status });
    } catch (err) {
        res.status(500).json({ error: 'Error creating order' });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const [orders] = await orderModel.query('SELECT * FROM `Order`');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: 'Error retrieving orders' });
    }
};

const getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const [orders] = await orderModel.query('SELECT * FROM `Order` WHERE id = ?', [id]);
        if (orders.length === 0) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(orders[0]);
    } catch (err) {
        res.status(500).json({ error: 'Error retrieving order' });
    }
};

const updateOrder = async (req, res) => {
    const { id } = req.params;
    const { customer_id, status } = req.body;
    try {
        await orderModel.query(
            'UPDATE `Order` SET customer_id = ?, status = ? WHERE id = ?',
            [customer_id, status, id]
        );
        res.json({ message: 'Order updated successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error updating order' });
    }
};

const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        await orderModel.query('DELETE FROM `Order` WHERE id = ?', [id]);
        res.json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting order' });
    }
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder
};
