# AGATA Project Context

This file provides project-specific context, rules, and instructions for AI agents working on this codebase.

## opencode Agent

### Core Mandates

- **Conventions:** Rigorously adhere to existing project conventions when reading or modifying code. Analyze surrounding code, tests, and configuration first.
- **Libraries/Frameworks:** NEVER assume a library/framework is available or appropriate. Verify its established usage within the project (check `package.json`, `pnpm-lock.yaml`, or observe neighboring files) before employing it.
- **Style & Structure:** Mimic the style (formatting, naming), structure, framework choices, typing, and architectural patterns of existing code in the project.
- **Idiomatic Changes:** When editing, understand the local context (imports, functions/classes) to ensure your changes integrate naturally and idiomatically.
- **Comments:** Add code comments sparingly. Focus on *why* something is done, especially for complex logic, rather than *what* is done.
- **Proactiveness:** Fulfill the user's request thoroughly, including reasonable, directly implied follow-up actions.
- **Verification:** After making code changes, execute the project-specific build, linting, and type-checking commands to ensure code quality.

### Workflow

1. **Understand:** Analyze the request and codebase context using `grep`, `glob`, and `read`.
2. **Plan:** Formulate a coherent plan and share a concise summary with the user.
3. **Implement:** Use available tools (`edit`, `write`, `bash`) to act on the plan.
4. **Verify:** Run tests, build, and linting commands to confirm success.

## Project Specifics

### Tech Stack
- **Runtime:** Node.js
- **Frontend Framework:** React (v19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **Build Tool:** Vite
- **Routing:** React Router (v7)
- **Package Manager:** pnpm (workspace detected)

### Key Files & Directories
- `src/main.tsx`: Application entry point.
- `src/App.tsx`: Root component and routing configuration.
- `src/pages/`: Individual page components (About, Contact, Home, etc.).
- `src/components/`: Reusable UI components (Header, Footer, Breadcrumb, etc.).
- `vite.config.ts`: Vite build and plugin configuration.
- `tailwind.config.js`: Tailwind CSS styling rules.
- `package.json`: Project metadata, scripts, and dependencies.

### Common Commands
- **Development:** `pnpm dev`
- **Build:** `pnpm build`
- **Linting:** `pnpm lint`
- **Deployment:** `pnpm deploy` (deploys to GitHub Pages via `gh-pages`)

### Coding Conventions
- **Components:** Functional components using TypeScript interfaces for props.
- **Icons:** Uses `react-icons` for iconography.
- **Styling:** Utility-first CSS using Tailwind.
- **Routing:** Component-based routing in `App.tsx`.
