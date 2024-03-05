import MainNav from "@/components/main-nav"

function MarketingLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <MainNav />
            {children}
        </div>
    )
}

export default MarketingLayout
