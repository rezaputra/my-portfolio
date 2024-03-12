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
import { editAppointmentSchema } from "@/schemas/appointment"
import { useRouter } from "next/navigation"

import { useState, useTransition } from "react"
import { addMonths, format } from "date-fns"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import moment from "moment-timezone"

import devTime from "@/constants/dev-time.json"

import { Appointment } from "@prisma/client"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import { editAppointment } from "@/actions/edit-appointment"

export function Edit({ appointment }: { appointment: Appointment }) {
    const router = useRouter()
    const { id, userId, datetime, industry, size, phone, describe } = appointment

    const date = new Date(datetime)
    const time = moment(appointment.datetime).format("HH:mm")

    const [error, setError] = useState<string | undefined>(undefined)
    const [success, setSuccess] = useState<string | undefined>(undefined)

    const devTimeZone = devTime.timezone
    const clientTimezone = moment.tz.guess()
    const selectedDate = new Date(date)

    const [isPending, startTransition] = useTransition()

    const onSubmit = (values: z.infer<typeof editAppointmentSchema>) => {
        setError(undefined)
        setSuccess(undefined)

        startTransition(() => {
            editAppointment(values)
                .then((res) => {
                    if (res?.error) {
                        setError(res.error)
                    }
                    if (res?.success) {
                        setSuccess(res.success)
                    }
                })
                .catch(() => setError("Something went wrong!"))
        })
    }

    const devAvailable = devTime.available.map((hour) => {
        const fullDateString = `2022-01-01 ${hour}`

        const sourceTime = moment.tz(fullDateString, devTime.timezone)
        const convertedTime = sourceTime.clone().tz(clientTimezone)

        return convertedTime.format("HH:mm")
    })

    const form = useForm<z.infer<typeof editAppointmentSchema>>({
        resolver: zodResolver(editAppointmentSchema),
        defaultValues: {
            id: id,
            userId: userId,
            date: date,
            time: time,
            phone: phone || undefined,
            industry: industry || undefined,
            size: size || undefined,
            describe: describe,
        },
    })

    const isDateDisabled = (date: Date) => {
        const currentDevTime = moment.tz(date, devTimeZone)
        const devDay = currentDevTime.day()
        const clientDay = moment(date).day()

        return clientDay === 0 || devDay === 0
    }

    return (
        <Form {...form}>
            <form className=" space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="  grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 items-center">
                    <Input name="userId" type="hidden" value={userId} />
                    <Input name="id" type="hidden" value={id} />
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
                                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
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
                                            fromMonth={selectedDate}
                                            toMonth={addMonths(selectedDate, 1)}
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
                                    <Input {...field} placeholder="Business line" type="text" disabled={isPending} />
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
                    Update appointment
                </Button>
            </form>
        </Form>
    )
}
