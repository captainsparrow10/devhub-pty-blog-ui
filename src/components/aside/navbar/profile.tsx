"use client";
import Link from "next/link";
import React from "react";
import profileImage from "/public/profile.jpg";
import Image from "next/image";
import { ConfigIcon } from "@/components/icons";
import { usePreviewUrl } from "@/lib/store/previewUrl";

type Props = {
  open: boolean;
  pathname: string;
};

export default function NavBarProfile({ open, pathname }: Props) {
  const saveUrl = usePreviewUrl((state) => state.saveUrl);
  return (
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
            <div className="flex shrink-0 flex-col">
              <h5>John Doe</h5>
              <p className="caption">your&apos;e the hero in your own story</p>
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
  );
}
