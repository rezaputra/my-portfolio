import { auth } from "auth"

async function MarketingPage() {
    const session = await auth()

    return (
        <div>
            {session && (
                <div>
                    <p>{session.user?.name}</p>
                </div>
            )}
        </div>
    )
}

export default MarketingPage
