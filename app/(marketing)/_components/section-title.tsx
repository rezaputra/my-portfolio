"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function SectionTitle({ children }: { children: React.ReactNode }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView && { opacity: 1, y: 0 }}
                transition={{ ease: "backInOut", duration: 1 }}
                className="flex w-full justify-center"
            >
                <span className="bg-clip-text text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-gradient-to-r from-pink-500 to-violet-500 origin-bottom">
                    {children}
                </span>
            </motion.div>
        </>
    )
}
