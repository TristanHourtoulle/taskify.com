"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-8xl font-bold text-white">Stop Waste Time</p>
        <p className="text-8xl font-bold text-white">
          With <span className="color-text-primary">Taskify</span>
        </p>
        <Button
          size={"lg"}
          color="secondary"
          onClick={() => {
            window.location.href = "/client";
          }}
          className="mt-[3%] button-primary"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
