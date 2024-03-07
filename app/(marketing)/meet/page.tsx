"use client"

import { useSession } from "next-auth/react"

function MeetPage() {
    const { data } = useSession()

    return (
        <div className=" space-x-4">
            <div>This is public meet route</div>
        </div>
    )
}

export default MeetPage
