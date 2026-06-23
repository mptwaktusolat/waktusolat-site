const i18nConfig = {
    supportedLngs: ['en', 'ms'],
    fallbackLng: 'ms',
    defaultNS: 'hero',
    ns: ['hero', 'reviews', 'features'],
    // Recommended: works on all platforms including Vercel/serverless
    resourceLoader: (language, namespace) =>
        import(`./app/i18n/locales/${language}/${namespace}.json`),
}

export default i18nConfig