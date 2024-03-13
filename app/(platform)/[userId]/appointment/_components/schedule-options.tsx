import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { SlOptions } from "react-icons/sl"

import { Appointment } from "@prisma/client"
import { ScheduleView } from "./schedule-view"
import { ScheduleEdit } from "./schadule-edit"
import { ScheduleCancel } from "./schedule-cancel"

export function ScheduleOptions({ appointment }: { appointment: Appointment }) {
    return (
        <Popover>
            <PopoverTrigger>
                <SlOptions className=" w-4 h-4" />
            </PopoverTrigger>
            <PopoverContent className=" p-2 max-w-28">
                <Dialog>
                    <DialogTrigger className=" justify-start w-full">
                        <Button size="sm" variant="ghost" className=" justify-start w-full">
                            View
                        </Button>
                    </DialogTrigger>
                    <DialogContent className=" w-max p-10">
                        <DialogHeader>
                            <DialogTitle>Meeting</DialogTitle>
                            <DialogDescription>
                                Created at {new Date(appointment.createdAt).toDateString()}
                            </DialogDescription>
                        </DialogHeader>
                        <ScheduleView appointment={appointment} />
                        <DialogFooter className=" justify-end mt-4">
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">
                                    Close
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <Dialog>
                    <DialogTrigger disabled={appointment.status !== "WAITING"} className=" justify-start w-full">
                        <Button
                            size="sm"
                            disabled={appointment.status !== "WAITING"}
                            variant="ghost"
                            className=" justify-start w-full"
                        >
                            Edit
                        </Button>
                    </DialogTrigger>
                    <DialogContent className=" w-max p-10">
                        <DialogHeader>
                            <DialogTitle>Edit</DialogTitle>
                            <DialogDescription>Edit your current information</DialogDescription>
                        </DialogHeader>
                        <ScheduleEdit appointment={appointment} />
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger disabled={appointment.status !== "WAITING"} className=" justify-start w-full">
                        <Button
                            size="sm"
                            disabled={appointment.status !== "WAITING"}
                            variant="ghost"
                            className=" justify-start w-full"
                        >
                            Cancel
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Cancel</DialogTitle>
                            <DialogDescription>Cancel your appointment ?</DialogDescription>
                        </DialogHeader>
                        <ScheduleCancel id={appointment.id} />
                    </DialogContent>
                </Dialog>
            </PopoverContent>
        </Popover>
    )
}
