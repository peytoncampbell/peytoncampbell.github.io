# Portfolio Redesign Design

Date: 2026-04-27

## Goal

Redesign the personal portfolio so it feels more visually polished, memorable, and recruiter-friendly while preserving the current site's dark technical identity. The redesign should enhance UI/UX, strengthen the first impression, and make Peyton's work, story, and contact paths easier to scan.

## Approved Direction

Use the **Cinematic Athlete Engineer** direction with the current site's color/vibe retained.

The first impression should be portrait-led and personal, but the brand should still feel like the existing portfolio: deep slate backgrounds, blue/cyan technical energy, amber warmth, subtle glass surfaces, and polished motion. The redesign should not become a new lime/editorial brand or a generic dashboard.

## Visual Thesis

A cinematic dark portfolio that pairs real photography with blue/cyan technical polish, amber warmth, and a clear athlete-to-engineer narrative.

## Content Plan

1. **Hero**
   - Full-viewport or near-full-viewport portrait-led hero.
   - Primary headline: full-stack developer building real products.
   - Support copy should connect product-minded engineering with court-tested discipline.
   - Primary action: view projects.
   - Secondary action: resume or contact.

2. **Featured Work**
   - Lead with Jarvis Console as the strongest proof point.
   - Support with Score Controller, Catan Settlement Optimizer, OpenClaw/Jarvis infrastructure, and other selected projects.
   - Reduce card clutter by making one featured project dominant and the rest easier to compare.

3. **Capabilities / Stack**
   - Present technical skill groups as scannable evidence, not decoration.
   - Keep React, TypeScript, Node.js, C#/.NET, AI/automation, and infrastructure visible.

4. **Experience**
   - Keep OES experience prominent.
   - Frame work history around product delivery, real-time systems, testing automation, and maintainable architecture.

5. **Story**
   - Keep the athlete story, but make it support the engineering brand.
   - Use basketball/golf imagery as personal context rather than a large detour.

6. **Contact**
   - End with a simple, confident contact section.
   - Preserve the contact form if it is working, but improve layout, feedback states, and mobile usability.

## Figma Role

Figma will be used for the website redesign source of truth:

- Responsive homepage design for desktop and mobile.
- Core layout structure and section hierarchy.
- Color, typography, spacing, and surface tokens.
- Reusable components for nav, hero actions, project highlights, stack groups, timeline items, and contact controls.
- Implementation handoff notes for React/Tailwind.

## Canva Role

Canva will be used for visual/brand assets rather than the core app layout:

- Refreshed Open Graph/social preview image.
- Optional hero-supporting visual treatments or share graphics.
- Visual assets should use the same dark slate, blue/cyan, amber, and photographic direction.
- Canva assets should not introduce a separate brand style.

## Interaction Thesis

- Hero entrance should feel cinematic but quick: nav, headline, copy, and actions reveal in a staggered sequence.
- Scroll should add depth through subtle image parallax and section reveals.
- Project interactions should sharpen affordance with clear hover/reveal states and no layout shift.

## UX Requirements

- Improve scanability over the current design by reducing dense glass-card repetition.
- Keep the first viewport focused on one strong message and one strong visual.
- Preserve current navigation anchors: About, Experience, Projects, My Story, Contact, unless the implementation plan finds a better label order.
- Maintain responsive behavior across mobile and desktop.
- Keep text readable over photography with strong contrast and stable image crops.
- Avoid overlapping text, oversized mobile headings, and dynamic content that shifts the layout.
- Preserve existing resume download and contact paths.
- Preserve `/catan/` as a separate standalone tool.

## Technical Boundaries

- Existing stack remains React, TypeScript, Vite, Tailwind, Framer Motion, and lucide-react.
- Deployment remains GitHub Pages from `docs/`.
- Generated production output should continue to be created by `npm run build`.
- The redesign should stay focused on the portfolio site and avoid changing the standalone Catan app unless needed for navigation consistency.

## Testing And Verification

- Run the production build.
- Verify desktop and mobile layouts in browser screenshots.
- Check hero image contrast and cropping.
- Check section navigation anchors.
- Check contact form validation states.
- Confirm `/catan/` still resolves after build.

## Implementation Decisions

- Keep the current contact form behavior and improve the surrounding UI, validation copy, and fallback contact links.
- Create a lean Figma redesign artifact with desktop and mobile homepage frames, core tokens, and reusable component examples.
- Create Canva social/brand visual assets that can replace or supplement the existing Open Graph preview without changing the website's core layout source of truth.
