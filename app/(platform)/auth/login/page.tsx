import { FormLogin } from "@/components/form/form-login"
import { Suspense } from "react"

function LoginPage() {
    return (
        <Suspense>
            <div className=" flex items-center justify-center h-screen">
                <FormLogin />
            </div>
        </Suspense>
    )
}

export default LoginPage
