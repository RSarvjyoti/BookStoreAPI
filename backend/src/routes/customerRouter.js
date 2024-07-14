const { Router } = require('express');
const { createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer } = require('../controllers/customerController');

const customer = Router();

customer.post('/', createCustomer);
customer.get('/', getAllCustomers);
customer.get('/:id', getCustomerById);
customer.put('/:id', updateCustomer);
customer.delete('/:id', deleteCustomer);

module.exports = customer;