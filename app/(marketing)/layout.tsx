import { SessionProvider } from "next-auth/react"
import { Navbar } from "./_components/navbar/navbar"

function MarketingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SessionProvider>
                <Navbar />
                {children}
            </SessionProvider>
        </>
    )
}

export default MarketingLayout
