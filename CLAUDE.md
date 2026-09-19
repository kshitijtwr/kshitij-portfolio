# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page personal portfolio (React 18 + TypeScript + Vite + Tailwind 3) deployed as a **static site to GitHub Pages** at `https://kshitijtwr.github.io/kshitij-portfolio/`. There is no backend.

## Commands

- `npm run dev` — Vite dev server (under base path `/kshitij-portfolio/`)
- `npm run build` — Vite build to `dist/`
- `npm run preview` — serve the built `dist/`
- `npm run check` — type-check (`tsc --noEmit`)

There is no test runner or linter.

## Architecture

- Entry: `client/index.html` → `client/src/main.tsx` → `App.tsx`. Vite `root` is `client/`, so static files (e.g. `resume.pdf`) go in `client/public/`.
- `vite.config.ts` sets `base: "/kshitij-portfolio/"` (required for GitHub Pages) and the `@` → `client/src` alias.
- Routing uses wouter with **`useHashLocation`** because GitHub Pages has no SPA fallback. Don't switch to path-based routing.
- `pages/home.tsx` is the whole site: it stacks section components from `components/` (navigation, hero, about, skills, experience, projects, achievement, education, contact, footer). Navigation and hero CTAs scroll to sections by element `id` (e.g. `#contact`), so keep section ids in sync with the `scrollToSection` callers. Content is hard-coded in the components.
- `components/ui/` holds only the shadcn/ui primitives actually used (`card`, `toast`/`toaster`, `tooltip`). Add others with the shadcn CLI (config in `components.json`) when needed.
- The contact section uses `mailto:` links; there is no form submission.

## Deployment

`.github/workflows/deploy.yml` builds (`npm install` + `npm run build`, Node 20) and deploys `dist/` on every push to `main`. `dist/` is gitignored; CI produces it.
