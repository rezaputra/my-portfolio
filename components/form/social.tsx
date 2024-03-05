"use client"

import { IoLogoGoogle } from "react-icons/io"
import { FaInstagram } from "react-icons/fa"

import { Button } from "../ui/button"

export function Social() {
    return (
        <div className=" flex space-x-2">
            <Button size="default" variant="outline" className="w-full gap-2 ">
                <IoLogoGoogle className=" w-5 h-5" /> Google
            </Button>
            <Button size="default" variant="outline" className=" w-full gap-2">
                <FaInstagram className=" w-5 h-5" /> Instagram
            </Button>
        </div>
    )
}
