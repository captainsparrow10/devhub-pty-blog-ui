"use client";
import React, { useState } from "react";
import { MenuIcon } from "@icons";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Navigation from "./navigation";
import NavBarProfile from "./profile";

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const handleViewBar = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="sticky h-fit w-full p-3 pt-12 sm:px-12 md:hidden">
        <div
          className="relative  flex cursor-pointer items-center justify-between rounded-xl px-3 py-3"
          onClick={handleViewBar}
        >
          <MenuIcon />
        </div>
      </div>
      <div
        className="absolute z-50 h-full w-fit shrink-0 md:relative"
        title="aside"
      >
        <div
          className={clsx(
            "h-full flex-col overflow-hidden bg-aside transition-all",
            open
              ? "z-50 flex w-[350px] duration-300 ease-in"
              : "w-0 duration-300 ease-out md:flex md:w-24",
          )}
          title="aside-content"
        >
          <div
            title="navbar"
            className="flex h-full w-full flex-col px-6 py-12 md:py-24"
          >
            <div
              title="navbar-title"
              className="flex h-full max-h-12 items-center justify-between"
            >
              <h4
                title="logo"
                className={clsx(
                  "shrink-0 items-center",
                  open ? "flex" : "hidden",
                )}
              >
                DevHub PTY
              </h4>

              <div
                title="menu"
                className="relative  flex cursor-pointer items-center justify-between rounded-xl px-3 py-3"
                onClick={handleViewBar}
              >
                <MenuIcon />
              </div>
            </div>
            <Navigation open={open} pathname={pathname} />
          </div>
          <NavBarProfile open={open} pathname={pathname} />
        </div>
      </div>
    </>
  );
}
