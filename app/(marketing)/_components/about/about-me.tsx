"use client"

import { Button } from "@/components/ui/button"

import { SectionTitle } from "../section-title"
import { FaBirthdayCake, FaHome, FaLanguage, FaPhone } from "react-icons/fa"
import { MdAttachEmail } from "react-icons/md"
import { SiFreelancer } from "react-icons/si"
import { IoLanguage } from "react-icons/io5"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { containerVariant, itemVarian } from "../home/introduction"

export function AboutMe() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <div ref={ref} className=" space-y-4 md:space-y-6 lg:space-y-12 my-6 md:my-12 lg:my-16 h-full w-full">
            <SectionTitle>About Me</SectionTitle>
            <div className=" flex w-full h-max justify-center lg:gap-x-14 px-4 md:px-12 ">
                {/* Left side */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={isInView && { opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
                    className=" w-auto h-auto shrink-0"
                >
                    <Image
                        src={"/images/about-photo.jpg"}
                        alt="About photo"
                        height={400}
                        width={400}
                        className=" hidden lg:flex lg:w-[400px] w-auto h-auto shadow-md"
                    />
                </motion.div>

                {/* Right side */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView && { opacity: 1, y: 0 }}
                    transition={{ ease: "backInOut", duration: 1, delay: 2 }}
                    className=" flex flex-col justify-between space-y-4 lg:space-y-0"
                >
                    {/* Title & description */}
                    <div className=" space-y-1 md:space-y-2 lg:space-y-4">
                        <h2 className=" text-xl text-center md:text-left  md:text-2xl lg:text-3xl font-normal">
                            Hi There! I&apos;m Reza{" "}
                        </h2>
                        <h4 className=" text-base text-center md:text-left md:text-xl lg:text-2xl">
                            Fullstack Developer & Data Scientist
                        </h4>
                        <p className=" text-sm md:text-base lg:text-lg text-center md:text-left lg:font-light text-muted-foreground max-w-lg md:max-w-2xl lg:max-w-xl line-clamp-2 lg:line-clamp-4">
                            As a versatile Fullstack Developer and savvy Data Scientist, I create captivating digital
                            experiences. I blend sleek interfaces with insightful data analysis to inspire action and
                            drive positive impact through technology.
                        </p>
                    </div>
                    {/* Detail Information */}
                    <div className="flex text-sm md:text-base lg:text-lg lg:font-light  text-muted-foreground space-x-2 md:space-x-10 items-center justify-center md:justify-start">
                        <div className=" hidden md:block space-y-2">
                            <div className=" flex w-full justify-center md:justify-start items-center">
                                <p className=" hidden md:flex">Birthday</p>
                            </div>
                            <div className=" flex w-full justify-center md:justify-start">
                                <p className=" hidden md:flex">Phone</p>
                            </div>
                            <div className=" flex w-full justify-center md:justify-start">
                                <p className=" hidden md:flex">Email</p>
                            </div>
                            <div className=" flex w-full justify-center md:justify-start">
                                <p className=" hidden md:flex">Address</p>
                            </div>
                            <div className=" flex w-full justify-center md:justify-start">
                                <p className=" hidden md:flex">Language</p>
                            </div>
                            <div className=" flex w-full justify-center md:justify-start">
                                <p className=" hidden md:flex">Freelance</p>
                            </div>
                        </div>
                        <div className=" flex flex-col items-center md:items-start space-y-2 ">
                            <div className=" flex space-x-2  items-center">
                                <FaBirthdayCake className=" flex md:hidden size-4" />
                                <span className=" hidden md:flex">: </span>
                                <span>March 22, 1998</span>
                            </div>
                            <div className=" flex space-x-2  items-center">
                                <FaPhone className=" flex md:hidden size-4" />
                                <span className=" hidden md:flex">: </span>
                                <span>+62 822-8235-3557</span>
                            </div>
                            <div className=" flex space-x-2  items-center">
                                <MdAttachEmail className=" flex md:hidden size-4" />
                                <span className=" hidden md:flex">: </span>
                                <span className="truncate">rezaputramardiansyah@gmail.com</span>
                            </div>
                            <div className=" flex space-x-2  items-center">
                                <FaHome className=" flex md:hidden size-4" />
                                <span className=" hidden md:flex">: </span>
                                <span>Yogyakarta</span>
                            </div>
                            <div className=" flex space-x-2  items-center">
                                <IoLanguage className=" flex md:hidden size-4" />
                                <span className=" hidden md:flex">: </span>
                                <span>English, Indonesia</span>
                            </div>
                            <div className=" flex space-x-2 items-center">
                                <SiFreelancer className=" flex md:hidden size-4" />
                                <span className=" hidden md:flex">: </span>
                                <span>Available</span>
                            </div>
                        </div>
                    </div>
                    {/* CV button */}
                    <div className=" flex w-full justify-center lg:justify-start text-foreground">
                        <Button variant="secondary">Download CV</Button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
