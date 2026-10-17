# Portfolio

Personal portfolio built with Next.js and Payload CMS (SQLite).

## Local setup

1. `cp .env.example .env` and set `PAYLOAD_SECRET` to a random string.
2. `npm install`
3. `npm run dev`
4. Open `http://localhost:3000` for the site and `http://localhost:3000/admin` for the CMS.

## Scripts

- `npm run dev` – start the dev server
- `npm run build` / `npm start` – production build and server
- `npm run generate:types` – regenerate `src/payload-types.ts` after changing collections or globals
- `npm run generate:importmap` – regenerate the admin import map
- `npm run lint` – run ESLint

## Content

- Collections: Users, Media, Projects, Services, Experience
- Globals: Hero, About, Site Settings

The database is a local file (`portfolio.db`) and uploads go to `/media`; both are git-ignored.
