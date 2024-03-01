import React from "react";
import { NewPostIcon, SearchIcon } from "@icons";
import Link from "next/link";

export default function SearchPost() {
  return (
    <div
      title="search"
      className="flex h-fit w-full items-center justify-between space-x-4 rounded-xl bg-button px-4 py-3"
    >
      <div className="flex w-full items-center space-x-3">
        <SearchIcon className="h-4 w-4" />
        <input
          className="w-full truncate whitespace-normal bg-transparent text-[14px] font-light leading-tight text-body focus:text-header"
          placeholder="Search or create a post"
        />
      </div>
      <Link href="/newpost" className="flex shrink-0">
        <div className="group flex shrink-0 cursor-pointer items-center space-x-2 rounded-xl bg-hover px-3 py-1 hover:bg-active">
          <NewPostIcon className="group-hover:fill-header group-hover:stroke-header h-4 w-4" />
          <p className="group-hover:text-white">New Post</p>
        </div>
      </Link>
    </div>
  );
}
