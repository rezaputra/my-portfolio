"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import { motion } from "framer-motion"
import { containerVariant, itemVarian } from "../_components/home-introduction"

const questions = [
    {
        question: "What technologies do you specialize in?",
        answer: "As a full-stack web developer, I specialize in a variety of technologies including Next.js, Django, Express.js, IBM Cloud, Docker, MongoDB, and MySQL. I have extensive experience in using these technologies to build robust and scalable web applications.",
    },
    {
        question: "Can you provide examples of projects you've worked on using these technologies?",
        answer: "Absolutely! You can find examples of my work in my portfolio section. Each project showcases my proficiency in utilizing different technologies to solve real-world problems and deliver exceptional results.",
    },
    {
        question: "Do you have experience with cloud platforms?",
        answer: "Yes, I have experience working with IBM Cloud and leveraging its services for deploying and managing web applications. Whether it's deploying Next.js applications or setting up databases on the cloud, I am well-versed in utilizing cloud platforms to optimize performance and scalability.",
    },
    {
        question: "How do you ensure the security of web applications?",
        answer: "Security is paramount in all the projects I undertake. I employ industry best practices and follow security guidelines to safeguard web applications against vulnerabilities. Additionally, I implement authentication mechanisms, data encryption, and conduct regular security audits to mitigate risks and ensure a secure environment for users.",
    },
    {
        question: "Do you have experience with containerization and orchestration?",
        answer: "Yes, I have extensive experience with Docker for containerization and orchestration. I utilize Docker to package applications and their dependencies into containers, ensuring consistency across different environments. Additionally, I have experience with orchestration tools like Kubernetes for managing containerized applications at scale.",
    },
    {
        question: "How do you approach database management?",
        answer: "I am proficient in working with both relational (MySQL) and NoSQL (MongoDB) databases. Depending on the requirements of the project, I select the appropriate database technology and design efficient database schemas. I prioritize data integrity, scalability, and performance in database management to ensure optimal functionality of web applications.",
    },
    {
        question: "Can you explain your development process?",
        answer: "My development process typically begins with understanding the project requirements and defining clear objectives. I then proceed with system design, where I choose the most suitable technologies and architecture for the project. Throughout the development phase, I follow an iterative approach, regularly testing and refining features to meet the client's expectations. Continuous integration and deployment (CI/CD) practices are also integral to my development process to ensure seamless delivery of updates and enhancements.",
    },
    {
        question: "Are you available for freelance or contract work?",
        answer: "Yes, I am available for freelance or contract work. Whether it's building a new web application from scratch, optimizing an existing system, or providing technical consultation, I am open to discussing potential opportunities. Feel free to reach out to me via the contact information provided on my portfolio website.",
    },
]
function FaqPage() {
    return (
        <motion.div
            className=" min-h-[100vh] w-full flex items-center justify-center px-[10%]"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-xl w-full space-y-2 md:space-y-4 lg:space-y-6 font-sans">
                <motion.h1 className="  text-center text-base md:text-lg lg:text-xl font-semibold">
                    Frequently Asked Questions{" "}
                </motion.h1>
                <Accordion type="single" collapsible className=" ">
                    {questions.map((item, idx) => (
                        <motion.div key={idx} variants={itemVarian}>
                            <AccordionItem value={`question-${idx}`}>
                                <AccordionTrigger className=" text-start text-xs md:text-sm lg:text-base">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className=" text-xs md:text-sm lg:text-base">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </Accordion>
            </div>
        </motion.div>
    )
}

export default FaqPage
