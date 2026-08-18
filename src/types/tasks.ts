import { z } from "zod"

export const AiStatusFeedMessageSchema = z.object({
  text: z.string().optional(),
  status: z.enum(["start", "thinking", "complete", "error"]).optional(),
})

export type AiStatusFeedMessage = z.infer<typeof AiStatusFeedMessageSchema>

export const ChatFeedMessageSchema = z.object({
  sender: z.string(),
  role: z.enum(["user", "assistant"]),
  content: z.string(),
  timestamp: z.string(),
})

export type ChatFeedMessage = z.infer<typeof ChatFeedMessageSchema>
