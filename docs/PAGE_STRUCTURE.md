# Page Structure

All pages share the responsive `SiteHeader`, main content region, and `SiteFooter` defined by the root route.

| Route                       | Page                     | Purpose                                                          |
| --------------------------- | ------------------------ | ---------------------------------------------------------------- |
| `/`                         | Home                     | Introduce the studio and featured product                        |
| `/products`                 | Products                 | List current JOYgle Studio products                              |
| `/products/read-the-room`   | Read The Room            | Present game features, screenshots, characters, and availability |
| `/about`                    | About                    | Explain the studio mission and values                            |
| `/support`                  | Support                  | Provide common questions and contact guidance                    |
| `/privacy`                  | Privacy hub              | Select a product-specific policy and language                    |
| `/privacy/speakfall/ko`     | SpeakFall Privacy        | Publish the Korean SpeakFall policy                              |
| `/privacy/speakfall/en`     | SpeakFall Privacy        | Publish the English SpeakFall policy                             |
| `/privacy/read-the-room/ko` | Read The Room Privacy    | Publish the Korean Read The Room policy                          |
| `/privacy/read-the-room/en` | Read The Room Privacy    | Publish the English Read The Room policy                         |
| `/privacy/word-rescue`      | Legacy SpeakFall Privacy | Preserve the previously published Korean URL                     |
| `/contact`                  | Contact                  | Validate an inquiry and open a pre-filled email                  |
| unmatched                   | Not Found                | Explain the missing route and return visitors home               |

## Home

The home page leads with studio positioning, introduces Read The Room, and directs visitors to product details and contact paths. Repository-backed product media is used throughout the page.

## Products

The product index summarizes available projects and links to the Read The Room detail route. Store status is described without presenting unavailable destinations as active downloads.

## Product Detail

The Read The Room page contains the product overview, narrative flow, feature highlights, screenshots, character profiles, and store availability controls.

```text
Episode
  ↓
Choice
  ↓
Stat update
  ↓
Feedback
  ↓
Ending
```

## About

The about page communicates JOYgle Studio's mission, creative direction, and emphasis on playful experiences that support understanding and connection.

## Support

The support page provides frequently asked questions and directs unresolved inquiries to the contact route. It does not claim unavailable account or purchase-support systems.

## Privacy

The `/privacy` page is a policy directory. Each product has separate Korean and English routes so app-store listings can link directly to the applicable language.

SpeakFall policies document microphone processing, local game storage, children's privacy, user controls, and support contact details. Read The Room policies document optional rewarded advertising, third-party providers, local game data, children's privacy, retention, and contact details. The older `/privacy/word-rescue` address remains available for compatibility; new listings should use `/privacy/speakfall/ko`.

## Contact

The contact page collects a name, email address, and message in browser state. Validation occurs locally; a successful submission opens the visitor's email application with a pre-filled message. No message is stored by the website.

## Not Found and Error States

Unknown routes render a 404 page with a home link. Unexpected route errors show retry and home actions, while the error-reporting utility forwards supported diagnostic context to Lovable.

## Responsive Behavior

The desktop header shows primary navigation and a contact call to action. At smaller breakpoints, navigation moves into an accessible toggle menu. Content grids collapse to a single column and media scales within the viewport.
