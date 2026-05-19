# Personal Portfolio

A premium, modern personal portfolio built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, **React Router**, **shadcn/ui** patterns, and **Lucide** icons.

## Features

- Dark/light theme toggle
- Glassmorphism UI with animated gradients
- Framer Motion section reveals & micro-interactions
- Scroll progress indicator & scroll-to-top
- Command palette (`Ctrl+K` / `Cmd+K`)
- Project filter & detail modal
- Expandable experience timeline
- Animated skill progress bars
- Contact form with validation (EmailJS/Formspree ready)
- GitHub contribution chart section
- Blog placeholder section
- Loading screen & responsive mobile menu
- SEO meta tags

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Customize Your Content

Edit files in `src/data/`:

| File | Content |
|------|---------|
| `profile.js` | Name, contact, social links, tagline |
| `skills.js` | Skill categories & levels |
| `experience.js` | Work history & timeline |
| `projects.js` | Projects with full detail fields |
| `achievements.js` | Certifications & awards |
| `navigation.js` | Nav & command palette items |

### Required updates

1. **`src/data/profile.js`** — Set `fullName`, `email`, `phone`, and social URLs
2. **`public/resume.pdf`** — Add your resume PDF for download
3. **`index.html`** — Update `<title>` and meta description
4. **Profile photo** — Replace the hero initial avatar with an image in `src/sections/Hero.jsx`

### Contact form (production)

Wire `src/sections/Contact.jsx` `handleSubmit` to:

- [Formspree](https://formspree.io)
- [EmailJS](https://www.emailjs.com)
- Your own API endpoint

## Project Structure

```
src/
├── animations/     # Framer Motion variants
├── components/
│   ├── common/     # Shared UI (glow, scroll, counters)
│   ├── layout/     # Navbar, Footer, Command palette
│   └── ui/         # shadcn-style primitives
├── data/           # All portfolio content
├── hooks/          # Theme, scroll spy, counters
├── layouts/        # Main layout shell
├── pages/          # Route pages
├── sections/       # Page sections
└── utils/          # cn() helper
```

## Tech Stack

- React 19 + Vite 6
- Tailwind CSS 4
- Framer Motion 12
- React Router 7
- Radix UI primitives (shadcn pattern)
- Lucide React
- cmdk (command palette)

## Deploy

Deploy the `dist` folder to **Vercel**, **Netlify**, or **GitHub Pages**:

```bash
npm run build
```

For GitHub Pages, set `base` in `vite.config.js` to your repo name.

---

Built for **Java Full Stack Developer** portfolio — React, Spring Boot, AWS.
