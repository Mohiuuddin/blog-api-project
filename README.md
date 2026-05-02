📝 Full-Stack Blog Platform
A robust, three-tier blog application featuring a RESTful API, a dedicated Admin Dashboard, and a responsive Client frontend. This project emphasizes a decoupled architecture, separating content management and administrative control from the public reader's interface.

📸 Project Overview
<img width="1361" height="639" alt="blog-admin" src="https://github.com/user-attachments/assets/aef8016b-1073-4f98-9d5c-8990509178de" />

<img width="1364" height="635" alt="blog-client1" src="https://github.com/user-attachments/assets/7e750773-545b-495d-b352-85c19bf252bc" />

<img width="1366" height="641" alt="blog-client2" src="https://github.com/user-attachments/assets/b3ae68a3-fdbe-4136-95cc-ab29eadd352e" />

🚀 Key Features
1. Backend (Node.js & Express)
  RESTful API: Clean, standard endpoint design for posts, comments, and authentication.

  Database Management: Built with Prisma ORM and PostgreSQL to manage relational data and ensure referential integrity.

  Secure Authentication: Implements JWT (JSON Web Tokens) for stateless session management and secure API access.

  Access Control: Middleware-protected routes that distinguish between public readers, registered users (commenters), and administrative    roles (authors).

2. Admin Panel (React)
  Full CRUD Operations: A private interface for authors to create, read, update, and delete blog posts.

  Publishing Workflow: Integrated logic to toggle post visibility (Published vs. Draft) with a single click, instantly updating the         public feed.

3. Client Frontend (React)
  Public Access: An optimized, high-performance interface designed for reading published articles.

  Interactive Engagement: A secure comment system where logged-in users can participate in discussions.

  Dynamic State Management: Uses modern React patterns to ensure the UI stays synchronized with the API data without manual refreshes.

🛠️ Technical Architecture

Database & Infrastructure
  Relational Schema: Designed with 1:N relationships between Users and Posts, and Posts and Comments.

  On-Premise Focus: Optimized for local PostgreSQL environments with strict schema versioning through Prisma migrations.

The Authentication Pipeline

  Issuance: On successful login, the server issues a signed JWT.

  Persistence: The token is stored in localStorage on the client-side for persistent sessions.

  Verification: Incoming requests to protected routes are verified via an Authorization: Bearer header.

📂 Project Structure

  ├── backend/       # Express API, Prisma Schema, JWT & Passport Logic
  ├── admin/         # React Admin Dashboard (Content & Comment Management)
  └── client/        # React Public Website (Reading & User Engagement)

📦 Tech Stack
  
  Backend: Node.js, Express.js

  Database: PostgreSQL, Prisma ORM

  Frontend: React, Fetch API, CSS3

  Security: JWT (JSON Web Tokens), Bcrypt

⚙️ Setup & Installation

  Clone the repository:git clone https://github.com/Mohiuuddin/blog-api-project.git

Environment Setup:

  Create a .env in the /backend folder with your DATABASE_URL and JWT_SECRET.

Install Dependencies:
  Run npm install in the /backend, /admin, and /client directories.

Database Migration:
  Inside /backend, run npx prisma migrate dev.

Run Application:
  Start the backend server and both frontend development servers using npm run dev.

👨‍💻 Author
Md Mohi Uddin, ICT Professional | Full-Stack Developer
