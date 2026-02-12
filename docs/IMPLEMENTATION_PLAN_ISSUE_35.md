# Implementation Plan: Gold & Glow UI/UX Redesign
## Issue #35 - Detailed Atomic Changes

**Branch:** `agata/task-20-gh-fix-issue-35-ui-ux-implementation`  
**Design Document:** [REDESIGN_PLAN_GOLD_GLITCH.md](./REDESIGN_PLAN_GOLD_GLITCH.md)  
**Status:** Planning Complete → Ready for Implementation

---

## Overview

This plan breaks down the Gold & Glow theme implementation into atomic, testable changes. Each change is isolated, verifiable, and follows the phased approach from the redesign plan.

---

## Phase 1: Design System Foundation

### 1.1 Update Tailwind Configuration
**File:** `tailwind.config.js`

**Changes:**
- Add custom color palette (dark backgrounds, gold variants)
- Add font families (Inter for headings, Space Grotesk for body)
- Add custom box shadows (glow effects)
- Add custom animations

**Atomic Tasks:**
```javascript
// 1.1.1: Add color palette
colors: {
  jazinski: {
    blue: '#3d5a73',
    gold: {
      DEFAULT: '#c9a65c',
      light: '#e6c068',
      dark: '#a67c2b',
    },
  },
  dark: {
    bg: '#0f1419',
    card: '#1a1f26',
    cardHover: '#1e2230',
    border: '#2a3038',
  },
  glow: {
    weak: 'rgba(201, 166, 92, 0.2)',
    medium: 'rgba(201, 166, 92, 0.3)',
    strong: 'rgba(201, 166, 92, 0.5)',
  }
}

// 1.1.2: Add font families
fontFamily: {
  display: ['Inter', 'sans-serif'],
  body: ['Space Grotesk', 'sans-serif'],
}

// 1.1.3: Add custom shadows
boxShadow: {
  'glow': '0 0 30px rgba(201, 166, 92, 0.3)',
  'glow-strong': '0 0 50px rgba(201, 166, 92, 0.5)',
  'card-hover': '0 25px 50px -12px rgba(201, 166, 92, 0.5)',
}

// 1.1.4: Add custom animations
extend: {
  animation: {
    'float': 'float 6s ease-in-out infinite',
    'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
  },
  keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-20px)' },
    },
    'glow-pulse': {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.7' },
    }
  }
}
```

---

### 1.2 Create Component Styles
**File:** `src/styles/components.css` (new)

**Changes:**
- Create geometric card component styles
- Create gold glow text effects
- Create button variants (primary, secondary)
- Create form input styles
- Create animation classes

**Atomic Tasks:**

#### 1.2.1: Geometric Card Component
```css
@layer components {
  .card-geometric {
    @apply bg-gradient-to-br from-dark-card to-[#1c2028];
    @apply border border-dark-border rounded-lg;
    @apply transition-all duration-300;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%);
  }

  .card-geometric:hover {
    @apply -translate-y-2 -rotate-1;
    @apply shadow-card-hover border-jazinski-gold;
  }
}
```

#### 1.2.2: Gold Glow Text Effect
```css
@layer components {
  .gold-glow {
    @apply text-jazinski-gold;
    text-shadow: 0 0 30px rgba(201, 166, 92, 0.3);
  }

  .gold-glow-strong {
    @apply text-jazinski-gold;
    text-shadow: 0 0 50px rgba(201, 166, 92, 0.6),
                 0 0 30px rgba(201, 166, 92, 0.4),
                 0 0 15px rgba(201, 166, 92, 0.3);
  }
}
```

#### 1.2.3: Button Components
```css
@layer components {
  .btn-primary {
    @apply bg-gradient-to-r from-jazinski-gold to-jazinski-gold-light;
    @apply text-gray-900 font-bold px-8 py-3 rounded-lg;
    @apply shadow-glow transition-all duration-300;
    @apply hover:scale-105 hover:shadow-glow-strong;
  }

  .btn-secondary {
    @apply border-2 border-jazinski-gold text-jazinski-gold;
    @apply font-bold px-8 py-3 rounded-lg;
    @apply transition-all duration-300;
    @apply hover:bg-jazinski-gold hover:text-gray-900;
  }
}
```

