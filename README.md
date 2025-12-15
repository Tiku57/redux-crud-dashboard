# 📊 Redux CRUD Dashboard

A simple and scalable **React + Redux Toolkit CRUD application** that fetches users from a mock API and allows adding, editing, and deleting users locally.

---

## ⚙️ Steps to Run the Project Locally

Follow these steps to set up the project on your local machine.

---

## ✅ Prerequisites

Make sure you have **Node.js** and **npm** installed.

Check versions:

```bash
node -v
npm -v
```

---

## 📥 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Tiku57/redux-crud-dashboard.git
cd redux-crud-dashboard
```

### 2. Install Dependencies

Installs all required packages (React, Redux Toolkit, Axios, etc.):

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

The app will automatically open at:

```
http://localhost:3000
```

---

## 📂 Project Structure

The project follows a **feature-based folder structure** for better scalability and maintenance.

```
src/
├── app/
│   └── store.js           # Redux store configuration
├── components/
│   ├── Dashboard.js       # Main view with table + header
│   └── UserForm.js        # Reusable form for Add/Edit
├── features/
│   └── users/
│       └── userSlice.js   # Redux slice (reducers, thunks)
├── App.css                # Global styles and theming
├── App.js                 # Root component
└── index.js               # Entry point
```

---

## 📝 Usage Guide

### 🔄 Loading Data
- On startup, the app fetches **10 mock users** from the JSONPlaceholder API.

### ➕ Adding a User
- Click **"+ Add User"** (blue button).  
- A form appears; submit to add the user.  
- New users are assigned the **next sequential ID** (e.g., 11).

### ✏️ Editing a User
- Click the **"Edit"** button (orange) in any row.  
- Update the name or email, then save.

### 🗑️ Deleting a User
- Click the **"Delete"** button (red) to remove the user.

### ⚠️ Notes
- All changes are **simulated locally** using Redux.  
- Since JSONPlaceholder is a **mock API**, the data **resets on refresh**.

---

## 👤 Author

**Aaditya Sattawan**

GitHub: https://github.com/Tiku57
