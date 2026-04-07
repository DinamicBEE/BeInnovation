import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, Locale } from '@/lib/i18n/config';

function getLocale(request: NextRequest): Locale {

    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value as Locale;

    if (cookieLocale && locales.includes(cookieLocale)) {
        return cookieLocale;
    }

    const acceptLanguage = request.headers.get('accept-language');

    if (acceptLanguage) {
        const preferredLocale = acceptLanguage.split(',')[0].split('-')[0] as Locale;
        if (locales.includes(preferredLocale)) {
        return preferredLocale;
        }
    }

    return defaultLocale;
}

export function middleware(request: NextRequest) {
    
  const pathname = request.nextUrl.pathname;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  const response = NextResponse.redirect(request.nextUrl);
  response.cookies.set('NEXT_LOCALE', locale);
  
  return response;
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|json)).*)',
  ],
};