"use client"

import { motion, useAnimationControls } from "framer-motion"

export function AnimationControls() {
    const controls = useAnimationControls()

    const onClick = () => {
        controls.start("flip")
    }

    return (
        <div className=" flex flex-col container space-y-4 h-screen w-screen items-center justify-center">
            <button onClick={onClick} className=" px-4 py-2 bg-primary text-background rounded-md">
                Flip it!
            </button>
            <motion.div
                className=" size-32 bg-rose-400"
                variants={{
                    initial: {
                        rotate: "0deg",
                    },
                    flip: {
                        rotate: "360deg",
                    },
                }}
                initial=" initial"
                animate={controls}
            />
        </div>
    )
}
