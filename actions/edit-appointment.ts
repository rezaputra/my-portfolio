"use server"

import { editAppointmentSchema } from "@/schemas/appointment"
import { z } from "zod"

import { setHours } from "date-fns"
import moment from "moment-timezone"

import devTime from "@/constants/dev-time.json"
import { currentUser } from "@/lib/auth"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function editAppointment(values: z.infer<typeof editAppointmentSchema>) {
    const validateFields = editAppointmentSchema.safeParse(values)

    const user = await currentUser()

    if (!user) return null

    if (!validateFields.success) {
        return { error: "Invalid fields" }
    }

    const { id, date, time, userId, phone, describe, size, industry } = validateFields.data

    const isDateDisabled = (date: Date): boolean => {
        const currentDevTime = moment.tz(date, devTime.timezone)
        const devDay = currentDevTime.day()
        const clientDay = moment(date).day()

        return clientDay === 0 || devDay === 0
    }
    const checkIsDateDisabled = isDateDisabled(date)

    if (checkIsDateDisabled) return { error: "Appointments available on weekdays only!" }

    const convertedDate = setHours(date, parseInt(time))

    const checkAppointment = await db.appointment.findFirst({
        where: { id, userId },
    })

    if (!checkAppointment || checkAppointment.status !== "WAITING") return { error: "Can't edit expired appointment!" }

    await db.appointment.update({
        where: { userId, id },
        data: { userId, datetime: convertedDate, phone, describe, size, industry },
    })

    revalidatePath(`/${userId}/appointment?tab=schedule`)

    return {
        success: `Appointment successfully updated`,
    }
}
