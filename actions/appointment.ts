"use server"

import { appointmentSchema, createAppointmentSchema } from "@/schemas/appointment"
import { z } from "zod"

import moment from "moment-timezone"
import { setHours } from "date-fns"

import devTime from "@/constants/dev-time.json"
import { db } from "@/lib/db"
import { AppointmentStatus } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { currentUser } from "@/lib/auth"

export async function appointment(values: z.infer<typeof appointmentSchema>, action: "create" | "edit") {
    const validateFields = appointmentSchema.safeParse(values)

    const user = await currentUser()

    if (!user) return null

    if (!validateFields.success) {
        return { error: "Invalid fields" }
    }

    const { id, date, time, userId, phone, describe, size, industry } = validateFields.data

    const isDateDisabled = (date: Date) => {
        const currentDevTime = moment.tz(date, devTime.timezone)
        const devDay = currentDevTime.day()
        const clientDay = moment(date).day()

        return clientDay === 0 || devDay === 0
    }

    const checkIsDateDisabled = isDateDisabled(date)
    if (checkIsDateDisabled) return { error: "Appointments available on weekdays only!" }

    const convertedDate = setHours(date, parseInt(time))

    const checkUncompletedAppointment = await db.appointment.findFirst({
        where: { userId, status: { in: [AppointmentStatus.WAITING, AppointmentStatus.CONFIRM] } },
    })

    if (checkUncompletedAppointment)
        return { error: "You have an outstanding appointment, Cancel the current appointment!" }

    if (action === "create") {
        await db.appointment.create({ data: { userId, datetime: convertedDate, phone, describe, size, industry } })

        revalidatePath(`${user.id}?tab=appointment&section=create`)
        return {
            success: `Appointment successfully created`,
        }
    }

    if (action === "edit") {
        await db.appointment.update({
            where: { id, userId },
            data: { datetime: convertedDate, phone, describe, size, industry },
        })

        revalidatePath(`${user.id}?tab=appointment&section=schedule`)
        return {
            success: `Appointment successfully update`,
        }
    }
}
