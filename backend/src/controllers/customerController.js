
const customerModel = require('../models/mysql/customer');

const createCustomer = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const [result] = await customerModel.query(
            'INSERT INTO Customer (name, email, password, role) VALUES (?, ?, ?, ?)',
            [name, email, password, role]
        );
        res.status(201).json({ id: result.insertId, name, email, role });
    } catch (err) {
        res.status(500).json({ error: 'Error creating customer' });
    }
};

const getAllCustomers = async (req, res) => {
    try {
        const [customers] = await customerModel.query('SELECT * FROM Customer');
        res.json(customers);
    } catch (err) {
        res.status(500).json({ error: 'Error retrieving customers' });
    }
};

const getCustomerById = async (req, res) => {
    const { id } = req.params;
    try {
        const [customers] = await customerModel.query('SELECT * FROM Customer WHERE id = ?', [id]);
        if (customers.length === 0) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.json(customers[0]);
    } catch (err) {
        res.status(500).json({ error: 'Error retrieving customer' });
    }
};

const updateCustomer = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, role } = req.body;
    try {
        await customerModel.query(
            'UPDATE Customer SET name = ?, email = ?, password = ?, role = ? WHERE id = ?',
            [name, email, password, role, id]
        );
        res.json({ message: 'Customer updated successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error updating customer' });
    }
};

const deleteCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        await customerModel.query('DELETE FROM Customer WHERE id = ?', [id]);
        res.json({ message: 'Customer deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting customer' });
    }
};

module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
};
