
# 🛍️ Wearzy - Modern Clothing Ecommerce Platform

**Wearzy** is a modern, full-stack clothing ecommerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It includes robust admin functionality to manage best sellers and order statuses, along with a stylish, responsive frontend and secure backend.

---

## 📦 Tech Stack

### ✅ Frontend
- **React** – Latest features and hooks
- **Vite** – Lightning-fast build tool
- **Tailwind CSS** – Utility-first styling
- **Redux Toolkit** – State management
- **React Router DOM** – Client-side routing
- **React Hot Toast** – Elegant notifications
- **React Icons** – Icon support
- **DaisyUI** – Tailwind-based UI component library

### ✅ Backend
- **Express** – Web server framework
- **MongoDB + Mongoose** – NoSQL database and ODM
- **JWT** – Secure authentication
- **BcryptJS** – Password hashing
- **Cookie-Parser** – Cookie handling
- **CORS** – Cross-origin request support
- **Dotenv** – Environment variable management

---

## 🚀 Features

- User Registration & Login (JWT Auth)
- Admin Panel with Best Seller management
- Order placement and tracking
- Product display with dynamic best seller highlights
- Real-time toast notifications
- Mobile-first responsive design

---

## 🛠️ Installation & Setup

### 📁 Clone the Repository
```bash
git clone https://github.com/stha-prasun/Wearzy.git
cd Wearzy
```

### 📦 Backend Setup

```bash
cd backend
npm install
# Create a `.env` file and configure the following:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret
# PORT=8080
npm run dev
```

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and connects to the backend on `http://localhost:8080`.

---

## 📚 Project Structure

```
Wearzy/
│
├── Backend/                        # Backend source code (Express + MongoDB)
│   ├── config/                     # DB connection and configuration files
│   ├── controllers/               # Request handlers and logic
│   ├── models/                    # Mongoose data models
│   ├── routes/                    # Express API routes
│   ├── node_modules/
│   ├── .env                       # Environment variables
│   ├── .gitignore
│   ├── index.js                   # Main server file
│   ├── package.json
│   └── package-lock.json
│
├── Frontend/                      # Frontend source code (React + Vite)
│   ├── public/                    # Static assets
│   ├── src/                       # Source code for React app
│   ├── node_modules/
│   ├── index.html
│   ├── vite.config.js            # Vite configuration
│   ├── eslint.config.js          # ESLint configuration
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
└── README.md                     # Root README for the full project
```

---

## 📦 Full Dependency List

### 🔧 Backend Dependencies

| Package         | Version   | Description                          |
|----------------|-----------|--------------------------------------|
| bcryptjs        | ^3.0.2    | Password hashing                     |
| cookie-parser   | ^1.4.7    | Parse cookies in Express             |
| cors            | ^2.8.5    | Enable CORS                          |
| dotenv          | ^16.5.0   | Load environment variables           |
| express         | ^5.1.0    | Web framework                        |
| jsonwebtoken    | ^9.0.2    | Authentication with JWT              |
| mongoose        | ^8.15.1   | MongoDB object modeling              |
| nodemon         | ^3.1.10   | Auto-restart dev server              |

### 🎨 Frontend Dependencies

| Package              | Version   | Description                            |
|----------------------|-----------|----------------------------------------|
| react                | ^19.1.0   | UI library                             |
| react-dom            | ^19.1.0   | React DOM rendering                    |
| react-router-dom     | ^7.6.2    | Client-side routing                    |
| axios                | ^1.9.0    | HTTP client                            |
| react-hot-toast      | ^2.5.2    | Toast notifications                    |
| react-icons          | ^5.5.0    | Popular icon packs                     |
| react-redux          | ^9.2.0    | State management bindings              |
| @reduxjs/toolkit     | ^2.8.2    | Simplified Redux logic                 |
| tailwindcss          | ^4.1.8    | CSS utility framework                  |
| @tailwindcss/vite    | ^4.1.8    | Tailwind plugin for Vite               |

---

## 📬 Contact

For questions or feedback, please reach out via [GitHub](https://github.com/stha-prasun).
