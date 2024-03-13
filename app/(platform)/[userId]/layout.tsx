import { Separator } from "@/components/ui/separator"
import { SideNav } from "./_components/side-nav"
import { Toaster } from "@/components/ui/sonner"

interface UserIdLayoutProps {
    children: React.ReactNode
}

function UserIdLayout({ children }: UserIdLayoutProps) {
    return (
        <div className="flex ">
            <Toaster />
            <SideNav />

            {children}
        </div>
    )
}

export default UserIdLayout
