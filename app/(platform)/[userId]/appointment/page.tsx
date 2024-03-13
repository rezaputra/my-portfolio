import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaCalendarCheck, FaCalendarPlus } from "react-icons/fa"
import { FormCreate } from "./_components/form-create"
import { currentUser } from "@/lib/auth"
import { notFound } from "next/navigation"
import { Schedule } from "./_components/schedule"

async function AppointmentPage({
    params,
    searchParams,
}: {
    params: { userId: string }
    searchParams: { tab: string }
}) {
    const user = await currentUser()

    if (!user || params.userId !== user.id) return notFound()

    const tab = searchParams.tab || "schedule"

    return (
        <Tabs
            defaultValue={tab}
            className=" w-full p-8
        "
        >
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="schedule">
                    <FaCalendarCheck className=" w-4 h-4 md:hidden" />
                    <p className=" hidden md:flex">Schedule</p>
                </TabsTrigger>
                <TabsTrigger value="create">
                    <FaCalendarPlus className=" w-4 h-4 md:hidden" />
                    <p className=" hidden md:flex">Create</p>
                </TabsTrigger>
            </TabsList>

            <TabsContent value="schedule">
                <Schedule userId={user.id} />
            </TabsContent>
            <TabsContent value="create">
                <FormCreate userId={user.id} />
            </TabsContent>
        </Tabs>
    )
}

export default AppointmentPage
