# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interactive map of Japan's 47 prefectures displaying curated YouTube videos per prefecture. Russian-language content ("Проект 47 префектур"). No build system — pure static files.

## Running Locally

Serve with any HTTP server (required for SVG loading — opening `index.html` directly won't work):

```bash
python3 -m http.server 8000
```

## Updating Videos

```bash
pip install yt-dlp
python3 scripts/fetch_videos_yt.py https://www.youtube.com/@Tjeckon/videos
```

Outputs `videos.json` at repo root. The script filters for videos with "Проект 47 префектур" in title.

## Architecture

**No framework, no build step.** All logic is in vanilla JS.

### Key files

- `index.html` — Entry point. SVG map loaded via `<object>` tag (not `<img>` or inline) so its DOM is accessible from JS.
- `script.js` — All application logic (~1000 lines):
  - Prefecture data: hard-coded object `{ prefectureKey: { name, videos: [{title, url}] } }`
  - SVG interactivity attached dynamically after SVG loads (retry loop up to 20 attempts to handle race conditions)
  - Zoom/pan state tracked in `zoomState` object; supports mouse wheel, pinch-to-zoom, and drag
  - Tooltip placement with smart viewport-boundary fallback
- `styles.css` — CSS custom properties for theming; breakpoint at `max-width: 1024px` for mobile layout
- `petals.js` — Pixi.js WebGL seasonal particle system; auto-detects season from current month; override via `?season=spring|summer|autumn|winter` URL param; respects `prefers-reduced-motion`
  - Spring (Mar–Apr): sakura petals, pink/white, gentle fall
  - Summer (May–Sep): fireflies, glowing yellow-green dots drifting upward with alpha pulse
  - Autumn (Oct–Nov): momiji maple leaves, red/orange/amber/yellow, 5-lobe bezier shape, heavier tumbling fall
  - Winter (Dec–Feb): snowflakes, soft white circles, dense, nearly straight fall
- `japan-map-real.svg` — Prefecture shapes with class names matching the keys in the prefecture data object (e.g., `.hokkaido`, `.tokyo`)
- `videos.json` — Output of fetch script; not directly consumed by the app (data is embedded in `script.js`)

### Adding a new prefecture

1. Add an SVG `<path>` element to `japan-map-real.svg` with the prefecture class name and a `<title>` child element
2. Add the entry to the prefecture data object in `script.js` with matching key, `name`, and `videos` array

### SVG loading

The SVG is embedded via `<object>` to allow JavaScript access to its internal DOM (`contentDocument`). The init code uses a polling retry loop because `contentDocument` may not be ready immediately after the `load` event.
