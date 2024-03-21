"use client"

import { SectionTitle } from "../section-title"

export function Skill() {
    return (
        <div id="skill" className=" w-full h-max my-8">
            <div className="container space-y-8">
                <SectionTitle>Skills</SectionTitle>
                <div className="flex items-center justify-center">
                    {/* Paragraph */}
                    <div className=" max-w-md text-wrap space-y-4">
                        <h4 className=" line-clamp-2 ">
                            All the skills that I have in that field of work are mentioned.
                        </h4>
                        <p>
                            I&apos;m a Full Stack Developer with 2 more years of experience, skilled in both web
                            development and data science. I bring a unique blend of technical expertise to the table,
                            adept at building robust web applications and deriving insights from data. Let&apos;s create
                            impactful solutions together!
                        </p>
                    </div>
                    <div>Skill</div>
                </div>
            </div>
        </div>
    )
}
