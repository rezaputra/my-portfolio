"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import { CalendarIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

import { useForm } from "react-hook-form"
import { createAppointmentSchema } from "@/schemas/appointment"
import { notFound, useRouter, useSearchParams } from "next/navigation"
import { useCurrentUser } from "@/hooks/use-current-user"
import { useTransition } from "react"
import { addMonths, addDays, format, isWeekend } from "date-fns"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import moment from "moment-timezone"

import devTime from "@/constants/dev-time.json"
import { createAppointment } from "@/actions/create-appointment"

import { toast } from "sonner"

export function FormCreate({ userId }: { userId: string | undefined }) {
    const devTimeZone = devTime.timezone
    const clientTimezone = moment.tz.guess()
    const clientToday = new Date()

    const [isPending, startTransition] = useTransition()

    const params = useSearchParams()
    const user = useCurrentUser()

    const date = params.get("date") || addDays(clientToday, 1)
    const time = params.get("time") || "10:00"

    const selectDate = new Date(date)

    const onSubmit = (values: z.infer<typeof createAppointmentSchema>) => {
        startTransition(() => {
            createAppointment(values)
                .then((res) => {
                    form.reset()
                    if (res?.error) {
                        toast.warning(res.error)
                    }
                    if (res?.success) {
                        toast.success(res.success, {
                            description: "We will sent meeting link to your email",
                        })
                    }
                })
                .catch(() => toast.error("Something went wrong!"))
        })
    }

    const devAvailable = devTime.available.map((hour) => {
        const fullDateString = `2022-01-01 ${hour}`

        const sourceTime = moment.tz(fullDateString, devTime.timezone)
        const convertedTime = sourceTime.clone().tz(clientTimezone)

        return convertedTime.format("HH:mm")
    })

    const form = useForm<z.infer<typeof createAppointmentSchema>>({
        resolver: zodResolver(createAppointmentSchema),
        defaultValues: {
            userId: userId,
            date: new Date(),
            time: time,
        },
    })

    if (!user) return null

    const isDateDisabled = (date: Date) => {
        const currentDevTime = moment.tz(date, devTimeZone)
        const devDay = currentDevTime.day()
        const clientDay = moment(date).day()

        return clientDay === 0 || devDay === 0
    }

    return (
        <div className=" space-y-4 border rounded-md p-8 mt-4">
            <div>
                <h2 className=" scroll-m-20 text-xl font-semibold tracking-tight">Create appointment</h2>
                <span className=" text-muted-foreground text-sm">Make your own appointment</span>
            </div>
            <Form {...form}>
                <form className=" space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="  grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 items-center">
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel>Date *</FormLabel>
                                    <Popover>
                                        <FormControl>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    disabled={isPending}
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </PopoverTrigger>
                                        </FormControl>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                disabled={(date) => date < new Date() || isDateDisabled(date)}
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                fromMonth={selectDate}
                                                toMonth={addMonths(selectDate, 1)}
                                                initialFocus={true}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="time"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Time *</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={time || undefined}>
                                        <FormControl>
                                            <SelectTrigger disabled={isPending}>
                                                <SelectValue placeholder="Select time session" />
                                            </SelectTrigger>
                                        </FormControl>
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
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="industry"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your industry</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Business line"
                                            type="text"
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="size"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company size</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger disabled={isPending}>
                                                <SelectValue placeholder="Select company size" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="1-5">1-5 employee</SelectItem>
                                            <SelectItem value="5-20">5-20 employee</SelectItem>
                                            <SelectItem value="20-100">20-100 employee</SelectItem>
                                            <SelectItem value="100+">100+ employee</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className=" col-span-1">
                                    <FormLabel>Whatsapp</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Optional" type="number" disabled={isPending} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="describe"
                            render={({ field }) => (
                                <FormItem className=" col-span-1 md:col-span-2">
                                    <FormLabel>Describe *</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            placeholder="Tell us what you need"
                                            disabled={isPending}
                                            className=" h-32"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" disabled={isPending}>
                        Make appointment
                    </Button>
                </form>
            </Form>
        </div>
    )
}
