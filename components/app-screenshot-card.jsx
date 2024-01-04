"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import DARKDEMOPIC from "@/public/images/phone-dark-portrait.png";
import LIGHTDEMOPIC from "@/public/images/phone-light-portrait.png";
import DARKDEMOPICMS from "@/public/images/phone-dark-ms-portrait.png";
import LIGHTDEMOPICMS from "@/public/images/phone-light-ms-portrait.png";

// Taken from ProfileCard from https://github.com/hta218/leohuynh.dev/blob/main/components/ProfileCard.tsx
export function AppScreenshotCard({ lang = "en", className = "" }) {
  let ref = useRef(null);
  let [style, setStyle] = useState({});

  let onMouseMove = useCallback((e) => {
    if (!ref.current || window.innerWidth < 1280) return;

    let { clientX, clientY } = e;
    let { width, height, x, y } = ref.current.getBoundingClientRect();
    let mouseX = Math.abs(clientX - x);
    let mouseY = Math.abs(clientY - y);
    let rotateMin = -15;
    let rotateMax = 15;
    let rotateRange = rotateMax - rotateMin;

    let rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    };

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    });
  }, []);

  let onMouseLeave = useCallback(() => {
    setStyle({ transform: "rotateX(0deg) rotateY(0deg)" });
  }, []);

  useEffect(() => {
    let { current } = ref;
    if (!current) return;
    current.addEventListener("mousemove", onMouseMove);
    current.addEventListener("mouseleave", onMouseLeave);
    return () => {
      if (!current) return;
      current.removeEventListener("mousemove", onMouseMove);
      current.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [onMouseLeave, onMouseMove]);

  return (
    <div
      className={`z-10 mb-8 scale-100 transition-all duration-200 ease-out hover:z-50 xl:mb-0 xl:hover:scale-[1.15] ${className}`}
      style={{ perspective: "600px" }}
      ref={ref}
    >
      <div style={style} className="transition-all duration-200 ease-out">
        <Image
          src={lang != "en" ? LIGHTDEMOPICMS : LIGHTDEMOPIC}
          alt="App screenshot"
          width={330}
          className="drop-shadow-2xl dark:hidden block"
        />
        <Image
          src={lang != "en" ? DARKDEMOPICMS : DARKDEMOPIC}
          alt="App screenshot"
          width={330}
          className="drop-shadow-2xl hidden dark:block"
        />
      </div>
    </div>
  );
}
