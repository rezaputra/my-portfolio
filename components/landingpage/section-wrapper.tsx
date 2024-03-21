"use client"

import { cn } from "@/lib/utils"
import { useInView } from "framer-motion"
import { useRef } from "react"

import { motion } from "framer-motion"

interface SectionWrapperProps {
    id: string
    children: React.ReactNode
    className?: string
}

interface SectionContentProps {
    children: React.ReactNode
    className?: string
}
interface SectionTitleProps {
    title: string
    className?: string
}

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
    return (
        <div id={id} className={cn("w-full h-max py-8 md:py-12 lg:py-16 xl:py-20", className)}>
            {children}
        </div>
    )
}

export function SectionContent({ className, children }: SectionContentProps) {
    return <div className={cn("container mt-4 md:mt-8 lg:mt-12 xl:mt-16", className)}>{children}</div>
}

export function SectionTitle({ title, className }: SectionTitleProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView && { opacity: 1, y: 0 }}
            transition={{ ease: "backInOut", duration: 1 }}
            className={cn(
                "flex w-full justify-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold",
                className
            )}
        >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 origin-bottom">
                {title}
            </span>
        </motion.div>
    )
}
