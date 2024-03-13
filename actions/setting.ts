"use server"

import { getUserByEmail, getUserById } from "@/data/user"
import { currentUser } from "@/lib/auth"
import { SettingSchema } from "@/schemas/auth"

import { User } from "next-auth"
import { z } from "zod"
import bcrypt from "bcryptjs"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function setting(values: z.infer<typeof SettingSchema>) {
    const user = (await currentUser()) as User

    if (!user) {
        return { error: "Unauthorized" }
    }

    const dbUser = await getUserById(user.id as string)

    if (!dbUser) {
        return { error: "Unauthorized" }
    }

    if (user.isOAuth) {
        values.email = undefined
        values.password = undefined
        values.newPassword = undefined
    }

    if (values.email && values.email !== user.email) {
        const existingUser = await getUserByEmail(values.email)

        if (existingUser) return { error: "Email already in use" }
    }

    if (values.password && values.newPassword && dbUser.password) {
        const passwordMatch = await bcrypt.compare(values.password, dbUser.password)

        if (!passwordMatch) return { error: "Incorrect password" }

        const hashedPassword = await bcrypt.hash(values.newPassword, 10)

        values.password = hashedPassword
        values.newPassword = undefined
    }

    await db.user.update({
        where: { id: dbUser.id },
        data: { ...values },
    })

    revalidatePath(`/${dbUser.id}/setting`)
    return { success: "Settings updated" }
}
