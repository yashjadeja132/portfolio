# Yashrajsinh Jadeja — Portfolio

Personal portfolio of Yashrajsinh Jadeja, a Full Stack Developer (MERN / MEVN, SaaS, payment integrations).

**Live site:** https://yashrajsinhjadeja.com

## What is inside

- Home page with About, Skills, Experience, Projects, Awards and Contact sections
- A case-study page and popup for each project (`/projects/<slug>`)
- Contact form that sends an email through a small Node.js API
- SEO setup: meta tags, Open Graph image and structured data (JSON-LD)

All content (profile, experience, projects, awards) lives in one file: `client/src/data/portfolio.ts`.

## Tech stack

- **Client:** React 19, TypeScript, Vite, React Router, CSS Modules
- **Server (contact form):** Node.js, Express, Nodemailer
- **Hosting:** GitHub Pages (client) and Render (API)

## Project structure

```
client/   React app (Vite)
server/   Contact form API (Express + Nodemailer)
.github/  GitHub Actions workflow that deploys the client
render.yaml  Render blueprint for the API
```

## Run locally

Client:

```bash
cd client
npm install
npm run dev      # http://localhost:5173
```

Server (optional, only needed to test the contact form):

```bash
cd server
npm install
npm run dev      # http://localhost:4000
```

Copy `client/.env.example` to `client/.env` and set the values you need. For the server, set the SMTP variables listed in `render.yaml` in a `server/.env` file. Do not commit `.env` files.

## Add or edit a project

1. Open `client/src/data/portfolio.ts`.
2. Add an entry to the `projects` list (name, company, timeline, stack, description and so on).
3. Optional: add a screenshot to `client/public/projects/` and list it in `screenshots`.

The home page cards and the case-study pages use this data automatically.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the client and publishes it to GitHub Pages. The API deploys to Render from `render.yaml`.

## Contact

- LinkedIn: https://linkedin.com/in/yashjadeja132
- GitHub: https://github.com/yashjadeja132
- Email: yashrajsinhjadeja757@gmail.com
