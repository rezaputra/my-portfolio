"use client"

import HomeSection from "./_components/home/home-section"
import { AboutSection } from "./_components/about/about-section"
import { ServiceSection } from "./_components/service/service-section"
import { SkillSection } from "./_components/skills/skill-section"
import { ResumeSection } from "./_components/resume/resume-section"
import { PortfolioSection } from "./_components/portfolio/portfolio-section"
import { ContactSection } from "./_components/contact/contact-section"

function MarketingPage() {
    return (
        <>
            <HomeSection />
            <AboutSection />
            <ServiceSection />
            <SkillSection />
            <ResumeSection />
            <PortfolioSection />
            <ContactSection />
        </>
    )
}

export default MarketingPage
