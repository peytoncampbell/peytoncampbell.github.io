# Catan UI/UX Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved board-first Catan optimizer overhaul with a premium warm visual system, right decision rail, and companion Figma/Canva design artifacts.

**Architecture:** Keep the existing static canvas app in `public/catan/index.html` and preserve its board generation, scanning, and scoring logic. Add focused UI helpers for best-opening pair selection, strategy labels, row-to-board highlighting, and responsive decision rail behavior, then let the Vite build copy the public app into `docs/catan/index.html`.

**Tech Stack:** Static HTML/CSS/JavaScript, Canvas 2D, Vite build output to `docs/`, Figma MCP, Canva MCP.

---

### Task 1: Premium Workspace Layout

**Files:**
- Modify: `public/catan/index.html`
- Build output: `docs/catan/index.html`

- [ ] **Step 1: Add decision rail markup**

Insert this element as the first child of `<aside class="sidebar-panel">`:

```html
<div id="bestOpening" class="best-opening glass"></div>
```

- [ ] **Step 2: Add premium warm CSS overrides**

Append a Catan overhaul CSS section before `</style>` that defines warm parchment page colors, cream panels, compact top bar, board frame, right rail, best-opening card, ranking rows, controls, responsive mobile layout, and hover/selected states for ranking rows.

- [ ] **Step 3: Verify the page still loads**

Run:

```powershell
npm run build
```

Expected: Vite build completes and `docs/catan/index.html` exists.

### Task 2: Decision Rail Data And Interactions

**Files:**
- Modify: `public/catan/index.html`
- Build output: `docs/catan/index.html`

- [ ] **Step 1: Add interaction state**

Near the global board arrays, define:

```javascript
let hoveredVertex = null;
let selectedVertex = null;
```

- [ ] **Step 2: Add best-opening helpers**

Add helpers for vertex labels, resource chips, strategy tags, best-pair selection, and recommendation reasons. The helpers must use existing `vertices`, `tiles`, `RESOURCE_NAMES`, `PROB`, and score objects, without changing the scoring formula.

- [ ] **Step 3: Update drawing**

In `drawBoard()`, assign stable ranks to sorted vertices, render selected/hovered markers with stronger rings, call `updateBestOpening(sorted)`, and preserve existing calls to `updateTopList`, `updateResourcePool`, and `updateBoardStats`.

- [ ] **Step 4: Upgrade ranking rows**

Update `updateTopList(sorted, topN)` so each row includes rank, score badge, strategy tag, resource chips, port value, and row hover/click handlers that set `hoveredVertex` or `selectedVertex` and redraw the board.

- [ ] **Step 5: Upgrade tooltip and click behavior**

Keep tile editing on tile clicks, but select a nearby scored settlement point when the click is closest to a point. Mouse movement should update `hoveredVertex` while preserving the tooltip.

### Task 3: Visual Artifacts

**Files:**
- Create or update external Figma design
- Create Canva candidate designs

- [ ] **Step 1: Create Figma Catan UI file**

Create a Figma design file with desktop and mobile frames, board-first workspace, right decision rail, ranking row, control group, resource swatches, and visual token notes.

- [ ] **Step 2: Create Canva concepts**

Generate Canva candidates for a Catan optimizer feature/social preview using warm parchment, premium strategy table, and board-first composition.

- [ ] **Step 3: Record artifact URLs**

Include Figma and Canva URLs in the final implementation summary.

### Task 4: Verification And Commit

**Files:**
- Modify: `public/catan/index.html`
- Modify: `docs/catan/index.html`
- Create: `docs/superpowers/plans/2026-04-27-catan-uiux-overhaul.md`

- [ ] **Step 1: Build**

Run:

```powershell
npm run build
```

Expected: build succeeds.

- [ ] **Step 2: Browser verification**

Verify desktop and mobile screenshots of `/catan/` show a nonblank board, visible decision rail, readable controls, and no obvious text overlap.

- [ ] **Step 3: Git review**

Run:

```powershell
git status --short
git diff --stat
```

Expected: only the intended Catan app, build output, plan, and artifact notes are changed.

- [ ] **Step 4: Commit**

Commit with:

```powershell
git add public/catan/index.html docs/catan/index.html docs/superpowers/plans/2026-04-27-catan-uiux-overhaul.md
git commit -m "Overhaul Catan optimizer UI"
```
