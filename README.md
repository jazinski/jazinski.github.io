# Chris Jazinski's Portfolio

> A modern, responsive personal portfolio website showcasing software engineering work and experience.

[![Live Site](https://img.shields.io/badge/Live-jazinski.github.io-blue)](https://jazinski.github.io)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 📖 Overview

This is a personal portfolio website built with modern web technologies. It features a clean, professional design optimized for performance, accessibility, and SEO.

### Key Features

- 🎨 **Modern Design** - Clean, professional aesthetic with smooth animations
- 📱 **Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Optimized assets, lazy loading, and minimal bundle size
- ♿ **Accessible** - WCAG AA compliant with semantic HTML
- 🔍 **SEO Ready** - Meta tags, Open Graph, and structured data
- 🌙 **Dark Mode** - System preference aware (coming soon)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework with latest features |
| **TypeScript** | Type-safe development |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS** | Utility-first styling |
| **React Router v7** | Client-side routing |
| **React Icons** | Icon library |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/jazinski/jazinski.github.io.git
cd jazinski.github.io

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint checks |
| `pnpm deploy` | Deploy to GitHub Pages |

---

## 📁 Project Structure

```
jazinski.github.io/
├── public/              # Static assets
│   ├── favicon.ico
│   └── og-image.png
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Breadcrumb.tsx
│   │   └── Navigation.tsx
│   ├── pages/           # Route pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Portfolio.tsx
│   │   └── Contact.tsx
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project metadata
```

---

## 🎨 Design Principles

### Performance First
- **Bundle Size:** Optimized and monitored for fast load times
- **Code Splitting:** Route-based lazy loading with React.lazy()
- **Asset Optimization:** Compressed images, modern formats (WebP, AVIF)

### Accessibility
- **WCAG AA Compliance:** Minimum AA level contrast and semantic markup
- **Keyboard Navigation:** All interactive elements are keyboard accessible
- **Screen Reader Support:** Proper ARIA labels and landmark regions

### SEO Best Practices
- **Meta Tags:** Dynamic page titles and descriptions
- **Open Graph:** Social media preview cards
- **Structured Data:** JSON-LD schema for portfolio items

---

## 🚢 Deployment

### GitHub Pages

This site is automatically deployed to GitHub Pages at **https://jazinski.github.io**

#### Manual Deployment

```bash
pnpm deploy
```

This command:
1. Builds the production bundle (`pnpm build`)
2. Pushes the `dist/` folder to the `gh-pages` branch
3. GitHub Pages serves the updated content

#### Automatic Deployment

If GitHub Actions is configured, the site deploys automatically on pushes to `main`.

---

## 🔧 Configuration

### Environment Variables

No environment variables required for this static site.

### Build Configuration

- **Base URL:** `/` (root domain)
- **Output Directory:** `dist/`
- **Source Maps:** Enabled for debugging

---

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'feat: add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📝 Git Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready code |
| `feature/*` | New features |
| `fix/*` | Bug fixes |
| `gh-pages` | Auto-generated deployment branch |

### Commit Conventions

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation updates
- `style:` - Code style changes (no logic changes)
- `refactor:` - Code refactoring
- `chore:` - Maintenance tasks

---

## 📚 Documentation

- **[AGATA.md](./AGATA.md)** - Agent rules and project conventions
- **Code Comments** - Inline documentation for complex logic

---

## 📄 License

© 2024-2025 Chris Jazinski. All rights reserved.

---

## 🙏 Acknowledgments

Built with:
- [React](https://react.dev/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Icons](https://react-icons.github.io/react-icons/) - Icons
- [GitHub Pages](https://pages.github.com/) - Hosting

---

<p align="center">
  <b>Maintained by Chris Jazinski • Built with ❤️ using React + Vite</b>
</p>
