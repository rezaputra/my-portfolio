"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import { zodResolver } from "@hookform/resolvers/zod"
import { useInView } from "framer-motion"
import { useRef, useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { motion } from "framer-motion"
import { ContactSchema } from "@/schemas/contact"
import { contactMessage } from "@/actions/contact-message"
import { toast } from "sonner"

export function ContactForm() {
    const [isPending, startTransition] = useTransition()

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    // const formRef = useRef<ElementRef<"form">>(null)

    const form = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof ContactSchema>) => {
        startTransition(() => {
            contactMessage(values)
                .then((res) => {
                    form.reset()
                    if (res.success) {
                        toast.success(res.success)
                    }
                    if (res?.error) {
                        toast.warning(res.success)
                    }
                })
                .catch(() => toast.error("something went wrong!"))
        })
    }

    return (
        <Form {...form}>
            <motion.form
                ref={ref}
                onSubmit={form.handleSubmit(onSubmit)}
                className="  space-y-4 lg:space-y-5 w-full"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView && { opacity: 1, x: 0 }}
                transition={{ delay: 0.4, ease: "easeInOut" }}
            >
                <h2 className=" text-center md:text-left text-lg lg:text-xl xl:text-2xl"> Just say Hello</h2>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input disabled={isPending} placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                ></FormField>

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input disabled={isPending} type="email" placeholder="Your Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                ></FormField>

                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input disabled={isPending} placeholder="Your Subject" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                ></FormField>

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea disabled={isPending} placeholder="Your Message" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                ></FormField>
                <Button disabled={isPending} type="submit" className=" hidden lg:block">
                    Send Message
                </Button>
                <Button type="submit" size="sm" className=" lg:hidden">
                    Send Message
                </Button>
            </motion.form>
        </Form>
    )
}
