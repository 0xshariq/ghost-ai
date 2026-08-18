import Link from "next/link"
import { Lock } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export function AccessDenied() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-bg-base px-4">
      <div className="flex w-full max-w-md flex-col items-center rounded-3xl border border-border-subtle bg-bg-surface px-8 py-10 text-center">
        <div className="mb-4 rounded-2xl border border-border-subtle bg-bg-elevated p-4">
          <Lock className="h-8 w-8 text-text-secondary" />
        </div>
        <h1 className="text-lg font-medium text-text-primary">You don&apos;t have access to this workspace.</h1>
        <p className="mt-2 text-sm text-text-muted">
          Head back to your editor home to open a project you can access.
        </p>
        <Link
          href="/editor"
          className={`${buttonVariants({ size: "lg" })} mt-6`}
        >
          Back to Editor
        </Link>
      </div>
    </main>
  )
}
