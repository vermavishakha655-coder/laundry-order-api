const express = require("express");
const app = express();

app.use(express.json());

let orders = [];

// Test route
app.get("/", (req, res) => {
  res.send("Server is working");
});

// Create order
app.post("/order", (req, res) => {
  const { name, phone, garment, quantity, price } = req.body;

  const total = quantity * price;

  const newOrder = {
    id: Date.now(),
    name,
    phone,
    garment,
    quantity,
    price,
    total,
    status: "RECEIVED"
  };

  orders.push(newOrder);

  res.json(newOrder);
});

// Get all orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

// Update order
app.put("/order/:id", (req, res) => {
  const { status } = req.body;

  const order = orders.find(o => o.id == req.params.id);

  if (!order) {
    return res.status(404).send("Order not found");
  }

  order.status = status;
  res.json(order);
});

// Dashboard
app.get("/dashboard", (req, res) => {
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);

  res.json({ totalOrders, totalRevenue });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});const express = require("express");
const app = express();

app.use(express.json());

let orders = [];

// Test route
app.get("/", (req, res) => {
  res.send("Server is working");
});

// Create order
app.post("/order", (req, res) => {
  const { name, phone, garment, quantity, price } = req.body;

  const total = quantity * price;

  const newOrder = {
    id: Date.now(),
    name,
    phone,
    garment,
    quantity,
    price,
    total,
    status: "RECEIVED"
  };

  orders.push(newOrder);

  res.json(newOrder);
});

// Get all orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

// Update order
app.put("/order/:id", (req, res) => {
  const { status } = req.body;

  const order = orders.find(o => o.id == req.params.id);

  if (!order) {
    return res.status(404).send("Order not found");
  }

  order.status = status;
  res.json(order);
});

// Dashboard
app.get("/dashboard", (req, res) => {
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);

  res.json({ totalOrders, totalRevenue });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
