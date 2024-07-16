"use client";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import AppLogo from "@/components/app-logo";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { SiFastapi } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import { AppScreenshotCard } from "../app-screenshot-card";
import { AppScreenshotCardScroll } from "../app-screenshot-card-scroll";
import { useTranslation } from "react-i18next";
import LanguageChanger from "@/components/LanguageChanger";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";

const Hero = () => {
  const [latestVersion, setLatestVersion] = useState("");

  useEffect(() => {
    fetch("api/check_version")
      .then((response) => response.json())
      .then((data) => setLatestVersion(`v${data.version}`));
  }, []);

  const { t } = useTranslation();
  return (
    <section className="relative">
      <Tooltip id="my-tooltip" place="bottom-end" />
      <ThemeSwitcher className="absolute top-2 right-5" />
      <LanguageChanger className="absolute top-2 right-20" />
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 dark:stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-zinc-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl flex-shrink-0">
          <AppLogo />
          <div className="mt-24 sm:mt-32 lg:mt-16">
            {/* <span className="mr-2 rounded-full bg-yellow-500/10 px-3 py-2 text-sm font-semibold leading-6 text-yellow-600 dark:text-yellow-400 ring-1 ring-inset ring-indigo-500/20">
              In construction
            </span> */}
            <Link href="/changelog" className="inline-flex space-x-6 group">
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-semibold leading-6 text-cyan-600 dark:text-cyan-400 ring-1 ring-inset ring-indigo-500/20">
                {t("whatsNew")}
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-zinc-800 dark:text-slate-200">
                <span>
                  {t("latestVersion")}: {latestVersion}
                </span>
                <ChevronRightIcon
                  className="h-5 w-5 text-zinc-500 dark:text-zinc-400 group-hover:translate-x-2 transition"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
          <h1 className="mt-10 ml-3 text-4xl font-medium tracking-tight text-zinc-800 dark:text-slate-200 sm:text-6xl">
            {t("appName")}
          </h1>
          <p className="my-4 ml-3 text-lg leading-8 text-zinc-800 dark:text-slate-200">
            {t("description")}
          </p>
          <div className="flex">
            <a
              className="hidden sm:block hover:opacity-85"
              href="https://play.google.com/store/apps/details?id=live.iqfareez.waktusolatmalaysia&utm_source=waktusolat-site&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            >
              <Image
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                width={250}
                height={100}
              />
            </a>
            <a
              className="sm:hidden block"
              href="https://play.google.com/store/apps/details?id=live.iqfareez.waktusolatmalaysia&utm_source=waktusolat-site&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            >
              <Image
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                width={200}
                height={80}
              />
            </a>
            <a
              href={"https://api.waktusolat.app"}
              className=" flex-shrink-0 inline-flex items-center justify-center px-1 group"
            >
              <div className="text-slate-800 dark:text-slate-100 m-3.5 flex  justify-center items-center group-hover:opacity-85">
                <span>
                  <SiFastapi
                    size={38}
                    className="group-hover:-rotate-12 transition-all "
                  />
                </span>
                <span className="mx-2 font-medium text-lg sm:text-xl">
                  {" "}
                  REST API
                </span>
              </div>
            </a>
          </div>
          <p className="mt-3 ml-3 text-sm leading-8 text-zinc-600 dark:text-slate-500">
            *{t("sorryNoIos")}
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-xl sm:mt-24 lg:ml-10 lg:mr-1 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <AppScreenshotCard className="hidden sm:block" lang={t("lang")} />
            {/* On mobile devices, hover effect may not be visible, hence use scroll effect instead */}
            <AppScreenshotCardScroll
              className="sm:hidden block"
              lang={t("lang")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
