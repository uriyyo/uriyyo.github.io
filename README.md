# uriyyo.github.io

Personal blog built with [Astro](https://astro.build), deployed to GitHub Pages on every push to `master`.

## Writing a post

Add a Markdown (or MDX) file to `src/content/blog/`:

```md
---
title: 'Post title'
description: 'One-line summary'
pubDate: '2026-11-03'
---

Content goes here.
```

## Development

```sh
bun install
bun run dev      # http://localhost:4321
bun run build    # static output in dist/
bun run preview
```
