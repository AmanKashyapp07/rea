# React + Express + Node.js Boilerplate

A modern, lightweight React + Express + Node.js boilerplate pre-configured for concurrent development and clean deployment.

## Features

- **Frontend**: React + Vite + CSS (Modern Dark UI)
- **Backend**: Express + Node.js with environment configuration (`dotenv`) and auto-reloading (`nodemon`)
- **Developer Experience**: Run both client and server concurrently with a single command (`npm run dev`)
- **Proxy Configuration**: Pre-configured Vite proxy redirects frontend `/api` requests to the backend server to avoid CORS issues.

## Project Structure

```
react-express-app/
├── .gitignore
├── README.md
├── package.json (root package.json to run client & server concurrently)
├── backend/
│   ├── .env
│   ├── index.js (Express server)
│   └── package.json
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── App.css
        ├── App.jsx
        └── main.jsx
```

## Setup & Running

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### 1. Clone the Project
```bash
git clone <your-repo-url>
cd react-express-app
```

### 2. Install Dependencies
Install all root, backend, and frontend dependencies in one go:
```bash
npm run install:all
```

### 3. Start Development Servers
Start both the React development server and the Express backend server concurrently:
```bash
npm run dev
```

- **Frontend**: Runs at `http://localhost:5173`
- **Backend API**: Runs at `http://localhost:5000`

### 4. Build for Production
To build the React application for production deployment:
```bash
npm run build --prefix frontend
```
The built static files will be located in `frontend/dist/`.
