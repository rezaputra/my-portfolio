"use client"

import { Button } from "@/components/ui/button"
import { UserAvatar } from "@/components/user/user-avatar"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { CgProfile } from "react-icons/cg"
import { IoHomeOutline } from "react-icons/io5"
import { MdOutlineMeetingRoom, MdOutlineSettings } from "react-icons/md"

export function SideNav() {
    const pathname = usePathname()

    const params = useParams<{ userId: string }>()
    const userId = params.userId

    return (
        <div className="flex flex-col p-8 justify-between min-w-80 max-w-lg bg-secondary min-h-screen">
            <div className="flex flex-col space-y-2">
                <Link href={`/${userId}`}>
                    <Button
                        size="lg"
                        variant="ghost"
                        className={cn("px-4  font-normal flex justify-start items-center gap-x-4 w-full", {
                            " font-semibold bg-primary/5 hover:bg-primary/10": pathname === `/${userId}`,
                        })}
                    >
                        <CgProfile className="w-4 h-4" />
                        Profile
                    </Button>
                </Link>
                <Link href={`/${userId}/appointment`}>
                    <Button
                        size="lg"
                        variant="ghost"
                        className={cn("px-4  font-normal flex justify-start items-center gap-x-4 w-full", {
                            " font-semibold bg-primary/5 hover:bg-primary/10": pathname === `/${userId}/appointment`,
                        })}
                    >
                        <MdOutlineMeetingRoom className="w-4 h-4" />
                        Appointment
                    </Button>
                </Link>
                <Link href={`/${userId}/setting`}>
                    <Button
                        size="lg"
                        variant="ghost"
                        className={cn("px-4 font-normal flex justify-start items-center gap-x-4 w-full", {
                            " font-semibold bg-primary/5 hover:bg-primary/10": pathname === `/${userId}/setting`,
                        })}
                    >
                        <MdOutlineSettings className="w-4 h-4" />
                        Setting
                    </Button>
                </Link>
            </div>
            <div className="flex items-center justify-between px-2">
                <Link href={"/"}>
                    <Button size="icon" variant="outline">
                        <IoHomeOutline className="w-4 h-4" />
                    </Button>
                </Link>
                <UserAvatar />
            </div>
        </div>
    )
}
