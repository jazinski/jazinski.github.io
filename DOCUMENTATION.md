# jazinski.github.io Documentation

Welcome to the documentation for Chris Jazinski's personal portfolio website.

## 📚 Table of Contents

- [Architecture Overview](#architecture-overview)
- [Component API Reference](#component-api-reference)
- [Routing Structure](#routing-structure)
- [State Management](#state-management)
- [Styling Guidelines](#styling-guidelines)
- [Performance Optimization](#performance-optimization)
- [Deployment Guide](#deployment-guide)

---

## Architecture Overview

This portfolio is built with modern React best practices:

```
┌─────────────────────────────────────────────┐
│              Browser Router                  │
├─────────────────────────────────────────────┤
│                   App                        │
│  ┌──────────────────────────────────────┐  │
│  │         Layout Components             │  │
│  │  ┌────────┐  ┌────────┐  ┌────────┐  │  │
│  │  │ Header │  │ Routes │  │ Footer │  │  │
│  │  └────────┘  └────────┘  └────────┘  │  │
│  └──────────────────────────────────────┘  │
│                                              │
│  ┌──────────────────────────────────────┐  │
│  │           Page Components             │  │
│  │  Home | About | Projects | Contact   │  │
│  └──────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

### Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **UI Framework** | React 19 | Component-based UI |
| **Routing** | React Router v7 | Client-side navigation |
| **Styling** | Tailwind CSS | Utility-first CSS |
| **Build Tool** | Vite 6.x | Fast dev server & bundler |
| **Type System** | TypeScript | Static type checking |
| **Icons** | React Icons | Icon library |

---

## Component API Reference

### Layout Components

#### Header

Navigation header with responsive mobile menu.

```tsx
import { Header } from '@/components/Header';

// Usage
<Header />

// Props: None (self-contained)
```

**Features:**
- Responsive navigation
- Mobile hamburger menu
- Active route highlighting
- Smooth scroll behavior

---

#### Footer

Site footer with social links and copyright.

```tsx
import { Footer } from '@/components/Footer';

// Usage
<Footer />

// Props: None (self-contained)
```

**Features:**
- Social media links
- Copyright year (auto-updated)
- Responsive layout

---

#### Breadcrumb

Navigation breadcrumb component.

```tsx
import { Breadcrumb } from '@/components/Breadcrumb';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    path: string;
  }>;
}

// Usage
<Breadcrumb 
  items={[
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'React App', path: '/projects/react-app' }
  ]} 
/>
```

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `items` | `BreadcrumbItem[]` | Yes | Array of breadcrumb items |

---

### Page Components

#### Home

Landing page with hero section and introduction.

```tsx
import { Home } from '@/pages/Home';

// Usage in routing
<Route path="/" element={<Home />} />

// Props: None
```

**Sections:**
- Hero banner with CTA
- Introduction paragraph
- Featured projects preview
- Skills overview

---

#### About

About me page with professional background.

```tsx
import { About } from '@/pages/About';

// Usage in routing
<Route path="/about" element={<About />} />

// Props: None
```

**Sections:**
- Professional summary
- Work experience timeline
- Education background
- Certifications

---

#### Projects

Project showcase with filtering.

```tsx
import { Projects } from '@/pages/Projects';

// Usage in routing
<Route path="/projects" element={<Projects />} />

// Props: None
```

**Features:**
- Project cards with descriptions
- Technology tags
- Live demo links
- GitHub repository links
- Filter by technology

---

#### Portfolio

Portfolio gallery view.

```tsx
import { Portfolio } from '@/pages/Portfolio';

// Usage in routing
<Route path="/portfolio" element={<Portfolio />} />

// Props: None
```

**Features:**
- Image gallery layout
- Lightbox for image viewing
- Category filtering
- Responsive grid

---

#### Contact

Contact form with validation.

```tsx
import { Contact } from '@/pages/Contact';

// Usage in routing
<Route path="/contact" element={<Contact />} />

// Props: None
```

**Features:**
- Contact form with validation
- Email integration (mailto link)
- Social media links
- Location map (optional)

---

## Routing Structure

### Route Configuration

```tsx
// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
```

### Navigation Links

```tsx
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
];
```

### Route Protection

Currently, all routes are public. No authentication required.

---

## State Management

### Local Component State

Use React's built-in hooks for local state:

```tsx
import { useState, useEffect } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<Data | null>(null);
  
  useEffect(() => {
    // Fetch data or setup
  }, []);
  
  return <div>...</div>;
}
```

### URL State

Use React Router for URL-based state:

```tsx
import { useSearchParams, useLocation } from 'react-router-dom';

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  
  const category = searchParams.get('category') || 'all';
  
  const filterByCategory = (cat: string) => {
    setSearchParams({ category: cat });
  };
  
  return <div>...</div>;
}
```

### Global State (Future)

For future global state needs, consider:
- **Zustand** - Lightweight state management
- **Jotai** - Atomic state management
- **React Context** - For simple global state

---

## Styling Guidelines

### Tailwind CSS

This project uses Tailwind CSS for styling.

#### Utility Classes

```tsx
// Layout
<div className="flex items-center justify-between">
<div className="grid grid-cols-3 gap-4">

// Spacing
<div className="p-4 m-2">
<div className="px-6 py-3">

// Typography
<h1 className="text-3xl font-bold">
<p className="text-gray-600">

// Colors
<button className="bg-blue-500 hover:bg-blue-700">
<div className="border border-gray-200">

// Responsive
<div className="w-full md:w-1/2 lg:w-1/3">
```

#### Custom Theme

Extend Tailwind theme in `tailwind.config.js`:

```javascript
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#3B82F6',
          secondary: '#10B981',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
```

### Component Styling Patterns

#### Container Pattern

```tsx
<div className="container mx-auto px-4">
  {/* Content */}
</div>
```

#### Card Pattern

```tsx
<div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
  <h3 className="text-xl font-semibold mb-2">{title}</h3>
  <p className="text-gray-600">{description}</p>
</div>
```

#### Button Pattern

```tsx
<button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
  Click Me
</button>

<button className="px-6 py-3 border-2 border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-50 transition-colors">
  Secondary Button
</button>
```

### Responsive Design

Follow mobile-first approach:

```tsx
// Mobile-first responsive design
<div className="
  w-full        /* Mobile: full width */
  md:w-1/2      /* Tablet: half width */
  lg:w-1/3      /* Desktop: third width */
  xl:w-1/4      /* Large desktop: quarter width */
">
```

---

## Performance Optimization

### Code Splitting

Use React.lazy for route-based code splitting:

```tsx
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('@/pages/Projects'));
const Portfolio = lazy(() => import('@/pages/Portfolio'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Suspense>
  );
}
```

### Image Optimization

Optimize images with:
- **WebP/AVIF formats** - Modern image formats
- **Lazy loading** - Load images on scroll
- **Responsive images** - Different sizes for different viewports

```tsx
<img 
  src="/image.webp" 
  alt="Description" 
  loading="lazy"
  className="w-full h-auto"
