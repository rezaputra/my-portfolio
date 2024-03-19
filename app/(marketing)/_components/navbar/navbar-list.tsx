"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { IoCodeSlashOutline } from "react-icons/io5"
import { ListItem } from "./list-item"

interface INavbarList {
    title: string
    href: string
    description: string
}

export function NavbarList() {
    const personals: INavbarList[] = [
        {
            title: "About Me",
            href: "/#about",
            description: "Let me tell you my story! Discover my journey, passions, and proudest moments.",
        },
        {
            title: "Resume",
            href: "#resume",
            description: "Unlock the vault to my professional world. Dive into my experiences, skills, and triumphs.",
        },
        {
            title: "Portfolio",
            href: "/#portfolio",
            description: "Step into my creative realm! Explore a gallery of my finest creations and projects.",
        },
    ]

    const service: INavbarList[] = [
        {
            title: "Service",
            href: "/#service",
            description:
                "Discover the magic of my tailored services! Unlock the door to a world of unique solutions and unparalleled benefits.",
        },
        {
            title: "Contact",
            href: "/#contact",
            description:
                "Let's connect! Reach out through my contact section and find the gateway to endless possibilities.",
        },
    ]

    return (
        <>
            <NavigationMenu className="hidden md:block">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Personal</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4  w-[250px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 lg:p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <IoCodeSlashOutline className="h-6 w-6" />
                                            <div className="mb-2 mt-4 text-lg font-medium">Home</div>
                                            <p className="text-sm leading-tight text-muted-foreground lg:line-clamp-4 line-clamp-2">
                                                Welcome to the gateway of my digital universe! Embark on a journey
                                                through the captivating world of my portfolio
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                {personals.map((item, idx) => (
                                    <ListItem key={idx} href={item.href} title={item.title}>
                                        {item.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Service</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[250px] gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:grid-cols-2 lg:w-[600px] ">
                                {service.map((item, idx) => (
                                    <ListItem key={idx} href={item.href} title={item.title}>
                                        {item.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/#faq" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>FAQ</NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}
