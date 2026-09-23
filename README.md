# Htet Aung Shine — Portfolio

My personal developer portfolio built with Next.js — showcasing who I am, my projects, skills, and professional experience, with a custom dark/light themed UI and smooth scroll animations throughout.

**Live Site:** 

## Features

- 🌗 **Dark / Light theme toggle** — persisted via `localStorage`, applied through a `data-theme` attribute on `<html>`.
- 🎬 **Lottie animation** on the homepage hero section.
- 🪄 **Scroll-triggered fade-in animations** across every page, powered by a shared `FadeIn` component using `IntersectionObserver`.
- 📱 **Fully responsive** — custom mobile navigation menu, responsive grids, and breakpoint-based layout shifts.
- 🎨 **Custom design system** — noise-texture background overlay, mesh gradients, reusable button/card styles, and consistent typography via CSS variables.
- 🧩 **Filterable projects grid** by category.
- 📊 **Animated skill bars** grouped into categories, triggered on scroll.
- 📄 **Downloadable CV** as a real PDF file.
- 🔗 **Social & contact hub** with hover-interactive link cards.

## Built With

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Ant Design Icons](https://ant.design/components/icon) (`@ant-design/icons`)
- [react-icons](https://react-icons.github.io/react-icons/) (`Fa*`, `Si*` icon sets)
- [lottie-react](https://github.com/Gamote/lottie-react) — homepage hero animation
- Custom CSS with CSS variables for theming (no CSS-in-JS library — inline styles + a shared `globals.css`)

**Fonts:** [Syne](https://fonts.google.com/specimen/Syne) (display), [DM Mono](https://fonts.google.com/specimen/DM+Mono) (mono/labels), [Fraunces](https://fonts.google.com/specimen/Fraunces) (serif accents)

## Pages

|     Route     |     Description     |
|---------------|---------------------|
| `/home`       | Hero landing page — intro, Lottie animation, quick stats (years learning, projects built, tech stack size), and CTAs into Projects / Contact.
| `/about`      | Personal bio, "who I am," core values (fast & responsive, UI/UX mindset, clean code), full tech stack list, and academic background.
| `/projects`   | Filterable project showcase (by category) with GitHub and live-demo links for each project.
| `/skills`     | Skill bars across 5 categories — Core Languages, Frameworks & Libraries, Tools & Workflow, Technical Concepts, and Soft Skills — plus a "Tools I Use" daily-workflow grid and a "Currently Learning" list.
| `/experience` | Work experience timeline, education history, and a real downloadable CV (PDF).
| `/contact`    | Availability status and direct links to email, GitHub, LinkedIn, WhatsApp, Facebook, Instagram, and Telegram.

## Project Structure

```
src/
├── app/
│   ├── page.js              # Home
│   ├── about/page.js        # About
│   ├── projects/page.js     # Projects
│   ├── skills/page.js       # Skills
│   ├── experience/page.js   # Experience & Resume
│   ├── contact/page.js      # Contact
│   ├── not-found.js         # Custom 404 page
│   ├── layout.js            # Root layout (Header + Footer wrapper)
│   └── globals.css          # Theme variables, base styles, shared component classes
├── component/
│   ├── header.js            # Nav bar with theme toggle & mobile menu
│   └── footer.js
└── assets/
    └── developer-skills.json  # Lottie animation data
```

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/ShineLay24/my-portfolio.git
cd my-portfolio
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Build for Production

```bash
npm run build
npm run start
```

## Contact

- **Email:** shinelay2499@gmail.com
- **GitHub:** [@ShineLay24](https://github.com/ShineLay24)
- **LinkedIn:** [Htet Aung Shine](https://www.linkedin.com/in/htet-aung-shine-290a26368)
- **Telegram:** [@shine_layyy](https://t.me/htetaungshine249)

## License

This project is open for reference, but please don't copy the content (resume, bio, contact details) as your own.