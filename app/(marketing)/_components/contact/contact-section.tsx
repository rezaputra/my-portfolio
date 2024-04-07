"use client"

import { SectionContent, SectionTitle, SectionWrapper } from "@/components/landingpage/section-wrapper"
import { ContactForm } from "./contact-form"
import { ContactInfo } from "./contact-info"

export function ContactSection() {
    return (
        <SectionWrapper id="contact">
            <SectionTitle title="CONTACT" />

            <SectionContent>
                <div className=" space-y-8 md:space-y-0 md:flex justify-center md:space-x-6 lg:space-x-10 xl:space-x-14">
                    {/* Form contact */}
                    <ContactForm />

                    {/* Contact info */}
                    <ContactInfo />
                </div>
            </SectionContent>
        </SectionWrapper>
    )
}
