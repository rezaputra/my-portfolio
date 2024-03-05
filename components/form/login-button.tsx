"use client"

import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog"
import { FormLogin } from "./form-login"

interface LoginButtonProps {
    children: React.ReactNode
    mode?: "modal" | "redirect"
    asChild?: boolean
}

export function LoginButton({ children, mode = "redirect", asChild }: LoginButtonProps) {
    const router = useRouter()

    const onClick = () => {
        router.push("/auth/login")
    }

    if (mode === "modal") {
        return (
            <Dialog>
                <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
                <DialogContent className=" p-0 w-auto bg-transparent border-none">
                    <FormLogin />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <span onClick={onClick} className=" cursor-pointer">
            {children}
        </span>
    )
}
