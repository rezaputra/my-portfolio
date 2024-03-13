"use server"

import { cancelAppointmentSchema } from "@/schemas/appointment"
import { z } from "zod"

import { currentUser } from "@/lib/auth"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function cancelAppointment(id: string) {
    const user = await currentUser()

    if (!user) return null

    const existingAppointment = await db.appointment.findUnique({ where: { id } })

    if (!existingAppointment) return { error: "Appointment not found!" }

    await db.appointment.update({
        where: { id },
        data: { status: "CANCELED" },
    })

    revalidatePath(`/${user.id}/appointment?tab=schedule`)

    return {
        success: `Appointment successfully canceled`,
    }
}
