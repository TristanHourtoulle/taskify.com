import { auth } from "@/auth/auth";
import { SignInButton } from "../layout/SignInButton";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AvatarFallback } from "@/components/ui/avatar";

export const LoggedInButton = async () => {
    const session = await auth();

    if (!session?.user) {
        return <SignInButton />;
    }

    return (
        <Button variant="outline" size="sm">
            <Avatar>
                <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
                {session.user.image ? (
                    <AvatarImage src={session.user.image} alt={`${session.user.name ?? "-"}'s profile picture`} />
                ) : (
                    null
                )}
            </Avatar>
        </Button>
    )
}