import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { tasks } from "@trigger.dev/sdk/v3"
import type { designAgent } from "@/trigger/design-agent"

export async function POST(request: Request) {
  const { userId } = await auth()
  if (!userId) return Response.json({ error: "Unauthorized" }, { status: 401 })

  const body: unknown = await request.json().catch(() => ({}))
  const b = typeof body === "object" && body !== null ? (body as Record<string, unknown>) : {}
  const prompt = typeof b.prompt === "string" ? b.prompt.trim() : ""
  const roomId = typeof b.roomId === "string" ? b.roomId.trim() : ""
  const projectId = typeof b.projectId === "string" ? b.projectId.trim() : ""

  if (!prompt || !roomId || !projectId) {
    return Response.json({ error: "Missing required fields" }, { status: 400 })
  }

  const handle = await tasks.trigger<typeof designAgent>("design-agent", { prompt, roomId, userId })

  await prisma.taskRun.create({
    data: { runId: handle.id, projectId, userId },
  })

  return Response.json({ runId: handle.id }, { status: 201 })
}
