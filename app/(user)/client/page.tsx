import { currentUser } from "@/auth/current-user";
import { LoggedInButton } from "@/features/auth/LoggedInButton";
import type { PageParams } from "@/types/next";

export default async function Page(props: PageParams<{}>) {
  const user = await currentUser();

  if (user) {
    console.log("User info", user);
  }

  return (
    <div className="px-[3%] py-[2%]">
      {user ? (
        <div className="flex items-center justify-between">
          <p>Bonjour {user.name}</p>
          <LoggedInButton />
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <p className="text-white text-sm">
            Connectez-vous pour accéder à votre espace personnel
          </p>
          <LoggedInButton />
        </div>
      )}
    </div>
  );
}
