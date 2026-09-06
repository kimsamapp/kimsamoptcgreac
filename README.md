# KimSamOPTCG — Oripa Landing (React)

A static, no-backend React app for the KimSamOPTCG One Piece oripa concept:
a banner slider, scroll animations, a newsletter section, and a batch prize
pool + 100-pack inventory page.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build a deployable static bundle:

```bash
npm run build
npm run preview   # preview the production build locally
```

`npm run build` outputs a `dist/` folder you can drop on any static host
(Netlify, Vercel, GitHub Pages, S3, etc.) — no server required.

## Where to put your real data

Everything you'll eventually replace lives in two files:

- **`src/data/prizePool.js`** — the batch's prize list (Serial / Name / Picture).
  Set `image` to a path (e.g. `/images/luffy.jpg`, dropped in `public/images/`)
  once you have real photos, and flip `found` to `true` once a prize is pulled.
- **`src/data/packInventory.js`** — generates the 100 unique pack IDs and
  marks a set number as "sold" for the demo. Swap `generatePackInventory()`
  for a real fetch once you have a backend or spreadsheet export.
- **`src/components/HeroSlider.jsx`** — the `SLIDES` array at the top has your
  banner copy and placeholder gradients; swap `art` for a real image URL.

## Structure

```
src/
  components/   Nav, Footer, HeroSlider, Newsletter, PrizeCard, PackInventory, Reveal
  pages/        Landing.jsx (/) and PrizePool.jsx (/prizepool)
  data/         placeholder prize pool + pack inventory data
  hooks/        useReveal (scroll-in animations) + useCountUp
  index.css     all styling (design tokens at the top)
```

Routing is done with `react-router-dom`, so `/` is the landing page and
`/prizepool` is the batch page — no page reload between them.
