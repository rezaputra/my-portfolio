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
        position: "IBM Fullstack Software Developer Certificate",
        period: "November 2023 - February 2024",
        place: "IBM Skills Network",
        description: "Intensive program covering fullstack development skills for professional certificate.",
    },
    {
        position: "Google Advanced Data Analytics Certificate",
        period: "Mei 2023 - August 2023",
        place: "Google Career",
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
        description: "Undergraduate program covering various aspects of computer science.",
    },
]

const experience: IResume[] = [
    {
        position: "Fullstack Developer",
        period: "February 2022 - Present",
        place: "Freelance",
        description: "Working independently on various projects as a fullstack developer.",
    },
    {
        position: "Data Analysis Intern",
        period: "August 2021 - January 2022",
        place: "Dwi Media Lestari",
        description: "Internship position focused on data analysis tasks at Dwi Media Lestari.",
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
