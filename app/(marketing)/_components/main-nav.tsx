"use client"

import { LoginButton } from "@/components/form/login-button"
import { Button } from "@/components/ui/button"
import { UserAvatar } from "@/components/user/user-avatar"
import { useCurrentUser } from "@/hooks/use-current-user"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useEffect, useState } from "react"

function MainNav() {
    const user = useCurrentUser()
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("")
    const links = ["home", "about", "portfolio", "service", "pricing", "faq"]

    useEffect(() => {
        const home = document.getElementById("home")
        const about = document.getElementById("about")
        const portfolio = document.getElementById("portfolio")
        const service = document.getElementById("service")
        const pricing = document.getElementById("pricing")
        const faq = document.getElementById("faq")

        const sections = [home, about, portfolio, service, pricing, faq]

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2,
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.id === "home") {
                        setActiveSection("home")
                    }
                    if (entry.target.id === "about") {
                        setActiveSection("about")
                    }
                    if (entry.target.id === "portfolio") {
                        setActiveSection("portfolio")
                    }
                    if (entry.target.id === "service") {
                        setActiveSection("service")
                    }
                    if (entry.target.id === "pricing") {
                        setActiveSection("pricing")
                    }
                    if (entry.target.id === "faq") {
                        setActiveSection("faq")
                    }
                }
            })
        }, observerOptions)

        sections?.forEach((section) => {
            section && observer.observe(section)
        })
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        // Attach the event listener
        window.addEventListener("scroll", handleScroll)
        // Remove the event listener on cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <nav
            className={cn(" sticky top-0 w-full h-16 ", {
                " backdrop-blur-sm  border-b shadow-sm": isScrolled,
            })}
        >
            <div className=" container flex justify-between items-center h-full">
                <div className=" flex items-center gap-x-10">
                    <Link href={"/"}>
                        <Button variant="link">Logo</Button>
                    </Link>
                    <div className=" flex justify-center md:gap-x-8">
                        <Link href="/#home" className={`text-sm ${activeSection === "home" ? "font-semibold" : ""}`}>
                            Home
                        </Link>
                        <Link href="/#about" className={`text-sm ${activeSection === "about" ? "font-semibold" : ""}`}>
                            About
                        </Link>
                        <Link
                            href="/#portfolio"
                            className={`text-sm ${activeSection === "portfolio" ? "font-semibold" : ""}`}
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/#services"
                            className={`text-sm ${activeSection === "services" ? "font-semibold" : ""}`}
                        >
                            Services
                        </Link>
                        <Link
                            href="/#pricing"
                            className={`text-sm ${activeSection === "pricing" ? "font-semibold" : ""}`}
                        >
                            Pricing
                        </Link>
                        <Link href="/#faq" className={`text-sm ${activeSection === "faq" ? "font-semibold" : ""}`}>
                            Faq
                        </Link>
                    </div>
                </div>
                <div>
                    {user && <UserAvatar />}
                    {!user && (
                        <div className=" flex items-center gap-x-4">
                            <Link href={"/meet"}>
                                <Button>Let&apos;s Talks</Button>
                            </Link>
                            <LoginButton asChild={true}>
                                <Button variant="outline">Sign In</Button>
                            </LoginButton>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default MainNav
