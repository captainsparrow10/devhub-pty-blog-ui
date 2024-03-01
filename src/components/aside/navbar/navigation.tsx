"use client";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import {
  ProfileIcon,
  ReturnIcon,
  LogOutIcon,
  HomeIcon,
  PostIcon,
  NotificationIcon,
  ArchiveIcon,
} from "@icons";
import { usePreviewUrl } from "@/lib/store/previewUrl";

type Props = {
  open: boolean;
  pathname: string;
};

export default function Navigation({ open, pathname }: Props) {
  const url = usePreviewUrl((state) => state.previewUrl);
  const configIcons = [
    {
      icon: ProfileIcon,
      title: "profile",
      route: "/config",
    },
    {
      icon: ReturnIcon,
      title: "back",
      route: url,
    },
    {
      icon: LogOutIcon,
      title: "log out",
      route: "/login",
    },
  ];

  const navigationIcons = [
    {
      icon: HomeIcon,
      title: "Home",
      route: "/home",
    },
    {
      icon: PostIcon,
      title: "My Posts",
      route: "/posts",
    },
    {
      icon: NotificationIcon,
      title: "Notifications",
      route: "/notifications",
    },
    {
      icon: ArchiveIcon,
      title: "Archive",
      route: "/archives",
    },
  ];
  return (
    <div title="navbar-option" className="flex h-full w-full items-center">
      <div
        title="navbar-profile"
        className="flex h-fit w-full flex-col space-y-6"
      >
        {(pathname.match("/config") ? configIcons : navigationIcons).map(
          (item, index) => (
            <Link key={index.toString()} href={item.route}>
              <div
                className={clsx(
                  "group  relative cursor-pointer items-center justify-between rounded-xl py-3 transition-all",
                  pathname.match(item.route) ? "bg-active" : "hover:bg-hover",
                  open ? "flex px-6" : "hidden px-3 md:flex",
                )}
              >
                <div className="flex items-center space-x-4">
                  <item.icon
                    className={clsx(
                      pathname == item.route
                        ? "icon-active"
                        : "group-hover:fill-header group-hover:stroke-header",
                    )}
                  />
                  <h5
                    className={clsx(
                      "shrink-0  group-hover:text-header",
                      pathname !== item.route && "font-light text-body",
                      !open && "hidden",
                    )}
                  >
                    {item.title}
                  </h5>
                </div>
                {item.title == "Notifications" && (
                  <h6
                    className={clsx(
                      "rounded-full bg-changes px-2",
                      open ? "flex" : "absolute left-6 top-2",
                    )}
                  >
                    5
                  </h6>
                )}
              </div>
            </Link>
          ),
        )}
      </div>
    </div>
  );
}
