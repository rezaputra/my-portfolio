"use client"

import { Button } from "@/components/ui/button"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export function BasicOfMotion() {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    return (
        <div className=" flex flex-col container space-y-4 h-screen w-screen items-center justify-center">
            <motion.button
                onClick={() => setIsVisible(!isVisible)}
                className=" rounded-md bg-primary text-secondary p-2"
                layout
            >
                Show/Hide
            </motion.button>
            <AnimatePresence mode="popLayout">
                {isVisible && (
                    <motion.div
                        className=" size-32 bg-cyan-700 "
                        initial={{
                            rotate: "0deg",
                            scale: 0,
                            y: 0,
                        }}
                        animate={{
                            rotate: "180deg",
                            scale: 1,
                            y: [0, 150, -150, -150, 0],
                        }}
                        exit={{
                            rotate: "0deg",
                            scale: 0,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                            ease: "backInOut",
                            times: [0, 0.25, 0.5, 0.95, 1],
                        }}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}
