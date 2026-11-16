# WorkPulse — Full learning roadmap

Read the whole list once. Complete one task at a time; don't jump ahead.

## A. Product and architecture
- [ ] 01 Project discovery: map pages, routes, services, and request flow.
- [ ] 02 Requirements: define roles, attendance rules, leave rules, acceptance criteria.
- [ ] 03 API contract: document request/response bodies and status codes.
- [ ] 04 Data design: User, Attendance, LeaveRequest schemas, indexes, validation.

## B. MERN implementation
- [ ] 05 Backend structure, config, health endpoint, error handling.
- [ ] 06 MongoDB connection and graceful failure behavior.
- [ ] 07 User model, password hashing, seed admin strategy.
- [ ] 08 Login, JWT, authentication middleware.
- [ ] 09 Role-based authorization and ownership checks.
- [ ] 10 Employee CRUD APIs.
- [ ] 11 Check-in/check-out API and duplicate prevention.
- [ ] 12 Attendance history, date filters, pagination.
- [ ] 13 Leave request and approval/rejection APIs.
- [ ] 14 Replace frontend mock data with API calls.
- [ ] 15 Forms, validation, loading/error/empty states.
- [ ] 16 Unit/API tests and manual test plan.

## C. Containers and networking
- [ ] 17 Backend Dockerfile: understand each instruction.
- [ ] 18 Frontend multi-stage Dockerfile.
- [ ] 19 Compose services, bridge network, service DNS.
- [ ] 20 MongoDB named volume and health checks.
- [ ] 21 Nginx static serving and `/api` reverse proxy.
- [ ] 22 Verify published vs internal ports, logs, persistence.

## D. CI/CD
- [ ] 23 Git branching and pull request workflow.
- [ ] 24 GitHub Actions: backend test + frontend build.
- [ ] 25 Lint, cache, artifacts, environment variables.
- [ ] 26 Docker image build validation.
- [ ] 27 Choose deployment strategy and document trade-offs.
- [ ] 28 CD using self-hosted runner or SSH-based deploy.
- [ ] 29 Secrets and environment-specific config.
- [ ] 30 Deployment health check and rollback plan.

## E. AWS and operations
- [ ] 31 Plan VPC/security groups before changing cloud resources.
- [ ] 32 Deploy app with least-privilege network access.
- [ ] 33 Backups and restore test.
- [ ] 34 Logs, metrics, disk/memory monitoring.
- [ ] 35 Incident drills: bad deploy, API down, DB down, disk full.
- [ ] 36 Cost review and cleanup checklist.

## F. Jenkins and interview
- [ ] 37 Jenkins setup in an approved local environment.
- [ ] 38 Jenkinsfile: checkout, install, test, build.
- [ ] 39 GitHub webhook, credentials, agent concepts.
- [ ] 40 Compare Jenkins and GitHub Actions; project walkthrough.

## Working method
For each task: understand objective -> inspect docs/code -> propose approach -> implement -> test -> explain why it works -> answer one interview question.
