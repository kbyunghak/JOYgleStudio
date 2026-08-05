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

PowerShell:

```powershell
$env:GITHUB_ACTIONS = "true"
$env:VITE_BASE_PATH = "/JOYgleStudio/"
bun run build:pages
```

POSIX shells:

```bash
GITHUB_ACTIONS=true VITE_BASE_PATH=/JOYgleStudio/ bun run build:pages
```

The Pages artifact is generated in `dist/client`.

## GitHub Actions

The `.github/workflows/pages.yml` workflow validates lint, types, and tests before building and deploying the static Pages artifact. It runs for pushes to `main` and can also be started manually from the [Actions page](https://github.com/kbyunghak/JOYgleStudio/actions/workflows/pages.yml).

## GitHub Pages

Production URL:

<https://kbyunghak.github.io/JOYgleStudio/>

GitHub Pages is enabled with **GitHub Actions** as its publishing source. The workflow adds the `/JOYgleStudio/` base path, prerenders all static routes, creates a client-side `404.html`, and disables Jekyll processing.

## Deployment Verification

After a deployment, confirm that the workflow completed successfully and that the production URL returns HTTP 200. Verify the home page, direct navigation to nested routes, static assets, and the custom 404 fallback.

## Custom Domain

A custom domain is not configured. If one is added, change `VITE_BASE_PATH` in the Pages workflow from `/JOYgleStudio/` to `/` and configure the domain in the repository Pages settings.
