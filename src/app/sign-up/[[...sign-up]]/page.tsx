import { SignUp } from "@clerk/nextjs"
import { BrainCircuit, Share2, ScrollText } from "lucide-react"

const features = [
  {
    icon: BrainCircuit,
    title: "AI Architecture Generation",
    description:
      "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Share2,
    title: "Real-time Collaboration",
    description:
      "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: ScrollText,
    title: "Instant Spec Generation",
    description:
      "Export a complete Markdown technical spec directly from the canvas graph.",
  },
]

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex">
      <div className="hidden lg:flex w-1/2 flex-col bg-bg-surface border-r border-border-default">
        <div className="px-12 pt-10">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-lg bg-accent-primary flex items-center justify-center shrink-0">
              <span
                className="text-bg-base font-bold text-xs leading-none"
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                G
              </span>
            </div>
            <span className="text-sm font-semibold text-text-primary">
              Ghost AI
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center px-12 py-16">
          <h1 className="text-4xl font-bold text-text-primary leading-tight tracking-tight mb-5">
            Design systems at the
            <br />
            speed of thought.
          </h1>
          <p className="text-text-secondary text-base leading-relaxed mb-12 max-w-sm">
            Describe your architecture in plain English. Ghost AI maps it to a
            shared canvas your whole team can refine in real time.
          </p>

          <ul className="space-y-7">
            {features.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex items-start gap-4">
                <div className="shrink-0 h-10 w-10 rounded-xl bg-accent-primary-dim flex items-center justify-center">
                  <Icon className="h-5 w-5 text-accent-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary leading-snug">
                    {title}
                  </p>
                  <p className="text-sm text-text-muted mt-1 leading-snug">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-12 pb-10">
          <p className="text-xs text-text-faint">
            © 2026 Ghost AI. All rights reserved.
          </p>
        </div>
      </div>

      <div className="flex flex-1 lg:w-1/2 items-center justify-center p-8 bg-bg-base">
        <SignUp />
      </div>
    </main>
  )
}
