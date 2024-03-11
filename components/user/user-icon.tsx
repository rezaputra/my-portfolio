"use client"

import { useCurrentUser } from "@/hooks/use-current-user"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { IoLogOutOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"
import { MdOutlineSettings } from "react-icons/md"
import { MdOutlineMeetingRoom } from "react-icons/md"

import {} from "react-icons"
import { signOut } from "next-auth/react"
import Link from "next/link"

export function UserIcon() {
    const user = useCurrentUser()

    if (!user) return null

    const logout = () => {
        signOut({ callbackUrl: "/" })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar className=" size-7">
                    <AvatarImage src={user.image || undefined} alt="User" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" min-w-64">
                {/* <DropdownMenuLabel className="m-2">{user?.name}</DropdownMenuLabel> */}
                <DropdownMenuLabel className="m-2 text-sm font-normal text-muted-foreground">
                    {user.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link href={`/${user.id}?tab=profile`}>
                        <DropdownMenuItem>
                            <CgProfile className=" w-4 h-4 mr-2" />
                            Profile
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <MdOutlineMeetingRoom className="w-4 h-4 mr-2" />
                            Appointment
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <Link
                                    href={{
                                        pathname: `${user.id}`,
                                        query: { tab: "appointment", section: "schedule" },
                                    }}
                                    target="_top"
                                >
                                    <DropdownMenuItem>Schedule</DropdownMenuItem>
                                </Link>
                                <Link
                                    href={{ pathname: `${user.id}`, query: { tab: "appointment", section: "create" } }}
                                    target="_top"
                                >
                                    <DropdownMenuItem>Create</DropdownMenuItem>
                                </Link>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <Link href={`/${user.id}?tab=setting`}>
                        <DropdownMenuItem>
                            <MdOutlineSettings className="w-4 h-4 mr-2" />
                            Setting
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                    <IoLogOutOutline className=" w-4 h-4 mr-2" />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
