"use server"

import { Separator } from "@/components/ui/separator"
import { db } from "@/lib/db"
import { ScheduleItem } from "./schedule-item"

export async function Schedule({ userId }: { userId: string }) {
    const appointments = await db.appointment.findMany({ where: { userId }, orderBy: { createdAt: "desc" } })

    return (
        <div className="mt-4 p-6 space-y-6">
            <div className=" mb-4">
                <h2 className="text-xl font-semibold tracking-tight">Appointment list</h2>
                <span className=" text-muted-foreground text-sm">manage your appointments</span>
            </div>
            <Separator className="" />
            {appointments.length === 0 ? (
                <p className=" text-muted-foreground">Schedule is empty</p>
            ) : (
                <div className="space-y-6">
                    <div className="space-y-2">
                        <p className="italic">Newest schedule</p>
                        <ScheduleItem appointment={appointments[0]} />
                    </div>
                    <div className="space-y-2">
                        <p className="italic">Other schedules</p>
                        {appointments.map((appointment, idx) => (
                            <ScheduleItem key={idx} appointment={appointment} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
