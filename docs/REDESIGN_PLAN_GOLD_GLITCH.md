# Redesign Plan - Gold & Glow Theme

**Based on:** Concept A Dark Mode v3 (Gold Accent with Glows)
**Requested by:** @jazinski (Issue #33)
**Branch:** agata/task-19-gh-mention-issue-33
**Date:** 2024

---

## Overview

The user selected **Concept A Dark Mode v3** as the preferred design direction and wants to plan a complete site redesign based on this aesthetic. This mockup features:

- **Dark base**: `#0f1419` (deep charcoal)
- **Card backgrounds**: `#1a1f26` (lighter charcoal)
- **Gold accents**: `#c9a65c` with gradient to `#e6c068`
- **Glow effects**: Box shadows with gold tint (`rgba(201, 166, 92, 0.3-0.5)`)
- **Geometric shapes**: Rotated squares, circles with blur
- **Typography**: Inter (headings) + Space Grotesk (body)
- **Cut-corner cards**: `clip-path: polygon(...)` for modern geometric feel

---

## Design System Specification

### Color Palette

```css
/* Primary Colors */
--dark-bg: #0f1419          /* Page background */
--dark-card: #1a1f26        /* Card backgrounds */
--dark-card-hover: #1e2230  /* Card hover state */
--dark-border: #2a3038      /* Borders and dividers */

/* Accent Colors */
--gold-primary: #c9a65c     /* Main gold accent */
--gold-light: #e6c068       /* Light gold (gradients) */
--gold-dark: #a67c2b        /* Dark gold (shadows) */

/* Text Colors */
--text-white: #ffffff
--text-gray: #d1d5db
--text-muted: #9ca3af

/* Glow Effects */
--glow-weak: rgba(201, 166, 92, 0.2)
--glow-medium: rgba(201, 166, 92, 0.3)
--glow-strong: rgba(201, 166, 92, 0.5)
```

### Typography Scale

```css
/* Font Families */
--font-display: 'Inter', sans-serif;  /* Headings - 700, 800, 900 */
--font-body: 'Space Grotesk', sans-serif;  /* Body - 400, 500, 700 */

/* Font Sizes */
--text-xs: 0.875rem
--text-sm: 1rem
--text-base: 1.125rem
--text-lg: 1.25rem
--text-xl: 1.5rem
--text-2xl: 1.875rem
--text-3xl: 2.25rem
--text-4xl: 3rem
--text-5xl: 3.75rem
--text-6xl: 4.5rem
--text-7xl: 6rem
--text-8xl: 7.5rem
```

### Component Styles

#### Cards
```css
.card-geometric {
    background: linear-gradient(135deg, var(--dark-card) 0%, #1c2028 100%);
    border: 1px solid var(--dark-border);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 95% 100%, 0 100%);
    transition: all 0.3s ease;
}

.card-geometric:hover {
    transform: translateY(-8px) rotate(-1deg);
    box-shadow: 0 25px 50px -12px var(--glow-strong);
    border-color: var(--gold-primary);
}
```

#### Gold Glow Text
```css
.gold-glow {
    text-shadow: 0 0 30px var(--glow-medium);
}
```

#### Buttons
```css
.btn-primary {
    background: linear-gradient(135deg, var(--gold-primary) 0%, var(--gold-light) 100%);
    box-shadow: 0 10px 40px var(--glow-medium);
}

.btn-primary:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 50px var(--glow-strong);
}
```

---

## Page-by-Page Redesign Plan

### 1. Home Page (`/`)

#### Hero Section
- **Layout**: Two-column split (70/30 or 60/40)
- **Left**: Large headline, subtitle, CTAs
- **Right**: Decorative element (code icon, shape, or illustration)
- **Background**: Geometric shapes with blur + gradient overlay
- **Key Elements**:
  - H1: "Chris Jazinski" (8xl, gold glow)
  - Subtitle: "Senior Software Engineer" tracking-wider uppercase
  - Description: 2xl font, gray text
  - CTAs: Primary (gold gradient) + Secondary (gold border)

#### Stats Bar
- **Layout**: Full-width, overlapping hero
- **Content**: 4 metrics (Years, Projects, Clients, Technologies)
- **Style**: Dark card with gold border top/bottom

#### Services Grid
- **Layout**: 3-column grid, 6 cards total
- **Card Style**: Cut-corner with hover lift/rotate
- **Icon**: Gold gradient square container
- **Content**: Title (3xl) + description

#### CTA Section
- **Layout**: Centered, full-width
- **Background**: Same gradient as hero
- **Content**: Headline + large primary button

---

### 2. About Page (`/about`)

#### Header Section
- **Profile area**: Large avatar or decorative shape
- **Name + Title**: Similar to hero but smaller

#### Bio Section
- **Layout**: Two-column (60/40) on desktop
- **Left**: Main bio text
- **Right**: Quick facts, skills summary

#### Experience Timeline
- **Style**: Vertical timeline with gold accent dots
- **Cards**: Same geometric style
- **Animations**: Slide-in on scroll

#### Values/Beliefs
- **Layout**: 2x2 grid
- **Style**: Icon + title + description cards

---

### 3. Projects/Portfolio Page (`/projects`)

#### Project Grid
- **Layout**: Masonry or 3-column grid
- **Card Style**: Large cards with thumbnail, title, description
- **Tags**: Gold pill badges for tech stack
- **Links**: GitHub + Live demo buttons

#### Featured Project
- **Layout**: Full-width hero at top
- **Style**: Large screenshot, detailed case study
- **CTA**: "View Case Study"

---

### 4. Skills Page (`/skills`)

#### Skills Categories
- **Layout**: 4 sections (Frontend, Backend, Cloud, Tools)
- **Style**: Category cards with skill pills inside
- **Pill Style**: Gold border, hover fill

#### Skill Progress (Optional)
- **Style**: Animated progress bars with gold fill
- **Animation**: Counter + bar fill on scroll

---

### 5. Services Page (`/services`)

#### Service Cards
- Same as home page services but more detailed
- Include: pricing, delivery time, features

#### Process Section
- **Layout**: Horizontal or vertical step process
- **Style**: Numbered steps with gold accent numbers

---

### 6. Contact Page (`/contact`)

#### Contact Methods
- **Layout**: 3-column grid (Email, Social, Location)
- **Style**: Large icon + label + value cards

#### Contact Form
- **Style**: Dark card with gold borders on focus
- **Inputs**: Dark bg, gold focus ring
- **Button**: Full-width primary button

---

## New Pages to Create

### 7. Blog/Writing Page (`/blog`)

#### Article List
- **Layout**: List view or card grid
- **Style**: Date, title, excerpt, tags

#### Article Detail
- **Layout**: Centered reading column
- **Style**: Typography-focused with gold accents

---

## Interactive Enhancements

### Scroll Animations
```javascript
// Fade-in up on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
});
```

### Hover Effects
- Card lift + slight rotation (-1deg)
- Gold border appears on hover
- Gold glow intensifies on text/icons

### Smooth Scrolling
- CSS `scroll-behavior: smooth`
- Anchor link offset for sticky nav

### Mobile Menu
- Slide-in from right
- Backdrop blur
- Gold accent border

---

## Technical Implementation

### Tailwind Config
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#3d5a73',
                gold: {
                    DEFAULT: '#c9a65c',
                    light: '#e6c068',
                    dark: '#a67c2b',
                },
                darkBg: '#0f1419',
                darkCard: '#1a1f26',
                darkBorder: '#2a3038'
            },
            fontFamily: {
                display: ['Inter', 'sans-serif'],
                body: ['Space Grotesk', 'sans-serif'],
            },
            boxShadow: {
                'glow': '0 0 30px rgba(201, 166, 92, 0.3)',
                'glow-strong': '0 0 50px rgba(201, 166, 92, 0.5)',
            }
        }
    }
}
```

### CSS Components File
Create `assets/css/components.css` with:
- `.card-geometric`
- `.gold-glow`
- `.btn-primary`
- `.btn-secondary`
- `.section-geometric`
- Animation keyframes

---

## Deliverables Checklist

### Phase 1: Design System
- [ ] Create `assets/css/components.css` with reusable styles
- [ ] Update `tailwind.config.js` with custom colors/fonts
- [ ] Document design tokens in `docs/DESIGN_SYSTEM.md`

### Phase 2: Core Pages (Must Have)
- [ ] Redesign `index.html` (home)
- [ ] Create `about.html`
- [ ] Create `projects.html` (NEW)
- [ ] Update `skills.html` with new styles
- [ ] Update `services.html` with new styles
- [ ] Create `contact.html`

### Phase 3: Nice to Have
- [ ] Create `blog.html` (NEW)
- [ ] Create `blog/[article].html` template
- [ ] Add scroll animations
- [ ] Add mobile menu
- [ ] Optimize images

### Phase 4: Documentation
- [ ] Update README with new design info
- [ ] Create screenshot gallery
- [ ] Document component usage

---

## Prioritization

### Critical (Do First)
1. Design system setup (CSS variables, components)
2. Home page redesign
3. About page
4. Contact page

### High Priority
5. Projects/Portfolio page
6. Skills page update
7. Services page update

### Medium Priority
8. Blog page
9. Scroll animations
10. Mobile menu

### Low Priority (Polish)
11. Loading animations
12. Cursor effects
13. Easter eggs

---

## Questions for Review

1. **Content Scope**: Do we want to create a Blog section?
2. **Portfolio**: Do you have existing projects to feature?
3. **Animation Level**: Keep it subtle (CSS only) or add JS animations?
4. **Images**: Do you have photos for the About page?
5. **Timeline**: Any target dates for launch?

---

## Next Steps

1. ✅ Branch created: `agata/task-19-gh-mention-issue-33`
2. ⏳ Get feedback on this plan
3. ⏳ Set up design system
4. ⏳ Implement core pages
5. ⏳ Create pull request for review

---

**Document Status**: Planning Phase Complete
**Awaiting**: User approval to proceed with implementation
