# Mini URL Shortener

This is a small full-stack URL shortener application built for the WedigTech Full Stack Developer assignment.

The app allows users to paste a long URL and generate a short URL which redirects back to the original link.

---

## Tech Stack

Frontend:
- React + Vite

Backend:
- Node.js + Express

Database:
- SQLite

### Why I chose this stack

I wanted to use a stack that is simple, fast to build with, and easy to run locally without extra setup. SQLite also made it easier to keep the project lightweight while still storing data persistently.

---

## Features

- Shorten long URLs
- Redirect short URLs to original URLs
- URL validation
- Empty input handling
- Invalid short code handling
- Persistent storage using SQLite
- Last 5 shortened URLs stored in browser local storage

---

## Folder Structure

mini-url-shortener/

- client → React frontend
- server → Express backend + SQLite database

---

## How to Run the Project

### 1. Clone the repository

```bash
git clone <your-github-repo-link>
```

---

### 2. Install frontend dependencies

```bash
cd client
npm install
```

---

### 3. Install backend dependencies

Open another terminal:

```bash
cd server
npm install
```

---

### 4. Start backend server

```bash
npm run dev
```

Backend runs on:
```txt
http://localhost:5000
```

---

### 5. Start frontend

```bash
cd client
npm run dev
```

Frontend runs on:
```txt
http://localhost:5173
```

---

## API Endpoints

### Create Short URL

POST `/shorten`

Request body:

```json
{
  "url": "https://google.com"
}
```

---

### Redirect URL

GET `/:code`

Example:

```txt
http://localhost:5000/abc123
```

---

## Edge Cases Handled

- Empty URL input
- Invalid URL format
- Invalid short code
- Database connection errors

---

## What I Would Improve With More Time

If I had more time, I would probably add:

- Click analytics
- Custom short URLs
- Copy-to-clipboard button
- Better mobile responsiveness
- Deployment using Render/Vercel

---

## Notes

I tried to keep the project simple and focused mainly on functionality, clean structure, and handling the basic edge cases properly instead of adding too many extra features.