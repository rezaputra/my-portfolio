// "8se client"

import { cn } from "@/lib/utils"

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-7xl ", className)}>
            {children}
        </div>
    )
}

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string
    title?: string | React.ReactNode
    description?: string | React.ReactNode
    header?: React.ReactNode
    icon?: React.ReactNode
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-sm group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-background/70  bg-inherit border dark:border-transparent  justify-between flex flex-col space-y-4 ",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200 font-sans space-y-1 lg:space-y-2">
                <div className=" text-sm lg:text-base">
                    {icon}
                    {title}
                </div>
                <div className="font-sans font-light lg:font-normal text-neutral-600 text-xs dark:text-neutral-300 line-clamp-2">
                    {description}
                </div>
            </div>
        </div>
    )
}
