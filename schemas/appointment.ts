import { z } from "zod"

export const createAppointmentSchema = z.object({
    userId: z.string().min(1, { message: "User is required" }),
    date: z.date(),
    time: z.string().min(1, { message: "Time is required" }),
    phone: z.optional(z.string()),
    industry: z.optional(z.string()),
    size: z.optional(z.string()),
    describe: z.string().min(1, { message: "Describe is required" }),
})
