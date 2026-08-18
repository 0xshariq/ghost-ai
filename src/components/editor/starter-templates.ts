import { MarkerType } from "@xyflow/react"
import type { CanvasNode, CanvasEdge, NodeShape } from "@/types/canvas"
import { NODE_COLORS, SHAPE_DEFAULTS } from "@/types/canvas"

export interface CanvasTemplate {
  id: string
  name: string
  description: string
  nodes: CanvasNode[]
  edges: CanvasEdge[]
}

const C = NODE_COLORS

function n(
  id: string,
  label: string,
  colorIdx: number,
  shape: NodeShape,
  x: number,
  y: number,
  w?: number,
  h?: number
): CanvasNode {
  const def = SHAPE_DEFAULTS[shape]
  return {
    id,
    type: "canvasNode",
    position: { x, y },
    data: { label, color: C[colorIdx].fill, textColor: C[colorIdx].text, shape },
    width: w ?? def.width,
    height: h ?? def.height,
  }
}

const MARKER_END = {
  type: MarkerType.ArrowClosed,
  color: "rgba(255,255,255,0.4)",
  width: 16,
  height: 16,
} as const

function e(id: string, source: string, target: string): CanvasEdge {
  return {
    id,
    type: "canvasEdge",
    source,
    target,
    data: { label: "" },
    markerEnd: MARKER_END,
  }
}

export const CANVAS_TEMPLATES: CanvasTemplate[] = [
  {
    id: "microservices",
    name: "Microservices",
    description: "API Gateway routes traffic to isolated services, each backed by a dedicated database and connected via a shared message bus.",
    nodes: [
      n("ms-gw",    "API Gateway",       1, "rectangle", 240,   0),
      n("ms-auth",  "Auth Service",      2, "pill",        0, 160),
      n("ms-users", "User Service",      7, "rectangle",  200, 160),
      n("ms-orders","Order Service",     3, "rectangle",  380, 160),
      n("ms-pay",   "Payment Service",   5, "rectangle",  560, 160),
      n("ms-udb",   "User DB",           0, "cylinder",   200, 320),
      n("ms-odb",   "Order DB",          0, "cylinder",   380, 320),
    ],
    edges: [
      e("ms-e1", "ms-gw",    "ms-auth"),
      e("ms-e2", "ms-gw",    "ms-users"),
      e("ms-e3", "ms-gw",    "ms-orders"),
      e("ms-e4", "ms-gw",    "ms-pay"),
      e("ms-e5", "ms-users", "ms-udb"),
      e("ms-e6", "ms-orders","ms-odb"),
    ],
  },
  {
    id: "cicd-pipeline",
    name: "CI/CD Pipeline",
    description: "End-to-end delivery from source commit through build, test, containerisation, and staged deployment to production.",
    nodes: [
      n("ci-src",   "Source Code",          1, "rectangle",    0, 60),
      n("ci-build", "Build",                3, "rectangle",  220, 60),
      n("ci-test",  "Test Suite",           6, "diamond",    440, 30),
      n("ci-pkg",   "Package",              1, "rectangle",  680, 60),
      n("ci-stg",   "Deploy Staging",       3, "rectangle",  900, 60),
      n("ci-int",   "Integration Tests",    2, "diamond",   1120, 30),
      n("ci-prod",  "Deploy Production",    7, "rectangle", 1360, 60),
    ],
    edges: [
      e("ci-e1", "ci-src",   "ci-build"),
      e("ci-e2", "ci-build", "ci-test"),
      e("ci-e3", "ci-test",  "ci-pkg"),
      e("ci-e4", "ci-pkg",   "ci-stg"),
      e("ci-e5", "ci-stg",   "ci-int"),
      e("ci-e6", "ci-int",   "ci-prod"),
    ],
  },
  {
    id: "event-driven",
    name: "Event-Driven System",
    description: "Producers publish events to a central bus. Independent consumers handle emails, push notifications, analytics, and error queues.",
    nodes: [
      n("ev-p1",     "Producer A",        1, "rectangle",   0, 100),
      n("ev-p2",     "Producer B",        1, "rectangle",   0, 240),
      n("ev-broker", "Message Broker",    3, "hexagon",   260, 130),
      n("ev-c1",     "Consumer A",        6, "rectangle", 540,  60),
      n("ev-c2",     "Consumer B",        7, "rectangle", 540, 220),
      n("ev-store",  "Event Store",       0, "cylinder",  260, 360),
      n("ev-dlq",    "Dead Letter Queue", 4, "rectangle", 540, 380),
    ],
    edges: [
      e("ev-e1", "ev-p1",     "ev-broker"),
      e("ev-e2", "ev-p2",     "ev-broker"),
      e("ev-e3", "ev-broker", "ev-c1"),
      e("ev-e4", "ev-broker", "ev-c2"),
      e("ev-e5", "ev-broker", "ev-store"),
      e("ev-e6", "ev-c1",     "ev-dlq"),
      e("ev-e7", "ev-c2",     "ev-dlq"),
    ],
  },
]
