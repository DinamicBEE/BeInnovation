'use client';

import { useEffect } from 'react';
import i18next from 'i18next';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

const runsOnServerSide = typeof window === 'undefined';

i18next
    .use(initReactI18next)
    .use(
        resourcesToBackend(
            (language:string, namespace:string) =>
                import(`@/locales/${language}/${namespace}.json`)
        )
    )
    .init({
        lng: 'es',
        fallbackLng: 'es',
        ns: ['common'],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false,
        },
    });

export function useTranslation(locale: string) {
    const { t, i18n } = useTranslationOrg();

    useEffect(() => {
        if (i18n.resolvedLanguage !== locale) {
        i18n.changeLanguage(locale);
        }
    }, [locale, i18n]);

    return { t, i18n };
}