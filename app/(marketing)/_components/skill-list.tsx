"use client"

import { Progress } from "@/components/ui/progress"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ISkillItem {
    name: string
    rating: number
}

interface SkillListProps {
    skills: ISkillItem[]
}

const containerVariant = {
    hidden: { opacity: 1, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.2,
        },
    },
}

const itemVarian = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
    animate: { type: "spring" },
}

export function SkillList({ skills }: SkillListProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
            ref={ref}
            className=" space-y-4 lg:space-y-0"
            variants={containerVariant}
            initial="hidden"
            animate={isInView && "visible"}
        >
            <motion.div variants={itemVarian}>
                <h4 className=" lg:hidden text-muted-foreground text-sm md:text-lg text-center italic transition-opacity delay-500 animate-in">
                    &ldquo;All the skills that I have in that field of work are mentioned.&ldquo;
                </h4>
            </motion.div>

            <div className=" space-y-4">
                {skills.map((skill, idx) => (
                    <motion.div key={idx} className="space-y-1" variants={itemVarian}>
                        <div className=" flex justify-between text-xs md:text-sm lg:text-base xl:text-base text-muted-foreground">
                            <span className="">{skill.name}</span>
                            <span>{skill.rating}%</span>
                        </div>
                        <Progress value={skill.rating} className="w-full h-1" />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
