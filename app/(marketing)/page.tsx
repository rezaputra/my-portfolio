"use client"

import { useEffect, useState } from "react"
import { Home } from "./_components/home/home"
import { AboutMe } from "./_components/about/about-me"
import { Service } from "./_components/service/service"
import { Skill } from "./_components/skills/skill"
import HomeSection from "./_components/home-section"
import { AboutSection } from "./_components/about-section"
import { ServiceSection } from "./_components/service-section"
import { SkillSection } from "./_components/skill-section"

function MarketingPage() {
    return (
        <>
            <HomeSection />
            <AboutSection />
            <ServiceSection />
            <SkillSection />
        </>
    )
}

export default MarketingPage
