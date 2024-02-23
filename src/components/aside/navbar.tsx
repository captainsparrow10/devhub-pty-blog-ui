"use client";
import Image from "next/image";
import profileImage from "/public/profile.jpg";
import React, { useState } from "react";
import { MenuIcon, ConfigIcon } from "@icons";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { configIcons, navigationIcons } from "@/lib/const/navigation";
import { usePreviewUrl } from "@/lib/store/previewUrl";

export default function NavBar() {
  const pathname = usePathname();
  const saveUrl = usePreviewUrl((state) => state.saveUrl);
  const url = usePreviewUrl((state) => state.previewUrl);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="sticky h-fit w-full p-3 pt-6 sm:px-12 md:hidden">
        <div
          className="overflow-hidden rounded-xl px-3 py-3 hover:bg-hover active:bg-active"
          onClick={() => setOpen(!open)}
        >
          <MenuIcon />
        </div>
      </div>
      <div className="absolute z-50 h-full w-fit shrink-0 md:relative">
        <div
          className={clsx(
            " h-full flex-col overflow-hidden bg-aside transition-all",
            open
              ? "z-50 flex w-[350px] duration-300 ease-in "
              : "w-0 duration-300 ease-out md:flex md:w-24",
          )}
          title="aside"
        >
          <div
            title="navbar"
            className="flex h-full w-full flex-col px-6 py-6 sm:py-12 lg:py-24"
          >
            <div
              className="flex h-full max-h-12 items-center justify-between"
              title="navbar-title"
            >
              <h4
                className={clsx(
                  "shrink-0 items-center",
                  open ? "flex" : "hidden",
                )}
              >
                DevHub PTY
              </h4>

              <div
                className={clsx(
                  "overflow-hidden rounded-xl px-3 py-3 hover:bg-hover active:bg-active",
                )}
                onClick={() => setOpen(!open)}
              >
                <MenuIcon />
              </div>
            </div>
            <div
              title="navbar-option"
              className="flex h-full w-full items-center"
            >
              <div
                className="flex h-fit w-full flex-col space-y-3"
                title="navbar-profile"
              >
                {pathname.match("/config")
                  ? configIcons.map((item, index) => (
                      <div
                        key={index.toString()}
                        onClick={() => {
                          if (item.title == "back") {
                            router.push(url);
                          }
                        }}
                        className={clsx(
                          "group relative  flex cursor-pointer items-center justify-between rounded-xl px-3 py-3",
                          item.title == "profile"
                            ? "bg-active"
                            : "hover:bg-hover",
                        )}
                      >
                        <div className="flex items-center space-x-4">
                          <item.icon
                            className={
                              item.title == "profile"
                                ? "icon-active"
                                : "group-hover:fill-header group-hover:stroke-header"
                            }
                          />
                          <p
                            className={clsx(
                              "body2 shrink-0 capitalize text-body group-hover:text-header",
                              item.title == "profile" && "text-header",
                              !open && "hidden",
                            )}
                          >
                            {item.title}
                          </p>
                        </div>
                      </div>
                    ))
                  : navigationIcons.map((item, index) => (
                      <React.Fragment key={index.toString()}>
                        <Link href={item.route}>
                          <div
                            className={clsx(
                              "group relative  flex cursor-pointer items-center justify-between rounded-xl px-3 py-3",
                              pathname.match(item.route)
                                ? "bg-active"
                                : "hover:bg-hover",
                            )}
                          >
                            <div className="flex items-center space-x-4">
                              <item.icon
                                className={
                                  pathname == item.route
                                    ? "icon-active"
                                    : "group-hover:fill-header group-hover:stroke-header"
                                }
                              />
                              <p
                                className={clsx(
                                  "body2 shrink-0 text-body group-hover:text-header",
                                  pathname == item.route && "text-header",
                                  !open && "hidden",
                                )}
                              >
                                {item.title}
                              </p>
                            </div>
                            {item.title == "Notifications" && (
                              <h6
                                className={clsx(
                                  "header rounded-full bg-changes px-2",
                                  open ? "flex" : "absolute left-6 top-2",
                                )}
                              >
                                5
                              </h6>
                            )}
                          </div>
                        </Link>
                        {item.title == "Archive" && (
                          <div className="h-[1px] w-full bg-header" />
                        )}
                      </React.Fragment>
                    ))}
              </div>
            </div>
          </div>
          <div
            className="flex h-fit w-full items-center justify-between gap-6 bg-active p-6"
            title="profile"
          >
            <Link href="/profile">
              <div
                title="user"
                className="flex cursor-pointer items-center space-x-3"
              >
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                  <Image src={profileImage} alt="profile" fill />
                </div>
                {open && (
                  <div className="flex shrink-0 flex-col space-y-1">
                    <h5>John Doe</h5>
                    <p className="span">
                      your&apos;e the hero in your own story
                    </p>
                  </div>
                )}
              </div>
            </Link>
            {open && (
              <Link href="/config" onClick={() => saveUrl(pathname)}>
                <div title="config">
                  <ConfigIcon />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
