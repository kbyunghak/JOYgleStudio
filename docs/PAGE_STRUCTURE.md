# Page Structure

All pages share the responsive `SiteHeader`, main content region, and `SiteFooter` defined by the root route.

| Route                     | Page                | Purpose                                                          |
| ------------------------- | ------------------- | ---------------------------------------------------------------- |
| `/`                       | Home                | Introduce the studio and featured product                        |
| `/products`               | Products            | List current JOYgle Studio products                              |
| `/products/read-the-room` | Read The Room       | Present game features, screenshots, characters, and availability |
| `/about`                  | About               | Explain the studio mission and values                            |
| `/support`                | Support             | Provide common questions and contact guidance                    |
| `/privacy`                | Privacy             | Describe product and website privacy practices                   |
| `/privacy/word-rescue`    | Word Rescue Privacy | Publish the Korean product-specific privacy policy               |
| `/contact`                | Contact             | Validate an inquiry and open a pre-filled email                  |
| unmatched                 | Not Found           | Explain the missing route and return visitors home               |

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

The privacy page describes the current website and product data boundaries. It should be reviewed whenever analytics, backend forms, authentication, or third-party services are added.

The product-specific `/privacy/word-rescue` route documents microphone processing, local game storage, children's privacy, user controls, and the support contact for 말해봐! 영단어 구조대. App-store listings should link directly to this stable route.

## Contact

The contact page collects a name, email address, and message in browser state. Validation occurs locally; a successful submission opens the visitor's email application with a pre-filled message. No message is stored by the website.

## Not Found and Error States

Unknown routes render a 404 page with a home link. Unexpected route errors show retry and home actions, while the error-reporting utility forwards supported diagnostic context to Lovable.

## Responsive Behavior

The desktop header shows primary navigation and a contact call to action. At smaller breakpoints, navigation moves into an accessible toggle menu. Content grids collapse to a single column and media scales within the viewport.
