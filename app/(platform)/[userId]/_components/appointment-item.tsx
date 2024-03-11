import moment from "moment-timezone"
import { Options } from "./options"
import { Appointment } from "@prisma/client"

import { TbClockQuestion } from "react-icons/tb"
import { TbClockCheck } from "react-icons/tb"
import { TbClockX } from "react-icons/tb"
import { TbClockHeart } from "react-icons/tb"

import { TbCalendarQuestion } from "react-icons/tb"
import { LuCalendarCheck } from "react-icons/lu"
import { LuCalendarX2 } from "react-icons/lu"
import { LuCalendarHeart } from "react-icons/lu"

interface AppointmentItemProps {
    appointment: Appointment
}

export function AppointmentItem({ appointment }: AppointmentItemProps) {
    return (
        <div className="flex flex-col items-center w-full border rounded-sm rounded-r-md">
            <div className=" md:flex items-center justify-between w-full p-4 py-2">
                <div className=" flex space-x-4 items-center">
                    {appointment.status === "WAITING" && <TbCalendarQuestion className="w-4 h-4" />}
                    {appointment.status === "CONFIRM" && <LuCalendarCheck className="w-4 h-4" />}
                    {appointment.status === "CANCELED" && <LuCalendarX2 className="w-4 h-4" />}
                    {appointment.status === "COMPLETED" && <LuCalendarHeart className="w-4 h-4" />}
                    <p className=" lowercase text-sm font-light">
                        {moment(appointment.datetime).format("DD-MM-YYYY - HH:mm A")}
                    </p>
                </div>
                <div className=" flex space-x-2 items-center">
                    {appointment.status === "WAITING" && <TbClockQuestion className="w-4 h-4" />}
                    {appointment.status === "CONFIRM" && <TbClockCheck className="w-4 h-4" />}
                    {appointment.status === "CANCELED" && <TbClockX className="w-4 h-4" />}
                    {appointment.status === "COMPLETED" && <TbClockHeart className="w-4 h-4" />}
                    <span className=" lowercase text-muted-foreground text-sm">{appointment.status}</span>
                </div>
                <div>
                    <Options appointment={appointment} />
                </div>
            </div>
        </div>
    )
}
