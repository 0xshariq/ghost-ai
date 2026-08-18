"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"

export interface ProjectRow {
  id: string
  name: string
}

export type DialogType = "create" | "rename" | "delete" | null

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

function shortSuffix(): string {
  return Math.random().toString(36).slice(2, 6)
}

export function useProjectActions() {
  const router = useRouter()
  const pathname = usePathname()

  const [dialogType, setDialogType] = useState<DialogType>(null)
  const [activeProject, setActiveProject] = useState<ProjectRow | null>(null)
  const [name, setName] = useState("")
  const [roomId, setRoomId] = useState("")
  const [suffix, setSuffix] = useState("")
  const [loading, setLoading] = useState(false)

  const openCreate = () => {
    const s = shortSuffix()
    setSuffix(s)
    setName("")
    setRoomId("")
    setActiveProject(null)
    setDialogType("create")
  }

  const openRename = (project: ProjectRow) => {
    setName(project.name)
    setRoomId("")
    setActiveProject(project)
    setDialogType("rename")
  }

  const openDelete = (project: ProjectRow) => {
    setActiveProject(project)
    setDialogType("delete")
  }

  const close = () => {
    setDialogType(null)
    setActiveProject(null)
    setName("")
    setRoomId("")
  }

  const handleNameChange = (value: string) => {
    setName(value)
    const s = toSlug(value)
    setRoomId(s ? `${s}-${suffix}` : "")
  }

  const submit = async () => {
    if (!name.trim() && dialogType !== "delete") return
    setLoading(true)

    try {
      if (dialogType === "create") {
        const finalRoomId = roomId || `${toSlug(name.trim())}-${suffix}`
        const res = await fetch("/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: name.trim(), id: finalRoomId }),
        })
        if (res.ok) {
          const { project } = (await res.json()) as { project: { id: string } }
          router.push(`/editor/${project.id}`)
        }
      } else if (dialogType === "rename" && activeProject) {
        await fetch(`/api/projects/${activeProject.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: name.trim() }),
        })
        close()
        router.refresh()
      } else if (dialogType === "delete" && activeProject) {
        await fetch(`/api/projects/${activeProject.id}`, { method: "DELETE" })
        const isActive = pathname === `/editor/${activeProject.id}`
        close()
        if (isActive) {
          router.push("/editor")
        } else {
          router.refresh()
        }
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    dialogType,
    activeProject,
    name,
    roomId,
    loading,
    openCreate,
    openRename,
    openDelete,
    close,
    handleNameChange,
    submit,
  }
}
