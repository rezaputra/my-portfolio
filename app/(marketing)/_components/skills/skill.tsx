"use client"

import { SectionContent, SectionTitle, SectionWrapper } from "@/components/landingpage/section-wrapper"

export function Skill() {
    return (
        <SectionWrapper id="skill">
            <SectionTitle title="SKILLS" />

            <SectionContent>
                <div className="flex">
                    {/* Description */}
                    <div>Description</div>

                    {/* Skill rating*/}
                    <div>
                        <ol>Skill 1</ol>
                        <ol>Skill 2</ol>
                        <ol>Skill 3</ol>
                        <ol>Skill 4</ol>
                        <ol>Skill 5</ol>
                        <ol>Skill 6</ol>
                    </div>
                </div>
            </SectionContent>
        </SectionWrapper>
    )
}
