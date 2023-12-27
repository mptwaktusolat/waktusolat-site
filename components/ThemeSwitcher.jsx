"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

export const ThemeSwitcher = ({ className = "" }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200 text-zinc-900 dark:text-slate-200 text-2xl font-bold ${className}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <MoonIcon className="h-6 w-6 text-black" /> // Increase the size of MoonIcon
      ) : (
        <SunIcon className="h-6 w-6 text-white" /> // Increase the size of SunIcon
      )}
    </button>
  );
};
