import { prisma } from "@/lib/prisma"

export async function getProjectsForUser(userId: string, email: string) {
  const normalizedEmail = email.trim().toLowerCase()

  const [owned, collaborations] = await Promise.all([
    prisma.project.findMany({
      where: { ownerId: userId },
      orderBy: { createdAt: "desc" },
    }),
    prisma.projectCollaborator.findMany({
      where: { email: normalizedEmail },
      include: { project: true },
      orderBy: { createdAt: "desc" },
    }),
  ])

  return {
    owned,
    shared: collaborations.map((c) => c.project),
  }
}
