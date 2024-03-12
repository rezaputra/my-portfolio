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
import { appointmentSchema, createAppointmentSchema } from "@/schemas/appointment"
import { useRouter, useSearchParams } from "next/navigation"
import { useCurrentUser } from "@/hooks/use-current-user"
import { useState, useTransition } from "react"
import { addMonths, addDays, format, isWeekend } from "date-fns"
import { zodResolver } from "@hookform/resolvers/zod"
import { ZodAny, z } from "zod"
import moment from "moment-timezone"

import devTime from "@/constants/dev-time.json"

import { toast } from "sonner"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { appointment } from "@/actions/appointment"

interface AppointmentProps {
    header: {
        title: string
        description: string
    }
    data: {
        id?: string
        userId: string
        date: Date
        time: string
        phone?: string
        industry?: string
        size?: string
        describe: string
    }
    action_type: "create" | "edit"
}

export function Appointments({ header, data, action_type }: AppointmentProps) {
    const [error, setError] = useState<string | undefined>(undefined)
    const [success, setSuccess] = useState<string | undefined>(undefined)

    const devTimeZone = devTime.timezone
    const clientTimezone = moment.tz.guess()
    const clientToday = new Date()

    const [isPending, startTransition] = useTransition()
    const selectDate = new Date(data.date)

    const params = useSearchParams()
    const user = useCurrentUser()

    const form = useForm<z.infer<typeof appointmentSchema>>({
        resolver: zodResolver(appointmentSchema),
        defaultValues: {
            id: data.id,
            userId: data.userId,
            date: data.date,
            time: data.time,
            phone: data.phone,
            industry: data.industry,
            size: data.size,
            describe: data.describe,
        },
    })

    const onSubmit = (values: z.infer<typeof appointmentSchema>) => {
        setError(undefined)
        setSuccess(undefined)

        startTransition(() => {
            appointment(values, action_type)
                .then((res) => {
                    form.reset()
                    if (res?.error) {
                        setError(res.error)
                        toast.warning(res.error)
                    }
                    if (res?.success) {
                        setError(res.success)
                        toast.success(res.success)
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

    const isDateDisabled = (date: Date) => {
        const currentDevTime = moment.tz(date, devTimeZone)
        const devDay = currentDevTime.day()
        const clientDay = moment(date).day()

        return clientDay === 0 || devDay === 0
    }

    return (
        <div className=" space-y-4 border rounded-md p-8">
            <div>
                <h2 className=" scroll-m-20 text-xl font-semibold tracking-tight">{header.title}</h2>
                <span className=" text-muted-foreground text-sm">{header.description}</span>
            </div>
            <Form {...form}>
                <form className=" space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="  grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 items-center">
                        <Input type="hidden" value={data.userId} />
                        <Input type="hidden" value={data.userId} />
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
                                    <Select onValueChange={field.onChange} defaultValue={data.time || undefined}>
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
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button type="submit" disabled={isPending}>
                        Make appointment
                    </Button>
                </form>
            </Form>
        </div>
    )
}
