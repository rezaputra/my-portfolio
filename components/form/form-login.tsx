"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import FormWrapper from "./form-wrapper"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { loginSchema } from "@/schema/auth"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { LoginButton } from "./login-button"
import Link from "next/link"

export function FormLogin() {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (values: z.infer<typeof loginSchema>) => {
        console.log({ values })
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
                                        <Input placeholder="example@mail.com" {...field} />
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
                                        <Input placeholder="******" {...field} />
                                    </FormControl>
                                    <Button size="sm" variant="link" className="px-0 font-normal">
                                        <Link href={"/auth/reset"}>Forgot password ?</Link>
                                    </Button>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div>
                            <LoginButton>
                                <Button type="submit" className=" w-full">
                                    Login
                                </Button>
                            </LoginButton>
                        </div>
                    </form>
                </Form>
            </FormWrapper>
        </div>
    )
}
