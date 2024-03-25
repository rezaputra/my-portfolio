"use client"

import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface ShowMoreByHeightProps {
    children: React.ReactNode
    className?: string
}

export function ShowMoreByHeight({ children, className }: ShowMoreByHeightProps) {
    const [loadMore, setLoadMore] = useState<boolean>(false)

    const toggleLoadMore = () => {
        setLoadMore(!loadMore)
    }

    return (
        <>
            <motion.div
                className={cn(`overflow-hidden flex flex-col items-center w-full h-[250px] lg:h-[450px]`, className, {
                    "h-auto md:h-auto lg:h-auto xl:h-auto": loadMore,
                })}
            >
                {children}
            </motion.div>

            <div className="w-full flex justify-center py-2">
                <Button variant="link" onClick={toggleLoadMore} className=" text-xs lg:text-sm">
                    {loadMore ? "Show Less" : "Show More"}
                </Button>
            </div>
        </>
    )
}
