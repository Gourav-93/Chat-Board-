# 🤖 Gemini AI Chat Board

A simple and modern **AI Chat Board** built using **ASP.NET Core Web API** and **Google Gemini API**.

This project allows users to send messages to an AI chatbot and receive intelligent responses from Gemini. The application focuses on a simple chat experience without requiring a database.

---

## 📌 Project Overview

The **Gemini AI Chat Board** is a lightweight chatbot application similar to basic AI chat applications.

The user enters a message from the frontend, the request is sent to the ASP.NET Core backend, and the backend communicates with the **Google Gemini API**.

### 🔄 Application Flow

```text
User
  ↓
Frontend Chat Board
  ↓
ASP.NET Core Web API
  ↓
Chat Controller
  ↓
Gemini Service
  ↓
Google Gemini API
  ↓
AI Response
  ↓
Frontend
```

---

## ✨ Features

* 🤖 AI-powered chatbot using Gemini API
* 💬 Real-time style chat interface
* 🔄 Send user messages to Gemini
* 🧠 Generate AI responses
* 🚫 No database required
* 🔐 API key stored in configuration
* 🌐 REST API based backend
* ⚡ ASP.NET Core Web API
* 🧩 Service-based architecture
* 🐛 AI-powered code bug detection
* 💻 Developer-friendly chatbot functionality

---

## 🛠️ Technologies Used

### Backend

* C#
* ASP.NET Core Web API
* .NET
* REST API
* HTTP Client
* Dependency Injection
* Gemini API

### Frontend

* HTML
* CSS
* JavaScript

### AI

* Google Gemini API

### Development Tools

* Visual Studio Code
* Postman
* Git
* GitHub

---

## 📂 Project Structure

```text
GeminiChatBoard/
│
├── Backend/
│   │
│   ├── Controllers/
│   │   └── ChatController.cs
│   │
│   ├── Models/
│   │   └── ChatRequest.cs
│   │
│   ├── Services/
│   │   ├── IGeminiService.cs
│   │   └── GeminiService.cs
│   │
│   ├── Program.cs
│   ├── appsettings.json
│   └── Backend.csproj
│
├── Frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

> Project structure may differ slightly depending on the current implementation.

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project directory:

```bash
cd GeminiChatBoard
```

---

## 2. Open the Project

Open the project in **Visual Studio Code**:

```bash
code .
```

---

# 🔑 Gemini API Configuration

To use the chatbot, you need a **Google Gemini API key**.

Add your API key to the backend configuration.

Example:

```json
{
  "Gemini": {
    "ApiKey": "YOUR_GEMINI_API_KEY"
  }
}
```

### ⚠️ Important

Do **not** upload your real API key to GitHub.

Add sensitive configuration files to `.gitignore` or use environment variables / User Secrets for development.

---

# ▶️ Running the Backend

Navigate to the backend folder:

```bash
cd Backend
```

Restore dependencies:

```bash
dotnet restore
```

Run the application:

```bash
dotnet run
```

The API will start on the configured localhost port.

Example:

```text
http://localhost:5000
```

The actual port may be different depending on your `launchSettings.json`.

---

# 🌐 Running the Frontend

Open the frontend:

```text
Frontend/index.html
```

You can run it using the **Live Server** extension in VS Code.

Example:

```text
http://127.0.0.1:5500
```

Make sure the frontend API URL matches the backend URL.

---

# 🔌 API Endpoint

## Send Chat Message

### POST

```text
/api/chat
```

### Request

Example:

```json
{
  "message": "Explain dependency injection in C#"
}
```

### Response

Example:

```json
{
  "response": "Dependency Injection is a design pattern..."
}
```

---

# 🧠 AI Bug Detection Feature

One of the additional features of this project is **AI-based code bug detection**.

The user can provide code to the chatbot and ask it to identify possible problems.

Example:

```text
Find bugs in this C# code:

