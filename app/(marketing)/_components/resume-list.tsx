"use client"

import { IconType } from "react-icons"
import { IResume } from "./resume-section"

import { GoDotFill } from "react-icons/go"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ResumeListProps {
    title: string
    icon: IconType
    contents: IResume[]
}

const containerVariant = {
    hidden: { opacity: 1, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.4,
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

export function ResumeList({ title, icon: Icon, contents }: ResumeListProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
            ref={ref}
            className=" w-full space-y-2 lg:space-y-6  xl:space-y-8  "
            variants={containerVariant}
            initial="hidden"
            animate={isInView && "visible"}
        >
            {/* Title */}
            <motion.div
                className=" flex items-center justify-center lg:justify-start space-x-2 md:space-x-3 lg:space-x-4"
                variants={itemVarian}
            >
                <Icon className=" size-4 md:size-5 lg:size-6 xl:size-7 opacity-60" />
                <span className=" text-base md:text-xl lg:text-2xl xl:text-2xl">{title}</span>
            </motion.div>
            {/* Desktop */}
            <div className=" hidden lg:block space-y-6">
                {contents.map((content, idx) => (
                    <motion.div key={idx} className=" flex items-start space-x-2 lg:space-x-4  " variants={itemVarian}>
                        <div className="mt-2 ">
                            <GoDotFill className="size-2 lg:size-3" />
                        </div>
                        <div className="space-y-2">
                            <div>
                                <p className=" md:text-base xl:text-lg">{content.position}</p>
                                <span className=" md:text-sm  lg:text-base text-muted-foreground">
                                    {content.period}
                                </span>
                            </div>
                            <div className="space-y-1">
                                <span className=" md:text-sm lg:text-base">{content.place}</span>
                                <p className="md:text-sm lg:text-base text-muted-foreground">{content.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* Mobile */}
            <div className="block lg:hidden space-y-4">
                <Accordion type="single" collapsible className="w-full">
                    {contents.map((content, idx) => (
                        <motion.div key={idx} variants={itemVarian}>
                            <AccordionItem value={content.position}>
                                <AccordionTrigger className=" text-left text-xs sm:text-sm">
                                    {content.position}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className=" space-y-4 text-xs/3 md:text-sm">
                                        <div>
                                            <span className=" text-muted-foreground">{content.period}</span>
                                        </div>
                                        <div className=" space-y-2">
                                            <span className=" ">{content.place}</span>
                                            <p className=" text-muted-foreground">{content.description}</p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </Accordion>
            </div>
        </motion.div>
    )
}
