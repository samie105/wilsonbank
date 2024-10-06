"use client";

import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function Preferences() {
  const { theme, setTheme } = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const handleDarkModeChange = (checked: boolean) => {
    setIsDarkMode(checked);
    setTheme(checked ? "dark" : "light");
  };
  return (
    <Card className=" rounded-sm border-none bg-neutral-50 dark:bg-neutral-800 p-0">
      <div className="p-4">
        <div className="text-base text-neutral-700 dark:text-neutral-400 font-semibold py-1">
          Preference
        </div>
        <div className="mt- text-sm text-neutral-500 dark:text-neutral-300 font-medium">
          Manage your preferences
        </div>
      </div>
      <CardContent className="p-4 dark:bg-neutral-800">
        <div className="notifications bg-neutral-100 dark:bg-neutral-700/30 flex py-4 px-4 rounded-md mt-2 justify-between items-center">
          <div className="flex items-center gap-x-2 dark:text-neutral-300 text-neutral-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 text-neutral-500 dark:text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-sm font-medium">Notifications</p>
          </div>
          <Switch className="h-4 w-7" />
        </div>

        <div className="darkmode bg-neutral-100 dark:bg-neutral-700/30 flex py-4 px-4 rounded-md mt-2 justify-between items-center">
          <div className="flex items-center gap-x-2 text-neutral-600 dark:text-neutral-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 text-neutral-500 dark:text-blue-500 animate-spin"
            >
              <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
            </svg>
            <p className="text-sm font-medium">Dark mode</p>
          </div>
          <Switch
            checked={isDarkMode}
            onCheckedChange={handleDarkModeChange}
            className="h-4 w-7"
            aria-label="Toggle dark mode"
          />{" "}
        </div>
      </CardContent>
    </Card>
  );
}
