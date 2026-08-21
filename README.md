# Yash Rajput — portfolio

Live: [yashrajput.in](https://yashrajput.in)

A single-page portfolio aimed at AI engineering roles. The hero runs a live agent
workflow graph on a 2D canvas — nodes fire in sequence, a request token travels the
edges, and the branch that isn't taken stays dashed.

## Structure

```
src/
  data/profile.js       every word and number on the site — edit here, not in components
  styles/               tokens.css (colour, type, rhythm) + base.css (reset, primitives)
  hooks/                useReveal, useTheme, useActiveSection
  components/           Nav, Section, Footer, AgentGraph (the canvas)
  sections/             Hero, Focus, Impact, Experience, Stack, OpenSource, Writing,
                        Awards, Contact — one .jsx + one .css each
```

Content and design are separated on purpose: to change what the site says, only
`src/data/profile.js` needs touching. To change how it looks, start at
`src/styles/tokens.css`.

## Design system

- **Ground** deep blueprint ink with a faint engineering grid.
- **Blue is structure, amber is signal.** Blue draws edges, rails and links; amber
  marks anything active — the firing node, a key number, the focused control.
- **Type** Archivo (expanded width axis) for display, IBM Plex Sans for body,
  IBM Plex Mono for every label, datum and caption.
- Light and dark themes are the same palette with the roles swapped; the theme is
  set before first paint so there is no flash.
- Motion respects `prefers-reduced-motion` — the graph renders its completed state
  instead of animating.

## Running it

```bash
pnpm install
pnpm start        # fetches Medium posts + GitHub profile, then serves on :3000
pnpm build
pnpm deploy       # gh-pages → master branch
```

`pnpm start` and `pnpm build` run `fetch.js` first, which writes
`public/blogs.json` (Medium feed) and `public/profile.json` (GitHub). Both need
`.env`:

```
REACT_APP_GITHUB_TOKEN=...
GITHUB_USERNAME=the-yash-rajput
USE_GITHUB_DATA=true
MEDIUM_USERNAME=yashrajputishu
```

If the Medium feed is missing, the Writing section hides itself rather than
breaking the page.

## Contact

[github.com/the-yash-rajput](https://github.com/the-yash-rajput) ·
[linkedin.com/in/the-yash-rajput](https://linkedin.com/in/the-yash-rajput) ·
yashrajputishu@gmail.com
