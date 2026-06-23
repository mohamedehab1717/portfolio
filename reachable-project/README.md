# ♿ Reachable — Accessibility Platform

> Full Stack Web Application

A full-stack web platform designed to help people with disabilities discover accessible places and services in Egypt. Features 8 category sections, an authentication system, job filtering by disability type, and a custom Laravel backend.

---

## ✨ Key Features

- **8 Category Sections** — Comprehensive directory of accessible places and services
- **Authentication System** — Secure user registration and login
- **Job Filtering** — Filter job listings by disability type
- **Responsive Design** — Optimized for all devices
- **Admin Panel** — Content management for places and services

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend | PHP, Laravel |
| Database | MySQL |
| Templating | Blade |

---

## 📂 Project Structure

```
reachable/
├── app/
│   ├── Http/Controllers/
│   ├── Models/
│   └── Middleware/
├── resources/
│   └── views/ (Blade templates)
├── routes/
│   └── web.php
├── database/
│   └── migrations/
└── public/
    ├── css/
    └── js/
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone <repo-url>
cd reachable

# Install dependencies
composer install
npm install

# Setup environment
cp .env.example .env
php artisan key:generate

# Run migrations
php artisan migrate

# Start the server
php artisan serve
```

---

## 📩 Contact

- **Email:** mohmedehab17711@gmail.com
- **GitHub:** [@mohamedehab1717](https://github.com/mohamedehab1717)

---

*Developed by Mohamed Ehab*
