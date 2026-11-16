# Task 01 — Project discovery

## Goal
Understand the existing app before editing it. Inspect first, change second.

## Explore
- `frontend/src/App.jsx`
- `frontend/src/layouts/AppLayout.jsx`
- `frontend/src/components/Sidebar.jsx`
- `frontend/src/pages/`
- `frontend/src/data/mockData.js`
- `backend/src/app.js`
- `backend/src/routes/`
- `docker-compose.yml`
- `infra/nginx/default.conf`

## Questions to answer
1. Which URL paths render the Dashboard, Attendance, Employees, Leaves, Reports, and Settings pages?
2. Which component is shared by all authenticated-looking pages?
3. Is the UI using real API data or mock data? How can you tell?
4. What does `GET /api/health` prove, and what does it not prove?
5. Which ports are published on the host in Compose?
6. Why are backend and MongoDB not directly published to the host?
7. Trace a browser request to `/api/attendance` from Nginx to Express.

## Deliverable
Create `docs/architecture-notes.md` with:
- a Mermaid or ASCII architecture diagram
- answers to all seven questions
- one thing you understand well and one thing you want clarified

## Documentation
- React: https://react.dev/learn
- React Router: https://reactrouter.com/start/declarative/installation
- Express routing: https://expressjs.com/en/guide/routing.html
- Docker Compose: https://docs.docker.com/compose/
- Nginx beginner guide: https://nginx.org/en/docs/beginners_guide.html

Stop after this task. Do not start authentication or deployment yet.
