"use client"

import { IoLogoGoogle } from "react-icons/io"
import { FaInstagram } from "react-icons/fa"

import { Button } from "../ui/button"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

export function Social() {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get("callbackUrl")

    const onClick = (provider: "google" | "instagram") => {
        signIn(provider, { callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT })
    }

    return (
        <div className=" flex space-x-2">
            <Button onClick={() => onClick("google")} size="default" variant="outline" className="w-full gap-2 ">
                <IoLogoGoogle className=" w-5 h-5" /> Google
            </Button>
            <Button onClick={() => onClick("instagram")} size="default" variant="outline" className=" w-full gap-2">
                <FaInstagram className=" w-5 h-5" /> Instagram
            </Button>
        </div>
    )
}
