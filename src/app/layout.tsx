import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/ui/themes"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ghost AI",
  description: "AI-powered design collaboration",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        theme: dark,
        variables: {
          colorBackground: "var(--color-bg-base)",
          colorNeutral: "var(--color-text-primary)",
          colorPrimary: "var(--color-accent-primary)",
          colorPrimaryForeground: "var(--color-bg-base)",
          colorForeground: "var(--color-text-primary)",
          colorInput: "var(--color-bg-elevated)",
          colorInputForeground: "var(--color-text-primary)",
          colorDanger: "var(--color-state-error)",
          colorSuccess: "var(--color-state-success)",
          colorWarning: "var(--color-state-warning)",
          borderRadius: "var(--radius)",
          fontFamily: "var(--font-geist-sans)",
        },
      }}
    >
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  )
}
