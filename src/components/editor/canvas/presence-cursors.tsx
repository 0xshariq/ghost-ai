"use client"

import { useEffect, useRef, useState } from "react"
import { useOthers } from "@liveblocks/react"
import { useReactFlow, useViewport } from "@xyflow/react"
import { Loader2 } from "lucide-react"

interface PresenceCursorParticipant {
  connectionId: number
  presence: {
    cursor: { x: number; y: number } | null
    thinking: boolean
  }
  info?: {
    name?: string
    color?: string
  }
}

interface PresenceCursorProps {
  other: PresenceCursorParticipant
  containerRef: React.RefObject<HTMLDivElement | null>
  viewport: ReturnType<typeof useViewport>
}

function PresenceCursor({ other, containerRef, viewport }: PresenceCursorProps) {
  const { flowToScreenPosition } = useReactFlow()
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null)
  const cursor = other.presence.cursor

  useEffect(() => {
    if (!cursor || !containerRef.current) {
      setPosition(null)
      return
    }

    const rect = containerRef.current.getBoundingClientRect()
    const screen = flowToScreenPosition(cursor)
    setPosition({ x: screen.x - rect.left, y: screen.y - rect.top })
  }, [containerRef, cursor, flowToScreenPosition, viewport])

  if (!position) return null

  const color = other.info?.color ?? "#888888"
  const name = other.info?.name ?? "Anonymous"

  return (
    <div className="absolute z-50" style={{ left: position.x, top: position.y }}>
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M1 1L14 8.5L8 10.5L5.5 17L1 1Z" fill={color} stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <div className="mt-0.5 flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium text-white" style={{ background: color, whiteSpace: "nowrap" }}>
        {other.presence.thinking && <Loader2 className="h-2.5 w-2.5 animate-spin" />}
        {name}
      </div>
    </div>
  )
}

export function PresenceCursors() {
  const containerRef = useRef<HTMLDivElement>(null)
  const others = useOthers()
  const viewport = useViewport()

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      {others.map((other) => (
        <PresenceCursor
          key={other.connectionId}
          other={other}
          containerRef={containerRef}
          viewport={viewport}
        />
      ))}
    </div>
  )
}
