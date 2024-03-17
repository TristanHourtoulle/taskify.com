"use client";

import {
  CalendarDays,
  FolderOpenDot,
  Home,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function getSelectedPage(currentUrl: string) {
  if (currentUrl.includes("/projects")) return "projects";
  if (currentUrl.includes("/teams")) return "teams";
  if (currentUrl.includes("/calendar")) return "calendar";
  if (currentUrl.includes("/settings")) return "settings";
  return "home";
}

export const Header = () => {
  const currentUrl = usePathname();
  const [selectedPage, setSelectedPage] = useState(getSelectedPage(currentUrl));

  useEffect(() => {
    setSelectedPage(getSelectedPage(currentUrl));
  }, [currentUrl]);

  return (
    <div className="flex flex-col items-center justify-between gap-4 px-[2%] py-[2%] w-[19%] h-full">
      <h1 className="font-bold text-3xl text-white">Taskify</h1>

      {/* Navbar */}
      <div className="flex flex-col items-start gap-8">
        <Link
          href="/client"
          className={
            selectedPage === "home" ? "navbar opacity-100" : "navbar opacity-50"
          }
        >
          <div className="flex items-center gap-3">
            <Home color="white" />
            <p className="text-white text-lg">Home</p>
          </div>
        </Link>

        <Link
          href="/client/projects"
          className={
            selectedPage === "projects"
              ? "navbar opacity-100"
              : "navbar opacity-50"
          }
        >
          <div className="flex items-center gap-3">
            <FolderOpenDot color="white" />
            <p className="text-white text-lg">Projects</p>
          </div>
        </Link>

        <Link
          href="/client/teams"
          className={
            selectedPage === "teams"
              ? "navbar opacity-100"
              : "navbar opacity-50"
          }
        >
          <div className="flex items-center gap-3">
            <Users color="white" />
            <p className="text-white text-lg">Teams</p>
          </div>
        </Link>

        <Link
          href="/client/calendar"
          className={
            selectedPage === "calendar"
              ? "navbar opacity-100"
              : "navbar opacity-50"
          }
        >
          <div className="flex items-center gap-3">
            <CalendarDays color="white" />
            <p className="text-white text-lg">Calendar</p>
          </div>
        </Link>

        <Link
          href="/client/settings"
          className={
            selectedPage === "settings"
              ? "navbar opacity-100"
              : "navbar opacity-50"
          }
        >
          <div className="flex items-center gap-3">
            <Settings color="white" />
            <p className="text-white text-lg">Settings</p>
          </div>
        </Link>
      </div>

      {/* Credits */}
      <p className="text-white text-xs opacity-25">
        Design & Built by TristanHourtoulle
      </p>
    </div>
  );
};
