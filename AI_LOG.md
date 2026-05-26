# AI Usage Log

## Entry 1

Tool Used:
ChatGPT

What I Asked:
How to structure a beginner-friendly full-stack URL shortener project.

What I Got:
Suggested using React, Express, and SQLite with separate frontend and backend folders.

What I Did:
Used the overall structure but kept the project smaller and simpler for the assignment time limit.

---

## Entry 2

Tool Used:
ChatGPT

What I Asked:
How to validate URLs in Node.js.

What I Got:
Used JavaScript URL constructor for validation.

What I Did:
Added custom error handling for empty input and invalid URLs.

---

## Entry 3

Tool Used:
ChatGPT

What I Asked:
How to generate short unique codes.

What I Got:
Initially used nanoid package.

What I Did:
Later replaced it with crypto.randomBytes() because of compatibility issues with my Node.js version.

---

## Entry 4

Tool Used:
ChatGPT

What I Asked:
How to implement redirects using Express routes.

What I Got:
Used dynamic route parameters and res.redirect().

What I Did:
Added database lookup and proper 404 handling when short code does not exist.

---

## Entry 5

Tool Used:
ChatGPT

What I Asked:
How to store recent shortened URLs in frontend.

What I Got:
Suggested localStorage implementation.

What I Did:
Stored only the latest 5 URLs to keep the UI clean.

---

## Entry 6

Tool Used:
ChatGPT

What I Asked:
How to improve README structure and setup instructions.

What I Got:
Suggested adding setup steps, edge cases, and future improvements.

What I Did:
Simplified the wording and kept the README more practical and beginner-friendly.
