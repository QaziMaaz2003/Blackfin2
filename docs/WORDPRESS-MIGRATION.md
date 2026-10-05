# Moving this site to WordPress + Divi

The live site (https://blackfingov.com) already runs WordPress with the Divi theme, so the migration is a
**re-build inside Divi using this React site as the design spec**, not an export/import.

## Steps

1. **Back up** the live site (or work on a staging copy) before changing anything.
2. **Theme settings** — in *Divi > Theme Customizer*:
   - General > Typography: Header font *Playfair Display*, Body font *Inter*
   - General > Layout: content width 1200px
   - General > Color Palette: add the colors from `docs/DIVI-MAPPING.md`
   - Header & Navigation: upload the logo, primary menu = Home, About Us, Platforms, How Low-Code Works, Blog, Contact Us; add a CTA button "Schedule a Call"
3. **Presets** — create Button presets (primary / ghost / outline), Blurb, Toggle and Image presets so styling is set once.
4. **Pages** — create the six pages listed in `DIVI-MAPPING.md`. Rebuild each top-to-bottom: one Divi Section per React `<Section>`, same row structure, copy from `src/content/site.tsx`.
5. **Divi Library** — build `PageHero`, `Split`, `StatsBand` and `CtaBanner` once and reuse them.
6. **Theme Builder** — global Header and Footer from `src/sections/Chrome.tsx`.
7. **Blog** — add posts in *Posts*, then place a Blog module (Grid, 3 columns) on the Blog page. The three cards in the React site are sample content only.
8. **Contact** — replace the React form with the Divi Contact Form module (set the recipient to `contracts@blackfincloud.com`).
9. **Images** — the React site hot-links Unsplash. Download the chosen photos into the Media Library (Unsplash licence allows this) instead of hot-linking.
10. **Custom CSS** — only what Divi's controls can't express (the comparison table, hero card glass effect) goes into *Theme Options > Custom CSS*; copy the matching `bf-*` rules from `src/styles/main.css`.

## Content to confirm with the client

- **Los Angeles County Master Services Agreement** — the live page shows a blank ("holder of the ____________"). The React copy uses a neutral line; confirm the exact agreement name.
- **Contact details** — (530) 551-0155, contracts@blackfincloud.com, 2055 Pine Street, Redding, CA 96001. This is a government site, so no other office address should appear anywhere.
- **Booking link** — every call-to-action button ("Schedule a Call", "Book your session", "Get started", etc.) opens https://calendly.com/blackfincloud/30min?back=1. Set the Divi Button link URL to this on each one.
- **Logo** — the black fish (`public/logo-black.png`) goes in *Theme Customizer > Header & Navigation > Logo*; the white fish (`public/logo-white.png`) is for the dark footer.
- **Mission statement** — attributed to Owen Scott, linked to https://www.linkedin.com/in/owenbscott.
- **Stats band** (2 weeks / 48 hours / 30 minutes / 100% owned) — derived from claims already on the live page.
- **Testimonials** — none on the live site, so none were added.
- **Placeholders on the live page** ("still editing this section", "TBD" links, Archives/Categories widgets) were not carried over.
- **Privacy Policy** — the live footer links to one; add the page in WordPress.
