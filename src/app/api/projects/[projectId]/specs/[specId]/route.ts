import { get } from "@vercel/blob"
import { prisma } from "@/lib/prisma"
import { getCurrentProjectIdentity, userHasProjectAccess } from "@/lib/project-access"
import type { NextRequest } from "next/server"

export async function GET(
  _request: NextRequest,
  ctx: { params: Promise<{ projectId: string; specId: string }> }
) {
  const identity = await getCurrentProjectIdentity()
  if (!identity.userId) return Response.json({ error: "Unauthorized" }, { status: 401 })

  const { projectId, specId } = await ctx.params

  const hasAccess = await userHasProjectAccess(projectId, identity)
  if (!hasAccess) return Response.json({ error: "Not found" }, { status: 404 })

  const spec = await prisma.projectSpec.findFirst({
    where: { id: specId, projectId },
  })
  if (!spec) return Response.json({ error: "Not found" }, { status: 404 })

  const result = await get(spec.filePath, { access: "private" })
  if (!result || result.statusCode !== 200 || !result.stream) {
    return Response.json({ error: "File not found" }, { status: 404 })
  }

  return new Response(result.stream, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  })
}
