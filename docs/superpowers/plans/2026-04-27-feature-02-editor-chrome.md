# Feature 02: Editor Chrome Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the base chrome components (navbar + sidebar) that frame every editor screen.

**Architecture:** EditorNavbar is a stateless client component that accepts `isOpen`/`onToggle` props; ProjectSidebar is a fixed-position overlay that slides in from the left accepting `isOpen`/`onClose` props. The dialog pattern is already satisfied by the existing `components/ui/dialog.tsx` which supports title, description, and footer actions via shadcn tokens mapped to the dark theme.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind v4 (CSS token system), shadcn/ui (base-ui), lucide-react

---

### File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `components/editor/editor-navbar.tsx` | Fixed-height top navbar with sidebar toggle |
| Create | `components/editor/editor-shell.tsx` | Client component owning sidebar open state |
| Create | `components/editor/project-sidebar.tsx` | Floating overlay sidebar with tabs and new-project button |
| Create | `app/editor/layout.tsx` | Server layout wrapping EditorShell |
| Create | `app/editor/page.tsx` | Placeholder canvas page |
| Already exists | `components/ui/dialog.tsx` | Dialog pattern (title, description, footer) — no changes needed |

---

### Task 1: EditorNavbar component

**Files:**
- Create: `components/editor/editor-navbar.tsx`

- [ ] **Step 1: Create the file**

```tsx
"use client"

import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EditorNavbarProps {
  isOpen: boolean
  onToggle: () => void
}

export function EditorNavbar({ isOpen, onToggle }: EditorNavbarProps) {
  return (
    <header className="h-12 shrink-0 flex items-center justify-between px-3 bg-bg-surface border-b border-border-default">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={onToggle}>
          {isOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
      <div className="flex-1" />
      <div className="flex items-center" />
    </header>
  )
}
```

---

### Task 2: ProjectSidebar component

**Files:**
- Create: `components/editor/project-sidebar.tsx`

- [ ] **Step 1: Create the file**

```tsx
"use client"

import { X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-72 z-50 flex flex-col bg-bg-surface border-r border-border-default transition-transform duration-200 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-12 shrink-0 flex items-center justify-between px-4 border-b border-border-default">
        <span className="text-sm font-medium text-text-primary">Projects</span>
        <Button variant="ghost" size="icon-sm" onClick={onClose}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close sidebar</span>
        </Button>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden p-3">
        <Tabs defaultValue="my-projects" className="flex-1 flex flex-col">
          <TabsList className="w-full">
            <TabsTrigger value="my-projects" className="flex-1">My Projects</TabsTrigger>
            <TabsTrigger value="shared" className="flex-1">Shared</TabsTrigger>
          </TabsList>
          <TabsContent value="my-projects" className="flex-1 flex items-center justify-center">
            <p className="text-sm text-text-muted">No projects yet.</p>
          </TabsContent>
          <TabsContent value="shared" className="flex-1 flex items-center justify-center">
            <p className="text-sm text-text-muted">No shared projects.</p>
          </TabsContent>
        </Tabs>
      </div>

      <div className="shrink-0 p-3 border-t border-border-default">
        <Button variant="default" size="default" className="w-full gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </aside>
  )
}
```

---

### Task 3: EditorShell + layout + page

**Files:**
- Create: `components/editor/editor-shell.tsx`
- Create: `app/editor/layout.tsx`
- Create: `app/editor/page.tsx`

- [ ] **Step 1: Create EditorShell**

```tsx
"use client"

import { useState } from "react"
import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"

export function EditorShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="h-full flex flex-col bg-bg-base">
      <EditorNavbar isOpen={sidebarOpen} onToggle={() => setSidebarOpen((o) => !o)} />
      <ProjectSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 overflow-hidden relative">{children}</main>
    </div>
  )
}
```

- [ ] **Step 2: Create layout**

```tsx
import { EditorShell } from "@/components/editor/editor-shell"

export default function EditorLayout({ children }: { children: React.ReactNode }) {
  return <EditorShell>{children}</EditorShell>
}
```

- [ ] **Step 3: Create placeholder page**

```tsx
export default function EditorPage() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <p className="text-sm text-text-muted">Canvas coming soon.</p>
    </div>
  )
}
```

---

### Task 4: Verify dialog pattern

The existing `components/ui/dialog.tsx` exports `DialogHeader`, `DialogTitle`, `DialogDescription`, `DialogFooter` — pattern is ready. No changes needed.

---

### Completion Checklist

- [ ] `npx tsc --noEmit` — zero errors
- [ ] `npx eslint components/editor/` — zero errors
- [ ] `context/progress-tracker.md` updated
