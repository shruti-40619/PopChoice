# 🎬 PopChoice — AI Movie Recommendation App

PopChoice is a full-stack web application that recommends movies based on a user’s current mood using AI-powered genre analysis and real-time movie data.

The goal of this project is to explore AI integration, API-driven recommendations, and a clean full-stack development workflow, with added focus on backend containerization using Docker.

---

## ✨ Features

- 🎭 Mood-based movie recommendations  
- 🤖 AI-powered genre suggestion using Google Gemini  
- 🎥 Real-time movie data via TMDB API  
- ⚡ Fast backend with Express.js  
- 🎨 Clean, responsive frontend UI  
- 🔄 Dynamic loading & error handling  

---

## 🛠 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- Axios

### APIs
- Google Gemini API (AI genre recommendation)
- TMDB API (movie data)

---
### 🐳 Dockerized Backend (DevOps Addition)

The backend of this application has been containerized using Docker to ensure consistent runtime behavior across environments and simplify deployment.

This setup packages the backend code and dependencies into a container, making the application easier to run and deploy without environment-specific issues.

### Run Backend Using Docker

**Build the Docker image**

docker build -t popchoice-backend .

**Run the Docker container**

docker run -p 3001:3001 popchoice-backend

---

## 🚀 How to Run Locally(Without Docker)

### 1️⃣ Clone the repository

git clone https://github.com/shruti-40619/PopChoice.git
cd PopChoice

### 2️⃣ Backend Setup
cd backend
npm install
npm run dev


Create a .env file inside backend/:

TMDB_API_KEY=your_tmdb_api_key
GEMINI_API_KEY=your_gemini_api_key


Backend runs on:

http://localhost:3001

### 3️⃣ Frontend Setup

Open frontend/index.html using Live Server (recommended).

📸 Screenshots

<img width="949" height="434" alt="image" src="https://github.com/user-attachments/assets/3cd52e8a-42ed-4317-889b-b3b2c9b6d8df" />

<img width="942" height="427" alt="image" src="https://github.com/user-attachments/assets/1b52c015-4207-48db-ac0b-4f10bc7f8047" />



### 🧠 Project Motivation

This project was built to:

Understand AI-assisted recommendations

Learn real-world API integration

Explore backend deployment concepts using Docker

Practice full-stack development workflow

Handle asynchronous data and error states

### 🔮 Future Improvements

User authentication

Genre confidence scoring

Recommendation history

Deployment (Render / Vercel)

Better AI prompt tuning

👤 Author

Shruti 
