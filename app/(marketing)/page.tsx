"use client"

import { Suspense, useEffect, useState } from "react"
import HomeSection from "./_components/home-section"
import { AboutSection } from "./_components/about-section"
import { ServiceSection } from "./_components/service-section"
import { SkillSection } from "./_components/skill-section"
import { ResumeSection } from "./_components/resume-section"
import { PortfolioSection } from "./_components/portfolio-section"

function MarketingPage() {
    return (
        <>
            <HomeSection />
            <AboutSection />
            <ServiceSection />
            <SkillSection />
            <ResumeSection />
            <PortfolioSection />
        </>
    )
}

export default MarketingPage
