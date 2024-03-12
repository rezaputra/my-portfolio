import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { cancelAppointmentSchema, editAppointmentSchema } from "@/schemas/appointment"
import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useTransition } from "react"
import { z } from "zod"

import { editAppointment } from "@/actions/edit-appointment"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import { Appointment } from "@prisma/client"
import { DialogClose } from "@/components/ui/dialog"
import { cancelAppointment } from "@/actions/cancel-appointment"

export function Cancel({ id }: { id: string }) {
    const [error, setError] = useState<string | undefined>(undefined)
    const [success, setSuccess] = useState<string | undefined>(undefined)

    const [isPending, startTransition] = useTransition()

    const onClick = () => {
        setError(undefined)
        setSuccess(undefined)

        console.log(id)

        startTransition(() => {
            cancelAppointment(id)
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

    return (
        <div className=" space-y-4">
            <div>
                <FormError message={error} />
                <FormSuccess message={success} />
            </div>
            <div className=" w-full flex justify-end items-center space-x-4">
                <Button onClick={onClick} disabled={isPending} className=" w-14">
                    Yes
                </Button>
                <DialogClose asChild disabled={isPending}>
                    <Button variant="outline" className=" w-14">
                        No
                    </Button>
                </DialogClose>
            </div>
        </div>
    )
}
