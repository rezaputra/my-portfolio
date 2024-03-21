"use client"

import { SectionContent, SectionTitle, SectionWrapper } from "@/components/landingpage/section-wrapper"
import { Card, CardDescription, CardTitle, HoverEffect } from "@/components/ui/card-hover-effect"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

const services = [
    {
        title: "Fullstack Web Development",
        description: "Building web applications from front-end to back-end using modern technologies and frameworks.",
        link: "https://example.com/fullstack-web-development",
    },
    {
        title: "API Development",
        description: "Creating robust APIs to facilitate communication between front-end and back-end systems.",
        link: "https://example.com/api-development",
    },
    {
        title: "Database Design and Management",
        description: "Designing and managing databases to ensure efficient storage and retrieval of data.",
        link: "https://example.com/database-design-and-management",
    },
    {
        title: "Responsive Web Design",
        description: "Crafting web interfaces that adapt seamlessly to various devices and screen sizes.",
        link: "https://example.com/responsive-web-design",
    },
    // {
    //     title: "Authentication and Authorization",
    //     description:
    //         "Implementing secure authentication and authorization mechanisms to protect user data and resources.",
    //     link: "https://example.com/authentication-and-authorization",
    // },
    {
        title: "Data Analysis",
        description: "Analyzing large datasets to extract meaningful insights and drive informed decision-making.",
        link: "https://example.com/data-analysis",
    },
    {
        title: "Machine Learning Modeling",
        description: "Developing predictive models using machine learning algorithms to solve complex problems.",
        link: "https://example.com/machine-learning-modeling",
    },
]

export function ServiceSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <SectionWrapper id="service">
            <SectionTitle title="SERVICE" />

            <SectionContent className="px-8 md:px-12 lg:px-16 xl:px-20">
                <motion.div
                    ref={ref}
                    initial={{ x: 50, opacity: 0 }}
                    animate={isInView && { x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <div className=" hidden md:flex">
                        <HoverEffect items={services} className=" p-0"></HoverEffect>
                    </div>
                    <div className="flex md:hidden w-full">
                        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                            <div className="flex w-full space-x-4 p-3">
                                {services.map((service, idx) => (
                                    <Link href={service.link} key={idx} target="_blank">
                                        <Card className="p-0 min-w-52 ">
                                            <CardTitle className=" p-0 my-0 text-sm">{service.title}</CardTitle>
                                            <CardDescription className=" line-clamp-2 text-wrap text-xs">
                                                {service.description}
                                            </CardDescription>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                </motion.div>
            </SectionContent>
        </SectionWrapper>
    )
}
