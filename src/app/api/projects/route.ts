import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const { userId } = await auth()
  if (!userId) return Response.json({ error: "Unauthorized" }, { status: 401 })

  const projects = await prisma.project.findMany({
    where: { ownerId: userId },
    orderBy: { createdAt: "desc" },
  })

  return Response.json({ projects })
}

export async function POST(request: Request) {
  const { userId } = await auth()
  if (!userId) return Response.json({ error: "Unauthorized" }, { status: 401 })

  const body: unknown = await request.json().catch(() => ({}))
  const b = typeof body === "object" && body !== null ? (body as Record<string, unknown>) : {}
  const name = typeof b.name === "string" ? (b.name.trim() || "Untitled Project") : "Untitled Project"
  const id = typeof b.id === "string" && b.id.trim() ? b.id.trim() : undefined

  const project = await prisma.project.create({
    data: { ...(id ? { id } : {}), ownerId: userId, name },
  })

  return Response.json({ project }, { status: 201 })
}
