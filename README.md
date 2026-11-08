# Backend Development Lab Reports

Repository containing backend lab assignments and implementations using Node.js, Express.js, and SQLite.

## Project Structure

```text
├── README.md
├── .gitignore
│
├── lab-01/
│   ├── README.md
│   ├── package.json
│   ├── package-lock.json
│   ├── app.js
│   ├── server-http.js
│   └── screenshots/
│
├── lab-02/
│   ├── README.md
│   ├── package.json
│   ├── package-lock.json
│   ├── app.js
│   ├── setup-db.js
│   ├── books.db
│   └── screenshots/
│
└── lab-03/
    ├── README.md
    ├── package.json
    ├── package-lock.json
    ├── app.js
    ├── database/
    │   └── books.db
    └── screenshots/
```

---

- **Student Name:** T.Neeraj Kumar Reddy
- **Registration Number:** 252U1R8096
- **Section:** CSE-QE-2B

## Labs Overview

### [Lab 01: Node.js & Express Server](./lab-01)
- **Live Deployment:** https://backend-lab-report-1.onrender.com
- **Objective:** Build a plain HTTP server using Node.js's built-in `http` module and an Express.js server handling multiple routes with proper HTTP status codes.
- **Key Files:**
  - `server-http.js`: Core Node.js HTTP server running on port 3000.
  - `app.js`: Express.js server with routes (`/`, `/about`, `/time`, 404 handler).
- **Run Instructions:**
  ```bash
  cd lab-01
  npm install
  node server-http.js   # Run native Node.js HTTP server
  node app.js           # Run Express.js server
  ```

### [Lab 02: SQLite Database & CRUD Operations](./lab-02)
- **Objective:** Connect an Express server to a persistent SQLite database (`books.db`) and expose full CRUD endpoints.
- **Key Files:**
  - `setup-db.js`: Database initialization script to create the `book` table and seed 10 sample records.
  - `books.db`: SQLite database file storing the `book` records.
  - `app.js`: Express application exposing CRUD REST endpoints (`GET /books/`, `GET /books/:bookId/`, `POST /books/`, `PUT /books/:bookId/`, `DELETE /books/:bookId/`).
- **Run Instructions:**
  ```bash
  cd lab-02
  npm install
  node setup-db.js      # (Optional) Verify or initialize SQLite database
  npm run dev           # Start Express server with nodemon
  ```

### [Lab 03: REST API, Query Parameters & Validation](./lab-03)
- **Objective:** Extend the SQLite books API with search, sorting, pagination, price filtering, validation, and correct HTTP status codes.
- **Key Files:**
  - `app.js`: Express REST API with CRUD routes and query parameters.
  - `database/books.db`: SQLite database containing the sample books.
  - `README.md`: Setup instructions, endpoint documentation, and screenshots.
- **Run Instructions:**
  ```bash
  cd lab-03
  npm install
  npm run dev
  ```
