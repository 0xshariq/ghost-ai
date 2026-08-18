import { clerkClient } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { getAccessibleProject, type ProjectIdentity } from "@/lib/project-access"

interface ClerkEmailAddressLike {
  id: string
  emailAddress: string
}

interface ClerkUserLike {
  id: string
  imageUrl: string
  primaryEmailAddressId: string | null
  firstName: string | null
  lastName: string | null
  username: string | null
  emailAddresses: ClerkEmailAddressLike[]
}

export interface ProjectSharePerson {
  email: string | null
  displayName: string
  avatarUrl: string | null
  role: "owner" | "collaborator"
}

export interface ProjectShareDetails {
  projectId: string
  projectName: string
  canManage: boolean
  owner: ProjectSharePerson
  collaborators: ProjectSharePerson[]
}

export function normalizeCollaboratorEmail(email: string) {
  return email.trim().toLowerCase()
}

export function isValidCollaboratorEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function getUserPrimaryEmail(user: ClerkUserLike) {
  const primary =
    user.emailAddresses.find(
      (email) => email.id === user.primaryEmailAddressId
    ) ?? user.emailAddresses[0]

  return primary?.emailAddress
    ? normalizeCollaboratorEmail(primary.emailAddress)
    : null
}

function getUserDisplayName(user: ClerkUserLike | null, fallback?: string | null) {
  if (!user) {
    return fallback ?? "Unknown user"
  }

  const fullName = [user.firstName, user.lastName].filter(Boolean).join(" ").trim()

  return fullName || user.username || fallback || "Unknown user"
}

const MAX_COLLABORATOR_LOOKUP = 500

async function getClerkUsersByEmail(emails: string[]) {
  if (emails.length === 0) {
    return new Map<string, ClerkUserLike>()
  }

  const limited = emails.slice(0, MAX_COLLABORATOR_LOOKUP)
  const client = await clerkClient()
  const { data } = await client.users.getUserList({
    emailAddress: limited,
    limit: limited.length,
  })

  const emailSet = new Set(limited)
  const userMap = new Map<string, ClerkUserLike>()

  for (const user of data) {
    for (const emailAddress of user.emailAddresses) {
      const normalizedEmail = normalizeCollaboratorEmail(emailAddress.emailAddress)

      if (emailSet.has(normalizedEmail) && !userMap.has(normalizedEmail)) {
        userMap.set(normalizedEmail, user as ClerkUserLike)
      }
    }
  }

  return userMap
}

async function getClerkUserById(userId: string) {
  try {
    const client = await clerkClient()
    return (await client.users.getUser(userId)) as ClerkUserLike
  } catch {
    return null
  }
}

export async function getProjectShareDetails(
  projectId: string,
  identity: ProjectIdentity
): Promise<ProjectShareDetails | null> {
  const accessibleProject = await getAccessibleProject(projectId, identity)

  if (!accessibleProject) {
    return null
  }

  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: {
      id: true,
      name: true,
      ownerId: true,
      collaborators: {
        select: {
          email: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  })

  if (!project) {
    return null
  }

  const collaboratorEmails = project.collaborators.map((collaborator) =>
    normalizeCollaboratorEmail(collaborator.email)
  )

  const [ownerUser, collaboratorUsersByEmail] = await Promise.all([
    getClerkUserById(project.ownerId),
    getClerkUsersByEmail(collaboratorEmails),
  ])

  const ownerEmail =
    (ownerUser ? getUserPrimaryEmail(ownerUser) : null) ??
    (identity.userId === project.ownerId ? identity.primaryEmailAddress : null)

  return {
    projectId: project.id,
    projectName: project.name,
    canManage: identity.userId === project.ownerId,
    owner: {
      email: ownerEmail,
      displayName: getUserDisplayName(ownerUser, ownerEmail ?? "Project owner"),
      avatarUrl: ownerUser?.imageUrl ?? null,
      role: "owner",
    },
    collaborators: collaboratorEmails.map((email) => {
      const user = collaboratorUsersByEmail.get(email) ?? null

      return {
        email,
        displayName: getUserDisplayName(user, email),
        avatarUrl: user?.imageUrl ?? null,
        role: "collaborator" as const,
      }
    }),
  }
}
