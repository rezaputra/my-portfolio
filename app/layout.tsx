import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SessionProvider } from "next-auth/react"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Welcome!",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <SessionProvider>
                    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                        <main>{children}</main>
                    </ThemeProvider>
                </SessionProvider>
            </body>
        </html>
    )
}
