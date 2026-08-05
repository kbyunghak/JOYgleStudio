# Architecture

## Overview

JOYgleStudio is a TanStack Start application built with React and TypeScript. It supports two delivery targets: a statically prerendered GitHub Pages site and a Nitro server bundle configured for Cloudflare.

## Directory Structure

```text
JOYgleStudio/
├── .github/workflows/   # Validation and Pages deployment
├── assets/              # Source brand and product media
├── docs/                # Project documentation
├── public/              # Files copied directly to the public root
├── scripts/             # Build post-processing
└── src/
    ├── assets/          # Media imported by application modules
    ├── components/      # Shared site and UI components
    ├── hooks/           # Reusable React hooks
    ├── lib/             # Validation, errors, and utilities
    ├── routes/          # File-based route modules
    ├── router.tsx       # Router and query context creation
    ├── server.ts        # Server entry and SSR error wrapper
    └── styles.css       # Tailwind theme and global styles
```

## Application Structure

`src/routes/__root.tsx` defines document metadata, the shared header and footer, React Query context, and global 404/error boundaries. Child route modules render through TanStack Router's `Outlet`.

```text
Root shell
├── SiteHeader
├── Route content
│   └── Page-specific components and media
├── SiteFooter
└── Toast provider
```

## Routing

TanStack Router generates `src/routeTree.gen.ts` from modules in `src/routes/`. `src/router.tsx` derives its base path from `import.meta.env.BASE_URL`, allowing the same routes to work at `/` locally and under `/JOYgleStudio/` on GitHub Pages.

Static prerendering crawls internal links and fails the build when a route cannot be rendered.

## Component Architecture

- `SiteHeader` and `SiteFooter` provide consistent navigation and identity.
- `StoreButtons` centralizes product-store availability controls.
- Route modules own page-specific presentation and metadata.
- `src/components/ui/` contains reusable Radix-based UI primitives.
- Mobile navigation exposes its expanded state with `aria-expanded` and `aria-controls`.

## Data Management

The current site has no application database or remote content API. TanStack Query is provided through the root context for framework compatibility and future server data needs. Contact form values remain in local React state and are validated by pure functions in `src/lib/contact.ts` before opening a pre-filled `mailto:` URL.

## Error Handling

The root route provides user-facing not-found and error states. Server and client error helpers report structured errors to the Lovable environment when available without exposing credentials in the repository.

## Asset Management

Application pages import repository-backed images so Vite can fingerprint and publish them. `public/` contains root-level browser files such as the favicon and robots policy. Lovable asset metadata and generated build outputs are excluded by `.gitignore`.

Large PNG sources are retained for design fidelity but are tracked as optimization candidates in [Review Notes](REVIEW_NOTES.md).

## Deployment Architecture

```text
main branch
  ↓
GitHub Actions validation
  ↓
Static prerender with /JOYgleStudio/ base path
  ↓
dist/client artifact
  ↓
GitHub Pages
```

`bun run build` produces the regular Nitro/Cloudflare build. In GitHub Actions, Nitro is disabled and `bun run build:pages` produces static files, adds `.nojekyll`, and copies the entry page to `404.html` for client-side route recovery.

See [Deployment](DEPLOYMENT.md) for commands and operational details.
