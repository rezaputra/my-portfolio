import { Separator } from "@/components/ui/separator"
import { FormSetting } from "./_component/form-setting"
import { currentUser } from "@/lib/auth"
import { db } from "@/lib/db"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import FormDelete from "./_component/form-delete"

async function SettingPage({ params }: { params: { userId: string } }) {
    const user = await currentUser()

    if (!user || params.userId !== user.id) return notFound()

    const dbUser = await db.user.findUnique({
        where: { id: params.userId },
        include: {
            accounts: {
                select: {
                    id: true,
                    type: true,
                    provider: true,
                },
            },
        },
    })

    if (!dbUser) return notFound()

    return (
        <div className="space-y-8 p-8 w-full h-full">
            <div>
                <h2 className="scroll-m-20 pb-1 text-3xl font-semibold first:mt-0">Setting</h2>
                <p className="text-sm text-muted-foreground">Manage your account.</p>
            </div>

            <FormSetting user={dbUser} />

            <FormDelete userId={dbUser.id} />
        </div>
    )
}

export default SettingPage
