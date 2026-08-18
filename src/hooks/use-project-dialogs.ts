"use client"

import { useState } from "react"

export interface Project {
  id: string
  name: string
  slug: string
  owned: boolean
}

export type DialogType = "create" | "rename" | "delete" | null

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

const MOCK_PROJECTS: Project[] = [
  { id: "1", name: "Ghost AI Core", slug: "ghost-ai-core", owned: true },
  { id: "2", name: "Design System", slug: "design-system", owned: true },
  { id: "3", name: "Partner Integration", slug: "partner-integration", owned: false },
]

export function useProjectDialogs() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS)
  const [dialogType, setDialogType] = useState<DialogType>(null)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [name, setName] = useState("")
  const [slug, setSlug] = useState("")
  const [loading, setLoading] = useState(false)

  const openCreate = () => {
    setName("")
    setSlug("")
    setActiveProject(null)
    setDialogType("create")
  }

  const openRename = (project: Project) => {
    setName(project.name)
    setSlug(project.slug)
    setActiveProject(project)
    setDialogType("rename")
  }

  const openDelete = (project: Project) => {
    setActiveProject(project)
    setDialogType("delete")
  }

  const close = () => {
    setDialogType(null)
    setActiveProject(null)
    setName("")
    setSlug("")
  }

  const handleNameChange = (value: string) => {
    setName(value)
    setSlug(toSlug(value))
  }

  const submit = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 400))

    if (dialogType === "create" && name.trim()) {
      const finalSlug = slug || toSlug(name.trim())
      if (!finalSlug) return setLoading(false)
      const newProject: Project = {
        id: String(Date.now()),
        name: name.trim(),
        slug: finalSlug,
        owned: true,
      }
      setProjects((prev) => [...prev, newProject])
    } else if (dialogType === "rename" && activeProject && name.trim()) {
      const finalSlug = slug || toSlug(name.trim())
      if (!finalSlug) return setLoading(false)
      setProjects((prev) =>
        prev.map((p) =>
          p.id === activeProject.id
            ? { ...p, name: name.trim(), slug: finalSlug }
            : p
        )
      )
    } else if (dialogType === "delete" && activeProject) {
      setProjects((prev) => prev.filter((p) => p.id !== activeProject.id))
    }

    setLoading(false)
    close()
  }

  return {
    projects,
    dialogType,
    activeProject,
    name,
    slug,
    loading,
    openCreate,
    openRename,
    openDelete,
    close,
    handleNameChange,
    submit,
  }
}
