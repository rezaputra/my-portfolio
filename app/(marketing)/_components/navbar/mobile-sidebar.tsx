"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar"

import { Sheet, SheetContent } from "@/components/ui/sheet"

import { ModeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { MdOutlineMenu } from "react-icons/md"

function MobileSidebar() {
    const pathname = usePathname()
    const [isMounted, setIsMounted] = useState(false)

    const onOpen = useMobileSidebar((state) => state.onOpen)
    const onClose = useMobileSidebar((state) => state.onClose)
    const isOpen = useMobileSidebar((state) => state.isOpen)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        onClose()
    }, [pathname, onClose])

    if (!isMounted) return null

    return (
        <div className="flex md:hidden">
            <MdOutlineMenu className=" size-5" onClick={onOpen} />

            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent side="left" className=" flex flex-col justify-between py-8">
                    <Link href={"/meet"}>
                        <Button size="sm">Let&apos;s Talks</Button>
                    </Link>
                    <div className="flex flex-col space-y-2">
                        <Button variant="ghost">
                            <Link href={"/"}>Home</Link>
                        </Button>
                        <Button variant="ghost">
                            <Link href={"/#about"}>About Me</Link>
                        </Button>
                        <Button variant="ghost">
                            <Link href={"/#resume"}>Resume</Link>
                        </Button>
                        <Button variant="ghost">
                            <Link href={"/#portfolio"}>Portfolio</Link>
                        </Button>
                        <Button variant="ghost">
                            <Link href={"/#service"}>Service</Link>
                        </Button>
                        <Button variant="ghost">
                            <Link href={"/faq"}>FAQ</Link>
                        </Button>
                    </div>
                    <div className=" flex justify-end">
                        <ModeToggle />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileSidebar
