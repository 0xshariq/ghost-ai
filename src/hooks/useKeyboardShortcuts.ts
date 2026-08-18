"use client"

import { useEffect } from "react"
import type { ReactFlowInstance } from "@xyflow/react"

interface Options {
  reactFlow: ReactFlowInstance | null
  undo: () => void
  redo: () => void
}

function isEditable(el: Element | null): boolean {
  if (!el) return false
  const tag = (el as HTMLElement).tagName
  if (tag === "INPUT" || tag === "TEXTAREA") return true
  if ((el as HTMLElement).isContentEditable) return true
  return false
}

export function useKeyboardShortcuts({ reactFlow, undo, redo }: Options) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (isEditable(document.activeElement)) return

      const meta = event.metaKey || event.ctrlKey

      if (!meta && (event.key === "+" || event.key === "=")) {
        event.preventDefault()
        reactFlow?.zoomIn({ duration: 200 })
        return
      }

      if (!meta && event.key === "-") {
        event.preventDefault()
        reactFlow?.zoomOut({ duration: 200 })
        return
      }

      if (meta && event.shiftKey && event.key === "z") {
        event.preventDefault()
        redo()
        return
      }

      if (meta && !event.shiftKey && event.key === "z") {
        event.preventDefault()
        undo()
        return
      }

      if (meta && event.key === "y") {
        event.preventDefault()
        redo()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [reactFlow, undo, redo])
}
