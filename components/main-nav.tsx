import { LoginButton } from "./form/login-button"
import { Button } from "./ui/button"

function MainNav() {
    return (
        <div className=" w-full h-16 shadow-sm ">
            <div className=" container flex justify-between items-center h-full">
                <div>Left</div>
                <div>
                    <LoginButton mode="modal" asChild>
                        <Button variant="outline">Sign In</Button>
                    </LoginButton>
                </div>
            </div>
        </div>
    )
}

export default MainNav
