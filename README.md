# Ghost AI

Ghost AI is a collaborative system design workspace for turning plain-English ideas into editable architecture diagrams and technical specifications. Authenticated teams can work together on a shared React Flow canvas, ask Gemini to generate or extend a design, and persist the final Markdown specification for review or download.

## What it does

- Create and manage architecture projects.
- Invite collaborators by email and control project access.
- Edit architecture nodes and edges on a real-time shared canvas.
- Import starter designs for common patterns such as microservices, event-driven systems, and CI/CD pipelines.
- Use a durable Trigger.dev task to generate architecture changes from a prompt.
- Generate Markdown technical specifications from the current graph and chat context.
- Save canvas snapshots and generated specifications in Vercel Blob.
- Preview and download saved specifications.
- Show collaborator presence, live cursors, AI status, and shared chat messages.

## Technology

- **Next.js 16** and **React 19** for the full-stack application.
- **TypeScript** with strict type checking.
- **Clerk** for authentication and route protection.
- **Prisma 7** with PostgreSQL for project metadata, collaborators, and task records.
- **Liveblocks** and **React Flow** for real-time collaborative canvas state.
- **Trigger.dev** for durable AI generation tasks and realtime run status.
- **Google Gemini** through the Vercel AI SDK for architecture and specification generation.
- **Vercel Blob** for canvas and Markdown artifact storage.
- **Tailwind CSS v4** and **shadcn/ui** for the dark technical workspace interface.

## Architecture

The app keeps each concern in its own boundary:

```text
app/                         Next.js routes, pages, and API handlers
src/components/              Editor UI and canvas composition
src/hooks/                   Client-side interaction and autosave hooks
src/lib/                     Prisma, access control, Liveblocks, and utilities
src/types/                   Shared canvas and task contracts
prisma/                      Multi-file Prisma schema and migrations
trigger/                     Durable AI task definitions
public/                      Static assets
```

Project metadata and relationships are stored in PostgreSQL. Large generated artifacts are stored in Vercel Blob, with their URLs referenced from Prisma records. API routes authenticate requests and verify project membership before issuing tokens or mutating project resources; long-running AI work runs in Trigger.dev rather than inside request handlers.

## Requirements

- Node.js 20 or newer
- npm
- PostgreSQL
- A Clerk application
- Liveblocks credentials
- Trigger.dev credentials and project
- Google AI Studio credentials
- Vercel Blob storage credentials

## Local setup

1. Clone the repository and enter the project directory:

   ```bash
   git clone https://github.com/0xshariq/ghost-ai.git
   cd ghost-ai
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add the environment variables listed below to `.env.local`.

4. Start the Next.js development server:

   ```bash
   npm run dev
   ```

5. In a second terminal, start the Trigger.dev development worker when working on AI tasks:

   ```bash
   npx trigger.dev@latest dev
   ```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

The project reads these values at runtime. Do not commit real credentials.

```env
APP_URL=http://localhost:3000

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# PostgreSQL / Prisma
DATABASE_URL=

# Liveblocks
LIVEBLOCKS_SECRET_KEY=

# Trigger.dev
TRIGGER_PROJECT_REF=
TRIGGER_SECRET_KEY=
NEXT_PUBLIC_TRIGGER_PUBLIC_API_KEY=

# Vercel Blob
BLOB_READ_WRITE_TOKEN=

# Google Gemini
GOOGLE_GENERATIVE_AI_API_KEY=
GEMINI_MODEL=gemini-2.0-flash
GEMINI_SPEC_MODEL=gemini-2.0-flash
```

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Start the production server. |
| `npm run lint` | Run ESLint. |
| `npm run prisma:generate` | Regenerate the Prisma client. |
| `npm run prisma:migrate` | Create and apply a development migration. |
| `npm run prisma:deploy` | Apply migrations in a deployment environment. |
| `npm run prisma:studio` | Open Prisma Studio. |

## Core routes

- `/` redirects users based on authentication state.
- `/editor` lists owned and shared projects.
- `/editor/[roomId]` opens a collaborative project workspace.
- `/api/projects` manages project listing and creation.
- `/api/projects/[projectId]/collaborators` manages project invitations and access.
- `/api/projects/[projectId]/canvas` loads and saves canvas snapshots.
- `/api/ai/design` starts architecture generation.
- `/api/ai/spec` starts technical specification generation.

## Development notes

- The product is intentionally dark-only and uses shared CSS design tokens.
- Client components are limited to interactive or real-time surfaces.
- `components/ui` contains shadcn foundation components and should remain reusable.
- Canvas snapshots and specs should not be written to the legacy `data/` directory.
- Any mutation must verify authentication and project ownership or collaboration access.
- AI tasks should remain durable and idempotent where possible.

## Status

The core editor, authentication, project management, collaboration, AI design generation, specification generation, persistence, preview, and download flows are implemented. The next feature area can be tracked in `context/progress-tracker.md`.

## License

This project is private and intended for the Ghost AI application.
