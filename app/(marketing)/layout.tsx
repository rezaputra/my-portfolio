import MainNav from "@/components/main-nav"
import { SessionProvider } from "next-auth/react"

function MarketingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SessionProvider>
                <MainNav />
                {children}
            </SessionProvider>
        </>
    )
}

export default MarketingLayout
