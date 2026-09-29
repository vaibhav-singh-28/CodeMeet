# CodeMeet

CodeMeet is a full-stack remote technical interview platform that enables interviewers and candidates to conduct coding interviews in a collaborative online environment.

It combines real-time video communication, collaborative code editing, coding problem evaluation, chat, authentication, and interview session management into a single platform.

##  Features

- 🔐 Secure authentication with Clerk
- 🎥 1-on-1 video interview rooms
- 💻 VSCode-powered code editor
- 🧩 Coding problems and practice mode
- ⚙️ Secure code execution with test-case evaluation
- 🎯 Automatic success/failure feedback
- 🔊 Microphone and camera controls
- 🖥️ Screen sharing and recording
- 💬 Real-time session chat
- 🔒 Interview room locking with a maximum of 2 participants
- 🧭 Dashboard with interview and platform statistics
- 🔔 Notifications for interview events and code execution results
- 🎉 Confetti feedback on successful submissions
- 🧠 Background jobs with Inngest
- ⚡ Server-state management and caching with TanStack Query
- 🤖 Automated PR analysis with CodeRabbit
- 🚀 Production deployment

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- Tailwind CSS
- TanStack Query
- VSCode-powered code editor

### Backend
- Node.js
- Express.js
- REST API
- MongoDB
- Mongoose

### Authentication
- Clerk

### Real-Time Communication
- Video calling
- Screen sharing
- Real-time chat

### Background Jobs
- Inngest

### Development & Deployment
- Git
- GitHub
- CodeRabbit
- VS Code
- Sevalla

## 🏗️ Core Modules

### 👤 Authentication
Users can securely sign up and log in using Clerk-based authentication.

### 🎥 Interview Rooms
Interviewers and candidates can join private 1-on-1 rooms for conducting technical interviews.

### 💻 Live Coding
Participants can work with a collaborative code editor during an interview and execute code against predefined test cases.

### 🧩 Practice Mode
Users can solve coding problems independently without joining an interview session.

### 💬 Session Chat
Participants can communicate through real-time messaging during an interview.

### 📊 Dashboard
The dashboard provides an overview of interview activity, coding sessions, and other relevant statistics.

### ⚙️ Background Processing
Inngest is used to handle asynchronous and background tasks without blocking the main application flow.

## 🔄 Application Flow

```text
User
 │
 ▼
Authentication
 │
 ▼
Dashboard
 │
 ├── Practice Problems
 │
 └── Interview Room
       │
       ├── Video Call
       ├── Screen Sharing
       ├── Session Chat
       └── Code Editor
              │
              ▼
        Code Execution
              │
              ▼
        Test Case Evaluation
              │
       ┌──────┴──────┐
       ▼             ▼
    Success         Failure
       │             │
    Confetti      Notification