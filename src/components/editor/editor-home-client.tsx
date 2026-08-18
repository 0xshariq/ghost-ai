"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"
import { ProjectDialogs } from "@/components/editor/project-dialogs"
import { Button } from "@/components/ui/button"
import { useProjectActions, type ProjectRow } from "@/hooks/use-project-actions"

interface EditorHomeClientProps {
  ownedProjects: ProjectRow[]
  sharedProjects: ProjectRow[]
}

export function EditorHomeClient({ ownedProjects, sharedProjects }: EditorHomeClientProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const actions = useProjectActions()

  return (
    <div className="flex flex-col h-screen bg-bg-base">
      <EditorNavbar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen((prev) => !prev)}
      />
      <ProjectSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        ownedProjects={ownedProjects}
        sharedProjects={sharedProjects}
        onNewProject={actions.openCreate}
        onRename={actions.openRename}
        onDelete={actions.openDelete}
      />
      <main className="flex-1 overflow-hidden flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center px-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-medium text-text-primary">
              Create a project or open an existing one
            </h1>
            <p className="text-sm text-text-muted">
              Start a new architecture workspace, or choose a project from the sidebar.
            </p>
          </div>
          <Button onClick={actions.openCreate} className="gap-2">
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </main>
      <ProjectDialogs {...actions} />
    </div>
  )
}
