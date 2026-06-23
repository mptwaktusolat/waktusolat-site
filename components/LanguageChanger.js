'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';
import { GrLanguage } from "react-icons/gr";

const supportedLocales = ['en', 'ms'];
const fallbackLocale = 'ms';

export default function LanguageChanger({ className = "" }) {
    const params = useParams();
    const currentLocale = supportedLocales.includes(params?.locale)
        ? params.locale
        : fallbackLocale;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = () => {
        const newLocale = currentLocale === 'en' ? 'ms' : 'en';

        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = '; expires=' + date.toUTCString();
        document.cookie = `i18next=${newLocale};expires=${expires};path=/`;

        const segments = currentPathname.split('/');
        if (supportedLocales.includes(segments[1])) {
            segments[1] = newLocale;
            router.push(segments.join('/'));
        } else {
            router.push(`/${newLocale}${currentPathname}`);
        }

        router.refresh();
    };

    return (
        <button
            type="button"
            title={`Toggle language: Current: ${currentLocale}`}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`Toggle language: Current: ${currentLocale}`}
            className={`p-2 rounded-md hover:scale-110 active:scale-100 duration-200 text-zinc-900 dark:text-slate-200 text-2xl font-bold h-6 w-6 ${className}`}
            onClick={handleChange}
        >
            <GrLanguage />
        </button>

    );
}