"use client";

import LogoLoop from '@/components/react-bits/LogoLoop/LogoLoop';
import Image from "next/image";
import { LOGOS } from "./const/icons"
import Clients from './Clients';
import ContactForm from './Form';


export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center font-sans">
      
      <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">

        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/background/background_3.png"
            alt="BeInnovate"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority={false}
          />
          {/* Capa de superposición para mejorar legibilidad */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="flex flex-col items-center gap-8 absolute top-3/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

          <h1 className="text-8xl font-bold text-white drop-shadow-lg">
            Contáctenos
          </h1>

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