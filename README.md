# WorkPulse — Workforce & Attendance Management

A realistic MERN starter application for hands-on DevOps practice. It includes a multi-page React UI with routing, a Node/Express API, MongoDB models, Dockerfiles, Docker Compose, and Nginx reverse-proxy configuration.

## Current state Here
- Frontend: working React app with routing and demo data.
- Backend: Express API scaffold with health, attendance, employee, and leave endpoints.
- Database: Mongoose models and connection helper.
- DevOps: Dockerfiles, Compose, Nginx config, GitHub Actions CI starter.
- Authentication and persistent CRUD are intentionally left as guided implementation tasks. Demo UI uses local mock   data until those tasks are completed.

## Pages
start from here : 

- Login
- Dashboard
- Attendance
- Employees
- Leave Requests
- Reports
- Settings

## Run locally (without Docker)
Terminal 1:
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```
Terminal 2:
```bash
cd frontend
npm install
npm run dev
```
Frontend: http://localhost:5173  
API health: http://localhost:5000/api/health/

For local backend + database, set `MONGODB_URI` in `backend/.env` to your MongoDB URI. Do not commit `.env`.

## Run with Docker
From project root:
```bash
docker compose up -d --build
```
Open http://localhost:8080

Stop:
```bash
docker compose down
```
Keep database data:
```bash
docker compose down
```
The named volume remains. To deliberately delete database data too:
```bash
docker compose down -v
```
Do not run `down -v` unless you intend to delete the local database volume.

## Important learning notes
- The UI currently uses mock data so pages are visible before API implementation.
- The backend routes are starter endpoints; you will implement validation, authentication, authorization, and database operations task by task.
- The Compose file does not publish MongoDB or backend ports to the host. Nginx is the public entry point.
- This is a learning project, not production-ready HR/payroll software.

## Learning order
Read `docs/01-roadmap.md`, then start only `docs/tasks/01-project-discovery.md`.
