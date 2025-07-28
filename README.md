# Uber Clone - Full-Stack Web Application

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white" alt="Socket.io">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
</p>

This is a full-stack clone of the Uber ride-hailing service, built as a web application. It features separate functionalities for riders and drivers ("captains"), with real-time communication handled by WebSockets. The project is structured as a monorepo with a React frontend and a Node.js/Express backend.

## Key Features

* **Dual User Roles**: Separate registration and login flows for Riders and Captains.
* **Real-Time Ride Requests**: Riders can request a ride, and available captains receive the request in real-time.
* **Ride Lifecycle Management**: Captains can accept ride requests, start the trip, and mark it as complete.
* **Live Location Updates**: (Functionality for live tracking can be built upon the existing WebSocket foundation).
* **Secure Authentication**: Backend routes are protected to ensure users can only access their own data and functionalities.
* **Modern Frontend**: A responsive and fast user interface built with React, Vite, and Tailwind CSS.

## Tech Stack

* **Frontend**:
    * [React.js](https://reactjs.org/): A JavaScript library for building user interfaces.
    * [Vite](https://vitejs.dev/): A next-generation frontend tooling for fast development.
    * [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
    * [React Router](https://reactrouter.com/): For client-side routing.
    * [Axios](https://axios-http.com/): For making HTTP requests to the backend.

* **Backend**:
    * [Node.js](https://nodejs.org/): A JavaScript runtime environment.
    * [Express.js](https://expressjs.com/): A web application framework for Node.js.
    * [MongoDB](https://www.mongodb.com/) (assumed): A NoSQL database for storing user and ride data.
    * [Mongoose](https://mongoosejs.com/) (assumed): An Object Data Modeling (ODM) library.
    * [Socket.io](https://socket.io/): For enabling real-time, bidirectional communication between clients and servers.

## Folder Structure

The repository is a monorepo containing two main folders: `frontend` for the client-side application and `backend` for the server-side logic.
```text
.
├── backend/
│   ├── controllers/       # Logic for handling API requests
│   ├── db/                # Database connection configuration
│   ├── middleware/        # Authentication and other middleware
│   ├── models/            # Mongoose schemas for users, rides, etc.
│   ├── routes/            # API endpoint definitions
│   ├── services/          # Business logic services
│   ├── server.js          # Main server entry point
│   ├── socket.js          # WebSocket connection and event handling
│   └── package.json
│
└── frontend/
├── src/
│   ├── assets/
│   ├── components/    # Reusable React components
│   ├── context/       # React Context for state management
│   ├── pages/         # Application pages (Login, Signup, Home)
│   ├── App.jsx        # Main application component with routing
│   └── main.jsx       # Entry point for the React application
├── package.json
└── vite.config.js
```
## Getting Started

To get a local copy up and running, follow these steps to set up both the backend and frontend services.

### Prerequisites

* [Node.js](https://nodejs.org/en/download/) installed on your machine.
* [MongoDB](https://www.mongodb.com/try/download/community) installed and running, or a MongoDB Atlas account.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/AwantikaTiwari13/uber.git](https://github.com/AwantikaTiwari13/uber.git)
    cd uber
    ```

2.  **Set up the Backend:**
    (In your terminal, navigate to the `backend` folder)
    ```sh
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory. You will need to add your database connection string and any other required environment variables (e.g., JWT secret).
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    PORT=8000
    ```
    Start the backend server:
    ```sh
    npm start
    ```

3.  **Set up the Frontend:**
    Open a **new terminal** and navigate to the `frontend` folder from the project's root directory.
    ```sh
    cd frontend
    npm install
    ```
    Start the frontend development server:
    ```sh
    npm run dev
    ```

4.  **Open the application:**
    The frontend will now be running, typically on `http://localhost:5173`. The backend server will be running on the port you specified (e.g., `8000`).

## 👤 About Me

This project was developed by Awantika Tiwari. Connect with me:

* **GitHub**: [AwantikaTiwari13](https://github.com/AwantikaTiwari13)
* **LinkedIn**: [Awantika Tiwari](https://www.linkedin.com/in/awantika-tiwari-aa6b97263/)