#### 1.2.4: Form Input Styles
```css
@layer components {
  .input-dark {
    @apply bg-dark-card border border-dark-border;
    @apply text-white placeholder-gray-500;
    @apply px-4 py-3 rounded-lg;
    @apply focus:outline-none focus:ring-2 focus:ring-jazinski-gold;
    @apply focus:border-jazinski-gold;
    @apply transition-all duration-300;
  }
}
```

#### 1.2.5: Scroll Animation Classes
```css
@layer utilities {
  .animate-on-scroll {
    @apply opacity-0 translate-y-8;
    @apply transition-all duration-700;
  }

  .animate-on-scroll.animate-in {
    @apply opacity-100 translate-y-0;
  }
}
```

---

### 1.3 Update Base Styles
**File:** `src/index.css`

**Changes:**
- Add Google Fonts import for Inter and Space Grotesk
- Update body defaults for dark theme
- Add smooth scroll behavior
- Import new components.css

**Atomic Tasks:**

#### 1.3.1: Add Font Imports
```css
/* Add at top of file */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;800;900&family=Space+Grotesk:wght@400;500;700&display=swap');
```

#### 1.3.2: Update Base Styles
```css
@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply font-body bg-dark-bg text-white;
    @apply antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display font-bold;
  }
}
```

#### 1.3.3: Import Components
```css
/* Add after Tailwind imports */
@import './styles/components.css';
```

---

### 1.4 Create Design System Documentation
**File:** `docs/DESIGN_SYSTEM.md` (new)

**Content:**
- Component usage examples
- Color palette reference
- Typography scale
- Spacing guidelines
- Animation patterns

---

## Phase 2: Core Pages Implementation

### 2.1 Home Page Redesign
**File:** `src/pages/Home.tsx`

**Major Sections:**
1. Hero Section (two-column layout)
2. Stats Bar (overlapping hero)
3. Services Grid (3-column, 6 cards)
4. Featured Projects (from Mockup3)
5. CTA Section

**Atomic Tasks:**

#### 2.1.1: Hero Section
```tsx
// Replace current hero with:
// - Two-column layout (60/40 split)
// - Left: Large heading with gold-glow class
// - Animated background with geometric shapes
// - Primary + Secondary CTAs
```

#### 2.1.2: Stats Bar
```tsx
// Add below hero:
// - Full-width card
// - 4 columns: Years, Projects, Clients, Technologies
// - Gold accent borders (top/bottom)
// - Negative margin to overlap hero
```

#### 2.1.3: Services Grid
```tsx
// Update services section:
// - 3-column grid on desktop, 1-column mobile
// - Use card-geometric class
// - Icon containers with gold gradient background
// - Hover lift effect
```

#### 2.1.4: Featured Projects Section
```tsx
// Port from Home-Mockup3.tsx:
// - Keep existing project cards
// - Apply card-geometric styling
// - Update hover effects with gold borders
```

#### 2.1.5: CTA Section
```tsx
// Add at bottom:
// - Centered layout
// - Gradient background
// - Large heading
// - btn-primary for main CTA
```

---

### 2.2 About Page Creation
**File:** `src/pages/About.tsx`

**Major Sections:**
1. Profile Header
2. Bio Section (two-column)
3. Experience Timeline
4. Values/Beliefs Grid

**Atomic Tasks:**

#### 2.2.1: Profile Header
```tsx
// Create header section:
// - Large decorative element (geometric shape or avatar placeholder)
// - Name with gold-glow effect
// - Title/tagline with tracking-wide
```

#### 2.2.2: Bio Section
```tsx
// Two-column layout:
// - Left (60%): Main bio text paragraphs
// - Right (40%): Quick facts list with gold bullets
```

