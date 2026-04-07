"use client";

import LogoLoop from '@/components/react-bits/LogoLoop/LogoLoop';
import Image from "next/image";
import { LOGOS } from "./const/icons"
import Clients from './Clients';
import ContactForm from './Form';
import { useTranslation } from '@/lib/i18n/client';
import { useParams } from 'next/navigation';


export default function ContactPage() {

  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale);

  return (
    <div className="flex flex-col items-center justify-center font-sans">
      
      <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">

        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/background/background_3.png"
            alt="BeInnovate"
            fill
            className="object-cover"
            priority={false}
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
        </div>


         <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white drop-shadow-lg tracking-tight">
                {t("contact.title")}
              </h1>
              
              <div className="w-16 sm:w-20 h-1 bg-[#7cb44c] mx-auto rounded-full" />
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
                {t("contact.subtitle")}
              </p>
            </div>
          </div>

      </div>

      <Clients />

      <ContactForm />

      <div className="container mx-auto px-4" style={{ position: 'relative', overflow: 'hidden'}}>
        <LogoLoop
          logos={LOGOS}
          speed={25}
          direction="left"
          logoHeight={80}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />

      </div>

    </div>
  )
}