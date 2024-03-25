"use client"

import { BiLogoPostgresql } from "react-icons/bi"
import { DiMongodb } from "react-icons/di"
import { FaDocker, FaNodeJs, FaPython, FaReact } from "react-icons/fa"
import { GrMysql } from "react-icons/gr"
import { SiDjango, SiExpress, SiIbmcloud, SiIbmwatson, SiNextdotjs } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

import { IconType } from "react-icons"

import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { IIcon, IconTooltip } from "@/components/landingpage/icon-tooltip"

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

const iconItems: IIcon[] = [
    { tooltip: "Next Js", icon: TbBrandNextjs },
    { tooltip: "Express Js", icon: SiExpress },
    { tooltip: "Docker", icon: FaDocker },
    { tooltip: "Django", icon: SiDjango },
    { tooltip: "IBM Cloud", icon: SiIbmcloud },
    { tooltip: "MongoDB", icon: DiMongodb },
    { tooltip: "MySql", icon: GrMysql },
]

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
            className="space-y-2 text-center md:text-left md:space-y-3 lg:space-y-4 xl:space-y-5"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
        >
            <motion.h4 className=" text-base md:text-lg lg:text-xl xl:text-2xl" variants={itemVarian}>
                Hello, I’m
            </motion.h4>
            <motion.h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold" variants={itemVarian}>
                Reza
                <br />
                Mardiansyah <br />
                Putra
            </motion.h1>

            <motion.h4
                className="   text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground truncate"
                variants={itemVarian}
            >
                Fullstack Web Developer
            </motion.h4>
            <motion.div className=" space-x-1 md:space-x-1.5 xl:space-x-3" variants={itemVarian}>
                <IconTooltip icons={iconItems} className=" md:size-5 lg:size-6 xl:size-7" />
            </motion.div>
            {isScrolled && (
                <motion.div className=" flex justify-center md:justify-start " variants={itemVarian}>
                    <motion.div whileHover={{ scale: 1.1, rotate: "2deg" }}>
                        <Link href={"#contact"}>
                            <Button size={"sm"} className=" block lg:hidden">
                                Hire Me!
                            </Button>
                            <Button className=" hidden lg:block">Hire Me!</Button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    )
}
