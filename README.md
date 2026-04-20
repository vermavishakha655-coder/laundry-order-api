# laundry-order-api
A simple Node.js Express API for managing laundry orders with order creation, status updates, and dashboard features.


Laundry Order API

📌 Project Description

This is a simple backend API built using Node.js and Express for managing laundry orders.
It allows users to create orders, view all orders, update order status, and check dashboard summary.

---

🚀 Features

- Create a new laundry order
- View all orders
- Update order status (RECEIVED, PROCESSING, DELIVERED)
- Dashboard showing total orders and total revenue

---

🛠️ Technologies Used

- Node.js
- Express.js

---

📂 API Endpoints

1. Test Server

GET /
Returns: Server is working

---

2. Create Order

POST /order

Body:
{
"name": "Vishakha",
"phone": "1234567890",
"garment": "Shirt",
"quantity": 2,
"price": 50
}

---

3. Get All Orders

GET /orders

---

4. Update Order Status

PUT /order/:id

Body:
{
"status": "DELIVERED"
}

---

5. Dashboard

GET /dashboard

Returns total orders and total revenue

---

▶️ How to Run the Project

1. Install dependencies:
   npm install

2. Start server:
   node index.js

3. Open in browser:
   http://localhost:3000/orders

---

🤖 AI Usage

I used AI tools to help build and debug this project.

Prompts used:

- Create a Node.js Express API for order management
- Fix 404 error in POST route
- Explain GET vs POST methods

AI helped in understanding API structure and debugging issues.
