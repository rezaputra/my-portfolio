"use client"

import { FaCalendarCheck } from "react-icons/fa6"
import { FaCalendarPlus } from "react-icons/fa6"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSearchParams } from "next/navigation"

export function Appointment() {
    const params = useSearchParams()
    const tab = params.get("tab")
    const section = params.get("section") || "schedule"

    if (tab !== "appointment") return null

    return (
        <div className="flex flex-col  h-full">
            <Tabs defaultValue={section} className=" w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="schedule">
                        <FaCalendarCheck className=" w-4 h-4 md:hidden" />
                        <p className=" hidden md:flex">Schedule</p>
                    </TabsTrigger>
                    <TabsTrigger value="create">
                        <FaCalendarPlus className=" w-4 h-4 md:hidden" />
                        <p className=" hidden md:flex">Create</p>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="schedule"></TabsContent>
                <TabsContent value="create"></TabsContent>
            </Tabs>
        </div>
    )
}
