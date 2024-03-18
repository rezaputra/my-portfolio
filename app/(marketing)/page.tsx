"use client"

import { About } from "./_components/about"
import { Home } from "./_components/home"

import { useEffect, useState } from "react"

function MarketingPage() {
    return (
        <div>
            <Home />
            <About />
        </div>
    )
}

export default MarketingPage
