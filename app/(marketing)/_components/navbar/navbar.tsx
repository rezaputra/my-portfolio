"use client"

import { ModeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { UserAvatar } from "@/components/user/user-avatar"
import { useCurrentUser } from "@/hooks/use-current-user"
import MobileSidebar from "./mobile-sidebar"
import { NavbarList } from "./navbar-list"
import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Navbar() {
    const user = useCurrentUser()

    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className={cn("sticky top-0 w-full h-16 bg-background flex", { "shadow-sm": isScrolled })}>
            <div className=" container h-full flex items-center gap-x-4  justify-between ">
                {/* Left side */}
                <MobileSidebar />
                <div className=" flex h-full items-center gap-x-4 lg:gap-x-8">
                    <span className=" text-2xl font-semibold">Logo</span>
                    <NavbarList />
                </div>

                {/* Right side */}
                <div className="hidden md:flex h-full items-center gap-x-4">
                    {!user && (
                        <Link href={"/meet"}>
                            <Button>Let&apos;s Talks!</Button>
                        </Link>
                    )}
                    {user && <UserAvatar />}
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}