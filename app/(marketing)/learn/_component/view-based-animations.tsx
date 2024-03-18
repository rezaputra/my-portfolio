"use client"

import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export function ViewBaseAnimations() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        console.log("Is in view ->", isInView)
    }, [isInView])

    return (
        <div className=" flex flex-col container space-y-4 h-[250vh] w-screen items-start justify-end">
            {/* Simple example */}
            {/* <motion.div
                className=" h-[100vh] bg-yellow-400 w-full "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
            /> */}

            <div
                ref={ref}
                style={{
                    height: "100vh",
                    background: isInView ? "blue" : "red",
                    transition: "2s background",
                }}
            />
        </div>
    )
}
