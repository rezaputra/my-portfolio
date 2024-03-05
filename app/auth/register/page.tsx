import { FormRegister } from "@/components/form/form-register"
import { Suspense } from "react"

function RegisterPage() {
    return (
        <Suspense>
            <div className=" w-full h-screen flex items-center justify-center">
                <FormRegister />
            </div>
        </Suspense>
    )
}

export default RegisterPage
