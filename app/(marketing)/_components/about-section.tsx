import { SectionContent, SectionTitle, SectionWrapper } from "@/components/landingpage/section-wrapper"
import { useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

import { motion } from "framer-motion"
import { FaBirthdayCake, FaHome, FaPhone } from "react-icons/fa"
import { MdAttachEmail } from "react-icons/md"
import { IoLanguage } from "react-icons/io5"
import { SiFreelancer } from "react-icons/si"

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

            <SectionContent className="px-[10%]">
                <div ref={ref} className="flex justify-center lg:gap-x-10 xl:gap-x-14">
                    {/* Left side */}
                    <motion.div
                        className="shrink-0"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView && { opacity: 1, x: 0 }}
                        transition={{ ease: "easeInOut", delay: 0.6, duration: 0.8 }}
                    >
                        <Image
                            src={"/images/about-photo.jpg"}
                            alt="About photo"
                            height={400}
                            width={400}
                            className=" hidden h-auto lg:flex lg:w-[350px] xl:w-[400px] shadow-md"
                            priority={true}
                        />
                    </motion.div>

                    {/* Right side */}
                    <motion.div
                        className="flex flex-col justify-between space-y-4 lg:space-y-0"
                        variants={containerVariant}
                        initial="hidden"
                        animate={isInView && "visible"}
                    >
                        {/* Title & description */}
                        <motion.div className="space-y-1 md:space-y-2 lg:space-y-3 xl:space-y-4" variants={itemVarian}>
                            <h2 className="text-center md:text-left text-lg md:text-2xl lg:text-2xl xl:text-3xl">
                                Hey there! It&apos;s Reza,
                            </h2>
                            <h4 className="text-center md:text-left text-sm md:text-lg lg:text-lg xl:text-xl">
                                Eager to dive into the new big challenge!
                            </h4>
                            <p className=" hidden md:flex text-xs md:text-base lg:text-base text-center md:text-left text-muted-foreground max-w-lg md:max-w-2xl lg:max-w-2xl line-clamp-2 lg:line-clamp-4">
                                As a versatile Fullstack Developer with the analytical finesse of a Data Scientist, I
                                design engaging digital experiences that blend sleek interfaces with insightful data
                                analysis. My goal is to inspire action and create positive impacts through technology,
                                crafting user-friendly solutions that resonate with audiences across the digital
                                landscape.
                            </p>
                        </motion.div>
                        {/* Detail Information */}
                        <motion.div
                            className="flex text-xs md:text-base lg:text-base  text-muted-foreground space-x-2 md:space-x-10 items-center justify-center md:justify-start"
                            variants={itemVarian}
                        >
                            <div className=" hidden md:block space-y-2 md:space-y-3 lg:space-y-2 xl:space-y-4 ">
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
                            <div className=" flex flex-col space-y-2 md:space-y-3 lg:space-y-2 xl:space-y-4 items-center md:items-start ">
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
                                    <span>Yogyakarta, Indonesia</span>
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
                        </motion.div>
                        {/* CV button */}
                        <motion.div
                            className=" flex w-full justify-center lg:justify-start text-foreground"
                            variants={itemVarian}
                        >
                            <button className="flex bg-primary px-2 py-2 md:px-3 md:py-2 rounded-md text-background text-xs/3 md:text-xs xl:text-sm hover:bg-primary/90">
                                Download CV
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </SectionContent>
        </SectionWrapper>
    )
}
