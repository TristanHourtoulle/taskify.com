import { currentUser } from "@/auth/current-user";
import { LoggedInButton } from "@/features/auth/LoggedInButton";
import { HeadSection } from "@/features/layout/HeadSection";
import type { PageParams } from "@/types/next";
import Image from "next/image";

export default async function Page(props: PageParams<{}>) {
  const user = await currentUser();

  const formatUserName = (name: string) => {
    const [firstName, lastName] = name.split(" ");
    const lastNameInitial = lastName.charAt(0);
    return `${firstName} ${lastNameInitial}.`;
  };

  if (user) {
    console.log("User info", user);
  }

  return (
    <div className="px-[3%] py-[2%] w-full">
      {user ? (
        <div>
          <HeadSection title="" />
          <div className="flex items-center gap-5">
            <Image
              src="/hi.svg"
              alt="signe de la main"
              width={75}
              height={75}
            />
            <div className="flex flex-col items-start">
              <p className="text-white text-6xl font-bold">
                Hi{" "}
                <span className="color-text-primary">
                  {formatUserName(user.name || "")}
                </span>
                ,
              </p>
              <p className="text-white text-xl opacity-75">
                Let&apos;s take a look at your dashboard
              </p>
            </div>
          </div>
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
