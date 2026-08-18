"use client"

import Link from "next/link"
import { X, Plus, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import type { ProjectRow } from "@/hooks/use-project-actions"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
  ownedProjects: ProjectRow[]
  sharedProjects: ProjectRow[]
  onNewProject: () => void
  onRename: (project: ProjectRow) => void
  onDelete: (project: ProjectRow) => void
  activeProjectId?: string
}

export function ProjectSidebar({
  isOpen,
  onClose,
  ownedProjects,
  sharedProjects,
  onNewProject,
  onRename,
  onDelete,
  activeProjectId,
}: ProjectSidebarProps) {
  const initialTab = sharedProjects.some((project) => project.id === activeProjectId)
    ? "shared"
    : "my-projects"

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-bg-base/70 backdrop-blur-sm md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-3 left-3 top-[3.75rem] z-50 flex w-72 flex-col rounded-2xl border border-border-subtle bg-bg-surface/95 backdrop-blur-xl transition-transform duration-200",
          isOpen ? "translate-x-0" : "-translate-x-[calc(100%+1rem)]"
        )}
      >
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-border-default px-4">
          <span className="text-sm font-medium text-text-primary">Projects</span>
          <Button variant="ghost" size="icon-sm" onClick={onClose}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden p-3">
          <Tabs
            key={`${activeProjectId ?? "home"}-${initialTab}`}
            defaultValue={initialTab}
            className="flex flex-1 flex-col"
          >
            <TabsList className="w-full">
              <TabsTrigger value="my-projects" className="flex-1">
                My Projects
              </TabsTrigger>
              <TabsTrigger value="shared" className="flex-1">
                Shared
              </TabsTrigger>
            </TabsList>

            <TabsContent value="my-projects" className="flex-1 overflow-y-auto mt-2">
              {ownedProjects.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-sm text-text-muted">No projects yet.</p>
                </div>
              ) : (
                <ul className="flex flex-col gap-0.5">
                  {ownedProjects.map((project) => (
                    <li key={project.id}>
                      <ProjectItem
                        project={project}
                        active={project.id === activeProjectId}
                        onRename={onRename}
                        onDelete={onDelete}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </TabsContent>

            <TabsContent value="shared" className="flex-1 overflow-y-auto mt-2">
              {sharedProjects.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-sm text-text-muted">No shared projects.</p>
                </div>
              ) : (
                <ul className="flex flex-col gap-0.5">
                  {sharedProjects.map((project) => (
                    <li key={project.id}>
                      <ProjectItem
                        project={project}
                        active={project.id === activeProjectId}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </TabsContent>
          </Tabs>
        </div>

        <div className="shrink-0 p-3 border-t border-border-default">
          <Button
            variant="default"
            size="default"
            className="w-full gap-2"
            onClick={onNewProject}
          >
            <Plus className="h-4 w-4" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  )
}

interface ProjectItemProps {
  project: ProjectRow
  active?: boolean
  onRename?: (project: ProjectRow) => void
  onDelete?: (project: ProjectRow) => void
}

function ProjectItem({ project, active = false, onRename, onDelete }: ProjectItemProps) {
  return (
    <div
      className={cn(
        "group flex items-center gap-2 rounded-xl border px-2 py-1.5 transition-colors",
        active
          ? "border-border-subtle bg-accent-primary-dim"
          : "border-transparent hover:bg-bg-subtle"
      )}
    >
      <span
        className={cn(
          "size-1.5 shrink-0 rounded-full bg-border-subtle",
          active && "bg-accent-primary"
        )}
      />
      <Link
        href={`/editor/${project.id}`}
        aria-current={active ? "page" : undefined}
        className={cn(
          "min-w-0 flex-1 truncate text-sm",
          active ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
        )}
      >
        {project.name}
      </Link>
      {onRename && onDelete && (
        <div className="flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={(e) => {
              e.preventDefault()
              onRename(project)
            }}
          >
            <Pencil className="h-3.5 w-3.5" />
            <span className="sr-only">Rename</span>
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={(e) => {
              e.preventDefault()
              onDelete(project)
            }}
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      )}
    </div>
  )
}
