"use client"

import { SectionContent, SectionWrapper } from "@/components/landingpage/section-wrapper"
import { HomePhoto } from "./home-photo"
import { HomeIntroduction } from "./home-introduction"

function HomeSection() {
    return (
        <SectionWrapper
            id="home"
            className="bg-background dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  py-4 md:py-6 lg:py-8 xl:py-10"
        >
            <SectionContent className="container md:flex items-center justify-center md:justify-between  mt-0 md:mt-0 lg:mt-0 xl:mt-0 space-y-4 md:space-y-0  md:space-x-10 lg:space-y-0   ">
                <div>
                    <HomeIntroduction />
                </div>
                <div>
                    <HomePhoto />
                </div>
            </SectionContent>
        </SectionWrapper>
    )
}

export default HomeSection
