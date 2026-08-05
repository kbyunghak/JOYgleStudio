# Review Notes

Review date: August 5, 2026

## Validation Summary

| Check             | Result | Notes                                                     |
| ----------------- | ------ | --------------------------------------------------------- |
| TypeScript        | Passed | `pnpm run typecheck`                                      |
| Production build  | Passed | Cloudflare/Nitro output generated successfully            |
| Unit tests        | Passed | 11 utility and component tests                            |
| Browser routes    | Passed | Home, products, about, support, privacy, contact, and 404 |
| Responsive layout | Passed | No horizontal overflow at desktop or 375 px mobile width  |

## Resolved Findings

- **P1 — Broken product images:** Replaced Lovable-only `/__l5e` asset URLs with repository-backed image imports.
- **P2 — Misleading social links:** Replaced generic service homepages with the project repository and removed the unverified LinkedIn link.
- **P2 — Mobile menu accessibility:** Added `aria-expanded` and `aria-controls` state.
- **P3 — Email link behavior:** Removed new-tab behavior from the email link.
- **Maintainability:** Extracted contact validation and mailto generation into tested pure functions.

## Follow-up Items

- Recharts 2.x is deprecated; plan and test a separate upgrade to Recharts 3.x.
- The mascot source image is approximately 985 KB in the production bundle and is an optimization candidate.
- `assets/characters/dongli/dongli-start-transparent.png` and `dongli-transparent.png` are byte-for-byte duplicates. Confirm which name is canonical before removing either file.
- Add verified JOYgle Studio social profile links only when the official account URLs are available.
