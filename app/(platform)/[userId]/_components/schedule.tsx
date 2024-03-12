"use client"

import fetcher from "@/lib/fetcher"
import { Appointment } from "@prisma/client"
import useSWR from "swr"

import { Separator } from "@/components/ui/separator"

import { AppointmentItem } from "./appointment-item"

export function Schedule({ userId }: { userId: string }) {
    const { data: appointments, error } = useSWR<Appointment[]>("/api/appointment?", fetcher)

    if (error) return <div>Failed to load</div>
    if (!appointments) return <div className=" h-full w-full flex items-center justify-center">Loading...</div>

    return (
        <div className="mt-4 p-6 space-y-6">
            <div className=" mb-4">
                <h2 className="text-xl font-semibold tracking-tight">Appointment list</h2>
                <span className=" text-muted-foreground text-sm">manage your appointments</span>
            </div>
            <Separator className="" />

            <div className=" space-y-6">
                <div className=" space-y-2">
                    <p className=" italic">Newest schedule</p>
                    <AppointmentItem appointment={appointments[0]} />
                </div>
                <div className=" space-y-2">
                    <p className=" italic">Other schedules</p>
                    {appointments.map((appointment, idx) => (
                        <AppointmentItem key={idx} appointment={appointment} />
                    ))}
                </div>
            </div>
        </div>
    )
}
