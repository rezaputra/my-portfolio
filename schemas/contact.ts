import { z } from "zod"
export const ContactSchema = z.object({
    name: z.optional(z.string().min(2, { message: "Name is required" }).max(50)),
    email: z.string().email({ message: "Email is not valid" }),
    subject: z.optional(z.string().min(2, { message: "Subject is required" }).max(50)),
    message: z.string().min(2, { message: "Message is required" }).max(50),
})
