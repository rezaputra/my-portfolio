"use client"

import { IIcon } from "./home-introduction"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface IconTooltipProps {
    className?: string
    icons: IIcon[]
}

export function IconTooltip({ icons, className }: IconTooltipProps) {
    return (
        <TooltipProvider>
            {icons.map((icon, idx) => (
                <Tooltip key={idx} delayDuration={0}>
                    <TooltipTrigger>
                        <icon.icon className={className} />
                    </TooltipTrigger>
                    <TooltipContent>
                        <span>{icon.tooltip}</span>
                    </TooltipContent>
                </Tooltip>
            ))}
        </TooltipProvider>
    )
}
