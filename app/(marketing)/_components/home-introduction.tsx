"use client"

import { motion } from "framer-motion"

import { BiLogoPostgresql } from "react-icons/bi"
import { DiMongodb } from "react-icons/di"
import { FaDocker, FaNodeJs, FaPython, FaReact } from "react-icons/fa"
import { GrMysql } from "react-icons/gr"
import { SiDjango, SiExpress, SiIbmcloud, SiIbmwatson, SiNextdotjs } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useEffect, useState } from "react"
import Link from "next/link"

const containerVariant = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.2,
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
            duration: 0.6,
        },
    },
    animate: { type: "spring" },
}

export function HomeIntroduction() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <motion.div
            className="space-y-2 text-center md:text-left md:space-y-4"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
        >
            <motion.h4 className=" text-base md:text-xl lg:text-2xl xl:text-3xl" variants={itemVarian}>
                Hello, I’m
            </motion.h4>
            <motion.h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold" variants={itemVarian}>
                Reza
                <br />
                Mardiansyah <br />
                Putra
            </motion.h1>

            <motion.h4
                className="   text-base md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground truncate"
                variants={itemVarian}
            >
                Fullstack Developer
            </motion.h4>
            <motion.div className=" space-x-1 md:space-x-2" variants={itemVarian}>
                <TooltipProvider>
                    {/* <FaNodeJs className="lg:size-8" /> */}
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger>
                            <TbBrandNextjs className="size-4 md:size-6 lg:size-8" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <span>Next js</span>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger>
                            <SiExpress className="size-4 md:size-6 lg:size-8" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <span>Express js</span>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger>
                            <FaDocker className="size-4 md:size-6 lg:size-8" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <span>Docker</span>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger>
                            <SiDjango className="size-4 md:size-6 lg:size-8" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <span>Django</span>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger>
                            <SiIbmcloud className="size-4 md:size-6 lg:size-8" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <span>IBM Cloud</span>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger>
                            <DiMongodb className="size-4 md:size-6 lg:size-8" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <span>MongoDB</span>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger>
                            <GrMysql className="size-4 md:size-6 lg:size-8" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <span>Mysql</span>
                        </TooltipContent>
                    </Tooltip>
                    {/* <FaReact className="lg:size-8" /> */}
                    {/* <FaPython className="lg:size-8" /> */}

                    {/* <BiLogoPostgresql className="lg:size-8" /> */}
                </TooltipProvider>
            </motion.div>
            {isScrolled && (
                <motion.div
                    className=" flex justify-center md:justify-start "
                    transition={{ duration: 1 }}
                    variants={itemVarian}
                >
                    <Link href={"#contact"}>
                        <motion.button
                            className="flex bg-foreground px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-md text-background text-xs md:text-sm lg:text-base"
                            whileHover={{ scale: 1.1, rotate: "2deg" }}
                        >
                            Hire Me
                        </motion.button>
                    </Link>
                </motion.div>
            )}
        </motion.div>
    )
}
