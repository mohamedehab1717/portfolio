# 🍽️ nmnm — Luxury Restaurant Platform

> 💼 **Freelance Project** | Full Stack Web Application

A sophisticated full-stack digital storefront, online ordering system, and table reservation platform custom-built for "nmnm" restaurant. Designed with a premium dark and orange-red theme.

---

## ✨ Key Features

- **Elegant Storefront & Booking** — Interactive landing page, testimonials, opening schedules, and table reservation form
- **Menu & Customization** — Multi-category menu with real-time search, filters, and custom item choice modals
- **Persistent Cart** — Keeps item selections and updates order details locally
- **Order Tracking** — Live status tracker (Pending → Preparing → Out for Delivery → Completed)
- **Staff & Admin Portals** — Secure interface for managing menu items (CRUD), reservations, and live order queues

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React (Vite), Vanilla CSS, Lucide Icons |
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |
| Auth | JWT, Bcrypt |

---

## 📂 Project Structure

```
nmnm-restaurant/
├── backend/
│   ├── models/ (User, Order, Booking, MenuItem)
│   ├── routes/ (auth, orders, bookings, menu)
│   ├── middleware/ (auth)
│   └── server.js
└── frontend/
    └── src/
        ├── components/
        ├── pages/
        └── context/
```

---

## 🗄️ Database Schemas

- **User** — Name, Email, Password, Role (Admin/Staff/Client)
- **MenuItem** — Name, Description, Price, Image, Category, Ingredients, Availability
- **Order** — Items, Total Price, Delivery Details, Status, Date
- **Booking** — Guest Name, Date, Time, Guests Count, Status

---

## 🚀 Getting Started

```bash
git clone https://github.com/mohamedehab1717/nmnm_rest.git
cd nmnm_rest
# Start backend
cd backend && npm install && npm run dev
# Start frontend
cd ../frontend && npm install && npm run dev
```

---

## 📩 Contact

- **Email:** mohmedehab17711@gmail.com
- **GitHub:** [@mohamedehab1717](https://github.com/mohamedehab1717)

---

*Developed by Mohamed Ehab — Freelance Project*
