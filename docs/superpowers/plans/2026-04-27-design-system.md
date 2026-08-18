# Design System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Install and configure shadcn/ui with dark theme, add 7 UI components, lucide-react, and the cn() helper.

**Architecture:** shadcn/ui over Tailwind v4 (CSS-based config). All theme tokens live in `globals.css`. Components land in `components/ui/` untouched after generation. `lib/utils.ts` exposes `cn()`.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, shadcn/ui, lucide-react, clsx, tailwind-merge

---

### Task 1: Update progress-tracker.md

**Files:**
- Modify: `context/progress-tracker.md`

- [ ] Mark "Feature 01: Design System" as In Progress in the tracker.

---

### Task 2: Configure globals.css dark theme tokens

**Files:**
- Modify: `app/globals.css`

- [ ] Replace the single `@import "tailwindcss";` with the full dark-theme token setup:

```css
@import "tailwindcss";

@theme inline {
  --color-bg-base: #080809;
  --color-bg-surface: #111114;
  --color-bg-elevated: #18181c;
  --color-bg-subtle: #1e1e23;
  --color-border-default: #2a2a30;
  --color-border-subtle: #3a3a42;
  --color-text-primary: #f0f0f4;
  --color-text-secondary: #c0c0cc;
  --color-text-muted: #808090;
  --color-text-faint: #505060;
  --color-accent-primary: #00c8d4;
  --color-accent-primary-dim: rgba(0, 200, 212, 0.12);
  --color-accent-ai: #6457f9;
  --color-accent-ai-text: #8b82ff;
  --color-state-error: #ff4d4f;
  --color-state-success: #34d399;
  --color-state-warning: #fbbf24;

  --radius: 0.75rem;
}

@layer base {
  * {
    border-color: var(--color-border-default);
  }
  body {
    background-color: var(--color-bg-base);
    color: var(--color-text-primary);
  }
}
```

---

### Task 3: Install shadcn/ui

**Files:**
- Create: `components.json`
- Create: `components/ui/` (generated)

- [ ] Run shadcn init (non-interactive, base style, no default colors — we use our own):

```bash
npx shadcn@latest init -d
```

If prompted, choose: Style = Default, Base color = Neutral, CSS variables = yes.

- [ ] Verify `components.json` was created and `lib/utils.ts` exists. If `lib/utils.ts` was NOT created by shadcn, create it manually (Task 4).

---

### Task 4: Ensure lib/utils.ts has cn()

**Files:**
- Create/verify: `lib/utils.ts`

- [ ] Check if `lib/utils.ts` exists and exports `cn`. If not, create it:

```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] If clsx/tailwind-merge are missing, install them:

```bash
npm install clsx tailwind-merge
```

---

### Task 5: Add shadcn UI components

**Files:**
- Create: `components/ui/button.tsx`
- Create: `components/ui/card.tsx`
- Create: `components/ui/dialog.tsx`
- Create: `components/ui/input.tsx`
- Create: `components/ui/tabs.tsx`
- Create: `components/ui/textarea.tsx`
- Create: `components/ui/scroll-area.tsx`

- [ ] Add all seven components:

```bash
npx shadcn@latest add button card dialog input tabs textarea scroll-area
```

- [ ] Confirm all 7 files exist in `components/ui/`.

---

### Task 6: Install lucide-react

**Files:** none (dependency only)

- [ ] Install:

```bash
npm install lucide-react
```

- [ ] Verify it appears in `package.json` dependencies.

---

### Task 7: Verify TypeScript imports compile

- [ ] Run the TypeScript compiler in no-emit mode:

```bash
npx tsc --noEmit
```

Expected: zero errors.

- [ ] If errors reference missing types, install them and re-run.

---

### Task 8: Update progress-tracker.md to completed

**Files:**
- Modify: `context/progress-tracker.md`

- [ ] Move Feature 01: Design System from In Progress → Completed.
