# 🧠 Sakina — Mental Health Support Platform

> 🎓 **Graduation Project** | Full Stack Web Application

An AI-powered mental wellness companion designed to provide emotional support, mood tracking, guided exercises, and therapeutic interventions.

## 👨‍💻 My Role

I was responsible for building the **entire application** from the ground up — frontend UI/UX, backend APIs, database design, authentication system, and all application logic. The only part I did not work on was the **AI/ML module**, which was handled by a teammate.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 💬 **AI Chat Companion** | Empathetic chatbot with voice input, emotional analysis, and context-aware conversations |
| 📊 **Mood Tracker** | Interactive mood logging with visual analytics and emotional shift detection |
| 📓 **Smart Journal** | Personal journaling system with timestamps and mood correlation |
| 🧘 **Guided Exercises** | Breathing exercises, grounding techniques, and mindfulness activities |
| 🎵 **Music Therapy** | Curated calming audio sessions with built-in player (Howler.js) |
| ⚠️ **Risk Assessment** | Survey-based mental health evaluations with scoring and intervention recommendations |
| 🛡️ **Crisis Support** | Emergency grounding toolkit with instant access to calming resources |
| 📈 **Recovery Journey** | Personalized progress tracking with milestones and insights dashboard |
| 👤 **Admin Dashboard** | Full content and user management panel |

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Zustand (State Management)
- Framer Motion (Animations)
- Recharts (Data Visualization)
- Howler.js (Audio)
- Lucide React (Icons)

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt (Password Hashing)
- Multer (File Uploads)
- Nodemailer (Email)
- Helmet + Rate Limiting (Security)

### AI Module *(handled by teammate)*
- Python (FastAPI)
- Emotion Detection
- Speech-to-Text
- Chatbot Engine

---

## 📂 Project Structure

```
sakina/
├── frontend/
│   └── src/
│       ├── components/ (31 components)
│       ├── context/
│       ├── store/
│       └── services/
├── backend/
│   ├── models/ (10 schemas)
│   ├── routes/ (10 route files)
│   ├── middleware/
│   ├── services/
│   └── server.js
└── ai-main/ (Python — teammate)
```

---

## 🗄️ Database Schemas

- **User** — Name, Email, Password (bcrypt), Profile, Preferences
- **Mood** — Emotion type, Intensity, Notes, Timestamps
- **JournalEntry** — Content, Tags, Mood correlation
- **Conversation & Message** — Chat history, AI responses, Emotional context
- **Exercise** — Type, Steps, Duration, Category
- **Survey** — Questions, Scores, Risk levels
- **InterventionSession** — Therapy type, Progress, Outcomes
- **Event** — Calendar events, Reminders
- **UserInsight** — Patterns, Emotional trends, AI-generated insights

---

## 🚀 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/mohamedehab1717/sakina.git
   cd sakina
   ```

2. **Backend:**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. **Frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

---

## 📩 Contact

- **Email:** mohmedehab17711@gmail.com
- **LinkedIn:** [Mohamed Ehab](https://www.linkedin.com/in/mohamed-ehab-35073a1b0)
- **GitHub:** [@mohamedehab1717](https://github.com/mohamedehab1717)

---

*Developed by Mohamed Ehab — Graduation Project 2026*
