# JOYgleStudio

Official website for JOYgle Studio, featuring product information, support resources, and privacy policies.

[![CI](https://github.com/kbyunghak/JOYgleStudio/actions/workflows/pages.yml/badge.svg)](https://github.com/kbyunghak/JOYgleStudio/actions/workflows/pages.yml)
[![Demo](https://img.shields.io/badge/demo-GitHub%20Pages-1f6feb)](https://kbyunghak.github.io/JOYgleStudio/)
[![Website](https://img.shields.io/badge/Website-GitHub%20Pages-1f6feb)](https://joygle-studio.vercel.app/)

## Overview

JOYgleStudio presents the studio's mission and its bilingual interactive story game, Read The Room. Visitors can explore the product, review support and privacy information, and contact the studio.

**Project Type:** Studio and Product Website

## Live Demo

[Open the live application](https://kbyunghak.github.io/JOYgleStudio/)

The demo is a statically prerendered production build hosted on GitHub Pages.

## Problem

JOYgle Studio needs one accessible, responsive website where players, partners, and reviewers can understand the studio, evaluate its products, find support, and review privacy practices.

## Solution

This project provides a responsive React website with focused routes for the studio, product details, support, contact, and legal information. The application supports server rendering for its Cloudflare target and static prerendering for GitHub Pages.

## Key Features

- Responsive studio and product pages
- Read The Room screenshots, characters, and availability details
- Bilingual product positioning and support information
- Client-side contact validation with a pre-filled email handoff
- Privacy policy and resilient 404/error states

## How It Works

```text
Visitor
  ↓
Studio or Product Page
  ↓
Product Details, Support, Privacy, or Contact
  ↓
Repository-backed media and email handoff
```

## Architecture

TanStack Start handles file-based routing and prerendering. Shared React components provide the site shell, while route modules own page content and metadata. Vite produces a static GitHub Pages artifact under the `/JOYgleStudio/` base path and a Nitro server build for the optional Cloudflare target.

See [Architecture](docs/ARCHITECTURE.md) for the detailed technical structure.

## Tech Stack

| Area            | Technology                         |
| --------------- | ---------------------------------- |
| Application     | React 19, TypeScript               |
| Framework       | TanStack Start and TanStack Router |
| Styling         | Tailwind CSS 4                     |
| Build           | Vite 8 and Nitro                   |
| UI              | Radix UI and Lucide React          |
| Testing         | Vitest, Testing Library, and jsdom |
| Package manager | Bun                                |

## Project Structure

```text
JOYgleStudio/
├── assets/             # Repository-backed brand and product media
├── docs/               # Architecture, brand, deployment, and review notes
├── public/             # Static browser metadata
├── src/
│   ├── components/     # Shared site and UI components
│   ├── lib/            # Utilities, contact logic, and error handling
│   └── routes/         # File-based application routes
├── package.json
└── vite.config.ts
```

## Current Status

The production website is live on GitHub Pages. Core routes, responsive navigation, contact validation, error states, and both deployment builds are working. Eleven automated utility and component tests currently pass. Store availability displayed on the site remains in testing or review.

## Getting Started

Requirements:

- Bun 1.3 or later

```bash
bun install
bun run dev
```

Open `http://localhost:8080` after the development server starts.

## Testing

```bash
bun run lint
bun run typecheck
bun run test
bun run build
```

The automated tests cover contact validation and safe `mailto:` generation, primary navigation, mobile-menu accessibility state, footer destinations, contact-form validation, and error/not-found states. Manual browser checks cover primary routes, responsive behavior, form behavior, missing pages, and image loading.

## CI/CD

GitHub Actions runs lint, type checking, unit tests, and a static production build for every push to `main`, then deploys the artifact to GitHub Pages. The regular local build continues to target Cloudflare through Nitro. See [Deployment](docs/DEPLOYMENT.md).

## Documentation

- [Documentation index](docs/README.md)
- [Site specification](docs/SITE_SPECIFICATION.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Page structure](docs/PAGE_STRUCTURE.md)
- [Brand guide](docs/BRAND_GUIDE.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Review notes](docs/REVIEW_NOTES.md)

## Roadmap

- Monitor production availability and performance
- Add a custom domain when available
- Optimize large image assets
- Upgrade deprecated visualization dependencies
- Expand unit and accessibility coverage

## Limitations

- Store links are placeholders while releases are in testing or review
- The contact form opens the visitor's email application rather than submitting to a backend
- Browser-level end-to-end automation is not yet configured

## License

Copyright © 2026 Andrew Kim, doing business as JOYgle Studio. All rights reserved.

This repository and its original source code, website design, branding,
artwork, documentation, and other original materials may not be reproduced,
modified, distributed, or used commercially without prior written permission.

Third-party libraries, frameworks, fonts, and other dependencies remain
subject to their respective licenses.
