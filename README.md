# garmentsucks — static site

A field guide to garment construction: 28 cards, filterable feed, no backend.
Plain HTML/CSS/JS — works from `file://` and on GitHub Pages.

## Deploy to GitHub Pages (free)

### Option A — project site (URL: `https://<user>.github.io/garmentsucks/`)

1. Create a **public** repo named `garmentsucks` on GitHub.
2. From this folder:

```bash
git init
git add .
git commit -m "garmentsucks site"
git branch -M main
git remote add origin https://github.com/<USER>/garmentsucks.git
git push -u origin main
```

3. GitHub → repo **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main**, folder **/ (root)** → Save.
4. Wait 1–2 minutes. Site is at `https://<USER>.github.io/garmentsucks/`.

### Option B — user site (URL: `https://<user>.github.io/`)

Name the repo `<USER>.github.io` instead, and the site serves at the root domain.
(For a clean URL, a GitHub account named `garmentsucks` gives `https://garmentsucks.github.io`.)

## Local preview

Open `index.html` directly in a browser — no server needed (data lives in `data.js`,
not fetched). Add `?all=1` to render every card at once (useful for print/PDF).

## Custom domain (later)

1. Buy a domain (`.com` at Cloudflare is ~$10/yr at cost).
2. Add a file named `CNAME` in this folder containing only the domain, e.g. `garmentsucks.com`.
3. DNS: `CNAME` record → `<USER>.github.io`.
4. Settings → Pages → Custom domain → enter it, enable HTTPS.

## Adding a card

Edit `data.js` and append to `window.FEED`:

```js
{ id: "unique-slug", cat: "details|closure|fabric|history|brands|howto",
  era: "1964", title: "…", dek: "one-line hook",
  body: "2–4 sentences.", src: "source line" }
```

Images are optional: add a filename to the `IMG` map in `app.js` (keys = card `id`).
Keep images CC0 / public domain.

## Rules

- Every card must answer "why", not just "what".
- Each card carries a source line. No source, no card.
- Brand name is written `garmentsucks` (one word, all lowercase).
