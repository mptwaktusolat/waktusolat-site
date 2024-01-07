"use client";
import {
  ArrowPathIcon,
  SparklesIcon,
  BookOpenIcon,
  HeartIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const featureIcons = [SparklesIcon, HeartIcon, BookOpenIcon, ArrowPathIcon];

const Feature = () => {
  const { t } = useTranslation("features");

  const i18nFeatures = t("features", { returnObjects: true });

  return (
    <section
      id="feature"
      className="bg-slate-100 dark:bg-zinc-900 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 dark:text-cyan-500 text-cyan-600">
            {t("featureTitle")}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-slate-200 sm:text-4xl">
            &quot;{t("featureBody")}&quot;
          </p>

          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            {t("featureDescription")}
          </p>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 dark:text-gray-300 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-4 xl:gap-x-8 xl:gap-y-16">
          {i18nFeatures.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-zinc-900 dark:text-slate-200">
                  <Icon
                    className="absolute left-1 top-1 h-5 w-5 text-cyan-600 dark:text-cyan-500"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>{" "}
                <dd className="inline">{feature.description}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default Feature;
