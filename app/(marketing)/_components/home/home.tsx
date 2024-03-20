"use client"

import { Introduction } from "./introduction"
import { HomePhoto } from "./home-photo"

export function Home() {
    return (
        <div id="home" className="w-full h-max bg-background  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
            <div className=" md:flex container py-6 space-y-4 md:space-x-20 justify-center items-center h-full md:justify-between lg:px-20">
                <Introduction />
                <HomePhoto />
            </div>
        </div>
    )
}
