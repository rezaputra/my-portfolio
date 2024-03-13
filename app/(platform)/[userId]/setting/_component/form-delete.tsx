"use client"

import { deleteAccount } from "@/actions/delete-account"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import { toast } from "sonner"

function FormDelete({ userId }: { userId: string }) {
    const [isPending, startTransition] = useTransition()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const { update } = useSession()
    const router = useRouter()

    const [error, setError] = useState<string | undefined>(undefined)
    const [success, setSuccess] = useState<string | undefined>(undefined)

    const onClick = () => {
        startTransition(() => {
            deleteAccount(userId)
                .then((res) => {
                    if (res?.error) {
                        setIsOpen(false)
                        toast.error(res.error)
                    }
                    if (res?.success) {
                        update()
                        setIsOpen(false)
                        toast.error(res.success)
                        signOut({ callbackUrl: "/auth/login" })
                    }
                })
                .catch((res) => {
                    setIsOpen(false)
                    toast.error("Something went wrong!")
                })
        })
    }

    return (
        <div className="flex flex-row items-center space-x-8 ">
            <p className=" text-sm text-muted-foreground">Delete account</p>
            <Button
                onClick={() => setIsOpen(true)}
                variant="ghost"
                className=" text-red-500 hover:bg-red-50 hover:text-red-600"
            >
                Delete account
            </Button>
            <Dialog
                open={isOpen}
                onOpenChange={() => {
                    setIsOpen(false)
                }}
            >
                <DialogContent className=" max-w-md">
                    <div>
                        <p className=" text-sm">Delete your account ?</p>
                        <div className=" flex justify-end space-x-2">
                            <Button size="sm" disabled={isPending} onClick={onClick}>
                                Yes
                            </Button>
                            <Button size="sm" onClick={() => setIsOpen(false)} variant="outline">
                                Cancel
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default FormDelete
