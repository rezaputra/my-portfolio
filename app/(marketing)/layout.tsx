import { SessionProvider } from "next-auth/react"
import { Navbar } from "./_components/navbar/navbar"
import { Footer } from "./_components/footer"
import { Toaster } from "@/components/ui/sonner"

function MarketingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SessionProvider>
                <Toaster />
                <Navbar />
                {children}
                <Footer />
            </SessionProvider>
        </>
    )
}

export default MarketingLayout
