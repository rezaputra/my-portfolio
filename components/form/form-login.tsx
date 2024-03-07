"use client"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { FormError } from "../form-error"
import FormWrapper from "./form-wrapper"

import { loginSchema } from "@/schemas/auth"
import { login } from "@/actions/login"

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

export function FormLogin() {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get("callbackUrl")

    const [error, setError] = useState<string | undefined>(undefined)
    const [success, setSuccess] = useState<string | undefined>(undefined)

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof loginSchema>) => {
        setSuccess(undefined)
        setError(undefined)

        startTransition(async () => {
            const res = await login(values, callbackUrl)
            form.reset()

            if (res?.error) setError(res.error)
            if (res?.redirect) router.push(res?.redirect)
        })
    }

    return (
        <div className=" w-96">
            <FormWrapper
                title="Sign In"
                description="Welcome back"
                showSocial={true}
                backButtonLabel="Not have account ?"
                backButtonHref="/auth/register"
            >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="example@mail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="******" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    <Button size="sm" variant="link" className="px-0 font-normal">
                                        <Link href={"/auth/reset"}>Forgot password ?</Link>
                                    </Button>
                                </FormItem>
                            )}
                        />
                        <FormError message={error} />

                        <div>
                            <Button disabled={isPending} type="submit" className=" w-full">
                                Login
                            </Button>
                        </div>
                    </form>
                </Form>
            </FormWrapper>
        </div>
    )
}