#### 2.2.3: Experience Timeline
```tsx
// Vertical timeline:
// - Gold dots for each milestone
// - card-geometric for experience cards
// - Dates in gold text
// - animate-on-scroll for each entry
```

#### 2.2.4: Values Grid
```tsx
// 2x2 grid:
// - card-geometric for each value card
// - Icon + title + description
// - Hover effects
```

---

### 2.3 Projects Page Creation
**File:** `src/pages/Projects.tsx` (new)

**Major Sections:**
1. Page Header
2. Featured Project Hero
3. Projects Grid

**Atomic Tasks:**

#### 2.3.1: Page Header
```tsx
// Create header:
// - Large title with gold-glow
// - Subtitle/description
// - GitHub link with btn-secondary
```

#### 2.3.2: Featured Project Hero
```tsx
// Full-width hero:
// - Large screenshot placeholder
// - Project details overlay
// - Tech stack tags (gold borders)
// - Links (GitHub, Live Demo)
```

#### 2.3.3: Projects Grid
```tsx
// 3-column grid:
// - card-geometric for each project
// - Thumbnail placeholder
// - Title, description, tech stack
// - GitHub + Live demo buttons
```

---

### 2.4 Skills Page Update
**File:** `src/pages/Skills.tsx`

**Major Sections:**
1. Page Header
2. Skills Categories (Frontend, Backend, Cloud, Tools)
3. Skill Pills

**Atomic Tasks:**

#### 2.4.1: Page Header
```tsx
// Update header:
// - Title with gold-glow
// - Description text
```

#### 2.4.2: Category Cards
```tsx
// Update each category:
// - card-geometric wrapper
// - Category icon with gold gradient background
// - Category title
```

#### 2.4.3: Skill Pills
```tsx
// Update skill pill styling:
// - Border with jazinski-gold
// - Hover: fill with gold, text becomes dark
// - Smooth transition
```

---

### 2.5 Services Page Update
**File:** `src/pages/Services.tsx`

**Major Sections:**
1. Page Header
2. Service Cards (detailed)
3. Process Section

**Atomic Tasks:**

#### 2.5.1: Page Header
```tsx
// Update header:
// - Title with gold-glow
// - Subtitle
```

#### 2.5.2: Service Cards
```tsx
// Update each service card:
// - card-geometric
// - Icon with gold gradient background
// - Title, description, features list
// - Pricing (if applicable)
// - CTA button (btn-primary)
```

#### 2.5.3: Process Section
```tsx
// Add process timeline:
// - Horizontal or vertical steps
// - Numbered steps with gold accent numbers
// - Brief description for each step
```

---

### 2.6 Contact Page Creation
**File:** `src/pages/Contact.tsx`

**Major Sections:**
1. Page Header
2. Contact Methods Grid
3. Contact Form

**Atomic Tasks:**

#### 2.6.1: Page Header
```tsx
// Create header:
// - Title with gold-glow
// - Subtitle encouraging reach out
```

#### 2.6.2: Contact Methods Grid
```tsx
// 3-column grid:
// - Email card (card-geometric)
// - Social links card
// - Location/timezone card
// - Large icons with gold color
```

#### 2.6.3: Contact Form
```tsx
// Form section:
// - Full-width card-geometric container
// - Name input (input-dark)
// - Email input (input-dark)
// - Message textarea (input-dark)
// - Submit button (btn-primary, full-width)
```

---

## Phase 3: Component Updates

### 3.1 Header Component Update
**File:** `src/components/Header.tsx`

**Changes:**
- Update background to dark-bg
- Apply gold hover effects to nav links
- Add mobile menu (slide-in from right)
- Gold accent for active page

**Atomic Tasks:**

#### 3.1.1: Desktop Navigation
```tsx
// Update styling:
// - Dark background with slight transparency
// - Text links: hover:text-jazinski-gold
// - Active link: border-b-2 border-jazinski-gold
```

