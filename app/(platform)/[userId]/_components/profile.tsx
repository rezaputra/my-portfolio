"use client"

import { VscUnverified } from "react-icons/vsc"
import { MdOutlineVerified } from "react-icons/md"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useCurrentUser } from "@/hooks/use-current-user"
import { useSearchParams } from "next/navigation"
import { User } from "@prisma/client"
import { ScrollArea } from "@/components/ui/scroll-area"

interface AccountProps {
    user: User
    provider: string | undefined
}

export function Profile({ user, provider }: AccountProps) {
    const params = useSearchParams()
    const tab = params.get("tab")

    if (tab !== "profile") return null

    return (
        <ScrollArea className=" h-full">
            <div className="flex flex-col space-y-12 px-2">
                <div>
                    <h2 className="scroll-m-20 pb-1 text-3xl font-semibold first:mt-0">Profile</h2>
                    <p className="text-sm text-muted-foreground">View your personal information.</p>
                </div>
                <div>
                    <p>Basic</p>
                    <Separator className=" opacity-60 mb-4 mt-1" />
                    <div className="flex items-center space-x-4">
                        <Avatar className=" size-14 ml-2">
                            <AvatarImage src={user.image || undefined} alt="User" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className="text-sm font-light">{user.name}</p>
                    </div>
                </div>
                <div>
                    <p>Account type</p>
                    <Separator className=" opacity-60 mb-4 mt-1" />
                    <div className=" space-y-2">
                        <div className="flex items-center space-x-4">
                            <p className="text-sm font-light">{user.role}</p>
                            <code className="text-sm font-light">{user.id}</code>
                        </div>
                        {!user.emailVerified && (
                            <div className="flex space-x-2 items-center">
                                <blockquote className="text-sm font-light">Unverified</blockquote>
                                <VscUnverified className="w-4 h-4" />
                            </div>
                        )}
                        {user.emailVerified && (
                            <div className="space-y-2">
                                <div className="flex space-x-2 items-center">
                                    <blockquote className="text-sm font-light">Verified </blockquote>
                                    <MdOutlineVerified className="w-4 h-4" />
                                </div>
                                <p className="text-sm font-light">{user.emailVerified?.toLocaleDateString()}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <p>Provider</p>
                    <Separator className=" opacity-60 mb-4 mt-1" />
                    <div className=" items-center space-y-3">
                        <p className="text-sm font-light">{user.email}</p>
                        <p className=" text-muted-foreground">
                            {provider ? true && <>by {provider}</> : "by credential"}
                        </p>
                    </div>
                </div>
                <div></div>
            </div>
        </ScrollArea>
    )
}
