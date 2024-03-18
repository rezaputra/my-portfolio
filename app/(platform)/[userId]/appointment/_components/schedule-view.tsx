"use client"

import { Separator } from "@/components/ui/separator"
import { Appointment } from "@prisma/client"

import { FaVideo } from "react-icons/fa"
import { GiStopwatch } from "react-icons/gi"

import { LuClock2 } from "react-icons/lu"
import { MdOutlineCalendarToday } from "react-icons/md"

import { TbClockCheck, TbClockQuestion, TbClockX } from "react-icons/tb"

export function ScheduleView({ appointment }: { appointment: Appointment }) {
    return (
        <div className=" flex flex-col space-y-4 mt-2">
            <div>
                <p className=" text-muted-foreground font-light">Meeting condition</p>
                <div className=" mt-2 space-y-1">
                    <div className=" flex items-center space-x-4">
                        <FaVideo className=" w-4 h-4" />
                        <span>Online</span>
                    </div>
                    <div className=" flex items-center space-x-4">
                        <GiStopwatch className=" w-4 h-4" />
                        <span>15 Minutes</span>
                    </div>
                </div>
            </div>

            <Separator />

            <div>
                <p className=" text-muted-foreground font-light">Date & time</p>
                <div className=" mt-2 space-y-1">
                    <div className=" flex items-center space-x-4">
                        <MdOutlineCalendarToday className="w-4 h-4" />
                        <span>{new Date(appointment.datetime).toDateString()}</span>
                    </div>
                    <div className=" flex items-center space-x-4">
                        <LuClock2 className=" w-4 h-4" />
                        <span>{new Date(appointment.datetime).toLocaleTimeString()}</span>
                    </div>
                </div>
            </div>

            <Separator />
            <div>
                <p className=" text-muted-foreground font-light">Status</p>
                {appointment.status === "WAITING" && (
                    <div className=" mt-2 space-y-2">
                        <div className=" flex items-center space-x-4">
                            <TbClockQuestion className=" w-4 h-4" />
                            <span>Waiting</span>
                        </div>
                        <p className=" font-light">Waiting for confirmation from the developer</p>
                    </div>
                )}
                {appointment.status === "CONFIRM" && (
                    <div className=" mt-2 space-y-2">
                        <div className=" flex items-center space-x-4">
                            <TbClockCheck className=" w-4 h-4" />
                            <span>Confirmed</span>
                        </div>
                        <p className=" font-light">The meeting link has been sent to your email</p>
                    </div>
                )}
                {appointment.status === "CANCELED" && (
                    <div className=" mt-2 space-y-2">
                        <div className=" flex items-center space-x-4">
                            <TbClockX className=" w-4 h-4" />
                            <span>Canceled</span>
                        </div>
                        <p className="  font-light">The meeting has been canceled unilaterally</p>
                    </div>
                )}
                {appointment.status === "COMPLETED" && (
                    <div className=" mt-2 space-y-2">
                        <div className=" flex items-center space-x-4">
                            <TbClockX className=" w-4 h-4" />
                            <span>Completed</span>
                        </div>
                        <p className="  font-light">We wait for your next appointment</p>
                    </div>
                )}
            </div>
        </div>
    )
}