#### 3.1.2: Mobile Menu
```tsx
// Create mobile menu:
// - Hamburger icon (gold on hover)
// - Slide-in menu from right
// - Backdrop blur effect
// - Close button with gold accent
```

---

### 3.2 Footer Component Update
**File:** `src/components/Footer.tsx`

**Changes:**
- Update background to dark-card
- Gold borders (top)
- Social links with gold hover

**Atomic Tasks:**

#### 3.2.1: Footer Styling
```tsx
// Update:
// - bg-dark-card
// - border-t-2 border-jazinski-gold
// - Text links: hover:text-jazinski-gold
```

---

## Phase 4: Interactive Enhancements

### 4.1 Scroll Animations
**File:** `src/utils/scrollAnimations.ts` (new)

**Implementation:**
```typescript
// Create IntersectionObserver utility
// Add animate-on-scroll to cards and sections
// Trigger animate-in class on viewport entry
```

---

### 4.2 Smooth Anchor Scrolling
**File:** `src/App.tsx`

**Implementation:**
```typescript
// Add scroll offset for sticky header
// Smooth scroll behavior
```

---

## Phase 5: Testing & Optimization

### 5.1 Responsive Testing
- Mobile (375px, 425px)
- Tablet (768px, 1024px)
- Desktop (1440px, 1920px)

### 5.2 Browser Testing
- Chrome
- Firefox
- Safari
- Edge

### 5.3 Accessibility Audit
- Run `run_accessibility_audit`
- Fix contrast issues
- Ensure keyboard navigation works
- Add proper ARIA labels

### 5.4 Performance Audit
- Run `run_performance_audit`
- Optimize images
- Check bundle size
- Lazy load components if needed

### 5.5 Swarm Audit
- Run `run_swarm_audit`
- Address any critical findings

---

## Phase 6: Documentation & PR

### 6.1 Update Documentation
- Update README.md with new design info
- Create screenshot gallery
- Document component usage

### 6.2 Create Pull Request
- Clear title: "feat: Implement Gold & Glow UI/UX redesign (Issue #35)"
- Link to issue
- Include before/after screenshots
- List all major changes
- Note any breaking changes

---

## Implementation Order (Priority)

### Critical (Week 1)
1. ✅ Phase 1.1: Tailwind Config
2. ✅ Phase 1.2: Component Styles
3. ✅ Phase 1.3: Base Styles
4. ✅ Phase 2.1: Home Page Redesign
5. ✅ Phase 3.1: Header Component

### High Priority (Week 2)
6. ✅ Phase 2.2: About Page
7. ✅ Phase 2.6: Contact Page
8. ✅ Phase 3.2: Footer Component
9. ✅ Phase 4.1: Scroll Animations

### Medium Priority (Week 3)
10. ✅ Phase 2.3: Projects Page
11. ✅ Phase 2.4: Skills Page Update
12. ✅ Phase 2.5: Services Page Update

### Low Priority (Polish)
13. ✅ Phase 4.2: Smooth Scrolling
14. ✅ Phase 5: Testing & Audits
15. ✅ Phase 6: Documentation & PR

---

## Success Criteria

- [ ] All pages render correctly on mobile and desktop
- [ ] Gold & Glow theme consistently applied
- [ ] Accessibility score > 90
- [ ] Performance score > 85
- [ ] No console errors
- [ ] All interactive elements work smoothly
- [ ] Hover effects perform well
- [ ] Dark theme is default
- [ ] Navigation works on all pages
- [ ] Forms are functional

---

## Notes

- This is a React + TypeScript + Tailwind CSS project
- Use HashRouter for GitHub Pages compatibility
- Keep existing mockup pages for reference during development
- Can remove mockup pages after redesign is complete
- All changes should be committed incrementally
- Run linting and formatting after each major change

---

**Status:** ✅ Plan Complete - Ready for Implementation  
**Next Step:** Phase 1.1 - Update Tailwind Configuration
