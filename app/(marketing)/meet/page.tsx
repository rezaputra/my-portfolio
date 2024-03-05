"use client"

import { useSession } from "next-auth/react"

function MeetPage() {
    const { data: session } = useSession()

    if (!session || !session.user) return <div className=" text-red-600">You need to sign In to access client page</div>

    return (
        <div className=" space-x-4">
            <div>This is client component. This is musth be protected</div>
            <div>{session?.user.name}</div>
        </div>
    )
}

export default MeetPage
