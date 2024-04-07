"use client"

import { SectionContent, SectionTitle, SectionWrapper } from "@/components/landingpage/section-wrapper"
import { ResumeList } from "./resume-list"

import { FaPenNib } from "react-icons/fa"
import { MdWork } from "react-icons/md"
import { ShowMoreByHeight } from "@/components/landingpage/showmore-by-height"

export interface IResume {
    position: string
    period: string
    place: string
    description: string
}

const educations: IResume[] = [
    {
        position: "IBM Fullstack Software Developer",
        period: "Des 2023 - Feb 2024",
        place: "IBM",
        description: "Intensive program covering fullstack development skills for professional certificate.",
    },
    {
        position: "Google Advanced Data Analytics",
        period: "Aug 2023 - Nov 2023",
        place: "Google",
        description:
            "Focused on advanced techniques for data analysis using Google tools for professional certificate.",
    },
    {
        position: "Master of Computer Science",
        period: "2021 - 2023",
        place: "Gadjah Mada University",
        description: "Graduate program providing in-depth knowledge of computer science concepts and research skills.",
    },
    {
        position: "Bachelor of Computer Science",
        period: "2015 - 2019",
        place: "Amikom Yogyakata University",
        description: "Computing program study focusing on Web/Software development and network.",
    },
]

const experience: IResume[] = [
    {
        position: "Web Developer",
        period: "Oct 2022 - Mar 2024",
        place: "Freelance",
        description: "Working independently on various projects as a web developer.",
    },
    {
        position: "Data Scientist Intern",
        period: "Feb 2022 - Aug 2022",
        place: "Dwi Media Lestari",
        description: "Focused on data science tasks at Dwi Media Lestari.",
    },
    {
        position: "Cameramen Intern",
        period: "Mei 2014 - July 2014",
        place: "SCTV",
        description: "I helped out with equipment and made sure things looked good on screen.",
    },
]

export function ResumeSection() {
    return (
        <SectionWrapper id="resume">
            <SectionTitle title="RESUME" />

            <SectionContent className=" flex flex-col items-center justify-center w-full ">
                {/* <div className=" hidden lg:block"> */}
                <ShowMoreByHeight className=" h-[250px] lg:h-[450px]">
                    <div className=" space-y-6 lg:flex md:space-y-8 lg:space-y-0 w-full justify-center lg:space-x-10 xl:space-x-16">
                        {/* Left side */}
                        <div className=" w-full  lg:max-w-sm xl:max-w-md ">
                            <ResumeList title="Education" icon={FaPenNib} contents={educations} />
                        </div>
                        {/* Right side */}
                        <div className="w-full  lg:max-w-sm xl:max-w-md ">
                            <ResumeList title="Experience" icon={MdWork} contents={experience} />
                        </div>
                    </div>
                </ShowMoreByHeight>
                {/* </div> */}
            </SectionContent>
        </SectionWrapper>
    )
}
