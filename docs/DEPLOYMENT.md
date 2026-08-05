# Deployment

## Development Environment

- Bun 1.3 or later
- Node.js-compatible tooling for local validation

## Local Development

```bash
bun install
bun run dev
```

## Build Process

Run the standard Cloudflare/Nitro build locally:

```bash
bun run build
```

Run the static GitHub Pages build with the repository base path:

```bash
GITHUB_ACTIONS=true VITE_BASE_PATH=/JOYgleStudio/ bun run build:pages
```

The Pages artifact is generated in `dist/client`.

## GitHub Actions

The `.github/workflows/pages.yml` workflow validates lint, types, and tests before building and deploying the static Pages artifact. It runs for pushes to `main` and can also be started manually.

## GitHub Pages

Expected project URL:

<https://kbyunghak.github.io/JOYgleStudio/>

In the repository settings, select **GitHub Actions** as the Pages publishing source. The workflow adds the `/JOYgleStudio/` base path, prerenders all static routes, creates a client-side `404.html`, and disables Jekyll processing.

## Custom Domain

A custom domain is not configured. If one is added, change `VITE_BASE_PATH` in the Pages workflow from `/JOYgleStudio/` to `/` and configure the domain in the repository Pages settings.
