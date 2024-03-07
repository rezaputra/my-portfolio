"use client"

import { Button } from "@/components/ui/button"
import { UserIcon } from "@/components/user/user-icon"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { CgProfile } from "react-icons/cg"
import { IoHomeOutline } from "react-icons/io5"
import { MdOutlineMeetingRoom, MdOutlineSettings } from "react-icons/md"

export function Sidebar({ userId, tab }: { userId: string; tab: string }) {
    return (
        <div className="flex flex-col p-8 w-1/4 justify-between">
            <div className="flex flex-col space-y-2">
                <Link href={`/${userId}?tab=profile`}>
                    <Button
                        size="lg"
                        variant="ghost"
                        className={cn("px-4  font-normal flex justify-start items-center gap-x-4 w-full", {
                            " font-semibold bg-primary/5 hover:bg-primary/10": tab === "profile",
                        })}
                    >
                        <CgProfile className="w-4 h-4" />
                        Profile
                    </Button>
                </Link>
                <Link href={`/${userId}?tab=appointment`}>
                    <Button
                        size="lg"
                        variant="ghost"
                        className={cn("px-4  font-normal flex justify-start items-center gap-x-4 w-full", {
                            " font-semibold bg-primary/5 hover:bg-primary/10": tab === "appointment",
                        })}
                    >
                        <MdOutlineMeetingRoom className="w-4 h-4" />
                        Appointment
                    </Button>
                </Link>
                <Link href={`/${userId}?tab=setting`}>
                    <Button
                        size="lg"
                        variant="ghost"
                        className={cn("px-4 font-normal flex justify-start items-center gap-x-4 w-full", {
                            " font-semibold bg-primary/5 hover:bg-primary/10": tab === "setting",
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

                <UserIcon />
            </div>
        </div>
    )
}
