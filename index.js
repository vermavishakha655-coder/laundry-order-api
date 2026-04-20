const express = require('express');
const app = express();

app.use(express.json());

// Sample order already added
let orders = [
  {
    id: 1776693142218,
    name: "Vishakha",
    phone: "1234567890",
    garment: "Shirt",
    quantity: 2,
    price: 50,
    total: 100,
    status: "RECEIVED"
  }
];
let nextId = 1776693142219;

// GET / - Test server
app.get('/', (req, res) => {
    res.send("Server is working");
});

// GET /orders - Get all orders
app.get('/orders', (req, res) => {
    res.json(orders);
});

// POST /order - Create new order
app.post('/order', (req, res) => {
    const { name, phone, garment, quantity, price } = req.body;
    
    // Auto-calculate total
    const total = quantity * price;
    
    const newOrder = {
        id: nextId++,
        name: name,
        phone: phone,
        garment: garment,
        quantity: quantity,
        price: price,
        total: total,
        status: "RECEIVED"
    };
    
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

// PUT /order/:id - Update order status
app.put('/order/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const order = orders.find(o => o.id === id);
    
    if (!order) {
        return res.status(404).json({ error: "Order not found" });
    }
    
    // Update status
    order.status = req.body.status || order.status;
    
    res.json({ message: "Order updated successfully", order: order });
});

// GET /dashboard - Get summary
app.get('/dashboard', (req, res) => {
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    res.json({ totalOrders: totalOrders, totalRevenue: totalRevenue });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
