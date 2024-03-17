import { currentUser } from "@/auth/current-user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SignInButton } from "../layout/SignInButton";
import { LoggedInDropdown } from "./LoggedInDropdown";

export const LoggedInButton = async () => {
  const user = await currentUser();

  if (!user) {
    return <SignInButton />;
  }

  return (
    <LoggedInDropdown>
      <Button variant="outline" size="icon">
        <Avatar className="size-12">
          <AvatarFallback>{user.name?.[0]}</AvatarFallback>
          {user.image ? (
            <AvatarImage src={user.image} alt={`Avatar for ${user.name}`} />
          ) : null}
        </Avatar>
      </Button>
    </LoggedInDropdown>
  );
};