/>
```

### Bundle Analysis

Analyze bundle size:

```bash
# Install bundle analyzer
npm install -D rollup-plugin-visualizer

# Add to vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    // ... other plugins
    visualizer({ open: true }),
  ],
});

# Build and analyze
pnpm build
```

### Performance Metrics

Monitor Core Web Vitals:
- **LCP** (Largest Contentful Paint) < 2.5s
- **FID** (First Input Delay) < 100ms
- **CLS** (Cumulative Layout Shift) < 0.1

---

## Deployment Guide

### GitHub Pages Deployment

#### Manual Deployment

```bash
# Build the project
pnpm build

# Deploy to GitHub Pages
pnpm deploy
```

#### Automatic Deployment (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
          
      - name: Install pnpm
        run: npm install -g pnpm
        
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Custom Domain Setup

1. Add CNAME file to `public/`:
   ```
   www.yourdomain.com
   ```

2. Configure DNS:
   - **A Record**: Point to GitHub Pages IPs
   - **CNAME**: Point www to `jazinski.github.io`

3. Enable HTTPS in GitHub Pages settings

### Environment Variables

For environment-specific configuration:

```typescript
// src/config/env.ts
export const config = {
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://jazinski.github.io',
  analyticsId: import.meta.env.VITE_GA_TRACKING_ID || '',
};
```

```bash
# .env.production
VITE_SITE_URL=https://jazinski.github.io
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X
```

---

## Development Guidelines

### File Naming

- **Components**: PascalCase (e.g., `Header.tsx`, `Footer.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`, `apiClient.ts`)
- **Types**: PascalCase (e.g., `types.ts`, `interfaces.ts`)
- **Styles**: kebab-case (e.g., `custom-styles.css`)

### Import Organization

```typescript
// 1. React imports
import { useState, useEffect } from 'react';

// 2. Third-party libraries
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

// 3. Internal components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// 4. Utilities and types
import { formatDate } from '@/utils/formatDate';
import type { Project } from '@/types';

// 5. Styles
import './styles.css';
```

### Component Structure

```tsx
// 1. Imports
import { useState } from 'react';

// 2. Types
interface MyComponentProps {
  title: string;
  description?: string;
}

// 3. Component
export const MyComponent: React.FC<MyComponentProps> = ({ 
  title, 
  description 
}) => {
  // State
  const [isOpen, setIsOpen] = useState(false);
  
  // Effects
  useEffect(() => {
    // Side effects
  }, []);
  
  // Handlers
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  // Render
  return (
    <div className="my-component">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
};
```

---

## Troubleshooting

### Common Issues

#### Build Errors

**Issue**: Build fails with module not found
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Issue**: TypeScript errors in build
```bash
# Check types
pnpm type-check

# Fix issues or update tsconfig.json
```

#### Deployment Issues

**Issue**: GitHub Pages shows 404
- Check `base` in `vite.config.ts` matches repository name
- Verify `gh-pages` branch exists
- Check GitHub Pages settings (source: gh-pages branch)

**Issue**: Styles not loading
- Ensure `base` URL is correct in Vite config
- Check Tailwind is properly configured
- Verify CSS imports in `main.tsx`

#### Development Issues

**Issue**: Hot reload not working
```bash
# Restart dev server
pnpm dev

# Clear Vite cache
rm -rf node_modules/.vite
```

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

---

## Support

For issues or questions:
- **Email**: chris@example.com
- **GitHub Issues**: [jazinski.github.io/issues](https://github.com/jazinski/jazinski.github.io/issues)

---

**Maintained by Chris Jazinski**

Built with ❤️ using React + Vite + TypeScript