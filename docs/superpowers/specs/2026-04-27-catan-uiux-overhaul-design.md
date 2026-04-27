# Catan UI/UX Overhaul Design

Date: 2026-04-27

## Goal

Redesign the Catan optimizer into a premium, board-first strategy workspace. The app should keep the current warm Catan-inspired color and material vibe while making the experience clearer, faster, and more visually polished.

The primary user question is: "Where should I place my opening settlements?" The interface should answer that immediately, then give enough context to trust the recommendation.

## Chosen Direction

Use a single-page optimizer workspace with a large board on the left and a right-side decision rail.

This direction was chosen over a guided multi-step flow because the tool's value is speed. Users should be able to generate or edit a board, scan the rankings, and understand the best opening without moving through separate screens.

## Product Structure

The page opens directly into the optimizer workspace.

1. Top bar: app identity, board status, and compact utility actions.
2. Main board area: large interactive canvas, clear legend, hover state, selected marker state, and board edit affordances.
3. Right decision rail: best opening pair, combined score, ranked settlement spots, resource and number balance, and one concise explanation of why the top option wins.
4. Compact control groups: generation, board editing, board size, analysis settings, reset/import/share actions.
5. Mobile layout: board first, then a sticky best-opening summary and expandable ranking/details sections.

## Visual System

Keep the existing warm board-game palette, but make it cleaner and more premium.

Core visual language:

- Parchment page background with cream panels.
- Deep green or charcoal text for contrast.
- Warm amber primary actions.
- Fine tan borders and restrained shadows.
- Resource colors used consistently: brick red, wheat gold, wood green, sheep olive, ore slate, desert sand, water blue.
- Modest panel radius and crisp spacing.

The app should feel tactile and strategic, not like a fantasy landing page. The board and recommendations should be the visual focus.

## Board Experience

The board remains the main interaction surface.

Requirements:

- Stable, responsive canvas container with no layout jump.
- Clear visual distinction between board, water, ports, tiles, numbers, and settlement points.
- Ranking markers that communicate quality through color and hierarchy.
- Strong hover and selected states.
- A visible connection between ranked rows and board markers.
- Legend simplified enough to scan quickly.
- Board edit affordances that are discoverable without cluttering the canvas.

## Decision Rail

The right rail is the main UX upgrade. It should turn the current ranking/sidebar behavior into a focused decision cockpit.

Top section:

- "Best opening" pair.
- Combined score.
- Strategy tag, such as "balanced production", "ore-wheat engine", or "port leverage".
- One short reason explaining why the pair is strong.

Ranking rows:

- Rank number.
- Score badge.
- Primary resources.
- Number quality.
- Port value when relevant.
- Compact strategy tag.
- Hover/select behavior that highlights the corresponding board point.

Supporting sections:

- Resource spread.
- Number distribution.
- Port access.
- Optional toggles for analysis settings.

## Controls

Controls should be grouped by user intent, not scattered by implementation detail.

Groups:

- Generate: random board, new seed, balanced board if supported.
- Edit Board: tile/resource editing, number editing, port editing.
- Board Size: beginner/standard/expanded options if already supported by app logic.
- Analysis Settings: scoring emphasis, port weighting, pair optimization, or advanced toggles that already exist.
- Utility: reset, copy/share, scan/import if supported.

Use icon buttons where the action is familiar, and labels where the command needs clarity.

## States And Feedback

The redesign should include useful states:

- Initial state: board is ready with a clear primary action to generate or analyze.
- Loading/processing state: quiet indication that rankings are updating.
- Empty state: "Generate a board to rank settlement spots."
- Hover state: marker and row both respond.
- Selected state: selected point/pair remains visible.
- Mobile collapsed state: best opening summary remains easy to reach.

## Figma Deliverable

Create a Figma design file for the Catan overhaul with:

- Desktop workspace frame.
- Mobile workspace frame.
- Board-first layout with right decision rail.
- Component examples for top bar, board container, decision rail, ranking row, control group, buttons, badges, and resource swatches.
- Visual token notes for color, spacing, typography, border, and shadow decisions.

The Figma file should be a design reference, not just a moodboard. It must be concrete enough to implement from.

## Canva Deliverable

Create Canva visual concepts that can support presentation or promotional use:

- A Catan optimizer feature/social preview.
- Visual language consistent with the new UI: warm parchment, premium strategy table, board-first composition.
- No unrelated fantasy art or generic stock styling.

If Canva returns multiple candidates, the final editable Canva design should be created only after selecting the strongest candidate.

## Implementation Notes

The current Catan app is a static single-file canvas app in `public/catan/index.html`, with the deploy copy built into `docs/catan/index.html`. The implementation should preserve existing scoring and board logic while restructuring and restyling the interface around the approved experience.

Avoid unrelated rewrites. If the file needs organization to make the overhaul reliable, keep changes targeted to UI structure, styling, interaction wiring, and small helper functions that support the new UX.

## Verification

Before considering implementation complete:

- Run the project build.
- Verify the Catan page in a browser on desktop and mobile widths.
- Confirm the canvas renders nonblank and remains framed correctly.
- Confirm no visible text overlap in the top bar, controls, decision rail, ranking rows, or mobile layout.
- Confirm core actions still work: randomize/generate, reset, board size changes, board editing where supported, ranking hover/select behavior.
- Confirm `docs/catan/index.html` is updated from the public source.

## Out Of Scope

- Changing Catan scoring rules unless needed to expose existing data more clearly.
- Adding accounts, persistence, backend services, or multiplayer behavior.
- Replacing the canvas board with a new rendering engine.
- Creating a multi-page marketing site for the tool.
