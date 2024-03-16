import { LoggedInButton } from "../auth/LoggedInButton";
import { SignInButton } from "./SignInButton";

export const Header = async () => {
    return(
        <div className="flex items-center gap-4">
            <h1 className="font-bold text-lg flex-1">Taskify</h1>
            <LoggedInButton />
        </div>
    );
}