"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import DARKDEMOPIC from "@/public/images/phone-dark-portrait.png";
import LIGHTDEMOPIC from "@/public/images/phone-light-portrait.png";
import DARKDEMOPICMS from "@/public/images/phone-dark-ms-portrait.png";
import LIGHTDEMOPICMS from "@/public/images/phone-light-ms-portrait.png";

export function AppScreenshotCardScroll({ lang = "en", className = "" }) {
  let ref = useRef(null);
  let [style, setStyle] = useState({
    transform: "rotateX(50deg)",
  });

  let onScroll = useCallback((e) => {
    // I honestly don't know how this works - Fareez
    // As long as it works on mobile screen though
    const scrollY = -window.scrollY;
    const windowHeight = window.innerHeight;
    const elementBottom = ref.current.getBoundingClientRect().bottom;
    const triggerPoint = windowHeight - windowHeight * 0.9; // 20% of the window height from the bottom

    if (elementBottom > triggerPoint) {
      const value = Math.abs(scrollY / windowHeight) * 90 - 30;
      const rotate = Math.abs(Math.min(Math.max(value, -40), 0)); // Adjust the rotation value as needed

      setStyle({
        transform: `rotateX(${rotate}deg) `,
      });
    }
  }, []);

  useEffect(() => {
    let { current } = ref;
    if (!current) return;
    window.addEventListener("scroll", onScroll);
    return () => {
      if (!current) return;
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <div
      className={`z-10 mb-8 scale-100 transition-all duration-200 ease-out hover:z-50 xl:mb-0 xl:hover:scale-[1.15] ${className}`}
      ref={ref}
      style={{ perspective: "600px" }}
    >
      <div style={style} className="transition-all duration-200 ease-out">
        <Image
          src={lang != "en" ? LIGHTDEMOPICMS : LIGHTDEMOPIC}
          alt="App screenshot"
          width={440}
          sizes="(min-width: 1536px) 380px, (min-width: 1280px) 360px, 330px"
          className="block w-[330px] xl:w-[360px] 2xl:w-[380px] drop-shadow-2xl dark:hidden"
        />
        <Image
          src={lang != "en" ? DARKDEMOPICMS : DARKDEMOPIC}
          alt="App screenshot"
          width={440}
          sizes="(min-width: 1536px) 380px, (min-width: 1280px) 360px, 330px"
          className="hidden w-[330px] xl:w-[360px] 2xl:w-[380px] drop-shadow-2xl dark:block"
        />
      </div>
    </div>
  );
}
