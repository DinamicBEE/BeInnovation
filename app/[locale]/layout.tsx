import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { locales } from "@/lib/i18n/config";
import WhatsAppButton from "@/components/ui/whatsAppButton";

const openSans = Open_Sans({subsets:['latin'],  weight: ['400', '700']})

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Be Innovate",
  description: "Somos una empresa multicultural especializada en la innovación, desarrollo e integración de soluciones tecnológicas a la medida.",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} className={`${openSans.className} antialiased`}>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
