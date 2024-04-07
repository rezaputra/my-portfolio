"use client"

import { FaPhone } from "react-icons/fa"
import { IoLocationOutline } from "react-icons/io5"
import { MdOutlineEmail } from "react-icons/md"

import { useInView } from "framer-motion"
import { useRef } from "react"

import { motion } from "framer-motion"

export function ContactInfo() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
            className=" w-full space-y-4"
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView && { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
        >
            <div className=" text-center md:text-left space-y-2 w-full">
                <span className=" text-lg lg:text-xl xl:text-2xl">Contact Info</span>
                <p className=" hidden md:block font-sans text-sm lg:text-base">
                    Welcome! Here&apos;s how to reach me. Whether you&apos;re browsing or want to collaborate, just drop
                    a line and let&apos;s explore ideas together!
                </p>
            </div>
            <div className=" items-center space-y-4  max-w-sm text-sm lg:text-base">
                <div className=" flex space-x-4 items-center">
                    <div className=" border rounded-full border-muted-foreground p-1.5 lg:p-2 ">
                        <MdOutlineEmail className=" size-4 lg:size-5 text-muted-foreground" />
                    </div>
                    <div>
                        <span>Email</span>
                        <p className=" font-sans text-muted-foreground text-ellipsis truncate">
                            rezaputramardiansyah@gmail.com
                        </p>
                    </div>
                </div>

                <div className=" flex space-x-4 items-center">
                    <div className=" border rounded-full border-muted-foreground p-1.5 lg:p-2 ">
                        <FaPhone className=" size-4 lg:size-5 text-muted-foreground" />
                    </div>
                    <div>
                        <span>Phone</span>
                        <p className=" font-sans text-muted-foreground">+62-82235-3557</p>
                    </div>
                </div>

                <div className=" flex space-x-4 items-center">
                    <div className=" border rounded-full border-muted-foreground p-1.5 lg:p-2 ">
                        <IoLocationOutline className=" size-4 lg:size-5 text-muted-foreground" />
                    </div>
                    <div>
                        <span>Address</span>
                        <p className=" font-sans text-muted-foreground ">
                            Jl. Waringinsari IV, Ngropoh, Condongcatur, Yogyakarta, Indonesia 55281
                        </p>
                    </div>
                </div>
            </div>

            {/* <div>
                <p className=" font-sans">Visit my social profile and get connected</p>
                <div></div>
            </div> */}
        </motion.div>
    )
}
