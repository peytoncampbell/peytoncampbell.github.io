# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved Cinematic Athlete Engineer redesign while preserving the existing dark blue/cyan/amber site identity.

**Architecture:** Keep the React/Vite/Tailwind stack and use the existing content in `src/data.ts`. Replace the current dense one-file layout in `src/App.tsx` with focused presentational sections and update `src/index.css` for the revised visual system, motion, and responsive behavior.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, lucide-react, Figma, Canva.

---

### Task 1: Establish Baseline

- [x] Run `npm run build` before edits and confirm the baseline builds.
- [x] Confirm reusable data remains in `src/data.ts` and `/catan/` stays untouched.

### Task 2: Implement Homepage Redesign

- [x] Replace `src/App.tsx` with the cinematic portrait-led homepage structure.
- [x] Preserve resume, project filtering, mobile menu, lazy secondary sections, and contact form behavior.
- [x] Replace `src/index.css` with the revised dark slate, blue/cyan, amber visual system.
- [x] Run `npm run build` after implementation.

### Task 3: Create Figma Design Artifact

- [x] Create a new Figma design file.
- [x] Add desktop, mobile, and token frames for the approved redesign.

### Task 4: Create Canva Social Asset

- [x] Check for Canva brand kits.
- [x] Generate Open Graph/social preview candidates in Canva.
- [ ] Create a final editable Canva design after user selects a candidate.

### Task 5: Verify And Report

- [ ] Run final build.
- [ ] Start local server.
- [ ] Browser-check desktop and mobile layouts.
- [ ] Report changed files, verification, Figma link, Canva candidate links, and remaining manual review items.
