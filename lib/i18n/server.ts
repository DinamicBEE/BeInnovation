import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';

export async function initI18next(locale:string){
    const i18Instance = createInstance();

    await i18Instance
        .use(initReactI18next)
        .use(
            resourcesToBackend(
                (language: string, namespace: string) =>
                import(`@/locales/${language}/${namespace}.json`)
            )
        )
        .init({
            lng: locale,
            fallbackLng: 'es',
            ns: ['common'],
            defaultNS: 'common',
            interpolation: {
                escapeValue: false,
            },
        });

    return i18Instance;
}