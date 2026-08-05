# Brand Guide

## Brand Identity

JOYgle Studio uses a playful, optimistic visual language that supports clear product storytelling. Rounded forms, generous spacing, friendly illustration, and bright accents should remain balanced with readable text and accessible interaction states.

## Logo and Mascot

- Preserve the original aspect ratio and transparent background.
- Do not stretch, crop, recolor, or place the mascot over visually noisy content.
- Use descriptive alternative text when the image communicates identity or action.
- Decorative repetitions may use empty alternative text when appropriate.
- Source branding files live in `assets/branding/`; application-ready media lives in `src/assets/`.

## Color Palette

The canonical values are CSS custom properties in `src/styles.css`. Colors use OKLCH so lightness and chroma can be adjusted consistently.

| Token                      | Role                                     |
| -------------------------- | ---------------------------------------- |
| `--joy-blue` / `--primary` | Primary actions, links, and focus states |
| `--joy-pink`               | Playful accent and section labels        |
| `--joy-yellow`             | Warm highlight                           |
| `--joy-mint`               | Positive supporting accent               |
| `--sky`                    | Cool section background                  |
| `--cream`                  | Warm section background                  |
| `--destructive`            | Errors and destructive feedback          |

Use semantic tokens such as `primary`, `background`, and `muted-foreground` in components instead of hard-coded colors.

## Typography

- Display headings: **Baloo 2**, weights 600–800
- Body and interface copy: **Nunito**, weights 400–800
- System sans-serif fonts are the fallback
- Headings use strong hierarchy and concise wording
- Body text should remain readable at mobile sizes and avoid long centered paragraphs

Fonts are loaded from Google Fonts in the root route.

## UI Components

- Cards use rounded corners, light borders, and restrained shadows.
- Primary actions use the blue-to-violet CTA gradient.
- Buttons and interactive controls must have visible hover and keyboard-focus states.
- Use Lucide icons consistently and mark decorative icons with `aria-hidden`.
- Keep navigation labels and action text concise.
- Error messages must be presented in text, not by color alone.

## Motion

Motion should be subtle and informative. The mascot float animation uses a slow six-second cycle. Hover scaling is limited to small values so layout remains stable. Avoid motion that blocks reading or navigation.

## Responsive Design

- Use mobile-first layouts.
- Keep primary content within the established `max-w-5xl` or `max-w-6xl` containers.
- Switch multi-column sections to a single column on small screens.
- Replace desktop navigation with the accessible mobile menu below the medium breakpoint.
- Prevent horizontal overflow and preserve comfortable tap targets.

## Accessibility

Maintain semantic heading order, descriptive links, explicit form labels, sufficient contrast, and alternative text for meaningful media. New color or typography choices should be checked in both supported theme token sets before release.
