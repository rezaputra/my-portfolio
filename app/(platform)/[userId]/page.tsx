import { PlatForm } from "./_components/platform"
import { Setting } from "./_components/setting"
import { Profile } from "./_components/profile"
import { Appointment } from "./_components/appointment"

import { getAccountByUserId } from "@/data/account"
import { getUserById } from "@/data/user"
import { currentUser } from "@/lib/auth"

import { notFound } from "next/navigation"
import { Toaster } from "sonner"

interface UserIdPageProps {
    params: {
        userId: string
    }
    searchParams: { tab: string }
}

async function UserIdPage({ params, searchParams }: UserIdPageProps) {
    const userId = params.userId
    const tab = searchParams.tab

    const user = await currentUser()
    if (!user) return null

    const account = await getAccountByUserId(userId)
    const userData = await getUserById(user.id as string)

    if (!userData) return notFound()

    return (
        <PlatForm userId={userData.id}>
            <Toaster />
            <Profile user={userData} provider={account?.provider} />
            <Appointment />
            <Setting user={userData} isOAuth={!!account} />
        </PlatForm>
    )
}

export default UserIdPage
