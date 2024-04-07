"use client"

import { SectionContent, SectionTitle, SectionWrapper } from "@/components/landingpage/section-wrapper"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { portfolioList } from "./portfolio-list"
import { FaPlus } from "react-icons/fa"
import { TbArrowDownRight } from "react-icons/tb"
import { cn } from "@/lib/utils"
import { ShowMoreByHeight } from "@/components/landingpage/showmore-by-height"

import { animate, motion, useInView } from "framer-motion"
import { useRef } from "react"

export function PortfolioSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <SectionWrapper id="portfolio">
            <SectionTitle title="PORTFOLIO" />

            <SectionContent>
                <ShowMoreByHeight className=" h-[550px]">
                    <motion.div
                        ref={ref}
                        className=" flex justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView && { opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, ease: "backInOut", duration: 0.5 }}
                    >
                        <BentoGrid className="mx-auto ">
                            {portfolioList.map((item, idx) => (
                                <BentoGridItem
                                    key={idx}
                                    title={item.title}
                                    description={item.description}
                                    header={item.header}
                                    icon={item.icon}
                                    className={cn(
                                        " cursor-pointer",
                                        idx !== 0 && idx % 3 === 0 ? "xl:col-span-2" : "",
                                        "max-w-sm xl:max-w-full"
                                    )}
                                />
                            ))}
                            <BentoGridItem
                                title={"New Project"}
                                description={"Coming Soon!, Excited to wrap up my latest endeavor"}
                                header={
                                    <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-sm bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center">
                                        <FaPlus className=" size-6" />
                                    </div>
                                }
                                icon={<TbArrowDownRight className=" size-4" />}
                                className={cn(" cursor-pointer")}
                            />
                        </BentoGrid>
                    </motion.div>
                </ShowMoreByHeight>
            </SectionContent>
        </SectionWrapper>
    )
}
