"use client"

import { SettingSchema } from "@/schemas/auth"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"

import { setting } from "@/actions/setting"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useCurrentUser } from "@/hooks/use-current-user"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSession } from "next-auth/react"
import { useTransition } from "react"
import { toast } from "sonner"
import { z } from "zod"
import { User } from "@prisma/client"
import { Account } from "next-auth"
import { Separator } from "@/components/ui/separator"

type UserWithAccounts = User & { accounts: {}[] }

export function FormSetting({ user }: { user: UserWithAccounts }) {
    const [isPending, startTransition] = useTransition()
    const { update } = useSession()

    console.log({ user })

    const form = useForm<z.infer<typeof SettingSchema>>({
        resolver: zodResolver(SettingSchema),
        defaultValues: {
            name: user?.name || undefined,
            email: user?.email || undefined,
            password: undefined,
            newPassword: undefined,
        },
    })

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
        <div className=" space-y-4">
            <p className=" text-sm text-muted-foreground">Personal information</p>
            <Separator />
            <Form {...form}>
                <form className="space-y-6 max-w-lg" onSubmit={form.handleSubmit(onSubmit)}>
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
                        {user.accounts.length === 0 && (
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
                    <Button type="submit" disabled={isPending}>
                        Save
                    </Button>
                </form>
            </Form>
        </div>
    )
}
