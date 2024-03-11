import { db } from "@/lib/db"

export async function getAppointmentsByUserId(userId: string) {
    try {
        const appointments = await db.appointment.findMany({ where: { userId } })
        return appointments
    } catch {
        return null
    }
}
