"use client"

import { CgProfile } from "react-icons/cg"
import { MdOutlineMeetingRoom } from "react-icons/md"
import { MdOutlineSettings } from "react-icons/md"
import { IoHomeOutline } from "react-icons/io5"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Separator } from "@/components/ui/separator"
import { UserIcon } from "@/components/user/user-icon"
import { SessionProvider } from "next-auth/react"
import { Sidebar } from "./sidebar"

export function PlatForm({ children, userId }: { children: React.ReactNode; userId: string | undefined }) {
    const params = useSearchParams()
    const tab = params.get("tab")

    return (
        <div className=" container h-screen w-full items-center flex justify-center">
            <div className="flex h-5/6 w-5/6 rounded-xl border shadow-md ">
                <Sidebar userId={userId!} tab={tab!} />

                <Separator orientation="vertical" />
                <div className="p-8 w-4/5">{children}</div>
            </div>
        </div>
    )
}
