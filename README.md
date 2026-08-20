# chris-mega.dev — personal site

Next.js (App Router) + Tailwind CSS v4, deployed on **Vercel**.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
```

## Portfolio content

Projects are hand-authored in [`src/data/projects.js`](src/data/projects.js). Each entry
supports:

| field      | meaning                                                      |
| ---------- | ------------------------------------------------------------ |
| `category` | one of the values in `CATEGORIES` — drives the filter pills   |
| `shot`     | path under `/public/shots`; omit to render a monogram tile    |
| `domain`   | shown in the fake browser bar above a screenshot              |
| `live`     | public URL — renders the "Visit site" link                    |
| `repo`     | source URL — renders the "Source" link                        |
| `accent`   | Tailwind gradient classes used by the monogram tile           |

### Refreshing screenshots

Screenshots are captured locally with the Chrome you already have installed and
committed to `public/shots` — no screenshot API, nothing running at build time:

```bash
npm run shots              # all sites
npm run shots -- raven     # only entries whose name matches "raven"
CHROME_PATH=/path/to/chrome npm run shots   # if auto-detection fails
```

Site list lives in [`scripts/capture-shots.mjs`](scripts/capture-shots.mjs).

### Profile photo

`src/app/components/Avatar.js` serves `public/me.jpg`. Replace that file (square
crop works best) to change the photo.

## Deployment

This repo used to be built by GitHub Actions into a static export for GitHub
Pages. That workflow is gone, along with the `trailingSlash` and
`images.unoptimized` constraints it required. Vercel builds it directly, so
server rendering, image optimization, route handlers and ISR are all available.

Environment variable (optional): `NEXT_PUBLIC_SITE_URL` — canonical origin used
for metadata / Open Graph URLs.
