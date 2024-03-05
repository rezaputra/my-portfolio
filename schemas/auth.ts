import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email({ message: "Email is invalid" }),
    password: z.string().min(1, { message: "Password is required" }),
})

export const RegisterSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Email is invalid" }),
    password: z.string().min(1, { message: "Password is required" }),
})
