"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import type { CanvasNode, CanvasEdge } from "@/types/canvas"

export type SaveStatus = "idle" | "saving" | "saved" | "error"

export function useCanvasAutosave(
  projectId: string,
  nodes: CanvasNode[],
  edges: CanvasEdge[]
): { status: SaveStatus; save: () => void } {
  const [status, setStatus] = useState<SaveStatus>("idle")
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hasMountedRef = useRef(false)

  const nodesRef = useRef(nodes)
  const edgesRef = useRef(edges)
  const projectIdRef = useRef(projectId)

  useEffect(() => {
    nodesRef.current = nodes
    edgesRef.current = edges
    projectIdRef.current = projectId
  })

  // Reset to idle after showing saved/error so the button returns to "Save".
  useEffect(() => {
    if (status !== "saved" && status !== "error") return
    resetTimerRef.current = setTimeout(() => setStatus("idle"), 2000)
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current)
    }
  }, [status])

  const doSave = useCallback(async () => {
    setStatus("saving")
    try {
      const res = await fetch(`/api/projects/${projectIdRef.current}/canvas`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes: nodesRef.current, edges: edgesRef.current }),
      })
      setStatus(res.ok ? "saved" : "error")
    } catch {
      setStatus("error")
    }
  }, [])

  useEffect(() => {
    // Skip saving on the initial render before any user/collaboration changes.
    if (!hasMountedRef.current) {
      hasMountedRef.current = true
      return
    }

    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(doSave, 2000)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodes, edges])

  const save = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    doSave()
  }, [doSave])

  return { status, save }
}
