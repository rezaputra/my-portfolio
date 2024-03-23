"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

export function HomePhoto() {
    const [githubVisible, setGithubVisible] = useState<boolean>(true)
    const [instagramVisible, setInstagramVisible] = useState<boolean>(false)
    const [linkedinVisible, setLinkedinVisible] = useState<boolean>(false)

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
        <div className=" flex w-full md:w-max  justify-center">
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1.2, type: "spring" }}
            >
                <Image
                    src={"/images/home-photo-2.jpg"}
                    height={390}
                    width={390}
                    alt="Home-photo"
                    className=" w-[180px] md:w-[280px] lg:w-[350px] xl:w-[460px] h-auto shadow-md"
                    priority={true}
                />
                <div className="relative block bg-primary origin-right">
                    <AnimatePresence>
                        <motion.div
                            className="flex absolute z-0 items-center px-4 h-8 md:h-10 lg:h-12 xl:h-14 space-x-2 bottom-0 md:left-0 lg:left-[-230px] w-full lg:w-[230px] justify-center lg:origin-right bg-zinc-950 origin-right"
                            initial={{ opacity: 0, scaleX: 0.5 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            exit={{ opacity: 0, scaleX: 0.5 }}
                            transition={{ ease: "easeIn" }}
                        >
                            <Link
                                href={"https://github.com/rezaputra"}
                                target="_blank"
                                className="flex gap-x-2 items-center"
                            >
                                <FaGithub
                                    className=" md:size-6 lg:size-7 xl:size-8 text-zinc-50"
                                    onMouseEnter={() => {
                                        onMouseEnter("github")
                                    }}
                                />
                                {githubVisible && (
                                    <motion.span
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ type: "spring" }}
                                        className=" origin-left  text-xs md:text-sm lg:text-lg text-zinc-50"
                                    >
                                        Github
                                    </motion.span>
                                )}
                            </Link>
                            <Link href={"#"} target="_blank" className=" flex gap-x-2 items-center">
                                <FaInstagram
                                    className=" size-4 md:size-6 lg:size-7 xl:size-8 text-zinc-50"
                                    onMouseEnter={() => {
                                        onMouseEnter("instagram")
                                    }}
                                />
                                {instagramVisible && (
                                    <motion.span
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ ease: "easeInOut" }}
                                        className="  text-xs md:text-sm lg:text-lg origin-left text-zinc-50"
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
                                    className=" size-4 md:size-6 lg:size-7 xl:size-8 text-zinc-50"
                                    onMouseEnter={() => {
                                        onMouseEnter("linkedin")
                                    }}
                                />
                                {linkedinVisible && (
                                    <motion.span
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ type: "spring" }}
                                        className=" text-xs md:text-sm lg:text-lg origin-left text-zinc-50"
                                    >
                                        Linkedin
                                    </motion.span>
                                )}
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    )
}