public int Add(int a, int b)
{
    return a - b;
}
```

The AI can analyze the code and explain the potential issue.

The goal is to make the chatbot more useful for developers rather than being only a normal question-and-answer chatbot.

---

# 💡 Example Questions

Users can ask questions such as:

```text
What is dependency injection in ASP.NET Core?
```

```text
Explain async and await in C#
```

```text
What is middleware?
```

```text
Find the bug in this code.
```

```text
Explain this Java code.
```

```text
Convert this Java code into C#.
```

```text
How does Entity Framework Core work?
```

---

# 🏗️ Backend Architecture

The backend follows a simple service-based architecture.

```text
Controller
    ↓
Service Interface
    ↓
Service Implementation
    ↓
Gemini API
```

### ChatController

Responsible for:

* Receiving HTTP requests
* Accepting user messages
* Calling the Gemini service
* Returning the AI response

### IGeminiService

Defines the operations that the Gemini service provides.

### GeminiService

Responsible for:

* Communicating with Gemini API
* Sending the user's prompt
* Processing the Gemini response
* Returning the generated response

---

# 🔄 Request Processing

When the user sends a message:

```text
1. User enters message
        ↓
2. Frontend sends POST request
        ↓
3. ChatController receives request
        ↓
4. Controller calls IGeminiService
        ↓
5. GeminiService calls Gemini API
        ↓
6. Gemini generates response
        ↓
7. Backend returns response
        ↓
8. Frontend displays response
```

---

# 🧪 Testing With Postman

You can test the backend independently using Postman.

### Method

```text
POST
```

### URL

```text
http://localhost:YOUR_PORT/api/chat
```

### Headers

```text
Content-Type: application/json
```

### Body

Select:

```text
raw → JSON
```

Then:

```json
{
  "message": "What is ASP.NET Core?"
}
```

---

# 🛡️ Security Considerations

The Gemini API key should never be exposed in frontend JavaScript.

### ❌ Do not do this:

```javascript
const apiKey = "YOUR_SECRET_API_KEY";
```

### ✅ Instead:

```text
Frontend
   ↓
Backend API
   ↓
Gemini API
```

The backend should handle communication with Gemini.

---

# 🚫 Database

This project intentionally does **not** use a database.

Chat messages are processed during the current application session and are not permanently stored.

This keeps the project lightweight and simple.

---

# 📈 Future Improvements

Possible future features include:

* 💾 Chat history
* 👤 User authentication
* 🔐 JWT authentication
* 🗂️ Multiple conversations
* 🧠 Different AI modes
* 📝 Markdown response support
* 💻 Advanced code analysis
* 🐛 Automatic bug detection
* 🔧 Code fixing suggestions
* 📋 Copy code button
* 🌙 Dark/Light mode
* 📱 Responsive mobile UI
* 🎤 Voice input
* 🔊 AI voice response
* 📎 File upload
* 🧑‍💻 Developer mode
* 📊 Token/usage information

---

# 🎯 Learning Objectives

This project helps demonstrate practical knowledge of:

* C# programming
* ASP.NET Core
* Web API development
* REST APIs
* Dependency Injection
* Interfaces
* Service Layer
* HTTP communication
* JSON
* API integration
* Gemini API integration
* Frontend and backend communication
* Exception handling
* Prompt engineering

---

# 🧑‍💻 Author

**Gourav Khore**

Aspiring Software Developer

### Technologies

```text
Java
C#
.NET
ASP.NET Core
Spring Boot
REST API
MySQL
Entity Framework Core
Git & GitHub
```

---

# 📜 License

This project is created for **learning, development, and educational purposes**.

---

## ⭐ Project Idea

The main idea behind this project is to create a simple AI chatbot and gradually extend it into a **developer-focused AI assistant** capable of explaining code, detecting bugs, suggesting fixes, and helping developers understand programming concepts.

---

## 🚀 Future Vision

```text
Simple Chatbot
      ↓
AI Chatbot
      ↓
Developer Assistant
      ↓
Code Analyzer
      ↓
Bug Detector
      ↓
AI Coding Assistant
```

---

**Made with ❤️ using C#, ASP.NET Core and Google Gemini API.**
