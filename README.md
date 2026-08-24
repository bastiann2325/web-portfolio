# Juan Sebastián — Portfolio

Personal portfolio site built with React and Vite. Single page, fully bilingual (ES/EN),
dark-mode only, with a working contact form (no backend — EmailJS).

**Live:** [web-portfolio-1mic.onrender.com](https://web-portfolio-1mic.onrender.com/)

This repo is public on purpose: feel free to fork it and use it as a starting point for your
own portfolio.

## Features

- Sections: About, Experience, Skills, Projects (hidden by default, see [Feature flags](#feature-flags)) and Contact
- Language switch (ES/EN) with `i18next`, auto-detects the visitor's browser language and
  remembers the choice in `localStorage`
- Contact form that sends real emails via [EmailJS](https://www.emailjs.com/), no server needed
- Design system with tokens/theme layer on top of `styled-components`
- Section entrance animations with `framer-motion`

## Tech stack

| Category         | Tools                                                |
| ----------------- | ----------------------------------------------------- |
| Framework          | React 19, Vite                                        |
| Styling            | styled-components (tokens + theme)                    |
| Animation          | Framer Motion                                         |
| i18n               | i18next, react-i18next, i18next-browser-languagedetector |
| Icons              | lucide-react, react-icons                              |
| Contact form       | @emailjs/browser                                       |
| Linting            | oxlint                                                 |
| Package manager    | pnpm                                                   |
| Deployment         | Render (static site)                                   |

## Project structure

Components follow Atomic Design. Each component is a folder with a `.jsx` and its matching
`.styles.js` — pages only compose templates, they don't have their own styles file.

```
src/
├─ components/
│  ├─ atoms/         # Button, Chip, Container, DevAvatar, NavLink...
│  ├─ molecules/      # ContactField, Footer, LanguageCard, SkillIcon...
│  ├─ organisms/       # Navbar, AboutSection, ExperienceSection, ContactSection...
│  └─ templates/       # PortfolioTemplate (composes every section)
├─ pages/
│  └─ HomePage/         # the only page of the site
├─ design-system/
│  ├─ tokens/           # raw values (colors, spacing, typography...)
│  └─ theme/             # maps tokens to semantic roles, consumed via ThemeProvider
├─ hooks/                # useContactForm
├─ config/                # feature flags, contact links
├─ locales/                # es/en translation.json
├─ i18n/                    # i18next setup
└─ utils/                    # tech icon lookup, language flag lookup
```

## Getting started

### Prerequisites

- Node 18+
- pnpm (`corepack pnpm` or `npx pnpm` if `pnpm` isn't recognized in your shell)

### Setup

```bash
git clone https://github.com/bastiann2325/web-portfolio.git
cd web-portfolio
pnpm install
cp .env.example .env
```

Fill in `.env` with your own EmailJS credentials (see below), then:

```bash
pnpm dev
```

### Environment variables

The contact form sends emails through EmailJS — no custom backend. You need a free account at
[emailjs.com](https://www.emailjs.com/) with an Email Service and a Template that uses the
`{{name}}`, `{{email}}` and `{{message}}` variables.

| Variable                     | Description                          |
| ----------------------------- | -------------------------------------- |
| `VITE_EMAILJS_SERVICE_ID`      | Email Service ID (Email Services tab)   |
| `VITE_EMAILJS_TEMPLATE_ID`     | Template ID (Email Templates tab)       |
| `VITE_EMAILJS_PUBLIC_KEY`      | Public Key (Account → General)          |

### Feature flags

`src/config/features.js` holds simple on/off switches for optional sections:

```js
export const SHOW_PROJECTS = false; // set to true once you have projects to showcase
```

## Available scripts

| Command         | Description                          |
| ---------------- | -------------------------------------- |
| `pnpm dev`         | Start the Vite dev server               |
| `pnpm build`        | Type-check-free production build to `dist/` |
| `pnpm preview`       | Preview the production build locally      |
| `pnpm lint`           | Run oxlint                                  |

## Deployment

Deployed on [Render](https://render.com) as a static site:

- **Build command:** `pnpm install --frozen-lockfile; pnpm run build`
- **Publish directory:** `dist`
- **Environment:** the 3 `VITE_EMAILJS_*` variables above, set in the Render dashboard (never
  committed)

Any static host that runs the build command and serves `dist/` works the same way (Vercel,
Netlify, GitHub Pages, etc).

## License

MIT — see [LICENSE](LICENSE). Use it, fork it, adapt it for your own portfolio.
