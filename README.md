# Blackfin2 — Blackfin Cloud Government

React (Vite + TypeScript) build of the Blackfin Cloud Government website, structured as a **blueprint for a later WordPress + Divi build**.

- Content reference: https://blackfingov.com (WordPress / Divi)
- Theme reference: https://homepage-redesign-b07k.bolt.host
- Images: Unsplash

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
```

## Structure

```
src/
  components/divi/      Section / Row / Column  (Divi structure wrappers)
  components/modules/   Heading, Button, Blurb, Counter, Toggle … (Divi modules)
  content/site.tsx      ALL copy and image URLs
  sections/             Header/Footer + reusable blocks (Divi Library layouts)
  pages/                Home, About, Platforms, How Low-Code Works, Blog, Contact
  styles/tokens.css     Colors, fonts, spacing (→ Divi Theme Customizer)
docs/
  DIVI-MAPPING.md       React component → Divi module table + tokens
  WORDPRESS-MIGRATION.md  Migration steps and open content questions
```

See [docs/DIVI-MAPPING.md](docs/DIVI-MAPPING.md) and [docs/WORDPRESS-MIGRATION.md](docs/WORDPRESS-MIGRATION.md).
