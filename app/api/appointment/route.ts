import { currentUser } from "@/lib/auth"
import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    try {
        const user = await currentUser()

        if (!user) return new NextResponse("Unauthorized", { status: 401 })

        const appointments = await db.appointment.findMany({
            where: { userId: user.id },
            orderBy: { createdAt: "desc" },
        })

        return NextResponse.json(appointments)
    } catch (error) {
        return new NextResponse("Internal Error", { status: 500 })
    }
}
