"use client"

import { useEffect, useState } from "react"

export interface ProjectSharePerson {
  email: string | null
  displayName: string
  avatarUrl: string | null
  role: "owner" | "collaborator"
}

export interface ProjectShareData {
  projectId: string
  projectName: string
  canManage: boolean
  owner: ProjectSharePerson
  collaborators: ProjectSharePerson[]
}

function getErrorMessage(error: unknown, fallback: string) {
  if (error instanceof Error && error.message) {
    return error.message
  }

  return fallback
}

async function parseResponseError(response: Response, fallback: string) {
  const body = (await response.json().catch(() => null)) as { error?: string } | null
  return body?.error ?? fallback
}

async function requestProjectShare(projectId: string) {
  const response = await fetch(`/api/projects/${projectId}/collaborators`, {
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(await parseResponseError(response, "Unable to load access details"))
  }

  const body = (await response.json()) as { share: ProjectShareData }
  return body.share
}

export function useProjectShare(projectId: string, open: boolean) {
  const [data, setData] = useState<ProjectShareData | null>(null)
  const [inviteEmail, setInviteEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [removingEmail, setRemovingEmail] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!open) return

    let cancelled = false

    void requestProjectShare(projectId)
      .then((share) => {
        if (!cancelled) {
          setData(share)
          setError(null)
        }
      })
      .catch((loadError) => {
        if (!cancelled) {
          setError(getErrorMessage(loadError, "Unable to load access details"))
        }
      })

    return () => {
      cancelled = true
    }
  }, [open, projectId])

  const reload = async () => {
      try {
        const share = await requestProjectShare(projectId)
        setData(share)
      } catch (reloadError) {
        setError(getErrorMessage(reloadError, "Unable to refresh access list"))
      }
  }

  const invite = async () => {
    if (!inviteEmail.trim()) return

    setSubmitting(true)
    setError(null)

    try {
      const response = await fetch(`/api/projects/${projectId}/collaborators`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: inviteEmail }),
      })

      if (!response.ok) {
        throw new Error(await parseResponseError(response, "Unable to invite collaborator"))
      }

      setInviteEmail("")
      await reload()
    } catch (inviteError) {
      setError(getErrorMessage(inviteError, "Unable to invite collaborator"))
    } finally {
      setSubmitting(false)
    }
  }

  const remove = async (email: string) => {
    setRemovingEmail(email)
    setError(null)

    try {
      const response = await fetch(`/api/projects/${projectId}/collaborators`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error(await parseResponseError(response, "Unable to remove collaborator"))
      }

      await reload()
    } catch (removeError) {
      setError(getErrorMessage(removeError, "Unable to remove collaborator"))
    } finally {
      setRemovingEmail(null)
    }
  }

  const copyLink = async () => {
    const projectUrl = `${window.location.origin}/editor/${projectId}`

    try {
      await navigator.clipboard.writeText(projectUrl)
      setCopied(true)
      window.setTimeout(() => {
        setCopied(false)
      }, 1500)
    } catch {
      setError("Unable to copy link to clipboard")
    }
  }

  return {
    data,
    inviteEmail,
    loading: open && data === null && error === null,
    submitting,
    removingEmail,
    error,
    copied,
    setInviteEmail,
    invite,
    remove,
    copyLink,
  }
}
