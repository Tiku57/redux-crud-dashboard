# React Redux CRUD Dashboard

A clean, responsive dashboard application built with **React** and **Redux Toolkit**. This application fetches user data from a public API and implements full CRUD (Create, Read, Update, Delete) operations with local state management.

## 🚀 Features

* **Fetch Data:** Retrieves initial user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/).
* **Create User:** Adds a new user to the **bottom** of the list with an auto-incremented ID (e.g., 11, 12).
* **Read Data:** Displays users in a responsive, professionally styled table.
* **Update User:** Edit existing user details (Name and Email) with real-time state updates.
* **Delete User:** Remove a user from the list with a confirmation prompt.
* **State Management:** Uses Redux Toolkit for efficient global state handling.
* **Responsive Design:** Optimized for both desktop and mobile screens.

## 🛠️ Tech Stack

* **Frontend Library:** React.js
* **State Management:** Redux Toolkit & React-Redux
* **HTTP Client:** Axios
* **Styling:** Custom CSS (Modern UI)

---

## ⚙️ Steps to Run the Project Locally

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have **Node.js** installed on your computer. You can check by running:
```bash
node -v
npm -v
Installation
Clone the repository:

Bash

git clone [https://github.com/Tiku57/redux-crud-dashboard.git](https://github.com/Tiku57/redux-crud-dashboard.git)
cd redux-crud-dashboard
Install dependencies: This installs the necessary packages (react, redux-toolkit, axios, etc.) listed in package.json.

Bash

npm install
Start the development server:

Bash

npm start
Open in Browser: The application will automatically open at http://localhost:3000.

📂 Project Structure
The project follows a feature-based folder structure for better scalability.

src/
├── app/
│   └── store.js           # Redux store configuration
├── components/
│   ├── Dashboard.js       # Main view with Table and Header
│   └── UserForm.js        # Reusable form for Adding/Editing users
├── features/
│   └── users/
│       └── userSlice.js   # Redux slice (Actions, Reducers, AsyncThunks)
├── App.css                # Global styles and theming
├── App.js                 # Root component
└── index.js               # Entry point
📝 Usage Guide
Loading: Upon opening, the app fetches 10 mock users from the API.

Adding a User: Click the "+ Add User" button (Blue). A form will appear. When you save, the new user appears at the bottom of the table with the next sequential ID (e.g., 11).

Editing: Click the "Edit" button (Orange) on any row to modify the user's name or email.

Deleting: Click the "Delete" button (Red) to remove a user from the view.

Note: Since this project uses a mock API (JSONPlaceholder), changes (adds/edits/deletes) are simulated locally in the Redux store. Refreshing the page will reset the data to the original 10 users fetched from the API.

👤 Author
Tiku57

GitHub: https://github.com/Tiku57
