"use client";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { useTranslation } from "react-i18next";

const featuredTestimonial = {
  body: "the internal design is pretty sejuk mata memandang this app can definetely upgrade where user can read quran and zikir daily so they dont have to install so many apps well done!!!  ",
  author: {
    name: "izzah yusra",
    rating: 5,
    imageUrl: "https://bucket.waktusolat.app/pp_izzah.jpg",
  },
};
const testimonials = [
  [
    [
      {
        body: "Satisfied using this app. Accurate as per azan from nearby mosque and surau. Thank you developer. Keep up the good work.. May you be duly rewarded",
        author: {
          name: "Amiruddin Khwaja Kamaluddin",
          rating: 5,
          imageUrl: "https://bucket.waktusolat.app/pp_amiruddin.png",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Clean Fluttery goodness! Hats off to the dev. Maybe JAKIM should learn a thing or two from you.",
        author: {
          name: "Abdullah Mubarak",
          rating: 5,
          imageUrl: "https://bucket.waktusolat.app/pp_abdullah.jpg",
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "suara azan yg sedap dan waktu yg tepat...ok mantap",
        author: {
          name: "Noor Azizi",
          rating: 5,
          imageUrl: "https://bucket.waktusolat.app/pp_noor_azizi.png",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Terbaik waktu solat yg tepat",
        author: {
          name: "Siti Aishah",
          rating: 5,
          imageUrl: "https://bucket.waktusolat.app/pp_s.png",
        },
      },
      {
        body: "Best apps for people who are looking for straight forward solat time. Not fussy like some of app that load unnecessary thing every time you on it",
        author: {
          name: "Mohd Rizal",
          rating: 5,
          imageUrl: "https://bucket.waktusolat.app/pp_rizal.jpg",
        },
      },
      // More testimonials...
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Testimonial = () => {
  const { t } = useTranslation("reviews");

  return (
    <div className="relative isolate bg-slate-100 dark:bg-zinc-900 pb-32 pt-24 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl sm:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight dark:text-cyan-500 text-cyan-600">
            {t("reviewTitle")}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-slate-300 sm:text-4xl">
            {t("reviewSubtitle")}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-zinc-900 dark:text-slate-300 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-slate-100 dark:bg-zinc-800 transition shadow-lg hover:shadow-xl ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-zinc-900 dark:text-slate-300 sm:p-12 sm:text-xl sm:leading-8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <Image
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={featuredTestimonial.author.imageUrl}
                width={120}
                height={120}
                alt=""
              />
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {Array(featuredTestimonial.author.rating)
                    .fill()
                    .map(function (v, i) {
                      return (
                        <IoIosStar
                          key={i}
                          className="inline-block w-4 h-4 text-cyan-400"
                        />
                      );
                    })}
                </div>
              </div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.name}
                      className="rounded-2xl bg-slate-100 dark:bg-zinc-800 p-6 transition shadow-lg hover:shadow-xl ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-zinc-900 dark:text-slate-300">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <Image
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          width={120}
                          height={120}
                          alt=""
                        />
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400">
                            {Array(testimonial.author.rating)
                              .fill()
                              .map(function (v, i) {
                                return (
                                  <IoIosStar
                                    key={i}
                                    className="inline-block w-4 h-4 text-cyan-400"
                                  />
                                );
                              })}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm leading-8 text-zinc-600 dark:text-slate-500 text-center">
          *{t("reviewSource")}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
