"use client"

import { useEffect, useState } from "react"
import HomeSection from "./_components/home-section"
import { AboutSection } from "./_components/about-section"
import { ServiceSection } from "./_components/service-section"
import { SkillSection } from "./_components/skill-section"
import { ResumeSection } from "./_components/resume-section"

function MarketingPage() {
    return (
        <>
            <HomeSection />
            <AboutSection />
            <ServiceSection />
            <SkillSection />
            <ResumeSection />
        </>
    )
}

export default MarketingPage
