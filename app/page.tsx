import { LoginButton } from "@/components/form/login-button"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
    return (
        <LoginButton mode="modal" asChild={true}>
            <Button>Login</Button>
        </LoginButton>
    )
}
