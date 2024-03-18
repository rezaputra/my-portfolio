"use client"

import { motion, MotionConfig } from "framer-motion"

export function Gestures() {
    return (
        <div className=" flex flex-col container space-y-4 h-screen w-screen items-center justify-center">
            <MotionConfig
                transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                }}
            >
                <motion.button
                    className=" px-4 py-2 bg-primary text-secondary rounded-md"
                    whileHover={{ scale: 1.05, rotate: "2.5deg" }}
                >
                    Click me!
                </motion.button>
                <motion.button
                    className=" px-4 py-2 bg-rose-500/90 border text-primary rounded-md"
                    whileTap={{ scale: 0.85, rotate: "-2.5deg" }}
                >
                    Click me!
                </motion.button>
            </MotionConfig>
        </div>
    )
}
