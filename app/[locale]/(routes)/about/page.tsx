"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from '@/lib/i18n/client';
import { useParams } from 'next/navigation';
import { Icon } from '@iconify/react'

export default function AboutPage() {
  const [indiceActual, setIndiceActual] = useState(0);
  const [sentences] = useState<Array<string>>(["about.carousel_1", "about.carousel_2", "about.carousel_3", "about.carousel_4"]);
  const params = useParams();
  const locale = params.locale as string;
  const { t } = useTranslation(locale);


  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % sentences.length);
    }, 2500); 

    return () => clearInterval(intervalo);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center font-sans">
      <section className="relative  w-full h-[55vh] md:h-[65vh] lg:h-[75vh]">

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
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white drop-shadow-lg text-shadow-lg/30 tracking-tight">
              {t("about.title")}
            </h1>
            
            <div className="w-16 sm:w-20 h-1 bg-[#7cb44c] mx-auto rounded-full" />
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
              {t("about.subtitle")}
            </p>
          </div>
        </div>

      </section>

      <section className="flex flex-col lg:flex-row w-full items-center px-4 sm:px-8 mt-4 md:mt-0 lg:px-32 mx-auto">
        <div className="w-full lg:w-1/2 lg:pr-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center items-center">
            <div className="px-4 py-2 bg-blue-100 shadow-lg shadow-blue-500/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium flex items-center gap-2 w-full justify-center">
              <Icon icon="mdi:robot" width="20" height="20" />
              <span>AI-powered</span>
            </div>

            <div className="px-4 py-2 bg-purple-100 shadow-lg shadow-purple-500/50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium flex items-center gap-2 w-full justify-center">
              <Icon icon="mdi:palette" width="20" height="20" />
              <span>UI/UX</span>
            </div>

            <div className="px-4 py-2 bg-green-100 shadow-lg shadow-green-500/50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium flex items-center gap-2 w-full justify-center">
              <Icon icon="mdi:code-tags" width="20" height="20" />
              <span>Software Engineering</span>
            </div>

            <div className="px-4 py-2 bg-cyan-100 shadow-lg shadow-cyan-500/50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium flex items-center gap-2 w-full justify-center">
              <Icon icon="mdi:cloud" width="20" height="20" />
              <span>Cloud Computing</span>
            </div>

            <div className="px-4 py-2 bg-orange-100 shadow-lg shadow-orange-500/50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium flex items-center gap-2 w-full justify-center">
              <Icon icon="mdi:chart-line" width="20" height="20" />
              <span>Data Analytics</span>
            </div>

            <div className="px-4 py-2 bg-red-100 shadow-lg shadow-red-500/50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium flex items-center gap-2 w-full justify-center">
              <Icon icon="mdi:shield-lock" width="20" height="20" />
              <span>Cybersecurity</span>
            </div>

          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pr-8 flex items-center justify-center">
          <div className="relative min-h-62.5 w-full">
            {sentences.map((sentence, idx) => (
              <div key={idx} className={`absolute top-0 left-0 w-full  h-full flex items-center justify-center transition-opacity duration-700 ${
                idx === indiceActual ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}>
                <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 dark:text-gray-100 leading-relaxed mb-6 drop-shadow-lg text-shadow-lg/10">
                  {t(sentence)}
                </p>
              </div>
            ))}
            
          </div>

        </div>
      </section>

      <section className="relative w-full h-[55vh] md:h-[65vh] lg:h-[75vh]">
        <div className="flex flex-col md:flex-row h-full">
          <div className="flex-1 p-6 md:p-8 flex flex-col text-center max-w-4xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              Un equipo de talla mundial
            </h2> 

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base ">
              En BeInnovate contamos con un equipo de profesionales altamente capacitados y apasionados por la tecnología. Nuestros colaboladores se encuentran en diferentes partes de mundo, lo que nos permite tener una perspectiva global y diversa. 
            </p>

          </div>
          <div className="relative w-full md:w-3/5 lg:w-3/5 shrink-0" >
            <div className="relative aspect-video md:aspect-auto md:h-full w-full rounded-lg overflow-hidden">
              <Image
                src="/background/about_map.png"
                alt="BeInnovate"
                fill
                className="w-full h-full object-cover object-center"
                priority={false}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
            </div>
          </div>

        </div>
      </section>

      <section className="flex flex-col lg:flex-row w-full px-4 sm:px-8 lg:px-32 mx-auto py-12">
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
          
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow-lg tracking-tight">
            {t("about.mission_title")}
          </h3>
          
          <div className="w-16 sm:w-20 h-1 bg-[#7cb44c] mx-auto rounded-full" />
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl  max-w-2xl mx-auto leading-relaxed px-2">
            {t("about.mission_desc")}
          </p>
        </div>

        <div className="block md:hidden w-100 md:w-150 sm:w-150 h-1 my-4.5 bg-[#008db0] mx-auto rounded-full shadow-2xl shadow-cyan-500/50" />
        
        
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5 md:space-y-6">
          
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow-lg tracking-tight">
            {t("about.vision_title")}
          </h3>
          
          <div className="w-16 sm:w-20 h-1 bg-[#7cb44c] mx-auto rounded-full" />
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl  max-w-2xl mx-auto leading-relaxed px-2">
            {t("about.vision_desc")}
          </p>
        </div>

      </section>

      {/* <div className="w-full px-4 sm:px-8 lg:px-32 mx-auto py-12">
        Los jefazos
      </div> */}
    </main>
  )
}