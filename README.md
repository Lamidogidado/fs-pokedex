# Full Stack Open - Pokedex CI/CD

This repository contains a Pokedex application with a fully automated CI/CD pipeline.

## Build Status
![Build Status](https://github.com/Lamidogidado/fs-pokedex/actions/workflows/pipeline.yml/badge.svg)

## Deployment
The application is automatically deployed to Render whenever changes are pushed to the `main` branch and pass all tests.

- **Live Application:** [https://fs-pokedex-sv3m.onrender.com/](https://fs-pokedex-sv3m.onrender.com/)
- **Health Check:** [/health](https://fs-pokedex-sv3m.onrender.com/health)
- **Current Version:** [/version](https://fs-pokedex-sv3m.onrender.com/version)

## Features
- **Linting:** ESLint for code style.
- **Unit Testing:** Jest for backend logic.
- **E2E Testing:** Playwright for browser-level testing.
- **Deployment:** Automated via Render Deploy Hooks.
- **Health Checks:** Zero-downtime deployment safety.
