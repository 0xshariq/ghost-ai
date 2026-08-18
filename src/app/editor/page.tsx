import { redirect } from "next/navigation"
import { getProjectsForUser } from "@/lib/projects"
import { getCurrentProjectIdentity } from "@/lib/project-access"
import { EditorHomeClient } from "@/components/editor/editor-home-client"

export default async function EditorPage() {
  const identity = await getCurrentProjectIdentity()
  if (!identity.userId) redirect("/sign-in")

  const { owned, shared } = await getProjectsForUser(
    identity.userId,
    identity.primaryEmailAddress ?? ""
  )

  return (
    <EditorHomeClient
      ownedProjects={owned.map((p) => ({ id: p.id, name: p.name }))}
      sharedProjects={shared.map((p) => ({ id: p.id, name: p.name }))}
    />
  )
}
