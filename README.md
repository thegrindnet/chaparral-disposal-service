# Chaparral Disposal Service

A production-ready, single-page business website for Chaparral Disposal Service. It highlights dependable residential and commercial trash pickup in Chaparral, New Mexico and surrounding areas.

## Technologies

- React
- Vite
- JavaScript and JSX
- Plain CSS

## Local development

```bash
npm install
npm run dev
```

Run `npm run lint` for code checks and `npm run build` for a production build. Vite writes production files to `dist` (not `build`).

## Content and images

Repeated business data, services, gallery entries, reviews, and navigation links live in `src/utils/constants.js`. Component-specific styles live beside each component. Optimized local images are in `src/assets/images`.

The placeholder `email@example.com` must be replaced with the confirmed business email before launch.

## GitHub Pages

1. Create a repository named `chaparral-disposal-service`.
2. Add this project, commit it, and push the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Set **Source** to **GitHub Actions**.
5. The included workflow builds and deploys after every push to `main`.

Expected URL: `https://thegrindnet.github.io/chaparral-disposal-service/`

Vite uses `base: './'`, so the build remains portable under a GitHub Pages project subdirectory.

## Project structure

```text
chaparral-disposal-service/
├── .github/workflows/deploy.yml
├── public/favicon.png
├── src/
│   ├── assets/images/
│   ├── components/
│   │   ├── About/  App/  Contact/  Footer/  Gallery/
│   │   ├── Header/  Hero/  Navigation/  Services/
│   │   ├── Testimonials/  TrustBar/
│   ├── utils/constants.js
│   ├── vendor/normalize.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```
