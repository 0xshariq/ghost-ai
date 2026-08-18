import { redirect } from "next/navigation"
import { AccessDenied } from "@/components/editor/access-denied"
import { EditorWorkspaceClient } from "@/components/editor/editor-workspace-client"
import { getProjectsForUser } from "@/lib/projects"
import {
  getAccessibleProject,
  getCurrentProjectIdentity,
} from "@/lib/project-access"

export default async function EditorWorkspacePage(
  props: PageProps<"/editor/[roomId]">
) {
  const identity = await getCurrentProjectIdentity()

  if (!identity.userId) redirect("/sign-in")

  const { roomId } = await props.params
  const project = await getAccessibleProject(roomId, identity)

  if (!project) {
    return <AccessDenied />
  }

  const { owned, shared } = await getProjectsForUser(
    identity.userId,
    identity.primaryEmailAddress ?? ""
  )

  return (
    <EditorWorkspaceClient
      currentProject={{ id: project.id, name: project.name }}
      ownedProjects={owned.map((item) => ({ id: item.id, name: item.name }))}
      sharedProjects={shared.map((item) => ({ id: item.id, name: item.name }))}
      roomId={roomId}
    />
  )
}
