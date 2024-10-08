"use client";
import React from "react";
import { logout } from "@/server/dashboard/navActions";
import { useRouter } from "next/navigation";

export default function SignOut() {
  const Logout = () => {
    logout();
  };
  return (
    <div
      onClick={Logout}
      className="sign-out hidden md:block rounded-md  transition-all bg-red-50 dark:hover:bg-red-500/10 md:bg-transparent p-3 /ml-4 cursor-pointer hover:bg-red-50/50"
    >
      <div className="flex item-center gap-x-2 text-sm text-red-400 font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5 text-red-400"
        >
          <path
            fillRule="evenodd"
            d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M19 10a.75.75 0 0 0-.75-.75H8.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 19 10Z"
            clipRule="evenodd"
          />
        </svg>{" "}
        <p className="hidden lg:block">Sign out</p>
      </div>
    </div>
  );
}
