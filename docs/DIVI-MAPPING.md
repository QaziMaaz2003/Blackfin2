# React → Divi mapping

This React site is a **blueprint for a WordPress + Divi build**. Every block is composed from wrapper components
whose names mirror Divi, so each one can be rebuilt 1:1 in the Divi Builder.

Live reference: https://blackfingov.com (WordPress, Divi). Theme reference: the bolt redesign (navy + amber, Playfair Display headings).

## Structure

| React component (`src/components`) | Divi element | Notes |
| --- | --- | --- |
| `<Section tone padding bgImage>` | **Section** | `tone="alt"` = light-grey background, `dark` = navy gradient, `image` = background image with navy overlay (Section > Background > Image + Gradient) |
| `<Row layout="1_2,1_2">` | **Row** + column structure | `layout` is the Divi column structure string (`4_4`, `1_2,1_2`, `1_3,1_3,1_3`, `2_3,1_3`, `1_4 x4`) |
| `<Column>` | **Column** | |

## Modules (`src/components/modules`)

| React | Divi module | Settings to recreate |
| --- | --- | --- |
| `Heading` | **Text** (H2 + eyebrow `<p>` + lead `<p>`) | Italic amber word = `<em>` inside the H2; eyebrow = small caps Poppins |
| `Text` | **Text** | |
| `Button` (`primary`, `ghost`, `outline`, `light`) | **Button** | Save each variant as a Button **preset**. Primary = amber gradient, navy text, pill radius |
| `Image` | **Image** | Rounded 16px + shadow preset |
| `Blurb` | **Blurb** | Icon (or image on top) + title + body. With an image the card uses the Blurb "image above" layout |
| `Counter` | **Number Counter** | Used in the 4-up stats band |
| `Toggle` | **Toggle** / **Accordion** | FAQ |
| `Testimonial` | **Testimonial** | Defined but unused — the live site has no testimonials, so none were invented |
| Blog cards (`et_pb_post`) | **Blog** module, Grid, 3 columns | Fed by WordPress Posts |
| `ContactForm` | **Contact Form** | Fields: Name, Agency, Email, Phone, Message |
| `Header` / `Footer` (`sections/Chrome.tsx`) | **Theme Builder** global header / footer | Menu module + Button module; footer = 3 columns + legal row |

## Reusable blocks (`src/sections/Shared.tsx`) → Divi Library

`PageHero`, `Split`, `CheckList`, `StatsBand`, `CtaBanner` each repeat across pages, so save them to the
**Divi Library** and reuse them (Global or standard layouts).

## Pages

| React route | WordPress page | Contents |
| --- | --- | --- |
| `/` | Home (front page) | Hero → Problem → Partner → Stats → 3 Steps → CTA → Cost vs Benefit → Contracting → Platforms teaser → Mission |
| `/about` | About Us | Mission, convictions, why government, what sets us apart |
| `/platforms` | Platforms | 4 pre-configured products + custom build + CTA |
| `/how-low-code-works` | How Low-Code Works | Explainer, comparison table, steps, FAQ |
| `/blog` | Blog (Posts page) | Blog module |
| `/contact` | Contact Us | Details, form, booking link |

## Design tokens (`src/styles/tokens.css`)

| Token | Value | Divi location |
| --- | --- | --- |
| `--bf-brand-900` / `950` | `#152a45` / `#0d1b30` | Global Colors: *Navy* / *Navy Deep* (headings, dark sections) |
| `--bf-brand-500` / `700` | `#3a72b3` / `#234977` | Global Colors: *Blue* / *Blue Dark* (links, outline buttons) |
| `--bf-brand-50` / `100` | `#eef4fb` / `#d6e4f5` | Global Colors: *Tint* |
| `--bf-accent-400` | `#eea728` | Global Colors: *Amber* (primary button, accents) |
| `--bf-bg-alt` | `#f6f7f9` | Section background for alternating bands |
| `--bf-font-heading` | Playfair Display | Theme Customizer > General > Typography > Header Font |
| `--bf-font-body` | Inter | Theme Customizer > General > Typography > Body Font |
| `--bf-font-ui` | Poppins | Buttons, menu, eyebrows (Module > Design > Font) |
| `--bf-content-width` | 1200px | Theme Customizer > General > Layout > Content Width |

## Rules used so the build stays Divi-friendly

- All copy lives in `src/content/site.tsx` — paste it into the matching module.
- No Tailwind, CSS-in-JS or JS-only effects. The only behavior is scroll fade-in (Divi: Animation > Fade Up), counters (Number Counter), toggles, and the mobile menu — all native Divi features.
- Class names use Divi's `et_pb_*` vocabulary; custom classes are prefixed `bf-` so they can be dropped into *Divi > Theme Options > Custom CSS* without conflicts.
