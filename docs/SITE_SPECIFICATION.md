# JOYgle Studio Site Specification

## Project Overview

JOYgleStudio is the official portfolio and product website for JOYgle Studio. It introduces the studio, presents the bilingual narrative game Read The Room, and provides support, privacy, and contact information.

## Project Goals

- Explain the studio's purpose and product value clearly.
- Give players, partners, press, and reviewers a reliable source of product information.
- Provide accessible support, privacy, and contact paths on desktop and mobile.
- Publish a production-ready static site on GitHub Pages while retaining a Cloudflare-compatible server build.

## Project Scope

### Included

- Studio overview and product catalog
- Read The Room product details, screenshots, and character information
- Support, privacy, and contact pages
- A Korean product-specific privacy policy for 말해봐! 영단어 구조대
- Responsive navigation and reusable site shell
- Contact-field validation and pre-filled email handoff
- Metadata, 404 handling, and recoverable application errors
- Automated utility and component tests
- GitHub Actions validation and GitHub Pages deployment

### Excluded

- User accounts, authentication, or saved progress
- Payments, purchases, or application-store fulfillment
- A content management system or administrative interface
- A backend contact-message store
- Product analytics or behavioral tracking

## Target Audience

- Players evaluating JOYgle Studio games
- Partners, educators, press, and reviewers
- Users seeking support or privacy information
- Contributors maintaining the website

## Technology Stack

| Area            | Technology                                     |
| --------------- | ---------------------------------------------- |
| Application     | React 19 and TypeScript                        |
| Framework       | TanStack Start and TanStack Router             |
| Data context    | TanStack Query                                 |
| Styling         | Tailwind CSS 4 with OKLCH design tokens        |
| Components      | Radix UI and Lucide React                      |
| Build           | Vite 8 and Nitro                               |
| Testing         | Vitest, Testing Library, and jsdom             |
| Package manager | Bun                                            |
| Hosting         | GitHub Pages; optional Cloudflare/Nitro target |

## Project Conventions

### Language Policy

Repository documentation and commit messages are written in English. Public page copy is currently English, while product descriptions may identify bilingual product support. Claims must reflect released or verifiable functionality.

### Architecture Policy

- Route modules live in `src/routes/` and own page metadata and route-level content.
- Shared layout and navigation belong in `src/components/`.
- Reusable logic belongs in `src/lib/` and should be independently testable.
- Generated files such as `src/routeTree.gen.ts` must not be edited manually.
- GitHub Pages behavior must respect `VITE_BASE_PATH`.

### Content Management

Content is maintained in source-controlled route modules. Brand and product media are stored in `assets/`, while files needed directly by the application are imported from `src/assets/` or served from `public/`.

### Naming Convention

- React components: PascalCase exports and kebab-case filenames
- Utilities and hooks: camelCase exports
- Routes: TanStack file-based route naming
- Tests: `*.test.ts` or `*.test.tsx`
- Commits: Conventional Commit format with one purpose per commit

## Current Delivery

The production site is deployed at <https://kbyunghak.github.io/JOYgleStudio/>. Store destinations remain placeholders until the products are publicly available.

## Future Roadmap

- Optimize large product and mascot images
- Add verified store and social links when available
- Expand accessibility and browser-level automation
- Add a custom domain when available
