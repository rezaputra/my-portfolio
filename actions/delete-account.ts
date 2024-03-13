"use server"

import { currentUser } from "@/lib/auth"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function deleteAccount(id: string) {
    const user = await currentUser()

    if (!user) return null
    if (!id) return { error: "Invalid fields" }

    const existingUser = await db.user.findUnique({ where: { id } })

    if (!existingUser) return { error: "User not found!" }

    await db.user.delete({ where: { id } })

    revalidatePath(`/${existingUser.id}/setting`)
    return { success: "Account successfully deleted!" }
}
