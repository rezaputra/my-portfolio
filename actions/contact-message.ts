"use server"

import { db } from "@/lib/db"
import { ContactSchema } from "@/schemas/contact"
import { z } from "zod"

export async function contactMessage(values: z.infer<typeof ContactSchema>) {
    const validateFields = ContactSchema.safeParse(values)

    if (!validateFields.success) {
        return { error: "Invalid fields" }
    }

    const { name, email, subject, message } = validateFields.data

    await db.message.create({ data: { name, email, subject, message } })

    return { success: "Message sended!" }
}
