"use client"

import { SectionContent, SectionTitle, SectionWrapper } from "@/components/landingpage/section-wrapper"
import { SkillList } from "./skill-list"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"

const skills = [
    { name: "Next JS", rating: 95 },
    { name: "Express JS", rating: 90 },
    { name: "Django", rating: 85 },
    { name: "IBM Cloud", rating: 75 },
    { name: "Docker", rating: 80 },
    { name: "MongoDB", rating: 90 },
    { name: "Mysql", rating: 85 },
]

export function SkillSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <SectionWrapper id="skill" className=" px-[10%] md:px-16 lg:px-20">
            <SectionTitle title="SKILLS" />

            <SectionContent className="">
                <div ref={ref} className=" lg:flex justify-center md:gap-x-6 lg:gap-x-10 xl:gap-x-14 h-full">
                    {/* Description */}
                    <motion.div
                        className=" hidden w-full lg:flex flex-col md:max-w-sm lg:max-w-md xl:max-w-lg  space-y-4 text-wrap"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView && { opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, ease: "easeInOut", duration: 0.7 }}
                    >
                        <h4 className=" lg:text-2xl xl:text-3xl">
                            All the skills that I have in that field of work are mentioned.
                        </h4>
                        <p className=" lg:text-sm xl:text-base text-muted-foreground  text-wrap">
                            Bringing over two years of mastery as a skilled Fullstack Developer, I specialize in
                            seamlessly blending web development prowess with my expertise in data science. With a
                            diverse skill set, I architect captivating digital experiences while leveraging data
                            analytics to their fullest potential.
                        </p>
                        <p className="lg:text-sm xl:text-base text-muted-foreground text-wrap">
                            My passion lies in driving innovation and effecting positive change through technology.
                            Let&apos;s team up to engineer solutions that redefine the digital landscape!
                        </p>
                    </motion.div>

                    {/* Skill rating*/}

                    <div className=" space-y-4 w-full lg:max-w-md xl:max-w-lg">
                        <SkillList skills={skills} />
                    </div>
                </div>
            </SectionContent>
        </SectionWrapper>
    )
}
