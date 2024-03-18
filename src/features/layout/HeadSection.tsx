import { Bell } from "lucide-react";
import { LoggedInButton } from "../auth/LoggedInButton";

export type HeadSectionProps = {
  title: string;
};

export const HeadSection = (props: HeadSectionProps) => {
  return (
    <div className="w-full flex items-center justify-between">
      <h1 className="flex-1 text-6xl font-bold text-white">{props.title}</h1>
      <div className="flex items-center gap-10">
        <Bell
          size="25"
          color="white"
          className="navbar opacity-50 cursor-pointer notif-icon"
        />
        <LoggedInButton />
      </div>
    </div>
  );
};
