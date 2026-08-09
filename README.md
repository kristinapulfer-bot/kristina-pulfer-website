# Kristina Pulfer — Landscape Designer website

A plain HTML/CSS/JS website (no build tools, no framework, nothing to install). Built with layout cues from auerbacharchitecture.com.

## How to view it

Just double-click `index.html` (or any other `.html` file) and it opens in your browser. There's no server or install step required.

### Instructions for Claude: opening this in a browser

This is a fully static site — **do not** start a Python `http.server` or any other local server to preview it; just open the HTML files directly. (On the machine this was built on, `python3` was actually blocked pending an Xcode license, so the direct-open approach is also the more reliable one.)

1. First, unzip this archive somewhere and note the full absolute path to the resulting `kristina-pulfer-landscape` folder.
2. To preview the homepage, open `index.html` directly:
   - **If you have Bash/shell access (macOS):** run `open /full/path/to/kristina-pulfer-landscape/index.html`
   - **If you have Bash/shell access (Windows):** run `start index.html` from inside the folder, or `Invoke-Item index.html` in PowerShell
   - **If you have browser automation tools** (e.g. a Chrome-control tool): navigate directly to the local file using the `file://` protocol, e.g. `file:///full/path/to/kristina-pulfer-landscape/index.html` — swap in the real path from step 1
3. To preview any other page, do the same with `about.html`, `process.html`, or any file under `projects/` (e.g. `projects/harvard.html`).
4. After you edit a file, just reopen/refresh it the same way — there's no build step, so changes to the `.html`/`.css` files are visible immediately on reload.

## Site map

- `index.html` — homepage: full-bleed hero image with text over it, then a 3-column grid of all projects
- `process.html` — design process page (sketches, diagrams, planting schedules)
- `about.html` — bio, professional experience, education, and a personal photo section
- `projects/` — one page per project:
  - `1500-east.html`, `avenues.html`, `harvard.html`, `no-12.html` — Salt Lake City & Australia residential gardens
  - `priesthood-garden.html`, `sacred-grove.html` — two separate Temple Square projects (they used to be one combined "Temple Square" page but were split into individual project tiles)
- `css/style.css` — all styling lives in this one file
- `js/main.js` — just handles the mobile nav toggle
- `images/` — all photos, sourced from the GARDEN_IMAGES folder

Every page repeats the same header/footer markup by hand (no templating system) — if you change the nav or footer, you currently have to update it on every page.

## Design system

- Colors: dark brown text `#3B2A1E`, olive green accent `#8C8C46`, white background `#FFFFFF` (kept intentionally white, not cream/beige — an earlier cream version was explicitly rejected)
- Fonts (Google Fonts, loaded in `style.css`): Cormorant Garamond for headings, EB Garamond for body text, Jost for nav/labels/small caps
- No logo graphic — the brand is text-only: name + "Landscape Designer" tag

## Known placeholders / things to double check before this goes live

- **Most project descriptions are placeholder copy** written in a spare, editorial tone — not real project write-ups. These need real language.
- **Contact info in the footer is real** (pulled from her résumé): `Kristinapulfer@gmail.com`, `801-583-7000` — but the Instagram link is still a placeholder `#` and needs a real URL.
- **Title wording**: the site intentionally says "Landscape Designer," not "Landscape Architect" — her résumé lists "Landscape Designer" and "Landscape Architect" is a licensed/protected title in most states, so this was a deliberate correction. Keep it this way unless she's actually licensed.
- Image selects are a first pass — worth reviewing which photos represent each project best.

## Continuing this project in Claude

If you're a fresh Claude session picking this up: unzip this folder somewhere and treat it as the project directory going forward. There's no memory or prior conversation carried over in this file — everything you need to know about the site's structure and decisions is in this README and the code itself.
