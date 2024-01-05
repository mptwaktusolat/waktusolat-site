'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { GrLanguage } from "react-icons/gr";

export default function LanguageChanger({ className = "" }) {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = e => {
        const newLocale = currentLocale === 'en' ? 'ms' : 'en';

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = '; expires=' + date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // redirect to the new locale path
        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }

        router.refresh();
    };

    return (
        <button
            type="button"
            title='Toggle language: Current: ${currentLocale}'
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`Toggle language: Current: ${currentLocale}`}
            className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200 text-zinc-900 dark:text-slate-200 text-2xl font-bold ${className}`}
            onClick={handleChange}
        >
            <GrLanguage />
        </button>

    );
}