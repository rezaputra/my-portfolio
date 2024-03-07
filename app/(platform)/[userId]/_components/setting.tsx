"use client"

import { SettingSchema } from "@/schemas/auth"
import { User } from "@prisma/client"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import { Separator } from "@/components/ui/separator"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { setting } from "@/actions/setting"
import { toast } from "sonner"

interface SettingProps {
    user: User
    isOAuth: boolean
}

export function Setting({ user, isOAuth }: SettingProps) {
    const [isPending, startTransition] = useTransition()

    const params = useSearchParams()
    const tab = params.get("tab")

    const { update } = useSession()

    const form = useForm<z.infer<typeof SettingSchema>>({
        resolver: zodResolver(SettingSchema),
        defaultValues: {
            name: user.name || undefined,
            email: user.email || undefined,
            password: undefined,
            newPassword: undefined,
        },
    })

    if (tab !== "setting" || !user) return null

    const onSubmit = (values: z.infer<typeof SettingSchema>) => {
        startTransition(() => {
            setting(values)
                .then((data) => {
                    if (data?.error) {
                        toast.warning(data.error, { description: new Date().toDateString() })
                    }
                    if (data?.success) {
                        update()
                        toast.success(data.success, { description: new Date().toDateString() })
                    }
                })
                .catch(() => toast.error("Something went wrong!"))
        })
    }

    return (
        <div className="flex flex-col space-y-4 h-full">
            <div>
                <h2 className="scroll-m-20 pb-1 text-3xl font-semibold first:mt-0">Setting</h2>
                <p className="text-sm text-muted-foreground">Manage your account.</p>
            </div>

            <div className=" space-y-2">
                <p className=" text-sm text-muted-foreground">Personal information</p>
                <Separator className=" opacity-60" />
            </div>
            <ScrollArea className=" h-full">
                <Form {...form}>
                    <form className="space-y-6 p-5 border rounded-md" onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-2">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="John Doe" type="text" disabled={isPending} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {isOAuth === false && (
                                <>
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="johndoe@example.com"
                                                        type="email"
                                                        disabled={isPending}
                                                    />
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
                                                    <Input
                                                        {...field}
                                                        placeholder="******"
                                                        type="password"
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="newPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>New password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="******"
                                                        type="password"
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </>
                            )}
                        </div>
                        {/* <FormError message={error} />
                    <FormSuccess message={success} /> */}
                        <Button type="submit" disabled={isPending}>
                            Save
                        </Button>
                    </form>
                </Form>
            </ScrollArea>

            <div className="flex flex-row items-center space-x-8 px-2 ">
                <p className=" text-sm text-muted-foreground">Delete account</p>
                <Button variant="ghost" className=" text-red-500 hover:bg-red-50 hover:text-red-600">
                    Delete account
                </Button>
            </div>
        </div>
    )
}
