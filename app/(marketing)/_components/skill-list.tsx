"use client"

import { Progress } from "@/components/ui/progress"

interface ISkillItem {
    name: string
    rating: number
}

interface SkillListProps {
    skills: ISkillItem[]
}

export function SkillList({ skills }: SkillListProps) {
    return (
        <div className=" space-y-4 lg:space-y-0">
            <h4 className=" lg:hidden text-muted-foreground text-sm md:text-lg text-center italic">
                &ldquo;All the skills that I have in that field of work are mentioned.&ldquo;
            </h4>

            <div className=" space-y-4">
                {skills.map((skill, idx) => (
                    <div key={idx} className="space-y-1">
                        <div className=" flex justify-between text-xs md:text-sm lg:text-sm xl:text-base text-muted-foreground">
                            <span className=" ">{skill.name}</span>
                            <span>{skill.rating}%</span>
                        </div>
                        <Progress value={skill.rating} className="w-full h-1" />
                    </div>
                ))}
            </div>
        </div>
    )
}
