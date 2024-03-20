"use client"

import { useEffect, useState } from "react"
import { Home } from "./_components/home/home"
import { AboutMe } from "./_components/about/about-me"

function MarketingPage() {
    return (
        <>
            <Home />
            <AboutMe />
        </>
    )
}

export default MarketingPage
