# 📦 E-Commerce Full Stack Project

> Full Stack Web Application

A full-stack e-commerce platform with user authentication, product management, and order processing. Features REST APIs, an integrated MySQL database, and an admin dashboard for managing products.

---

## ✨ Key Features

- **Product Catalog** — Browse products with images, descriptions, and pricing
- **User Authentication** — Secure registration and login with JWT
- **Shopping Cart** — Add/remove items with real-time price calculation
- **Checkout Flow** — Complete order placement with delivery details
- **Admin Dashboard** — Full product CRUD management for administrators
- **Order Processing** — Track and manage customer orders
- **Responsive Design** — Optimized for all screen sizes

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend | Node.js, Express |
| Database | MySQL |
| Auth | JWT |

---

## 📂 Project Structure

```
e-commerce/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── frontend/
    ├── css/
    ├── js/
    └── index.html
```

---

## 🗄️ Database Tables

- **Users** — Name, Email, Password, Role (Admin/Customer)
- **Products** — Name, Description, Price, Image, Category, Stock
- **Orders** — User ID, Items, Total Price, Status, Date
- **Cart** — User ID, Product ID, Quantity

---

## 🚀 Getting Started

```bash
git clone https://github.com/mohamedehab1717/e-commerce-project.git
cd e-commerce-project

# Install dependencies
npm install

# Setup MySQL database and update .env

# Start the server
npm run dev
```

---

## 📩 Contact

- **Email:** mohmedehab17711@gmail.com
- **GitHub:** [@mohamedehab1717](https://github.com/mohamedehab1717)

---

*Developed by Mohamed Ehab*
