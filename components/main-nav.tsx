"use client"

import { UserIcon } from "@/components/user/user-icon"
import { LoginButton } from "@/components/form/login-button"
import { useCurrentUser } from "@/hooks/use-current-user"
import { Button } from "@/components/ui/button"

import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

import Link from "next/link"

function MainNav() {
    const user = useCurrentUser()

    return (
        <nav className=" w-full h-16 shadow-sm ">
            <div className=" container flex justify-between items-center h-full">
                <div>
                    <Button variant="secondary">
                        <Link href={"/meet"}>Meet</Link>
                    </Button>
                </div>
                <div>
                    {user && <UserIcon />}
                    {!user && (
                        <LoginButton asChild>
                            <Button variant="outline">Sign In</Button>
                        </LoginButton>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default MainNav
