"use client"

import { signOut, useSession } from "next-auth/react"
import { LoginButton } from "./form/login-button"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import Link from "next/link"

function MainNav() {
    const { data } = useSession()

    const logout = () => {
        signOut()
    }

    return (
        <div className=" w-full h-16 shadow-sm ">
            <div className=" container flex justify-between items-center h-full">
                <div>
                    <Button variant="secondary">
                        <Link href={"/meet"}>Meet</Link>
                    </Button>
                </div>
                <div>
                    {data && <Button onClick={logout}>Logout</Button>}
                    {!data && (
                        <LoginButton asChild>
                            <Button variant="outline">Sign In</Button>
                        </LoginButton>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MainNav
