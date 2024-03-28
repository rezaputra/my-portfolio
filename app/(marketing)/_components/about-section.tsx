import { SectionContent, SectionTitle, SectionWrapper } from "@/components/landingpage/section-wrapper"
import { useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

import { motion } from "framer-motion"
import { FaBirthdayCake, FaHome, FaPhone } from "react-icons/fa"
import { MdAttachEmail } from "react-icons/md"
import { IoLanguage } from "react-icons/io5"
import { SiFreelancer } from "react-icons/si"
import { Button } from "@/components/ui/button"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"
import Link from "next/link"

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
            duration: 0.6,
        },
    },
    animate: { type: "spring" },
}

export function AboutSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <SectionWrapper id="about" className=" mt-4 md:mt-8 lg:mt-12 xl:mt-16">
            <SectionTitle title="ABOUT ME" />

            <SectionContent className="">
                <div ref={ref} className="flex justify-center lg:gap-x-10 xl:gap-x-14">
                    {/* Left side */}
                    <motion.div
                        className="shrink-0 hidden relative lg:flex items-center justify-center shadow-md"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView && { opacity: 1, x: 0 }}
                        transition={{ ease: "easeInOut", delay: 0.6, duration: 0.8 }}
                    >
                        <DirectionAwareHover
                            imageUrl={"/images/about-photo.jpg"}
                            className=" rounded-sm cursor-pointer"
                            imageClassName="h-auto w-auto lg:flex lg:w-[330px] xl:w-[380px]"
                        >
                            <p className="font-bold text-xl">Reza Mardiansyah Putra</p>
                            <p className="font-normal text-sm">Developer</p>
                        </DirectionAwareHover>
                    </motion.div>

                    {/* Right side */}
                    <motion.div
                        className="flex flex-col justify-between space-y-4 md:space-y-5"
                        variants={containerVariant}
                        initial="hidden"
                        animate={isInView && "visible"}
                    >
                        {/* Title */}
                        <motion.div
                            className="text-center md:text-left space-y-1 md:space-y-2 xl:space-y-3"
                            variants={itemVarian}
                        >
                            <h2 className=" text-lg font-semibold md:text-2xl xl:text-3xl">
                                Hey there! It&apos;s Reza,
                            </h2>
                            <h4 className="text-sm md:text-base text-muted-foreground xl:text-lg">
                                Eager to dive into the new big challenge!
                            </h4>
                        </motion.div>
                        <motion.div className=" hidden md:flex xl:text-lg max-w-2xl" variants={itemVarian}>
                            <p className=" font-sans ">
                                As a Fullstack Developer, I create exciting digital experiences by combining sleek
                                interfaces with insightful data analysis, blending technology seamlessly for maximum
                                engagement.
                            </p>
                        </motion.div>

                        {/* Description */}

                        {/* Detail Information */}
                        <motion.div
                            className="flex  font-sans text-sm md:text-base lg:text-base xl:text-lg md:space-x-14 xl:space-x-20 items-center justify-center md:justify-start"
                            variants={itemVarian}
                        >
                            <div className=" hidden md:block space-y-2 md:space-y-2 lg:space-y-2 xl:space-y-3 ">
                                <div className=" flex w-full justify-center md:justify-start items-center">
                                    <p className=" hidden md:flex">Birthday</p>
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
                            <div className=" flex flex-col space-y-2 md:space-y-2 lg:space-y-2 xl:space-y-3 items-center md:items-start ">
                                <div className=" flex space-x-2  items-center">
                                    <FaBirthdayCake className=" flex md:hidden size-4" />
                                    <span className=" hidden md:flex">: </span>
                                    <span>March 22, 1998</span>
                                </div>
                                <div className=" flex space-x-2  items-center">
                                    <MdAttachEmail className=" flex md:hidden size-4" />
                                    <span className=" hidden md:flex">: </span>
                                    <span className=" line-clamp-1">rezaputramardiansyah@gmail.com</span>
                                </div>
                                <div className=" flex space-x-2  items-center">
                                    <FaHome className=" flex md:hidden size-4" />
                                    <span className=" hidden md:flex">: </span>
                                    <span>Yogyakarta, Indonesia</span>
                                </div>
                                <div className=" flex space-x-2  items-center">
                                    <IoLanguage className=" flex md:hidden size-4" />
                                    <span className=" hidden md:flex">: </span>
                                    <span>English, Indonesia</span>
                                </div>
                                <div className=" flex space-x-2  items-center">
                                    <SiFreelancer className=" flex md:hidden size-4" />
                                    <span className=" hidden md:flex">: </span>
                                    <span>Available</span>
                                </div>
                            </div>
                        </motion.div>
                        {/* CV button */}
                        <motion.div
                            className=" flex justify-center md:justify-start text-foreground"
                            variants={itemVarian}
                        >
                            <Link href={"/cv.pdf"} target="_blank">
                                <Button className=" hidden lg:block">Download CV</Button>
                                <Button size={"sm"} className=" block lg:hidden">
                                    Download CV
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </SectionContent>
        </SectionWrapper>
    )
}
