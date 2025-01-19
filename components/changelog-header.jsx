import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function ChangelogHeader(props) {
  const { version, date, hijriDate, githubSlug, isLatest } = props;

  return (
    <>
      <h2
        id={`${version}`}
        className="group/item text-2xl font-bold mt-10 mb-5 sm:text-4xl lg:text-4xl"
      >
        <a href={`#${version}`}>
          <div className="inline font-bold text-teal-600">#</div>
        </a>{" "}
        Version {version}{" "}
        <span className="inline-block text-base opacity-50">{date}</span>
        {hijriDate && (
          <span className="inline-block text-base opacity-50">
            &nbsp;| {hijriDate}
          </span>
        )}
        <Link
          href={`https://github.com/mptwaktusolat/app_waktu_solat_malaysia/releases/tag/${props.githubSlug}`}
          className="inline-flex space-x-6 invisible group-hover/item:visible"
        >
          <span className="inline-flex items-baseline px-3 py-1 text-xs font-semibold leading-6 text-cyan-600 dark:text-cyan-400">
            <span>GitHub </span>
            <span>&nbsp;&nbsp;</span>
            <span>
              <FaExternalLinkAlt />
            </span>
          </span>
        </Link>
      </h2>
    </>
  );
}
