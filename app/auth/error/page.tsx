import FormWrapper from "@/components/form/form-wrapper"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

function ErrorPage() {
    return (
        <FormWrapper title="Oops! Something went wrong" backButtonLabel="Back to login" backButtonHref="/auth/login">
            <div className=" w-full flex items-center justify-center">
                <ExclamationTriangleIcon className=" text-destructive" />
            </div>
        </FormWrapper>
    )
}

export default ErrorPage
