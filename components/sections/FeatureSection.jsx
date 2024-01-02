// import DARKDEMOPIC from "@/public/darkdemo.png";
// import LIGHTDEMOPIC from "@/public/lightdemo.png";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const features = [
  {
    name: "Sleek Design.",
    description:
      "Designed from the the ground up to be simple and pleasing to the eye.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Reliable.",
    description: "Data is taken from the official local authority",
    icon: ArrowPathIcon,
  },
  {
    name: "We are open source.",
    description: "Check the code yourself on Github and start contributing.",
    icon: Cog6ToothIcon,
  },
  {
    name: "More features.",
    description: "More features will be added in the future. Stay tuned!",
    icon: ServerIcon,
  },
];

const Feature = () => {
  return (
    <section
      id="feature"
      className="bg-slate-100 dark:bg-zinc-900 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 dark:text-cyan-500 text-cyan-600">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-800 dark:text-slate-200 sm:text-4xl">
            &quot;Hurry to the prayer. Hurry to success&quot;
          </p>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Feature packed while keeping the design clean and minimal
          </p>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 dark:text-gray-300 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-cols-4 xl:gap-x-8 xl:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-zinc-900 dark:text-slate-200">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-cyan-600 dark:text-cyan-500"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Feature;
