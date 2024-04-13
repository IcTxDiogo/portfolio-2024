"use client";

import Link from "next/link";
import { Fullscreen } from "lucide-react";

import { ThemeModeToggle } from "@/components/ThemeModeToggle";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function SuspendButtons() {
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      void document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        void document.exitFullscreen();
      }
    }
  }

  return (
    <>
      <Link href={"/"} className={"absolute left-4 top-4 z-50"}>
        <Button size={"icon"}>
          <ChevronLeftIcon />
        </Button>
      </Link>
      <div className={"absolute right-4 top-4 z-50"}>
        <ThemeModeToggle />
      </div>
      <Button
        className={"absolute bottom-4 right-4 z-50"}
        size={"icon"}
        onClick={() => toggleFullScreen()}
      >
        <Fullscreen />
      </Button>
    </>
  );
}
