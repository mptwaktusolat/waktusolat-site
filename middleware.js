import i18nConfig from './i18n.config'
import { createMiddleware } from 'next-i18next/middleware';

export const middleware = createMiddleware(i18nConfig)

// applies this middleware only to files in the app directory
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)'],
}