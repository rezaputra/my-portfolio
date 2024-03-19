"use client"

import Link from "next/link"

interface ListItemProps {
    children: React.ReactNode
    href: string
    title: string
}

export function ListItem({ children, href, title }: ListItemProps) {
    return (
        <Link href={href} className="p-3 hover:bg-secondary/90 rounded-sm space-y-1 ">
            <p className=" text-sm font-medium leading-none">{title}</p>
            <p className="text-sm leading-tight text-muted-foreground line-clamp-1 md:line-clamp-2">{children}</p>
        </Link>
    )
}
