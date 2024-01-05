"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import React from "react";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/20/solid";

export const ThemeSwitcher = ({ className = "" }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      title="Toggle theme"
      data-tooltip-id="my-tooltip"
      data-tooltip-content={`Toggle theme. Current: ${theme}`}
      className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200 text-zinc-900 dark:text-slate-200 text-2xl font-bold ${className}`}
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
        } else if (theme === "dark") {
          setTheme("system");
        } else {
          setTheme("light");
        }
      }}
    >
      {theme === "light" ? (
        <MoonIcon className="h-6 w-6 text-black" />
      ) : theme === "dark" ? (
        <SunIcon className="h-6 w-6 text-white" />
      ) : (
        <ComputerDesktopIcon
          className={`h-6 w-6 ${
            resolvedTheme === "light" ? "text-black" : "text-white"
          }`}
        />
      )}
    </button>
  );
};
