"use client"

import moment from "moment-timezone"
import { useSession } from "next-auth/react"

import devTime from "@/constants/dev-time.json"
import { Calendar } from "@/components/ui/calendar"
import { addMonths, format } from "date-fns"
import { useEffect, useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { FaRegClock, FaVideo } from "react-icons/fa"
import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useCurrentUser } from "@/hooks/use-current-user"

function MeetPage() {
    const [date, setDate] = useState<Date | undefined>()
    const [hour, setHour] = useState<string | undefined>()

    const [isDisable, setIsDisable] = useState(true)

    const devTimeZone = devTime.timezone
    const clientTimezone = moment.tz.guess()
    const clientToday = new Date()

    const isDateDisabled = (date: Date) => {
        const currentDevTime = moment.tz(date, devTimeZone)
        const devDay = currentDevTime.day()
        const clientDay = moment(date).day()

        return clientDay === 0 || devDay === 0
    }

    const devAvailable = devTime.available.map((hour) => {
        const fullDateString = `2022-01-01 ${hour}`

        const sourceTime = moment.tz(fullDateString, devTime.timezone)
        const convertedTime = sourceTime.clone().tz(clientTimezone)

        return convertedTime.format("HH:mm")
    })

    useEffect(() => {
        if (date && hour) {
            setIsDisable(false)
        } else {
            setIsDisable(true)
        }
    }, [hour, date])

    const user = useCurrentUser()

    if (!user) return null

    return (
        <div className=" grid lg:grid-cols-3 items-center min-h-[100svh] px-[10%] ">
            {/* <div className=" space-y-4"> */}
            <div className=" hidden col-span-2 min-h-[100svh] lg:flex items-center justify-center ">
                <Image src={"/images/discussion.svg"} alt="Image" height={400} width={400} />
            </div>

            <div className=" col-span-1 h-full w-full flex items-center justify-center ">
                <Card className=" min-w-64 md:min-w-80">
                    <CardHeader>
                        <CardTitle>Appointment</CardTitle>
                        <CardDescription>Create appointment</CardDescription>
                    </CardHeader>
                    <CardContent className=" space-y-4">
                        {/* Upper section */}
                        <div className=" space-y-3 font-sans  text-sm">
                            <div className="flex space-x-3 items-center ">
                                <FaVideo className=" size-4" />
                                <span>Online</span>
                            </div>
                            <div className="flex space-x-3 items-center ">
                                <FaRegClock className=" size-4" />
                                <span>15 Minutes</span>
                            </div>
                        </div>

                        <Separator />

                        {/* Lower section */}
                        <div className=" space-y-2">
                            <Label>Select hour</Label>
                            <Select onValueChange={setHour}>
                                <SelectTrigger className="font-sans">
                                    <SelectValue placeholder="Select Hour" />
                                </SelectTrigger>

                                <SelectContent>
                                    <ScrollArea className=" h-48">
                                        {devAvailable.map((item, idx) => (
                                            <SelectItem key={idx} value={item}>
                                                {item}
                                            </SelectItem>
                                        ))}
                                    </ScrollArea>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className=" space-y-2 ">
                            <Label>Select Date</Label>
                            <Popover>
                                <PopoverTrigger
                                    asChild
                                    className=" w-full flex items-center justify-start font-sans font-normal"
                                >
                                    <Button variant="outline" className=" space-x-2">
                                        {date ? (
                                            format(date, "PPP")
                                        ) : (
                                            <>
                                                <span className="">Pick a date</span>
                                                <CalendarIcon className=" size-4" />
                                            </>
                                        )}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <Calendar
                                        mode="single"
                                        disabled={(date) => date < new Date() || isDateDisabled(date)}
                                        selected={date}
                                        onSelect={setDate}
                                        fromMonth={date}
                                        toMonth={addMonths(new Date(), 1)}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </CardContent>
                    <CardFooter className=" flex w-full">
                        <div className=" w-full">
                            <Button disabled={isDisable} className=" w-full">
                                <Link
                                    href={{
                                        pathname: `/${user.id}/appointment`,
                                        query: { tab: "create", date: date?.toLocaleDateString(), time: hour },
                                    }}
                                    className=" w-full"
                                >
                                    Create
                                </Link>
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
        // </div>
    )
}

export default MeetPage
