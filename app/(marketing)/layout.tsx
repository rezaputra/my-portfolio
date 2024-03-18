import { SessionProvider } from "next-auth/react"
import MainNav from "./_components/main-nav"

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
