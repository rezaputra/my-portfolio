"use server"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { currentUser } from "@/lib/auth"
import { db } from "@/lib/db"
import { notFound } from "next/navigation"

import { VscUnverified } from "react-icons/vsc"
import { MdOutlineVerified } from "react-icons/md"

async function UserIdPage({ params }: { params: { userId: string } }) {
    const user = await currentUser()

    if (!user || params.userId !== user.id) return notFound()

    const dbUser = await db.user.findUnique({
        where: { id: params.userId },
        include: {
            accounts: true,
        },
    })

    if (!dbUser) return notFound()

    return (
        <div className=" container p-8">
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
                            <AvatarImage src={dbUser.image || undefined} alt="User" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className="text-sm font-light">{dbUser.name}</p>
                    </div>
                </div>
                <div>
                    <p>Account type</p>
                    <Separator className=" opacity-60 mb-4 mt-1" />
                    <div className=" space-y-2">
                        <div className="flex items-center space-x-2">
                            <p className="text-sm font-light">{user.role}</p>
                            <code className="text-sm font-light">{user.id}</code>
                        </div>
                        {!dbUser.emailVerified && (
                            <div className="flex space-x-2 items-center">
                                <blockquote className="text-sm font-light">Unverified</blockquote>
                                <VscUnverified className="w-4 h-4" />
                            </div>
                        )}
                        {dbUser.emailVerified && (
                            <div className="space-y-2">
                                <div className="flex space-x-2 items-center">
                                    <blockquote className="text-sm font-light">Verified</blockquote>
                                    <MdOutlineVerified className="w-4 h-4" />
                                </div>
                                <p className="text-sm font-light">{dbUser.emailVerified?.toLocaleDateString()}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <p>Provider</p>
                    <Separator className=" opacity-60 mb-4 mt-1" />
                    <div className=" items-center space-y-3">
                        <p className="text-sm font-light">{user.email}</p>
                        <p className="text-muted-foreground">
                            {dbUser.accounts && dbUser.accounts.length > 0
                                ? `By ${dbUser.accounts[0]?.provider}`
                                : "By credential"}
                        </p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default UserIdPage
