"use client"

import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export function Home() {
    const [githubVisible, setGithubVisible] = useState<boolean>(true)
    const [instagramVisible, setInstagramVisible] = useState<boolean>(false)
    const [linkedinVisible, setLinkedinVisible] = useState<boolean>(false)

    const container = {
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

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
        animate: { type: "spring" },
    }

    const onMouseEnter = (social: string) => {
        if (social === "github") {
            setGithubVisible(true)
            setInstagramVisible(false)
            setLinkedinVisible(false)
        }
        if (social === "instagram") {
            setGithubVisible(false)
            setInstagramVisible(true)
            setLinkedinVisible(false)
        }
        if (social === "linkedin") {
            setGithubVisible(false)
            setInstagramVisible(false)
            setLinkedinVisible(true)
        }
    }

    return (
        <div className=" w-full h-[110svh] flex dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
            <div className=" container flex w-full h-full space-y-8">
                <div className=" md:flex w-full justify-between ">
                    <motion.div
                        className=" space-y-4 md:mt-32 md:ml-10 lg:ml-20 md:mr-8"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h4 className=" text-2xl" variants={item}>
                            Hello, I’m
                        </motion.h4>
                        <motion.h1 className=" text-7xl font-bold " variants={item}>
                            Reza <br /> Mardiansyah
                            <br /> Putra
                        </motion.h1>

                        <motion.h4 className=" text-2xl text-muted-foreground " variants={item}>
                            Fullstack Developer & Data Scientist
                        </motion.h4>
                        <motion.div transition={{ delay: 1.2, duration: 1 }} variants={item}>
                            <Link href={"#contact"}>
                                <motion.button
                                    className=" bg-foreground px-4 py-2 rounded-md text-background text-sm"
                                    whileHover={{ scale: 1.1, rotate: "2deg" }}
                                >
                                    Hire Me
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className=" hidden md:block shrink-0 mt-14 lg:h-[550px] lg:w-[550px]"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2, duration: 1.4, type: "spring" }}
                    >
                        <Image
                            src={"/image/home-photo-2.jpg"}
                            alt="Profile"
                            height={550}
                            width={550}
                            className="  rounded-t-xl rounded-ee-lg"
                            priority={true}
                        />

                        <motion.div
                            initial={{ opacity: 0, scaleX: 0.5 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            transition={{ type: "spring" }}
                            className=" relative w-max"
                        >
                            <div className=" absolute bottom-0 left-[-238px] h-16 w-60 bg-foreground rounded-l-xl">
                                <div className=" flex h-full w-full items-center mx-4 space-x-4 ">
                                    <Link
                                        href={"https://github.com/rezaputra"}
                                        target="_blank"
                                        className=" flex gap-x-2 items-center"
                                    >
                                        <FaGithub
                                            className=" h-8 w-8 text-secondary"
                                            onMouseEnter={() => {
                                                onMouseEnter("github")
                                            }}
                                        />
                                        {githubVisible && (
                                            <motion.span
                                                initial={{ scaleX: 0 }}
                                                whileInView={{ scaleX: 1 }}
                                                transition={{ type: "spring" }}
                                                className=" origin-left text-secondary"
                                            >
                                                Github
                                            </motion.span>
                                        )}
                                    </Link>
                                    <Link href={"#"} target="_blank" className=" flex gap-x-2 items-center">
                                        <FaInstagram
                                            className=" h-8 w-8 text-secondary"
                                            onMouseEnter={() => {
                                                onMouseEnter("instagram")
                                            }}
                                        />
                                        {instagramVisible && (
                                            <motion.span
                                                initial={{ scaleX: 0 }}
                                                whileInView={{ scaleX: 1 }}
                                                transition={{ type: "spring" }}
                                                className=" origin-left text-secondary"
                                            >
                                                Instagram
                                            </motion.span>
                                        )}
                                    </Link>
                                    <Link
                                        href={"https://www.linkedin.com/in/rzravenvy/"}
                                        target="_blank"
                                        className=" flex gap-x-2 items-center"
                                    >
                                        <FaLinkedin
                                            className=" h-8 w-8 text-secondary"
                                            onMouseEnter={() => {
                                                onMouseEnter("linkedin")
                                            }}
                                        />
                                        {linkedinVisible && (
                                            <motion.span
                                                initial={{ scaleX: 0 }}
                                                whileInView={{ scaleX: 1 }}
                                                transition={{ type: "spring" }}
                                                className=" origin-left text-secondary"
                                            >
                                                Linkedin
                                            </motion.span>
                                        )}
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
