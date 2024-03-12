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

export const editAppointmentSchema = z.object({
    id: z.string().min(1, { message: "Id is required" }),
    userId: z.string().min(1, { message: "User is required" }),
    date: z.date(),
    time: z.string().min(1, { message: "Time is required" }),
    phone: z.optional(z.string()),
    industry: z.optional(z.string()),
    size: z.optional(z.string()),
    describe: z.string().min(1, { message: "Describe is required" }),
})

export const cancelAppointmentSchema = z.object({
    id: z.string().min(1, { message: "Id is required" }),
})

export const appointmentSchema = z.object({
    id: z.optional(z.string()),
    userId: z.string().min(1, { message: "User is required" }),
    date: z.date(),
    time: z.string().min(1, { message: "Time is required" }),
    phone: z.optional(z.string()),
    industry: z.optional(z.string()),
    size: z.optional(z.string()),
    describe: z.string().min(1, { message: "Describe is required" }),
})
